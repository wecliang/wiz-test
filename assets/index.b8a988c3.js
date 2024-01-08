import { S as SchemaApiJsonPage } from "./index.f9e168f5.js";
import { j as jsx } from "./index.c4195357.js";
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
const useMemo = window["React"].useMemo;
const Index = () => {
  const schema = useMemo(() => {
    return {
      type: "object",
      properties: {
        "id": {
          title: "\u6807\u7B7EID",
          type: "string"
        },
        "appId": {
          title: "\u6240\u5C5E\u79DF\u6237",
          type: "string",
          fieldProps: {
            "readOnly": true
          }
        },
        "moduleId": {
          title: "\u6A21\u5757id",
          columnProps: {
            width: 100,
            ellipsis: true
          },
          fieldProps: {
            "readOnly": true
          }
        },
        "componentId": {
          title: "\u6240\u5C5E\u7EC4\u4EF6\u5E93",
          type: "string",
          format: "selector",
          fieldProps: {
            type: "component"
          }
        },
        "componentName": {
          title: "\u6240\u5C5E\u7EC4\u4EF6\u5E93",
          type: "string"
        },
        "PublicTagModule": {
          "title": "\u7EC4\u4EF6\u6807\u7B7E",
          type: "array",
          format: "selector",
          fieldProps: {
            mode: "multiple",
            type: "TagModule"
          },
          columnProps: {
            render: (data) => {
              if (data) {
                return data.map((o) => o.name).join(",");
              }
              return "";
            }
          }
        },
        "name": {
          title: "\u7EC4\u4EF6\u540D",
          type: "string",
          fieldProps: {
            "readOnly": true
          }
        },
        "nickname": {
          title: "\u6A21\u5757\u540D\u79F0",
          type: "string"
        },
        "description": {
          "title": "\u8BF4\u660E",
          "format": "text"
        },
        "updatedAt": {
          title: "\u66F4\u65B0\u65F6\u95F4",
          type: "string",
          columnProps: {
            width: 180
          }
        },
        "userId": {
          "title": "\u66F4\u65B0\u4EBA",
          "type": "string"
        }
      }
    };
  }, []);
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(SchemaApiJsonPage, {
      apijson: {
        tableName: "PublicModule",
        uniqueKey: "id",
        notAdd: true,
        getParams: (item) => {
          if (item.PublicTagModule) {
            item.PublicTagModule = item.PublicTagModule.map((o) => o.id);
          }
          return item;
        },
        findParams: {
          "@order": "updatedAt-"
        }
      },
      joins: [{
        tableName: "Component",
        type: "One",
        uniqueKey: "id",
        foreignkey: "componentId",
        columns: ["name:componentName"]
      }, {
        tableName: "TagModule",
        type: "ToMany",
        uniqueKey: "id",
        foreignkey: "tagId",
        betweenTable: "PublicTagModule",
        relationKey: "mId",
        columns: ["id", "name"]
      }],
      tableFilterKeys: ["appId", "moduleId", "componentName", "name", "nickname", "PublicTagModule", "description", "updatedAt", "userId"],
      queryFilterKeys: ["appId", "moduleId", "componentId", "PublicTagModule", "name", "nickname"],
      formFilterKeys: ["appId", "name", "componentId", "PublicTagModule"],
      schemForm: {
        generagteProps: {
          cols: 24
        }
      },
      getOperationList: (list, item) => {
        return [...list];
      },
      modalProps: {
        style: {
          width: 600
        }
      },
      schema
    })
  });
};
export { Index as default };
