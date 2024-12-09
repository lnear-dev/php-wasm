import { spawnSync, SpawnOptionsWithoutStdio, SpawnSyncOptionsWithBufferEncoding, SpawnSyncOptionsWithStringEncoding } from "child_process";
import * as path from "path";
import * as fs from "fs";
import * as tty from "tty";
import { fileURLToPath } from "url";

const cwd: string = process.cwd();
const rcFile: string = path.join(cwd, ".php-wasm-rc");
const rcFileExists: boolean = fs.existsSync(rcFile);
const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const commands: {
	[key: string]: {
		cb(flags: Record<string, string | boolean>, ...args: string[]): void;
		info?: string;
		help?: string;
	};
} = {
	build: {
		cb: buildCommand,
		info: "Build php-wasm, optionally using a .php-wasm-rc file in the current directory.",
		help: "Usage: php-wasm-builder build [ENV_NAME] [MODULE_TYPE] [BINARY_TYPE]",
	},
	image: {
		cb: () => make("image"),
		info: "Create the build environment docker image",
		help: "Usage: php-wasm-builder image",
	},
	"copy-assets": {
		cb: copyAssetsCommand,
		info: "Copy shared libs & file packages from node_modules to asset directory.",
		help: "Usage: php-wasm-builder copy-assets",
	},
	"build-assets": {
		cb: () => make("assets", [`PHP_BUILDER_DIR=${cwd}`, `IS_TTY=${tty.isatty(process.stdout.fd) ? 1 : 0}`, `ENV_DIR=${cwd}/`], true),
		info: "Build shared libs & file packages to asset directory.",
		help: "Usage: php-wasm-builder assets",
	},
	clean: {
		cb: () => make("clean"),
		info: "Clear cached build resources.",
		help: "Usage: php-wasm-builder clean",
	},
	"deep-clean": {
		cb: () => make("deep-clean"),
		info: "Clear out all downloaded dependencies and start from scratch.",
		help: "Usage: php-wasm-builder deep-clean",
	},
	help: {
		cb: helpCommand,
		info: "Display helptext for a given command.",
		help: `Usage: php-wasm-builder help COMMAND
        ...
        `,
	},
};

function make(
	rule: string,
	options: string[] = [],
	checkRC = false,
	spawnWith: SpawnSyncOptionsWithStringEncoding = { encoding: "utf8" }
) {
	return spawnSync("make", [
		...options,
		checkRC && rcFileExists ? `ENV_FILE=${rcFile}` : "", rule]
		.filter(Boolean),
		{ stdio: "inherit", cwd: `${__dirname}/..`, ...spawnWith }
	);
}
function buildCommand(
	flags: Record<string, string | boolean>,
	...buildArgs: string[]
) {
	const envName = buildArgs.includes("node")
		? "node"
		: buildArgs.includes("worker")
			? "worker"
			: "web";
	const buildType = buildArgs.includes("mjs") ? "mjs" : "js";
	const binaryMode = buildArgs.includes("cgi") ? "cgi" : "cli";
	console.log({ envName, binaryMode, buildType });

	const buildTypeLower = buildType.toLowerCase();
	make(
		`${envName}${binaryMode === "cgi" ? "-cgi-" : "-"}${buildTypeLower}`,
		[
			`PHP_BUILDER_DIR=${cwd}`,
			`BUILD_TYPE=${buildTypeLower}`,
			`IS_TTY=${tty.isatty(process.stdout.fd) ? 1 : 0}`,
			`ENV_DIR=${cwd}/`,
		],
		true
	);
}

function helpCommand(
	flags: Record<string, string | boolean>,
	command: string | null = null
) {
	if (command) {
		if (!commands[command]) {
			console.error(`Error: Cannot print help for "${command}". No such command exists.`);
			return;
		}
		console.error(commands[command].help);
		return;
	}

	console.error("Usage: php-wasm-builder [COMMAND] [ARG, ...]");
	console.error("");
	console.error("Available commands");

	for (const [commandName, cmd] of Object.entries(commands)) {
		console.error(`  ${commandName}`);
		console.error(`  ${cmd.info}`);
		console.error("");
	}
}

function copyAssetsCommand() {
	const ls = spawnSync("npm", ["ls", "-p"], {
		encoding: "utf8",
	});

	const allFiles = ls.stdout
		.split("\n")
		.map((x) => x || ".")
		.map((dir) => {
			const p: { files?: string[]; } = JSON.parse(fs.readFileSync(dir + "/package.json", {
				encoding: "utf8",
			}));
			if (!p.files) return [];

			const files = (p).files
				?.filter((name) => name.match(/\.(so|dat)$/))
				.map((file) => path.join(dir, file)) || [];

			if (!files) return [];

			return files;
		})
		.flat();

	const options = ["-f", "info.mak", `ENV_DIR=${cwd}/`];

	const assetPath = make("get-asset-path", options, true).stdout.trim();
	const phpVersion = make("get-php-version", options, true).stdout.trim();

	allFiles.forEach((file) => {
		const name = path.basename(file);

		if (
			name.slice(0, 3) === "php" &&
			name.slice(3, 3) !== phpVersion
		) {
			return;
		}

		const destination = path.join(assetPath, name);

		console.error(`${file}\n => ${destination}`);

		fs.copyFileSync(file, destination);
	});
}

function argsToFlags(args: string[]): [Record<string, string | boolean>, ...string[]] {
	const filteredArgs: string[] = [];
	const flags: Record<string, string | boolean> = {};

	args.forEach((arg) => {
		if (arg[0] !== "-") {
			filteredArgs.push(arg);
			return;
		}

		const offset = arg.startsWith("--") ? 2 : 1;
		const index = arg.indexOf("=");

		if (index < 0) {
			flags[arg.slice(offset)] = true;
			return;
		}

		flags[arg.slice(offset, index)] = arg.slice(index + 1);
	});

	return [flags, ...filteredArgs];
}

function run(args: string[]) {
	const command = args.shift() || "help";

	if (!commands[command]) {
		console.error(`Error: No such command: ${command}`);
		return;
	}

	commands[command].cb(...argsToFlags(args));
}

run(process.argv.slice(2));

export { run, commands };
