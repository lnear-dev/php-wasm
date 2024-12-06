export class fsOps {
	static async analyzePath(binary: Promise<PHPWasmModule>, path: string) {
		const result = (await binary).FS.analyzePath(path);

		if (!result.object) {
			return { exists: false };
		}

		const object = {
			exists: true,
			id: result.object.id,
			mode: result.object.mode,
			mount: {
				mountpoint: result.object.mount.mountpoint,
				mounts: result.object.mount.mounts.map((m) => m.mountpoint),
			},
			isDevice: result.object.isDevice,
			isFolder: result.object.isFolder,
			read: result.object.read,
			write: result.object.write,
		};

		return { ...result, object, parentObject: undefined };
	}

	static async readdir(binary: Promise<PHPWasmModule>, path: string) {
		return (await binary).FS.readdir(path);
	}

	static async readFile(
		binary: Promise<PHPWasmModule>,
		path: string,
		options: ReadFileOptions
	): Promise<Uint8Array> {
		return (await binary).FS.readFile(path, options);
	}

	static async stat(binary: Promise<PHPWasmModule>, path: string) {
		return (await binary).FS.stat(path);
	}

	static async mkdir(binary: Promise<PHPWasmModule>, path: string) {
		const php = await binary;
		const _result = php.FS.mkdir(path);

		return {
			id: _result.id,
			mode: _result.mode,
			mount: {
				mountpoint: _result.mount.mountpoint,
				mounts: _result.mount.mounts.map((m) => m.mountpoint),
			},
			isDevice: _result.isDevice,
			isFolder: _result.isFolder,
			read: _result.read,
			write: _result.write,
		};
	}

	static async rmdir(binary: Promise<PHPWasmModule>, path: string) {
		return (await binary).FS.rmdir(path);
	}

	static async rename(
		binary: Promise<PHPWasmModule>,
		path: string,
		newPath: string
	) {
		return (await binary).FS.rename(path, newPath);
	}

	static async writeFile(
		binary: Promise<PHPWasmModule>,
		path: string,
		data: string | ArrayBufferView,
		options?: WriteFileOptions
	) {
		const bin = await binary;

		const about = bin.FS.analyzePath(path);

		let forced = false;

		if (about.object && about.object.mode) {
			if (!(about.object.mode & 0o200)) {
				await bin.FS.chmod(path, about.object.mode | 0o200);
			}
		}

		const result = bin.FS.writeFile(path, data, options);

		if (forced) {
			await bin.FS.chmod(path, about.object.mode);
		}

		return result;
	}

	static async unlink(binary: Promise<PHPWasmModule>, path: string) {
		return (await binary).FS.unlink(path);
	}

	static async chmod(
		binary: Promise<PHPWasmModule>,
		path: string,
		mode: number
	) {
		return (await binary).FS.chmod(path, mode);
	}
}
