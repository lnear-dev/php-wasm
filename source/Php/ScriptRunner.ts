import { PhpWeb } from "./Web";
type Scope = {
	stdin: HTMLElement | null;
	canvas: HTMLElement | null;
	stdout: HTMLElement | null;
	stderr: HTMLElement | null;
	ini: string | null;
	libs: string[];
	files: string[];
	imports: Record<string, string | string[]>;
};
const configAttributes = [
	{ name: "ini" },
	{ name: "stdin", type: "querySelector" },
	{ name: "stdout", type: "querySelector" },
	{ name: "stderr", type: "querySelector" },
	{ name: "libs", type: "jsonParse" },
	{ name: "files", type: "jsonParse" },
	{ name: "imports", type: "jsonParse" },
	{ name: "canvas", type: "querySelector" },
];

class PhpScriptRunner extends HTMLElement {
	static observedAttributes = configAttributes.map((attr) => attr.name);

	private php: PhpWeb | null = null;
	private scope: Scope = {
		stdin: null,
		canvas: null,
		stdout: null,
		stderr: null,
		ini: "",
		libs: [],
		files: [],
		imports: {},
	};

	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		this.parseAttributes();
		this.initializePhpRuntime();
	}

	private parseAttributes() {
		configAttributes.forEach((attr) => {
			const value = this.getAttribute(attr.name);
			const scope = this.scope as any;
			if (value) {
				switch (attr.type) {
					case "querySelector":
						scope[attr.name] = document.querySelector(value);
						break;
					case "jsonParse":
						try {
							scope[attr.name] = JSON.parse(value);
						} catch (error) {
							console.error(`Error parsing ${attr.name}:`, error);
						}
						break;
					default:
						scope[attr.name] = value;
				}
			}
		});
	}

	private async initializePhpRuntime() {
		const code = this.textContent || "";
		const input = this.scope.stdin
			? this.scope.stdin.textContent || ""
			: "";

		// Similar import and setup logic to original implementation
		const imports = await this.resolveImports();
		const flatImports = Object.assign({}, ...imports.flat());

		this.php = new PhpWeb({
			...flatImports,
			sharedLibs: this.scope.libs,
			ini: this.scope.ini,
			files: this.scope.files,
			canvas: this.scope.canvas,
		});

		this.setupEventListeners();
		this.runPhpScript(code, input);
	}

	private async resolveImports(): Promise<any[]> {
		// Implementation similar to original resolveImports logic
		if (!this.scope.imports) return [];

		return Promise.all(
			Object.entries(this.scope.imports).map(async ([url, names]) => {
				const pkg = await import(url);
				if (typeof names === "string") {
					return { [names]: pkg };
				} else if (Array.isArray(names)) {
					return names.map((name) => ({ [name]: pkg[name] }));
				}
			})
		);
	}

	private setupEventListeners() {
		let stdout = "";
		let stderr = "";

		this.php?.on("output", ({ detail }) => {
			stdout += detail;
			this.updateOutput("stdout", stdout);
		});

		this.php?.on("error", ({ detail }) => {
			stderr += detail;
			this.updateOutput("stderr", stderr);
		});
	}

	private updateOutput(type: "stdout" | "stderr", content: string) {
		const target = this.scope[type];
		if (target) {
			target.innerHTML = content;
		}
	}

	private async runPhpScript(code: string, input: string) {
		this.php?.inputString(input);

		this.php?.on("ready", () => {
			this.php
				?.run(code)
				.then((exitCode) => {
					if (exitCode) {
						console.warn(`PHP exited with code: ${exitCode}`);
					}
				})
				.catch((error) => console.error(error));
		});
	}

	// Static method to define the custom element
	static define(tagName = "php-script-runner") {
		customElements.define(tagName, PhpScriptRunner);
	}

	//Attribute change callback
	attributeChangedCallback(_: string, oldValue: string, newValue: string) {
		if (oldValue === newValue) return;
		this.parseAttributes();
		this.initializePhpRuntime();
	}
}

// Optional: Auto-define the custom element
PhpScriptRunner.define();

export default PhpScriptRunner;
