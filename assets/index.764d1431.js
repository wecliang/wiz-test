import { S as SchemaApiJsonPage } from "./index.f9e168f5.js";
import { a as app, L as moduleTypes, N as moduleDisplay } from "./hoc.3c567b96.js";
import { j as jsx } from "./index.c4195357.js";
import "./vendor.96977194.js";
import "./index.2fdde450.js";
import "./13mh1j7et.5aeab982.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
const Module = () => {
  return /* @__PURE__ */ jsx(SchemaApiJsonPage, {
    apijson: {
      tableName: "Module",
      uniqueKey: "id",
      logging: true,
      findParams: {
        "@order": "updatedAt-"
      },
      postParams: {
        "extraInfo": {},
        "platform": app.platform
      }
    },
    logProps: {},
    queryFilterKeys: ["name", "nickname"],
    formFilterKeys: ["source", "name", "nickname", "category", "display"],
    getOperationList: (list, item) => {
      return [...list];
    },
    schema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          columnProps: {
            ellipsis: true,
            width: 180
          }
        },
        "source": {
          "type": "string",
          "title": "\u6A21\u5757\u7C7B\u578B",
          "maxLength": 100,
          "columnProps": {
            "ellipsis": true,
            "width": 100
          },
          "format": "radio",
          "default": "custom",
          "enum": ["custom"]
        },
        "name": {
          "type": "string",
          "title": "\u7EC4\u4EF6\u540D",
          "maxLength": 100,
          "fieldProps": {
            "placeholder": "\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D"
          },
          "show": {
            "source{}": ["custom", "context"]
          },
          "columnProps": {
            "ellipsis": true,
            "width": 120
          },
          "formItemProps": {
            "shouldUpdate": true,
            "field": "name",
            rules: [{
              required: true
            }, {
              match: /[A-Z][A-Za-z0-9]*$/g,
              message: "\u5F53\u524D\u547D\u540D\u8981\u7B26\u5408React\u7EC4\u4EF6\u547D\u540D\u89C4\u5219"
            }]
          }
        },
        "nickname": {
          "type": "string",
          "title": "\u6A21\u5757\u540D\u79F0",
          "fieldProps": {
            "placeholder": "\u8BF7\u8F93\u5165\u6A21\u5757\u540D\u79F0"
          },
          "columnProps": {
            "ellipsis": true,
            "width": 100
          }
        },
        "category": {
          "type": "string",
          "title": "\u6A21\u5757\u7C7B\u522B",
          "maxLength": 50,
          "show": {
            "source!{}": ["context"]
          },
          "default": "General",
          "enum": Object.keys(moduleTypes).map((k) => ({
            label: moduleTypes[k],
            value: k
          }))
        },
        "display": {
          "type": "string",
          "title": "\u5C55\u793A\u7C7B\u578B",
          "maxLength": 20,
          "show": {
            "source!{}": ["context"]
          },
          "format": "radio",
          "enum": Object.keys(moduleDisplay).map((k) => ({
            label: moduleDisplay[k],
            value: k
          })),
          "default": "block"
        },
        "updatedAt": {
          "type": "string",
          "title": "\u66F4\u65B0\u65F6\u95F4"
        }
      }
    }
  });
};
export { Module as default };
