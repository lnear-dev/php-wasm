import { PhpBase } from "./Base";
import PhpBinary from "php-node";
import path from "node:path";
import url from "node:url";
import fs from "node:fs";

export class PhpNode extends PhpBase {
	constructor(args = {}) {
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

		super(PhpBinary, { locateFile, ...args });
	}
}
