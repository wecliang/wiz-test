import { j as jsxRuntime$1, l as loadable$2 } from "./vendor.96977194.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const scriptRel = "modulepreload";
const seen = {};
const base = "./";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const layout = "_layout_hgt5d_16";
const Content = "_Content_hgt5d_37";
const icon = "_icon_hgt5d_122";
const spin = "_spin_hgt5d_151";
var styles = {
  layout,
  Content,
  "layout-navbar": "_layout-navbar_hgt5d_41",
  "layout-navbar-hidden": "_layout-navbar-hidden_hgt5d_49",
  "layout-sider": "_layout-sider_hgt5d_52",
  "collapse-btn": "_collapse-btn_hgt5d_86",
  "menu-wrapper": "_menu-wrapper_hgt5d_103",
  icon,
  "icon-empty": "_icon-empty_hgt5d_127",
  "layout-content": "_layout-content_hgt5d_132",
  "layout-content-wrapper": "_layout-content-wrapper_hgt5d_138",
  "layout-breadcrumb": "_layout-breadcrumb_hgt5d_148",
  spin
};
const jsx = jsxRuntime$1.exports.jsx;
const jsxs = jsxRuntime$1.exports.jsxs;
const Fragment = jsxRuntime$1.exports.Fragment;
var jsxRuntime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  jsx,
  jsxs,
  Fragment
}, Symbol.toStringTag, { value: "Module" }));
function load(fn, options) {
  const Component = loadable$2(fn, options);
  Component.preload = fn.requireAsync || fn;
  return Component;
}
function LoadingComponent(props) {
  if (props.error) {
    console.error(props.error);
    return null;
  }
  return /* @__PURE__ */ jsx("div", {
    className: styles.spin,
    children: "Loading..."
  });
}
const lazyload = (loader) => {
  if (!loader)
    return () => null;
  return load(loader, {
    fallback: LoadingComponent({
      loader,
      pastDelay: true,
      error: false,
      timedOut: false
    })
  });
};
function loadCSS(url) {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  document.head.appendChild(link);
}
loadCSS("https://unpkg.com/@arco-design/web-react@2.55.0/dist/css/arco.min.css");
const i18next = window["i18next"];
i18next.init({
  returnNull: false,
  returnEmptyString: false
});
const Suspense = window["React"].Suspense;
const ReactDOM = window["ReactDOM"];
const HashRouter = window["ReactRouterDOM"].HashRouter;
const Redirect = window["ReactRouterDOM"].Redirect;
const Route = window["ReactRouterDOM"].Route;
const Switch = window["ReactRouterDOM"].Switch;
const Main = () => {
  return /* @__PURE__ */ jsx(Suspense, {
    fallback: "",
    children: /* @__PURE__ */ jsx(HashRouter, {
      children: /* @__PURE__ */ jsxs(Switch, {
        children: [/* @__PURE__ */ jsx(Route, {
          exact: true,
          path: "/codes/*",
          component: lazyload(() => __vitePreload(() => import("./index.2fdde450.js").then(function(n) {
            return n.i;
          }), true ? ["assets/index.2fdde450.js","assets/index.9cdd9430.css","assets/hoc.3c567b96.js","assets/vendor.96977194.js"] : void 0))
        }), /* @__PURE__ */ jsx(Route, {
          exact: true,
          path: "/run/*",
          component: lazyload(() => __vitePreload(() => import("./index.af46aa6e.js"), true ? ["assets/index.af46aa6e.js","assets/index.c218b736.css","assets/hoc.3c567b96.js","assets/vendor.96977194.js"] : void 0))
        }), /* @__PURE__ */ jsx(Route, {
          path: "/",
          children: /* @__PURE__ */ jsx(Redirect, {
            to: `/codes/`
          })
        })]
      })
    })
  });
};
ReactDOM.render(/* @__PURE__ */ jsx(Main, {}), document.getElementById("root"));
export { Fragment as F, __vitePreload as _, jsxs as a, loadCSS as b, jsxRuntime as c, jsx as j, lazyload as l, styles as s };
