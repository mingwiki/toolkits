import{v as N,r as l,w as j,k as c,F,j as o,ai as d}from"./index.9720ddbe.js";import{R as m}from"./index.f5bd309b.js";import{I as h}from"./index.98309ce2.js";import{B as g}from"./button.9bc953ed.js";import"./TextArea.8edf5e65.js";const R=N(()=>{const[u,f]=l.exports.useState(""),[a,p]=l.exports.useState([]),{UrlStore:b,ConfigStore:y}=l.exports.useContext(j),{linkConfig:E,getLinkConfig:C,getConfigGroupBy:i,updateLinkConfig:v,updateConfig:x}=y,k=i("appName")[u]||i("appName")[Object.keys(i("appName"))[0]];return l.exports.useEffect(()=>{C()},[]),l.exports.useEffect(()=>{p(k)},[u]),c(F,{children:[o("div",{style:{border:"1px dashed gray",padding:"5px 10px"},children:o(m.Group,{value:u||Object.keys(i("appName"))[0],onChange:e=>f(e.target.value),children:Object.keys(i("appName")).map((e,r)=>o(m,{value:e,children:e},r))})}),a==null?void 0:a.map((e,r)=>!e.hide&&c("div",{style:{display:"flex",gap:"20px"},children:[c("div",{style:{width:"60vw",display:"flex",gap:"20px"},children:[o(h,{size:"28",value:e.pageName,onChange:n=>{p(t=>{const s=[...t];return s[r].pageName=n.target.value,s})}}),o(h,{size:"28",value:e.pagePath,onChange:n=>{p(t=>{const s=[...t];return s[r].pagePath=n.target.value,s})}})]}),(a==null?void 0:a.length)>1&&o(g,{type:"primary",onClick:()=>{p(n=>{const t=[...n];return t[r].hide=!0,t})},children:"-"}),r===a.length-1?o(g,{type:"primary",onClick:()=>{p(n=>{const t={...n[0]};return t.id=null,t.pageName="",t.pagePath="",t.presets="{}",t.hide=null,[...n,t]})},children:"+"}):null]},r)),o(g,{type:"primary",onClick:()=>{a.map(e=>v(e.id,e)),x(a).then(e=>{(e==null?void 0:e.length)===0?d.success({description:"\u4E0A\u4F20\u6210\u529F"}):d.error({description:JSON.stringify(e)})})},children:"\u4FDD\u5B58\u4FEE\u6539"})]})});export{R as default};