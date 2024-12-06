type FSType = typeof FS;

type WriteFileOptions = { flags?: string | undefined };

type RequestLike = Request | {
	body: any;
	method: string;
	url: string;
	on: Function;
	headers: Headers | { [key: string]: string | null };
}

type ReadFileOptions =
	| { encoding: "binary"; flags?: string | undefined }
	| { encoding: "utf8"; flags?: string | undefined }
	| WriteFileOptions;

interface PHPWasmModule extends EmscriptenModule {
	ccall<
		I extends Array<Emscripten.JSType | null> | [],
		R extends Emscripten.JSType | null
	>(
		ident: string,
		returnType: R,
		argTypes: I,
		args: ArgsToType<I>,
		opts?: Emscripten.CCallOpts
	): Promise<ReturnToType<R>>;
	onRefresh?: Set<() => void>;
	persist?: { mountDir: string;[key: string]: any };
	hasVrzno?: boolean;
	zvalToJS?: (value: any) => any;

	UTF8ToString: typeof UTF8ToString;
	lengthBytesUTF8: typeof lengthBytesUTF8;
	stringToUTF8: typeof stringToUTF8;
	getValue: typeof getValue;
	setValue: typeof setValue;

	FS: FSType;
	ENV: typeof ENV;
}
type FileDef = {
	url: string | URL;
	path: string;
	name?: string;
};

type LibDef = {
	name?: string;
	url?: string | URL;
	getLibs?: (constructor: any) => LibDef[];
	getFiles?: (constructor: any) => FileDef[];
};
type ResolvedFile = {
	parent: string;
	name: string;
	url: string;
};
type ResolvedDependencies = {
	files: ResolvedFile[];
	libs: Array<LibDef | { name: string; url: string | URL; ini: boolean }>;
	urlLibs: Record<string, string | URL>;
};

interface VHost {
	pathPrefix: string;
	directory: string;
	entrypoint: string;
}
interface PhpCgiOptions {
	docroot?: string;
	prefix?: string;
	exclude?: string[];
	rewrite?: (url: string) => string | { path: string; scriptName: string };
	entrypoint?: string;
	cookies?: Map<string, string>;
	types?: Record<string, string>;
	onRequest?: (request: RequestLike, response: Response) => void;
	notFound?: (request: RequestLike) => Response | string;
	sharedLibs?: LibDef[];
	files?: FileDef[];
	autoTransaction?: boolean;
	maxRequestAge?: number;
	staticCacheTime?: number;
	dynamicCacheTime?: number;
	vHosts?: VHost[];
	env?: Record<string, string>;
	[key: string]: any; // Allow additional options
}
type InputFunction = () => any;
type OutputFunction = (byte: number) => void;
type PostRunFunction = () => void;

interface PhpBaseArgs {
	stdin?: InputFunction;
	stdout?: OutputFunction;
	stderr?: OutputFunction;
	postRun?: PostRunFunction;
	[key: string]: any;
}

declare module "config" {
	export const phpVersion: string;
	export const phpVersionFull: string;
}

declare module "php-*node" {
	const binary: new (args: PhpBaseArgs) => Promise<PHPWasmModule>;
	export default binary;
}
declare module "php-*shell" {
	const binary: new (args: PhpBaseArgs) => Promise<PHPWasmModule>;
	export default binary;
}
declare module "php-*worker" {
	const binary: new (args: PhpBaseArgs) => Promise<PHPWasmModule>;
	export default binary;
}
declare module "php-*web" {
	const binary: new (args: PhpBaseArgs) => Promise<PHPWasmModule>;
	export default binary;
}
declare module "php-*webview" {
	const binary: new (args: PhpBaseArgs) => Promise<PHPWasmModule>;
	export default binary;
}

declare const Module: PHPWasmModule;
declare const ENV: Record<string, string>;
