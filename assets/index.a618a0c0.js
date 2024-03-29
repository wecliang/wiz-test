var k=Object.defineProperty,B=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var D=(n,e,t)=>e in n?k(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,u=(n,e)=>{for(var t in e||(e={}))E.call(e,t)&&D(n,t,e[t]);if(y)for(var t of y(e))O.call(e,t)&&D(n,t,e[t]);return n},m=(n,e)=>B(n,M(e));import{m as g,S as C}from"./index.716b61fb.js";import{d as I,b,j as N}from"./hoc.faed4dd2.js";import"./vendor.1045acf8.js";import{j as p,a as K}from"./index.2e39aa0a.js";import"./1d4eb3kqu.cb22cad3.js";import"./index.ab4c0410.js";import"https://static-s.gaiaworkforce.com/formPlatForm/umdjs/monaco/index.min.js";import"https://wizui-assets.oss-cn-hangzhou.aliyuncs.com/umd/arco.min.js";import"https://unpkg.com/react-dnd@14.0.5/dist/umd/ReactDnD.min.js";import"https://unpkg.com/react-dnd-html5-backend@14.0.2/dist/umd/ReactDnDHTML5Backend.min.js";import"https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco.min.js";import"https://unpkg.com/@arco-design/web-react@2.55.0/dist/arco-icon.min.js";var s,v,F,j,P,x,S;function c(n,e,t,r){!t||Object.defineProperty(n,e,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(r):void 0})}function f(n,e,t){return e=L(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function L(n){var e=A(n,"string");return typeof e=="symbol"?e:String(e)}function A(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function l(n,e,t,r,a){var i={};return Object.keys(r).forEach(function(o){i[o]=r[o]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=t.slice().reverse().reduce(function(o,d){return d(n,e,o)||o},i),a&&i.initializer!==void 0&&(i.value=i.initializer?i.initializer.call(a):void 0,i.initializer=void 0),i.initializer===void 0&&(Object.defineProperty(n,e,i),i=null),i}const z=window.arco.Message,h=window.mobx.action,w=window.mobx.observable;let J=(s=class{constructor(e){f(this,"database",null),f(this,"page",void 0),c(this,"key",v,this),c(this,"updateKey",F,this),c(this,"lodaing",j,this),c(this,"setLoading",P,this),c(this,"data",x,this),c(this,"setData",S,this),f(this,"createPage",()=>{const{id:t,content:r}=this.data;if(!!t)return this.page=new C({uid:t}),this.page.setData(r),this.page}),f(this,"init",t=>{b.post("/apijson/get",{Page:{id:t}}).then(async r=>{if(r.Page){const{content:a,extraInfo:i}=r.Page,o=JSON.parse(i||"{}");return this.setData(m(u({},r.Page),{content:JSON.parse(a||"{}"),extraInfo:o}))}else z.error("\u5F53\u524D\u9875\u9762\u4E0D\u5B58\u5728")})}),f(this,"savePage",async()=>{const{database:t}=this;if(t.state.length){const r=t.state.filter(a=>a.isComponent&&a.parse.isSave).slice().reverse();for(const a of r){const i=a.getData(),o={props:i.page.props,content:i,jsxRender:await a.getRenderText()},d=g.elements.get(a.uid);await b.post("/apijson/put",{Module:m(u({id:a.uid},o),{content:JSON.stringify(i)})}).then(()=>{g.updateElement(a.uid,u(u({},d),o))})}}if(this.page.parse){const r=this.page.getData(),a=await this.page.getRenderText();return b.post("/apijson/put",{Page:{id:this.page.uid,content:JSON.stringify(r),jsxRender:a}}).then(()=>(z.success("\u9875\u9762\u4FDD\u5B58\u6210\u529F"),this.setData(m(u({},this.data),{content:r,jsxRender:a}))))}}),this.init(e)}},v=l(s.prototype,"key",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return Date.now()}}),F=l(s.prototype,"updateKey",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return()=>{this.key=Date.now()}}}),j=l(s.prototype,"lodaing",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P=l(s.prototype,"setLoading",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return n=>{this.lodaing=n}}}),x=l(s.prototype,"data",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),S=l(s.prototype,"setData",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return async n=>{const{extraInfo:e}=n;if(e.components){await g.syncModuleIds(e.components);for(const t of e.components){const r=g.elements.get(t);I.state[t]=r.render}}this.data=n}}}),s);const T="_pointer_1pyui_1";var R={pointer:T};const $=window.React,q=window.React.useMemo,H=window.React.useRef,_=window.React.useState,G=window.mobxReact.useObserver,Q=window.arco.Button,U=window.arco.Message,V=window.arco.Modal,W=window.arcoicon.IconEdit,X=window.arcoicon.IconRecordStop,pe=({pageId:n})=>{const[e]=_(()=>new J(n)),t=H(),[r,a]=_();return G(()=>{const i=q(()=>{const{jsxRender:o}=e.data;return o?N(o):()=>null},[e.data]);return p($.Fragment,{children:K("div",{ref:t,className:R.pageContent,children:[p(i,{},e.key),p(Q,{type:"primary",shape:"round",icon:Boolean(r)?p(X,{}):p(W,{}),className:R.pointer,onClick:()=>{if(r)V.confirm({title:"\u4FDD\u5B58\u63D0\u793A",content:"\u4FDD\u5B58\u63D0\u793A\uFF0C\u662F\u5426\u4FDD\u5B58\u5F53\u524D\u66F4\u6539\u4FE1\u606F",onCancel:()=>{e.updateKey(),a(null)},onOk:()=>(e.setLoading(!0),e.savePage().then(o=>{e.updateKey(),a(null)}).finally(()=>{e.setLoading(!1)}))});else{const o=e.createPage();if(o){U.info("\u52A8\u6001\u9875\u9762\u7F16\u8F91\u5DF2\u5F00\u542F\uFF0C\u518D\u6B21\u70B9\u51FB\u53EF\u5173\u95ED\u52A8\u6001\u4FE1\u606F\u7F16\u8F91");const d=o.parse.initPage(t.current,{update:()=>null});e.database=d,a(o)}}}})]})})})};export{pe as default};
