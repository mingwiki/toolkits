import{r as a,C as D,v as z,o as Z,b as M,_ as p,d as T,D as B}from"./index.8d2d6abe.js";import{C as ee}from"./DoubleRightOutlined.51456c8a.js";import{b as re}from"./styled-components.browser.esm.6d5d8c5a.js";var te=globalThis&&globalThis.__rest||function(o,r){var i={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&r.indexOf(e)<0&&(i[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(o);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(o,e[n])&&(i[e[n]]=o[e[n]]);return i},H=a.exports.createContext(null),ae=function(r,i){var e=r.defaultValue,n=r.children,y=r.options,d=y===void 0?[]:y,O=r.prefixCls,k=r.className,N=r.style,C=r.onChange,c=te(r,["defaultValue","children","options","prefixCls","className","style","onChange"]),g=a.exports.useContext(D),P=g.getPrefixCls,l=g.direction,V=a.exports.useState(c.value||e||[]),E=z(V,2),x=E[0],t=E[1],$=a.exports.useState([]),I=z($,2),h=I[0],f=I[1];a.exports.useEffect(function(){"value"in c&&t(c.value||[])},[c.value]);var v=function(){return d.map(function(u){return typeof u=="string"||typeof u=="number"?{label:u,value:u}:u})},w=function(u){f(function(m){return m.filter(function(b){return b!==u})})},S=function(u){f(function(m){return[].concat(B(m),[u])})},_=function(u){var m=x.indexOf(u.value),b=B(x);m===-1?b.push(u.value):b.splice(m,1),"value"in c||t(b);var F=v();C==null||C(b.filter(function(R){return h.indexOf(R)!==-1}).sort(function(R,U){var W=F.findIndex(function(j){return j.value===R}),Y=F.findIndex(function(j){return j.value===U});return W-Y}))},L=P("checkbox",O),G="".concat(L,"-group"),q=Z(c,["value","disabled"]);d&&d.length>0&&(n=v().map(function(s){return a.exports.createElement(X,{prefixCls:L,key:s.value.toString(),disabled:"disabled"in s?s.disabled:c.disabled,value:s.value,checked:x.indexOf(s.value)!==-1,onChange:s.onChange,className:"".concat(G,"-item"),style:s.style},s.label)}));var J={toggleOption:_,value:x,disabled:c.disabled,name:c.name,registerValue:S,cancelValue:w},Q=M(G,p({},"".concat(G,"-rtl"),l==="rtl"),k);return a.exports.createElement("div",T({className:Q,style:N},q,{ref:i}),a.exports.createElement(H.Provider,{value:J},n))},ne=a.exports.forwardRef(ae),oe=a.exports.memo(ne),le=globalThis&&globalThis.__rest||function(o,r){var i={};for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&r.indexOf(e)<0&&(i[e]=o[e]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(o);n<e.length;n++)r.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(o,e[n])&&(i[e[n]]=o[e[n]]);return i},se=function(r,i){var e,n=r.prefixCls,y=r.className,d=r.children,O=r.indeterminate,k=O===void 0?!1:O,N=r.style,C=r.onMouseEnter,c=r.onMouseLeave,g=r.skipGroup,P=g===void 0?!1:g,l=le(r,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),V=a.exports.useContext(D),E=V.getPrefixCls,x=V.direction,t=a.exports.useContext(H),$=a.exports.useContext(re),I=$.isFormItemInput,h=a.exports.useRef(l.value);a.exports.useEffect(function(){t==null||t.registerValue(l.value)},[]),a.exports.useEffect(function(){if(!P)return l.value!==h.current&&(t==null||t.cancelValue(h.current),t==null||t.registerValue(l.value),h.current=l.value),function(){return t==null?void 0:t.cancelValue(l.value)}},[l.value]);var f=E("checkbox",n),v=T({},l);t&&!P&&(v.onChange=function(){l.onChange&&l.onChange.apply(l,arguments),t.toggleOption&&t.toggleOption({label:d,value:l.value})},v.name=t.name,v.checked=t.value.indexOf(l.value)!==-1,v.disabled=l.disabled||t.disabled);var w=M((e={},p(e,"".concat(f,"-wrapper"),!0),p(e,"".concat(f,"-rtl"),x==="rtl"),p(e,"".concat(f,"-wrapper-checked"),v.checked),p(e,"".concat(f,"-wrapper-disabled"),v.disabled),p(e,"".concat(f,"-wrapper-in-form-item"),I),e),y),S=M(p({},"".concat(f,"-indeterminate"),k)),_=k?"mixed":void 0;return a.exports.createElement("label",{className:w,style:N,onMouseEnter:C,onMouseLeave:c},a.exports.createElement(ee,T({"aria-checked":_},v,{prefixCls:f,className:S,ref:i})),d!==void 0&&a.exports.createElement("span",null,d))},K=a.exports.forwardRef(se);K.displayName="Checkbox";var X=K,A=X;A.Group=oe;A.__ANT_CHECKBOX=!0;var fe=A;export{fe as C};
