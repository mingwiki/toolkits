import{s as m,r as n,c as C,a2 as h,j as e,a3 as f,a as l,a4 as o}from"./index.378e6907.js";import{F as s}from"./index.b7c4dffd.js";import{I as i}from"./index.94dfbc19.js";import{S as D}from"./index.7589e076.js";import{B as w}from"./button.a2c4fac4.js";import"./TextArea.3097553d.js";import"./index.ab9e3863.js";import"./responsiveObserve.b8bfddd1.js";import"./SearchOutlined.efdd53c6.js";const E=m.div`
  font-size: 36px;
  margin: 50px 0;
`,b=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,q=()=>{const{AuthStore:a,HeaderStore:d}=n.exports.useContext(C);let F=h();const c=r=>{a.setRealname(r.realname),a.setUsername(r.username),a.setPassword(r.password),a.register().then(t=>{typeof t=="object"?(o.success("\u6CE8\u518C\u6210\u529F"),F("/")):o.error(t)}).catch(t=>{o.error("\u6CE8\u518C\u5931\u8D25,\u8BF7\u91CD\u8BD5")})},p=r=>{o.error(r)},{setHeaders:B}=d;return n.exports.useEffect(()=>{B({ghost:!1,onBack:()=>window==null?void 0:window.history.back(),title:"",subTitle:"",extra:[]})},[]),e(f,{children:l(b,{children:[e(E,{children:"\u6CE8\u518C\u9875\u9762"}),l(s,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:c,onFinishFailed:p,autoComplete:"on",children:[e(s.Item,{label:"\u59D3\u540D\u6216\u6635\u79F0",name:"realname",hasFeedback:!0,rules:[{required:!0},({getFieldValue:r})=>({validator(t,u){return/^[\u4E00-\u9FA5]{2,5}$/.test(u)?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165\u4E2D\u6587\u5B57\u7B26\uFF0C\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u6216\u82F1\u6587\uFF0C2~5\u4F4D"))}})],children:e(i,{})}),e(s.Item,{label:"\u7528\u6237\u540D",name:"username",hasFeedback:!0,rules:[{required:!0},({getFieldValue:r})=>({validator(t,u){return/^[a-zA-Z]+$/.test(u)?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165\u82F1\u6587\u5B57\u7B26\uFF0C\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\u6216\u4E2D\u6587\uFF0C\u6700\u5C111\u4F4D"))}})],children:e(i,{})}),e(s.Item,{label:"\u5BC6\u7801",name:"password",hasFeedback:!0,rules:[{required:!0},({getFieldValue:r})=>({validator(t,u){return/^[\w\d]{3,}$/.test(u)?Promise.resolve():Promise.reject(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u4E0D\u80FD\u5305\u542B\u7279\u6B8A\u5B57\u7B26\uFF0C\u6700\u5C113\u4F4D"))}})],children:e(i.Password,{})}),e(s.Item,{label:"\u8F93\u5165\u5BC6\u7801",name:"re-password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0},({getFieldValue:r})=>({validator(t,u){return!u||r("password")===u?Promise.resolve():Promise.reject(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u5339\u914D"))}})],children:e(i.Password,{})}),e(s.Item,{wrapperCol:{offset:8,span:16},children:e(D,{children:e(w,{type:"primary",htmlType:"submit",children:"\u63D0\u4EA4"})})})]})]})})};export{q as default};