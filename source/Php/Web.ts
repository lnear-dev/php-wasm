import { PhpBase } from "./Base";
import PhpBinary from "php-web";
import { commitTransaction, startTransaction } from "../common/webTransactions";
import { Deferred } from "../common/Deferred";
export * from "./ScriptRunner";

export class PhpWeb extends PhpBase {
	constructor(args = {}) {
		super(PhpBinary, args);
	}

	startTransaction() {
		return startTransaction(this);
	}

	commitTransaction(readOnly = false) {
		return commitTransaction(this, readOnly);
	}

	async refresh() {
		const [code, php] = await Promise.all([super.refresh(), this.binary]);
		await navigator.locks.request("php-wasm-fs-lock", () => {
			return new Promise<void>((accept, reject) => {
				php.FS.syncfs(true, (error) => {
					if (error) reject(error);
					else accept();
				});
			});
		});
		return code;
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

			await (this.autoTransaction && !readOnly
				? this.startTransaction()
				: Promise.resolve());

			do {
				const [callback, params, accept, reject] = this.queue.shift();
				const run = callback(...params);
				run.then(accept).catch(reject);
				await run;
			} while (this.queue.length);

			await (this.autoTransaction
				? this.commitTransaction(readOnly)
				: Promise.resolve());
		});

		return deferred.promise;
	}
}
