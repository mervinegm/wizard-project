// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bf3Nq":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2d2f63a8799891e4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var _router = require("./router");
function main() {
    const root = document.querySelector(".root");
    console.log(root);
    (0, _router.initRouter)(root);
}
main();

},{"./router":"4QFWt"}],"4QFWt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _welcome = require("./pages/welcome/welcome");
var _form = require("./pages/form/form");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcome.initWelcome)
    },
    {
        path: /\/form/,
        component: (0, _form.initForm)
    }
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handleRoute(location.pathname);
    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}

},{"./pages/welcome/welcome":"haaqF","./pages/form/form":"sGVUD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haaqF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initWelcome", ()=>initWelcome);
var _body = require("../../components/body/body");
var _bodyContainer = require("../../components/body-container/body-container");
var _button = require("../../components/button/button");
var _footer = require("../../components/footer/footer");
var _form = require("../../components/form/form");
var _header = require("../../components/header/header");
var _input = require("../../components/input/input");
var _large = require("../../components/large/large");
var _select = require("../../components/select/select");
var _subtitulo = require("../../components/subtitulo/subtitulo");
var _titulo = require("../../components/titulo/titulo");
var _titulo2 = require("../../components/titulo2/titulo2");
function initWelcome(params) {
    const welcomeEl = document.createElement("div");
    welcomeEl.innerHTML = `
    <my-header>
      <my-large label="Header"></my-large>
    </my-header>
  
    <my-bodycontainer class="bodyContainer">
      <my-title label="Te damos la bienvenida a esta página"></my-title>
  
      <my-large label="Para continuar ingresá tu nombre"></my-large>
  
      <my-form></my-form>
    </my-bodycontainer>
  
    <my-footer label="Footer">
      <my-large label="Footer"></my-large>
    </my-footer>
    `;
    const bodycontainerEl = welcomeEl.querySelector(".bodyContainer");
    const shadowBodycontainerEl = bodycontainerEl.shadowRoot.querySelector(".bodyContainer");
    const formEL = shadowBodycontainerEl.childNodes[2];
    const formEl2 = formEL.shadowRoot.children[0];
    console.log(formEL);
    console.log(formEL.shadowRoot.children[0]);
    formEl2.addEventListener("submit", function(e) {
        params.goTo("/form");
    });
    return welcomeEl;
}

},{"../../components/body/body":"jiJ8U","../../components/body-container/body-container":"jzypA","../../components/button/button":"9lSjy","../../components/footer/footer":"jMkhk","../../components/form/form":"1enI1","../../components/header/header":"4f7AX","../../components/input/input":"fIx3g","../../components/large/large":"jroDw","../../components/select/select":"iVva3","../../components/subtitulo/subtitulo":"6CIWl","../../components/titulo/titulo":"kr52s","../../components/titulo2/titulo2":"H9AA7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiJ8U":[function(require,module,exports) {
class Body extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const textoOriginal = this.getAttribute("label");
        var bodyEl = document.createElement("p");
        bodyEl.classList.add("body");
        bodyEl.textContent = textoOriginal;
        this.shadow.appendChild(bodyEl);
        var style = document.createElement("style");
        style.textContent = `
                        .body{
                            font-family: "Roboto";
                            font-size: 18px;
                            font-weight: 400;
                            color: #000000;
                            margin: 10px;
                            padding: 0;
                            margin-bottom: 30px;
                        }
                        `;
        this.shadow.appendChild(style);
    }
}
customElements.get("my-body") || customElements.define("my-body", Body);

},{}],"jzypA":[function(require,module,exports) {
class BodyContainer extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        var bodyContainerEl = document.createElement("div");
        bodyContainerEl.classList.add("bodyContainer");
        this.shadow.appendChild(bodyContainerEl);
        var style = document.createElement("style");
        style.textContent = `
                          .bodyContainer{
                              width: auto;
                              max-width: 600px;
                              margin: 0 20px;
                          }
                        
                          @media (min-width: 600px){
                            .bodyContainer{
                              margin: 0 auto;
                          }
                          }
                          `;
        this.shadow.appendChild(style);
        if (this.children) for (var i of this.children)bodyContainerEl.appendChild(i.cloneNode(true));
    }
}
customElements.get("my-bodycontainer") || customElements.define("my-bodycontainer", BodyContainer);

},{}],"9lSjy":[function(require,module,exports) {
class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const textoOriginal = this.getAttribute("label");
        var buttonEL = document.createElement("button");
        buttonEL.classList.add("button");
        buttonEL.textContent = textoOriginal;
        this.shadow.appendChild(buttonEL);
        var style = document.createElement("style");
        style.textContent = `
                        .button{
                          Width: calc(100% - 10px);
                          Height: 55px;
                          background-color: turquoise;
                          margin-top: 20px;
                          border: none;
                          font-family: "Roboto";
                          font-size: 22px;
                          font-weight: 500;
                          color: #000000;
                        }
                        `;
        this.shadow.appendChild(style);
    }
}
customElements.get("my-button") || customElements.define("my-button", Button);

},{}],"jMkhk":[function(require,module,exports) {
class Footer extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        var footerDivEl = document.createElement("div");
        footerDivEl.classList.add("footer");
        this.shadow.appendChild(footerDivEl);
        var style = document.createElement("style");
        style.textContent = `
                    .footer{
                      width: auto;
                      min-height: 233px;
                      max-height: 100vmax;
                      background-color: cadetblue;
                      margin: 0;
                      padding: 0;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin-top:50px
                    }
                    `;
        this.shadow.appendChild(style);
        if (this.children[0]) footerDivEl.appendChild(this.children[0]);
    }
}
customElements.get("my-footer") || customElements.define("my-footer", Footer);

},{}],"1enI1":[function(require,module,exports) {
var _state = require("../../state");
class Form extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.nombre = (0, _state.state).getState().nombre;
        (0, _state.state).subscribe(()=>{
            this.nombre = (0, _state.state).getState().nombre;
        /* this.render(); */ });
        this.render();
    }
    render() {
        var formEl = document.createElement("form");
        formEl.classList.add("form");
        this.shadow.appendChild(formEl);
        formEl.innerHTML = `
      <label class="label">Nombre</label>
      <input class="input" type="text" name="nombre" />
      <button type="submit" class="button">Comenzar</button>   
    `;
        const form = this.shadow.querySelector(".form");
        form.addEventListener("submit", (e)=>{
            e.preventDefault();
            console.log(e.target.nombre.value);
            (0, _state.state).setState({
                ...(0, _state.state).getState(),
                nombre: e.target.nombre.value
            });
            e.target.nombre.value = "";
        });
        var style = document.createElement("style");
        this.shadow.appendChild(style);
        style.textContent = `
                      .form{
                        display: flex;
                        flex-direction: column;
                        Width: calc(100% - 40px);
                        Height: 200px;
                        margin-top: 20px;
                      }

                      .label{
                        font-size: 18px;
                        font-family: "Roboto";
                        font-weight: 400;
                      }

                      .input{
                        width: 100%;
                        height: 22px;
                        padding: 17px 13px;
                        font-size: 18px;
                        font-family: "Roboto";
                        font-weight: 400;
                        margin-top: 4px;
                        border: solid 2px;
                        border-radius: 4px;
                      }

                      .button{
                        Width: calc(100% + 30px);
                        Height: 55px;
                        background-color: turquoise;
                        margin-top: 20px;
                        border: none;
                        font-family: "Roboto";
                        font-size: 22px;
                        font-weight: 500;
                        color: #000000;
                      }
                      `;
    }
}
customElements.get("my-form") || customElements.define("my-form", Form);

},{"../../state":"1Yeju"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {},
    listeners: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const callback of this.listeners)callback();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4f7AX":[function(require,module,exports) {
class Header extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        var headerDivEl = document.createElement("div");
        headerDivEl.classList.add("header");
        this.shadow.appendChild(headerDivEl);
        var style = document.createElement("style");
        style.textContent = `
                  .header{
                    width: auto;
                    height: 60px;
                    background-color: pink;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  `;
        this.shadow.appendChild(style);
        if (this.children[0]) headerDivEl.appendChild(this.children[0]);
    }
}
customElements.get("my-header") || customElements.define("my-header", Header);

},{}],"fIx3g":[function(require,module,exports) {
class Input extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const label = this.getAttribute("label");
        var fieldsetInputEl = document.createElement("div");
        fieldsetInputEl.classList.add("fieldsetInput");
        this.shadow.appendChild(fieldsetInputEl);
        fieldsetInputEl.innerHTML = `
          <label class="label" for="Nombre">${label}</label>
          <input class="input" type="text" placeholder="Ingrese su ${label}">
          `;
        var style = document.createElement("style");
        this.shadow.appendChild(style);
        style.textContent = `
                          .fieldsetInput{
                            display: flex;
                            flex-direction: column;
                            Width: calc(100% - 40px);
                            Height: 80px;
                            margin-top: 20px;
                          }
    
                          .label{
                            font-size: 18px;
                            font-family: "Roboto";
                            font-weight: 400;
                          }
    
                          .input{
                            width: 100%;
                            height: 22px;
                            padding: 17px 13px;
                            font-size: 18px;
                            font-family: "Roboto";
                            font-weight: 400;
                            margin-top: 4px;
                            border: solid 2px;
                            border-radius: 4px;
                          }
                          `;
    }
}
customElements.get("my-input") || customElements.define("my-input", Input);

},{}],"jroDw":[function(require,module,exports) {
class Large extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const textoOriginal = this.getAttribute("label");
        var largeTextpEl = document.createElement("div");
        largeTextpEl.classList.add("large");
        largeTextpEl.textContent = textoOriginal;
        this.shadow.appendChild(largeTextpEl);
        var style = document.createElement("style");
        style.textContent = `
                    .large{
                        font-family: "Roboto";
                        font-size: 22px;
                        font-weight: 500;
                        color: #000000;
                        margin: 0;
                        padding: 0;
                    }
                    `;
        this.shadow.appendChild(style);
        const clase = this.getAttribute("class");
        if (clase == "lt2") largeTextpEl.style.margin = "50px 30px 50px 30px";
    }
}
customElements.get("my-large") || customElements.define("my-large", Large);

},{}],"iVva3":[function(require,module,exports) {
class Select extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const label = this.getAttribute("label");
        var fieldsetSelectEl = document.createElement("div");
        fieldsetSelectEl.classList.add("fieldsetSelect");
        this.shadow.appendChild(fieldsetSelectEl);
        fieldsetSelectEl.innerHTML = `
            <label class="label" for="Nombre">${label}</label>
            <select class="select" type="text">
              <option value="value1">Piedra</option>
              <option value="value2" selected>Papel</option>
              <option value="value3">Tijera</option>
            </select>
            `;
        var style = document.createElement("style");
        style.textContent = `
                            .fieldsetSelect{
                              display: flex;
                              flex-direction: column;
                              Width: calc(100% - 10px);
                              Height: 80px;
                              margin-top: 20px;
                            }
      
                            .label{
                              font-size: 18px;
                              font-family: "Roboto";
                              font-weight: 400;
                            }
      
                            .select{
                              width: 100%;
                              height: 55px;
                              padding: 13px 13px;
                              font-size: 18px;
                              font-family: "Roboto";
                              font-weight: 400;
                              margin-top: 4px;
                              border: solid 2px;
                              border-radius: 4px;
                            }
                            `;
        this.shadow.appendChild(style);
    }
}
customElements.get("my-select") || customElements.define("my-select", Select);

},{}],"6CIWl":[function(require,module,exports) {
class Subtitulo extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const textoOriginal = this.getAttribute("label");
        var subtituloEl = document.createElement("h1");
        subtituloEl.classList.add("subtitulo");
        subtituloEl.textContent = textoOriginal;
        this.shadow.appendChild(subtituloEl);
        var style = document.createElement("style");
        style.textContent = `
                        .subtitulo{
                            font-family: "Roboto";
                            font-size: 38px;
                            font-weight: 700;
                            color: #000000;
                            margin: 10px;
                            padding: 0;
                            margin-top: 40px;
                        }
                        `;
        this.shadow.appendChild(style);
    }
}
customElements.get("my-subtitle") || customElements.define("my-subtitle", Subtitulo);

},{}],"kr52s":[function(require,module,exports) {
class Titulo extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const textoOriginal = this.getAttribute("label");
        var tituloEl = document.createElement("h1");
        tituloEl.classList.add("titulo");
        tituloEl.textContent = textoOriginal;
        this.shadow.appendChild(tituloEl);
        var style = document.createElement("style");
        style.textContent = `
                      .titulo{
                          font-family: "Roboto";
                          font-size: 52px;
                          font-weight: 700;
                          color: #000000;
                          margin: 0;
                          padding: 10px;
                      }
                      `;
        this.shadow.appendChild(style);
    }
}
customElements.get("my-title") || customElements.define("my-title", Titulo);

},{}],"H9AA7":[function(require,module,exports) {
var _state = require("../../state");
class Title2 extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.nombre = "";
        /* this.render(); */ (0, _state.state).subscribe(()=>{
            this.syncWithState();
        });
        this.syncWithState();
    }
    syncWithState() {
        const lastState = (0, _state.state).getState();
        this.nombre = lastState.nombre || "";
        this.render();
    }
    render() {
        var titulo2El = document.createElement("h1");
        titulo2El.classList.add("titulo2");
        this.shadow.appendChild(titulo2El);
        titulo2El.innerHTML = `
        Hola ${this.nombre}
    `;
        var style = document.createElement("style");
        style.textContent = `
                  .titulo2{
                      font-family: "Roboto";
                      font-size: 52px;
                      font-weight: 700;
                      color: #000000;
                      margin: 0;
                      padding: 10px;
                  }
                  `;
        this.shadow.appendChild(style);
    }
}
customElements.get("my-title2") || customElements.define("my-title2", Title2);

},{"../../state":"1Yeju"}],"sGVUD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initForm", ()=>initForm);
var _body = require("../../components/body/body");
var _bodyContainer = require("../../components/body-container/body-container");
var _button = require("../../components/button/button");
var _footer = require("../../components/footer/footer");
var _form = require("../../components/form/form");
var _header = require("../../components/header/header");
var _input = require("../../components/input/input");
var _large = require("../../components/large/large");
var _select = require("../../components/select/select");
var _subtitulo = require("../../components/subtitulo/subtitulo");
var _titulo = require("../../components/titulo/titulo");
var _titulo2 = require("../../components/titulo2/titulo2");
function initForm(params) {
    const formEl = document.createElement("div");
    formEl.innerHTML = `
    <my-header>
      <my-large label="Header"></my-large>
    </my-header>
  
    <my-bodycontainer class="bodyContainer">
      <my-title2></my-title2>

      <my-large label="Necesitamos algunos datos más"></my-large>
  
      <my-input label="Email"></my-input>
  
      <my-input label="Comida favorita"></my-input>
  
      <my-select label="Alguna de estas tres opciones"></my-select>
  
      <my-button class="button" label="Enviar"></my-button>
      
    </my-bodycontainer>
  
    <my-footer>
       <my-large label="Footer"></my-large>
    </my-footer>
    `;
    const bodycontainerEl = formEl.querySelector(".bodyContainer");
    const shadowBodycontainerEl = bodycontainerEl.shadowRoot.querySelector(".bodyContainer");
    const buttonEL = shadowBodycontainerEl.childNodes[5];
    buttonEL.addEventListener("click", function() {
        params.goTo("/welcome");
    });
    return formEl;
}

},{"../../components/body/body":"jiJ8U","../../components/body-container/body-container":"jzypA","../../components/button/button":"9lSjy","../../components/footer/footer":"jMkhk","../../components/form/form":"1enI1","../../components/header/header":"4f7AX","../../components/input/input":"fIx3g","../../components/large/large":"jroDw","../../components/select/select":"iVva3","../../components/subtitulo/subtitulo":"6CIWl","../../components/titulo/titulo":"kr52s","../../components/titulo2/titulo2":"H9AA7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bf3Nq","h7u1C"], "h7u1C", "parcelRequire6a92")

//# sourceMappingURL=index.799891e4.js.map
