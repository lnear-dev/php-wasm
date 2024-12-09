declare module "source/Cgi/parseResponse" {
    export const parseResponse: (response: number[]) => {
        headers: Record<string, string>;
        body: ArrayBuffer;
    };
}
declare module "source/Cgi/breakoutRequest" {
    export function breakoutRequest(request: RequestLike): Promise<{
        url: URL;
        method: string;
        get: string;
        post: string | null;
        contentType: string | null;
    }>;
}
declare module "source/common/Deferred" {
    export class Deferred<T = any> {
        promise: Promise<T>;
        resolve: (value: T | PromiseLike<T>) => void;
        reject: (reason?: any) => void;
        constructor();
    }
}
declare module "source/common/fsOps" {
    export class fsOps {
        static analyzePath(binary: Promise<PHPWasmModule>, path: string): Promise<{
            exists: boolean;
        } | {
            object: {
                exists: boolean;
                id: number;
                mode: number;
                mount: {
                    mountpoint: string;
                    mounts: string[];
                };
                isDevice: boolean;
                isFolder: boolean;
                read: boolean;
                write: boolean;
            };
            parentObject: undefined;
            isRoot: boolean;
            exists: boolean;
            error: Error;
            name: string;
            path: FS.Lookup["path"];
            parentExists: boolean;
            parentPath: FS.Lookup["path"];
        }>;
        static readdir(binary: Promise<PHPWasmModule>, path: string): Promise<string[]>;
        static readFile(binary: Promise<PHPWasmModule>, path: string, options: ReadFileOptions): Promise<Uint8Array>;
        static stat(binary: Promise<PHPWasmModule>, path: string): Promise<FS.Stats>;
        static mkdir(binary: Promise<PHPWasmModule>, path: string): Promise<{
            id: number;
            mode: number;
            mount: {
                mountpoint: string;
                mounts: string[];
            };
            isDevice: boolean;
            isFolder: boolean;
            read: boolean;
            write: boolean;
        }>;
        static rmdir(binary: Promise<PHPWasmModule>, path: string): Promise<void>;
        static rename(binary: Promise<PHPWasmModule>, path: string, newPath: string): Promise<void>;
        static writeFile(binary: Promise<PHPWasmModule>, path: string, data: string | ArrayBufferView, options?: WriteFileOptions): Promise<void>;
        static unlink(binary: Promise<PHPWasmModule>, path: string): Promise<void>;
        static chmod(binary: Promise<PHPWasmModule>, path: string, mode: number): Promise<void>;
    }
}
declare module "source/common/iniLines" {
    type AltLibDef = {
        name: string;
        url: string | URL;
        ini: boolean;
    };
    export function iniLines(libs: (LibDef | AltLibDef)[]): (string | undefined)[];
}
declare module "source/common/OutputBuffer" {
    export class OutputBuffer {
        private readonly target;
        private readonly eventType;
        private readonly maxLength;
        private readonly buffer;
        private readonly decoder;
        constructor(target: EventTarget, eventType: string, maxLength: number);
        push(...items: number[]): void;
        flush(): void;
    }
}
declare module "source/common/resolveDependencies" {
    export const resolveDependencies: (sharedLibs: LibDef[] | undefined, wrapper: {
        constructor: any;
    }) => ResolvedDependencies;
}
declare module "source/common/webTransactions" {
    type Wrapper = {
        binary: Promise<PHPWasmModule>;
        transactionStarted: boolean;
    };
    export function startTransaction(wrapper: Wrapper): Promise<void>;
    export function commitTransaction(wrapper: Wrapper, readOnly?: boolean): Promise<void>;
}
declare module "source/common/index" {
    export * from "source/common/Deferred";
    export * from "source/common/fsOps";
    export * from "source/common/iniLines";
    export * from "source/common/OutputBuffer";
    export * from "source/common/resolveDependencies";
    export * from "source/common/webTransactions";
}
declare module "source/Cli/Base" {
    import { OutputBuffer } from "source/common/OutputBuffer";
    export class PhpBase extends EventTarget {
        queue: any[];
        onerror: (event: Event) => void;
        onoutput: (event: Event) => void;
        onready: (event: Event) => void;
        encoder: TextEncoder;
        buffers: {
            stdin: any[];
            stdout: OutputBuffer;
            stderr: OutputBuffer;
        };
        autoTransaction: boolean;
        transactionStarted: boolean;
        shared: Record<string, any>;
        phpArgs: PhpBaseArgs;
        valueIndex: number;
        binary: Promise<PHPWasmModule>;
        static phpVersion: string;
        static phpVersionFull: string;
        constructor(PhpBinary: new (args: PhpBaseArgs) => Promise<PHPWasmModule>, args?: PhpBaseArgs);
        static iniLines(libs: (LibDef | {
            name: string;
            url: string | URL;
            ini: boolean;
        })[]): (string | undefined)[];
        inputString(byteString: string): void;
        input(items: Uint8Array): void;
        flush(): void;
        tokenize(phpCode: string): Promise<string>;
        startTransaction(): Promise<void>;
        commitTransaction(_readOnly?: boolean): Promise<void>;
        _enqueue(callback: (...args: any[]) => Promise<any>, params?: any[], readOnly?: boolean): Promise<any>;
        run(phpCode: string): Promise<any>;
        on(event: "output" | "error" | "ready", listener: (event: CustomEvent<string[]>) => void): void;
        _run(phpCode: string): Promise<number>;
        exec(phpCode: string): Promise<any>;
        _exec(phpCode: string): Promise<string>;
        x(fragments: string[], ...values: any[]): Promise<any>;
        r(fragments: string[], ...values: any[]): Promise<any>;
        refresh(): Promise<number>;
        analyzePath(path: string): Promise<any>;
        readdir(path: string): Promise<any>;
        readFile(path: string, options: ReadFileOptions): Promise<any>;
        stat(path: string): Promise<any>;
        mkdir(path: string): Promise<any>;
        rmdir(path: string): Promise<any>;
        rename(path: string, newPath: string): Promise<any>;
        writeFile(path: string, data: string | ArrayBufferView, options: WriteFileOptions): Promise<any>;
        unlink(path: string): Promise<any>;
    }
}
declare module "source/Cgi/Base" {
    export class PhpCgiBase {
        protected PHP: new (args: PhpBaseArgs) => Promise<PHPWasmModule>;
        docroot: string;
        prefix: string;
        exclude: string[];
        rewrite: (url: string) => string | {
            path: string;
            scriptName: string;
        };
        entrypoint?: string;
        cookies: Map<string, string>;
        types: Record<string, string>;
        onRequest: (request: RequestLike, response: Response) => void;
        notFound: (request: RequestLike) => Response | string;
        sharedLibs: LibDef[];
        files: ResolvedFile[];
        phpArgs: PhpBaseArgs;
        autoTransaction: boolean;
        transactionStarted: boolean;
        maxRequestAge: number;
        staticCacheTime: number;
        dynamicCacheTime: number;
        vHosts: VHost[];
        env: Record<string, string>;
        php: any;
        input: any[];
        output: number[];
        error: number[];
        count: number;
        queue: any[];
        extraActions: Record<string, (self: PhpCgiBase, ...args: any[]) => any>;
        binary: Promise<PHPWasmModule>;
        static phpVersion: string;
        static phpVersionFull: string;
        protected static readonly requestTimes: WeakMap<object, any>;
        constructor(PHP: new (args: PhpBaseArgs) => Promise<PHPWasmModule>, { docroot, prefix, exclude, rewrite, entrypoint, cookies, types, onRequest, notFound, sharedLibs, files, autoTransaction, maxRequestAge, staticCacheTime, dynamicCacheTime, vHosts, env, ...args }?: PhpCgiOptions);
        _enqueue(callback: (...args: any[]) => Promise<any>, params?: any[], _readOnly?: boolean): Promise<any>;
        refresh(): Promise<PHPWasmModule>;
        _beforeRequest(): Promise<void>;
        _afterRequest(): Promise<void>;
        request(request: RequestLike): Promise<Response>;
        analyzePath(path: string): Promise<any>;
        readdir(path: string): Promise<any>;
        readFile(path: string, options: ReadFileOptions): Promise<any>;
        stat(path: string): Promise<any>;
        mkdir(path: string): Promise<any>;
        rmdir(path: string): Promise<any>;
        rename(path: string, newPath: string): Promise<any>;
        writeFile(path: string, data: string | ArrayBufferView, options?: WriteFileOptions): Promise<any>;
        unlink(path: string): Promise<any>;
        putEnv(name: string, value: string): Promise<number>;
        getSettings(): Promise<{
            docroot: string;
            maxRequestAge: number;
            staticCacheTime: number;
            dynamicCacheTime: number;
            vHosts: VHost[];
        }>;
        setSettings({ docroot, maxRequestAge, staticCacheTime, dynamicCacheTime, vHosts, }: Partial<PhpCgiOptions>): void;
        getEnvs(): Promise<{
            [x: string]: string;
        }>;
        setEnvs(env: Record<string, string>): void;
        storeInit(): Promise<void>;
        loadInit(binary: Promise<PHPWasmModule> | PHPWasmModule): Promise<void>;
    }
}
declare module "source/Cgi/Node" {
    import { PhpCgiBase } from "source/Cgi/Base";
    import { IncomingMessage } from "node:http";
    export class PhpCgiNode extends PhpCgiBase {
        constructor(args?: Partial<PhpCgiOptions>);
        request(request: IncomingMessage & RequestLike): Promise<Response>;
    }
}
declare module "source/Cgi/Shell" {
    import { PhpCgiBase } from "source/Cgi/Base";
    export class PhpCgiShell extends PhpCgiBase {
        constructor({ docroot, prefix, rewrite, cookies, types, onRequest, notFound, ...args }?: Partial<PhpCgiOptions>);
    }
}
declare module "source/Cgi/WebBase" {
    import { PhpCgiBase } from "source/Cgi/Base";
    export class PhpCgiWebBase extends PhpCgiBase {
        initialized: boolean;
        startTransaction(): Promise<void>;
        commitTransaction(readOnly?: boolean): Promise<void>;
        _beforeRequest(): Promise<void>;
        _afterRequest(): Promise<void>;
        refresh(): Promise<any>;
        _enqueue(callback: (...args: any[]) => Promise<any>, params?: any[], readOnly?: boolean): Promise<any>;
    }
}
declare module "source/Cgi/Web" {
    import { PhpCgiWebBase } from "source/Cgi/WebBase";
    export class PhpCgiWeb extends PhpCgiWebBase {
        constructor({ docroot, prefix, rewrite, cookies, types, onRequest, notFound, ...args }?: Partial<PhpCgiOptions>);
    }
    export default PhpCgiWeb;
}
declare module "source/Cgi/Webview" {
    import { PhpCgiWebBase } from "source/Cgi/WebBase";
    export class PhpCgiWebview extends PhpCgiWebBase {
        constructor({ docroot, prefix, rewrite, cookies, types, onRequest, notFound, ...args }?: Partial<PhpCgiOptions>);
    }
}
declare module "source/Cgi/Worker" {
    import { PhpCgiWebBase } from "source/Cgi/WebBase";
    export class PhpCgiWorker extends PhpCgiWebBase {
        constructor({ docroot, prefix, rewrite, cookies, types, onRequest, notFound, ...args }?: Partial<PhpCgiOptions>);
        handleInstallEvent(event: ExtendableEvent): void;
        handleActivateEvent(event: ExtendableEvent): void;
        handleMessageEvent(event: MessageEvent): Promise<void>;
        handleFetchEvent(event: FetchEvent): void;
    }
}
declare module "source/Cgi/msg-bus" {
    /**
     * Create a sendMessage function given a service worker URL.
     * @param {*} serviceWorkerUrl The URL to the service worker.
     * @returns sendMessage function for the service workrer.
     */
    export const sendMessageFor: (serviceWorkerUrl: string | URL) => (action: string, params?: unknown[]) => Promise<any>;
    /**
     * Event handler for recieved messages.
     * @param {*} event
     */
    export const onMessage: (event: MessageEvent) => void;
}
declare module "source/Cgi/index" {
    export * from "source/Cgi/msg-bus";
    export * from "source/Cgi/Base";
    export * from "source/Cgi/Shell";
    export * from "source/Cgi/Web";
    export * from "source/Cgi/WebBase";
    export * from "source/Cgi/Webview";
    export * from "source/Cgi/Worker";
}
declare module "source/Cli/Node" {
    import { PhpBase } from "source/Cli/Base";
    export class PhpNode extends PhpBase {
        constructor(args?: {});
    }
}
declare module "source/Cli/Shell" {
    import { PhpBase } from "source/Cli/Base";
    export class PhpShell extends PhpBase {
        constructor(args?: {});
    }
}
declare module "source/Cli/Runner/common" {
    export type Scope = {
        stdin: HTMLElement | null;
        canvas: HTMLElement | null;
        stdout: HTMLElement | null;
        stderr: HTMLElement | null;
        ini: string | null;
        libs: string[];
        files: string[];
        imports: Record<string, string | string[]>;
    };
    export const configAttributes: {
        readonly ini: "raw";
        readonly stdin: "querySelector";
        readonly stdout: "querySelector";
        readonly stderr: "querySelector";
        readonly libs: "jsonParse";
        readonly files: "jsonParse";
        readonly imports: "jsonParse";
        readonly canvas: "querySelector";
    };
    export function parseAttributes(element: HTMLElement, scope: Scope): Scope;
    export function resolveImports(importsConfig: Record<string, string | string[]>): Promise<Record<string, any>[]>;
}
declare module "source/Cli/Runner/Component" {
    class PhpScriptRunner extends HTMLElement {
        static observedAttributes: string[];
        private php;
        private scope;
        constructor();
        connectedCallback(): void;
        private initializePhpRuntime;
        private setupEventListeners;
        private updateOutput;
        private runPhpScript;
        static define(tagName?: string): void;
        attributeChangedCallback(_: string, oldValue: string, newValue: string): void;
    }
    export default PhpScriptRunner;
}
declare module "source/Cli/Web" {
    import { PhpBase } from "source/Cli/Base";
    export * from "source/Cli/Runner/Component";
    export class PhpWeb extends PhpBase {
        constructor(args?: {});
        startTransaction(): Promise<void>;
        commitTransaction(readOnly?: boolean): Promise<void>;
        refresh(): Promise<number>;
        _enqueue(callback: (...args: any[]) => Promise<any>, params?: any[], readOnly?: boolean): Promise<any>;
    }
}
declare module "source/Cli/Webview" {
    import { PhpBase } from "source/Cli/Base";
    export class PhpWebview extends PhpBase {
        constructor(args?: {});
        startTransaction(): Promise<void>;
        commitTransaction(readOnly?: boolean): Promise<void>;
        refresh(): Promise<number>;
        _enqueue(callback: (...args: any[]) => Promise<any>, params?: any[], readOnly?: boolean): Promise<any>;
    }
}
declare module "source/Cli/Worker" {
    import { PhpBase } from "source/Cli/Base";
    export class PhpWorker extends PhpBase {
        constructor(args?: {});
        startTransaction(): Promise<void>;
        commitTransaction(readOnly?: boolean): Promise<void>;
        refresh(): Promise<number>;
        _enqueue(callback: (...args: any[]) => Promise<any>, params?: any[], readOnly?: boolean): Promise<any>;
    }
}
declare module "source/Cli/Runner/tag" { }
declare module "source/Cli/Runner/index" {
    export * from "source/Cli/Runner/common";
    export * from "source/Cli/Runner/Component";
    export * from "source/Cli/Runner/tag";
}
declare module "source/Cli/index" {
    export * from "source/Cli/Base";
    export * from "source/Cli/Node";
    export * from "source/Cli/Shell";
    export * from "source/Cli/Web";
    export * from "source/Cli/Webview";
    export * from "source/Cli/Worker";
    export * from "source/Cli/Runner/index";
}
declare module "generated/config" {
    export const phpVersion = "8.3";
    export const phpVersionFull = "8.3.7";
}
//# sourceMappingURL=index.d.ts.map