import { InlineConfig, build } from "vite";
import { resolve } from "path";
import { parseArgs } from "node:util";

import { platform, sapi } from "../meta.json";

const cwd = process.cwd();

const computed = {
	platform: platform.map((p) => p.toLowerCase()),
	sapi: sapi.map((s) => s.toLowerCase()),
	entries: sapi
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
							`php${key ? `-${key.toLowerCase()}` : ""}${p.toLowerCase()}`,
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
		),
} as const;

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
	},
});

console.log({ cwd, values, positionals });

const entries = computed.entries;
const [tag] = positionals;
if (!(tag in entries)) {
	console.error(`Invalid tag: ${tag}`, Object.keys(entries));
	process.exit(1);
}
const { cjs, esm, dir } = values;

const generatedFilesRegex = new RegExp(
	`^(config|php\
(?:${computed.sapi.map((s) => `-${s}`).join("|")})?\
(?:${computed.platform.map((p) => `-${p}`).join("|")})\
)`
);
const base: InlineConfig = {
	configFile: false,
	root: cwd,
	build: {
		rollupOptions: {
			external: generatedFilesRegex,
			input: entries[tag],
			output:
				!cjs && !esm
					? [
						{
							format: "esm",
							entryFileNames: "Php[name].mjs",
							dir,
						},
						{
							format: "cjs",
							entryFileNames: "Php[name].js",
							dir,
						},
					]
					: {
						format: cjs ? "cjs" : "esm",
						entryFileNames: `Php[name].${cjs ? "js" : "mjs"}`,
						dir,
					},
		},
		ssr: tag.endsWith("Node"),
	},
	resolve: {
		alias: [
			{
				find: "@",
				replacement: resolve(cwd, "source"),
			},
			{
				find: generatedFilesRegex,
				replacement: resolve(cwd, "source", "generated", "$1"),
			},
		],
	},
};

console.log({ base });

await build(base);
