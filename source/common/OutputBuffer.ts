export class OutputBuffer {
	private readonly buffer: number[] = [];
	private readonly decoder: TextDecoder = new TextDecoder();
	// private readonly queue: Set<unknown> = new Set(); not sure what this is for
	constructor(
		private readonly target: EventTarget,
		private readonly eventType: string,
		private readonly maxLength: number
	) { }

	push(...items: number[]) {
		this.buffer.push(...items);
		const end = this.buffer.length - 1;
		if (this.maxLength === -1 && this.buffer[end] === 10) this.flush();
		if (this.maxLength >= 0 && this.buffer.length >= this.maxLength) this.flush();
	}

	flush() {
		if (!this.buffer.length) return;

		const detail = [this.decoder.decode(new Uint8Array(this.buffer))];
		const event = new CustomEvent(this.eventType, { detail });

		if ((this.target as any)["on" + this.eventType]) {
			if ((this.target as any)["on" + this.eventType](event) === false) return;
		}

		if (!this.target.dispatchEvent(event)) return;

		this.buffer.splice(0);
	}
}
