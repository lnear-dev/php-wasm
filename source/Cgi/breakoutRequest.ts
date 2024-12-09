export async function breakoutRequest(request: RequestLike): Promise<{
	url: URL;
	method: string;
	get: string;
	post: string | null;
	contentType: string | null;
}> {
	let getPost: Promise<string> = Promise.resolve('');

	if (request.body) {
		getPost = new Promise(accept => {
			const reader = request.body.getReader();
			const postBody: string[] = [];

			const processBody = ({ done, value }: { done: boolean; value: Uint8Array | undefined; }) => {
				if (value) {
					postBody.push([...value].map(x => String.fromCharCode(x)).join(''));
				}

				if (!done) {
					return reader.read().then(processBody);
				}

				accept(postBody.join(''));
			};

			return reader.read().then(processBody);
		});
	} else if ('arrayBuffer' in request) {
		getPost = (request as any).arrayBuffer().then((buffer: ArrayBuffer) => {
			if (globalThis.TextDecoder) {
				// Use TextDecoder if available
				const decoder = new TextDecoder();
				return decoder.decode(new Uint8Array(buffer));
			} else {
				// Fallback to manual mapping
				return [...new Uint8Array(buffer)].map(x => String.fromCharCode(x)).join('');
			}
		});
	} else if (request.on) {
		getPost = new Promise(accept => {
			let body: Uint8Array[] = [];
			(request as any).on('data', (chunk: Uint8Array) => body.push(chunk));
			(request as any).on('end', () => accept(Buffer.concat(body).toString('utf-8')));
		});
	}

	const url = new URL(request.url);
	return ({
		url,
		method: request.method,
		get: url.search ? url.search.slice(1) : '',
		post: request.method === 'POST' ? await getPost : null,
		contentType: (request.method === 'POST' && request.headers)
			? (request.headers instanceof Headers
				? request.headers.get('Content-Type')
				: request.headers['Content-Type'])
			: null,
	});
}
