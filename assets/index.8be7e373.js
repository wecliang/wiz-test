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
import { m as moduleStore, A as AsyncButton, e as MyErrorBoundary, I as Index$1, f as SchemaForm } from "./index.f9e168f5.js";
import { c as classNames } from "./index.2fdde450.js";
import { O as dynamicCreateModule, T as asyncAwaitFunction, b as ajax, U as addCSS, a as app, q as getUuid, e as convertToTree, g as getSpecificValues, V as filterTreeData, W as searchTreeNode } from "./hoc.3c567b96.js";
import "./vendor.96977194.js";
import { j as jsx, a as jsxs } from "./index.c4195357.js";
import "./13mh1j7et.5aeab982.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
const pages = "_pages_1b4lj_1";
const serach = "_serach_1b4lj_5";
const resize = "_resize_1b4lj_8";
const listHeader = "_listHeader_1b4lj_14";
const listBody = "_listBody_1b4lj_33";
const treeItem = "_treeItem_1b4lj_39";
const treeItemTitle = "_treeItemTitle_1b4lj_39";
const titleText = "_titleText_1b4lj_48";
const body = "_body_1b4lj_63";
const bodyList = "_bodyList_1b4lj_69";
const container = "_container_1b4lj_78";
const content = "_content_1b4lj_82";
const contentScale = "_contentScale_1b4lj_98";
var styles = {
  pages,
  serach,
  resize,
  listHeader,
  listBody,
  treeItem,
  treeItemTitle,
  titleText,
  body,
  bodyList,
  container,
  content,
  contentScale
};
var _class$1, _descriptor$1, _descriptor2$1, _descriptor3$1, _descriptor4$1, _descriptor5$1, _descriptor6$1, _descriptor7, _descriptor8, _descriptor9, _descriptor10;
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
const observable$1 = window["mobx"].observable;
const action$1 = window["mobx"].action;
const computed$1 = window["mobx"].computed;
const toJS$1 = window["mobx"].toJS;
let Store$1 = (_class$1 = class Store2 {
  constructor() {
    _defineProperty$1(this, "values", {});
    _defineProperty$1(this, "form", void 0);
    _initializerDefineProperty$1(this, "visible", _descriptor$1, this);
    _initializerDefineProperty$1(this, "setVisible", _descriptor2$1, this);
    _initializerDefineProperty$1(this, "copyVisible", _descriptor3$1, this);
    _initializerDefineProperty$1(this, "setCopyVisible", _descriptor4$1, this);
    _initializerDefineProperty$1(this, "select", _descriptor5$1, this);
    _initializerDefineProperty$1(this, "onSelect", _descriptor6$1, this);
    _initializerDefineProperty$1(this, "expandedKeys", _descriptor7, this);
    _initializerDefineProperty$1(this, "setExpandedKeys", _descriptor8, this);
    _defineProperty$1(this, "addExpandedKeys", (item) => {
      this.setExpandedKeys([...this.expandedList, item.id]);
    });
    _defineProperty$1(this, "saveExpandedKeys", (item) => {
      if (this.expandedList.find((o) => o == item.id)) {
        this.setExpandedKeys(this.expandedList.filter((o) => o != item.id));
      } else {
        this.addExpandedKeys(item);
      }
    });
    _defineProperty$1(this, "schema", {
      "type": "object",
      "title": "\u83DC\u5355",
      "properties": {
        "parentId": {
          "type": "string",
          "title": "\u4E0A\u7EA7\u83DC\u5355",
          "colProps": {
            "span": 24
          },
          "show": {
            "type": "menu"
          },
          "format": "treeSelector",
          "fieldProps": {
            "type": "menu"
          },
          "default": null
        },
        "name": {
          "type": "string",
          "title": "\u83DC\u5355\u540D\u79F0",
          "maxLength": 50,
          "default": null
        },
        "path": {
          "type": "string",
          "title": "\u8DEF\u7531\u5730\u5740",
          "pattern": "^[0-9a-z]+$",
          "maxLength": 100,
          "default": null
        }
      },
      "required": ["name", "path"]
    });
    _defineProperty$1(this, "copySchema", {});
    _initializerDefineProperty$1(this, "search", _descriptor9, this);
    _initializerDefineProperty$1(this, "setSearch", _descriptor10, this);
  }
  get expandedList() {
    return toJS$1(this.expandedKeys);
  }
}, _descriptor$1 = _applyDecoratedDescriptor$1(_class$1.prototype, "visible", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor2$1 = _applyDecoratedDescriptor$1(_class$1.prototype, "setVisible", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (bool, params = {}) => {
      this.visible = bool;
      this.values = params;
    };
  }
}), _descriptor3$1 = _applyDecoratedDescriptor$1(_class$1.prototype, "copyVisible", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor4$1 = _applyDecoratedDescriptor$1(_class$1.prototype, "setCopyVisible", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (bool, params = {}) => {
      this.visible = bool;
      this.values = params;
    };
  }
}), _descriptor5$1 = _applyDecoratedDescriptor$1(_class$1.prototype, "select", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return "";
  }
}), _descriptor6$1 = _applyDecoratedDescriptor$1(_class$1.prototype, "onSelect", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (list) => {
      this.select = list[0];
    };
  }
}), _descriptor7 = _applyDecoratedDescriptor$1(_class$1.prototype, "expandedKeys", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return [];
  }
}), _descriptor8 = _applyDecoratedDescriptor$1(_class$1.prototype, "setExpandedKeys", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (list) => {
      this.expandedKeys = list;
    };
  }
}), _applyDecoratedDescriptor$1(_class$1.prototype, "expandedList", [computed$1], Object.getOwnPropertyDescriptor(_class$1.prototype, "expandedList"), _class$1.prototype), _descriptor9 = _applyDecoratedDescriptor$1(_class$1.prototype, "search", [observable$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return "";
  }
}), _descriptor10 = _applyDecoratedDescriptor$1(_class$1.prototype, "setSearch", [action$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (str) => {
      this.search = str;
    };
  }
}), _class$1);
var store = new Store$1();
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _descriptor5, _descriptor6;
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
const Message = window["arco"].Message;
const Modal$1 = window["arco"].Modal;
const action = window["mobx"].action;
const computed = window["mobx"].computed;
const observable = window["mobx"].observable;
const _$2 = window["_"];
const dayjs = window["dayjs"];
let PageStore = (_class = class PageStore2 {
  constructor() {
    _initializerDefineProperty(this, "isActive", _descriptor, this);
    _initializerDefineProperty(this, "setIsActive", _descriptor2, this);
    _defineProperty(this, "loading", false);
    _defineProperty(this, "updateIsActive", asyncAwaitFunction(async () => {
      if (this.isActive) {
        await ajax.post("/apijson/put", {
          "Menu": {
            "isActive": 0,
            id: this.menu.id
          }
        });
      } else {
        await ajax.post("/apijson/put", {
          "Menu": {
            "isActive": 1,
            id: this.menu.id
          }
        });
      }
      this.setIsActive(!this.isActive);
      Message.success("\u8DEF\u7531\u72B6\u6001\u66F4\u65B0\u6210\u529F");
    }));
    _defineProperty(this, "menu", void 0);
    _defineProperty(this, "setMenu", (item) => {
      this.menu = item;
      this.isActive = item.isActive == 1;
    });
    _initializerDefineProperty(this, "render", _descriptor3, this);
    _initializerDefineProperty(this, "setRender", _descriptor4, this);
  }
  get updateTime() {
    return dayjs(this.updatedAt || 0).format("YYYY-MM-DD HH:mm:ss");
  }
  updateData(data) {
    _$2.assign(this, data);
    this.setRender();
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "isActive", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "setIsActive", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (bool) => {
      this.isActive = bool;
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "render", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "setRender", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return () => {
      this.render = this.jsxRender ? dynamicCreateModule(this.jsxRender) : null;
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "updateTime", [computed], Object.getOwnPropertyDescriptor(_class.prototype, "updateTime"), _class.prototype), _class);
let Store = (_class3 = class Store22 {
  constructor() {
    _defineProperty(this, "pages", {});
    _defineProperty(this, "addPage", async (data) => {
      const page = this.pages[data.id];
      page.updateData(data);
      this.pages[data.id] = page;
    });
    _defineProperty(this, "getPageList", () => {
      const ids = this.menus.map((o) => {
        if (o.type === "menu" && o.pageId) {
          this.pages[o.pageId] = this.pages[o.pageId] || new PageStore();
          this.pages[o.pageId].setMenu(o);
        }
        return o.pageId;
      }).filter((o) => o);
      if (!ids.length)
        return;
      ajax.post("/apijson/get", {
        "Page[]": {
          "count": 0,
          "Page": {
            "id{}": ids,
            "@column": ["id", "title", "type", "description", "status", "coverImage", "pageTitle", "userId", "extraInfo", "jsxRender", "updatedAt"].join(",")
          }
        }
      }).then(async (res) => {
        if (Array.isArray(res.Page)) {
          for (const item of res.Page) {
            this.addPage(item);
            const {
              extraInfo
            } = item;
            if (extraInfo) {
              const data = JSON.parse(extraInfo);
              if (data.components && Array.isArray(data.components)) {
                await moduleStore.syncModuleIds(data.components);
              }
              if (data.cssStr) {
                addCSS(data.cssStr, item.id);
              }
            }
          }
        }
      });
    });
    _initializerDefineProperty(this, "menus", _descriptor5, this);
    _initializerDefineProperty(this, "setMenus", _descriptor6, this);
    _defineProperty(this, "getMenuList", () => {
      ajax.post("/apijson/get", {
        "Menu[]": {
          "count": 0,
          "Menu": {
            "@order": "sort+"
          }
        }
      }).then((res) => {
        this.setMenus(res.Menu);
      });
    });
    _defineProperty(this, "updateMenu", (params) => {
    });
    _defineProperty(this, "createPage", async (params) => {
      await ajax.post("/apijson/post", {
        "Page": {
          id: params.pageId,
          appId: app.appId,
          platform: app.platform,
          title: params.name
        }
      });
    });
    _defineProperty(this, "saveMenu", async (params) => {
      if (params.id) {
        const data = {
          "Menu": {
            id: params.id,
            name: params.name,
            path: params.path
          }
        };
        if (params.type === "menu" && params.pageId) {
          data["Page"] = {
            id: params.pageId,
            title: params.name
          };
        }
        return ajax.post("/apijson/put", data).then(() => {
          Message.success({
            content: "\u66F4\u65B0\u6210\u529F"
          });
          this.getMenuList();
        });
      }
      if (params.type === "menu") {
        params.pageId = `${app.appId}-${getUuid("hash")}`;
        await this.createPage(params);
      }
      return ajax.post("/apijson/post", {
        "Menu": __spreadProps(__spreadValues({}, params), {
          "sort": Date.now() / 1e3,
          "classId": app.appId
        })
      }).then(async (res) => {
        Message.success({
          content: "\u65B0\u589E\u6210\u529F"
        });
        this.getMenuList();
      });
    });
    _defineProperty(this, "copyNode", (node) => {
      return ajax.post("/apijson/get", {
        "Menu": {
          id: node.id
        },
        "Page": {
          id: node.pageId
        }
      }).then(async (res) => {
        const pageId = `${app.appId}-${getUuid("hash")}`;
        const name = `${node.name} copy`;
        await ajax.post("/apijson/post", {
          "Page": __spreadProps(__spreadValues({}, res.Page), {
            id: pageId
          })
        });
        ajax.post("/apijson/post", {
          "Menu": __spreadProps(__spreadValues({}, _$2.omit(res.Menu, ["id"])), {
            pageId,
            name,
            path: `${node.path}_copy`
          })
        }).then(() => {
          Message.success("\u590D\u5236\u6210\u529F");
          this.getMenuList();
        });
      });
    });
    _defineProperty(this, "deleteNode", (menu) => {
      if (menu.children && menu.children.length) {
        return Message.warning("\u8BF7\u5148\u5220\u9664\u5F53\u524D\u76EE\u5F55\u4E0B\u63A5\u53E3\u6216\u76EE\u5F55\u7B49\u4FE1\u606F");
      }
      Modal$1.confirm({
        title: `\u8BF7\u786E\u8BA4\u5220\u9664\u3010${menu.name}\u3011`,
        onOk: () => {
          let params = {
            "Menu": {
              id: menu.id
            }
          };
          if (menu.type === "menu")
            params["Page"] = {
              id: menu.pageId
            };
          ajax.post("/apijson/delete", params).then((res) => {
            Message.success("\u5220\u9664\u6210\u529F");
            this.getMenuList();
          });
        }
      });
    });
  }
}, _descriptor5 = _applyDecoratedDescriptor(_class3.prototype, "menus", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return [];
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class3.prototype, "setMenus", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (list) => {
      this.menus = list;
      this.getPageList();
    };
  }
}), _class3);
var menuStore = new Store();
const useMemo$2 = window["React"].useMemo;
const Button$2 = window["arco"].Button;
const Card = window["arco"].Card;
const Divider = window["arco"].Divider;
const Dropdown$1 = window["arco"].Dropdown;
const Empty$1 = window["arco"].Empty;
const Menu$1 = window["arco"].Menu;
const Space = window["arco"].Space;
const Switch = window["arco"].Switch;
const Tooltip = window["arco"].Tooltip;
const Typography = window["arco"].Typography;
const IconCodeSquare = window["arcoicon"].IconCodeSquare;
const IconMore = window["arcoicon"].IconMore;
const IconShareInternal = window["arcoicon"].IconShareInternal;
const IconThumbUp = window["arcoicon"].IconThumbUp;
const _$1 = window["_"];
const useHistory = window["ReactRouterDOM"].useHistory;
const useObserver = window["mobxReactLite"].useObserver;
const PageContent = (_a) => {
  var _b = _a, {
    item,
    notScale
  } = _b, props = __objRest(_b, [
    "item",
    "notScale"
  ]);
  const history = useHistory();
  const page = menuStore.pages[item.pageId];
  return useObserver(() => {
    const Element = useMemo$2(() => {
      if (page.render)
        return page.render;
      return () => /* @__PURE__ */ jsx(Empty$1, {});
    }, [page.render]);
    const menuList = /* @__PURE__ */ jsxs(Menu$1, {
      onClick: (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      children: [/* @__PURE__ */ jsx(Menu$1.Item, {
        onClick: () => {
          store.setVisible(true, item);
          store.form.clearFields();
          store.form.setFieldsValue(_$1.pick(item, ["name", "type", "parentId", "path"]));
        },
        children: "\u7F16\u8F91\u83DC\u5355"
      }, "menu"), /* @__PURE__ */ jsx(Menu$1.Item, {
        onClick: () => {
          window.open(`#/run${item.paths}`);
        },
        children: "\u8BBF\u95EE\u9875\u9762"
      }, "categor"), /* @__PURE__ */ jsx(Menu$1.Item, {
        onClick: () => {
        },
        children: "\u9875\u9762\u65E5\u5FD7"
      }, "api"), /* @__PURE__ */ jsx(Menu$1.Item, {
        onClick: () => {
        },
        children: "\u83DC\u5355\u65E5\u5FD7"
      }, "copy")]
    });
    return /* @__PURE__ */ jsxs(Card, __spreadProps(__spreadValues({}, props), {
      size: "small",
      title: /* @__PURE__ */ jsxs("span", {
        children: [item == null ? void 0 : item.name, /* @__PURE__ */ jsx(Divider, {
          type: "vertical"
        }), /* @__PURE__ */ jsx(Typography.Text, {
          children: item.paths
        })]
      }),
      extra: /* @__PURE__ */ jsxs(Space, {
        children: [/* @__PURE__ */ jsx(Tooltip, {
          content: "\u8BBE\u7F6E\u9875\u9762\u72B6\u6001",
          children: /* @__PURE__ */ jsx(Switch, {
            checked: page.isActive,
            size: "small",
            onClick: () => {
              page.updateIsActive();
            }
          })
        }), /* @__PURE__ */ jsx(Tooltip, {
          content: "\u9875\u9762\u5F00\u53D1",
          children: /* @__PURE__ */ jsx(AsyncButton, {
            type: "primary",
            size: "small",
            icon: /* @__PURE__ */ jsx(IconCodeSquare, {}),
            onClick: async () => {
              history.push(`/system/pages/save?pageId=${item.pageId}`);
            }
          })
        }), /* @__PURE__ */ jsx(Dropdown$1, {
          droplist: menuList,
          position: "bl",
          trigger: "click",
          children: /* @__PURE__ */ jsx(Button$2, {
            size: "small",
            icon: /* @__PURE__ */ jsx(IconMore, {})
          })
        })]
      }),
      actions: [/* @__PURE__ */ jsx("span", {
        className: "icon-hover",
        children: /* @__PURE__ */ jsx(IconThumbUp, {})
      }), /* @__PURE__ */ jsx("span", {
        className: "icon-hover",
        children: /* @__PURE__ */ jsx(IconShareInternal, {})
      }), /* @__PURE__ */ jsx("span", {
        className: "icon-hover",
        children: /* @__PURE__ */ jsx(IconMore, {})
      })],
      children: [/* @__PURE__ */ jsx("div", {
        className: styles.container,
        children: /* @__PURE__ */ jsx("div", {
          className: classNames({
            [styles.content]: true,
            [styles.contentScale]: !notScale
          }),
          onDoubleClick: async () => {
            if (!page)
              await menuStore.createPage(item);
            history.push(`/system/pages/save?pageId=${item.pageId}`);
          },
          children: /* @__PURE__ */ jsx(MyErrorBoundary, {
            children: /* @__PURE__ */ jsx(Element, {})
          })
        })
      }), /* @__PURE__ */ jsx(Card.Meta, {
        avatar: /* @__PURE__ */ jsx(Space, {
          children: /* @__PURE__ */ jsxs(Typography.Text, {
            children: [page == null ? void 0 : page.userId, /* @__PURE__ */ jsx(Divider, {
              type: "vertical"
            }), "\u66F4\u65B0\u65F6\u95F4\uFF1A", page ? page.updateTime : "\u6682\u65E0"]
          })
        })
      })]
    }));
  });
};
const useMemo$1 = window["React"].useMemo;
const Button$1 = window["arco"].Button;
const Collapse$1 = window["arco"].Collapse;
const Grid = window["arco"].Grid;
const _ = window["_"];
const IconEdit = window["arcoicon"].IconEdit;
const CollapseItem = Collapse$1.Item;
const BodyList = ({
  list
}) => {
  const children = useMemo$1(() => {
    if (!list.length)
      return [];
    return list.map((o, i) => {
      if (o.type === "directory") {
        return /* @__PURE__ */ jsx(Grid.Col, {
          span: 24,
          children: /* @__PURE__ */ jsx(Collapse$1, {
            bordered: false,
            children: /* @__PURE__ */ jsx(CollapseItem, {
              header: `\u76EE\u5F55\uFF1A${o.paths}\uFF08${o.name}\uFF09`,
              name: o.id,
              extra: /* @__PURE__ */ jsx(Button$1, {
                type: "primary",
                size: "small",
                icon: /* @__PURE__ */ jsx(IconEdit, {}),
                onClick: () => {
                  store.setVisible(true, o);
                  store.form.setFieldsValue(_.pick(o, ["name", "path"]));
                }
              }),
              children: /* @__PURE__ */ jsx(BodyList, {
                list: o.children
              })
            })
          })
        }, i);
      } else if (o.type === "menu") {
        return /* @__PURE__ */ jsx(Grid.Col, {
          span: 12,
          children: /* @__PURE__ */ jsx(PageContent, {
            item: o
          })
        }, i);
      }
      return /* @__PURE__ */ jsx("span", {
        children: "111"
      }, i);
    });
  }, [list]);
  return /* @__PURE__ */ jsx(Grid.Row, {
    gutter: [8, 8],
    children
  });
};
const Collapse = window["arco"].Collapse;
Collapse.Item;
const Body = ({
  node
}) => {
  if (node.type === "menu") {
    return /* @__PURE__ */ jsx(PageContent, {
      item: node,
      notScale: true
    });
  }
  return /* @__PURE__ */ jsx("div", {
    children: Boolean(node.children) && /* @__PURE__ */ jsx(BodyList, {
      list: node.children
    })
  });
};
const Button = window["arco"].Button;
const ResizeBox = window["arco"].ResizeBox;
const Input = window["arco"].Input;
const Form = window["arco"].Form;
const Modal = window["arco"].Modal;
const Menu = window["arco"].Menu;
const Dropdown = window["arco"].Dropdown;
const Empty = window["arco"].Empty;
const useEffect = window["React"].useEffect;
const useMemo = window["React"].useMemo;
const observer = window["mobxReact"].observer;
const toJS = window["mobx"].toJS;
const IconCopy = window["arcoicon"].IconCopy;
const IconDelete = window["arcoicon"].IconDelete;
const IconFile = window["arcoicon"].IconFile;
const IconFolder = window["arcoicon"].IconFolder;
const IconMoreVertical = window["arcoicon"].IconMoreVertical;
const IconPlus = window["arcoicon"].IconPlus;
const {
  Search
} = Input;
const Index = () => {
  const [form] = Form.useForm();
  store.form = form;
  const menuList = useMemo(() => {
    const list2 = convertToTree(toJS(menuStore.menus));
    return getSpecificValues(list2, (item, parentItem) => {
      const {
        paths
      } = parentItem || {};
      return __spreadProps(__spreadValues({}, item), {
        paths: `${paths ? `${paths}/` : "/"}${item.path}`
      });
    });
  }, [menuStore.menus]);
  const list = useMemo(() => {
    if (!store.search)
      return menuList;
    return filterTreeData(menuList, (item) => {
      var _a;
      const bool = ((_a = item.name) == null ? void 0 : _a.indexOf(store.search)) !== -1 || item.paths && item.paths.indexOf(store.search) !== -1;
      return bool;
    });
  }, [store.search, menuList]);
  const node = useMemo(() => {
    return searchTreeNode(menuList, store.select);
  }, [menuList, store.select]);
  useEffect(() => {
    menuStore.getMenuList();
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: classNames(styles.pages, "page-container"),
    children: [/* @__PURE__ */ jsxs(ResizeBox, {
      className: styles.resize,
      directions: ["right"],
      children: [/* @__PURE__ */ jsxs("div", {
        className: styles.listHeader,
        children: [/* @__PURE__ */ jsx(Search, {
          className: styles.serach,
          value: store.search,
          onChange: store.setSearch,
          allowClear: true,
          placeholder: "\u641C\u7D22\u8DEF\u7531",
          style: {
            width: "100%"
          }
        }), /* @__PURE__ */ jsx(Button, {
          type: "primary",
          onClick: () => {
            store.setVisible(true);
            form.clearFields();
          },
          children: "\u65B0\u589E"
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: styles.listBody,
        children: /* @__PURE__ */ jsx(Index$1, {
          value: list,
          selectedKeys: [store.select],
          onSelect: (keys, extra) => {
            store.onSelect(keys);
          },
          draggable: false,
          fieldNames: {
            key: "id",
            title: "name"
          },
          expandedKeys: store.expandedList,
          onExpand: store.setExpandedKeys,
          className: styles.treeItem,
          renderTitle: (node2) => {
            const item = node2.dataRef;
            const menuList2 = /* @__PURE__ */ jsxs(Menu, {
              onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
              },
              children: [/* @__PURE__ */ jsxs(Menu.Item, {
                disabled: Boolean(node2.parentId),
                onClick: () => {
                  store.setVisible(true, {
                    parentId: node2.id,
                    type: "directory"
                  });
                  form.clearFields();
                  setTimeout(() => {
                    form.setFieldsValue(store.values);
                  });
                },
                children: [/* @__PURE__ */ jsx(IconPlus, {}), " \u65B0\u589E\u76EE\u5F55"]
              }, "categor"), /* @__PURE__ */ jsxs(Menu.Item, {
                disabled: item.type === "menu",
                onClick: () => {
                  form.clearFields();
                  store.setVisible(true, {
                    parentId: node2.id,
                    type: "menu"
                  });
                  setTimeout(() => {
                    form.setFieldsValue(store.values);
                  });
                },
                children: [/* @__PURE__ */ jsx(IconPlus, {}), " \u65B0\u589E\u9875\u9762"]
              }, "api"), /* @__PURE__ */ jsxs(Menu.Item, {
                disabled: item.type !== "menu",
                onClick: () => menuStore.copyNode(node2),
                children: [/* @__PURE__ */ jsx(IconCopy, {}), " \u590D\u5236"]
              }, "copy"), /* @__PURE__ */ jsxs(Menu.Item, {
                onClick: () => menuStore.deleteNode(item),
                children: [/* @__PURE__ */ jsx(IconDelete, {}), " \u5220\u9664"]
              }, "del")]
            });
            return /* @__PURE__ */ jsxs("div", {
              className: styles.treeItemTitle,
              onDoubleClick: () => store.saveExpandedKeys(node2),
              children: [/* @__PURE__ */ jsxs("span", {
                children: [item.type === "directory" && /* @__PURE__ */ jsx(IconFolder, {}), item.type === "menu" && /* @__PURE__ */ jsx(IconFile, {}), /* @__PURE__ */ jsx("span", {
                  className: styles.titleText,
                  children: node2.title
                })]
              }), /* @__PURE__ */ jsx(Dropdown, {
                droplist: menuList2,
                position: "bl",
                trigger: "click",
                children: /* @__PURE__ */ jsx(Button, {
                  size: "small",
                  icon: /* @__PURE__ */ jsx(IconMoreVertical, {}),
                  onClick: (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }
                })
              })]
            });
          }
        })
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: styles.body,
      children: /* @__PURE__ */ jsx("div", {
        className: styles.bodyList,
        children: node ? /* @__PURE__ */ jsx(Body, {
          node
        }) : list.length ? /* @__PURE__ */ jsx(BodyList, {
          list
        }) : /* @__PURE__ */ jsx(Empty, {
          description: "\u6682\u65E0\u6570\u636E"
        })
      })
    }), /* @__PURE__ */ jsx(Modal, {
      visible: store.visible,
      title: `${store.values.id ? "\u7F16\u8F91" : "\u65B0\u589E"}\u8DEF\u7531`,
      style: {
        width: 600
      },
      onCancel: () => {
        store.setVisible(false);
      },
      onOk: () => {
        return form.validate().then((res) => {
          return menuStore.saveMenu(__spreadValues(__spreadValues({}, store.values), res)).then(() => {
            store.setVisible(false);
          });
        });
      },
      children: /* @__PURE__ */ jsx(SchemaForm, {
        schema: store.schema,
        form,
        generagteProps: {
          cols: 24
        }
      })
    })]
  });
};
var index = observer(Index);
export { index as default };
