import { BuildEnvironmentOptions, InlineConfig, build } from "vite";
import { resolve } from "path";
import { parseArgs } from "node:util";
import dts from 'vite-plugin-dts'
import { platform, sapi } from "../meta.json";
import { glob, globSync } from "fs";

const cwd = process.cwd();

// glob("source/*/index.ts", (err, files) => console.log({ err, files }));
const dirs = globSync(resolve(cwd, "source/*/index.ts")).map((f) => f.slice(cwd.length + 1));
console.log({ dirs });
process.exit(0);

const computed = new class {
	readonly platform = platform.map((p) => p.toLowerCase());
	readonly sapiNames = sapi.map((s) => s.toLowerCase());
	readonly tags = sapi.map((s) => platform.map((p) => `Php${s}${p}`)).flat();
	readonly entries = sapi
		.map((k) => {
			const key = k === "Cli" ? "" : k;
			return platform.map(
				(p) => {
					const path = resolve(cwd, `source/Php${key}/${p}.ts`)
					return [
						[
							`Php${key}${p}`,
							path,
						],
						[
							`php${key ? `-${key.toLowerCase()}` : ""}-${p.toLowerCase()}`,
							path,
						]
					]
				}
			).flat();
		}
		)
		.flat()
		.reduce(
			(acc, [name, path]) => {
				acc[name] = path;
				return acc;
			},
			{} as Record<string, string>,
		);

	readonly indexFiles = sapi.map((s) => resolve(cwd, `source/Php${s}/index.ts`));

	readonly regex = new RegExp(
		`^(config|php(?:${this.sapiNames.map((s) => `-${s}`).join("|")})?(?:${this.platform.map((p) => `-${p}`).join("|")}))`
	);

}

const { values, positionals } = parseArgs({
	allowPositionals: true,
	options: {
		dir: {
			type: "string",
			short: "d",
			default: "dist",
		},
		cjs: {
			type: "boolean",
			default: false,
		},
		esm: {
			type: "boolean",
			default: false,
		},
		all: {
			type: "boolean",
			default: false,
		},
	},
});

console.log({ cwd, values, positionals });

const entries = computed.entries;
const { cjs, esm, dir, all } = values;
const [tag] = positionals;


if (all) {
	console.log(
		await build(config({
			emptyOutDir: false,
			lib: {
				// entry: Object.values(entries),
				entry: { PhpCgi: resolve(cwd, "source", "PhpCgi", "index.ts") },
				fileName: (format, entryName) => `${entryName}.${format === "es" ? "esm" : format}.js`,
				name: "PHP",
				formats: ["es", "cjs"],
			},
			rollupOptions: {
				// external: computed.regex
			},
		})));
	process.exit(0);
}

if (!(tag in entries) && !all) {
	console.error(`Invalid tag: ${tag}`, Object.keys(entries));
	process.exit(1);
}




function config(build?: BuildEnvironmentOptions) {
	return ({
		configFile: false,
		root: cwd,
		build,
		resolve: {
			alias: [
				{
					find: "@",
					replacement: resolve(cwd, "source"),
				},
				{
					find: "@@",
					replacement: resolve(cwd, "generated"),
				},
				{
					find: computed.regex,
					replacement: resolve(cwd, "generated", "$1"),
				},
			],
		},
		// plugins: [dts({ rollupTypes: true })]
	} as InlineConfig);
}



const entryName = tag.includes("-")
	? tag.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join("")
	: tag;
const runTagged = config({
	minify: false,
	rollupOptions: {
		input: entries[tag],
		output:
			!cjs && !esm
				? [
					{
						format: "esm",
						entryFileNames: `${entryName}.mjs`,
						dir,
					},
					{
						format: "cjs",
						entryFileNames: `${entryName}.js`,
						dir,
					},
				]
				: {
					format: cjs ? "cjs" : "esm",
					entryFileNames: `${entryName}.${cjs ? "js" : "mjs"}`,
					dir,
				},
	},
	ssr: tag.endsWith("Node"),
});
console.log({ ...runTagged.build!.rollupOptions, ...runTagged.resolve });

// await build(base);
console.log(await build(runTagged));
