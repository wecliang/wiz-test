function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends.apply(this, arguments);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n2) {
  if (n2.__esModule)
    return n2;
  var a = Object.defineProperty({}, "__esModule", {
    value: true
  });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a;
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var reactIs$1 = { exports: {} };
var reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = typeof Symbol === "function" && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f$1 = b ? Symbol.for("react.strict_mode") : 60108, g$1 = b ? Symbol.for("react.profiler") : 60114, h$1 = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m$1 = b ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b ? Symbol.for("react.forward_ref") : 60112, p$1 = b ? Symbol.for("react.suspense") : 60113, q$1 = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if (typeof a === "object" && a !== null) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m$1:
          case e:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n$1:
              case t:
              case r:
              case h$1:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m$1;
}
reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m$1;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h$1;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n$1;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g$1;
reactIs_production_min.StrictMode = f$1;
reactIs_production_min.Suspense = p$1;
reactIs_production_min.isAsyncMode = function(a) {
  return A(a) || z(a) === l;
};
reactIs_production_min.isConcurrentMode = A;
reactIs_production_min.isContextConsumer = function(a) {
  return z(a) === k;
};
reactIs_production_min.isContextProvider = function(a) {
  return z(a) === h$1;
};
reactIs_production_min.isElement = function(a) {
  return typeof a === "object" && a !== null && a.$$typeof === c;
};
reactIs_production_min.isForwardRef = function(a) {
  return z(a) === n$1;
};
reactIs_production_min.isFragment = function(a) {
  return z(a) === e;
};
reactIs_production_min.isLazy = function(a) {
  return z(a) === t;
};
reactIs_production_min.isMemo = function(a) {
  return z(a) === r;
};
reactIs_production_min.isPortal = function(a) {
  return z(a) === d;
};
reactIs_production_min.isProfiler = function(a) {
  return z(a) === g$1;
};
reactIs_production_min.isStrictMode = function(a) {
  return z(a) === f$1;
};
reactIs_production_min.isSuspense = function(a) {
  return z(a) === p$1;
};
reactIs_production_min.isValidElementType = function(a) {
  return typeof a === "string" || typeof a === "function" || a === e || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || typeof a === "object" && a !== null && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h$1 || a.$$typeof === k || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
reactIs_production_min.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min;
}
var reactIs = reactIs$1.exports;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols$1) {
      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
const React = window["React"];
function invariant(condition, message) {
  if (condition)
    return;
  var error = new Error("loadable: " + message);
  error.framesToPop = 1;
  error.name = "Invariant Violation";
  throw error;
}
var Context = /* @__PURE__ */ React.createContext();
var LOADABLE_SHARED = {
  initialChunks: {}
};
var STATUS_PENDING = "PENDING";
var STATUS_RESOLVED = "RESOLVED";
var STATUS_REJECTED = "REJECTED";
function resolveConstructor(ctor) {
  if (typeof ctor === "function") {
    return {
      requireAsync: ctor,
      resolve: function resolve() {
        return void 0;
      },
      chunkName: function chunkName() {
        return void 0;
      }
    };
  }
  return ctor;
}
var withChunkExtractor = function withChunkExtractor2(Component) {
  return function(props) {
    return React.createElement(Context.Consumer, null, function(extractor) {
      return React.createElement(Component, Object.assign({
        __chunkExtractor: extractor
      }, props));
    });
  };
};
var identity = function identity2(v2) {
  return v2;
};
function createLoadable(_ref) {
  var _ref$defaultResolveCo = _ref.defaultResolveComponent, defaultResolveComponent2 = _ref$defaultResolveCo === void 0 ? identity : _ref$defaultResolveCo, _render = _ref.render, onLoad2 = _ref.onLoad;
  function loadable2(loadableConstructor, options) {
    if (options === void 0) {
      options = {};
    }
    var ctor = resolveConstructor(loadableConstructor);
    var cache = {};
    function _getCacheKey(props) {
      if (options.cacheKey) {
        return options.cacheKey(props);
      }
      if (ctor.resolve) {
        return ctor.resolve(props);
      }
      return null;
    }
    function resolve(module, props, Loadable2) {
      var Component = options.resolveComponent ? options.resolveComponent(module, props) : defaultResolveComponent2(module);
      if (options.resolveComponent && !reactIs$1.exports.isValidElementType(Component)) {
        throw new Error("resolveComponent returned something that is not a React component!");
      }
      hoistNonReactStatics_cjs(Loadable2, Component, {
        preload: true
      });
      return Component;
    }
    var InnerLoadable = /* @__PURE__ */ function(_React$Component) {
      _inheritsLoose(InnerLoadable2, _React$Component);
      InnerLoadable2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var cacheKey = _getCacheKey(props);
        return _extends({}, state, {
          cacheKey,
          loading: state.loading || state.cacheKey !== cacheKey
        });
      };
      function InnerLoadable2(props) {
        var _this;
        _this = _React$Component.call(this, props) || this;
        _this.state = {
          result: null,
          error: null,
          loading: true,
          cacheKey: _getCacheKey(props)
        };
        invariant(!props.__chunkExtractor || ctor.requireSync, "SSR requires `@loadable/babel-plugin`, please install it");
        if (props.__chunkExtractor) {
          if (options.ssr === false) {
            return _assertThisInitialized(_this);
          }
          ctor.requireAsync(props)["catch"](function() {
            return null;
          });
          _this.loadSync();
          props.__chunkExtractor.addChunk(ctor.chunkName(props));
          return _assertThisInitialized(_this);
        }
        if (options.ssr !== false && (ctor.isReady && ctor.isReady(props) || ctor.chunkName && LOADABLE_SHARED.initialChunks[ctor.chunkName(props)])) {
          _this.loadSync();
        }
        return _this;
      }
      var _proto = InnerLoadable2.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        var cachedPromise = this.getCache();
        if (cachedPromise && cachedPromise.status === STATUS_REJECTED) {
          this.setCache();
        }
        if (this.state.loading) {
          this.loadAsync();
        }
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevState.cacheKey !== this.state.cacheKey) {
          this.loadAsync();
        }
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      _proto.safeSetState = function safeSetState(nextState, callback) {
        if (this.mounted) {
          this.setState(nextState, callback);
        }
      };
      _proto.getCacheKey = function getCacheKey() {
        return _getCacheKey(this.props) || JSON.stringify(this.props);
      };
      _proto.getCache = function getCache() {
        return cache[this.getCacheKey()];
      };
      _proto.setCache = function setCache(value) {
        if (value === void 0) {
          value = void 0;
        }
        cache[this.getCacheKey()] = value;
      };
      _proto.triggerOnLoad = function triggerOnLoad() {
        var _this2 = this;
        if (onLoad2) {
          setTimeout(function() {
            onLoad2(_this2.state.result, _this2.props);
          });
        }
      };
      _proto.loadSync = function loadSync() {
        if (!this.state.loading)
          return;
        try {
          var loadedModule = ctor.requireSync(this.props);
          var result = resolve(loadedModule, this.props, Loadable);
          this.state.result = result;
          this.state.loading = false;
        } catch (error) {
          console.error("loadable-components: failed to synchronously load component, which expected to be available", {
            fileName: ctor.resolve(this.props),
            chunkName: ctor.chunkName(this.props),
            error: error ? error.message : error
          });
          this.state.error = error;
        }
      };
      _proto.loadAsync = function loadAsync() {
        var _this3 = this;
        var promise = this.resolveAsync();
        promise.then(function(loadedModule) {
          var result = resolve(loadedModule, _this3.props, {
            Loadable
          });
          _this3.safeSetState({
            result,
            loading: false
          }, function() {
            return _this3.triggerOnLoad();
          });
        })["catch"](function(error) {
          return _this3.safeSetState({
            error,
            loading: false
          });
        });
        return promise;
      };
      _proto.resolveAsync = function resolveAsync() {
        var _this4 = this;
        var _this$props = this.props;
        _this$props.__chunkExtractor;
        _this$props.forwardedRef;
        var props = _objectWithoutPropertiesLoose(_this$props, ["__chunkExtractor", "forwardedRef"]);
        var promise = this.getCache();
        if (!promise) {
          promise = ctor.requireAsync(props);
          promise.status = STATUS_PENDING;
          this.setCache(promise);
          promise.then(function() {
            promise.status = STATUS_RESOLVED;
          }, function(error) {
            console.error("loadable-components: failed to asynchronously load component", {
              fileName: ctor.resolve(_this4.props),
              chunkName: ctor.chunkName(_this4.props),
              error: error ? error.message : error
            });
            promise.status = STATUS_REJECTED;
          });
        }
        return promise;
      };
      _proto.render = function render3() {
        var _this$props2 = this.props, forwardedRef = _this$props2.forwardedRef, propFallback = _this$props2.fallback;
        _this$props2.__chunkExtractor;
        var props = _objectWithoutPropertiesLoose(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);
        var _this$state = this.state, error = _this$state.error, loading = _this$state.loading, result = _this$state.result;
        if (options.suspense) {
          var cachedPromise = this.getCache() || this.loadAsync();
          if (cachedPromise.status === STATUS_PENDING) {
            throw this.loadAsync();
          }
        }
        if (error) {
          throw error;
        }
        var fallback = propFallback || options.fallback || null;
        if (loading) {
          return fallback;
        }
        return _render({
          fallback,
          result,
          options,
          props: _extends({}, props, {
            ref: forwardedRef
          })
        });
      };
      return InnerLoadable2;
    }(React.Component);
    var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);
    var Loadable = React.forwardRef(function(props, ref) {
      return React.createElement(EnhancedInnerLoadable, Object.assign({
        forwardedRef: ref
      }, props));
    });
    Loadable.preload = function(props) {
      ctor.requireAsync(props);
    };
    Loadable.load = function(props) {
      return ctor.requireAsync(props);
    };
    return Loadable;
  }
  function lazy2(ctor, options) {
    return loadable2(ctor, _extends({}, options, {
      suspense: true
    }));
  }
  return {
    loadable: loadable2,
    lazy: lazy2
  };
}
function defaultResolveComponent(loadedModule) {
  return loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
}
var _createLoadable = /* @__PURE__ */ createLoadable({
  defaultResolveComponent,
  render: function render(_ref) {
    var Component = _ref.result, props = _ref.props;
    return React.createElement(Component, props);
  }
}), loadable = _createLoadable.loadable, lazy = _createLoadable.lazy;
var _createLoadable$1 = /* @__PURE__ */ createLoadable({
  onLoad: function onLoad(result, props) {
    if (result && props.forwardedRef) {
      if (typeof props.forwardedRef === "function") {
        props.forwardedRef(result);
      } else {
        props.forwardedRef.current = result;
      }
    }
  },
  render: function render2(_ref) {
    var result = _ref.result, props = _ref.props;
    if (props.children) {
      return props.children(result);
    }
    return null;
  }
}), loadable$1 = _createLoadable$1.loadable, lazy$1 = _createLoadable$1.lazy;
var loadable$2 = loadable;
loadable$2.lib = loadable$1;
var lazy$2 = lazy;
lazy$2.lib = lazy$1;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = window["React"], g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if (typeof Symbol === "function" && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
function q(c2, a, k2) {
  var b2, d2 = {}, e2 = null, l2 = null;
  k2 !== void 0 && (e2 = "" + k2);
  a.key !== void 0 && (e2 = "" + a.key);
  a.ref !== void 0 && (l2 = a.ref);
  for (b2 in a)
    n.call(a, b2) && !p.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a = c2.defaultProps, a)
      d2[b2] === void 0 && (d2[b2] = a[b2]);
  return {
    $$typeof: g,
    type: c2,
    key: e2,
    ref: l2,
    props: d2,
    _owner: m.current
  };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
export { _assertThisInitialized as _, _setPrototypeOf as a, _extends as b, commonjsGlobal as c, commonjsRequire as d, getAugmentedNamespace as g, jsxRuntime as j, loadable$2 as l };
