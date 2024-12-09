import { phpVersion, phpVersionFull } from "config";
import { parseResponse } from "./parseResponse";
import { breakoutRequest } from "./breakoutRequest";
import { fsOps, resolveDependencies, Deferred } from "../common";
import { PhpBase } from "../Cli/Base";


const NUM = "number";
//*/
const putEnv = (php: PHPWasmModule, key: string, value: string) =>
	php.ccall(
		"wasm_sapi_cgi_putenv",
		"number",
		["string", "string"],
		[key, value]
	);
/*/
const putEnv = (php: PHPWasmModule, key: string, value: string) => {
	value = value ?? "";
	const len = php.lengthBytesUTF8(value) + 1;
	const loc = php._malloc(len);
	php.stringToUTF8(value, loc, len);

	const result = php.ccall(
		'wasm_sapi_cgi_putenv'
		, 'number'
		, ['string', 'number']
		, [key, loc]
	);

	php._free(loc);

	return result;
}
//*/

export class PhpCgiBase {
	docroot: string;
	prefix: string;
	exclude: string[];
	rewrite: (url: string) => string | { path: string; scriptName: string };
	entrypoint?: string;
	cookies: Map<string, string>;
	types: Record<string, string>;
	onRequest: (request: RequestLike, response: Response) => void;
	notFound: (request: RequestLike) => Response | string;
	sharedLibs: LibDef[];
	files: ResolvedFile[];
	phpArgs: PhpBaseArgs;

	autoTransaction: boolean;
	transactionStarted: boolean;
	maxRequestAge: number;
	staticCacheTime: number;
	dynamicCacheTime: number;
	vHosts: VHost[];
	env: Record<string, string>;

	php: any;
	input: any[];
	output: number[];
	error: number[];
	count: number;
	queue: any[];
	extraActions: Record<string, (self: PhpCgiBase, ...args: any[]) => any>;

	binary: Promise<PHPWasmModule>;

	public static phpVersion: string = phpVersion;
	public static phpVersionFull: string = phpVersionFull;
	protected static readonly requestTimes = new WeakMap();

	constructor(
		protected PHP: new (args: PhpBaseArgs) => Promise<PHPWasmModule>,
		{
			docroot = "",
			prefix = "/php-wasm",
			exclude = [],
			rewrite = (url) => url,
			entrypoint,
			cookies = new Map(),
			types = {},
			onRequest = (_request, _response) => { },
			notFound = (_request) => "",
			sharedLibs = [],
			files = [],
			autoTransaction = true,
			maxRequestAge = 0,
			staticCacheTime = 60_000,
			dynamicCacheTime = 0,
			vHosts = [],
			env = {},
			...args
		}: PhpCgiOptions = {}
	) {
		this.docroot = docroot;
		this.prefix = prefix;
		this.exclude = exclude;
		this.rewrite = rewrite;
		this.entrypoint = entrypoint;
		this.cookies = cookies;
		this.types = types;
		this.onRequest = onRequest;
		this.notFound = notFound;
		this.sharedLibs = sharedLibs;
		// this.files = files;
		this.files = [];
		this.phpArgs = args;

		this.autoTransaction = autoTransaction;
		this.transactionStarted = false;

		this.maxRequestAge = maxRequestAge;
		this.staticCacheTime = staticCacheTime;
		this.dynamicCacheTime = dynamicCacheTime;
		this.vHosts = vHosts;
		this.env = { ...env };

		this.php = null;
		this.input = [];
		this.output = [];
		this.error = [];
		this.count = 0;
		this.queue = [];
		this.extraActions = args.actions || {};

		this.binary = this.refresh();
	}

	async _enqueue(
		callback: (...args: any[]) => Promise<any>,
		params: any[] = [],
		_readOnly = false
	) {
		const deferred = new Deferred();
		this.queue.push([callback, params, deferred.resolve, deferred.reject]);

		if (!this.queue.length) {
			return;
		}

		while (this.queue.length) {
			const [callback, params, accept, reject] = this.queue.shift();
			await callback(...params)
				.then(accept)
				.catch(reject);
		}

		return deferred.promise;
	}

	refresh() {
		const { files, libs, urlLibs } = resolveDependencies(
			this.sharedLibs,
			this
		);

		const userLocateFile = this.phpArgs.locateFile || (() => undefined);

		const locateFile = (path: string, directory: string) => {
			let located = userLocateFile(path, directory);
			if (located !== undefined) {
				return located;
			}

			if (urlLibs[path]) {
				const entry = urlLibs[path];
				if (entry instanceof URL && entry.protocol === "file:") {
					return entry.pathname;
				}

				return String(entry);
			}
		};

		const phpArgs: PhpBaseArgs = {
			persist: [{ mountPath: "/persist" }, { mountPath: "/config" }],
			...this.phpArgs,
			stdin: () =>
				this.input ? String(this.input.shift()).charCodeAt(0) : null,
			stdout: (x) => this.output.push(x),
			stderr: (x) => this.error.push(x),
			locateFile,
		};

		return (this.binary = new this.PHP(phpArgs).then(async (php) => {
			await php.ccall("pib_storage_init", NUM, [], [], { async: true });

			if (!php.FS.analyzePath("/preload").exists) {
				php.FS.mkdir("/preload");
			}

			await Promise.all(
				this.files
					.concat(files)
					.map((fileDef) =>
						php.FS.createPreloadedFile(
							fileDef.parent,
							fileDef.name,
							userLocateFile(fileDef.url) ?? fileDef.url,
							true,
							false
						)
					)
			);

			const iniLines = PhpBase.iniLines(libs);

			this.phpArgs.ini &&
				iniLines.push(this.phpArgs.ini.replace(/\n\s+/g, "\n"));

			php.FS.writeFile("/php.ini", iniLines.join("\n") + "\n", {
				// encoding: "utf8",
			});

			await php.ccall("wasm_sapi_cgi_init", "number", [], [], {
				async: true,
			});

			await this.loadInit(php);

			return php;
		}));
	}

	async _beforeRequest() { }

	async _afterRequest() { }

	async request(request: RequestLike): Promise<Response> {
		const {
			url,
			method = "GET",
			get,
			post,
			contentType,
		} = await breakoutRequest(request);

		if (globalThis.caches) {
			const cache = await caches.open("static-v1");
			const cached = await cache.match(url);

			// this.maxRequestAge

			if (cached) {
				const cacheTime = Number(
					cached.headers.get("x-php-wasm-cache-time")
				);

				if (
					this.staticCacheTime > 0 &&
					this.staticCacheTime > Date.now() - cacheTime
				) {
					this.onRequest(request, cached);
					return cached;
				}
			}
		}

		const php = await this.binary;

		await this._beforeRequest();

		let docroot = this.docroot;
		let vHostEntrypoint,
			vHostPrefix = this.prefix;

		for (const { pathPrefix, directory, entrypoint } of this.vHosts) {
			if (pathPrefix === url.pathname.slice(0, pathPrefix.length)) {
				docroot = directory;
				vHostEntrypoint = entrypoint;
				vHostPrefix = pathPrefix;
				break;
			}
		}

		const rewrite = this.rewrite(url.pathname);

		let scriptName, path;

		if (typeof rewrite === "object") {
			scriptName = rewrite.scriptName;
			path = docroot + rewrite.path;
		} else {
			path =
				docroot +
				"/" +
				rewrite.slice((vHostPrefix || this.prefix).length);
			scriptName = path;
		}

		if (vHostEntrypoint) {
			scriptName = vHostPrefix + "/" + vHostEntrypoint;
		}

		let originalPath = url.pathname;

		const extension = path.split(".").pop();

		if (extension && extension !== "php" && extension !== "phar") {
			const aboutPath = php.FS.analyzePath(path);

			// Return static file
			if (aboutPath.exists && php.FS.isFile(aboutPath.object.mode)) {
				const response = new Response(
					// php.FS.readFile(path, { encoding: "binary", url }),
					php.FS.readFile(path, { encoding: "binary" }),
					{}
				);
				response.headers.append(
					"x-php-wasm-cache-time",
					new Date().getTime().toString()
				);
				if (extension in this.types) {
					response.headers.append(
						"Content-type",
						this.types[extension]
					);
				}
				if (globalThis.caches) {
					const cache = await caches.open("static-v1");
					cache.put(url, response.clone());
				}
				this.onRequest(request, response);
				return response;
			} else if (
				aboutPath.exists &&
				php.FS.isDir(aboutPath.object.mode) &&
				"/" !== originalPath[-1 + originalPath.length]
			) {
				originalPath += "/";
			}

			// Rewrite to index
			path = docroot + "/index.php";
		}

		// Ensure query parameters are preserved.
		originalPath += url.search;

		if (
			this.maxRequestAge > 0 &&
			Date.now() - PhpCgiBase.requestTimes.get(request) >
			this.maxRequestAge
		) {
			const response = new Response("408: Request Timed Out.", {
				status: 408,
			});
			this.onRequest(request, response);
			return response;
		}

		const aboutPath = php.FS.analyzePath(path);

		if (!aboutPath.exists) {
			const rawResponse = this.notFound
				? this.notFound(request)
				: "404 - Not Found.";

			if (rawResponse) {
				return rawResponse instanceof Response
					? rawResponse
					: new Response(rawResponse, { status: 404 });
			}
		}

		this.input = ["POST", "PUT", "PATCH"].includes(method)
			? post?.split("") ?? []
			: [];
		this.output = [];
		this.error = [];

		const selfUrl = new URL(globalThis.location.toString() || request.url);

		putEnv(php, "PHP_VERSION", phpVersion);
		putEnv(php, "PHP_INI_SCAN_DIR", `/config:/preload:${docroot}`);
		putEnv(php, "PHPRC", "/php.ini");

		for (const [name, value] of Object.entries(this.env)) {
			putEnv(php, name, value);
		}

		const protocol = selfUrl.protocol.slice(0, selfUrl.protocol.length - 1);

		putEnv(
			php,
			"SERVER_SOFTWARE",
			globalThis.navigator
				? globalThis.navigator.userAgent
				: globalThis.process
					? "Node " + globalThis.process.version
					: "Javascript - Unknown"
		);
		putEnv(php, "REQUEST_METHOD", method);
		putEnv(php, "REMOTE_ADDR", "127.0.0.1");
		putEnv(php, "HTTP_HOST", selfUrl.host);
		putEnv(php, "REQUEST_SCHEME", protocol);
		putEnv(php, "HTTPS", protocol === "https" ? "on" : "off");

		putEnv(php, "DOCUMENT_ROOT", docroot);
		putEnv(php, "REQUEST_URI", originalPath);
		putEnv(php, "SCRIPT_NAME", scriptName);
		putEnv(php, "SCRIPT_FILENAME", path);
		putEnv(php, "PATH_TRANSLATED", path);

		putEnv(php, "QUERY_STRING", get);
		putEnv(
			php,
			"HTTP_COOKIE",
			[...this.cookies.entries()].map((e) => `${e[0]}=${e[1]}`).join(";")
		);
		putEnv(php, "REDIRECT_STATUS", "200");
		if (contentType) {
			putEnv(php, "CONTENT_TYPE", contentType);
		}
		putEnv(php, "CONTENT_LENGTH", String(this.input.length));

		let exitCode = -1;

		try {
			exitCode = await php.ccall(
				"main",
				"number",
				["number", "string"],
				[this.input.length, path],
				{ async: true }
			);
		} catch (error) {
			console.error(error);
			const bar = `${"=".repeat(80)}\n\n`;
			const response = new Response(
				`500: Internal Server Error.
${bar}Stacktrace:
${(error as Error).stack}
${bar}STDERR:
${new TextDecoder().decode(new Uint8Array(this.error).buffer)}
${bar}STDOUT:
${new TextDecoder().decode(new Uint8Array(this.output).buffer)}
${bar}`,
				{ status: 500 }
			);

			this.onRequest(request, response);

			this.refresh();

			return response;
		} finally {
			if (exitCode === 0) {
				this._afterRequest();
			} else {
				console.warn(
					new TextDecoder().decode(new Uint8Array(this.output).buffer)
				);
				console.error(
					new TextDecoder().decode(new Uint8Array(this.error).buffer)
				);

				this.refresh();
			}
		}

		++this.count;

		const parsedResponse = parseResponse(this.output);

		let status = 200;

		for (const [name, value] of Object.entries(parsedResponse.headers)) {
			if (name === "Status") {
				status = parseInt(value.slice(0, 3));
			}
		}

		if (parsedResponse.headers["Set-Cookie"]) {
			const raw = parsedResponse.headers["Set-Cookie"];
			const semi = raw.indexOf(";");
			const equal = raw.indexOf("=");
			const key = raw.slice(0, equal);
			const value = raw.slice(1 + equal, -1 + semi - equal);

			this.cookies.set(key, value);
		}

		const headers = { ...parsedResponse.headers };

		// delete headers['Set-Cookie'];

		if (extension && extension in this.types) {
			// headers["Content-type"] = this.types[extension];
		} else {
			headers["Content-type"] =
				headers["Content-type"] ?? "text/html; charset=utf-8";
		}

		if (parsedResponse.headers.Location) {
			headers.Location = parsedResponse.headers.Location;
		}

		const response = new Response(parsedResponse.body || "", {
			headers,
			status,
			//@ts-ignore
			url,
		});

		this.onRequest(request, response);

		return response;
	}

	analyzePath(path: string) {
		return this._enqueue(fsOps.analyzePath, [this.binary, path]);
	}

	readdir(path: string) {
		return this._enqueue(fsOps.readdir, [this.binary, path]);
	}

	readFile(path: string, options: ReadFileOptions) {
		return this._enqueue(fsOps.readFile, [this.binary, path, options]);
	}

	stat(path: string) {
		return this._enqueue(fsOps.stat, [this.binary, path]);
	}

	mkdir(path: string) {
		return this._enqueue(fsOps.mkdir, [this.binary, path]);
	}

	rmdir(path: string) {
		return this._enqueue(fsOps.rmdir, [this.binary, path]);
	}

	rename(path: string, newPath: string) {
		return this._enqueue(fsOps.rename, [this.binary, path, newPath]);
	}

	writeFile(
		path: string,
		data: string | ArrayBufferView,
		options: WriteFileOptions = {}
	) {
		return this._enqueue(fsOps.writeFile, [
			this.binary,
			path,
			data,
			options,
		]);
	}

	unlink(path: string) {
		return this._enqueue(fsOps.unlink, [this.binary, path]);
	}

	async putEnv(name: string, value: string) {
		return (await this.binary).ccall(
			"wasm_sapi_cgi_putenv",
			"number",
			["string", "string"],
			[name, value]
		);
	}

	async getSettings() {
		return {
			docroot: this.docroot,
			maxRequestAge: this.maxRequestAge,
			staticCacheTime: this.staticCacheTime,
			dynamicCacheTime: this.dynamicCacheTime,
			vHosts: this.vHosts,
		};
	}

	setSettings({
		docroot,
		maxRequestAge,
		staticCacheTime,
		dynamicCacheTime,
		vHosts,
	}: Partial<PhpCgiOptions>) {
		this.docroot = docroot ?? this.docroot;
		this.maxRequestAge = maxRequestAge ?? this.maxRequestAge;
		this.staticCacheTime = staticCacheTime ?? this.staticCacheTime;
		this.dynamicCacheTime = dynamicCacheTime ?? this.dynamicCacheTime;
		this.vHosts = vHosts ?? this.vHosts;
	}

	async getEnvs() {
		return { ...this.env };
	}
	setEnvs(env: Record<string, string>) {
		for (const key of Object.keys(this.env)) this.env[key] = "";
		Object.assign(this.env, env);
	}

	async storeInit() {
		const settings = await this.getSettings();
		const env = await this.getEnvs();
		await this.writeFile(
			"/config/init.json",
			JSON.stringify({ settings, env }, null, 4)
			// { encoding: "utf8" }
		);
	}

	async loadInit(binary: Promise<PHPWasmModule> | PHPWasmModule) {
		const initPath = "/config/init.json";
		const bin =
			binary instanceof Promise
				? binary
				: new Promise<PHPWasmModule>((accept) => accept(binary));
		const check = await fsOps.analyzePath(bin, initPath);

		if (!check.exists) {
			return;
		}

		const initJson = await fsOps.readFile(bin, initPath, {
			encoding: "utf8",
		});
		const init = JSON.parse(initJson.toLocaleString() || "{}");
		const { settings, env } = init;

		this.setSettings(settings);
		this.setEnvs(env);
	}
}
