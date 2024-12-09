import { PhpCgiBase } from "./Base";
import { PhpBase } from "../Cli/Base";
import { commitTransaction, startTransaction, resolveDependencies, Deferred } from "../common";

const NUM = "number";

export class PhpCgiWebBase extends PhpCgiBase {
	initialized = false;
	startTransaction() {
		return startTransaction(this);
	}

	commitTransaction(readOnly = false) {
		return commitTransaction(this, readOnly);
	}

	async _beforeRequest() {
		if (!this.initialized) {
			const php = await this.binary;
			await this.loadInit(php);
			await navigator.locks.request("php-wasm-fs-lock", () => {
				return new Promise<void>((accept, reject) =>
					php.FS.syncfs(true, (err) => {
						if (err) reject(err);
						else accept();
					})
				);
			});
		}

		this.initialized = true;
	}

	async _afterRequest() {
		if (this.phpArgs.staticFS) {
			return;
		}

		const php = await this.binary;

		await navigator.locks.request("php-wasm-fs-lock", () => {
			return new Promise<void>((accept, reject) =>
				php.FS.syncfs(false, (err) => {
					if (err) reject(err);
					else accept();
				})
			);
		});
	}

	refresh() {
		const { files, libs, urlLibs } = resolveDependencies(
			this.sharedLibs,
			this
		);

		const userLocateFile = this.phpArgs.locateFile || (() => undefined);

		const locateFile = (path: any) => {
			let located = userLocateFile(path);
			if (located !== undefined) {
				return located;
			}
			if (urlLibs[path]) {
				return urlLibs[path];
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

		return (this.binary = navigator.locks.request(
			"php-wasm-fs-lock",
			async () => {
				const php = await new this.PHP(phpArgs);

				await php.ccall("pib_storage_init", NUM, [], [], {
					async: true,
				});

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
								fileDef.url,
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

				await new Promise<void>((accept, reject) => {
					php.FS.syncfs(true, (error) => {
						if (error) reject(error);
						else accept();
					});
				});

				await php.ccall("wasm_sapi_cgi_init", "number", [], [], {
					async: true,
				});

				await this.loadInit(php);

				return php;
			}
		));
	}

	async _enqueue(
		callback: (...args: any[]) => Promise<any>,
		params: any[] = [],
		readOnly = false
	) {
		const deferred = new Deferred();
		this.queue.push([callback, params, deferred.resolve, deferred.reject]);

		navigator.locks.request("php-wasm-fs-lock", async () => {
			if (!this.queue.length) {
				return;
			}

			await (this.autoTransaction
				? this.startTransaction()
				: Promise.resolve());

			do {
				const [callback, params, accept, reject] = this.queue.shift();
				await callback(...params)
					.then(accept)
					.catch(reject);
				let lockChecks = 5;
				while (!this.queue.length && lockChecks--) {
					await new Promise((a) => setTimeout(a, 5));
				}
			} while (this.queue.length);

			await (this.autoTransaction
				? this.commitTransaction(readOnly)
				: Promise.resolve());
		});

		return deferred.promise;
	}
}
