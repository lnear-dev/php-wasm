import { PhpCgiWebBase } from "./WebBase";
import PHP from "php-cgi-worker";

export class PhpCgiWeb extends PhpCgiWebBase {
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
