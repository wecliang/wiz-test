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
import { X as CustomPageContext, l as Store, o as CustomPage } from "./index.f9e168f5.js";
import { a as jsxs, j as jsx } from "./index.c4195357.js";
import "./vendor.96977194.js";
import "./index.2fdde450.js";
import "./hoc.3c567b96.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "./13mh1j7et.5aeab982.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
const module = "_module_1fs7m_1";
var styles = {
  module
};
const Button = window["arco"].Button;
const Modal = window["arco"].Modal;
const IconCodeSquare = window["arcoicon"].IconCodeSquare;
const useContext = window["React"].useContext;
const useEffect = window["React"].useEffect;
const useState = window["React"].useState;
function EditReactNode(_a) {
  var _b = _a, {
    isComponent,
    widgets,
    buttonProps
  } = _b, props = __objRest(_b, [
    "isComponent",
    "widgets",
    "buttonProps"
  ]);
  const [visible, setVisible] = useState(false);
  const data = useContext(CustomPageContext);
  const [store] = useState(() => {
    const pageStore = new Store({
      control: isComponent,
      widgets,
      nodeContent: !isComponent,
      isComponent
    });
    if (data) {
      if ("pageSchema" in data) {
        pageStore.settingStore.pageSchema = data.pageSchema;
      }
      if ("platform" in data) {
        pageStore.platform = data.platform;
      }
    }
    pageStore.settingStore.title = "\u6A21\u5757\u8BBE\u7F6E";
    return pageStore;
  });
  useEffect(() => {
    if (!props.value)
      return;
    if (isComponent) {
      store.setData(props.value || {});
    } else {
      if (Array.isArray(props.value)) {
        store.setData({
          list: props.value
        });
      }
    }
  }, [props.value]);
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Button, __spreadProps(__spreadValues({
      type: "primary",
      icon: /* @__PURE__ */ jsx(IconCodeSquare, {}),
      onClick: () => {
        setVisible(true);
      }
    }, buttonProps), {
      children: "ReactNode"
    })), /* @__PURE__ */ jsx(Modal, {
      visible,
      alignCenter: true,
      title: isComponent ? "\u81EA\u5B9A\u4E49\u7EC4\u4EF6" : "ReactNode",
      focusLock: false,
      className: styles.module,
      style: {
        width: "90vw"
      },
      onCancel: () => {
        setVisible(false);
      },
      onConfirm: () => {
        if (props.onChange) {
          if (isComponent) {
            props.onChange(store.getData());
          } else {
            props.onChange(store.getData().list);
          }
          setVisible(false);
        } else {
          setVisible(false);
        }
      },
      children: /* @__PURE__ */ jsx(CustomPage, {
        store
      })
    })]
  });
}
export { EditReactNode as default };
