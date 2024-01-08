import { s as styles } from "./7kfqc4de.c5361576.js";
import { A as AsyncButton } from "./index.ddeb24a7.js";
import { b as ajax } from "./hoc.db8d1922.js";
import { a as jsxs, j as jsx } from "./index.2da18b09.js";
import "./vendor.96977194.js";
import "./index.8af457a4.js";
import "./16bf2v6a1.2a68b2f2.js";
import "https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
const useEffect = window["React"].useEffect;
const useState = window["React"].useState;
const Card = window["arco"].Card;
const Descriptions = window["arco"].Descriptions;
const List = window["arco"].List;
const Message = window["arco"].Message;
const Space = window["arco"].Space;
const Tooltip = window["arco"].Tooltip;
const IconQuestionCircle = window["arcoicon"].IconQuestionCircle;
var Textenv = () => {
  const [list, setList] = useState([]);
  const getList = () => {
    ajax.post("/apijson/get", {
      "AppVersion[]": {
        "count": 50,
        "AppVersion": {
          "@order": "createdAt-"
        }
      }
    }).then((res) => {
      setList(res.AppVersion);
    });
  };
  useEffect(() => {
    getList();
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: styles.exploit,
    children: [/* @__PURE__ */ jsx(Space, {
      className: styles.header,
      children: /* @__PURE__ */ jsxs(AsyncButton, {
        type: "primary",
        onClick: () => {
          return ajax.post("/app/version/create", {}).then(() => {
            Message.success("\u90E8\u7F72\u6210\u529F");
            getList();
          });
        },
        children: ["\u4E00\u952E\u90E8\u7F72", /* @__PURE__ */ jsx(Tooltip, {
          content: "\u4FEE\u6539\u7EC4\u5EFA\u3001\u591A\u8BED\u8A00\u3001\u67E5\u627E\u9879\u7B49\u76F8\u5173\u5185\u5BB9\u540E\u9700\u8981\u91CD\u65B0\u8FDB\u884C\u9879\u76EE\u90E8\u7F72",
          children: /* @__PURE__ */ jsx(IconQuestionCircle, {})
        })]
      })
    }), /* @__PURE__ */ jsx(List, {
      dataSource: list,
      className: styles.listBody,
      onReachBottom: () => {
      },
      render: (item) => {
        const {
          pages,
          modules,
          languages
        } = item.releaseNotes;
        return /* @__PURE__ */ jsx(Card, {
          hoverable: true,
          style: {
            marginTop: 10
          },
          children: /* @__PURE__ */ jsx(Descriptions, {
            border: true,
            column: 5,
            colon: " :",
            layout: "inline-horizontal",
            title: `\u5F00\u53D1\u90E8\u7F72: ${item.updatedAt}`,
            data: [{
              label: "\u63D0\u4EA4\u4EBA",
              value: item.userId
            }, {
              label: "\u90E8\u7F72\u5F71\u54CD\u9875\u9762",
              value: pages.length
            }, {
              label: "\u90E8\u7F72\u5F71\u54CD\u7EC4\u4EF6",
              value: modules.length
            }, {
              label: "\u90E8\u7F72\u5F71\u54CD\u591A\u8BED\u8A00",
              value: languages
            }]
          })
        }, item.id);
      },
      virtualListProps: {}
    })]
  });
};
export { Textenv as default };
