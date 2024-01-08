import { M as ModuleList, E as EditModelKey, a as Selector, b as EditLookup, C as ControlSetting, c as EditFunctionConfig, p as parseZipFile } from "./index.f9e168f5.js";
import { h as utils } from "./hoc.3c567b96.js";
import { a as jsxs, j as jsx } from "./index.c4195357.js";
import "./vendor.96977194.js";
import "./index.2fdde450.js";
import "./13mh1j7et.5aeab982.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
const Button = window["arco"].Button;
const Card = window["arco"].Card;
const Form = window["arco"].Form;
const Grid = window["arco"].Grid;
const Space = window["arco"].Space;
var index = () => {
  return /* @__PURE__ */ jsxs(Card, {
    children: [/* @__PURE__ */ jsx(ModuleList, {}), /* @__PURE__ */ jsx(Form, {
      children: /* @__PURE__ */ jsxs(Grid.Row, {
        children: [/* @__PURE__ */ jsxs(Grid.Col, {
          span: 8,
          children: [/* @__PURE__ */ jsx(Form.Item, {
            label: "EditModelKey",
            field: "modelKey",
            children: /* @__PURE__ */ jsx(EditModelKey, {})
          }), /* @__PURE__ */ jsx(Form.Item, {
            label: "tableId",
            field: "tableId",
            children: /* @__PURE__ */ jsx(Selector, {
              disabled: true,
              type: "businessobject"
            })
          })]
        }), /* @__PURE__ */ jsx(Grid.Col, {
          span: 8,
          children: /* @__PURE__ */ jsx(Form.Item, {
            label: "API",
            children: /* @__PURE__ */ jsx(Button, {
              onClick: () => {
                utils.ajax.get("/custom/improve/getNewFormModel").then((res) => {
                  console.log("getNewFormModel", res);
                });
              },
              children: "\u6D4B\u8BD5Api"
            })
          })
        }), /* @__PURE__ */ jsx(Grid.Col, {
          span: 8,
          children: /* @__PURE__ */ jsx(Form.Item, {
            label: "\u903B\u8F91\u5224\u65AD",
            field: "lookup",
            children: /* @__PURE__ */ jsx(EditLookup, {})
          })
        }), /* @__PURE__ */ jsx(Grid.Col, {
          span: 8,
          children: /* @__PURE__ */ jsx(Form.Item, {
            label: "\u903B\u8F91\u5224\u65AD",
            field: "functionValidate",
            children: /* @__PURE__ */ jsx(ControlSetting, {})
          })
        }), /* @__PURE__ */ jsx(Grid.Col, {
          span: 8,
          children: /* @__PURE__ */ jsx("div", {
            style: {
              width: 240
            },
            children: /* @__PURE__ */ jsx(Form.Item, {
              noStyle: true,
              field: "functionConfig",
              children: /* @__PURE__ */ jsx(EditFunctionConfig, {})
            })
          })
        }), /* @__PURE__ */ jsx(Grid.Col, {
          span: 8,
          children: /* @__PURE__ */ jsx(Space, {
            children: /* @__PURE__ */ jsx(Button, {
              onClick: () => {
                parseZipFile("https://static-s.gaiaworkforce.com/formPlatForm/umdjs/node_modules/pandora.zip?t=123");
              },
              children: "\u6D4B\u8BD5ZIP\u89E3\u538B"
            })
          })
        })]
      })
    })]
  });
};
export { index as default };
