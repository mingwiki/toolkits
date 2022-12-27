import{r as l,C as se,_ as ae,o as be,j as e,b as Y,d as I,p as ue,V as Fe,e as Ee,k as d,A as Q,q as D,Y as _,v as te,w as ke,ah as x,F as S,ai as Ae,aj as Z,ak as q,al as le}from"./index.c049a64d.js";import{C as Oe,a as ze,E as we,c as oe,Q as De,R as K,T as Ve,D as Ie}from"./index.3c5f7e08.js";import{S as de,B as E}from"./index.014c054f.js";import{b as Se}from"./TextArea.33703f61.js";import{P as Be}from"./transButton.0323d89b.js";import{I as Pe}from"./index.952e28c3.js";var Me=globalThis&&globalThis.__rest||function(a,r){var i={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&r.indexOf(n)<0&&(i[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(a);u<n.length;u++)r.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(a,n[u])&&(i[n[u]]=a[n[u]]);return i},pe=l.exports.createContext(null),$e=function(r,i){var n=r.defaultValue,u=r.children,m=r.options,O=m===void 0?[]:m,g=r.prefixCls,y=r.className,z=r.style,w=r.onChange,C=Me(r,["defaultValue","children","options","prefixCls","className","style","onChange"]),B=l.exports.useContext(se),P=B.getPrefixCls,M=B.direction,T=l.exports.useState(C.value||n||[]),p=ae(T,2),b=p[0],$=p[1],G=l.exports.useState([]),c=ae(G,2),R=c[0],N=c[1];l.exports.useEffect(function(){"value"in C&&$(C.value||[])},[C.value]);var j=function(){return O.map(function(F){return typeof F=="string"||typeof F=="number"?{label:F,value:F}:F})},f=function(F){N(function(H){return H.filter(function(L){return L!==F})})},V=function(F){N(function(H){return[].concat(ue(H),[F])})},k=function(F){var H=b.indexOf(F.value),L=ue(b);H===-1?L.push(F.value):L.splice(H,1),"value"in C||$(L);var ne=j();w==null||w(L.filter(function(W){return R.includes(W)}).sort(function(W,Ce){var xe=ne.findIndex(function(J){return J.value===W}),ye=ne.findIndex(function(J){return J.value===Ce});return xe-ye}))},A=P("checkbox",g),t="".concat(A,"-group"),h=be(C,["value","disabled"]);O&&O.length>0&&(u=j().map(function(s){return e(he,{prefixCls:A,disabled:"disabled"in s?s.disabled:C.disabled,value:s.value,checked:b.includes(s.value),onChange:s.onChange,className:"".concat(t,"-item"),style:s.style,children:s.label},s.value.toString())}));var v={toggleOption:k,value:b,disabled:C.disabled,name:C.name,registerValue:V,cancelValue:f},o=Y(t,I({},"".concat(t,"-rtl"),M==="rtl"),y);return e("div",{className:o,style:z,...h,ref:i,children:e(pe.Provider,{value:v,children:u})})},Ge=l.exports.forwardRef($e);const Re=l.exports.memo(Ge);var Ne=globalThis&&globalThis.__rest||function(a,r){var i={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&r.indexOf(n)<0&&(i[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(a);u<n.length;u++)r.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(a,n[u])&&(i[n[u]]=a[n[u]]);return i},je=function(r,i){var n,u,m=r.prefixCls,O=r.className,g=r.children,y=r.indeterminate,z=y===void 0?!1:y,w=r.style,C=r.onMouseEnter,B=r.onMouseLeave,P=r.skipGroup,M=P===void 0?!1:P,T=r.disabled,p=Ne(r,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),b=l.exports.useContext(se),$=b.getPrefixCls,G=b.direction,c=l.exports.useContext(pe),R=l.exports.useContext(Se),N=R.isFormItemInput,j=l.exports.useContext(Fe),f=(u=(c==null?void 0:c.disabled)||T)!==null&&u!==void 0?u:j,V=l.exports.useRef(p.value);l.exports.useEffect(function(){c==null||c.registerValue(p.value)},[]),l.exports.useEffect(function(){if(!M)return p.value!==V.current&&(c==null||c.cancelValue(V.current),c==null||c.registerValue(p.value),V.current=p.value),function(){return c==null?void 0:c.cancelValue(p.value)}},[p.value]);var k=$("checkbox",m),A=Ee({},p);c&&!M&&(A.onChange=function(){p.onChange&&p.onChange.apply(p,arguments),c.toggleOption&&c.toggleOption({label:g,value:p.value})},A.name=c.name,A.checked=c.value.includes(p.value));var t=Y((n={},I(n,"".concat(k,"-wrapper"),!0),I(n,"".concat(k,"-rtl"),G==="rtl"),I(n,"".concat(k,"-wrapper-checked"),A.checked),I(n,"".concat(k,"-wrapper-disabled"),f),I(n,"".concat(k,"-wrapper-in-form-item"),N),n),O),h=Y(I({},"".concat(k,"-indeterminate"),z)),v=z?"mixed":void 0;return d("label",{className:t,style:w,onMouseEnter:C,onMouseLeave:B,children:[e(Oe,{"aria-checked":v,...A,prefixCls:k,className:h,disabled:f,ref:i}),g!==void 0&&e("span",{children:g})]})},He=l.exports.forwardRef(je);const he=He;var re=he;re.Group=Re;re.__ANT_CHECKBOX=!0;const Le=re;var _e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6zm460.5 67c100.1 33.4 154.7 43 166.7 44.8A445.9 445.9 0 00960 512c0-247.4-200.6-448-448-448S64 264.6 64 512s200.6 448 448 448c155.9 0 293.2-79.7 373.5-200.5-75.6-29.8-213.6-85-286.8-120.1-69.9 85.7-160.1 137.8-253.7 137.8-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9z"}}]},name:"alipay-circle",theme:"outlined"};const Te=_e;var fe=function(r,i){return e(Q,{...D(D({},r),{},{ref:i,icon:Te})})};fe.displayName="AlipayCircleOutlined";const Ue=l.exports.forwardRef(fe);var Qe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 01-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 01-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 01.8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z"}}]},name:"codepen-circle",theme:"outlined"};const We=Qe;var ve=function(r,i){return e(Q,{...D(D({},r),{},{ref:i,icon:We})})};ve.displayName="CodepenCircleOutlined";const Je=l.exports.forwardRef(ve);var Ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z"}}]},name:"global",theme:"outlined"};const qe=Ze;var me=function(r,i){return e(Q,{...D(D({},r),{},{ref:i,icon:qe})})};me.displayName="GlobalOutlined";const Ke=l.exports.forwardRef(me);var Xe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M912 820.1V203.9c28-9.9 48-36.6 48-67.9 0-39.8-32.2-72-72-72-31.3 0-58 20-67.9 48H203.9C194 84 167.3 64 136 64c-39.8 0-72 32.2-72 72 0 31.3 20 58 48 67.9v616.2C84 830 64 856.7 64 888c0 39.8 32.2 72 72 72 31.3 0 58-20 67.9-48h616.2c9.9 28 36.6 48 67.9 48 39.8 0 72-32.2 72-72 0-31.3-20-58-48-67.9zM888 112c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zM136 912c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-752c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm704 680H184V184h656v656zm48 72c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"}},{tag:"path",attrs:{d:"M288 474h448c8.8 0 16-7.2 16-16V282c0-8.8-7.2-16-16-16H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16zm56-136h336v64H344v-64zm-56 420h448c8.8 0 16-7.2 16-16V566c0-8.8-7.2-16-16-16H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16zm56-136h336v64H344v-64z"}}]},name:"group",theme:"outlined"};const Ye=Xe;var ge=function(r,i){return e(Q,{...D(D({},r),{},{ref:i,icon:Ye})})};ge.displayName="GroupOutlined";const e1=l.exports.forwardRef(ge),{Text:ee}=Ve,X=_.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,t1=_.p`
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  padding: 10px;
  box-shadow: 0px 0px 5px 2px #5d7ea3;
`,ie=_.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid;
`,U=_.input`
  min-width: 30%;
  max-width: 100%;
  &:invalid {
    background-color: red;
  }
`,r1=_.input`
  width: 100%;
  &:invalid {
    background-color: red;
  }
`,ce=_(de)`
  flex-wrap: wrap;
`,n1=te(()=>{const[a,r]=l.exports.useState(!1),[i,n]=l.exports.useState(!1),{UrlStore:u}=l.exports.useContext(ke),{textInfo:m,pageCheckQueries:O,pageInputQueries:g,globalInputQueries:y,linkName:z,pageCheckData:w,getEncodedUrl:C,setTextInfo:B,setAppId:P,setPagePath:M,setPageCheckQueries:T,setPageInputQueries:p,setGlobalInputQueries:b,setLinkName:$,setPageCheckData:G,splitEnterId:c,splitSourceOrigin:R,checkEnterId:N,uploadUrl:j}=u,f=l.exports.useDeferredValue(C()),V=`https://gkzx.jujienet.com/broadband-web/redirect/${encodeURIComponent(f)}`,k=t=>{B(d(S,{children:[t[0]," ",e(Ie,{})," ",t[1]]})),P(Z[t[0]]),M(q[t[0]][t[1]]),le[Z[t[0]]][q[t[0]][t[1]]]?G(Object.entries(le[Z[t[0]]][q[t[0]][t[1]]]).map(h=>(typeof h[1]=="boolean"&&(h[1]=h[1].toString()),Array.isArray(h[1])||(h[1]=[h[1]]),h))):G([])};x.config({placement:"bottomRight",duration:3});const A=()=>{f===""?x.error({description:"\u5F53\u524D\u94FE\u63A5\u5730\u5740\u4E3A\u7A7A\uFF0C\u8BF7\u68C0\u67E5\u3002"}):j({name:z||f,url:f}).then(t=>{console.log(t),x.success({description:`\u5DF2\u4E0A\u4F20${z}`}),n(!0)},t=>{x.error({description:"\u4E0A\u4F20\u5931\u8D25\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458"}),x.error({description:JSON.stringify(t)})})};return l.exports.useEffect(()=>{n(!1)},[f]),d(S,{children:[d(ce,{children:[e(ze,{options:Ae,onChange:k,size:"large",notFoundContent:"\u65E0\u6570\u636E",children:e("a",{href:"/#",children:e(E,{type:"primary",children:"\u70B9\u51FB\u9009\u62E9\u6216\u5207\u6362"})})}),e(E,{type:"dashed",disabled:!0,style:{backgroundColor:"#ffc9c9",color:"black"},children:m})]}),f?d(S,{children:[d(ie,{children:[d("div",{children:[e(e1,{})," ",e(ee,{keyboard:!0,children:"\u9875\u9762\u7EA7\u53C2\u6570"})]}),w.length===0?null:w.map((t,h)=>d("div",{children:[t[0],":"," ",e(Le.Group,{options:t[1],value:O[t[0]],onChange:v=>{const o={...O};v.length<2?o[t[0]]=v:o[t[0]]=v.filter(s=>!o[t[0]].includes(s)),T(o)}})]},h)),g.map(({key:t,val:h},v)=>d(X,{children:[e(U,{placeholder:"\u8F93\u5165key\uFF0C\u6700\u957F20\u4F4D\uFF0C\u4EE5\u5B57\u6BCD\u5F00\u5934",value:t,maxLength:"20",size:"28",pattern:"^[A-Za-z](\\w)*",onChange:o=>{const s=[...g];s[v].key=o.target.value.trim(),p(s)}}),e(U,{placeholder:"\u8F93\u5165value\uFF0C\u6700\u957F50\u4F4D",value:h,maxLength:"50",size:"28",pattern:"(\\w)*",onChange:o=>{const s=[...g];s[v].val=o.target.value.trim(),p(s)}}),e(E,{type:"primary",onClick:()=>{let o=[...g];g.length!==1?o.splice(v,1):o=[{key:"",val:""}],p(o)},children:"-"}),v===g.length-1?e(E,{type:"primary",onClick:()=>{const o=[...g];o.push({key:"",val:""}),p(o)},children:"+"}):null]},v))]}),d(ie,{children:[d("div",{children:[e(Ke,{})," ",e(ee,{keyboard:!0,children:"\u5168\u5C40\u7EA7\u53C2\u6570"})]}),y.map(({key:t,val:h},v)=>d(X,{children:[e(U,{placeholder:"\u8F93\u5165key\uFF0C\u6700\u957F20\u4F4D\uFF0C\u4EE5\u5B57\u6BCD\u5F00\u5934",value:t,maxLength:"20",size:"28",pattern:"^[A-Za-z](\\w)*",onChange:o=>{const s=[...y];s[v].key=o.target.value.trim(),b(s)}}),e(U,{placeholder:"\u8F93\u5165value\uFF0C\u6700\u5927\u957F\u5EA650\u4F4D",value:h,maxLength:"50",size:"28",pattern:"(\\w)*",onChange:o=>{const s=[...y];s[v].val=o.target.value.trim(),b(s)}}),e(E,{type:"primary",onClick:()=>{let o=[...y];y.length!==1?o.splice(v,1):o=[{key:"",val:""}],b(o)},children:"-"}),v===y.length-1?e(E,{type:"primary",onClick:()=>{const o=[...y];o.push({key:"",val:""}),b(o)},children:"+"}):null]},v))]}),e(t1,{children:f}),d(X,{children:[e(we,{}),e(r1,{type:"text",placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\u540D\u79F0",value:z,pattern:".+",autoFocus:!0,onChange:t=>{$(t.target.value.trim())}})]}),c(f).length>0?d(S,{children:[e(E,{type:"primary",style:{color:"white",backgroundColor:"#cc5de8",border:"none"},onClick:()=>{N(f).then(t=>{console.log(t),t.length>0?t.map(h=>x.error({description:`\u6B64${h.enterId}\u5DF2\u7ECF\u5B58\u5728\u4E8E${h.linkName}\u7531${h.nickname}\u4E0A\u4F20`})):x.success({description:"\u5F53\u524DEnter ID\u53EF\u7528"})},t=>{x.error({description:JSON.stringify(t)})})},children:"\u5165\u53E3ID\u67E5\u91CD"}),d("span",{children:["(\u5F53\u524D\u4E3A",e("b",{children:c(f).join(",")}),")"]})]}):null,R(f).length>0?d(S,{children:[e(E,{type:"primary",disabled:!0,style:{color:"white",backgroundColor:"grey",border:"none"},children:"\u8BA2\u5355\u6765\u6E90\u67E5\u91CD"}),d("span",{children:["(\u5F53\u524D\u4E3A",e("b",{children:R(f).join(",")}),")"]})]}):null,d(ce,{onClick:()=>{i||A()},children:[e(E,{type:"primary",onClick:()=>{oe(f).then(()=>x.success({description:"\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F"}),()=>x.error({description:"\u94FE\u63A5\u590D\u5236\u5931\u8D25"}))},children:"\u70B9\u51FB\u590D\u5236\u94FE\u63A5"}),e(Be,{content:e(De,{value:f,size:200}),title:"\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801",trigger:"click",open:a,onOpenChange:()=>{r(!a),x.success({description:"\u4E8C\u7EF4\u7801\u5DF2\u751F\u6210"})},children:e(E,{type:"primary",children:"\u70B9\u51FB\u751F\u6210\u4E8C\u7EF4\u7801"})}),e(E,{type:"primary",style:{color:"white",backgroundColor:"#74b816",border:"none"},onClick:()=>{oe(V).then(()=>x.success({description:"\u94FE\u63A5\u5DF2\u590D\u5236\u5230\u526A\u5207\u677F"}),()=>x.error({description:"\u94FE\u63A5\u590D\u5236\u5931\u8D25"}))},children:"\u70B9\u51FB\u590D\u5236\u8DF3\u8F6C\u94FE\u63A5"})]}),"\uFF08\u70B9\u51FB\u4EE5\u4E0A\u6309\u94AE\u4F1A\u81EA\u52A8\u4E0A\u4F20\u94FE\u63A5\uFF09"]}):null]})}),a1=te(()=>{const[a,r]=l.exports.useState(""),[i,n]=l.exports.useState([]);return d(S,{children:[d(de,{children:[e(Pe,{placeholder:"\u6E20\u9053\u5165\u53E3id",value:a,size:"28",onChange:u=>{r(u.target.value.trim())}}),e(E,{type:"primary",style:{color:"white",backgroundColor:"#74b816",border:"none"},onClick:async()=>{const u=await fetch(`api/redirect/${a}`).then(m=>m.text());n(u?m=>[...m,{link:u,name:a}]:m=>[...m,{link:"\u67E5\u8BE2\u5931\u8D25",name:a}])},children:"\u67E5\u8BE2"})]}),i==null?void 0:i.map((u,m)=>d("div",{children:[e("div",{children:u.name}),e(ee,{mark:!0,copyable:!0,editable:!0,ellipsis:!0,style:{maxWidth:"500px"},children:u.link})]},m))]})}),d1=te(()=>{const[a,r]=l.exports.useState("alipay"),i=l.exports.useMemo(()=>a==="alipay"?n1:a1,[a]);return l.exports.useEffect(()=>{document.title="\u751F\u6210\u5C0F\u7A0B\u5E8F\u94FE\u63A5"},[]),d(S,{children:[d(K.Group,{value:a,size:"large",onChange:n=>r(n.target.value),children:[d(K,{value:"alipay",children:[e(Ue,{})," alipays \u534F\u8BAE"]}),d(K,{value:"redirect",children:[e(Je,{})," \u5B58\u91CFH5\u91CD\u5B9A\u5411"]})]}),e(i,{})]})});export{d1 as default};
