import{s as D,r as o,c as v,j as e,al as t,a as i,a3 as B,ax as k}from"./index.ece7a5dd.js";import{c as y}from"./utils.f467b482.js";import{Q as w}from"./index.5890e5c4.js";import{B as s}from"./button.da1e422b.js";import{S as a}from"./index.848f0d81.js";import{P as S}from"./index.f17c1aae.js";import{T as b}from"./index.34e1b969.js";import"./index.70bff8d6.js";import"./transButton.63ce5f1f.js";import"./KeyCode.bb3c3291.js";import"./TextArea.649e0ccd.js";const{getPageType:P,cors:T}=k,{Text:p}=b,j=D.input`
  width: 100%;
  &:invalid {
    background-color: red;
  }
`,f=D(p)`
  white-space: pre-wrap;
  word-break: break-all;
`,J=()=>{var g,C,F;const[l,d]=o.exports.useState(""),[n,m]=o.exports.useState(""),{HeaderStore:x}=o.exports.useContext(v),{setHeaders:A}=x,[h,E]=o.exports.useState(!1);o.exports.useEffect(()=>{document.title="\u89E3\u6790Page\u53C2\u6570",A({ghost:!1,onBack:()=>window==null?void 0:window.history.back(),title:"No. 4",subTitle:"\u622A\u53D6\u91CD\u5B9A\u5411\u4E2D\u7684page\u53C2\u6570, \u5E76\u4E14decode\u3002",extra:[e(s,{danger:!0,onClick:()=>{d(""),m(""),E(!1),t.warning({description:"\u9875\u9762\u6570\u636E\u5DF2\u5168\u90E8\u6E05\u9664"})},children:"\u6E05\u7A7A\u9875\u9762"},1)]})},[]);const u=((C=(g=n==null?void 0:n.split("'"))==null?void 0:g.filter(r=>/^alipays/i.test(r)))==null?void 0:C[0])||"",c=(F=u==null?void 0:u.split("&page=")[1])==null?void 0:F.split("&query=")[0];return i(B,{children:[i(a,{direction:"vertical",children:[e(j,{value:l,onChange:r=>d(r.target.value.trim())}),e(s,{type:"primary",onClick:async()=>{const r=await T(l);r?m(r):t.info({description:"\u65E0\u6570\u636E"})},children:"\u67E5\u8BE2"})]}),c&&i(a,{direction:"vertical",children:[i(a,{children:[e(p,{strong:!0,children:"Alipay\u94FE\u63A5"}),e(s,{type:"primary",onClick:()=>{y(u).then(()=>t.success({description:"\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F"}),()=>t.error({description:"\u94FE\u63A5\u590D\u5236\u5931\u8D25"}))},children:"\u590D\u5236\u6B64\u94FE\u63A5"}),e(S,{content:e(w,{value:u,size:200}),title:"\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801",trigger:"click",visible:h,onVisibleChange:()=>{E(!h),t.success({description:"\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210"})},children:e(s,{type:"primary",children:"\u70B9\u51FB\u751F\u6210\u4E8C\u7EF4\u7801"})})]}),e(f,{children:u}),i(a,{children:[e(p,{strong:!0,children:P(u)}),e(s,{type:"primary",onClick:()=>{y(c).then(()=>t.success({description:"page\u53C2\u6570\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F"}),()=>t.error({description:"\u94FE\u63A5\u590D\u5236\u5931\u8D25"}))},children:"\u590D\u5236\u4E0B\u9762\u7684page\u53C2\u6570"})]}),e(f,{children:c})]})]})};export{J as default};
