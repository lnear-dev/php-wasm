import * as fs from "node:fs";
import * as readline from "node:readline";
import { parseArgs } from "node:util";

interface Sections {
	[key: string]: string;
}

const parsedArgs = parseArgs({
	allowPositionals: true,
	options: {
		file: { type: "string" },
		phpVersion: { type: "string" },
		buildType: { type: "string", default: "shared" },
	},
}).values;
const libs = {
	WITH_ZLIB: "zlib",
	WITH_GD: "gd",
	WITH_ICONV: "iconv",
	WITH_INTL: "intl",
	WITH_XML: "xml",
	WITH_ONIGURUMA: "mbstring",
	WITH_OPENSSL: "openssl",
};
class PhpWasmTestTranslator {

	private parseSharedLibs(): string {
		return Object.keys(libs).reduce((acc, key) => {
			return (
				acc +
				`process.env.${key} === 'dynamic' && sharedLibs.push('php${parsedArgs.phpVersion}-${libs[key]}.so');\n`
			);
		}, "const sharedLibs: string[] = [];\n");
	}

	private async readSections(): Promise<Sections> {
		if (!parsedArgs.file) {
			throw new Error("No file specified");
		}

		const sections: Sections = {};

		let currentSection: string | null = null;

		for await (const line of readline.createInterface({
			input: fs.createReadStream(parsedArgs.file),
			crlfDelay: Infinity,
		})) {
			if (line.match(/^--\w+--$/)) {
				currentSection = line
					.substring(2)
					.substring(0, line.length - 4);
				sections[currentSection] = "";
				continue;
			}

			if (!currentSection) {
				continue;
			}

			sections[currentSection] += line + "\n";
		}

		return sections;
	}

	private generateTestCode(sections: Sections): string {
		return `import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { PhpNode } from '../../../packages/php-wasm/PhpNode.mjs';

test(${JSON.stringify(String(sections.TEST).trim())}, async () => {

  ${this.parseSharedLibs()}

  const files: Array<{parent: string, name: string, url: string}> = [];
  process.env.WITH_INTL === 'dynamic' && files.push({parent: '/preload/', name: 'icudt72l.dat', url: './node_modules/php-wasm-intl/icudt72l.dat'});

  const php = new PhpNode({ sharedLibs, files, persist: { mountPath: '/persist', localPath: process.cwd() + '/test/' } });

  let stdOut = '', stdErr = '';

  php.addEventListener('output', (event) => event.detail.forEach(line => void (stdOut += line)));
  php.addEventListener('error',  (event) => event.detail.forEach(line => void (stdErr += line)));

  await php.binary;

  const exitCode = await php.run(${JSON.stringify(sections.FILE)});

  assert.equal(exitCode, 0);
  assert.equal(stdOut, ${JSON.stringify(sections.EXPECT)});
  assert.equal(stdErr, '');

});
`;
	}

	public async translate(): Promise<void> {
		try {
			console.log(this.generateTestCode(await this.readSections()));
		} catch (error) {
			console.error("Translation failed:", error);
			process.exit(1);
		}
	}
}

// Main execution
async function main() {
	const translator = new PhpWasmTestTranslator();
	await translator.translate();
}

if (import.meta.url === `file://${process.argv[1]}`) {
	main();
}

export default PhpWasmTestTranslator;
