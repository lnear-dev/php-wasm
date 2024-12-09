import { PhpWeb } from "../Web";
import { type Scope, parseAttributes, resolveImports } from "./common";

async function runPhpScriptTag(element: HTMLElement): Promise<void> {
	const scope: Scope = parseAttributes(element, {
		stdin: null,
		canvas: null,
		stdout: null,
		stderr: null,
		ini: null,
		libs: [],
		files: [],
		imports: {},
	});

	const code = element.textContent || "";
	const input = scope.stdin?.textContent || "";
	const imports = await resolveImports(scope.imports);
	const flatImports = Object.assign({}, ...imports);

	const php = new PhpWeb({
		...flatImports,
		sharedLibs: scope.libs,
		ini: scope.ini || "",
		files: scope.files,
		canvas: scope.canvas,
	});

	let stdout = "";
	let stderr = "";

	php.on("output", ({ detail }) => {
		stdout += detail;
		if (scope.stdout) scope.stdout.innerHTML = stdout;
	});

	php.on("error", ({ detail }) => {
		stderr += detail;
		if (scope.stderr) scope.stderr.innerHTML = stderr;
	});

	php.on("ready", () => {
		php
			.run(code)
			.then((exitCode) => {
				if (exitCode) {
					console.warn(`PHP exited with code: ${exitCode}`);
				}
			})
			.catch((error) => console.error(error));
	});

	php.inputString(input);
}

function runPhpTags(doc: Document): void {
	const phpNodes = doc.querySelectorAll<HTMLElement>('script[type="text/php"]');
	for (const node of phpNodes) {
		runPhpScriptTag(node);
	}
}

document.addEventListener("DOMContentLoaded", () => runPhpTags(document));
