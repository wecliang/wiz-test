var __defProp = Object.defineProperty;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { a as app, u as userStore, s as store, b as ajax, i as isArray, c as useStorage, d as config } from "./hoc.db8d1922.js";
import { j as jsx, a as jsxs, _ as __vitePreload, s as styles$2, l as lazyload, F as Fragment } from "./index.2da18b09.js";
import { c as commonjsGlobal } from "./vendor.96977194.js";
var global = "";
const createContext = window["React"].createContext;
const GlobalContext = createContext({});
var queryString = {};
var strictUriEncode = (str) => encodeURIComponent(str).replace(/[!'()*]/g, (x) => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);
var token = "%[a-f0-9]{2}";
var singleMatcher = new RegExp("(" + token + ")|([^%]+?)", "gi");
var multiMatcher = new RegExp("(" + token + ")+", "gi");
function decodeComponents(components, split) {
  try {
    return [decodeURIComponent(components.join(""))];
  } catch (err) {
  }
  if (components.length === 1) {
    return components;
  }
  split = split || 1;
  var left = components.slice(0, split);
  var right = components.slice(split);
  return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
  try {
    return decodeURIComponent(input);
  } catch (err) {
    var tokens = input.match(singleMatcher) || [];
    for (var i = 1; i < tokens.length; i++) {
      input = decodeComponents(tokens, i).join("");
      tokens = input.match(singleMatcher) || [];
    }
    return input;
  }
}
function customDecodeURIComponent(input) {
  var replaceMap = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  };
  var match = multiMatcher.exec(input);
  while (match) {
    try {
      replaceMap[match[0]] = decodeURIComponent(match[0]);
    } catch (err) {
      var result = decode(match[0]);
      if (result !== match[0]) {
        replaceMap[match[0]] = result;
      }
    }
    match = multiMatcher.exec(input);
  }
  replaceMap["%C2"] = "\uFFFD";
  var entries = Object.keys(replaceMap);
  for (var i = 0; i < entries.length; i++) {
    var key = entries[i];
    input = input.replace(new RegExp(key, "g"), replaceMap[key]);
  }
  return input;
}
var decodeUriComponent = function(encodedURI) {
  if (typeof encodedURI !== "string") {
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof encodedURI + "`");
  }
  try {
    encodedURI = encodedURI.replace(/\+/g, " ");
    return decodeURIComponent(encodedURI);
  } catch (err) {
    return customDecodeURIComponent(encodedURI);
  }
};
var splitOnFirst = (string, separator) => {
  if (!(typeof string === "string" && typeof separator === "string")) {
    throw new TypeError("Expected the arguments to be of type `string`");
  }
  if (separator === "") {
    return [string];
  }
  const separatorIndex = string.indexOf(separator);
  if (separatorIndex === -1) {
    return [string];
  }
  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
};
(function(exports) {
  const strictUriEncode$1 = strictUriEncode;
  const decodeComponent = decodeUriComponent;
  const splitOnFirst$1 = splitOnFirst;
  const isNullOrUndefined = (value) => value === null || value === void 0;
  function encoderForArrayFormat(options) {
    switch (options.arrayFormat) {
      case "index":
        return (key) => (result, value) => {
          const index2 = result.length;
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), "[", index2, "]"].join("")];
          }
          return [...result, [encode(key, options), "[", encode(index2, options), "]=", encode(value, options)].join("")];
        };
      case "bracket":
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, [encode(key, options), "[]"].join("")];
          }
          return [...result, [encode(key, options), "[]=", encode(value, options)].join("")];
        };
      case "comma":
      case "separator":
        return (key) => (result, value) => {
          if (value === null || value === void 0 || value.length === 0) {
            return result;
          }
          if (result.length === 0) {
            return [[encode(key, options), "=", encode(value, options)].join("")];
          }
          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      default:
        return (key) => (result, value) => {
          if (value === void 0 || options.skipNull && value === null || options.skipEmptyString && value === "") {
            return result;
          }
          if (value === null) {
            return [...result, encode(key, options)];
          }
          return [...result, [encode(key, options), "=", encode(value, options)].join("")];
        };
    }
  }
  function parserForArrayFormat(options) {
    let result;
    switch (options.arrayFormat) {
      case "index":
        return (key, value, accumulator) => {
          result = /\[(\d*)\]$/.exec(key);
          key = key.replace(/\[\d*\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = {};
          }
          accumulator[key][result[1]] = value;
        };
      case "bracket":
        return (key, value, accumulator) => {
          result = /(\[\])$/.exec(key);
          key = key.replace(/\[\]$/, "");
          if (!result) {
            accumulator[key] = value;
            return;
          }
          if (accumulator[key] === void 0) {
            accumulator[key] = [value];
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
      case "comma":
      case "separator":
        return (key, value, accumulator) => {
          const isArray2 = typeof value === "string" && value.includes(options.arrayFormatSeparator);
          const isEncodedArray = typeof value === "string" && !isArray2 && decode2(value, options).includes(options.arrayFormatSeparator);
          value = isEncodedArray ? decode2(value, options) : value;
          const newValue = isArray2 || isEncodedArray ? value.split(options.arrayFormatSeparator).map((item) => decode2(item, options)) : value === null ? value : decode2(value, options);
          accumulator[key] = newValue;
        };
      default:
        return (key, value, accumulator) => {
          if (accumulator[key] === void 0) {
            accumulator[key] = value;
            return;
          }
          accumulator[key] = [].concat(accumulator[key], value);
        };
    }
  }
  function validateArrayFormatSeparator(value) {
    if (typeof value !== "string" || value.length !== 1) {
      throw new TypeError("arrayFormatSeparator must be single character string");
    }
  }
  function encode(value, options) {
    if (options.encode) {
      return options.strict ? strictUriEncode$1(value) : encodeURIComponent(value);
    }
    return value;
  }
  function decode2(value, options) {
    if (options.decode) {
      return decodeComponent(value);
    }
    return value;
  }
  function keysSorter(input) {
    if (Array.isArray(input)) {
      return input.sort();
    }
    if (typeof input === "object") {
      return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map((key) => input[key]);
    }
    return input;
  }
  function removeHash(input) {
    const hashStart = input.indexOf("#");
    if (hashStart !== -1) {
      input = input.slice(0, hashStart);
    }
    return input;
  }
  function getHash(url) {
    let hash = "";
    const hashStart = url.indexOf("#");
    if (hashStart !== -1) {
      hash = url.slice(hashStart);
    }
    return hash;
  }
  function extract(input) {
    input = removeHash(input);
    const queryStart = input.indexOf("?");
    if (queryStart === -1) {
      return "";
    }
    return input.slice(queryStart + 1);
  }
  function parseValue(value, options) {
    if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === "string" && value.trim() !== "") {
      value = Number(value);
    } else if (options.parseBooleans && value !== null && (value.toLowerCase() === "true" || value.toLowerCase() === "false")) {
      value = value.toLowerCase() === "true";
    }
    return value;
  }
  function parse(query, options) {
    options = Object.assign({
      decode: true,
      sort: true,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: false,
      parseBooleans: false
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const formatter = parserForArrayFormat(options);
    const ret = Object.create(null);
    if (typeof query !== "string") {
      return ret;
    }
    query = query.trim().replace(/^[?#&]/, "");
    if (!query) {
      return ret;
    }
    for (const param of query.split("&")) {
      let [key, value] = splitOnFirst$1(options.decode ? param.replace(/\+/g, " ") : param, "=");
      value = value === void 0 ? null : ["comma", "separator"].includes(options.arrayFormat) ? value : decode2(value, options);
      formatter(decode2(key, options), value, ret);
    }
    for (const key of Object.keys(ret)) {
      const value = ret[key];
      if (typeof value === "object" && value !== null) {
        for (const k of Object.keys(value)) {
          value[k] = parseValue(value[k], options);
        }
      } else {
        ret[key] = parseValue(value, options);
      }
    }
    if (options.sort === false) {
      return ret;
    }
    return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
      const value = ret[key];
      if (Boolean(value) && typeof value === "object" && !Array.isArray(value)) {
        result[key] = keysSorter(value);
      } else {
        result[key] = value;
      }
      return result;
    }, Object.create(null));
  }
  exports.extract = extract;
  exports.parse = parse;
  exports.stringify = (object, options) => {
    if (!object) {
      return "";
    }
    options = Object.assign({
      encode: true,
      strict: true,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, options);
    validateArrayFormatSeparator(options.arrayFormatSeparator);
    const shouldFilter = (key) => options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === "";
    const formatter = encoderForArrayFormat(options);
    const objectCopy = {};
    for (const key of Object.keys(object)) {
      if (!shouldFilter(key)) {
        objectCopy[key] = object[key];
      }
    }
    const keys = Object.keys(objectCopy);
    if (options.sort !== false) {
      keys.sort(options.sort);
    }
    return keys.map((key) => {
      const value = object[key];
      if (value === void 0) {
        return "";
      }
      if (value === null) {
        return encode(key, options);
      }
      if (Array.isArray(value)) {
        return value.reduce(formatter(key), []).join("&");
      }
      return encode(key, options) + "=" + encode(value, options);
    }).filter((x) => x.length > 0).join("&");
  };
  exports.parseUrl = (url, options) => {
    options = Object.assign({
      decode: true
    }, options);
    const [url_, hash] = splitOnFirst$1(url, "#");
    return Object.assign({
      url: url_.split("?")[0] || "",
      query: parse(extract(url), options)
    }, options && options.parseFragmentIdentifier && hash ? {
      fragmentIdentifier: decode2(hash, options)
    } : {});
  };
  exports.stringifyUrl = (object, options) => {
    options = Object.assign({
      encode: true,
      strict: true
    }, options);
    const url = removeHash(object.url).split("?")[0] || "";
    const queryFromUrl = exports.extract(object.url);
    const parsedQueryFromUrl = exports.parse(queryFromUrl, {
      sort: false
    });
    const query = Object.assign(parsedQueryFromUrl, object.query);
    let queryString2 = exports.stringify(query, options);
    if (queryString2) {
      queryString2 = `?${queryString2}`;
    }
    let hash = getHash(object.url);
    if (object.fragmentIdentifier) {
      hash = `#${encode(object.fragmentIdentifier, options)}`;
    }
    return `${url}${queryString2}${hash}`;
  };
})(queryString);
var nprogress = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress2 = {};
    NProgress2.version = "0.2.0";
    var Settings = NProgress2.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress2.configure = function(options) {
      var key, value;
      for (key in options) {
        value = options[key];
        if (value !== void 0 && options.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress2.status = null;
    NProgress2.set = function(n) {
      var started = NProgress2.isStarted();
      n = clamp(n, Settings.minimum, 1);
      NProgress2.status = n === 1 ? null : n;
      var progress = NProgress2.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress2.getPositioningCSS();
        css(bar, barPositionCSS(n, speed, ease));
        if (n === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress2.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress2.isStarted = function() {
      return typeof NProgress2.status === "number";
    };
    NProgress2.start = function() {
      if (!NProgress2.status)
        NProgress2.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress2.status)
            return;
          NProgress2.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress2.done = function(force) {
      if (!force && !NProgress2.status)
        return this;
      return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress2.inc = function(amount) {
      var n = NProgress2.status;
      if (!n) {
        return NProgress2.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
        }
        n = clamp(n + amount, 0, 0.994);
        return NProgress2.set(n);
      }
    };
    NProgress2.trickle = function() {
      return NProgress2.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress2.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress2.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress2.done();
          } else {
            NProgress2.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress2.render = function(fromStart) {
      if (NProgress2.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress2.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress2.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress2.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n, min, max) {
      if (n < min)
        return min;
      if (n > max)
        return max;
      return n;
    }
    function toBarPerc(n) {
      return (-1 + n) * 100;
    }
    function barPositionCSS(n, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = {
          transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
        };
      } else if (Settings.positionUsing === "translate") {
        barCSS = {
          transform: "translate(" + toBarPerc(n) + "%,0)"
        };
      } else {
        barCSS = {
          "margin-left": toBarPerc(n) + "%"
        };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style = document.body.style;
        if (name in style)
          return name;
        var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress2;
  });
})(nprogress);
var NProgress = nprogress.exports;
const useEffect$1 = window["React"].useEffect;
const useMemo$1 = window["React"].useMemo;
const useState$2 = window["React"].useState;
const routes = [{
  name: "menu.system.page",
  key: "system/pages",
  children: [{
    name: "menu.system.page",
    key: "system/pages/index",
    path: "system/pages",
    ignore: true
  }, {
    ignore: true,
    name: "\u9875\u9762\u7F16\u8F91",
    key: "system/pages/save"
  }]
}, {
  name: "\u6A21\u5757\u7BA1\u7406",
  key: "system/module"
}, {
  name: "\u7248\u672C\u7BA1\u7406",
  key: "system/version"
}];
const useRoute = (userPermission) => {
  const [permissionRoute, setPermissionRoute] = useState$2([]);
  useEffect$1(() => {
    let newRoutes = [...routes];
    newRoutes.splice.apply(newRoutes);
    setPermissionRoute(newRoutes);
  }, [JSON.stringify(userPermission)]);
  const defaultRoute = useMemo$1(() => {
    var _a, _b;
    const first = permissionRoute[0];
    if (first) {
      if (first.type === "menu") {
        return first.key;
      }
      const firstRoute = ((_b = (_a = first == null ? void 0 : first.children) == null ? void 0 : _a[0]) == null ? void 0 : _b.key) || first.key;
      return firstRoute || "";
    }
    return "";
  }, [permissionRoute]);
  return [permissionRoute, defaultRoute];
};
var zhCn = { exports: {} };
(function(module, exports) {
  !function(e, _) {
    module.exports = _(window["dayjs"]);
  }(commonjsGlobal, function(e) {
    function _(e2) {
      return e2 && typeof e2 == "object" && "default" in e2 ? e2 : {
        default: e2
      };
    }
    var t = _(e), d = {
      name: "zh-cn",
      weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
      weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),
      weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
      months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
      monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
      ordinal: function(e2, _2) {
        return _2 === "W" ? e2 + "\u5468" : e2 + "\u65E5";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY\u5E74M\u6708D\u65E5",
        LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
        LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
        l: "YYYY/M/D",
        ll: "YYYY\u5E74M\u6708D\u65E5",
        lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
        llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
      },
      relativeTime: {
        future: "%s\u5185",
        past: "%s\u524D",
        s: "\u51E0\u79D2",
        m: "1 \u5206\u949F",
        mm: "%d \u5206\u949F",
        h: "1 \u5C0F\u65F6",
        hh: "%d \u5C0F\u65F6",
        d: "1 \u5929",
        dd: "%d \u5929",
        M: "1 \u4E2A\u6708",
        MM: "%d \u4E2A\u6708",
        y: "1 \u5E74",
        yy: "%d \u5E74"
      },
      meridiem: function(e2, _2) {
        var t2 = 100 * e2 + _2;
        return t2 < 600 ? "\u51CC\u6668" : t2 < 900 ? "\u65E9\u4E0A" : t2 < 1100 ? "\u4E0A\u5348" : t2 < 1300 ? "\u4E2D\u5348" : t2 < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
      }
    };
    return t.default.locale(d, null, true), d;
  });
})(zhCn);
var Calendar = {
  formatYear: "YYYY \u5E74",
  formatMonth: "YYYY \u5E74 MM \u6708",
  today: "\u4ECA\u5929",
  view: {
    month: "\u6708",
    year: "\u5E74",
    week: "\u5468",
    day: "\u65E5"
  },
  month: {
    long: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    },
    short: {
      January: "\u4E00\u6708",
      February: "\u4E8C\u6708",
      March: "\u4E09\u6708",
      April: "\u56DB\u6708",
      May: "\u4E94\u6708",
      June: "\u516D\u6708",
      July: "\u4E03\u6708",
      August: "\u516B\u6708",
      September: "\u4E5D\u6708",
      October: "\u5341\u6708",
      November: "\u5341\u4E00\u6708",
      December: "\u5341\u4E8C\u6708"
    }
  },
  week: {
    long: {
      self: "\u5468",
      monday: "\u5468\u4E00",
      tuesday: "\u5468\u4E8C",
      wednesday: "\u5468\u4E09",
      thursday: "\u5468\u56DB",
      friday: "\u5468\u4E94",
      saturday: "\u5468\u516D",
      sunday: "\u5468\u65E5"
    },
    short: {
      self: "\u5468",
      monday: "\u4E00",
      tuesday: "\u4E8C",
      wednesday: "\u4E09",
      thursday: "\u56DB",
      friday: "\u4E94",
      saturday: "\u516D",
      sunday: "\u65E5"
    }
  }
};
var zhCN = {
  locale: "zh-CN",
  dayjsLocale: "zh-cn",
  Calendar,
  DatePicker: {
    Calendar,
    placeholder: {
      date: "\u8BF7\u9009\u62E9\u65E5\u671F",
      week: "\u8BF7\u9009\u62E9\u5468",
      month: "\u8BF7\u9009\u62E9\u6708\u4EFD",
      year: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
      quarter: "\u8BF7\u9009\u62E9\u5B63\u5EA6"
    },
    placeholders: {
      date: ["\u5F00\u59CB\u65E5\u671F", "\u7ED3\u675F\u65E5\u671F"],
      week: ["\u5F00\u59CB\u5468", "\u7ED3\u675F\u5468"],
      month: ["\u5F00\u59CB\u6708\u4EFD", "\u7ED3\u675F\u6708\u4EFD"],
      year: ["\u5F00\u59CB\u5E74\u4EFD", "\u7ED3\u675F\u5E74\u4EFD"],
      quarter: ["\u5F00\u59CB\u5B63\u5EA6", "\u7ED3\u675F\u5B63\u5EA6"]
    },
    selectTime: "\u9009\u62E9\u65F6\u95F4",
    selectDate: "\u9009\u62E9\u65E5\u671F",
    today: "\u4ECA\u5929",
    now: "\u6B64\u523B",
    ok: "\u786E\u5B9A"
  },
  Drawer: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  Empty: {
    noData: "\u6682\u65E0\u6570\u636E"
  },
  Modal: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  Pagination: {
    goto: "\u524D\u5F80",
    page: "\u9875",
    countPerPage: "\u6761/\u9875",
    total: "\u5171 {0} \u6761",
    prev: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875",
    currentPage: "\u7B2C {0} \u9875",
    prevSomePages: "\u5411\u524D {0} \u9875",
    nextSomePages: "\u5411\u540E {0} \u9875",
    pageSize: "\u9875\u7801"
  },
  Popconfirm: {
    okText: "\u786E\u5B9A",
    cancelText: "\u53D6\u6D88"
  },
  Table: {
    okText: "\u786E\u5B9A",
    resetText: "\u91CD\u7F6E",
    sortAscend: "\u70B9\u51FB\u5347\u5E8F",
    sortDescend: "\u70B9\u51FB\u964D\u5E8F",
    cancelSort: "\u53D6\u6D88\u6392\u5E8F"
  },
  TimePicker: {
    ok: "\u786E\u5B9A",
    placeholder: "\u8BF7\u9009\u62E9\u65F6\u95F4",
    placeholders: ["\u5F00\u59CB\u65F6\u95F4", "\u7ED3\u675F\u65F6\u95F4"],
    now: "\u6B64\u523B"
  },
  Progress: {
    success: "\u5B8C\u6210",
    error: "\u5931\u8D25"
  },
  Upload: {
    start: "\u5F00\u59CB",
    cancel: "\u53D6\u6D88",
    delete: "\u5220\u9664",
    reupload: "\u70B9\u51FB\u91CD\u8BD5",
    upload: "\u70B9\u51FB\u4E0A\u4F20",
    preview: "\u9884\u89C8",
    drag: "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u4E0A\u4F20",
    dragHover: "\u91CA\u653E\u6587\u4EF6\u5E76\u5F00\u59CB\u4E0A\u4F20",
    error: "\u4E0A\u4F20\u5931\u8D25"
  },
  Typography: {
    copy: "\u590D\u5236",
    copied: "\u5DF2\u590D\u5236",
    edit: "\u7F16\u8F91",
    fold: "\u6298\u53E0",
    unfold: "\u5C55\u5F00"
  },
  Transfer: {
    resetText: "\u91CD\u7F6E"
  },
  ImagePreview: {
    fullScreen: "\u5168\u5C4F",
    rotateRight: "\u5411\u53F3\u65CB\u8F6C",
    rotateLeft: "\u5411\u5DE6\u65CB\u8F6C",
    zoomIn: "\u653E\u5927",
    zoomOut: "\u7F29\u5C0F",
    originalSize: "\u539F\u59CB\u5C3A\u5BF8"
  },
  Form: {
    validateMessages: {
      required: "#{field} \u662F\u5FC5\u586B\u9879",
      type: {
        string: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u6587\u672C\u7C7B\u578B",
        number: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u6570\u5B57\u7C7B\u578B",
        boolean: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u5E03\u5C14\u7C7B\u578B",
        array: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u6570\u7EC4\u7C7B\u578B",
        object: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u5BF9\u8C61\u7C7B\u578B",
        url: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684 url \u5730\u5740",
        email: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684\u90AE\u7BB1\u5730\u5740",
        ip: "#{field} \u4E0D\u662F\u5408\u6CD5\u7684 IP \u5730\u5740"
      },
      number: {
        min: "`#{value}` \u5C0F\u4E8E\u6700\u5C0F\u503C `#{min}`",
        max: "`#{value}` \u5927\u4E8E\u6700\u5927\u503C `#{max}`",
        equal: "`#{value}` \u4E0D\u7B49\u4E8E `#{equal}`",
        range: "`#{value}` \u4E0D\u5728 `#{min} ~ #{max}` \u8303\u56F4\u5185",
        positive: "`#{value}` \u4E0D\u662F\u6B63\u6570",
        negative: "`#{value}` \u4E0D\u662F\u8D1F\u6570"
      },
      array: {
        length: "`#{field}` \u4E2A\u6570\u4E0D\u7B49\u4E8E #{length}",
        minLength: "`#{field}` \u4E2A\u6570\u6700\u5C11\u4E3A #{minLength}",
        maxLength: "`#{field}` \u4E2A\u6570\u6700\u591A\u4E3A #{maxLength}",
        includes: "#{field} \u4E0D\u5305\u542B #{includes}",
        deepEqual: "#{field} \u4E0D\u7B49\u4E8E #{deepEqual}",
        empty: "`#{field}` \u4E0D\u662F\u7A7A\u6570\u7EC4"
      },
      string: {
        minLength: "\u5B57\u7B26\u6570\u6700\u5C11\u4E3A #{minLength}",
        maxLength: "\u5B57\u7B26\u6570\u6700\u591A\u4E3A #{maxLength}",
        length: "\u5B57\u7B26\u6570\u5FC5\u987B\u662F #{length}",
        match: "`#{value}` \u4E0D\u7B26\u5408\u6A21\u5F0F #{pattern}",
        uppercase: "`#{value}` \u5FC5\u987B\u5168\u5927\u5199",
        lowercase: "`#{value}` \u5FC5\u987B\u5168\u5C0F\u5199"
      },
      object: {
        deepEqual: "`#{field}` \u4E0D\u7B49\u4E8E\u671F\u671B\u503C",
        hasKeys: "`#{field}` \u4E0D\u5305\u542B\u5FC5\u987B\u5B57\u6BB5",
        empty: "`#{field}` \u4E0D\u662F\u5BF9\u8C61"
      },
      boolean: {
        true: "\u671F\u671B\u662F `true`",
        false: "\u671F\u671B\u662F `false`"
      }
    }
  }
};
const i18n = {
  "en-US": {
    "menu.dashboard": "Dashboard",
    "menu.dashboard.workplace": "Workplace",
    "menu.user.info": "User Info",
    "menu.user.setting": "User Setting",
    "menu.user.switchRoles": "Switch Roles",
    "menu.user.role.admin": "Admin",
    "menu.user.role.user": "General User",
    "navbar.logout": "Logout",
    "settings.title": "Settings",
    "settings.themeColor": "Theme Color",
    "settings.content": "Content Setting",
    "settings.navbar": "Navbar",
    "settings.menuWidth": "Menu Width (px)",
    "settings.navbar.theme.toLight": "Click to use light mode",
    "settings.navbar.theme.toDark": "Click to use dark mode",
    "settings.menu": "Menu",
    "settings.footer": "Footer",
    "settings.otherSettings": "Other Settings",
    "settings.colorWeek": "Color Week",
    "settings.alertContent": 'After the configuration is only temporarily effective, if you want to really affect the project, click the "Copy Settings" button below and replace the configuration in settings.json.',
    "settings.copySettings": "Copy Settings",
    "settings.copySettings.message": "Copy succeeded, please paste to file src/settings.json.",
    "settings.close": "Close",
    "settings.color.tooltip": "10 gradient colors generated according to the theme color",
    "message.tab.title.message": "Message",
    "message.tab.title.notice": "Notice",
    "message.tab.title.todo": "ToDo",
    "message.allRead": "All Read",
    "message.seeMore": "SeeMore",
    "message.empty": "Empty",
    "message.empty.tips": "No Content",
    "message.lang.tips": "Language switch to ",
    "navbar.search.placeholder": "Please search"
  },
  "zh-CN": {
    "menu.dashboard": "\u4EEA\u8868\u76D8",
    "menu.dashboard.workplace": "\u5DE5\u4F5C\u53F0",
    "menu.user.info": "\u7528\u6237\u4FE1\u606F",
    "menu.user.setting": "\u7528\u6237\u8BBE\u7F6E",
    "menu.user.switchRoles": "\u5207\u6362\u89D2\u8272",
    "menu.user.role.admin": "\u7BA1\u7406\u5458",
    "menu.user.role.user": "\u666E\u901A\u7528\u6237",
    "menu.system": "\u7CFB\u7EDF\u7BA1\u7406",
    "menu.system.dictionary": "\u6570\u5B57\u5B57\u5178",
    "menu.system.module": "\u6A21\u5757\u7BA1\u7406",
    "menu.system.menu": "\u8DEF\u7531\u83DC\u5355",
    "menu.system.page": "\u9875\u9762\u7BA1\u7406",
    "menu.system.api": "\u63A5\u53E3\u7BA1\u7406",
    "menu.system.flow": "\u6D41\u7A0B\u7BA1\u7406",
    "navbar.logout": "\u9000\u51FA\u767B\u5F55",
    "settings.title": "\u9875\u9762\u914D\u7F6E",
    "settings.themeColor": "\u4E3B\u9898\u8272",
    "settings.content": "\u5185\u5BB9\u533A\u57DF",
    "settings.navbar": "\u5BFC\u822A\u680F",
    "settings.menuWidth": "\u83DC\u5355\u5BBD\u5EA6 (px)",
    "settings.navbar.theme.toLight": "\u70B9\u51FB\u5207\u6362\u4E3A\u4EAE\u8272\u6A21\u5F0F",
    "settings.navbar.theme.toDark": "\u70B9\u51FB\u5207\u6362\u4E3A\u6697\u9ED1\u6A21\u5F0F",
    "settings.menu": "\u83DC\u5355\u680F",
    "settings.footer": "\u5E95\u90E8",
    "settings.otherSettings": "\u5176\u4ED6\u8BBE\u7F6E",
    "settings.colorWeek": "\u8272\u5F31\u6A21\u5F0F",
    "settings.alertContent": '\u914D\u7F6E\u4E4B\u540E\u4EC5\u662F\u4E34\u65F6\u751F\u6548\uFF0C\u8981\u60F3\u771F\u6B63\u4F5C\u7528\u4E8E\u9879\u76EE\uFF0C\u70B9\u51FB\u4E0B\u65B9\u7684 "\u590D\u5236\u914D\u7F6E" \u6309\u94AE\uFF0C\u5C06\u914D\u7F6E\u66FF\u6362\u5230 settings.json \u4E2D\u5373\u53EF\u3002',
    "settings.copySettings": "\u590D\u5236\u914D\u7F6E",
    "settings.copySettings.message": "\u590D\u5236\u6210\u529F\uFF0C\u8BF7\u7C98\u8D34\u5230 src/settings.json \u6587\u4EF6\u4E2D",
    "settings.close": "\u5173\u95ED",
    "settings.color.tooltip": "\u6839\u636E\u4E3B\u9898\u989C\u8272\u751F\u6210\u7684 10 \u4E2A\u68AF\u5EA6\u8272\uFF08\u5C06\u914D\u7F6E\u590D\u5236\u5230\u9879\u76EE\u4E2D\uFF0C\u4E3B\u9898\u8272\u624D\u80FD\u5BF9\u4EAE\u8272 / \u6697\u9ED1\u6A21\u5F0F\u540C\u65F6\u751F\u6548\uFF09",
    "message.tab.title.message": "\u6D88\u606F",
    "message.tab.title.notice": "\u901A\u77E5",
    "message.tab.title.todo": "\u5F85\u529E",
    "message.allRead": "\u5168\u90E8\u5DF2\u8BFB",
    "message.seeMore": "\u67E5\u770B\u66F4\u591A",
    "message.empty": "\u6E05\u7A7A",
    "message.empty.tips": "\u6682\u65E0\u5185\u5BB9",
    "message.lang.tips": "\u8BED\u8A00\u5207\u6362\u81F3 ",
    "navbar.search.placeholder": "\u8F93\u5165\u5185\u5BB9\u67E5\u8BE2"
  }
};
const useContext = window["React"].useContext;
function useLocale(locale = null) {
  const {
    lang
  } = useContext(GlobalContext);
  return (locale || i18n)[lang] || {};
}
const component = "_component_1g8a7_1";
const menu = "_menu_1g8a7_8";
var styles$1 = {
  component,
  menu
};
var styles = {
  "icon-button": "_icon-button_12azl_1"
};
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classNames = classnames.exports;
const forwardRef = window["React"].forwardRef;
const Button = window["arco"].Button;
function IconButton(props, ref) {
  const _a = props, {
    icon,
    className
  } = _a, rest = __objRest(_a, [
    "icon",
    "className"
  ]);
  return /* @__PURE__ */ jsx(Button, __spreadValues({
    ref,
    icon,
    shape: "circle",
    type: "secondary",
    className: classNames(styles["icon-button"], className)
  }, rest));
}
var IconButton$1 = forwardRef(IconButton);
const Tooltip = window["arco"].Tooltip;
const IconMoonFill = window["arcoicon"].IconMoonFill;
const IconSunFill = window["arcoicon"].IconSunFill;
const LayoutHeader = (props) => {
  const t = useLocale();
  return /* @__PURE__ */ jsxs("div", {
    className: styles$1.component,
    children: [/* @__PURE__ */ jsx("div", {
      className: styles$1.menu,
      children: props.children
    }), /* @__PURE__ */ jsx(Tooltip, {
      content: app.theme === "light" ? t["settings.navbar.theme.toDark"] : t["settings.navbar.theme.toLight"],
      children: /* @__PURE__ */ jsx(IconButton$1, {
        icon: app.theme !== "dark" ? /* @__PURE__ */ jsx(IconMoonFill, {}) : /* @__PURE__ */ jsx(IconSunFill, {}),
        onClick: () => app.setTheme(app.theme === "light" ? "dark" : "light")
      })
    })]
  });
};
const useState$1 = window["React"].useState;
const useMemo = window["React"].useMemo;
const useRef = window["React"].useRef;
const useEffect = window["React"].useEffect;
const Switch = window["ReactRouterDOM"].Switch;
const Route = window["ReactRouterDOM"].Route;
const Redirect = window["ReactRouterDOM"].Redirect;
const useHistory = window["ReactRouterDOM"].useHistory;
const Layout = window["arco"].Layout;
const Menu = window["arco"].Menu;
const Spin = window["arco"].Spin;
const ConfigProvider = window["arco"].ConfigProvider;
const Modal = window["arco"].Modal;
const Form = window["arco"].Form;
const Input = window["arco"].Input;
const IconCommon = window["arcoicon"].IconCommon;
const IconDriveFile = window["arcoicon"].IconDriveFile;
const IconLanguage = window["arcoicon"].IconLanguage;
const IconMenu = window["arcoicon"].IconMenu;
const IconSave = window["arcoicon"].IconSave;
const observer = window["mobxReact"].observer;
const toJS = window["mobx"].toJS;
const DndProvider = window["ReactDnD"].DndProvider;
const HTML5Backend = window["ReactDnDHTML5Backend"].HTML5Backend;
const {
  Header,
  Content
} = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
function getIconFromKey(key) {
  switch (key) {
    case "system/page":
    case "system/pages":
      return /* @__PURE__ */ jsx(IconDriveFile, {
        className: styles$2.icon
      });
    case "system/module":
      return /* @__PURE__ */ jsx(IconCommon, {
        className: styles$2.icon
      });
    case "system/menu":
      return /* @__PURE__ */ jsx(IconMenu, {
        className: styles$2.icon
      });
    case "system/multilingual":
      return /* @__PURE__ */ jsx(IconLanguage, {});
    case "system/version":
      return /* @__PURE__ */ jsx(IconSave, {});
  }
}
function getFlattenRoutes(routes2) {
  const mod = { "../pages/exception/403/index.tsx": () => true ? __vitePreload(() => import("./index.1bf5db3b.js"), ["assets/index.1bf5db3b.js","assets/index.cbec9652.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js"]) : null, "../pages/manage/labels/index.tsx": () => true ? __vitePreload(() => import("./index.f06d6686.js"), ["assets/index.f06d6686.js","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/manage/library/index.tsx": () => true ? __vitePreload(() => import("./index.77e014f6.js"), ["assets/index.77e014f6.js","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/manage/list/index.tsx": () => true ? __vitePreload(() => import("./index.8c7a5b98.js"), ["assets/index.8c7a5b98.js","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/component/index.tsx": () => true ? __vitePreload(() => import("./index.60e88e93.js"), ["assets/index.60e88e93.js","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/menu/index.tsx": () => true ? __vitePreload(() => import("./index.d9c4b2db.js"), ["assets/index.d9c4b2db.js","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/module/index.tsx": () => true ? __vitePreload(() => import("./index.3dabd9d6.js"), ["assets/index.3dabd9d6.js","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/multilingual/index.tsx": () => true ? __vitePreload(() => import("./index.ea2023ed.js"), ["assets/index.ea2023ed.js","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js"]) : null, "../pages/system/pages/index.tsx": () => true ? __vitePreload(() => import("./index.4bee7a8d.js"), ["assets/index.4bee7a8d.js","assets/index.54719d25.css","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/version/index.tsx": () => true ? __vitePreload(() => import("./index.f17febca.js"), ["assets/index.f17febca.js","assets/index.3fdcf386.js","assets/7kfqc4de.c5361576.js","assets/6o3aj96a.54c1a20e.","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/pages/save/index.tsx": () => true ? __vitePreload(() => import("./index.51ea4b7f.js"), ["assets/index.51ea4b7f.js","assets/index.b44f53db.css","assets/hoc.db8d1922.js","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/version/components/exploit/index.tsx": () => true ? __vitePreload(() => import("./index.d8b83a41.js"), ["assets/index.d8b83a41.js","assets/7kfqc4de.c5361576.js","assets/6o3aj96a.54c1a20e.","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null, "../pages/system/version/components/textenv/index.tsx": () => true ? __vitePreload(() => import("./index.3fdcf386.js"), ["assets/index.3fdcf386.js","assets/7kfqc4de.c5361576.js","assets/6o3aj96a.54c1a20e.","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"]) : null };
  const res = [];
  function travel(_routes) {
    _routes.forEach((route) => {
      if (isArray(route.children) && route.children.length) {
        travel(route.children);
      }
      route.component = lazyload(mod[`../pages/${route.path || route.key}/index.tsx`]);
      res.push(route);
    });
  }
  travel(toJS(routes2));
  return res;
}
function PageLayout({
  notLogin = false
}) {
  const history = useHistory();
  const pathname = history.location.pathname;
  const locale = useLocale();
  const currentComponent = queryString.parseUrl(pathname).url.slice(1);
  const {
    userInfo
  } = store;
  useEffect(() => {
    __vitePreload(() => import("./init.b2fe64ee.js"), true ? ["assets/init.b2fe64ee.js","assets/init.d2e4d36a.css","assets/index.ddeb24a7.js","assets/index.6e050172.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js","assets/16bf2v6a1.2a68b2f2.js"] : void 0);
    if (userStore.userToken) {
      store.setUserLoading(true);
    } else {
      store.setIsLoginVisible(true);
    }
  }, []);
  const [routes2, defaultRoute] = useRoute(userInfo == null ? void 0 : userInfo.permissions);
  const paths = (currentComponent || defaultRoute).split("/");
  const defaultSelectedKeys = [currentComponent || defaultRoute];
  const [selectedKeys, setSelectedKeys] = useState$1(defaultSelectedKeys);
  const defaultOpenKeys = paths.slice(0, paths.length - 1);
  const [openKeys, setOpenKeys] = useState$1(defaultOpenKeys);
  const routeMap = useRef(new Map());
  const menuMap = useRef(new Map());
  function renderRoutes(locale2) {
    routeMap.current.clear();
    return function travel(_routes, level, parentNode = []) {
      return _routes.map((route) => {
        const {
          breadcrumb = true,
          ignore
        } = route;
        const iconDom = getIconFromKey(route.icon || route.key);
        const titleDom = /* @__PURE__ */ jsxs(Fragment, {
          children: [iconDom, " ", locale2[route.name] || route.name]
        });
        routeMap.current.set(`/${route.key}`, breadcrumb ? [...parentNode, route.name] : []);
        const visibleChildren = (route.children || []).filter((child) => {
          const {
            ignore: ignore2,
            breadcrumb: breadcrumb2 = true
          } = child;
          if (ignore2 || route.ignore) {
            routeMap.current.set(`/${child.key}`, breadcrumb2 ? [...parentNode, route.name, child.name] : []);
          }
          return !ignore2;
        });
        if (ignore) {
          return "";
        }
        if (visibleChildren.length) {
          menuMap.current.set(route.key, {
            subMenu: true
          });
          return /* @__PURE__ */ jsx(SubMenu, {
            title: titleDom,
            children: travel(visibleChildren, level + 1, [...parentNode, route.name])
          }, route.key);
        }
        menuMap.current.set(route.key, {
          menuItem: true
        });
        return /* @__PURE__ */ jsx(MenuItem, {
          children: titleDom
        }, route.key);
      });
    };
  }
  const flattenRoutes = useMemo(() => getFlattenRoutes(routes2) || [], [routes2]);
  function updateMenuStatus() {
    const pathKeys = pathname.split("/");
    const newOpenKeys = [...openKeys];
    while (pathKeys.length > 0) {
      const currentRouteKey = pathKeys.join("/");
      const menuKey = currentRouteKey.replace(/^\//, "");
      const menuType = menuMap.current.get(menuKey);
      if (menuType && menuType.menuItem)
        ;
      if (menuType && menuType.subMenu && !openKeys.includes(menuKey)) {
        newOpenKeys.push(menuKey);
      }
      pathKeys.pop();
    }
    setOpenKeys(newOpenKeys);
  }
  function onClickMenuItem(key) {
    const currentRoute = flattenRoutes.find((r) => r.key === key);
    setSelectedKeys([key]);
    const component2 = currentRoute.component;
    if (!component2.preload) {
      history.push(`/${key}`);
      return;
    }
    const preload = component2.preload();
    NProgress.start();
    preload.then(() => {
      NProgress.done();
    });
    history.push(`/${currentRoute.path || key}`);
  }
  useEffect(() => {
    updateMenuStatus();
  }, [routes2]);
  const componentConfig = useMemo(() => {
    return {
      Card: {
        bordered: false
      },
      List: {
        bordered: false
      },
      Modal: {
        maskClosable: false,
        escToExit: false
      },
      Table: {
        border: false
      }
    };
  }, []);
  const menuChildren = useMemo(() => {
    return renderRoutes(locale)(routes2, 1);
  }, [routes2]);
  const routeChildren = useMemo(() => {
    return flattenRoutes.map((route, index2) => {
      return /* @__PURE__ */ jsx(Route, {
        path: `/${route.key}`,
        component: route.component
      }, index2);
    });
  }, [flattenRoutes]);
  const [form] = Form.useForm();
  if (store.isLoginVisible) {
    return /* @__PURE__ */ jsx(Modal, {
      visible: true,
      title: "\u4F60\u597D\uFF0C\u6B22\u8FCE\u8BBF\u95EE WizUI \u4F4E\u4EE3\u7801\u5E73\u53F0\u3002\u8BF7\u5F55\u5165\u60A8\u7684\u767B\u5F55\u540D\u3002",
      closable: false,
      footer: (a, b) => b,
      onOk: () => {
        return form.validate().then((data) => {
          return ajax.post("/user/getSingLogin", data).then((res) => {
            store.setIsLoginVisible(false);
            store.setUserLoading(true);
            userStore.setUserToken(res.data.token);
            localStorage.setItem("tenant", res.data.tenant);
          });
        });
      },
      children: /* @__PURE__ */ jsx(Form, {
        form,
        children: /* @__PURE__ */ jsx(Form.Item, {
          layout: "vertical",
          label: "\u767B\u5F55\u540D",
          extra: "\u5F55\u5165\u767B\u5F55\u540D\u540E\uFF0C\u7CFB\u7EDF\u5C06\u4FDD\u5B58\u60A8\u5F53\u524D\u7684\u64CD\u4F5C\uFF0C\u4EE5\u4FBF\u5728\u4E0B\u6B21\u8BBF\u95EE\u65F6\u5B9E\u73B0\u6570\u636E\u540C\u6B65\u3002",
          field: "sign",
          rules: [{
            required: true,
            message: "\u767B\u5F55\u540D\u4E0D\u80FD\u4E3A\u7A7A"
          }, {
            match: /^[a-zA-Z0-9\-\_=]+$/,
            message: "\u53EA\u63A5\u53D7\u82F1\u6587\u5B57\u7B26\u548C\u6570\u5B57\u7684\u8F93\u5165\uFF0C\u4E0D\u652F\u6301\u5176\u4ED6\u5B57\u7B26\u3002"
          }, {
            minLength: 8,
            maxLength: 36,
            message: "\u540D\u79F0\u957F\u5EA6\u6700\u591A36\u4E2A\u5B57\u7B26\uFF0C\u4E14\u4E0D\u5C0F\u4E8E8\u5B57\u7B26"
          }],
          initialValue: localStorage.tenant || btoa(Date.now() * Math.random()),
          children: /* @__PURE__ */ jsx(Input, {
            placeholder: "\u8BF7\u8F93\u5165"
          })
        })
      })
    });
  }
  return /* @__PURE__ */ jsx(ConfigProvider, {
    locale: zhCN,
    componentConfig,
    theme: store.theme,
    children: /* @__PURE__ */ jsx(DndProvider, {
      backend: HTML5Backend,
      children: store.userLoading ? /* @__PURE__ */ jsxs(Layout, {
        className: styles$2.layout,
        children: [/* @__PURE__ */ jsx(Header, {
          children: /* @__PURE__ */ jsx(LayoutHeader, {
            children: /* @__PURE__ */ jsx(Menu, {
              mode: "horizontal",
              onClickMenuItem,
              selectedKeys,
              openKeys,
              onClickSubMenu: (_, openKeys2) => {
                setOpenKeys(openKeys2);
              },
              children: menuChildren
            })
          })
        }), /* @__PURE__ */ jsx(Content, {
          className: styles$2.Content,
          children: /* @__PURE__ */ jsxs(Switch, {
            children: [routeChildren, /* @__PURE__ */ jsx(Route, {
              exact: true,
              path: "/",
              children: /* @__PURE__ */ jsx(Redirect, {
                to: `/${defaultRoute}`
              })
            }), !flattenRoutes.length ? /* @__PURE__ */ jsx(Spin, {}) : /* @__PURE__ */ jsx(Route, {
              path: "*",
              component: lazyload(() => __vitePreload(() => import("./index.1bf5db3b.js"), true ? ["assets/index.1bf5db3b.js","assets/index.cbec9652.css","assets/index.2da18b09.js","assets/index.1e3eedf0.css","assets/vendor.96977194.js","assets/hoc.db8d1922.js"] : void 0))
            })]
          })
        })]
      }) : /* @__PURE__ */ jsx("div", {
        className: styles$2.spin,
        children: "Loading..."
      })
    })
  });
}
var Layout$1 = observer(PageLayout);
const useState = window["React"].useState;
const HashRouter = window["ReactRouterDOM"].HashRouter;
function Index() {
  const [lang, setLang] = useStorage("arco-lang", "zh-CN");
  const [theme] = useStorage("arco-theme", "light");
  useState(() => {
    app.setTheme(theme);
  });
  const contextValue = {
    lang,
    setLang
  };
  return /* @__PURE__ */ jsx(HashRouter, {
    basename: "/codes",
    children: /* @__PURE__ */ jsx(GlobalContext.Provider, {
      value: contextValue,
      children: /* @__PURE__ */ jsx(Layout$1, {})
    })
  });
}
window.ReactGtssForm = {
  MainContent: Index,
  app,
  config,
  date: "2024-01-08 09:35:39"
};
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Index
}, Symbol.toStringTag, { value: "Module" }));
export { classNames as c, index as i, useLocale as u };
