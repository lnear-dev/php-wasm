import { PhpWeb } from "../Web";
import { type Scope, configAttributes, parseAttributes, resolveImports } from "./common";

class PhpScriptRunner extends HTMLElement {
	static observedAttributes = Object.keys(configAttributes);

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
		parseAttributes(this, this.scope);
		this.initializePhpRuntime();
	}

	private async initializePhpRuntime() {
		const code = this.textContent || "";
		const input = this.scope.stdin
			? this.scope.stdin.textContent || ""
			: "";
		const imports = await resolveImports(this.scope.imports);

		this.php = new PhpWeb({
			...Object.assign({}, ...imports.flat()),
			sharedLibs: this.scope.libs,
			ini: this.scope.ini,
			files: this.scope.files,
			canvas: this.scope.canvas,
		});

		this.setupEventListeners();
		this.runPhpScript(code, input);
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
		parseAttributes(this, this.scope);
		this.initializePhpRuntime();
	}
}

// Optional: Auto-define the custom element
PhpScriptRunner.define();

export default PhpScriptRunner;
