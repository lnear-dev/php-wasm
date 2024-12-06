import { PhpBase } from "./Base";
import PhpBinary from "php-shell";

export class PhpShell extends PhpBase {
	constructor(args = {}) {
		super(PhpBinary, args);
	}
}
