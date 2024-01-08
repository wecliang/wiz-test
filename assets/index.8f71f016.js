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
        "name": {
          title: "\u5E93\u540D\u79F0",
          type: "string"
        },
        "description": {
          "title": "\u8BF4\u660E",
          "format": "text"
        },
        "updatedAt": {
          title: "\u66F4\u65B0\u65F6\u95F4",
          type: "string"
        }
      }
    };
  }, []);
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx(SchemaApiJsonPage, {
      apijson: {
        tableName: "Component",
        uniqueKey: "id",
        notDel: true,
        findParams: {
          "@order": "-updatedAt"
        }
      },
      queryFilterKeys: ["id", "name"],
      formFilterKeys: ["name", "description"],
      schemForm: {
        generagteProps: {
          cols: 24
        }
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
