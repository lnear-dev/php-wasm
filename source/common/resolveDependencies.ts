export const resolveDependencies = (
	sharedLibs: LibDef[] | undefined,
	wrapper: { constructor: any }
): ResolvedDependencies => {
	const _files: FileDef[] = [];
	const _libs: LibDef[] = [];

	(sharedLibs || []).forEach((libDef) => {
		if (typeof libDef === "object") {
			if (typeof libDef.getLibs === "function") {
				_libs.push(...libDef.getLibs(wrapper.constructor));
			} else {
				_libs.push(libDef);
			}

			if (typeof libDef.getFiles === "function") {
				_files.push(...libDef.getFiles(wrapper.constructor));
			}
		} else {
			_libs.push(libDef);
		}
	});

	const files = _files.map((fileDef) => {
		const url = String(fileDef.url);
		const path = fileDef.path;
		const name = fileDef.name || path.split("/").pop()!;
		const parent = path.substring(0, path.length - name.length);
		return { parent, name, url };
	});

	const urlLibs: Record<string, string | URL> = {};

	const libs = _libs
		.map((libDef) => {
			if (typeof libDef === "string" || libDef instanceof URL) {
				const libStr = String(libDef);
				if (
					libStr.startsWith("/") ||
					libStr.startsWith("./") ||
					libStr.startsWith("https://") ||
					libStr.startsWith("http://")
				) {
					const name = libStr.split("/").pop()!;
					const url = libDef;
					urlLibs[name] = url;

					return { name, url: url as string | URL, ini: true };
				}

				return libDef;
			} else if (typeof libDef === "object") {
				const name =
					libDef.name ?? String(libDef.url).split("/").pop()!;
				if (libDef.url) {
					urlLibs[name] = libDef.url;
				}

				return libDef;
			}
		})
		.filter(Boolean) as Array<
		LibDef | { name: string; url: string | URL; ini: boolean }
	>;

	return { files, libs, urlLibs };
};
