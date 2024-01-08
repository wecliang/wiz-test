import { s as styles } from "./style.module.1834f1b6.js";
import { A as AsyncButton } from "./index.f9e168f5.js";
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
const Card = window["arco"].Card;
const Descriptions = window["arco"].Descriptions;
const List = window["arco"].List;
const Space = window["arco"].Space;
const Tooltip = window["arco"].Tooltip;
const IconQuestionCircle = window["arcoicon"].IconQuestionCircle;
var index = () => {
  return /* @__PURE__ */ jsxs("div", {
    className: styles.exploit,
    children: [/* @__PURE__ */ jsx(Space, {
      className: styles.header,
      children: /* @__PURE__ */ jsxs(AsyncButton, {
        type: "primary",
        children: ["\u4E00\u952E\u90E8\u7F72", /* @__PURE__ */ jsx(Tooltip, {
          content: "\u4FEE\u6539\u7EC4\u5EFA\u3001\u591A\u8BED\u8A00\u3001\u67E5\u627E\u9879\u7B49\u76F8\u5173\u5185\u5BB9\u540E\u9700\u8981\u91CD\u65B0\u8FDB\u884C\u9879\u76EE\u90E8\u7F72",
          children: /* @__PURE__ */ jsx(IconQuestionCircle, {})
        })]
      })
    }), /* @__PURE__ */ jsx(List, {
      onReachBottom: () => {
      },
      virtualListProps: {},
      children: /* @__PURE__ */ jsx(Card, {
        hoverable: true,
        style: {
          marginTop: 10
        },
        children: /* @__PURE__ */ jsx(Descriptions, {
          border: true,
          column: 5,
          colon: " :",
          layout: "inline-horizontal",
          title: "\u5F00\u53D1\u90E8\u7F72: 2023-01-12 18:33:25",
          data: [{
            label: "\u63D0\u4EA4\u4EBA",
            value: "sys_albert.hu"
          }, {
            label: "\u90E8\u7F72\u5F71\u54CD\u7EC4\u4EF6",
            value: "24"
          }, {
            label: "\u90E8\u7F72\u5F71\u54CD\u591A\u8BED\u8A00",
            value: "56"
          }]
        })
      })
    })]
  });
};
export { index as default };
