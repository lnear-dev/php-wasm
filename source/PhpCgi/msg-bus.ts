import { Deferred } from "@/common/Deferred";

const incomplete = new Map();

/**
 * Create a sendMessage function given a service worker URL.
 * @param {*} serviceWorkerUrl The URL to the service worker.
 * @returns sendMessage function for the service workrer.
 */
export const sendMessageFor =
	(serviceWorkerUrl: string | URL) =>
	async (action: string, params: unknown[] = []) => {
		const token = window.crypto.randomUUID();
		const deferred = new Deferred();

		incomplete.set(token, [
			deferred.resolve,
			deferred.reject,
			action,
			params,
		]);

		navigator.serviceWorker
			.getRegistration(serviceWorkerUrl)
			.then((registration) =>
				registration?.active?.postMessage({ action, params, token })
			);

		return deferred.promise;
	};

/**
 * Event handler for recieved messages.
 * @param {*} event
 */
export const onMessage = (event: MessageEvent) => {
	if (event.data.re && incomplete.has(event.data.re)) {
		const [accept, reject, action, params] = incomplete.get(event.data.re);

		incomplete.delete(event.data.re);

		if (!event.data.error) {
			accept(event.data.result);
		} else {
			reject({ error: event.data.error, action, params });
		}
	}
};
