type AltLibDef = { name: string; url: string | URL; ini: boolean };
export function iniLines(
    libs: (LibDef | AltLibDef)[]
) {
    return libs.map((lib) => {
        if (typeof lib === "string" || lib instanceof URL) return `extension=${lib}`;
        if (typeof lib === "object" && (lib as AltLibDef).ini) return `extension=${String(lib.url).split("/").pop()}`;

    });
}