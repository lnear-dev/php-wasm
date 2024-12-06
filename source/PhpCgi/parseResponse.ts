export const parseResponse = (
	response: number[]
): { headers: Record<string, string>; body: ArrayBuffer } => {
	const headers: Record<string, string> = {};
	const line: number[] = [];
	const decoder = new TextDecoder();

	let i = 0;

	while (i < response.length) {
		if (response[i] === 0x0d && response[i + 1] === 0x0a) {
			// We're at a CRLF
			if (line.length) {
				const header = decoder.decode(new Uint8Array(line).buffer);
				const colon = header.indexOf(":");

				if (colon < 0) {
					headers[header] = "";
				} else {
					headers[header.substring(0, colon)] = header
						.substring(colon + 2)
						.trim();
				}

				line.length = 0;
				i += 2;
				continue;
			} else {
				i += 2;
				break;
			}
		}

		line.push(response[i]);
		i++;
	}

	return { headers, body: new Uint8Array(response.slice(i)).buffer };
};
