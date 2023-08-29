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
})({"hklly":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
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

},{}],"bNKaB":[function(require,module,exports) {
/*
Gestionnaire de présence, provenant d'une API
Cliquer sur un profil change son état de “absent” à “présent” et vice-versa. Les fonctionnalités de tri et le compteur sont considérés comme des fonctionnalités bonus

A faire : 
- mettre dan l'ordre par nom ou par âge (on peut en sélectionner plusieurs ou non, d'ailleurs leur nombre est inscrit au milieu et il faut que la couleur change)
- on peut cliquer sur chaque case profil sur l'icône email et après notif et ensuite créer l'email et après on peut quitter et une notif nous demande que faire


*/ /*
import { User } from "./User.js";
import { render } from "./User.js";

async function fetchProfilData() {
  const profil = `https://randomuser.me/api/?results=10`;
  const reponseProfil = await fetch(profil);
  const reponseProfilParsee = await reponseProfil.json();
  console.log(reponseProfilParsee);
}

fetchProfilData();
//afficher les profils dans le DOM
//const profil = new User();
render();
*/ var _userJs = require("./User.js");
// Fonction pour formater le nom pour la comparaison
function formatNameForSorting(name) {
    return name.toLowerCase();
}
async function fetchProfilData() {
    const profilUrl = `https://randomuser.me/api/?results=10`;
    const response = await fetch(profilUrl);
    const data = await response.json();
    return data.results;
}
function ordreAlphabetique(array) {
    array.sort((a, b)=>{
        const lastNameA = formatNameForSorting(a.name.last);
        const lastNameB = formatNameForSorting(b.name.last);
        return lastNameA.localeCompare(lastNameB);
    });
    return array;
}
function ordreAge(array) {
    array.sort((a, b)=>a.dob.age - b.dob.age);
    return array;
}
/*
Lorsque vous utilisez mainElement.innerHTML = "";, vous supprimez tous les éléments HTML enfants de l'élément <main>. 
Cela vous assure qu'aucun profil précédemment affiché n'est conservé lorsque vous mettez à jour la liste des profils triés. 
Cela garantit que la mise à jour visuelle est correcte et reflète uniquement les profils triés que vous souhaitez afficher.
*/ function updateMain(sortedProfiles) {
    const mainElement = document.querySelector("main");
    mainElement.innerHTML = ""; // Efface le contenu actuel
    const profileElements = sortedProfiles.map((profile)=>{
        const user = new (0, _userJs.User)({
            image: profile.picture.large,
            name: `${profile.name.first} ${profile.name.last}`,
            age: profile.dob.age,
            location: profile.location.country,
            email: profile.email
        });
        return user.element;
    });
    profileElements.forEach((element)=>{
        mainElement.appendChild(element);
    });
}
async function render() {
    const profiles = await fetchProfilData();
    const sortByNameButton = document.getElementById("sort--name");
    const sortByAgeButton = document.getElementById("sort--age");
    sortByNameButton.addEventListener("click", ()=>{
        //La déconstruction [...profiles] est utilisée pour créer une nouvelle copie du tableau profiles avant de le trier, afin de ne pas modifier l'ordre des profils d'origine.
        const sortedProfiles = ordreAlphabetique([
            ...profiles
        ]);
        updateMain(sortedProfiles);
        // Réinitialise la couleur en retirant la classe "selected"
        sortByNameButton.classList.add("selected");
        sortByAgeButton.classList.remove("selected");
    });
    sortByAgeButton.addEventListener("click", ()=>{
        const sortedProfiles = ordreAge([
            ...profiles
        ]);
        updateMain(sortedProfiles);
        // Réinitialise la couleur en retirant la classe "selected"
        sortByAgeButton.classList.add("selected");
        sortByNameButton.classList.remove("selected");
    });
    // Tri par ordre alphabétique par défaut
    const sortedProfiles = ordreAlphabetique([
        ...profiles
    ]);
    updateMain(sortedProfiles);
    sortByNameButton.classList.add("selected");
}
render();

},{"./User.js":"3Nf0z"}],"3Nf0z":[function(require,module,exports) {
//export class User {
/*
  ### Propriétés
  
  - Une ou plusieurs propriétés contenant les informations d’un utilisateur (nom, âge, email, photo etc…).
  - Une propriété indiquant si l’utilisateur est présent ou non. Celle-ci devrait être `false` par défaut.
  - Une propriété se référant à l’élément utilisateur qui sera généré par la méthode décrite directement **ci-dessous.**
  
  */ /*
  constructor(information, presence) {
    this.information = information;
    //cette propriété presence doit être false par défaut

    this.presence = presence;
    this.element = this.render();
  }
}*/ /*containerElement = document.createElement("section");
  user = containerElement.classList.add("user");

  childHTML = `
            <img src="https://randomuser.me/api/portraits/women/37.jpg">
            <div class="user--info">
                    <h1>Miss Mareike Bottenberg</h1>
                    <p>76 years old</p>
                    <p>"Baak, Netherlands"</p>
                    <a href="mailto:mareike.bottenberg@example.com">
                    <span class="mail">✉️</span>
                    </a>
            </div>
    `;

  childHMTL = containerElement.insertAdjacentHTML("afterbegin", childHTML);
  //afficher containerElement dans le DOM
  const =document.body.insertAdjacentElement("beforebegin", containerElement);

  //fonction pour afficher childHTML dans le dom
  render = () => {
    document.body.insertAdjacentElement("beforebegin", containerElement);
    return childHTML;
  };
}*/ /*
containerElement = document.createElement("section");
containerElement.classList.add("user");

const childHTML = `
          <img src="https://randomuser.me/api/portraits/women/37.jpg">
          <div class="user--info">
                  <h1>Miss Mareike Bottenberg</h1>
                  <p>76 years old</p>
                  <p>"Baak, Netherlands"</p>
                  <a href="mailto:mareike.bottenberg@example.com">
                  <span class="mail">✉️</span>
                  </a>
          </div>
  `;

containerElement.insertAdjacentHTML("afterbegin", childHTML);
//afficher containerElement dans le DOM
document.body.insertAdjacentElement("beforebegin", containerElement);

//fonction pour afficher childHTML dans le dom
const render = () => {
  document.body.insertAdjacentElement("beforebegin", containerElement);
  return childHTML;
};*/ //afficher toutes les personnes dans le DOM?
/*
  <div class="user" data-present="false">
          <img src="https://randomuser.me/api/portraits/women/37.jpg">
          <div class="user--info">
                  <h1>Miss Mareike Bottenberg</h1>
                  <p>76 years old</p>
                  <p>Baak, Netherlands</p>
          </div>
          <a href="mailto:mareike.bottenberg@example.com">
                  <span class="mail">✉️</span>
          </a>
  </div>
  
  
*/ //clic qui va déterminer si la personne est présente ou non à l'ade du CSS, je dois donc transformer en false et écrire en javascript ici
/*
//containerElement.dataset.present = "false";
let present = false; // Déclarer la variable `present` en dehors de la fonction

const setOnline = (isPresent) => {
  // Utiliser `=>` pour définir la fonction et accepter un paramètre `isPresent`
  const containerElement = document.querySelector(".user");

  containerElement.addEventListener("click", function () {
    if (isPresent === true) {
      containerElement.dataset.present = "false";
      isPresent = false; // Mettre à jour la variable `isPresent`
    } else {
      containerElement.dataset.present = "true";
      isPresent = true; // Mettre à jour la variable `isPresent`
    }
  });

  return isPresent; // Retourner la valeur mise à jour de `isPresent`
};

present = setOnline(present); // Appeler la fonction `setOnline` et mettre à jour la variable `present`
*/ /*main .user[data-present="true"] {
    background-color: #06d6a0;
    color: #ffffff;
  }
  
  main .user[data-present="true"] p {
    color: #ffffff;
  }*/ //export default User;
//export { render };
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "User", ()=>User);
class User {
    constructor(information){
        // Le constructeur de la classe User est appelé lorsqu'une nouvelle instance est créée.
        // Il prend les informations d'un utilisateur en tant que paramètre.
        // Stocke les informations passées en paramètre dans la propriété "information".
        this.information = information;
        // Initialise l'état de présence à "false".
        this.present = false;
        // Appelle la méthode render() pour générer l'élément utilisateur.
        this.element = this.render();
        // Ajoute un écouteur d'événement "click" sur l'élément pour gérer le changement d'état de présence.
        this.element.addEventListener("click", this.togglePresence.bind(this));
    }
    updateCounter() {
        // Sélectionnez l'élément de compteur dans le DOM
        const counterElement = document.querySelector(".counter");
        // Comptez le nombre d'utilisateurs présents en parcourant les éléments d'utilisateurs
        const presentUsers = document.querySelectorAll(".user[data-present='true']").length;
        // Mettez à jour le texte du compteur avec le nombre d'utilisateurs présents
        counterElement.textContent = `${presentUsers}/20 people are here`;
    }
    togglePresence() {
        // Cette méthode est appelée lorsque l'élément utilisateur est cliqué.
        // Elle inverse l'état de présence.
        this.present = !this.present;
        // Appelle la méthode updateElementStyle() pour mettre à jour les styles en fonction de l'état de présence.
        this.updateElementStyle();
        // Mettre à jour l'attribut data-present en fonction de l'état de présence
        this.element.setAttribute("data-present", this.present);
        this.updateCounter(); // Appel de la mise à jour du compteur
    }
    updateElementStyle() {
        // Cette méthode met à jour les styles de l'élément en fonction de l'état de présence.
        if (this.present) {
            // Si l'utilisateur est présent, les styles sont mis à jour pour afficher la couleur de présence.
            this.element.style.backgroundColor = "#06d6a0";
            this.element.style.color = "#ffffff";
            this.element.querySelector(".user--info p").style.color = "#ffffff";
        } else {
            // Si l'utilisateur n'est pas présent, les styles sont réinitialisés aux valeurs par défaut.
            this.element.style.backgroundColor = "#ffffff";
            this.element.style.color = "#010123";
            this.element.querySelector(".user--info p").style.color = "#666666";
        }
    }
    render() {
        // Cette méthode génère et retourne l'élément utilisateur.
        // Crée un élément "section" pour le conteneur de l'utilisateur.
        const containerElement = document.createElement("section");
        containerElement.classList.add("user"); // Ajoute la classe CSS "user" au conteneur.
        // Génère le code HTML pour l'élément utilisateur en utilisant les informations de l'utilisateur.
        const childHTML = `
        <img src="${this.information.image}">
        <div class="user--info">
          <h1>${this.information.name}</h1>
          <p>${this.information.age} years old</p>
          <p>${this.information.location}</p>
          <a href="mailto:${this.information.email}">
            <span class="mail">✉️</span>
          </a>
        </div>
      `;
        // Insère le code HTML généré dans le conteneur de l'utilisateur.
        containerElement.insertAdjacentHTML("afterbegin", childHTML);
        // Définit l'attribut de données "present" à "false" par défaut pour le toggle.
        containerElement.dataset.present = "false";
        // Définit les styles par défaut pour le conteneur de l'utilisateur.
        containerElement.style.backgroundColor = "#ffffff";
        containerElement.style.color = "#010123";
        // Retourne le conteneur de l'utilisateur.
        return containerElement;
    }
}

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

},{}]},["hklly","bNKaB"], "bNKaB", "parcelRequirec56a")

//# sourceMappingURL=index.0641b553.js.map
