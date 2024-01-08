var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { e as convertToTree, g as getSpecificValues, d as config, l as loadScript, f as state, h as utils } from "./hoc.3c567b96.js";
import { j as jsx, a as jsxs } from "./index.c4195357.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "./vendor.96977194.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
class App {
  constructor() {
    _defineProperty(this, "routes", []);
    _defineProperty(this, "pageMap", void 0);
    _defineProperty(this, "fileMap", void 0);
    _defineProperty(this, "history", void 0);
    _defineProperty(this, "setRoutes", (menus) => {
      if (Array.isArray(menus)) {
        const list = convertToTree(menus);
        this.routes = getSpecificValues(list, (item, parentItem) => {
          const {
            paths
          } = parentItem || {};
          return __spreadProps(__spreadValues({}, item), {
            paths: `${paths ? `${paths}/` : "/"}${item.path}`
          });
        });
      }
    });
    _defineProperty(this, "getPageComponent", async (pageId) => {
      const fileKey = this.pageMap[pageId];
      const data = await this.fileMap[fileKey]();
      const key = `createPage_${pageId.replace("-", "")}`;
      const Element = data[key](config);
      return {
        default: Element
      };
    });
    _defineProperty(this, "init", async (url) => {
      await loadScript(url);
      const win = window;
      const appData = win.LowCodeRenderer(config);
      const {
        menus,
        pageMap,
        fileMap,
        modules
      } = appData;
      this.setRoutes(menus);
      this.pageMap = pageMap;
      this.fileMap = fileMap;
      if (modules) {
        for (const key in modules) {
          state.mModules[key] = modules[key]();
        }
      }
      console.log("appData-date", this, appData.date);
    });
  }
}
var app = new App();
var style = "";
const lazy = window["React"].lazy;
const useEffect = window["React"].useEffect;
const useMemo = window["React"].useMemo;
const useState = window["React"].useState;
const HashRouter = window["ReactRouterDOM"].HashRouter;
const Switch = window["ReactRouterDOM"].Switch;
const Route = window["ReactRouterDOM"].Route;
const Redirect = window["ReactRouterDOM"].Redirect;
const useHistory = window["ReactRouterDOM"].useHistory;
const tenant = localStorage.getItem("tenant");
let cdnUrl = "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/resource/" + tenant;
utils.loadCSS(`${cdnUrl}/app.css`);
function getFlattenRoutes(routes) {
  const res = [];
  function travel(_routes) {
    _routes.forEach((route) => {
      if (Array.isArray(route.children) && route.children.length) {
        travel(route.children);
      }
      if (route.pageId && route.isActive == 1) {
        if (app.pageMap[route.pageId]) {
          route.component = lazy(() => app.getPageComponent(route.pageId));
        } else {
          route.component = () => /* @__PURE__ */ jsx("span", {});
        }
        res.push(route);
      }
    });
  }
  travel(routes);
  return res;
}
const PageRouter = () => {
  const flattenRoutes = useMemo(() => getFlattenRoutes(app.routes), []);
  utils.history = useHistory();
  const defaultRoute = useMemo(() => {
    if (!flattenRoutes.length)
      return "/";
    return flattenRoutes[0].paths;
  }, [flattenRoutes]);
  const routeChildren = useMemo(() => {
    return flattenRoutes.map((route, index2) => {
      return /* @__PURE__ */ jsx(Route, {
        path: route.paths,
        component: route.component
      }, index2);
    });
  }, [flattenRoutes]);
  return /* @__PURE__ */ jsxs(Switch, {
    children: [routeChildren, /* @__PURE__ */ jsx(Route, {
      exact: true,
      path: "/",
      children: /* @__PURE__ */ jsx(Redirect, {
        to: defaultRoute
      })
    })]
  });
};
var index = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    app.init(`${cdnUrl}/app.js?t=${Date.now()}`).then(() => {
      setIsReady(true);
    });
  }, []);
  if (!isReady)
    return null;
  return /* @__PURE__ */ jsx(HashRouter, {
    basename: "/run",
    children: /* @__PURE__ */ jsx(PageRouter, {})
  });
};
export { index as default };
