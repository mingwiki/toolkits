import{$ as C,v as $,r as s,w as f,x as S,k as n,F as b,j as t}from"./index.a6ca1a83.js";const o=C.div`
  font-size: 50px;
`,_=$(()=>{const{AuthStore:h,UserStore:a}=s.exports.useContext(f),{currentUser:d}=a,{logout:y,getAllUsers:F}=h,[r,g]=s.exports.useState([]);S();const m=()=>{F().then(e=>g(e))},c=e=>e<10?"0"+e:e,l=e=>{const u=new Date(e),E=u.getFullYear(),p=c(u.getMonth()+1),x=c(u.getDate()),B=c(u.getHours()),D=c(u.getMinutes()),A=c(u.getSeconds());return`${E.toString().slice(-2)}/${p}/${x} ${B}:${D}:${A}`};return s.exports.useEffect(()=>{document.title=i},[d]),s.exports.useEffect(()=>{m()},[]),n(b,{children:[n(o,{children:["\u6B22\u8FCE\u4F7F\u7528\uFF0C",`\u300A${i}\u300B`]}),n(o,{children:["\u5F53\u524D\u7528\u6237\uFF1A",d?d.nickname:"\u672A\u767B\u5F55"]}),t("h1",{children:"\u82E5\u4EE5\u4E0B\u6570\u636E\u5F02\u5E38\u6216\u65E0\u6CD5\u6B63\u5E38\u663E\u793A\u8BF7\u8054\u7CFB\u6211\u91CD\u542F\u670D\u52A1"}),t("div",{style:{textAlign:"center"},children:n("table",{border:1,cellPadding:2,children:[t("thead",{children:n("tr",{children:[t("th",{children:"ID"}),t("th",{children:"\u7528\u6237\u540D"}),t("th",{children:"\u6635\u79F0"}),t("th",{children:"\u6CE8\u518C\u65F6\u95F4"}),t("th",{children:"\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4"}),t("th",{children:"\u72B6\u6001"})]})}),(r==null?void 0:r.length)>0&&t("tbody",{children:r.map((e,u)=>n("tr",{children:[t("td",{children:e.id}),t("td",{children:e.username}),t("td",{children:e.nickname}),t("td",{children:e.create_time?l(e.create_time):null}),t("td",{children:e.update_time?l(e.update_time):null}),t("td",{children:e.disabled===1?"\u5DF2\u7981\u7528":"\u6B63\u5E38"})]},u))})]})})]})}),i="op\u5C0F\u5DE5\u5177";export{i as appTitle,_ as default};