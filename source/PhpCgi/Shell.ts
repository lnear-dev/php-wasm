import { PhpCgiBase } from "./Base";
import PHP from "php-cgi-shell";

export class PhpCgiShell extends PhpCgiBase {
	constructor({
		docroot,
		prefix,
		rewrite,
		cookies,
		types,
		onRequest,
		notFound,
		...args
	}: Partial<PhpCgiOptions> = {}) {
		super(PHP, {
			docroot,
			prefix,
			rewrite,
			cookies,
			types,
			onRequest,
			notFound,
			...args,
		});
	}
}
