import Textenv from "./index.6f507e02.js";
import { j as jsx, a as jsxs } from "./index.c4195357.js";
import "./style.module.1834f1b6.js";
import "./index.f9e168f5.js";
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
const Empty = window["arco"].Empty;
const Tabs = window["arco"].Tabs;
const {
  TabPane
} = Tabs;
var index = () => {
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsxs(Tabs, {
      defaultActiveTab: "test",
      children: [/* @__PURE__ */ jsx(TabPane, {
        title: "\u6D4B\u8BD5\u7248\u672C",
        children: /* @__PURE__ */ jsx(Textenv, {})
      }, "test"), /* @__PURE__ */ jsx(TabPane, {
        title: "\u751F\u4EA7\u7248\u672C",
        children: /* @__PURE__ */ jsx(Empty, {})
      }, "prod")]
    })
  });
};
export { index as default };
