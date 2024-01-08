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
import { d as SchemaPage } from "./index.ddeb24a7.js";
import { a as app, b as ajax } from "./hoc.db8d1922.js";
import { j as jsx } from "./index.2da18b09.js";
import "./vendor.96977194.js";
import "./index.8af457a4.js";
import "./16bf2v6a1.2a68b2f2.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;
function _initializerDefineProperty(target, property, descriptor, context) {
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
const computed = window["mobx"].computed;
const observable = window["mobx"].observable;
let Store = (_class = class Store2 {
  constructor() {
    _initializerDefineProperty(this, "key", _descriptor, this);
    _initializerDefineProperty(this, "setKey", _descriptor2, this);
    _initializerDefineProperty(this, "type", _descriptor3, this);
    _initializerDefineProperty(this, "setType", _descriptor4, this);
    _defineProperty(this, "getTableData", (params) => {
      return ajax.post("/apijson/get", {
        "Menu[]": {
          "query": 2,
          "count": 0,
          "Menu": __spreadProps(__spreadValues({}, params), {
            "classId": this.classId,
            "@order": "sort+",
            "@column": ["id", "name", "icon", "sort", "parentId", "mode", "isShow", "isActive", "path", "componentPath", "updatedAt"].join(",")
          })
        },
        "info@": "/Menu[]/info"
      }).then((res) => {
        return {
          list: res.Menu,
          total: res.info.total
        };
      });
    });
    _defineProperty(this, "getDetail", (item) => {
      return ajax.post("/apijson/get", {
        Menu: {
          id: item.id
        }
      }).then((res) => {
        return __spreadValues({}, res.Menu);
      });
    });
  }
  get classId() {
    if (app.appId) {
      return app.appId;
    }
    return this.type;
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "key", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return "";
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "setKey", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return () => {
      this.key = Math.random().toString(32);
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "type", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return "system";
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "setType", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (type) => {
      this.type = type;
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "classId", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "classId"), _class.prototype), _class);
var store = new Store();
const Message = window["arco"].Message;
const Modal = window["arco"].Modal;
const useObserver = window["mobxReactLite"].useObserver;
const useMemo = window["React"].useMemo;
const useRef = window["React"].useRef;
const ParentIdField = (_a) => {
  var _b = _a, {
    form,
    Field
  } = _b, props = __objRest(_b, [
    "form",
    "Field"
  ]);
  return useObserver(() => {
    return /* @__PURE__ */ jsx(Field, __spreadProps(__spreadValues({}, props), {
      findParams: {
        "classId": store.classId
      }
    }), store.key);
  });
};
const getSchema = () => ({
  "type": "object",
  "title": "\u83DC\u5355",
  "properties": {
    "parentId": {
      "type": "string",
      "title": "\u4E0A\u7EA7\u83DC\u5355",
      "colProps": {
        "span": 24
      },
      "format": "treeSelector",
      "fieldProps": {
        "type": "menu"
      },
      "widget": "ParentIdField",
      "default": null
    },
    "type": {
      "type": "string",
      "title": "\u83DC\u5355\u7C7B\u578B",
      "colProps": {
        "span": 24
      },
      "format": "radio",
      "enum": [{
        "label": "\u76EE\u5F55",
        "value": "directory"
      }, {
        "label": "\u83DC\u5355",
        "value": "menu"
      }],
      "default": "directory"
    },
    "icon": {
      "type": "string",
      "title": "\u83DC\u5355\u56FE\u6807",
      "format": "icon",
      "colProps": {
        "span": 24
      },
      "default": null
    },
    "name": {
      "type": "string",
      "title": "\u83DC\u5355\u540D\u79F0",
      "maxLength": 50,
      "default": null
    },
    "sort": {
      "type": "integer",
      "title": "\u6392\u5E8F",
      "formItemProps": {
        "title": "\u663E\u793A\u6392\u5E8F"
      },
      "default": null
    },
    "isLink": {
      "type": "boolean",
      "title": "\u662F\u5426\u5916\u94FE",
      "formItemProps": {
        "tooltip": "\u9009\u62E9\u662F\u5916\u94FE\u5219\u8DEF\u7531\u5730\u5740\u9700\u8981\u4EE5`http(s)://`\u5F00\u5934"
      },
      "default": false
    },
    "path": {
      "type": "string",
      "title": "\u8DEF\u7531\u5730\u5740",
      "maxLength": 100,
      "default": null
    },
    "mode": {
      "type": "string",
      "title": "\u83DC\u5355\u7C7B\u578B",
      "show": {
        "type": "menu"
      },
      "format": "radio",
      "enum": [{
        "label": "\u539F\u751F",
        "value": "native",
        color: "green"
      }, {
        "label": "\u81EA\u5B9A\u4E49",
        "value": "custom",
        color: "arcoblue"
      }],
      "default": "native"
    },
    "componentPath": {
      "type": "string",
      "title": "\u7EC4\u4EF6\u8DEF\u5F84\u5730\u5740",
      "show": {
        "mode!": "custom",
        "type": "menu"
      },
      "default": null
    },
    "pageId": {
      "type": "number",
      "title": "\u5173\u8054\u9875\u9762",
      "show": {
        "mode": "custom",
        "type": "menu"
      },
      "format": "selector",
      "fieldProps": {
        "type": "page",
        "findParams": {}
      },
      "default": null
    },
    "isShow": {
      "type": "boolean",
      "title": "\u662F\u5426\u663E\u793A",
      "format": "radio",
      "enum": [{
        "value": 1,
        "label": "\u663E\u793A",
        "color": "blue"
      }, {
        "value": 0,
        "label": "\u9690\u85CF",
        "color": "red"
      }],
      "formItemProps": {
        "tooltip": "\u5173\u95ED\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE"
      },
      "default": 1
    },
    "isActive": {
      "type": "boolean",
      "title": "\u83DC\u5355\u72B6\u6001",
      "format": "radio",
      "enum": [{
        "value": 1,
        "label": "\u6B63\u5E38",
        "color": "blue"
      }, {
        "value": 0,
        "label": "\u5173\u95ED",
        "color": "red"
      }],
      "formItemProps": {
        "tooltip": "\u5173\u95ED\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE"
      },
      "default": 1
    },
    "updatedAt": {
      "type": "string",
      "format": "dateTime",
      "title": "\u6700\u8FD1\u4E00\u6B21\u66F4\u65B0\u65F6\u95F4",
      "default": null
    }
  },
  "required": ["name", "path"]
});
var index = () => {
  return useObserver(() => {
    const pageRef = useRef();
    const tableHeaderTitle = useMemo(() => {
      return [];
    }, [store.type]);
    const schema = useMemo(() => getSchema(), []);
    return /* @__PURE__ */ jsx(SchemaPage, {
      ref: pageRef,
      schema,
      rowSelection: true,
      treeBool: true,
      className: "page-container",
      api: {
        find: (_a) => {
          var _b = _a, {
            pageSize,
            current
          } = _b, params = __objRest(_b, [
            "pageSize",
            "current"
          ]);
          return store.getTableData(params);
        },
        get: (item) => {
          return store.getDetail(item);
        },
        post: (form) => {
          return ajax.post("/apijson/post", {
            "Menu": __spreadProps(__spreadValues({}, form), {
              "classId": store.classId
            })
          }).then(() => {
            Message.success({
              content: "\u65B0\u589E\u6210\u529F"
            });
            store.setKey();
          });
        },
        put: (form, data) => {
          if (form.parentId === data.id) {
            Message.error(`\u4E0A\u7EA7\u83DC\u5355\u4E0D\u80FD\u9009\u62E9\u81EA\u5DF1`);
            return Promise.reject();
          }
          return ajax.post("/apijson/put", {
            "Menu": __spreadValues({
              id: data.id
            }, form)
          }).then(() => {
            Message.success({
              content: "\u66F4\u65B0\u6210\u529F"
            });
            store.setKey();
          });
        },
        del: (item) => {
          return new Promise((resolve, reject) => {
            Modal.confirm({
              title: `\u8BF7\u786E\u8BA4\u662F\u5426\u8981\u5220\u9664"${item.name}"?`,
              onOk: () => {
                return ajax.post("/apijson/delete", {
                  "Menu": {
                    id: item.id
                  }
                }).then((res) => {
                  Message.success({
                    content: "\u5220\u9664\u6210\u529F"
                  });
                  store.setKey();
                  resolve(res);
                }).catch(reject);
              },
              onCancel: reject
            });
          });
        }
      },
      schemForm: {
        filterKeys: ["parentId", "type", "icon", "name", "sort", "isLink", "path", "mode", "pageId", "componentPath", "isShow", "isActive"],
        generagteProps: {
          cols: 12,
          widgets: {
            ParentIdField
          }
        }
      },
      schemaTable: {
        pagination: false,
        filterKeys: ["name", "icon", "mode", "sort", "path", "isShow", "isActive", "updatedAt"],
        headerTitle: tableHeaderTitle
      },
      queryForm: {
        filterKeys: ["name", "isActive"]
      }
    });
  });
};
export { ParentIdField, index as default, getSchema };
