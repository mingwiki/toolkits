import{r as m,c as p,u as c,j as e,W as d,a as t,m as a}from"./index.21317834.js";import{s as F,S as h,B as i}from"./styled-components.browser.esm.4aa69c84.js";import{F as r}from"./index.c463dd09.js";import{I as n}from"./index.4ee68407.js";import"./col.6db58a1c.js";import"./SearchOutlined.5b743501.js";const f=F.div`
  font-size: 36px;
  margin: 50px 0;
`,I=()=>{const{AuthStore:u}=m.exports.useContext(p);let o=c();return e(d,{children:t("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e(f,{children:"\u6B22\u8FCE\u4F7F\u7528\uFF0C\u8BF7\u5148\u767B\u5F55"}),t(r,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:s=>{u.setPassword(s.password),u.setUsername(s.username),u.login().then(()=>{a.success("\u767B\u5F55\u6210\u529F!"),window.history.back()}).catch(l=>{a.error("\u767B\u5F55\u5931\u8D25:",l)})},onFinishFailed:s=>{a.error("\u767B\u5F55\u5931\u8D25:",s)},autoComplete:"off",children:[e(r.Item,{label:"\u7528\u6237\u540D",name:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],children:e(n,{})}),e(r.Item,{label:"\u5BC6\u7801",name:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801!"}],children:e(n.Password,{})}),e(r.Item,{wrapperCol:{offset:8,span:16},children:t(h,{children:[e(i,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"}),e(i,{type:"primary",onClick:()=>o("/register"),children:"\u524D\u5F80\u6CE8\u518C"})]})})]})]})})};export{I as default};
