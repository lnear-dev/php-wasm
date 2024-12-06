import { phpVersion, phpVersionFull } from "config";
import { OutputBuffer } from "../common/OutputBuffer";
import { fsOps } from "../common/fsOps";
import { resolveDependencies } from "../common/resolveDependencies";
import { Deferred } from "@/common/Deferred";

const STR = "string";
const NUM = "number";

export class PhpBase extends EventTarget {
	queue: any[];
	onerror: (event: Event) => void;
	onoutput: (event: Event) => void;
	onready: (event: Event) => void;
	encoder: TextEncoder;
	buffers: {
		stdin: any[];
		stdout: OutputBuffer;
		stderr: OutputBuffer;
	};

	autoTransaction: boolean;
	transactionStarted: boolean;
	shared: Record<string, any>;
	phpArgs: PhpBaseArgs;
	valueIndex: number;
	binary: Promise<PHPWasmModule>;

	static phpVersion: string = phpVersion;
	static phpVersionFull: string = phpVersionFull;
	constructor(
		PhpBinary: new (args: PhpBaseArgs) => Promise<PHPWasmModule>,
		args: PhpBaseArgs = {}
	) {
		super();

		this.queue = [];

		this.onerror = function () {};
		this.onoutput = function () {};
		this.onready = function () {};

		this.encoder = new TextEncoder();
		this.buffers = {
			stdin: [],
			stdout: new OutputBuffer(this, "output", -1),
			stderr: new OutputBuffer(this, "error", -1),
		};

		Object.freeze(this.buffers);

		this.autoTransaction =
			"autoTransaction" in args ? args.autoTransaction : true;
		this.transactionStarted = false;

		this.shared = args.shared = "shared" in args ? args.shared : {};

		this.phpArgs = args;

		const defaults: PhpBaseArgs = {
			stdin: () => this.buffers.stdin.shift() ?? null,
			stdout: (byte) => this.buffers.stdout.push(byte),
			stderr: (byte) => this.buffers.stderr.push(byte),

			postRun: () => {
				const event = new CustomEvent("ready");
				this.onready(event);
				this.dispatchEvent(event);
			},
		};

		const fixed = { onRefresh: new Set() };
		const phpSettings = (globalThis as any).phpSettings ?? {};
		const userLocateFile = args.locateFile || (() => undefined);

		const files = args.files || [];

		const {
			files: extraFiles,
			libs,
			urlLibs,
		} = resolveDependencies(args.sharedLibs, this);

		args.locateFile = (path: string, directory: string) => {
			let located = userLocateFile(path, directory);
			if (located !== undefined) {
				return located;
			}
			if (urlLibs[path]) {
				return urlLibs[path];
			}
		};

		this.valueIndex = 0;

		this.binary = new PhpBinary(
			Object.assign({}, defaults, phpSettings, args, fixed)
		).then(async (php) => {
			php.ccall("pib_storage_init", NUM, [], []);

			if (!php.FS.analyzePath("/preload").exists) {
				php.FS.mkdir("/preload");
			}

			await Promise.all(
				files
					.concat(extraFiles)
					.map(
						(fileDef: ResolvedFile) =>
							new Promise<void>((accept) =>
								php.FS.createPreloadedFile(
									fileDef.parent,
									fileDef.name,
									fileDef.url,
									true,
									false,
									accept
								)
							)
					)
			);

			const iniLines = PhpBase.iniLines(libs);

			args.ini && iniLines.push(args.ini.replace(/\n\s+/g, "\n"));

			php.FS.writeFile("/php.ini", iniLines.join("\n") + "\n");

			await php.ccall("pib_init", NUM, [], [], { async: true });

			return php;
		});
	}
	static iniLines(
		libs: (LibDef | { name: string; url: string | URL; ini: boolean })[]
	) {
		return libs.map((lib) => {
			if (typeof lib === "string" || lib instanceof URL) {
				return `extension=${lib}`;
			} else if (
				typeof lib === "object" &&
				(lib as { name: string; url: string | URL; ini: boolean }).ini
			) {
				return `extension=${String(lib.url).split("/").pop()}`;
			}
		});
	}

	inputString(byteString: string) {
		this.input(this.encoder.encode(byteString));
	}

	input(items: Uint8Array) {
		this.buffers.stdin.push(...items);
	}

	flush() {
		this.buffers.stdout.flush();
		this.buffers.stderr.flush();
	}

	async tokenize(phpCode: string) {
		return this.binary.then((php) =>
			php.ccall("pib_tokenize", STR, [STR], [phpCode])
		);
	}

	startTransaction() {
		return Promise.resolve();
	}

	commitTransaction(_readOnly = false) {
		return Promise.resolve();
	}

	async _enqueue(
		callback: (...args: any[]) => Promise<any>,
		params: any[] = [],
		readOnly = false
	) {
		const deferred = new Deferred();
		this.queue.push([callback, params, deferred.resolve, deferred.reject]);

		if (!this.queue.length) {
			return;
		}

		(await (this.autoTransaction && !readOnly))
			? this.startTransaction()
			: Promise.resolve();

		while (this.queue.length) {
			const [callback, params, accept, reject] = this.queue.shift();
			await callback(...params)
				.then(accept)
				.catch(reject);
		}

		(await this.autoTransaction)
			? this.commitTransaction(readOnly)
			: Promise.resolve();

		return deferred.promise;
	}

	run(phpCode: string) {
		return this._enqueue((phpCode) => this._run(phpCode), [phpCode]);
	}

	on(
		event: "output" | "error" | "ready",
		listener: (event: CustomEvent<string[]>) => void
	) {
		super.addEventListener(event, listener as EventListener);
	}

	async _run(phpCode: string) {
		const call = (await this.binary).ccall(
			"pib_run",
			NUM,
			[STR],
			[`?>${phpCode}`],
			{ async: true }
		);

		return call.finally(() => this.flush());
	}

	exec(phpCode: string) {
		return this._enqueue((phpCode) => this._exec(phpCode), [phpCode]);
	}

	async _exec(phpCode: string) {
		const call = (await this.binary).ccall(
			"pib_exec",
			STR,
			[STR],
			[phpCode],
			{ async: true }
		);

		return call.finally(() => this.flush());
	}

	async x(fragments: string[], ...values: any[]) {
		const names = [];
		const phpModule = await this.binary;

		if (phpModule.hasVrzno) {
			for (const value of values) {
				const name = `___value__${this.valueIndex++}`;
				this.shared[name] = value;
				names.push(name);
			}

			let code = "";

			fragments = [...fragments];

			while (fragments.length || names.length) {
				if (fragments.length) code += fragments.shift();

				if (names.length) {
					code += `(vrzno_shared('${names.shift()}'))`;
				}
			}

			code = `vrzno_zval( ${code} );`;

			return phpModule.zvalToJS!(await this.exec(code));
		} else {
			const encoded = values.map((value) => JSON.stringify(value));

			fragments = [...fragments];

			let code = "";

			while (fragments.length || names.length) {
				if (fragments.length) code += fragments.shift();

				if (encoded.length) {
					code += `(json_decode('${encoded.shift()}'))`;
				}
			}

			return this.exec(code);
		}
	}

	// async r(fragments, ...values) {
	async r(fragments: string[], ...values: any[]) {
		const names = [];
		const phpModule = await this.binary;

		if (phpModule.hasVrzno) {
			for (const value of values) {
				const name = `___value__${this.valueIndex++}`;
				this.shared[name] = value;
				names.push(name);
			}

			let code = "";

			fragments = [...fragments];

			while (fragments.length || names.length) {
				if (fragments.length) code += fragments.shift();

				if (names.length) {
					code += `(vrzno_shared('${names.shift()}'))`;
				}
			}

			return this.run(code);
		} else {
			const encoded = values.map((value) => JSON.stringify(value));

			fragments = [...fragments];

			let code = "";

			while (fragments.length || names.length) {
				if (fragments.length) code += fragments.shift();

				if (encoded.length) {
					code += `(json_decode('${encoded.shift()}'))`;
				}
			}

			return this.run(code);
		}
	}

	async refresh() {
		const php = await this.binary;

		for (const callback of php.onRefresh ?? []) {
			callback();
		}

		Object.keys(this.shared).forEach((key) => delete this.shared[key]);

		return php.ccall("pib_refresh", NUM, [], [], { async: true });
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
		options: WriteFileOptions
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
}
