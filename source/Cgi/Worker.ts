import { PhpCgiWebBase } from "./WebBase";
import PHP from "php-cgi-web";
import { resolveDependencies } from "../common/resolveDependencies";

declare const self: ServiceWorkerGlobalScope;

export class PhpCgiWorker extends PhpCgiWebBase {
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
	handleInstallEvent(event: ExtendableEvent) {
		return event.waitUntil(self.skipWaiting());
	}

	handleActivateEvent(event: ExtendableEvent) {
		return event.waitUntil(self.clients.claim());
	}

	async handleMessageEvent(event: MessageEvent) {
		const { data, source } = event;
		const { action, token, params = [] } = data;

		const actions: (keyof PhpCgiWorker)[] = [
			"analyzePath",
			"readdir",
			"readFile",
			"stat",
			"mkdir",
			"rmdir",
			"writeFile",
			"rename",
			"unlink",
			"putEnv",
			"refresh",
			"getSettings",
			"setSettings",
			"getEnvs",
			"setEnvs",
			"storeInit",
		];

		if (actions.includes(action)) {
			let result, error;

			try {
				result = await this[action as keyof PhpCgiWorker](...params);
			} catch (_error) {
				error = JSON.parse(JSON.stringify(_error));
				console.warn(_error);
			} finally {
				source?.postMessage({ re: token, result, error });
			}
		} else if (action in this.extraActions) {
			let result, error;

			try {
				result = await this.extraActions[action](this, ...params);
			} catch (_error) {
				error = JSON.parse(JSON.stringify(_error));
				console.warn(_error);
			} finally {
				source?.postMessage({ re: token, result, error });
			}
		}
	}

	handleFetchEvent(event: FetchEvent) {
		const url = new URL(event.request.url);
		const prefix = this.prefix;

		const { files, urlLibs } = resolveDependencies(this.sharedLibs, this);

		let isWhitelisted: boolean | RegExpMatchArray = false;
		let isBlacklisted: boolean | RegExpMatchArray = false;

		if (globalThis.location) {
			const staticUrls = [
				self.location.pathname,
				...files.map((file) => file.url),
				...Object.values(urlLibs),
			]
				.map((url) => new URL(url, self.location.origin))
				.filter((url) => url.origin === self.location.origin)
				.map((url) => url.pathname);

			isWhitelisted =
				url.pathname.slice(0, prefix.length) === prefix &&
				url.hostname === self.location.hostname;
			isBlacklisted =
				url.pathname.match(/\.wasm$/i) ||
				staticUrls.includes(url.pathname) ||
				this.exclude.findIndex(
					(exclude) =>
						url.pathname.slice(0, exclude.length) === exclude
				) > -1 ||
				false;
		} else {
			isWhitelisted = url.pathname.slice(0, prefix.length) === prefix;
			isBlacklisted =
				url.pathname.match(/\.wasm$/i) ||
				this.exclude.findIndex(
					(exclude) =>
						url.pathname.slice(0, exclude.length) === exclude
				) > -1 ||
				false;
		}

		if (isWhitelisted && !isBlacklisted) {
			PhpCgiWorker.requestTimes.set(event.request, Date.now());
			const response = this.request(event.request);
			return event.respondWith(response);
		}
	}
}
