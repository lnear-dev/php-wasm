var G = Object.defineProperty;
var q = (F, e, t) => e in F ? G(F, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : F[e] = t;
var w = (F, e, t) => q(F, typeof e != "symbol" ? e + "" : e, t);
class Deferred {
  constructor() {
    w(this, "promise");
    w(this, "resolve");
    w(this, "reject");
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
}
const incomplete = /* @__PURE__ */ new Map(), sendMessageFor = (F) => async (e, t = []) => {
  const r = window.crypto.randomUUID(), n = new Deferred();
  return incomplete.set(r, [
    n.resolve,
    n.reject,
    e,
    t
  ]), navigator.serviceWorker.getRegistration(F).then(
    (a) => {
      var o;
      return (o = a == null ? void 0 : a.active) == null ? void 0 : o.postMessage({ action: e, params: t, token: r });
    }
  ), n.promise;
}, onMessage = (F) => {
  if (F.data.re && incomplete.has(F.data.re)) {
    const [e, t, r, n] = incomplete.get(F.data.re);
    incomplete.delete(F.data.re), F.data.error ? t({ error: F.data.error, action: r, params: n }) : e(F.data.result);
  }
}, phpVersion = "8.3", phpVersionFull = "8.3.7", parseResponse = (F) => {
  const e = {}, t = [], r = new TextDecoder();
  let n = 0;
  for (; n < F.length; ) {
    if (F[n] === 13 && F[n + 1] === 10)
      if (t.length) {
        const a = r.decode(new Uint8Array(t).buffer), o = a.indexOf(":");
        o < 0 ? e[a] = "" : e[a.substring(0, o)] = a.substring(o + 2).trim(), t.length = 0, n += 2;
        continue;
      } else {
        n += 2;
        break;
      }
    t.push(F[n]), n++;
  }
  return { headers: e, body: new Uint8Array(F.slice(n)).buffer };
};
async function breakoutRequest(F) {
  let e = Promise.resolve("");
  F.body ? e = new Promise((r) => {
    const n = F.body.getReader(), a = [], o = ({ done: l, value: c }) => {
      if (c && a.push([...c].map((u) => String.fromCharCode(u)).join("")), !l)
        return n.read().then(o);
      r(a.join(""));
    };
    return n.read().then(o);
  }) : "arrayBuffer" in F ? e = F.arrayBuffer().then((r) => globalThis.TextDecoder ? new TextDecoder().decode(new Uint8Array(r)) : [...new Uint8Array(r)].map((n) => String.fromCharCode(n)).join("")) : F.on && (e = new Promise((r) => {
    let n = [];
    F.on("data", (a) => n.push(a)), F.on("end", () => r(Buffer.concat(n).toString("utf-8")));
  }));
  const t = new URL(F.url);
  return {
    url: t,
    method: F.method,
    get: t.search ? t.search.slice(1) : "",
    post: F.method === "POST" ? await e : null,
    contentType: F.method === "POST" && F.headers ? F.headers instanceof Headers ? F.headers.get("Content-Type") : F.headers["Content-Type"] : null
  };
}
class fsOps {
  static async analyzePath(e, t) {
    const r = (await e).FS.analyzePath(t);
    if (!r.object)
      return { exists: !1 };
    const n = {
      exists: !0,
      id: r.object.id,
      mode: r.object.mode,
      mount: {
        mountpoint: r.object.mount.mountpoint,
        mounts: r.object.mount.mounts.map((a) => a.mountpoint)
      },
      isDevice: r.object.isDevice,
      isFolder: r.object.isFolder,
      read: r.object.read,
      write: r.object.write
    };
    return { ...r, object: n, parentObject: void 0 };
  }
  static async readdir(e, t) {
    return (await e).FS.readdir(t);
  }
  static async readFile(e, t, r) {
    return (await e).FS.readFile(t, r);
  }
  static async stat(e, t) {
    return (await e).FS.stat(t);
  }
  static async mkdir(e, t) {
    const n = (await e).FS.mkdir(t);
    return {
      id: n.id,
      mode: n.mode,
      mount: {
        mountpoint: n.mount.mountpoint,
        mounts: n.mount.mounts.map((a) => a.mountpoint)
      },
      isDevice: n.isDevice,
      isFolder: n.isFolder,
      read: n.read,
      write: n.write
    };
  }
  static async rmdir(e, t) {
    return (await e).FS.rmdir(t);
  }
  static async rename(e, t, r) {
    return (await e).FS.rename(t, r);
  }
  static async writeFile(e, t, r, n) {
    const a = await e, o = a.FS.analyzePath(t);
    return o.object && o.object.mode && (o.object.mode & 128 || await a.FS.chmod(t, o.object.mode | 128)), a.FS.writeFile(t, r, n);
  }
  static async unlink(e, t) {
    return (await e).FS.unlink(t);
  }
  static async chmod(e, t, r) {
    return (await e).FS.chmod(t, r);
  }
}
const resolveDependencies = (F, e) => {
  const t = [], r = [];
  (F || []).forEach((l) => {
    typeof l == "object" ? (typeof l.getLibs == "function" ? r.push(...l.getLibs(e.constructor)) : r.push(l), typeof l.getFiles == "function" && t.push(...l.getFiles(e.constructor))) : r.push(l);
  });
  const n = t.map((l) => {
    const c = String(l.url), u = l.path, _ = l.name || u.split("/").pop();
    return { parent: u.substring(0, u.length - _.length), name: _, url: c };
  }), a = {}, o = r.map((l) => {
    if (typeof l == "string" || l instanceof URL) {
      const c = String(l);
      if (c.startsWith("/") || c.startsWith("./") || c.startsWith("https://") || c.startsWith("http://")) {
        const u = c.split("/").pop(), _ = l;
        return a[u] = _, { name: u, url: _, ini: !0 };
      }
      return l;
    } else if (typeof l == "object") {
      const c = l.name ?? String(l.url).split("/").pop();
      return l.url && (a[c] = l.url), l;
    }
  }).filter(Boolean);
  return { files: n, libs: o, urlLibs: a };
};
class OutputBuffer {
  // private readonly queue: Set<unknown> = new Set(); not sure what this is for
  constructor(e, t, r) {
    w(this, "buffer", []);
    w(this, "decoder", new TextDecoder());
    this.target = e, this.eventType = t, this.maxLength = r;
  }
  push(...e) {
    this.buffer.push(...e);
    const t = this.buffer.length - 1;
    this.maxLength === -1 && this.buffer[t] === 10 && this.flush(), this.maxLength >= 0 && this.buffer.length >= this.maxLength && this.flush();
  }
  flush() {
    if (!this.buffer.length)
      return;
    const e = [this.decoder.decode(new Uint8Array(this.buffer))], t = new CustomEvent(this.eventType, { detail: e });
    this.target["on" + this.eventType] && this.target["on" + this.eventType](t) === !1 || this.target.dispatchEvent(t) && this.buffer.splice(0);
  }
}
const STR = "string", NUM$2 = "number", z = class z extends EventTarget {
  constructor(t, r = {}) {
    super();
    w(this, "queue");
    w(this, "onerror");
    w(this, "onoutput");
    w(this, "onready");
    w(this, "encoder");
    w(this, "buffers");
    w(this, "autoTransaction");
    w(this, "transactionStarted");
    w(this, "shared");
    w(this, "phpArgs");
    w(this, "valueIndex");
    w(this, "binary");
    this.queue = [], this.onerror = function() {
    }, this.onoutput = function() {
    }, this.onready = function() {
    }, this.encoder = new TextEncoder(), this.buffers = {
      stdin: [],
      stdout: new OutputBuffer(this, "output", -1),
      stderr: new OutputBuffer(this, "error", -1)
    }, Object.freeze(this.buffers), this.autoTransaction = "autoTransaction" in r ? r.autoTransaction : !0, this.transactionStarted = !1, this.shared = r.shared = "shared" in r ? r.shared : {}, this.phpArgs = r;
    const n = {
      stdin: () => this.buffers.stdin.shift() ?? null,
      stdout: (f) => this.buffers.stdout.push(f),
      stderr: (f) => this.buffers.stderr.push(f),
      postRun: () => {
        const f = new CustomEvent("ready");
        this.onready(f), this.dispatchEvent(f);
      }
    }, a = { onRefresh: /* @__PURE__ */ new Set() }, o = globalThis.phpSettings ?? {}, l = r.locateFile || (() => {
    }), c = r.files || [], {
      files: u,
      libs: _,
      urlLibs: d
    } = resolveDependencies(r.sharedLibs, this);
    r.locateFile = (f, p) => {
      let m = l(f, p);
      if (m !== void 0)
        return m;
      if (d[f])
        return d[f];
    }, this.valueIndex = 0, this.binary = new t(
      Object.assign({}, n, o, r, a)
    ).then(async (f) => {
      f.ccall("pib_storage_init", NUM$2, [], []), f.FS.analyzePath("/preload").exists || f.FS.mkdir("/preload"), await Promise.all(
        c.concat(u).map(
          (m) => new Promise(
            (S) => f.FS.createPreloadedFile(
              m.parent,
              m.name,
              m.url,
              !0,
              !1,
              S
            )
          )
        )
      );
      const p = z.iniLines(_);
      return r.ini && p.push(r.ini.replace(/\n\s+/g, `
`)), f.FS.writeFile("/php.ini", p.join(`
`) + `
`), await f.ccall("pib_init", NUM$2, [], [], { async: !0 }), f;
    });
  }
  static iniLines(t) {
    return t.map((r) => {
      if (typeof r == "string" || r instanceof URL)
        return `extension=${r}`;
      if (typeof r == "object" && r.ini)
        return `extension=${String(r.url).split("/").pop()}`;
    });
  }
  inputString(t) {
    this.input(this.encoder.encode(t));
  }
  input(t) {
    this.buffers.stdin.push(...t);
  }
  flush() {
    this.buffers.stdout.flush(), this.buffers.stderr.flush();
  }
  async tokenize(t) {
    return this.binary.then(
      (r) => r.ccall("pib_tokenize", STR, [STR], [t])
    );
  }
  startTransaction() {
    return Promise.resolve();
  }
  commitTransaction(t = !1) {
    return Promise.resolve();
  }
  async _enqueue(t, r = [], n = !1) {
    const a = new Deferred();
    if (this.queue.push([t, r, a.resolve, a.reject]), !!this.queue.length) {
      for (await (this.autoTransaction && !n) ? this.startTransaction() : Promise.resolve(); this.queue.length; ) {
        const [o, l, c, u] = this.queue.shift();
        await o(...l).then(c).catch(u);
      }
      return await this.autoTransaction ? this.commitTransaction(n) : Promise.resolve(), a.promise;
    }
  }
  run(t) {
    return this._enqueue((r) => this._run(r), [t]);
  }
  on(t, r) {
    super.addEventListener(t, r);
  }
  async _run(t) {
    return (await this.binary).ccall(
      "pib_run",
      NUM$2,
      [STR],
      [`?>${t}`],
      { async: !0 }
    ).finally(() => this.flush());
  }
  exec(t) {
    return this._enqueue((r) => this._exec(r), [t]);
  }
  async _exec(t) {
    return (await this.binary).ccall(
      "pib_exec",
      STR,
      [STR],
      [t],
      { async: !0 }
    ).finally(() => this.flush());
  }
  async x(t, ...r) {
    const n = [], a = await this.binary;
    if (a.hasVrzno) {
      for (const l of r) {
        const c = `___value__${this.valueIndex++}`;
        this.shared[c] = l, n.push(c);
      }
      let o = "";
      for (t = [...t]; t.length || n.length; )
        t.length && (o += t.shift()), n.length && (o += `(vrzno_shared('${n.shift()}'))`);
      return o = `vrzno_zval( ${o} );`, a.zvalToJS(await this.exec(o));
    } else {
      const o = r.map((c) => JSON.stringify(c));
      t = [...t];
      let l = "";
      for (; t.length || n.length; )
        t.length && (l += t.shift()), o.length && (l += `(json_decode('${o.shift()}'))`);
      return this.exec(l);
    }
  }
  // async r(fragments, ...values) {
  async r(t, ...r) {
    const n = [];
    if ((await this.binary).hasVrzno) {
      for (const l of r) {
        const c = `___value__${this.valueIndex++}`;
        this.shared[c] = l, n.push(c);
      }
      let o = "";
      for (t = [...t]; t.length || n.length; )
        t.length && (o += t.shift()), n.length && (o += `(vrzno_shared('${n.shift()}'))`);
      return this.run(o);
    } else {
      const o = r.map((c) => JSON.stringify(c));
      t = [...t];
      let l = "";
      for (; t.length || n.length; )
        t.length && (l += t.shift()), o.length && (l += `(json_decode('${o.shift()}'))`);
      return this.run(l);
    }
  }
  async refresh() {
    const t = await this.binary;
    for (const r of t.onRefresh ?? [])
      r();
    return Object.keys(this.shared).forEach((r) => delete this.shared[r]), t.ccall("pib_refresh", NUM$2, [], [], { async: !0 });
  }
  analyzePath(t) {
    return this._enqueue(fsOps.analyzePath, [this.binary, t]);
  }
  readdir(t) {
    return this._enqueue(fsOps.readdir, [this.binary, t]);
  }
  readFile(t, r) {
    return this._enqueue(fsOps.readFile, [this.binary, t, r]);
  }
  stat(t) {
    return this._enqueue(fsOps.stat, [this.binary, t]);
  }
  mkdir(t) {
    return this._enqueue(fsOps.mkdir, [this.binary, t]);
  }
  rmdir(t) {
    return this._enqueue(fsOps.rmdir, [this.binary, t]);
  }
  rename(t, r) {
    return this._enqueue(fsOps.rename, [this.binary, t, r]);
  }
  writeFile(t, r, n) {
    return this._enqueue(fsOps.writeFile, [
      this.binary,
      t,
      r,
      n
    ]);
  }
  unlink(t) {
    return this._enqueue(fsOps.unlink, [this.binary, t]);
  }
};
w(z, "phpVersion", phpVersion), w(z, "phpVersionFull", phpVersionFull);
let PhpBase = z;
const NUM$1 = "number", putEnv = (F, e, t) => F.ccall(
  "wasm_sapi_cgi_putenv",
  "number",
  ["string", "string"],
  [e, t]
), X = class X {
  constructor(e, {
    docroot: t = "",
    prefix: r = "/php-wasm",
    exclude: n = [],
    rewrite: a = (C) => C,
    entrypoint: o,
    cookies: l = /* @__PURE__ */ new Map(),
    types: c = {},
    onRequest: u = (C, x) => {
    },
    notFound: _ = (C) => "",
    sharedLibs: d = [],
    files: f = [],
    autoTransaction: p = !0,
    maxRequestAge: m = 0,
    staticCacheTime: S = 6e4,
    dynamicCacheTime: h = 0,
    vHosts: g = [],
    env: y = {},
    ...b
  } = {}) {
    w(this, "docroot");
    w(this, "prefix");
    w(this, "exclude");
    w(this, "rewrite");
    w(this, "entrypoint");
    w(this, "cookies");
    w(this, "types");
    w(this, "onRequest");
    w(this, "notFound");
    w(this, "sharedLibs");
    w(this, "files");
    w(this, "phpArgs");
    w(this, "autoTransaction");
    w(this, "transactionStarted");
    w(this, "maxRequestAge");
    w(this, "staticCacheTime");
    w(this, "dynamicCacheTime");
    w(this, "vHosts");
    w(this, "env");
    w(this, "php");
    w(this, "input");
    w(this, "output");
    w(this, "error");
    w(this, "count");
    w(this, "queue");
    w(this, "extraActions");
    w(this, "binary");
    this.PHP = e, this.docroot = t, this.prefix = r, this.exclude = n, this.rewrite = a, this.entrypoint = o, this.cookies = l, this.types = c, this.onRequest = u, this.notFound = _, this.sharedLibs = d, this.files = [], this.phpArgs = b, this.autoTransaction = p, this.transactionStarted = !1, this.maxRequestAge = m, this.staticCacheTime = S, this.dynamicCacheTime = h, this.vHosts = g, this.env = { ...y }, this.php = null, this.input = [], this.output = [], this.error = [], this.count = 0, this.queue = [], this.extraActions = b.actions || {}, this.binary = this.refresh();
  }
  async _enqueue(e, t = [], r = !1) {
    const n = new Deferred();
    if (this.queue.push([e, t, n.resolve, n.reject]), !!this.queue.length) {
      for (; this.queue.length; ) {
        const [a, o, l, c] = this.queue.shift();
        await a(...o).then(l).catch(c);
      }
      return n.promise;
    }
  }
  refresh() {
    const { files: e, libs: t, urlLibs: r } = resolveDependencies(
      this.sharedLibs,
      this
    ), n = this.phpArgs.locateFile || (() => {
    }), a = (l, c) => {
      let u = n(l, c);
      if (u !== void 0)
        return u;
      if (r[l]) {
        const _ = r[l];
        return _ instanceof URL && _.protocol === "file:" ? _.pathname : String(_);
      }
    }, o = {
      persist: [{ mountPath: "/persist" }, { mountPath: "/config" }],
      ...this.phpArgs,
      stdin: () => this.input ? String(this.input.shift()).charCodeAt(0) : null,
      stdout: (l) => this.output.push(l),
      stderr: (l) => this.error.push(l),
      locateFile: a
    };
    return this.binary = new this.PHP(o).then(async (l) => {
      await l.ccall("pib_storage_init", NUM$1, [], [], { async: !0 }), l.FS.analyzePath("/preload").exists || l.FS.mkdir("/preload"), await Promise.all(
        this.files.concat(e).map(
          (u) => l.FS.createPreloadedFile(
            u.parent,
            u.name,
            n(u.url) ?? u.url,
            !0,
            !1
          )
        )
      );
      const c = PhpBase.iniLines(t);
      return this.phpArgs.ini && c.push(this.phpArgs.ini.replace(/\n\s+/g, `
`)), l.FS.writeFile("/php.ini", c.join(`
`) + `
`, {
        // encoding: "utf8",
      }), await l.ccall("wasm_sapi_cgi_init", "number", [], [], {
        async: !0
      }), await this.loadInit(l), l;
    });
  }
  async _beforeRequest() {
  }
  async _afterRequest() {
  }
  async request(e) {
    const {
      url: t,
      method: r = "GET",
      get: n,
      post: a,
      contentType: o
    } = await breakoutRequest(e);
    if (globalThis.caches) {
      const I = await (await caches.open("static-v1")).match(t);
      if (I) {
        const A = Number(
          I.headers.get("x-php-wasm-cache-time")
        );
        if (this.staticCacheTime > 0 && this.staticCacheTime > Date.now() - A)
          return this.onRequest(e, I), I;
      }
    }
    const l = await this.binary;
    await this._beforeRequest();
    let c = this.docroot, u, _ = this.prefix;
    for (const { pathPrefix: v, directory: I, entrypoint: A } of this.vHosts)
      if (v === t.pathname.slice(0, v.length)) {
        c = I, u = A, _ = v;
        break;
      }
    const d = this.rewrite(t.pathname);
    let f, p;
    typeof d == "object" ? (f = d.scriptName, p = c + d.path) : (p = c + "/" + d.slice((_ || this.prefix).length), f = p), u && (f = _ + "/" + u);
    let m = t.pathname;
    const S = p.split(".").pop();
    if (S && S !== "php" && S !== "phar") {
      const v = l.FS.analyzePath(p);
      if (v.exists && l.FS.isFile(v.object.mode)) {
        const I = new Response(
          // php.FS.readFile(path, { encoding: "binary", url }),
          l.FS.readFile(p, { encoding: "binary" }),
          {}
        );
        return I.headers.append(
          "x-php-wasm-cache-time",
          (/* @__PURE__ */ new Date()).getTime().toString()
        ), S in this.types && I.headers.append(
          "Content-type",
          this.types[S]
        ), globalThis.caches && (await caches.open("static-v1")).put(t, I.clone()), this.onRequest(e, I), I;
      } else v.exists && l.FS.isDir(v.object.mode) && m[-1 + m.length] !== "/" && (m += "/");
      p = c + "/index.php";
    }
    if (m += t.search, this.maxRequestAge > 0 && Date.now() - X.requestTimes.get(e) > this.maxRequestAge) {
      const v = new Response("408: Request Timed Out.", {
        status: 408
      });
      return this.onRequest(e, v), v;
    }
    if (!l.FS.analyzePath(p).exists) {
      const v = this.notFound ? this.notFound(e) : "404 - Not Found.";
      if (v)
        return v instanceof Response ? v : new Response(v, { status: 404 });
    }
    this.input = ["POST", "PUT", "PATCH"].includes(r) ? (a == null ? void 0 : a.split("")) ?? [] : [], this.output = [], this.error = [];
    const g = new URL(globalThis.location.toString() || e.url);
    putEnv(l, "PHP_VERSION", phpVersion), putEnv(l, "PHP_INI_SCAN_DIR", `/config:/preload:${c}`), putEnv(l, "PHPRC", "/php.ini");
    for (const [v, I] of Object.entries(this.env))
      putEnv(l, v, I);
    const y = g.protocol.slice(0, g.protocol.length - 1);
    putEnv(
      l,
      "SERVER_SOFTWARE",
      globalThis.navigator ? globalThis.navigator.userAgent : globalThis.process ? "Node " + globalThis.process.version : "Javascript - Unknown"
    ), putEnv(l, "REQUEST_METHOD", r), putEnv(l, "REMOTE_ADDR", "127.0.0.1"), putEnv(l, "HTTP_HOST", g.host), putEnv(l, "REQUEST_SCHEME", y), putEnv(l, "HTTPS", y === "https" ? "on" : "off"), putEnv(l, "DOCUMENT_ROOT", c), putEnv(l, "REQUEST_URI", m), putEnv(l, "SCRIPT_NAME", f), putEnv(l, "SCRIPT_FILENAME", p), putEnv(l, "PATH_TRANSLATED", p), putEnv(l, "QUERY_STRING", n), putEnv(
      l,
      "HTTP_COOKIE",
      [...this.cookies.entries()].map((v) => `${v[0]}=${v[1]}`).join(";")
    ), putEnv(l, "REDIRECT_STATUS", "200"), o && putEnv(l, "CONTENT_TYPE", o), putEnv(l, "CONTENT_LENGTH", String(this.input.length));
    let b = -1;
    try {
      b = await l.ccall(
        "main",
        "number",
        ["number", "string"],
        [this.input.length, p],
        { async: !0 }
      );
    } catch (v) {
      console.error(v);
      const I = `${"=".repeat(80)}

`, A = new Response(
        `500: Internal Server Error.
${I}Stacktrace:
${v.stack}
${I}STDERR:
${new TextDecoder().decode(new Uint8Array(this.error).buffer)}
${I}STDOUT:
${new TextDecoder().decode(new Uint8Array(this.output).buffer)}
${I}`,
        { status: 500 }
      );
      return this.onRequest(e, A), this.refresh(), A;
    } finally {
      b === 0 ? this._afterRequest() : (console.warn(
        new TextDecoder().decode(new Uint8Array(this.output).buffer)
      ), console.error(
        new TextDecoder().decode(new Uint8Array(this.error).buffer)
      ), this.refresh());
    }
    ++this.count;
    const C = parseResponse(this.output);
    let x = 200;
    for (const [v, I] of Object.entries(C.headers))
      v === "Status" && (x = parseInt(I.slice(0, 3)));
    if (C.headers["Set-Cookie"]) {
      const v = C.headers["Set-Cookie"], I = v.indexOf(";"), A = v.indexOf("="), k = v.slice(0, A), T = v.slice(1 + A, -1 + I - A);
      this.cookies.set(k, T);
    }
    const E = { ...C.headers };
    S && S in this.types || (E["Content-type"] = E["Content-type"] ?? "text/html; charset=utf-8"), C.headers.Location && (E.Location = C.headers.Location);
    const U = new Response(C.body || "", {
      headers: E,
      status: x,
      //@ts-ignore
      url: t
    });
    return this.onRequest(e, U), U;
  }
  analyzePath(e) {
    return this._enqueue(fsOps.analyzePath, [this.binary, e]);
  }
  readdir(e) {
    return this._enqueue(fsOps.readdir, [this.binary, e]);
  }
  readFile(e, t) {
    return this._enqueue(fsOps.readFile, [this.binary, e, t]);
  }
  stat(e) {
    return this._enqueue(fsOps.stat, [this.binary, e]);
  }
  mkdir(e) {
    return this._enqueue(fsOps.mkdir, [this.binary, e]);
  }
  rmdir(e) {
    return this._enqueue(fsOps.rmdir, [this.binary, e]);
  }
  rename(e, t) {
    return this._enqueue(fsOps.rename, [this.binary, e, t]);
  }
  writeFile(e, t, r = {}) {
    return this._enqueue(fsOps.writeFile, [
      this.binary,
      e,
      t,
      r
    ]);
  }
  unlink(e) {
    return this._enqueue(fsOps.unlink, [this.binary, e]);
  }
  async putEnv(e, t) {
    return (await this.binary).ccall(
      "wasm_sapi_cgi_putenv",
      "number",
      ["string", "string"],
      [e, t]
    );
  }
  async getSettings() {
    return {
      docroot: this.docroot,
      maxRequestAge: this.maxRequestAge,
      staticCacheTime: this.staticCacheTime,
      dynamicCacheTime: this.dynamicCacheTime,
      vHosts: this.vHosts
    };
  }
  setSettings({
    docroot: e,
    maxRequestAge: t,
    staticCacheTime: r,
    dynamicCacheTime: n,
    vHosts: a
  }) {
    this.docroot = e ?? this.docroot, this.maxRequestAge = t ?? this.maxRequestAge, this.staticCacheTime = r ?? this.staticCacheTime, this.dynamicCacheTime = n ?? this.dynamicCacheTime, this.vHosts = a ?? this.vHosts;
  }
  async getEnvs() {
    return { ...this.env };
  }
  setEnvs(e) {
    for (const t of Object.keys(this.env)) this.env[t] = "";
    Object.assign(this.env, e);
  }
  async storeInit() {
    const e = await this.getSettings(), t = await this.getEnvs();
    await this.writeFile(
      "/config/init.json",
      JSON.stringify({ settings: e, env: t }, null, 4)
      // { encoding: "utf8" }
    );
  }
  async loadInit(e) {
    const t = "/config/init.json", r = e instanceof Promise ? e : new Promise((u) => u(e));
    if (!(await fsOps.analyzePath(r, t)).exists)
      return;
    const a = await fsOps.readFile(r, t, {
      encoding: "utf8"
    }), o = JSON.parse(a.toLocaleString() || "{}"), { settings: l, env: c } = o;
    this.setSettings(l), this.setEnvs(c);
  }
};
w(X, "phpVersion", phpVersion), w(X, "phpVersionFull", phpVersionFull), w(X, "requestTimes", /* @__PURE__ */ new WeakMap());
let PhpCgiBase = X;
var PHP = (() => {
  var F;
  var _scriptName = typeof document < "u" ? (F = document.currentScript) == null ? void 0 : F.src : void 0;
  return function(moduleArg = {}) {
    var moduleRtn, Module = moduleArg, readyPromiseResolve, readyPromiseReject, readyPromise = new Promise((e, t) => {
      readyPromiseResolve = e, readyPromiseReject = t;
    }), ENVIRONMENT_IS_WEB = !0, ENVIRONMENT_IS_WORKER = !1;
    Module.preRun = Module.preRun || [], typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]), Module.preRun.push(() => Object.assign(ENV, Module.ENV || {})), Module.preRun = Module.preRun || [], typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]), Module.preRun.push(() => ENV.ICU_DATA = ENV.ICU_DATA || "/preload");
    var moduleOverrides = Object.assign({}, Module), arguments_ = [], thisProgram = "./this.program", quit_ = (e, t) => {
      throw t;
    }, scriptDirectory = "";
    function locateFile(e, t = null) {
      return Module.locateFile ? Module.locateFile(e, scriptDirectory) ?? t ?? scriptDirectory + e : t ?? scriptDirectory + e;
    }
    var readAsync, readBinary;
    typeof document < "u" && document.currentScript && (scriptDirectory = document.currentScript.src), _scriptName && (scriptDirectory = _scriptName), scriptDirectory.startsWith("blob:") ? scriptDirectory = "" : scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf("/") + 1), readAsync = (e) => fetch(e, { credentials: "same-origin" }).then((t) => t.ok ? t.arrayBuffer() : Promise.reject(new Error(t.status + " : " + t.url)));
    var out = Module.print || console.log.bind(console), err = Module.printErr || console.error.bind(console);
    Object.assign(Module, moduleOverrides), moduleOverrides = null, Module.arguments && (arguments_ = Module.arguments), Module.thisProgram && (thisProgram = Module.thisProgram);
    var dynamicLibraries = Module.dynamicLibraries || [], wasmBinary = Module.wasmBinary, wasmMemory, ABORT = !1, EXITSTATUS;
    function assert(e, t) {
      e || abort(t);
    }
    var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
    function updateMemoryViews() {
      var e = wasmMemory.buffer;
      Module.HEAP8 = HEAP8 = new Int8Array(e), Module.HEAP16 = HEAP16 = new Int16Array(e), Module.HEAPU8 = HEAPU8 = new Uint8Array(e), Module.HEAPU16 = HEAPU16 = new Uint16Array(e), Module.HEAP32 = HEAP32 = new Int32Array(e), Module.HEAPU32 = HEAPU32 = new Uint32Array(e), Module.HEAPF32 = HEAPF32 = new Float32Array(e), Module.HEAPF64 = HEAPF64 = new Float64Array(e);
    }
    if (Module.wasmMemory)
      wasmMemory = Module.wasmMemory;
    else {
      var INITIAL_MEMORY = Module.INITIAL_MEMORY || 134217728;
      wasmMemory = new WebAssembly.Memory({ initial: INITIAL_MEMORY / 65536, maximum: 65536 });
    }
    updateMemoryViews();
    var __ATPRERUN__ = [], __ATINIT__ = [], __ATMAIN__ = [], __ATEXIT__ = [], __ATPOSTRUN__ = [], __RELOC_FUNCS__ = [], runtimeInitialized = !1, runtimeExited = !1;
    function preRun() {
      if (Module.preRun)
        for (typeof Module.preRun == "function" && (Module.preRun = [Module.preRun]); Module.preRun.length; )
          addOnPreRun(Module.preRun.shift());
      callRuntimeCallbacks(__ATPRERUN__);
    }
    function initRuntime() {
      runtimeInitialized = !0, callRuntimeCallbacks(__RELOC_FUNCS__), !Module.noFSInit && !FS.initialized && FS.init(), FS.ignorePermissions = !1, SOCKFS.root = FS.mount(SOCKFS, {}, null), PIPEFS.root = FS.mount(PIPEFS, {}, null), callRuntimeCallbacks(__ATINIT__);
    }
    function preMain() {
      callRuntimeCallbacks(__ATMAIN__);
    }
    function exitRuntime() {
      ___funcs_on_exit(), callRuntimeCallbacks(__ATEXIT__), FS.quit(), IDBFS.quit(), runtimeExited = !0;
    }
    function postRun() {
      if (Module.postRun)
        for (typeof Module.postRun == "function" && (Module.postRun = [Module.postRun]); Module.postRun.length; )
          addOnPostRun(Module.postRun.shift());
      callRuntimeCallbacks(__ATPOSTRUN__);
    }
    function addOnPreRun(e) {
      __ATPRERUN__.unshift(e);
    }
    function addOnInit(e) {
      __ATINIT__.unshift(e);
    }
    function addOnPostRun(e) {
      __ATPOSTRUN__.unshift(e);
    }
    var runDependencies = 0, dependenciesFulfilled = null;
    function getUniqueRunDependency(e) {
      return e;
    }
    function addRunDependency(e) {
      var t;
      runDependencies++, (t = Module.monitorRunDependencies) == null || t.call(Module, runDependencies);
    }
    function removeRunDependency(e) {
      var r;
      if (runDependencies--, (r = Module.monitorRunDependencies) == null || r.call(Module, runDependencies), runDependencies == 0 && dependenciesFulfilled) {
        var t = dependenciesFulfilled;
        dependenciesFulfilled = null, t();
      }
    }
    function abort(e) {
      var r;
      (r = Module.onAbort) == null || r.call(Module, e), e = "Aborted(" + e + ")", err(e), ABORT = !0, e += ". Build with -sASSERTIONS for more info.";
      var t = new WebAssembly.RuntimeError(e);
      throw readyPromiseReject(t), t;
    }
    var dataURIPrefix = "data:application/octet-stream;base64,", isDataURI = (e) => e.startsWith(dataURIPrefix);
    function findWasmBinary() {
      var e = "php-cgi-web.js.wasm";
      return isDataURI(e) ? e : locateFile(e, e);
    }
    var wasmBinaryFile;
    function getBinarySync(e) {
      if (e == wasmBinaryFile && wasmBinary)
        return new Uint8Array(wasmBinary);
      throw "both async and sync fetching of the wasm failed";
    }
    function getBinaryPromise(e) {
      return !wasmBinary && ENVIRONMENT_IS_WEB ? typeof fetch == "function" ? fetch(e, { credentials: "same-origin" }).then((t) => {
        if (!t.ok)
          throw `failed to load wasm binary file at '${e}'`;
        return t.arrayBuffer();
      }).catch(() => getBinarySync(e)) : readAsync(e).then((t) => new Uint8Array(t), () => getBinarySync(e)) : Promise.resolve().then(() => getBinarySync(e));
    }
    function instantiateArrayBuffer(e, t, r) {
      return getBinaryPromise(e).then((n) => WebAssembly.instantiate(n, t)).then(r, (n) => {
        err(`failed to asynchronously prepare wasm: ${n}`), abort(n);
      });
    }
    function instantiateAsync(e, t, r, n) {
      return !e && typeof WebAssembly.instantiateStreaming == "function" && !isDataURI(t) && typeof fetch == "function" ? fetch(t, { credentials: "same-origin" }).then((a) => {
        var o = WebAssembly.instantiateStreaming(a, r);
        return o.then(n, function(l) {
          return err(`wasm streaming compile failed: ${l}`), err("falling back to ArrayBuffer instantiation"), instantiateArrayBuffer(t, r, n);
        });
      }) : instantiateArrayBuffer(t, r, n);
    }
    function getWasmImports() {
      return { env: wasmImports, wasi_snapshot_preview1: wasmImports, "GOT.mem": new Proxy(wasmImports, GOTHandler), "GOT.func": new Proxy(wasmImports, GOTHandler) };
    }
    function createWasm() {
      var e = getWasmImports();
      function t(n, a) {
        wasmExports = n.exports, wasmExports = relocateExports(wasmExports, 1024), wasmExports = Asyncify.instrumentWasmExports(wasmExports);
        var o = getDylinkMetadata(a);
        return o.neededDynlibs && (dynamicLibraries = o.neededDynlibs.concat(dynamicLibraries)), mergeLibSymbols(wasmExports), LDSO.init(), loadDylibs(), wasmExports = applySignatureConversions(wasmExports), addOnInit(wasmExports.__wasm_call_ctors), __RELOC_FUNCS__.push(wasmExports.__wasm_apply_data_relocs), removeRunDependency(), wasmExports;
      }
      addRunDependency();
      function r(n) {
        t(n.instance, n.module);
      }
      if (Module.instantiateWasm)
        try {
          return Module.instantiateWasm(e, t);
        } catch (n) {
          err(`Module.instantiateWasm callback failed with error: ${n}`), readyPromiseReject(n);
        }
      return wasmBinaryFile ?? (wasmBinaryFile = findWasmBinary()), instantiateAsync(wasmBinary, wasmBinaryFile, e, r).catch(readyPromiseReject), {};
    }
    var tempDouble, tempI64, asyncifyStubs = {}, ASM_CONSTS = { 1519711: () => !!Module.PGlite, 1519738: (e) => {
      const t = Module.targets.get(e);
      Module.PdoParams.delete(t);
    }, 1519820: (e) => {
      const t = Module.targets.get(e);
      return t ? t.length : 0;
    }, 1519909: (e) => {
      const t = Module.targets.get(e);
      return t.length ? Object.keys(t[0]).length : 0;
    }, 1520021: (e, t) => {
      const r = e, n = Module.targets.get(r);
      return !(t >= n.length);
    }, 1520171: (e, t) => {
      const r = Module.targets.get(e);
      if (r.length) {
        const n = Object.keys(r[0])[t], a = lengthBytesUTF8(n) + 1, o = _malloc(a);
        return stringToUTF8(n, o, a), o;
      }
      return 0;
    }, 1520394: (e, t, r, n) => {
      const a = Module.targets.get(e), o = -1 + t, l = n;
      if (o >= a.length)
        return null;
      const c = a[o], u = Object.keys(c)[r];
      Module.jsToZval(c[u], l);
    }, 1520647: (e, t, r, n) => {
      const a = Module.targets.get(e), o = t, l = r, c = n, u = new Uint8Array(Module.HEAPU8.buffer.slice(o, o + l));
      Module.PdoParams.has(a) || Module.PdoParams.set(a, []);
      const _ = Module.PdoParams.get(a);
      _[c] = u;
    }, 1520992: (e, t, r) => {
      const n = Module.targets.get(e), a = Module.zvalToJS(t), o = r;
      Module.PdoParams.has(n) || Module.PdoParams.set(n, []);
      const l = Module.PdoParams.get(n);
      l[o] = a;
    }, 1521258: (e, t, r) => {
      console.log("pdo_pglite_stmt_get_attribute", e, t, r);
    }, 1521320: (e, t, r) => {
      console.log("pdo_pglite_stmt_col_meta", e, t, r);
    }, 1521377: (e) => {
      console.log("pdo_pglite_stmt_cursor_closer", e);
    }, 1521431: (e) => {
      if (!Module.PGlite)
        throw new Error("The PGlite class must be provided as a constructor arg to PHP to use PGlite.");
      const t = UTF8ToString(e), r = new Module.PGlite(t ? "idb://" + t : void 0);
      return Module.tacked.add(r), Module.targets.add(r);
    }, 1521740: (e) => {
      const t = Module.targets.get(e);
      Module.tacked.delete(t);
    }, 1521805: (e, t, r) => {
      const n = Module.targets.get(e), a = UTF8ToString(t), o = (...l) => n.query(a, l);
      return o.query = a, Module.tacked.add(o), Module.targets.add(o);
    }, 1522038: (e, t, r) => (console.log("pdo_pglite_set_attr", e, t, r), !0), 1522103: (e, t) => (console.log("pdo_pglite_get_attr", e, t), 1), 1522161: (e) => {
      Module.persist && (Array.isArray(Module.persist) ? Module.persist : [Module.persist]).forEach((r) => {
        const n = r.mountPath || "/persist";
        r.localPath, FS.mkdir(n), FS.mount(IDBFS, { autoPersist: !1 }, n);
      });
    }, 1522785: (e, t, r) => {
      const n = Module.targets.get(e), a = UTF8ToString(t), o = r;
      if (!(a in n))
        return Module.jsToZval(void 0, o);
      Module.jsToZval(n[a], o);
    }, 1522986: (e, t, r, n, a) => {
      (() => {
        const o = Module.targets.get(e), l = UTF8ToString(t), c = r;
        o[l] = Module.callableToJs(c);
        const u = Module.ccall("vrzno_expose_closure", "number", ["number"], [c]);
        Module.fRegistry.register(o[l], u, o[l]);
      })();
    }, 1523343: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = UTF8ToString(t), o = r, l = Module.ccall("vrzno_expose_object", "number", ["number"], [o]);
        n[a] = Module.marshalZObject(l);
      })();
    }, 1523586: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = UTF8ToString(t), o = r, l = Module.ccall("vrzno_expose_array", "number", ["number"], [o]);
        n[a] = Module.marshalZArray(l);
      })();
    }, 1523827: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = UTF8ToString(t);
        delete r[n];
      })();
    }, 1523943: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = UTF8ToString(t);
        r[n] = null;
      })();
    }, 1524059: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = UTF8ToString(t);
        r[n] = !1;
      })();
    }, 1524176: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = UTF8ToString(t);
        r[n] = !0;
      })();
    }, 1524292: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = UTF8ToString(t);
        n[a] = r;
      })();
    }, 1524406: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = UTF8ToString(t);
        n[a] = r;
      })();
    }, 1524520: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = UTF8ToString(t), o = UTF8ToString(r);
        n[a] = o;
      })();
    }, 1524675: (e, t, r) => {
      let n = Module.targets.get(e);
      const a = t, o = r;
      if (n instanceof ArrayBuffer && (Module.bufferMaps.has(n) || Module.bufferMaps.set(n, new Uint8Array(n)), n = Module.bufferMaps.get(n)), !(a in n))
        return Module.jsToZval(void 0, o);
      Module.jsToZval(n[a], o);
    }, 1525032: (e, t, r, n) => {
      (() => {
        const a = Module.targets.get(e), o = t, l = r;
        a[o] = Module.callableToJs(l);
        const c = Module.ccall("vrzno_expose_closure", "number", ["number"], [l]);
        Module.fRegistry.register(a[o], c, a[o]);
      })();
    }, 1525353: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = t, o = r, l = Module.ccall("vrzno_expose_object", "number", ["number"], [o]);
        n[a] = Module.marshalZObject(l);
      })();
    }, 1525582: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = t, o = r, l = Module.ccall("vrzno_expose_array", "number", ["number"], [o]);
        n[a] = Module.marshalZArray(l);
      })();
    }, 1525809: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = t;
        delete r[n];
      })();
    }, 1525911: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = t;
        r[n] = null;
      })();
    }, 1526013: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = t;
        r[n] = !1;
      })();
    }, 1526116: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = t;
        r[n] = !0;
      })();
    }, 1526218: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = t;
        n[a] = r;
      })();
    }, 1526318: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = t;
        n[a] = r;
      })();
    }, 1526418: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e), a = t, o = UTF8ToString(r);
        n[a] = o;
      })();
    }, 1526559: (e, t, r) => {
      const n = Module.targets.get(e), a = t, o = r;
      return Array.isArray(n) ? typeof n[a] < "u" : n instanceof ArrayBuffer ? (Module.bufferMaps.has(n) || Module.bufferMaps.set(n, new Uint8Array(n)), Module.bufferMaps.get(n)[a] !== "undefined") : o ? !!n[a] : a in n;
    }, 1527038: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = UTF8ToString(t);
        delete r[n];
      })();
    }, 1527154: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = t;
        delete r[n];
      })();
    }, 1527256: (e) => {
      const t = Module.targets.get(e);
      let r;
      if (typeof t == "function")
        r = JSON.stringify({});
      else
        try {
          r = JSON.stringify({ ...t });
        } catch {
          r = JSON.stringify({});
        }
      const n = String(r), a = 1 + lengthBytesUTF8(n), o = _malloc(a);
      return stringToUTF8(n, o, a), o;
    }, 1527593: (e, t) => {
      const r = Module.targets.get(e);
      return UTF8ToString(t) in r;
    }, 1527698: (e, t, r) => {
      const n = Module.targets.get(e), a = UTF8ToString(t), o = r;
      return Module.jsToZval(n[a], o);
    }, 1527847: (e, t, r, n, a, o) => {
      const l = Module.targets.get(e), c = UTF8ToString(t), u = r, _ = n, d = a, f = o, p = [];
      for (let m = 0; m < _; m++) {
        const S = u + m * d, h = Module.getValue(S, "*"), g = Module.zvalToJS(h);
        p.push(g);
      }
      Module.jsToZval(l[c](...p), f);
    }, 1528214: (e, t, r, n, a) => {
      const o = Module.targets.get(e), l = t, c = r, u = n, _ = a, d = [];
      for (let f = 0; f < c; f++)
        d.push(Module.zvalToJS(l + f * u));
      return Module.jsToZval(o(...d), _);
    }, 1528464: (e, t, r, n) => {
      const a = Module._classes.get(e), o = t, l = r, c = n, u = [];
      for (let f = 0; f < l; f++)
        u.push(Module.zvalToJS(o + f * c));
      const _ = new a(...u), d = Module.targets.add(_);
      return Module.tacked.add(_), d;
    }, 1528777: (e) => {
      const t = Module.targets.get(e);
      Module.tacked.delete(t), Module.targets.remove(t);
    }, 1528881: (e) => {
      const t = Module.targets.get(e), r = String(t), n = 1 + lengthBytesUTF8(r), a = _malloc(n);
      return stringToUTF8(r, a, n), a;
    }, 1529057: () => {
      const e = {};
      return Module.tacked.add(e), Module.targets.add(e);
    }, 1529145: (e, t) => {
      const r = Module.targets.get(e), n = UTF8ToString(t);
      r.method = n;
    }, 1529251: (e, t) => {
      (() => {
        const r = Module.targets.get(e), n = UTF8ToString(t), a = n.indexOf(":"), o = n.substr(0, a).trim(), l = n.substr(1 + a).trim();
        r.headers = r.headers ?? {}, r.headers[o] = l;
      })();
    }, 1529551: (e, t) => {
      Module.targets.get(e), UTF8ToString(t).split(`
`).forEach((n) => {
        const a = Module.targets.get(e), o = n.indexOf(":"), l = n.substr(0, o).trim(), c = n.substr(1 + o).trim();
        a.headers = a.headers ?? {}, a.headers[l] = c;
      });
    }, 1529944: (e, t, r) => {
      (() => {
        const n = Module.targets.get(e);
        n.body = Module.HEAPU8.slice(t, t + r);
      })();
    }, 1530051: (e, t) => {
      const r = Module.targets.get(e);
      r.ignoreErrors = t;
    }, 1530126: (e) => {
      const { status: t } = Module.targets.get(e);
      return t;
    }, 1530190: ($0) => {
      const str = String(eval(UTF8ToString($0))), len = lengthBytesUTF8(str) + 1, loc = _malloc(len);
      return stringToUTF8(str, loc, len), loc;
    }, 1530343: (e, t) => {
      const r = UTF8ToString(e), n = UTF8ToString(t), a = globalThis[r], o = JSON.parse(n || "[]") || [], l = String(a(...o)), c = lengthBytesUTF8(l) + 1, u = _malloc(c);
      return stringToUTF8(l, u, c), u;
    }, 1530639: (e, t) => {
      const r = Number(UTF8ToString(e)), n = t;
      setTimeout(() => {
        Module.ccall("vrzno_exec_callback", "number", ["number", "number", "number", "number"], [n, null, 0, 0]), Module.ccall("vrzno_del_callback", "number", ["number"], [n]);
      }, r);
    }, 1530923: (e, t) => {
      const r = UTF8ToString(e), n = t;
      Module.jsToZval(Module[r], n);
    }, 1531008: (e, t) => {
      const r = UTF8ToString(e), n = t;
      Module.jsToZval(Module.shared[r], n);
    }, 1531100: (e, t) => {
      const r = UTF8ToString(e), n = t;
      Module.jsToZval(import(r), n);
    }, 1531185: () => {
      Module.tacked.clear(), Module.classes = /* @__PURE__ */ new WeakMap(), Module._classes = new Module.WeakerMap(), Module.callables = /* @__PURE__ */ new WeakMap(), Module._callables = new Module.WeakerMap(), [...Module.registered.entries()].forEach(([e, t]) => {
        Module.fRegistry.unregister(t), Module.registered.delete(e);
      });
    }, 1531512: () => {
      Module.hasVrzno = !0;
      const e = 0, t = 1, r = 2, n = 3, a = 4, o = 5, l = 6, c = 7, u = 8;
      Module.tacked = /* @__PURE__ */ new Set();
      const _ = globalThis.FinalizationRegistry || class {
        register() {
        }
        unregister() {
        }
      }, d = class {
        constructor(m) {
          this.registry = new _((S) => {
            Module.ccall("vrzno_expose_dec_refcount", "number", ["number"], [S]);
          });
        }
        register(m, S, h) {
          Module.unregisterTokens.has(h) || (Module.ccall("vrzno_expose_inc_refcount", "number", ["number"], [S]), this.registry.register(m, S, h), Module.unregisterTokens.set(h, S), Module.registered.set(S, h));
        }
        unregister(m) {
          if (this.registry.unregister(m), Module.unregisterTokens.has(m)) {
            const S = Module.unregisterTokens.get(m);
            Module.unregisterTokens.delete(m), Module.registered.delete(S);
          }
        }
      }, f = globalThis.WeakRef || class {
        constructor(m) {
          this.val = m;
        }
        deref() {
          return this.val;
        }
      };
      Module.fRegistry = new d(), Module.bufferMaps = /* @__PURE__ */ new WeakMap();
      const p = (m) => {
        const S = new _((h) => {
          m.registry === S && (m.map.has(h) && m.map.get(h).deref() || m.delete(h));
        });
        return S;
      };
      Module.WeakerMap = Module.WeakerMap || class {
        constructor(S) {
          this.map = /* @__PURE__ */ new Map(), this.registry = p(this), S && S.forEach(([h, g]) => this.set(h, g));
        }
        get size() {
          return this.map.size;
        }
        clear() {
          this.registry = p(this), this.map.clear();
        }
        delete(S) {
          this.has(S) && (this.registry.unregister(this.get(S)), this.map.delete(S));
        }
        [Symbol.iterator]() {
          const S = this.map[Symbol.iterator]();
          return { next: () => {
            do {
              const h = S.next();
              if (h.done)
                return { done: !0 };
              const [g, y] = h.value, b = y.deref();
              if (!b) {
                this.map.delete(g);
                continue;
              }
              return { done: !1, value: [g, b] };
            } while (!0);
          } };
        }
        entries() {
          return { [Symbol.iterator]: () => this[Symbol.iterator]() };
        }
        forEach(S) {
          for (const [h, g] of this)
            S(g, h, this);
        }
        get(S) {
          if (!this.has(S))
            return;
          const h = this.map.get(S).deref();
          return h || this.map.delete(S), h;
        }
        has(S) {
          if (!this.map.has(S))
            return !1;
          const h = this.map.get(S).deref();
          return h || this.map.delete(S), !!h;
        }
        keys() {
          return [...this].map((S) => S[0]);
        }
        set(S, h) {
          if (typeof h != "function" && typeof h != "object")
            throw new Error("WeakerMap values must be objects.");
          return this.has(S) && this.registry.unregister(this.get(S)), this.registry.register(h, S, h), this.map.set(S, new f(h));
        }
        values() {
          return [...this].map((S) => S[1]);
        }
      }, Module.unregisterTokens = /* @__PURE__ */ new WeakMap(), Module.registered = new Module.WeakerMap(), Module.marshalZObject = (m, S) => {
        const h = Module.ccall("vrzno_expose_target", "number", ["number"], [m]);
        if (h)
          return Module.targets.get(h);
        const g = new Proxy({}, { ownKeys: (y) => {
          const b = Module.ccall("vrzno_expose_object_keys", "number", ["number"], [m]);
          if (b) {
            const C = UTF8ToString(b), x = JSON.parse(C);
            return _free(b), x.push(...Reflect.ownKeys(y)), x;
          }
          return [];
        }, has: (y, b) => {
          const C = lengthBytesUTF8(b) + 1, x = _malloc(C);
          stringToUTF8(b, x, C);
          const E = Module.ccall("vrzno_expose_property_pointer", "number", ["number", "number"], [m, x]);
          return _free(x), E;
        }, get: (y, b) => {
          let C;
          if (b === Symbol.iterator) {
            const v = Module.ccall("vrzno_expose_object_keys", "number", ["number"], [m]), I = UTF8ToString(v), A = JSON.parse(I);
            _free(v);
            const k = () => {
              let T = -1;
              return { next() {
                return { done: ++T >= A.length, value: [A[T], Module.zvalToJS(Module.ccall("vrzno_expose_property_pointer", "number", ["number", "string"], [m, A[T]]))] };
              } };
            };
            return Module.fRegistry.register(k, m, k), k;
          }
          if (b === Symbol.toPrimitive) {
            const v = "__toString", I = lengthBytesUTF8(v) + 1, A = _malloc(I);
            stringToUTF8(v, A, I);
            const k = Module.ccall("vrzno_expose_method_pointer", "number", ["number", "number"], [m, A]);
            return _free(A), () => Module.callableToJs(k, m)();
          }
          b = String(b);
          const x = lengthBytesUTF8(b) + 1, E = _malloc(x);
          stringToUTF8(b, E, x);
          const U = Module.ccall("vrzno_expose_method_pointer", "number", ["number", "number"], [m, E]);
          if (U) {
            const v = Module.callableToJs(U, m), I = Module.ccall("vrzno_expose_closure", "number", ["number"], [U]);
            return Module.fRegistry.register(v, I, v), v;
          }
          if (C = Module.ccall("vrzno_expose_property_pointer", "number", ["number", "number"], [m, E]), _free(E), !!C)
            return Module.zvalToJS(C) ?? Reflect.get(y, b);
        }, getOwnPropertyDescriptor: (y, b) => {
          b = String(b);
          const C = lengthBytesUTF8(b) + 1, x = _malloc(C);
          stringToUTF8(b, x, C);
          const E = Module.ccall("vrzno_expose_property_pointer", "number", ["number", "number"], [m, x]);
          return _free(x), Module.zvalToJS(E), { configurable: !0, enumerable: !0, value: y[b] };
        } });
        return Module.fRegistry.register(g, m, g), g;
      }, Module.marshalZArray = (m, S) => {
        const h = new Proxy({}, { ownKeys: (g) => {
          const y = Module.ccall("vrzno_expose_array_keys", "number", ["number"], [m]);
          if (y) {
            const b = UTF8ToString(y), C = JSON.parse(b);
            return _free(y), C.push(...Reflect.ownKeys(g)), C;
          }
          return [];
        }, has: (g, y) => {
          switch (typeof y) {
            case "number":
              return !!Module.ccall("vrzno_expose_dimension_pointer", "number", ["number", "number"], [m, y]);
            case "string":
              const b = lengthBytesUTF8(y) + 1, C = _malloc(b);
              stringToUTF8(y, C, b);
              const x = Module.ccall("vrzno_expose_key_pointer", "number", ["number", "number"], [m, C]);
              return _free(C), x;
            default:
              return !1;
          }
        }, get: (g, y) => {
          let b;
          if (y === Symbol.iterator) {
            const x = Module.ccall("vrzno_expose_array_length", "number", ["number"], [m]), E = () => {
              let U = -1;
              return { next() {
                return { done: ++U >= x, value: Module.zvalToJS(Module.ccall("vrzno_expose_dimension_pointer", "number", ["number", "number"], [m, U])) };
              } };
            };
            return Module.fRegistry.register(E, m, E), E;
          }
          switch (typeof y) {
            case "number":
              b = Module.ccall("vrzno_expose_dimension_pointer", "number", ["number", "number"], [m, y]);
              break;
            case "string":
              y = String(y);
              const x = lengthBytesUTF8(y) + 1, E = _malloc(x);
              stringToUTF8(y, E, x), b = Module.ccall("vrzno_expose_key_pointer", "number", ["number", "number"], [m, E]), _free(E);
              break;
            default:
              return !1;
          }
          return b ? Module.zvalToJS(b) ?? Reflect.get(g, y) : void 0;
        }, getOwnPropertyDescriptor: (g, y) => {
          let b;
          switch (typeof y) {
            case "number":
              b = Module.ccall("vrzno_expose_dimension_pointer", "number", ["number", "number"], [m, y]);
              break;
            case "string":
              const C = lengthBytesUTF8(y) + 1, x = _malloc(C);
              stringToUTF8(y, x, C), b = Module.ccall("vrzno_expose_key_pointer", "number", ["number", "number"], [m, x]), _free(x);
              break;
            default:
              return !1;
          }
          return Module.zvalToJS(b), { configurable: !0, enumerable: !0, value: g[y] };
        } });
        return Module.fRegistry.register(h, m, h), h;
      }, Module.callableToJs = (m, S = null) => {
        if (Module._callables.has(m))
          return Module._callables.get(m);
        const h = (...g) => {
          if (!Module.callables.has(h)) {
            console.warn(`Tried to call ${h.name}, but PHPs memory has been refreshed.`);
            return;
          }
          let y = null;
          if (g.length) {
            y = Module.ccall("vrzno_expose_create_params", "number", ["number"], [g.length]);
            for (let C = 0; C < g.length; C++)
              Module.jsToZval(g[C], getValue(C * 4 + y, "*"));
          }
          const b = Module.ccall("vrzno_exec_callback", "number", ["number", "number", "number", "number"], [m, y, g.length, S]);
          if (g.length && Module.ccall("vrzno_expose_efree", "number", ["number"], [y]), b)
            return Module.zvalToJS(b);
        };
        return Object.defineProperty(h, "name", { value: `PHP_@{${m.toString()}}` }), Module.callables.set(h, m), Module._callables.set(m, h), h;
      }, Module.zvalToJS = Module.zvalToJS || ((m) => {
        if (!m)
          return;
        m = Module.ccall("vrzno_expose_zval_deref", "number", ["number"], [m]);
        const S = Module.ccall("vrzno_expose_zval_target", "number", ["number"], [m]);
        if (S)
          return Module.targets.get(S);
        const h = Module.ccall("vrzno_expose_type", "number", ["number"], [m]), g = Module.ccall("vrzno_expose_callable", "number", ["number"], [m]);
        if (g && h !== l) {
          const b = Module.callableToJs(g), C = Module.ccall("vrzno_expose_closure", "number", ["number"], [g]);
          return Module.fRegistry.register(b, C, b), b;
        }
        let y;
        switch (h) {
          case e:
            return;
          case t:
            return null;
          case n:
            return !0;
          case r:
            return !1;
          case a:
            return Module.ccall("vrzno_expose_long", "number", ["number"], [m]);
          case o:
            return y = Module.ccall("vrzno_expose_double", "number", ["number"], [m]), y ? getValue(y, "double") : null;
          case l:
            return y = Module.ccall("vrzno_expose_string", "number", ["number"], [m]), y ? UTF8ToString(y) : null;
          case c:
            const b = Module.ccall("vrzno_expose_array", "number", ["number"], [m]);
            return Module.marshalZArray(b, h);
          case u:
            const C = Module.ccall("vrzno_expose_object", "number", ["number"], [m]);
            return Module.marshalZObject(C, h);
          default:
            return null;
        }
      }), Module.jsToZval = Module.jsToZval || ((m, S) => {
        if (typeof m > "u")
          Module.ccall("vrzno_expose_create_undef", "number", ["number"], [S]);
        else if (m === null)
          Module.ccall("vrzno_expose_create_null", "number", ["number"], [S]);
        else if ([!0, !1].includes(m))
          Module.ccall("vrzno_expose_create_bool", "number", ["number", "number"], [m, S]);
        else if (m && ["function", "object"].includes(typeof m)) {
          const h = Module.targets.add(m), g = typeof m == "function" ? h : 0, y = g && !!(m.prototype && m.prototype.constructor);
          Module.tacked.add(m), Module.ccall("vrzno_expose_create_object_for_target", "number", ["number", "number", "number", "number"], [h, g, y, S]);
        } else if (typeof m == "number")
          Number.isInteger(m) ? Module.ccall("vrzno_expose_create_long", "number", ["number", "number"], [m, S]) : Number.isFinite(m) && Module.ccall("vrzno_expose_create_double", "number", ["number", "number"], [m, S]);
        else if (typeof m == "string") {
          const h = lengthBytesUTF8(m) + 1, g = _malloc(h);
          stringToUTF8(m, g, h), Module.ccall("vrzno_expose_create_string", "number", ["number", "number"], [g, S]), _free(g);
        }
      }), Module.UniqueIndex = Module.UniqueIndex || class {
        constructor() {
          this.byObject = /* @__PURE__ */ new WeakMap(), this.byInteger = new Module.WeakerMap(), this.id = 0, Object.defineProperty(this, "add", { configurable: !1, writable: !1, value: (S) => {
            if (this.byObject.has(S))
              return this.byObject.get(S);
            const h = ++this.id;
            return this.byObject.set(S, h), this.byInteger.set(h, S), h;
          } }), Object.defineProperty(this, "has", { configurable: !1, writable: !1, value: (S) => {
            if (this.byObject.has(S))
              return this.byObject.get(S);
          } }), Object.defineProperty(this, "hasId", { configurable: !1, writable: !1, value: (S) => {
            if (this.byInteger.has(S))
              return this.byInteger.get(S);
          } }), Object.defineProperty(this, "get", { configurable: !1, writable: !1, value: (S) => {
            if (this.byInteger.has(S))
              return this.byInteger.get(S);
          } }), Object.defineProperty(this, "getId", { configurable: !1, writable: !1, value: (S) => {
            if (this.byObject.has(S))
              return this.byObject.get(S);
          } }), Object.defineProperty(this, "remove", { configurable: !1, writable: !1, value: (S) => {
            const h = this.byInteger.get(S);
            h && (this.byObject.delete(h), this.byInteger.delete(S));
          } });
        }
      }, Module.classes = /* @__PURE__ */ new WeakMap(), Module._classes = new Module.WeakerMap(), Module.targets = new Module.UniqueIndex(), Module.callables = /* @__PURE__ */ new WeakMap(), Module._callables = new Module.WeakerMap(), Module.targets.add(globalThis), Module.PdoParams = /* @__PURE__ */ new WeakMap();
    }, 1545721: (e) => {
      const t = Module.targets.get(e);
      return Module.classes.get(t);
    }, 1545799: (e, t) => {
      const r = Module.targets.get(e);
      Module.classes.set(r, t), Module._classes.set(t, r);
    }, 1545907: (e, t, r, n) => {
      const a = Module.targets.get(e), o = t, l = r;
      let c = n;
      return a.status >= 400 && !a.context.ignoreErrors ? 0 : (l >= a.buffer.length ? c = 0 : l + c > a.buffer.length && (c = a.buffer.length - l), c && Module.HEAPU8.set(a.buffer.slice(l, l + c), o), c);
    }, 1546299: (e) => {
      const t = Module.targets.get(e);
      Module.tacked.delete(t);
    }, 1546372: (e) => {
      const t = Module._classes.get(e);
      return t ? Module.targets.getId(t) : Module.targets.add(globalThis);
    }, 1546507: (e, t) => {
      let r = Module.targets.get(e);
      const n = t;
      return r instanceof ArrayBuffer && (Module.bufferMaps.has(r) || Module.bufferMaps.set(r, new Uint8Array(r)), r = Module.bufferMaps.get(r)), (Array.isArray(r) || ArrayBuffer.isView(r)) && n >= 0 && n < r.length ? 1 : 0;
    }, 1546870: (e, t, r) => {
      let n = Module.targets.get(e);
      const a = t, o = r;
      return n instanceof ArrayBuffer && (Module.bufferMaps.has(n) || Module.bufferMaps.set(n, new Uint8Array(n)), n = Module.bufferMaps.get(n)), Module.jsToZval(n[a], o);
    }, 1547165: (e) => {
      const t = Module.targets.get(e);
      t && Module.tacked.delete(t);
    } };
    function __asyncjs__pdo_pglite_real_stmt_execute(e, t) {
      return Asyncify.handleAsync(async () => {
        const r = Module.targets.get(e);
        Module.PdoParams.has(r) || Module.PdoParams.set(r, []);
        const n = Module.PdoParams.get(r);
        try {
          const a = await r(...n), o = a.rows ?? [], l = a.fields ?? [], c = /* @__PURE__ */ new Map();
          l.forEach((d) => {
            c.set(d.name, d);
          });
          const u = new TextDecoder(), _ = o.map((d) => {
            const f = {};
            for (const [p, m] of Object.entries(d)) {
              if (c.has(p) && c.get(p).dataTypeID === 17) {
                f[p] = m ? u.decode(m) : null;
                continue;
              }
              f[p] = m;
            }
            return f;
          });
          return Module.tacked.add(_), Module.targets.add(_);
        } catch (a) {
          const o = String(a.message), l = lengthBytesUTF8(o) + 1, c = _malloc(l);
          return console.error(o, r.query, a), stringToUTF8(o, c, l), setValue(t, c, "*"), 0;
        }
      });
    }
    __asyncjs__pdo_pglite_real_stmt_execute.sig = "iii";
    function __asyncjs__pdo_pglite_real_doer(e, t) {
      return Asyncify.handleAsync(async () => {
        console.log("pdo_pglite_handle_doer", e, UTF8ToString(t)), await Module.targets.get(e).query(UTF8ToString(t));
      });
    }
    __asyncjs__pdo_pglite_real_doer.sig = "vii";
    function __asyncjs__pdo_pglite_real_handle_begin(e) {
      return Asyncify.handleAsync(async () => {
        await Module.targets.get(e).query("BEGIN");
      });
    }
    __asyncjs__pdo_pglite_real_handle_begin.sig = "vi";
    function __asyncjs__pdo_pglite_real_handle_commit(e) {
      return Asyncify.handleAsync(async () => {
        await Module.targets.get(e).query("COMMIT");
      });
    }
    __asyncjs__pdo_pglite_real_handle_commit.sig = "vi";
    function __asyncjs__pdo_pglite_real_handle_rollback(e) {
      return Asyncify.handleAsync(async () => {
        await Module.targets.get(e).query("ROLLBACK");
      });
    }
    __asyncjs__pdo_pglite_real_handle_rollback.sig = "vi";
    function __asyncjs__pdo_pglite_real_last_insert_id(e, t, r) {
      return Asyncify.handleAsync(async () => {
        try {
          const n = Module.targets.get(e);
          if (t) {
            const a = UTF8ToString(t);
            console.log("SELECT CURRVAL($1)", a);
            const o = await n.query("SELECT CURRVAL($1)", a);
            console.log(o);
          } else {
            console.log("SELECT LASTVAL()");
            const a = await n.query("SELECT LASTVAL()");
            console.log(a);
          }
        } catch (n) {
          console.error(n);
          const a = String(n), o = lengthBytesUTF8(a), l = _malloc(o);
          stringToUTF8(a, l, o), setValue(r, l, "*");
        }
        return 0;
      });
    }
    __asyncjs__pdo_pglite_real_last_insert_id.sig = "iiii";
    function __asyncjs__php_stream_fetch_real_open(e, t, r, n, a) {
      return Asyncify.handleAsync(async () => {
        const o = UTF8ToString(e), l = Module.targets.get(t) || {}, c = await fetch(o, l), u = new Uint8Array(await c.arrayBuffer()), _ = c.status, d = [...c.headers.entries()].map(([S, h]) => `${S}: ${h}`);
        d.unshift(`HTTP/1.1 ${c.status} ${c.statusText}`);
        const f = _malloc(r * d.length);
        setValue(n, f, "*"), setValue(a, d.length, "i32");
        let p = 0;
        for (const S of d) {
          const h = lengthBytesUTF8(S) + 1, g = _malloc(h);
          stringToUTF8(S, g, h), setValue(f + p * r, g, "i" + 8 * r), p++;
        }
        const m = { status: _, buffer: u, context: l };
        return Module.tacked.add(m), Module.tacked.delete(l), Module.targets.add(m);
      });
    }
    __asyncjs__php_stream_fetch_real_open.sig = "iiiiii";
    function __asyncjs__vrzno_await_internal(e, t) {
      return Asyncify.handleAsync(async () => {
        const n = await Module.targets.get(e);
        Module.jsToZval(n, t);
      });
    }
    __asyncjs__vrzno_await_internal.sig = "vii";
    function ExitStatus(e) {
      this.name = "ExitStatus", this.message = `Program terminated with exit(${e})`, this.status = e;
    }
    var GOT = {}, currentModuleWeakSymbols = /* @__PURE__ */ new Set([]), GOTHandler = { get(e, t) {
      var r = GOT[t];
      return r || (r = GOT[t] = new WebAssembly.Global({ value: "i32", mutable: !0 })), currentModuleWeakSymbols.has(t) || (r.required = !0), r;
    } }, callRuntimeCallbacks = (e) => {
      for (; e.length > 0; )
        e.shift()(Module);
    }, UTF8Decoder = typeof TextDecoder < "u" ? new TextDecoder() : void 0, UTF8ArrayToString = (e, t, r) => {
      t >>>= 0;
      for (var n = t + r, a = t; e[a] && !(a >= n); ) ++a;
      if (a - t > 16 && e.buffer && UTF8Decoder)
        return UTF8Decoder.decode(e.subarray(t, a));
      for (var o = ""; t < a; ) {
        var l = e[t++];
        if (!(l & 128)) {
          o += String.fromCharCode(l);
          continue;
        }
        var c = e[t++] & 63;
        if ((l & 224) == 192) {
          o += String.fromCharCode((l & 31) << 6 | c);
          continue;
        }
        var u = e[t++] & 63;
        if ((l & 240) == 224 ? l = (l & 15) << 12 | c << 6 | u : l = (l & 7) << 18 | c << 12 | u << 6 | e[t++] & 63, l < 65536)
          o += String.fromCharCode(l);
        else {
          var _ = l - 65536;
          o += String.fromCharCode(55296 | _ >> 10, 56320 | _ & 1023);
        }
      }
      return o;
    }, getDylinkMetadata = (e) => {
      var t = 0, r = 0;
      function n() {
        return e[t++];
      }
      function a() {
        for (var P = 0, H = 1; ; ) {
          var R = e[t++];
          if (P += (R & 127) * H, H *= 128, !(R & 128)) break;
        }
        return P;
      }
      function o() {
        var P = a();
        return t += P, UTF8ArrayToString(e, t - P, P);
      }
      function l(P, H) {
        if (P) throw new Error(H);
      }
      var c = "dylink.0";
      if (e instanceof WebAssembly.Module) {
        var u = WebAssembly.Module.customSections(e, c);
        u.length === 0 && (c = "dylink", u = WebAssembly.Module.customSections(e, c)), l(u.length === 0, "need dylink section"), e = new Uint8Array(u[0]), r = e.length;
      } else {
        var _ = new Uint32Array(new Uint8Array(e.subarray(0, 24)).buffer), d = _[0] == 1836278016;
        l(!d, "need to see wasm magic number"), l(e[8] !== 0, "need the dylink section to be first"), t = 9;
        var f = a();
        r = t + f, c = o();
      }
      var p = { neededDynlibs: [], tlsExports: /* @__PURE__ */ new Set(), weakImports: /* @__PURE__ */ new Set() };
      if (c == "dylink") {
        p.memorySize = a(), p.memoryAlign = a(), p.tableSize = a(), p.tableAlign = a();
        for (var m = a(), S = 0; S < m; ++S) {
          var h = o();
          p.neededDynlibs.push(h);
        }
      } else {
        l(c !== "dylink.0");
        for (var g = 1, y = 2, b = 3, C = 4, x = 256, E = 3, U = 1; t < r; ) {
          var v = n(), I = a();
          if (v === g)
            p.memorySize = a(), p.memoryAlign = a(), p.tableSize = a(), p.tableAlign = a();
          else if (v === y)
            for (var m = a(), S = 0; S < m; ++S)
              h = o(), p.neededDynlibs.push(h);
          else if (v === b)
            for (var A = a(); A--; ) {
              var k = o(), T = a();
              T & x && p.tlsExports.add(k);
            }
          else if (v === C)
            for (var A = a(); A--; ) {
              o();
              var k = o(), T = a();
              (T & E) == U && p.weakImports.add(k);
            }
          else
            t += I;
        }
      }
      return p;
    };
    function getValue(e, t = "i8") {
      switch (t.endsWith("*") && (t = "*"), t) {
        case "i1":
          return HEAP8[e >>> 0];
        case "i8":
          return HEAP8[e >>> 0];
        case "i16":
          return HEAP16[e >>> 1 >>> 0];
        case "i32":
          return HEAP32[e >>> 2 >>> 0];
        case "i64":
          abort("to do getValue(i64) use WASM_BIGINT");
        case "float":
          return HEAPF32[e >>> 2 >>> 0];
        case "double":
          return HEAPF64[e >>> 3 >>> 0];
        case "*":
          return HEAPU32[e >>> 2 >>> 0];
        default:
          abort(`invalid type for getValue: ${t}`);
      }
    }
    var newDSO = (e, t, r) => {
      var n = { refcount: 1 / 0, name: e, exports: r, global: !0 };
      return LDSO.loadedLibsByName[e] = n, t != null && (LDSO.loadedLibsByHandle[t] = n), n;
    }, LDSO = { loadedLibsByName: {}, loadedLibsByHandle: {}, init() {
      newDSO("__main__", 0, wasmImports);
    } }, ___heap_base = 35246752, alignMemory = (e, t) => Math.ceil(e / t) * t, getMemory = (e) => {
      if (runtimeInitialized)
        return _calloc(e, 1);
      var t = ___heap_base, r = t + alignMemory(e, 16);
      return ___heap_base = r, GOT.__heap_base.value = r, t;
    }, isInternalSym = (e) => ["__cpp_exception", "__c_longjmp", "__wasm_apply_data_relocs", "__dso_handle", "__tls_size", "__tls_align", "__set_stack_limits", "_emscripten_tls_init", "__wasm_init_tls", "__wasm_call_ctors", "__start_em_asm", "__stop_em_asm", "__start_em_js", "__stop_em_js"].includes(e) || e.startsWith("__em_js__"), uleb128Encode = (e, t) => {
      e < 128 ? t.push(e) : t.push(e % 128 | 128, e >> 7);
    }, sigToWasmTypes = (e) => {
      for (var t = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, r = { parameters: [], results: e[0] == "v" ? [] : [t[e[0]]] }, n = 1; n < e.length; ++n)
        r.parameters.push(t[e[n]]);
      return r;
    }, generateFuncType = (e, t) => {
      var r = e.slice(0, 1), n = e.slice(1), a = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
      t.push(96), uleb128Encode(n.length, t);
      for (var o = 0; o < n.length; ++o)
        t.push(a[n[o]]);
      r == "v" ? t.push(0) : t.push(1, a[r]);
    }, convertJsFunctionToWasm = (e, t) => {
      if (typeof WebAssembly.Function == "function")
        return new WebAssembly.Function(sigToWasmTypes(t), e);
      var r = [1];
      generateFuncType(t, r);
      var n = [0, 97, 115, 109, 1, 0, 0, 0, 1];
      uleb128Encode(r.length, n), n.push(...r), n.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
      var a = new WebAssembly.Module(new Uint8Array(n)), o = new WebAssembly.Instance(a, { e: { f: e } }), l = o.exports.f;
      return l;
    }, wasmTableMirror = [], wasmTable = new WebAssembly.Table({ initial: 5064, element: "anyfunc" }), getWasmTableEntry = (e) => {
      var t = wasmTableMirror[e];
      return t || (e >= wasmTableMirror.length && (wasmTableMirror.length = e + 1), wasmTableMirror[e] = t = wasmTable.get(e)), t;
    }, updateTableMap = (e, t) => {
      if (functionsInTableMap)
        for (var r = e; r < e + t; r++) {
          var n = getWasmTableEntry(r);
          n && functionsInTableMap.set(n, r);
        }
    }, functionsInTableMap, getFunctionAddress = (e) => (functionsInTableMap || (functionsInTableMap = /* @__PURE__ */ new WeakMap(), updateTableMap(0, wasmTable.length)), functionsInTableMap.get(e) || 0), freeTableIndexes = [], getEmptyTableSlot = () => {
      if (freeTableIndexes.length)
        return freeTableIndexes.pop();
      try {
        wasmTable.grow(1);
      } catch (e) {
        throw e instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : e;
      }
      return wasmTable.length - 1;
    }, setWasmTableEntry = (e, t) => {
      wasmTable.set(e, t), wasmTableMirror[e] = wasmTable.get(e);
    }, addFunction = (e, t) => {
      var r = getFunctionAddress(e);
      if (r)
        return r;
      var n = getEmptyTableSlot();
      try {
        setWasmTableEntry(n, e);
      } catch (o) {
        if (!(o instanceof TypeError))
          throw o;
        var a = convertJsFunctionToWasm(e, t);
        setWasmTableEntry(n, a);
      }
      return functionsInTableMap.set(e, n), n;
    }, updateGOT = (e, t) => {
      for (var r in e)
        if (!isInternalSym(r)) {
          var n = e[r];
          r.startsWith("orig$") && (r = r.split("$")[1], t = !0), GOT[r] || (GOT[r] = new WebAssembly.Global({ value: "i32", mutable: !0 })), (t || GOT[r].value == 0) && (typeof n == "function" ? GOT[r].value = addFunction(n) : typeof n == "number" ? GOT[r].value = n : err(`unhandled export type for '${r}': ${typeof n}`));
        }
    }, relocateExports = (e, t, r) => {
      var n = {};
      for (var a in e) {
        var o = e[a];
        typeof o == "object" && (o = o.value), typeof o == "number" && (o += t), n[a] = o;
      }
      return updateGOT(n, r), n;
    }, isSymbolDefined = (e) => {
      var t = wasmImports[e];
      return !(!t || t.stub || e in asyncifyStubs && !asyncifyStubs[e]);
    }, setTempRet0 = (e) => __emscripten_tempret_set(e), _setTempRet0 = setTempRet0;
    Module._setTempRet0 = _setTempRet0;
    var createDyncallWrapper = (e) => {
      var t = [], r = [0, 97, 115, 109, 1, 0, 0, 0];
      t.push(r);
      var n = [e[0].replace("j", "i"), "i", e.slice(1).replace(/j/g, "ii")].join(""), a = [3];
      generateFuncType(n, a), generateFuncType(e, a), generateFuncType("vi", a);
      var o = [1];
      uleb128Encode(a.length, o), o.push(...a), t.push(o);
      var l = [2, 15, 2, 1, 101, 1, 116, 1, 112, 0, 0, 1, 101, 1, 114, 0, 2];
      t.push(l);
      var c = [3, 2, 1, 0];
      t.push(c);
      var u = [7, 5, 1, 1, 102, 0, 1];
      t.push(u);
      var _ = [];
      e[0] === "j" ? _ = [1, 1, 126] : _.push(0);
      function d(C) {
        _.push(32), uleb128Encode(C, _);
      }
      for (var f = 1, p = 1; p < e.length; p++)
        e[p] == "j" ? (d(f + 1), _.push(173, 66, 32, 134), d(f), _.push(172, 132), f += 2) : (d(f), f++);
      _.push(32, 0, 17, 1, 0), e[0] === "j" && (_.push(34), uleb128Encode(f, _), _.push(66, 32, 136, 167, 16, 0), d(f), _.push(167)), _.push(11);
      var m = [1];
      uleb128Encode(_.length, m), m.push(..._);
      var S = [10];
      uleb128Encode(m.length, S), S.push(...m), t.push(S);
      var h = new Uint8Array([].concat.apply([], t)), g = new WebAssembly.Module(h), y = new WebAssembly.Instance(g, { e: { t: wasmTable, r: setTempRet0 } }), b = y.exports.f;
      return b;
    }, dynCallLegacy = (e, t, r) => {
      e = e.replace(/p/g, "i"), "dynCall_" + e in Module || (Module["dynCall_" + e] = createDyncallWrapper(e));
      var n = Module["dynCall_" + e];
      return n(t, ...r);
    }, dynCall = (e, t, r = []) => {
      var n = dynCallLegacy(e, t, r);
      return e[0] == "p" ? n >>> 0 : n;
    }, stackSave = () => _emscripten_stack_get_current(), stackRestore = (e) => __emscripten_stack_restore(e), createInvokeFunction = (e) => (t, ...r) => {
      var n = stackSave();
      try {
        return dynCall(e, t, r);
      } catch (a) {
        if (stackRestore(n), a !== a + 0) throw a;
        _setThrew(1, 0);
      }
    }, resolveGlobalSymbol = (e, t = !1) => {
      var r;
      return t && "orig$" + e in wasmImports && (e = "orig$" + e), isSymbolDefined(e) ? r = wasmImports[e] : e.startsWith("invoke_") && (r = wasmImports[e] = createInvokeFunction(e.split("_")[1])), { sym: r, name: e };
    }, UTF8ToString = (e, t) => (e >>>= 0, e ? UTF8ArrayToString(HEAPU8, e, t) : ""), loadWebAssemblyModule = (binary, flags, libName, localScope, handle) => {
      var metadata = getDylinkMetadata(binary);
      currentModuleWeakSymbols = metadata.weakImports;
      function loadModule() {
        var firstLoad = !handle || !HEAP8[handle + 8 >>> 0];
        if (firstLoad) {
          var memAlign = Math.pow(2, metadata.memoryAlign), memoryBase = metadata.memorySize ? alignMemory(getMemory(metadata.memorySize + memAlign), memAlign) : 0, tableBase = metadata.tableSize ? wasmTable.length : 0;
          handle && (HEAP8[handle + 8 >>> 0] = 1, HEAPU32[handle + 12 >>> 2 >>> 0] = memoryBase, HEAP32[handle + 16 >>> 2 >>> 0] = metadata.memorySize, HEAPU32[handle + 20 >>> 2 >>> 0] = tableBase, HEAP32[handle + 24 >>> 2 >>> 0] = metadata.tableSize);
        } else
          memoryBase = HEAPU32[handle + 12 >>> 2 >>> 0], tableBase = HEAPU32[handle + 20 >>> 2 >>> 0];
        var tableGrowthNeeded = tableBase + metadata.tableSize - wasmTable.length;
        tableGrowthNeeded > 0 && wasmTable.grow(tableGrowthNeeded);
        var moduleExports;
        function resolveSymbol(e) {
          var t = resolveGlobalSymbol(e).sym;
          return !t && localScope && (t = localScope[e]), t || (t = moduleExports[e]), t;
        }
        var proxyHandler = { get(e, t) {
          switch (t) {
            case "__memory_base":
              return memoryBase;
            case "__table_base":
              return tableBase;
          }
          if (t in wasmImports && !wasmImports[t].stub)
            return wasmImports[t];
          if (!(t in e)) {
            var r;
            e[t] = (...n) => (r || (r = resolveSymbol(t)), r(...n));
          }
          return e[t];
        } }, proxy = new Proxy({}, proxyHandler), info = { "GOT.mem": new Proxy({}, GOTHandler), "GOT.func": new Proxy({}, GOTHandler), env: proxy, wasi_snapshot_preview1: proxy };
        function postInstantiation(module, instance) {
          updateTableMap(tableBase, metadata.tableSize), moduleExports = relocateExports(instance.exports, memoryBase), moduleExports = Asyncify.instrumentWasmExports(moduleExports), flags.allowUndefined || reportUndefinedSymbols();
          function addEmAsm(addr, body) {
            for (var args = [], arity = 0; arity < 16 && body.indexOf("$" + arity) != -1; arity++)
              args.push("$" + arity);
            args = args.join(",");
            var func = `(${args}) => { ${body} };`;
            ASM_CONSTS[start] = eval(func);
          }
          if ("__start_em_asm" in moduleExports)
            for (var start = moduleExports.__start_em_asm, stop = moduleExports.__stop_em_asm; start < stop; ) {
              var jsString = UTF8ToString(start);
              addEmAsm(start, jsString), start = HEAPU8.indexOf(0, start) + 1;
            }
          function addEmJs(name, cSig, body) {
            var jsArgs = [];
            if (cSig = cSig.slice(1, -1), cSig != "void") {
              cSig = cSig.split(",");
              for (var i in cSig) {
                var jsArg = cSig[i].split(" ").pop();
                jsArgs.push(jsArg.replace("*", ""));
              }
            }
            var func = `(${jsArgs}) => ${body};`;
            moduleExports[name] = eval(func);
          }
          for (var name in moduleExports)
            if (name.startsWith("__em_js__")) {
              var start = moduleExports[name], jsString = UTF8ToString(start), parts = jsString.split("<::>");
              addEmJs(name.replace("__em_js__", ""), parts[0], parts[1]), delete moduleExports[name];
            }
          var applyRelocs = moduleExports.__wasm_apply_data_relocs;
          applyRelocs && (runtimeInitialized ? applyRelocs() : __RELOC_FUNCS__.push(applyRelocs));
          var init = moduleExports.__wasm_call_ctors;
          return init && (runtimeInitialized ? init() : __ATINIT__.push(init)), moduleExports;
        }
        if (flags.loadAsync) {
          if (binary instanceof WebAssembly.Module) {
            var instance = new WebAssembly.Instance(binary, info);
            return Promise.resolve(postInstantiation(binary, instance));
          }
          return WebAssembly.instantiate(binary, info).then((e) => postInstantiation(e.module, e.instance));
        }
        var module = binary instanceof WebAssembly.Module ? binary : new WebAssembly.Module(binary), instance = new WebAssembly.Instance(module, info);
        return postInstantiation(module, instance);
      }
      return flags.loadAsync ? metadata.neededDynlibs.reduce((e, t) => e.then(() => loadDynamicLibrary(t, flags, localScope)), Promise.resolve()).then(loadModule) : (metadata.neededDynlibs.forEach((e) => loadDynamicLibrary(e, flags, localScope)), loadModule());
    }, mergeLibSymbols = (e, t) => {
      for (var [r, n] of Object.entries(e))
        ((o) => {
          o in asyncifyStubs && (asyncifyStubs[o] = n), isSymbolDefined(o) || (wasmImports[o] = n);
        })(r), r.startsWith("dynCall_") && !Module.hasOwnProperty(r) && (Module[r] = n);
    }, asyncLoad = (e, t, r, n) => {
      var a = n ? "" : `al ${e}`;
      readAsync(e).then((o) => {
        t(new Uint8Array(o)), a && removeRunDependency();
      }, (o) => {
        if (r)
          r();
        else
          throw `Loading data file "${e}" failed.`;
      }), a && addRunDependency();
    }, preloadPlugins = Module.preloadPlugins || [], registerWasmPlugin = () => {
      var e = { promiseChainEnd: Promise.resolve(), canHandle: (t) => !Module.noWasmDecoding && t.endsWith(".so"), handle: (t, r, n, a) => {
        e.promiseChainEnd = e.promiseChainEnd.then(() => loadWebAssemblyModule(t, { loadAsync: !0, nodelete: !0 }, r, {})).then((o) => {
          preloadedWasm[r] = o, n(t);
        }, (o) => {
          err(`failed to instantiate wasm: ${r}: ${o}`), a();
        });
      } };
      preloadPlugins.push(e);
    }, preloadedWasm = {};
    function loadDynamicLibrary(e, t = { global: !0, nodelete: !0 }, r, n) {
      var a = LDSO.loadedLibsByName[e];
      if (a)
        return t.global ? a.global || (a.global = !0, mergeLibSymbols(a.exports)) : r && Object.assign(r, a.exports), t.nodelete && a.refcount !== 1 / 0 && (a.refcount = 1 / 0), a.refcount++, n && (LDSO.loadedLibsByHandle[n] = a), t.loadAsync ? Promise.resolve(!0) : !0;
      a = newDSO(e, n, "loading"), a.refcount = t.nodelete ? 1 / 0 : 1, a.global = t.global;
      function o() {
        if (n) {
          var u = HEAPU32[n + 28 >>> 2 >>> 0], _ = HEAPU32[n + 32 >>> 2 >>> 0];
          if (u && _) {
            var d = HEAP8.slice(u, u + _);
            return t.loadAsync ? Promise.resolve(d) : d;
          }
        }
        var f = locateFile(e);
        if (t.loadAsync)
          return new Promise((p, m) => asyncLoad(f, p, m));
        throw new Error(`${f}: file not found, and synchronous loading of external files is not available`);
      }
      function l() {
        var u = preloadedWasm[e];
        return u ? t.loadAsync ? Promise.resolve(u) : u : t.loadAsync ? o().then((_) => loadWebAssemblyModule(_, t, e, r, n)) : loadWebAssemblyModule(o(), t, e, r, n);
      }
      function c(u) {
        a.global ? mergeLibSymbols(u) : r && Object.assign(r, u), a.exports = u;
      }
      return t.loadAsync ? l().then((u) => (c(u), !0)) : (c(l()), !0);
    }
    var reportUndefinedSymbols = () => {
      for (var [e, t] of Object.entries(GOT))
        if (t.value == 0) {
          var r = resolveGlobalSymbol(e, !0).sym;
          if (!r && !t.required)
            continue;
          if (typeof r == "function")
            t.value = addFunction(r, r.sig);
          else if (typeof r == "number")
            t.value = r;
          else
            throw new Error(`bad export type for '${e}': ${typeof r}`);
        }
    }, loadDylibs = () => {
      if (!dynamicLibraries.length) {
        reportUndefinedSymbols();
        return;
      }
      addRunDependency(), dynamicLibraries.reduce((e, t) => e.then(() => loadDynamicLibrary(t, { loadAsync: !0, global: !0, nodelete: !0, allowUndefined: !0 })), Promise.resolve()).then(() => {
        reportUndefinedSymbols(), removeRunDependency();
      });
    }, noExitRuntime = Module.noExitRuntime || !1;
    function setValue(e, t, r = "i8") {
      switch (r.endsWith("*") && (r = "*"), r) {
        case "i1":
          HEAP8[e >>> 0] = t;
          break;
        case "i8":
          HEAP8[e >>> 0] = t;
          break;
        case "i16":
          HEAP16[e >>> 1 >>> 0] = t;
          break;
        case "i32":
          HEAP32[e >>> 2 >>> 0] = t;
          break;
        case "i64":
          abort("to do setValue(i64) use WASM_BIGINT");
        case "float":
          HEAPF32[e >>> 2 >>> 0] = t;
          break;
        case "double":
          HEAPF64[e >>> 3 >>> 0] = t;
          break;
        case "*":
          HEAPU32[e >>> 2 >>> 0] = t;
          break;
        default:
          abort(`invalid type for setValue: ${r}`);
      }
    }
    function _UTF8ToHtml(...e) {
      return asyncifyStubs.UTF8ToHtml(...e);
    }
    _UTF8ToHtml.stub = !0, asyncifyStubs.UTF8ToHtml = void 0;
    function _UTF8Toisolat1(...e) {
      return asyncifyStubs.UTF8Toisolat1(...e);
    }
    _UTF8Toisolat1.stub = !0, asyncifyStubs.UTF8Toisolat1 = void 0;
    var convertI32PairToI53Checked = (e, t) => t + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + t * 4294967296 : NaN;
    function ___assert_fail(e, t, r, n) {
      e >>>= 0, t >>>= 0, n >>>= 0, abort(`Assertion failed: ${UTF8ToString(e)}, at: ` + [t ? UTF8ToString(t) : "unknown filename", r, n ? UTF8ToString(n) : "unknown function"]);
    }
    ___assert_fail.sig = "vppip";
    var ___asyncify_data = new WebAssembly.Global({ value: "i32", mutable: !0 }, 0), ___asyncify_state = new WebAssembly.Global({ value: "i32", mutable: !0 }, 0), ___call_sighandler = function(e, t) {
      return /* @__PURE__ */ ((r) => {
      })();
    };
    ___call_sighandler.sig = "vpi";
    var ___memory_base = new WebAssembly.Global({ value: "i32", mutable: !1 }, 1024), ___stack_high = 35246752, ___stack_low = 1692320, ___stack_pointer = new WebAssembly.Global({ value: "i32", mutable: !0 }, 35246752), PATH = { isAbs: (e) => e.charAt(0) === "/", splitPath: (e) => {
      var t = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return t.exec(e).slice(1);
    }, normalizeArray: (e, t) => {
      for (var r = 0, n = e.length - 1; n >= 0; n--) {
        var a = e[n];
        a === "." ? e.splice(n, 1) : a === ".." ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--);
      }
      if (t)
        for (; r; r--)
          e.unshift("..");
      return e;
    }, normalize: (e) => {
      var t = PATH.isAbs(e), r = e.substr(-1) === "/";
      return e = PATH.normalizeArray(e.split("/").filter((n) => !!n), !t).join("/"), !e && !t && (e = "."), e && r && (e += "/"), (t ? "/" : "") + e;
    }, dirname: (e) => {
      var t = PATH.splitPath(e), r = t[0], n = t[1];
      return !r && !n ? "." : (n && (n = n.substr(0, n.length - 1)), r + n);
    }, basename: (e) => {
      if (e === "/") return "/";
      e = PATH.normalize(e), e = e.replace(/\/$/, "");
      var t = e.lastIndexOf("/");
      return t === -1 ? e : e.substr(t + 1);
    }, join: (...e) => PATH.normalize(e.join("/")), join2: (e, t) => PATH.normalize(e + "/" + t) }, initRandomFill = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function")
        return (e) => crypto.getRandomValues(e);
      abort("initRandomDevice");
    }, randomFill = (e) => (randomFill = initRandomFill())(e), PATH_FS = { resolve: (...e) => {
      for (var t = "", r = !1, n = e.length - 1; n >= -1 && !r; n--) {
        var a = n >= 0 ? e[n] : FS.cwd();
        if (typeof a != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!a)
          return "";
        t = a + "/" + t, r = PATH.isAbs(a);
      }
      return t = PATH.normalizeArray(t.split("/").filter((o) => !!o), !r).join("/"), (r ? "/" : "") + t || ".";
    }, relative: (e, t) => {
      e = PATH_FS.resolve(e).substr(1), t = PATH_FS.resolve(t).substr(1);
      function r(_) {
        for (var d = 0; d < _.length && _[d] === ""; d++)
          ;
        for (var f = _.length - 1; f >= 0 && _[f] === ""; f--)
          ;
        return d > f ? [] : _.slice(d, f - d + 1);
      }
      for (var n = r(e.split("/")), a = r(t.split("/")), o = Math.min(n.length, a.length), l = o, c = 0; c < o; c++)
        if (n[c] !== a[c]) {
          l = c;
          break;
        }
      for (var u = [], c = l; c < n.length; c++)
        u.push("..");
      return u = u.concat(a.slice(l)), u.join("/");
    } }, FS_stdin_getChar_buffer = [], lengthBytesUTF8 = (e) => {
      for (var t = 0, r = 0; r < e.length; ++r) {
        var n = e.charCodeAt(r);
        n <= 127 ? t++ : n <= 2047 ? t += 2 : n >= 55296 && n <= 57343 ? (t += 4, ++r) : t += 3;
      }
      return t;
    }, stringToUTF8Array = (e, t, r, n) => {
      if (r >>>= 0, !(n > 0)) return 0;
      for (var a = r, o = r + n - 1, l = 0; l < e.length; ++l) {
        var c = e.charCodeAt(l);
        if (c >= 55296 && c <= 57343) {
          var u = e.charCodeAt(++l);
          c = 65536 + ((c & 1023) << 10) | u & 1023;
        }
        if (c <= 127) {
          if (r >= o) break;
          t[r++ >>> 0] = c;
        } else if (c <= 2047) {
          if (r + 1 >= o) break;
          t[r++ >>> 0] = 192 | c >> 6, t[r++ >>> 0] = 128 | c & 63;
        } else if (c <= 65535) {
          if (r + 2 >= o) break;
          t[r++ >>> 0] = 224 | c >> 12, t[r++ >>> 0] = 128 | c >> 6 & 63, t[r++ >>> 0] = 128 | c & 63;
        } else {
          if (r + 3 >= o) break;
          t[r++ >>> 0] = 240 | c >> 18, t[r++ >>> 0] = 128 | c >> 12 & 63, t[r++ >>> 0] = 128 | c >> 6 & 63, t[r++ >>> 0] = 128 | c & 63;
        }
      }
      return t[r >>> 0] = 0, r - a;
    };
    function intArrayFromString(e, t, r) {
      var n = lengthBytesUTF8(e) + 1, a = new Array(n), o = stringToUTF8Array(e, a, 0, a.length);
      return t && (a.length = o), a;
    }
    var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var e = null;
        if (typeof window < "u" && typeof window.prompt == "function" && (e = window.prompt("Input: "), e !== null && (e += `
`)), !e)
          return null;
        FS_stdin_getChar_buffer = intArrayFromString(e, !0);
      }
      return FS_stdin_getChar_buffer.shift();
    }, TTY = { ttys: [], init() {
    }, shutdown() {
    }, register(e, t) {
      TTY.ttys[e] = { input: [], output: [], ops: t }, FS.registerDevice(e, TTY.stream_ops);
    }, stream_ops: { open(e) {
      var t = TTY.ttys[e.node.rdev];
      if (!t)
        throw new FS.ErrnoError(43);
      e.tty = t, e.seekable = !1;
    }, close(e) {
      e.tty.ops.fsync(e.tty);
    }, fsync(e) {
      e.tty.ops.fsync(e.tty);
    }, read(e, t, r, n, a) {
      if (!e.tty || !e.tty.ops.get_char)
        throw new FS.ErrnoError(60);
      for (var o = 0, l = 0; l < n; l++) {
        var c;
        try {
          c = e.tty.ops.get_char(e.tty);
        } catch {
          throw new FS.ErrnoError(29);
        }
        if (c === void 0 && o === 0)
          throw new FS.ErrnoError(6);
        if (c == null) break;
        o++, t[r + l] = c;
      }
      return o && (e.node.timestamp = Date.now()), o;
    }, write(e, t, r, n, a) {
      if (!e.tty || !e.tty.ops.put_char)
        throw new FS.ErrnoError(60);
      try {
        for (var o = 0; o < n; o++)
          e.tty.ops.put_char(e.tty, t[r + o]);
      } catch {
        throw new FS.ErrnoError(29);
      }
      return n && (e.node.timestamp = Date.now()), o;
    } }, default_tty_ops: { get_char(e) {
      return FS_stdin_getChar();
    }, put_char(e, t) {
      t === null || t === 10 ? (out(UTF8ArrayToString(e.output, 0)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync(e) {
      e.output && e.output.length > 0 && (out(UTF8ArrayToString(e.output, 0)), e.output = []);
    }, ioctl_tcgets(e) {
      return { c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
    }, ioctl_tcsets(e, t, r) {
      return 0;
    }, ioctl_tiocgwinsz(e) {
      return [24, 80];
    } }, default_tty1_ops: { put_char(e, t) {
      t === null || t === 10 ? (err(UTF8ArrayToString(e.output, 0)), e.output = []) : t != 0 && e.output.push(t);
    }, fsync(e) {
      e.output && e.output.length > 0 && (err(UTF8ArrayToString(e.output, 0)), e.output = []);
    } } }, zeroMemory = (e, t) => (HEAPU8.fill(0, e, e + t), e), mmapAlloc = (e) => {
      e = alignMemory(e, 65536);
      var t = _emscripten_builtin_memalign(65536, e);
      return t ? zeroMemory(t, e) : 0;
    }, MEMFS = { ops_table: null, mount(e) {
      return MEMFS.createNode(null, "/", 16895, 0);
    }, createNode(e, t, r, n) {
      if (FS.isBlkdev(r) || FS.isFIFO(r))
        throw new FS.ErrnoError(63);
      MEMFS.ops_table || (MEMFS.ops_table = { dir: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, lookup: MEMFS.node_ops.lookup, mknod: MEMFS.node_ops.mknod, rename: MEMFS.node_ops.rename, unlink: MEMFS.node_ops.unlink, rmdir: MEMFS.node_ops.rmdir, readdir: MEMFS.node_ops.readdir, symlink: MEMFS.node_ops.symlink }, stream: { llseek: MEMFS.stream_ops.llseek } }, file: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: { llseek: MEMFS.stream_ops.llseek, read: MEMFS.stream_ops.read, write: MEMFS.stream_ops.write, allocate: MEMFS.stream_ops.allocate, mmap: MEMFS.stream_ops.mmap, msync: MEMFS.stream_ops.msync } }, link: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr, readlink: MEMFS.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: MEMFS.node_ops.getattr, setattr: MEMFS.node_ops.setattr }, stream: FS.chrdev_stream_ops } });
      var a = FS.createNode(e, t, r, n);
      return FS.isDir(a.mode) ? (a.node_ops = MEMFS.ops_table.dir.node, a.stream_ops = MEMFS.ops_table.dir.stream, a.contents = {}) : FS.isFile(a.mode) ? (a.node_ops = MEMFS.ops_table.file.node, a.stream_ops = MEMFS.ops_table.file.stream, a.usedBytes = 0, a.contents = null) : FS.isLink(a.mode) ? (a.node_ops = MEMFS.ops_table.link.node, a.stream_ops = MEMFS.ops_table.link.stream) : FS.isChrdev(a.mode) && (a.node_ops = MEMFS.ops_table.chrdev.node, a.stream_ops = MEMFS.ops_table.chrdev.stream), a.timestamp = Date.now(), e && (e.contents[t] = a, e.timestamp = a.timestamp), a;
    }, getFileDataAsTypedArray(e) {
      return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0);
    }, expandFileStorage(e, t) {
      var r = e.contents ? e.contents.length : 0;
      if (!(r >= t)) {
        var n = 1024 * 1024;
        t = Math.max(t, r * (r < n ? 2 : 1.125) >>> 0), r != 0 && (t = Math.max(t, 256));
        var a = e.contents;
        e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(a.subarray(0, e.usedBytes), 0);
      }
    }, resizeFileStorage(e, t) {
      if (e.usedBytes != t)
        if (t == 0)
          e.contents = null, e.usedBytes = 0;
        else {
          var r = e.contents;
          e.contents = new Uint8Array(t), r && e.contents.set(r.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t;
        }
    }, node_ops: { getattr(e) {
      var t = {};
      return t.dev = FS.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, FS.isDir(e.mode) ? t.size = 4096 : FS.isFile(e.mode) ? t.size = e.usedBytes : FS.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t;
    }, setattr(e, t) {
      t.mode !== void 0 && (e.mode = t.mode), t.timestamp !== void 0 && (e.timestamp = t.timestamp), t.size !== void 0 && MEMFS.resizeFileStorage(e, t.size);
    }, lookup(e, t) {
      throw FS.genericErrors[44];
    }, mknod(e, t, r, n) {
      return MEMFS.createNode(e, t, r, n);
    }, rename(e, t, r) {
      if (FS.isDir(e.mode)) {
        var n;
        try {
          n = FS.lookupNode(t, r);
        } catch {
        }
        if (n)
          for (var a in n.contents)
            throw new FS.ErrnoError(55);
      }
      delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = r, t.contents[r] = e, t.timestamp = e.parent.timestamp;
    }, unlink(e, t) {
      delete e.contents[t], e.timestamp = Date.now();
    }, rmdir(e, t) {
      var r = FS.lookupNode(e, t);
      for (var n in r.contents)
        throw new FS.ErrnoError(55);
      delete e.contents[t], e.timestamp = Date.now();
    }, readdir(e) {
      var t = [".", ".."];
      for (var r of Object.keys(e.contents))
        t.push(r);
      return t;
    }, symlink(e, t, r) {
      var n = MEMFS.createNode(e, t, 41471, 0);
      return n.link = r, n;
    }, readlink(e) {
      if (!FS.isLink(e.mode))
        throw new FS.ErrnoError(28);
      return e.link;
    } }, stream_ops: { read(e, t, r, n, a) {
      var o = e.node.contents;
      if (a >= e.node.usedBytes) return 0;
      var l = Math.min(e.node.usedBytes - a, n);
      if (l > 8 && o.subarray)
        t.set(o.subarray(a, a + l), r);
      else
        for (var c = 0; c < l; c++) t[r + c] = o[a + c];
      return l;
    }, write(e, t, r, n, a, o) {
      if (t.buffer === HEAP8.buffer && (o = !1), !n) return 0;
      var l = e.node;
      if (l.timestamp = Date.now(), t.subarray && (!l.contents || l.contents.subarray)) {
        if (o)
          return l.contents = t.subarray(r, r + n), l.usedBytes = n, n;
        if (l.usedBytes === 0 && a === 0)
          return l.contents = t.slice(r, r + n), l.usedBytes = n, n;
        if (a + n <= l.usedBytes)
          return l.contents.set(t.subarray(r, r + n), a), n;
      }
      if (MEMFS.expandFileStorage(l, a + n), l.contents.subarray && t.subarray)
        l.contents.set(t.subarray(r, r + n), a);
      else
        for (var c = 0; c < n; c++)
          l.contents[a + c] = t[r + c];
      return l.usedBytes = Math.max(l.usedBytes, a + n), n;
    }, llseek(e, t, r) {
      var n = t;
      if (r === 1 ? n += e.position : r === 2 && FS.isFile(e.node.mode) && (n += e.node.usedBytes), n < 0)
        throw new FS.ErrnoError(28);
      return n;
    }, allocate(e, t, r) {
      MEMFS.expandFileStorage(e.node, t + r), e.node.usedBytes = Math.max(e.node.usedBytes, t + r);
    }, mmap(e, t, r, n, a) {
      if (!FS.isFile(e.node.mode))
        throw new FS.ErrnoError(43);
      var o, l, c = e.node.contents;
      if (!(a & 2) && c && c.buffer === HEAP8.buffer)
        l = !1, o = c.byteOffset;
      else {
        if (l = !0, o = mmapAlloc(t), !o)
          throw new FS.ErrnoError(48);
        c && ((r > 0 || r + t < c.length) && (c.subarray ? c = c.subarray(r, r + t) : c = Array.prototype.slice.call(c, r, r + t)), HEAP8.set(c, o >>> 0));
      }
      return { ptr: o, allocated: l };
    }, msync(e, t, r, n, a) {
      return MEMFS.stream_ops.write(e, t, 0, n, r, !1), 0;
    } } }, FS_createDataFile = (e, t, r, n, a, o) => {
      FS.createDataFile(e, t, r, n, a, o);
    }, FS_handledByPreloadPlugin = (e, t, r, n) => {
      typeof Browser < "u" && Browser.init();
      var a = !1;
      return preloadPlugins.forEach((o) => {
        a || o.canHandle(t) && (o.handle(e, t, r, n), a = !0);
      }), a;
    }, FS_createPreloadedFile = (e, t, r, n, a, o, l, c, u, _) => {
      var d = t ? PATH_FS.resolve(PATH.join2(e, t)) : e;
      function f(p) {
        function m(S) {
          _ == null || _(), c || FS_createDataFile(e, t, S, n, a, u), o == null || o(), removeRunDependency();
        }
        FS_handledByPreloadPlugin(p, d, m, () => {
          l == null || l(), removeRunDependency();
        }) || m(p);
      }
      addRunDependency(), typeof r == "string" ? asyncLoad(r, f, l) : f(r);
    }, FS_modeStringToFlags = (e) => {
      var t = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, r = t[e];
      if (typeof r > "u")
        throw new Error(`Unknown file open mode: ${e}`);
      return r;
    }, FS_getMode = (e, t) => {
      var r = 0;
      return e && (r |= 365), t && (r |= 146), r;
    }, IDBFS = { dbs: {}, indexedDB: () => {
      if (typeof indexedDB < "u") return indexedDB;
      var e = null;
      return typeof window == "object" && (e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB), e;
    }, DB_VERSION: 21, DB_STORE_NAME: "FILE_DATA", queuePersist: (e) => {
      function t() {
        e.idbPersistState === "again" ? r() : e.idbPersistState = 0;
      }
      function r() {
        e.idbPersistState = "idb", IDBFS.syncfs(e, !1, t);
      }
      e.idbPersistState ? e.idbPersistState === "idb" && (e.idbPersistState = "again") : e.idbPersistState = setTimeout(r, 0);
    }, mount: (e) => {
      var n;
      var t = MEMFS.mount(e);
      if ((n = e == null ? void 0 : e.opts) != null && n.autoPersist) {
        t.idbPersistState = 0;
        var r = t.node_ops;
        t.node_ops = Object.assign({}, t.node_ops), t.node_ops.mknod = (a, o, l, c) => {
          var u = r.mknod(a, o, l, c);
          return u.node_ops = t.node_ops, u.idbfs_mount = t.mount, u.memfs_stream_ops = u.stream_ops, u.stream_ops = Object.assign({}, u.stream_ops), u.stream_ops.write = (_, d, f, p, m, S) => (_.node.isModified = !0, u.memfs_stream_ops.write(_, d, f, p, m, S)), u.stream_ops.close = (_) => {
            var d = _.node;
            if (d.isModified && (IDBFS.queuePersist(d.idbfs_mount), d.isModified = !1), d.memfs_stream_ops.close) return d.memfs_stream_ops.close(_);
          }, u;
        }, t.node_ops.mkdir = (...a) => (IDBFS.queuePersist(t.mount), r.mkdir(...a)), t.node_ops.rmdir = (...a) => (IDBFS.queuePersist(t.mount), r.rmdir(...a)), t.node_ops.symlink = (...a) => (IDBFS.queuePersist(t.mount), r.symlink(...a)), t.node_ops.unlink = (...a) => (IDBFS.queuePersist(t.mount), r.unlink(...a)), t.node_ops.rename = (...a) => (IDBFS.queuePersist(t.mount), r.rename(...a));
      }
      return t;
    }, syncfs: (e, t, r) => {
      IDBFS.getLocalSet(e, (n, a) => {
        if (n) return r(n);
        IDBFS.getRemoteSet(e, (o, l) => {
          if (o) return r(o);
          var c = t ? l : a, u = t ? a : l;
          IDBFS.reconcile(c, u, r);
        });
      });
    }, quit: () => {
      Object.values(IDBFS.dbs).forEach((e) => e.close()), IDBFS.dbs = {};
    }, getDB: (e, t) => {
      var r = IDBFS.dbs[e];
      if (r)
        return t(null, r);
      var n;
      try {
        n = IDBFS.indexedDB().open(e, IDBFS.DB_VERSION);
      } catch (a) {
        return t(a);
      }
      if (!n)
        return t("Unable to connect to IndexedDB");
      n.onupgradeneeded = (a) => {
        var o = a.target.result, l = a.target.transaction, c;
        o.objectStoreNames.contains(IDBFS.DB_STORE_NAME) ? c = l.objectStore(IDBFS.DB_STORE_NAME) : c = o.createObjectStore(IDBFS.DB_STORE_NAME), c.indexNames.contains("timestamp") || c.createIndex("timestamp", "timestamp", { unique: !1 });
      }, n.onsuccess = () => {
        r = n.result, IDBFS.dbs[e] = r, t(null, r);
      }, n.onerror = (a) => {
        t(a.target.error), a.preventDefault();
      };
    }, getLocalSet: (e, t) => {
      var r = {};
      function n(u) {
        return u !== "." && u !== "..";
      }
      function a(u) {
        return (_) => PATH.join2(u, _);
      }
      for (var o = FS.readdir(e.mountpoint).filter(n).map(a(e.mountpoint)); o.length; ) {
        var l = o.pop(), c;
        try {
          c = FS.stat(l);
        } catch (u) {
          return t(u);
        }
        FS.isDir(c.mode) && o.push(...FS.readdir(l).filter(n).map(a(l))), r[l] = { timestamp: c.mtime };
      }
      return t(null, { type: "local", entries: r });
    }, getRemoteSet: (e, t) => {
      var r = {};
      IDBFS.getDB(e.mountpoint, (n, a) => {
        if (n) return t(n);
        try {
          var o = a.transaction([IDBFS.DB_STORE_NAME], "readonly");
          o.onerror = (u) => {
            t(u.target.error), u.preventDefault();
          };
          var l = o.objectStore(IDBFS.DB_STORE_NAME), c = l.index("timestamp");
          c.openKeyCursor().onsuccess = (u) => {
            var _ = u.target.result;
            if (!_)
              return t(null, { type: "remote", db: a, entries: r });
            r[_.primaryKey] = { timestamp: _.key }, _.continue();
          };
        } catch (u) {
          return t(u);
        }
      });
    }, loadLocalEntry: (e, t) => {
      var r, n;
      try {
        var a = FS.lookupPath(e);
        n = a.node, r = FS.stat(e);
      } catch (o) {
        return t(o);
      }
      return FS.isDir(r.mode) ? t(null, { timestamp: r.mtime, mode: r.mode }) : FS.isFile(r.mode) ? (n.contents = MEMFS.getFileDataAsTypedArray(n), t(null, { timestamp: r.mtime, mode: r.mode, contents: n.contents })) : t(new Error("node type not supported"));
    }, storeLocalEntry: (e, t, r) => {
      const n = FS.ignorePermissions;
      try {
        if (FS.ignorePermissions = !0, FS.isDir(t.mode))
          FS.mkdirTree(e, t.mode);
        else if (FS.isFile(t.mode))
          FS.writeFile(e, t.contents, { canOwn: !0 });
        else
          return r(new Error("node type not supported"));
        FS.chmod(e, t.mode), FS.utime(e, t.timestamp, t.timestamp);
      } catch (a) {
        return r(a);
      } finally {
        FS.ignorePermissions = n;
      }
      r(null);
    }, removeLocalEntry: (e, t) => {
      try {
        var r = FS.stat(e);
        FS.isDir(r.mode) ? FS.rmdir(e) : FS.isFile(r.mode) && FS.unlink(e);
      } catch (n) {
        return t(n);
      }
      t(null);
    }, loadRemoteEntry: (e, t, r) => {
      var n = e.get(t);
      n.onsuccess = (a) => r(null, a.target.result), n.onerror = (a) => {
        r(a.target.error), a.preventDefault();
      };
    }, storeRemoteEntry: (e, t, r, n) => {
      try {
        var a = e.put(r, t);
      } catch (o) {
        n(o);
        return;
      }
      a.onsuccess = (o) => n(), a.onerror = (o) => {
        n(o.target.error), o.preventDefault();
      };
    }, removeRemoteEntry: (e, t, r) => {
      var n = e.delete(t);
      n.onsuccess = (a) => r(), n.onerror = (a) => {
        r(a.target.error), a.preventDefault();
      };
    }, reconcile: (e, t, r) => {
      var n = 0, a = [];
      Object.keys(e.entries).forEach((f) => {
        var p = e.entries[f], m = t.entries[f];
        (!m || p.timestamp.getTime() != m.timestamp.getTime()) && (a.push(f), n++);
      });
      var o = [];
      if (Object.keys(t.entries).forEach((f) => {
        e.entries[f] || (o.push(f), n++);
      }), !n)
        return r(null);
      var l = !1, c = e.type === "remote" ? e.db : t.db, u = c.transaction([IDBFS.DB_STORE_NAME], "readwrite"), _ = u.objectStore(IDBFS.DB_STORE_NAME);
      function d(f) {
        if (f && !l)
          return l = !0, r(f);
      }
      u.onerror = u.onabort = (f) => {
        d(f.target.error), f.preventDefault();
      }, u.oncomplete = (f) => {
        l || r(null);
      }, a.sort().forEach((f) => {
        t.type === "local" ? IDBFS.loadRemoteEntry(_, f, (p, m) => {
          if (p) return d(p);
          IDBFS.storeLocalEntry(f, m, d);
        }) : IDBFS.loadLocalEntry(f, (p, m) => {
          if (p) return d(p);
          IDBFS.storeRemoteEntry(_, f, m, d);
        });
      }), o.sort().reverse().forEach((f) => {
        t.type === "local" ? IDBFS.removeLocalEntry(f, d) : IDBFS.removeRemoteEntry(_, f, d);
      });
    } }, FS = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, ErrnoError: class {
      constructor(e) {
        this.name = "ErrnoError", this.errno = e;
      }
    }, genericErrors: {}, filesystems: null, syncFSRequests: 0, readFiles: {}, FSStream: class {
      constructor() {
        this.shared = {};
      }
      get object() {
        return this.node;
      }
      set object(e) {
        this.node = e;
      }
      get isRead() {
        return (this.flags & 2097155) !== 1;
      }
      get isWrite() {
        return (this.flags & 2097155) !== 0;
      }
      get isAppend() {
        return this.flags & 1024;
      }
      get flags() {
        return this.shared.flags;
      }
      set flags(e) {
        this.shared.flags = e;
      }
      get position() {
        return this.shared.position;
      }
      set position(e) {
        this.shared.position = e;
      }
    }, FSNode: class {
      constructor(e, t, r, n) {
        e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = FS.nextInode++, this.name = t, this.mode = r, this.node_ops = {}, this.stream_ops = {}, this.rdev = n, this.readMode = 365, this.writeMode = 146;
      }
      get read() {
        return (this.mode & this.readMode) === this.readMode;
      }
      set read(e) {
        e ? this.mode |= this.readMode : this.mode &= ~this.readMode;
      }
      get write() {
        return (this.mode & this.writeMode) === this.writeMode;
      }
      set write(e) {
        e ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
      }
      get isFolder() {
        return FS.isDir(this.mode);
      }
      get isDevice() {
        return FS.isChrdev(this.mode);
      }
    }, lookupPath(e, t = {}) {
      if (e = PATH_FS.resolve(e), !e) return { path: "", node: null };
      var r = { follow_mount: !0, recurse_count: 0 };
      if (t = Object.assign(r, t), t.recurse_count > 8)
        throw new FS.ErrnoError(32);
      for (var n = e.split("/").filter((f) => !!f), a = FS.root, o = "/", l = 0; l < n.length; l++) {
        var c = l === n.length - 1;
        if (c && t.parent)
          break;
        if (a = FS.lookupNode(a, n[l]), o = PATH.join2(o, n[l]), FS.isMountpoint(a) && (!c || c && t.follow_mount) && (a = a.mounted.root), !c || t.follow)
          for (var u = 0; FS.isLink(a.mode); ) {
            var _ = FS.readlink(o);
            o = PATH_FS.resolve(PATH.dirname(o), _);
            var d = FS.lookupPath(o, { recurse_count: t.recurse_count + 1 });
            if (a = d.node, u++ > 40)
              throw new FS.ErrnoError(32);
          }
      }
      return { path: o, node: a };
    }, getPath(e) {
      for (var t; ; ) {
        if (FS.isRoot(e)) {
          var r = e.mount.mountpoint;
          return t ? r[r.length - 1] !== "/" ? `${r}/${t}` : r + t : r;
        }
        t = t ? `${e.name}/${t}` : e.name, e = e.parent;
      }
    }, hashName(e, t) {
      for (var r = 0, n = 0; n < t.length; n++)
        r = (r << 5) - r + t.charCodeAt(n) | 0;
      return (e + r >>> 0) % FS.nameTable.length;
    }, hashAddNode(e) {
      var t = FS.hashName(e.parent.id, e.name);
      e.name_next = FS.nameTable[t], FS.nameTable[t] = e;
    }, hashRemoveNode(e) {
      var t = FS.hashName(e.parent.id, e.name);
      if (FS.nameTable[t] === e)
        FS.nameTable[t] = e.name_next;
      else
        for (var r = FS.nameTable[t]; r; ) {
          if (r.name_next === e) {
            r.name_next = e.name_next;
            break;
          }
          r = r.name_next;
        }
    }, lookupNode(e, t) {
      var r = FS.mayLookup(e);
      if (r)
        throw new FS.ErrnoError(r);
      for (var n = FS.hashName(e.id, t), a = FS.nameTable[n]; a; a = a.name_next) {
        var o = a.name;
        if (a.parent.id === e.id && o === t)
          return a;
      }
      return FS.lookup(e, t);
    }, createNode(e, t, r, n) {
      var a = new FS.FSNode(e, t, r, n);
      return FS.hashAddNode(a), a;
    }, destroyNode(e) {
      FS.hashRemoveNode(e);
    }, isRoot(e) {
      return e === e.parent;
    }, isMountpoint(e) {
      return !!e.mounted;
    }, isFile(e) {
      return (e & 61440) === 32768;
    }, isDir(e) {
      return (e & 61440) === 16384;
    }, isLink(e) {
      return (e & 61440) === 40960;
    }, isChrdev(e) {
      return (e & 61440) === 8192;
    }, isBlkdev(e) {
      return (e & 61440) === 24576;
    }, isFIFO(e) {
      return (e & 61440) === 4096;
    }, isSocket(e) {
      return (e & 49152) === 49152;
    }, flagsToPermissionString(e) {
      var t = ["r", "w", "rw"][e & 3];
      return e & 512 && (t += "w"), t;
    }, nodePermissions(e, t) {
      return FS.ignorePermissions ? 0 : t.includes("r") && !(e.mode & 292) || t.includes("w") && !(e.mode & 146) || t.includes("x") && !(e.mode & 73) ? 2 : 0;
    }, mayLookup(e) {
      if (!FS.isDir(e.mode)) return 54;
      var t = FS.nodePermissions(e, "x");
      return t || (e.node_ops.lookup ? 0 : 2);
    }, mayCreate(e, t) {
      try {
        var r = FS.lookupNode(e, t);
        return 20;
      } catch {
      }
      return FS.nodePermissions(e, "wx");
    }, mayDelete(e, t, r) {
      var n;
      try {
        n = FS.lookupNode(e, t);
      } catch (o) {
        return o.errno;
      }
      var a = FS.nodePermissions(e, "wx");
      if (a)
        return a;
      if (r) {
        if (!FS.isDir(n.mode))
          return 54;
        if (FS.isRoot(n) || FS.getPath(n) === FS.cwd())
          return 10;
      } else if (FS.isDir(n.mode))
        return 31;
      return 0;
    }, mayOpen(e, t) {
      return e ? FS.isLink(e.mode) ? 32 : FS.isDir(e.mode) && (FS.flagsToPermissionString(t) !== "r" || t & 512) ? 31 : FS.nodePermissions(e, FS.flagsToPermissionString(t)) : 44;
    }, MAX_OPEN_FDS: 4096, nextfd() {
      for (var e = 0; e <= FS.MAX_OPEN_FDS; e++)
        if (!FS.streams[e])
          return e;
      throw new FS.ErrnoError(33);
    }, getStreamChecked(e) {
      var t = FS.getStream(e);
      if (!t)
        throw new FS.ErrnoError(8);
      return t;
    }, getStream: (e) => FS.streams[e], createStream(e, t = -1) {
      return e = Object.assign(new FS.FSStream(), e), t == -1 && (t = FS.nextfd()), e.fd = t, FS.streams[t] = e, e;
    }, closeStream(e) {
      FS.streams[e] = null;
    }, dupStream(e, t = -1) {
      var n, a;
      var r = FS.createStream(e, t);
      return (a = (n = r.stream_ops) == null ? void 0 : n.dup) == null || a.call(n, r), r;
    }, chrdev_stream_ops: { open(e) {
      var r, n;
      var t = FS.getDevice(e.node.rdev);
      e.stream_ops = t.stream_ops, (n = (r = e.stream_ops).open) == null || n.call(r, e);
    }, llseek() {
      throw new FS.ErrnoError(70);
    } }, major: (e) => e >> 8, minor: (e) => e & 255, makedev: (e, t) => e << 8 | t, registerDevice(e, t) {
      FS.devices[e] = { stream_ops: t };
    }, getDevice: (e) => FS.devices[e], getMounts(e) {
      for (var t = [], r = [e]; r.length; ) {
        var n = r.pop();
        t.push(n), r.push(...n.mounts);
      }
      return t;
    }, syncfs(e, t) {
      typeof e == "function" && (t = e, e = !1), FS.syncFSRequests++, FS.syncFSRequests > 1 && err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
      var r = FS.getMounts(FS.root.mount), n = 0;
      function a(l) {
        return FS.syncFSRequests--, t(l);
      }
      function o(l) {
        if (l)
          return o.errored ? void 0 : (o.errored = !0, a(l));
        ++n >= r.length && a(null);
      }
      r.forEach((l) => {
        if (!l.type.syncfs)
          return o(null);
        l.type.syncfs(l, e, o);
      });
    }, mount(e, t, r) {
      var n = r === "/", a = !r, o;
      if (n && FS.root)
        throw new FS.ErrnoError(10);
      if (!n && !a) {
        var l = FS.lookupPath(r, { follow_mount: !1 });
        if (r = l.path, o = l.node, FS.isMountpoint(o))
          throw new FS.ErrnoError(10);
        if (!FS.isDir(o.mode))
          throw new FS.ErrnoError(54);
      }
      var c = { type: e, opts: t, mountpoint: r, mounts: [] }, u = e.mount(c);
      return u.mount = c, c.root = u, n ? FS.root = u : o && (o.mounted = c, o.mount && o.mount.mounts.push(c)), u;
    }, unmount(e) {
      var t = FS.lookupPath(e, { follow_mount: !1 });
      if (!FS.isMountpoint(t.node))
        throw new FS.ErrnoError(28);
      var r = t.node, n = r.mounted, a = FS.getMounts(n);
      Object.keys(FS.nameTable).forEach((l) => {
        for (var c = FS.nameTable[l]; c; ) {
          var u = c.name_next;
          a.includes(c.mount) && FS.destroyNode(c), c = u;
        }
      }), r.mounted = null;
      var o = r.mount.mounts.indexOf(n);
      r.mount.mounts.splice(o, 1);
    }, lookup(e, t) {
      return e.node_ops.lookup(e, t);
    }, mknod(e, t, r) {
      var n = FS.lookupPath(e, { parent: !0 }), a = n.node, o = PATH.basename(e);
      if (!o || o === "." || o === "..")
        throw new FS.ErrnoError(28);
      var l = FS.mayCreate(a, o);
      if (l)
        throw new FS.ErrnoError(l);
      if (!a.node_ops.mknod)
        throw new FS.ErrnoError(63);
      return a.node_ops.mknod(a, o, t, r);
    }, create(e, t) {
      return t = t !== void 0 ? t : 438, t &= 4095, t |= 32768, FS.mknod(e, t, 0);
    }, mkdir(e, t) {
      return t = t !== void 0 ? t : 511, t &= 1023, t |= 16384, FS.mknod(e, t, 0);
    }, mkdirTree(e, t) {
      for (var r = e.split("/"), n = "", a = 0; a < r.length; ++a)
        if (r[a]) {
          n += "/" + r[a];
          try {
            FS.mkdir(n, t);
          } catch (o) {
            if (o.errno != 20) throw o;
          }
        }
    }, mkdev(e, t, r) {
      return typeof r > "u" && (r = t, t = 438), t |= 8192, FS.mknod(e, t, r);
    }, symlink(e, t) {
      if (!PATH_FS.resolve(e))
        throw new FS.ErrnoError(44);
      var r = FS.lookupPath(t, { parent: !0 }), n = r.node;
      if (!n)
        throw new FS.ErrnoError(44);
      var a = PATH.basename(t), o = FS.mayCreate(n, a);
      if (o)
        throw new FS.ErrnoError(o);
      if (!n.node_ops.symlink)
        throw new FS.ErrnoError(63);
      return n.node_ops.symlink(n, a, e);
    }, rename(e, t) {
      var r = PATH.dirname(e), n = PATH.dirname(t), a = PATH.basename(e), o = PATH.basename(t), l, c, u;
      if (l = FS.lookupPath(e, { parent: !0 }), c = l.node, l = FS.lookupPath(t, { parent: !0 }), u = l.node, !c || !u) throw new FS.ErrnoError(44);
      if (c.mount !== u.mount)
        throw new FS.ErrnoError(75);
      var _ = FS.lookupNode(c, a), d = PATH_FS.relative(e, n);
      if (d.charAt(0) !== ".")
        throw new FS.ErrnoError(28);
      if (d = PATH_FS.relative(t, r), d.charAt(0) !== ".")
        throw new FS.ErrnoError(55);
      var f;
      try {
        f = FS.lookupNode(u, o);
      } catch {
      }
      if (_ !== f) {
        var p = FS.isDir(_.mode), m = FS.mayDelete(c, a, p);
        if (m)
          throw new FS.ErrnoError(m);
        if (m = f ? FS.mayDelete(u, o, p) : FS.mayCreate(u, o), m)
          throw new FS.ErrnoError(m);
        if (!c.node_ops.rename)
          throw new FS.ErrnoError(63);
        if (FS.isMountpoint(_) || f && FS.isMountpoint(f))
          throw new FS.ErrnoError(10);
        if (u !== c && (m = FS.nodePermissions(c, "w"), m))
          throw new FS.ErrnoError(m);
        FS.hashRemoveNode(_);
        try {
          c.node_ops.rename(_, u, o), _.parent = u;
        } catch (S) {
          throw S;
        } finally {
          FS.hashAddNode(_);
        }
      }
    }, rmdir(e) {
      var t = FS.lookupPath(e, { parent: !0 }), r = t.node, n = PATH.basename(e), a = FS.lookupNode(r, n), o = FS.mayDelete(r, n, !0);
      if (o)
        throw new FS.ErrnoError(o);
      if (!r.node_ops.rmdir)
        throw new FS.ErrnoError(63);
      if (FS.isMountpoint(a))
        throw new FS.ErrnoError(10);
      r.node_ops.rmdir(r, n), FS.destroyNode(a);
    }, readdir(e) {
      var t = FS.lookupPath(e, { follow: !0 }), r = t.node;
      if (!r.node_ops.readdir)
        throw new FS.ErrnoError(54);
      return r.node_ops.readdir(r);
    }, unlink(e) {
      var t = FS.lookupPath(e, { parent: !0 }), r = t.node;
      if (!r)
        throw new FS.ErrnoError(44);
      var n = PATH.basename(e), a = FS.lookupNode(r, n), o = FS.mayDelete(r, n, !1);
      if (o)
        throw new FS.ErrnoError(o);
      if (!r.node_ops.unlink)
        throw new FS.ErrnoError(63);
      if (FS.isMountpoint(a))
        throw new FS.ErrnoError(10);
      r.node_ops.unlink(r, n), FS.destroyNode(a);
    }, readlink(e) {
      var t = FS.lookupPath(e), r = t.node;
      if (!r)
        throw new FS.ErrnoError(44);
      if (!r.node_ops.readlink)
        throw new FS.ErrnoError(28);
      return PATH_FS.resolve(FS.getPath(r.parent), r.node_ops.readlink(r));
    }, stat(e, t) {
      var r = FS.lookupPath(e, { follow: !t }), n = r.node;
      if (!n)
        throw new FS.ErrnoError(44);
      if (!n.node_ops.getattr)
        throw new FS.ErrnoError(63);
      return n.node_ops.getattr(n);
    }, lstat(e) {
      return FS.stat(e, !0);
    }, chmod(e, t, r) {
      var n;
      if (typeof e == "string") {
        var a = FS.lookupPath(e, { follow: !r });
        n = a.node;
      } else
        n = e;
      if (!n.node_ops.setattr)
        throw new FS.ErrnoError(63);
      n.node_ops.setattr(n, { mode: t & 4095 | n.mode & -4096, timestamp: Date.now() });
    }, lchmod(e, t) {
      FS.chmod(e, t, !0);
    }, fchmod(e, t) {
      var r = FS.getStreamChecked(e);
      FS.chmod(r.node, t);
    }, chown(e, t, r, n) {
      var a;
      if (typeof e == "string") {
        var o = FS.lookupPath(e, { follow: !n });
        a = o.node;
      } else
        a = e;
      if (!a.node_ops.setattr)
        throw new FS.ErrnoError(63);
      a.node_ops.setattr(a, { timestamp: Date.now() });
    }, lchown(e, t, r) {
      FS.chown(e, t, r, !0);
    }, fchown(e, t, r) {
      var n = FS.getStreamChecked(e);
      FS.chown(n.node, t, r);
    }, truncate(e, t) {
      if (t < 0)
        throw new FS.ErrnoError(28);
      var r;
      if (typeof e == "string") {
        var n = FS.lookupPath(e, { follow: !0 });
        r = n.node;
      } else
        r = e;
      if (!r.node_ops.setattr)
        throw new FS.ErrnoError(63);
      if (FS.isDir(r.mode))
        throw new FS.ErrnoError(31);
      if (!FS.isFile(r.mode))
        throw new FS.ErrnoError(28);
      var a = FS.nodePermissions(r, "w");
      if (a)
        throw new FS.ErrnoError(a);
      r.node_ops.setattr(r, { size: t, timestamp: Date.now() });
    }, ftruncate(e, t) {
      var r = FS.getStreamChecked(e);
      if (!(r.flags & 2097155))
        throw new FS.ErrnoError(28);
      FS.truncate(r.node, t);
    }, utime(e, t, r) {
      var n = FS.lookupPath(e, { follow: !0 }), a = n.node;
      a.node_ops.setattr(a, { timestamp: Math.max(t, r) });
    }, open(e, t, r) {
      if (e === "")
        throw new FS.ErrnoError(44);
      t = typeof t == "string" ? FS_modeStringToFlags(t) : t, t & 64 ? (r = typeof r > "u" ? 438 : r, r = r & 4095 | 32768) : r = 0;
      var n;
      if (typeof e == "object")
        n = e;
      else {
        e = PATH.normalize(e);
        try {
          var a = FS.lookupPath(e, { follow: !(t & 131072) });
          n = a.node;
        } catch {
        }
      }
      var o = !1;
      if (t & 64)
        if (n) {
          if (t & 128)
            throw new FS.ErrnoError(20);
        } else
          n = FS.mknod(e, r, 0), o = !0;
      if (!n)
        throw new FS.ErrnoError(44);
      if (FS.isChrdev(n.mode) && (t &= -513), t & 65536 && !FS.isDir(n.mode))
        throw new FS.ErrnoError(54);
      if (!o) {
        var l = FS.mayOpen(n, t);
        if (l)
          throw new FS.ErrnoError(l);
      }
      t & 512 && !o && FS.truncate(n, 0), t &= -131713;
      var c = FS.createStream({ node: n, path: FS.getPath(n), flags: t, seekable: !0, position: 0, stream_ops: n.stream_ops, ungotten: [], error: !1 });
      return c.stream_ops.open && c.stream_ops.open(c), Module.logReadFiles && !(t & 1) && (e in FS.readFiles || (FS.readFiles[e] = 1)), c;
    }, close(e) {
      if (FS.isClosed(e))
        throw new FS.ErrnoError(8);
      e.getdents && (e.getdents = null);
      try {
        e.stream_ops.close && e.stream_ops.close(e);
      } catch (t) {
        throw t;
      } finally {
        FS.closeStream(e.fd);
      }
      e.fd = null;
    }, isClosed(e) {
      return e.fd === null;
    }, llseek(e, t, r) {
      if (FS.isClosed(e))
        throw new FS.ErrnoError(8);
      if (!e.seekable || !e.stream_ops.llseek)
        throw new FS.ErrnoError(70);
      if (r != 0 && r != 1 && r != 2)
        throw new FS.ErrnoError(28);
      return e.position = e.stream_ops.llseek(e, t, r), e.ungotten = [], e.position;
    }, read(e, t, r, n, a) {
      if (n < 0 || a < 0)
        throw new FS.ErrnoError(28);
      if (FS.isClosed(e))
        throw new FS.ErrnoError(8);
      if ((e.flags & 2097155) === 1)
        throw new FS.ErrnoError(8);
      if (FS.isDir(e.node.mode))
        throw new FS.ErrnoError(31);
      if (!e.stream_ops.read)
        throw new FS.ErrnoError(28);
      var o = typeof a < "u";
      if (!o)
        a = e.position;
      else if (!e.seekable)
        throw new FS.ErrnoError(70);
      var l = e.stream_ops.read(e, t, r, n, a);
      return o || (e.position += l), l;
    }, write(e, t, r, n, a, o) {
      if (n < 0 || a < 0)
        throw new FS.ErrnoError(28);
      if (FS.isClosed(e))
        throw new FS.ErrnoError(8);
      if (!(e.flags & 2097155))
        throw new FS.ErrnoError(8);
      if (FS.isDir(e.node.mode))
        throw new FS.ErrnoError(31);
      if (!e.stream_ops.write)
        throw new FS.ErrnoError(28);
      e.seekable && e.flags & 1024 && FS.llseek(e, 0, 2);
      var l = typeof a < "u";
      if (!l)
        a = e.position;
      else if (!e.seekable)
        throw new FS.ErrnoError(70);
      var c = e.stream_ops.write(e, t, r, n, a, o);
      return l || (e.position += c), c;
    }, allocate(e, t, r) {
      if (FS.isClosed(e))
        throw new FS.ErrnoError(8);
      if (t < 0 || r <= 0)
        throw new FS.ErrnoError(28);
      if (!(e.flags & 2097155))
        throw new FS.ErrnoError(8);
      if (!FS.isFile(e.node.mode) && !FS.isDir(e.node.mode))
        throw new FS.ErrnoError(43);
      if (!e.stream_ops.allocate)
        throw new FS.ErrnoError(138);
      e.stream_ops.allocate(e, t, r);
    }, mmap(e, t, r, n, a) {
      if (n & 2 && !(a & 2) && (e.flags & 2097155) !== 2)
        throw new FS.ErrnoError(2);
      if ((e.flags & 2097155) === 1)
        throw new FS.ErrnoError(2);
      if (!e.stream_ops.mmap)
        throw new FS.ErrnoError(43);
      if (!t)
        throw new FS.ErrnoError(28);
      return e.stream_ops.mmap(e, t, r, n, a);
    }, msync(e, t, r, n, a) {
      return e.stream_ops.msync ? e.stream_ops.msync(e, t, r, n, a) : 0;
    }, ioctl(e, t, r) {
      if (!e.stream_ops.ioctl)
        throw new FS.ErrnoError(59);
      return e.stream_ops.ioctl(e, t, r);
    }, readFile(e, t = {}) {
      if (t.flags = t.flags || 0, t.encoding = t.encoding || "binary", t.encoding !== "utf8" && t.encoding !== "binary")
        throw new Error(`Invalid encoding type "${t.encoding}"`);
      var r, n = FS.open(e, t.flags), a = FS.stat(e), o = a.size, l = new Uint8Array(o);
      return FS.read(n, l, 0, o, 0), t.encoding === "utf8" ? r = UTF8ArrayToString(l, 0) : t.encoding === "binary" && (r = l), FS.close(n), r;
    }, writeFile(e, t, r = {}) {
      r.flags = r.flags || 577;
      var n = FS.open(e, r.flags, r.mode);
      if (typeof t == "string") {
        var a = new Uint8Array(lengthBytesUTF8(t) + 1), o = stringToUTF8Array(t, a, 0, a.length);
        FS.write(n, a, 0, o, void 0, r.canOwn);
      } else if (ArrayBuffer.isView(t))
        FS.write(n, t, 0, t.byteLength, void 0, r.canOwn);
      else
        throw new Error("Unsupported data type");
      FS.close(n);
    }, cwd: () => FS.currentPath, chdir(e) {
      var t = FS.lookupPath(e, { follow: !0 });
      if (t.node === null)
        throw new FS.ErrnoError(44);
      if (!FS.isDir(t.node.mode))
        throw new FS.ErrnoError(54);
      var r = FS.nodePermissions(t.node, "x");
      if (r)
        throw new FS.ErrnoError(r);
      FS.currentPath = t.path;
    }, createDefaultDirectories() {
      FS.mkdir("/tmp"), FS.mkdir("/home"), FS.mkdir("/home/web_user");
    }, createDefaultDevices() {
      FS.mkdir("/dev"), FS.registerDevice(FS.makedev(1, 3), { read: () => 0, write: (n, a, o, l, c) => l }), FS.mkdev("/dev/null", FS.makedev(1, 3)), TTY.register(FS.makedev(5, 0), TTY.default_tty_ops), TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops), FS.mkdev("/dev/tty", FS.makedev(5, 0)), FS.mkdev("/dev/tty1", FS.makedev(6, 0));
      var e = new Uint8Array(1024), t = 0, r = () => (t === 0 && (t = randomFill(e).byteLength), e[--t]);
      FS.createDevice("/dev", "random", r), FS.createDevice("/dev", "urandom", r), FS.mkdir("/dev/shm"), FS.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories() {
      FS.mkdir("/proc");
      var e = FS.mkdir("/proc/self");
      FS.mkdir("/proc/self/fd"), FS.mount({ mount() {
        var t = FS.createNode(e, "fd", 16895, 73);
        return t.node_ops = { lookup(r, n) {
          var a = +n, o = FS.getStreamChecked(a), l = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => o.path } };
          return l.parent = l, l;
        } }, t;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams(e, t, r) {
      e ? FS.createDevice("/dev", "stdin", e) : FS.symlink("/dev/tty", "/dev/stdin"), t ? FS.createDevice("/dev", "stdout", null, t) : FS.symlink("/dev/tty", "/dev/stdout"), r ? FS.createDevice("/dev", "stderr", null, r) : FS.symlink("/dev/tty1", "/dev/stderr"), FS.open("/dev/stdin", 0), FS.open("/dev/stdout", 1), FS.open("/dev/stderr", 1);
    }, staticInit() {
      [44].forEach((e) => {
        FS.genericErrors[e] = new FS.ErrnoError(e), FS.genericErrors[e].stack = "<generic error, no stack>";
      }), FS.nameTable = new Array(4096), FS.mount(MEMFS, {}, "/"), FS.createDefaultDirectories(), FS.createDefaultDevices(), FS.createSpecialDirectories(), FS.filesystems = { MEMFS, IDBFS };
    }, init(e, t, r) {
      FS.initialized = !0, e ?? (e = Module.stdin), t ?? (t = Module.stdout), r ?? (r = Module.stderr), FS.createStandardStreams(e, t, r);
    }, quit() {
      FS.initialized = !1, _fflush(0);
      for (var e = 0; e < FS.streams.length; e++) {
        var t = FS.streams[e];
        t && FS.close(t);
      }
    }, findObject(e, t) {
      var r = FS.analyzePath(e, t);
      return r.exists ? r.object : null;
    }, analyzePath(e, t) {
      try {
        var r = FS.lookupPath(e, { follow: !t });
        e = r.path;
      } catch {
      }
      var n = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
      try {
        var r = FS.lookupPath(e, { parent: !0 });
        n.parentExists = !0, n.parentPath = r.path, n.parentObject = r.node, n.name = PATH.basename(e), r = FS.lookupPath(e, { follow: !t }), n.exists = !0, n.path = r.path, n.object = r.node, n.name = r.node.name, n.isRoot = r.path === "/";
      } catch (a) {
        n.error = a.errno;
      }
      return n;
    }, createPath(e, t, r, n) {
      e = typeof e == "string" ? e : FS.getPath(e);
      for (var a = t.split("/").reverse(); a.length; ) {
        var o = a.pop();
        if (o) {
          var l = PATH.join2(e, o);
          try {
            FS.mkdir(l);
          } catch {
          }
          e = l;
        }
      }
      return l;
    }, createFile(e, t, r, n, a) {
      var o = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t), l = FS_getMode(n, a);
      return FS.create(o, l);
    }, createDataFile(e, t, r, n, a, o) {
      var l = t;
      e && (e = typeof e == "string" ? e : FS.getPath(e), l = t ? PATH.join2(e, t) : e);
      var c = FS_getMode(n, a), u = FS.create(l, c);
      if (r) {
        if (typeof r == "string") {
          for (var _ = new Array(r.length), d = 0, f = r.length; d < f; ++d) _[d] = r.charCodeAt(d);
          r = _;
        }
        FS.chmod(u, c | 146);
        var p = FS.open(u, 577);
        FS.write(p, r, 0, r.length, 0, o), FS.close(p), FS.chmod(u, c);
      }
    }, createDevice(e, t, r, n) {
      var c;
      var a = PATH.join2(typeof e == "string" ? e : FS.getPath(e), t), o = FS_getMode(!!r, !!n);
      (c = FS.createDevice).major ?? (c.major = 64);
      var l = FS.makedev(FS.createDevice.major++, 0);
      return FS.registerDevice(l, { open(u) {
        u.seekable = !1;
      }, close(u) {
        var _;
        (_ = n == null ? void 0 : n.buffer) != null && _.length && n(10);
      }, read(u, _, d, f, p) {
        for (var m = 0, S = 0; S < f; S++) {
          var h;
          try {
            h = r();
          } catch {
            throw new FS.ErrnoError(29);
          }
          if (h === void 0 && m === 0)
            throw new FS.ErrnoError(6);
          if (h == null) break;
          m++, _[d + S] = h;
        }
        return m && (u.node.timestamp = Date.now()), m;
      }, write(u, _, d, f, p) {
        for (var m = 0; m < f; m++)
          try {
            n(_[d + m]);
          } catch {
            throw new FS.ErrnoError(29);
          }
        return f && (u.node.timestamp = Date.now()), m;
      } }), FS.mkdev(a, o, l);
    }, forceLoadFile(e) {
      if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
      if (typeof XMLHttpRequest < "u")
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      try {
        e.contents = readBinary(e.url), e.usedBytes = e.contents.length;
      } catch {
        throw new FS.ErrnoError(29);
      }
    }, createLazyFile(e, t, r, n, a) {
      class o {
        constructor() {
          this.lengthKnown = !1, this.chunks = [];
        }
        get(m) {
          if (!(m > this.length - 1 || m < 0)) {
            var S = m % this.chunkSize, h = m / this.chunkSize | 0;
            return this.getter(h)[S];
          }
        }
        setDataGetter(m) {
          this.getter = m;
        }
        cacheLength() {
          var m = new XMLHttpRequest();
          if (m.open("HEAD", r, !1), m.send(null), !(m.status >= 200 && m.status < 300 || m.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + m.status);
          var S = Number(m.getResponseHeader("Content-length")), h, g = (h = m.getResponseHeader("Accept-Ranges")) && h === "bytes", y = (h = m.getResponseHeader("Content-Encoding")) && h === "gzip", b = 1024 * 1024;
          g || (b = S);
          var C = (E, U) => {
            if (E > U) throw new Error("invalid range (" + E + ", " + U + ") or no bytes requested!");
            if (U > S - 1) throw new Error("only " + S + " bytes available! programmer error!");
            var v = new XMLHttpRequest();
            if (v.open("GET", r, !1), S !== b && v.setRequestHeader("Range", "bytes=" + E + "-" + U), v.responseType = "arraybuffer", v.overrideMimeType && v.overrideMimeType("text/plain; charset=x-user-defined"), v.send(null), !(v.status >= 200 && v.status < 300 || v.status === 304)) throw new Error("Couldn't load " + r + ". Status: " + v.status);
            return v.response !== void 0 ? new Uint8Array(v.response || []) : intArrayFromString(v.responseText || "", !0);
          }, x = this;
          x.setDataGetter((E) => {
            var U = E * b, v = (E + 1) * b - 1;
            if (v = Math.min(v, S - 1), typeof x.chunks[E] > "u" && (x.chunks[E] = C(U, v)), typeof x.chunks[E] > "u") throw new Error("doXHR failed!");
            return x.chunks[E];
          }), (y || !S) && (b = S = 1, S = this.getter(0).length, b = S, out("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = S, this._chunkSize = b, this.lengthKnown = !0;
        }
        get length() {
          return this.lengthKnown || this.cacheLength(), this._length;
        }
        get chunkSize() {
          return this.lengthKnown || this.cacheLength(), this._chunkSize;
        }
      }
      if (typeof XMLHttpRequest < "u") {
        throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var l, c;
      } else
        var c = { isDevice: !1, url: r };
      var u = FS.createFile(e, t, c, n, a);
      c.contents ? u.contents = c.contents : c.url && (u.contents = null, u.url = c.url), Object.defineProperties(u, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var _ = {}, d = Object.keys(u.stream_ops);
      d.forEach((p) => {
        var m = u.stream_ops[p];
        _[p] = (...S) => (FS.forceLoadFile(u), m(...S));
      });
      function f(p, m, S, h, g) {
        var y = p.node.contents;
        if (g >= y.length) return 0;
        var b = Math.min(y.length - g, h);
        if (y.slice)
          for (var C = 0; C < b; C++)
            m[S + C] = y[g + C];
        else
          for (var C = 0; C < b; C++)
            m[S + C] = y.get(g + C);
        return b;
      }
      return _.read = (p, m, S, h, g) => (FS.forceLoadFile(u), f(p, m, S, h, g)), _.mmap = (p, m, S, h, g) => {
        FS.forceLoadFile(u);
        var y = mmapAlloc(m);
        if (!y)
          throw new FS.ErrnoError(48);
        return f(p, HEAP8, y, m, S), { ptr: y, allocated: !0 };
      }, u.stream_ops = _, u;
    } }, SYSCALLS = { DEFAULT_POLLMASK: 5, calculateAt(e, t, r) {
      if (PATH.isAbs(t))
        return t;
      var n;
      if (e === -100)
        n = FS.cwd();
      else {
        var a = SYSCALLS.getStreamFromFD(e);
        n = a.path;
      }
      if (t.length == 0) {
        if (!r)
          throw new FS.ErrnoError(44);
        return n;
      }
      return PATH.join2(n, t);
    }, doStat(e, t, r) {
      var n = e(t);
      HEAP32[r >>> 2 >>> 0] = n.dev, HEAP32[r + 4 >>> 2 >>> 0] = n.mode, HEAPU32[r + 8 >>> 2 >>> 0] = n.nlink, HEAP32[r + 12 >>> 2 >>> 0] = n.uid, HEAP32[r + 16 >>> 2 >>> 0] = n.gid, HEAP32[r + 20 >>> 2 >>> 0] = n.rdev, tempI64 = [n.size >>> 0, (tempDouble = n.size, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[r + 24 >>> 2 >>> 0] = tempI64[0], HEAP32[r + 28 >>> 2 >>> 0] = tempI64[1], HEAP32[r + 32 >>> 2 >>> 0] = 4096, HEAP32[r + 36 >>> 2 >>> 0] = n.blocks;
      var a = n.atime.getTime(), o = n.mtime.getTime(), l = n.ctime.getTime();
      return tempI64 = [Math.floor(a / 1e3) >>> 0, (tempDouble = Math.floor(a / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[r + 40 >>> 2 >>> 0] = tempI64[0], HEAP32[r + 44 >>> 2 >>> 0] = tempI64[1], HEAPU32[r + 48 >>> 2 >>> 0] = a % 1e3 * 1e3 * 1e3, tempI64 = [Math.floor(o / 1e3) >>> 0, (tempDouble = Math.floor(o / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[r + 56 >>> 2 >>> 0] = tempI64[0], HEAP32[r + 60 >>> 2 >>> 0] = tempI64[1], HEAPU32[r + 64 >>> 2 >>> 0] = o % 1e3 * 1e3 * 1e3, tempI64 = [Math.floor(l / 1e3) >>> 0, (tempDouble = Math.floor(l / 1e3), +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[r + 72 >>> 2 >>> 0] = tempI64[0], HEAP32[r + 76 >>> 2 >>> 0] = tempI64[1], HEAPU32[r + 80 >>> 2 >>> 0] = l % 1e3 * 1e3 * 1e3, tempI64 = [n.ino >>> 0, (tempDouble = n.ino, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[r + 88 >>> 2 >>> 0] = tempI64[0], HEAP32[r + 92 >>> 2 >>> 0] = tempI64[1], 0;
    }, doMsync(e, t, r, n, a) {
      if (!FS.isFile(t.node.mode))
        throw new FS.ErrnoError(43);
      if (n & 2)
        return 0;
      var o = HEAPU8.slice(e, e + r);
      FS.msync(t, o, a, r, n);
    }, getStreamFromFD(e) {
      var t = FS.getStreamChecked(e);
      return t;
    }, varargs: void 0, getStr(e) {
      var t = UTF8ToString(e);
      return t;
    } };
    function ___syscall__newselect(e, t, r, n, a) {
      t >>>= 0, r >>>= 0, n >>>= 0, a >>>= 0;
      try {
        for (var o = 0, l = t ? HEAP32[t >>> 2 >>> 0] : 0, c = t ? HEAP32[t + 4 >>> 2 >>> 0] : 0, u = r ? HEAP32[r >>> 2 >>> 0] : 0, _ = r ? HEAP32[r + 4 >>> 2 >>> 0] : 0, d = n ? HEAP32[n >>> 2 >>> 0] : 0, f = n ? HEAP32[n + 4 >>> 2 >>> 0] : 0, p = 0, m = 0, S = 0, h = 0, g = 0, y = 0, b = (t ? HEAP32[t >>> 2 >>> 0] : 0) | (r ? HEAP32[r >>> 2 >>> 0] : 0) | (n ? HEAP32[n >>> 2 >>> 0] : 0), C = (t ? HEAP32[t + 4 >>> 2 >>> 0] : 0) | (r ? HEAP32[r + 4 >>> 2 >>> 0] : 0) | (n ? HEAP32[n + 4 >>> 2 >>> 0] : 0), x = function(P, H, R, L) {
          return P < 32 ? H & L : R & L;
        }, E = 0; E < e; E++) {
          var U = 1 << E % 32;
          if (x(E, b, C, U)) {
            var v = SYSCALLS.getStreamFromFD(E), I = SYSCALLS.DEFAULT_POLLMASK;
            if (v.stream_ops.poll) {
              var A = -1;
              if (a) {
                var k = t ? HEAP32[a >>> 2 >>> 0] : 0, T = t ? HEAP32[a + 4 >>> 2 >>> 0] : 0;
                A = (k + T / 1e6) * 1e3;
              }
              I = v.stream_ops.poll(v, A);
            }
            I & 1 && x(E, l, c, U) && (E < 32 ? p = p | U : m = m | U, o++), I & 4 && x(E, u, _, U) && (E < 32 ? S = S | U : h = h | U, o++), I & 2 && x(E, d, f, U) && (E < 32 ? g = g | U : y = y | U, o++);
          }
        }
        return t && (HEAP32[t >>> 2 >>> 0] = p, HEAP32[t + 4 >>> 2 >>> 0] = m), r && (HEAP32[r >>> 2 >>> 0] = S, HEAP32[r + 4 >>> 2 >>> 0] = h), n && (HEAP32[n >>> 2 >>> 0] = g, HEAP32[n + 4 >>> 2 >>> 0] = y), o;
      } catch (P) {
        if (typeof FS > "u" || P.name !== "ErrnoError") throw P;
        return -P.errno;
      }
    }
    ___syscall__newselect.sig = "iipppp";
    var SOCKFS = { mount(e) {
      return Module.websocket = Module.websocket && typeof Module.websocket == "object" ? Module.websocket : {}, Module.websocket._callbacks = {}, Module.websocket.on = function(t, r) {
        return typeof r == "function" && (this._callbacks[t] = r), this;
      }, Module.websocket.emit = function(t, r) {
        typeof this._callbacks[t] == "function" && this._callbacks[t].call(this, r);
      }, FS.createNode(null, "/", 16895, 0);
    }, createSocket(e, t, r) {
      t &= -526337;
      var n = t == 1;
      if (n && r && r != 6)
        throw new FS.ErrnoError(66);
      var a = { family: e, type: t, protocol: r, server: null, error: null, peers: {}, pending: [], recv_queue: [], sock_ops: SOCKFS.websocket_sock_ops }, o = SOCKFS.nextname(), l = FS.createNode(SOCKFS.root, o, 49152, 0);
      l.sock = a;
      var c = FS.createStream({ path: o, node: l, flags: 2, seekable: !1, stream_ops: SOCKFS.stream_ops });
      return a.stream = c, a;
    }, getSocket(e) {
      var t = FS.getStream(e);
      return !t || !FS.isSocket(t.node.mode) ? null : t.node.sock;
    }, stream_ops: { poll(e) {
      var t = e.node.sock;
      return t.sock_ops.poll(t);
    }, ioctl(e, t, r) {
      var n = e.node.sock;
      return n.sock_ops.ioctl(n, t, r);
    }, read(e, t, r, n, a) {
      var o = e.node.sock, l = o.sock_ops.recvmsg(o, n);
      return l ? (t.set(l.buffer, r), l.buffer.length) : 0;
    }, write(e, t, r, n, a) {
      var o = e.node.sock;
      return o.sock_ops.sendmsg(o, t, r, n);
    }, close(e) {
      var t = e.node.sock;
      t.sock_ops.close(t);
    } }, nextname() {
      return SOCKFS.nextname.current || (SOCKFS.nextname.current = 0), "socket[" + SOCKFS.nextname.current++ + "]";
    }, websocket_sock_ops: { createPeer(e, t, r) {
      var n;
      if (typeof t == "object" && (n = t, t = null, r = null), n)
        if (n._socket)
          t = n._socket.remoteAddress, r = n._socket.remotePort;
        else {
          var a = /ws[s]?:\/\/([^:]+):(\d+)/.exec(n.url);
          if (!a)
            throw new Error("WebSocket URL must be in the format ws(s)://address:port");
          t = a[1], r = parseInt(a[2], 10);
        }
      else
        try {
          var o = Module.websocket && typeof Module.websocket == "object", l = "ws:#".replace("#", "//");
          if (o && typeof Module.websocket.url == "string" && (l = Module.websocket.url), l === "ws://" || l === "wss://") {
            var c = t.split("/");
            l = l + c[0] + ":" + r + "/" + c.slice(1).join("/");
          }
          var u = "binary";
          o && typeof Module.websocket.subprotocol == "string" && (u = Module.websocket.subprotocol);
          var _ = void 0;
          u !== "null" && (u = u.replace(/^ +| +$/g, "").split(/ *, */), _ = u), o && Module.websocket.subprotocol === null && (u = "null", _ = void 0);
          var d;
          d = WebSocket, n = new d(l, _), n.binaryType = "arraybuffer";
        } catch {
          throw new FS.ErrnoError(23);
        }
      var f = { addr: t, port: r, socket: n, dgram_send_queue: [] };
      return SOCKFS.websocket_sock_ops.addPeer(e, f), SOCKFS.websocket_sock_ops.handlePeerEvents(e, f), e.type === 2 && typeof e.sport < "u" && f.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, 112, 111, 114, 116, (e.sport & 65280) >> 8, e.sport & 255])), f;
    }, getPeer(e, t, r) {
      return e.peers[t + ":" + r];
    }, addPeer(e, t) {
      e.peers[t.addr + ":" + t.port] = t;
    }, removePeer(e, t) {
      delete e.peers[t.addr + ":" + t.port];
    }, handlePeerEvents(e, t) {
      var r = !0, n = function() {
        Module.websocket.emit("open", e.stream.fd);
        try {
          for (var o = t.dgram_send_queue.shift(); o; )
            t.socket.send(o), o = t.dgram_send_queue.shift();
        } catch {
          t.socket.close();
        }
      };
      function a(o) {
        if (typeof o == "string") {
          var l = new TextEncoder();
          o = l.encode(o);
        } else {
          if (assert(o.byteLength !== void 0), o.byteLength == 0)
            return;
          o = new Uint8Array(o);
        }
        var c = r;
        if (r = !1, c && o.length === 10 && o[0] === 255 && o[1] === 255 && o[2] === 255 && o[3] === 255 && o[4] === 112 && o[5] === 111 && o[6] === 114 && o[7] === 116) {
          var u = o[8] << 8 | o[9];
          SOCKFS.websocket_sock_ops.removePeer(e, t), t.port = u, SOCKFS.websocket_sock_ops.addPeer(e, t);
          return;
        }
        e.recv_queue.push({ addr: t.addr, port: t.port, data: o }), Module.websocket.emit("message", e.stream.fd);
      }
      t.socket.onopen = n, t.socket.onclose = function() {
        Module.websocket.emit("close", e.stream.fd);
      }, t.socket.onmessage = function(l) {
        a(l.data);
      }, t.socket.onerror = function(o) {
        e.error = 14, Module.websocket.emit("error", [e.stream.fd, e.error, "ECONNREFUSED: Connection refused"]);
      };
    }, poll(e) {
      if (e.type === 1 && e.server)
        return e.pending.length ? 65 : 0;
      var t = 0, r = e.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport) : null;
      return (e.recv_queue.length || !r || r && r.socket.readyState === r.socket.CLOSING || r && r.socket.readyState === r.socket.CLOSED) && (t |= 65), (!r || r && r.socket.readyState === r.socket.OPEN) && (t |= 4), (r && r.socket.readyState === r.socket.CLOSING || r && r.socket.readyState === r.socket.CLOSED) && (t |= 16), t;
    }, ioctl(e, t, r) {
      switch (t) {
        case 21531:
          var n = 0;
          return e.recv_queue.length && (n = e.recv_queue[0].data.length), HEAP32[r >>> 2 >>> 0] = n, 0;
        default:
          return 28;
      }
    }, close(e) {
      if (e.server) {
        try {
          e.server.close();
        } catch {
        }
        e.server = null;
      }
      for (var t = Object.keys(e.peers), r = 0; r < t.length; r++) {
        var n = e.peers[t[r]];
        try {
          n.socket.close();
        } catch {
        }
        SOCKFS.websocket_sock_ops.removePeer(e, n);
      }
      return 0;
    }, bind(e, t, r) {
      if (typeof e.saddr < "u" || typeof e.sport < "u")
        throw new FS.ErrnoError(28);
      if (e.saddr = t, e.sport = r, e.type === 2) {
        e.server && (e.server.close(), e.server = null);
        try {
          e.sock_ops.listen(e, 0);
        } catch (n) {
          if (n.name !== "ErrnoError" || n.errno !== 138) throw n;
        }
      }
    }, connect(e, t, r) {
      if (e.server)
        throw new FS.ErrnoError(138);
      if (typeof e.daddr < "u" && typeof e.dport < "u") {
        var n = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
        if (n)
          throw n.socket.readyState === n.socket.CONNECTING ? new FS.ErrnoError(7) : new FS.ErrnoError(30);
      }
      var a = SOCKFS.websocket_sock_ops.createPeer(e, t, r);
      throw e.daddr = a.addr, e.dport = a.port, new FS.ErrnoError(26);
    }, listen(e, t) {
      throw new FS.ErrnoError(138);
    }, accept(e) {
      if (!e.server || !e.pending.length)
        throw new FS.ErrnoError(28);
      var t = e.pending.shift();
      return t.stream.flags = e.stream.flags, t;
    }, getname(e, t) {
      var r, n;
      if (t) {
        if (e.daddr === void 0 || e.dport === void 0)
          throw new FS.ErrnoError(53);
        r = e.daddr, n = e.dport;
      } else
        r = e.saddr || 0, n = e.sport || 0;
      return { addr: r, port: n };
    }, sendmsg(e, t, r, n, a, o) {
      if (e.type === 2) {
        if ((a === void 0 || o === void 0) && (a = e.daddr, o = e.dport), a === void 0 || o === void 0)
          throw new FS.ErrnoError(17);
      } else
        a = e.daddr, o = e.dport;
      var l = SOCKFS.websocket_sock_ops.getPeer(e, a, o);
      if (e.type === 1) {
        if (!l || l.socket.readyState === l.socket.CLOSING || l.socket.readyState === l.socket.CLOSED)
          throw new FS.ErrnoError(53);
        if (l.socket.readyState === l.socket.CONNECTING)
          throw new FS.ErrnoError(6);
      }
      ArrayBuffer.isView(t) && (r += t.byteOffset, t = t.buffer);
      var c;
      if (c = t.slice(r, r + n), e.type === 2 && (!l || l.socket.readyState !== l.socket.OPEN))
        return (!l || l.socket.readyState === l.socket.CLOSING || l.socket.readyState === l.socket.CLOSED) && (l = SOCKFS.websocket_sock_ops.createPeer(e, a, o)), l.dgram_send_queue.push(c), n;
      try {
        return l.socket.send(c), n;
      } catch {
        throw new FS.ErrnoError(28);
      }
    }, recvmsg(e, t) {
      if (e.type === 1 && e.server)
        throw new FS.ErrnoError(53);
      var r = e.recv_queue.shift();
      if (!r) {
        if (e.type === 1) {
          var n = SOCKFS.websocket_sock_ops.getPeer(e, e.daddr, e.dport);
          if (!n)
            throw new FS.ErrnoError(53);
          if (n.socket.readyState === n.socket.CLOSING || n.socket.readyState === n.socket.CLOSED)
            return null;
          throw new FS.ErrnoError(6);
        }
        throw new FS.ErrnoError(6);
      }
      var a = r.data.byteLength || r.data.length, o = r.data.byteOffset || 0, l = r.data.buffer || r.data, c = Math.min(t, a), u = { buffer: new Uint8Array(l, o, c), addr: r.addr, port: r.port };
      if (e.type === 1 && c < a) {
        var _ = a - c;
        r.data = new Uint8Array(l, o + c, _), e.recv_queue.unshift(r);
      }
      return u;
    } } }, getSocketFromFD = (e) => {
      var t = SOCKFS.getSocket(e);
      if (!t) throw new FS.ErrnoError(8);
      return t;
    }, inetPton4 = (e) => {
      for (var t = e.split("."), r = 0; r < 4; r++) {
        var n = Number(t[r]);
        if (isNaN(n)) return null;
        t[r] = n;
      }
      return (t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24) >>> 0;
    }, jstoi_q = (e) => parseInt(e), inetPton6 = (e) => {
      var t, r, n, a, o = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i, l = [];
      if (!o.test(e))
        return null;
      if (e === "::")
        return [0, 0, 0, 0, 0, 0, 0, 0];
      for (e.startsWith("::") ? e = e.replace("::", "Z:") : e = e.replace("::", ":Z:"), e.indexOf(".") > 0 ? (e = e.replace(new RegExp("[.]", "g"), ":"), t = e.split(":"), t[t.length - 4] = jstoi_q(t[t.length - 4]) + jstoi_q(t[t.length - 3]) * 256, t[t.length - 3] = jstoi_q(t[t.length - 2]) + jstoi_q(t[t.length - 1]) * 256, t = t.slice(0, t.length - 2)) : t = e.split(":"), n = 0, a = 0, r = 0; r < t.length; r++)
        if (typeof t[r] == "string")
          if (t[r] === "Z") {
            for (a = 0; a < 8 - t.length + 1; a++)
              l[r + a] = 0;
            n = a - 1;
          } else
            l[r + n] = _htons(parseInt(t[r], 16));
        else
          l[r + n] = t[r];
      return [l[1] << 16 | l[0], l[3] << 16 | l[2], l[5] << 16 | l[4], l[7] << 16 | l[6]];
    }, writeSockaddr = (e, t, r, n, a) => {
      switch (t) {
        case 2:
          r = inetPton4(r), zeroMemory(e, 16), a && (HEAP32[a >>> 2 >>> 0] = 16), HEAP16[e >>> 1 >>> 0] = t, HEAP32[e + 4 >>> 2 >>> 0] = r, HEAP16[e + 2 >>> 1 >>> 0] = _htons(n);
          break;
        case 10:
          r = inetPton6(r), zeroMemory(e, 28), a && (HEAP32[a >>> 2 >>> 0] = 28), HEAP32[e >>> 2 >>> 0] = t, HEAP32[e + 8 >>> 2 >>> 0] = r[0], HEAP32[e + 12 >>> 2 >>> 0] = r[1], HEAP32[e + 16 >>> 2 >>> 0] = r[2], HEAP32[e + 20 >>> 2 >>> 0] = r[3], HEAP16[e + 2 >>> 1 >>> 0] = _htons(n);
          break;
        default:
          return 5;
      }
      return 0;
    }, DNS = { address_map: { id: 1, addrs: {}, names: {} }, lookup_name(e) {
      var t = inetPton4(e);
      if (t !== null || (t = inetPton6(e), t !== null))
        return e;
      var r;
      if (DNS.address_map.addrs[e])
        r = DNS.address_map.addrs[e];
      else {
        var n = DNS.address_map.id++;
        assert(n < 65535, "exceeded max address mappings of 65535"), r = "172.29." + (n & 255) + "." + (n & 65280), DNS.address_map.names[r] = e, DNS.address_map.addrs[e] = r;
      }
      return r;
    }, lookup_addr(e) {
      return DNS.address_map.names[e] ? DNS.address_map.names[e] : null;
    } };
    function ___syscall_accept4(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0;
      try {
        var l = getSocketFromFD(e), c = l.sock_ops.accept(l);
        if (t)
          var u = writeSockaddr(t, c.family, DNS.lookup_name(c.daddr), c.dport, r);
        return c.stream.fd;
      } catch (_) {
        if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
        return -_.errno;
      }
    }
    ___syscall_accept4.sig = "iippiii";
    var inetNtop4 = (e) => (e & 255) + "." + (e >> 8 & 255) + "." + (e >> 16 & 255) + "." + (e >> 24 & 255), inetNtop6 = (e) => {
      var t = "", r = 0, n = 0, a = 0, o = 0, l = 0, c = 0, u = [e[0] & 65535, e[0] >> 16, e[1] & 65535, e[1] >> 16, e[2] & 65535, e[2] >> 16, e[3] & 65535, e[3] >> 16], _ = !0, d = "";
      for (c = 0; c < 5; c++)
        if (u[c] !== 0) {
          _ = !1;
          break;
        }
      if (_) {
        if (d = inetNtop4(u[6] | u[7] << 16), u[5] === -1)
          return t = "::ffff:", t += d, t;
        if (u[5] === 0)
          return t = "::", d === "0.0.0.0" && (d = ""), d === "0.0.0.1" && (d = "1"), t += d, t;
      }
      for (r = 0; r < 8; r++)
        u[r] === 0 && (r - a > 1 && (l = 0), a = r, l++), l > n && (n = l, o = r - n + 1);
      for (r = 0; r < 8; r++) {
        if (n > 1 && u[r] === 0 && r >= o && r < o + n) {
          r === o && (t += ":", o === 0 && (t += ":"));
          continue;
        }
        t += Number(_ntohs(u[r] & 65535)).toString(16), t += r < 7 ? ":" : "";
      }
      return t;
    }, readSockaddr = (e, t) => {
      var r = HEAP16[e >>> 1 >>> 0], n = _ntohs(HEAPU16[e + 2 >>> 1 >>> 0]), a;
      switch (r) {
        case 2:
          if (t !== 16)
            return { errno: 28 };
          a = HEAP32[e + 4 >>> 2 >>> 0], a = inetNtop4(a);
          break;
        case 10:
          if (t !== 28)
            return { errno: 28 };
          a = [HEAP32[e + 8 >>> 2 >>> 0], HEAP32[e + 12 >>> 2 >>> 0], HEAP32[e + 16 >>> 2 >>> 0], HEAP32[e + 20 >>> 2 >>> 0]], a = inetNtop6(a);
          break;
        default:
          return { errno: 5 };
      }
      return { family: r, addr: a, port: n };
    }, getSocketAddress = (e, t, r) => {
      if (r && e === 0) return null;
      var n = readSockaddr(e, t);
      if (n.errno) throw new FS.ErrnoError(n.errno);
      return n.addr = DNS.lookup_addr(n.addr) || n.addr, n;
    };
    function ___syscall_bind(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0;
      try {
        var l = getSocketFromFD(e), c = getSocketAddress(t, r);
        return l.sock_ops.bind(l, c.addr, c.port), 0;
      } catch (u) {
        if (typeof FS > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    ___syscall_bind.sig = "iippiii";
    function ___syscall_chdir(e) {
      e >>>= 0;
      try {
        return e = SYSCALLS.getStr(e), FS.chdir(e), 0;
      } catch (t) {
        if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    ___syscall_chdir.sig = "ip";
    function ___syscall_chmod(e, t) {
      e >>>= 0;
      try {
        return e = SYSCALLS.getStr(e), FS.chmod(e, t), 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_chmod.sig = "ipi";
    function ___syscall_connect(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0;
      try {
        var l = getSocketFromFD(e), c = getSocketAddress(t, r);
        return l.sock_ops.connect(l, c.addr, c.port), 0;
      } catch (u) {
        if (typeof FS > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    ___syscall_connect.sig = "iippiii";
    function ___syscall_dup(e) {
      try {
        var t = SYSCALLS.getStreamFromFD(e);
        return FS.dupStream(t).fd;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_dup.sig = "ii";
    function ___syscall_dup3(e, t, r) {
      try {
        var n = SYSCALLS.getStreamFromFD(e);
        if (n.fd === t) return -28;
        if (t < 0 || t >= FS.MAX_OPEN_FDS) return -8;
        var a = FS.getStream(t);
        return a && FS.close(a), FS.dupStream(n, t).fd;
      } catch (o) {
        if (typeof FS > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    ___syscall_dup3.sig = "iiii";
    function ___syscall_faccessat(e, t, r, n) {
      t >>>= 0;
      try {
        if (t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), r & -8)
          return -28;
        var a = FS.lookupPath(t, { follow: !0 }), o = a.node;
        if (!o)
          return -44;
        var l = "";
        return r & 4 && (l += "r"), r & 2 && (l += "w"), r & 1 && (l += "x"), l && FS.nodePermissions(o, l) ? -2 : 0;
      } catch (c) {
        if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    ___syscall_faccessat.sig = "iipii";
    var ___syscall_fadvise64 = (e, t, r, n) => 0;
    ___syscall_fadvise64.sig = "iiiiiii";
    function ___syscall_fallocate(e, t, r, n, a, o) {
      var l = convertI32PairToI53Checked(r, n), c = convertI32PairToI53Checked(a, o);
      try {
        if (isNaN(l)) return 61;
        var u = SYSCALLS.getStreamFromFD(e);
        return FS.allocate(u, l, c), 0;
      } catch (_) {
        if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
        return -_.errno;
      }
    }
    ___syscall_fallocate.sig = "iiiiiii";
    function ___syscall_fchdir(e) {
      try {
        var t = SYSCALLS.getStreamFromFD(e);
        return FS.chdir(t.path), 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_fchdir.sig = "ii";
    function ___syscall_fchmod(e, t) {
      try {
        return FS.fchmod(e, t), 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_fchmod.sig = "iii";
    function ___syscall_fchmodat2(e, t, r, n) {
      t >>>= 0;
      try {
        var a = n & 256;
        return t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), FS.chmod(t, r, a), 0;
      } catch (o) {
        if (typeof FS > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    ___syscall_fchmodat2.sig = "iipii";
    function ___syscall_fchown32(e, t, r) {
      try {
        return FS.fchown(e, t, r), 0;
      } catch (n) {
        if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    ___syscall_fchown32.sig = "iiii";
    function ___syscall_fchownat(e, t, r, n, a) {
      t >>>= 0;
      try {
        t = SYSCALLS.getStr(t);
        var o = a & 256;
        return a = a & -257, t = SYSCALLS.calculateAt(e, t), (o ? FS.lchown : FS.chown)(t, r, n), 0;
      } catch (l) {
        if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
        return -l.errno;
      }
    }
    ___syscall_fchownat.sig = "iipiii";
    function syscallGetVarargI() {
      var e = HEAP32[+SYSCALLS.varargs >>> 2 >>> 0];
      return SYSCALLS.varargs += 4, e;
    }
    var syscallGetVarargP = syscallGetVarargI;
    function ___syscall_fcntl64(e, t, r) {
      r >>>= 0, SYSCALLS.varargs = r;
      try {
        var n = SYSCALLS.getStreamFromFD(e);
        switch (t) {
          case 0: {
            var a = syscallGetVarargI();
            if (a < 0)
              return -28;
            for (; FS.streams[a]; )
              a++;
            var o;
            return o = FS.dupStream(n, a), o.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return n.flags;
          case 4: {
            var a = syscallGetVarargI();
            return n.flags |= a, 0;
          }
          case 12: {
            var a = syscallGetVarargP(), l = 0;
            return HEAP16[a + l >>> 1 >>> 0] = 2, 0;
          }
          case 13:
          case 14:
            return 0;
        }
        return -28;
      } catch (c) {
        if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    ___syscall_fcntl64.sig = "iiip";
    function ___syscall_fdatasync(e) {
      try {
        var t = SYSCALLS.getStreamFromFD(e);
        return 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_fdatasync.sig = "ii";
    function ___syscall_fstat64(e, t) {
      t >>>= 0;
      try {
        var r = SYSCALLS.getStreamFromFD(e);
        return SYSCALLS.doStat(FS.stat, r.path, t);
      } catch (n) {
        if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    ___syscall_fstat64.sig = "iip";
    function ___syscall_statfs64(e, t, r) {
      e >>>= 0, r >>>= 0;
      try {
        return e = SYSCALLS.getStr(e), HEAP32[r + 4 >>> 2 >>> 0] = 4096, HEAP32[r + 40 >>> 2 >>> 0] = 4096, HEAP32[r + 8 >>> 2 >>> 0] = 1e6, HEAP32[r + 12 >>> 2 >>> 0] = 5e5, HEAP32[r + 16 >>> 2 >>> 0] = 5e5, HEAP32[r + 20 >>> 2 >>> 0] = FS.nextInode, HEAP32[r + 24 >>> 2 >>> 0] = 1e6, HEAP32[r + 28 >>> 2 >>> 0] = 42, HEAP32[r + 44 >>> 2 >>> 0] = 2, HEAP32[r + 36 >>> 2 >>> 0] = 255, 0;
      } catch (n) {
        if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    ___syscall_statfs64.sig = "ippp";
    function ___syscall_fstatfs64(e, t, r) {
      t >>>= 0, r >>>= 0;
      try {
        var n = SYSCALLS.getStreamFromFD(e);
        return ___syscall_statfs64(0, t, r);
      } catch (a) {
        if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    ___syscall_fstatfs64.sig = "iipp";
    function ___syscall_ftruncate64(e, t, r) {
      var n = convertI32PairToI53Checked(t, r);
      try {
        return isNaN(n) ? 61 : (FS.ftruncate(e, n), 0);
      } catch (a) {
        if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    ___syscall_ftruncate64.sig = "iiii";
    var stringToUTF8 = (e, t, r) => stringToUTF8Array(e, HEAPU8, t, r);
    function ___syscall_getcwd(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        if (t === 0) return -28;
        var r = FS.cwd(), n = lengthBytesUTF8(r) + 1;
        return t < n ? -68 : (stringToUTF8(r, e, t), n);
      } catch (a) {
        if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    ___syscall_getcwd.sig = "ipp";
    function ___syscall_getdents64(e, t, r) {
      t >>>= 0, r >>>= 0;
      try {
        var n = SYSCALLS.getStreamFromFD(e);
        n.getdents || (n.getdents = FS.readdir(n.path));
        for (var a = 280, o = 0, l = FS.llseek(n, 0, 1), c = Math.floor(l / a); c < n.getdents.length && o + a <= r; ) {
          var u, _, d = n.getdents[c];
          if (d === ".")
            u = n.node.id, _ = 4;
          else if (d === "..") {
            var f = FS.lookupPath(n.path, { parent: !0 });
            u = f.node.id, _ = 4;
          } else {
            var p = FS.lookupNode(n.node, d);
            u = p.id, _ = FS.isChrdev(p.mode) ? 2 : FS.isDir(p.mode) ? 4 : FS.isLink(p.mode) ? 10 : 8;
          }
          tempI64 = [u >>> 0, (tempDouble = u, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[t + o >>> 2 >>> 0] = tempI64[0], HEAP32[t + o + 4 >>> 2 >>> 0] = tempI64[1], tempI64 = [(c + 1) * a >>> 0, (tempDouble = (c + 1) * a, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[t + o + 8 >>> 2 >>> 0] = tempI64[0], HEAP32[t + o + 12 >>> 2 >>> 0] = tempI64[1], HEAP16[t + o + 16 >>> 1 >>> 0] = 280, HEAP8[t + o + 18 >>> 0] = _, stringToUTF8(d, t + o + 19, 256), o += a, c += 1;
        }
        return FS.llseek(n, c * a, 0), o;
      } catch (m) {
        if (typeof FS > "u" || m.name !== "ErrnoError") throw m;
        return -m.errno;
      }
    }
    ___syscall_getdents64.sig = "iipp";
    function ___syscall_getpeername(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0;
      try {
        var l = getSocketFromFD(e);
        if (!l.daddr)
          return -53;
        var c = writeSockaddr(t, l.family, DNS.lookup_name(l.daddr), l.dport, r);
        return 0;
      } catch (u) {
        if (typeof FS > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    ___syscall_getpeername.sig = "iippiii";
    function ___syscall_getsockname(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0;
      try {
        var l = getSocketFromFD(e), c = writeSockaddr(t, l.family, DNS.lookup_name(l.saddr || "0.0.0.0"), l.sport, r);
        return 0;
      } catch (u) {
        if (typeof FS > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    ___syscall_getsockname.sig = "iippiii";
    function ___syscall_getsockopt(e, t, r, n, a, o) {
      n >>>= 0, a >>>= 0;
      try {
        var l = getSocketFromFD(e);
        return t === 1 && r === 4 ? (HEAP32[n >>> 2 >>> 0] = l.error, HEAP32[a >>> 2 >>> 0] = 4, l.error = null, 0) : -50;
      } catch (c) {
        if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    ___syscall_getsockopt.sig = "iiiippi";
    function ___syscall_ioctl(e, t, r) {
      r >>>= 0, SYSCALLS.varargs = r;
      try {
        var n = SYSCALLS.getStreamFromFD(e);
        switch (t) {
          case 21509:
            return n.tty ? 0 : -59;
          case 21505: {
            if (!n.tty) return -59;
            if (n.tty.ops.ioctl_tcgets) {
              var a = n.tty.ops.ioctl_tcgets(n), o = syscallGetVarargP();
              HEAP32[o >>> 2 >>> 0] = a.c_iflag || 0, HEAP32[o + 4 >>> 2 >>> 0] = a.c_oflag || 0, HEAP32[o + 8 >>> 2 >>> 0] = a.c_cflag || 0, HEAP32[o + 12 >>> 2 >>> 0] = a.c_lflag || 0;
              for (var l = 0; l < 32; l++)
                HEAP8[o + l + 17 >>> 0] = a.c_cc[l] || 0;
              return 0;
            }
            return 0;
          }
          case 21510:
          case 21511:
          case 21512:
            return n.tty ? 0 : -59;
          case 21506:
          case 21507:
          case 21508: {
            if (!n.tty) return -59;
            if (n.tty.ops.ioctl_tcsets) {
              for (var o = syscallGetVarargP(), c = HEAP32[o >>> 2 >>> 0], u = HEAP32[o + 4 >>> 2 >>> 0], _ = HEAP32[o + 8 >>> 2 >>> 0], d = HEAP32[o + 12 >>> 2 >>> 0], f = [], l = 0; l < 32; l++)
                f.push(HEAP8[o + l + 17 >>> 0]);
              return n.tty.ops.ioctl_tcsets(n.tty, t, { c_iflag: c, c_oflag: u, c_cflag: _, c_lflag: d, c_cc: f });
            }
            return 0;
          }
          case 21519: {
            if (!n.tty) return -59;
            var o = syscallGetVarargP();
            return HEAP32[o >>> 2 >>> 0] = 0, 0;
          }
          case 21520:
            return n.tty ? -28 : -59;
          case 21531: {
            var o = syscallGetVarargP();
            return FS.ioctl(n, t, o);
          }
          case 21523: {
            if (!n.tty) return -59;
            if (n.tty.ops.ioctl_tiocgwinsz) {
              var p = n.tty.ops.ioctl_tiocgwinsz(n.tty), o = syscallGetVarargP();
              HEAP16[o >>> 1 >>> 0] = p[0], HEAP16[o + 2 >>> 1 >>> 0] = p[1];
            }
            return 0;
          }
          case 21524:
            return n.tty ? 0 : -59;
          case 21515:
            return n.tty ? 0 : -59;
          default:
            return -28;
        }
      } catch (m) {
        if (typeof FS > "u" || m.name !== "ErrnoError") throw m;
        return -m.errno;
      }
    }
    ___syscall_ioctl.sig = "iiip";
    function ___syscall_listen(e, t) {
      try {
        var r = getSocketFromFD(e);
        return r.sock_ops.listen(r, t), 0;
      } catch (n) {
        if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    ___syscall_listen.sig = "iiiiiii";
    function ___syscall_lstat64(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        return e = SYSCALLS.getStr(e), SYSCALLS.doStat(FS.lstat, e, t);
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_lstat64.sig = "ipp";
    function ___syscall_mkdirat(e, t, r) {
      t >>>= 0;
      try {
        return t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), t = PATH.normalize(t), t[t.length - 1] === "/" && (t = t.substr(0, t.length - 1)), FS.mkdir(t, r, 0), 0;
      } catch (n) {
        if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    ___syscall_mkdirat.sig = "iipi";
    function ___syscall_mknodat(e, t, r, n) {
      t >>>= 0;
      try {
        switch (t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), r & 61440) {
          case 32768:
          case 8192:
          case 24576:
          case 4096:
          case 49152:
            break;
          default:
            return -28;
        }
        return FS.mknod(t, r, n), 0;
      } catch (a) {
        if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    ___syscall_mknodat.sig = "iipii";
    function ___syscall_newfstatat(e, t, r, n) {
      t >>>= 0, r >>>= 0;
      try {
        t = SYSCALLS.getStr(t);
        var a = n & 256, o = n & 4096;
        return n = n & -6401, t = SYSCALLS.calculateAt(e, t, o), SYSCALLS.doStat(a ? FS.lstat : FS.stat, t, r);
      } catch (l) {
        if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
        return -l.errno;
      }
    }
    ___syscall_newfstatat.sig = "iippi";
    function ___syscall_openat(e, t, r, n) {
      t >>>= 0, n >>>= 0, SYSCALLS.varargs = n;
      try {
        t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t);
        var a = n ? syscallGetVarargI() : 0;
        return FS.open(t, r, a).fd;
      } catch (o) {
        if (typeof FS > "u" || o.name !== "ErrnoError") throw o;
        return -o.errno;
      }
    }
    ___syscall_openat.sig = "iipip";
    var PIPEFS = { BUCKET_BUFFER_SIZE: 8192, mount(e) {
      return FS.createNode(null, "/", 16895, 0);
    }, createPipe() {
      var e = { buckets: [], refcnt: 2 };
      e.buckets.push({ buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 });
      var t = PIPEFS.nextname(), r = PIPEFS.nextname(), n = FS.createNode(PIPEFS.root, t, 4096, 0), a = FS.createNode(PIPEFS.root, r, 4096, 0);
      n.pipe = e, a.pipe = e;
      var o = FS.createStream({ path: t, node: n, flags: 0, seekable: !1, stream_ops: PIPEFS.stream_ops });
      n.stream = o;
      var l = FS.createStream({ path: r, node: a, flags: 1, seekable: !1, stream_ops: PIPEFS.stream_ops });
      return a.stream = l, { readable_fd: o.fd, writable_fd: l.fd };
    }, stream_ops: { poll(e) {
      var t = e.node.pipe;
      if ((e.flags & 2097155) === 1)
        return 260;
      if (t.buckets.length > 0)
        for (var r = 0; r < t.buckets.length; r++) {
          var n = t.buckets[r];
          if (n.offset - n.roffset > 0)
            return 65;
        }
      return 0;
    }, ioctl(e, t, r) {
      return 28;
    }, fsync(e) {
      return 28;
    }, read(e, t, r, n, a) {
      for (var o = e.node.pipe, l = 0, c = 0; c < o.buckets.length; c++) {
        var u = o.buckets[c];
        l += u.offset - u.roffset;
      }
      var _ = t.subarray(r, r + n);
      if (n <= 0)
        return 0;
      if (l == 0)
        throw new FS.ErrnoError(6);
      for (var d = Math.min(l, n), f = d, p = 0, c = 0; c < o.buckets.length; c++) {
        var m = o.buckets[c], S = m.offset - m.roffset;
        if (d <= S) {
          var h = m.buffer.subarray(m.roffset, m.offset);
          d < S ? (h = h.subarray(0, d), m.roffset += d) : p++, _.set(h);
          break;
        } else {
          var h = m.buffer.subarray(m.roffset, m.offset);
          _.set(h), _ = _.subarray(h.byteLength), d -= h.byteLength, p++;
        }
      }
      return p && p == o.buckets.length && (p--, o.buckets[p].offset = 0, o.buckets[p].roffset = 0), o.buckets.splice(0, p), f;
    }, write(e, t, r, n, a) {
      var o = e.node.pipe, l = t.subarray(r, r + n), c = l.byteLength;
      if (c <= 0)
        return 0;
      var u = null;
      o.buckets.length == 0 ? (u = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: 0, roffset: 0 }, o.buckets.push(u)) : u = o.buckets[o.buckets.length - 1], assert(u.offset <= PIPEFS.BUCKET_BUFFER_SIZE);
      var _ = PIPEFS.BUCKET_BUFFER_SIZE - u.offset;
      if (_ >= c)
        return u.buffer.set(l, u.offset), u.offset += c, c;
      _ > 0 && (u.buffer.set(l.subarray(0, _), u.offset), u.offset += _, l = l.subarray(_, l.byteLength));
      for (var d = l.byteLength / PIPEFS.BUCKET_BUFFER_SIZE | 0, f = l.byteLength % PIPEFS.BUCKET_BUFFER_SIZE, p = 0; p < d; p++) {
        var m = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: PIPEFS.BUCKET_BUFFER_SIZE, roffset: 0 };
        o.buckets.push(m), m.buffer.set(l.subarray(0, PIPEFS.BUCKET_BUFFER_SIZE)), l = l.subarray(PIPEFS.BUCKET_BUFFER_SIZE, l.byteLength);
      }
      if (f > 0) {
        var m = { buffer: new Uint8Array(PIPEFS.BUCKET_BUFFER_SIZE), offset: l.byteLength, roffset: 0 };
        o.buckets.push(m), m.buffer.set(l);
      }
      return c;
    }, close(e) {
      var t = e.node.pipe;
      t.refcnt--, t.refcnt === 0 && (t.buckets = null);
    } }, nextname() {
      return PIPEFS.nextname.current || (PIPEFS.nextname.current = 0), "pipe[" + PIPEFS.nextname.current++ + "]";
    } };
    function ___syscall_pipe(e) {
      e >>>= 0;
      try {
        if (e == 0)
          throw new FS.ErrnoError(21);
        var t = PIPEFS.createPipe();
        return HEAP32[e >>> 2 >>> 0] = t.readable_fd, HEAP32[e + 4 >>> 2 >>> 0] = t.writable_fd, 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_pipe.sig = "ip";
    function ___syscall_poll(e, t, r) {
      e >>>= 0;
      try {
        for (var n = 0, a = 0; a < t; a++) {
          var o = e + 8 * a, l = HEAP32[o >>> 2 >>> 0], c = HEAP16[o + 4 >>> 1 >>> 0], u = 32, _ = FS.getStream(l);
          _ && (u = SYSCALLS.DEFAULT_POLLMASK, _.stream_ops.poll && (u = _.stream_ops.poll(_, -1))), u &= c | 8 | 16, u && n++, HEAP16[o + 6 >>> 1 >>> 0] = u;
        }
        return n;
      } catch (d) {
        if (typeof FS > "u" || d.name !== "ErrnoError") throw d;
        return -d.errno;
      }
    }
    ___syscall_poll.sig = "ipii";
    function ___syscall_readlinkat(e, t, r, n) {
      t >>>= 0, r >>>= 0, n >>>= 0;
      try {
        if (t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), n <= 0) return -28;
        var a = FS.readlink(t), o = Math.min(n, lengthBytesUTF8(a)), l = HEAP8[r + o >>> 0];
        return stringToUTF8(a, r, n + 1), HEAP8[r + o >>> 0] = l, o;
      } catch (c) {
        if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
        return -c.errno;
      }
    }
    ___syscall_readlinkat.sig = "iippp";
    function ___syscall_recvfrom(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0, a >>>= 0, o >>>= 0;
      try {
        var l = getSocketFromFD(e), c = l.sock_ops.recvmsg(l, r);
        if (!c) return 0;
        if (a)
          var u = writeSockaddr(a, l.family, DNS.lookup_name(c.addr), c.port, o);
        return HEAPU8.set(c.buffer, t >>> 0), c.buffer.byteLength;
      } catch (_) {
        if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
        return -_.errno;
      }
    }
    ___syscall_recvfrom.sig = "iippipp";
    function ___syscall_recvmsg(e, t, r, n, a, o) {
      t >>>= 0;
      try {
        for (var l = getSocketFromFD(e), c = HEAPU32[t + 8 >>> 2 >>> 0], u = HEAP32[t + 12 >>> 2 >>> 0], _ = 0, d = 0; d < u; d++)
          _ += HEAP32[c + (8 * d + 4) >>> 2 >>> 0];
        var f = l.sock_ops.recvmsg(l, _);
        if (!f) return 0;
        var p = HEAPU32[t >>> 2 >>> 0];
        if (p)
          var m = writeSockaddr(p, l.family, DNS.lookup_name(f.addr), f.port);
        for (var S = 0, h = f.buffer.byteLength, d = 0; h > 0 && d < u; d++) {
          var g = HEAPU32[c + (8 * d + 0) >>> 2 >>> 0], y = HEAP32[c + (8 * d + 4) >>> 2 >>> 0];
          if (y) {
            var b = Math.min(y, h), C = f.buffer.subarray(S, S + b);
            HEAPU8.set(C, g + S >>> 0), S += b, h -= b;
          }
        }
        return S;
      } catch (x) {
        if (typeof FS > "u" || x.name !== "ErrnoError") throw x;
        return -x.errno;
      }
    }
    ___syscall_recvmsg.sig = "iipiiii";
    function ___syscall_renameat(e, t, r, n) {
      t >>>= 0, n >>>= 0;
      try {
        return t = SYSCALLS.getStr(t), n = SYSCALLS.getStr(n), t = SYSCALLS.calculateAt(e, t), n = SYSCALLS.calculateAt(r, n), FS.rename(t, n), 0;
      } catch (a) {
        if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    ___syscall_renameat.sig = "iipip";
    function ___syscall_rmdir(e) {
      e >>>= 0;
      try {
        return e = SYSCALLS.getStr(e), FS.rmdir(e), 0;
      } catch (t) {
        if (typeof FS > "u" || t.name !== "ErrnoError") throw t;
        return -t.errno;
      }
    }
    ___syscall_rmdir.sig = "ip";
    function ___syscall_sendmsg(e, t, r, n, a, o) {
      t >>>= 0;
      try {
        var l = getSocketFromFD(e), c = HEAPU32[t + 8 >>> 2 >>> 0], u = HEAP32[t + 12 >>> 2 >>> 0], _, d, f = HEAPU32[t >>> 2 >>> 0], p = HEAP32[t + 4 >>> 2 >>> 0];
        if (f) {
          var m = readSockaddr(f, p);
          if (m.errno) return -m.errno;
          d = m.port, _ = DNS.lookup_addr(m.addr) || m.addr;
        }
        for (var S = 0, h = 0; h < u; h++)
          S += HEAP32[c + (8 * h + 4) >>> 2 >>> 0];
        for (var g = new Uint8Array(S), y = 0, h = 0; h < u; h++)
          for (var b = HEAPU32[c + (8 * h + 0) >>> 2 >>> 0], C = HEAP32[c + (8 * h + 4) >>> 2 >>> 0], x = 0; x < C; x++)
            g[y++] = HEAP8[b + x >>> 0];
        return l.sock_ops.sendmsg(l, g, 0, S, _, d);
      } catch (E) {
        if (typeof FS > "u" || E.name !== "ErrnoError") throw E;
        return -E.errno;
      }
    }
    ___syscall_sendmsg.sig = "iipippi";
    function ___syscall_sendto(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0, a >>>= 0, o >>>= 0;
      try {
        var l = getSocketFromFD(e), c = getSocketAddress(a, o, !0);
        return c ? l.sock_ops.sendmsg(l, HEAP8, t, r, c.addr, c.port) : FS.write(l.stream, HEAP8, t, r);
      } catch (u) {
        if (typeof FS > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    ___syscall_sendto.sig = "iippipp";
    function ___syscall_socket(e, t, r) {
      try {
        var n = SOCKFS.createSocket(e, t, r);
        return n.stream.fd;
      } catch (a) {
        if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    ___syscall_socket.sig = "iiiiiii";
    function ___syscall_stat64(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        return e = SYSCALLS.getStr(e), SYSCALLS.doStat(FS.stat, e, t);
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_stat64.sig = "ipp";
    function ___syscall_symlink(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        return e = SYSCALLS.getStr(e), t = SYSCALLS.getStr(t), FS.symlink(e, t), 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    ___syscall_symlink.sig = "ipp";
    function ___syscall_symlinkat(e, t, r) {
      e >>>= 0, r >>>= 0;
      try {
        return r = SYSCALLS.calculateAt(t, r), FS.symlink(e, r), 0;
      } catch (n) {
        if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    ___syscall_symlinkat.sig = "ipip";
    function ___syscall_truncate64(e, t, r) {
      e >>>= 0;
      var n = convertI32PairToI53Checked(t, r);
      try {
        return isNaN(n) ? 61 : (e = SYSCALLS.getStr(e), FS.truncate(e, n), 0);
      } catch (a) {
        if (typeof FS > "u" || a.name !== "ErrnoError") throw a;
        return -a.errno;
      }
    }
    ___syscall_truncate64.sig = "ipii";
    function ___syscall_unlinkat(e, t, r) {
      t >>>= 0;
      try {
        return t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t), r === 0 ? FS.unlink(t) : r === 512 ? FS.rmdir(t) : abort("Invalid flags passed to unlinkat"), 0;
      } catch (n) {
        if (typeof FS > "u" || n.name !== "ErrnoError") throw n;
        return -n.errno;
      }
    }
    ___syscall_unlinkat.sig = "iipi";
    var readI53FromI64 = (e) => HEAPU32[e >>> 2 >>> 0] + HEAP32[e + 4 >>> 2 >>> 0] * 4294967296;
    function ___syscall_utimensat(e, t, r, n) {
      t >>>= 0, r >>>= 0;
      try {
        t = SYSCALLS.getStr(t), t = SYSCALLS.calculateAt(e, t, !0);
        var a = Date.now(), o, l;
        if (!r)
          o = a, l = a;
        else {
          var c = readI53FromI64(r), u = HEAP32[r + 8 >>> 2 >>> 0];
          u == 1073741823 ? o = a : u == 1073741822 ? o = -1 : o = c * 1e3 + u / (1e3 * 1e3), r += 16, c = readI53FromI64(r), u = HEAP32[r + 8 >>> 2 >>> 0], u == 1073741823 ? l = a : u == 1073741822 ? l = -1 : l = c * 1e3 + u / (1e3 * 1e3);
        }
        return (l != -1 || o != -1) && FS.utime(t, o, l), 0;
      } catch (_) {
        if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
        return -_.errno;
      }
    }
    ___syscall_utimensat.sig = "iippi";
    var ___table_base = new WebAssembly.Global({ value: "i32", mutable: !1 }, 1);
    function ___xmlOutputBufferCreateFilename(...e) {
      return asyncifyStubs.__xmlOutputBufferCreateFilename(...e);
    }
    ___xmlOutputBufferCreateFilename.stub = !0, asyncifyStubs.__xmlOutputBufferCreateFilename = void 0;
    function ___xmlParserInputBufferCreateFilename(...e) {
      return asyncifyStubs.__xmlParserInputBufferCreateFilename(...e);
    }
    ___xmlParserInputBufferCreateFilename.stub = !0, asyncifyStubs.__xmlParserInputBufferCreateFilename = void 0;
    function ___xmlRegisterCallbacks(...e) {
      return asyncifyStubs.__xmlRegisterCallbacks(...e);
    }
    ___xmlRegisterCallbacks.stub = !0, asyncifyStubs.__xmlRegisterCallbacks = void 0;
    var __abort_js = () => {
      abort("");
    };
    __abort_js.sig = "v";
    var ENV = {}, stackAlloc = (e) => __emscripten_stack_alloc(e), stringToUTF8OnStack = (e) => {
      var t = lengthBytesUTF8(e) + 1, r = stackAlloc(t);
      return stringToUTF8(e, r, t), r;
    }, dlSetError = (e) => {
      var t = stackSave(), r = stringToUTF8OnStack(e);
      ___dl_seterr(r, 0), stackRestore(t);
    }, dlopenInternal = (e, t) => {
      var r = UTF8ToString(e + 36), n = HEAP32[e + 4 >>> 2 >>> 0];
      r = PATH.normalize(r);
      var a = !!(n & 256), o = a ? null : {}, l = { global: a, nodelete: !!(n & 4096), loadAsync: t.loadAsync };
      if (t.loadAsync)
        return loadDynamicLibrary(r, l, o, e);
      try {
        return loadDynamicLibrary(r, l, o, e);
      } catch (c) {
        return dlSetError(`Could not load dynamic lib: ${r}
${c}`), 0;
      }
    }, __dlopen_js = function(e) {
      return e >>>= 0, Asyncify.handleSleep((t) => {
        dlopenInternal(e, { loadAsync: !0 }).then(t).catch(() => t(0));
      });
    };
    __dlopen_js.sig = "pp", __dlopen_js.isAsync = !0;
    function __dlsym_js(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0, t = UTF8ToString(t);
      var n, a, o = LDSO.loadedLibsByHandle[e];
      if (!o.exports.hasOwnProperty(t) || o.exports[t].stub)
        return dlSetError(`Tried to lookup unknown symbol "${t}" in dynamic lib: ${o.name}`), 0;
      a = Object.keys(o.exports).indexOf(t);
      var l = "orig$" + t;
      if (n = o.exports[l], n ? a = Object.keys(o.exports).indexOf(l) : n = o.exports[t], typeof n == "function") {
        "orig" in n && (n = n.orig);
        var c = getFunctionAddress(n);
        c ? n = c : (n = addFunction(n, n.sig), HEAPU32[r >>> 2 >>> 0] = a);
      }
      return n;
    }
    __dlsym_js.sig = "pppp";
    var handleException = (e) => {
      if (e instanceof ExitStatus || e == "unwind")
        return EXITSTATUS;
      quit_(1, e);
    }, runtimeKeepaliveCounter = 0, keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0, _proc_exit = (e) => {
      var t;
      EXITSTATUS = e, keepRuntimeAlive() || ((t = Module.onExit) == null || t.call(Module, e), ABORT = !0), quit_(e, new ExitStatus(e));
    };
    _proc_exit.sig = "vi";
    var exitJS = (e, t) => {
      EXITSTATUS = e, keepRuntimeAlive() || exitRuntime(), _proc_exit(e);
    }, _exit = exitJS;
    _exit.sig = "vi";
    var maybeExit = () => {
      if (!runtimeExited && !keepRuntimeAlive())
        try {
          _exit(EXITSTATUS);
        } catch (e) {
          handleException(e);
        }
    }, callUserCallback = (e) => {
      if (!(runtimeExited || ABORT))
        try {
          e(), maybeExit();
        } catch (t) {
          handleException(t);
        }
    }, runtimeKeepalivePush = () => {
      runtimeKeepaliveCounter += 1;
    };
    runtimeKeepalivePush.sig = "v";
    var runtimeKeepalivePop = () => {
      runtimeKeepaliveCounter -= 1;
    };
    runtimeKeepalivePop.sig = "v";
    function __emscripten_dlopen_js(e, t, r, n) {
      e >>>= 0, n >>>= 0;
      function a(c) {
        var u = UTF8ToString(e + 36);
        dlSetError(`'Could not load dynamic lib: ${u}
${c}`), runtimeKeepalivePop(), callUserCallback(() => /* @__PURE__ */ ((_, d) => {
        })(e, n));
      }
      function o() {
        runtimeKeepalivePop(), callUserCallback(() => /* @__PURE__ */ ((c, u) => {
        })(e, n));
      }
      runtimeKeepalivePush();
      var l = dlopenInternal(e, { loadAsync: !0 });
      l ? l.then(o, a) : a();
    }
    __emscripten_dlopen_js.sig = "vpppp";
    var nowIsMonotonic = 1, __emscripten_get_now_is_monotonic = () => nowIsMonotonic;
    __emscripten_get_now_is_monotonic.sig = "i";
    var getExecutableName = () => thisProgram || "./this.program";
    function __emscripten_get_progname(e, t) {
      e >>>= 0, stringToUTF8(getExecutableName(), e, t);
    }
    __emscripten_get_progname.sig = "vpi";
    function __emscripten_lookup_name(e) {
      e >>>= 0;
      var t = UTF8ToString(e);
      return inetPton4(DNS.lookup_name(t));
    }
    __emscripten_lookup_name.sig = "ip";
    function __emscripten_memcpy_js(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, HEAPU8.copyWithin(e >>> 0, t >>> 0, t + r >>> 0);
    }
    __emscripten_memcpy_js.sig = "vppp";
    var __emscripten_runtime_keepalive_clear = () => {
      noExitRuntime = !1, runtimeKeepaliveCounter = 0;
    };
    __emscripten_runtime_keepalive_clear.sig = "v";
    function __emscripten_system(e) {
      return e >>>= 0, e ? -52 : 0;
    }
    __emscripten_system.sig = "ip";
    var __emscripten_throw_longjmp = () => {
      throw 1 / 0;
    };
    __emscripten_throw_longjmp.sig = "v";
    function __gmtime_js(e, t, r) {
      var n = convertI32PairToI53Checked(e, t);
      r >>>= 0;
      var a = new Date(n * 1e3);
      HEAP32[r >>> 2 >>> 0] = a.getUTCSeconds(), HEAP32[r + 4 >>> 2 >>> 0] = a.getUTCMinutes(), HEAP32[r + 8 >>> 2 >>> 0] = a.getUTCHours(), HEAP32[r + 12 >>> 2 >>> 0] = a.getUTCDate(), HEAP32[r + 16 >>> 2 >>> 0] = a.getUTCMonth(), HEAP32[r + 20 >>> 2 >>> 0] = a.getUTCFullYear() - 1900, HEAP32[r + 24 >>> 2 >>> 0] = a.getUTCDay();
      var o = Date.UTC(a.getUTCFullYear(), 0, 1, 0, 0, 0, 0), l = (a.getTime() - o) / (1e3 * 60 * 60 * 24) | 0;
      HEAP32[r + 28 >>> 2 >>> 0] = l;
    }
    __gmtime_js.sig = "viip";
    var isLeapYear = (e) => e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0), MONTH_DAYS_LEAP_CUMULATIVE = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], MONTH_DAYS_REGULAR_CUMULATIVE = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], ydayFromDate = (e) => {
      var t = isLeapYear(e.getFullYear()), r = t ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE, n = r[e.getMonth()] + e.getDate() - 1;
      return n;
    };
    function __localtime_js(e, t, r) {
      var n = convertI32PairToI53Checked(e, t);
      r >>>= 0;
      var a = new Date(n * 1e3);
      HEAP32[r >>> 2 >>> 0] = a.getSeconds(), HEAP32[r + 4 >>> 2 >>> 0] = a.getMinutes(), HEAP32[r + 8 >>> 2 >>> 0] = a.getHours(), HEAP32[r + 12 >>> 2 >>> 0] = a.getDate(), HEAP32[r + 16 >>> 2 >>> 0] = a.getMonth(), HEAP32[r + 20 >>> 2 >>> 0] = a.getFullYear() - 1900, HEAP32[r + 24 >>> 2 >>> 0] = a.getDay();
      var o = ydayFromDate(a) | 0;
      HEAP32[r + 28 >>> 2 >>> 0] = o, HEAP32[r + 36 >>> 2 >>> 0] = -(a.getTimezoneOffset() * 60);
      var l = new Date(a.getFullYear(), 0, 1), c = new Date(a.getFullYear(), 6, 1).getTimezoneOffset(), u = l.getTimezoneOffset(), _ = (c != u && a.getTimezoneOffset() == Math.min(u, c)) | 0;
      HEAP32[r + 32 >>> 2 >>> 0] = _;
    }
    __localtime_js.sig = "viip";
    var __mktime_js = function(e) {
      e >>>= 0;
      var t = (() => {
        var r = new Date(HEAP32[e + 20 >>> 2 >>> 0] + 1900, HEAP32[e + 16 >>> 2 >>> 0], HEAP32[e + 12 >>> 2 >>> 0], HEAP32[e + 8 >>> 2 >>> 0], HEAP32[e + 4 >>> 2 >>> 0], HEAP32[e >>> 2 >>> 0], 0), n = HEAP32[e + 32 >>> 2 >>> 0], a = r.getTimezoneOffset(), o = new Date(r.getFullYear(), 0, 1), l = new Date(r.getFullYear(), 6, 1).getTimezoneOffset(), c = o.getTimezoneOffset(), u = Math.min(c, l);
        if (n < 0)
          HEAP32[e + 32 >>> 2 >>> 0] = +(l != c && u == a);
        else if (n > 0 != (u == a)) {
          var _ = Math.max(c, l), d = n > 0 ? u : _;
          r.setTime(r.getTime() + (d - a) * 6e4);
        }
        HEAP32[e + 24 >>> 2 >>> 0] = r.getDay();
        var f = ydayFromDate(r) | 0;
        HEAP32[e + 28 >>> 2 >>> 0] = f, HEAP32[e >>> 2 >>> 0] = r.getSeconds(), HEAP32[e + 4 >>> 2 >>> 0] = r.getMinutes(), HEAP32[e + 8 >>> 2 >>> 0] = r.getHours(), HEAP32[e + 12 >>> 2 >>> 0] = r.getDate(), HEAP32[e + 16 >>> 2 >>> 0] = r.getMonth(), HEAP32[e + 20 >>> 2 >>> 0] = r.getYear();
        var p = r.getTime();
        return isNaN(p) ? -1 : p / 1e3;
      })();
      return setTempRet0((tempDouble = t, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), t >>> 0;
    };
    __mktime_js.sig = "ip";
    function __mmap_js(e, t, r, n, a, o, l, c) {
      e >>>= 0;
      var u = convertI32PairToI53Checked(a, o);
      l >>>= 0, c >>>= 0;
      try {
        if (isNaN(u)) return 61;
        var _ = SYSCALLS.getStreamFromFD(n), d = FS.mmap(_, e, u, t, r), f = d.ptr;
        return HEAP32[l >>> 2 >>> 0] = d.allocated, HEAPU32[c >>> 2 >>> 0] = f, 0;
      } catch (p) {
        if (typeof FS > "u" || p.name !== "ErrnoError") throw p;
        return -p.errno;
      }
    }
    __mmap_js.sig = "ipiiiiipp";
    function __msync_js(e, t, r, n, a, o, l) {
      e >>>= 0, t >>>= 0;
      var c = convertI32PairToI53Checked(o, l);
      try {
        return isNaN(c) ? 61 : (SYSCALLS.doMsync(e, SYSCALLS.getStreamFromFD(a), t, n, c), 0);
      } catch (u) {
        if (typeof FS > "u" || u.name !== "ErrnoError") throw u;
        return -u.errno;
      }
    }
    __msync_js.sig = "ippiiiii";
    function __munmap_js(e, t, r, n, a, o, l) {
      e >>>= 0, t >>>= 0;
      var c = convertI32PairToI53Checked(o, l);
      try {
        var u = SYSCALLS.getStreamFromFD(a);
        r & 2 && SYSCALLS.doMsync(e, u, t, n, c);
      } catch (_) {
        if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
        return -_.errno;
      }
    }
    __munmap_js.sig = "ippiiiii";
    var timers = {}, _emscripten_get_now = () => performance.now();
    _emscripten_get_now.sig = "d";
    var __setitimer_js = (e, t) => {
      if (timers[e] && (clearTimeout(timers[e].id), delete timers[e]), !t) return 0;
      var r = setTimeout(() => {
        delete timers[e], callUserCallback(() => __emscripten_timeout(e, _emscripten_get_now()));
      }, t);
      return timers[e] = { id: r, timeout_ms: t }, 0;
    };
    __setitimer_js.sig = "iid";
    var __timegm_js = function(e) {
      e >>>= 0;
      var t = (() => {
        var r = Date.UTC(HEAP32[e + 20 >>> 2 >>> 0] + 1900, HEAP32[e + 16 >>> 2 >>> 0], HEAP32[e + 12 >>> 2 >>> 0], HEAP32[e + 8 >>> 2 >>> 0], HEAP32[e + 4 >>> 2 >>> 0], HEAP32[e >>> 2 >>> 0], 0), n = new Date(r);
        HEAP32[e + 24 >>> 2 >>> 0] = n.getUTCDay();
        var a = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0), o = (n.getTime() - a) / (1e3 * 60 * 60 * 24) | 0;
        return HEAP32[e + 28 >>> 2 >>> 0] = o, n.getTime() / 1e3;
      })();
      return setTempRet0((tempDouble = t, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)), t >>> 0;
    };
    __timegm_js.sig = "ip";
    var __tzset_js = function(e, t, r, n) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0;
      var a = (/* @__PURE__ */ new Date()).getFullYear(), o = new Date(a, 0, 1), l = new Date(a, 6, 1), c = o.getTimezoneOffset(), u = l.getTimezoneOffset(), _ = Math.max(c, u);
      HEAPU32[e >>> 2 >>> 0] = _ * 60, HEAP32[t >>> 2 >>> 0] = +(c != u);
      var d = (m) => {
        var S = m >= 0 ? "-" : "+", h = Math.abs(m), g = String(Math.floor(h / 60)).padStart(2, "0"), y = String(h % 60).padStart(2, "0");
        return `UTC${S}${g}${y}`;
      }, f = d(c), p = d(u);
      u < c ? (stringToUTF8(f, r, 17), stringToUTF8(p, n, 17)) : (stringToUTF8(f, n, 17), stringToUTF8(p, r, 17));
    };
    __tzset_js.sig = "vpppp";
    function _docbDefaultSAXHandler(...e) {
      return asyncifyStubs.docbDefaultSAXHandler(...e);
    }
    _docbDefaultSAXHandler.stub = !0, asyncifyStubs.docbDefaultSAXHandler = void 0;
    var readEmAsmArgsArray = [], readEmAsmArgs = (e, t) => {
      readEmAsmArgsArray.length = 0;
      for (var r; r = HEAPU8[e++ >>> 0]; ) {
        var n = r != 105;
        n &= r != 112, t += n && t % 8 ? 4 : 0, readEmAsmArgsArray.push(r == 112 ? HEAPU32[t >>> 2 >>> 0] : r == 105 ? HEAP32[t >>> 2 >>> 0] : HEAPF64[t >>> 3 >>> 0]), t += n ? 8 : 4;
      }
      return readEmAsmArgsArray;
    }, runEmAsmFunction = (e, t, r) => {
      var n = readEmAsmArgs(t, r);
      return ASM_CONSTS[e](...n);
    };
    function _emscripten_asm_const_int(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, runEmAsmFunction(e, t, r);
    }
    _emscripten_asm_const_int.sig = "ippp";
    function _emscripten_asm_const_ptr(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, runEmAsmFunction(e, t, r);
    }
    _emscripten_asm_const_ptr.sig = "pppp";
    function _emscripten_console_error(e) {
      e >>>= 0, console.error(UTF8ToString(e));
    }
    _emscripten_console_error.sig = "vp";
    function _emscripten_console_log(e) {
      e >>>= 0, console.log(UTF8ToString(e));
    }
    _emscripten_console_log.sig = "vp";
    function _emscripten_console_trace(e) {
      e >>>= 0, console.trace(UTF8ToString(e));
    }
    _emscripten_console_trace.sig = "vp";
    function _emscripten_console_warn(e) {
      e >>>= 0, console.warn(UTF8ToString(e));
    }
    _emscripten_console_warn.sig = "vp";
    var _emscripten_date_now = () => Date.now();
    _emscripten_date_now.sig = "d";
    function _emscripten_err(e) {
      return e >>>= 0, err(UTF8ToString(e));
    }
    _emscripten_err.sig = "vp";
    var getHeapMax = () => 4294901760;
    function _emscripten_get_heap_max() {
      return getHeapMax();
    }
    _emscripten_get_heap_max.sig = "p";
    var _emscripten_get_now_res = () => 1e3;
    _emscripten_get_now_res.sig = "d";
    function _emscripten_out(e) {
      return e >>>= 0, out(UTF8ToString(e));
    }
    _emscripten_out.sig = "vp";
    class HandleAllocator {
      constructor() {
        this.allocated = [void 0], this.freelist = [];
      }
      get(t) {
        return this.allocated[t];
      }
      has(t) {
        return this.allocated[t] !== void 0;
      }
      allocate(t) {
        var r = this.freelist.pop() || this.allocated.length;
        return this.allocated[r] = t, r;
      }
      free(t) {
        this.allocated[t] = void 0, this.freelist.push(t);
      }
    }
    var promiseMap = new HandleAllocator(), makePromise = () => {
      var e = {};
      return e.promise = new Promise((t, r) => {
        e.reject = r, e.resolve = t;
      }), e.id = promiseMap.allocate(e), e;
    };
    function _emscripten_promise_create() {
      return makePromise().id;
    }
    _emscripten_promise_create.sig = "p";
    function _emscripten_promise_destroy(e) {
      e >>>= 0, promiseMap.free(e);
    }
    _emscripten_promise_destroy.sig = "vp";
    var getPromise = (e) => promiseMap.get(e).promise;
    function _emscripten_promise_resolve(e, t, r) {
      e >>>= 0, r >>>= 0;
      var n = promiseMap.get(e);
      switch (t) {
        case 0:
          n.resolve(r);
          return;
        case 1:
          n.resolve(getPromise(r));
          return;
        case 2:
          n.resolve(getPromise(r)), _emscripten_promise_destroy(r);
          return;
        case 3:
          n.reject(r);
          return;
      }
    }
    _emscripten_promise_resolve.sig = "vpip";
    var growMemory = (e) => {
      var t = wasmMemory.buffer, r = (e - t.byteLength + 65535) / 65536;
      try {
        return wasmMemory.grow(r), updateMemoryViews(), 1;
      } catch {
      }
    };
    function _emscripten_resize_heap(e) {
      e >>>= 0;
      var t = HEAPU8.length, r = getHeapMax();
      if (e > r)
        return !1;
      for (var n = 1; n <= 4; n *= 2) {
        var a = t * (1 + 0.2 / n);
        a = Math.min(a, e + 100663296);
        var o = Math.min(r, alignMemory(Math.max(e, a), 65536)), l = growMemory(o);
        if (l)
          return !0;
      }
      return !1;
    }
    _emscripten_resize_heap.sig = "ip";
    var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        var e = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", t = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: e, _: getExecutableName() };
        for (var r in ENV)
          ENV[r] === void 0 ? delete t[r] : t[r] = ENV[r];
        var n = [];
        for (var r in t)
          n.push(`${r}=${t[r]}`);
        getEnvStrings.strings = n;
      }
      return getEnvStrings.strings;
    }, stringToAscii = (e, t) => {
      for (var r = 0; r < e.length; ++r)
        HEAP8[t++ >>> 0] = e.charCodeAt(r);
      HEAP8[t >>> 0] = 0;
    }, _environ_get = function(e, t) {
      e >>>= 0, t >>>= 0;
      var r = 0;
      return getEnvStrings().forEach((n, a) => {
        var o = t + r;
        HEAPU32[e + a * 4 >>> 2 >>> 0] = o, stringToAscii(n, o), r += n.length + 1;
      }), 0;
    };
    _environ_get.sig = "ipp";
    var _environ_sizes_get = function(e, t) {
      e >>>= 0, t >>>= 0;
      var r = getEnvStrings();
      HEAPU32[e >>> 2 >>> 0] = r.length;
      var n = 0;
      return r.forEach((a) => n += a.length + 1), HEAPU32[t >>> 2 >>> 0] = n, 0;
    };
    _environ_sizes_get.sig = "ipp";
    function _fd_close(e) {
      try {
        var t = SYSCALLS.getStreamFromFD(e);
        return FS.close(t), 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    }
    _fd_close.sig = "ii";
    function _fd_fdstat_get(e, t) {
      t >>>= 0;
      try {
        var r = 0, n = 0, a = 0, o = SYSCALLS.getStreamFromFD(e), l = o.tty ? 2 : FS.isDir(o.mode) ? 3 : FS.isLink(o.mode) ? 7 : 4;
        return HEAP8[t >>> 0] = l, HEAP16[t + 2 >>> 1 >>> 0] = a, tempI64 = [r >>> 0, (tempDouble = r, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[t + 8 >>> 2 >>> 0] = tempI64[0], HEAP32[t + 12 >>> 2 >>> 0] = tempI64[1], tempI64 = [n >>> 0, (tempDouble = n, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[t + 16 >>> 2 >>> 0] = tempI64[0], HEAP32[t + 20 >>> 2 >>> 0] = tempI64[1], 0;
      } catch (c) {
        if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
        return c.errno;
      }
    }
    _fd_fdstat_get.sig = "iip";
    var doReadv = (e, t, r, n) => {
      for (var a = 0, o = 0; o < r; o++) {
        var l = HEAPU32[t >>> 2 >>> 0], c = HEAPU32[t + 4 >>> 2 >>> 0];
        t += 8;
        var u = FS.read(e, HEAP8, l, c, n);
        if (u < 0) return -1;
        if (a += u, u < c) break;
        typeof n < "u" && (n += u);
      }
      return a;
    };
    function _fd_pread(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0;
      var l = convertI32PairToI53Checked(n, a);
      o >>>= 0;
      try {
        if (isNaN(l)) return 61;
        var c = SYSCALLS.getStreamFromFD(e), u = doReadv(c, t, r, l);
        return HEAPU32[o >>> 2 >>> 0] = u, 0;
      } catch (_) {
        if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
        return _.errno;
      }
    }
    _fd_pread.sig = "iippiip";
    var doWritev = (e, t, r, n) => {
      for (var a = 0, o = 0; o < r; o++) {
        var l = HEAPU32[t >>> 2 >>> 0], c = HEAPU32[t + 4 >>> 2 >>> 0];
        t += 8;
        var u = FS.write(e, HEAP8, l, c, n);
        if (u < 0) return -1;
        if (a += u, u < c)
          break;
        typeof n < "u" && (n += u);
      }
      return a;
    };
    function _fd_pwrite(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0;
      var l = convertI32PairToI53Checked(n, a);
      o >>>= 0;
      try {
        if (isNaN(l)) return 61;
        var c = SYSCALLS.getStreamFromFD(e), u = doWritev(c, t, r, l);
        return HEAPU32[o >>> 2 >>> 0] = u, 0;
      } catch (_) {
        if (typeof FS > "u" || _.name !== "ErrnoError") throw _;
        return _.errno;
      }
    }
    _fd_pwrite.sig = "iippiip";
    function _fd_read(e, t, r, n) {
      t >>>= 0, r >>>= 0, n >>>= 0;
      try {
        var a = SYSCALLS.getStreamFromFD(e), o = doReadv(a, t, r);
        return HEAPU32[n >>> 2 >>> 0] = o, 0;
      } catch (l) {
        if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    _fd_read.sig = "iippp";
    function _fd_seek(e, t, r, n, a) {
      var o = convertI32PairToI53Checked(t, r);
      a >>>= 0;
      try {
        if (isNaN(o)) return 61;
        var l = SYSCALLS.getStreamFromFD(e);
        return FS.llseek(l, o, n), tempI64 = [l.position >>> 0, (tempDouble = l.position, +Math.abs(tempDouble) >= 1 ? tempDouble > 0 ? +Math.floor(tempDouble / 4294967296) >>> 0 : ~~+Math.ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)], HEAP32[a >>> 2 >>> 0] = tempI64[0], HEAP32[a + 4 >>> 2 >>> 0] = tempI64[1], l.getdents && o === 0 && n === 0 && (l.getdents = null), 0;
      } catch (c) {
        if (typeof FS > "u" || c.name !== "ErrnoError") throw c;
        return c.errno;
      }
    }
    _fd_seek.sig = "iiiiip";
    var _fd_sync = function(e) {
      try {
        var t = SYSCALLS.getStreamFromFD(e);
        return Asyncify.handleSleep((r) => {
          var n = t.node.mount;
          if (!n.type.syncfs) {
            r(0);
            return;
          }
          n.type.syncfs(n, !1, (a) => {
            if (a) {
              r(29);
              return;
            }
            r(0);
          });
        });
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    };
    _fd_sync.sig = "ii", _fd_sync.isAsync = !0;
    function _fd_write(e, t, r, n) {
      t >>>= 0, r >>>= 0, n >>>= 0;
      try {
        var a = SYSCALLS.getStreamFromFD(e), o = doWritev(a, t, r);
        return HEAPU32[n >>> 2 >>> 0] = o, 0;
      } catch (l) {
        if (typeof FS > "u" || l.name !== "ErrnoError") throw l;
        return l.errno;
      }
    }
    _fd_write.sig = "iippp";
    function _getaddrinfo(e, t, r, n) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0;
      var a = 0, o = 0, l = 0, c = 0, u = 0, _ = 0, d;
      function f(p, m, S, h, g, y) {
        var b, C, x, E;
        return C = p === 10 ? 28 : 16, g = p === 10 ? inetNtop6(g) : inetNtop4(g), b = _malloc(C), E = writeSockaddr(b, p, g, y), assert(!E), x = _malloc(32), HEAP32[x + 4 >>> 2 >>> 0] = p, HEAP32[x + 8 >>> 2 >>> 0] = m, HEAP32[x + 12 >>> 2 >>> 0] = S, HEAPU32[x + 24 >>> 2 >>> 0] = h, HEAPU32[x + 20 >>> 2 >>> 0] = b, p === 10 ? HEAP32[x + 16 >>> 2 >>> 0] = 28 : HEAP32[x + 16 >>> 2 >>> 0] = 16, HEAP32[x + 28 >>> 2 >>> 0] = 0, x;
      }
      if (r && (l = HEAP32[r >>> 2 >>> 0], c = HEAP32[r + 4 >>> 2 >>> 0], u = HEAP32[r + 8 >>> 2 >>> 0], _ = HEAP32[r + 12 >>> 2 >>> 0]), u && !_ && (_ = u === 2 ? 17 : 6), !u && _ && (u = _ === 17 ? 2 : 1), _ === 0 && (_ = 6), u === 0 && (u = 1), !e && !t)
        return -2;
      if (l & -1088 || r !== 0 && HEAP32[r >>> 2 >>> 0] & 2 && !e)
        return -1;
      if (l & 32)
        return -2;
      if (u !== 0 && u !== 1 && u !== 2)
        return -7;
      if (c !== 0 && c !== 2 && c !== 10)
        return -6;
      if (t && (t = UTF8ToString(t), o = parseInt(t, 10), isNaN(o)))
        return l & 1024 ? -2 : -8;
      if (!e)
        return c === 0 && (c = 2), l & 1 || (c === 2 ? a = _htonl(2130706433) : a = [0, 0, 0, 1]), d = f(c, u, _, null, a, o), HEAPU32[n >>> 2 >>> 0] = d, 0;
      if (e = UTF8ToString(e), a = inetPton4(e), a !== null)
        if (c === 0 || c === 2)
          c = 2;
        else if (c === 10 && l & 8)
          a = [0, 0, _htonl(65535), a], c = 10;
        else
          return -2;
      else if (a = inetPton6(e), a !== null)
        if (c === 0 || c === 10)
          c = 10;
        else
          return -2;
      return a != null ? (d = f(c, u, _, e, a, o), HEAPU32[n >>> 2 >>> 0] = d, 0) : l & 4 ? -2 : (e = DNS.lookup_name(e), a = inetPton4(e), c === 0 ? c = 2 : c === 10 && (a = [0, 0, _htonl(65535), a]), d = f(c, u, _, null, a, o), HEAPU32[n >>> 2 >>> 0] = d, 0);
    }
    _getaddrinfo.sig = "ipppp";
    function _getcontext(...e) {
      return asyncifyStubs.getcontext(...e);
    }
    _getcontext.stub = !0, asyncifyStubs.getcontext = void 0;
    function _getdtablesize(...e) {
      return asyncifyStubs.getdtablesize(...e);
    }
    _getdtablesize.stub = !0, asyncifyStubs.getdtablesize = void 0;
    function _getentropy(e, t) {
      return e >>>= 0, t >>>= 0, randomFill(HEAPU8.subarray(e >>> 0, e + t >>> 0)), 0;
    }
    _getentropy.sig = "ipp";
    function _getnameinfo(e, t, r, n, a, o, l) {
      e >>>= 0, r >>>= 0, a >>>= 0;
      var c = readSockaddr(e, t);
      if (c.errno)
        return -6;
      var u = c.port, _ = c.addr, d = !1;
      if (r && n) {
        var f;
        if (l & 1 || !(f = DNS.lookup_addr(_))) {
          if (l & 8)
            return -2;
        } else
          _ = f;
        var p = stringToUTF8(_, r, n);
        p + 1 >= n && (d = !0);
      }
      if (a && o) {
        u = "" + u;
        var p = stringToUTF8(u, a, o);
        p + 1 >= o && (d = !0);
      }
      return d ? -12 : 0;
    }
    _getnameinfo.sig = "ipipipii";
    var Protocols = { list: [], map: {} }, _setprotoent = (e) => {
      function t(o, l, c) {
        var u = _malloc(o.length + 1);
        stringToAscii(o, u);
        for (var _ = 0, d = c.length, f = _malloc((d + 1) * 4), p = 0; p < d; p++, _ += 4) {
          var m = c[p], S = _malloc(m.length + 1);
          stringToAscii(m, S), HEAPU32[f + _ >>> 2 >>> 0] = S;
        }
        HEAPU32[f + _ >>> 2 >>> 0] = 0;
        var h = _malloc(12);
        return HEAPU32[h >>> 2 >>> 0] = u, HEAPU32[h + 4 >>> 2 >>> 0] = f, HEAP32[h + 8 >>> 2 >>> 0] = l, h;
      }
      var r = Protocols.list, n = Protocols.map;
      if (r.length === 0) {
        var a = t("tcp", 6, ["TCP"]);
        r.push(a), n.tcp = n[6] = a, a = t("udp", 17, ["UDP"]), r.push(a), n.udp = n[17] = a;
      }
      _setprotoent.index = 0;
    };
    _setprotoent.sig = "vi";
    function _getprotobyname(e) {
      e >>>= 0, e = UTF8ToString(e), _setprotoent();
      var t = Protocols.map[e];
      return t;
    }
    _getprotobyname.sig = "pp";
    function _getprotobynumber(e) {
      _setprotoent();
      var t = Protocols.map[e];
      return t;
    }
    _getprotobynumber.sig = "pi";
    function _htmlDefaultSAXHandler(...e) {
      return asyncifyStubs.htmlDefaultSAXHandler(...e);
    }
    _htmlDefaultSAXHandler.stub = !0, asyncifyStubs.htmlDefaultSAXHandler = void 0;
    function _isolat1ToUTF8(...e) {
      return asyncifyStubs.isolat1ToUTF8(...e);
    }
    _isolat1ToUTF8.stub = !0, asyncifyStubs.isolat1ToUTF8 = void 0;
    function _makecontext(...e) {
      return asyncifyStubs.makecontext(...e);
    }
    _makecontext.stub = !0, asyncifyStubs.makecontext = void 0;
    function _oldXMLWDcompatibility(...e) {
      return asyncifyStubs.oldXMLWDcompatibility(...e);
    }
    _oldXMLWDcompatibility.stub = !0, asyncifyStubs.oldXMLWDcompatibility = void 0;
    function _php_embed_init(...e) {
      return asyncifyStubs.php_embed_init(...e);
    }
    _php_embed_init.stub = !0, asyncifyStubs.php_embed_init = void 0;
    function _php_embed_shutdown(...e) {
      return asyncifyStubs.php_embed_shutdown(...e);
    }
    _php_embed_shutdown.stub = !0, asyncifyStubs.php_embed_shutdown = void 0;
    function _posix_spawnp(...e) {
      return asyncifyStubs.posix_spawnp(...e);
    }
    _posix_spawnp.stub = !0, asyncifyStubs.posix_spawnp = void 0;
    var arraySum = (e, t) => {
      for (var r = 0, n = 0; n <= t; r += e[n++])
        ;
      return r;
    }, MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], addDays = (e, t) => {
      for (var r = new Date(e.getTime()); t > 0; ) {
        var n = isLeapYear(r.getFullYear()), a = r.getMonth(), o = (n ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[a];
        if (t > o - r.getDate())
          t -= o - r.getDate() + 1, r.setDate(1), a < 11 ? r.setMonth(a + 1) : (r.setMonth(0), r.setFullYear(r.getFullYear() + 1));
        else
          return r.setDate(r.getDate() + t), r;
      }
      return r;
    };
    function _strptime(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      for (var n = UTF8ToString(t), a = "\\!@#$^&*()+=-[]/{}|:<>?,.", o = 0, l = a.length; o < l; ++o)
        n = n.replace(new RegExp("\\" + a[o], "g"), "\\" + a[o]);
      var c = { A: "%a", B: "%b", c: "%a %b %d %H:%M:%S %Y", D: "%m\\/%d\\/%y", e: "%d", F: "%Y-%m-%d", h: "%b", R: "%H\\:%M", r: "%I\\:%M\\:%S\\s%p", T: "%H\\:%M\\:%S", x: "%m\\/%d\\/(?:%y|%Y)", X: "%H\\:%M\\:%S" }, u = { a: "(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)", b: "(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)", C: "\\d\\d", d: "0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31", H: "\\d(?!\\d)|[0,1]\\d|20|21|22|23", I: "\\d(?!\\d)|0\\d|10|11|12", j: "00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d", m: "0[1-9]|[1-9](?!\\d)|10|11|12", M: "0\\d|\\d(?!\\d)|[1-5]\\d", n: " ", p: "AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.", S: "0\\d|\\d(?!\\d)|[1-5]\\d|60", U: "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53", W: "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53", w: "[0-6]", y: "\\d\\d", Y: "\\d\\d\\d\\d", t: " ", z: "Z|(?:[\\+\\-]\\d\\d:?(?:\\d\\d)?)" }, _ = { JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5, JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11 }, d = { SUN: 0, MON: 1, TUE: 2, WED: 3, THU: 4, FRI: 5, SAT: 6 }, f = { MON: 0, TUE: 1, WED: 2, THU: 3, FRI: 4, SAT: 5, SUN: 6 }, p = [], m = n.replace(/%(.)/g, (M, D) => c[D] || M).replace(/%(.)/g, (M, D) => {
        let B = u[D];
        return B ? (p.push(D), `(${B})`) : D;
      }).replace(/\s+/g, "\\s*"), S = new RegExp("^" + m, "i").exec(UTF8ToString(e));
      function h() {
        function M(D, B, j) {
          return typeof D != "number" || isNaN(D) ? B : D >= B ? D <= j ? D : j : B;
        }
        return { year: M(HEAP32[r + 20 >>> 2 >>> 0] + 1900, 1970, 9999), month: M(HEAP32[r + 16 >>> 2 >>> 0], 0, 11), day: M(HEAP32[r + 12 >>> 2 >>> 0], 1, 31), hour: M(HEAP32[r + 8 >>> 2 >>> 0], 0, 23), min: M(HEAP32[r + 4 >>> 2 >>> 0], 0, 59), sec: M(HEAP32[r >>> 2 >>> 0], 0, 59), gmtoff: 0 };
      }
      if (S) {
        var g = h(), y, b = (M) => {
          var D = p.indexOf(M);
          if (D >= 0)
            return S[D + 1];
        };
        if ((y = b("S")) && (g.sec = jstoi_q(y)), (y = b("M")) && (g.min = jstoi_q(y)), y = b("H"))
          g.hour = jstoi_q(y);
        else if (y = b("I")) {
          var C = jstoi_q(y);
          (y = b("p")) && (C += y.toUpperCase()[0] === "P" ? 12 : 0), g.hour = C;
        }
        if (y = b("Y"))
          g.year = jstoi_q(y);
        else if (y = b("y")) {
          var x = jstoi_q(y);
          (y = b("C")) ? x += jstoi_q(y) * 100 : x += x < 69 ? 2e3 : 1900, g.year = x;
        }
        if ((y = b("m")) ? g.month = jstoi_q(y) - 1 : (y = b("b")) && (g.month = _[y.substring(0, 3).toUpperCase()] || 0), y = b("d"))
          g.day = jstoi_q(y);
        else if (y = b("j"))
          for (var E = jstoi_q(y), U = isLeapYear(g.year), v = 0; v < 12; ++v) {
            var I = arraySum(U ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, v - 1);
            E <= I + (U ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[v] && (g.day = E - I);
          }
        else if (y = b("a")) {
          var A = y.substring(0, 3).toUpperCase();
          if (y = b("U")) {
            var k = d[A], T = jstoi_q(y), P = new Date(g.year, 0, 1), H;
            P.getDay() === 0 ? H = addDays(P, k + 7 * (T - 1)) : H = addDays(P, 7 - P.getDay() + k + 7 * (T - 1)), g.day = H.getDate(), g.month = H.getMonth();
          } else if (y = b("W")) {
            var k = f[A], T = jstoi_q(y), P = new Date(g.year, 0, 1), H;
            P.getDay() === 1 ? H = addDays(P, k + 7 * (T - 1)) : H = addDays(P, 7 - P.getDay() + 1 + k + 7 * (T - 1)), g.day = H.getDate(), g.month = H.getMonth();
          }
        }
        if (y = b("z"))
          if (y.toLowerCase() === "z")
            g.gmtoff = 0;
          else {
            var R = y.match(/^((?:\-|\+)\d\d):?(\d\d)?/);
            g.gmtoff = R[1] * 3600, R[2] && (g.gmtoff += g.gmtoff > 0 ? R[2] * 60 : -R[2] * 60);
          }
        var L = new Date(g.year, g.month, g.day, g.hour, g.min, g.sec, 0);
        return HEAP32[r >>> 2 >>> 0] = L.getSeconds(), HEAP32[r + 4 >>> 2 >>> 0] = L.getMinutes(), HEAP32[r + 8 >>> 2 >>> 0] = L.getHours(), HEAP32[r + 12 >>> 2 >>> 0] = L.getDate(), HEAP32[r + 16 >>> 2 >>> 0] = L.getMonth(), HEAP32[r + 20 >>> 2 >>> 0] = L.getFullYear() - 1900, HEAP32[r + 24 >>> 2 >>> 0] = L.getDay(), HEAP32[r + 28 >>> 2 >>> 0] = arraySum(isLeapYear(L.getFullYear()) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, L.getMonth() - 1) + L.getDate() - 1, HEAP32[r + 32 >>> 2 >>> 0] = 0, HEAP32[r + 36 >>> 2 >>> 0] = g.gmtoff, e + intArrayFromString(S[0]).length - 1;
      }
      return 0;
    }
    _strptime.sig = "pppp";
    function _swapcontext(...e) {
      return asyncifyStubs.swapcontext(...e);
    }
    _swapcontext.stub = !0, asyncifyStubs.swapcontext = void 0;
    function _xmlAllocOutputBuffer(...e) {
      return asyncifyStubs.xmlAllocOutputBuffer(...e);
    }
    _xmlAllocOutputBuffer.stub = !0, asyncifyStubs.xmlAllocOutputBuffer = void 0;
    function _xmlAllocParserInputBuffer(...e) {
      return asyncifyStubs.xmlAllocParserInputBuffer(...e);
    }
    _xmlAllocParserInputBuffer.stub = !0, asyncifyStubs.xmlAllocParserInputBuffer = void 0;
    function _xmlBufferAllocScheme(...e) {
      return asyncifyStubs.xmlBufferAllocScheme(...e);
    }
    _xmlBufferAllocScheme.stub = !0, asyncifyStubs.xmlBufferAllocScheme = void 0;
    function _xmlCopyError(...e) {
      return asyncifyStubs.xmlCopyError(...e);
    }
    _xmlCopyError.stub = !0, asyncifyStubs.xmlCopyError = void 0;
    function _xmlDefaultBufferSize(...e) {
      return asyncifyStubs.xmlDefaultBufferSize(...e);
    }
    _xmlDefaultBufferSize.stub = !0, asyncifyStubs.xmlDefaultBufferSize = void 0;
    function _xmlDefaultSAXHandler(...e) {
      return asyncifyStubs.xmlDefaultSAXHandler(...e);
    }
    _xmlDefaultSAXHandler.stub = !0, asyncifyStubs.xmlDefaultSAXHandler = void 0;
    function _xmlDefaultSAXLocator(...e) {
      return asyncifyStubs.xmlDefaultSAXLocator(...e);
    }
    _xmlDefaultSAXLocator.stub = !0, asyncifyStubs.xmlDefaultSAXLocator = void 0;
    function _xmlDeregisterNodeDefaultValue(...e) {
      return asyncifyStubs.xmlDeregisterNodeDefaultValue(...e);
    }
    _xmlDeregisterNodeDefaultValue.stub = !0, asyncifyStubs.xmlDeregisterNodeDefaultValue = void 0;
    function _xmlDictOwns(...e) {
      return asyncifyStubs.xmlDictOwns(...e);
    }
    _xmlDictOwns.stub = !0, asyncifyStubs.xmlDictOwns = void 0;
    function _xmlDoValidityCheckingDefaultValue(...e) {
      return asyncifyStubs.xmlDoValidityCheckingDefaultValue(...e);
    }
    _xmlDoValidityCheckingDefaultValue.stub = !0, asyncifyStubs.xmlDoValidityCheckingDefaultValue = void 0;
    function _xmlFileClose(...e) {
      return asyncifyStubs.xmlFileClose(...e);
    }
    _xmlFileClose.stub = !0, asyncifyStubs.xmlFileClose = void 0;
    function _xmlFileMatch(...e) {
      return asyncifyStubs.xmlFileMatch(...e);
    }
    _xmlFileMatch.stub = !0, asyncifyStubs.xmlFileMatch = void 0;
    function _xmlFileOpen(...e) {
      return asyncifyStubs.xmlFileOpen(...e);
    }
    _xmlFileOpen.stub = !0, asyncifyStubs.xmlFileOpen = void 0;
    function _xmlFileRead(...e) {
      return asyncifyStubs.xmlFileRead(...e);
    }
    _xmlFileRead.stub = !0, asyncifyStubs.xmlFileRead = void 0;
    function _xmlFree(...e) {
      return asyncifyStubs.xmlFree(...e);
    }
    _xmlFree.stub = !0, asyncifyStubs.xmlFree = void 0;
    function _xmlFreeDoc(...e) {
      return asyncifyStubs.xmlFreeDoc(...e);
    }
    _xmlFreeDoc.stub = !0, asyncifyStubs.xmlFreeDoc = void 0;
    function _xmlFreeNode(...e) {
      return asyncifyStubs.xmlFreeNode(...e);
    }
    _xmlFreeNode.stub = !0, asyncifyStubs.xmlFreeNode = void 0;
    function _xmlFreeNodeList(...e) {
      return asyncifyStubs.xmlFreeNodeList(...e);
    }
    _xmlFreeNodeList.stub = !0, asyncifyStubs.xmlFreeNodeList = void 0;
    function _xmlFreeNs(...e) {
      return asyncifyStubs.xmlFreeNs(...e);
    }
    _xmlFreeNs.stub = !0, asyncifyStubs.xmlFreeNs = void 0;
    function _xmlFreeParserInputBuffer(...e) {
      return asyncifyStubs.xmlFreeParserInputBuffer(...e);
    }
    _xmlFreeParserInputBuffer.stub = !0, asyncifyStubs.xmlFreeParserInputBuffer = void 0;
    function _xmlFreeProp(...e) {
      return asyncifyStubs.xmlFreeProp(...e);
    }
    _xmlFreeProp.stub = !0, asyncifyStubs.xmlFreeProp = void 0;
    function _xmlFreeURI(...e) {
      return asyncifyStubs.xmlFreeURI(...e);
    }
    _xmlFreeURI.stub = !0, asyncifyStubs.xmlFreeURI = void 0;
    function _xmlGenericError(...e) {
      return asyncifyStubs.xmlGenericError(...e);
    }
    _xmlGenericError.stub = !0, asyncifyStubs.xmlGenericError = void 0;
    function _xmlGenericErrorContext(...e) {
      return asyncifyStubs.xmlGenericErrorContext(...e);
    }
    _xmlGenericErrorContext.stub = !0, asyncifyStubs.xmlGenericErrorContext = void 0;
    function _xmlGenericErrorDefaultFunc(...e) {
      return asyncifyStubs.xmlGenericErrorDefaultFunc(...e);
    }
    _xmlGenericErrorDefaultFunc.stub = !0, asyncifyStubs.xmlGenericErrorDefaultFunc = void 0;
    function _xmlGetExternalEntityLoader(...e) {
      return asyncifyStubs.xmlGetExternalEntityLoader(...e);
    }
    _xmlGetExternalEntityLoader.stub = !0, asyncifyStubs.xmlGetExternalEntityLoader = void 0;
    function _xmlGetLastError(...e) {
      return asyncifyStubs.xmlGetLastError(...e);
    }
    _xmlGetLastError.stub = !0, asyncifyStubs.xmlGetLastError = void 0;
    function _xmlGetWarningsDefaultValue(...e) {
      return asyncifyStubs.xmlGetWarningsDefaultValue(...e);
    }
    _xmlGetWarningsDefaultValue.stub = !0, asyncifyStubs.xmlGetWarningsDefaultValue = void 0;
    function _xmlHashDefaultDeallocator(...e) {
      return asyncifyStubs.xmlHashDefaultDeallocator(...e);
    }
    _xmlHashDefaultDeallocator.stub = !0, asyncifyStubs.xmlHashDefaultDeallocator = void 0;
    function _xmlHashLookup(...e) {
      return asyncifyStubs.xmlHashLookup(...e);
    }
    _xmlHashLookup.stub = !0, asyncifyStubs.xmlHashLookup = void 0;
    function _xmlHashRemoveEntry(...e) {
      return asyncifyStubs.xmlHashRemoveEntry(...e);
    }
    _xmlHashRemoveEntry.stub = !0, asyncifyStubs.xmlHashRemoveEntry = void 0;
    function _xmlHashScan(...e) {
      return asyncifyStubs.xmlHashScan(...e);
    }
    _xmlHashScan.stub = !0, asyncifyStubs.xmlHashScan = void 0;
    function _xmlIndentTreeOutput(...e) {
      return asyncifyStubs.xmlIndentTreeOutput(...e);
    }
    _xmlIndentTreeOutput.stub = !0, asyncifyStubs.xmlIndentTreeOutput = void 0;
    function _xmlInitParser(...e) {
      return asyncifyStubs.xmlInitParser(...e);
    }
    _xmlInitParser.stub = !0, asyncifyStubs.xmlInitParser = void 0;
    function _xmlInputReadCallbackNop(...e) {
      return asyncifyStubs.xmlInputReadCallbackNop(...e);
    }
    _xmlInputReadCallbackNop.stub = !0, asyncifyStubs.xmlInputReadCallbackNop = void 0;
    function _xmlIsBaseCharGroup(...e) {
      return asyncifyStubs.xmlIsBaseCharGroup(...e);
    }
    _xmlIsBaseCharGroup.stub = !0, asyncifyStubs.xmlIsBaseCharGroup = void 0;
    function _xmlIsCombiningGroup(...e) {
      return asyncifyStubs.xmlIsCombiningGroup(...e);
    }
    _xmlIsCombiningGroup.stub = !0, asyncifyStubs.xmlIsCombiningGroup = void 0;
    function _xmlIsDigitGroup(...e) {
      return asyncifyStubs.xmlIsDigitGroup(...e);
    }
    _xmlIsDigitGroup.stub = !0, asyncifyStubs.xmlIsDigitGroup = void 0;
    function _xmlIsExtenderGroup(...e) {
      return asyncifyStubs.xmlIsExtenderGroup(...e);
    }
    _xmlIsExtenderGroup.stub = !0, asyncifyStubs.xmlIsExtenderGroup = void 0;
    function _xmlIsPubidChar_tab(...e) {
      return asyncifyStubs.xmlIsPubidChar_tab(...e);
    }
    _xmlIsPubidChar_tab.stub = !0, asyncifyStubs.xmlIsPubidChar_tab = void 0;
    function _xmlKeepBlanksDefaultValue(...e) {
      return asyncifyStubs.xmlKeepBlanksDefaultValue(...e);
    }
    _xmlKeepBlanksDefaultValue.stub = !0, asyncifyStubs.xmlKeepBlanksDefaultValue = void 0;
    function _xmlLastError(...e) {
      return asyncifyStubs.xmlLastError(...e);
    }
    _xmlLastError.stub = !0, asyncifyStubs.xmlLastError = void 0;
    function _xmlLineNumbersDefaultValue(...e) {
      return asyncifyStubs.xmlLineNumbersDefaultValue(...e);
    }
    _xmlLineNumbersDefaultValue.stub = !0, asyncifyStubs.xmlLineNumbersDefaultValue = void 0;
    function _xmlLoadExtDtdDefaultValue(...e) {
      return asyncifyStubs.xmlLoadExtDtdDefaultValue(...e);
    }
    _xmlLoadExtDtdDefaultValue.stub = !0, asyncifyStubs.xmlLoadExtDtdDefaultValue = void 0;
    function _xmlMalloc(...e) {
      return asyncifyStubs.xmlMalloc(...e);
    }
    _xmlMalloc.stub = !0, asyncifyStubs.xmlMalloc = void 0;
    function _xmlMallocAtomic(...e) {
      return asyncifyStubs.xmlMallocAtomic(...e);
    }
    _xmlMallocAtomic.stub = !0, asyncifyStubs.xmlMallocAtomic = void 0;
    function _xmlMemStrdup(...e) {
      return asyncifyStubs.xmlMemStrdup(...e);
    }
    _xmlMemStrdup.stub = !0, asyncifyStubs.xmlMemStrdup = void 0;
    function _xmlNewIOInputStream(...e) {
      return asyncifyStubs.xmlNewIOInputStream(...e);
    }
    _xmlNewIOInputStream.stub = !0, asyncifyStubs.xmlNewIOInputStream = void 0;
    function _xmlNewInputFromFile(...e) {
      return asyncifyStubs.xmlNewInputFromFile(...e);
    }
    _xmlNewInputFromFile.stub = !0, asyncifyStubs.xmlNewInputFromFile = void 0;
    function _xmlOutputBufferCreateFilenameDefault(...e) {
      return asyncifyStubs.xmlOutputBufferCreateFilenameDefault(...e);
    }
    _xmlOutputBufferCreateFilenameDefault.stub = !0, asyncifyStubs.xmlOutputBufferCreateFilenameDefault = void 0;
    function _xmlOutputBufferCreateFilenameValue(...e) {
      return asyncifyStubs.xmlOutputBufferCreateFilenameValue(...e);
    }
    _xmlOutputBufferCreateFilenameValue.stub = !0, asyncifyStubs.xmlOutputBufferCreateFilenameValue = void 0;
    function _xmlParseCharEncoding(...e) {
      return asyncifyStubs.xmlParseCharEncoding(...e);
    }
    _xmlParseCharEncoding.stub = !0, asyncifyStubs.xmlParseCharEncoding = void 0;
    function _xmlParseURI(...e) {
      return asyncifyStubs.xmlParseURI(...e);
    }
    _xmlParseURI.stub = !0, asyncifyStubs.xmlParseURI = void 0;
    function _xmlParserDebugEntities(...e) {
      return asyncifyStubs.xmlParserDebugEntities(...e);
    }
    _xmlParserDebugEntities.stub = !0, asyncifyStubs.xmlParserDebugEntities = void 0;
    function _xmlParserError(...e) {
      return asyncifyStubs.xmlParserError(...e);
    }
    _xmlParserError.stub = !0, asyncifyStubs.xmlParserError = void 0;
    function _xmlParserInputBufferCreateFilenameDefault(...e) {
      return asyncifyStubs.xmlParserInputBufferCreateFilenameDefault(...e);
    }
    _xmlParserInputBufferCreateFilenameDefault.stub = !0, asyncifyStubs.xmlParserInputBufferCreateFilenameDefault = void 0;
    function _xmlParserInputBufferCreateFilenameValue(...e) {
      return asyncifyStubs.xmlParserInputBufferCreateFilenameValue(...e);
    }
    _xmlParserInputBufferCreateFilenameValue.stub = !0, asyncifyStubs.xmlParserInputBufferCreateFilenameValue = void 0;
    function _xmlParserMaxDepth(...e) {
      return asyncifyStubs.xmlParserMaxDepth(...e);
    }
    _xmlParserMaxDepth.stub = !0, asyncifyStubs.xmlParserMaxDepth = void 0;
    function _xmlParserValidityError(...e) {
      return asyncifyStubs.xmlParserValidityError(...e);
    }
    _xmlParserValidityError.stub = !0, asyncifyStubs.xmlParserValidityError = void 0;
    function _xmlParserValidityWarning(...e) {
      return asyncifyStubs.xmlParserValidityWarning(...e);
    }
    _xmlParserValidityWarning.stub = !0, asyncifyStubs.xmlParserValidityWarning = void 0;
    function _xmlParserVersion(...e) {
      return asyncifyStubs.xmlParserVersion(...e);
    }
    _xmlParserVersion.stub = !0, asyncifyStubs.xmlParserVersion = void 0;
    function _xmlParserWarning(...e) {
      return asyncifyStubs.xmlParserWarning(...e);
    }
    _xmlParserWarning.stub = !0, asyncifyStubs.xmlParserWarning = void 0;
    function _xmlPedanticParserDefaultValue(...e) {
      return asyncifyStubs.xmlPedanticParserDefaultValue(...e);
    }
    _xmlPedanticParserDefaultValue.stub = !0, asyncifyStubs.xmlPedanticParserDefaultValue = void 0;
    function _xmlRealloc(...e) {
      return asyncifyStubs.xmlRealloc(...e);
    }
    _xmlRealloc.stub = !0, asyncifyStubs.xmlRealloc = void 0;
    function _xmlReconciliateNs(...e) {
      return asyncifyStubs.xmlReconciliateNs(...e);
    }
    _xmlReconciliateNs.stub = !0, asyncifyStubs.xmlReconciliateNs = void 0;
    function _xmlRegisterNodeDefaultValue(...e) {
      return asyncifyStubs.xmlRegisterNodeDefaultValue(...e);
    }
    _xmlRegisterNodeDefaultValue.stub = !0, asyncifyStubs.xmlRegisterNodeDefaultValue = void 0;
    function _xmlRelaxNGCleanupTypes(...e) {
      return asyncifyStubs.xmlRelaxNGCleanupTypes(...e);
    }
    _xmlRelaxNGCleanupTypes.stub = !0, asyncifyStubs.xmlRelaxNGCleanupTypes = void 0;
    function _xmlRemoveID(...e) {
      return asyncifyStubs.xmlRemoveID(...e);
    }
    _xmlRemoveID.stub = !0, asyncifyStubs.xmlRemoveID = void 0;
    function _xmlResetError(...e) {
      return asyncifyStubs.xmlResetError(...e);
    }
    _xmlResetError.stub = !0, asyncifyStubs.xmlResetError = void 0;
    function _xmlResetLastError(...e) {
      return asyncifyStubs.xmlResetLastError(...e);
    }
    _xmlResetLastError.stub = !0, asyncifyStubs.xmlResetLastError = void 0;
    function _xmlSAX2AttributeDecl(...e) {
      return asyncifyStubs.xmlSAX2AttributeDecl(...e);
    }
    _xmlSAX2AttributeDecl.stub = !0, asyncifyStubs.xmlSAX2AttributeDecl = void 0;
    function _xmlSAX2CDataBlock(...e) {
      return asyncifyStubs.xmlSAX2CDataBlock(...e);
    }
    _xmlSAX2CDataBlock.stub = !0, asyncifyStubs.xmlSAX2CDataBlock = void 0;
    function _xmlSAX2Characters(...e) {
      return asyncifyStubs.xmlSAX2Characters(...e);
    }
    _xmlSAX2Characters.stub = !0, asyncifyStubs.xmlSAX2Characters = void 0;
    function _xmlSAX2Comment(...e) {
      return asyncifyStubs.xmlSAX2Comment(...e);
    }
    _xmlSAX2Comment.stub = !0, asyncifyStubs.xmlSAX2Comment = void 0;
    function _xmlSAX2ElementDecl(...e) {
      return asyncifyStubs.xmlSAX2ElementDecl(...e);
    }
    _xmlSAX2ElementDecl.stub = !0, asyncifyStubs.xmlSAX2ElementDecl = void 0;
    function _xmlSAX2EndDocument(...e) {
      return asyncifyStubs.xmlSAX2EndDocument(...e);
    }
    _xmlSAX2EndDocument.stub = !0, asyncifyStubs.xmlSAX2EndDocument = void 0;
    function _xmlSAX2EndElement(...e) {
      return asyncifyStubs.xmlSAX2EndElement(...e);
    }
    _xmlSAX2EndElement.stub = !0, asyncifyStubs.xmlSAX2EndElement = void 0;
    function _xmlSAX2EndElementNs(...e) {
      return asyncifyStubs.xmlSAX2EndElementNs(...e);
    }
    _xmlSAX2EndElementNs.stub = !0, asyncifyStubs.xmlSAX2EndElementNs = void 0;
    function _xmlSAX2EntityDecl(...e) {
      return asyncifyStubs.xmlSAX2EntityDecl(...e);
    }
    _xmlSAX2EntityDecl.stub = !0, asyncifyStubs.xmlSAX2EntityDecl = void 0;
    function _xmlSAX2ExternalSubset(...e) {
      return asyncifyStubs.xmlSAX2ExternalSubset(...e);
    }
    _xmlSAX2ExternalSubset.stub = !0, asyncifyStubs.xmlSAX2ExternalSubset = void 0;
    function _xmlSAX2GetColumnNumber(...e) {
      return asyncifyStubs.xmlSAX2GetColumnNumber(...e);
    }
    _xmlSAX2GetColumnNumber.stub = !0, asyncifyStubs.xmlSAX2GetColumnNumber = void 0;
    function _xmlSAX2GetEntity(...e) {
      return asyncifyStubs.xmlSAX2GetEntity(...e);
    }
    _xmlSAX2GetEntity.stub = !0, asyncifyStubs.xmlSAX2GetEntity = void 0;
    function _xmlSAX2GetLineNumber(...e) {
      return asyncifyStubs.xmlSAX2GetLineNumber(...e);
    }
    _xmlSAX2GetLineNumber.stub = !0, asyncifyStubs.xmlSAX2GetLineNumber = void 0;
    function _xmlSAX2GetParameterEntity(...e) {
      return asyncifyStubs.xmlSAX2GetParameterEntity(...e);
    }
    _xmlSAX2GetParameterEntity.stub = !0, asyncifyStubs.xmlSAX2GetParameterEntity = void 0;
    function _xmlSAX2GetPublicId(...e) {
      return asyncifyStubs.xmlSAX2GetPublicId(...e);
    }
    _xmlSAX2GetPublicId.stub = !0, asyncifyStubs.xmlSAX2GetPublicId = void 0;
    function _xmlSAX2GetSystemId(...e) {
      return asyncifyStubs.xmlSAX2GetSystemId(...e);
    }
    _xmlSAX2GetSystemId.stub = !0, asyncifyStubs.xmlSAX2GetSystemId = void 0;
    function _xmlSAX2HasExternalSubset(...e) {
      return asyncifyStubs.xmlSAX2HasExternalSubset(...e);
    }
    _xmlSAX2HasExternalSubset.stub = !0, asyncifyStubs.xmlSAX2HasExternalSubset = void 0;
    function _xmlSAX2HasInternalSubset(...e) {
      return asyncifyStubs.xmlSAX2HasInternalSubset(...e);
    }
    _xmlSAX2HasInternalSubset.stub = !0, asyncifyStubs.xmlSAX2HasInternalSubset = void 0;
    function _xmlSAX2IgnorableWhitespace(...e) {
      return asyncifyStubs.xmlSAX2IgnorableWhitespace(...e);
    }
    _xmlSAX2IgnorableWhitespace.stub = !0, asyncifyStubs.xmlSAX2IgnorableWhitespace = void 0;
    function _xmlSAX2InternalSubset(...e) {
      return asyncifyStubs.xmlSAX2InternalSubset(...e);
    }
    _xmlSAX2InternalSubset.stub = !0, asyncifyStubs.xmlSAX2InternalSubset = void 0;
    function _xmlSAX2IsStandalone(...e) {
      return asyncifyStubs.xmlSAX2IsStandalone(...e);
    }
    _xmlSAX2IsStandalone.stub = !0, asyncifyStubs.xmlSAX2IsStandalone = void 0;
    function _xmlSAX2NotationDecl(...e) {
      return asyncifyStubs.xmlSAX2NotationDecl(...e);
    }
    _xmlSAX2NotationDecl.stub = !0, asyncifyStubs.xmlSAX2NotationDecl = void 0;
    function _xmlSAX2ProcessingInstruction(...e) {
      return asyncifyStubs.xmlSAX2ProcessingInstruction(...e);
    }
    _xmlSAX2ProcessingInstruction.stub = !0, asyncifyStubs.xmlSAX2ProcessingInstruction = void 0;
    function _xmlSAX2Reference(...e) {
      return asyncifyStubs.xmlSAX2Reference(...e);
    }
    _xmlSAX2Reference.stub = !0, asyncifyStubs.xmlSAX2Reference = void 0;
    function _xmlSAX2ResolveEntity(...e) {
      return asyncifyStubs.xmlSAX2ResolveEntity(...e);
    }
    _xmlSAX2ResolveEntity.stub = !0, asyncifyStubs.xmlSAX2ResolveEntity = void 0;
    function _xmlSAX2SetDocumentLocator(...e) {
      return asyncifyStubs.xmlSAX2SetDocumentLocator(...e);
    }
    _xmlSAX2SetDocumentLocator.stub = !0, asyncifyStubs.xmlSAX2SetDocumentLocator = void 0;
    function _xmlSAX2StartDocument(...e) {
      return asyncifyStubs.xmlSAX2StartDocument(...e);
    }
    _xmlSAX2StartDocument.stub = !0, asyncifyStubs.xmlSAX2StartDocument = void 0;
    function _xmlSAX2StartElement(...e) {
      return asyncifyStubs.xmlSAX2StartElement(...e);
    }
    _xmlSAX2StartElement.stub = !0, asyncifyStubs.xmlSAX2StartElement = void 0;
    function _xmlSAX2StartElementNs(...e) {
      return asyncifyStubs.xmlSAX2StartElementNs(...e);
    }
    _xmlSAX2StartElementNs.stub = !0, asyncifyStubs.xmlSAX2StartElementNs = void 0;
    function _xmlSAX2UnparsedEntityDecl(...e) {
      return asyncifyStubs.xmlSAX2UnparsedEntityDecl(...e);
    }
    _xmlSAX2UnparsedEntityDecl.stub = !0, asyncifyStubs.xmlSAX2UnparsedEntityDecl = void 0;
    function _xmlSaveNoEmptyTags(...e) {
      return asyncifyStubs.xmlSaveNoEmptyTags(...e);
    }
    _xmlSaveNoEmptyTags.stub = !0, asyncifyStubs.xmlSaveNoEmptyTags = void 0;
    function _xmlSetExternalEntityLoader(...e) {
      return asyncifyStubs.xmlSetExternalEntityLoader(...e);
    }
    _xmlSetExternalEntityLoader.stub = !0, asyncifyStubs.xmlSetExternalEntityLoader = void 0;
    function _xmlSetGenericErrorFunc(...e) {
      return asyncifyStubs.xmlSetGenericErrorFunc(...e);
    }
    _xmlSetGenericErrorFunc.stub = !0, asyncifyStubs.xmlSetGenericErrorFunc = void 0;
    function _xmlSetStructuredErrorFunc(...e) {
      return asyncifyStubs.xmlSetStructuredErrorFunc(...e);
    }
    _xmlSetStructuredErrorFunc.stub = !0, asyncifyStubs.xmlSetStructuredErrorFunc = void 0;
    function _xmlStrdup(...e) {
      return asyncifyStubs.xmlStrdup(...e);
    }
    _xmlStrdup.stub = !0, asyncifyStubs.xmlStrdup = void 0;
    function _xmlStringComment(...e) {
      return asyncifyStubs.xmlStringComment(...e);
    }
    _xmlStringComment.stub = !0, asyncifyStubs.xmlStringComment = void 0;
    function _xmlStringText(...e) {
      return asyncifyStubs.xmlStringText(...e);
    }
    _xmlStringText.stub = !0, asyncifyStubs.xmlStringText = void 0;
    function _xmlStringTextNoenc(...e) {
      return asyncifyStubs.xmlStringTextNoenc(...e);
    }
    _xmlStringTextNoenc.stub = !0, asyncifyStubs.xmlStringTextNoenc = void 0;
    function _xmlStrncmp(...e) {
      return asyncifyStubs.xmlStrncmp(...e);
    }
    _xmlStrncmp.stub = !0, asyncifyStubs.xmlStrncmp = void 0;
    function _xmlStructuredError(...e) {
      return asyncifyStubs.xmlStructuredError(...e);
    }
    _xmlStructuredError.stub = !0, asyncifyStubs.xmlStructuredError = void 0;
    function _xmlStructuredErrorContext(...e) {
      return asyncifyStubs.xmlStructuredErrorContext(...e);
    }
    _xmlStructuredErrorContext.stub = !0, asyncifyStubs.xmlStructuredErrorContext = void 0;
    function _xmlSubstituteEntitiesDefaultValue(...e) {
      return asyncifyStubs.xmlSubstituteEntitiesDefaultValue(...e);
    }
    _xmlSubstituteEntitiesDefaultValue.stub = !0, asyncifyStubs.xmlSubstituteEntitiesDefaultValue = void 0;
    function _xmlTreeIndentString(...e) {
      return asyncifyStubs.xmlTreeIndentString(...e);
    }
    _xmlTreeIndentString.stub = !0, asyncifyStubs.xmlTreeIndentString = void 0;
    function _xmlUCSIsAegeanNumbers(...e) {
      return asyncifyStubs.xmlUCSIsAegeanNumbers(...e);
    }
    _xmlUCSIsAegeanNumbers.stub = !0, asyncifyStubs.xmlUCSIsAegeanNumbers = void 0;
    function _xmlUCSIsAlphabeticPresentationForms(...e) {
      return asyncifyStubs.xmlUCSIsAlphabeticPresentationForms(...e);
    }
    _xmlUCSIsAlphabeticPresentationForms.stub = !0, asyncifyStubs.xmlUCSIsAlphabeticPresentationForms = void 0;
    function _xmlUCSIsArabic(...e) {
      return asyncifyStubs.xmlUCSIsArabic(...e);
    }
    _xmlUCSIsArabic.stub = !0, asyncifyStubs.xmlUCSIsArabic = void 0;
    function _xmlUCSIsArabicPresentationFormsA(...e) {
      return asyncifyStubs.xmlUCSIsArabicPresentationFormsA(...e);
    }
    _xmlUCSIsArabicPresentationFormsA.stub = !0, asyncifyStubs.xmlUCSIsArabicPresentationFormsA = void 0;
    function _xmlUCSIsArabicPresentationFormsB(...e) {
      return asyncifyStubs.xmlUCSIsArabicPresentationFormsB(...e);
    }
    _xmlUCSIsArabicPresentationFormsB.stub = !0, asyncifyStubs.xmlUCSIsArabicPresentationFormsB = void 0;
    function _xmlUCSIsArmenian(...e) {
      return asyncifyStubs.xmlUCSIsArmenian(...e);
    }
    _xmlUCSIsArmenian.stub = !0, asyncifyStubs.xmlUCSIsArmenian = void 0;
    function _xmlUCSIsArrows(...e) {
      return asyncifyStubs.xmlUCSIsArrows(...e);
    }
    _xmlUCSIsArrows.stub = !0, asyncifyStubs.xmlUCSIsArrows = void 0;
    function _xmlUCSIsBasicLatin(...e) {
      return asyncifyStubs.xmlUCSIsBasicLatin(...e);
    }
    _xmlUCSIsBasicLatin.stub = !0, asyncifyStubs.xmlUCSIsBasicLatin = void 0;
    function _xmlUCSIsBengali(...e) {
      return asyncifyStubs.xmlUCSIsBengali(...e);
    }
    _xmlUCSIsBengali.stub = !0, asyncifyStubs.xmlUCSIsBengali = void 0;
    function _xmlUCSIsBlockElements(...e) {
      return asyncifyStubs.xmlUCSIsBlockElements(...e);
    }
    _xmlUCSIsBlockElements.stub = !0, asyncifyStubs.xmlUCSIsBlockElements = void 0;
    function _xmlUCSIsBopomofo(...e) {
      return asyncifyStubs.xmlUCSIsBopomofo(...e);
    }
    _xmlUCSIsBopomofo.stub = !0, asyncifyStubs.xmlUCSIsBopomofo = void 0;
    function _xmlUCSIsBopomofoExtended(...e) {
      return asyncifyStubs.xmlUCSIsBopomofoExtended(...e);
    }
    _xmlUCSIsBopomofoExtended.stub = !0, asyncifyStubs.xmlUCSIsBopomofoExtended = void 0;
    function _xmlUCSIsBoxDrawing(...e) {
      return asyncifyStubs.xmlUCSIsBoxDrawing(...e);
    }
    _xmlUCSIsBoxDrawing.stub = !0, asyncifyStubs.xmlUCSIsBoxDrawing = void 0;
    function _xmlUCSIsBraillePatterns(...e) {
      return asyncifyStubs.xmlUCSIsBraillePatterns(...e);
    }
    _xmlUCSIsBraillePatterns.stub = !0, asyncifyStubs.xmlUCSIsBraillePatterns = void 0;
    function _xmlUCSIsBuhid(...e) {
      return asyncifyStubs.xmlUCSIsBuhid(...e);
    }
    _xmlUCSIsBuhid.stub = !0, asyncifyStubs.xmlUCSIsBuhid = void 0;
    function _xmlUCSIsByzantineMusicalSymbols(...e) {
      return asyncifyStubs.xmlUCSIsByzantineMusicalSymbols(...e);
    }
    _xmlUCSIsByzantineMusicalSymbols.stub = !0, asyncifyStubs.xmlUCSIsByzantineMusicalSymbols = void 0;
    function _xmlUCSIsCJKCompatibility(...e) {
      return asyncifyStubs.xmlUCSIsCJKCompatibility(...e);
    }
    _xmlUCSIsCJKCompatibility.stub = !0, asyncifyStubs.xmlUCSIsCJKCompatibility = void 0;
    function _xmlUCSIsCJKCompatibilityForms(...e) {
      return asyncifyStubs.xmlUCSIsCJKCompatibilityForms(...e);
    }
    _xmlUCSIsCJKCompatibilityForms.stub = !0, asyncifyStubs.xmlUCSIsCJKCompatibilityForms = void 0;
    function _xmlUCSIsCJKCompatibilityIdeographs(...e) {
      return asyncifyStubs.xmlUCSIsCJKCompatibilityIdeographs(...e);
    }
    _xmlUCSIsCJKCompatibilityIdeographs.stub = !0, asyncifyStubs.xmlUCSIsCJKCompatibilityIdeographs = void 0;
    function _xmlUCSIsCJKCompatibilityIdeographsSupplement(...e) {
      return asyncifyStubs.xmlUCSIsCJKCompatibilityIdeographsSupplement(...e);
    }
    _xmlUCSIsCJKCompatibilityIdeographsSupplement.stub = !0, asyncifyStubs.xmlUCSIsCJKCompatibilityIdeographsSupplement = void 0;
    function _xmlUCSIsCJKRadicalsSupplement(...e) {
      return asyncifyStubs.xmlUCSIsCJKRadicalsSupplement(...e);
    }
    _xmlUCSIsCJKRadicalsSupplement.stub = !0, asyncifyStubs.xmlUCSIsCJKRadicalsSupplement = void 0;
    function _xmlUCSIsCJKSymbolsandPunctuation(...e) {
      return asyncifyStubs.xmlUCSIsCJKSymbolsandPunctuation(...e);
    }
    _xmlUCSIsCJKSymbolsandPunctuation.stub = !0, asyncifyStubs.xmlUCSIsCJKSymbolsandPunctuation = void 0;
    function _xmlUCSIsCJKUnifiedIdeographs(...e) {
      return asyncifyStubs.xmlUCSIsCJKUnifiedIdeographs(...e);
    }
    _xmlUCSIsCJKUnifiedIdeographs.stub = !0, asyncifyStubs.xmlUCSIsCJKUnifiedIdeographs = void 0;
    function _xmlUCSIsCJKUnifiedIdeographsExtensionA(...e) {
      return asyncifyStubs.xmlUCSIsCJKUnifiedIdeographsExtensionA(...e);
    }
    _xmlUCSIsCJKUnifiedIdeographsExtensionA.stub = !0, asyncifyStubs.xmlUCSIsCJKUnifiedIdeographsExtensionA = void 0;
    function _xmlUCSIsCJKUnifiedIdeographsExtensionB(...e) {
      return asyncifyStubs.xmlUCSIsCJKUnifiedIdeographsExtensionB(...e);
    }
    _xmlUCSIsCJKUnifiedIdeographsExtensionB.stub = !0, asyncifyStubs.xmlUCSIsCJKUnifiedIdeographsExtensionB = void 0;
    function _xmlUCSIsCatC(...e) {
      return asyncifyStubs.xmlUCSIsCatC(...e);
    }
    _xmlUCSIsCatC.stub = !0, asyncifyStubs.xmlUCSIsCatC = void 0;
    function _xmlUCSIsCatCc(...e) {
      return asyncifyStubs.xmlUCSIsCatCc(...e);
    }
    _xmlUCSIsCatCc.stub = !0, asyncifyStubs.xmlUCSIsCatCc = void 0;
    function _xmlUCSIsCatCf(...e) {
      return asyncifyStubs.xmlUCSIsCatCf(...e);
    }
    _xmlUCSIsCatCf.stub = !0, asyncifyStubs.xmlUCSIsCatCf = void 0;
    function _xmlUCSIsCatCo(...e) {
      return asyncifyStubs.xmlUCSIsCatCo(...e);
    }
    _xmlUCSIsCatCo.stub = !0, asyncifyStubs.xmlUCSIsCatCo = void 0;
    function _xmlUCSIsCatCs(...e) {
      return asyncifyStubs.xmlUCSIsCatCs(...e);
    }
    _xmlUCSIsCatCs.stub = !0, asyncifyStubs.xmlUCSIsCatCs = void 0;
    function _xmlUCSIsCatL(...e) {
      return asyncifyStubs.xmlUCSIsCatL(...e);
    }
    _xmlUCSIsCatL.stub = !0, asyncifyStubs.xmlUCSIsCatL = void 0;
    function _xmlUCSIsCatLl(...e) {
      return asyncifyStubs.xmlUCSIsCatLl(...e);
    }
    _xmlUCSIsCatLl.stub = !0, asyncifyStubs.xmlUCSIsCatLl = void 0;
    function _xmlUCSIsCatLm(...e) {
      return asyncifyStubs.xmlUCSIsCatLm(...e);
    }
    _xmlUCSIsCatLm.stub = !0, asyncifyStubs.xmlUCSIsCatLm = void 0;
    function _xmlUCSIsCatLo(...e) {
      return asyncifyStubs.xmlUCSIsCatLo(...e);
    }
    _xmlUCSIsCatLo.stub = !0, asyncifyStubs.xmlUCSIsCatLo = void 0;
    function _xmlUCSIsCatLt(...e) {
      return asyncifyStubs.xmlUCSIsCatLt(...e);
    }
    _xmlUCSIsCatLt.stub = !0, asyncifyStubs.xmlUCSIsCatLt = void 0;
    function _xmlUCSIsCatLu(...e) {
      return asyncifyStubs.xmlUCSIsCatLu(...e);
    }
    _xmlUCSIsCatLu.stub = !0, asyncifyStubs.xmlUCSIsCatLu = void 0;
    function _xmlUCSIsCatM(...e) {
      return asyncifyStubs.xmlUCSIsCatM(...e);
    }
    _xmlUCSIsCatM.stub = !0, asyncifyStubs.xmlUCSIsCatM = void 0;
    function _xmlUCSIsCatMc(...e) {
      return asyncifyStubs.xmlUCSIsCatMc(...e);
    }
    _xmlUCSIsCatMc.stub = !0, asyncifyStubs.xmlUCSIsCatMc = void 0;
    function _xmlUCSIsCatMe(...e) {
      return asyncifyStubs.xmlUCSIsCatMe(...e);
    }
    _xmlUCSIsCatMe.stub = !0, asyncifyStubs.xmlUCSIsCatMe = void 0;
    function _xmlUCSIsCatMn(...e) {
      return asyncifyStubs.xmlUCSIsCatMn(...e);
    }
    _xmlUCSIsCatMn.stub = !0, asyncifyStubs.xmlUCSIsCatMn = void 0;
    function _xmlUCSIsCatN(...e) {
      return asyncifyStubs.xmlUCSIsCatN(...e);
    }
    _xmlUCSIsCatN.stub = !0, asyncifyStubs.xmlUCSIsCatN = void 0;
    function _xmlUCSIsCatNd(...e) {
      return asyncifyStubs.xmlUCSIsCatNd(...e);
    }
    _xmlUCSIsCatNd.stub = !0, asyncifyStubs.xmlUCSIsCatNd = void 0;
    function _xmlUCSIsCatNl(...e) {
      return asyncifyStubs.xmlUCSIsCatNl(...e);
    }
    _xmlUCSIsCatNl.stub = !0, asyncifyStubs.xmlUCSIsCatNl = void 0;
    function _xmlUCSIsCatNo(...e) {
      return asyncifyStubs.xmlUCSIsCatNo(...e);
    }
    _xmlUCSIsCatNo.stub = !0, asyncifyStubs.xmlUCSIsCatNo = void 0;
    function _xmlUCSIsCatP(...e) {
      return asyncifyStubs.xmlUCSIsCatP(...e);
    }
    _xmlUCSIsCatP.stub = !0, asyncifyStubs.xmlUCSIsCatP = void 0;
    function _xmlUCSIsCatPc(...e) {
      return asyncifyStubs.xmlUCSIsCatPc(...e);
    }
    _xmlUCSIsCatPc.stub = !0, asyncifyStubs.xmlUCSIsCatPc = void 0;
    function _xmlUCSIsCatPd(...e) {
      return asyncifyStubs.xmlUCSIsCatPd(...e);
    }
    _xmlUCSIsCatPd.stub = !0, asyncifyStubs.xmlUCSIsCatPd = void 0;
    function _xmlUCSIsCatPe(...e) {
      return asyncifyStubs.xmlUCSIsCatPe(...e);
    }
    _xmlUCSIsCatPe.stub = !0, asyncifyStubs.xmlUCSIsCatPe = void 0;
    function _xmlUCSIsCatPf(...e) {
      return asyncifyStubs.xmlUCSIsCatPf(...e);
    }
    _xmlUCSIsCatPf.stub = !0, asyncifyStubs.xmlUCSIsCatPf = void 0;
    function _xmlUCSIsCatPi(...e) {
      return asyncifyStubs.xmlUCSIsCatPi(...e);
    }
    _xmlUCSIsCatPi.stub = !0, asyncifyStubs.xmlUCSIsCatPi = void 0;
    function _xmlUCSIsCatPo(...e) {
      return asyncifyStubs.xmlUCSIsCatPo(...e);
    }
    _xmlUCSIsCatPo.stub = !0, asyncifyStubs.xmlUCSIsCatPo = void 0;
    function _xmlUCSIsCatPs(...e) {
      return asyncifyStubs.xmlUCSIsCatPs(...e);
    }
    _xmlUCSIsCatPs.stub = !0, asyncifyStubs.xmlUCSIsCatPs = void 0;
    function _xmlUCSIsCatS(...e) {
      return asyncifyStubs.xmlUCSIsCatS(...e);
    }
    _xmlUCSIsCatS.stub = !0, asyncifyStubs.xmlUCSIsCatS = void 0;
    function _xmlUCSIsCatSc(...e) {
      return asyncifyStubs.xmlUCSIsCatSc(...e);
    }
    _xmlUCSIsCatSc.stub = !0, asyncifyStubs.xmlUCSIsCatSc = void 0;
    function _xmlUCSIsCatSk(...e) {
      return asyncifyStubs.xmlUCSIsCatSk(...e);
    }
    _xmlUCSIsCatSk.stub = !0, asyncifyStubs.xmlUCSIsCatSk = void 0;
    function _xmlUCSIsCatSm(...e) {
      return asyncifyStubs.xmlUCSIsCatSm(...e);
    }
    _xmlUCSIsCatSm.stub = !0, asyncifyStubs.xmlUCSIsCatSm = void 0;
    function _xmlUCSIsCatSo(...e) {
      return asyncifyStubs.xmlUCSIsCatSo(...e);
    }
    _xmlUCSIsCatSo.stub = !0, asyncifyStubs.xmlUCSIsCatSo = void 0;
    function _xmlUCSIsCatZ(...e) {
      return asyncifyStubs.xmlUCSIsCatZ(...e);
    }
    _xmlUCSIsCatZ.stub = !0, asyncifyStubs.xmlUCSIsCatZ = void 0;
    function _xmlUCSIsCatZl(...e) {
      return asyncifyStubs.xmlUCSIsCatZl(...e);
    }
    _xmlUCSIsCatZl.stub = !0, asyncifyStubs.xmlUCSIsCatZl = void 0;
    function _xmlUCSIsCatZp(...e) {
      return asyncifyStubs.xmlUCSIsCatZp(...e);
    }
    _xmlUCSIsCatZp.stub = !0, asyncifyStubs.xmlUCSIsCatZp = void 0;
    function _xmlUCSIsCatZs(...e) {
      return asyncifyStubs.xmlUCSIsCatZs(...e);
    }
    _xmlUCSIsCatZs.stub = !0, asyncifyStubs.xmlUCSIsCatZs = void 0;
    function _xmlUCSIsCherokee(...e) {
      return asyncifyStubs.xmlUCSIsCherokee(...e);
    }
    _xmlUCSIsCherokee.stub = !0, asyncifyStubs.xmlUCSIsCherokee = void 0;
    function _xmlUCSIsCombiningDiacriticalMarks(...e) {
      return asyncifyStubs.xmlUCSIsCombiningDiacriticalMarks(...e);
    }
    _xmlUCSIsCombiningDiacriticalMarks.stub = !0, asyncifyStubs.xmlUCSIsCombiningDiacriticalMarks = void 0;
    function _xmlUCSIsCombiningDiacriticalMarksforSymbols(...e) {
      return asyncifyStubs.xmlUCSIsCombiningDiacriticalMarksforSymbols(...e);
    }
    _xmlUCSIsCombiningDiacriticalMarksforSymbols.stub = !0, asyncifyStubs.xmlUCSIsCombiningDiacriticalMarksforSymbols = void 0;
    function _xmlUCSIsCombiningHalfMarks(...e) {
      return asyncifyStubs.xmlUCSIsCombiningHalfMarks(...e);
    }
    _xmlUCSIsCombiningHalfMarks.stub = !0, asyncifyStubs.xmlUCSIsCombiningHalfMarks = void 0;
    function _xmlUCSIsCombiningMarksforSymbols(...e) {
      return asyncifyStubs.xmlUCSIsCombiningMarksforSymbols(...e);
    }
    _xmlUCSIsCombiningMarksforSymbols.stub = !0, asyncifyStubs.xmlUCSIsCombiningMarksforSymbols = void 0;
    function _xmlUCSIsControlPictures(...e) {
      return asyncifyStubs.xmlUCSIsControlPictures(...e);
    }
    _xmlUCSIsControlPictures.stub = !0, asyncifyStubs.xmlUCSIsControlPictures = void 0;
    function _xmlUCSIsCurrencySymbols(...e) {
      return asyncifyStubs.xmlUCSIsCurrencySymbols(...e);
    }
    _xmlUCSIsCurrencySymbols.stub = !0, asyncifyStubs.xmlUCSIsCurrencySymbols = void 0;
    function _xmlUCSIsCypriotSyllabary(...e) {
      return asyncifyStubs.xmlUCSIsCypriotSyllabary(...e);
    }
    _xmlUCSIsCypriotSyllabary.stub = !0, asyncifyStubs.xmlUCSIsCypriotSyllabary = void 0;
    function _xmlUCSIsCyrillic(...e) {
      return asyncifyStubs.xmlUCSIsCyrillic(...e);
    }
    _xmlUCSIsCyrillic.stub = !0, asyncifyStubs.xmlUCSIsCyrillic = void 0;
    function _xmlUCSIsCyrillicSupplement(...e) {
      return asyncifyStubs.xmlUCSIsCyrillicSupplement(...e);
    }
    _xmlUCSIsCyrillicSupplement.stub = !0, asyncifyStubs.xmlUCSIsCyrillicSupplement = void 0;
    function _xmlUCSIsDeseret(...e) {
      return asyncifyStubs.xmlUCSIsDeseret(...e);
    }
    _xmlUCSIsDeseret.stub = !0, asyncifyStubs.xmlUCSIsDeseret = void 0;
    function _xmlUCSIsDevanagari(...e) {
      return asyncifyStubs.xmlUCSIsDevanagari(...e);
    }
    _xmlUCSIsDevanagari.stub = !0, asyncifyStubs.xmlUCSIsDevanagari = void 0;
    function _xmlUCSIsDingbats(...e) {
      return asyncifyStubs.xmlUCSIsDingbats(...e);
    }
    _xmlUCSIsDingbats.stub = !0, asyncifyStubs.xmlUCSIsDingbats = void 0;
    function _xmlUCSIsEnclosedAlphanumerics(...e) {
      return asyncifyStubs.xmlUCSIsEnclosedAlphanumerics(...e);
    }
    _xmlUCSIsEnclosedAlphanumerics.stub = !0, asyncifyStubs.xmlUCSIsEnclosedAlphanumerics = void 0;
    function _xmlUCSIsEnclosedCJKLettersandMonths(...e) {
      return asyncifyStubs.xmlUCSIsEnclosedCJKLettersandMonths(...e);
    }
    _xmlUCSIsEnclosedCJKLettersandMonths.stub = !0, asyncifyStubs.xmlUCSIsEnclosedCJKLettersandMonths = void 0;
    function _xmlUCSIsEthiopic(...e) {
      return asyncifyStubs.xmlUCSIsEthiopic(...e);
    }
    _xmlUCSIsEthiopic.stub = !0, asyncifyStubs.xmlUCSIsEthiopic = void 0;
    function _xmlUCSIsGeneralPunctuation(...e) {
      return asyncifyStubs.xmlUCSIsGeneralPunctuation(...e);
    }
    _xmlUCSIsGeneralPunctuation.stub = !0, asyncifyStubs.xmlUCSIsGeneralPunctuation = void 0;
    function _xmlUCSIsGeometricShapes(...e) {
      return asyncifyStubs.xmlUCSIsGeometricShapes(...e);
    }
    _xmlUCSIsGeometricShapes.stub = !0, asyncifyStubs.xmlUCSIsGeometricShapes = void 0;
    function _xmlUCSIsGeorgian(...e) {
      return asyncifyStubs.xmlUCSIsGeorgian(...e);
    }
    _xmlUCSIsGeorgian.stub = !0, asyncifyStubs.xmlUCSIsGeorgian = void 0;
    function _xmlUCSIsGothic(...e) {
      return asyncifyStubs.xmlUCSIsGothic(...e);
    }
    _xmlUCSIsGothic.stub = !0, asyncifyStubs.xmlUCSIsGothic = void 0;
    function _xmlUCSIsGreek(...e) {
      return asyncifyStubs.xmlUCSIsGreek(...e);
    }
    _xmlUCSIsGreek.stub = !0, asyncifyStubs.xmlUCSIsGreek = void 0;
    function _xmlUCSIsGreekExtended(...e) {
      return asyncifyStubs.xmlUCSIsGreekExtended(...e);
    }
    _xmlUCSIsGreekExtended.stub = !0, asyncifyStubs.xmlUCSIsGreekExtended = void 0;
    function _xmlUCSIsGreekandCoptic(...e) {
      return asyncifyStubs.xmlUCSIsGreekandCoptic(...e);
    }
    _xmlUCSIsGreekandCoptic.stub = !0, asyncifyStubs.xmlUCSIsGreekandCoptic = void 0;
    function _xmlUCSIsGujarati(...e) {
      return asyncifyStubs.xmlUCSIsGujarati(...e);
    }
    _xmlUCSIsGujarati.stub = !0, asyncifyStubs.xmlUCSIsGujarati = void 0;
    function _xmlUCSIsGurmukhi(...e) {
      return asyncifyStubs.xmlUCSIsGurmukhi(...e);
    }
    _xmlUCSIsGurmukhi.stub = !0, asyncifyStubs.xmlUCSIsGurmukhi = void 0;
    function _xmlUCSIsHalfwidthandFullwidthForms(...e) {
      return asyncifyStubs.xmlUCSIsHalfwidthandFullwidthForms(...e);
    }
    _xmlUCSIsHalfwidthandFullwidthForms.stub = !0, asyncifyStubs.xmlUCSIsHalfwidthandFullwidthForms = void 0;
    function _xmlUCSIsHangulCompatibilityJamo(...e) {
      return asyncifyStubs.xmlUCSIsHangulCompatibilityJamo(...e);
    }
    _xmlUCSIsHangulCompatibilityJamo.stub = !0, asyncifyStubs.xmlUCSIsHangulCompatibilityJamo = void 0;
    function _xmlUCSIsHangulJamo(...e) {
      return asyncifyStubs.xmlUCSIsHangulJamo(...e);
    }
    _xmlUCSIsHangulJamo.stub = !0, asyncifyStubs.xmlUCSIsHangulJamo = void 0;
    function _xmlUCSIsHangulSyllables(...e) {
      return asyncifyStubs.xmlUCSIsHangulSyllables(...e);
    }
    _xmlUCSIsHangulSyllables.stub = !0, asyncifyStubs.xmlUCSIsHangulSyllables = void 0;
    function _xmlUCSIsHanunoo(...e) {
      return asyncifyStubs.xmlUCSIsHanunoo(...e);
    }
    _xmlUCSIsHanunoo.stub = !0, asyncifyStubs.xmlUCSIsHanunoo = void 0;
    function _xmlUCSIsHebrew(...e) {
      return asyncifyStubs.xmlUCSIsHebrew(...e);
    }
    _xmlUCSIsHebrew.stub = !0, asyncifyStubs.xmlUCSIsHebrew = void 0;
    function _xmlUCSIsHighPrivateUseSurrogates(...e) {
      return asyncifyStubs.xmlUCSIsHighPrivateUseSurrogates(...e);
    }
    _xmlUCSIsHighPrivateUseSurrogates.stub = !0, asyncifyStubs.xmlUCSIsHighPrivateUseSurrogates = void 0;
    function _xmlUCSIsHighSurrogates(...e) {
      return asyncifyStubs.xmlUCSIsHighSurrogates(...e);
    }
    _xmlUCSIsHighSurrogates.stub = !0, asyncifyStubs.xmlUCSIsHighSurrogates = void 0;
    function _xmlUCSIsHiragana(...e) {
      return asyncifyStubs.xmlUCSIsHiragana(...e);
    }
    _xmlUCSIsHiragana.stub = !0, asyncifyStubs.xmlUCSIsHiragana = void 0;
    function _xmlUCSIsIPAExtensions(...e) {
      return asyncifyStubs.xmlUCSIsIPAExtensions(...e);
    }
    _xmlUCSIsIPAExtensions.stub = !0, asyncifyStubs.xmlUCSIsIPAExtensions = void 0;
    function _xmlUCSIsIdeographicDescriptionCharacters(...e) {
      return asyncifyStubs.xmlUCSIsIdeographicDescriptionCharacters(...e);
    }
    _xmlUCSIsIdeographicDescriptionCharacters.stub = !0, asyncifyStubs.xmlUCSIsIdeographicDescriptionCharacters = void 0;
    function _xmlUCSIsKanbun(...e) {
      return asyncifyStubs.xmlUCSIsKanbun(...e);
    }
    _xmlUCSIsKanbun.stub = !0, asyncifyStubs.xmlUCSIsKanbun = void 0;
    function _xmlUCSIsKangxiRadicals(...e) {
      return asyncifyStubs.xmlUCSIsKangxiRadicals(...e);
    }
    _xmlUCSIsKangxiRadicals.stub = !0, asyncifyStubs.xmlUCSIsKangxiRadicals = void 0;
    function _xmlUCSIsKannada(...e) {
      return asyncifyStubs.xmlUCSIsKannada(...e);
    }
    _xmlUCSIsKannada.stub = !0, asyncifyStubs.xmlUCSIsKannada = void 0;
    function _xmlUCSIsKatakana(...e) {
      return asyncifyStubs.xmlUCSIsKatakana(...e);
    }
    _xmlUCSIsKatakana.stub = !0, asyncifyStubs.xmlUCSIsKatakana = void 0;
    function _xmlUCSIsKatakanaPhoneticExtensions(...e) {
      return asyncifyStubs.xmlUCSIsKatakanaPhoneticExtensions(...e);
    }
    _xmlUCSIsKatakanaPhoneticExtensions.stub = !0, asyncifyStubs.xmlUCSIsKatakanaPhoneticExtensions = void 0;
    function _xmlUCSIsKhmer(...e) {
      return asyncifyStubs.xmlUCSIsKhmer(...e);
    }
    _xmlUCSIsKhmer.stub = !0, asyncifyStubs.xmlUCSIsKhmer = void 0;
    function _xmlUCSIsKhmerSymbols(...e) {
      return asyncifyStubs.xmlUCSIsKhmerSymbols(...e);
    }
    _xmlUCSIsKhmerSymbols.stub = !0, asyncifyStubs.xmlUCSIsKhmerSymbols = void 0;
    function _xmlUCSIsLao(...e) {
      return asyncifyStubs.xmlUCSIsLao(...e);
    }
    _xmlUCSIsLao.stub = !0, asyncifyStubs.xmlUCSIsLao = void 0;
    function _xmlUCSIsLatin1Supplement(...e) {
      return asyncifyStubs.xmlUCSIsLatin1Supplement(...e);
    }
    _xmlUCSIsLatin1Supplement.stub = !0, asyncifyStubs.xmlUCSIsLatin1Supplement = void 0;
    function _xmlUCSIsLatinExtendedA(...e) {
      return asyncifyStubs.xmlUCSIsLatinExtendedA(...e);
    }
    _xmlUCSIsLatinExtendedA.stub = !0, asyncifyStubs.xmlUCSIsLatinExtendedA = void 0;
    function _xmlUCSIsLatinExtendedAdditional(...e) {
      return asyncifyStubs.xmlUCSIsLatinExtendedAdditional(...e);
    }
    _xmlUCSIsLatinExtendedAdditional.stub = !0, asyncifyStubs.xmlUCSIsLatinExtendedAdditional = void 0;
    function _xmlUCSIsLatinExtendedB(...e) {
      return asyncifyStubs.xmlUCSIsLatinExtendedB(...e);
    }
    _xmlUCSIsLatinExtendedB.stub = !0, asyncifyStubs.xmlUCSIsLatinExtendedB = void 0;
    function _xmlUCSIsLetterlikeSymbols(...e) {
      return asyncifyStubs.xmlUCSIsLetterlikeSymbols(...e);
    }
    _xmlUCSIsLetterlikeSymbols.stub = !0, asyncifyStubs.xmlUCSIsLetterlikeSymbols = void 0;
    function _xmlUCSIsLimbu(...e) {
      return asyncifyStubs.xmlUCSIsLimbu(...e);
    }
    _xmlUCSIsLimbu.stub = !0, asyncifyStubs.xmlUCSIsLimbu = void 0;
    function _xmlUCSIsLinearBIdeograms(...e) {
      return asyncifyStubs.xmlUCSIsLinearBIdeograms(...e);
    }
    _xmlUCSIsLinearBIdeograms.stub = !0, asyncifyStubs.xmlUCSIsLinearBIdeograms = void 0;
    function _xmlUCSIsLinearBSyllabary(...e) {
      return asyncifyStubs.xmlUCSIsLinearBSyllabary(...e);
    }
    _xmlUCSIsLinearBSyllabary.stub = !0, asyncifyStubs.xmlUCSIsLinearBSyllabary = void 0;
    function _xmlUCSIsLowSurrogates(...e) {
      return asyncifyStubs.xmlUCSIsLowSurrogates(...e);
    }
    _xmlUCSIsLowSurrogates.stub = !0, asyncifyStubs.xmlUCSIsLowSurrogates = void 0;
    function _xmlUCSIsMalayalam(...e) {
      return asyncifyStubs.xmlUCSIsMalayalam(...e);
    }
    _xmlUCSIsMalayalam.stub = !0, asyncifyStubs.xmlUCSIsMalayalam = void 0;
    function _xmlUCSIsMathematicalAlphanumericSymbols(...e) {
      return asyncifyStubs.xmlUCSIsMathematicalAlphanumericSymbols(...e);
    }
    _xmlUCSIsMathematicalAlphanumericSymbols.stub = !0, asyncifyStubs.xmlUCSIsMathematicalAlphanumericSymbols = void 0;
    function _xmlUCSIsMathematicalOperators(...e) {
      return asyncifyStubs.xmlUCSIsMathematicalOperators(...e);
    }
    _xmlUCSIsMathematicalOperators.stub = !0, asyncifyStubs.xmlUCSIsMathematicalOperators = void 0;
    function _xmlUCSIsMiscellaneousMathematicalSymbolsA(...e) {
      return asyncifyStubs.xmlUCSIsMiscellaneousMathematicalSymbolsA(...e);
    }
    _xmlUCSIsMiscellaneousMathematicalSymbolsA.stub = !0, asyncifyStubs.xmlUCSIsMiscellaneousMathematicalSymbolsA = void 0;
    function _xmlUCSIsMiscellaneousMathematicalSymbolsB(...e) {
      return asyncifyStubs.xmlUCSIsMiscellaneousMathematicalSymbolsB(...e);
    }
    _xmlUCSIsMiscellaneousMathematicalSymbolsB.stub = !0, asyncifyStubs.xmlUCSIsMiscellaneousMathematicalSymbolsB = void 0;
    function _xmlUCSIsMiscellaneousSymbols(...e) {
      return asyncifyStubs.xmlUCSIsMiscellaneousSymbols(...e);
    }
    _xmlUCSIsMiscellaneousSymbols.stub = !0, asyncifyStubs.xmlUCSIsMiscellaneousSymbols = void 0;
    function _xmlUCSIsMiscellaneousSymbolsandArrows(...e) {
      return asyncifyStubs.xmlUCSIsMiscellaneousSymbolsandArrows(...e);
    }
    _xmlUCSIsMiscellaneousSymbolsandArrows.stub = !0, asyncifyStubs.xmlUCSIsMiscellaneousSymbolsandArrows = void 0;
    function _xmlUCSIsMiscellaneousTechnical(...e) {
      return asyncifyStubs.xmlUCSIsMiscellaneousTechnical(...e);
    }
    _xmlUCSIsMiscellaneousTechnical.stub = !0, asyncifyStubs.xmlUCSIsMiscellaneousTechnical = void 0;
    function _xmlUCSIsMongolian(...e) {
      return asyncifyStubs.xmlUCSIsMongolian(...e);
    }
    _xmlUCSIsMongolian.stub = !0, asyncifyStubs.xmlUCSIsMongolian = void 0;
    function _xmlUCSIsMusicalSymbols(...e) {
      return asyncifyStubs.xmlUCSIsMusicalSymbols(...e);
    }
    _xmlUCSIsMusicalSymbols.stub = !0, asyncifyStubs.xmlUCSIsMusicalSymbols = void 0;
    function _xmlUCSIsMyanmar(...e) {
      return asyncifyStubs.xmlUCSIsMyanmar(...e);
    }
    _xmlUCSIsMyanmar.stub = !0, asyncifyStubs.xmlUCSIsMyanmar = void 0;
    function _xmlUCSIsNumberForms(...e) {
      return asyncifyStubs.xmlUCSIsNumberForms(...e);
    }
    _xmlUCSIsNumberForms.stub = !0, asyncifyStubs.xmlUCSIsNumberForms = void 0;
    function _xmlUCSIsOgham(...e) {
      return asyncifyStubs.xmlUCSIsOgham(...e);
    }
    _xmlUCSIsOgham.stub = !0, asyncifyStubs.xmlUCSIsOgham = void 0;
    function _xmlUCSIsOldItalic(...e) {
      return asyncifyStubs.xmlUCSIsOldItalic(...e);
    }
    _xmlUCSIsOldItalic.stub = !0, asyncifyStubs.xmlUCSIsOldItalic = void 0;
    function _xmlUCSIsOpticalCharacterRecognition(...e) {
      return asyncifyStubs.xmlUCSIsOpticalCharacterRecognition(...e);
    }
    _xmlUCSIsOpticalCharacterRecognition.stub = !0, asyncifyStubs.xmlUCSIsOpticalCharacterRecognition = void 0;
    function _xmlUCSIsOriya(...e) {
      return asyncifyStubs.xmlUCSIsOriya(...e);
    }
    _xmlUCSIsOriya.stub = !0, asyncifyStubs.xmlUCSIsOriya = void 0;
    function _xmlUCSIsOsmanya(...e) {
      return asyncifyStubs.xmlUCSIsOsmanya(...e);
    }
    _xmlUCSIsOsmanya.stub = !0, asyncifyStubs.xmlUCSIsOsmanya = void 0;
    function _xmlUCSIsPhoneticExtensions(...e) {
      return asyncifyStubs.xmlUCSIsPhoneticExtensions(...e);
    }
    _xmlUCSIsPhoneticExtensions.stub = !0, asyncifyStubs.xmlUCSIsPhoneticExtensions = void 0;
    function _xmlUCSIsPrivateUse(...e) {
      return asyncifyStubs.xmlUCSIsPrivateUse(...e);
    }
    _xmlUCSIsPrivateUse.stub = !0, asyncifyStubs.xmlUCSIsPrivateUse = void 0;
    function _xmlUCSIsPrivateUseArea(...e) {
      return asyncifyStubs.xmlUCSIsPrivateUseArea(...e);
    }
    _xmlUCSIsPrivateUseArea.stub = !0, asyncifyStubs.xmlUCSIsPrivateUseArea = void 0;
    function _xmlUCSIsRunic(...e) {
      return asyncifyStubs.xmlUCSIsRunic(...e);
    }
    _xmlUCSIsRunic.stub = !0, asyncifyStubs.xmlUCSIsRunic = void 0;
    function _xmlUCSIsShavian(...e) {
      return asyncifyStubs.xmlUCSIsShavian(...e);
    }
    _xmlUCSIsShavian.stub = !0, asyncifyStubs.xmlUCSIsShavian = void 0;
    function _xmlUCSIsSinhala(...e) {
      return asyncifyStubs.xmlUCSIsSinhala(...e);
    }
    _xmlUCSIsSinhala.stub = !0, asyncifyStubs.xmlUCSIsSinhala = void 0;
    function _xmlUCSIsSmallFormVariants(...e) {
      return asyncifyStubs.xmlUCSIsSmallFormVariants(...e);
    }
    _xmlUCSIsSmallFormVariants.stub = !0, asyncifyStubs.xmlUCSIsSmallFormVariants = void 0;
    function _xmlUCSIsSpacingModifierLetters(...e) {
      return asyncifyStubs.xmlUCSIsSpacingModifierLetters(...e);
    }
    _xmlUCSIsSpacingModifierLetters.stub = !0, asyncifyStubs.xmlUCSIsSpacingModifierLetters = void 0;
    function _xmlUCSIsSpecials(...e) {
      return asyncifyStubs.xmlUCSIsSpecials(...e);
    }
    _xmlUCSIsSpecials.stub = !0, asyncifyStubs.xmlUCSIsSpecials = void 0;
    function _xmlUCSIsSuperscriptsandSubscripts(...e) {
      return asyncifyStubs.xmlUCSIsSuperscriptsandSubscripts(...e);
    }
    _xmlUCSIsSuperscriptsandSubscripts.stub = !0, asyncifyStubs.xmlUCSIsSuperscriptsandSubscripts = void 0;
    function _xmlUCSIsSupplementalArrowsA(...e) {
      return asyncifyStubs.xmlUCSIsSupplementalArrowsA(...e);
    }
    _xmlUCSIsSupplementalArrowsA.stub = !0, asyncifyStubs.xmlUCSIsSupplementalArrowsA = void 0;
    function _xmlUCSIsSupplementalArrowsB(...e) {
      return asyncifyStubs.xmlUCSIsSupplementalArrowsB(...e);
    }
    _xmlUCSIsSupplementalArrowsB.stub = !0, asyncifyStubs.xmlUCSIsSupplementalArrowsB = void 0;
    function _xmlUCSIsSupplementalMathematicalOperators(...e) {
      return asyncifyStubs.xmlUCSIsSupplementalMathematicalOperators(...e);
    }
    _xmlUCSIsSupplementalMathematicalOperators.stub = !0, asyncifyStubs.xmlUCSIsSupplementalMathematicalOperators = void 0;
    function _xmlUCSIsSupplementaryPrivateUseAreaA(...e) {
      return asyncifyStubs.xmlUCSIsSupplementaryPrivateUseAreaA(...e);
    }
    _xmlUCSIsSupplementaryPrivateUseAreaA.stub = !0, asyncifyStubs.xmlUCSIsSupplementaryPrivateUseAreaA = void 0;
    function _xmlUCSIsSupplementaryPrivateUseAreaB(...e) {
      return asyncifyStubs.xmlUCSIsSupplementaryPrivateUseAreaB(...e);
    }
    _xmlUCSIsSupplementaryPrivateUseAreaB.stub = !0, asyncifyStubs.xmlUCSIsSupplementaryPrivateUseAreaB = void 0;
    function _xmlUCSIsSyriac(...e) {
      return asyncifyStubs.xmlUCSIsSyriac(...e);
    }
    _xmlUCSIsSyriac.stub = !0, asyncifyStubs.xmlUCSIsSyriac = void 0;
    function _xmlUCSIsTagalog(...e) {
      return asyncifyStubs.xmlUCSIsTagalog(...e);
    }
    _xmlUCSIsTagalog.stub = !0, asyncifyStubs.xmlUCSIsTagalog = void 0;
    function _xmlUCSIsTagbanwa(...e) {
      return asyncifyStubs.xmlUCSIsTagbanwa(...e);
    }
    _xmlUCSIsTagbanwa.stub = !0, asyncifyStubs.xmlUCSIsTagbanwa = void 0;
    function _xmlUCSIsTags(...e) {
      return asyncifyStubs.xmlUCSIsTags(...e);
    }
    _xmlUCSIsTags.stub = !0, asyncifyStubs.xmlUCSIsTags = void 0;
    function _xmlUCSIsTaiLe(...e) {
      return asyncifyStubs.xmlUCSIsTaiLe(...e);
    }
    _xmlUCSIsTaiLe.stub = !0, asyncifyStubs.xmlUCSIsTaiLe = void 0;
    function _xmlUCSIsTaiXuanJingSymbols(...e) {
      return asyncifyStubs.xmlUCSIsTaiXuanJingSymbols(...e);
    }
    _xmlUCSIsTaiXuanJingSymbols.stub = !0, asyncifyStubs.xmlUCSIsTaiXuanJingSymbols = void 0;
    function _xmlUCSIsTamil(...e) {
      return asyncifyStubs.xmlUCSIsTamil(...e);
    }
    _xmlUCSIsTamil.stub = !0, asyncifyStubs.xmlUCSIsTamil = void 0;
    function _xmlUCSIsTelugu(...e) {
      return asyncifyStubs.xmlUCSIsTelugu(...e);
    }
    _xmlUCSIsTelugu.stub = !0, asyncifyStubs.xmlUCSIsTelugu = void 0;
    function _xmlUCSIsThaana(...e) {
      return asyncifyStubs.xmlUCSIsThaana(...e);
    }
    _xmlUCSIsThaana.stub = !0, asyncifyStubs.xmlUCSIsThaana = void 0;
    function _xmlUCSIsThai(...e) {
      return asyncifyStubs.xmlUCSIsThai(...e);
    }
    _xmlUCSIsThai.stub = !0, asyncifyStubs.xmlUCSIsThai = void 0;
    function _xmlUCSIsTibetan(...e) {
      return asyncifyStubs.xmlUCSIsTibetan(...e);
    }
    _xmlUCSIsTibetan.stub = !0, asyncifyStubs.xmlUCSIsTibetan = void 0;
    function _xmlUCSIsUgaritic(...e) {
      return asyncifyStubs.xmlUCSIsUgaritic(...e);
    }
    _xmlUCSIsUgaritic.stub = !0, asyncifyStubs.xmlUCSIsUgaritic = void 0;
    function _xmlUCSIsUnifiedCanadianAboriginalSyllabics(...e) {
      return asyncifyStubs.xmlUCSIsUnifiedCanadianAboriginalSyllabics(...e);
    }
    _xmlUCSIsUnifiedCanadianAboriginalSyllabics.stub = !0, asyncifyStubs.xmlUCSIsUnifiedCanadianAboriginalSyllabics = void 0;
    function _xmlUCSIsVariationSelectors(...e) {
      return asyncifyStubs.xmlUCSIsVariationSelectors(...e);
    }
    _xmlUCSIsVariationSelectors.stub = !0, asyncifyStubs.xmlUCSIsVariationSelectors = void 0;
    function _xmlUCSIsVariationSelectorsSupplement(...e) {
      return asyncifyStubs.xmlUCSIsVariationSelectorsSupplement(...e);
    }
    _xmlUCSIsVariationSelectorsSupplement.stub = !0, asyncifyStubs.xmlUCSIsVariationSelectorsSupplement = void 0;
    function _xmlUCSIsYiRadicals(...e) {
      return asyncifyStubs.xmlUCSIsYiRadicals(...e);
    }
    _xmlUCSIsYiRadicals.stub = !0, asyncifyStubs.xmlUCSIsYiRadicals = void 0;
    function _xmlUCSIsYiSyllables(...e) {
      return asyncifyStubs.xmlUCSIsYiSyllables(...e);
    }
    _xmlUCSIsYiSyllables.stub = !0, asyncifyStubs.xmlUCSIsYiSyllables = void 0;
    function _xmlUCSIsYijingHexagramSymbols(...e) {
      return asyncifyStubs.xmlUCSIsYijingHexagramSymbols(...e);
    }
    _xmlUCSIsYijingHexagramSymbols.stub = !0, asyncifyStubs.xmlUCSIsYijingHexagramSymbols = void 0;
    function _xmlURIUnescapeString(...e) {
      return asyncifyStubs.xmlURIUnescapeString(...e);
    }
    _xmlURIUnescapeString.stub = !0, asyncifyStubs.xmlURIUnescapeString = void 0;
    function _xmlUnlinkNode(...e) {
      return asyncifyStubs.xmlUnlinkNode(...e);
    }
    _xmlUnlinkNode.stub = !0, asyncifyStubs.xmlUnlinkNode = void 0;
    function _xmlXPathBooleanFunction(...e) {
      return asyncifyStubs.xmlXPathBooleanFunction(...e);
    }
    _xmlXPathBooleanFunction.stub = !0, asyncifyStubs.xmlXPathBooleanFunction = void 0;
    function _xmlXPathCeilingFunction(...e) {
      return asyncifyStubs.xmlXPathCeilingFunction(...e);
    }
    _xmlXPathCeilingFunction.stub = !0, asyncifyStubs.xmlXPathCeilingFunction = void 0;
    function _xmlXPathConcatFunction(...e) {
      return asyncifyStubs.xmlXPathConcatFunction(...e);
    }
    _xmlXPathConcatFunction.stub = !0, asyncifyStubs.xmlXPathConcatFunction = void 0;
    function _xmlXPathContainsFunction(...e) {
      return asyncifyStubs.xmlXPathContainsFunction(...e);
    }
    _xmlXPathContainsFunction.stub = !0, asyncifyStubs.xmlXPathContainsFunction = void 0;
    function _xmlXPathCountFunction(...e) {
      return asyncifyStubs.xmlXPathCountFunction(...e);
    }
    _xmlXPathCountFunction.stub = !0, asyncifyStubs.xmlXPathCountFunction = void 0;
    function _xmlXPathFalseFunction(...e) {
      return asyncifyStubs.xmlXPathFalseFunction(...e);
    }
    _xmlXPathFalseFunction.stub = !0, asyncifyStubs.xmlXPathFalseFunction = void 0;
    function _xmlXPathFloorFunction(...e) {
      return asyncifyStubs.xmlXPathFloorFunction(...e);
    }
    _xmlXPathFloorFunction.stub = !0, asyncifyStubs.xmlXPathFloorFunction = void 0;
    function _xmlXPathIdFunction(...e) {
      return asyncifyStubs.xmlXPathIdFunction(...e);
    }
    _xmlXPathIdFunction.stub = !0, asyncifyStubs.xmlXPathIdFunction = void 0;
    function _xmlXPathLangFunction(...e) {
      return asyncifyStubs.xmlXPathLangFunction(...e);
    }
    _xmlXPathLangFunction.stub = !0, asyncifyStubs.xmlXPathLangFunction = void 0;
    function _xmlXPathLastFunction(...e) {
      return asyncifyStubs.xmlXPathLastFunction(...e);
    }
    _xmlXPathLastFunction.stub = !0, asyncifyStubs.xmlXPathLastFunction = void 0;
    function _xmlXPathLocalNameFunction(...e) {
      return asyncifyStubs.xmlXPathLocalNameFunction(...e);
    }
    _xmlXPathLocalNameFunction.stub = !0, asyncifyStubs.xmlXPathLocalNameFunction = void 0;
    function _xmlXPathNAN(...e) {
      return asyncifyStubs.xmlXPathNAN(...e);
    }
    _xmlXPathNAN.stub = !0, asyncifyStubs.xmlXPathNAN = void 0;
    function _xmlXPathNINF(...e) {
      return asyncifyStubs.xmlXPathNINF(...e);
    }
    _xmlXPathNINF.stub = !0, asyncifyStubs.xmlXPathNINF = void 0;
    function _xmlXPathNamespaceURIFunction(...e) {
      return asyncifyStubs.xmlXPathNamespaceURIFunction(...e);
    }
    _xmlXPathNamespaceURIFunction.stub = !0, asyncifyStubs.xmlXPathNamespaceURIFunction = void 0;
    function _xmlXPathNextAncestor(...e) {
      return asyncifyStubs.xmlXPathNextAncestor(...e);
    }
    _xmlXPathNextAncestor.stub = !0, asyncifyStubs.xmlXPathNextAncestor = void 0;
    function _xmlXPathNextAncestorOrSelf(...e) {
      return asyncifyStubs.xmlXPathNextAncestorOrSelf(...e);
    }
    _xmlXPathNextAncestorOrSelf.stub = !0, asyncifyStubs.xmlXPathNextAncestorOrSelf = void 0;
    function _xmlXPathNextAttribute(...e) {
      return asyncifyStubs.xmlXPathNextAttribute(...e);
    }
    _xmlXPathNextAttribute.stub = !0, asyncifyStubs.xmlXPathNextAttribute = void 0;
    function _xmlXPathNextChild(...e) {
      return asyncifyStubs.xmlXPathNextChild(...e);
    }
    _xmlXPathNextChild.stub = !0, asyncifyStubs.xmlXPathNextChild = void 0;
    function _xmlXPathNextDescendant(...e) {
      return asyncifyStubs.xmlXPathNextDescendant(...e);
    }
    _xmlXPathNextDescendant.stub = !0, asyncifyStubs.xmlXPathNextDescendant = void 0;
    function _xmlXPathNextDescendantOrSelf(...e) {
      return asyncifyStubs.xmlXPathNextDescendantOrSelf(...e);
    }
    _xmlXPathNextDescendantOrSelf.stub = !0, asyncifyStubs.xmlXPathNextDescendantOrSelf = void 0;
    function _xmlXPathNextFollowing(...e) {
      return asyncifyStubs.xmlXPathNextFollowing(...e);
    }
    _xmlXPathNextFollowing.stub = !0, asyncifyStubs.xmlXPathNextFollowing = void 0;
    function _xmlXPathNextFollowingSibling(...e) {
      return asyncifyStubs.xmlXPathNextFollowingSibling(...e);
    }
    _xmlXPathNextFollowingSibling.stub = !0, asyncifyStubs.xmlXPathNextFollowingSibling = void 0;
    function _xmlXPathNextNamespace(...e) {
      return asyncifyStubs.xmlXPathNextNamespace(...e);
    }
    _xmlXPathNextNamespace.stub = !0, asyncifyStubs.xmlXPathNextNamespace = void 0;
    function _xmlXPathNextParent(...e) {
      return asyncifyStubs.xmlXPathNextParent(...e);
    }
    _xmlXPathNextParent.stub = !0, asyncifyStubs.xmlXPathNextParent = void 0;
    function _xmlXPathNextPrecedingSibling(...e) {
      return asyncifyStubs.xmlXPathNextPrecedingSibling(...e);
    }
    _xmlXPathNextPrecedingSibling.stub = !0, asyncifyStubs.xmlXPathNextPrecedingSibling = void 0;
    function _xmlXPathNextSelf(...e) {
      return asyncifyStubs.xmlXPathNextSelf(...e);
    }
    _xmlXPathNextSelf.stub = !0, asyncifyStubs.xmlXPathNextSelf = void 0;
    function _xmlXPathNormalizeFunction(...e) {
      return asyncifyStubs.xmlXPathNormalizeFunction(...e);
    }
    _xmlXPathNormalizeFunction.stub = !0, asyncifyStubs.xmlXPathNormalizeFunction = void 0;
    function _xmlXPathNotFunction(...e) {
      return asyncifyStubs.xmlXPathNotFunction(...e);
    }
    _xmlXPathNotFunction.stub = !0, asyncifyStubs.xmlXPathNotFunction = void 0;
    function _xmlXPathNumberFunction(...e) {
      return asyncifyStubs.xmlXPathNumberFunction(...e);
    }
    _xmlXPathNumberFunction.stub = !0, asyncifyStubs.xmlXPathNumberFunction = void 0;
    function _xmlXPathPINF(...e) {
      return asyncifyStubs.xmlXPathPINF(...e);
    }
    _xmlXPathPINF.stub = !0, asyncifyStubs.xmlXPathPINF = void 0;
    function _xmlXPathPositionFunction(...e) {
      return asyncifyStubs.xmlXPathPositionFunction(...e);
    }
    _xmlXPathPositionFunction.stub = !0, asyncifyStubs.xmlXPathPositionFunction = void 0;
    function _xmlXPathRoundFunction(...e) {
      return asyncifyStubs.xmlXPathRoundFunction(...e);
    }
    _xmlXPathRoundFunction.stub = !0, asyncifyStubs.xmlXPathRoundFunction = void 0;
    function _xmlXPathStartsWithFunction(...e) {
      return asyncifyStubs.xmlXPathStartsWithFunction(...e);
    }
    _xmlXPathStartsWithFunction.stub = !0, asyncifyStubs.xmlXPathStartsWithFunction = void 0;
    function _xmlXPathStringFunction(...e) {
      return asyncifyStubs.xmlXPathStringFunction(...e);
    }
    _xmlXPathStringFunction.stub = !0, asyncifyStubs.xmlXPathStringFunction = void 0;
    function _xmlXPathStringLengthFunction(...e) {
      return asyncifyStubs.xmlXPathStringLengthFunction(...e);
    }
    _xmlXPathStringLengthFunction.stub = !0, asyncifyStubs.xmlXPathStringLengthFunction = void 0;
    function _xmlXPathSubstringAfterFunction(...e) {
      return asyncifyStubs.xmlXPathSubstringAfterFunction(...e);
    }
    _xmlXPathSubstringAfterFunction.stub = !0, asyncifyStubs.xmlXPathSubstringAfterFunction = void 0;
    function _xmlXPathSubstringBeforeFunction(...e) {
      return asyncifyStubs.xmlXPathSubstringBeforeFunction(...e);
    }
    _xmlXPathSubstringBeforeFunction.stub = !0, asyncifyStubs.xmlXPathSubstringBeforeFunction = void 0;
    function _xmlXPathSubstringFunction(...e) {
      return asyncifyStubs.xmlXPathSubstringFunction(...e);
    }
    _xmlXPathSubstringFunction.stub = !0, asyncifyStubs.xmlXPathSubstringFunction = void 0;
    function _xmlXPathSumFunction(...e) {
      return asyncifyStubs.xmlXPathSumFunction(...e);
    }
    _xmlXPathSumFunction.stub = !0, asyncifyStubs.xmlXPathSumFunction = void 0;
    function _xmlXPathTranslateFunction(...e) {
      return asyncifyStubs.xmlXPathTranslateFunction(...e);
    }
    _xmlXPathTranslateFunction.stub = !0, asyncifyStubs.xmlXPathTranslateFunction = void 0;
    function _xmlXPathTrueFunction(...e) {
      return asyncifyStubs.xmlXPathTrueFunction(...e);
    }
    _xmlXPathTrueFunction.stub = !0, asyncifyStubs.xmlXPathTrueFunction = void 0;
    var runAndAbortIfError = (e) => {
      try {
        return e();
      } catch (t) {
        abort(t);
      }
    }, Asyncify = { instrumentWasmImports(e) {
      var t = /^(invoke_.*|__asyncjs__.*)$/;
      for (let [r, n] of Object.entries(e))
        typeof n == "function" && (n.isAsync || t.test(r));
    }, instrumentWasmExports(e) {
      var t = {};
      for (let [r, n] of Object.entries(e))
        typeof n == "function" ? (t[r] = (...a) => {
          Asyncify.exportCallStack.push(r);
          try {
            return n(...a);
          } finally {
            ABORT || (Asyncify.exportCallStack.pop(), Asyncify.maybeStopUnwind());
          }
        }, t[r].orig = n) : t[r] = n;
      return t;
    }, State: { Normal: 0, Unwinding: 1, Rewinding: 2, Disabled: 3 }, state: 0, StackSize: 4096, currData: null, handleSleepReturnValue: 0, exportCallStack: [], callStackNameToId: {}, callStackIdToName: {}, callStackId: 0, asyncPromiseHandlers: null, sleepCallbacks: [], getCallStackId(e) {
      var t = Asyncify.callStackNameToId[e];
      return t === void 0 && (t = Asyncify.callStackId++, Asyncify.callStackNameToId[e] = t, Asyncify.callStackIdToName[t] = e), t;
    }, maybeStopUnwind() {
      Asyncify.currData && Asyncify.state === Asyncify.State.Unwinding && Asyncify.exportCallStack.length === 0 && (Asyncify.state = Asyncify.State.Normal, runtimeKeepalivePush(), runAndAbortIfError(_asyncify_stop_unwind), typeof Fibers < "u" && Fibers.trampoline());
    }, whenDone() {
      return new Promise((e, t) => {
        Asyncify.asyncPromiseHandlers = { resolve: e, reject: t };
      });
    }, allocateData() {
      var e = _malloc(12 + Asyncify.StackSize);
      return Asyncify.setDataHeader(e, e + 12, Asyncify.StackSize), Asyncify.setDataRewindFunc(e), e;
    }, setDataHeader(e, t, r) {
      HEAPU32[e >>> 2 >>> 0] = t, HEAPU32[e + 4 >>> 2 >>> 0] = t + r;
    }, setDataRewindFunc(e) {
      var t = Asyncify.exportCallStack[0], r = Asyncify.getCallStackId(t);
      HEAP32[e + 8 >>> 2 >>> 0] = r;
    }, getDataRewindFuncName(e) {
      var t = HEAP32[e + 8 >>> 2 >>> 0], r = Asyncify.callStackIdToName[t];
      return r;
    }, getDataRewindFunc__deps: ["$resolveGlobalSymbol"], getDataRewindFunc(e) {
      var t = wasmExports[e];
      return t || (t = resolveGlobalSymbol(e, !1).sym), t;
    }, doRewind(e) {
      var t = Asyncify.getDataRewindFuncName(e), r = Asyncify.getDataRewindFunc(t);
      return runtimeKeepalivePop(), r();
    }, handleSleep(e) {
      if (!ABORT) {
        if (Asyncify.state === Asyncify.State.Normal) {
          var t = !1, r = !1;
          e((n = 0) => {
            if (!ABORT && (Asyncify.handleSleepReturnValue = n, t = !0, !!r)) {
              Asyncify.state = Asyncify.State.Rewinding, runAndAbortIfError(() => _asyncify_start_rewind(Asyncify.currData)), typeof Browser < "u" && Browser.mainLoop.func && Browser.mainLoop.resume();
              var a, o = !1;
              try {
                a = Asyncify.doRewind(Asyncify.currData);
              } catch (u) {
                a = u, o = !0;
              }
              var l = !1;
              if (!Asyncify.currData) {
                var c = Asyncify.asyncPromiseHandlers;
                c && (Asyncify.asyncPromiseHandlers = null, (o ? c.reject : c.resolve)(a), l = !0);
              }
              if (o && !l)
                throw a;
            }
          }), r = !0, t || (Asyncify.state = Asyncify.State.Unwinding, Asyncify.currData = Asyncify.allocateData(), typeof Browser < "u" && Browser.mainLoop.func && Browser.mainLoop.pause(), runAndAbortIfError(() => _asyncify_start_unwind(Asyncify.currData)));
        } else Asyncify.state === Asyncify.State.Rewinding ? (Asyncify.state = Asyncify.State.Normal, runAndAbortIfError(_asyncify_stop_rewind), _free(Asyncify.currData), Asyncify.currData = null, Asyncify.sleepCallbacks.forEach(callUserCallback)) : abort(`invalid state: ${Asyncify.state}`);
        return Asyncify.handleSleepReturnValue;
      }
    }, handleAsync(e) {
      return Asyncify.handleSleep((t) => {
        e().then(t);
      });
    } }, getCFunc = (e) => {
      var t = Module["_" + e];
      return t;
    }, writeArrayToMemory = (e, t) => {
      HEAP8.set(e, t >>> 0);
    }, ccall = (e, t, r, n, a) => {
      var o = { string: (g) => {
        var y = 0;
        return g != null && g !== 0 && (y = stringToUTF8OnStack(g)), y;
      }, array: (g) => {
        var y = stackAlloc(g.length);
        return writeArrayToMemory(g, y), y;
      } };
      function l(g) {
        return t === "string" ? UTF8ToString(g) : t === "boolean" ? !!g : g;
      }
      var c = getCFunc(e), u = [], _ = 0;
      if (n)
        for (var d = 0; d < n.length; d++) {
          var f = o[r[d]];
          f ? (_ === 0 && (_ = stackSave()), u[d] = f(n[d])) : u[d] = n[d];
        }
      var p = Asyncify.currData, m = c(...u);
      function S(g) {
        return runtimeKeepalivePop(), _ !== 0 && stackRestore(_), l(g);
      }
      var h = a == null ? void 0 : a.async;
      return runtimeKeepalivePush(), Asyncify.currData != p ? Asyncify.whenDone().then(S) : (m = S(m), h ? Promise.resolve(m) : m);
    }, FS_createPath = FS.createPath, FS_unlink = (e) => FS.unlink(e), FS_createLazyFile = FS.createLazyFile, FS_createDevice = FS.createDevice, convertI32PairToI53 = (e, t) => (e >>> 0) + t * 4294967296, convertU32PairToI53 = (e, t) => (e >>> 0) + (t >>> 0) * 4294967296, _stackAlloc = stackAlloc, _stackSave = stackSave, _stackRestore = stackSave;
    function _emscripten_notify_memory_growth(e) {
      updateMemoryViews();
    }
    _emscripten_notify_memory_growth.sig = "vp";
    var _endprotoent = () => {
    };
    _endprotoent.sig = "v";
    function _getprotoent(e) {
      if (_setprotoent.index === Protocols.list.length)
        return 0;
      var t = Protocols.list[_setprotoent.index++];
      return t;
    }
    _getprotoent.sig = "p";
    function _emscripten_run_script(ptr) {
      ptr >>>= 0, eval(UTF8ToString(ptr));
    }
    _emscripten_run_script.sig = "vp";
    function _emscripten_run_script_int(ptr) {
      return ptr >>>= 0, eval(UTF8ToString(ptr)) | 0;
    }
    _emscripten_run_script_int.sig = "ip";
    function _emscripten_run_script_string(ptr) {
      ptr >>>= 0;
      var s = eval(UTF8ToString(ptr));
      if (s == null)
        return 0;
      s += "";
      var me = _emscripten_run_script_string, len = lengthBytesUTF8(s);
      return (!me.bufferSize || me.bufferSize < len + 1) && (me.bufferSize && _free(me.buffer), me.bufferSize = len + 1, me.buffer = _malloc(me.bufferSize)), stringToUTF8(s, me.buffer, me.bufferSize), me.buffer;
    }
    _emscripten_run_script_string.sig = "pp";
    var _emscripten_random = () => Math.random();
    _emscripten_random.sig = "f";
    var warnOnce = (e) => {
      warnOnce.shown || (warnOnce.shown = {}), warnOnce.shown[e] || (warnOnce.shown[e] = 1, err(e));
    };
    function jsStackTrace() {
      return new Error().stack.toString();
    }
    function getCallstack(e) {
      var t = jsStackTrace(), r = t.lastIndexOf("_emscripten_log"), n = t.lastIndexOf("_emscripten_get_callstack"), a = t.indexOf(`
`, Math.max(r, n)) + 1;
      t = t.slice(a), e & 8 && typeof emscripten_source_map > "u" && (warnOnce('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'), e ^= 8, e |= 16);
      var o = t.split(`
`);
      t = "";
      var l = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"), c = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"), u = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
      for (var _ in o) {
        var d = o[_], f = "", p = "", m = 0, S = 0, h = u.exec(d);
        if (h && h.length == 5)
          f = h[1], p = h[2], m = h[3], S = h[4];
        else if (h = l.exec(d) || c.exec(d), h && h.length >= 4)
          f = h[1], p = h[2], m = h[3], S = h[4] | 0;
        else {
          t += d + `
`;
          continue;
        }
        var g = !1;
        if (e & 8) {
          var y = emscripten_source_map.originalPositionFor({ line: m, column: S });
          g = y == null ? void 0 : y.source, g && (e & 64 && (y.source = y.source.substring(y.source.replace(/\\/g, "/").lastIndexOf("/") + 1)), t += `    at ${f} (${y.source}:${y.line}:${y.column})
`);
        }
        (e & 16 || !g) && (e & 64 && (p = p.substring(p.replace(/\\/g, "/").lastIndexOf("/") + 1)), t += (g ? `     = ${f}` : `    at ${f}`) + ` (${p}:${m}:${S})
`);
      }
      return t = t.replace(/\s+$/, ""), t;
    }
    var emscriptenLog = (e, t) => {
      e & 24 && (t = t.replace(/\s+$/, ""), t += (t.length > 0 ? `
` : "") + getCallstack(e)), e & 1 ? e & 4 ? console.error(t) : e & 2 ? console.warn(t) : e & 512 ? console.info(t) : e & 256 ? console.debug(t) : console.log(t) : e & 6 ? err(t) : out(t);
    }, reallyNegative = (e) => e < 0 || e === 0 && 1 / e === -1 / 0, reSign = (e, t) => {
      if (e <= 0)
        return e;
      var r = t <= 32 ? Math.abs(1 << t - 1) : Math.pow(2, t - 1);
      return e >= r && (t <= 32 || e > r) && (e = -2 * r + e), e;
    }, unSign = (e, t) => e >= 0 ? e : t <= 32 ? 2 * Math.abs(1 << t - 1) + e : Math.pow(2, t) + e, strLen = (e) => {
      for (var t = e; HEAPU8[t >>> 0]; ) ++t;
      return t - e;
    }, formatString = (e, t) => {
      var r = e, n = t;
      function a(N, O) {
        return (O === "double" || O === "i64") && N & 7 && (N += 4), N;
      }
      function o(N) {
        var O;
        return n = a(n, N), N === "double" ? (O = HEAPF64[n >>> 3 >>> 0], n += 8) : N == "i64" ? (O = [HEAP32[n >>> 2 >>> 0], HEAP32[n + 4 >>> 2 >>> 0]], n += 8) : (N = "i32", O = HEAP32[n >>> 2 >>> 0], n += 4), O;
      }
      for (var l = [], c, u, _; ; ) {
        var d = r;
        if (c = HEAP8[r >>> 0], c === 0) break;
        if (u = HEAP8[r + 1 >>> 0], c == 37) {
          var f = !1, p = !1, m = !1, S = !1, h = !1;
          e: for (; ; ) {
            switch (u) {
              case 43:
                f = !0;
                break;
              case 45:
                p = !0;
                break;
              case 35:
                m = !0;
                break;
              case 48:
                if (S)
                  break e;
                S = !0;
                break;
              case 32:
                h = !0;
                break;
              default:
                break e;
            }
            r++, u = HEAP8[r + 1 >>> 0];
          }
          var g = 0;
          if (u == 42)
            g = o("i32"), r++, u = HEAP8[r + 1 >>> 0];
          else
            for (; u >= 48 && u <= 57; )
              g = g * 10 + (u - 48), r++, u = HEAP8[r + 1 >>> 0];
          var y = !1, b = -1;
          if (u == 46) {
            if (b = 0, y = !0, r++, u = HEAP8[r + 1 >>> 0], u == 42)
              b = o("i32"), r++;
            else
              for (; ; ) {
                var C = HEAP8[r + 1 >>> 0];
                if (C < 48 || C > 57) break;
                b = b * 10 + (C - 48), r++;
              }
            u = HEAP8[r + 1 >>> 0];
          }
          b < 0 && (b = 6, y = !1);
          var x;
          switch (String.fromCharCode(u)) {
            case "h":
              var E = HEAP8[r + 2 >>> 0];
              E == 104 ? (r++, x = 1) : x = 2;
              break;
            case "l":
              var E = HEAP8[r + 2 >>> 0];
              E == 108 ? (r++, x = 8) : x = 4;
              break;
            case "L":
            case "q":
            case "j":
              x = 8;
              break;
            case "z":
            case "t":
            case "I":
              x = 4;
              break;
            default:
              x = null;
          }
          switch (x && r++, u = HEAP8[r + 1 >>> 0], String.fromCharCode(u)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p": {
              var U = u == 100 || u == 105;
              x = x || 4, _ = o("i" + x * 8);
              var v;
              if (x == 8 && (_ = u == 117 ? convertU32PairToI53(_[0], _[1]) : convertI32PairToI53(_[0], _[1])), x <= 4) {
                var I = Math.pow(256, x) - 1;
                _ = (U ? reSign : unSign)(_ & I, x * 8);
              }
              var A = Math.abs(_), k = "";
              if (u == 100 || u == 105)
                v = reSign(_, 8 * x).toString(10);
              else if (u == 117)
                v = unSign(_, 8 * x).toString(10), _ = Math.abs(_);
              else if (u == 111)
                v = (m ? "0" : "") + A.toString(8);
              else if (u == 120 || u == 88) {
                if (k = m && _ != 0 ? "0x" : "", _ < 0) {
                  _ = -_, v = (A - 1).toString(16);
                  for (var T = [], P = 0; P < v.length; P++)
                    T.push((15 - parseInt(v[P], 16)).toString(16));
                  for (v = T.join(""); v.length < x * 2; ) v = "f" + v;
                } else
                  v = A.toString(16);
                u == 88 && (k = k.toUpperCase(), v = v.toUpperCase());
              } else u == 112 && (A === 0 ? v = "(nil)" : (k = "0x", v = A.toString(16)));
              if (y)
                for (; v.length < b; )
                  v = "0" + v;
              for (_ >= 0 && (f ? k = "+" + k : h && (k = " " + k)), v.charAt(0) == "-" && (k = "-" + k, v = v.substr(1)); k.length + v.length < g; )
                p ? v += " " : S ? v = "0" + v : k = " " + k;
              v = k + v, v.split("").forEach((N) => l.push(N.charCodeAt(0)));
              break;
            }
            case "f":
            case "F":
            case "e":
            case "E":
            case "g":
            case "G": {
              _ = o("double");
              var v;
              if (isNaN(_))
                v = "nan", S = !1;
              else if (!isFinite(_))
                v = (_ < 0 ? "-" : "") + "inf", S = !1;
              else {
                var H = !1, R = Math.min(b, 20);
                if (u == 103 || u == 71) {
                  H = !0, b = b || 1;
                  var L = parseInt(_.toExponential(R).split("e")[1], 10);
                  b > L && L >= -4 ? (u = (u == 103 ? "f" : "F").charCodeAt(0), b -= L + 1) : (u = (u == 103 ? "e" : "E").charCodeAt(0), b--), R = Math.min(b, 20);
                }
                u == 101 || u == 69 ? (v = _.toExponential(R), /[eE][-+]\d$/.test(v) && (v = v.slice(0, -1) + "0" + v.slice(-1))) : (u == 102 || u == 70) && (v = _.toFixed(R), _ === 0 && reallyNegative(_) && (v = "-" + v));
                var M = v.split("e");
                if (H && !m)
                  for (; M[0].length > 1 && M[0].includes(".") && (M[0].slice(-1) == "0" || M[0].slice(-1) == "."); )
                    M[0] = M[0].slice(0, -1);
                else
                  for (m && v.indexOf(".") == -1 && (M[0] += "."); b > R++; ) M[0] += "0";
                v = M[0] + (M.length > 1 ? "e" + M[1] : ""), u == 69 && (v = v.toUpperCase()), _ >= 0 && (f ? v = "+" + v : h && (v = " " + v));
              }
              for (; v.length < g; )
                p ? v += " " : S && (v[0] == "-" || v[0] == "+") ? v = v[0] + "0" + v.slice(1) : v = (S ? "0" : " ") + v;
              u < 97 && (v = v.toUpperCase()), v.split("").forEach((O) => l.push(O.charCodeAt(0)));
              break;
            }
            case "s": {
              var D = o("i8*"), B = D ? strLen(D) : 6;
              if (y && (B = Math.min(B, b)), !p)
                for (; B < g--; )
                  l.push(32);
              if (D)
                for (var P = 0; P < B; P++)
                  l.push(HEAPU8[D++ >>> 0]);
              else
                l = l.concat(intArrayFromString("(null)".substr(0, B), !0));
              if (p)
                for (; B < g--; )
                  l.push(32);
              break;
            }
            case "c": {
              for (p && l.push(o("i8")); --g > 0; )
                l.push(32);
              p || l.push(o("i8"));
              break;
            }
            case "n": {
              var j = o("i32*");
              HEAP32[j >>> 2 >>> 0] = l.length;
              break;
            }
            case "%": {
              l.push(c);
              break;
            }
            default:
              for (var P = d; P < r + 2; P++)
                l.push(HEAP8[P >>> 0]);
          }
          r += 2;
        } else
          l.push(c), r += 1;
      }
      return l;
    };
    function _emscripten_log(e, t, r) {
      t >>>= 0, r >>>= 0;
      var n = formatString(t, r), a = UTF8ArrayToString(n, 0);
      emscriptenLog(e, a);
    }
    _emscripten_log.sig = "vipp";
    function _emscripten_get_compiler_setting(e) {
      throw "You must build with -sRETAIN_COMPILER_SETTINGS for getCompilerSetting or emscripten_get_compiler_setting to work";
    }
    _emscripten_get_compiler_setting.sig = "pp";
    var _emscripten_has_asyncify = () => 1;
    _emscripten_has_asyncify.sig = "i";
    function _emscripten_debugger() {
      debugger;
    }
    _emscripten_debugger.sig = "v";
    function _emscripten_print_double(e, t, r) {
      t >>>= 0;
      var n = e + "";
      return t ? stringToUTF8(n, t, r) : lengthBytesUTF8(n);
    }
    _emscripten_print_double.sig = "idpi";
    function _emscripten_asm_const_double(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, runEmAsmFunction(e, t, r);
    }
    _emscripten_asm_const_double.sig = "dppp";
    var runMainThreadEmAsm = (e, t, r, n) => {
      var a = readEmAsmArgs(t, r);
      return ASM_CONSTS[e](...a);
    };
    function _emscripten_asm_const_int_sync_on_main_thread(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, runMainThreadEmAsm(e, t, r);
    }
    _emscripten_asm_const_int_sync_on_main_thread.sig = "ippp";
    function _emscripten_asm_const_ptr_sync_on_main_thread(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, runMainThreadEmAsm(e, t, r);
    }
    _emscripten_asm_const_ptr_sync_on_main_thread.sig = "pppp";
    var _emscripten_asm_const_double_sync_on_main_thread = _emscripten_asm_const_int_sync_on_main_thread;
    _emscripten_asm_const_double_sync_on_main_thread.sig = "dppp";
    function _emscripten_asm_const_async_on_main_thread(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, runMainThreadEmAsm(e, t, r);
    }
    _emscripten_asm_const_async_on_main_thread.sig = "vppp";
    var __Unwind_Backtrace = function(e, t) {
      for (var r = getCallstack(), n = r.split(`
`), a = 0; a < n.length; a++) {
        var o = /* @__PURE__ */ ((l, c) => {
        })();
        if (o !== 0) return;
      }
    };
    __Unwind_Backtrace.sig = "ipp";
    function __Unwind_GetIPInfo(e, t) {
      return abort("Unwind_GetIPInfo");
    }
    __Unwind_GetIPInfo.sig = "ppp";
    function __Unwind_FindEnclosingFunction(e) {
      return 0;
    }
    __Unwind_FindEnclosingFunction.sig = "pp";
    class ExceptionInfo {
      constructor(t) {
        this.excPtr = t, this.ptr = t - 24;
      }
      set_type(t) {
        HEAPU32[this.ptr + 4 >>> 2 >>> 0] = t;
      }
      get_type() {
        return HEAPU32[this.ptr + 4 >>> 2 >>> 0];
      }
      set_destructor(t) {
        HEAPU32[this.ptr + 8 >>> 2 >>> 0] = t;
      }
      get_destructor() {
        return HEAPU32[this.ptr + 8 >>> 2 >>> 0];
      }
      set_caught(t) {
        t = t ? 1 : 0, HEAP8[this.ptr + 12 >>> 0] = t;
      }
      get_caught() {
        return HEAP8[this.ptr + 12 >>> 0] != 0;
      }
      set_rethrown(t) {
        t = t ? 1 : 0, HEAP8[this.ptr + 13 >>> 0] = t;
      }
      get_rethrown() {
        return HEAP8[this.ptr + 13 >>> 0] != 0;
      }
      init(t, r) {
        this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(r);
      }
      set_adjusted_ptr(t) {
        HEAPU32[this.ptr + 16 >>> 2 >>> 0] = t;
      }
      get_adjusted_ptr() {
        return HEAPU32[this.ptr + 16 >>> 2 >>> 0];
      }
    }
    var exceptionLast = 0, uncaughtExceptionCount = 0;
    function ___cxa_throw(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = new ExceptionInfo(e);
      throw n.init(t, r), exceptionLast = e, uncaughtExceptionCount++, exceptionLast;
    }
    ___cxa_throw.sig = "vppp";
    function __Unwind_RaiseException(e) {
      return e >>>= 0, err("Warning: _Unwind_RaiseException is not correctly implemented"), ___cxa_throw(e, 0, 0);
    }
    __Unwind_RaiseException.sig = "ip";
    function __Unwind_DeleteException(e) {
      err("TODO: Unwind_DeleteException");
    }
    __Unwind_DeleteException.sig = "vp";
    var _emscripten_exit_with_live_runtime = () => {
      throw runtimeKeepalivePush(), "unwind";
    };
    _emscripten_exit_with_live_runtime.sig = "v";
    var _emscripten_force_exit = (e) => {
      __emscripten_runtime_keepalive_clear(), _exit(e);
    };
    _emscripten_force_exit.sig = "vi";
    function _emscripten_outn(e, t) {
      return e >>>= 0, t >>>= 0, out(UTF8ToString(e, t));
    }
    _emscripten_outn.sig = "vpp";
    function _emscripten_errn(e, t) {
      return e >>>= 0, t >>>= 0, err(UTF8ToString(e, t));
    }
    _emscripten_errn.sig = "vpp";
    var _emscripten_throw_number = (e) => {
      throw e;
    };
    _emscripten_throw_number.sig = "vd";
    function _emscripten_throw_string(e) {
      throw e >>>= 0, UTF8ToString(e);
    }
    _emscripten_throw_string.sig = "vp";
    var _emscripten_runtime_keepalive_push = runtimeKeepalivePush;
    _emscripten_runtime_keepalive_push.sig = "v";
    var _emscripten_runtime_keepalive_pop = runtimeKeepalivePop;
    _emscripten_runtime_keepalive_pop.sig = "v";
    var _emscripten_runtime_keepalive_check = keepRuntimeAlive;
    _emscripten_runtime_keepalive_check.sig = "i";
    var ___global_base = 1024;
    function __emscripten_fs_load_embedded_files(e) {
      e >>>= 0;
      do {
        var t = HEAPU32[e >>> 2 >>> 0];
        e += 4;
        var r = HEAPU32[e >>> 2 >>> 0];
        e += 4;
        var n = HEAPU32[e >>> 2 >>> 0];
        e += 4;
        var a = UTF8ToString(t);
        FS.createPath("/", PATH.dirname(a), !0, !0), FS.createDataFile(a, null, HEAP8.subarray(n >>> 0, n + r >>> 0), !0, !0, !0);
      } while (HEAPU32[e >>> 2 >>> 0]);
    }
    __emscripten_fs_load_embedded_files.sig = "vp";
    var POINTER_SIZE = 4, _emscripten_math_cbrt = Math.cbrt;
    _emscripten_math_cbrt.sig = "dd";
    var _emscripten_math_pow = Math.pow;
    _emscripten_math_pow.sig = "ddd";
    var _emscripten_math_random = Math.random;
    _emscripten_math_random.sig = "d";
    var _emscripten_math_sign = Math.sign;
    _emscripten_math_sign.sig = "dd";
    var _emscripten_math_sqrt = Math.sqrt;
    _emscripten_math_sqrt.sig = "dd";
    var _emscripten_math_exp = Math.exp;
    _emscripten_math_exp.sig = "dd";
    var _emscripten_math_expm1 = Math.expm1;
    _emscripten_math_expm1.sig = "dd";
    var _emscripten_math_fmod = (e, t) => e % t;
    _emscripten_math_fmod.sig = "ddd";
    var _emscripten_math_log = Math.log;
    _emscripten_math_log.sig = "dd";
    var _emscripten_math_log1p = Math.log1p;
    _emscripten_math_log1p.sig = "dd";
    var _emscripten_math_log10 = Math.log10;
    _emscripten_math_log10.sig = "dd";
    var _emscripten_math_log2 = Math.log2;
    _emscripten_math_log2.sig = "dd";
    var _emscripten_math_round = Math.round;
    _emscripten_math_round.sig = "dd";
    var _emscripten_math_acos = Math.acos;
    _emscripten_math_acos.sig = "dd";
    var _emscripten_math_acosh = Math.acosh;
    _emscripten_math_acosh.sig = "dd";
    var _emscripten_math_asin = Math.asin;
    _emscripten_math_asin.sig = "dd";
    var _emscripten_math_asinh = Math.asinh;
    _emscripten_math_asinh.sig = "dd";
    var _emscripten_math_atan = Math.atan;
    _emscripten_math_atan.sig = "dd";
    var _emscripten_math_atanh = Math.atanh;
    _emscripten_math_atanh.sig = "dd";
    var _emscripten_math_atan2 = Math.atan2;
    _emscripten_math_atan2.sig = "ddd";
    var _emscripten_math_cos = Math.cos;
    _emscripten_math_cos.sig = "dd";
    var _emscripten_math_cosh = Math.cosh;
    _emscripten_math_cosh.sig = "dd";
    function _emscripten_math_hypot(e, t) {
      t >>>= 0;
      for (var r = [], n = 0; n < e; ++n)
        r.push(HEAPF64[t + n * 8 >>> 3 >>> 0]);
      return Math.hypot(...r);
    }
    _emscripten_math_hypot.sig = "dip";
    var _emscripten_math_sin = Math.sin;
    _emscripten_math_sin.sig = "dd";
    var _emscripten_math_sinh = Math.sinh;
    _emscripten_math_sinh.sig = "dd";
    var _emscripten_math_tan = Math.tan;
    _emscripten_math_tan.sig = "dd";
    var _emscripten_math_tanh = Math.tanh;
    _emscripten_math_tanh.sig = "dd", typeof TextDecoder < "u" && new TextDecoder("utf-16le");
    var stringToNewUTF8 = (e) => {
      var t = lengthBytesUTF8(e) + 1, r = _malloc(t);
      return r && stringToUTF8(e, r, t), r;
    }, JSEvents = { removeAllEventListeners() {
      for (; JSEvents.eventHandlers.length; )
        JSEvents._removeHandler(JSEvents.eventHandlers.length - 1);
      JSEvents.deferredCalls = [];
    }, registerRemoveEventListeners() {
      JSEvents.removeEventListenersRegistered || (__ATEXIT__.push(JSEvents.removeAllEventListeners), JSEvents.removeEventListenersRegistered = !0);
    }, inEventHandler: 0, deferredCalls: [], deferCall(e, t, r) {
      function n(o, l) {
        if (o.length != l.length) return !1;
        for (var c in o)
          if (o[c] != l[c]) return !1;
        return !0;
      }
      for (var a of JSEvents.deferredCalls)
        if (a.targetFunction == e && n(a.argsList, r))
          return;
      JSEvents.deferredCalls.push({ targetFunction: e, precedence: t, argsList: r }), JSEvents.deferredCalls.sort((o, l) => o.precedence < l.precedence);
    }, removeDeferredCalls(e) {
      JSEvents.deferredCalls = JSEvents.deferredCalls.filter((t) => t.targetFunction != e);
    }, canPerformEventHandlerRequests() {
      return navigator.userActivation ? navigator.userActivation.isActive : JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls;
    }, runDeferredCalls() {
      if (JSEvents.canPerformEventHandlerRequests()) {
        var e = JSEvents.deferredCalls;
        JSEvents.deferredCalls = [];
        for (var t of e)
          t.targetFunction(...t.argsList);
      }
    }, eventHandlers: [], removeAllHandlersOnTarget: (e, t) => {
      for (var r = 0; r < JSEvents.eventHandlers.length; ++r)
        JSEvents.eventHandlers[r].target == e && (!t || t == JSEvents.eventHandlers[r].eventTypeString) && JSEvents._removeHandler(r--);
    }, _removeHandler(e) {
      var t = JSEvents.eventHandlers[e];
      t.target.removeEventListener(t.eventTypeString, t.eventListenerFunc, t.useCapture), JSEvents.eventHandlers.splice(e, 1);
    }, registerOrRemoveHandler(e) {
      if (!e.target)
        return -4;
      if (e.callbackfunc)
        e.eventListenerFunc = function(r) {
          ++JSEvents.inEventHandler, JSEvents.currentEventHandler = e, JSEvents.runDeferredCalls(), e.handlerFunc(r), JSEvents.runDeferredCalls(), --JSEvents.inEventHandler;
        }, e.target.addEventListener(e.eventTypeString, e.eventListenerFunc, e.useCapture), JSEvents.eventHandlers.push(e), JSEvents.registerRemoveEventListeners();
      else
        for (var t = 0; t < JSEvents.eventHandlers.length; ++t)
          JSEvents.eventHandlers[t].target == e.target && JSEvents.eventHandlers[t].eventTypeString == e.eventTypeString && JSEvents._removeHandler(t--);
      return 0;
    }, getNodeNameForTarget(e) {
      return e ? e == window ? "#window" : e == screen ? "#screen" : (e == null ? void 0 : e.nodeName) || "" : "";
    }, fullscreenEnabled() {
      return document.fullscreenEnabled || document.webkitFullscreenEnabled;
    } }, maybeCStringToJsString = (e) => e > 2 ? UTF8ToString(e) : e, specialHTMLTargets = [0, document, window], findEventTarget = (e) => {
      e = maybeCStringToJsString(e);
      var t = specialHTMLTargets[e] || document.querySelector(e);
      return t;
    }, registerKeyEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.keyEvent || (JSEvents.keyEvent = _malloc(160));
      var c = (_) => {
        var d = JSEvents.keyEvent;
        HEAPF64[d >>> 3 >>> 0] = _.timeStamp;
        var f = d >>> 2;
        HEAP32[f + 2 >>> 0] = _.location, HEAP8[d + 12 >>> 0] = _.ctrlKey, HEAP8[d + 13 >>> 0] = _.shiftKey, HEAP8[d + 14 >>> 0] = _.altKey, HEAP8[d + 15 >>> 0] = _.metaKey, HEAP8[d + 16 >>> 0] = _.repeat, HEAP32[f + 5 >>> 0] = _.charCode, HEAP32[f + 6 >>> 0] = _.keyCode, HEAP32[f + 7 >>> 0] = _.which, stringToUTF8(_.key || "", d + 32, 32), stringToUTF8(_.code || "", d + 64, 32), stringToUTF8(_.char || "", d + 96, 32), stringToUTF8(_.locale || "", d + 128, 32), /* @__PURE__ */ ((p, m, S) => {
        })() && _.preventDefault();
      }, u = { target: findEventTarget(e), eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    }, findCanvasEventTarget = findEventTarget;
    function _emscripten_set_keypress_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerKeyEventCallback(e, t, r, n, 1, "keypress");
    }
    _emscripten_set_keypress_callback_on_thread.sig = "ippipp";
    function _emscripten_set_keydown_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerKeyEventCallback(e, t, r, n, 2, "keydown");
    }
    _emscripten_set_keydown_callback_on_thread.sig = "ippipp";
    function _emscripten_set_keyup_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerKeyEventCallback(e, t, r, n, 3, "keyup");
    }
    _emscripten_set_keyup_callback_on_thread.sig = "ippipp";
    var getBoundingClientRect = (e) => specialHTMLTargets.indexOf(e) < 0 ? e.getBoundingClientRect() : { left: 0, top: 0 }, fillMouseEventData = (e, t, r) => {
      HEAPF64[e >>> 3 >>> 0] = t.timeStamp;
      var n = e >>> 2;
      HEAP32[n + 2 >>> 0] = t.screenX, HEAP32[n + 3 >>> 0] = t.screenY, HEAP32[n + 4 >>> 0] = t.clientX, HEAP32[n + 5 >>> 0] = t.clientY, HEAP8[e + 24 >>> 0] = t.ctrlKey, HEAP8[e + 25 >>> 0] = t.shiftKey, HEAP8[e + 26 >>> 0] = t.altKey, HEAP8[e + 27 >>> 0] = t.metaKey, HEAP16[n * 2 + 14 >>> 0] = t.button, HEAP16[n * 2 + 15 >>> 0] = t.buttons, HEAP32[n + 8 >>> 0] = t.movementX, HEAP32[n + 9 >>> 0] = t.movementY;
      var a = getBoundingClientRect(r);
      HEAP32[n + 10 >>> 0] = t.clientX - (a.left | 0), HEAP32[n + 11 >>> 0] = t.clientY - (a.top | 0);
    }, registerMouseEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.mouseEvent || (JSEvents.mouseEvent = _malloc(64)), e = findEventTarget(e);
      var c = (_ = event) => {
        fillMouseEventData(JSEvents.mouseEvent, _, e), /* @__PURE__ */ ((d, f, p) => {
        })() && _.preventDefault();
      }, u = { target: e, allowsDeferredCalls: o != "mousemove" && o != "mouseenter" && o != "mouseleave", eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_click_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 4, "click");
    }
    _emscripten_set_click_callback_on_thread.sig = "ippipp";
    function _emscripten_set_mousedown_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 5, "mousedown");
    }
    _emscripten_set_mousedown_callback_on_thread.sig = "ippipp";
    function _emscripten_set_mouseup_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 6, "mouseup");
    }
    _emscripten_set_mouseup_callback_on_thread.sig = "ippipp";
    function _emscripten_set_dblclick_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 7, "dblclick");
    }
    _emscripten_set_dblclick_callback_on_thread.sig = "ippipp";
    function _emscripten_set_mousemove_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 8, "mousemove");
    }
    _emscripten_set_mousemove_callback_on_thread.sig = "ippipp";
    function _emscripten_set_mouseenter_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 33, "mouseenter");
    }
    _emscripten_set_mouseenter_callback_on_thread.sig = "ippipp";
    function _emscripten_set_mouseleave_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 34, "mouseleave");
    }
    _emscripten_set_mouseleave_callback_on_thread.sig = "ippipp";
    function _emscripten_set_mouseover_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 35, "mouseover");
    }
    _emscripten_set_mouseover_callback_on_thread.sig = "ippipp";
    function _emscripten_set_mouseout_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerMouseEventCallback(e, t, r, n, 36, "mouseout");
    }
    _emscripten_set_mouseout_callback_on_thread.sig = "ippipp";
    function _emscripten_get_mouse_status(e) {
      return e >>>= 0, JSEvents.mouseEvent ? (HEAP8.set(HEAP8.subarray(JSEvents.mouseEvent >>> 0, JSEvents.mouseEvent + 64 >>> 0), e >>> 0), 0) : -7;
    }
    _emscripten_get_mouse_status.sig = "ip";
    var registerWheelEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.wheelEvent || (JSEvents.wheelEvent = _malloc(96));
      var c = (_ = event) => {
        var d = JSEvents.wheelEvent;
        fillMouseEventData(d, _, e), HEAPF64[d + 64 >>> 3 >>> 0] = _.deltaX, HEAPF64[d + 72 >>> 3 >>> 0] = _.deltaY, HEAPF64[d + 80 >>> 3 >>> 0] = _.deltaZ, HEAP32[d + 88 >>> 2 >>> 0] = _.deltaMode, /* @__PURE__ */ ((f, p, m) => {
        })() && _.preventDefault();
      }, u = { target: e, allowsDeferredCalls: !0, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_wheel_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, e = findEventTarget(e), e ? typeof e.onwheel < "u" ? registerWheelEventCallback(e, t, r, n, 9, "wheel") : -1 : -4;
    }
    _emscripten_set_wheel_callback_on_thread.sig = "ippipp";
    var registerUiEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.uiEvent || (JSEvents.uiEvent = _malloc(36)), e = findEventTarget(e);
      var c = (_ = event) => {
        if (_.target == e) {
          var d = document.body;
          if (d) {
            var f = JSEvents.uiEvent;
            HEAP32[f >>> 2 >>> 0] = 0, HEAP32[f + 4 >>> 2 >>> 0] = d.clientWidth, HEAP32[f + 8 >>> 2 >>> 0] = d.clientHeight, HEAP32[f + 12 >>> 2 >>> 0] = innerWidth, HEAP32[f + 16 >>> 2 >>> 0] = innerHeight, HEAP32[f + 20 >>> 2 >>> 0] = outerWidth, HEAP32[f + 24 >>> 2 >>> 0] = outerHeight, HEAP32[f + 28 >>> 2 >>> 0] = pageXOffset | 0, HEAP32[f + 32 >>> 2 >>> 0] = pageYOffset | 0, /* @__PURE__ */ ((p, m, S) => {
            })() && _.preventDefault();
          }
        }
      }, u = { target: e, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_resize_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerUiEventCallback(e, t, r, n, 10, "resize");
    }
    _emscripten_set_resize_callback_on_thread.sig = "ippipp";
    function _emscripten_set_scroll_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerUiEventCallback(e, t, r, n, 11, "scroll");
    }
    _emscripten_set_scroll_callback_on_thread.sig = "ippipp";
    var registerFocusEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.focusEvent || (JSEvents.focusEvent = _malloc(256));
      var c = (_ = event) => {
        var d = JSEvents.getNodeNameForTarget(_.target), f = _.target.id ? _.target.id : "", p = JSEvents.focusEvent;
        stringToUTF8(d, p + 0, 128), stringToUTF8(f, p + 128, 128), /* @__PURE__ */ ((m, S, h) => {
        })() && _.preventDefault();
      }, u = { target: findEventTarget(e), eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_blur_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerFocusEventCallback(e, t, r, n, 12, "blur");
    }
    _emscripten_set_blur_callback_on_thread.sig = "ippipp";
    function _emscripten_set_focus_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerFocusEventCallback(e, t, r, n, 13, "focus");
    }
    _emscripten_set_focus_callback_on_thread.sig = "ippipp";
    function _emscripten_set_focusin_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerFocusEventCallback(e, t, r, n, 14, "focusin");
    }
    _emscripten_set_focusin_callback_on_thread.sig = "ippipp";
    function _emscripten_set_focusout_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerFocusEventCallback(e, t, r, n, 15, "focusout");
    }
    _emscripten_set_focusout_callback_on_thread.sig = "ippipp";
    var fillDeviceOrientationEventData = (e, t, r) => {
      HEAPF64[e >>> 3 >>> 0] = t.alpha, HEAPF64[e + 8 >>> 3 >>> 0] = t.beta, HEAPF64[e + 16 >>> 3 >>> 0] = t.gamma, HEAP8[e + 24 >>> 0] = t.absolute;
    }, registerDeviceOrientationEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.deviceOrientationEvent || (JSEvents.deviceOrientationEvent = _malloc(32));
      var c = (_ = event) => {
        fillDeviceOrientationEventData(JSEvents.deviceOrientationEvent, _), /* @__PURE__ */ ((d, f, p) => {
        })() && _.preventDefault();
      }, u = { target: findEventTarget(e), eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_deviceorientation_callback_on_thread(e, t, r, n) {
      return e >>>= 0, r >>>= 0, registerDeviceOrientationEventCallback(2, e, t, r, 16, "deviceorientation");
    }
    _emscripten_set_deviceorientation_callback_on_thread.sig = "ipipp";
    function _emscripten_get_deviceorientation_status(e) {
      return e >>>= 0, JSEvents.deviceOrientationEvent ? (HEAP32.set(HEAP32.subarray(JSEvents.deviceOrientationEvent >>> 0, 32), e >>> 0), 0) : -7;
    }
    _emscripten_get_deviceorientation_status.sig = "ip";
    var fillDeviceMotionEventData = (e, t, r) => {
      var n = t.acceleration, a = t.accelerationIncludingGravity, o = t.rotationRate;
      n = n || {}, a = a || {}, o = o || {}, HEAPF64[e >>> 3 >>> 0] = n.x, HEAPF64[e + 8 >>> 3 >>> 0] = n.y, HEAPF64[e + 16 >>> 3 >>> 0] = n.z, HEAPF64[e + 24 >>> 3 >>> 0] = a.x, HEAPF64[e + 32 >>> 3 >>> 0] = a.y, HEAPF64[e + 40 >>> 3 >>> 0] = a.z, HEAPF64[e + 48 >>> 3 >>> 0] = o.alpha, HEAPF64[e + 56 >>> 3 >>> 0] = o.beta, HEAPF64[e + 64 >>> 3 >>> 0] = o.gamma;
    }, registerDeviceMotionEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.deviceMotionEvent || (JSEvents.deviceMotionEvent = _malloc(80));
      var c = (_ = event) => {
        fillDeviceMotionEventData(JSEvents.deviceMotionEvent, _), /* @__PURE__ */ ((d, f, p) => {
        })() && _.preventDefault();
      }, u = { target: findEventTarget(e), eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_devicemotion_callback_on_thread(e, t, r, n) {
      return e >>>= 0, r >>>= 0, registerDeviceMotionEventCallback(2, e, t, r, 17, "devicemotion");
    }
    _emscripten_set_devicemotion_callback_on_thread.sig = "ipipp";
    function _emscripten_get_devicemotion_status(e) {
      return e >>>= 0, JSEvents.deviceMotionEvent ? (HEAP32.set(HEAP32.subarray(JSEvents.deviceMotionEvent >>> 0, 80), e >>> 0), 0) : -7;
    }
    _emscripten_get_devicemotion_status.sig = "ip";
    var screenOrientation = () => {
      if (window.screen)
        return screen.orientation || screen.mozOrientation || screen.webkitOrientation;
    }, fillOrientationChangeEventData = (e) => {
      var t = ["portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"], r = ["portrait", "portrait", "landscape", "landscape"], n = 0, a = 0, o = screenOrientation();
      typeof o == "object" ? (n = t.indexOf(o.type), n < 0 && (n = r.indexOf(o.type)), n >= 0 && (n = 1 << n), a = o.angle) : a = window.orientation, HEAP32[e >>> 2 >>> 0] = n, HEAP32[e + 4 >>> 2 >>> 0] = a;
    }, registerOrientationChangeEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.orientationChangeEvent || (JSEvents.orientationChangeEvent = _malloc(8));
      var c = (_ = event) => {
        var d = JSEvents.orientationChangeEvent;
        fillOrientationChangeEventData(d), /* @__PURE__ */ ((f, p, m) => {
        })() && _.preventDefault();
      }, u = { target: e, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_orientationchange_callback_on_thread(e, t, r, n) {
      return e >>>= 0, r >>>= 0, !window.screen || !screen.orientation ? -1 : registerOrientationChangeEventCallback(screen.orientation, e, t, r, 18, "change");
    }
    _emscripten_set_orientationchange_callback_on_thread.sig = "ipipp";
    function _emscripten_get_orientation_status(e) {
      return e >>>= 0, !screenOrientation() && typeof orientation > "u" ? -1 : (fillOrientationChangeEventData(e), 0);
    }
    _emscripten_get_orientation_status.sig = "ip";
    var _emscripten_lock_orientation = (e) => {
      var t = [];
      e & 1 && t.push("portrait-primary"), e & 2 && t.push("portrait-secondary"), e & 4 && t.push("landscape-primary"), e & 8 && t.push("landscape-secondary");
      var r;
      if (screen.lockOrientation)
        r = screen.lockOrientation(t);
      else if (screen.mozLockOrientation)
        r = screen.mozLockOrientation(t);
      else if (screen.webkitLockOrientation)
        r = screen.webkitLockOrientation(t);
      else
        return -1;
      return r ? 0 : -6;
    };
    _emscripten_lock_orientation.sig = "ii";
    var _emscripten_unlock_orientation = () => {
      if (screen.unlockOrientation)
        screen.unlockOrientation();
      else if (screen.mozUnlockOrientation)
        screen.mozUnlockOrientation();
      else if (screen.webkitUnlockOrientation)
        screen.webkitUnlockOrientation();
      else
        return -1;
      return 0;
    };
    _emscripten_unlock_orientation.sig = "i";
    var fillFullscreenChangeEventData = (e) => {
      var t = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement, r = !!t;
      HEAP8[e >>> 0] = r, HEAP8[e + 1 >>> 0] = JSEvents.fullscreenEnabled();
      var n = r ? t : JSEvents.previousFullscreenElement, a = JSEvents.getNodeNameForTarget(n), o = (n == null ? void 0 : n.id) || "";
      stringToUTF8(a, e + 2, 128), stringToUTF8(o, e + 130, 128), HEAP32[e + 260 >>> 2 >>> 0] = n ? n.clientWidth : 0, HEAP32[e + 264 >>> 2 >>> 0] = n ? n.clientHeight : 0, HEAP32[e + 268 >>> 2 >>> 0] = screen.width, HEAP32[e + 272 >>> 2 >>> 0] = screen.height, r && (JSEvents.previousFullscreenElement = t);
    }, registerFullscreenChangeEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.fullscreenChangeEvent || (JSEvents.fullscreenChangeEvent = _malloc(276));
      var c = (_ = event) => {
        var d = JSEvents.fullscreenChangeEvent;
        fillFullscreenChangeEventData(d), /* @__PURE__ */ ((f, p, m) => {
        })() && _.preventDefault();
      }, u = { target: e, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_fullscreenchange_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, JSEvents.fullscreenEnabled() ? (e = findEventTarget(e), e ? (registerFullscreenChangeEventCallback(e, t, r, n, 19, "webkitfullscreenchange"), registerFullscreenChangeEventCallback(e, t, r, n, 19, "fullscreenchange")) : -4) : -1;
    }
    _emscripten_set_fullscreenchange_callback_on_thread.sig = "ippipp";
    function _emscripten_get_fullscreen_status(e) {
      return e >>>= 0, JSEvents.fullscreenEnabled() ? (fillFullscreenChangeEventData(e), 0) : -1;
    }
    _emscripten_get_fullscreen_status.sig = "ip";
    function _emscripten_get_canvas_element_size(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = findCanvasEventTarget(e);
      if (!n) return -4;
      HEAP32[t >>> 2 >>> 0] = n.width, HEAP32[r >>> 2 >>> 0] = n.height;
    }
    _emscripten_get_canvas_element_size.sig = "ippp";
    var getCanvasElementSize = (e) => {
      var t = stackSave(), r = stackAlloc(8), n = r + 4, a = stringToUTF8OnStack(e.id);
      _emscripten_get_canvas_element_size(a, r, n);
      var o = [HEAP32[r >>> 2 >>> 0], HEAP32[n >>> 2 >>> 0]];
      return stackRestore(t), o;
    };
    function _emscripten_set_canvas_element_size(e, t, r) {
      e >>>= 0;
      var n = findCanvasEventTarget(e);
      return n ? (n.width = t, n.height = r, 0) : -4;
    }
    _emscripten_set_canvas_element_size.sig = "ipii";
    var setCanvasElementSize = (e, t, r) => {
      if (!e.controlTransferredOffscreen)
        e.width = t, e.height = r;
      else {
        var n = stackSave(), a = stringToUTF8OnStack(e.id);
        _emscripten_set_canvas_element_size(a, t, r), stackRestore(n);
      }
    }, registerRestoreOldStyle = (e) => {
      var t = getCanvasElementSize(e), r = t[0], n = t[1], a = e.style.width, o = e.style.height, l = e.style.backgroundColor, c = document.body.style.backgroundColor, u = e.style.paddingLeft, _ = e.style.paddingRight, d = e.style.paddingTop, f = e.style.paddingBottom, p = e.style.marginLeft, m = e.style.marginRight, S = e.style.marginTop, h = e.style.marginBottom, g = document.body.style.margin, y = document.documentElement.style.overflow, b = document.body.scroll, C = e.style.imageRendering;
      function x() {
        var E = document.fullscreenElement || document.webkitFullscreenElement;
        E || (document.removeEventListener("fullscreenchange", x), document.removeEventListener("webkitfullscreenchange", x), setCanvasElementSize(e, r, n), e.style.width = a, e.style.height = o, e.style.backgroundColor = l, c || (document.body.style.backgroundColor = "white"), document.body.style.backgroundColor = c, e.style.paddingLeft = u, e.style.paddingRight = _, e.style.paddingTop = d, e.style.paddingBottom = f, e.style.marginLeft = p, e.style.marginRight = m, e.style.marginTop = S, e.style.marginBottom = h, document.body.style.margin = g, document.documentElement.style.overflow = y, document.body.scroll = b, e.style.imageRendering = C, e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, r, n), currentFullscreenStrategy.canvasResizedCallback && currentFullscreenStrategy.canvasResizedCallbackUserData);
      }
      return document.addEventListener("fullscreenchange", x), document.addEventListener("webkitfullscreenchange", x), x;
    }, setLetterbox = (e, t, r) => {
      e.style.paddingLeft = e.style.paddingRight = r + "px", e.style.paddingTop = e.style.paddingBottom = t + "px";
    }, JSEvents_resizeCanvasForFullscreen = (e, t) => {
      var g, y;
      var r = registerRestoreOldStyle(e), n = t.softFullscreen ? innerWidth : screen.width, a = t.softFullscreen ? innerHeight : screen.height, o = getBoundingClientRect(e), l = o.width, c = o.height, u = getCanvasElementSize(e), _ = u[0], d = u[1];
      if (t.scaleMode == 3)
        setLetterbox(e, (a - c) / 2, (n - l) / 2), n = l, a = c;
      else if (t.scaleMode == 2)
        if (n * d < _ * a) {
          var f = d * n / _;
          setLetterbox(e, (a - f) / 2, 0), a = f;
        } else {
          var p = _ * a / d;
          setLetterbox(e, 0, (n - p) / 2), n = p;
        }
      (g = e.style).backgroundColor || (g.backgroundColor = "black"), (y = document.body.style).backgroundColor || (y.backgroundColor = "black"), e.style.width = n + "px", e.style.height = a + "px", t.filteringMode == 1 && (e.style.imageRendering = "optimizeSpeed", e.style.imageRendering = "-moz-crisp-edges", e.style.imageRendering = "-o-crisp-edges", e.style.imageRendering = "-webkit-optimize-contrast", e.style.imageRendering = "optimize-contrast", e.style.imageRendering = "crisp-edges", e.style.imageRendering = "pixelated");
      var m = t.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
      if (t.canvasResolutionScaleMode != 0) {
        var S = n * m | 0, h = a * m | 0;
        setCanvasElementSize(e, S, h), e.GLctxObject && e.GLctxObject.GLctx.viewport(0, 0, S, h);
      }
      return r;
    }, JSEvents_requestFullscreen = (e, t) => {
      if ((t.scaleMode != 0 || t.canvasResolutionScaleMode != 0) && JSEvents_resizeCanvasForFullscreen(e, t), e.requestFullscreen)
        e.requestFullscreen();
      else if (e.webkitRequestFullscreen)
        e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      else
        return JSEvents.fullscreenEnabled() ? -3 : -1;
      return currentFullscreenStrategy = t, t.canvasResizedCallback && t.canvasResizedCallbackUserData, 0;
    }, hideEverythingExceptGivenElement = (e) => {
      for (var t = e, r = t.parentNode, n = []; t != document.body; ) {
        for (var a = r.children, o = 0; o < a.length; ++o)
          a[o] != t && (n.push({ node: a[o], displayState: a[o].style.display }), a[o].style.display = "none");
        t = r, r = r.parentNode;
      }
      return n;
    }, restoreHiddenElements = (e) => {
      for (var t of e)
        t.node.style.display = t.displayState;
    }, currentFullscreenStrategy = {}, restoreOldWindowedStyle = null, softFullscreenResizeWebGLRenderTarget = () => {
      var e = devicePixelRatio, t = currentFullscreenStrategy.canvasResolutionScaleMode == 2, r = currentFullscreenStrategy.scaleMode == 2, n = currentFullscreenStrategy.canvasResolutionScaleMode != 0, a = currentFullscreenStrategy.scaleMode == 3, o = t ? Math.round(innerWidth * e) : innerWidth, l = t ? Math.round(innerHeight * e) : innerHeight, c = o, u = l, _ = currentFullscreenStrategy.target, d = getCanvasElementSize(_), f = d[0], p = d[1], m;
      if (r && (c * p < f * u ? u = c * p / f | 0 : c * p > f * u && (c = u * f / p | 0), m = (l - u) / 2 | 0), n && (setCanvasElementSize(_, c, u), _.GLctxObject && _.GLctxObject.GLctx.viewport(0, 0, c, u)), t && (m /= e, c /= e, u /= e, c = Math.round(c * 1e4) / 1e4, u = Math.round(u * 1e4) / 1e4, m = Math.round(m * 1e4) / 1e4), a) {
        var S = (innerHeight - jstoi_q(_.style.height)) / 2, h = (innerWidth - jstoi_q(_.style.width)) / 2;
        setLetterbox(_, S, h);
      } else {
        _.style.width = c + "px", _.style.height = u + "px";
        var h = (innerWidth - c) / 2;
        setLetterbox(_, m, h);
      }
      !a && currentFullscreenStrategy.canvasResizedCallback && currentFullscreenStrategy.canvasResizedCallbackUserData;
    }, doRequestFullscreen = (e, t) => JSEvents.fullscreenEnabled() ? (e = findEventTarget(e), e ? !e.requestFullscreen && !e.webkitRequestFullscreen ? -3 : JSEvents.canPerformEventHandlerRequests() ? JSEvents_requestFullscreen(e, t) : t.deferUntilInEventHandler ? (JSEvents.deferCall(JSEvents_requestFullscreen, 1, [e, t]), 1) : -2 : -4) : -1;
    function _emscripten_request_fullscreen(e, t) {
      e >>>= 0;
      var r = { scaleMode: 0, canvasResolutionScaleMode: 0, filteringMode: 0, deferUntilInEventHandler: t, canvasResizedCallbackTargetThread: 2 };
      return doRequestFullscreen(e, r);
    }
    _emscripten_request_fullscreen.sig = "ipi";
    function _emscripten_request_fullscreen_strategy(e, t, r) {
      e >>>= 0, r >>>= 0;
      var n = { scaleMode: HEAP32[r >>> 2 >>> 0], canvasResolutionScaleMode: HEAP32[r + 4 >>> 2 >>> 0], filteringMode: HEAP32[r + 8 >>> 2 >>> 0], deferUntilInEventHandler: t, canvasResizedCallback: HEAP32[r + 12 >>> 2 >>> 0], canvasResizedCallbackUserData: HEAP32[r + 16 >>> 2 >>> 0] };
      return doRequestFullscreen(e, n);
    }
    _emscripten_request_fullscreen_strategy.sig = "ipip";
    function _emscripten_enter_soft_fullscreen(e, t) {
      if (e >>>= 0, t >>>= 0, e = findEventTarget(e), !e) return -4;
      var r = { scaleMode: HEAP32[t >>> 2 >>> 0], canvasResolutionScaleMode: HEAP32[t + 4 >>> 2 >>> 0], filteringMode: HEAP32[t + 8 >>> 2 >>> 0], canvasResizedCallback: HEAP32[t + 12 >>> 2 >>> 0], canvasResizedCallbackUserData: HEAP32[t + 16 >>> 2 >>> 0], target: e, softFullscreen: !0 }, n = JSEvents_resizeCanvasForFullscreen(e, r);
      document.documentElement.style.overflow = "hidden", document.body.scroll = "no", document.body.style.margin = "0px";
      var a = hideEverythingExceptGivenElement(e);
      function o() {
        n(), restoreHiddenElements(a), removeEventListener("resize", softFullscreenResizeWebGLRenderTarget), r.canvasResizedCallback && r.canvasResizedCallbackUserData, currentFullscreenStrategy = 0;
      }
      return restoreOldWindowedStyle = o, currentFullscreenStrategy = r, addEventListener("resize", softFullscreenResizeWebGLRenderTarget), r.canvasResizedCallback && r.canvasResizedCallbackUserData, 0;
    }
    _emscripten_enter_soft_fullscreen.sig = "ipp";
    var _emscripten_exit_soft_fullscreen = () => (restoreOldWindowedStyle == null || restoreOldWindowedStyle(), restoreOldWindowedStyle = null, 0);
    _emscripten_exit_soft_fullscreen.sig = "i";
    var _emscripten_exit_fullscreen = () => {
      if (!JSEvents.fullscreenEnabled()) return -1;
      JSEvents.removeDeferredCalls(JSEvents_requestFullscreen);
      var e = specialHTMLTargets[1];
      if (e.exitFullscreen)
        e.fullscreenElement && e.exitFullscreen();
      else if (e.webkitExitFullscreen)
        e.webkitFullscreenElement && e.webkitExitFullscreen();
      else
        return -1;
      return 0;
    };
    _emscripten_exit_fullscreen.sig = "i";
    var fillPointerlockChangeEventData = (e) => {
      var t = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement, r = !!t;
      HEAP8[e >>> 0] = r;
      var n = JSEvents.getNodeNameForTarget(t), a = (t == null ? void 0 : t.id) || "";
      stringToUTF8(n, e + 1, 128), stringToUTF8(a, e + 129, 128);
    }, registerPointerlockChangeEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.pointerlockChangeEvent || (JSEvents.pointerlockChangeEvent = _malloc(257));
      var c = (_ = event) => {
        var d = JSEvents.pointerlockChangeEvent;
        fillPointerlockChangeEventData(d), /* @__PURE__ */ ((f, p, m) => {
        })() && _.preventDefault();
      }, u = { target: e, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_pointerlockchange_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, !document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock ? -1 : (e = findEventTarget(e), e ? (registerPointerlockChangeEventCallback(e, t, r, n, 20, "mozpointerlockchange"), registerPointerlockChangeEventCallback(e, t, r, n, 20, "webkitpointerlockchange"), registerPointerlockChangeEventCallback(e, t, r, n, 20, "mspointerlockchange"), registerPointerlockChangeEventCallback(e, t, r, n, 20, "pointerlockchange")) : -4);
    }
    _emscripten_set_pointerlockchange_callback_on_thread.sig = "ippipp";
    var registerPointerlockErrorEventCallback = (e, t, r, n, a, o, l) => {
      var c = (_ = event) => {
        /* @__PURE__ */ ((d, f, p) => {
        })() && _.preventDefault();
      }, u = { target: e, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_pointerlockerror_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, !document || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock ? -1 : (e = findEventTarget(e), e ? (registerPointerlockErrorEventCallback(e, t, r, n, 38, "mozpointerlockerror"), registerPointerlockErrorEventCallback(e, t, r, n, 38, "webkitpointerlockerror"), registerPointerlockErrorEventCallback(e, t, r, n, 38, "mspointerlockerror"), registerPointerlockErrorEventCallback(e, t, r, n, 38, "pointerlockerror")) : -4);
    }
    _emscripten_set_pointerlockerror_callback_on_thread.sig = "ippipp";
    function _emscripten_get_pointerlock_status(e) {
      return e >>>= 0, e && fillPointerlockChangeEventData(e), !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock ? -1 : 0;
    }
    _emscripten_get_pointerlock_status.sig = "ip";
    var requestPointerLock = (e) => {
      if (e.requestPointerLock)
        e.requestPointerLock();
      else
        return document.body.requestPointerLock ? -3 : -1;
      return 0;
    };
    function _emscripten_request_pointerlock(e, t) {
      return e >>>= 0, e = findEventTarget(e), e ? e.requestPointerLock ? JSEvents.canPerformEventHandlerRequests() ? requestPointerLock(e) : t ? (JSEvents.deferCall(requestPointerLock, 2, [e]), 1) : -2 : -1 : -4;
    }
    _emscripten_request_pointerlock.sig = "ipi";
    var _emscripten_exit_pointerlock = () => {
      if (JSEvents.removeDeferredCalls(requestPointerLock), document.exitPointerLock)
        document.exitPointerLock();
      else
        return -1;
      return 0;
    };
    _emscripten_exit_pointerlock.sig = "i";
    var _emscripten_vibrate = (e) => navigator.vibrate ? (navigator.vibrate(e), 0) : -1;
    _emscripten_vibrate.sig = "ii";
    function _emscripten_vibrate_pattern(e, t) {
      if (e >>>= 0, !navigator.vibrate) return -1;
      for (var r = [], n = 0; n < t; ++n) {
        var a = HEAP32[e + n * 4 >>> 2 >>> 0];
        r.push(a);
      }
      return navigator.vibrate(r), 0;
    }
    _emscripten_vibrate_pattern.sig = "ipi";
    var fillVisibilityChangeEventData = (e) => {
      var t = ["hidden", "visible", "prerender", "unloaded"], r = t.indexOf(document.visibilityState);
      HEAP8[e >>> 0] = document.hidden, HEAP32[e + 4 >>> 2 >>> 0] = r;
    }, registerVisibilityChangeEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.visibilityChangeEvent || (JSEvents.visibilityChangeEvent = _malloc(8));
      var c = (_ = event) => {
        var d = JSEvents.visibilityChangeEvent;
        fillVisibilityChangeEventData(d), /* @__PURE__ */ ((f, p, m) => {
        })() && _.preventDefault();
      }, u = { target: e, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_visibilitychange_callback_on_thread(e, t, r, n) {
      return e >>>= 0, r >>>= 0, registerVisibilityChangeEventCallback(specialHTMLTargets[1], e, t, r, 21, "visibilitychange");
    }
    _emscripten_set_visibilitychange_callback_on_thread.sig = "ipipp";
    function _emscripten_get_visibility_status(e) {
      return e >>>= 0, typeof document.visibilityState > "u" && typeof document.hidden > "u" ? -1 : (fillVisibilityChangeEventData(e), 0);
    }
    _emscripten_get_visibility_status.sig = "ip";
    var registerTouchEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.touchEvent || (JSEvents.touchEvent = _malloc(1552)), e = findEventTarget(e);
      var c = (_) => {
        var d = {}, f = _.touches;
        for (let y of f)
          y.isChanged = y.onTarget = 0, d[y.identifier] = y;
        for (let y of _.changedTouches)
          y.isChanged = 1, d[y.identifier] = y;
        for (let y of _.targetTouches)
          d[y.identifier].onTarget = 1;
        var p = JSEvents.touchEvent;
        HEAPF64[p >>> 3 >>> 0] = _.timeStamp, HEAP8[p + 12 >>> 0] = _.ctrlKey, HEAP8[p + 13 >>> 0] = _.shiftKey, HEAP8[p + 14 >>> 0] = _.altKey, HEAP8[p + 15 >>> 0] = _.metaKey;
        var m = p + 16, S = getBoundingClientRect(e), h = 0;
        for (let y of Object.values(d)) {
          var g = m >>> 2;
          if (HEAP32[g + 0 >>> 0] = y.identifier, HEAP32[g + 1 >>> 0] = y.screenX, HEAP32[g + 2 >>> 0] = y.screenY, HEAP32[g + 3 >>> 0] = y.clientX, HEAP32[g + 4 >>> 0] = y.clientY, HEAP32[g + 5 >>> 0] = y.pageX, HEAP32[g + 6 >>> 0] = y.pageY, HEAP8[m + 28 >>> 0] = y.isChanged, HEAP8[m + 29 >>> 0] = y.onTarget, HEAP32[g + 8 >>> 0] = y.clientX - (S.left | 0), HEAP32[g + 9 >>> 0] = y.clientY - (S.top | 0), m += 48, ++h > 31)
            break;
        }
        HEAP32[p + 8 >>> 2 >>> 0] = h, /* @__PURE__ */ ((y, b, C) => {
        })() && _.preventDefault();
      }, u = { target: e, allowsDeferredCalls: o == "touchstart" || o == "touchend", eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_touchstart_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerTouchEventCallback(e, t, r, n, 22, "touchstart");
    }
    _emscripten_set_touchstart_callback_on_thread.sig = "ippipp";
    function _emscripten_set_touchend_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerTouchEventCallback(e, t, r, n, 23, "touchend");
    }
    _emscripten_set_touchend_callback_on_thread.sig = "ippipp";
    function _emscripten_set_touchmove_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerTouchEventCallback(e, t, r, n, 24, "touchmove");
    }
    _emscripten_set_touchmove_callback_on_thread.sig = "ippipp";
    function _emscripten_set_touchcancel_callback_on_thread(e, t, r, n, a) {
      return e >>>= 0, t >>>= 0, n >>>= 0, registerTouchEventCallback(e, t, r, n, 25, "touchcancel");
    }
    _emscripten_set_touchcancel_callback_on_thread.sig = "ippipp";
    var fillGamepadEventData = (e, t) => {
      HEAPF64[e >>> 3 >>> 0] = t.timestamp;
      for (var r = 0; r < t.axes.length; ++r)
        HEAPF64[e + r * 8 + 16 >>> 3 >>> 0] = t.axes[r];
      for (var r = 0; r < t.buttons.length; ++r)
        typeof t.buttons[r] == "object" ? HEAPF64[e + r * 8 + 528 >>> 3 >>> 0] = t.buttons[r].value : HEAPF64[e + r * 8 + 528 >>> 3 >>> 0] = t.buttons[r];
      for (var r = 0; r < t.buttons.length; ++r)
        typeof t.buttons[r] == "object" ? HEAP8[e + r + 1040 >>> 0] = t.buttons[r].pressed : HEAP8[e + r + 1040 >>> 0] = t.buttons[r] == 1;
      HEAP8[e + 1104 >>> 0] = t.connected, HEAP32[e + 1108 >>> 2 >>> 0] = t.index, HEAP32[e + 8 >>> 2 >>> 0] = t.axes.length, HEAP32[e + 12 >>> 2 >>> 0] = t.buttons.length, stringToUTF8(t.id, e + 1112, 64), stringToUTF8(t.mapping, e + 1176, 64);
    }, registerGamepadEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.gamepadEvent || (JSEvents.gamepadEvent = _malloc(1240));
      var c = (_ = event) => {
        var d = JSEvents.gamepadEvent;
        fillGamepadEventData(d, _.gamepad), /* @__PURE__ */ ((f, p, m) => {
        })() && _.preventDefault();
      }, u = { target: findEventTarget(e), allowsDeferredCalls: !0, eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    }, _emscripten_sample_gamepad_data = () => {
      try {
        if (navigator.getGamepads) return (JSEvents.lastGamepadState = navigator.getGamepads()) ? 0 : -1;
      } catch {
        navigator.getGamepads = null;
      }
      return -1;
    };
    _emscripten_sample_gamepad_data.sig = "i";
    function _emscripten_set_gamepadconnected_callback_on_thread(e, t, r, n) {
      return e >>>= 0, r >>>= 0, _emscripten_sample_gamepad_data() ? -1 : registerGamepadEventCallback(2, e, t, r, 26, "gamepadconnected");
    }
    _emscripten_set_gamepadconnected_callback_on_thread.sig = "ipipp";
    function _emscripten_set_gamepaddisconnected_callback_on_thread(e, t, r, n) {
      return e >>>= 0, r >>>= 0, _emscripten_sample_gamepad_data() ? -1 : registerGamepadEventCallback(2, e, t, r, 27, "gamepaddisconnected");
    }
    _emscripten_set_gamepaddisconnected_callback_on_thread.sig = "ipipp";
    var _emscripten_get_num_gamepads = () => JSEvents.lastGamepadState.length;
    _emscripten_get_num_gamepads.sig = "i";
    function _emscripten_get_gamepad_status(e, t) {
      return t >>>= 0, e < 0 || e >= JSEvents.lastGamepadState.length ? -5 : JSEvents.lastGamepadState[e] ? (fillGamepadEventData(t, JSEvents.lastGamepadState[e]), 0) : -7;
    }
    _emscripten_get_gamepad_status.sig = "iip";
    var registerBeforeUnloadEventCallback = (e, t, r, n, a, o) => {
      var l = (u = event) => {
        var _ = /* @__PURE__ */ ((d, f, p) => {
        })();
        if (_ && (_ = UTF8ToString(_)), _)
          return u.preventDefault(), u.returnValue = _, _;
      }, c = { target: findEventTarget(e), eventTypeString: o, callbackfunc: n, handlerFunc: l, useCapture: r };
      return JSEvents.registerOrRemoveHandler(c);
    };
    function _emscripten_set_beforeunload_callback_on_thread(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, typeof onbeforeunload > "u" ? -1 : r !== 1 ? -5 : registerBeforeUnloadEventCallback(2, e, !0, t, 28, "beforeunload");
    }
    _emscripten_set_beforeunload_callback_on_thread.sig = "ippp";
    var fillBatteryEventData = (e, t) => {
      HEAPF64[e >>> 3 >>> 0] = t.chargingTime, HEAPF64[e + 8 >>> 3 >>> 0] = t.dischargingTime, HEAPF64[e + 16 >>> 3 >>> 0] = t.level, HEAP8[e + 24 >>> 0] = t.charging;
    }, battery = () => navigator.battery || navigator.mozBattery || navigator.webkitBattery, registerBatteryEventCallback = (e, t, r, n, a, o, l) => {
      JSEvents.batteryEvent || (JSEvents.batteryEvent = _malloc(32));
      var c = (_ = event) => {
        var d = JSEvents.batteryEvent;
        fillBatteryEventData(d, battery()), /* @__PURE__ */ ((f, p, m) => {
        })() && _.preventDefault();
      }, u = { target: findEventTarget(e), eventTypeString: o, callbackfunc: n, handlerFunc: c, useCapture: r };
      return JSEvents.registerOrRemoveHandler(u);
    };
    function _emscripten_set_batterychargingchange_callback_on_thread(e, t, r) {
      return e >>>= 0, t >>>= 0, battery() ? registerBatteryEventCallback(battery(), e, !0, t, 29, "chargingchange") : -1;
    }
    _emscripten_set_batterychargingchange_callback_on_thread.sig = "ippp";
    function _emscripten_set_batterylevelchange_callback_on_thread(e, t, r) {
      return e >>>= 0, t >>>= 0, battery() ? registerBatteryEventCallback(battery(), e, !0, t, 30, "levelchange") : -1;
    }
    _emscripten_set_batterylevelchange_callback_on_thread.sig = "ippp";
    function _emscripten_get_battery_status(e) {
      return e >>>= 0, battery() ? (fillBatteryEventData(e, battery()), 0) : -1;
    }
    _emscripten_get_battery_status.sig = "ip";
    function __emscripten_set_offscreencanvas_size(e, t, r) {
      return -1;
    }
    __emscripten_set_offscreencanvas_size.sig = "ipii";
    function _emscripten_set_element_css_size(e, t, r) {
      return e >>>= 0, e = findEventTarget(e), e ? (e.style.width = t + "px", e.style.height = r + "px", 0) : -4;
    }
    _emscripten_set_element_css_size.sig = "ipdd";
    function _emscripten_get_element_css_size(e, t, r) {
      if (e >>>= 0, t >>>= 0, r >>>= 0, e = findEventTarget(e), !e) return -4;
      var n = getBoundingClientRect(e);
      return HEAPF64[t >>> 3 >>> 0] = n.width, HEAPF64[r >>> 3 >>> 0] = n.height, 0;
    }
    _emscripten_get_element_css_size.sig = "ippp";
    var _emscripten_html5_remove_all_event_listeners = () => JSEvents.removeAllEventListeners();
    _emscripten_html5_remove_all_event_listeners.sig = "v";
    var _emscripten_request_animation_frame = function(e, t) {
      return requestAnimationFrame((r) => /* @__PURE__ */ ((n, a) => {
      })());
    };
    _emscripten_request_animation_frame.sig = "ipp";
    var _emscripten_cancel_animation_frame = (e) => cancelAnimationFrame(e);
    _emscripten_cancel_animation_frame.sig = "vi";
    var _emscripten_request_animation_frame_loop = function(e, t) {
      function r(n) {
        /* @__PURE__ */ ((a, o) => {
        })() && requestAnimationFrame(r);
      }
      return requestAnimationFrame(r);
    };
    _emscripten_request_animation_frame_loop.sig = "vpp";
    var _emscripten_performance_now = () => performance.now();
    _emscripten_performance_now.sig = "d";
    var _emscripten_get_device_pixel_ratio = () => devicePixelRatio;
    _emscripten_get_device_pixel_ratio.sig = "d";
    function _emscripten_get_callstack(e, t, r) {
      t >>>= 0;
      var n = getCallstack(e);
      if (!t || r <= 0)
        return lengthBytesUTF8(n) + 1;
      var a = stringToUTF8(n, t, r);
      return a + 1;
    }
    _emscripten_get_callstack.sig = "iipi";
    var convertFrameToPC = (e) => (abort("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"), 0);
    function _emscripten_return_address(e) {
      var t = jsStackTrace().split(`
`);
      return t[0] == "Error" && t.shift(), t[e + 3], convertFrameToPC();
    }
    _emscripten_return_address.sig = "pi";
    var UNWIND_CACHE = {}, saveInUnwindCache = (e) => {
      e.forEach((t) => {
        convertFrameToPC();
      });
    };
    function _emscripten_stack_snapshot() {
      var e = jsStackTrace().split(`
`);
      return e[0] == "Error" && e.shift(), saveInUnwindCache(e), UNWIND_CACHE.last_addr = convertFrameToPC(e[3]), UNWIND_CACHE.last_stack = e, UNWIND_CACHE.last_addr;
    }
    _emscripten_stack_snapshot.sig = "p";
    function _emscripten_stack_unwind_buffer(e, t, r) {
      e >>>= 0, t >>>= 0;
      var n;
      UNWIND_CACHE.last_addr == e ? n = UNWIND_CACHE.last_stack : (n = jsStackTrace().split(`
`), n[0] == "Error" && n.shift(), saveInUnwindCache(n));
      for (var a = 3; n[a] && convertFrameToPC(n[a]) != e; )
        ++a;
      for (var o = 0; o < r && n[o + a]; ++o)
        HEAP32[t + o * 4 >>> 2 >>> 0] = convertFrameToPC(n[o + a]);
      return o;
    }
    _emscripten_stack_unwind_buffer.sig = "ippi";
    function _emscripten_pc_get_function(e) {
      return abort("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"), 0;
    }
    _emscripten_pc_get_function.sig = "pp";
    var convertPCtoSourceLocation = (e) => {
      if (UNWIND_CACHE.last_get_source_pc == e) return UNWIND_CACHE.last_source;
      var t, r;
      if (!r) {
        var n = UNWIND_CACHE[e];
        if (!n) return null;
        (t = /\((.*):(\d+):(\d+)\)$/.exec(n)) ? r = { file: t[1], line: t[2], column: t[3] } : (t = /@(.*):(\d+):(\d+)/.exec(n)) && (r = { file: t[1], line: t[2], column: t[3] });
      }
      return UNWIND_CACHE.last_get_source_pc = e, UNWIND_CACHE.last_source = r, r;
    };
    function _emscripten_pc_get_file(e) {
      e >>>= 0;
      var t = convertPCtoSourceLocation(e);
      return t ? (_emscripten_pc_get_file.ret && _free(_emscripten_pc_get_file.ret), _emscripten_pc_get_file.ret = stringToNewUTF8(t.file), _emscripten_pc_get_file.ret) : 0;
    }
    _emscripten_pc_get_file.sig = "pp";
    function _emscripten_pc_get_line(e) {
      e >>>= 0;
      var t = convertPCtoSourceLocation(e);
      return t ? t.line : 0;
    }
    _emscripten_pc_get_line.sig = "ip";
    function _emscripten_pc_get_column(e) {
      e >>>= 0;
      var t = convertPCtoSourceLocation(e);
      return t && t.column || 0;
    }
    _emscripten_pc_get_column.sig = "ip";
    var _sched_yield = () => 0;
    Module._sched_yield = _sched_yield, _sched_yield.sig = "i";
    function _random_get(e, t) {
      e >>>= 0, t >>>= 0;
      try {
        return _getentropy(e, t), 0;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return r.errno;
      }
    }
    _random_get.sig = "ipp";
    var checkWasiClock = (e) => e == 0 || e == 1 || e == 2 || e == 3;
    function _clock_time_get(e, t, r, n) {
      if (n >>>= 0, !checkWasiClock(e))
        return 28;
      var a;
      e === 0 ? a = Date.now() : a = _emscripten_get_now();
      var o = Math.round(a * 1e3 * 1e3);
      return HEAP32[n >>> 2 >>> 0] = o >>> 0, HEAP32[n + 4 >>> 2 >>> 0] = o / Math.pow(2, 32) >>> 0, 0;
    }
    _clock_time_get.sig = "iiiip";
    function _clock_res_get(e, t) {
      if (t >>>= 0, !checkWasiClock(e))
        return 28;
      var r;
      return e === 0 ? r = 1e3 * 1e3 : r = _emscripten_get_now_res(), HEAP32[t >>> 2 >>> 0] = r >>> 0, HEAP32[t + 4 >>> 2 >>> 0] = r / Math.pow(2, 32) >>> 0, 0;
    }
    _clock_res_get.sig = "iip";
    var _emscripten_unwind_to_js_event_loop = () => {
      throw "unwind";
    };
    _emscripten_unwind_to_js_event_loop.sig = "v";
    var safeSetTimeout = (e, t) => (runtimeKeepalivePush(), setTimeout(() => {
      runtimeKeepalivePop(), callUserCallback(e);
    }, t)), setImmediateWrapped = (e) => {
      setImmediateWrapped.mapping || (setImmediateWrapped.mapping = []);
      var t = setImmediateWrapped.mapping.length;
      return setImmediateWrapped.mapping[t] = setImmediate(() => {
        setImmediateWrapped.mapping[t] = void 0, e();
      }), t;
    }, clearImmediateWrapped = (e) => {
      clearImmediate(setImmediateWrapped.mapping[e]), setImmediateWrapped.mapping[e] = void 0;
    }, _emscripten_set_immediate = function(e, t) {
      return t >>>= 0, runtimeKeepalivePush(), emSetImmediate(() => {
        runtimeKeepalivePop(), callUserCallback(() => /* @__PURE__ */ ((r) => {
        })(t));
      });
    };
    _emscripten_set_immediate.sig = "ipp";
    var _emscripten_clear_immediate = (e) => {
      runtimeKeepalivePop(), emClearImmediate(e);
    };
    _emscripten_clear_immediate.sig = "vi";
    var _emscripten_set_immediate_loop = function(e, t) {
      t >>>= 0;
      function r() {
        callUserCallback(() => {
          /* @__PURE__ */ ((n) => {
          })(t) ? emSetImmediate(r) : runtimeKeepalivePop();
        });
      }
      runtimeKeepalivePush(), emSetImmediate(r);
    };
    _emscripten_set_immediate_loop.sig = "vpp";
    var _emscripten_set_timeout = function(e, t, r) {
      return safeSetTimeout(() => /* @__PURE__ */ ((n) => {
      })(), t);
    };
    _emscripten_set_timeout.sig = "ipdp";
    var _emscripten_clear_timeout = clearTimeout;
    _emscripten_clear_timeout.sig = "vi";
    var _emscripten_set_timeout_loop = function(e, t, r) {
      r >>>= 0;
      function n() {
        var a = _emscripten_get_now(), o = a + t;
        runtimeKeepalivePop(), callUserCallback(() => {
          /* @__PURE__ */ ((l, c) => {
          })(a, r) && (runtimeKeepalivePush(), setTimeout(n, o - _emscripten_get_now()));
        });
      }
      return runtimeKeepalivePush(), setTimeout(n, 0);
    };
    _emscripten_set_timeout_loop.sig = "vpdp";
    var _emscripten_set_interval = function(e, t, r) {
      return r >>>= 0, runtimeKeepalivePush(), setInterval(() => {
        callUserCallback(() => /* @__PURE__ */ ((n) => {
        })(r));
      }, t);
    };
    _emscripten_set_interval.sig = "ipdp";
    var _emscripten_clear_interval = (e) => {
      runtimeKeepalivePop(), clearInterval(e);
    };
    _emscripten_clear_interval.sig = "vi";
    var idsToPromises = (e, t) => {
      for (var r = [], n = 0; n < t; n++) {
        var a = HEAP32[e + n * 4 >>> 2 >>> 0];
        r[n] = getPromise(a);
      }
      return r;
    }, makePromiseCallback = (e, t) => (r) => {
      runtimeKeepalivePop();
      var n = stackSave(), a = stackAlloc(POINTER_SIZE);
      HEAPU32[a >>> 2 >>> 0] = 0;
      try {
        var o = /* @__PURE__ */ ((u, _, d) => {
        })(a, t, r), l = HEAPU32[a >>> 2 >>> 0];
      } catch (u) {
        throw typeof u != "number" ? 0 : u;
      } finally {
        stackRestore(n);
      }
      switch (o) {
        case 0:
          return l;
        case 1:
          return getPromise(l);
        case 2:
          var c = getPromise(l);
          return _emscripten_promise_destroy(l), c;
        case 3:
          throw l;
      }
    };
    function _emscripten_promise_then(e, t, r, n) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, runtimeKeepalivePush();
      var a = getPromise(e), o = promiseMap.allocate({ promise: a.then(makePromiseCallback(t, n), makePromiseCallback(r, n)) });
      return o;
    }
    _emscripten_promise_then.sig = "ppppp";
    var _emscripten_promise_all = function(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = idsToPromises(e, r), a = promiseMap.allocate({ promise: Promise.all(n).then((o) => {
        if (t)
          for (var l = 0; l < r; l++) {
            var c = o[l];
            HEAPU32[t + l * 4 >>> 2 >>> 0] = c;
          }
        return t;
      }) });
      return a;
    };
    _emscripten_promise_all.sig = "pppp";
    var setPromiseResult = (e, t, r) => {
      var n = t ? 0 : 3;
      HEAP32[e >>> 2 >>> 0] = n, HEAPU32[e + 4 >>> 2 >>> 0] = r;
    }, _emscripten_promise_all_settled = function(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = idsToPromises(e, r), a = promiseMap.allocate({ promise: Promise.allSettled(n).then((o) => {
        if (t)
          for (var l = t, c = 0; c < r; c++, l += 8)
            o[c].status === "fulfilled" ? setPromiseResult(l, !0, o[c].value) : setPromiseResult(l, !1, o[c].reason);
        return t;
      }) });
      return a;
    };
    _emscripten_promise_all_settled.sig = "pppp";
    var _emscripten_promise_any = function(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = idsToPromises(e, r), a = promiseMap.allocate({ promise: Promise.any(n).catch((o) => {
        if (t)
          for (var l = 0; l < r; l++)
            HEAPU32[t + l * 4 >>> 2 >>> 0] = o.errors[l];
        throw t;
      }) });
      return a;
    };
    _emscripten_promise_any.sig = "pppp";
    function _emscripten_promise_race(e, t) {
      e >>>= 0, t >>>= 0;
      var r = idsToPromises(e, t), n = promiseMap.allocate({ promise: Promise.race(r) });
      return n;
    }
    _emscripten_promise_race.sig = "ppp";
    var _emscripten_promise_await = function(e, t) {
      return e >>>= 0, t >>>= 0, Asyncify.handleSleep((r) => {
        getPromise(t).then((n) => {
          setPromiseResult(e, !0, n), r();
        }, (n) => {
          setPromiseResult(e, !1, n), r();
        });
      });
    };
    _emscripten_promise_await.sig = "vpp", _emscripten_promise_await.isAsync = !0;
    function ___resumeException(e) {
      throw e >>>= 0, exceptionLast || (exceptionLast = e), exceptionLast;
    }
    ___resumeException.sig = "vp";
    var findMatchingCatch = (e) => {
      var t = exceptionLast;
      if (!t)
        return setTempRet0(0), 0;
      var r = new ExceptionInfo(t);
      r.set_adjusted_ptr(t);
      var n = r.get_type();
      if (!n)
        return setTempRet0(0), t;
      for (var a of e) {
        if (a === 0 || a === n)
          break;
        var o = r.ptr + 16;
        if (___cxa_can_catch(a, n, o))
          return setTempRet0(a), t;
      }
      return setTempRet0(n), t;
    };
    function ___cxa_find_matching_catch_2() {
      return findMatchingCatch([]);
    }
    ___cxa_find_matching_catch_2.sig = "p";
    function ___cxa_find_matching_catch_3(e) {
      return e >>>= 0, findMatchingCatch([e]);
    }
    ___cxa_find_matching_catch_3.sig = "pp";
    function ___cxa_find_matching_catch_4(e, t) {
      return e >>>= 0, t >>>= 0, findMatchingCatch([e, t]);
    }
    ___cxa_find_matching_catch_4.sig = "ppp";
    var exceptionCaught = [], ___cxa_rethrow = () => {
      var e = exceptionCaught.pop();
      e || abort("no exception to throw");
      var t = e.excPtr;
      throw e.get_rethrown() || (exceptionCaught.push(e), e.set_rethrown(!0), e.set_caught(!1), uncaughtExceptionCount++), exceptionLast = t, exceptionLast;
    };
    ___cxa_rethrow.sig = "v";
    function _llvm_eh_typeid_for(e) {
      return e >>>= 0, e;
    }
    _llvm_eh_typeid_for.sig = "vp";
    function ___cxa_begin_catch(e) {
      e >>>= 0;
      var t = new ExceptionInfo(e);
      return t.get_caught() || (t.set_caught(!0), uncaughtExceptionCount--), t.set_rethrown(!1), exceptionCaught.push(t), ___cxa_increment_exception_refcount(e), ___cxa_get_exception_ptr(e);
    }
    ___cxa_begin_catch.sig = "pp";
    var ___cxa_end_catch = () => {
      _setThrew(0, 0);
      var e = exceptionCaught.pop();
      ___cxa_decrement_exception_refcount(e.excPtr), exceptionLast = 0;
    };
    ___cxa_end_catch.sig = "v";
    var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;
    Module.___cxa_uncaught_exceptions = ___cxa_uncaught_exceptions, ___cxa_uncaught_exceptions.sig = "i";
    function ___cxa_call_unexpected(e) {
      return abort("Unexpected exception thrown, this is not properly supported - aborting");
    }
    ___cxa_call_unexpected.sig = "vp";
    function ___cxa_current_primary_exception() {
      if (!exceptionCaught.length)
        return 0;
      var e = exceptionCaught[exceptionCaught.length - 1];
      return ___cxa_increment_exception_refcount(e.excPtr), e.excPtr;
    }
    Module.___cxa_current_primary_exception = ___cxa_current_primary_exception, ___cxa_current_primary_exception.sig = "p";
    function ___cxa_rethrow_primary_exception(e) {
      if (e >>>= 0, !!e) {
        var t = new ExceptionInfo(e);
        exceptionCaught.push(t), t.set_rethrown(!0), ___cxa_rethrow();
      }
    }
    Module.___cxa_rethrow_primary_exception = ___cxa_rethrow_primary_exception, ___cxa_rethrow_primary_exception.sig = "vp";
    var _emscripten_set_main_loop_timing = (e, t) => {
      if (Browser.mainLoop.timingMode = e, Browser.mainLoop.timingValue = t, !Browser.mainLoop.func)
        return 1;
      if (Browser.mainLoop.running || (runtimeKeepalivePush(), Browser.mainLoop.running = !0), e == 0)
        Browser.mainLoop.scheduler = function() {
          var l = Math.max(0, Browser.mainLoop.tickStartTime + t - _emscripten_get_now()) | 0;
          setTimeout(Browser.mainLoop.runner, l);
        }, Browser.mainLoop.method = "timeout";
      else if (e == 1)
        Browser.mainLoop.scheduler = function() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        }, Browser.mainLoop.method = "rAF";
      else if (e == 2) {
        if (typeof Browser.setImmediate > "u")
          if (typeof setImmediate > "u") {
            var r = [], n = "setimmediate", a = (o) => {
              (o.data === n || o.data.target === n) && (o.stopPropagation(), r.shift()());
            };
            addEventListener("message", a, !0), Browser.setImmediate = (o) => {
              r.push(o), postMessage(n, "*");
            };
          } else
            Browser.setImmediate = setImmediate;
        Browser.mainLoop.scheduler = function() {
          Browser.setImmediate(Browser.mainLoop.runner);
        }, Browser.mainLoop.method = "immediate";
      }
      return 0;
    };
    _emscripten_set_main_loop_timing.sig = "iii";
    var setMainLoop = (e, t, r, n, a) => {
      Browser.mainLoop.func = e, Browser.mainLoop.arg = n;
      var o = Browser.mainLoop.currentlyRunningMainloop;
      function l() {
        return o < Browser.mainLoop.currentlyRunningMainloop ? (runtimeKeepalivePop(), maybeExit(), !1) : !0;
      }
      if (Browser.mainLoop.running = !1, Browser.mainLoop.runner = function() {
        var f, p;
        if (!ABORT) {
          if (Browser.mainLoop.queue.length > 0) {
            var u = Browser.mainLoop.queue.shift();
            if (u.func(u.arg), Browser.mainLoop.remainingBlockers) {
              var _ = Browser.mainLoop.remainingBlockers, d = _ % 1 == 0 ? _ - 1 : Math.floor(_);
              u.counted ? Browser.mainLoop.remainingBlockers = d : (d = d + 0.5, Browser.mainLoop.remainingBlockers = (8 * _ + d) / 9);
            }
            if (Browser.mainLoop.updateStatus(), !l()) return;
            setTimeout(Browser.mainLoop.runner, 0);
            return;
          }
          if (l()) {
            if (Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0, Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
              Browser.mainLoop.scheduler();
              return;
            } else Browser.mainLoop.timingMode == 0 && (Browser.mainLoop.tickStartTime = _emscripten_get_now());
            Browser.mainLoop.runIter(e), l() && (typeof SDL == "object" && ((p = (f = SDL.audio) == null ? void 0 : f.queueNewAudioData) == null || p.call(f)), Browser.mainLoop.scheduler());
          }
        }
      }, a || (t && t > 0 ? _emscripten_set_main_loop_timing(0, 1e3 / t) : _emscripten_set_main_loop_timing(1, 1), Browser.mainLoop.scheduler()), r)
        throw "unwind";
    }, Browser = { mainLoop: { running: !1, scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause() {
      Browser.mainLoop.scheduler = null, Browser.mainLoop.currentlyRunningMainloop++;
    }, resume() {
      Browser.mainLoop.currentlyRunningMainloop++;
      var e = Browser.mainLoop.timingMode, t = Browser.mainLoop.timingValue, r = Browser.mainLoop.func;
      Browser.mainLoop.func = null, setMainLoop(r, 0, !1, Browser.mainLoop.arg, !0), _emscripten_set_main_loop_timing(e, t), Browser.mainLoop.scheduler();
    }, updateStatus() {
      if (Module.setStatus) {
        var e = Module.statusMessage || "Please wait...", t = Browser.mainLoop.remainingBlockers, r = Browser.mainLoop.expectedBlockers;
        t ? t < r ? Module.setStatus("{message} ({expected - remaining}/{expected})") : Module.setStatus(e) : Module.setStatus("");
      }
    }, runIter(e) {
      var r;
      if (!ABORT) {
        if (Module.preMainLoop) {
          var t = Module.preMainLoop();
          if (t === !1)
            return;
        }
        callUserCallback(e), (r = Module.postMainLoop) == null || r.call(Module);
      }
    } }, useWebGL: !1, isFullscreen: !1, pointerLock: !1, moduleContextCreatedCallbacks: [], workers: [], init() {
      if (Browser.initted) return;
      Browser.initted = !0;
      var e = {};
      e.canHandle = function(o) {
        return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp|webp)$/i.test(o);
      }, e.handle = function(o, l, c, u) {
        var _ = new Blob([o], { type: Browser.getMimetype(l) });
        _.size !== o.length && (_ = new Blob([new Uint8Array(o).buffer], { type: Browser.getMimetype(l) }));
        var d = URL.createObjectURL(_), f = new Image();
        f.onload = () => {
          var p = document.createElement("canvas");
          p.width = f.width, p.height = f.height;
          var m = p.getContext("2d");
          m.drawImage(f, 0, 0), preloadedImages[l] = p, URL.revokeObjectURL(d), c == null || c(o);
        }, f.onerror = (p) => {
          err(`Image ${d} could not be decoded`), u == null || u();
        }, f.src = d;
      }, preloadPlugins.push(e);
      var t = {};
      t.canHandle = function(o) {
        return !Module.noAudioDecoding && o.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      }, t.handle = function(o, l, c, u) {
        var _ = !1;
        function d(S) {
          _ || (_ = !0, c == null || c(o));
        }
        var f = new Blob([o], { type: Browser.getMimetype(l) }), p = URL.createObjectURL(f), m = new Audio();
        m.addEventListener("canplaythrough", () => d(), !1), m.onerror = function(h) {
          if (_) return;
          err(`warning: browser could not fully decode audio ${l}, trying slower base64 approach`);
          function g(y) {
            for (var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", C = "=", x = "", E = 0, U = 0, v = 0; v < y.length; v++)
              for (E = E << 8 | y[v], U += 8; U >= 6; ) {
                var I = E >> U - 6 & 63;
                U -= 6, x += b[I];
              }
            return U == 2 ? (x += b[(E & 3) << 4], x += C + C) : U == 4 && (x += b[(E & 15) << 2], x += C), x;
          }
          m.src = "data:audio/x-" + l.substr(-3) + ";base64," + g(o), d();
        }, m.src = p, safeSetTimeout(() => {
          d();
        }, 1e4);
      }, preloadPlugins.push(t);
      function r() {
        Browser.pointerLock = document.pointerLockElement === Module.canvas || document.mozPointerLockElement === Module.canvas || document.webkitPointerLockElement === Module.canvas || document.msPointerLockElement === Module.canvas;
      }
      var n = Module.canvas;
      n && (n.requestPointerLock = n.requestPointerLock || n.mozRequestPointerLock || n.webkitRequestPointerLock || n.msRequestPointerLock || (() => {
      }), n.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || (() => {
      }), n.exitPointerLock = n.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", r, !1), document.addEventListener("mozpointerlockchange", r, !1), document.addEventListener("webkitpointerlockchange", r, !1), document.addEventListener("mspointerlockchange", r, !1), Module.elementPointerLock && n.addEventListener("click", (a) => {
        !Browser.pointerLock && Module.canvas.requestPointerLock && (Module.canvas.requestPointerLock(), a.preventDefault());
      }, !1));
    }, createContext(e, t, r, n) {
      if (t && Module.ctx && e == Module.canvas) return Module.ctx;
      var a, o;
      if (t) {
        var l = { antialias: !1, alpha: !1, majorVersion: 1 };
        if (n)
          for (var c in n)
            l[c] = n[c];
        typeof GL < "u" && (o = GL.createContext(e, l), o && (a = GL.getContext(o).GLctx));
      } else
        a = e.getContext("2d");
      return a ? (r && (Module.ctx = a, t && GL.makeContextCurrent(o), Browser.useWebGL = t, Browser.moduleContextCreatedCallbacks.forEach((u) => u()), Browser.init()), a) : null;
    }, fullscreenHandlersInstalled: !1, lockPointer: void 0, resizeCanvas: void 0, requestFullscreen(e, t) {
      Browser.lockPointer = e, Browser.resizeCanvas = t, typeof Browser.lockPointer > "u" && (Browser.lockPointer = !0), typeof Browser.resizeCanvas > "u" && (Browser.resizeCanvas = !1);
      var r = Module.canvas;
      function n() {
        var l, c;
        Browser.isFullscreen = !1;
        var o = r.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === o ? (r.exitFullscreen = Browser.exitFullscreen, Browser.lockPointer && r.requestPointerLock(), Browser.isFullscreen = !0, Browser.resizeCanvas ? Browser.setFullscreenCanvasSize() : Browser.updateCanvasDimensions(r)) : (o.parentNode.insertBefore(r, o), o.parentNode.removeChild(o), Browser.resizeCanvas ? Browser.setWindowedCanvasSize() : Browser.updateCanvasDimensions(r)), (l = Module.onFullScreen) == null || l.call(Module, Browser.isFullscreen), (c = Module.onFullscreen) == null || c.call(Module, Browser.isFullscreen);
      }
      Browser.fullscreenHandlersInstalled || (Browser.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", n, !1), document.addEventListener("mozfullscreenchange", n, !1), document.addEventListener("webkitfullscreenchange", n, !1), document.addEventListener("MSFullscreenChange", n, !1));
      var a = document.createElement("div");
      r.parentNode.insertBefore(a, r), a.appendChild(r), a.requestFullscreen = a.requestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen || (a.webkitRequestFullscreen ? () => a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : null) || (a.webkitRequestFullScreen ? () => a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : null), a.requestFullscreen();
    }, exitFullscreen() {
      if (!Browser.isFullscreen)
        return !1;
      var e = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || (() => {
      });
      return e.apply(document, []), !0;
    }, nextRAF: 0, fakeRequestAnimationFrame(e) {
      var t = Date.now();
      if (Browser.nextRAF === 0)
        Browser.nextRAF = t + 1e3 / 60;
      else
        for (; t + 2 >= Browser.nextRAF; )
          Browser.nextRAF += 1e3 / 60;
      var r = Math.max(Browser.nextRAF - t, 0);
      setTimeout(e, r);
    }, requestAnimationFrame(e) {
      if (typeof requestAnimationFrame == "function") {
        requestAnimationFrame(e);
        return;
      }
      var t = Browser.fakeRequestAnimationFrame;
      t(e);
    }, safeSetTimeout(e, t) {
      return safeSetTimeout(e, t);
    }, safeRequestAnimationFrame(e) {
      return runtimeKeepalivePush(), Browser.requestAnimationFrame(() => {
        runtimeKeepalivePop(), callUserCallback(e);
      });
    }, getMimetype(e) {
      return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[e.substr(e.lastIndexOf(".") + 1)];
    }, getUserMedia(e) {
      window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e);
    }, getMovementX(e) {
      return e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    }, getMovementY(e) {
      return e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    }, getMouseWheelDelta(e) {
      var t = 0;
      switch (e.type) {
        case "DOMMouseScroll":
          t = e.detail / 3;
          break;
        case "mousewheel":
          t = e.wheelDelta / 120;
          break;
        case "wheel":
          switch (t = e.deltaY, e.deltaMode) {
            case 0:
              t /= 100;
              break;
            case 1:
              t /= 3;
              break;
            case 2:
              t *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + e.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + e.type;
      }
      return t;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseCoords(e, t) {
      var r = Module.canvas.getBoundingClientRect(), n = Module.canvas.width, a = Module.canvas.height, o = typeof window.scrollX < "u" ? window.scrollX : window.pageXOffset, l = typeof window.scrollY < "u" ? window.scrollY : window.pageYOffset, c = e - (o + r.left), u = t - (l + r.top);
      return c = c * (n / r.width), u = u * (a / r.height), { x: c, y: u };
    }, setMouseCoords(e, t) {
      const { x: r, y: n } = Browser.calculateMouseCoords(e, t);
      Browser.mouseMovementX = r - Browser.mouseX, Browser.mouseMovementY = n - Browser.mouseY, Browser.mouseX = r, Browser.mouseY = n;
    }, calculateMouseEvent(e) {
      if (Browser.pointerLock)
        e.type != "mousemove" && "mozMovementX" in e ? Browser.mouseMovementX = Browser.mouseMovementY = 0 : (Browser.mouseMovementX = Browser.getMovementX(e), Browser.mouseMovementY = Browser.getMovementY(e)), Browser.mouseX += Browser.mouseMovementX, Browser.mouseY += Browser.mouseMovementY;
      else {
        if (e.type === "touchstart" || e.type === "touchend" || e.type === "touchmove") {
          var t = e.touch;
          if (t === void 0)
            return;
          var r = Browser.calculateMouseCoords(t.pageX, t.pageY);
          if (e.type === "touchstart")
            Browser.lastTouches[t.identifier] = r, Browser.touches[t.identifier] = r;
          else if (e.type === "touchend" || e.type === "touchmove") {
            var n = Browser.touches[t.identifier];
            n || (n = r), Browser.lastTouches[t.identifier] = n, Browser.touches[t.identifier] = r;
          }
          return;
        }
        Browser.setMouseCoords(e.pageX, e.pageY);
      }
    }, resizeListeners: [], updateResizeListeners() {
      var e = Module.canvas;
      Browser.resizeListeners.forEach((t) => t(e.width, e.height));
    }, setCanvasSize(e, t, r) {
      var n = Module.canvas;
      Browser.updateCanvasDimensions(n, e, t), r || Browser.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize() {
      if (typeof SDL < "u") {
        var e = HEAPU32[SDL.screen >>> 2 >>> 0];
        e = e | 8388608, HEAP32[SDL.screen >>> 2 >>> 0] = e;
      }
      Browser.updateCanvasDimensions(Module.canvas), Browser.updateResizeListeners();
    }, setWindowedCanvasSize() {
      if (typeof SDL < "u") {
        var e = HEAPU32[SDL.screen >>> 2 >>> 0];
        e = e & -8388609, HEAP32[SDL.screen >>> 2 >>> 0] = e;
      }
      Browser.updateCanvasDimensions(Module.canvas), Browser.updateResizeListeners();
    }, updateCanvasDimensions(e, t, r) {
      t && r ? (e.widthNative = t, e.heightNative = r) : (t = e.widthNative, r = e.heightNative);
      var n = t, a = r;
      if (Module.forcedAspectRatio && Module.forcedAspectRatio > 0 && (n / a < Module.forcedAspectRatio ? n = Math.round(a * Module.forcedAspectRatio) : a = Math.round(n / Module.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && typeof screen < "u") {
        var o = Math.min(screen.width / n, screen.height / a);
        n = Math.round(n * o), a = Math.round(a * o);
      }
      Browser.resizeCanvas ? (e.width != n && (e.width = n), e.height != a && (e.height = a), typeof e.style < "u" && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != r && (e.height = r), typeof e.style < "u" && (n != t || a != r ? (e.style.setProperty("width", n + "px", "important"), e.style.setProperty("height", a + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))));
    } }, _emscripten_run_preload_plugins = function(e, t, r) {
      e >>>= 0, runtimeKeepalivePush();
      var n = UTF8ToString(e), a = FS.analyzePath(n);
      return a.exists ? (FS.createPreloadedFile(PATH.dirname(n), PATH.basename(n), new Uint8Array(a.object.contents), !0, !0, () => {
        runtimeKeepalivePop();
      }, () => {
        runtimeKeepalivePop();
      }, !0), 0) : -1;
    };
    _emscripten_run_preload_plugins.sig = "ippp";
    var Browser_asyncPrepareDataCounter = 0, _emscripten_run_preload_plugins_data = function(e, t, r, n, a, o) {
      e >>>= 0, r >>>= 0, runtimeKeepalivePush();
      var l = UTF8ToString(r), c = "prepare_data_" + Browser_asyncPrepareDataCounter++ + "." + l;
      stringToNewUTF8(c), FS.createPreloadedFile("/", c, HEAPU8.subarray(e >>> 0, e + t >>> 0), !0, !0, () => {
        runtimeKeepalivePop();
      }, () => {
        runtimeKeepalivePop();
      }, !0);
    };
    _emscripten_run_preload_plugins_data.sig = "vpipppp";
    var _emscripten_async_run_script = function(e, t) {
      e >>>= 0, safeSetTimeout(() => _emscripten_run_script(e), t);
    };
    _emscripten_async_run_script.sig = "vpi";
    var _emscripten_async_load_script = function(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0, e = UTF8ToString(e), runtimeKeepalivePush();
      var n = () => {
        if (runtimeKeepalivePop(), t) {
          var l = () => callUserCallback(() => {
          });
          runDependencies > 0 ? dependenciesFulfilled = l : l();
        }
      }, a = () => {
        runtimeKeepalivePop(), r && callUserCallback(() => {
        });
      }, o = document.createElement("script");
      o.onload = n, o.onerror = a, o.src = e, document.body.appendChild(o);
    };
    _emscripten_async_load_script.sig = "vppp";
    function _emscripten_get_main_loop_timing(e, t) {
      e >>>= 0, t >>>= 0, e && (HEAP32[e >>> 2 >>> 0] = Browser.mainLoop.timingMode), t && (HEAP32[t >>> 2 >>> 0] = Browser.mainLoop.timingValue);
    }
    _emscripten_get_main_loop_timing.sig = "vpp";
    var _emscripten_set_main_loop = function(e, t, r) {
      var n = () => {
      };
      setMainLoop(n, t, r);
    };
    _emscripten_set_main_loop.sig = "vpii";
    var _emscripten_set_main_loop_arg = function(e, t, r, n) {
      t >>>= 0;
      var a = () => /* @__PURE__ */ ((o) => {
      })();
      setMainLoop(a, r, n, t);
    };
    _emscripten_set_main_loop_arg.sig = "vppii";
    var _emscripten_cancel_main_loop = () => {
      Browser.mainLoop.pause(), Browser.mainLoop.func = null;
    };
    _emscripten_cancel_main_loop.sig = "v";
    var _emscripten_pause_main_loop = () => {
      Browser.mainLoop.pause();
    };
    _emscripten_pause_main_loop.sig = "v";
    var _emscripten_resume_main_loop = () => {
      Browser.mainLoop.resume();
    };
    _emscripten_resume_main_loop.sig = "v";
    var __emscripten_push_main_loop_blocker = function(e, t, r) {
      r >>>= 0, Browser.mainLoop.queue.push({ func: () => {
      }, name: UTF8ToString(r), counted: !0 }), Browser.mainLoop.updateStatus();
    };
    __emscripten_push_main_loop_blocker.sig = "vppp";
    var __emscripten_push_uncounted_main_loop_blocker = function(e, t, r) {
      r >>>= 0, Browser.mainLoop.queue.push({ func: () => {
      }, name: UTF8ToString(r), counted: !1 }), Browser.mainLoop.updateStatus();
    };
    __emscripten_push_uncounted_main_loop_blocker.sig = "vppp";
    var _emscripten_set_main_loop_expected_blockers = (e) => {
      Browser.mainLoop.expectedBlockers = e, Browser.mainLoop.remainingBlockers = e, Browser.mainLoop.updateStatus();
    };
    _emscripten_set_main_loop_expected_blockers.sig = "vi";
    var _emscripten_async_call = function(e, t, r) {
      function n() {
      }
      r >= 0 ? safeSetTimeout(n, r) : Browser.safeRequestAnimationFrame(n);
    };
    _emscripten_async_call.sig = "vppi";
    function _emscripten_get_window_title() {
      var e = 256;
      return _emscripten_get_window_title.buffer || (_emscripten_get_window_title.buffer = _malloc(e)), stringToUTF8(document.title, _emscripten_get_window_title.buffer, e), _emscripten_get_window_title.buffer;
    }
    _emscripten_get_window_title.sig = "p";
    function _emscripten_set_window_title(e) {
      return e >>>= 0, document.title = UTF8ToString(e);
    }
    _emscripten_set_window_title.sig = "vp";
    function _emscripten_get_screen_size(e, t) {
      e >>>= 0, t >>>= 0, HEAP32[e >>> 2 >>> 0] = screen.width, HEAP32[t >>> 2 >>> 0] = screen.height;
    }
    _emscripten_get_screen_size.sig = "vpp";
    var _emscripten_hide_mouse = () => {
      for (var e = document.styleSheets[0], t = e.cssRules, r = 0; r < t.length; r++)
        t[r].cssText.substr(0, 6) == "canvas" && (e.deleteRule(r), r--);
      e.insertRule("canvas.emscripten { border: 1px solid black; cursor: none; }", 0);
    };
    _emscripten_hide_mouse.sig = "v";
    var _emscripten_set_canvas_size = (e, t) => {
      Browser.setCanvasSize(e, t);
    };
    _emscripten_set_canvas_size.sig = "vii";
    function _emscripten_get_canvas_size(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = Module.canvas;
      HEAP32[e >>> 2 >>> 0] = n.width, HEAP32[t >>> 2 >>> 0] = n.height, HEAP32[r >>> 2 >>> 0] = Browser.isFullscreen ? 1 : 0;
    }
    _emscripten_get_canvas_size.sig = "vppp";
    function _emscripten_create_worker(e) {
      e >>>= 0, e = UTF8ToString(e);
      var t = Browser.workers.length, r = { worker: new Worker(e), callbacks: [], awaited: 0, buffer: 0, bufferSize: 0 };
      return r.worker.onmessage = function(a) {
        if (!ABORT) {
          var o = Browser.workers[t];
          if (o) {
            var l = a.data.callbackId, c = o.callbacks[l];
            if (c) {
              a.data.finalResponse && (o.awaited--, o.callbacks[l] = null, runtimeKeepalivePop());
              var u = a.data.data;
              u ? (u.byteLength || (u = new Uint8Array(u)), (!o.buffer || o.bufferSize < u.length) && (o.buffer && _free(o.buffer), o.bufferSize = u.length, o.buffer = _malloc(u.length)), HEAPU8.set(u, o.buffer >>> 0), c.func(o.buffer, u.length, c.arg)) : c.func(0, 0, c.arg);
            }
          }
        }
      }, Browser.workers.push(r), t;
    }
    _emscripten_create_worker.sig = "ip";
    var _emscripten_destroy_worker = (e) => {
      var t = Browser.workers[e];
      t.worker.terminate(), t.buffer && _free(t.buffer), Browser.workers[e] = null;
    };
    _emscripten_destroy_worker.sig = "vi";
    var _emscripten_call_worker = function(e, t, r, n, a, o) {
      t >>>= 0, r >>>= 0, a >>>= 0, o >>>= 0, t = UTF8ToString(t);
      var l = Browser.workers[e], c = -1;
      a && (runtimeKeepalivePush(), c = l.callbacks.length, l.callbacks.push({ func: (_, d, f) => {
      }, arg: o }), l.awaited++);
      var u = { funcName: t, callbackId: c, data: r ? new Uint8Array(HEAPU8.subarray(r >>> 0, r + n >>> 0)) : 0 };
      r ? l.worker.postMessage(u, [u.data.buffer]) : l.worker.postMessage(u);
    };
    _emscripten_call_worker.sig = "vippipp";
    var _emscripten_get_worker_queue_size = (e) => {
      var t = Browser.workers[e];
      return t ? t.awaited : -1;
    };
    _emscripten_get_worker_queue_size.sig = "ii";
    var getPreloadedImageData = (e, t, r) => {
      e = PATH_FS.resolve(e);
      var n = preloadedImages[e];
      if (!n) return 0;
      var a = n.getContext("2d"), o = a.getImageData(0, 0, n.width, n.height), l = _malloc(n.width * n.height * 4);
      return HEAPU8.set(o.data, l >>> 0), HEAP32[t >>> 2 >>> 0] = n.width, HEAP32[r >>> 2 >>> 0] = n.height, l;
    };
    function _emscripten_get_preloaded_image_data(e, t, r) {
      return e >>>= 0, t >>>= 0, r >>>= 0, getPreloadedImageData(UTF8ToString(e), t, r);
    }
    _emscripten_get_preloaded_image_data.sig = "pppp";
    function _emscripten_get_preloaded_image_data_from_FILE(e, t, r) {
      e >>>= 0, t >>>= 0, r >>>= 0;
      var n = _fileno(e), a = FS.getStream(n);
      return a ? getPreloadedImageData(a.path, t, r) : 0;
    }
    _emscripten_get_preloaded_image_data_from_FILE.sig = "pppp";
    var wget = { wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle() {
      var e = wget.nextWgetRequestHandle;
      return wget.nextWgetRequestHandle++, e;
    } }, FS_mkdirTree = (e, t) => FS.mkdirTree(e, t), _emscripten_async_wget = function(e, t, r, n) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, runtimeKeepalivePush();
      var a = UTF8ToString(e), o = UTF8ToString(t);
      o = PATH_FS.resolve(o);
      function l(u) {
        u && (runtimeKeepalivePop(), callUserCallback(() => {
          var _ = stackSave();
          stringToUTF8OnStack(o), stackRestore(_);
        }));
      }
      var c = PATH.dirname(o);
      FS_createPreloadedFile(c, PATH.basename(o), a, !0, !0, () => l(r), () => l(n), !1, !1, () => {
        try {
          FS_unlink(o);
        } catch {
        }
        FS_mkdirTree(c);
      });
    };
    _emscripten_async_wget.sig = "vpppp";
    var _emscripten_async_wget_data = function(e, t, r, n) {
      e >>>= 0, t >>>= 0, n >>>= 0, runtimeKeepalivePush(), asyncLoad(UTF8ToString(e), (a) => {
        runtimeKeepalivePop(), callUserCallback(() => {
          var o = _malloc(a.length);
          HEAPU8.set(a, o >>> 0), a.length, _free(o);
        });
      }, () => {
        n && (runtimeKeepalivePop(), callUserCallback(() => {
        }));
      }, !0);
    };
    _emscripten_async_wget_data.sig = "vpppp";
    var _emscripten_async_wget2 = function(e, t, r, n, a, o, l, c) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, a >>>= 0, o >>>= 0, l >>>= 0, runtimeKeepalivePush();
      var u = UTF8ToString(e), _ = UTF8ToString(t);
      _ = PATH_FS.resolve(_);
      var d = UTF8ToString(r), f = UTF8ToString(n), p = _.lastIndexOf("/"), m = new XMLHttpRequest();
      m.open(d, u, !0), m.responseType = "arraybuffer";
      var S = wget.getNextWgetRequestHandle(), h = PATH.dirname(_);
      return m.onload = (g) => {
        if (runtimeKeepalivePop(), m.status >= 200 && m.status < 300) {
          try {
            FS.unlink(_);
          } catch {
          }
          if (FS.mkdirTree(h), FS.createDataFile(_.substr(0, p), _.substr(p + 1), new Uint8Array(m.response), !0, !0, !1), o) {
            var y = stackSave();
            stringToUTF8OnStack(_), stackRestore(y);
          }
        } else
          l && m.status;
        delete wget.wgetRequests[S];
      }, m.onerror = (g) => {
        runtimeKeepalivePop(), l && m.status, delete wget.wgetRequests[S];
      }, m.onprogress = (g) => {
        (g.lengthComputable || g.lengthComputable === void 0 && g.total != 0) && g.loaded / g.total * 100;
      }, m.onabort = (g) => {
        runtimeKeepalivePop(), delete wget.wgetRequests[S];
      }, d == "POST" ? (m.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), m.send(f)) : m.send(null), wget.wgetRequests[S] = m, S;
    };
    _emscripten_async_wget2.sig = "ipppppppp";
    function _emscripten_async_wget2_data(e, t, r, n, a, o, l, c) {
      e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, l >>>= 0, c >>>= 0;
      var u = UTF8ToString(e), _ = UTF8ToString(t), d = UTF8ToString(r), f = new XMLHttpRequest();
      f.open(_, u, !0), f.responseType = "arraybuffer";
      var p = wget.getNextWgetRequestHandle();
      function m() {
        if (l) {
          var S = stackSave();
          f.statusText && stringToUTF8OnStack(f.statusText), f.status, stackRestore(S);
        }
      }
      return f.onload = (S) => {
        if (f.status >= 200 && f.status < 300 || f.status === 0 && u.substr(0, 4).toLowerCase() != "http") {
          var h = new Uint8Array(f.response), g = _malloc(h.length);
          HEAPU8.set(h, g >>> 0), o && h.length, a && _free(g);
        } else
          m();
        delete wget.wgetRequests[p];
      }, f.onerror = (S) => {
        m(), delete wget.wgetRequests[p];
      }, f.onprogress = (S) => {
        c && (S.loaded, (S.lengthComputable || S.lengthComputable === void 0) && S.total);
      }, f.onabort = (S) => {
        delete wget.wgetRequests[p];
      }, _ == "POST" ? (f.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), f.send(d)) : f.send(null), wget.wgetRequests[p] = f, p;
    }
    _emscripten_async_wget2_data.sig = "ippppippp";
    var _emscripten_async_wget2_abort = (e) => {
      var t = wget.wgetRequests[e];
      t == null || t.abort();
    };
    _emscripten_async_wget2_abort.sig = "vi";
    function ___asctime_r(e, t) {
      e >>>= 0, t >>>= 0;
      var r = { tm_sec: HEAP32[e >>> 2 >>> 0], tm_min: HEAP32[e + 4 >>> 2 >>> 0], tm_hour: HEAP32[e + 8 >>> 2 >>> 0], tm_mday: HEAP32[e + 12 >>> 2 >>> 0], tm_mon: HEAP32[e + 16 >>> 2 >>> 0], tm_year: HEAP32[e + 20 >>> 2 >>> 0], tm_wday: HEAP32[e + 24 >>> 2 >>> 0] }, n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], o = n[r.tm_wday] + " " + a[r.tm_mon] + (r.tm_mday < 10 ? "  " : " ") + r.tm_mday + (r.tm_hour < 10 ? " 0" : " ") + r.tm_hour + (r.tm_min < 10 ? ":0" : ":") + r.tm_min + (r.tm_sec < 10 ? ":0" : ":") + r.tm_sec + " " + (1900 + r.tm_year) + `
`;
      return stringToUTF8(o, t, 26), t;
    }
    ___asctime_r.sig = "ppp";
    function _strptime_l(e, t, r, n) {
      return e >>>= 0, t >>>= 0, r >>>= 0, _strptime(e, t, r);
    }
    _strptime_l.sig = "ppppp";
    function ___syscall_shutdown(e, t) {
      try {
        return getSocketFromFD(e), -52;
      } catch (r) {
        if (typeof FS > "u" || r.name !== "ErrnoError") throw r;
        return -r.errno;
      }
    }
    Module.___syscall_shutdown = ___syscall_shutdown, ___syscall_shutdown.sig = "iiiiiii";
    function __dlsym_catchup_js(e, t) {
      e >>>= 0;
      var r = LDSO.loadedLibsByHandle[e], n = r.exports, a = Object.keys(n)[t], o = n[a], l = addFunction(o, o.sig);
      return l;
    }
    __dlsym_catchup_js.sig = "ppi", FS.readFile;
    var _setNetworkCallback = (e, t, r) => {
      function n(a) {
        try {
          if (e === "error") {
            var o = stackSave(), l = stringToUTF8OnStack(a[2]);
            a[0], a[1], stackRestore(o);
          }
        } catch (c) {
          if (!(c instanceof ExitStatus))
            throw c && typeof c == "object" && c.stack && err("exception thrown: " + [c, c.stack]), c;
        }
      }
      runtimeKeepalivePush(), Module.websocket.on(e, r ? n : null);
    };
    function _emscripten_set_socket_error_callback(e, t) {
      e >>>= 0, t >>>= 0, _setNetworkCallback("error", e, t);
    }
    _emscripten_set_socket_error_callback.sig = "vpp";
    function _emscripten_set_socket_open_callback(e, t) {
      e >>>= 0, t >>>= 0, _setNetworkCallback("open", e, t);
    }
    _emscripten_set_socket_open_callback.sig = "vpp";
    function _emscripten_set_socket_listen_callback(e, t) {
      e >>>= 0, t >>>= 0, _setNetworkCallback("listen", e, t);
    }
    _emscripten_set_socket_listen_callback.sig = "vpp";
    function _emscripten_set_socket_connection_callback(e, t) {
      e >>>= 0, t >>>= 0, _setNetworkCallback("connection", e, t);
    }
    _emscripten_set_socket_connection_callback.sig = "vpp";
    function _emscripten_set_socket_message_callback(e, t) {
      e >>>= 0, t >>>= 0, _setNetworkCallback("message", e, t);
    }
    _emscripten_set_socket_message_callback.sig = "vpp";
    function _emscripten_set_socket_close_callback(e, t) {
      e >>>= 0, t >>>= 0, _setNetworkCallback("close", e, t);
    }
    _emscripten_set_socket_close_callback.sig = "vpp";
    var _emscripten_sleep = (e) => Asyncify.handleSleep((t) => safeSetTimeout(t, e));
    _emscripten_sleep.sig = "vi", _emscripten_sleep.isAsync = !0;
    var _emscripten_wget_data = function(e, t, r, n) {
      return e >>>= 0, t >>>= 0, r >>>= 0, n >>>= 0, Asyncify.handleSleep((a) => {
        asyncLoad(UTF8ToString(e), (o) => {
          var l = _malloc(o.length);
          HEAPU8.set(o, l >>> 0), HEAPU32[t >>> 2 >>> 0] = l, HEAP32[r >>> 2 >>> 0] = o.length, HEAP32[n >>> 2 >>> 0] = 0, a();
        }, () => {
          HEAP32[n >>> 2 >>> 0] = 1, a();
        }, !0);
      });
    };
    _emscripten_wget_data.sig = "vpppp", _emscripten_wget_data.isAsync = !0;
    var _emscripten_scan_registers = function(e) {
      return Asyncify.handleSleep((t) => {
        safeSetTimeout(() => {
          HEAPU32[Asyncify.currData >>> 2 >>> 0], t();
        }, 0);
      });
    };
    _emscripten_scan_registers.sig = "vp", _emscripten_scan_registers.isAsync = !0;
    var _emscripten_lazy_load_code = () => Asyncify.handleSleep((e) => {
      wasmBinaryFile += ".lazy.wasm", dependenciesFulfilled = e, createWasm();
    });
    _emscripten_lazy_load_code.sig = "v", _emscripten_lazy_load_code.isAsync = !0;
    async function __load_secondary_module() {
      wasmExports.load_secondary_module_status.value = 1;
      var e = { primary: wasmExports }, t = wasmBinaryFile.slice(0, -5) + ".deferred.wasm";
      await new Promise((r) => {
        instantiateAsync(null, t, e, r);
      });
    }
    __load_secondary_module.sig = "v", __load_secondary_module.isAsync = !0;
    var Fibers = { nextFiber: 0, trampolineRunning: !1, trampoline() {
      if (!Fibers.trampolineRunning && Fibers.nextFiber) {
        Fibers.trampolineRunning = !0;
        do {
          var e = Fibers.nextFiber;
          Fibers.nextFiber = 0, Fibers.finishContextSwitch(e);
        } while (Fibers.nextFiber);
        Fibers.trampolineRunning = !1;
      }
    }, finishContextSwitch(e) {
      var t = HEAPU32[e >>> 2 >>> 0], r = HEAPU32[e + 4 >>> 2 >>> 0];
      _emscripten_stack_set_limits(t, r), stackRestore(HEAPU32[e + 8 >>> 2 >>> 0]);
      var n = HEAPU32[e + 12 >>> 2 >>> 0];
      if (n !== 0)
        Asyncify.currData = null, HEAPU32[e + 12 >>> 2 >>> 0] = 0, HEAPU32[e + 16 >>> 2 >>> 0];
      else {
        var a = e + 20;
        Asyncify.currData = a, Asyncify.state = Asyncify.State.Rewinding, _asyncify_start_rewind(a), Asyncify.doRewind(a);
      }
    } };
    function _emscripten_fiber_swap(e, t) {
      if (e >>>= 0, t >>>= 0, !ABORT)
        if (Asyncify.state === Asyncify.State.Normal) {
          Asyncify.state = Asyncify.State.Unwinding;
          var r = e + 20;
          Asyncify.setDataRewindFunc(r), Asyncify.currData = r, _asyncify_start_unwind(r);
          var n = stackSave();
          HEAPU32[e + 8 >>> 2 >>> 0] = n, Fibers.nextFiber = t;
        } else
          Asyncify.state = Asyncify.State.Normal, _asyncify_stop_rewind(), Asyncify.currData = null;
    }
    _emscripten_fiber_swap.sig = "vpp", _emscripten_fiber_swap.isAsync = !0;
    var _emscripten_is_main_browser_thread = () => !ENVIRONMENT_IS_WORKER;
    registerWasmPlugin(), FS.createPreloadedFile = FS_createPreloadedFile, FS.staticInit(), Module.FS_createPath = FS.createPath, Module.FS_createDataFile = FS.createDataFile, Module.FS_createPreloadedFile = FS.createPreloadedFile, Module.FS_unlink = FS.unlink, Module.FS_createLazyFile = FS.createLazyFile, Module.FS_createDevice = FS.createDevice;
    var emSetImmediate, emClearImmediate;
    if (typeof setImmediate < "u")
      emSetImmediate = setImmediateWrapped, emClearImmediate = clearImmediateWrapped;
    else if (typeof addEventListener == "function") {
      var __setImmediate_id_counter = 0, __setImmediate_queue = [], __setImmediate_message_id = "_si", __setImmediate_cb = (e) => {
        e.data === __setImmediate_message_id && (e.stopPropagation(), __setImmediate_queue.shift()(), ++__setImmediate_id_counter);
      };
      addEventListener("message", __setImmediate_cb, !0), emSetImmediate = (e) => (postMessage(__setImmediate_message_id, "*"), __setImmediate_id_counter + __setImmediate_queue.push(e) - 1), emClearImmediate = (e) => {
        var t = e - __setImmediate_id_counter;
        t >= 0 && t < __setImmediate_queue.length && (__setImmediate_queue[t] = () => {
        });
      };
    }
    Module.requestFullscreen = Browser.requestFullscreen, Module.requestAnimationFrame = Browser.requestAnimationFrame, Module.setCanvasSize = Browser.setCanvasSize, Module.pauseMainLoop = Browser.mainLoop.pause, Module.resumeMainLoop = Browser.mainLoop.resume, Module.getUserMedia = Browser.getUserMedia, Module.createContext = Browser.createContext;
    var preloadedImages = {}, wasmImports = { UTF8ToHtml: _UTF8ToHtml, UTF8Toisolat1: _UTF8Toisolat1, _Unwind_Backtrace: __Unwind_Backtrace, _Unwind_DeleteException: __Unwind_DeleteException, _Unwind_FindEnclosingFunction: __Unwind_FindEnclosingFunction, _Unwind_GetIPInfo: __Unwind_GetIPInfo, _Unwind_RaiseException: __Unwind_RaiseException, __asctime_r: ___asctime_r, __assert_fail: ___assert_fail, __asyncify_data: ___asyncify_data, __asyncify_state: ___asyncify_state, __asyncjs__pdo_pglite_real_doer, __asyncjs__pdo_pglite_real_handle_begin, __asyncjs__pdo_pglite_real_handle_commit, __asyncjs__pdo_pglite_real_handle_rollback, __asyncjs__pdo_pglite_real_last_insert_id, __asyncjs__pdo_pglite_real_stmt_execute, __asyncjs__php_stream_fetch_real_open, __asyncjs__vrzno_await_internal, __call_sighandler: ___call_sighandler, __cxa_begin_catch: ___cxa_begin_catch, __cxa_call_unexpected: ___cxa_call_unexpected, __cxa_end_catch: ___cxa_end_catch, __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2, __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3, __cxa_find_matching_catch_4: ___cxa_find_matching_catch_4, __cxa_rethrow: ___cxa_rethrow, __cxa_throw: ___cxa_throw, __global_base: ___global_base, __heap_base: ___heap_base, __indirect_function_table: wasmTable, __memory_base: ___memory_base, __resumeException: ___resumeException, __stack_high: ___stack_high, __stack_low: ___stack_low, __stack_pointer: ___stack_pointer, __syscall__newselect: ___syscall__newselect, __syscall_accept4: ___syscall_accept4, __syscall_bind: ___syscall_bind, __syscall_chdir: ___syscall_chdir, __syscall_chmod: ___syscall_chmod, __syscall_connect: ___syscall_connect, __syscall_dup: ___syscall_dup, __syscall_dup3: ___syscall_dup3, __syscall_faccessat: ___syscall_faccessat, __syscall_fadvise64: ___syscall_fadvise64, __syscall_fallocate: ___syscall_fallocate, __syscall_fchdir: ___syscall_fchdir, __syscall_fchmod: ___syscall_fchmod, __syscall_fchmodat2: ___syscall_fchmodat2, __syscall_fchown32: ___syscall_fchown32, __syscall_fchownat: ___syscall_fchownat, __syscall_fcntl64: ___syscall_fcntl64, __syscall_fdatasync: ___syscall_fdatasync, __syscall_fstat64: ___syscall_fstat64, __syscall_fstatfs64: ___syscall_fstatfs64, __syscall_ftruncate64: ___syscall_ftruncate64, __syscall_getcwd: ___syscall_getcwd, __syscall_getdents64: ___syscall_getdents64, __syscall_getpeername: ___syscall_getpeername, __syscall_getsockname: ___syscall_getsockname, __syscall_getsockopt: ___syscall_getsockopt, __syscall_ioctl: ___syscall_ioctl, __syscall_listen: ___syscall_listen, __syscall_lstat64: ___syscall_lstat64, __syscall_mkdirat: ___syscall_mkdirat, __syscall_mknodat: ___syscall_mknodat, __syscall_newfstatat: ___syscall_newfstatat, __syscall_openat: ___syscall_openat, __syscall_pipe: ___syscall_pipe, __syscall_poll: ___syscall_poll, __syscall_readlinkat: ___syscall_readlinkat, __syscall_recvfrom: ___syscall_recvfrom, __syscall_recvmsg: ___syscall_recvmsg, __syscall_renameat: ___syscall_renameat, __syscall_rmdir: ___syscall_rmdir, __syscall_sendmsg: ___syscall_sendmsg, __syscall_sendto: ___syscall_sendto, __syscall_socket: ___syscall_socket, __syscall_stat64: ___syscall_stat64, __syscall_statfs64: ___syscall_statfs64, __syscall_symlink: ___syscall_symlink, __syscall_symlinkat: ___syscall_symlinkat, __syscall_truncate64: ___syscall_truncate64, __syscall_unlinkat: ___syscall_unlinkat, __syscall_utimensat: ___syscall_utimensat, __table_base: ___table_base, __xmlOutputBufferCreateFilename: ___xmlOutputBufferCreateFilename, __xmlParserInputBufferCreateFilename: ___xmlParserInputBufferCreateFilename, __xmlRegisterCallbacks: ___xmlRegisterCallbacks, _abort_js: __abort_js, _dlopen_js: __dlopen_js, _dlsym_catchup_js: __dlsym_catchup_js, _dlsym_js: __dlsym_js, _emscripten_dlopen_js: __emscripten_dlopen_js, _emscripten_fs_load_embedded_files: __emscripten_fs_load_embedded_files, _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic, _emscripten_get_progname: __emscripten_get_progname, _emscripten_lookup_name: __emscripten_lookup_name, _emscripten_memcpy_js: __emscripten_memcpy_js, _emscripten_push_main_loop_blocker: __emscripten_push_main_loop_blocker, _emscripten_push_uncounted_main_loop_blocker: __emscripten_push_uncounted_main_loop_blocker, _emscripten_runtime_keepalive_clear: __emscripten_runtime_keepalive_clear, _emscripten_set_offscreencanvas_size: __emscripten_set_offscreencanvas_size, _emscripten_system: __emscripten_system, _emscripten_throw_longjmp: __emscripten_throw_longjmp, _gmtime_js: __gmtime_js, _load_secondary_module: __load_secondary_module, _localtime_js: __localtime_js, _mktime_js: __mktime_js, _mmap_js: __mmap_js, _msync_js: __msync_js, _munmap_js: __munmap_js, _setitimer_js: __setitimer_js, _timegm_js: __timegm_js, _tzset_js: __tzset_js, clock_res_get: _clock_res_get, clock_time_get: _clock_time_get, docbDefaultSAXHandler: _docbDefaultSAXHandler, emscripten_asm_const_async_on_main_thread: _emscripten_asm_const_async_on_main_thread, emscripten_asm_const_double: _emscripten_asm_const_double, emscripten_asm_const_double_sync_on_main_thread: _emscripten_asm_const_double_sync_on_main_thread, emscripten_asm_const_int: _emscripten_asm_const_int, emscripten_asm_const_int_sync_on_main_thread: _emscripten_asm_const_int_sync_on_main_thread, emscripten_asm_const_ptr: _emscripten_asm_const_ptr, emscripten_asm_const_ptr_sync_on_main_thread: _emscripten_asm_const_ptr_sync_on_main_thread, emscripten_async_call: _emscripten_async_call, emscripten_async_load_script: _emscripten_async_load_script, emscripten_async_run_script: _emscripten_async_run_script, emscripten_async_wget: _emscripten_async_wget, emscripten_async_wget2: _emscripten_async_wget2, emscripten_async_wget2_abort: _emscripten_async_wget2_abort, emscripten_async_wget2_data: _emscripten_async_wget2_data, emscripten_async_wget_data: _emscripten_async_wget_data, emscripten_call_worker: _emscripten_call_worker, emscripten_cancel_animation_frame: _emscripten_cancel_animation_frame, emscripten_cancel_main_loop: _emscripten_cancel_main_loop, emscripten_clear_immediate: _emscripten_clear_immediate, emscripten_clear_interval: _emscripten_clear_interval, emscripten_clear_timeout: _emscripten_clear_timeout, emscripten_console_error: _emscripten_console_error, emscripten_console_log: _emscripten_console_log, emscripten_console_trace: _emscripten_console_trace, emscripten_console_warn: _emscripten_console_warn, emscripten_create_worker: _emscripten_create_worker, emscripten_date_now: _emscripten_date_now, emscripten_debugger: _emscripten_debugger, emscripten_destroy_worker: _emscripten_destroy_worker, emscripten_enter_soft_fullscreen: _emscripten_enter_soft_fullscreen, emscripten_err: _emscripten_err, emscripten_errn: _emscripten_errn, emscripten_exit_fullscreen: _emscripten_exit_fullscreen, emscripten_exit_pointerlock: _emscripten_exit_pointerlock, emscripten_exit_soft_fullscreen: _emscripten_exit_soft_fullscreen, emscripten_exit_with_live_runtime: _emscripten_exit_with_live_runtime, emscripten_fiber_swap: _emscripten_fiber_swap, emscripten_force_exit: _emscripten_force_exit, emscripten_get_battery_status: _emscripten_get_battery_status, emscripten_get_callstack: _emscripten_get_callstack, emscripten_get_canvas_element_size: _emscripten_get_canvas_element_size, emscripten_get_canvas_size: _emscripten_get_canvas_size, emscripten_get_compiler_setting: _emscripten_get_compiler_setting, emscripten_get_device_pixel_ratio: _emscripten_get_device_pixel_ratio, emscripten_get_devicemotion_status: _emscripten_get_devicemotion_status, emscripten_get_deviceorientation_status: _emscripten_get_deviceorientation_status, emscripten_get_element_css_size: _emscripten_get_element_css_size, emscripten_get_fullscreen_status: _emscripten_get_fullscreen_status, emscripten_get_gamepad_status: _emscripten_get_gamepad_status, emscripten_get_heap_max: _emscripten_get_heap_max, emscripten_get_main_loop_timing: _emscripten_get_main_loop_timing, emscripten_get_mouse_status: _emscripten_get_mouse_status, emscripten_get_now: _emscripten_get_now, emscripten_get_now_res: _emscripten_get_now_res, emscripten_get_num_gamepads: _emscripten_get_num_gamepads, emscripten_get_orientation_status: _emscripten_get_orientation_status, emscripten_get_pointerlock_status: _emscripten_get_pointerlock_status, emscripten_get_preloaded_image_data: _emscripten_get_preloaded_image_data, emscripten_get_preloaded_image_data_from_FILE: _emscripten_get_preloaded_image_data_from_FILE, emscripten_get_screen_size: _emscripten_get_screen_size, emscripten_get_visibility_status: _emscripten_get_visibility_status, emscripten_get_window_title: _emscripten_get_window_title, emscripten_get_worker_queue_size: _emscripten_get_worker_queue_size, emscripten_has_asyncify: _emscripten_has_asyncify, emscripten_hide_mouse: _emscripten_hide_mouse, emscripten_html5_remove_all_event_listeners: _emscripten_html5_remove_all_event_listeners, emscripten_is_main_browser_thread: _emscripten_is_main_browser_thread, emscripten_lazy_load_code: _emscripten_lazy_load_code, emscripten_lock_orientation: _emscripten_lock_orientation, emscripten_log: _emscripten_log, emscripten_math_acos: _emscripten_math_acos, emscripten_math_acosh: _emscripten_math_acosh, emscripten_math_asin: _emscripten_math_asin, emscripten_math_asinh: _emscripten_math_asinh, emscripten_math_atan: _emscripten_math_atan, emscripten_math_atan2: _emscripten_math_atan2, emscripten_math_atanh: _emscripten_math_atanh, emscripten_math_cbrt: _emscripten_math_cbrt, emscripten_math_cos: _emscripten_math_cos, emscripten_math_cosh: _emscripten_math_cosh, emscripten_math_exp: _emscripten_math_exp, emscripten_math_expm1: _emscripten_math_expm1, emscripten_math_fmod: _emscripten_math_fmod, emscripten_math_hypot: _emscripten_math_hypot, emscripten_math_log: _emscripten_math_log, emscripten_math_log10: _emscripten_math_log10, emscripten_math_log1p: _emscripten_math_log1p, emscripten_math_log2: _emscripten_math_log2, emscripten_math_pow: _emscripten_math_pow, emscripten_math_random: _emscripten_math_random, emscripten_math_round: _emscripten_math_round, emscripten_math_sign: _emscripten_math_sign, emscripten_math_sin: _emscripten_math_sin, emscripten_math_sinh: _emscripten_math_sinh, emscripten_math_sqrt: _emscripten_math_sqrt, emscripten_math_tan: _emscripten_math_tan, emscripten_math_tanh: _emscripten_math_tanh, emscripten_notify_memory_growth: _emscripten_notify_memory_growth, emscripten_out: _emscripten_out, emscripten_outn: _emscripten_outn, emscripten_pause_main_loop: _emscripten_pause_main_loop, emscripten_pc_get_column: _emscripten_pc_get_column, emscripten_pc_get_file: _emscripten_pc_get_file, emscripten_pc_get_function: _emscripten_pc_get_function, emscripten_pc_get_line: _emscripten_pc_get_line, emscripten_performance_now: _emscripten_performance_now, emscripten_print_double: _emscripten_print_double, emscripten_promise_all: _emscripten_promise_all, emscripten_promise_all_settled: _emscripten_promise_all_settled, emscripten_promise_any: _emscripten_promise_any, emscripten_promise_await: _emscripten_promise_await, emscripten_promise_create: _emscripten_promise_create, emscripten_promise_destroy: _emscripten_promise_destroy, emscripten_promise_race: _emscripten_promise_race, emscripten_promise_resolve: _emscripten_promise_resolve, emscripten_promise_then: _emscripten_promise_then, emscripten_random: _emscripten_random, emscripten_request_animation_frame: _emscripten_request_animation_frame, emscripten_request_animation_frame_loop: _emscripten_request_animation_frame_loop, emscripten_request_fullscreen: _emscripten_request_fullscreen, emscripten_request_fullscreen_strategy: _emscripten_request_fullscreen_strategy, emscripten_request_pointerlock: _emscripten_request_pointerlock, emscripten_resize_heap: _emscripten_resize_heap, emscripten_resume_main_loop: _emscripten_resume_main_loop, emscripten_return_address: _emscripten_return_address, emscripten_run_preload_plugins: _emscripten_run_preload_plugins, emscripten_run_preload_plugins_data: _emscripten_run_preload_plugins_data, emscripten_run_script: _emscripten_run_script, emscripten_run_script_int: _emscripten_run_script_int, emscripten_run_script_string: _emscripten_run_script_string, emscripten_runtime_keepalive_check: _emscripten_runtime_keepalive_check, emscripten_runtime_keepalive_pop: _emscripten_runtime_keepalive_pop, emscripten_runtime_keepalive_push: _emscripten_runtime_keepalive_push, emscripten_sample_gamepad_data: _emscripten_sample_gamepad_data, emscripten_scan_registers: _emscripten_scan_registers, emscripten_set_batterychargingchange_callback_on_thread: _emscripten_set_batterychargingchange_callback_on_thread, emscripten_set_batterylevelchange_callback_on_thread: _emscripten_set_batterylevelchange_callback_on_thread, emscripten_set_beforeunload_callback_on_thread: _emscripten_set_beforeunload_callback_on_thread, emscripten_set_blur_callback_on_thread: _emscripten_set_blur_callback_on_thread, emscripten_set_canvas_element_size: _emscripten_set_canvas_element_size, emscripten_set_canvas_size: _emscripten_set_canvas_size, emscripten_set_click_callback_on_thread: _emscripten_set_click_callback_on_thread, emscripten_set_dblclick_callback_on_thread: _emscripten_set_dblclick_callback_on_thread, emscripten_set_devicemotion_callback_on_thread: _emscripten_set_devicemotion_callback_on_thread, emscripten_set_deviceorientation_callback_on_thread: _emscripten_set_deviceorientation_callback_on_thread, emscripten_set_element_css_size: _emscripten_set_element_css_size, emscripten_set_focus_callback_on_thread: _emscripten_set_focus_callback_on_thread, emscripten_set_focusin_callback_on_thread: _emscripten_set_focusin_callback_on_thread, emscripten_set_focusout_callback_on_thread: _emscripten_set_focusout_callback_on_thread, emscripten_set_fullscreenchange_callback_on_thread: _emscripten_set_fullscreenchange_callback_on_thread, emscripten_set_gamepadconnected_callback_on_thread: _emscripten_set_gamepadconnected_callback_on_thread, emscripten_set_gamepaddisconnected_callback_on_thread: _emscripten_set_gamepaddisconnected_callback_on_thread, emscripten_set_immediate: _emscripten_set_immediate, emscripten_set_immediate_loop: _emscripten_set_immediate_loop, emscripten_set_interval: _emscripten_set_interval, emscripten_set_keydown_callback_on_thread: _emscripten_set_keydown_callback_on_thread, emscripten_set_keypress_callback_on_thread: _emscripten_set_keypress_callback_on_thread, emscripten_set_keyup_callback_on_thread: _emscripten_set_keyup_callback_on_thread, emscripten_set_main_loop: _emscripten_set_main_loop, emscripten_set_main_loop_arg: _emscripten_set_main_loop_arg, emscripten_set_main_loop_expected_blockers: _emscripten_set_main_loop_expected_blockers, emscripten_set_main_loop_timing: _emscripten_set_main_loop_timing, emscripten_set_mousedown_callback_on_thread: _emscripten_set_mousedown_callback_on_thread, emscripten_set_mouseenter_callback_on_thread: _emscripten_set_mouseenter_callback_on_thread, emscripten_set_mouseleave_callback_on_thread: _emscripten_set_mouseleave_callback_on_thread, emscripten_set_mousemove_callback_on_thread: _emscripten_set_mousemove_callback_on_thread, emscripten_set_mouseout_callback_on_thread: _emscripten_set_mouseout_callback_on_thread, emscripten_set_mouseover_callback_on_thread: _emscripten_set_mouseover_callback_on_thread, emscripten_set_mouseup_callback_on_thread: _emscripten_set_mouseup_callback_on_thread, emscripten_set_orientationchange_callback_on_thread: _emscripten_set_orientationchange_callback_on_thread, emscripten_set_pointerlockchange_callback_on_thread: _emscripten_set_pointerlockchange_callback_on_thread, emscripten_set_pointerlockerror_callback_on_thread: _emscripten_set_pointerlockerror_callback_on_thread, emscripten_set_resize_callback_on_thread: _emscripten_set_resize_callback_on_thread, emscripten_set_scroll_callback_on_thread: _emscripten_set_scroll_callback_on_thread, emscripten_set_socket_close_callback: _emscripten_set_socket_close_callback, emscripten_set_socket_connection_callback: _emscripten_set_socket_connection_callback, emscripten_set_socket_error_callback: _emscripten_set_socket_error_callback, emscripten_set_socket_listen_callback: _emscripten_set_socket_listen_callback, emscripten_set_socket_message_callback: _emscripten_set_socket_message_callback, emscripten_set_socket_open_callback: _emscripten_set_socket_open_callback, emscripten_set_timeout: _emscripten_set_timeout, emscripten_set_timeout_loop: _emscripten_set_timeout_loop, emscripten_set_touchcancel_callback_on_thread: _emscripten_set_touchcancel_callback_on_thread, emscripten_set_touchend_callback_on_thread: _emscripten_set_touchend_callback_on_thread, emscripten_set_touchmove_callback_on_thread: _emscripten_set_touchmove_callback_on_thread, emscripten_set_touchstart_callback_on_thread: _emscripten_set_touchstart_callback_on_thread, emscripten_set_visibilitychange_callback_on_thread: _emscripten_set_visibilitychange_callback_on_thread, emscripten_set_wheel_callback_on_thread: _emscripten_set_wheel_callback_on_thread, emscripten_set_window_title: _emscripten_set_window_title, emscripten_sleep: _emscripten_sleep, emscripten_stack_snapshot: _emscripten_stack_snapshot, emscripten_stack_unwind_buffer: _emscripten_stack_unwind_buffer, emscripten_throw_number: _emscripten_throw_number, emscripten_throw_string: _emscripten_throw_string, emscripten_unlock_orientation: _emscripten_unlock_orientation, emscripten_unwind_to_js_event_loop: _emscripten_unwind_to_js_event_loop, emscripten_vibrate: _emscripten_vibrate, emscripten_vibrate_pattern: _emscripten_vibrate_pattern, emscripten_wget_data: _emscripten_wget_data, endprotoent: _endprotoent, environ_get: _environ_get, environ_sizes_get: _environ_sizes_get, exit: _exit, fd_close: _fd_close, fd_fdstat_get: _fd_fdstat_get, fd_pread: _fd_pread, fd_pwrite: _fd_pwrite, fd_read: _fd_read, fd_seek: _fd_seek, fd_sync: _fd_sync, fd_write: _fd_write, getaddrinfo: _getaddrinfo, getcontext: _getcontext, getdtablesize: _getdtablesize, getentropy: _getentropy, getnameinfo: _getnameinfo, getprotobyname: _getprotobyname, getprotobynumber: _getprotobynumber, getprotoent: _getprotoent, htmlDefaultSAXHandler: _htmlDefaultSAXHandler, invoke_i, invoke_ii, invoke_iii, invoke_iiii, invoke_iiiii, invoke_iiiiii, invoke_iiiiiii, invoke_iiiiiiii, invoke_iiiiiiiiii, invoke_v, invoke_vi, invoke_vii, invoke_viii, invoke_viiii, invoke_viiiiii, isolat1ToUTF8: _isolat1ToUTF8, llvm_eh_typeid_for: _llvm_eh_typeid_for, makecontext: _makecontext, memory: wasmMemory, oldXMLWDcompatibility: _oldXMLWDcompatibility, php_embed_init: _php_embed_init, php_embed_shutdown: _php_embed_shutdown, posix_spawnp: _posix_spawnp, proc_exit: _proc_exit, random_get: _random_get, setNetworkCallback: _setNetworkCallback, setprotoent: _setprotoent, stackAlloc: _stackAlloc, stackRestore: _stackRestore, stackSave: _stackSave, strptime: _strptime, strptime_l: _strptime_l, swapcontext: _swapcontext, xmlAllocOutputBuffer: _xmlAllocOutputBuffer, xmlAllocParserInputBuffer: _xmlAllocParserInputBuffer, xmlBufferAllocScheme: _xmlBufferAllocScheme, xmlCopyError: _xmlCopyError, xmlDefaultBufferSize: _xmlDefaultBufferSize, xmlDefaultSAXHandler: _xmlDefaultSAXHandler, xmlDefaultSAXLocator: _xmlDefaultSAXLocator, xmlDeregisterNodeDefaultValue: _xmlDeregisterNodeDefaultValue, xmlDictOwns: _xmlDictOwns, xmlDoValidityCheckingDefaultValue: _xmlDoValidityCheckingDefaultValue, xmlFileClose: _xmlFileClose, xmlFileMatch: _xmlFileMatch, xmlFileOpen: _xmlFileOpen, xmlFileRead: _xmlFileRead, xmlFree: _xmlFree, xmlFreeDoc: _xmlFreeDoc, xmlFreeNode: _xmlFreeNode, xmlFreeNodeList: _xmlFreeNodeList, xmlFreeNs: _xmlFreeNs, xmlFreeParserInputBuffer: _xmlFreeParserInputBuffer, xmlFreeProp: _xmlFreeProp, xmlFreeURI: _xmlFreeURI, xmlGenericError: _xmlGenericError, xmlGenericErrorContext: _xmlGenericErrorContext, xmlGenericErrorDefaultFunc: _xmlGenericErrorDefaultFunc, xmlGetExternalEntityLoader: _xmlGetExternalEntityLoader, xmlGetLastError: _xmlGetLastError, xmlGetWarningsDefaultValue: _xmlGetWarningsDefaultValue, xmlHashDefaultDeallocator: _xmlHashDefaultDeallocator, xmlHashLookup: _xmlHashLookup, xmlHashRemoveEntry: _xmlHashRemoveEntry, xmlHashScan: _xmlHashScan, xmlIndentTreeOutput: _xmlIndentTreeOutput, xmlInitParser: _xmlInitParser, xmlInputReadCallbackNop: _xmlInputReadCallbackNop, xmlIsBaseCharGroup: _xmlIsBaseCharGroup, xmlIsCombiningGroup: _xmlIsCombiningGroup, xmlIsDigitGroup: _xmlIsDigitGroup, xmlIsExtenderGroup: _xmlIsExtenderGroup, xmlIsPubidChar_tab: _xmlIsPubidChar_tab, xmlKeepBlanksDefaultValue: _xmlKeepBlanksDefaultValue, xmlLastError: _xmlLastError, xmlLineNumbersDefaultValue: _xmlLineNumbersDefaultValue, xmlLoadExtDtdDefaultValue: _xmlLoadExtDtdDefaultValue, xmlMalloc: _xmlMalloc, xmlMallocAtomic: _xmlMallocAtomic, xmlMemStrdup: _xmlMemStrdup, xmlNewIOInputStream: _xmlNewIOInputStream, xmlNewInputFromFile: _xmlNewInputFromFile, xmlOutputBufferCreateFilenameDefault: _xmlOutputBufferCreateFilenameDefault, xmlOutputBufferCreateFilenameValue: _xmlOutputBufferCreateFilenameValue, xmlParseCharEncoding: _xmlParseCharEncoding, xmlParseURI: _xmlParseURI, xmlParserDebugEntities: _xmlParserDebugEntities, xmlParserError: _xmlParserError, xmlParserInputBufferCreateFilenameDefault: _xmlParserInputBufferCreateFilenameDefault, xmlParserInputBufferCreateFilenameValue: _xmlParserInputBufferCreateFilenameValue, xmlParserMaxDepth: _xmlParserMaxDepth, xmlParserValidityError: _xmlParserValidityError, xmlParserValidityWarning: _xmlParserValidityWarning, xmlParserVersion: _xmlParserVersion, xmlParserWarning: _xmlParserWarning, xmlPedanticParserDefaultValue: _xmlPedanticParserDefaultValue, xmlRealloc: _xmlRealloc, xmlReconciliateNs: _xmlReconciliateNs, xmlRegisterNodeDefaultValue: _xmlRegisterNodeDefaultValue, xmlRelaxNGCleanupTypes: _xmlRelaxNGCleanupTypes, xmlRemoveID: _xmlRemoveID, xmlResetError: _xmlResetError, xmlResetLastError: _xmlResetLastError, xmlSAX2AttributeDecl: _xmlSAX2AttributeDecl, xmlSAX2CDataBlock: _xmlSAX2CDataBlock, xmlSAX2Characters: _xmlSAX2Characters, xmlSAX2Comment: _xmlSAX2Comment, xmlSAX2ElementDecl: _xmlSAX2ElementDecl, xmlSAX2EndDocument: _xmlSAX2EndDocument, xmlSAX2EndElement: _xmlSAX2EndElement, xmlSAX2EndElementNs: _xmlSAX2EndElementNs, xmlSAX2EntityDecl: _xmlSAX2EntityDecl, xmlSAX2ExternalSubset: _xmlSAX2ExternalSubset, xmlSAX2GetColumnNumber: _xmlSAX2GetColumnNumber, xmlSAX2GetEntity: _xmlSAX2GetEntity, xmlSAX2GetLineNumber: _xmlSAX2GetLineNumber, xmlSAX2GetParameterEntity: _xmlSAX2GetParameterEntity, xmlSAX2GetPublicId: _xmlSAX2GetPublicId, xmlSAX2GetSystemId: _xmlSAX2GetSystemId, xmlSAX2HasExternalSubset: _xmlSAX2HasExternalSubset, xmlSAX2HasInternalSubset: _xmlSAX2HasInternalSubset, xmlSAX2IgnorableWhitespace: _xmlSAX2IgnorableWhitespace, xmlSAX2InternalSubset: _xmlSAX2InternalSubset, xmlSAX2IsStandalone: _xmlSAX2IsStandalone, xmlSAX2NotationDecl: _xmlSAX2NotationDecl, xmlSAX2ProcessingInstruction: _xmlSAX2ProcessingInstruction, xmlSAX2Reference: _xmlSAX2Reference, xmlSAX2ResolveEntity: _xmlSAX2ResolveEntity, xmlSAX2SetDocumentLocator: _xmlSAX2SetDocumentLocator, xmlSAX2StartDocument: _xmlSAX2StartDocument, xmlSAX2StartElement: _xmlSAX2StartElement, xmlSAX2StartElementNs: _xmlSAX2StartElementNs, xmlSAX2UnparsedEntityDecl: _xmlSAX2UnparsedEntityDecl, xmlSaveNoEmptyTags: _xmlSaveNoEmptyTags, xmlSetExternalEntityLoader: _xmlSetExternalEntityLoader, xmlSetGenericErrorFunc: _xmlSetGenericErrorFunc, xmlSetStructuredErrorFunc: _xmlSetStructuredErrorFunc, xmlStrdup: _xmlStrdup, xmlStringComment: _xmlStringComment, xmlStringText: _xmlStringText, xmlStringTextNoenc: _xmlStringTextNoenc, xmlStrncmp: _xmlStrncmp, xmlStructuredError: _xmlStructuredError, xmlStructuredErrorContext: _xmlStructuredErrorContext, xmlSubstituteEntitiesDefaultValue: _xmlSubstituteEntitiesDefaultValue, xmlTreeIndentString: _xmlTreeIndentString, xmlUCSIsAegeanNumbers: _xmlUCSIsAegeanNumbers, xmlUCSIsAlphabeticPresentationForms: _xmlUCSIsAlphabeticPresentationForms, xmlUCSIsArabic: _xmlUCSIsArabic, xmlUCSIsArabicPresentationFormsA: _xmlUCSIsArabicPresentationFormsA, xmlUCSIsArabicPresentationFormsB: _xmlUCSIsArabicPresentationFormsB, xmlUCSIsArmenian: _xmlUCSIsArmenian, xmlUCSIsArrows: _xmlUCSIsArrows, xmlUCSIsBasicLatin: _xmlUCSIsBasicLatin, xmlUCSIsBengali: _xmlUCSIsBengali, xmlUCSIsBlockElements: _xmlUCSIsBlockElements, xmlUCSIsBopomofo: _xmlUCSIsBopomofo, xmlUCSIsBopomofoExtended: _xmlUCSIsBopomofoExtended, xmlUCSIsBoxDrawing: _xmlUCSIsBoxDrawing, xmlUCSIsBraillePatterns: _xmlUCSIsBraillePatterns, xmlUCSIsBuhid: _xmlUCSIsBuhid, xmlUCSIsByzantineMusicalSymbols: _xmlUCSIsByzantineMusicalSymbols, xmlUCSIsCJKCompatibility: _xmlUCSIsCJKCompatibility, xmlUCSIsCJKCompatibilityForms: _xmlUCSIsCJKCompatibilityForms, xmlUCSIsCJKCompatibilityIdeographs: _xmlUCSIsCJKCompatibilityIdeographs, xmlUCSIsCJKCompatibilityIdeographsSupplement: _xmlUCSIsCJKCompatibilityIdeographsSupplement, xmlUCSIsCJKRadicalsSupplement: _xmlUCSIsCJKRadicalsSupplement, xmlUCSIsCJKSymbolsandPunctuation: _xmlUCSIsCJKSymbolsandPunctuation, xmlUCSIsCJKUnifiedIdeographs: _xmlUCSIsCJKUnifiedIdeographs, xmlUCSIsCJKUnifiedIdeographsExtensionA: _xmlUCSIsCJKUnifiedIdeographsExtensionA, xmlUCSIsCJKUnifiedIdeographsExtensionB: _xmlUCSIsCJKUnifiedIdeographsExtensionB, xmlUCSIsCatC: _xmlUCSIsCatC, xmlUCSIsCatCc: _xmlUCSIsCatCc, xmlUCSIsCatCf: _xmlUCSIsCatCf, xmlUCSIsCatCo: _xmlUCSIsCatCo, xmlUCSIsCatCs: _xmlUCSIsCatCs, xmlUCSIsCatL: _xmlUCSIsCatL, xmlUCSIsCatLl: _xmlUCSIsCatLl, xmlUCSIsCatLm: _xmlUCSIsCatLm, xmlUCSIsCatLo: _xmlUCSIsCatLo, xmlUCSIsCatLt: _xmlUCSIsCatLt, xmlUCSIsCatLu: _xmlUCSIsCatLu, xmlUCSIsCatM: _xmlUCSIsCatM, xmlUCSIsCatMc: _xmlUCSIsCatMc, xmlUCSIsCatMe: _xmlUCSIsCatMe, xmlUCSIsCatMn: _xmlUCSIsCatMn, xmlUCSIsCatN: _xmlUCSIsCatN, xmlUCSIsCatNd: _xmlUCSIsCatNd, xmlUCSIsCatNl: _xmlUCSIsCatNl, xmlUCSIsCatNo: _xmlUCSIsCatNo, xmlUCSIsCatP: _xmlUCSIsCatP, xmlUCSIsCatPc: _xmlUCSIsCatPc, xmlUCSIsCatPd: _xmlUCSIsCatPd, xmlUCSIsCatPe: _xmlUCSIsCatPe, xmlUCSIsCatPf: _xmlUCSIsCatPf, xmlUCSIsCatPi: _xmlUCSIsCatPi, xmlUCSIsCatPo: _xmlUCSIsCatPo, xmlUCSIsCatPs: _xmlUCSIsCatPs, xmlUCSIsCatS: _xmlUCSIsCatS, xmlUCSIsCatSc: _xmlUCSIsCatSc, xmlUCSIsCatSk: _xmlUCSIsCatSk, xmlUCSIsCatSm: _xmlUCSIsCatSm, xmlUCSIsCatSo: _xmlUCSIsCatSo, xmlUCSIsCatZ: _xmlUCSIsCatZ, xmlUCSIsCatZl: _xmlUCSIsCatZl, xmlUCSIsCatZp: _xmlUCSIsCatZp, xmlUCSIsCatZs: _xmlUCSIsCatZs, xmlUCSIsCherokee: _xmlUCSIsCherokee, xmlUCSIsCombiningDiacriticalMarks: _xmlUCSIsCombiningDiacriticalMarks, xmlUCSIsCombiningDiacriticalMarksforSymbols: _xmlUCSIsCombiningDiacriticalMarksforSymbols, xmlUCSIsCombiningHalfMarks: _xmlUCSIsCombiningHalfMarks, xmlUCSIsCombiningMarksforSymbols: _xmlUCSIsCombiningMarksforSymbols, xmlUCSIsControlPictures: _xmlUCSIsControlPictures, xmlUCSIsCurrencySymbols: _xmlUCSIsCurrencySymbols, xmlUCSIsCypriotSyllabary: _xmlUCSIsCypriotSyllabary, xmlUCSIsCyrillic: _xmlUCSIsCyrillic, xmlUCSIsCyrillicSupplement: _xmlUCSIsCyrillicSupplement, xmlUCSIsDeseret: _xmlUCSIsDeseret, xmlUCSIsDevanagari: _xmlUCSIsDevanagari, xmlUCSIsDingbats: _xmlUCSIsDingbats, xmlUCSIsEnclosedAlphanumerics: _xmlUCSIsEnclosedAlphanumerics, xmlUCSIsEnclosedCJKLettersandMonths: _xmlUCSIsEnclosedCJKLettersandMonths, xmlUCSIsEthiopic: _xmlUCSIsEthiopic, xmlUCSIsGeneralPunctuation: _xmlUCSIsGeneralPunctuation, xmlUCSIsGeometricShapes: _xmlUCSIsGeometricShapes, xmlUCSIsGeorgian: _xmlUCSIsGeorgian, xmlUCSIsGothic: _xmlUCSIsGothic, xmlUCSIsGreek: _xmlUCSIsGreek, xmlUCSIsGreekExtended: _xmlUCSIsGreekExtended, xmlUCSIsGreekandCoptic: _xmlUCSIsGreekandCoptic, xmlUCSIsGujarati: _xmlUCSIsGujarati, xmlUCSIsGurmukhi: _xmlUCSIsGurmukhi, xmlUCSIsHalfwidthandFullwidthForms: _xmlUCSIsHalfwidthandFullwidthForms, xmlUCSIsHangulCompatibilityJamo: _xmlUCSIsHangulCompatibilityJamo, xmlUCSIsHangulJamo: _xmlUCSIsHangulJamo, xmlUCSIsHangulSyllables: _xmlUCSIsHangulSyllables, xmlUCSIsHanunoo: _xmlUCSIsHanunoo, xmlUCSIsHebrew: _xmlUCSIsHebrew, xmlUCSIsHighPrivateUseSurrogates: _xmlUCSIsHighPrivateUseSurrogates, xmlUCSIsHighSurrogates: _xmlUCSIsHighSurrogates, xmlUCSIsHiragana: _xmlUCSIsHiragana, xmlUCSIsIPAExtensions: _xmlUCSIsIPAExtensions, xmlUCSIsIdeographicDescriptionCharacters: _xmlUCSIsIdeographicDescriptionCharacters, xmlUCSIsKanbun: _xmlUCSIsKanbun, xmlUCSIsKangxiRadicals: _xmlUCSIsKangxiRadicals, xmlUCSIsKannada: _xmlUCSIsKannada, xmlUCSIsKatakana: _xmlUCSIsKatakana, xmlUCSIsKatakanaPhoneticExtensions: _xmlUCSIsKatakanaPhoneticExtensions, xmlUCSIsKhmer: _xmlUCSIsKhmer, xmlUCSIsKhmerSymbols: _xmlUCSIsKhmerSymbols, xmlUCSIsLao: _xmlUCSIsLao, xmlUCSIsLatin1Supplement: _xmlUCSIsLatin1Supplement, xmlUCSIsLatinExtendedA: _xmlUCSIsLatinExtendedA, xmlUCSIsLatinExtendedAdditional: _xmlUCSIsLatinExtendedAdditional, xmlUCSIsLatinExtendedB: _xmlUCSIsLatinExtendedB, xmlUCSIsLetterlikeSymbols: _xmlUCSIsLetterlikeSymbols, xmlUCSIsLimbu: _xmlUCSIsLimbu, xmlUCSIsLinearBIdeograms: _xmlUCSIsLinearBIdeograms, xmlUCSIsLinearBSyllabary: _xmlUCSIsLinearBSyllabary, xmlUCSIsLowSurrogates: _xmlUCSIsLowSurrogates, xmlUCSIsMalayalam: _xmlUCSIsMalayalam, xmlUCSIsMathematicalAlphanumericSymbols: _xmlUCSIsMathematicalAlphanumericSymbols, xmlUCSIsMathematicalOperators: _xmlUCSIsMathematicalOperators, xmlUCSIsMiscellaneousMathematicalSymbolsA: _xmlUCSIsMiscellaneousMathematicalSymbolsA, xmlUCSIsMiscellaneousMathematicalSymbolsB: _xmlUCSIsMiscellaneousMathematicalSymbolsB, xmlUCSIsMiscellaneousSymbols: _xmlUCSIsMiscellaneousSymbols, xmlUCSIsMiscellaneousSymbolsandArrows: _xmlUCSIsMiscellaneousSymbolsandArrows, xmlUCSIsMiscellaneousTechnical: _xmlUCSIsMiscellaneousTechnical, xmlUCSIsMongolian: _xmlUCSIsMongolian, xmlUCSIsMusicalSymbols: _xmlUCSIsMusicalSymbols, xmlUCSIsMyanmar: _xmlUCSIsMyanmar, xmlUCSIsNumberForms: _xmlUCSIsNumberForms, xmlUCSIsOgham: _xmlUCSIsOgham, xmlUCSIsOldItalic: _xmlUCSIsOldItalic, xmlUCSIsOpticalCharacterRecognition: _xmlUCSIsOpticalCharacterRecognition, xmlUCSIsOriya: _xmlUCSIsOriya, xmlUCSIsOsmanya: _xmlUCSIsOsmanya, xmlUCSIsPhoneticExtensions: _xmlUCSIsPhoneticExtensions, xmlUCSIsPrivateUse: _xmlUCSIsPrivateUse, xmlUCSIsPrivateUseArea: _xmlUCSIsPrivateUseArea, xmlUCSIsRunic: _xmlUCSIsRunic, xmlUCSIsShavian: _xmlUCSIsShavian, xmlUCSIsSinhala: _xmlUCSIsSinhala, xmlUCSIsSmallFormVariants: _xmlUCSIsSmallFormVariants, xmlUCSIsSpacingModifierLetters: _xmlUCSIsSpacingModifierLetters, xmlUCSIsSpecials: _xmlUCSIsSpecials, xmlUCSIsSuperscriptsandSubscripts: _xmlUCSIsSuperscriptsandSubscripts, xmlUCSIsSupplementalArrowsA: _xmlUCSIsSupplementalArrowsA, xmlUCSIsSupplementalArrowsB: _xmlUCSIsSupplementalArrowsB, xmlUCSIsSupplementalMathematicalOperators: _xmlUCSIsSupplementalMathematicalOperators, xmlUCSIsSupplementaryPrivateUseAreaA: _xmlUCSIsSupplementaryPrivateUseAreaA, xmlUCSIsSupplementaryPrivateUseAreaB: _xmlUCSIsSupplementaryPrivateUseAreaB, xmlUCSIsSyriac: _xmlUCSIsSyriac, xmlUCSIsTagalog: _xmlUCSIsTagalog, xmlUCSIsTagbanwa: _xmlUCSIsTagbanwa, xmlUCSIsTags: _xmlUCSIsTags, xmlUCSIsTaiLe: _xmlUCSIsTaiLe, xmlUCSIsTaiXuanJingSymbols: _xmlUCSIsTaiXuanJingSymbols, xmlUCSIsTamil: _xmlUCSIsTamil, xmlUCSIsTelugu: _xmlUCSIsTelugu, xmlUCSIsThaana: _xmlUCSIsThaana, xmlUCSIsThai: _xmlUCSIsThai, xmlUCSIsTibetan: _xmlUCSIsTibetan, xmlUCSIsUgaritic: _xmlUCSIsUgaritic, xmlUCSIsUnifiedCanadianAboriginalSyllabics: _xmlUCSIsUnifiedCanadianAboriginalSyllabics, xmlUCSIsVariationSelectors: _xmlUCSIsVariationSelectors, xmlUCSIsVariationSelectorsSupplement: _xmlUCSIsVariationSelectorsSupplement, xmlUCSIsYiRadicals: _xmlUCSIsYiRadicals, xmlUCSIsYiSyllables: _xmlUCSIsYiSyllables, xmlUCSIsYijingHexagramSymbols: _xmlUCSIsYijingHexagramSymbols, xmlURIUnescapeString: _xmlURIUnescapeString, xmlUnlinkNode: _xmlUnlinkNode, xmlXPathBooleanFunction: _xmlXPathBooleanFunction, xmlXPathCeilingFunction: _xmlXPathCeilingFunction, xmlXPathConcatFunction: _xmlXPathConcatFunction, xmlXPathContainsFunction: _xmlXPathContainsFunction, xmlXPathCountFunction: _xmlXPathCountFunction, xmlXPathFalseFunction: _xmlXPathFalseFunction, xmlXPathFloorFunction: _xmlXPathFloorFunction, xmlXPathIdFunction: _xmlXPathIdFunction, xmlXPathLangFunction: _xmlXPathLangFunction, xmlXPathLastFunction: _xmlXPathLastFunction, xmlXPathLocalNameFunction: _xmlXPathLocalNameFunction, xmlXPathNAN: _xmlXPathNAN, xmlXPathNINF: _xmlXPathNINF, xmlXPathNamespaceURIFunction: _xmlXPathNamespaceURIFunction, xmlXPathNextAncestor: _xmlXPathNextAncestor, xmlXPathNextAncestorOrSelf: _xmlXPathNextAncestorOrSelf, xmlXPathNextAttribute: _xmlXPathNextAttribute, xmlXPathNextChild: _xmlXPathNextChild, xmlXPathNextDescendant: _xmlXPathNextDescendant, xmlXPathNextDescendantOrSelf: _xmlXPathNextDescendantOrSelf, xmlXPathNextFollowing: _xmlXPathNextFollowing, xmlXPathNextFollowingSibling: _xmlXPathNextFollowingSibling, xmlXPathNextNamespace: _xmlXPathNextNamespace, xmlXPathNextParent: _xmlXPathNextParent, xmlXPathNextPrecedingSibling: _xmlXPathNextPrecedingSibling, xmlXPathNextSelf: _xmlXPathNextSelf, xmlXPathNormalizeFunction: _xmlXPathNormalizeFunction, xmlXPathNotFunction: _xmlXPathNotFunction, xmlXPathNumberFunction: _xmlXPathNumberFunction, xmlXPathPINF: _xmlXPathPINF, xmlXPathPositionFunction: _xmlXPathPositionFunction, xmlXPathRoundFunction: _xmlXPathRoundFunction, xmlXPathStartsWithFunction: _xmlXPathStartsWithFunction, xmlXPathStringFunction: _xmlXPathStringFunction, xmlXPathStringLengthFunction: _xmlXPathStringLengthFunction, xmlXPathSubstringAfterFunction: _xmlXPathSubstringAfterFunction, xmlXPathSubstringBeforeFunction: _xmlXPathSubstringBeforeFunction, xmlXPathSubstringFunction: _xmlXPathSubstringFunction, xmlXPathSumFunction: _xmlXPathSumFunction, xmlXPathTranslateFunction: _xmlXPathTranslateFunction, xmlXPathTrueFunction: _xmlXPathTrueFunction }, wasmExports = createWasm(), _free = Module._free = (e) => (_free = Module._free = wasmExports.free)(e), _malloc = Module._malloc = (e) => (_malloc = Module._malloc = wasmExports.malloc)(e);
    Module._main = (e, t) => (Module._main = wasmExports.main)(e, t), Module._pib_init = () => (Module._pib_init = wasmExports.pib_init)(), Module._pib_storage_init = () => (Module._pib_storage_init = wasmExports.pib_storage_init)(), Module._pib_refresh = () => (Module._pib_refresh = wasmExports.pib_refresh)(), Module._pib_flush = () => (Module._pib_flush = wasmExports.pib_flush)(), Module._pib_exec = (e) => (Module._pib_exec = wasmExports.pib_exec)(e), Module._pib_run = (e) => (Module._pib_run = wasmExports.pib_run)(e), Module._pib_php_version = () => (Module._pib_php_version = wasmExports.pib_php_version)(), Module._pib_php_ext_api_version = () => (Module._pib_php_ext_api_version = wasmExports.pib_php_ext_api_version)(), Module._pib_tokenize = (e) => (Module._pib_tokenize = wasmExports.pib_tokenize)(e);
    var _htonl = (e) => (_htonl = wasmExports.htonl)(e), _ntohs = (e) => (_ntohs = wasmExports.ntohs)(e), _htons = (e) => (_htons = wasmExports.htons)(e), _fileno = (e) => (_fileno = wasmExports.fileno)(e);
    Module._vrzno_expose_gc_ptr = (e) => (Module._vrzno_expose_gc_ptr = wasmExports.vrzno_expose_gc_ptr)(e), Module._vrzno_expose_inc_refcount = (e) => (Module._vrzno_expose_inc_refcount = wasmExports.vrzno_expose_inc_refcount)(e), Module._vrzno_expose_dec_refcount = (e) => (Module._vrzno_expose_dec_refcount = wasmExports.vrzno_expose_dec_refcount)(e), Module._vrzno_expose_refcount = (e) => (Module._vrzno_expose_refcount = wasmExports.vrzno_expose_refcount)(e), Module._vrzno_expose_efree = (e) => (Module._vrzno_expose_efree = wasmExports.vrzno_expose_efree)(e), Module._vrzno_expose_create_bool = (e, t) => (Module._vrzno_expose_create_bool = wasmExports.vrzno_expose_create_bool)(e, t), Module._vrzno_expose_create_null = (e) => (Module._vrzno_expose_create_null = wasmExports.vrzno_expose_create_null)(e), Module._vrzno_expose_create_undef = (e) => (Module._vrzno_expose_create_undef = wasmExports.vrzno_expose_create_undef)(e), Module._vrzno_expose_create_long = (e, t) => (Module._vrzno_expose_create_long = wasmExports.vrzno_expose_create_long)(e, t), Module._vrzno_expose_create_double = (e, t) => (Module._vrzno_expose_create_double = wasmExports.vrzno_expose_create_double)(e, t), Module._vrzno_expose_create_string = (e, t) => (Module._vrzno_expose_create_string = wasmExports.vrzno_expose_create_string)(e, t), Module._vrzno_expose_create_object_for_target = (e, t, r, n) => (Module._vrzno_expose_create_object_for_target = wasmExports.vrzno_expose_create_object_for_target)(e, t, r, n), Module._vrzno_expose_create_params = (e) => (Module._vrzno_expose_create_params = wasmExports.vrzno_expose_create_params)(e), Module._vrzno_expose_object_keys = (e) => (Module._vrzno_expose_object_keys = wasmExports.vrzno_expose_object_keys)(e), Module._vrzno_expose_array_keys = (e) => (Module._vrzno_expose_array_keys = wasmExports.vrzno_expose_array_keys)(e), Module._vrzno_expose_zval_deref = (e) => (Module._vrzno_expose_zval_deref = wasmExports.vrzno_expose_zval_deref)(e), Module._vrzno_expose_zval_dump = (e, t) => (Module._vrzno_expose_zval_dump = wasmExports.vrzno_expose_zval_dump)(e, t), Module._vrzno_expose_type = (e) => (Module._vrzno_expose_type = wasmExports.vrzno_expose_type)(e), Module._vrzno_expose_array_length = (e) => (Module._vrzno_expose_array_length = wasmExports.vrzno_expose_array_length)(e), Module._vrzno_expose_zval_target = (e) => (Module._vrzno_expose_zval_target = wasmExports.vrzno_expose_zval_target)(e), Module._vrzno_expose_target = (e) => (Module._vrzno_expose_target = wasmExports.vrzno_expose_target)(e), Module._vrzno_expose_callable = (e) => (Module._vrzno_expose_callable = wasmExports.vrzno_expose_callable)(e), Module._vrzno_expose_long = (e) => (Module._vrzno_expose_long = wasmExports.vrzno_expose_long)(e), Module._vrzno_expose_double = (e) => (Module._vrzno_expose_double = wasmExports.vrzno_expose_double)(e), Module._vrzno_expose_string = (e) => (Module._vrzno_expose_string = wasmExports.vrzno_expose_string)(e), Module._vrzno_expose_object = (e) => (Module._vrzno_expose_object = wasmExports.vrzno_expose_object)(e), Module._vrzno_expose_array = (e) => (Module._vrzno_expose_array = wasmExports.vrzno_expose_array)(e), Module._vrzno_expose_closure = (e) => (Module._vrzno_expose_closure = wasmExports.vrzno_expose_closure)(e), Module._vrzno_expose_key_pointer = (e, t) => (Module._vrzno_expose_key_pointer = wasmExports.vrzno_expose_key_pointer)(e, t), Module._vrzno_expose_property_pointer = (e, t) => (Module._vrzno_expose_property_pointer = wasmExports.vrzno_expose_property_pointer)(e, t), Module._vrzno_expose_dimension_pointer = (e, t) => (Module._vrzno_expose_dimension_pointer = wasmExports.vrzno_expose_dimension_pointer)(e, t), Module._vrzno_expose_method_pointer = (e, t) => (Module._vrzno_expose_method_pointer = wasmExports.vrzno_expose_method_pointer)(e, t), Module._vrzno_exec_callback = (e, t, r, n) => (Module._vrzno_exec_callback = wasmExports.vrzno_exec_callback)(e, t, r, n), Module._vrzno_del_callback = (e) => (Module._vrzno_del_callback = wasmExports.vrzno_del_callback)(e);
    var _fflush = (e) => (_fflush = wasmExports.fflush)(e), _calloc = (e, t) => (_calloc = wasmExports.calloc)(e, t);
    Module._main = (e, t) => (Module._main = wasmExports.__main_argc_argv)(e, t), Module._wasm_sapi_cgi_init = () => (Module._wasm_sapi_cgi_init = wasmExports.wasm_sapi_cgi_init)(), Module._wasm_sapi_cgi_getenv = (e) => (Module._wasm_sapi_cgi_getenv = wasmExports.wasm_sapi_cgi_getenv)(e), Module._wasm_sapi_cgi_putenv = (e, t) => (Module._wasm_sapi_cgi_putenv = wasmExports.wasm_sapi_cgi_putenv)(e, t);
    var ___funcs_on_exit = () => (___funcs_on_exit = wasmExports.__funcs_on_exit)(), ___dl_seterr = (e, t) => (___dl_seterr = wasmExports.__dl_seterr)(e, t), _emscripten_builtin_memalign = (e, t) => (_emscripten_builtin_memalign = wasmExports.emscripten_builtin_memalign)(e, t), __emscripten_timeout = (e, t) => (__emscripten_timeout = wasmExports._emscripten_timeout)(e, t), _setThrew = (e, t) => (_setThrew = wasmExports.setThrew)(e, t), __emscripten_tempret_set = (e) => (__emscripten_tempret_set = wasmExports._emscripten_tempret_set)(e), _emscripten_stack_set_limits = (e, t) => (_emscripten_stack_set_limits = wasmExports.emscripten_stack_set_limits)(e, t), __emscripten_stack_restore = (e) => (__emscripten_stack_restore = wasmExports._emscripten_stack_restore)(e), __emscripten_stack_alloc = (e) => (__emscripten_stack_alloc = wasmExports._emscripten_stack_alloc)(e), _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports.emscripten_stack_get_current)(), ___cxa_increment_exception_refcount = (e) => (___cxa_increment_exception_refcount = wasmExports.__cxa_increment_exception_refcount)(e), ___cxa_decrement_exception_refcount = (e) => (___cxa_decrement_exception_refcount = wasmExports.__cxa_decrement_exception_refcount)(e), ___cxa_can_catch = (e, t, r) => (___cxa_can_catch = wasmExports.__cxa_can_catch)(e, t, r), ___cxa_get_exception_ptr = (e) => (___cxa_get_exception_ptr = wasmExports.__cxa_get_exception_ptr)(e), _asyncify_start_unwind = (e) => (_asyncify_start_unwind = wasmExports.asyncify_start_unwind)(e), _asyncify_stop_unwind = () => (_asyncify_stop_unwind = wasmExports.asyncify_stop_unwind)(), _asyncify_start_rewind = (e) => (_asyncify_start_rewind = wasmExports.asyncify_start_rewind)(e), _asyncify_stop_rewind = () => (_asyncify_stop_rewind = wasmExports.asyncify_stop_rewind)();
    Module._stdin = 1321440, Module._stdout = 1321592, Module._stderr = 1321288;
    function invoke_iiii(e, t, r, n) {
      var a = stackSave();
      try {
        return Module.dynCall_iiii(e, t, r, n);
      } catch (o) {
        if (stackRestore(a), o !== o + 0) throw o;
        _setThrew(1, 0);
      }
    }
    function invoke_vi(e, t) {
      var r = stackSave();
      try {
        Module.dynCall_vi(e, t);
      } catch (n) {
        if (stackRestore(r), n !== n + 0) throw n;
        _setThrew(1, 0);
      }
    }
    function invoke_v(e) {
      var t = stackSave();
      try {
        Module.dynCall_v(e);
      } catch (r) {
        if (stackRestore(t), r !== r + 0) throw r;
        _setThrew(1, 0);
      }
    }
    function invoke_i(e) {
      var t = stackSave();
      try {
        return Module.dynCall_i(e);
      } catch (r) {
        if (stackRestore(t), r !== r + 0) throw r;
        _setThrew(1, 0);
      }
    }
    function invoke_iii(e, t, r) {
      var n = stackSave();
      try {
        return Module.dynCall_iii(e, t, r);
      } catch (a) {
        if (stackRestore(n), a !== a + 0) throw a;
        _setThrew(1, 0);
      }
    }
    function invoke_viii(e, t, r, n) {
      var a = stackSave();
      try {
        Module.dynCall_viii(e, t, r, n);
      } catch (o) {
        if (stackRestore(a), o !== o + 0) throw o;
        _setThrew(1, 0);
      }
    }
    function invoke_vii(e, t, r) {
      var n = stackSave();
      try {
        Module.dynCall_vii(e, t, r);
      } catch (a) {
        if (stackRestore(n), a !== a + 0) throw a;
        _setThrew(1, 0);
      }
    }
    function invoke_viiii(e, t, r, n, a) {
      var o = stackSave();
      try {
        Module.dynCall_viiii(e, t, r, n, a);
      } catch (l) {
        if (stackRestore(o), l !== l + 0) throw l;
        _setThrew(1, 0);
      }
    }
    function invoke_ii(e, t) {
      var r = stackSave();
      try {
        return Module.dynCall_ii(e, t);
      } catch (n) {
        if (stackRestore(r), n !== n + 0) throw n;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiii(e, t, r, n, a) {
      var o = stackSave();
      try {
        return Module.dynCall_iiiii(e, t, r, n, a);
      } catch (l) {
        if (stackRestore(o), l !== l + 0) throw l;
        _setThrew(1, 0);
      }
    }
    function invoke_viiiiii(e, t, r, n, a, o, l) {
      var c = stackSave();
      try {
        Module.dynCall_viiiiii(e, t, r, n, a, o, l);
      } catch (u) {
        if (stackRestore(c), u !== u + 0) throw u;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiii(e, t, r, n, a, o) {
      var l = stackSave();
      try {
        return Module.dynCall_iiiiii(e, t, r, n, a, o);
      } catch (c) {
        if (stackRestore(l), c !== c + 0) throw c;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiiiii(e, t, r, n, a, o, l, c, u, _) {
      var d = stackSave();
      try {
        return Module.dynCall_iiiiiiiiii(e, t, r, n, a, o, l, c, u, _);
      } catch (f) {
        if (stackRestore(d), f !== f + 0) throw f;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiiii(e, t, r, n, a, o, l, c) {
      var u = stackSave();
      try {
        return Module.dynCall_iiiiiiii(e, t, r, n, a, o, l, c);
      } catch (_) {
        if (stackRestore(u), _ !== _ + 0) throw _;
        _setThrew(1, 0);
      }
    }
    function invoke_iiiiiii(e, t, r, n, a, o, l) {
      var c = stackSave();
      try {
        return Module.dynCall_iiiiiii(e, t, r, n, a, o, l);
      } catch (u) {
        if (stackRestore(c), u !== u + 0) throw u;
        _setThrew(1, 0);
      }
    }
    function applySignatureConversions(e) {
      e = Object.assign({}, e);
      var t = (c) => () => c() >>> 0, r = (c) => (u) => c(u) >>> 0, n = (c) => (u) => c(u) >>> 0, a = (c) => (u, _) => c(u, _) >>> 0, o = (c) => (u, _, d) => c(u, _, d) >>> 0, l = (c) => (u) => c(u) >>> 0;
      return e.__errno_location = t(e.__errno_location), e.malloc = r(e.malloc), e.strerror = n(e.strerror), e.calloc = a(e.calloc), e.emscripten_builtin_malloc = r(e.emscripten_builtin_malloc), e.memcpy = o(e.memcpy), e.emscripten_stack_get_base = t(e.emscripten_stack_get_base), e.emscripten_stack_get_end = t(e.emscripten_stack_get_end), e.emscripten_builtin_memalign = a(e.emscripten_builtin_memalign), e.emscripten_stack_get_current = t(e.emscripten_stack_get_current), e.pthread_self = t(e.pthread_self), e.emscripten_main_runtime_thread_id = t(e.emscripten_main_runtime_thread_id), e.sbrk = l(e.sbrk), e.memalign = a(e.memalign), e.emscripten_builtin_calloc = a(e.emscripten_builtin_calloc), e._emscripten_stack_alloc = r(e._emscripten_stack_alloc), e.__cxa_get_exception_ptr = r(e.__cxa_get_exception_ptr), e;
    }
    Module.addRunDependency = addRunDependency, Module.removeRunDependency = removeRunDependency, Module.ENV = ENV, Module.ccall = ccall, Module.setValue = setValue, Module.getValue = getValue, Module.UTF8ToString = UTF8ToString, Module.stringToUTF8 = stringToUTF8, Module.lengthBytesUTF8 = lengthBytesUTF8, Module.FS_createPreloadedFile = FS_createPreloadedFile, Module.FS_unlink = FS_unlink, Module.FS_createPath = FS_createPath, Module.FS_createDevice = FS_createDevice, Module.FS = FS, Module.FS_createDataFile = FS_createDataFile, Module.FS_createLazyFile = FS_createLazyFile;
    var calledRun;
    dependenciesFulfilled = function e() {
      calledRun || run(), calledRun || (dependenciesFulfilled = e);
    };
    function callMain(e = []) {
      var t = resolveGlobalSymbol("main").sym;
      if (t) {
        e.unshift(thisProgram);
        var r = e.length, n = stackAlloc((r + 1) * 4), a = n;
        e.forEach((l) => {
          HEAPU32[a >>> 2 >>> 0] = stringToUTF8OnStack(l), a += 4;
        }), HEAPU32[a >>> 2 >>> 0] = 0;
        try {
          var o = t(r, n);
          return exitJS(o, !0), o;
        } catch (l) {
          return handleException(l);
        }
      }
    }
    function run(e = arguments_) {
      if (runDependencies > 0 || (preRun(), runDependencies > 0))
        return;
      function t() {
        var r;
        calledRun || (calledRun = !0, Module.calledRun = !0, !ABORT && (initRuntime(), preMain(), readyPromiseResolve(Module), (r = Module.onRuntimeInitialized) == null || r.call(Module), shouldRunNow && callMain(e), postRun()));
      }
      Module.setStatus ? (Module.setStatus("Running..."), setTimeout(() => {
        setTimeout(() => Module.setStatus(""), 1), t();
      }, 1)) : t();
    }
    if (Module.preInit)
      for (typeof Module.preInit == "function" && (Module.preInit = [Module.preInit]); Module.preInit.length > 0; )
        Module.preInit.pop()();
    var shouldRunNow = !1;
    return Module.noInitialRun && (shouldRunNow = !1), run(), moduleRtn = readyPromise, moduleRtn;
  };
})();
typeof exports == "object" && typeof module == "object" ? module.exports = PHP : typeof define == "function" && define.amd && define([], () => PHP);
class PhpCgiShell extends PhpCgiBase {
  constructor({
    docroot: e,
    prefix: t,
    rewrite: r,
    cookies: n,
    types: a,
    onRequest: o,
    notFound: l,
    ...c
  } = {}) {
    super(PHP, {
      docroot: e,
      prefix: t,
      rewrite: r,
      cookies: n,
      types: a,
      onRequest: o,
      notFound: l,
      ...c
    });
  }
}
async function startTransaction(F) {
  const e = await F.binary;
  if (!(F.transactionStarted || !e.persist))
    return await new Promise((t, r) => e.FS.syncfs(!0, (n) => {
      n ? r(n) : (F.transactionStarted = !0, t());
    }));
}
async function commitTransaction(F, e = !1) {
  const t = await F.binary;
  if (t.persist) {
    if (!F.transactionStarted)
      throw new Error("No transaction initialized.");
    return e ? (F.transactionStarted = !1, Promise.resolve()) : await new Promise((r, n) => t.FS.syncfs(!1, (a) => {
      a ? n(a) : (F.transactionStarted = !1, r());
    }));
  }
}
const NUM = "number";
class PhpCgiWebBase extends PhpCgiBase {
  constructor() {
    super(...arguments);
    w(this, "initialized", !1);
  }
  startTransaction() {
    return startTransaction(this);
  }
  commitTransaction(t = !1) {
    return commitTransaction(this, t);
  }
  async _beforeRequest() {
    if (!this.initialized) {
      const t = await this.binary;
      await this.loadInit(t), await navigator.locks.request("php-wasm-fs-lock", () => new Promise(
        (r, n) => t.FS.syncfs(!0, (a) => {
          a ? n(a) : r();
        })
      ));
    }
    this.initialized = !0;
  }
  async _afterRequest() {
    if (this.phpArgs.staticFS)
      return;
    const t = await this.binary;
    await navigator.locks.request("php-wasm-fs-lock", () => new Promise(
      (r, n) => t.FS.syncfs(!1, (a) => {
        a ? n(a) : r();
      })
    ));
  }
  refresh() {
    const { files: t, libs: r, urlLibs: n } = resolveDependencies(
      this.sharedLibs,
      this
    ), a = this.phpArgs.locateFile || (() => {
    }), o = (c) => {
      let u = a(c);
      if (u !== void 0)
        return u;
      if (n[c])
        return n[c];
    }, l = {
      persist: [{ mountPath: "/persist" }, { mountPath: "/config" }],
      ...this.phpArgs,
      stdin: () => this.input ? String(this.input.shift()).charCodeAt(0) : null,
      stdout: (c) => this.output.push(c),
      stderr: (c) => this.error.push(c),
      locateFile: o
    };
    return this.binary = navigator.locks.request(
      "php-wasm-fs-lock",
      async () => {
        const c = await new this.PHP(l);
        await c.ccall("pib_storage_init", NUM, [], [], {
          async: !0
        }), c.FS.analyzePath("/preload").exists || c.FS.mkdir("/preload"), await Promise.all(
          this.files.concat(t).map(
            (_) => c.FS.createPreloadedFile(
              _.parent,
              _.name,
              _.url,
              !0,
              !1
            )
          )
        );
        const u = PhpBase.iniLines(r);
        return this.phpArgs.ini && u.push(this.phpArgs.ini.replace(/\n\s+/g, `
`)), c.FS.writeFile("/php.ini", u.join(`
`) + `
`, {
          // encoding: "utf8",
        }), await new Promise((_, d) => {
          c.FS.syncfs(!0, (f) => {
            f ? d(f) : _();
          });
        }), await c.ccall("wasm_sapi_cgi_init", "number", [], [], {
          async: !0
        }), await this.loadInit(c), c;
      }
    );
  }
  async _enqueue(t, r = [], n = !1) {
    const a = new Deferred();
    return this.queue.push([t, r, a.resolve, a.reject]), navigator.locks.request("php-wasm-fs-lock", async () => {
      if (this.queue.length) {
        await (this.autoTransaction ? this.startTransaction() : Promise.resolve());
        do {
          const [o, l, c, u] = this.queue.shift();
          await o(...l).then(c).catch(u);
          let _ = 5;
          for (; !this.queue.length && _--; )
            await new Promise((d) => setTimeout(d, 5));
        } while (this.queue.length);
        await (this.autoTransaction ? this.commitTransaction(n) : Promise.resolve());
      }
    }), a.promise;
  }
}
class PhpCgiWeb extends PhpCgiWebBase {
  constructor({
    docroot: e,
    prefix: t,
    rewrite: r,
    cookies: n,
    types: a,
    onRequest: o,
    notFound: l,
    ...c
  } = {}) {
    super(PHP, {
      docroot: e,
      prefix: t,
      rewrite: r,
      cookies: n,
      types: a,
      onRequest: o,
      notFound: l,
      ...c
    });
  }
}
class PhpCgiWebview extends PhpCgiWebBase {
  constructor({
    docroot: e,
    prefix: t,
    rewrite: r,
    cookies: n,
    types: a,
    onRequest: o,
    notFound: l,
    ...c
  } = {}) {
    super(PHP, {
      docroot: e,
      prefix: t,
      rewrite: r,
      cookies: n,
      types: a,
      onRequest: o,
      notFound: l,
      ...c
    });
  }
}
class PhpCgiWorker extends PhpCgiWebBase {
  constructor({
    docroot: e,
    prefix: t,
    rewrite: r,
    cookies: n,
    types: a,
    onRequest: o,
    notFound: l,
    ...c
  } = {}) {
    super(PHP, {
      docroot: e,
      prefix: t,
      rewrite: r,
      cookies: n,
      types: a,
      onRequest: o,
      notFound: l,
      ...c
    });
  }
  handleInstallEvent(e) {
    return e.waitUntil(self.skipWaiting());
  }
  handleActivateEvent(e) {
    return e.waitUntil(self.clients.claim());
  }
  async handleMessageEvent(e) {
    const { data: t, source: r } = e, { action: n, token: a, params: o = [] } = t;
    if ([
      "analyzePath",
      "readdir",
      "readFile",
      "stat",
      "mkdir",
      "rmdir",
      "writeFile",
      "rename",
      "unlink",
      "putEnv",
      "refresh",
      "getSettings",
      "setSettings",
      "getEnvs",
      "setEnvs",
      "storeInit"
    ].includes(n)) {
      let c, u;
      try {
        c = await this[n](...o);
      } catch (_) {
        u = JSON.parse(JSON.stringify(_)), console.warn(_);
      } finally {
        r == null || r.postMessage({ re: a, result: c, error: u });
      }
    } else if (n in this.extraActions) {
      let c, u;
      try {
        c = await this.extraActions[n](this, ...o);
      } catch (_) {
        u = JSON.parse(JSON.stringify(_)), console.warn(_);
      } finally {
        r == null || r.postMessage({ re: a, result: c, error: u });
      }
    }
  }
  handleFetchEvent(e) {
    const t = new URL(e.request.url), r = this.prefix, { files: n, urlLibs: a } = resolveDependencies(this.sharedLibs, this);
    let o = !1, l = !1;
    if (globalThis.location) {
      const c = [
        self.location.pathname,
        ...n.map((u) => u.url),
        ...Object.values(a)
      ].map((u) => new URL(u, self.location.origin)).filter((u) => u.origin === self.location.origin).map((u) => u.pathname);
      o = t.pathname.slice(0, r.length) === r && t.hostname === self.location.hostname, l = t.pathname.match(/\.wasm$/i) || c.includes(t.pathname) || this.exclude.findIndex(
        (u) => t.pathname.slice(0, u.length) === u
      ) > -1 || !1;
    } else
      o = t.pathname.slice(0, r.length) === r, l = t.pathname.match(/\.wasm$/i) || this.exclude.findIndex(
        (c) => t.pathname.slice(0, c.length) === c
      ) > -1 || !1;
    if (o && !l) {
      PhpCgiWorker.requestTimes.set(e.request, Date.now());
      const c = this.request(e.request);
      return e.respondWith(c);
    }
  }
}
export {
  PhpCgiBase,
  PhpCgiShell,
  PhpCgiWeb,
  PhpCgiWebBase,
  PhpCgiWebview,
  PhpCgiWorker,
  onMessage,
  sendMessageFor
};
