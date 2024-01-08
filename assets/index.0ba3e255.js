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
import { c as commonjsGlobal } from "./vendor.96977194.js";
import { j as jsx, a as jsxs } from "./index.c4195357.js";
import { Z as PropTypes } from "./index.f9e168f5.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
import "./index.2fdde450.js";
import "./hoc.3c567b96.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "./13mh1j7et.5aeab982.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
var lib = {};
var flattenNames$1 = {};
var freeGlobal$3 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$3;
var freeGlobal$2 = _freeGlobal;
var freeSelf$1 = typeof self == "object" && self && self.Object === Object && self;
var root$a = freeGlobal$2 || freeSelf$1 || Function("return this")();
var _root = root$a;
var root$9 = _root;
var Symbol$8 = root$9.Symbol;
var _Symbol = Symbol$8;
var Symbol$7 = _Symbol;
var objectProto$u = Object.prototype;
var hasOwnProperty$o = objectProto$u.hasOwnProperty;
var nativeObjectToString$3 = objectProto$u.toString;
var symToStringTag$3 = Symbol$7 ? Symbol$7.toStringTag : void 0;
function getRawTag$2(value) {
  var isOwn = hasOwnProperty$o.call(value, symToStringTag$3), tag = value[symToStringTag$3];
  try {
    value[symToStringTag$3] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$3.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$3] = tag;
    } else {
      delete value[symToStringTag$3];
    }
  }
  return result;
}
var _getRawTag = getRawTag$2;
var objectProto$t = Object.prototype;
var nativeObjectToString$2 = objectProto$t.toString;
function objectToString$2(value) {
  return nativeObjectToString$2.call(value);
}
var _objectToString = objectToString$2;
var Symbol$6 = _Symbol, getRawTag$1 = _getRawTag, objectToString$1 = _objectToString;
var nullTag$1 = "[object Null]", undefinedTag$1 = "[object Undefined]";
var symToStringTag$2 = Symbol$6 ? Symbol$6.toStringTag : void 0;
function baseGetTag$8(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag$1 : nullTag$1;
  }
  return symToStringTag$2 && symToStringTag$2 in Object(value) ? getRawTag$1(value) : objectToString$1(value);
}
var _baseGetTag = baseGetTag$8;
var isArray$d = Array.isArray;
var isArray_1 = isArray$d;
function isObjectLike$a(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$a;
var baseGetTag$7 = _baseGetTag, isArray$c = isArray_1, isObjectLike$9 = isObjectLike_1;
var stringTag$6 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray$c(value) && isObjectLike$9(value) && baseGetTag$7(value) == stringTag$6;
}
var isString_1 = isString;
function createBaseFor$2(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$2;
var createBaseFor$1 = _createBaseFor;
var baseFor$3 = createBaseFor$1();
var _baseFor = baseFor$3;
function baseTimes$2(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$2;
var baseGetTag$6 = _baseGetTag, isObjectLike$8 = isObjectLike_1;
var argsTag$6 = "[object Arguments]";
function baseIsArguments$2(value) {
  return isObjectLike$8(value) && baseGetTag$6(value) == argsTag$6;
}
var _baseIsArguments = baseIsArguments$2;
var baseIsArguments$1 = _baseIsArguments, isObjectLike$7 = isObjectLike_1;
var objectProto$s = Object.prototype;
var hasOwnProperty$n = objectProto$s.hasOwnProperty;
var propertyIsEnumerable$3 = objectProto$s.propertyIsEnumerable;
var isArguments$4 = baseIsArguments$1(function() {
  return arguments;
}()) ? baseIsArguments$1 : function(value) {
  return isObjectLike$7(value) && hasOwnProperty$n.call(value, "callee") && !propertyIsEnumerable$3.call(value, "callee");
};
var isArguments_1 = isArguments$4;
var isBuffer$5 = { exports: {} };
function stubFalse$1() {
  return false;
}
var stubFalse_1 = stubFalse$1;
(function(module2, exports2) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer3 = moduleExports2 ? root2.Buffer : void 0;
  var nativeIsBuffer2 = Buffer3 ? Buffer3.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer2 || stubFalse2;
  module2.exports = isBuffer2;
})(isBuffer$5, isBuffer$5.exports);
var MAX_SAFE_INTEGER$3 = 9007199254740991;
var reIsUint$1 = /^(?:0|[1-9]\d*)$/;
function isIndex$3(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$3 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint$1.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var _isIndex = isIndex$3;
var MAX_SAFE_INTEGER$2 = 9007199254740991;
function isLength$4(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$2;
}
var isLength_1 = isLength$4;
var baseGetTag$5 = _baseGetTag, isLength$3 = isLength_1, isObjectLike$6 = isObjectLike_1;
var argsTag$5 = "[object Arguments]", arrayTag$4 = "[object Array]", boolTag$5 = "[object Boolean]", dateTag$5 = "[object Date]", errorTag$4 = "[object Error]", funcTag$4 = "[object Function]", mapTag$8 = "[object Map]", numberTag$5 = "[object Number]", objectTag$8 = "[object Object]", regexpTag$5 = "[object RegExp]", setTag$8 = "[object Set]", stringTag$5 = "[object String]", weakMapTag$4 = "[object WeakMap]";
var arrayBufferTag$5 = "[object ArrayBuffer]", dataViewTag$7 = "[object DataView]", float32Tag$3 = "[object Float32Array]", float64Tag$3 = "[object Float64Array]", int8Tag$3 = "[object Int8Array]", int16Tag$3 = "[object Int16Array]", int32Tag$3 = "[object Int32Array]", uint8Tag$3 = "[object Uint8Array]", uint8ClampedTag$3 = "[object Uint8ClampedArray]", uint16Tag$3 = "[object Uint16Array]", uint32Tag$3 = "[object Uint32Array]";
var typedArrayTags$1 = {};
typedArrayTags$1[float32Tag$3] = typedArrayTags$1[float64Tag$3] = typedArrayTags$1[int8Tag$3] = typedArrayTags$1[int16Tag$3] = typedArrayTags$1[int32Tag$3] = typedArrayTags$1[uint8Tag$3] = typedArrayTags$1[uint8ClampedTag$3] = typedArrayTags$1[uint16Tag$3] = typedArrayTags$1[uint32Tag$3] = true;
typedArrayTags$1[argsTag$5] = typedArrayTags$1[arrayTag$4] = typedArrayTags$1[arrayBufferTag$5] = typedArrayTags$1[boolTag$5] = typedArrayTags$1[dataViewTag$7] = typedArrayTags$1[dateTag$5] = typedArrayTags$1[errorTag$4] = typedArrayTags$1[funcTag$4] = typedArrayTags$1[mapTag$8] = typedArrayTags$1[numberTag$5] = typedArrayTags$1[objectTag$8] = typedArrayTags$1[regexpTag$5] = typedArrayTags$1[setTag$8] = typedArrayTags$1[stringTag$5] = typedArrayTags$1[weakMapTag$4] = false;
function baseIsTypedArray$2(value) {
  return isObjectLike$6(value) && isLength$3(value.length) && !!typedArrayTags$1[baseGetTag$5(value)];
}
var _baseIsTypedArray = baseIsTypedArray$2;
function baseUnary$4(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$4;
var _nodeUtil = { exports: {} };
(function(module2, exports2) {
  var freeGlobal2 = _freeGlobal;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var freeProcess2 = moduleExports2 && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess2 && freeProcess2.binding && freeProcess2.binding("util");
    } catch (e) {
    }
  }();
  module2.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray$1 = _baseIsTypedArray, baseUnary$3 = _baseUnary, nodeUtil$4 = _nodeUtil.exports;
var nodeIsTypedArray$1 = nodeUtil$4 && nodeUtil$4.isTypedArray;
var isTypedArray$4 = nodeIsTypedArray$1 ? baseUnary$3(nodeIsTypedArray$1) : baseIsTypedArray$1;
var isTypedArray_1 = isTypedArray$4;
var baseTimes$1 = _baseTimes, isArguments$3 = isArguments_1, isArray$b = isArray_1, isBuffer$4 = isBuffer$5.exports, isIndex$2 = _isIndex, isTypedArray$3 = isTypedArray_1;
var objectProto$r = Object.prototype;
var hasOwnProperty$m = objectProto$r.hasOwnProperty;
function arrayLikeKeys$3(value, inherited) {
  var isArr = isArray$b(value), isArg = !isArr && isArguments$3(value), isBuff = !isArr && !isArg && isBuffer$4(value), isType = !isArr && !isArg && !isBuff && isTypedArray$3(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes$1(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$m.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex$2(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$3;
var objectProto$q = Object.prototype;
function isPrototype$4(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$q;
  return value === proto;
}
var _isPrototype = isPrototype$4;
function overArg$3(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var _overArg = overArg$3;
var overArg$2 = _overArg;
var nativeKeys$3 = overArg$2(Object.keys, Object);
var _nativeKeys = nativeKeys$3;
var isPrototype$3 = _isPrototype, nativeKeys$2 = _nativeKeys;
var objectProto$p = Object.prototype;
var hasOwnProperty$l = objectProto$p.hasOwnProperty;
function baseKeys$2(object) {
  if (!isPrototype$3(object)) {
    return nativeKeys$2(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$l.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$2;
function isObject$7(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$7;
var baseGetTag$4 = _baseGetTag, isObject$6 = isObject_1;
var asyncTag$1 = "[object AsyncFunction]", funcTag$3 = "[object Function]", genTag$2 = "[object GeneratorFunction]", proxyTag$1 = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$6(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$3 || tag == genTag$2 || tag == asyncTag$1 || tag == proxyTag$1;
}
var isFunction_1 = isFunction$3;
var isFunction$2 = isFunction_1, isLength$2 = isLength_1;
function isArrayLike$5(value) {
  return value != null && isLength$2(value.length) && !isFunction$2(value);
}
var isArrayLike_1 = isArrayLike$5;
var arrayLikeKeys$2 = _arrayLikeKeys, baseKeys$1 = _baseKeys, isArrayLike$4 = isArrayLike_1;
function keys$6(object) {
  return isArrayLike$4(object) ? arrayLikeKeys$2(object) : baseKeys$1(object);
}
var keys_1 = keys$6;
var baseFor$2 = _baseFor, keys$5 = keys_1;
function baseForOwn$3(object, iteratee) {
  return object && baseFor$2(object, iteratee, keys$5);
}
var _baseForOwn = baseForOwn$3;
function identity$3(value) {
  return value;
}
var identity_1 = identity$3;
var identity$2 = identity_1;
function castFunction$2(value) {
  return typeof value == "function" ? value : identity$2;
}
var _castFunction = castFunction$2;
var baseForOwn$2 = _baseForOwn, castFunction$1 = _castFunction;
function forOwn(object, iteratee) {
  return object && baseForOwn$2(object, castFunction$1(iteratee));
}
var forOwn_1 = forOwn;
var overArg$1 = _overArg;
var getPrototype$5 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$5;
var baseGetTag$3 = _baseGetTag, getPrototype$4 = _getPrototype, isObjectLike$5 = isObjectLike_1;
var objectTag$7 = "[object Object]";
var funcProto$5 = Function.prototype, objectProto$o = Object.prototype;
var funcToString$5 = funcProto$5.toString;
var hasOwnProperty$k = objectProto$o.hasOwnProperty;
var objectCtorString$1 = funcToString$5.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$5(value) || baseGetTag$3(value) != objectTag$7) {
    return false;
  }
  var proto = getPrototype$4(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$k.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString$5.call(Ctor) == objectCtorString$1;
}
var isPlainObject_1 = isPlainObject$1;
function arrayMap$3(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var _arrayMap = arrayMap$3;
function listCacheClear$2() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$2;
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;
var eq$3 = eq_1;
function assocIndexOf$5(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$5;
var assocIndexOf$4 = _assocIndexOf;
var arrayProto$1 = Array.prototype;
var splice$1 = arrayProto$1.splice;
function listCacheDelete$2(key) {
  var data = this.__data__, index2 = assocIndexOf$4(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice$1.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$2;
var assocIndexOf$3 = _assocIndexOf;
function listCacheGet$2(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$2;
var assocIndexOf$2 = _assocIndexOf;
function listCacheHas$2(key) {
  return assocIndexOf$2(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$2;
var assocIndexOf$1 = _assocIndexOf;
function listCacheSet$2(key, value) {
  var data = this.__data__, index2 = assocIndexOf$1(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$2;
var listCacheClear$1 = _listCacheClear, listCacheDelete$1 = _listCacheDelete, listCacheGet$1 = _listCacheGet, listCacheHas$1 = _listCacheHas, listCacheSet$1 = _listCacheSet;
function ListCache$5(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$5.prototype.clear = listCacheClear$1;
ListCache$5.prototype["delete"] = listCacheDelete$1;
ListCache$5.prototype.get = listCacheGet$1;
ListCache$5.prototype.has = listCacheHas$1;
ListCache$5.prototype.set = listCacheSet$1;
var _ListCache = ListCache$5;
var ListCache$4 = _ListCache;
function stackClear$2() {
  this.__data__ = new ListCache$4();
  this.size = 0;
}
var _stackClear = stackClear$2;
function stackDelete$2(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$2;
function stackGet$2(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$2;
function stackHas$2(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$2;
var root$8 = _root;
var coreJsData$3 = root$8["__core-js_shared__"];
var _coreJsData = coreJsData$3;
var coreJsData$2 = _coreJsData;
var maskSrcKey$1 = function() {
  var uid = /[^.]+$/.exec(coreJsData$2 && coreJsData$2.keys && coreJsData$2.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$2(func) {
  return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
var _isMasked = isMasked$2;
var funcProto$4 = Function.prototype;
var funcToString$4 = funcProto$4.toString;
function toSource$3(func) {
  if (func != null) {
    try {
      return funcToString$4.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$3;
var isFunction$1 = isFunction_1, isMasked$1 = _isMasked, isObject$5 = isObject_1, toSource$2 = _toSource;
var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
var funcProto$3 = Function.prototype, objectProto$n = Object.prototype;
var funcToString$3 = funcProto$3.toString;
var hasOwnProperty$j = objectProto$n.hasOwnProperty;
var reIsNative$1 = RegExp("^" + funcToString$3.call(hasOwnProperty$j).replace(reRegExpChar$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative$2(value) {
  if (!isObject$5(value) || isMasked$1(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative$1 : reIsHostCtor$1;
  return pattern.test(toSource$2(value));
}
var _baseIsNative = baseIsNative$2;
function getValue$2(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$2;
var baseIsNative$1 = _baseIsNative, getValue$1 = _getValue;
function getNative$8(object, key) {
  var value = getValue$1(object, key);
  return baseIsNative$1(value) ? value : void 0;
}
var _getNative = getNative$8;
var getNative$7 = _getNative, root$7 = _root;
var Map$5 = getNative$7(root$7, "Map");
var _Map = Map$5;
var getNative$6 = _getNative;
var nativeCreate$6 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$6;
var nativeCreate$5 = _nativeCreate;
function hashClear$2() {
  this.__data__ = nativeCreate$5 ? nativeCreate$5(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$2;
function hashDelete$2(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$2;
var nativeCreate$4 = _nativeCreate;
var HASH_UNDEFINED$5 = "__lodash_hash_undefined__";
var objectProto$m = Object.prototype;
var hasOwnProperty$i = objectProto$m.hasOwnProperty;
function hashGet$2(key) {
  var data = this.__data__;
  if (nativeCreate$4) {
    var result = data[key];
    return result === HASH_UNDEFINED$5 ? void 0 : result;
  }
  return hasOwnProperty$i.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$2;
var nativeCreate$3 = _nativeCreate;
var objectProto$l = Object.prototype;
var hasOwnProperty$h = objectProto$l.hasOwnProperty;
function hashHas$2(key) {
  var data = this.__data__;
  return nativeCreate$3 ? data[key] !== void 0 : hasOwnProperty$h.call(data, key);
}
var _hashHas = hashHas$2;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$4 = "__lodash_hash_undefined__";
function hashSet$2(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$2 && value === void 0 ? HASH_UNDEFINED$4 : value;
  return this;
}
var _hashSet = hashSet$2;
var hashClear$1 = _hashClear, hashDelete$1 = _hashDelete, hashGet$1 = _hashGet, hashHas$1 = _hashHas, hashSet$1 = _hashSet;
function Hash$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$2.prototype.clear = hashClear$1;
Hash$2.prototype["delete"] = hashDelete$1;
Hash$2.prototype.get = hashGet$1;
Hash$2.prototype.has = hashHas$1;
Hash$2.prototype.set = hashSet$1;
var _Hash = Hash$2;
var Hash$1 = _Hash, ListCache$3 = _ListCache, Map$4 = _Map;
function mapCacheClear$2() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash$1(),
    "map": new (Map$4 || ListCache$3)(),
    "string": new Hash$1()
  };
}
var _mapCacheClear = mapCacheClear$2;
function isKeyable$2(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$2;
var isKeyable$1 = _isKeyable;
function getMapData$5(map2, key) {
  var data = map2.__data__;
  return isKeyable$1(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$5;
var getMapData$4 = _getMapData;
function mapCacheDelete$2(key) {
  var result = getMapData$4(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$2;
var getMapData$3 = _getMapData;
function mapCacheGet$2(key) {
  return getMapData$3(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$2;
var getMapData$2 = _getMapData;
function mapCacheHas$2(key) {
  return getMapData$2(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$2;
var getMapData$1 = _getMapData;
function mapCacheSet$2(key, value) {
  var data = getMapData$1(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$2;
var mapCacheClear$1 = _mapCacheClear, mapCacheDelete$1 = _mapCacheDelete, mapCacheGet$1 = _mapCacheGet, mapCacheHas$1 = _mapCacheHas, mapCacheSet$1 = _mapCacheSet;
function MapCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$4.prototype.clear = mapCacheClear$1;
MapCache$4.prototype["delete"] = mapCacheDelete$1;
MapCache$4.prototype.get = mapCacheGet$1;
MapCache$4.prototype.has = mapCacheHas$1;
MapCache$4.prototype.set = mapCacheSet$1;
var _MapCache = MapCache$4;
var ListCache$2 = _ListCache, Map$3 = _Map, MapCache$3 = _MapCache;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$2(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$2) {
    var pairs = data.__data__;
    if (!Map$3 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$3(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$2;
var ListCache$1 = _ListCache, stackClear$1 = _stackClear, stackDelete$1 = _stackDelete, stackGet$1 = _stackGet, stackHas$1 = _stackHas, stackSet$1 = _stackSet;
function Stack$4(entries) {
  var data = this.__data__ = new ListCache$1(entries);
  this.size = data.size;
}
Stack$4.prototype.clear = stackClear$1;
Stack$4.prototype["delete"] = stackDelete$1;
Stack$4.prototype.get = stackGet$1;
Stack$4.prototype.has = stackHas$1;
Stack$4.prototype.set = stackSet$1;
var _Stack = Stack$4;
var HASH_UNDEFINED$3 = "__lodash_hash_undefined__";
function setCacheAdd$2(value) {
  this.__data__.set(value, HASH_UNDEFINED$3);
  return this;
}
var _setCacheAdd = setCacheAdd$2;
function setCacheHas$2(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$2;
var MapCache$2 = _MapCache, setCacheAdd$1 = _setCacheAdd, setCacheHas$1 = _setCacheHas;
function SetCache$2(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache$2();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$2.prototype.add = SetCache$2.prototype.push = setCacheAdd$1;
SetCache$2.prototype.has = setCacheHas$1;
var _SetCache = SetCache$2;
function arraySome$2(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$2;
function cacheHas$2(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$2;
var SetCache$1 = _SetCache, arraySome$1 = _arraySome, cacheHas$1 = _cacheHas;
var COMPARE_PARTIAL_FLAG$b = 1, COMPARE_UNORDERED_FLAG$7 = 2;
function equalArrays$3(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$b, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$7 ? new SetCache$1() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome$1(other, function(othValue2, othIndex) {
        if (!cacheHas$1(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$3;
var root$6 = _root;
var Uint8Array$4 = root$6.Uint8Array;
var _Uint8Array = Uint8Array$4;
function mapToArray$2(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$2;
function setToArray$2(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$2;
var Symbol$5 = _Symbol, Uint8Array$3 = _Uint8Array, eq$2 = eq_1, equalArrays$2 = _equalArrays, mapToArray$1 = _mapToArray, setToArray$1 = _setToArray;
var COMPARE_PARTIAL_FLAG$a = 1, COMPARE_UNORDERED_FLAG$6 = 2;
var boolTag$4 = "[object Boolean]", dateTag$4 = "[object Date]", errorTag$3 = "[object Error]", mapTag$7 = "[object Map]", numberTag$4 = "[object Number]", regexpTag$4 = "[object RegExp]", setTag$7 = "[object Set]", stringTag$4 = "[object String]", symbolTag$5 = "[object Symbol]";
var arrayBufferTag$4 = "[object ArrayBuffer]", dataViewTag$6 = "[object DataView]";
var symbolProto$4 = Symbol$5 ? Symbol$5.prototype : void 0, symbolValueOf$2 = symbolProto$4 ? symbolProto$4.valueOf : void 0;
function equalByTag$2(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$6:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag$4:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$3(object), new Uint8Array$3(other))) {
        return false;
      }
      return true;
    case boolTag$4:
    case dateTag$4:
    case numberTag$4:
      return eq$2(+object, +other);
    case errorTag$3:
      return object.name == other.name && object.message == other.message;
    case regexpTag$4:
    case stringTag$4:
      return object == other + "";
    case mapTag$7:
      var convert = mapToArray$1;
    case setTag$7:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$a;
      convert || (convert = setToArray$1);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$6;
      stack.set(object, other);
      var result = equalArrays$2(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag$5:
      if (symbolValueOf$2) {
        return symbolValueOf$2.call(object) == symbolValueOf$2.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$2;
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, isArray$a = isArray_1;
function baseGetAllKeys$3(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$a(object) ? result : arrayPush$2(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$3;
function arrayFilter$2(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$2;
function stubArray$3() {
  return [];
}
var stubArray_1 = stubArray$3;
var arrayFilter$1 = _arrayFilter, stubArray$2 = stubArray_1;
var objectProto$k = Object.prototype;
var propertyIsEnumerable$2 = objectProto$k.propertyIsEnumerable;
var nativeGetSymbols$2 = Object.getOwnPropertySymbols;
var getSymbols$5 = !nativeGetSymbols$2 ? stubArray$2 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter$1(nativeGetSymbols$2(object), function(symbol) {
    return propertyIsEnumerable$2.call(object, symbol);
  });
};
var _getSymbols = getSymbols$5;
var baseGetAllKeys$2 = _baseGetAllKeys, getSymbols$4 = _getSymbols, keys$4 = keys_1;
function getAllKeys$3(object) {
  return baseGetAllKeys$2(object, keys$4, getSymbols$4);
}
var _getAllKeys = getAllKeys$3;
var getAllKeys$2 = _getAllKeys;
var COMPARE_PARTIAL_FLAG$9 = 1;
var objectProto$j = Object.prototype;
var hasOwnProperty$g = objectProto$j.hasOwnProperty;
function equalObjects$2(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$9, objProps = getAllKeys$2(object), objLength = objProps.length, othProps = getAllKeys$2(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$g.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$2;
var getNative$5 = _getNative, root$5 = _root;
var DataView$3 = getNative$5(root$5, "DataView");
var _DataView = DataView$3;
var getNative$4 = _getNative, root$4 = _root;
var Promise$4 = getNative$4(root$4, "Promise");
var _Promise = Promise$4;
var getNative$3 = _getNative, root$3 = _root;
var Set$3 = getNative$3(root$3, "Set");
var _Set = Set$3;
var getNative$2 = _getNative, root$2 = _root;
var WeakMap$3 = getNative$2(root$2, "WeakMap");
var _WeakMap = WeakMap$3;
var DataView$2 = _DataView, Map$2 = _Map, Promise$3 = _Promise, Set$2 = _Set, WeakMap$2 = _WeakMap, baseGetTag$2 = _baseGetTag, toSource$1 = _toSource;
var mapTag$6 = "[object Map]", objectTag$6 = "[object Object]", promiseTag$1 = "[object Promise]", setTag$6 = "[object Set]", weakMapTag$3 = "[object WeakMap]";
var dataViewTag$5 = "[object DataView]";
var dataViewCtorString$1 = toSource$1(DataView$2), mapCtorString$1 = toSource$1(Map$2), promiseCtorString$1 = toSource$1(Promise$3), setCtorString$1 = toSource$1(Set$2), weakMapCtorString$1 = toSource$1(WeakMap$2);
var getTag$6 = baseGetTag$2;
if (DataView$2 && getTag$6(new DataView$2(new ArrayBuffer(1))) != dataViewTag$5 || Map$2 && getTag$6(new Map$2()) != mapTag$6 || Promise$3 && getTag$6(Promise$3.resolve()) != promiseTag$1 || Set$2 && getTag$6(new Set$2()) != setTag$6 || WeakMap$2 && getTag$6(new WeakMap$2()) != weakMapTag$3) {
  getTag$6 = function(value) {
    var result = baseGetTag$2(value), Ctor = result == objectTag$6 ? value.constructor : void 0, ctorString = Ctor ? toSource$1(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString$1:
          return dataViewTag$5;
        case mapCtorString$1:
          return mapTag$6;
        case promiseCtorString$1:
          return promiseTag$1;
        case setCtorString$1:
          return setTag$6;
        case weakMapCtorString$1:
          return weakMapTag$3;
      }
    }
    return result;
  };
}
var _getTag = getTag$6;
var Stack$3 = _Stack, equalArrays$1 = _equalArrays, equalByTag$1 = _equalByTag, equalObjects$1 = _equalObjects, getTag$5 = _getTag, isArray$9 = isArray_1, isBuffer$3 = isBuffer$5.exports, isTypedArray$2 = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$8 = 1;
var argsTag$4 = "[object Arguments]", arrayTag$3 = "[object Array]", objectTag$5 = "[object Object]";
var objectProto$i = Object.prototype;
var hasOwnProperty$f = objectProto$i.hasOwnProperty;
function baseIsEqualDeep$2(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$9(object), othIsArr = isArray$9(other), objTag = objIsArr ? arrayTag$3 : getTag$5(object), othTag = othIsArr ? arrayTag$3 : getTag$5(other);
  objTag = objTag == argsTag$4 ? objectTag$5 : objTag;
  othTag = othTag == argsTag$4 ? objectTag$5 : othTag;
  var objIsObj = objTag == objectTag$5, othIsObj = othTag == objectTag$5, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$3(object)) {
    if (!isBuffer$3(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$3());
    return objIsArr || isTypedArray$2(object) ? equalArrays$1(object, other, bitmask, customizer, equalFunc, stack) : equalByTag$1(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$8)) {
    var objIsWrapped = objIsObj && hasOwnProperty$f.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$f.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$3());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$3());
  return equalObjects$1(object, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$2;
var baseIsEqualDeep$1 = _baseIsEqualDeep, isObjectLike$4 = isObjectLike_1;
function baseIsEqual$3(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike$4(value) && !isObjectLike$4(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep$1(value, other, bitmask, customizer, baseIsEqual$3, stack);
}
var _baseIsEqual = baseIsEqual$3;
var Stack$2 = _Stack, baseIsEqual$2 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$7 = 1, COMPARE_UNORDERED_FLAG$5 = 2;
function baseIsMatch$2(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack$2();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$2(srcValue, objValue, COMPARE_PARTIAL_FLAG$7 | COMPARE_UNORDERED_FLAG$5, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$2;
var isObject$4 = isObject_1;
function isStrictComparable$3(value) {
  return value === value && !isObject$4(value);
}
var _isStrictComparable = isStrictComparable$3;
var isStrictComparable$2 = _isStrictComparable, keys$3 = keys_1;
function getMatchData$2(object) {
  var result = keys$3(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable$2(value)];
  }
  return result;
}
var _getMatchData = getMatchData$2;
function matchesStrictComparable$3(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var _matchesStrictComparable = matchesStrictComparable$3;
var baseIsMatch$1 = _baseIsMatch, getMatchData$1 = _getMatchData, matchesStrictComparable$2 = _matchesStrictComparable;
function baseMatches$2(source) {
  var matchData = getMatchData$1(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$2(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch$1(object, source, matchData);
  };
}
var _baseMatches = baseMatches$2;
var baseGetTag$1 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var symbolTag$4 = "[object Symbol]";
function isSymbol$4(value) {
  return typeof value == "symbol" || isObjectLike$3(value) && baseGetTag$1(value) == symbolTag$4;
}
var isSymbol_1 = isSymbol$4;
var isArray$8 = isArray_1, isSymbol$3 = isSymbol_1;
var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$1 = /^\w*$/;
function isKey$4(value, object) {
  if (isArray$8(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$3(value)) {
    return true;
  }
  return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object != null && value in Object(object);
}
var _isKey = isKey$4;
var MapCache$1 = _MapCache;
var FUNC_ERROR_TEXT$3 = "Expected a function";
function memoize$2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$3);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$2.Cache || MapCache$1)();
  return memoized;
}
memoize$2.Cache = MapCache$1;
var memoize_1 = memoize$2;
var memoize$1 = memoize_1;
var MAX_MEMOIZE_SIZE$1 = 500;
function memoizeCapped$2(func) {
  var result = memoize$1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE$1) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$2;
var memoizeCapped$1 = _memoizeCapped;
var rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar$1 = /\\(\\)?/g;
var stringToPath$3 = memoizeCapped$1(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName$1, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar$1, "$1") : number || match);
  });
  return result;
});
var _stringToPath = stringToPath$3;
var Symbol$4 = _Symbol, arrayMap$2 = _arrayMap, isArray$7 = isArray_1, isSymbol$2 = isSymbol_1;
var INFINITY$3 = 1 / 0;
var symbolProto$3 = Symbol$4 ? Symbol$4.prototype : void 0, symbolToString$1 = symbolProto$3 ? symbolProto$3.toString : void 0;
function baseToString$2(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$7(value)) {
    return arrayMap$2(value, baseToString$2) + "";
  }
  if (isSymbol$2(value)) {
    return symbolToString$1 ? symbolToString$1.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$3 ? "-0" : result;
}
var _baseToString = baseToString$2;
var baseToString$1 = _baseToString;
function toString$2(value) {
  return value == null ? "" : baseToString$1(value);
}
var toString_1 = toString$2;
var isArray$6 = isArray_1, isKey$3 = _isKey, stringToPath$2 = _stringToPath, toString$1 = toString_1;
function castPath$3(value, object) {
  if (isArray$6(value)) {
    return value;
  }
  return isKey$3(value, object) ? [value] : stringToPath$2(toString$1(value));
}
var _castPath = castPath$3;
var isSymbol$1 = isSymbol_1;
var INFINITY$2 = 1 / 0;
function toKey$5(value) {
  if (typeof value == "string" || isSymbol$1(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$2 ? "-0" : result;
}
var _toKey = toKey$5;
var castPath$2 = _castPath, toKey$4 = _toKey;
function baseGet$3(object, path) {
  path = castPath$2(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey$4(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
var _baseGet = baseGet$3;
var baseGet$2 = _baseGet;
function get$3(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet$2(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$3;
function baseHasIn$2(object, key) {
  return object != null && key in Object(object);
}
var _baseHasIn = baseHasIn$2;
var castPath$1 = _castPath, isArguments$2 = isArguments_1, isArray$5 = isArray_1, isIndex$1 = _isIndex, isLength$1 = isLength_1, toKey$3 = _toKey;
function hasPath$2(object, path, hasFunc) {
  path = castPath$1(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$3(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength$1(length) && isIndex$1(key, length) && (isArray$5(object) || isArguments$2(object));
}
var _hasPath = hasPath$2;
var baseHasIn$1 = _baseHasIn, hasPath$1 = _hasPath;
function hasIn$2(object, path) {
  return object != null && hasPath$1(object, path, baseHasIn$1);
}
var hasIn_1 = hasIn$2;
var baseIsEqual$1 = _baseIsEqual, get$2 = get_1, hasIn$1 = hasIn_1, isKey$2 = _isKey, isStrictComparable$1 = _isStrictComparable, matchesStrictComparable$1 = _matchesStrictComparable, toKey$2 = _toKey;
var COMPARE_PARTIAL_FLAG$6 = 1, COMPARE_UNORDERED_FLAG$4 = 2;
function baseMatchesProperty$2(path, srcValue) {
  if (isKey$2(path) && isStrictComparable$1(srcValue)) {
    return matchesStrictComparable$1(toKey$2(path), srcValue);
  }
  return function(object) {
    var objValue = get$2(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn$1(object, path) : baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$6 | COMPARE_UNORDERED_FLAG$4);
  };
}
var _baseMatchesProperty = baseMatchesProperty$2;
function baseProperty$2(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var _baseProperty = baseProperty$2;
var baseGet$1 = _baseGet;
function basePropertyDeep$2(path) {
  return function(object) {
    return baseGet$1(object, path);
  };
}
var _basePropertyDeep = basePropertyDeep$2;
var baseProperty$1 = _baseProperty, basePropertyDeep$1 = _basePropertyDeep, isKey$1 = _isKey, toKey$1 = _toKey;
function property$2(path) {
  return isKey$1(path) ? baseProperty$1(toKey$1(path)) : basePropertyDeep$1(path);
}
var property_1 = property$2;
var baseMatches$1 = _baseMatches, baseMatchesProperty$1 = _baseMatchesProperty, identity$1 = identity_1, isArray$4 = isArray_1, property$1 = property_1;
function baseIteratee$2(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity$1;
  }
  if (typeof value == "object") {
    return isArray$4(value) ? baseMatchesProperty$1(value[0], value[1]) : baseMatches$1(value);
  }
  return property$1(value);
}
var _baseIteratee = baseIteratee$2;
var isArrayLike$3 = isArrayLike_1;
function createBaseEach$2(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var _createBaseEach = createBaseEach$2;
var baseForOwn$1 = _baseForOwn, createBaseEach$1 = _createBaseEach;
var baseEach$3 = createBaseEach$1(baseForOwn$1);
var _baseEach = baseEach$3;
var baseEach$2 = _baseEach, isArrayLike$2 = isArrayLike_1;
function baseMap$2(collection, iteratee) {
  var index2 = -1, result = isArrayLike$2(collection) ? Array(collection.length) : [];
  baseEach$2(collection, function(value, key, collection2) {
    result[++index2] = iteratee(value, key, collection2);
  });
  return result;
}
var _baseMap = baseMap$2;
var arrayMap$1 = _arrayMap, baseIteratee$1 = _baseIteratee, baseMap$1 = _baseMap, isArray$3 = isArray_1;
function map$1(collection, iteratee) {
  var func = isArray$3(collection) ? arrayMap$1 : baseMap$1;
  return func(collection, baseIteratee$1(iteratee));
}
var map_1 = map$1;
Object.defineProperty(flattenNames$1, "__esModule", {
  value: true
});
flattenNames$1.flattenNames = void 0;
var _isString2 = isString_1;
var _isString3 = _interopRequireDefault$7(_isString2);
var _forOwn2$2 = forOwn_1;
var _forOwn3$2 = _interopRequireDefault$7(_forOwn2$2);
var _isPlainObject2 = isPlainObject_1;
var _isPlainObject3 = _interopRequireDefault$7(_isPlainObject2);
var _map2 = map_1;
var _map3 = _interopRequireDefault$7(_map2);
function _interopRequireDefault$7(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var flattenNames = flattenNames$1.flattenNames = function flattenNames2() {
  var things = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var names2 = [];
  (0, _map3.default)(things, function(thing) {
    if (Array.isArray(thing)) {
      flattenNames2(thing).map(function(name) {
        return names2.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3$2.default)(thing, function(value, key) {
        value === true && names2.push(key);
        names2.push(key + "-" + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names2.push(thing);
    }
  });
  return names2;
};
flattenNames$1.default = flattenNames;
var mergeClasses$1 = {};
function arrayEach$2(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$2;
var getNative$1 = _getNative;
var defineProperty$3 = function() {
  try {
    var func = getNative$1(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$1 = defineProperty$3;
var defineProperty$2 = _defineProperty$1;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$2) {
    defineProperty$2(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$1 = eq_1;
var objectProto$h = Object.prototype;
var hasOwnProperty$e = objectProto$h.hasOwnProperty;
function assignValue$3(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$e.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignValue = assignValue$3;
var assignValue$2 = _assignValue, baseAssignValue$1 = _baseAssignValue;
function copyObject$5(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue$1(object, key, newValue);
    } else {
      assignValue$2(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
var copyObject$4 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$4(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
function nativeKeysIn$2(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$2;
var isObject$3 = isObject_1, isPrototype$2 = _isPrototype, nativeKeysIn$1 = _nativeKeysIn;
var objectProto$g = Object.prototype;
var hasOwnProperty$d = objectProto$g.hasOwnProperty;
function baseKeysIn$2(object) {
  if (!isObject$3(object)) {
    return nativeKeysIn$1(object);
  }
  var isProto = isPrototype$2(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$d.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$2;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeysIn$1 = _baseKeysIn, isArrayLike$1 = isArrayLike_1;
function keysIn$4(object) {
  return isArrayLike$1(object) ? arrayLikeKeys$1(object, true) : baseKeysIn$1(object);
}
var keysIn_1 = keysIn$4;
var copyObject$3 = _copyObject, keysIn$3 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$3(source, keysIn$3(source), object);
}
var _baseAssignIn = baseAssignIn$1;
var _cloneBuffer = { exports: {} };
(function(module2, exports2) {
  var root2 = _root;
  var freeExports2 = exports2 && !exports2.nodeType && exports2;
  var freeModule2 = freeExports2 && true && module2 && !module2.nodeType && module2;
  var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
  var Buffer3 = moduleExports2 ? root2.Buffer : void 0, allocUnsafe2 = Buffer3 ? Buffer3.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe2 ? allocUnsafe2(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module2.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
function copyArray$2(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$2;
var copyObject$2 = _copyObject, getSymbols$3 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$2(source, getSymbols$3(source), object);
}
var _copySymbols = copySymbols$1;
var arrayPush$1 = _arrayPush, getPrototype$3 = _getPrototype, getSymbols$2 = _getSymbols, stubArray$1 = stubArray_1;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  var result = [];
  while (object) {
    arrayPush$1(result, getSymbols$2(object));
    object = getPrototype$3(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject$1 = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject$1(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$2 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys$1(object, keysIn$2, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var objectProto$f = Object.prototype;
var hasOwnProperty$c = objectProto$f.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$c.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var Uint8Array$2 = _Uint8Array;
function cloneArrayBuffer$4(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$2(result).set(new Uint8Array$2(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$4;
var cloneArrayBuffer$3 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$3(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$3 = _Symbol;
var symbolProto$2 = Symbol$3 ? Symbol$3.prototype : void 0, symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
var cloneArrayBuffer$1 = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray$1 = _cloneTypedArray;
var boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", symbolTag$3 = "[object Symbol]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return cloneArrayBuffer$1(object);
    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);
    case dataViewTag$4:
      return cloneDataView(object, isDeep);
    case float32Tag$2:
    case float64Tag$2:
    case int8Tag$2:
    case int16Tag$2:
    case int32Tag$2:
    case uint8Tag$2:
    case uint8ClampedTag$2:
    case uint16Tag$2:
    case uint32Tag$2:
      return cloneTypedArray$1(object, isDeep);
    case mapTag$5:
      return new Ctor();
    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);
    case regexpTag$3:
      return cloneRegExp(object);
    case setTag$5:
      return new Ctor();
    case symbolTag$3:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var isObject$2 = isObject_1;
var objectCreate$1 = Object.create;
var baseCreate$3 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$2(proto)) {
      return {};
    }
    if (objectCreate$1) {
      return objectCreate$1(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$3;
var baseCreate$2 = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$1 = _isPrototype;
function initCloneObject$2(object) {
  return typeof object.constructor == "function" && !isPrototype$1(object) ? baseCreate$2(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;
var getTag$4 = _getTag, isObjectLike$2 = isObjectLike_1;
var mapTag$4 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$2(value) && getTag$4(value) == mapTag$4;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$2 = _baseUnary, nodeUtil$3 = _nodeUtil.exports;
var nodeIsMap = nodeUtil$3 && nodeUtil$3.isMap;
var isMap$1 = nodeIsMap ? baseUnary$2(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$3 = _getTag, isObjectLike$1 = isObjectLike_1;
var setTag$4 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike$1(value) && getTag$3(value) == setTag$4;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary$1 = _baseUnary, nodeUtil$2 = _nodeUtil.exports;
var nodeIsSet = nodeUtil$2 && nodeUtil$2.isSet;
var isSet$1 = nodeIsSet ? baseUnary$1(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack$1 = _Stack, arrayEach$1 = _arrayEach, assignValue$1 = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer$1 = _cloneBuffer.exports, copyArray$1 = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys$1 = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag$2 = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject$1 = _initCloneObject, isArray$2 = isArray_1, isBuffer$2 = isBuffer$5.exports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys$1 = keys_1, keysIn$1 = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag$3 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$2 = "[object Error]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$4] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
function baseClone$1(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray$1(value, result);
    }
  } else {
    var tag = getTag$2(value), isFunc = tag == funcTag$2 || tag == genTag$1;
    if (isBuffer$2(value)) {
      return cloneBuffer$1(value, isDeep);
    }
    if (tag == objectTag$4 || tag == argsTag$3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject$1(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack$1());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys$1 : isFlat ? keysIn$1 : keys$1;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach$1(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue$1(result, key2, baseClone$1(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
Object.defineProperty(mergeClasses$1, "__esModule", {
  value: true
});
mergeClasses$1.mergeClasses = void 0;
var _forOwn2$1 = forOwn_1;
var _forOwn3$1 = _interopRequireDefault$6(_forOwn2$1);
var _cloneDeep2 = cloneDeep_1;
var _cloneDeep3 = _interopRequireDefault$6(_cloneDeep2);
var _extends$e = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault$6(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var mergeClasses = mergeClasses$1.mergeClasses = function mergeClasses2(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var styles2 = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function(name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3$1.default)(toMerge, function(value, key) {
        if (!styles2[key]) {
          styles2[key] = {};
        }
        styles2[key] = _extends$e({}, styles2[key], toMerge[key]);
      });
    }
    return name;
  });
  return styles2;
};
mergeClasses$1.default = mergeClasses;
var autoprefix$1 = {};
Object.defineProperty(autoprefix$1, "__esModule", {
  value: true
});
autoprefix$1.autoprefix = void 0;
var _forOwn2 = forOwn_1;
var _forOwn3 = _interopRequireDefault$5(_forOwn2);
var _extends$d = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function _interopRequireDefault$5(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },
  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },
  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },
  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(" ");
    return {
      position: "absolute",
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      "extend": name
    };
  }
};
var autoprefix = autoprefix$1.autoprefix = function autoprefix2(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function(styles2, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles2, function(value, key) {
      var transform2 = transforms[key];
      if (transform2) {
        expanded = _extends$d({}, expanded, transform2(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};
autoprefix$1.default = autoprefix;
var hover$1 = {};
Object.defineProperty(hover$1, "__esModule", {
  value: true
});
hover$1.hover = void 0;
var _extends$c = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$3 = window["React"];
var _react2$3 = _interopRequireDefault$4(_react$3);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$9(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var hover = hover$1.hover = function hover2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$9(Hover, _React$Component);
    function Hover() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$9(this, Hover);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$9(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        hover: false
      }, _this.handleMouseOver = function() {
        return _this.setState({
          hover: true
        });
      }, _this.handleMouseOut = function() {
        return _this.setState({
          hover: false
        });
      }, _this.render = function() {
        return _react2$3.default.createElement(Span, {
          onMouseOver: _this.handleMouseOver,
          onMouseOut: _this.handleMouseOut
        }, _react2$3.default.createElement(Component2, _extends$c({}, _this.props, _this.state)));
      }, _temp), _possibleConstructorReturn$9(_this, _ret);
    }
    return Hover;
  }(_react2$3.default.Component);
};
hover$1.default = hover;
var active$1 = {};
Object.defineProperty(active$1, "__esModule", {
  value: true
});
active$1.active = void 0;
var _extends$b = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$2 = window["React"];
var _react2$2 = _interopRequireDefault$3(_react$2);
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$8(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var active = active$1.active = function active2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$8(Active, _React$Component);
    function Active() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$8(this, Active);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        active: false
      }, _this.handleMouseDown = function() {
        return _this.setState({
          active: true
        });
      }, _this.handleMouseUp = function() {
        return _this.setState({
          active: false
        });
      }, _this.render = function() {
        return _react2$2.default.createElement(Span, {
          onMouseDown: _this.handleMouseDown,
          onMouseUp: _this.handleMouseUp
        }, _react2$2.default.createElement(Component2, _extends$b({}, _this.props, _this.state)));
      }, _temp), _possibleConstructorReturn$8(_this, _ret);
    }
    return Active;
  }(_react2$2.default.Component);
};
active$1.default = active;
var loop = {};
Object.defineProperty(loop, "__esModule", {
  value: true
});
var loopable = function loopable2(i, length) {
  var props = {};
  var setProp = function setProp2(name) {
    var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    props[name] = value;
  };
  i === 0 && setProp("first-child");
  i === length - 1 && setProp("last-child");
  (i === 0 || i % 2 === 0) && setProp("even");
  Math.abs(i % 2) === 1 && setProp("odd");
  setProp("nth-child", i);
  return props;
};
loop.default = loopable;
Object.defineProperty(lib, "__esModule", {
  value: true
});
lib.ReactCSS = lib.loop = lib.handleActive = handleHover = lib.handleHover = lib.hover = void 0;
var _flattenNames = flattenNames$1;
var _flattenNames2 = _interopRequireDefault$2(_flattenNames);
var _mergeClasses = mergeClasses$1;
var _mergeClasses2 = _interopRequireDefault$2(_mergeClasses);
var _autoprefix = autoprefix$1;
var _autoprefix2 = _interopRequireDefault$2(_autoprefix);
var _hover2 = hover$1;
var _hover3 = _interopRequireDefault$2(_hover2);
var _active = active$1;
var _active2 = _interopRequireDefault$2(_active);
var _loop2 = loop;
var _loop3 = _interopRequireDefault$2(_loop2);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
lib.hover = _hover3.default;
var handleHover = lib.handleHover = _hover3.default;
lib.handleActive = _active2.default;
lib.loop = _loop3.default;
var ReactCSS = lib.ReactCSS = function ReactCSS2(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }
  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};
var _default$2 = lib.default = ReactCSS;
var calculateChange$2 = function calculateChange(e, hsl, direction, initialA, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === "vertical") {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }
    if (hsl.a !== a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a,
        source: "rgb"
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }
    if (initialA !== _a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: _a,
        source: "rgb"
      };
    }
  }
  return null;
};
var checkboardCache = {};
var render = function render2(c1, c2, size, serverCanvas) {
  if (typeof document === "undefined" && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement("canvas");
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};
var get$1 = function get(c1, c2, size, serverCanvas) {
  var key = c1 + "-" + c2 + "-" + size + (serverCanvas ? "-server" : "");
  if (checkboardCache[key]) {
    return checkboardCache[key];
  }
  var checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};
var _extends$a = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const React$J = window["React"];
const isValidElement = window["React"].isValidElement;
var Checkboard = function Checkboard2(_ref) {
  var white = _ref.white, grey = _ref.grey, size = _ref.size, renderers = _ref.renderers, borderRadius2 = _ref.borderRadius, boxShadow2 = _ref.boxShadow, children = _ref.children;
  var styles2 = _default$2({
    "default": {
      grid: {
        borderRadius: borderRadius2,
        boxShadow: boxShadow2,
        absolute: "0px 0px 0px 0px",
        background: "url(" + get$1(white, grey, size, renderers.canvas) + ") center left"
      }
    }
  });
  return isValidElement(children) ? React$J.cloneElement(children, _extends$a({}, children.props, {
    style: _extends$a({}, children.props.style, styles2.grid)
  })) : /* @__PURE__ */ jsx("div", {
    style: styles2.grid
  });
};
Checkboard.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
var _extends$9 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$7 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$7(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const React$I = window["React"];
const Component$4 = window["React"].Component;
const PureComponent$4 = window["React"].PureComponent;
var Alpha = function(_ref) {
  _inherits$7(Alpha2, _ref);
  function Alpha2() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$7(this, Alpha2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$7(this, (_ref2 = Alpha2.__proto__ || Object.getPrototypeOf(Alpha2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
      var change = calculateChange$2(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
      change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      window.addEventListener("mousemove", _this.handleChange);
      window.addEventListener("mouseup", _this.handleMouseUp);
    }, _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function() {
      window.removeEventListener("mousemove", _this.handleChange);
      window.removeEventListener("mouseup", _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn$7(_this, _ret);
  }
  _createClass$7(Alpha2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var rgb = this.props.rgb;
      var styles2 = _default$2({
        "default": {
          alpha: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: "0px 0px 0px 0px",
            overflow: "hidden",
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: "0px 0px 0px 0px",
            background: "linear-gradient(to right, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: "relative",
            height: "100%",
            margin: "0 3px"
          },
          pointer: {
            position: "absolute",
            left: rgb.a * 100 + "%"
          },
          slider: {
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            marginTop: "1px",
            transform: "translateX(-2px)"
          }
        },
        "vertical": {
          gradient: {
            background: "linear-gradient(to bottom, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)"
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + "%"
          }
        },
        "overwrite": _extends$9({}, this.props.style)
      }, {
        vertical: this.props.direction === "vertical",
        overwrite: true
      });
      return /* @__PURE__ */ jsxs("div", {
        style: styles2.alpha,
        children: [/* @__PURE__ */ jsx("div", {
          style: styles2.checkboard,
          children: /* @__PURE__ */ jsx(Checkboard, {
            renderers: this.props.renderers
          })
        }), /* @__PURE__ */ jsx("div", {
          style: styles2.gradient
        }), /* @__PURE__ */ jsx("div", {
          style: styles2.container,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: /* @__PURE__ */ jsx("div", {
            style: styles2.pointer,
            children: this.props.pointer ? React$I.createElement(this.props.pointer, this.props) : /* @__PURE__ */ jsx("div", {
              style: styles2.slider
            })
          })
        })]
      });
    }
  }]);
  return Alpha2;
}(PureComponent$4 || Component$4);
var _createClass$6 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _defineProperty(obj, key, value) {
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
function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$6(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const Component$3 = window["React"].Component;
const PureComponent$3 = window["React"].PureComponent;
var DEFAULT_ARROW_OFFSET = 1;
var UP_KEY_CODE = 38;
var DOWN_KEY_CODE = 40;
var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
var isValidKeyCode = function isValidKeyCode2(keyCode) {
  return VALID_KEY_CODES.indexOf(keyCode) > -1;
};
var getNumberValue = function getNumberValue2(value) {
  return Number(String(value).replace(/%/g, ""));
};
var idCounter = 1;
var EditableInput = function(_ref) {
  _inherits$6(EditableInput2, _ref);
  function EditableInput2(props) {
    _classCallCheck$6(this, EditableInput2);
    var _this = _possibleConstructorReturn$6(this, (EditableInput2.__proto__ || Object.getPrototypeOf(EditableInput2)).call(this));
    _this.handleBlur = function() {
      if (_this.state.blurValue) {
        _this.setState({
          value: _this.state.blurValue,
          blurValue: null
        });
      }
    };
    _this.handleChange = function(e) {
      _this.setUpdatedValue(e.target.value, e);
    };
    _this.handleKeyDown = function(e) {
      var value = getNumberValue(e.target.value);
      if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
        var offset = _this.getArrowOffset();
        var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;
        _this.setUpdatedValue(updatedValue, e);
      }
    };
    _this.handleDrag = function(e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
        }
      }
    };
    _this.handleMouseDown = function(e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener("mousemove", _this.handleDrag);
        window.addEventListener("mouseup", _this.handleMouseUp);
      }
    };
    _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    };
    _this.unbindEventListeners = function() {
      window.removeEventListener("mousemove", _this.handleDrag);
      window.removeEventListener("mouseup", _this.handleMouseUp);
    };
    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };
    _this.inputId = "rc-editable-input-" + idCounter++;
    return _this;
  }
  _createClass$6(EditableInput2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({
            blurValue: String(this.props.value).toUpperCase()
          });
        } else {
          this.setState({
            value: String(this.props.value).toUpperCase(),
            blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "getValueObjectWithLabel",
    value: function getValueObjectWithLabel(value) {
      return _defineProperty({}, this.props.label, value);
    }
  }, {
    key: "getArrowOffset",
    value: function getArrowOffset() {
      return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
    }
  }, {
    key: "setUpdatedValue",
    value: function setUpdatedValue(value, e) {
      var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
      this.props.onChange && this.props.onChange(onChangeValue, e);
      this.setState({
        value
      });
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var styles2 = _default$2({
        "default": {
          wrap: {
            position: "relative"
          }
        },
        "user-override": {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        "dragLabel-true": {
          label: {
            cursor: "ew-resize"
          }
        }
      }, {
        "user-override": true
      }, this.props);
      return /* @__PURE__ */ jsxs("div", {
        style: styles2.wrap,
        children: [/* @__PURE__ */ jsx("input", {
          id: this.inputId,
          style: styles2.input,
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: "false"
        }), this.props.label && !this.props.hideLabel ? /* @__PURE__ */ jsx("label", {
          htmlFor: this.inputId,
          style: styles2.label,
          onMouseDown: this.handleMouseDown,
          children: this.props.label
        }) : null]
      });
    }
  }]);
  return EditableInput2;
}(PureComponent$3 || Component$3);
var calculateChange$1 = function calculateChange2(e, direction, hsl, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (direction === "vertical") {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }
    if (hsl.h !== h) {
      return {
        h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: "hsl"
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }
    if (hsl.h !== _h) {
      return {
        h: _h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: "hsl"
      };
    }
  }
  return null;
};
var _createClass$5 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$5(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const React$H = window["React"];
const Component$2 = window["React"].Component;
const PureComponent$2 = window["React"].PureComponent;
var Hue = function(_ref) {
  _inherits$5(Hue2, _ref);
  function Hue2() {
    var _ref2;
    var _temp, _this, _ret;
    _classCallCheck$5(this, Hue2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, (_ref2 = Hue2.__proto__ || Object.getPrototypeOf(Hue2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
      var change = calculateChange$1(e, _this.props.direction, _this.props.hsl, _this.container);
      change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      window.addEventListener("mousemove", _this.handleChange);
      window.addEventListener("mouseup", _this.handleMouseUp);
    }, _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }
  _createClass$5(Hue2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: "unbindEventListeners",
    value: function unbindEventListeners() {
      window.removeEventListener("mousemove", this.handleChange);
      window.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var _props$direction = this.props.direction, direction = _props$direction === void 0 ? "horizontal" : _props$direction;
      var styles2 = _default$2({
        "default": {
          hue: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: "0 2px",
            position: "relative",
            height: "100%",
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            left: this.props.hsl.h * 100 / 360 + "%"
          },
          slider: {
            marginTop: "1px",
            width: "4px",
            borderRadius: "1px",
            height: "8px",
            boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
            background: "#fff",
            transform: "translateX(-2px)"
          }
        },
        "vertical": {
          pointer: {
            left: "0px",
            top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
          }
        }
      }, {
        vertical: direction === "vertical"
      });
      return /* @__PURE__ */ jsx("div", {
        style: styles2.hue,
        children: /* @__PURE__ */ jsxs("div", {
          className: "hue-" + direction,
          style: styles2.container,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange,
          children: [/* @__PURE__ */ jsx("style", {
            children: ".hue-horizontal { background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); } .hue-vertical { background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%); }"
          }), /* @__PURE__ */ jsx("div", {
            style: styles2.pointer,
            children: this.props.pointer ? React$H.createElement(this.props.pointer, this.props) : /* @__PURE__ */ jsx("div", {
              style: styles2.slider
            })
          })]
        })
      });
    }
  }]);
  return Hue2;
}(PureComponent$2 || Component$2);
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal$1 || freeSelf || Function("return this")();
var root$1 = root;
var Symbol$1 = root$1.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$1["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$c = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var Map = getNative(root$1, "Map");
var Map$1 = Map;
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$9.call(data, key) ? data[key] : void 0;
}
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$8.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty$1 = defineProperty;
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var baseFor$1 = baseFor;
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$1.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var Uint8Array2 = root$1.Uint8Array;
var Uint8Array$1 = Uint8Array2;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function copyArray(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function overArg(func, transform2) {
  return function(arg) {
    return func(transform2(arg));
  };
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var objectProto$9 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$9;
  return value === proto;
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$8.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
var isArray = Array.isArray;
var isArray$1 = isArray;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function stubFalse() {
  return false;
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var Buffer2 = moduleExports$1 ? root$1.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$7 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$6.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var freeProcess = moduleExports && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule && freeModule.require && freeModule.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function baseTimes(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$1(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray$1(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$1(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor$1(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
function identity(value) {
  return value;
}
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var nativeMax$1 = Math.max;
function overRest(func, start, transform2) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform2(array);
    return apply(func, this, otherArgs);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function baseRest(func, start) {
  return setToString$1(overRest(func, start, identity), func + "");
}
function isIterateeCall(value, index2, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index2 = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer);
      }
    }
    return object;
  });
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge$1 = merge;
const React$G = window["React"];
var Raised = function Raised2(_ref) {
  var zDepth = _ref.zDepth, radius = _ref.radius, background = _ref.background, children = _ref.children, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles;
  var styles2 = _default$2(merge$1({
    "default": {
      wrap: {
        position: "relative",
        display: "inline-block"
      },
      content: {
        position: "relative"
      },
      bg: {
        absolute: "0px 0px 0px 0px",
        boxShadow: "0 " + zDepth + "px " + zDepth * 4 + "px rgba(0,0,0,.24)",
        borderRadius: radius,
        background
      }
    },
    "zDepth-0": {
      bg: {
        boxShadow: "none"
      }
    },
    "zDepth-1": {
      bg: {
        boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
      }
    },
    "zDepth-2": {
      bg: {
        boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
      }
    },
    "zDepth-3": {
      bg: {
        boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
      }
    },
    "zDepth-4": {
      bg: {
        boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
      }
    },
    "zDepth-5": {
      bg: {
        boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
      }
    },
    "square": {
      bg: {
        borderRadius: "0"
      }
    },
    "circle": {
      bg: {
        borderRadius: "50%"
      }
    }
  }, passedStyles), {
    "zDepth-1": zDepth === 1
  });
  return React$G.createElement("div", {
    style: styles2.wrap
  }, React$G.createElement("div", {
    style: styles2.bg
  }), React$G.createElement("div", {
    style: styles2.content
  }, children));
};
Raised.propTypes = {
  background: PropTypes.string,
  zDepth: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  radius: PropTypes.number,
  styles: PropTypes.object
};
Raised.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
};
var now = function() {
  return root$1.Date.now();
};
var now$1 = now;
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index2 = string.length;
  while (index2-- && reWhitespace.test(string.charAt(index2))) {
  }
  return index2;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var symbolTag$1 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$1;
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var FUNC_ERROR_TEXT$2 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$1());
  }
  function debounced() {
    var time = now$1(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var FUNC_ERROR_TEXT$1 = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var calculateChange3 = function calculateChange4(e, hsl, container) {
  var _container$getBoundin = container.getBoundingClientRect(), containerWidth = _container$getBoundin.width, containerHeight = _container$getBoundin.height;
  var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }
  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }
  var saturation = left / containerWidth;
  var bright = 1 - top / containerHeight;
  return {
    h: hsl.h,
    s: saturation,
    v: bright,
    a: hsl.a,
    source: "hsv"
  };
};
var _createClass$4 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$4(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const React$F = window["React"];
const Component$1 = window["React"].Component;
const PureComponent$1 = window["React"].PureComponent;
var Saturation = function(_ref) {
  _inherits$4(Saturation2, _ref);
  function Saturation2(props) {
    _classCallCheck$4(this, Saturation2);
    var _this = _possibleConstructorReturn$4(this, (Saturation2.__proto__ || Object.getPrototypeOf(Saturation2)).call(this, props));
    _this.handleChange = function(e) {
      typeof _this.props.onChange === "function" && _this.throttle(_this.props.onChange, calculateChange3(e, _this.props.hsl, _this.container), e);
    };
    _this.handleMouseDown = function(e) {
      _this.handleChange(e);
      var renderWindow = _this.getContainerRenderWindow();
      renderWindow.addEventListener("mousemove", _this.handleChange);
      renderWindow.addEventListener("mouseup", _this.handleMouseUp);
    };
    _this.handleMouseUp = function() {
      _this.unbindEventListeners();
    };
    _this.throttle = throttle(function(fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }
  _createClass$4(Saturation2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: "getContainerRenderWindow",
    value: function getContainerRenderWindow() {
      var container = this.container;
      var renderWindow = window;
      while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
        renderWindow = renderWindow.parent;
      }
      return renderWindow;
    }
  }, {
    key: "unbindEventListeners",
    value: function unbindEventListeners() {
      var renderWindow = this.getContainerRenderWindow();
      renderWindow.removeEventListener("mousemove", this.handleChange);
      renderWindow.removeEventListener("mouseup", this.handleMouseUp);
    }
  }, {
    key: "render",
    value: function render3() {
      var _this2 = this;
      var _ref2 = this.props.style || {}, color2 = _ref2.color, white = _ref2.white, black = _ref2.black, pointer = _ref2.pointer, circle = _ref2.circle;
      var styles2 = _default$2({
        "default": {
          color: {
            absolute: "0px 0px 0px 0px",
            background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
            borderRadius: this.props.radius
          },
          white: {
            absolute: "0px 0px 0px 0px",
            borderRadius: this.props.radius
          },
          black: {
            absolute: "0px 0px 0px 0px",
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: "absolute",
            top: -(this.props.hsv.v * 100) + 100 + "%",
            left: this.props.hsv.s * 100 + "%",
            cursor: "default"
          },
          circle: {
            width: "4px",
            height: "4px",
            boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
            borderRadius: "50%",
            cursor: "hand",
            transform: "translate(-2px, -2px)"
          }
        },
        "custom": {
          color: color2,
          white,
          black,
          pointer,
          circle
        }
      }, {
        "custom": !!this.props.style
      });
      return /* @__PURE__ */ jsxs("div", {
        style: styles2.color,
        ref: function ref(container) {
          return _this2.container = container;
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange,
        children: [/* @__PURE__ */ jsx("style", {
          children: ".saturation-white { background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0)); background: linear-gradient(to right, #fff, rgba(255,255,255,0)); } .saturation-black { background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0)); background: linear-gradient(to top, #000, rgba(0,0,0,0)); }"
        }), /* @__PURE__ */ jsxs("div", {
          style: styles2.white,
          className: "saturation-white",
          children: [/* @__PURE__ */ jsx("div", {
            style: styles2.black,
            className: "saturation-black"
          }), /* @__PURE__ */ jsx("div", {
            style: styles2.pointer,
            children: this.props.pointer ? React$F.createElement(this.props.pointer, this.props) : /* @__PURE__ */ jsx("div", {
              style: styles2.circle
            })
          })]
        })]
      });
    }
  }]);
  return Saturation2;
}(PureComponent$1 || Component$1);
function arrayEach(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function baseForOwn(object, iteratee) {
  return object && baseFor$1(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index2 = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index2-- : ++index2 < length) {
      if (iteratee(iterable[index2], index2, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
var baseEach$1 = baseEach;
function castFunction(value) {
  return typeof value == "function" ? value : identity;
}
function forEach(collection, iteratee) {
  var func = isArray$1(collection) ? arrayEach : baseEach$1;
  return func(collection, castFunction(iteratee));
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color2, opts) {
  color2 = color2 ? color2 : "";
  opts = opts || {};
  if (color2 instanceof tinycolor) {
    return color2;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color2, opts);
  }
  var rgb = inputToRGB(color2);
  this._originalInput = color2, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1)
    this._r = Math.round(this._r);
  if (this._g < 1)
    this._g = Math.round(this._g);
  if (this._b < 1)
    this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R, G, B;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928)
      R = RsRGB / 12.92;
    else
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928)
      G = GsRGB / 12.92;
    else
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928)
      B = BsRGB / 12.92;
    else
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn, args) {
    var color2 = fn.apply(null, [this].concat([].slice.call(args)));
    this._r = color2._r;
    this._g = color2._g;
    this._b = color2._b;
    this.setAlpha(color2._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn, args) {
    return fn.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color2, opts) {
  if (_typeof(color2) == "object") {
    var newColor = {};
    for (var i in color2) {
      if (color2.hasOwnProperty(i)) {
        if (i === "a") {
          newColor[i] = color2[i];
        } else {
          newColor[i] = convertToPercentage(color2[i]);
        }
      }
    }
    color2 = newColor;
  }
  return tinycolor(color2, opts);
};
function inputToRGB(color2) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color2 == "string") {
    color2 = stringInputToObject(color2);
  }
  if (_typeof(color2) == "object") {
    if (isValidCSSUnit(color2.r) && isValidCSSUnit(color2.g) && isValidCSSUnit(color2.b)) {
      rgb = rgbToRgb(color2.r, color2.g, color2.b);
      ok = true;
      format = String(color2.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.v)) {
      s = convertToPercentage(color2.s);
      v = convertToPercentage(color2.v);
      rgb = hsvToRgb(color2.h, s, v);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color2.h) && isValidCSSUnit(color2.s) && isValidCSSUnit(color2.l)) {
      s = convertToPercentage(color2.s);
      l = convertToPercentage(color2.l);
      rgb = hslToRgb(color2.h, s, l);
      ok = true;
      format = "hsl";
    }
    if (color2.hasOwnProperty("a")) {
      a = color2.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color2.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function rgbToHsl(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;
  if (max == min) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    l
  };
}
function hslToRgb(h, s, l) {
  var r, g, b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  function hue2rgb(p2, q2, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p2 + (q2 - p2) * 6 * t;
    if (t < 1 / 2)
      return q2;
    if (t < 2 / 3)
      return p2 + (q2 - p2) * (2 / 3 - t) * 6;
    return p2;
  }
  if (s === 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, v = max;
  var d = max - min;
  s = max === 0 ? 0 : d / max;
  if (max == min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s,
    v
  };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function rgbaToArgbHex(r, g, b, a) {
  var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
  return hex.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2)
    return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color2).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color2).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color2) {
  return tinycolor(color2).desaturate(100);
}
function _lighten(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color2).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color2).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color2, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color2).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _spin(color2, amount) {
  var hsl = tinycolor(color2).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}
function _complement(color2) {
  var hsl = tinycolor(color2).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color2, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color2).toHsl();
  var result = [tinycolor(color2)];
  var step = 360 / number;
  for (var i = 1; i < number; i++) {
    result.push(tinycolor({
      h: (hsl.h + i * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color2) {
  var hsl = tinycolor(color2).toHsl();
  var h = hsl.h;
  return [tinycolor(color2), tinycolor({
    h: (h + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color2, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color2).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color2)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color2, results) {
  results = results || 6;
  var hsv = tinycolor(color2).toHsv();
  var h = hsv.h, s = hsv.s, v = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h,
      s,
      v
    }));
    v = (v + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
    a: (rgb2.a - rgb1.a) * p + rgb1.a
  };
  return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i = 0; i < colorList.length; i++) {
    readability = tinycolor.readability(baseColor, colorList[i]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip(names);
function flip(o) {
  var flipped = {};
  for (var i in o) {
    if (o.hasOwnProperty(i)) {
      flipped[o[i]] = i;
    }
  }
  return flipped;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function bound01(n, max) {
  if (isOnePointZero(n))
    n = "100%";
  var processPercent = isPercentage(n);
  n = Math.min(max, Math.max(0, parseFloat(n)));
  if (processPercent) {
    n = parseInt(n * max, 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  return n % max / parseFloat(max);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n) {
  return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") != -1;
}
function pad2(c) {
  return c.length == 1 ? "0" + c : "" + c;
}
function convertToPercentage(n) {
  if (n <= 1) {
    n = n * 100 + "%";
  }
  return n;
}
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
var matchers = function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
}();
function isValidCSSUnit(color2) {
  return !!matchers.CSS_UNIT.exec(color2);
}
function stringInputToObject(color2) {
  color2 = color2.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color2]) {
    color2 = names[color2];
    named = true;
  } else if (color2 == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color2)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color2)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color2)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color2)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color2)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color2)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color2)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level,
    size
  };
}
var simpleCheckForValidColor = function simpleCheckForValidColor2(data) {
  var keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
  var checked = 0;
  var passed = 0;
  forEach(keysToCheck, function(letter) {
    if (data[letter]) {
      checked += 1;
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === "s" || letter === "l") {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};
var toState = function toState2(data, oldHue) {
  var color2 = data.hex ? tinycolor(data.hex) : tinycolor(data);
  var hsl = color2.toHsl();
  var hsv = color2.toHsv();
  var rgb = color2.toRgb();
  var hex = color2.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === "000000" && rgb.a === 0;
  return {
    hsl,
    hex: transparent ? "transparent" : "#" + hex,
    rgb,
    hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};
var isValidHex = function isValidHex2(hex) {
  if (hex === "transparent") {
    return true;
  }
  var lh = String(hex).charAt(0) === "#" ? 1 : 0;
  return hex.length !== 4 + lh && hex.length < 7 + lh && tinycolor(hex).isValid();
};
var getContrastingColor = function getContrastingColor2(data) {
  if (!data) {
    return "#fff";
  }
  var col = toState(data);
  if (col.hex === "transparent") {
    return "rgba(0,0,0,0.4)";
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1e3;
  return yiq >= 128 ? "#000" : "#fff";
};
var isvalidColorString = function isvalidColorString2(string, type) {
  var stringWithoutDegree = string.replace("\xB0", "");
  return tinycolor(type + " (" + stringWithoutDegree + ")")._ok;
};
var _extends$8 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$3 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$3(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const Component = window["React"].Component;
const PureComponent = window["React"].PureComponent;
var ColorWrap = function ColorWrap2(Picker) {
  var ColorPicker = function(_ref) {
    _inherits$3(ColorPicker2, _ref);
    function ColorPicker2(props) {
      _classCallCheck$3(this, ColorPicker2);
      var _this = _possibleConstructorReturn$3(this, (ColorPicker2.__proto__ || Object.getPrototypeOf(ColorPicker2)).call(this));
      _this.handleChange = function(data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };
      _this.handleSwatchHover = function(data, event) {
        var isValidColor = simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = toState(data, data.h || _this.state.oldHue);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };
      _this.state = _extends$8({}, toState(props.color, 0));
      _this.debounce = debounce(function(fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }
    _createClass$3(ColorPicker2, [{
      key: "render",
      value: function render3() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }
        return /* @__PURE__ */ jsx(Picker, __spreadValues(__spreadProps(__spreadValues(__spreadValues({}, this.props), this.state), {
          onChange: this.handleChange
        }), optionalEvents));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, state) {
        return _extends$8({}, toState(nextProps.color, state.oldHue));
      }
    }]);
    return ColorPicker2;
  }(PureComponent || Component);
  ColorPicker.propTypes = _extends$8({}, Picker.propTypes);
  ColorPicker.defaultProps = _extends$8({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.5,
      l: 0.2,
      a: 1
    }
  });
  return ColorPicker;
};
var ColorWrap$1 = ColorWrap;
var _extends$7 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createClass$2 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$2(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const React$E = window["React"];
var handleFocus = function handleFocus2(Component2) {
  var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return function(_React$Component) {
    _inherits$2(Focus, _React$Component);
    function Focus() {
      var _ref;
      var _temp, _this, _ret;
      _classCallCheck$2(this, Focus);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        focus: false
      }, _this.handleFocus = function() {
        return _this.setState({
          focus: true
        });
      }, _this.handleBlur = function() {
        return _this.setState({
          focus: false
        });
      }, _temp), _possibleConstructorReturn$2(_this, _ret);
    }
    _createClass$2(Focus, [{
      key: "render",
      value: function render3() {
        return React$E.createElement(Span, {
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }, React$E.createElement(Component2, _extends$7({}, this.props, this.state)));
      }
    }]);
    return Focus;
  }(React$E.Component);
};
var _extends$6 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const React$D = window["React"];
var ENTER = 13;
var Swatch = function Swatch2(_ref) {
  var color2 = _ref.color, style = _ref.style, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onHover = _ref.onHover, _ref$title = _ref.title, title = _ref$title === void 0 ? color2 : _ref$title, children = _ref.children, focus = _ref.focus, _ref$focusStyle = _ref.focusStyle, focusStyle = _ref$focusStyle === void 0 ? {} : _ref$focusStyle;
  var transparent = color2 === "transparent";
  var styles2 = _default$2({
    default: {
      swatch: _extends$6({
        background: color2,
        height: "100%",
        width: "100%",
        cursor: "pointer",
        position: "relative",
        outline: "none"
      }, style, focus ? focusStyle : {})
    }
  });
  var handleClick = function handleClick2(e) {
    return onClick(color2, e);
  };
  var handleKeyDown = function handleKeyDown2(e) {
    return e.keyCode === ENTER && onClick(color2, e);
  };
  var handleHover2 = function handleHover3(e) {
    return onHover(color2, e);
  };
  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover2;
  }
  return React$D.createElement("div", _extends$6({
    style: styles2.swatch,
    onClick: handleClick,
    title,
    tabIndex: 0,
    onKeyDown: handleKeyDown
  }, optionalEvents), children, transparent && React$D.createElement(Checkboard, {
    borderRadius: styles2.swatch.borderRadius,
    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
  }));
};
var Swatch$1 = handleFocus(Swatch);
const React$C = window["React"];
var AlphaPointer = function AlphaPointer2(_ref) {
  var direction = _ref.direction;
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    "vertical": {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: direction === "vertical"
  });
  return React$C.createElement("div", {
    style: styles2.picker
  });
};
var _extends$5 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const React$B = window["React"];
var AlphaPicker = function AlphaPicker2(_ref) {
  var rgb = _ref.rgb, hsl = _ref.hsl, width = _ref.width, height = _ref.height, onChange = _ref.onChange, direction = _ref.direction, style = _ref.style, renderers = _ref.renderers, pointer = _ref.pointer, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2({
    "default": {
      picker: {
        position: "relative",
        width,
        height
      },
      alpha: {
        radius: "2px",
        style
      }
    }
  });
  return React$B.createElement("div", {
    style: styles2.picker,
    className: "alpha-picker " + className
  }, React$B.createElement(Alpha, _extends$5({}, styles2.alpha, {
    rgb,
    hsl,
    pointer,
    renderers,
    onChange,
    direction
  })));
};
AlphaPicker.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: AlphaPointer
};
ColorWrap$1(AlphaPicker);
function arrayMap(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array[index2], index2, array);
  }
  return result;
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index2 < arrLength) {
    var arrValue = array[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array, stack) : customizer(arrValue, othValue, index2, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
function setToArray(set) {
  var index2 = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
function arrayPush(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
}
function arrayFilter(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols$1);
}
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var DataView = getNative(root$1, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$1, "Promise");
var Promise$2 = Promise$1;
var Set = getNative(root$1, "Set");
var Set$1 = Set;
var WeakMap = getNative(root$1, "WeakMap");
var WeakMap$1 = WeakMap;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag$1(object), othTag = othIsArr ? arrayTag : getTag$1(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer$1(object)) {
    if (!isBuffer$1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
var INFINITY$1 = 1 / 0;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$1(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
function toString2(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$1(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString2(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index2 = 0, length = path.length;
  while (object != null && index2 < length) {
    object = object[toKey(path[index2++])];
  }
  return index2 && index2 == length ? object : void 0;
}
function get2(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey(path[index2]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray$1(object) || isArguments$1(object));
}
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get2(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function baseMap(collection, iteratee) {
  var index2 = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach$1(collection, function(value, key, collection2) {
    result[++index2] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray$1(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
const React$A = window["React"];
var BlockSwatches = function BlockSwatches2(_ref) {
  var colors = _ref.colors, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
  var styles2 = _default$2({
    "default": {
      swatches: {
        marginRight: "-10px"
      },
      swatch: {
        width: "22px",
        height: "22px",
        float: "left",
        marginRight: "10px",
        marginBottom: "10px",
        borderRadius: "4px"
      },
      clear: {
        clear: "both"
      }
    }
  });
  return React$A.createElement("div", {
    style: styles2.swatches
  }, map(colors, function(c) {
    return React$A.createElement(Swatch$1, {
      key: c,
      color: c,
      style: styles2.swatch,
      onClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + c
      }
    });
  }), React$A.createElement("div", {
    style: styles2.clear
  }));
};
const React$z = window["React"];
var Block = function Block2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var transparent = hex === "transparent";
  var handleChange = function handleChange2(hexCode, e) {
    isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: "hex"
    }, e);
  };
  var styles2 = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        boxShadow: "0 1px rgba(0,0,0,.1)",
        borderRadius: "6px",
        position: "relative"
      },
      head: {
        height: "110px",
        background: hex,
        borderRadius: "6px 6px 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      },
      body: {
        padding: "10px"
      },
      label: {
        fontSize: "18px",
        color: getContrastingColor(hex),
        position: "relative"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 10px 10px 10px",
        borderColor: "transparent transparent " + hex + " transparent",
        position: "absolute",
        top: "-10px",
        left: "50%",
        marginLeft: "-10px"
      },
      input: {
        width: "100%",
        fontSize: "12px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "22px",
        boxShadow: "inset 0 0 0 1px #ddd",
        borderRadius: "4px",
        padding: "0 7px",
        boxSizing: "border-box"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      }
    }
  }, passedStyles), {
    "hide-triangle": triangle === "hide"
  });
  return React$z.createElement("div", {
    style: styles2.card,
    className: "block-picker " + className
  }, React$z.createElement("div", {
    style: styles2.triangle
  }), React$z.createElement("div", {
    style: styles2.head
  }, transparent && React$z.createElement(Checkboard, {
    borderRadius: "6px 6px 0 0"
  }), React$z.createElement("div", {
    style: styles2.label
  }, hex)), React$z.createElement("div", {
    style: styles2.body
  }, React$z.createElement(BlockSwatches, {
    colors,
    onClick: handleChange,
    onSwatchHover
  }), React$z.createElement(EditableInput, {
    style: {
      input: styles2.input
    },
    value: hex,
    onChange: handleChange
  })));
};
Block.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(["top", "hide"]),
  styles: PropTypes.object
};
Block.defaultProps = {
  width: 170,
  colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
  triangle: "top",
  styles: {}
};
ColorWrap$1(Block);
var red = {
  "50": "#ffebee",
  "100": "#ffcdd2",
  "200": "#ef9a9a",
  "300": "#e57373",
  "400": "#ef5350",
  "500": "#f44336",
  "600": "#e53935",
  "700": "#d32f2f",
  "800": "#c62828",
  "900": "#b71c1c",
  "a100": "#ff8a80",
  "a200": "#ff5252",
  "a400": "#ff1744",
  "a700": "#d50000"
};
var pink = {
  "50": "#fce4ec",
  "100": "#f8bbd0",
  "200": "#f48fb1",
  "300": "#f06292",
  "400": "#ec407a",
  "500": "#e91e63",
  "600": "#d81b60",
  "700": "#c2185b",
  "800": "#ad1457",
  "900": "#880e4f",
  "a100": "#ff80ab",
  "a200": "#ff4081",
  "a400": "#f50057",
  "a700": "#c51162"
};
var purple = {
  "50": "#f3e5f5",
  "100": "#e1bee7",
  "200": "#ce93d8",
  "300": "#ba68c8",
  "400": "#ab47bc",
  "500": "#9c27b0",
  "600": "#8e24aa",
  "700": "#7b1fa2",
  "800": "#6a1b9a",
  "900": "#4a148c",
  "a100": "#ea80fc",
  "a200": "#e040fb",
  "a400": "#d500f9",
  "a700": "#aa00ff"
};
var deepPurple = {
  "50": "#ede7f6",
  "100": "#d1c4e9",
  "200": "#b39ddb",
  "300": "#9575cd",
  "400": "#7e57c2",
  "500": "#673ab7",
  "600": "#5e35b1",
  "700": "#512da8",
  "800": "#4527a0",
  "900": "#311b92",
  "a100": "#b388ff",
  "a200": "#7c4dff",
  "a400": "#651fff",
  "a700": "#6200ea"
};
var indigo = {
  "50": "#e8eaf6",
  "100": "#c5cae9",
  "200": "#9fa8da",
  "300": "#7986cb",
  "400": "#5c6bc0",
  "500": "#3f51b5",
  "600": "#3949ab",
  "700": "#303f9f",
  "800": "#283593",
  "900": "#1a237e",
  "a100": "#8c9eff",
  "a200": "#536dfe",
  "a400": "#3d5afe",
  "a700": "#304ffe"
};
var blue = {
  "50": "#e3f2fd",
  "100": "#bbdefb",
  "200": "#90caf9",
  "300": "#64b5f6",
  "400": "#42a5f5",
  "500": "#2196f3",
  "600": "#1e88e5",
  "700": "#1976d2",
  "800": "#1565c0",
  "900": "#0d47a1",
  "a100": "#82b1ff",
  "a200": "#448aff",
  "a400": "#2979ff",
  "a700": "#2962ff"
};
var lightBlue = {
  "50": "#e1f5fe",
  "100": "#b3e5fc",
  "200": "#81d4fa",
  "300": "#4fc3f7",
  "400": "#29b6f6",
  "500": "#03a9f4",
  "600": "#039be5",
  "700": "#0288d1",
  "800": "#0277bd",
  "900": "#01579b",
  "a100": "#80d8ff",
  "a200": "#40c4ff",
  "a400": "#00b0ff",
  "a700": "#0091ea"
};
var cyan = {
  "50": "#e0f7fa",
  "100": "#b2ebf2",
  "200": "#80deea",
  "300": "#4dd0e1",
  "400": "#26c6da",
  "500": "#00bcd4",
  "600": "#00acc1",
  "700": "#0097a7",
  "800": "#00838f",
  "900": "#006064",
  "a100": "#84ffff",
  "a200": "#18ffff",
  "a400": "#00e5ff",
  "a700": "#00b8d4"
};
var teal = {
  "50": "#e0f2f1",
  "100": "#b2dfdb",
  "200": "#80cbc4",
  "300": "#4db6ac",
  "400": "#26a69a",
  "500": "#009688",
  "600": "#00897b",
  "700": "#00796b",
  "800": "#00695c",
  "900": "#004d40",
  "a100": "#a7ffeb",
  "a200": "#64ffda",
  "a400": "#1de9b6",
  "a700": "#00bfa5"
};
var green = {
  "50": "#e8f5e9",
  "100": "#c8e6c9",
  "200": "#a5d6a7",
  "300": "#81c784",
  "400": "#66bb6a",
  "500": "#4caf50",
  "600": "#43a047",
  "700": "#388e3c",
  "800": "#2e7d32",
  "900": "#1b5e20",
  "a100": "#b9f6ca",
  "a200": "#69f0ae",
  "a400": "#00e676",
  "a700": "#00c853"
};
var lightGreen = {
  "50": "#f1f8e9",
  "100": "#dcedc8",
  "200": "#c5e1a5",
  "300": "#aed581",
  "400": "#9ccc65",
  "500": "#8bc34a",
  "600": "#7cb342",
  "700": "#689f38",
  "800": "#558b2f",
  "900": "#33691e",
  "a100": "#ccff90",
  "a200": "#b2ff59",
  "a400": "#76ff03",
  "a700": "#64dd17"
};
var lime = {
  "50": "#f9fbe7",
  "100": "#f0f4c3",
  "200": "#e6ee9c",
  "300": "#dce775",
  "400": "#d4e157",
  "500": "#cddc39",
  "600": "#c0ca33",
  "700": "#afb42b",
  "800": "#9e9d24",
  "900": "#827717",
  "a100": "#f4ff81",
  "a200": "#eeff41",
  "a400": "#c6ff00",
  "a700": "#aeea00"
};
var yellow = {
  "50": "#fffde7",
  "100": "#fff9c4",
  "200": "#fff59d",
  "300": "#fff176",
  "400": "#ffee58",
  "500": "#ffeb3b",
  "600": "#fdd835",
  "700": "#fbc02d",
  "800": "#f9a825",
  "900": "#f57f17",
  "a100": "#ffff8d",
  "a200": "#ffff00",
  "a400": "#ffea00",
  "a700": "#ffd600"
};
var amber = {
  "50": "#fff8e1",
  "100": "#ffecb3",
  "200": "#ffe082",
  "300": "#ffd54f",
  "400": "#ffca28",
  "500": "#ffc107",
  "600": "#ffb300",
  "700": "#ffa000",
  "800": "#ff8f00",
  "900": "#ff6f00",
  "a100": "#ffe57f",
  "a200": "#ffd740",
  "a400": "#ffc400",
  "a700": "#ffab00"
};
var orange = {
  "50": "#fff3e0",
  "100": "#ffe0b2",
  "200": "#ffcc80",
  "300": "#ffb74d",
  "400": "#ffa726",
  "500": "#ff9800",
  "600": "#fb8c00",
  "700": "#f57c00",
  "800": "#ef6c00",
  "900": "#e65100",
  "a100": "#ffd180",
  "a200": "#ffab40",
  "a400": "#ff9100",
  "a700": "#ff6d00"
};
var deepOrange = {
  "50": "#fbe9e7",
  "100": "#ffccbc",
  "200": "#ffab91",
  "300": "#ff8a65",
  "400": "#ff7043",
  "500": "#ff5722",
  "600": "#f4511e",
  "700": "#e64a19",
  "800": "#d84315",
  "900": "#bf360c",
  "a100": "#ff9e80",
  "a200": "#ff6e40",
  "a400": "#ff3d00",
  "a700": "#dd2c00"
};
var brown = {
  "50": "#efebe9",
  "100": "#d7ccc8",
  "200": "#bcaaa4",
  "300": "#a1887f",
  "400": "#8d6e63",
  "500": "#795548",
  "600": "#6d4c41",
  "700": "#5d4037",
  "800": "#4e342e",
  "900": "#3e2723"
};
var blueGrey = {
  "50": "#eceff1",
  "100": "#cfd8dc",
  "200": "#b0bec5",
  "300": "#90a4ae",
  "400": "#78909c",
  "500": "#607d8b",
  "600": "#546e7a",
  "700": "#455a64",
  "800": "#37474f",
  "900": "#263238"
};
const React$y = window["React"];
var CircleSwatch = function CircleSwatch2(_ref) {
  var color2 = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, hover3 = _ref.hover, active3 = _ref.active, circleSize = _ref.circleSize, circleSpacing = _ref.circleSpacing;
  var styles2 = _default$2({
    "default": {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: "scale(1)",
        transition: "100ms transform ease"
      },
      Swatch: {
        borderRadius: "50%",
        background: "transparent",
        boxShadow: "inset 0 0 0 " + (circleSize / 2 + 1) + "px " + color2,
        transition: "100ms box-shadow ease"
      }
    },
    "hover": {
      swatch: {
        transform: "scale(1.2)"
      }
    },
    "active": {
      Swatch: {
        boxShadow: "inset 0 0 0 3px " + color2
      }
    }
  }, {
    hover: hover3,
    active: active3
  });
  return React$y.createElement("div", {
    style: styles2.swatch
  }, React$y.createElement(Swatch$1, {
    style: styles2.Swatch,
    color: color2,
    onClick,
    onHover: onSwatchHover,
    focusStyle: {
      boxShadow: styles2.Swatch.boxShadow + ", 0 0 5px " + color2
    }
  }));
};
CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
var CircleSwatch$1 = handleHover(CircleSwatch);
const React$x = window["React"];
var Circle = function Circle2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, circleSize = _ref.circleSize, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, circleSpacing = _ref.circleSpacing, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      card: {
        width,
        display: "flex",
        flexWrap: "wrap",
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(hexCode, e) {
    return onChange({
      hex: hexCode,
      source: "hex"
    }, e);
  };
  return React$x.createElement("div", {
    style: styles2.card,
    className: "circle-picker " + className
  }, map(colors, function(c) {
    return React$x.createElement(CircleSwatch$1, {
      key: c,
      color: c,
      onClick: handleChange,
      onSwatchHover,
      active: hex === c.toLowerCase(),
      circleSize,
      circleSpacing
    });
  }));
};
Circle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
  styles: PropTypes.object
};
Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [red["500"], pink["500"], purple["500"], deepPurple["500"], indigo["500"], blue["500"], lightBlue["500"], cyan["500"], teal["500"], green["500"], lightGreen["500"], lime["500"], yellow["500"], amber["500"], orange["500"], deepOrange["500"], brown["500"], blueGrey["500"]],
  styles: {}
};
ColorWrap$1(Circle);
function isUndefined(value) {
  return value === void 0;
}
var UnfoldMoreHorizontalIcon = {};
Object.defineProperty(UnfoldMoreHorizontalIcon, "__esModule", {
  value: true
});
var _extends$4 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react$1 = window["React"];
var _react2$1 = _interopRequireDefault$1(_react$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _objectWithoutProperties$1(obj, keys2) {
  var target = {};
  for (var i in obj) {
    if (keys2.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE$1 = 24;
var _default$1 = UnfoldMoreHorizontalIcon.default = function(_ref) {
  var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE$1 : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE$1 : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties$1(_ref, ["fill", "width", "height", "style"]);
  return _react2$1.default.createElement("svg", _extends$4({
    viewBox: "0 0 " + DEFAULT_SIZE$1 + " " + DEFAULT_SIZE$1,
    style: _extends$4({
      fill,
      width,
      height
    }, style)
  }, props), _react2$1.default.createElement("path", {
    d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
  }));
};
var _createClass$1 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn$1(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const React$w = window["React"];
var ChromeFields = function(_React$Component) {
  _inherits$1(ChromeFields2, _React$Component);
  function ChromeFields2(props) {
    _classCallCheck$1(this, ChromeFields2);
    var _this = _possibleConstructorReturn$1(this, (ChromeFields2.__proto__ || Object.getPrototypeOf(ChromeFields2)).call(this));
    _this.toggleViews = function() {
      if (_this.state.view === "hex") {
        _this.setState({
          view: "rgb"
        });
      } else if (_this.state.view === "rgb") {
        _this.setState({
          view: "hsl"
        });
      } else if (_this.state.view === "hsl") {
        if (_this.props.hsl.a === 1) {
          _this.setState({
            view: "hex"
          });
        } else {
          _this.setState({
            view: "rgb"
          });
        }
      }
    };
    _this.handleChange = function(data, e) {
      if (data.hex) {
        isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: "hex"
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: "rgb"
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }
        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: "rgb"
        }, e);
      } else if (data.h || data.s || data.l) {
        if (typeof data.s === "string" && data.s.includes("%")) {
          data.s = data.s.replace("%", "");
        }
        if (typeof data.l === "string" && data.l.includes("%")) {
          data.l = data.l.replace("%", "");
        }
        if (data.s == 1) {
          data.s = 0.01;
        } else if (data.l == 1) {
          data.l = 0.01;
        }
        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(!isUndefined(data.s) ? data.s : _this.props.hsl.s),
          l: Number(!isUndefined(data.l) ? data.l : _this.props.hsl.l),
          source: "hsl"
        }, e);
      }
    };
    _this.showHighlight = function(e) {
      e.currentTarget.style.background = "#eee";
    };
    _this.hideHighlight = function(e) {
      e.currentTarget.style.background = "transparent";
    };
    if (props.hsl.a !== 1 && props.view === "hex") {
      _this.state = {
        view: "rgb"
      };
    } else {
      _this.state = {
        view: props.view
      };
    }
    return _this;
  }
  _createClass$1(ChromeFields2, [{
    key: "render",
    value: function render3() {
      var _this2 = this;
      var styles2 = _default$2({
        "default": {
          wrap: {
            paddingTop: "16px",
            display: "flex"
          },
          fields: {
            flex: "1",
            display: "flex",
            marginLeft: "-6px"
          },
          field: {
            paddingLeft: "6px",
            width: "100%"
          },
          alpha: {
            paddingLeft: "6px",
            width: "100%"
          },
          toggle: {
            width: "32px",
            textAlign: "right",
            position: "relative"
          },
          icon: {
            marginRight: "-4px",
            marginTop: "12px",
            cursor: "pointer",
            position: "relative"
          },
          iconHighlight: {
            position: "absolute",
            width: "24px",
            height: "28px",
            background: "#eee",
            borderRadius: "4px",
            top: "10px",
            left: "12px",
            display: "none"
          },
          input: {
            fontSize: "11px",
            color: "#333",
            width: "100%",
            borderRadius: "2px",
            border: "none",
            boxShadow: "inset 0 0 0 1px #dadada",
            height: "21px",
            textAlign: "center"
          },
          label: {
            textTransform: "uppercase",
            fontSize: "11px",
            lineHeight: "11px",
            color: "#969696",
            textAlign: "center",
            display: "block",
            marginTop: "12px"
          },
          svg: {
            fill: "#333",
            width: "24px",
            height: "24px",
            border: "1px transparent solid",
            borderRadius: "5px"
          }
        },
        "disableAlpha": {
          alpha: {
            display: "none"
          }
        }
      }, this.props, this.state);
      var fields = void 0;
      if (this.state.view === "hex") {
        fields = React$w.createElement("div", {
          style: styles2.fields,
          className: "flexbox-fix"
        }, React$w.createElement("div", {
          style: styles2.field
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "hex",
          value: this.props.hex,
          onChange: this.handleChange
        })));
      } else if (this.state.view === "rgb") {
        fields = React$w.createElement("div", {
          style: styles2.fields,
          className: "flexbox-fix"
        }, React$w.createElement("div", {
          style: styles2.field
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "r",
          value: this.props.rgb.r,
          onChange: this.handleChange
        })), React$w.createElement("div", {
          style: styles2.field
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "g",
          value: this.props.rgb.g,
          onChange: this.handleChange
        })), React$w.createElement("div", {
          style: styles2.field
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "b",
          value: this.props.rgb.b,
          onChange: this.handleChange
        })), React$w.createElement("div", {
          style: styles2.alpha
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "a",
          value: this.props.rgb.a,
          arrowOffset: 0.01,
          onChange: this.handleChange
        })));
      } else if (this.state.view === "hsl") {
        fields = React$w.createElement("div", {
          style: styles2.fields,
          className: "flexbox-fix"
        }, React$w.createElement("div", {
          style: styles2.field
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "h",
          value: Math.round(this.props.hsl.h),
          onChange: this.handleChange
        })), React$w.createElement("div", {
          style: styles2.field
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "s",
          value: Math.round(this.props.hsl.s * 100) + "%",
          onChange: this.handleChange
        })), React$w.createElement("div", {
          style: styles2.field
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "l",
          value: Math.round(this.props.hsl.l * 100) + "%",
          onChange: this.handleChange
        })), React$w.createElement("div", {
          style: styles2.alpha
        }, React$w.createElement(EditableInput, {
          style: {
            input: styles2.input,
            label: styles2.label
          },
          label: "a",
          value: this.props.hsl.a,
          arrowOffset: 0.01,
          onChange: this.handleChange
        })));
      }
      return React$w.createElement("div", {
        style: styles2.wrap,
        className: "flexbox-fix"
      }, fields, React$w.createElement("div", {
        style: styles2.toggle
      }, React$w.createElement("div", {
        style: styles2.icon,
        onClick: this.toggleViews,
        ref: function ref(icon) {
          return _this2.icon = icon;
        }
      }, React$w.createElement(_default$1, {
        style: styles2.svg,
        onMouseOver: this.showHighlight,
        onMouseEnter: this.showHighlight,
        onMouseOut: this.hideHighlight
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      if (nextProps.hsl.a !== 1 && state.view === "hex") {
        return {
          view: "rgb"
        };
      }
      return null;
    }
  }]);
  return ChromeFields2;
}(React$w.Component);
ChromeFields.defaultProps = {
  view: "hex"
};
const React$v = window["React"];
var ChromePointer = function ChromePointer2() {
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        transform: "translate(-6px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return React$v.createElement("div", {
    style: styles2.picker
  });
};
const React$u = window["React"];
var ChromePointerCircle = function ChromePointerCircle2() {
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    }
  });
  return React$u.createElement("div", {
    style: styles2.picker
  });
};
const React$t = window["React"];
var Chrome = function Chrome2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, disableAlpha = _ref.disableAlpha, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, defaultView = _ref.defaultView;
  var styles2 = _default$2(merge$1({
    "default": {
      picker: {
        width,
        background: "#fff",
        borderRadius: "2px",
        boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
        boxSizing: "initial",
        fontFamily: "Menlo"
      },
      saturation: {
        width: "100%",
        paddingBottom: "55%",
        position: "relative",
        borderRadius: "2px 2px 0 0",
        overflow: "hidden"
      },
      Saturation: {
        radius: "2px 2px 0 0"
      },
      body: {
        padding: "16px 16px 12px"
      },
      controls: {
        display: "flex"
      },
      color: {
        width: "32px"
      },
      swatch: {
        marginTop: "6px",
        width: "16px",
        height: "16px",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden"
      },
      active: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "8px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
        background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + rgb.a + ")",
        zIndex: "2"
      },
      toggles: {
        flex: "1"
      },
      hue: {
        height: "10px",
        position: "relative",
        marginBottom: "8px"
      },
      Hue: {
        radius: "2px"
      },
      alpha: {
        height: "10px",
        position: "relative"
      },
      Alpha: {
        radius: "2px"
      }
    },
    "disableAlpha": {
      color: {
        width: "22px"
      },
      alpha: {
        display: "none"
      },
      hue: {
        marginBottom: "0px"
      },
      swatch: {
        width: "10px",
        height: "10px",
        marginTop: "0px"
      }
    }
  }, passedStyles), {
    disableAlpha
  });
  return React$t.createElement("div", {
    style: styles2.picker,
    className: "chrome-picker " + className
  }, React$t.createElement("div", {
    style: styles2.saturation
  }, React$t.createElement(Saturation, {
    style: styles2.Saturation,
    hsl,
    hsv,
    pointer: ChromePointerCircle,
    onChange
  })), React$t.createElement("div", {
    style: styles2.body
  }, React$t.createElement("div", {
    style: styles2.controls,
    className: "flexbox-fix"
  }, React$t.createElement("div", {
    style: styles2.color
  }, React$t.createElement("div", {
    style: styles2.swatch
  }, React$t.createElement("div", {
    style: styles2.active
  }), React$t.createElement(Checkboard, {
    renderers
  }))), React$t.createElement("div", {
    style: styles2.toggles
  }, React$t.createElement("div", {
    style: styles2.hue
  }, React$t.createElement(Hue, {
    style: styles2.Hue,
    hsl,
    pointer: ChromePointer,
    onChange
  })), React$t.createElement("div", {
    style: styles2.alpha
  }, React$t.createElement(Alpha, {
    style: styles2.Alpha,
    rgb,
    hsl,
    pointer: ChromePointer,
    renderers,
    onChange
  })))), React$t.createElement(ChromeFields, {
    rgb,
    hsl,
    hex,
    view: defaultView,
    onChange,
    disableAlpha
  })));
};
Chrome.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disableAlpha: PropTypes.bool,
  styles: PropTypes.object,
  defaultView: PropTypes.oneOf(["hex", "rgb", "hsl"])
};
Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
};
ColorWrap$1(Chrome);
const React$s = window["React"];
var CompactColor = function CompactColor2(_ref) {
  var color2 = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, active3 = _ref.active;
  var styles2 = _default$2({
    "default": {
      color: {
        background: color2,
        width: "15px",
        height: "15px",
        float: "left",
        marginRight: "5px",
        marginBottom: "5px",
        position: "relative",
        cursor: "pointer"
      },
      dot: {
        absolute: "5px 5px 5px 5px",
        background: getContrastingColor(color2),
        borderRadius: "50%",
        opacity: "0"
      }
    },
    "active": {
      dot: {
        opacity: "1"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      dot: {
        background: "#000"
      }
    },
    "transparent": {
      dot: {
        background: "#000"
      }
    }
  }, {
    active: active3,
    "color-#FFFFFF": color2 === "#FFFFFF",
    "transparent": color2 === "transparent"
  });
  return React$s.createElement(Swatch$1, {
    style: styles2.color,
    color: color2,
    onClick,
    onHover: onSwatchHover,
    focusStyle: {
      boxShadow: "0 0 4px " + color2
    }
  }, React$s.createElement("div", {
    style: styles2.dot
  }));
};
const React$r = window["React"];
var CompactFields = function CompactFields2(_ref) {
  var hex = _ref.hex, rgb = _ref.rgb, onChange = _ref.onChange;
  var styles2 = _default$2({
    "default": {
      fields: {
        display: "flex",
        paddingBottom: "6px",
        paddingRight: "5px",
        position: "relative"
      },
      active: {
        position: "absolute",
        top: "6px",
        left: "5px",
        height: "9px",
        width: "9px",
        background: hex
      },
      HEXwrap: {
        flex: "6",
        position: "relative"
      },
      HEXinput: {
        width: "80%",
        padding: "0px",
        paddingLeft: "20%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      HEXlabel: {
        display: "none"
      },
      RGBwrap: {
        flex: "3",
        position: "relative"
      },
      RGBinput: {
        width: "70%",
        padding: "0px",
        paddingLeft: "30%",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "12px",
        color: "#333",
        height: "16px"
      },
      RGBlabel: {
        position: "absolute",
        top: "3px",
        left: "0px",
        lineHeight: "16px",
        textTransform: "uppercase",
        fontSize: "12px",
        color: "#999"
      }
    }
  });
  var handleChange = function handleChange2(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    }
  };
  return React$r.createElement("div", {
    style: styles2.fields,
    className: "flexbox-fix"
  }, React$r.createElement("div", {
    style: styles2.active
  }), React$r.createElement(EditableInput, {
    style: {
      wrap: styles2.HEXwrap,
      input: styles2.HEXinput,
      label: styles2.HEXlabel
    },
    label: "hex",
    value: hex,
    onChange: handleChange
  }), React$r.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "r",
    value: rgb.r,
    onChange: handleChange
  }), React$r.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "g",
    value: rgb.g,
    onChange: handleChange
  }), React$r.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "b",
    value: rgb.b,
    onChange: handleChange
  }));
};
const React$q = window["React"];
var Compact = function Compact2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      Compact: {
        background: "#f6f6f6",
        radius: "4px"
      },
      compact: {
        paddingTop: "5px",
        paddingLeft: "5px",
        boxSizing: "initial",
        width: "240px"
      },
      clear: {
        clear: "both"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else {
      onChange(data, e);
    }
  };
  return React$q.createElement(Raised, {
    style: styles2.Compact,
    styles: passedStyles
  }, React$q.createElement("div", {
    style: styles2.compact,
    className: "compact-picker " + className
  }, React$q.createElement("div", null, map(colors, function(c) {
    return React$q.createElement(CompactColor, {
      key: c,
      color: c,
      active: c.toLowerCase() === hex,
      onClick: handleChange,
      onSwatchHover
    });
  }), React$q.createElement("div", {
    style: styles2.clear
  })), React$q.createElement(CompactFields, {
    hex,
    rgb,
    onChange: handleChange
  })));
};
Compact.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Compact.defaultProps = {
  colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
  styles: {}
};
ColorWrap$1(Compact);
const React$p = window["React"];
var GithubSwatch = function GithubSwatch2(_ref) {
  var hover3 = _ref.hover, color2 = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
  var hoverSwatch = {
    position: "relative",
    zIndex: "2",
    outline: "2px solid #fff",
    boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
  };
  var styles2 = _default$2({
    "default": {
      swatch: {
        width: "25px",
        height: "25px",
        fontSize: "0"
      }
    },
    "hover": {
      swatch: hoverSwatch
    }
  }, {
    hover: hover3
  });
  return React$p.createElement("div", {
    style: styles2.swatch
  }, React$p.createElement(Swatch$1, {
    color: color2,
    onClick,
    onHover: onSwatchHover,
    focusStyle: hoverSwatch
  }));
};
var GithubSwatch$1 = handleHover(GithubSwatch);
const React$o = window["React"];
var Github = function Github2(_ref) {
  var width = _ref.width, colors = _ref.colors, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.2)",
        boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
        borderRadius: "4px",
        position: "relative",
        padding: "5px",
        display: "flex",
        flexWrap: "wrap"
      },
      triangle: {
        position: "absolute",
        border: "7px solid transparent",
        borderBottomColor: "#fff"
      },
      triangleShadow: {
        position: "absolute",
        border: "8px solid transparent",
        borderBottomColor: "rgba(0,0,0,0.15)"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-14px",
        left: "10px"
      },
      triangleShadow: {
        top: "-16px",
        left: "9px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-14px",
        right: "10px"
      },
      triangleShadow: {
        top: "-16px",
        right: "9px"
      }
    },
    "bottom-left-triangle": {
      triangle: {
        top: "35px",
        left: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        left: "9px",
        transform: "rotate(180deg)"
      }
    },
    "bottom-right-triangle": {
      triangle: {
        top: "35px",
        right: "10px",
        transform: "rotate(180deg)"
      },
      triangleShadow: {
        top: "37px",
        right: "9px",
        transform: "rotate(180deg)"
      }
    }
  }, passedStyles), {
    "hide-triangle": triangle === "hide",
    "top-left-triangle": triangle === "top-left",
    "top-right-triangle": triangle === "top-right",
    "bottom-left-triangle": triangle === "bottom-left",
    "bottom-right-triangle": triangle === "bottom-right"
  });
  var handleChange = function handleChange2(hex, e) {
    return onChange({
      hex,
      source: "hex"
    }, e);
  };
  return React$o.createElement("div", {
    style: styles2.card,
    className: "github-picker " + className
  }, React$o.createElement("div", {
    style: styles2.triangleShadow
  }), React$o.createElement("div", {
    style: styles2.triangle
  }), map(colors, function(c) {
    return React$o.createElement(GithubSwatch$1, {
      color: c,
      key: c,
      onClick: handleChange,
      onSwatchHover
    });
  }));
};
Github.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.string),
  triangle: PropTypes.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
  styles: PropTypes.object
};
Github.defaultProps = {
  width: 200,
  colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
  triangle: "top-left",
  styles: {}
};
ColorWrap$1(Github);
const React$n = window["React"];
var SliderPointer$1 = function SliderPointer(_ref) {
  var direction = _ref.direction;
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        transform: "translate(-9px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    },
    "vertical": {
      picker: {
        transform: "translate(-3px, -9px)"
      }
    }
  }, {
    vertical: direction === "vertical"
  });
  return React$n.createElement("div", {
    style: styles2.picker
  });
};
var _extends$3 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const React$m = window["React"];
var HuePicker = function HuePicker2(_ref) {
  var width = _ref.width, height = _ref.height, onChange = _ref.onChange, hsl = _ref.hsl, direction = _ref.direction, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      picker: {
        position: "relative",
        width,
        height
      },
      hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data) {
    return onChange({
      a: 1,
      h: data.h,
      l: 0.5,
      s: 1
    });
  };
  return React$m.createElement("div", {
    style: styles2.picker,
    className: "hue-picker " + className
  }, React$m.createElement(Hue, _extends$3({}, styles2.hue, {
    hsl,
    pointer,
    onChange: handleChange,
    direction
  })));
};
HuePicker.propTypes = {
  styles: PropTypes.object
};
HuePicker.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: SliderPointer$1,
  styles: {}
};
ColorWrap$1(HuePicker);
const React$l = window["React"];
var Material = function Material2(_ref) {
  var onChange = _ref.onChange, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      material: {
        width: "98px",
        height: "98px",
        padding: "16px",
        fontFamily: "Roboto"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "2px solid " + hex,
        outline: "none",
        height: "30px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        width: "100%",
        marginTop: "12px",
        fontSize: "15px",
        color: "#333",
        padding: "0px",
        border: "0px",
        borderBottom: "1px solid #eee",
        outline: "none",
        height: "30px"
      },
      RGBlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        fontSize: "11px",
        color: "#999999",
        textTransform: "capitalize"
      },
      split: {
        display: "flex",
        marginRight: "-10px",
        paddingTop: "11px"
      },
      third: {
        flex: "1",
        paddingRight: "10px"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    }
  };
  return React$l.createElement(Raised, {
    styles: passedStyles
  }, React$l.createElement("div", {
    style: styles2.material,
    className: "material-picker " + className
  }, React$l.createElement(EditableInput, {
    style: {
      wrap: styles2.HEXwrap,
      input: styles2.HEXinput,
      label: styles2.HEXlabel
    },
    label: "hex",
    value: hex,
    onChange: handleChange
  }), React$l.createElement("div", {
    style: styles2.split,
    className: "flexbox-fix"
  }, React$l.createElement("div", {
    style: styles2.third
  }, React$l.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "r",
    value: rgb.r,
    onChange: handleChange
  })), React$l.createElement("div", {
    style: styles2.third
  }, React$l.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "g",
    value: rgb.g,
    onChange: handleChange
  })), React$l.createElement("div", {
    style: styles2.third
  }, React$l.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "b",
    value: rgb.b,
    onChange: handleChange
  })))));
};
ColorWrap$1(Material);
const React$k = window["React"];
var PhotoshopPicker = function PhotoshopPicker2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsv = _ref.hsv, hex = _ref.hex;
  var styles2 = _default$2({
    "default": {
      fields: {
        paddingTop: "5px",
        paddingBottom: "9px",
        width: "80px",
        position: "relative"
      },
      divider: {
        height: "5px"
      },
      RGBwrap: {
        position: "relative"
      },
      RGBinput: {
        marginLeft: "40%",
        width: "40%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "5px",
        fontSize: "13px",
        paddingLeft: "3px",
        marginRight: "10px"
      },
      RGBlabel: {
        left: "0px",
        top: "0px",
        width: "34px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px",
        position: "absolute"
      },
      HEXwrap: {
        position: "relative"
      },
      HEXinput: {
        marginLeft: "20%",
        width: "80%",
        height: "18px",
        border: "1px solid #888888",
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
        marginBottom: "6px",
        fontSize: "13px",
        paddingLeft: "3px"
      },
      HEXlabel: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "14px",
        textTransform: "uppercase",
        fontSize: "13px",
        height: "18px",
        lineHeight: "22px"
      },
      fieldSymbols: {
        position: "absolute",
        top: "5px",
        right: "-7px",
        fontSize: "13px"
      },
      symbol: {
        height: "20px",
        lineHeight: "22px",
        paddingBottom: "7px"
      }
    }
  });
  var handleChange = function handleChange2(data, e) {
    if (data["#"]) {
      isValidHex(data["#"]) && onChange({
        hex: data["#"],
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: "rgb"
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: "hsv"
      }, e);
    }
  };
  return React$k.createElement("div", {
    style: styles2.fields
  }, React$k.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "h",
    value: Math.round(hsv.h),
    onChange: handleChange
  }), React$k.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "s",
    value: Math.round(hsv.s * 100),
    onChange: handleChange
  }), React$k.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "v",
    value: Math.round(hsv.v * 100),
    onChange: handleChange
  }), React$k.createElement("div", {
    style: styles2.divider
  }), React$k.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "r",
    value: rgb.r,
    onChange: handleChange
  }), React$k.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "g",
    value: rgb.g,
    onChange: handleChange
  }), React$k.createElement(EditableInput, {
    style: {
      wrap: styles2.RGBwrap,
      input: styles2.RGBinput,
      label: styles2.RGBlabel
    },
    label: "b",
    value: rgb.b,
    onChange: handleChange
  }), React$k.createElement("div", {
    style: styles2.divider
  }), React$k.createElement(EditableInput, {
    style: {
      wrap: styles2.HEXwrap,
      input: styles2.HEXinput,
      label: styles2.HEXlabel
    },
    label: "#",
    value: hex.replace("#", ""),
    onChange: handleChange
  }), React$k.createElement("div", {
    style: styles2.fieldSymbols
  }, React$k.createElement("div", {
    style: styles2.symbol
  }, "\xB0"), React$k.createElement("div", {
    style: styles2.symbol
  }, "%"), React$k.createElement("div", {
    style: styles2.symbol
  }, "%")));
};
const React$j = window["React"];
var PhotoshopPointerCircle$1 = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "12px",
        height: "12px",
        borderRadius: "6px",
        boxShadow: "inset 0 0 0 1px #fff",
        transform: "translate(-6px, -6px)"
      }
    },
    "black-outline": {
      picker: {
        boxShadow: "inset 0 0 0 1px #000"
      }
    }
  }, {
    "black-outline": hsl.l > 0.5
  });
  return React$j.createElement("div", {
    style: styles2.picker
  });
};
const React$i = window["React"];
var PhotoshopPointerCircle2 = function PhotoshopPointerCircle3() {
  var styles2 = _default$2({
    "default": {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "4px 0 4px 6px",
        borderColor: "transparent transparent transparent #fff",
        position: "absolute",
        top: "1px",
        left: "1px"
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "5px 0 5px 8px",
        borderColor: "transparent transparent transparent #555"
      },
      left: {
        Extend: "triangleBorder",
        transform: "translate(-13px, -4px)"
      },
      leftInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      },
      right: {
        Extend: "triangleBorder",
        transform: "translate(20px, -14px) rotate(180deg)"
      },
      rightInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      }
    }
  });
  return React$i.createElement("div", {
    style: styles2.pointer
  }, React$i.createElement("div", {
    style: styles2.left
  }, React$i.createElement("div", {
    style: styles2.leftInside
  })), React$i.createElement("div", {
    style: styles2.right
  }, React$i.createElement("div", {
    style: styles2.rightInside
  })));
};
const React$h = window["React"];
var PhotoshopButton = function PhotoshopButton2(_ref) {
  var onClick = _ref.onClick, label = _ref.label, children = _ref.children, active3 = _ref.active;
  var styles2 = _default$2({
    "default": {
      button: {
        backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
        border: "1px solid #878787",
        borderRadius: "2px",
        height: "20px",
        boxShadow: "0 1px 0 0 #EAEAEA",
        fontSize: "14px",
        color: "#000",
        lineHeight: "20px",
        textAlign: "center",
        marginBottom: "10px",
        cursor: "pointer"
      }
    },
    "active": {
      button: {
        boxShadow: "0 0 0 1px #878787"
      }
    }
  }, {
    active: active3
  });
  return React$h.createElement("div", {
    style: styles2.button,
    onClick
  }, label || children);
};
const React$g = window["React"];
var PhotoshopPreviews = function PhotoshopPreviews2(_ref) {
  var rgb = _ref.rgb, currentColor = _ref.currentColor;
  var styles2 = _default$2({
    "default": {
      swatches: {
        border: "1px solid #B3B3B3",
        borderBottom: "1px solid #F0F0F0",
        marginBottom: "2px",
        marginTop: "1px"
      },
      new: {
        height: "34px",
        background: "rgb(" + rgb.r + "," + rgb.g + ", " + rgb.b + ")",
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
      },
      current: {
        height: "34px",
        background: currentColor,
        boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
      },
      label: {
        fontSize: "14px",
        color: "#000",
        textAlign: "center"
      }
    }
  });
  return React$g.createElement("div", null, React$g.createElement("div", {
    style: styles2.label
  }, "new"), React$g.createElement("div", {
    style: styles2.swatches
  }, React$g.createElement("div", {
    style: styles2.new
  }), React$g.createElement("div", {
    style: styles2.current
  })), React$g.createElement("div", {
    style: styles2.label
  }, "current"));
};
var _createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
const React$f = window["React"];
var Photoshop = function(_React$Component) {
  _inherits(Photoshop2, _React$Component);
  function Photoshop2(props) {
    _classCallCheck(this, Photoshop2);
    var _this = _possibleConstructorReturn(this, (Photoshop2.__proto__ || Object.getPrototypeOf(Photoshop2)).call(this));
    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }
  _createClass(Photoshop2, [{
    key: "render",
    value: function render3() {
      var _props = this.props, _props$styles = _props.styles, passedStyles = _props$styles === void 0 ? {} : _props$styles, _props$className = _props.className, className = _props$className === void 0 ? "" : _props$className;
      var styles2 = _default$2(merge$1({
        "default": {
          picker: {
            background: "#DCDCDC",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
            boxSizing: "initial",
            width: "513px"
          },
          head: {
            backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
            borderBottom: "1px solid #B1B1B1",
            boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
            height: "23px",
            lineHeight: "24px",
            borderRadius: "4px 4px 0 0",
            fontSize: "13px",
            color: "#4D4D4D",
            textAlign: "center"
          },
          body: {
            padding: "15px 15px 0",
            display: "flex"
          },
          saturation: {
            width: "256px",
            height: "256px",
            position: "relative",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0",
            overflow: "hidden"
          },
          hue: {
            position: "relative",
            height: "256px",
            width: "19px",
            marginLeft: "10px",
            border: "2px solid #B3B3B3",
            borderBottom: "2px solid #F0F0F0"
          },
          controls: {
            width: "180px",
            marginLeft: "10px"
          },
          top: {
            display: "flex"
          },
          previews: {
            width: "60px"
          },
          actions: {
            flex: "1",
            marginLeft: "20px"
          }
        }
      }, passedStyles));
      return React$f.createElement("div", {
        style: styles2.picker,
        className: "photoshop-picker " + className
      }, React$f.createElement("div", {
        style: styles2.head
      }, this.props.header), React$f.createElement("div", {
        style: styles2.body,
        className: "flexbox-fix"
      }, React$f.createElement("div", {
        style: styles2.saturation
      }, React$f.createElement(Saturation, {
        hsl: this.props.hsl,
        hsv: this.props.hsv,
        pointer: PhotoshopPointerCircle$1,
        onChange: this.props.onChange
      })), React$f.createElement("div", {
        style: styles2.hue
      }, React$f.createElement(Hue, {
        direction: "vertical",
        hsl: this.props.hsl,
        pointer: PhotoshopPointerCircle2,
        onChange: this.props.onChange
      })), React$f.createElement("div", {
        style: styles2.controls
      }, React$f.createElement("div", {
        style: styles2.top,
        className: "flexbox-fix"
      }, React$f.createElement("div", {
        style: styles2.previews
      }, React$f.createElement(PhotoshopPreviews, {
        rgb: this.props.rgb,
        currentColor: this.state.currentColor
      })), React$f.createElement("div", {
        style: styles2.actions
      }, React$f.createElement(PhotoshopButton, {
        label: "OK",
        onClick: this.props.onAccept,
        active: true
      }), React$f.createElement(PhotoshopButton, {
        label: "Cancel",
        onClick: this.props.onCancel
      }), React$f.createElement(PhotoshopPicker, {
        onChange: this.props.onChange,
        rgb: this.props.rgb,
        hsv: this.props.hsv,
        hex: this.props.hex
      }))))));
    }
  }]);
  return Photoshop2;
}(React$f.Component);
Photoshop.propTypes = {
  header: PropTypes.string,
  styles: PropTypes.object
};
Photoshop.defaultProps = {
  header: "Color Picker",
  styles: {}
};
ColorWrap$1(Photoshop);
const React$e = window["React"];
var SketchFields = function SketchFields2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, disableAlpha = _ref.disableAlpha;
  var styles2 = _default$2({
    "default": {
      fields: {
        display: "flex",
        paddingTop: "4px"
      },
      single: {
        flex: "1",
        paddingLeft: "6px"
      },
      alpha: {
        flex: "1",
        paddingLeft: "6px"
      },
      double: {
        flex: "2"
      },
      input: {
        width: "80%",
        padding: "4px 10% 3px",
        border: "none",
        boxShadow: "inset 0 0 0 1px #ccc",
        fontSize: "11px"
      },
      label: {
        display: "block",
        textAlign: "center",
        fontSize: "11px",
        color: "#222",
        paddingTop: "3px",
        paddingBottom: "4px",
        textTransform: "capitalize"
      }
    },
    "disableAlpha": {
      alpha: {
        display: "none"
      }
    }
  }, {
    disableAlpha
  });
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: "rgb"
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }
      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: "rgb"
      }, e);
    }
  };
  return React$e.createElement("div", {
    style: styles2.fields,
    className: "flexbox-fix"
  }, React$e.createElement("div", {
    style: styles2.double
  }, React$e.createElement(EditableInput, {
    style: {
      input: styles2.input,
      label: styles2.label
    },
    label: "hex",
    value: hex.replace("#", ""),
    onChange: handleChange
  })), React$e.createElement("div", {
    style: styles2.single
  }, React$e.createElement(EditableInput, {
    style: {
      input: styles2.input,
      label: styles2.label
    },
    label: "r",
    value: rgb.r,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), React$e.createElement("div", {
    style: styles2.single
  }, React$e.createElement(EditableInput, {
    style: {
      input: styles2.input,
      label: styles2.label
    },
    label: "g",
    value: rgb.g,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), React$e.createElement("div", {
    style: styles2.single
  }, React$e.createElement(EditableInput, {
    style: {
      input: styles2.input,
      label: styles2.label
    },
    label: "b",
    value: rgb.b,
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "255"
  })), React$e.createElement("div", {
    style: styles2.alpha
  }, React$e.createElement(EditableInput, {
    style: {
      input: styles2.input,
      label: styles2.label
    },
    label: "a",
    value: Math.round(rgb.a * 100),
    onChange: handleChange,
    dragLabel: "true",
    dragMax: "100"
  })));
};
var _extends$2 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const React$d = window["React"];
var SketchPresetColors = function SketchPresetColors2(_ref) {
  var colors = _ref.colors, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover;
  var styles2 = _default$2({
    "default": {
      colors: {
        margin: "0 -10px",
        padding: "10px 0 0 10px",
        borderTop: "1px solid #eee",
        display: "flex",
        flexWrap: "wrap",
        position: "relative"
      },
      swatchWrap: {
        width: "16px",
        height: "16px",
        margin: "0 10px 10px 0"
      },
      swatch: {
        borderRadius: "3px",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
      }
    },
    "no-presets": {
      colors: {
        display: "none"
      }
    }
  }, {
    "no-presets": !colors || !colors.length
  });
  var handleClick = function handleClick2(hex, e) {
    onClick({
      hex,
      source: "hex"
    }, e);
  };
  return React$d.createElement("div", {
    style: styles2.colors,
    className: "flexbox-fix"
  }, colors.map(function(colorObjOrString) {
    var c = typeof colorObjOrString === "string" ? {
      color: colorObjOrString
    } : colorObjOrString;
    var key = "" + c.color + (c.title || "");
    return React$d.createElement("div", {
      key,
      style: styles2.swatchWrap
    }, React$d.createElement(Swatch$1, _extends$2({}, c, {
      style: styles2.swatch,
      onClick: handleClick,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + c.color
      }
    })));
  }));
};
SketchPresetColors.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    color: PropTypes.string,
    title: PropTypes.string
  })])).isRequired
};
var _extends$1 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const React$c = window["React"];
var Sketch = function Sketch2(_ref) {
  var width = _ref.width, rgb = _ref.rgb, hex = _ref.hex, hsv = _ref.hsv, hsl = _ref.hsl, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, disableAlpha = _ref.disableAlpha, presetColors = _ref.presetColors, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": _extends$1({
      picker: {
        width,
        padding: "10px 10px 0",
        boxSizing: "initial",
        background: "#fff",
        borderRadius: "4px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
      },
      saturation: {
        width: "100%",
        paddingBottom: "75%",
        position: "relative",
        overflow: "hidden"
      },
      Saturation: {
        radius: "3px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      controls: {
        display: "flex"
      },
      sliders: {
        padding: "4px 0",
        flex: "1"
      },
      color: {
        width: "24px",
        height: "24px",
        position: "relative",
        marginTop: "4px",
        marginLeft: "4px",
        borderRadius: "3px"
      },
      activeColor: {
        absolute: "0px 0px 0px 0px",
        borderRadius: "2px",
        background: "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + rgb.a + ")",
        boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      hue: {
        position: "relative",
        height: "10px",
        overflow: "hidden"
      },
      Hue: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      },
      alpha: {
        position: "relative",
        height: "10px",
        marginTop: "4px",
        overflow: "hidden"
      },
      Alpha: {
        radius: "2px",
        shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
      }
    }, passedStyles),
    "disableAlpha": {
      color: {
        height: "10px"
      },
      hue: {
        height: "10px"
      },
      alpha: {
        display: "none"
      }
    }
  }, passedStyles), {
    disableAlpha
  });
  return React$c.createElement("div", {
    style: styles2.picker,
    className: "sketch-picker " + className
  }, React$c.createElement("div", {
    style: styles2.saturation
  }, React$c.createElement(Saturation, {
    style: styles2.Saturation,
    hsl,
    hsv,
    onChange
  })), React$c.createElement("div", {
    style: styles2.controls,
    className: "flexbox-fix"
  }, React$c.createElement("div", {
    style: styles2.sliders
  }, React$c.createElement("div", {
    style: styles2.hue
  }, React$c.createElement(Hue, {
    style: styles2.Hue,
    hsl,
    onChange
  })), React$c.createElement("div", {
    style: styles2.alpha
  }, React$c.createElement(Alpha, {
    style: styles2.Alpha,
    rgb,
    hsl,
    renderers,
    onChange
  }))), React$c.createElement("div", {
    style: styles2.color
  }, React$c.createElement(Checkboard, null), React$c.createElement("div", {
    style: styles2.activeColor
  }))), React$c.createElement(SketchFields, {
    rgb,
    hsl,
    hex,
    onChange,
    disableAlpha
  }), React$c.createElement(SketchPresetColors, {
    colors: presetColors,
    onClick: onChange,
    onSwatchHover
  }));
};
Sketch.propTypes = {
  disableAlpha: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object
};
Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
};
var SketchPicker = ColorWrap$1(Sketch);
const React$b = window["React"];
var SliderSwatch = function SliderSwatch2(_ref) {
  var hsl = _ref.hsl, offset = _ref.offset, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, active3 = _ref.active, first = _ref.first, last = _ref.last;
  var styles2 = _default$2({
    "default": {
      swatch: {
        height: "12px",
        background: "hsl(" + hsl.h + ", 50%, " + offset * 100 + "%)",
        cursor: "pointer"
      }
    },
    "first": {
      swatch: {
        borderRadius: "2px 0 0 2px"
      }
    },
    "last": {
      swatch: {
        borderRadius: "0 2px 2px 0"
      }
    },
    "active": {
      swatch: {
        transform: "scaleY(1.8)",
        borderRadius: "3.6px/2px"
      }
    }
  }, {
    active: active3,
    first,
    last
  });
  var handleClick = function handleClick2(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: "hsl"
    }, e);
  };
  return React$b.createElement("div", {
    style: styles2.swatch,
    onClick: handleClick
  });
};
const React$a = window["React"];
var SliderSwatches = function SliderSwatches2(_ref) {
  var onClick = _ref.onClick, hsl = _ref.hsl;
  var styles2 = _default$2({
    "default": {
      swatches: {
        marginTop: "20px"
      },
      swatch: {
        boxSizing: "border-box",
        width: "20%",
        paddingRight: "1px",
        float: "left"
      },
      clear: {
        clear: "both"
      }
    }
  });
  var epsilon = 0.1;
  return React$a.createElement("div", {
    style: styles2.swatches
  }, React$a.createElement("div", {
    style: styles2.swatch
  }, React$a.createElement(SliderSwatch, {
    hsl,
    offset: ".80",
    active: Math.abs(hsl.l - 0.8) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick,
    first: true
  })), React$a.createElement("div", {
    style: styles2.swatch
  }, React$a.createElement(SliderSwatch, {
    hsl,
    offset: ".65",
    active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick
  })), React$a.createElement("div", {
    style: styles2.swatch
  }, React$a.createElement(SliderSwatch, {
    hsl,
    offset: ".50",
    active: Math.abs(hsl.l - 0.5) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick
  })), React$a.createElement("div", {
    style: styles2.swatch
  }, React$a.createElement(SliderSwatch, {
    hsl,
    offset: ".35",
    active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick
  })), React$a.createElement("div", {
    style: styles2.swatch
  }, React$a.createElement(SliderSwatch, {
    hsl,
    offset: ".20",
    active: Math.abs(hsl.l - 0.2) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
    onClick,
    last: true
  })), React$a.createElement("div", {
    style: styles2.clear
  }));
};
const React$9 = window["React"];
var SliderPointer2 = function SliderPointer3() {
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "14px",
        height: "14px",
        borderRadius: "6px",
        transform: "translate(-7px, -1px)",
        backgroundColor: "rgb(248, 248, 248)",
        boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
      }
    }
  });
  return React$9.createElement("div", {
    style: styles2.picker
  });
};
const React$8 = window["React"];
var Slider = function Slider2(_ref) {
  var hsl = _ref.hsl, onChange = _ref.onChange, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      hue: {
        height: "12px",
        position: "relative"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  return React$8.createElement("div", {
    style: styles2.wrap || {},
    className: "slider-picker " + className
  }, React$8.createElement("div", {
    style: styles2.hue
  }, React$8.createElement(Hue, {
    style: styles2.Hue,
    hsl,
    pointer,
    onChange
  })), React$8.createElement("div", {
    style: styles2.swatches
  }, React$8.createElement(SliderSwatches, {
    hsl,
    onClick: onChange
  })));
};
Slider.propTypes = {
  styles: PropTypes.object
};
Slider.defaultProps = {
  pointer: SliderPointer2,
  styles: {}
};
ColorWrap$1(Slider);
var CheckIcon = {};
Object.defineProperty(CheckIcon, "__esModule", {
  value: true
});
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _react = window["React"];
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _objectWithoutProperties(obj, keys2) {
  var target = {};
  for (var i in obj) {
    if (keys2.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
}
var DEFAULT_SIZE = 24;
var _default = CheckIcon.default = function(_ref) {
  var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties(_ref, ["fill", "width", "height", "style"]);
  return _react2.default.createElement("svg", _extends({
    viewBox: "0 0 " + DEFAULT_SIZE + " " + DEFAULT_SIZE,
    style: _extends({
      fill,
      width,
      height
    }, style)
  }, props), _react2.default.createElement("path", {
    d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
  }));
};
const React$7 = window["React"];
var SwatchesColor = function SwatchesColor2(_ref) {
  var color2 = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
  } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, first = _ref.first, last = _ref.last, active3 = _ref.active;
  var styles2 = _default$2({
    "default": {
      color: {
        width: "40px",
        height: "24px",
        cursor: "pointer",
        background: color2,
        marginBottom: "1px"
      },
      check: {
        color: getContrastingColor(color2),
        marginLeft: "8px",
        display: "none"
      }
    },
    "first": {
      color: {
        overflow: "hidden",
        borderRadius: "2px 2px 0 0"
      }
    },
    "last": {
      color: {
        overflow: "hidden",
        borderRadius: "0 0 2px 2px"
      }
    },
    "active": {
      check: {
        display: "block"
      }
    },
    "color-#FFFFFF": {
      color: {
        boxShadow: "inset 0 0 0 1px #ddd"
      },
      check: {
        color: "#333"
      }
    },
    "transparent": {
      check: {
        color: "#333"
      }
    }
  }, {
    first,
    last,
    active: active3,
    "color-#FFFFFF": color2 === "#FFFFFF",
    "transparent": color2 === "transparent"
  });
  return React$7.createElement(Swatch$1, {
    color: color2,
    style: styles2.color,
    onClick,
    onHover: onSwatchHover,
    focusStyle: {
      boxShadow: "0 0 4px " + color2
    }
  }, React$7.createElement("div", {
    style: styles2.check
  }, React$7.createElement(_default, null)));
};
const React$6 = window["React"];
var SwatchesGroup = function SwatchesGroup2(_ref) {
  var onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, group = _ref.group, active3 = _ref.active;
  var styles2 = _default$2({
    "default": {
      group: {
        paddingBottom: "10px",
        width: "40px",
        float: "left",
        marginRight: "10px"
      }
    }
  });
  return React$6.createElement("div", {
    style: styles2.group
  }, map(group, function(color2, i) {
    return React$6.createElement(SwatchesColor, {
      key: color2,
      color: color2,
      active: color2.toLowerCase() === active3,
      first: i === 0,
      last: i === group.length - 1,
      onClick,
      onSwatchHover
    });
  }));
};
const React$5 = window["React"];
var Swatches = function Swatches2(_ref) {
  var width = _ref.width, height = _ref.height, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      picker: {
        width,
        height
      },
      overflow: {
        height,
        overflowY: "scroll"
      },
      body: {
        padding: "16px 0 6px 16px"
      },
      clear: {
        clear: "both"
      }
    }
  }, passedStyles));
  var handleChange = function handleChange2(data, e) {
    return onChange({
      hex: data,
      source: "hex"
    }, e);
  };
  return React$5.createElement("div", {
    style: styles2.picker,
    className: "swatches-picker " + className
  }, React$5.createElement(Raised, null, React$5.createElement("div", {
    style: styles2.overflow
  }, React$5.createElement("div", {
    style: styles2.body
  }, map(colors, function(group) {
    return React$5.createElement(SwatchesGroup, {
      key: group.toString(),
      group,
      active: hex,
      onClick: handleChange,
      onSwatchHover
    });
  }), React$5.createElement("div", {
    style: styles2.clear
  })))));
};
Swatches.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  styles: PropTypes.object
};
Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[red["900"], red["700"], red["500"], red["300"], red["100"]], [pink["900"], pink["700"], pink["500"], pink["300"], pink["100"]], [purple["900"], purple["700"], purple["500"], purple["300"], purple["100"]], [deepPurple["900"], deepPurple["700"], deepPurple["500"], deepPurple["300"], deepPurple["100"]], [indigo["900"], indigo["700"], indigo["500"], indigo["300"], indigo["100"]], [blue["900"], blue["700"], blue["500"], blue["300"], blue["100"]], [lightBlue["900"], lightBlue["700"], lightBlue["500"], lightBlue["300"], lightBlue["100"]], [cyan["900"], cyan["700"], cyan["500"], cyan["300"], cyan["100"]], [teal["900"], teal["700"], teal["500"], teal["300"], teal["100"]], ["#194D33", green["700"], green["500"], green["300"], green["100"]], [lightGreen["900"], lightGreen["700"], lightGreen["500"], lightGreen["300"], lightGreen["100"]], [lime["900"], lime["700"], lime["500"], lime["300"], lime["100"]], [yellow["900"], yellow["700"], yellow["500"], yellow["300"], yellow["100"]], [amber["900"], amber["700"], amber["500"], amber["300"], amber["100"]], [orange["900"], orange["700"], orange["500"], orange["300"], orange["100"]], [deepOrange["900"], deepOrange["700"], deepOrange["500"], deepOrange["300"], deepOrange["100"]], [brown["900"], brown["700"], brown["500"], brown["300"], brown["100"]], [blueGrey["900"], blueGrey["700"], blueGrey["500"], blueGrey["300"], blueGrey["100"]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
  styles: {}
};
ColorWrap$1(Swatches);
const React$4 = window["React"];
var Twitter = function Twitter2(_ref) {
  var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      card: {
        width,
        background: "#fff",
        border: "0 solid rgba(0,0,0,0.25)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        borderRadius: "4px",
        position: "relative"
      },
      body: {
        padding: "15px 9px 9px 15px"
      },
      label: {
        fontSize: "18px",
        color: "#fff"
      },
      triangle: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent #fff transparent",
        position: "absolute"
      },
      triangleShadow: {
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        borderWidth: "0 9px 10px 9px",
        borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
        position: "absolute"
      },
      hash: {
        background: "#F0F0F0",
        height: "30px",
        width: "30px",
        borderRadius: "4px 0 0 4px",
        float: "left",
        color: "#98A1A4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },
      input: {
        width: "100px",
        fontSize: "14px",
        color: "#666",
        border: "0px",
        outline: "none",
        height: "28px",
        boxShadow: "inset 0 0 0 1px #F0F0F0",
        boxSizing: "content-box",
        borderRadius: "0 4px 4px 0",
        float: "left",
        paddingLeft: "8px"
      },
      swatch: {
        width: "30px",
        height: "30px",
        float: "left",
        borderRadius: "4px",
        margin: "0 6px 6px 0"
      },
      clear: {
        clear: "both"
      }
    },
    "hide-triangle": {
      triangle: {
        display: "none"
      },
      triangleShadow: {
        display: "none"
      }
    },
    "top-left-triangle": {
      triangle: {
        top: "-10px",
        left: "12px"
      },
      triangleShadow: {
        top: "-11px",
        left: "12px"
      }
    },
    "top-right-triangle": {
      triangle: {
        top: "-10px",
        right: "12px"
      },
      triangleShadow: {
        top: "-11px",
        right: "12px"
      }
    }
  }, passedStyles), {
    "hide-triangle": triangle === "hide",
    "top-left-triangle": triangle === "top-left",
    "top-right-triangle": triangle === "top-right"
  });
  var handleChange = function handleChange2(hexcode, e) {
    isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: "hex"
    }, e);
  };
  return React$4.createElement("div", {
    style: styles2.card,
    className: "twitter-picker " + className
  }, React$4.createElement("div", {
    style: styles2.triangleShadow
  }), React$4.createElement("div", {
    style: styles2.triangle
  }), React$4.createElement("div", {
    style: styles2.body
  }, map(colors, function(c, i) {
    return React$4.createElement(Swatch$1, {
      key: i,
      color: c,
      hex: c,
      style: styles2.swatch,
      onClick: handleChange,
      onHover: onSwatchHover,
      focusStyle: {
        boxShadow: "0 0 4px " + c
      }
    });
  }), React$4.createElement("div", {
    style: styles2.hash
  }, "#"), React$4.createElement(EditableInput, {
    label: null,
    style: {
      input: styles2.input
    },
    value: hex.replace("#", ""),
    onChange: handleChange
  }), React$4.createElement("div", {
    style: styles2.clear
  })));
};
Twitter.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  triangle: PropTypes.oneOf(["hide", "top-left", "top-right"]),
  colors: PropTypes.arrayOf(PropTypes.string),
  styles: PropTypes.object
};
Twitter.defaultProps = {
  width: 276,
  colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
  triangle: "top-left",
  styles: {}
};
ColorWrap$1(Twitter);
const React$3 = window["React"];
var GooglePointerCircle = function GooglePointerCircle2(props) {
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background: "hsl(" + Math.round(props.hsl.h) + ", " + Math.round(props.hsl.s * 100) + "%, " + Math.round(props.hsl.l * 100) + "%)"
      }
    }
  });
  return React$3.createElement("div", {
    style: styles2.picker
  });
};
GooglePointerCircle.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointerCircle.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: 0.2,
    s: 0.5
  }
};
const React$2 = window["React"];
var GooglePointer = function GooglePointer2(props) {
  var styles2 = _default$2({
    "default": {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(props.hsl.h) + ", 100%, 50%)",
        border: "2px white solid"
      }
    }
  });
  return React$2.createElement("div", {
    style: styles2.picker
  });
};
GooglePointer.propTypes = {
  hsl: PropTypes.shape({
    h: PropTypes.number,
    s: PropTypes.number,
    l: PropTypes.number,
    a: PropTypes.number
  })
};
GooglePointer.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: 0.2,
    s: 0.5
  }
};
const React$1 = window["React"];
var GoogleFields = function GoogleFields2(_ref) {
  var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, hsv = _ref.hsv;
  var handleChange = function handleChange2(data, e) {
    if (data.hex) {
      isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: "hex"
      }, e);
    } else if (data.rgb) {
      var values = data.rgb.split(",");
      isvalidColorString(data.rgb, "rgb") && onChange({
        r: values[0],
        g: values[1],
        b: values[2],
        a: 1,
        source: "rgb"
      }, e);
    } else if (data.hsv) {
      var _values = data.hsv.split(",");
      if (isvalidColorString(data.hsv, "hsv")) {
        _values[2] = _values[2].replace("%", "");
        _values[1] = _values[1].replace("%", "");
        _values[0] = _values[0].replace("\xB0", "");
        if (_values[1] == 1) {
          _values[1] = 0.01;
        } else if (_values[2] == 1) {
          _values[2] = 0.01;
        }
        onChange({
          h: Number(_values[0]),
          s: Number(_values[1]),
          v: Number(_values[2]),
          source: "hsv"
        }, e);
      }
    } else if (data.hsl) {
      var _values2 = data.hsl.split(",");
      if (isvalidColorString(data.hsl, "hsl")) {
        _values2[2] = _values2[2].replace("%", "");
        _values2[1] = _values2[1].replace("%", "");
        _values2[0] = _values2[0].replace("\xB0", "");
        if (hsvValue[1] == 1) {
          hsvValue[1] = 0.01;
        } else if (hsvValue[2] == 1) {
          hsvValue[2] = 0.01;
        }
        onChange({
          h: Number(_values2[0]),
          s: Number(_values2[1]),
          v: Number(_values2[2]),
          source: "hsl"
        }, e);
      }
    }
  };
  var styles2 = _default$2({
    "default": {
      wrap: {
        display: "flex",
        height: "100px",
        marginTop: "4px"
      },
      fields: {
        width: "100%"
      },
      column: {
        paddingTop: "10px",
        display: "flex",
        justifyContent: "space-between"
      },
      double: {
        padding: "0px 4.4px",
        boxSizing: "border-box"
      },
      input: {
        width: "100%",
        height: "38px",
        boxSizing: "border-box",
        padding: "4px 10% 3px",
        textAlign: "center",
        border: "1px solid #dadce0",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      input2: {
        height: "38px",
        width: "100%",
        border: "1px solid #dadce0",
        boxSizing: "border-box",
        fontSize: "11px",
        textTransform: "lowercase",
        borderRadius: "5px",
        outline: "none",
        paddingLeft: "10px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label: {
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "35px",
        top: "-6px",
        left: "0",
        right: "0",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      label2: {
        left: "10px",
        textAlign: "center",
        fontSize: "12px",
        background: "#fff",
        position: "absolute",
        textTransform: "uppercase",
        color: "#3c4043",
        width: "32px",
        top: "-6px",
        fontFamily: "Roboto,Arial,sans-serif"
      },
      single: {
        flexGrow: "1",
        margin: "0px 4.4px"
      }
    }
  });
  var rgbValue = rgb.r + ", " + rgb.g + ", " + rgb.b;
  var hslValue = Math.round(hsl.h) + "\xB0, " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%";
  var hsvValue = Math.round(hsv.h) + "\xB0, " + Math.round(hsv.s * 100) + "%, " + Math.round(hsv.v * 100) + "%";
  return React$1.createElement("div", {
    style: styles2.wrap,
    className: "flexbox-fix"
  }, React$1.createElement("div", {
    style: styles2.fields
  }, React$1.createElement("div", {
    style: styles2.double
  }, React$1.createElement(EditableInput, {
    style: {
      input: styles2.input,
      label: styles2.label
    },
    label: "hex",
    value: hex,
    onChange: handleChange
  })), React$1.createElement("div", {
    style: styles2.column
  }, React$1.createElement("div", {
    style: styles2.single
  }, React$1.createElement(EditableInput, {
    style: {
      input: styles2.input2,
      label: styles2.label2
    },
    label: "rgb",
    value: rgbValue,
    onChange: handleChange
  })), React$1.createElement("div", {
    style: styles2.single
  }, React$1.createElement(EditableInput, {
    style: {
      input: styles2.input2,
      label: styles2.label2
    },
    label: "hsv",
    value: hsvValue,
    onChange: handleChange
  })), React$1.createElement("div", {
    style: styles2.single
  }, React$1.createElement(EditableInput, {
    style: {
      input: styles2.input2,
      label: styles2.label2
    },
    label: "hsl",
    value: hslValue,
    onChange: handleChange
  })))));
};
const React = window["React"];
var Google = function Google2(_ref) {
  var width = _ref.width, onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, header = _ref.header, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
  var styles2 = _default$2(merge$1({
    "default": {
      picker: {
        width,
        background: "#fff",
        border: "1px solid #dfe1e5",
        boxSizing: "initial",
        display: "flex",
        flexWrap: "wrap",
        borderRadius: "8px 8px 0px 0px"
      },
      head: {
        height: "57px",
        width: "100%",
        paddingTop: "16px",
        paddingBottom: "16px",
        paddingLeft: "16px",
        fontSize: "20px",
        boxSizing: "border-box",
        fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
      },
      saturation: {
        width: "70%",
        padding: "0px",
        position: "relative",
        overflow: "hidden"
      },
      swatch: {
        width: "30%",
        height: "228px",
        padding: "0px",
        background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 1)",
        position: "relative",
        overflow: "hidden"
      },
      body: {
        margin: "auto",
        width: "95%"
      },
      controls: {
        display: "flex",
        boxSizing: "border-box",
        height: "52px",
        paddingTop: "22px"
      },
      color: {
        width: "32px"
      },
      hue: {
        height: "8px",
        position: "relative",
        margin: "0px 16px 0px 16px",
        width: "100%"
      },
      Hue: {
        radius: "2px"
      }
    }
  }, passedStyles));
  return React.createElement("div", {
    style: styles2.picker,
    className: "google-picker " + className
  }, React.createElement("div", {
    style: styles2.head
  }, header), React.createElement("div", {
    style: styles2.swatch
  }), React.createElement("div", {
    style: styles2.saturation
  }, React.createElement(Saturation, {
    hsl,
    hsv,
    pointer: GooglePointerCircle,
    onChange
  })), React.createElement("div", {
    style: styles2.body
  }, React.createElement("div", {
    style: styles2.controls,
    className: "flexbox-fix"
  }, React.createElement("div", {
    style: styles2.hue
  }, React.createElement(Hue, {
    style: styles2.Hue,
    hsl,
    radius: "4px",
    pointer: GooglePointer,
    onChange
  }))), React.createElement(GoogleFields, {
    rgb,
    hsl,
    hex,
    hsv,
    onChange
  })));
};
Google.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  header: PropTypes.string
};
Google.defaultProps = {
  width: 652,
  styles: {},
  header: "Color picker"
};
ColorWrap$1(Google);
const component = "_component_1k615_1";
const color = "_color_1k615_5";
const colorText = "_colorText_1k615_9";
const placeholder = "_placeholder_1k615_13";
var styles = {
  component,
  color,
  colorText,
  placeholder
};
const useMemo = window["React"].useMemo;
const Popover = window["arco"].Popover;
var index = (props) => {
  const onChange = (color2, ...arg) => {
    let value2 = color2.hex;
    if (color2.rgb.a !== 1) {
      value2 = `rgba(${Object.values(color2.rgb).join(",")})`;
    }
    if (props.onChange) {
      props.onChange(value2);
    }
  };
  const value = useMemo(() => {
    if (!props.value)
      return;
    if (props.value.indexOf("rgb") === 0) {
      const list = props.value.replace(/rgba?|\(|\)/g, "").split(",");
      return {
        r: list[0],
        g: list[1],
        b: list[2],
        a: list[3]
      };
    }
    return props.value;
  }, [props.value]);
  return /* @__PURE__ */ jsx(Popover, {
    position: "br",
    trigger: "click",
    content: /* @__PURE__ */ jsx(SketchPicker, {
      color: value,
      onChangeComplete: onChange
    }),
    children: value ? /* @__PURE__ */ jsxs("div", {
      className: styles["component"],
      children: [/* @__PURE__ */ jsx("div", {
        className: styles["color"],
        style: {
          backgroundColor: props.value
        }
      }), /* @__PURE__ */ jsx("div", {
        className: styles["colorText"],
        children: props.value
      })]
    }) : /* @__PURE__ */ jsx("div", {
      className: styles.placeholder,
      children: "\u9009\u62E9\u989C\u8272"
    })
  });
};
export { index as default };
