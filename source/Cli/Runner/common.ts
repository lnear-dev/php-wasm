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

export const configAttributes = {
    ini: "raw",
    stdin: "querySelector",
    stdout: "querySelector",
    stderr: "querySelector",
    libs: "jsonParse",
    files: "jsonParse",
    imports: "jsonParse",
    canvas: "querySelector"
} as const;

type KnownAttribute = keyof typeof configAttributes;
type AttributeType = typeof configAttributes[KnownAttribute];

type GetAttributesByType<T extends AttributeType> = {
    [K in KnownAttribute]: typeof configAttributes[K] extends T ? K : never
}[KnownAttribute];
type QuerySelectorAttributes = GetAttributesByType<"querySelector">;
type JsonParseAttributes = GetAttributesByType<"jsonParse">;
type RawAttributes = GetAttributesByType<"raw">;

export function parseAttributes(
    element: HTMLElement,
    scope: Scope
): Scope {
    (Object.keys(configAttributes) as KnownAttribute[]).forEach((attr) => {
        const value = element.getAttribute(attr);
        if (value) {
            switch (configAttributes[attr]) {
                case "querySelector":
                    scope[attr as QuerySelectorAttributes] = document.querySelector(value) || null;
                    break;
                case "jsonParse":
                    try {
                        scope[attr as JsonParseAttributes] = JSON.parse(value);
                    } catch (error) {
                        console.error(`Error parsing ${attr}:`, error);
                    }
                    break;
                case "raw":
                    scope[attr as RawAttributes] = value;
                    break;
            }
        }
    });
    return scope;
}

// Resolve imports
export async function resolveImports(
    importsConfig: Record<string, string | string[]>
): Promise<Record<string, any>[]> {
    if (!importsConfig) { return []; }

    return Promise.all(
        Object.entries(importsConfig).map(async ([url, names]) => {
            const pkg = await import(url);
            if (typeof names === "string") {
                return { [names]: pkg };
            } else if (Array.isArray(names)) {
                return names.reduce((acc, name) => ({ ...acc, [name]: pkg[name] }), {});
            }
            return {};
        })
    );
}
