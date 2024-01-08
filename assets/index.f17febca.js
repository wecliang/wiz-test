import Textenv from "./index.3fdcf386.js";
import { j as jsx, a as jsxs } from "./index.2da18b09.js";
import "./7kfqc4de.c5361576.js";
import "./index.ddeb24a7.js";
import "./vendor.96977194.js";
import "./index.8af457a4.js";
import "./hoc.db8d1922.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "./16bf2v6a1.2a68b2f2.js";
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
