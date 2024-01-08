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
import { q as ExpressionBuilderInput, r as getModuleItem, s as EditorColor, t as AnyInput, u as business, F as FormBusinessContext, v as defineConfig, a as Selector, T as TreeSelector, b as EditLookup, w as Icon, x as EditFunction, y as EditField, z as EditField$1, B as EditStyle, D as EditClass, G as EditFunction$1, H as MonacoEditor, J as JSONList, K as MonacoSchemaEditor, L as EditReactNode, N as EditReactNode$1, E as EditModelKey, m as moduleStore, O as systemList, P as htmlModuleList } from "./index.ddeb24a7.js";
import "./vendor.96977194.js";
import { b as ajax, a as app, U as addCSS, Y as alphabeticKeys, h as utils, O as dynamicCreateModule } from "./hoc.db8d1922.js";
import { j as jsx, a as jsxs, F as Fragment } from "./index.2da18b09.js";
import "./index.8af457a4.js";
import "./16bf2v6a1.2a68b2f2.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
var NodeInput = (props) => /* @__PURE__ */ jsx(ExpressionBuilderInput, __spreadValues({
  placeholder: "\u8BF7\u8F93\u5165",
  autoComplete: "off"
}, props));
const getModuleList = (ids) => {
  return ajax.post("/apijson/get", {
    "Module[]": {
      count: 0,
      Module: {
        "id{}": ids,
        platform: app.platform,
        deletedTime: 0,
        "appId": app.appId,
        "@column": "id,moduleId,name,imgUrl,nickname,description,deletedTime,category,display,content,extraInfo,jsxRender,platform,price,manufacturer,props,source"
      }
    }
  }).then((res) => {
    const list = res.Module.map(getModuleItem);
    for (const item of list) {
      if (item.source == "custom" && item.extraInfo && item.extraInfo.cssStr) {
        addCSS(item.extraInfo.cssStr, item.moduleId);
      }
    }
    return list;
  });
};
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
class Store$1 {
  constructor() {
    _defineProperty$1(this, "value", []);
    _defineProperty$1(this, "setValue", (list) => {
      this.value = list;
    });
  }
}
var style = "";
const useEffect$1 = window["React"].useEffect;
const useMemo = window["React"].useMemo;
const useState$1 = window["React"].useState;
const Table = window["arco"].Table;
const Checkbox = window["arco"].Checkbox;
const InputNumber = window["arco"].InputNumber;
const Button = window["arco"].Button;
const Input = window["arco"].Input;
const Space = window["arco"].Space;
const IconArrowDown = window["arcoicon"].IconArrowDown;
const IconArrowUp = window["arcoicon"].IconArrowUp;
const IconDelete = window["arcoicon"].IconDelete;
const IconPlus = window["arcoicon"].IconPlus;
const EditorTable = (_a) => {
  var _b = _a, {
    notOperation,
    notAdd
  } = _b, props = __objRest(_b, [
    "notOperation",
    "notAdd"
  ]);
  const [rowKey] = useState$1(() => typeof props.rowKey === "string" ? props.rowKey : "id");
  const [store] = useState$1(() => new Store$1());
  const data = props.value || [];
  useEffect$1(() => {
    if (Array.isArray(props.value) && !Object.is(store.value, props.value)) {
      store.setValue(props.value.map((o) => __spreadValues({
        [rowKey]: Math.random().toString(32).slice(2)
      }, o)));
    } else {
      store.setValue([]);
    }
  }, [props.value]);
  const onChange = (list) => {
    const column = props.columns.find((o) => o.valueType === "index" || o.valueType === "letter");
    const result = list.map((o, index) => {
      if (column) {
        return __spreadProps(__spreadValues({}, o), {
          [column.dataIndex]: column.valueType === "index" ? index : alphabeticKeys[index]
        });
      }
      return __spreadValues({}, o);
    });
    if (!props.value) {
      store.setValue(result);
    }
    if (props.onChange)
      props.onChange(result);
  };
  const onChangeItem = (i, item) => {
    const result = [...store.value];
    result[i] = item;
    onChange(result);
  };
  const columns = useMemo(() => {
    if (!props.columns)
      return [];
    const result = [...props.columns.map((o, i) => {
      if (!o.render && o.valueType !== "text") {
        o.render = (value, record, index) => {
          switch (o.valueType) {
            case "index":
            case "letter":
              return value;
            case "any":
              return /* @__PURE__ */ jsx(AnyInput, {
                value,
                onChange: (val) => onChangeItem(index, __spreadProps(__spreadValues({}, record), {
                  [o.dataIndex]: val
                }))
              }, record[rowKey]);
            case "checkout":
              return /* @__PURE__ */ jsx(Checkbox, {
                checked: value,
                onChange: (val) => onChangeItem(index, __spreadProps(__spreadValues({}, record), {
                  [o.dataIndex]: val
                }))
              }, record[rowKey]);
            case "number":
              return /* @__PURE__ */ jsx(InputNumber, {
                placeholder: "\u8BF7\u8F93\u5165",
                value,
                onChange: (val) => onChangeItem(index, __spreadProps(__spreadValues({}, record), {
                  [o.dataIndex]: val
                }))
              }, record[rowKey]);
            case "color":
              return /* @__PURE__ */ jsx(EditorColor, {
                value,
                onChange: (val) => {
                  onChangeItem(index, __spreadProps(__spreadValues({}, record), {
                    [o.dataIndex]: val
                  }));
                }
              }, record[rowKey]);
            default:
              return /* @__PURE__ */ jsx(Input, {
                placeholder: "\u8BF7\u8F93\u5165",
                value,
                onChange: (val) => onChangeItem(index, __spreadProps(__spreadValues({}, record), {
                  [o.dataIndex]: val
                }))
              }, record[rowKey]);
          }
        };
      }
      return o;
    })];
    if (!notOperation) {
      result.push({
        title: "\u64CD\u4F5C",
        dataIndex: rowKey,
        width: 60,
        render: (_, item, index) => /* @__PURE__ */ jsxs(Space, {
          size: "mini",
          children: [/* @__PURE__ */ jsx(Button, {
            size: "mini",
            shape: "circle",
            status: "danger",
            type: "primary",
            icon: /* @__PURE__ */ jsx(IconDelete, {}),
            onClick: () => {
              onChange(store.value.filter((o) => o[rowKey] !== item[rowKey]));
            }
          }), Boolean(index) ? /* @__PURE__ */ jsx(Button, {
            size: "mini",
            shape: "circle",
            type: "primary",
            icon: /* @__PURE__ */ jsx(IconArrowUp, {}),
            onClick: () => {
              store.value.splice(index, 1);
              store.value.splice(index - 1, 0, item);
              onChange([...store.value]);
            }
          }) : /* @__PURE__ */ jsx(Button, {
            size: "mini",
            shape: "circle",
            type: "primary",
            icon: /* @__PURE__ */ jsx(IconArrowDown, {}),
            onClick: () => {
              store.value.splice(index, 1);
              store.value.splice(index + 1, 0, item);
              onChange([...store.value]);
            }
          })]
        })
      });
    }
    return result;
  }, [props.columns]);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Table, __spreadProps(__spreadValues({
      className: "editor-table",
      pagination: false,
      rowKey
    }, props), {
      data,
      onChange: void 0,
      columns
    })), !notAdd && /* @__PURE__ */ jsx(Button, {
      type: "outline",
      style: {
        width: "100%",
        marginTop: 8
      },
      icon: /* @__PURE__ */ jsx(IconPlus, {}),
      onClick: () => onChangeItem(store.value.length, {
        [rowKey]: Math.random().toString(32).slice(2)
      }),
      children: "\u6DFB\u52A0"
    })]
  });
};
var _class, _descriptor, _descriptor2;
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
const observable = window["mobx"].observable;
const computed = window["mobx"].computed;
const toJS = window["mobx"].toJS;
let Store = (_class = class Store2 {
  constructor() {
    _initializerDefineProperty(this, "values", _descriptor, this);
    _initializerDefineProperty(this, "setValues", _descriptor2, this);
    _defineProperty(this, "init", async (value) => {
      const {
        tableId,
        modelKey,
        itemId
      } = value;
      if (business.info[tableId]) {
        this.setValues(__spreadProps(__spreadValues({}, business.info[tableId]), {
          modelKey,
          itemId
        }));
        return;
      }
      const fields = await utils.ajax.get("/custom/table/fields", {
        customTableInfoId: tableId
      });
      const tables = await utils.ajax.get("/custom/relation/itemTable", {
        tableId
      });
      business.setInfo(tableId, {
        fields,
        tables
      });
      this.setValues({
        fields,
        tables,
        modelKey,
        itemId
      });
    });
    _defineProperty(this, "unInit", () => {
      this.setValues({});
    });
  }
  get businessObj() {
    return toJS(this.values);
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "values", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "setValues", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (val) => {
      this.values = val;
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "businessObj", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "businessObj"), _class.prototype), _class);
const useEffect = window["React"].useEffect;
const useState = window["React"].useState;
const useObserver = window["mobxReactLite"].useObserver;
var FormBusiness = ({
  value,
  children
}) => {
  const [store] = useState(() => new Store());
  const [BusinessContext] = useState(() => {
    return ReactGtssForm.config.state.contexts["system_business"];
  });
  useEffect(() => {
    const {
      tableId,
      modelKey
    } = value || {};
    if (!tableId) {
      store.unInit();
    } else {
      store.init(value);
    }
    console.log("value", value);
  }, [value == null ? void 0 : value.tableId]);
  return useObserver(() => {
    return /* @__PURE__ */ jsx(BusinessContext.Provider, {
      value,
      children: /* @__PURE__ */ jsx(FormBusinessContext.Provider, {
        value: store.businessObj,
        children
      })
    });
  });
};
const React = window["React"];
const createElement = window["React"].createElement;
const Switch = window["arco"].Switch;
defineConfig({
  typescriptURL: "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/typescript.min.js",
  lessURL: "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/less.min.js",
  schema: {
    formats: {
      "boolean": (props) => createElement(Switch, __spreadValues({
        checked: props.value
      }, props)),
      "selector": Selector,
      "treeSelector": TreeSelector,
      "featch": EditLookup,
      "lookup": (props) => createElement(Selector, __spreadValues({
        type: "lookup"
      }, props)),
      "icon": Icon,
      "function": EditFunction,
      "js": EditFunction,
      "field": EditField,
      "itemTable": EditField$1,
      "style": EditStyle,
      "class": EditClass,
      "color": EditorColor,
      "nodeInput": NodeInput,
      "editorTable": EditorTable,
      "jsonSchema": EditFunction$1,
      "json": MonacoEditor,
      "jsonList": JSONList,
      "object": JSONList.JSONEdit,
      "schema": MonacoSchemaEditor,
      "node": EditReactNode,
      "functionNode": EditReactNode$1,
      "modelKey": EditModelKey
    },
    sources: {
      "featch": {
        funName: "featchData"
      }
    },
    pageInjectedVars: ["forms"]
  },
  modules: {
    getRender: (item) => {
      const config = ReactGtssForm.config;
      const {
        key,
        source,
        name
      } = item;
      let render = () => null;
      switch (source) {
        case "arco":
          render = config.state.mModules[key] || (() => key);
          break;
        case "custom":
          if (item.jsxRender) {
            render = dynamicCreateModule(item.jsxRender);
          }
          config.state.mModules[item.key] = render;
          break;
        case "system":
          render = config.state.mModules[item.key];
          break;
        case "context":
          if (!config.state.contexts[item.key]) {
            config.state.contexts[item.key] = React.createContext(item.extraInfo.defaultProps);
          }
          if (item.key === "system_business") {
            render = FormBusiness;
          } else {
            render = config.state.contexts[item.key].Provider;
          }
          config.state.mModules[item.key] = render;
          break;
      }
      if (render && render.preload) {
        render.preload();
      }
      return render;
    }
  },
  api: {
    getModuleList
  },
  dependencies: {
    pandora: "pandora",
    arco: "arco-design/web-react"
  },
  run: ReactGtssForm.config
});
moduleStore.setElements(systemList);
htmlModuleList.forEach((o) => {
  moduleStore.elements.set(o.key, __spreadValues({
    render: (props) => {
      const _a = props, {
        children
      } = _a, params = __objRest(_a, [
        "children"
      ]);
      return React.createElement(o.key, params, ...React.Children.toArray(children));
    }
  }, o));
});
