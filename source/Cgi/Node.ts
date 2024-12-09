import { PhpCgiBase } from "./Base";
import PHP from "php-cgi-node";
import path from "node:path";
import url from "node:url";
import fs from "node:fs";
import { IncomingMessage } from "node:http";
import { TLSSocket } from "node:tls";
export class PhpCgiNode extends PhpCgiBase {
	constructor(args: Partial<PhpCgiOptions> = {}) {
		const locateFile = (name: string, dir: string) => {
			if (name.slice(0, 7) === "file://") {
				name = new URL(name).pathname;
			}

			if (dir === "") {
				if (typeof __dirname === "undefined") {
					dir = path.dirname(url.fileURLToPath(import.meta.url));
				} else {
					dir = __dirname;
				}
			}

			const located = path.resolve(path.format({ dir, name }));

			if (fs.existsSync(located)) {
				return located;
			}
		};

		super(PHP, {
			locateFile,
			...args,
		});
	}

	async request(request: IncomingMessage & RequestLike): Promise<Response> {
		const protocol = request.socket instanceof TLSSocket ? 'https://' : 'http://';
		const host = request.headers['host'];
		if (!host) throw new Error('Host header is missing');

		request.url = new URL(request.url, protocol + host).toString();

		const response = await super.request(request);

		console.error(`[${new Date().toLocaleString()}] [HTTP ${response.status}] ${String(request.method).padStart(5, ' ')} ${request.url}`);

		return response;
	}
}
