var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
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
import { b as ajax, O as dynamicCreateModule, X as getQueryParam } from "./hoc.3c567b96.js";
import { g as getContextToFileData, h as getTypeContext, i as paramToStringify, j as InterfaceToSchema, k as Store$2, l as Store$3, m as moduleStore, n as MyComponent, A as AsyncButton, e as MyErrorBoundary, o as CustomPage } from "./index.f9e168f5.js";
import "./vendor.96977194.js";
import { j as jsx, a as jsxs } from "./index.c4195357.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "./index.2fdde450.js";
import "./13mh1j7et.5aeab982.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
function _defineProperty$1(obj, key, value2) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
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
const _ = window["_"];
class ContextStore {
  constructor(item) {
    _defineProperty$1(this, "item", void 0);
    _defineProperty$1(this, "isSave", false);
    _defineProperty$1(this, "getTextFiles", async () => {
      const text2 = await getContextToFileData(this.item);
      return text2;
    });
    _defineProperty$1(this, "parseFileToData", async (text) => {
      const objs = await getTypeContext(text);
      const {
        interfaces,
        default: defaultValue
      } = objs;
      if (defaultValue) {
        const value = paramToStringify(eval(defaultValue));
        _.set(this.item, "extraInfo.default", value);
      }
      if (interfaces) {
        const schema = InterfaceToSchema(interfaces[0]);
        _.set(this.item, "props", schema);
      }
      this.isSave = true;
    });
    this.item = item;
  }
}
const page = "_page_41mpw_1";
const tabs = "_tabs_41mpw_6";
const modal = "_modal_41mpw_15";
const pageRight = "_pageRight_41mpw_18";
const fullscreen = "_fullscreen_41mpw_21";
var styles = {
  page,
  tabs,
  modal,
  pageRight,
  fullscreen
};
var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
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
function _defineProperty(obj, key, value2) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value2,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value2;
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
const toJS$1 = window["mobx"].toJS;
const Message$1 = window["arco"].Message;
const Modal$1 = window["arco"].Modal;
let Store = (_class = class Store2 {
  constructor() {
    _defineProperty(this, "code", new Store$2());
    _initializerDefineProperty(this, "PageElement", _descriptor, this);
    _initializerDefineProperty(this, "setPageElement", _descriptor2, this);
    _initializerDefineProperty(this, "updatePageElement", _descriptor3, this);
    _initializerDefineProperty(this, "pVisible", _descriptor4, this);
    _initializerDefineProperty(this, "setPVisible", _descriptor5, this);
    _initializerDefineProperty(this, "right", _descriptor6, this);
    _initializerDefineProperty(this, "setRight", _descriptor7, this);
    _defineProperty(this, "pathMap", {});
    _initializerDefineProperty(this, "activeTab", _descriptor8, this);
    _initializerDefineProperty(this, "setActiveTab", _descriptor9, this);
    _defineProperty(this, "pageStore", {});
    _defineProperty(this, "contexts", {});
    _initializerDefineProperty(this, "tabList", _descriptor10, this);
    _initializerDefineProperty(this, "setTabList", _descriptor11, this);
    _initializerDefineProperty(this, "mode", _descriptor12, this);
    _defineProperty(this, "allComponents", async () => {
      const Keys = Object.keys(this.pageStore);
      for (const key of Keys) {
        const store = this.pageStore[key];
        if (store.isPage) {
          const data = store.getData();
          if (data.components) {
            for (const key2 of data.components) {
              const element = moduleStore.elements.get(key2);
              if (element.source === "custom") {
                if (!this.pageStore[element.key]) {
                  await this.addTab(element.key);
                }
              } else if (element.source === "context") {
                const store2 = new ContextStore(element);
                const fileText = await store2.getTextFiles();
                let filePath = `file://root/context/${element.name}.ts`;
                this.code.addFile(fileText, filePath);
                this.contexts[filePath] = store2;
              }
            }
          }
        }
      }
    });
    _defineProperty(this, "syncUpddatePageStore", async () => {
      const filePath = `file:${this.code.uri.fsPath}`;
      const store = this.contexts[filePath];
      if (store) {
        const fileStore2 = this.code.fileStores[this.code.uri.path];
        if (fileStore2) {
          store.parseFileToData(fileStore2.dataStr);
          fileStore2.setOriginStr(fileStore2.dataStr);
        }
        return;
      }
      const page2 = this.pageStore[this.pathMap[filePath]];
      const fileStore = this.code.fileStores[this.code.uri.path];
      if (fileStore) {
        const value2 = fileStore.dataStr;
        fileStore.setLoading(true);
        const paths = this.code.uri.path.split("/");
        const fileName = paths.pop();
        if (fileName.endsWith(".less")) {
          page2.setLess(value2);
          fileStore.setOriginStr(value2);
          fileStore.setLoading(false);
        } else {
          switch (fileName) {
            case "index.tsx":
              await page2.parsePageIndexText(value2).then(() => {
                fileStore.setOriginStr(value2);
              }).catch((err) => {
                Message$1.warning(err);
              });
              break;
            case "store.tsx":
            case "store.ts":
              await page2.parsePageStoreText(value2).then(() => {
                fileStore.setOriginStr(value2);
              }).catch((err) => {
                Message$1.warning(err);
              });
              break;
          }
          fileStore.setLoading(false);
        }
      }
      if (this.right) {
        this.updatePageElement();
      }
    });
  }
  async openModuleEidt(moduleId) {
    if (this.pageStore[moduleId]) {
      this.setActiveTab(moduleId);
    } else {
      await this.addTab(moduleId);
      this.setActiveTab(moduleId);
    }
  }
  async addTabPage({
    key,
    title,
    content,
    extraInfo
  }) {
    const item2 = {
      key,
      uid: key,
      title,
      name: title
    };
    const pageStore = new Store$3(item2);
    if (extraInfo && extraInfo.components)
      await moduleStore.syncModuleIds(extraInfo.components);
    if (content)
      await pageStore.setData(content);
    this.pageStore[key] = pageStore;
    this.setTabList([...toJS$1(this.tabList), item2]);
    this.setActiveTab(item2.key);
  }
  async addTab(moduleId) {
    const module = moduleStore.elements.get(moduleId);
    const extraInfo = module.extraInfo;
    const item2 = {
      key: moduleId,
      uid: moduleId,
      title: module.nickname || module.name,
      name: module.name,
      isComponent: module.source === "custom",
      isContext: module.source === "context"
    };
    const pageStore = new Store$3(item2);
    if (extraInfo && extraInfo.components)
      await moduleStore.syncModuleIds(extraInfo.components);
    if (module.content)
      await pageStore.setData(module.content);
    this.pageStore[moduleId] = pageStore;
    this.setTabList([...toJS$1(this.tabList), item2]);
  }
  setMode(type) {
    this.mode = type;
  }
  async openCodeEditor() {
    let item2;
    this.pathMap = {};
    this.mode = "code";
    await this.allComponents();
    for (const key in this.pageStore) {
      const store = this.pageStore[key];
      const {
        storeText,
        indexText
      } = await store.getTextFiles();
      const elements = moduleStore.elements.get(key);
      const pathStr = store.isComponent ? `components/${elements.name}` : `pages/${store.uid}`;
      this.code.contentAlias[store.uid] = store.name;
      let stylePath = `file://root/${pathStr}/style.less`;
      let storePath = `file://root/${pathStr}/store.ts`;
      let indexPath = `file://root/${pathStr}/index.tsx`;
      this.code.addFile(store.lessStr, stylePath);
      this.code.addFile(storeText, storePath);
      item2 = this.code.addFile(indexText, indexPath);
      if (store.uid === this.activeTab) {
        this.code.openFile(item2.uri);
      }
      this.pathMap = Object.assign(this.pathMap, {
        [stylePath]: store.uid,
        [storePath]: store.uid,
        [indexPath]: store.uid
      });
    }
  }
  openCavnasEditor() {
    const list = Object.values(this.contexts);
    const result = list.filter((o) => o.isSave);
    if (result.length) {
      const names = result.map((o) => o.item.nickname || o.item.name).join(",");
      Modal$1.confirm({
        title: "\u4FDD\u5B58\u63D0\u793A",
        content: `${names} \u7B49context\u7EC4\u4EF6\u8FD8\u672A\u4FDD\u5B58\uFF0C\u662F\u5426\u7EE7\u7EED\u5207\u6362`,
        onOk: () => {
          this.setMode("canvas");
        }
      });
    } else {
      this.setMode("canvas");
    }
  }
  async saveData() {
    if (this.mode === "canvas") {
      const pageStore = this.pageStore[this.activeTab];
      return this.savePageData(pageStore);
    } else if (this.mode === "code") {
      const filePath = `file:${this.code.uri.fsPath}`;
      const store = this.contexts[filePath];
      if (store) {
        const module = store.item;
        return ajax.post("/apijson/put", {
          Module: {
            id: this.activeTab,
            props: store.item.props,
            extraInfo: store.item.extraInfo
          }
        }).then(() => {
          Message$1.success(`${module.nickname || module.name} \u6A21\u5757\u4FDD\u5B58\u6210\u529F`);
          moduleStore.updateElement(this.activeTab, module);
        });
      } else {
        const page2 = this.pageStore[this.pathMap[filePath]];
        return this.savePageData(page2);
      }
    }
  }
  async savePageData(pageStore) {
    console.log("savePageData", pageStore);
    if (pageStore.isComponent) {
      const module = moduleStore.elements.get(pageStore.uid);
      await pageStore.validate().then(async (data) => {
        const resProps = {
          props: data.page.props,
          content: data,
          extraInfo: __spreadProps(__spreadValues({}, module.extraInfo), {
            cssStr: data.cssStr,
            components: data.components
          }),
          jsxRender: await pageStore.getRenderText()
        };
        return ajax.post("/apijson/put", {
          Module: __spreadProps(__spreadValues({
            id: pageStore.uid
          }, resProps), {
            content: JSON.stringify(data)
          })
        }).then(() => {
          Message$1.success(`${module.nickname || module.name} \u6A21\u5757\u4FDD\u5B58\u6210\u529F`);
          moduleStore.updateElement(pageStore.uid, __spreadValues(__spreadValues({}, module), resProps));
        });
      });
    } else {
      await pageStore.validate().then(async (data) => {
        return ajax.post("/apijson/put", {
          Page: {
            id: pageStore.uid,
            content: JSON.stringify(data),
            extraInfo: {
              cssStr: data.cssStr,
              components: data.components
            },
            jsxRender: await pageStore.getRenderText()
          }
        }).then(() => {
          Message$1.success("\u9875\u9762\u4FDD\u5B58\u6210\u529F");
        });
      });
    }
  }
}, _descriptor = _applyDecoratedDescriptor(_class.prototype, "PageElement", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return () => null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "setPageElement", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (Element) => {
      this.PageElement = Element;
    };
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "updatePageElement", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return async () => {
      const pageStore = this.pageStore[this.activeTab];
      if (pageStore) {
        const text2 = await pageStore.getRenderText();
        this.setPageElement(dynamicCreateModule(text2));
      }
    };
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "pVisible", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "setPVisible", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (bool) => {
      this.pVisible = bool;
    };
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "right", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "setRight", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (bool) => {
      this.right = bool;
    };
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "activeTab", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return "";
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "setActiveTab", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (key) => {
      this.activeTab = key;
    };
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "tabList", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "setTabList", [action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return (list) => {
      this.tabList = list;
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, "openModuleEidt", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openModuleEidt"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addTab", [action], Object.getOwnPropertyDescriptor(_class.prototype, "addTab"), _class.prototype), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "mode", [observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function() {
    return "canvas";
  }
}), _applyDecoratedDescriptor(_class.prototype, "setMode", [action], Object.getOwnPropertyDescriptor(_class.prototype, "setMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openCodeEditor", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openCodeEditor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openCavnasEditor", [action], Object.getOwnPropertyDescriptor(_class.prototype, "openCavnasEditor"), _class.prototype), _class);
var Store$1 = Store;
const useEffect = window["React"].useEffect;
const useState = window["React"].useState;
const useHistory = window["ReactRouterDOM"].useHistory;
const Button = window["arco"].Button;
const Tabs = window["arco"].Tabs;
const Space = window["arco"].Space;
const Spin = window["arco"].Spin;
const Message = window["arco"].Message;
const Empty = window["arco"].Empty;
const Modal = window["arco"].Modal;
const useObserver = window["mobxReact"].useObserver;
const toJS = window["mobx"].toJS;
const IconCalendar = window["arcoicon"].IconCalendar;
const IconCommon = window["arcoicon"].IconCommon;
const IconCopy = window["arcoicon"].IconCopy;
const IconToRight = window["arcoicon"].IconToRight;
const {
  TabPane
} = Tabs;
var index = () => {
  const history = useHistory();
  const [id] = useState(() => {
    return getQueryParam(history.location.search, "pageId");
  });
  const [loading, setLoading] = useState(false);
  const [store] = useState(() => new Store$1());
  useEffect(() => {
    if (!id)
      return;
    setLoading(true);
    ajax.post("/apijson/get", {
      Page: {
        id
      }
    }).then((res) => {
      if (res.Page) {
        const {
          content,
          extraInfo
        } = res.Page;
        if (content) {
          store.addTabPage({
            key: id,
            title: res.Page.title,
            content: JSON.parse(content),
            extraInfo: JSON.parse(extraInfo)
          });
        } else {
          store.addTabPage({
            key: id,
            title: res.Page.title,
            content: null,
            extraInfo: null
          });
        }
      } else {
        Message.error("\u5F53\u524D\u9875\u9762\u4E0D\u5B58\u5728");
      }
    }).finally(() => {
      setLoading(false);
    });
  }, [id]);
  if (!id) {
    return /* @__PURE__ */ jsx(Empty, {});
  }
  return useObserver(() => {
    const {
      activeTab,
      setActiveTab
    } = store;
    const list = toJS(store.tabList);
    useEffect(() => {
      if (store.mode === "code") {
        const onKeyDown = (event) => {
          if (event.key === "s" && (event.ctrlKey || event.metaKey)) {
            store.syncUpddatePageStore();
          }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => {
          document.removeEventListener("keydown", onKeyDown);
        };
      }
    }, [store.mode]);
    const {
      PageElement
    } = store;
    return /* @__PURE__ */ jsxs("div", {
      className: `page-container ${styles.page}`,
      children: [store.mode === "code" ? /* @__PURE__ */ jsx(MyComponent, {
        store: store.code,
        extra: /* @__PURE__ */ jsxs(Space, {
          children: [/* @__PURE__ */ jsx(Button, {
            type: "primary",
            size: "small",
            onClick: () => {
              store.openCavnasEditor();
            },
            children: "\u53EF\u89C6\u5316"
          }, "1"), /* @__PURE__ */ jsx(Button, {
            type: "primary",
            size: "small",
            onClick: () => {
              store.updatePageElement();
              !store.right && store.setPVisible(true);
            },
            children: "\u9884\u89C8"
          }, "3"), /* @__PURE__ */ jsx(AsyncButton, {
            size: "small",
            type: "primary",
            onClick: () => {
              return store.saveData();
            },
            children: "\u4FDD\u5B58"
          }, "save"), /* @__PURE__ */ jsx(Button, {
            type: "primary",
            size: "small",
            onClick: () => {
              store.syncUpddatePageStore();
            },
            children: "\u6267\u884C"
          }, "2")]
        }, "0"),
        right: store.right ? /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx(Tabs, {
            type: "card",
            extra: /* @__PURE__ */ jsx(Button, {
              onClick: () => {
                store.setPVisible(true);
                store.setRight(false);
              },
              size: "small",
              type: "primary",
              icon: /* @__PURE__ */ jsx(IconCopy, {})
            }),
            children: /* @__PURE__ */ jsx(TabPane, {
              title: "\u9884\u89C8"
            }, "1")
          }), /* @__PURE__ */ jsx("div", {
            className: styles.pageRight,
            children: /* @__PURE__ */ jsx(MyErrorBoundary, {
              children: /* @__PURE__ */ jsx(PageElement, {})
            })
          })]
        }) : ""
      }) : /* @__PURE__ */ jsxs(Tabs, {
        type: "card-gutter",
        activeTab,
        className: styles["tabs"],
        onChange: setActiveTab,
        extra: /* @__PURE__ */ jsxs(Space, {
          children: [/* @__PURE__ */ jsx(Button, {
            size: "small",
            type: "secondary",
            onClick: () => {
              history.goBack();
            },
            children: "\u8FD4\u56DE"
          }, "1"), /* @__PURE__ */ jsx(AsyncButton, {
            size: "small",
            type: "primary",
            onClick: () => {
              return store.saveData();
            },
            children: "\u4FDD\u5B58"
          }, "2"), /* @__PURE__ */ jsx(Button, {
            size: "small",
            type: "primary",
            onClick: () => {
              store.openCodeEditor();
            },
            children: "VsCode"
          }, "3")]
        }),
        children: [loading && /* @__PURE__ */ jsx(Spin, {}), list.map((o) => {
          return /* @__PURE__ */ jsx(TabPane, __spreadProps(__spreadValues({
            destroyOnHide: true
          }, o), {
            title: /* @__PURE__ */ jsxs("span", {
              children: [o.isComponent ? /* @__PURE__ */ jsx(IconCommon, {
                style: {
                  marginRight: 6
                }
              }) : /* @__PURE__ */ jsx(IconCalendar, {
                style: {
                  marginRight: 6
                }
              }), o.title]
            }),
            children: /* @__PURE__ */ jsx(CustomPage, {
              store: store.pageStore[o.key],
              openModuleEidt: (key) => store.openModuleEidt(key)
            })
          }));
        })]
      }), /* @__PURE__ */ jsx(Modal, {
        title: /* @__PURE__ */ jsxs("div", {
          style: {
            textAlign: "left",
            display: "flex",
            alignItems: "center"
          },
          children: ["\u9884\u89C8", /* @__PURE__ */ jsx(IconToRight, {
            onClick: () => {
              store.setPVisible(false);
              store.setRight(true);
            },
            style: {
              fontSize: "24px",
              marginLeft: "8px"
            }
          })]
        }),
        visible: store.pVisible,
        className: `${styles.modal} ${styles.fullscreen} arco-modal-page-html`,
        footer: null,
        maskClosable: false,
        onCancel: () => {
          store.setPVisible(false);
        },
        children: /* @__PURE__ */ jsx(MyErrorBoundary, {
          children: /* @__PURE__ */ jsx(PageElement, {})
        })
      })]
    });
  });
};
export { index as default };
