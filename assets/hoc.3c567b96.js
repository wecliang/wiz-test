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
import arcoList from "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import { _ as __vitePreload, j as jsx } from "./index.c4195357.js";
function isArray$1(val) {
  return Object.prototype.toString.call(val) === "[object Array]";
}
function isFunction$2(val) {
  return typeof val === "function";
}
function isPromise$1(val) {
  return typeof val === "object" && isFunction$2(val.then) && isFunction$2(val.catch) && isFunction$2(val.finally);
}
function isBuilderFun(str) {
  return str.indexOf("function(") !== -1 || /\)\s*=>\s*\{/.test(str);
}
function isBuilder(str) {
  return str && typeof str === "string" && str.indexOf("${") !== -1;
}
function isTranslation(str) {
  return str && typeof str === "string" && /^\$t{.+}$/.test(str);
}
const isSSR = function() {
  try {
    return !(typeof window !== "undefined" && document !== void 0);
  } catch (e) {
    return true;
  }
}();
const useEffect = window["React"].useEffect;
const useState$1 = window["React"].useState;
const getStorageSync = (key) => {
  if (!isSSR) {
    return localStorage.getItem(key);
  } else {
    return void 0;
  }
};
const setStorageSync = (key, value) => {
  if (!isSSR) {
    localStorage.setItem(key, value);
  } else {
    return value;
  }
};
const removeStorageSync = (key) => {
  if (!isSSR) {
    localStorage.removeItem(key);
  }
};
function useStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState$1(getStorageSync(key) || defaultValue);
  const setStorageValue = (value) => {
    setStorageSync(key, value);
    setStoredValue(value);
  };
  const removeStorage = () => {
    removeStorageSync(key);
    setStoredValue(void 0);
  };
  useEffect(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      setStoredValue(storageValue);
    }
  }, []);
  return [storedValue, setStorageValue, removeStorage];
}
const colorWeek = false;
const navbar = true;
const menu = true;
const footer = false;
const themeColor = "#165DFF";
const menuWidth = 220;
var defaultSettings = {
  colorWeek,
  navbar,
  menu,
  footer,
  themeColor,
  menuWidth
};
var _class$3, _descriptor$3, _descriptor2$2, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7;
function _initializerDefineProperty$4(target, property, descriptor, context) {
  if (!descriptor)
    return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
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
function _toPropertyKey$3(arg) {
  var key = _toPrimitive$3(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive$3(input, hint) {
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
function _applyDecoratedDescriptor$3(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function(key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
    return decorator(target, property, desc2) || desc2;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}
const observable$3 = window["mobx"].observable;
const action$3 = window["mobx"].action;
let Store = (_class$3 = class Store2 {
  constructor() {
    _defineProperty$3(this, "theme", void 0);
    _initializerDefineProperty$4(this, "settings", _descriptor$3, this);
    _initializerDefineProperty$4(this, "setSettings", _descriptor2$2, this);
    _initializerDefineProperty$4(this, "isLoginVisible", _descriptor3$1, this);
    _initializerDefineProperty$4(this, "userInfo", _descriptor4$1, this);
    _initializerDefineProperty$4(this, "setUserInfo", _descriptor5$1, this);
    _initializerDefineProperty$4(this, "userLoading", _descriptor6$1, this);
    _initializerDefineProperty$4(this, "setUserLoading", _descriptor7, this);
  }
  setIsLoginVisible(bool) {
    this.isLoginVisible = bool;
  }
}, _descriptor$3 = _applyDecoratedDescriptor$3(_class$3.prototype, "settings", [observable$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return defaultSettings;
  }
}), _descriptor2$2 = _applyDecoratedDescriptor$3(_class$3.prototype, "setSettings", [action$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (value) => {
      this.settings = value;
    };
  }
}), _descriptor3$1 = _applyDecoratedDescriptor$3(_class$3.prototype, "isLoginVisible", [observable$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _applyDecoratedDescriptor$3(_class$3.prototype, "setIsLoginVisible", [action$3], Object.getOwnPropertyDescriptor(_class$3.prototype, "setIsLoginVisible"), _class$3.prototype), _descriptor4$1 = _applyDecoratedDescriptor$3(_class$3.prototype, "userInfo", [observable$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return {
      permissions: {}
    };
  }
}), _descriptor5$1 = _applyDecoratedDescriptor$3(_class$3.prototype, "setUserInfo", [action$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (value) => {
      this.userInfo = value;
    };
  }
}), _descriptor6$1 = _applyDecoratedDescriptor$3(_class$3.prototype, "userLoading", [observable$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor$3(_class$3.prototype, "setUserLoading", [action$3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (bool) => {
      this.userLoading = bool;
    };
  }
}), _class$3);
var store = new Store();
var modulePlatform;
(function(modulePlatform2) {
  modulePlatform2["pc"] = "PC";
  modulePlatform2["taro"] = "Taro";
  modulePlatform2["dashboard"] = "Dashboard";
})(modulePlatform || (modulePlatform = {}));
var moduleSource;
(function(moduleSource2) {
  moduleSource2["html"] = "html";
  moduleSource2["system"] = "system";
  moduleSource2["custom"] = "custom";
  moduleSource2["context"] = "context";
})(moduleSource || (moduleSource = {}));
var moduleTypes;
(function(moduleTypes2) {
  moduleTypes2["General"] = "\u901A\u7528";
  moduleTypes2["Layout"] = "\u5E03\u5C40";
  moduleTypes2["DataDisplay"] = "\u6570\u636E\u5C55\u793A";
  moduleTypes2["DataEntry"] = "\u6570\u636E\u5F55\u5165";
  moduleTypes2["Feedback"] = "\u53CD\u9988";
  moduleTypes2["Navigation"] = "\u5BFC\u822A";
  moduleTypes2["Others"] = "\u5176\u4ED6";
})(moduleTypes || (moduleTypes = {}));
var moduleDisplay;
(function(moduleDisplay2) {
  moduleDisplay2["block"] = "\u5757\u7EA7\u5143\u7D20";
  moduleDisplay2["inline"] = "\u5185\u8054\u5143\u7D20";
})(moduleDisplay || (moduleDisplay = {}));
function changeTheme() {
  const monaco = window.monaco;
  const theme = getStorageSync("arco-theme");
  if (theme === "dark") {
    if (monaco)
      monaco.editor.setTheme("custom-dard");
    document.body.setAttribute("arco-theme", "dark");
  } else {
    if (monaco)
      monaco.editor.setTheme("vs");
    document.body.removeAttribute("arco-theme");
  }
}
var _class$2, _descriptor$2, _descriptor2$1;
function _initializerDefineProperty$3(target, property, descriptor, context) {
  if (!descriptor)
    return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
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
function _toPropertyKey$2(arg) {
  var key = _toPrimitive$2(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive$2(input, hint) {
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
function _applyDecoratedDescriptor$2(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function(key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
    return decorator(target, property, desc2) || desc2;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}
const action$2 = window["mobx"].action;
const computed = window["mobx"].computed;
const observable$2 = window["mobx"].observable;
const toJS = window["mobx"].toJS;
let App = (_class$2 = class App2 {
  constructor() {
    _defineProperty$2(this, "verison", void 0);
    _defineProperty$2(this, "appId", "gtssForm");
    _defineProperty$2(this, "tenantId", "");
    _defineProperty$2(this, "platform", modulePlatform.pc);
    _defineProperty$2(this, "theme", void 0);
    _defineProperty$2(this, "userId", "");
    _defineProperty$2(this, "setTheme", (theme) => {
      this.theme = theme;
      setStorageSync("arco-theme", theme);
      changeTheme();
    });
    _initializerDefineProperty$3(this, "data", _descriptor$2, this);
    _initializerDefineProperty$3(this, "setData", _descriptor2$1, this);
  }
  get appData() {
    return {
      data: toJS(this.data)
    };
  }
  get appDataSchema() {
    return {
      "type": "object",
      "properties": {
        "appId": {
          "type": "string",
          "description": "\u5E94\u7528ID"
        }
      }
    };
  }
}, _descriptor$2 = _applyDecoratedDescriptor$2(_class$2.prototype, "data", [observable$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return {};
  }
}), _descriptor2$1 = _applyDecoratedDescriptor$2(_class$2.prototype, "setData", [action$2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (vals) => {
      this.data = vals;
    };
  }
}), _applyDecoratedDescriptor$2(_class$2.prototype, "appData", [computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "appData"), _class$2.prototype), _applyDecoratedDescriptor$2(_class$2.prototype, "appDataSchema", [computed], Object.getOwnPropertyDescriptor(_class$2.prototype, "appDataSchema"), _class$2.prototype), _class$2);
var app = new App();
var axios$2 = { exports: {} };
var bind$2 = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$1 = bind$2;
var toString = Object.prototype.toString;
function isArray(val) {
  return toString.call(val) === "[object Array]";
}
function isUndefined(val) {
  return typeof val === "undefined";
}
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}
function isFormData(val) {
  return typeof FormData !== "undefined" && val instanceof FormData;
}
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}
function isString(val) {
  return typeof val === "string";
}
function isNumber(val) {
  return typeof val === "number";
}
function isObject(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(val) {
  return toString.call(val) === "[object Date]";
}
function isFile(val) {
  return toString.call(val) === "[object File]";
}
function isBlob(val) {
  return toString.call(val) === "[object Blob]";
}
function isFunction$1(val) {
  return toString.call(val) === "[object Function]";
}
function isStream(val) {
  return isObject(val) && isFunction$1(val.pipe);
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach(obj, fn) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
function merge() {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === "function") {
      a[key] = bind$1(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}
function stripBOM(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
var utils$e = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isFunction: isFunction$1,
  isStream,
  isURLSearchParams,
  isStandardBrowserEnv,
  forEach,
  merge,
  extend,
  trim,
  stripBOM
};
var utils$d = utils$e;
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$2 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$d.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$d.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$d.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      utils$d.forEach(val, function parseValue(v) {
        if (utils$d.isDate(v)) {
          v = v.toISOString();
        } else if (utils$d.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$c = utils$e;
function InterceptorManager$1() {
  this.handlers = [];
}
InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$1.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
InterceptorManager$1.prototype.forEach = function forEach2(fn) {
  utils$c.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1 = InterceptorManager$1;
var utils$b = utils$e;
var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
  utils$b.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
var enhanceError$2 = function enhanceError(error, config2, code, request2, response) {
  error.config = config2;
  if (code) {
    error.code = code;
  }
  error.request = request2;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};
var enhanceError$1 = enhanceError$2;
var createError$2 = function createError(message, config2, code, request2, response) {
  var error = new Error(message);
  return enhanceError$1(error, config2, code, request2, response);
};
var createError$1 = createError$2;
var settle$1 = function settle(resolve, reject, response) {
  var validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(createError$1("Request failed with status code " + response.status, response.config, null, response.request, response));
  }
};
var utils$a = utils$e;
var cookies$1 = utils$a.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils$a.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils$a.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils$a.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();
var isAbsoluteURL$1 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL2 = isAbsoluteURL$1;
var combineURLs2 = combineURLs$1;
var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL2(requestedURL)) {
    return combineURLs2(baseURL, requestedURL);
  }
  return requestedURL;
};
var utils$9 = utils$e;
var ignoreDuplicateOf = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
var parseHeaders$1 = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;
  if (!headers) {
    return parsed;
  }
  utils$9.forEach(headers.split("\n"), function parser(line) {
    i = line.indexOf(":");
    key = utils$9.trim(line.substr(0, i)).toLowerCase();
    val = utils$9.trim(line.substr(i + 1));
    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === "set-cookie") {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
      }
    }
  });
  return parsed;
};
var utils$8 = utils$e;
var isURLSameOrigin$1 = utils$8.isStandardBrowserEnv() ? function standardBrowserEnv2() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement("a");
  var originURL;
  function resolveURL(url) {
    var href = url;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin2(requestURL) {
    var parsed = utils$8.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin2() {
    return true;
  };
}();
function Cancel$3(message) {
  this.message = message;
}
Cancel$3.prototype.toString = function toString2() {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel$3.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel$3;
var utils$7 = utils$e;
var settle2 = settle$1;
var cookies = cookies$1;
var buildURL$1 = buildURL$2;
var buildFullPath2 = buildFullPath$1;
var parseHeaders2 = parseHeaders$1;
var isURLSameOrigin = isURLSameOrigin$1;
var createError2 = createError$2;
var defaults$4 = defaults_1;
var Cancel$2 = Cancel_1;
var xhr = function xhrAdapter(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config2.data;
    var requestHeaders = config2.headers;
    var responseType = config2.responseType;
    var onCanceled;
    function done() {
      if (config2.cancelToken) {
        config2.cancelToken.unsubscribe(onCanceled);
      }
      if (config2.signal) {
        config2.signal.removeEventListener("abort", onCanceled);
      }
    }
    if (utils$7.isFormData(requestData)) {
      delete requestHeaders["Content-Type"];
    }
    var request2 = new XMLHttpRequest();
    if (config2.auth) {
      var username = config2.auth.username || "";
      var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }
    var fullPath = buildFullPath2(config2.baseURL, config2.url);
    request2.open(config2.method.toUpperCase(), buildURL$1(fullPath, config2.params, config2.paramsSerializer), true);
    request2.timeout = config2.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      var responseHeaders = "getAllResponseHeaders" in request2 ? parseHeaders2(request2.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      var response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle2(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(createError2("Request aborted", config2, "ECONNABORTED", request2));
      request2 = null;
    };
    request2.onerror = function handleError() {
      reject(createError2("Network Error", config2, null, request2));
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
      var transitional2 = config2.transitional || defaults$4.transitional;
      if (config2.timeoutErrorMessage) {
        timeoutErrorMessage = config2.timeoutErrorMessage;
      }
      reject(createError2(timeoutErrorMessage, config2, transitional2.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request2));
      request2 = null;
    };
    if (utils$7.isStandardBrowserEnv()) {
      var xsrfValue = (config2.withCredentials || isURLSameOrigin(fullPath)) && config2.xsrfCookieName ? cookies.read(config2.xsrfCookieName) : void 0;
      if (xsrfValue) {
        requestHeaders[config2.xsrfHeaderName] = xsrfValue;
      }
    }
    if ("setRequestHeader" in request2) {
      utils$7.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
          delete requestHeaders[key];
        } else {
          request2.setRequestHeader(key, val);
        }
      });
    }
    if (!utils$7.isUndefined(config2.withCredentials)) {
      request2.withCredentials = !!config2.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = config2.responseType;
    }
    if (typeof config2.onDownloadProgress === "function") {
      request2.addEventListener("progress", config2.onDownloadProgress);
    }
    if (typeof config2.onUploadProgress === "function" && request2.upload) {
      request2.upload.addEventListener("progress", config2.onUploadProgress);
    }
    if (config2.cancelToken || config2.signal) {
      onCanceled = function(cancel) {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel && cancel.type ? new Cancel$2("canceled") : cancel);
        request2.abort();
        request2 = null;
      };
      config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
      if (config2.signal) {
        config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
      }
    }
    if (!requestData) {
      requestData = null;
    }
    request2.send(requestData);
  });
};
var utils$6 = utils$e;
var normalizeHeaderName2 = normalizeHeaderName$1;
var enhanceError2 = enhanceError$2;
var DEFAULT_CONTENT_TYPE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
  if (!utils$6.isUndefined(headers) && utils$6.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = xhr;
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = xhr;
  }
  return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$6.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$6.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$3 = {
  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName2(headers, "Accept");
    normalizeHeaderName2(headers, "Content-Type");
    if (utils$6.isFormData(data2) || utils$6.isArrayBuffer(data2) || utils$6.isBuffer(data2) || utils$6.isStream(data2) || utils$6.isFile(data2) || utils$6.isBlob(data2)) {
      return data2;
    }
    if (utils$6.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$6.isURLSearchParams(data2)) {
      setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    if (utils$6.isObject(data2) || headers && headers["Content-Type"] === "application/json") {
      setContentTypeIfUnset(headers, "application/json");
      return stringifySafely(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional2 = this.transitional || defaults$3.transitional;
    var silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
    var forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$6.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw enhanceError2(e, this, "E_JSON_PARSE");
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$6.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$3.headers[method] = {};
});
utils$6.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$3.headers[method] = utils$6.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults$3;
var utils$5 = utils$e;
var defaults$2 = defaults_1;
var transformData$1 = function transformData(data2, headers, fns) {
  var context = this || defaults$2;
  utils$5.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$1 = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};
var utils$4 = utils$e;
var transformData2 = transformData$1;
var isCancel2 = isCancel$1;
var defaults$1 = defaults_1;
var Cancel$1 = Cancel_1;
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new Cancel$1("canceled");
  }
}
var dispatchRequest$1 = function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData2.call(config2, config2.data, config2.headers, config2.transformRequest);
  config2.headers = utils$4.merge(config2.headers.common || {}, config2.headers[config2.method] || {}, config2.headers);
  utils$4.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
    delete config2.headers[method];
  });
  var adapter = config2.adapter || defaults$1.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config2);
    response.data = transformData2.call(config2, response.data, response.headers, config2.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel2(reason)) {
      throwIfCancellationRequested(config2);
      if (reason && reason.response) {
        reason.response.data = transformData2.call(config2, reason.response.data, reason.response.headers, config2.transformResponse);
      }
    }
    return Promise.reject(reason);
  });
};
var utils$3 = utils$e;
var mergeConfig$2 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  function getMergedValue(target, source2) {
    if (utils$3.isPlainObject(target) && utils$3.isPlainObject(source2)) {
      return utils$3.merge(target, source2);
    } else if (utils$3.isPlainObject(source2)) {
      return utils$3.merge({}, source2);
    } else if (utils$3.isArray(source2)) {
      return source2.slice();
    }
    return source2;
  }
  function mergeDeepProperties(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$3.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$3.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$3.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$3.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
};
var data = {
  "version": "0.24.0"
};
var VERSION = data.version;
var validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$1[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new TypeError("options must be an object");
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new TypeError("option " + opt + " must be " + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error("Unknown option " + opt);
    }
  }
}
var validator$1 = {
  assertOptions,
  validators: validators$1
};
var utils$2 = utils$e;
var buildURL2 = buildURL$2;
var InterceptorManager = InterceptorManager_1;
var dispatchRequest2 = dispatchRequest$1;
var mergeConfig$1 = mergeConfig$2;
var validator = validator$1;
var validators = validator.validators;
function Axios$1(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
Axios$1.prototype.request = function request(config2) {
  if (typeof config2 === "string") {
    config2 = arguments[1] || {};
    config2.url = arguments[0];
  } else {
    config2 = config2 || {};
  }
  config2 = mergeConfig$1(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional2 = config2.transitional;
  if (transitional2 !== void 0) {
    validator.assertOptions(transitional2, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }
  try {
    promise = dispatchRequest2(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$1.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig$1(this.defaults, config2);
  return buildURL2(config2.url, config2.params, config2.paramsSerializer).replace(/^\?/, "");
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  Axios$1.prototype[method] = function(url, data2, config2) {
    return this.request(mergeConfig$1(config2 || {}, {
      method,
      url,
      data: data2
    }));
  };
});
var Axios_1 = Axios$1;
var Cancel = Cancel_1;
function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be a function.");
  }
  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  this.promise.then(function(cancel) {
    if (!token._listeners)
      return;
    var i;
    var l = token._listeners.length;
    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });
  this.promise.then = function(onfulfilled) {
    var _resolve;
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);
    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };
    return promise;
  };
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }
  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};
CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index2 = this._listeners.indexOf(listener);
  if (index2 !== -1) {
    this._listeners.splice(index2, 1);
  }
};
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token,
    cancel
  };
};
var CancelToken_1 = CancelToken;
var spread = function spread2(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};
var isAxiosError = function isAxiosError2(payload) {
  return typeof payload === "object" && payload.isAxiosError === true;
};
var utils$1 = utils$e;
var bind2 = bind$2;
var Axios = Axios_1;
var mergeConfig2 = mergeConfig$2;
var defaults = defaults_1;
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind2(Axios.prototype.request, context);
  utils$1.extend(instance, Axios.prototype, context);
  utils$1.extend(instance, context);
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig2(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios$1 = createInstance(defaults);
axios$1.Axios = Axios;
axios$1.Cancel = Cancel_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = data.version;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;
axios$1.isAxiosError = isAxiosError;
axios$2.exports = axios$1;
axios$2.exports.default = axios$1;
var axios = axios$2.exports;
let ivKey = "d3VRYzJKUmFxem1S";
let publicKey;
const ajaxUrl = `${"https://wizui-test-node-ko-apijson-pnnrmtijvi.cn-hangzhou.fcapp.run"}/codes`;
const getPublicKey = async () => {
  const key = "store-public-key";
  if (!publicKey) {
    const localPublicKey = localStorage.getItem(publicKey);
    if (localPublicKey) {
      publicKey = localPublicKey;
      axios.get(ajaxUrl + "/publicKey", {}).then(({
        data: data2
      }) => {
        publicKey = data2.data;
        localStorage.setItem(key, publicKey);
      });
      return publicKey;
    }
    await axios.get(ajaxUrl + "/publicKey", {}).then(({
      data: data2
    }) => {
      publicKey = data2.data;
      localStorage.setItem(key, publicKey);
    });
  }
  console.log("this.pulick", publicKey);
  return publicKey;
};
const getEncryptedKey = async function(pwd) {
  const forge = await __vitePreload(() => import("./index.a2e72837.js").then(function(n) {
    return n.i;
  }), true ? ["assets/index.a2e72837.js","assets/vendor.96977194.js","assets/13mh1j7et.5aeab982.js"] : void 0);
  const publicKeyPem = await getPublicKey();
  const publicKey2 = forge.pki.publicKeyFromPem(publicKeyPem);
  const encrypted = publicKey2.encrypt(pwd, "RSA-OAEP");
  return forge.util.encode64(encrypted);
};
async function generateRandomString(length = 16) {
  const forge = await __vitePreload(() => import("./index.a2e72837.js").then(function(n) {
    return n.i;
  }), true ? ["assets/index.a2e72837.js","assets/vendor.96977194.js","assets/13mh1j7et.5aeab982.js"] : void 0);
  const bytes = forge.random.getBytesSync(length);
  const hexString = forge.util.bytesToHex(bytes);
  return hexString.slice(0, length);
}
const getAESKey = (key) => {
  return new Array(16).fill(key).join("").slice(0, 16);
};
const aseEncrypt = async (crykey, data2) => {
  const forge = await __vitePreload(() => import("./index.a2e72837.js").then(function(n) {
    return n.i;
  }), true ? ["assets/index.a2e72837.js","assets/vendor.96977194.js","assets/13mh1j7et.5aeab982.js"] : void 0);
  const iv = forge.util.createBuffer(ivKey).getBytes();
  const key = forge.util.createBuffer(crykey).getBytes();
  const cipher = forge.cipher.createCipher("AES-CBC", key);
  cipher.start({
    iv
  });
  cipher.update(forge.util.createBuffer(JSON.stringify({
    data: data2
  })));
  cipher.finish();
  const ciphertext = cipher.output.getBytes();
  const ciphertextStr = forge.util.bytesToHex(ciphertext);
  return ciphertextStr;
};
const aseDecrypt = async (crykey, data2, ivK = ivKey) => {
  const forge = await __vitePreload(() => import("./index.a2e72837.js").then(function(n) {
    return n.i;
  }), true ? ["assets/index.a2e72837.js","assets/vendor.96977194.js","assets/13mh1j7et.5aeab982.js"] : void 0);
  const iv = forge.util.createBuffer(getAESKey(ivK)).getBytes();
  const ciphertextBytes = forge.util.hexToBytes(data2);
  const key = forge.util.createBuffer(getAESKey(crykey)).getBytes();
  const decipher = forge.cipher.createDecipher("AES-CBC", key);
  decipher.start({
    iv
  });
  decipher.update(forge.util.createBuffer(ciphertextBytes));
  decipher.finish();
  const decrypted = JSON.parse(decipher.output.data);
  return decrypted.data;
};
const _$4 = window["_"];
const alphabeticKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function paramListToJSONSchema(list) {
  if (!Array.isArray(list))
    return void 0;
  const result = list.filter((o) => !o.name);
  return {
    type: "object",
    properties: __spreadValues({}, result.reduce((obj, item) => _$4.assign(obj, {
      [item.name]: {
        type: "object",
        description: item.description || item.label || ""
      }
    }), {}))
  };
}
const schemaToList = (o, path = ["$"], {
  key = path[0],
  schemaPath = path,
  parent = null
} = {}) => {
  const params = {
    id: getUuid(),
    type: o.type,
    path,
    schemaPath,
    key,
    _store: o
  };
  switch (o.type) {
    case "array":
      if (o.items) {
        if (!Array.isArray(o.items)) {
          if (o.items.type === "object" && o.items.properties) {
            const properties = o.items.properties;
            const keys = Object.keys(properties);
            params.children = keys.map((key2) => {
              return schemaToList(properties[key2], [...path, "0", key2], {
                key: key2,
                parent: o,
                schemaPath: [...schemaPath, "items", "properties", key2]
              });
            });
          } else {
            params.children = [schemaToList(o.items, [...path, "0"], {
              key: "0",
              parent: o,
              schemaPath: [...schemaPath, "items"]
            })];
          }
        } else {
          params.children = o.items.map((option, i) => {
            return schemaToList(option, [...path, i.toString()], {
              key: `${i}`,
              parent: o,
              schemaPath: [...schemaPath, "items", i.toString()]
            });
          });
        }
      }
      break;
    case "object":
      if (o.properties) {
        const properties = o.properties;
        const keys = Object.keys(properties);
        params.children = keys.map((key2) => {
          return schemaToList(properties[key2], [...path, key2], {
            key: key2,
            parent: o,
            schemaPath: [...schemaPath, "properties", key2]
          });
        });
      }
      break;
  }
  return params;
};
const schemaToDescriptionsData = (schema, data2 = {}) => {
  const {
    children: list = []
  } = schemaToList(schema);
  return list.map((o) => {
    const {
      _store,
      key
    } = o;
    const {
      title,
      type,
      enum: filters,
      widget,
      format,
      default: defaultValue
    } = _store;
    return {
      key,
      label: title || key,
      value: data2[key] || defaultValue,
      format
    };
  });
};
const schemaToJSON = (json, data2, option = {}) => {
  if (!json)
    return json;
  if (typeof json === "string")
    return json;
  const value = json.default;
  let val = value;
  switch (json.type) {
    case "string":
      val = value;
      break;
    case "object":
      const properties = json.properties;
      if (properties) {
        val = {};
        Object.keys(properties).forEach((key) => {
          const objVal = schemaToJSON(properties[key]);
          if (objVal !== void 0 || option.isNull) {
            val[key] = objVal;
          }
        });
      }
      break;
    case "array":
      if (value && Array.isArray(value)) {
        val = value;
      } else if (json.items) {
        if (Array.isArray(json.items)) {
          val = json.items.map((o) => schemaToJSON(o));
        } else {
          val = [];
        }
      }
      break;
    case "integer":
    case "number":
      val = value;
      break;
    case "null":
      val = null;
      break;
  }
  return val;
};
const jsonToSchema = (val, json = {}) => {
  const obj = {
    type: "object"
  };
  const valType = typeof val;
  switch (valType) {
    case "bigint":
      obj.type = "integer";
      break;
    case "boolean":
      obj.type = "boolean";
      break;
    case "number":
      obj.type = "number";
      break;
    case "object":
      obj.type = "object";
      if (!val) {
        obj.type = "null";
      } else if (Array.isArray(val)) {
        obj.type = "array";
        const list = val;
        if (list.length) {
          const arr = Array.from(new Set(list.map((o) => {
            return typeof o;
          })));
          if (arr.length === 1) {
            let listItem = list[0];
            if (typeof listItem === "object" && !Array.isArray(listItem)) {
              listItem = list.reduce((objs, option) => Object.assign(objs, option), {});
            }
            obj.items = jsonToSchema(listItem, Array.isArray(json == null ? void 0 : json.items) ? json == null ? void 0 : json.items[0] : json == null ? void 0 : json.items);
            if (obj.items.type === "object") {
              const properties = obj.items.properties;
              if (properties) {
                obj.items.required = Object.keys(properties).filter((ik) => list.every((o) => ik in o));
              }
            }
          } else {
            obj.items = list.map((o, i) => jsonToSchema(o, Array.isArray(json == null ? void 0 : json.items) ? json == null ? void 0 : json.items[i] : i === 1 ? json == null ? void 0 : json.items : void 0));
          }
        } else {
          obj.items = json.items;
        }
      } else {
        const properties = {};
        Object.keys(val).forEach((key) => {
          properties[key] = jsonToSchema(val[key], (json == null ? void 0 : json.properties) ? json.properties[key] : void 0);
        });
        obj.properties = properties;
      }
      break;
    case "string":
      obj.type = "string";
      break;
    case "undefined":
      obj.type = "string";
      break;
  }
  if ((json == null ? void 0 : json.type) === obj.type) {
    _$4.assign(obj, _$4.omit(json, ["properties", "items"]));
  }
  if (valType !== "object" || Array.isArray(val)) {
    obj.default = val;
  }
  return obj;
};
const _$3 = window["_"];
const Modal = window["arco"].Modal;
const getUuid = (type) => {
  function S4() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  if (type === "hash")
    return `${S4()}${S4()}`;
  return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
};
const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return new Promise((resolve) => {
      const oInput = document.createElement("textarea");
      oInput.value = text;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("Copy");
      document.body.removeChild(oInput);
      resolve(true);
    });
  }
};
const returnToLogin = () => {
  Modal.confirm({
    title: "\u63D0\u793A",
    content: "\u60A8\u5F53\u524D\u8FD8\u672A\u767B\u9646\uFF0C\u70B9\u51FB\u53BB\u767B\u9646\u8D26\u53F7",
    onOk: () => {
      window.open("https://wfm-s.gaiaworkforce.com/");
    }
  });
};
const asyncAwaitFunction = (fun) => {
  let loading = false;
  return (...arg) => {
    if (loading)
      return;
    return fun(...arg).finally(() => {
      loading = false;
    });
  };
};
const delayedFunction = (fun, time = 300) => {
  let timer = null;
  return (...arg) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fun(...arg), time);
  };
};
function convertToTree(data2, key = "id", parentKey = "parentId") {
  const map = {};
  const roots = [];
  for (let i = 0; i < data2.length; i++) {
    const {
      [key]: id
    } = data2[i];
    const children = [];
    map[id] = __spreadProps(__spreadValues({}, data2[i]), {
      children
    });
  }
  for (let i = 0; i < data2.length; i++) {
    const {
      [key]: id,
      [parentKey]: uid
    } = data2[i];
    const parent = map[uid];
    if (parent) {
      parent.children.push(map[id]);
    } else {
      roots.push(map[id]);
    }
  }
  return roots;
}
function searchTreeNode(data2, value, key = "id") {
  let result = null;
  const loop = (list) => {
    for (const item of list) {
      if (item[key] === value) {
        result = item;
        break;
      }
      if (item.children)
        loop(item.children);
    }
  };
  loop(data2);
  return result;
}
function getSpecificValues(list, keys) {
  const recursionList = (list2, parentItem = null) => {
    const resultList = [];
    for (const data2 of list2) {
      let result = {};
      if (typeof keys === "function") {
        result = keys(data2, parentItem);
      } else {
        keys.forEach((key) => {
          if (data2[key]) {
            result[key] = data2[key];
          }
        });
      }
      if (Array.isArray(data2.children) && data2.children.length > 0) {
        result.children = recursionList(data2.children, result);
      }
      resultList.push(result);
    }
    return resultList;
  };
  return recursionList(list);
}
function filterTreeData(data2, searchQuery) {
  return data2.map((node) => {
    if (searchQuery(node)) {
      return node;
    } else if (node.children) {
      const filteredChildren = filterTreeData(node.children, searchQuery);
      if (filteredChildren.length > 0) {
        return __spreadProps(__spreadValues({}, node), {
          children: filteredChildren,
          toggled: true
        });
      }
    }
    return null;
  }).filter((node) => node !== null);
}
const getQueryParam = (path, key) => {
  if (!key || !path)
    return "";
  const array = path.substring(path.indexOf("?") + 1).split(/[&=]/);
  const index2 = array.indexOf(key);
  if (index2 !== -1 && index2 % 2 === 0) {
    return decodeURIComponent(array[index2 + 1]);
  } else {
    return "";
  }
};
function getFieldSchema(jsonSchema, fieldPath) {
  let pathSegments = fieldPath;
  if (typeof pathSegments === "string") {
    pathSegments = pathSegments.split(/\.|\[|\]\.?/).filter((segment) => segment !== "");
  }
  let currentSchema = jsonSchema;
  for (const segment of pathSegments) {
    if (currentSchema && currentSchema.properties && currentSchema.properties[segment]) {
      currentSchema = currentSchema.properties[segment];
    } else if (currentSchema && currentSchema.items) {
      if (Array.isArray(currentSchema.items)) {
        const arrayIndex = parseInt(segment, 10);
        if (!isNaN(arrayIndex) && currentSchema.items[arrayIndex]) {
          currentSchema = currentSchema.items[arrayIndex];
        } else {
          currentSchema = null;
          break;
        }
      } else if (currentSchema.items.properties && currentSchema.items.properties[segment]) {
        currentSchema = currentSchema.items.properties[segment];
      } else {
        currentSchema = currentSchema.items;
      }
    } else {
      currentSchema = null;
      break;
    }
  }
  return currentSchema;
}
const tableSchemaToSearchSchema = (schema) => {
  if (!schema && !schema.properties)
    return schema;
  const objs = {
    type: "object",
    properties: {}
  };
  const keys = Object.keys(schema.properties);
  for (const key of keys) {
    const item = schema.properties[key];
    const obj = __spreadValues({}, item);
    const {
      format
    } = item;
    switch (format) {
      case "date":
        obj.type = "array";
        obj.format = "dateRange";
        break;
      case "dateTime":
        obj.type = "array";
        obj.format = "dateRange";
        obj.fieldProps = __spreadProps(__spreadValues({}, item.fieldProps), {
          showTime: true
        });
        break;
      case "time":
        obj.type = "array";
        obj.format = "time";
        obj.fieldProps = __spreadProps(__spreadValues({}, item.fieldProps), {
          showTime: true
        });
        break;
      default:
        if (item.type == "array" && item.enum) {
          let enumKeys = item.enum;
          if (typeof item.enum[0] === "object") {
            enumKeys = item.enum.map((o) => o.value);
          }
          obj.enum = enumKeys;
        }
    }
    objs.properties[key] = obj;
  }
  return objs;
};
const schemaToTableColumn = (schema) => {
  const list = schemaToList(schema).children || [];
  const recursionList = (arr) => {
    if (!arr)
      return [];
    return arr.map((o) => {
      const {
        _store,
        key
      } = o;
      const {
        title,
        type,
        enum: filters,
        widget,
        columnProps,
        format
      } = _store;
      if (type == "object")
        return null;
      const item = __spreadValues({
        title: title || key,
        align: ["number", "integer"].includes(type) ? "right" : "left",
        dataIndex: key,
        widget,
        valueEnum: filters && filters.reduce((obj, o2) => {
          if (typeof o2 === "object") {
            return _$3.assign(obj, {
              [o2.value]: o2
            });
          }
          return _$3.assign(obj, {
            [o2]: {
              label: o2
            }
          });
        }, {})
      }, columnProps);
      return item;
    }).filter((o) => o);
  };
  return recursionList(list);
};
function addCSS(cssText, id) {
  let style = id ? document.getElementById(id) : null;
  if (!style) {
    style = document.createElement("style");
    style.type = "text/css";
    style.setAttribute("id", id);
    style.innerHTML = cssText;
    document.head.appendChild(style);
  }
  style.innerHTML = cssText;
  console.log("style", style);
}
function convertToCamelCase(key) {
  const lowercaseStr = key.toLowerCase();
  const parts = lowercaseStr.split("_");
  const camelCaseStr = parts[0] + parts.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  return camelCaseStr;
}
const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.setAttribute("type", "module");
    script.onload = (res) => {
      console.log("loadScript", res, url);
      resolve(true);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};
const Message = window["arco"].Message;
const _$2 = window["_"];
const getHeaders = async (body, option) => {
  const headers = {
    appid: app.appId,
    tenantid: app.tenantId,
    userid: app.userId
  };
  if (userStore.userToken) {
    headers.Authorization = `Bearer ${userStore.userToken}`;
  }
  let cryptKey;
  if (option.encrypt || option.decrypt) {
    cryptKey = await generateRandomString(16);
    if (option.encrypt) {
      if (option.encrypt === "all") {
        body = {
          data: await aseEncrypt(cryptKey, body)
        };
      } else {
        for (const path of option.encrypt) {
          const value = _$2.get(body, path);
          if (value) {
            _$2.set(body, path, await aseEncrypt(cryptKey, value));
          }
        }
      }
      headers.encrypt = Array.isArray(option.encrypt) ? option.encrypt.join(",") : option.encrypt;
    }
    headers.encryptkey = await getEncryptedKey(cryptKey);
  }
  return {
    cryptKey,
    headers,
    body
  };
};
const ajaxCache = {};
const requestAxios = async (method = "get", path, data2, option = {}) => {
  const {
    cryptKey,
    headers,
    body
  } = await getHeaders(__spreadValues({}, data2), option);
  let url = path.slice(0, 4) == "http" ? path : ajaxUrl + path;
  if (option.notHttp) {
    url = path;
  }
  const dataKey = `apiKey-${JSON.stringify(body)}`;
  if (option.cache && ajaxCache[dataKey])
    return ajaxCache[dataKey];
  const promiseAjax = new Promise((resolve, reject) => {
    axios.request({
      method,
      url,
      params: ["get", "delete"].includes(method) ? body : void 0,
      data: body,
      headers: Object.assign(headers, option.headers || {})
    }).then(async (res) => {
      let data22 = res.data;
      if (option.decrypt) {
        data22 = await aseDecrypt(cryptKey, data22);
      }
      if (typeof data22 === "object" && "code" in data22) {
        if (data22.code === 0) {
          return resolve(data22);
        } else {
          reject(data22);
          if (data22.msg) {
            Message.error(data22.msg);
          }
        }
      }
      if (res.status === 401 || res.status === 800) {
        returnToLogin();
      }
      resolve(data22);
    }).catch((err) => {
      console.log("ajax-error", err);
      const data22 = err.response && err.response.data;
      if (typeof data22 === "object") {
        if (data22.code === 401) {
          returnToLogin();
        } else if (data22.msg) {
          Message.error(data22.msg);
        }
      }
      reject(err);
    });
  });
  ajaxCache[dataKey] = promiseAjax;
  return promiseAjax;
};
var ajax = {
  post: (url, data2, option) => {
    return requestAxios("post", url, data2, option);
  },
  get: (url, data2, option) => {
    return requestAxios("get", url, data2, option);
  },
  del: (url, data2, option) => {
    return requestAxios("delete", url, data2, option);
  },
  put: (url, data2, option) => {
    return requestAxios("put", url, data2, option);
  },
  request: async (method = "GET", path, data2 = {}, option = {}) => {
    let body = data2;
    const {
      cryptKey,
      headers
    } = await getHeaders(body, option);
    const url = path.indexOf("http") !== -1 ? path : `/wizapi${path}`;
    return new Promise((resolve, reject) => {
      axios.request({
        method,
        url,
        data: body,
        headers: Object.assign(headers, option.headers || {})
      }).then(async (res) => {
        let data22 = res.data;
        if (option.decrypt) {
          data22 = await aseDecrypt(cryptKey, data22);
        }
        resolve(__spreadProps(__spreadValues({}, res), {
          data: data22
        }));
      }).catch((err) => {
        const data22 = err.response && err.response.data;
        if (typeof data22 === "object" && data22.msg) {
          Message.error(data22.msg);
        }
        resolve(err.response);
      });
    });
  }
};
const win$1 = window;
var index = __spreadValues({
  ENV: "local",
  CDNURL: "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com",
  TokenKey: "TS-CODE-AUTH_TOKEN"
}, win$1.publicConfig || {});
const win = window;
var config$1 = __spreadValues(__spreadProps(__spreadValues({}, index), {
  ENV: "prod",
  CDNURL: "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com"
}), win.publicConfig || {});
var _class$1, _descriptor$1, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
function _initializerDefineProperty$2(target, property, descriptor, context) {
  if (!descriptor)
    return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
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
function _toPropertyKey$1(arg) {
  var key = _toPrimitive$1(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive$1(input, hint) {
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
function _applyDecoratedDescriptor$1(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function(key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
    return decorator(target, property, desc2) || desc2;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}
const action$1 = window["mobx"].action;
const observable$1 = window["mobx"].observable;
const tokenKey = config$1.TokenKey;
let UserStore = (_class$1 = class UserStore2 {
  constructor() {
    _defineProperty$1(this, "userToken", this.getToken());
    _defineProperty$1(this, "setUserToken", (token) => {
      this.userToken = token;
      this.setToken(token);
      localStorage.setItem("userStatus", "login");
    });
    _initializerDefineProperty$2(this, "user", _descriptor$1, this);
    _initializerDefineProperty$2(this, "setUserInfo", _descriptor2, this);
    _initializerDefineProperty$2(this, "publishReady", _descriptor3, this);
    _initializerDefineProperty$2(this, "isLoaging", _descriptor4, this);
    _defineProperty$1(this, "getUserToken", async () => {
      return ajax.post("/user/getUserToken", {
        user: this.user
      }, {
        encrypt: "all"
      }).then((res) => {
        this.setUserToken(res.data.token);
        store.setUserLoading(true);
      });
    });
    _initializerDefineProperty$2(this, "onLogin", _descriptor5, this);
    _initializerDefineProperty$2(this, "getUserInfo", _descriptor6, this);
  }
  getToken() {
    const time = localStorage.getItem(`${tokenKey}-express`);
    const token = localStorage[tokenKey];
    if (token && time && Date.now().toString() < time) {
      return token;
    }
    return;
  }
  setToken(value, expressTime = 6) {
    localStorage.setItem(tokenKey, value);
    const time = expressTime * 3600 * 1e3 + Date.now();
    localStorage.setItem(`${tokenKey}-express`, time.toString());
  }
}, _descriptor$1 = _applyDecoratedDescriptor$1(_class$1.prototype, "user", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor$1(_class$1.prototype, "setUserInfo", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (user) => {
      this.user = user;
      app.userId = user.userID;
      app.tenantId = user.tenant;
      app.appId = user.tenant;
      store.setUserLoading(true);
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor$1(_class$1.prototype, "publishReady", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor$1(_class$1.prototype, "isLoaging", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor$1(_class$1.prototype, "onLogin", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return async (user) => {
      this.setUserInfo(user);
      this.getUserToken();
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor$1(_class$1.prototype, "getUserInfo", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (token) => {
    };
  }
}), _class$1);
var userStore = new UserStore();
const React$1 = window["React"];
const PageContext = React$1.createContext(null);
const _$1 = window["_"];
const arco = window["arco"];
const arcoModuleList = arcoList;
const renderNode = arcoModuleList.reduce((obj, o) => {
  return __spreadProps(__spreadValues({}, obj), {
    [o.key]: _$1.get(arco, o.name)
  });
}, {});
const contexts = {
  "system_pagecontext": PageContext
};
var ModeType;
(function(ModeType2) {
  ModeType2["api"] = "api";
  ModeType2["traverse"] = "traverse";
  ModeType2["filter"] = "filter";
})(ModeType || (ModeType = {}));
var MethodType;
(function(MethodType2) {
  MethodType2["GET"] = "GET";
  MethodType2["POST"] = "POST";
  MethodType2["PUT"] = "PUT";
  MethodType2["DELETE"] = "DELETE";
})(MethodType || (MethodType = {}));
var functionTypes;
(function(functionTypes2) {
  functionTypes2["history"] = "history";
  functionTypes2["href"] = "href";
  functionTypes2["message"] = "message";
  functionTypes2["form"] = "form";
  functionTypes2["table"] = "table";
  functionTypes2["busItem"] = "busItem";
  functionTypes2["dialog"] = "dialog";
  functionTypes2["api"] = "api";
  functionTypes2["task"] = "task";
  functionTypes2["download"] = "download";
})(functionTypes || (functionTypes = {}));
const functionTypeOptions = [{
  value: functionTypes.history,
  label: "\u8DEF\u7531"
}, {
  value: functionTypes.href,
  label: "\u8D85\u94FE\u63A5"
}, {
  value: functionTypes.message,
  label: "\u63D0\u793A"
}, {
  value: functionTypes.form,
  label: "\u4E1A\u52A1\u8868\u5355"
}, {
  value: functionTypes.table,
  label: "\u9AD8\u7EA7\u8868\u683C"
}, {
  value: functionTypes.busItem,
  label: "\u4E1A\u52A1\u5B50\u8868"
}, {
  value: functionTypes.dialog,
  label: "\u5BF9\u8BDD\u6846"
}, {
  value: functionTypes.api,
  label: "\u63A5\u53E3"
}, {
  value: functionTypes.task,
  label: "\u4EFB\u52A1\u7F16\u6392"
}, {
  value: functionTypes.download,
  label: "\u4E0B\u8F7D"
}];
const methodOptions = [{
  label: "get",
  value: MethodType.GET
}, {
  label: "post",
  value: MethodType.POST
}, {
  label: "put",
  value: MethodType.PUT
}, {
  label: "del",
  value: MethodType.DELETE
}];
var functionHistoryTypes;
(function(functionHistoryTypes2) {
  functionHistoryTypes2["push"] = "push";
  functionHistoryTypes2["replace"] = "replace";
  functionHistoryTypes2["go"] = "go";
  functionHistoryTypes2["goBack"] = "goBack";
})(functionHistoryTypes || (functionHistoryTypes = {}));
const historyTypeOptions = [{
  value: "push",
  label: "\u8DF3\u8F6C\u9875\u9762"
}, {
  value: "replace",
  label: "\u66FF\u6362\u5F53\u524D\u9875\u9762"
}, {
  value: "go",
  label: "\u56DE\u9000"
}, {
  value: "goBack",
  label: "\u56DE\u5230\u4E0A\u4E00\u9875"
}];
var functionHrefTargets;
(function(functionHrefTargets2) {
  functionHrefTargets2["self"] = "_self";
  functionHrefTargets2["blank"] = "_blank";
  functionHrefTargets2["parent"] = "_parent";
  functionHrefTargets2["top"] = "_top";
})(functionHrefTargets || (functionHrefTargets = {}));
const functionHrefTargetOptions = [{
  value: functionHrefTargets.self,
  label: "\u5F53\u524D\u9875\u9762"
}, {
  value: functionHrefTargets.blank,
  label: "\u65B0\u7684\u7A97\u53E3"
}, {
  value: functionHrefTargets.parent,
  label: "\u7236\u7EA7\u6D4F\u89C8\u5668"
}, {
  value: functionHrefTargets.top,
  label: "\u6700\u9876\u7EA7\u6D4F\u89C8\u5668"
}];
const functionMessageTypeOptions = [{
  value: "success",
  label: "\u6210\u529F\u63D0\u793A"
}, {
  value: "error",
  label: "\u9519\u8BEF\u63D0\u793A"
}, {
  value: "warning",
  label: "\u8B66\u544A\u63D0\u793A"
}, {
  value: "tips",
  label: "\u4FE1\u606F\u63D0\u793A"
}];
const dialogTypeOptions = [{
  label: "\u6253\u5F00\u5F39\u7A97",
  value: "open"
}, {
  label: "\u5173\u95ED\u5F39\u7A97",
  value: "close"
}];
const createHistoryEvent = (o) => {
  return async () => {
    if (!o.history)
      return;
    if (!utils.history)
      return;
    const {
      type,
      path,
      count,
      params
    } = o.history;
    switch (type) {
      case functionHistoryTypes.goBack:
        utils.history.goBack();
        break;
      case functionHistoryTypes.go:
        utils.history.go(count);
        break;
      case functionHistoryTypes.push:
      case functionHistoryTypes.replace:
        let url = path;
        if (Array.isArray(params)) {
          const list = params.filter((o2) => o2.enable && o2.name).map((o2) => {
            return `${o2.name}=${o2.value}`;
          });
          if (list.length) {
            url = `${url}?${list.join("&")}`;
          }
        }
        if (functionHistoryTypes.push === type) {
          utils.history.push(url);
        } else {
          utils.history.replace(url);
        }
    }
  };
};
const createHrefEvent = (o) => {
  return async () => {
    if (!o.href)
      return;
    const {
      target,
      params
    } = o.href;
    let url = o.href.url;
    if (!url)
      return;
    if (Array.isArray(params)) {
      const list = params.filter((o2) => o2.enable && o2.name).map((o2) => {
        return `${o2.name}=${o2.value}`;
      });
      if (list.length) {
        url = `${url}?${list.join("&")}`;
      }
    }
    window.open(url, target);
  };
};
const createMessageEvent = (o) => {
  return async () => {
    if (!o.message)
      return;
    const {
      text,
      type
    } = o.message;
    window.$feedback(text, type);
  };
};
const createFormEvent = (o, store2) => {
  return async () => {
    const {
      key,
      eventType
    } = o.form || {};
    if (!store2.forms[key]) {
      throw Error(`\u5F53\u524D\u4E1A\u52A1\u8868\u5355\u4E0D\u5B58\u5728\uFF1A${key}`);
    }
    console.log("formStore", o.form, store2.forms[key]);
    const formStore = store2.forms[key];
    console.log("getValidationConfig", formStore.getValidationConfig());
    if (eventType === "validate") {
      if (!formStore.validate()) {
        Promise.reject("\u8868\u5355\u6821\u9A8C\u5931\u8D25");
      }
    } else if (eventType === "submit") {
      await formStore.validate();
    }
  };
};
const createBusItemEvent = (o, store2) => {
  return async () => {
    const {
      key,
      tableKey,
      eventType
    } = o.busItem || {};
    console.log("createBusItemEvent", o.busItem);
    if (!store2.forms[key]) {
      throw Error(`\u5F53\u524D\u4E1A\u52A1\u8868\u5355\u4E0D\u5B58\u5728\uFF1A${key}`);
    }
    if (!tableKey) {
      throw Error(`\u672A\u7ED1\u5B9A\u5B50\u8868`);
    }
    const formStore = store2.forms[key];
    switch (eventType) {
      case "add":
        if (!formStore.data[tableKey]) {
          formStore.assign({
            [tableKey]: [{}]
          });
        } else {
          formStore.assign({
            [tableKey]: [...formStore.data[tableKey], {}]
          });
        }
        break;
    }
  };
};
const createApiEvent = (o) => {
  return async () => {
    console.log("createApiEvent");
  };
};
function createDialogEvent(o, store2) {
  return async () => {
    if (!o.dialog)
      return;
    const {
      key,
      type
    } = o.dialog;
    if (store2.dialogs[key]) {
      const dialog = store2.dialogs[key];
      if (type === "open") {
        dialog.methods.open();
      }
    }
    console.log("createDialogEvent");
  };
}
const createDownloadEvent = (o) => {
  return async () => {
    console.log("createDownloadEvent");
  };
};
const createTaskEvent = (o) => {
  return async () => {
    console.log("createTaskEvent");
  };
};
const createEvent = (store2) => {
  const getFun = (config2) => {
    switch (config2.type) {
      case functionTypes.history:
        return createHistoryEvent(config2);
      case functionTypes.form:
        return createFormEvent(config2, store2);
      case functionTypes.busItem:
        return createBusItemEvent(config2, store2);
      case functionTypes.message:
        return createMessageEvent(config2);
      case functionTypes.api:
        return createApiEvent();
      case functionTypes.dialog:
        return createDialogEvent(config2, store2);
      case functionTypes.download:
        return createDownloadEvent();
      case functionTypes.href:
        return createHrefEvent(config2);
      case functionTypes.task:
        return createTaskEvent();
    }
    return () => {
      alert("createEvent");
    };
  };
  return (config2) => {
    return async () => {
      const {
        all: all2
      } = config2;
      const allEvent = (all2 || []).map((o) => getFun(o));
      const mainEvent = getFun(config2);
      await mainEvent();
      if (allEvent.length) {
        for (const fun of allEvent) {
          await fun();
        }
      }
    };
  };
};
const isWhere = (o) => {
  const logic = o.op;
  const fieldValue = o.value;
  const data2 = o.field;
  switch (logic) {
    case "=":
      return data2 == fieldValue;
    case "!=":
      return data2 != fieldValue;
    case ">":
      return data2 > fieldValue;
    case "<":
      return data2 < fieldValue;
    case ">=":
      return data2 >= fieldValue;
    case "<=":
      return data2 <= fieldValue;
    case "between":
      if (Array.isArray(fieldValue)) {
        const [value1, value2] = fieldValue;
        return data2 >= value1 && data2 <= value2;
      } else {
        return false;
      }
    case "in":
      if (Array.isArray(fieldValue)) {
        return fieldValue.includes(data2);
      } else {
        return false;
      }
    case "link":
      if (typeof fieldValue === "string") {
        const link = new RegExp(`^${fieldValue.replace(/\%/g, ".*")}$`);
        return data2.search(link) !== -1;
      } else {
        return false;
      }
    case "notIn":
      if (Array.isArray(fieldValue)) {
        return !fieldValue.includes(data2);
      } else {
        return false;
      }
    case "regexp":
      const regexp = new RegExp(fieldValue);
      return regexp.test(data2);
  }
  return false;
};
const createValidate = (store2) => {
  return (list) => {
    return list.some((rules) => rules.every((o) => isWhere(o)));
  };
};
var _class, _descriptor;
function _initializerDefineProperty$1(target, property, descriptor, context) {
  if (!descriptor)
    return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}
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
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function(key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function(desc2, decorator) {
    return decorator(target, property, desc2) || desc2;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = void 0;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}
const action = window["mobx"].action;
const observable = window["mobx"].observable;
function getParamsKey(params = {}) {
  return Object.keys(params).map((key) => {
    if (!params[key])
      params[key] = "";
    return `${key}=${params[key] || ""}`;
  }).join("&");
}
let Lookup = (_class = class Lookup2 {
  constructor() {
    _initializerDefineProperty$1(this, "lookups", _descriptor, this);
    _defineProperty(this, "items", {});
    _defineProperty(this, "key", action((code, parameters) => {
      const key = `code=${code}&${getParamsKey(parameters)}`;
      if (!this.items[key]) {
        this.items[key] = observable.array([]);
        ajax.post("/custom/common/dataStorage/getDataStorageDetails", {
          code,
          parameters
        }).then(action((data2) => {
          this.items[key].replace(data2);
        }));
      }
      return this.items[key];
    }));
    _defineProperty(this, "key2", action((code, parameters) => {
      const key = `code=${code}&${getParamsKey(parameters)}`;
      this.items[key] = observable.array([]);
      return ajax.post("/custom/common/dataStorage/getDataStorageDetails", {
        code,
        parameters
      });
    }));
    _defineProperty(this, "all", () => {
      if (!this.lookups) {
        this.lookups = observable([]);
        ajax.get("/custom/common/dataStorage/getDataStorageConfig").then(action((data2) => this.lookups = data2));
      }
      return this.lookups;
    });
    _defineProperty(this, "getParameters", (value) => {
      var _a;
      const item = (_a = this.lookups) == null ? void 0 : _a.find((item2) => item2.value === value);
      return item == null ? void 0 : item.parameters;
    });
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "lookups", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return null;
  }
}), _class);
var lookup = new Lookup();
const featchData = () => {
  const lookup2 = new Lookup();
  return (config2) => {
    const {
      type,
      code,
      params
    } = config2;
    if (type === "lookup") {
      if (code) {
        return lookup2.key(code, params);
      }
    }
  };
};
function isFunction(val) {
  return typeof val === "function";
}
function isPromise(val) {
  return typeof val === "object" && isFunction(val.then) && isFunction(val.catch) && isFunction(val.finally);
}
var utils = Object.assign({}, {
  lookup,
  featchData,
  isPromise,
  history: {
    goBack: () => null,
    go: () => null,
    push: () => null,
    replace: () => null
  },
  createEvent,
  createValidate,
  getUuid: (type) => {
    function S4() {
      return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
    if (type === "hash")
      return `${S4()}${S4()}`;
    return S4() + "-" + S4() + "-" + S4() + "-" + S4();
  },
  loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
  },
  loadScript,
  convertToTree,
  getSpecificValues
});
const React = window["React"];
const forwardRef = window["React"].forwardRef;
const useContext = window["React"].useContext;
const useState = window["React"].useState;
const observer = window["mobxReact"].observer;
const mobx = window["mobx"];
const dayjs = window["dayjs"];
const _ = window["_"];
const i18next = window["i18next"];
function getAllQueryParam(keys, defaultValue = {}) {
  const url = location.href;
  if (!url || url.indexOf("?") === -1)
    return defaultValue;
  const path = url.substring(url.indexOf("?") + 1);
  const array = path.split(/[&=]/);
  const result = __spreadValues({}, defaultValue);
  for (let i = 0; i < array.length; i += 2) {
    if (keys.includes(array[i])) {
      result[array[i]] = decodeURIComponent(array[i + 1]);
    }
  }
  return result;
}
function withRefAndContext(contexts2) {
  return (WComponent, Store3) => {
    const MyComponent = observer(WComponent);
    return forwardRef((props, ref) => {
      const contextValues = {};
      if (contexts2 && contexts2.length) {
        for (const item of contexts2) {
          contextValues[item.key] = useContext(state.contexts[item.context]);
        }
      }
      const [store2] = useState(() => new Store3(props, contextValues));
      Object.assign(store2, contextValues);
      return /* @__PURE__ */ jsx(MyComponent, __spreadProps(__spreadValues(__spreadValues({}, props), contextValues), {
        forwardRef: ref,
        store: store2
      }));
    });
  };
}
function withContext(contexts2) {
  return (WComponent, Store3) => {
    const MyComponent = observer(WComponent);
    return (props) => {
      const contextValues = {};
      if (contexts2 && contexts2.length) {
        for (const item of contexts2) {
          contextValues[item.key] = useContext(state.contexts[item.context]);
        }
      }
      const [store2] = useState(() => new Store3(props, contextValues));
      Object.assign(store2, contextValues);
      return /* @__PURE__ */ jsx(MyComponent, __spreadProps(__spreadValues(__spreadValues({}, props), contextValues), {
        store: store2
      }));
    };
  };
}
function withRef(WComponent, Store3) {
  const MyComponent = observer(WComponent);
  return forwardRef((props, ref) => {
    const [store2] = useState(() => new Store3(__spreadValues({}, props)));
    return /* @__PURE__ */ jsx(MyComponent, __spreadProps(__spreadValues({}, props), {
      forwardRef: ref,
      store: store2
    }));
  });
}
function withFun(WComponent, Store3) {
  const MyComponent = observer(WComponent);
  return (props) => {
    const [store2] = useState(() => new Store3(__spreadValues({}, props)));
    return /* @__PURE__ */ jsx(MyComponent, __spreadProps(__spreadValues({}, props), {
      store: store2
    }));
  };
}
function withPage(WComponent, Store3) {
  const MyComponent = observer(WComponent);
  return (props) => {
    const [pageId, setPageId] = useState();
    const [[store2, reload]] = useState(() => [new Store3(__spreadValues({}, props)), () => setPageId(Date.now())]);
    return /* @__PURE__ */ jsx(PageContext.Provider, {
      value: {
        store: store2,
        reload
      },
      children: /* @__PURE__ */ jsx(MyComponent, __spreadProps(__spreadValues({}, props), {
        "page-id": pageId,
        store: store2
      }))
    });
  };
}
const _initializerDefineProperty = (target, property, value) => {
  const res = mobx.observable.box(value);
  Object.defineProperty(target, property, {
    configurable: true,
    enumerable: true,
    get: () => {
      const value2 = res.get();
      return mobx.isObservableArray(value2) ? mobx.toJS(value2) : value2;
    },
    set: (val) => {
      res.set(val);
      return val;
    }
  });
};
const state = {
  mModules: __spreadValues({}, renderNode),
  contexts: __spreadValues({}, contexts)
};
const m = (uid) => {
  return state.mModules[uid] || (() => /* @__PURE__ */ jsx("span", {
    children: uid
  }));
};
const config = {
  withPage,
  withFun,
  withContext,
  withRef,
  withRefAndContext,
  _initializerDefineProperty,
  getAllQueryParam,
  mobx,
  utils,
  i18next,
  dayjs,
  React,
  h: React.createElement,
  m,
  _,
  state
};
const dynamicCreateModule = (jsxStr) => {
  const fun = new Function("global", jsxStr);
  return fun(ReactGtssForm.config || config);
};
export { functionTypes as A, dialogTypeOptions as B, methodOptions as C, functionMessageTypeOptions as D, functionHrefTargetOptions as E, historyTypeOptions as F, functionHistoryTypes as G, functionTypeOptions as H, isTranslation as I, moduleSource as J, arcoModuleList as K, moduleTypes as L, paramListToJSONSchema as M, moduleDisplay as N, dynamicCreateModule as O, convertToCamelCase as P, isBuilder as Q, isBuilderFun as R, PageContext as S, asyncAwaitFunction as T, addCSS as U, filterTreeData as V, searchTreeNode as W, getQueryParam as X, alphabeticKeys as Y, app as a, ajax as b, useStorage as c, config as d, convertToTree as e, state as f, getSpecificValues as g, utils as h, isArray$1 as i, schemaToTableColumn as j, schemaToJSON as k, loadScript as l, isPromise$1 as m, schemaToDescriptionsData as n, modulePlatform as o, delayedFunction as p, getUuid as q, getFieldSchema as r, store as s, tableSchemaToSearchSchema as t, userStore as u, schemaToList as v, jsonToSchema as w, config$1 as x, changeTheme as y, copyText as z };
