import { u as useLocale } from "./index.8af457a4.js";
import { j as jsx } from "./index.2da18b09.js";
import "./hoc.db8d1922.js";
import "https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";
import "./vendor.96977194.js";
import "https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";
import "https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";
import "https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";
const i18n = {
  "en-US": {
    "menu.exception": "Exception page",
    "menu.exception.403": "403",
    "exception.result.403.description": "Access to this resource on the server is denied.",
    "exception.result.403.back": "Back"
  },
  "zh-CN": {
    "menu.exception": "\u5F02\u5E38\u9875",
    "menu.exception.403": "403",
    "exception.result.403.description": "\u5BF9\u4E0D\u8D77\uFF0C\u60A8\u6CA1\u6709\u8BBF\u95EE\u8BE5\u8D44\u6E90\u7684\u6743\u9650",
    "exception.result.403.back": "\u8FD4\u56DE"
  }
};
const wrapper = "_wrapper_jqkv8_1";
const result = "_result_jqkv8_6";
var styles = {
  wrapper,
  result
};
const Result = window["arco"].Result;
const Button = window["arco"].Button;
const useHistory = window["ReactRouterDOM"].useHistory;
function Exception403() {
  const t = useLocale(i18n);
  const history = useHistory();
  return /* @__PURE__ */ jsx("div", {
    className: styles.container,
    children: /* @__PURE__ */ jsx("div", {
      className: styles.wrapper,
      children: /* @__PURE__ */ jsx(Result, {
        className: styles.result,
        status: "403",
        subTitle: t["exception.result.403.description"],
        extra: /* @__PURE__ */ jsx(Button, {
          type: "primary",
          onClick: () => {
            history.goBack();
          },
          children: t["exception.result.403.back"]
        }, "back")
      })
    })
  });
}
export { Exception403 as default };
