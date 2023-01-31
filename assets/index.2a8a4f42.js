import{F as Re,a as ce,b as ze,N as He,c as er}from"./TextArea.9c4957e8.js";import{r as s,C as de,a as ne,e as W,d as w,b as ae,j as h,n as Ie,_ as Q,p as re,G as rr,a1 as tr,a2 as nr,V as ar,W as or,a3 as lr,a4 as ir,a5 as sr,K as Me,c as cr,A as ur,q as je,a6 as fr,k as fe,F as Fe,a7 as dr,o as mr,a8 as vr,a9 as hr,aa as gr,U as xr,ab as pr,ac as br,u as Cr,ad as yr,l as wr,z as _r,f as Sr,ae as Fr,af as Rr}from"./index.5f4cedc5.js";import{j as Ir,c as Pe,T as Nr,d as Or}from"./index.0a3dee79.js";import{R as $e,r as xe}from"./responsiveObserve.2251ebca.js";var Er=s.exports.createContext({});const De=Er;var Mr=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function jr(e){return typeof e=="number"?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}var Pr=["xs","sm","md","lg","xl","xxl"],$r=s.exports.forwardRef(function(e,r){var n,t=s.exports.useContext(de),a=t.getPrefixCls,o=t.direction,c=s.exports.useContext(De),l=c.gutter,m=c.wrap,f=c.supportFlexGap,x=e.prefixCls,p=e.span,F=e.order,C=e.offset,y=e.push,_=e.pull,T=e.className,b=e.children,N=e.flex,O=e.style,S=Mr(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),d=a("col",x),E={};Pr.forEach(function(I){var j,i={},u=e[I];typeof u=="number"?i.span=u:ne(u)==="object"&&(i=u||{}),delete S[I],E=W(W({},E),(j={},w(j,"".concat(d,"-").concat(I,"-").concat(i.span),i.span!==void 0),w(j,"".concat(d,"-").concat(I,"-order-").concat(i.order),i.order||i.order===0),w(j,"".concat(d,"-").concat(I,"-offset-").concat(i.offset),i.offset||i.offset===0),w(j,"".concat(d,"-").concat(I,"-push-").concat(i.push),i.push||i.push===0),w(j,"".concat(d,"-").concat(I,"-pull-").concat(i.pull),i.pull||i.pull===0),w(j,"".concat(d,"-rtl"),o==="rtl"),j))});var M=ae(d,(n={},w(n,"".concat(d,"-").concat(p),p!==void 0),w(n,"".concat(d,"-order-").concat(F),F),w(n,"".concat(d,"-offset-").concat(C),C),w(n,"".concat(d,"-push-").concat(y),y),w(n,"".concat(d,"-pull-").concat(_),_),n),T,E),g={};if(l&&l[0]>0){var R=l[0]/2;g.paddingLeft=R,g.paddingRight=R}if(l&&l[1]>0&&!f){var v=l[1]/2;g.paddingTop=v,g.paddingBottom=v}return N&&(g.flex=jr(N),m===!1&&!g.minWidth&&(g.minWidth=0)),h("div",{...S,style:W(W({},g),O),className:M,ref:r,children:b})});const Ge=$r;var Tr=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};Ie("top","middle","bottom","stretch");Ie("start","end","center","space-around","space-between","space-evenly");function Te(e,r){var n=s.exports.useState(typeof e=="string"?e:""),t=Q(n,2),a=t[0],o=t[1],c=function(){if(typeof e=="string"&&o(e),ne(e)==="object")for(var m=0;m<xe.length;m++){var f=xe[m];if(!!r[f]){var x=e[f];if(x!==void 0){o(x);return}}}};return s.exports.useEffect(function(){c()},[JSON.stringify(e),r]),a}var Lr=s.exports.forwardRef(function(e,r){var n,t=e.prefixCls,a=e.justify,o=e.align,c=e.className,l=e.style,m=e.children,f=e.gutter,x=f===void 0?0:f,p=e.wrap,F=Tr(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=s.exports.useContext(de),y=C.getPrefixCls,_=C.direction,T=s.exports.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),b=Q(T,2),N=b[0],O=b[1],S=s.exports.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),d=Q(S,2),E=d[0],M=d[1],g=Te(o,E),R=Te(a,E),v=Ir(),I=s.exports.useRef(x);s.exports.useEffect(function(){var K=$e.subscribe(function(D){M(D);var k=I.current||0;(!Array.isArray(k)&&ne(k)==="object"||Array.isArray(k)&&(ne(k[0])==="object"||ne(k[1])==="object"))&&O(D)});return function(){return $e.unsubscribe(K)}},[]);var j=function(){var D=[void 0,void 0],k=Array.isArray(x)?x:[x,void 0];return k.forEach(function(A,Y){if(ne(A)==="object")for(var q=0;q<xe.length;q++){var P=xe[q];if(N[P]&&A[P]!==void 0){D[Y]=A[P];break}}else D[Y]=A}),D},i=y("row",t),u=j(),z=ae(i,(n={},w(n,"".concat(i,"-no-wrap"),p===!1),w(n,"".concat(i,"-").concat(R),R),w(n,"".concat(i,"-").concat(g),g),w(n,"".concat(i,"-rtl"),_==="rtl"),n),c),V={},$=u[0]!=null&&u[0]>0?u[0]/-2:void 0,L=u[1]!=null&&u[1]>0?u[1]/-2:void 0;if($&&(V.marginLeft=$,V.marginRight=$),v){var oe=Q(u,2);V.rowGap=oe[1]}else L&&(V.marginTop=L,V.marginBottom=L);var Z=Q(u,2),H=Z[0],X=Z[1],J=s.exports.useMemo(function(){return{gutter:[H,X],wrap:p,supportFlexGap:v}},[H,X,p,v]);return h(De.Provider,{value:J,children:h("div",{...F,className:z,style:W(W({},V),l),ref:r,children:m})})});const kr=Lr;function pe(e){var r=s.exports.useState(e),n=Q(r,2),t=n[0],a=n[1];return s.exports.useEffect(function(){var o=setTimeout(function(){a(e)},e.length?0:10);return function(){clearTimeout(o)}},[e]),t}var Le=[];function _e(e,r,n){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:"".concat(n,"-").concat(t),error:e,errorStatus:r}}function Qe(e){var r=e.help,n=e.helpStatus,t=e.errors,a=t===void 0?Le:t,o=e.warnings,c=o===void 0?Le:o,l=e.className,m=e.fieldId,f=e.onVisibleChanged,x=s.exports.useContext(Re),p=x.prefixCls,F=s.exports.useContext(de),C=F.getPrefixCls,y="".concat(p,"-item-explain"),_=C(),T=pe(a),b=pe(c),N=s.exports.useMemo(function(){return r!=null?[_e(r,n,"help")]:[].concat(re(T.map(function(S,d){return _e(S,"error","error",d)})),re(b.map(function(S,d){return _e(S,"warning","warning",d)})))},[r,n,T,b]),O={};return m&&(O.id="".concat(m,"_help")),h(rr,{motionDeadline:Pe.motionDeadline,motionName:"".concat(_,"-show-help"),visible:!!N.length,onVisibleChanged:f,children:function(S){var d=S.className,E=S.style;return h("div",{...O,className:ae(y,d,l),style:E,role:"alert",children:h(tr,{keys:N,...Pe,motionName:"".concat(_,"-show-help-item"),component:!1,children:function(M){var g=M.key,R=M.error,v=M.errorStatus,I=M.className,j=M.style;return h("div",{className:ae(I,w({},"".concat(y,"-").concat(v),v)),style:j,children:R},g)}})})}})}function ke(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Ve(e,r){return(!r||e!=="hidden")&&e!=="visible"&&e!=="clip"}function Se(e,r){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return Ve(n.overflowY,r)||Ve(n.overflowX,r)||function(t){var a=function(o){if(!o.ownerDocument||!o.ownerDocument.defaultView)return null;try{return o.ownerDocument.defaultView.frameElement}catch{return null}}(t);return!!a&&(a.clientHeight<t.scrollHeight||a.clientWidth<t.scrollWidth)}(e)}return!1}function ge(e,r,n,t,a,o,c,l){return o<e&&c>r||o>e&&c<r?0:o<=e&&l<=n||c>=r&&l>=n?o-e-t:c>r&&l<n||o<e&&l>n?c-r+a:0}var qe=function(e,r){var n=window,t=r.scrollMode,a=r.block,o=r.inline,c=r.boundary,l=r.skipOverflowHiddenElements,m=typeof c=="function"?c:function(se){return se!==c};if(!ke(e))throw new TypeError("Invalid target");for(var f,x,p=document.scrollingElement||document.documentElement,F=[],C=e;ke(C)&&m(C);){if((C=(x=(f=C).parentElement)==null?f.getRootNode().host||null:x)===p){F.push(C);break}C!=null&&C===document.body&&Se(C)&&!Se(document.documentElement)||C!=null&&Se(C,l)&&F.push(C)}for(var y=n.visualViewport?n.visualViewport.width:innerWidth,_=n.visualViewport?n.visualViewport.height:innerHeight,T=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,N=e.getBoundingClientRect(),O=N.height,S=N.width,d=N.top,E=N.right,M=N.bottom,g=N.left,R=a==="start"||a==="nearest"?d:a==="end"?M:d+O/2,v=o==="center"?g+S/2:o==="end"?E:g,I=[],j=0;j<F.length;j++){var i=F[j],u=i.getBoundingClientRect(),z=u.height,V=u.width,$=u.top,L=u.right,oe=u.bottom,Z=u.left;if(t==="if-needed"&&d>=0&&g>=0&&M<=_&&E<=y&&d>=$&&M<=oe&&g>=Z&&E<=L)return I;var H=getComputedStyle(i),X=parseInt(H.borderLeftWidth,10),J=parseInt(H.borderTopWidth,10),K=parseInt(H.borderRightWidth,10),D=parseInt(H.borderBottomWidth,10),k=0,A=0,Y="offsetWidth"in i?i.offsetWidth-i.clientWidth-X-K:0,q="offsetHeight"in i?i.offsetHeight-i.clientHeight-J-D:0,P="offsetWidth"in i?i.offsetWidth===0?0:V/i.offsetWidth:0,G="offsetHeight"in i?i.offsetHeight===0?0:z/i.offsetHeight:0;if(p===i)k=a==="start"?R:a==="end"?R-_:a==="nearest"?ge(b,b+_,_,J,D,b+R,b+R+O,O):R-_/2,A=o==="start"?v:o==="center"?v-y/2:o==="end"?v-y:ge(T,T+y,y,X,K,T+v,T+v+S,S),k=Math.max(0,k+b),A=Math.max(0,A+T);else{k=a==="start"?R-$-J:a==="end"?R-oe+D+q:a==="nearest"?ge($,oe,z,J,D+q,R,R+O,O):R-($+z/2)+q/2,A=o==="start"?v-Z-X:o==="center"?v-(Z+V/2)+Y/2:o==="end"?v-L+K+Y:ge(Z,L,V,X,K+Y,v,v+S,S);var B=i.scrollLeft,U=i.scrollTop;R+=U-(k=Math.max(0,Math.min(U+k/G,i.scrollHeight-z/G+q))),v+=B-(A=Math.max(0,Math.min(B+A/P,i.scrollWidth-V/P+Y)))}I.push({el:i,top:k,left:A})}return I};function Ke(e){return e===Object(e)&&Object.keys(e).length!==0}function Vr(e,r){r===void 0&&(r="auto");var n="scrollBehavior"in document.body.style;e.forEach(function(t){var a=t.el,o=t.top,c=t.left;a.scroll&&n?a.scroll({top:o,left:c,behavior:r}):(a.scrollTop=o,a.scrollLeft=c)})}function qr(e){return e===!1?{block:"end",inline:"nearest"}:Ke(e)?e:{block:"start",inline:"nearest"}}function Ar(e,r){var n=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Ke(r)&&typeof r.behavior=="function")return r.behavior(n?qe(e,r):[]);if(!!n){var t=qr(r);return Vr(qe(e,t),t.behavior)}}var Wr=["parentNode"],zr="form_item";function ve(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ue(e,r){if(!!e.length){var n=e.join("_");if(r)return"".concat(r,"_").concat(n);var t=Wr.includes(n);return t?"".concat(zr,"_").concat(n):n}}function Ae(e){var r=ve(e);return r.join("_")}function Ye(e){var r=nr(),n=Q(r,1),t=n[0],a=s.exports.useRef({}),o=s.exports.useMemo(function(){return e!=null?e:W(W({},t),{__INTERNAL__:{itemRef:function(l){return function(m){var f=Ae(l);m?a.current[f]=m:delete a.current[f]}}},scrollToField:function(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=ve(l),x=Ue(f,o.__INTERNAL__.name),p=x?document.getElementById(x):null;p&&Ar(p,W({scrollMode:"if-needed",block:"nearest"},m))},getFieldInstance:function(l){var m=Ae(l);return a.current[m]}})},[e,t]);return[o]}var Hr=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},Dr=function(r,n){var t,a=s.exports.useContext(ar),o=s.exports.useContext(or),c=s.exports.useContext(de),l=c.getPrefixCls,m=c.direction,f=c.form,x=r.prefixCls,p=r.className,F=p===void 0?"":p,C=r.size,y=C===void 0?a:C,_=r.disabled,T=_===void 0?o:_,b=r.form,N=r.colon,O=r.labelAlign,S=r.labelWrap,d=r.labelCol,E=r.wrapperCol,M=r.hideRequiredMark,g=r.layout,R=g===void 0?"horizontal":g,v=r.scrollToFirstError,I=r.requiredMark,j=r.onFinishFailed,i=r.name,u=Hr(r,["prefixCls","className","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),z=s.exports.useMemo(function(){return I!==void 0?I:f&&f.requiredMark!==void 0?f.requiredMark:!M},[M,I,f]),V=N!=null?N:f==null?void 0:f.colon,$=l("form",x),L=ae($,(t={},w(t,"".concat($,"-").concat(R),!0),w(t,"".concat($,"-hide-required-mark"),z===!1),w(t,"".concat($,"-rtl"),m==="rtl"),w(t,"".concat($,"-").concat(y),y),t),F),oe=Ye(b),Z=Q(oe,1),H=Z[0],X=H.__INTERNAL__;X.name=i;var J=s.exports.useMemo(function(){return{name:i,labelAlign:O,labelCol:d,labelWrap:S,wrapperCol:E,vertical:R==="vertical",colon:V,requiredMark:z,itemRef:X.itemRef,form:H}},[i,O,d,E,R,V,z,H]);s.exports.useImperativeHandle(n,function(){return H});var K=function(k){j==null||j(k);var A={block:"nearest"};v&&k.errorFields.length&&(ne(v)==="object"&&(A=v),H.scrollToField(k.errorFields[0].name,A))};return h(lr,{disabled:T,children:h(ir,{size:y,children:h(ce.Provider,{value:J,children:h(sr,{id:i,...u,name:i,onFinishFailed:K,form:H,className:L})})})})},Gr=s.exports.forwardRef(Dr);const Qr=Gr;var Kr=function(){var r=s.exports.useContext(ze),n=r.status;return{status:n}};const Ur=Kr;function Yr(e){var r=s.exports.useState(e),n=Q(r,2),t=n[0],a=n[1],o=s.exports.useRef(null),c=s.exports.useRef([]),l=s.exports.useRef(!1);s.exports.useEffect(function(){return l.current=!1,function(){l.current=!0,Me.cancel(o.current),o.current=null}},[]);function m(f){l.current||(o.current===null&&(c.current=[],o.current=Me(function(){o.current=null,a(function(x){var p=x;return c.current.forEach(function(F){p=F(p)}),p})})),c.current.push(f))}return[t,m]}function Br(){var e=s.exports.useContext(ce),r=e.itemRef,n=s.exports.useRef({});function t(a,o){var c=o&&ne(o)==="object"&&o.ref,l=a.join("_");return(n.current.name!==l||n.current.originRef!==c)&&(n.current.name=l,n.current.originRef=c,n.current.ref=cr(r(a),c)),n.current.ref}return t}var Xr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const Zr=Xr;var Be=function(r,n){return h(ur,{...je(je({},r),{},{ref:n,icon:Zr})})};Be.displayName="QuestionCircleOutlined";const Jr=s.exports.forwardRef(Be);var et=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};function rt(e){return e?ne(e)==="object"&&!s.exports.isValidElement(e)?e:{title:e}:null}var tt=function(r){var n=r.prefixCls,t=r.label,a=r.htmlFor,o=r.labelCol,c=r.labelAlign,l=r.colon,m=r.required,f=r.requiredMark,x=r.tooltip,p=fr("Form"),F=Q(p,1),C=F[0];return t?h(ce.Consumer,{children:function(y){var _,T=y.vertical,b=y.labelAlign,N=y.labelCol,O=y.labelWrap,S=y.colon,d,E=o||N||{},M=c||b,g="".concat(n,"-item-label"),R=ae(g,M==="left"&&"".concat(g,"-left"),E.className,w({},"".concat(g,"-wrap"),!!O)),v=t,I=l===!0||S!==!1&&l!==!1,j=I&&!T;j&&typeof t=="string"&&t.trim()!==""&&(v=t.replace(/[:|：]\s*$/,""));var i=rt(x);if(i){var u=i.icon,z=u===void 0?h(Jr,{}):u,V=et(i,["icon"]),$=h(Nr,{...V,children:s.exports.cloneElement(z,{className:"".concat(n,"-item-tooltip"),title:""})});v=fe(Fe,{children:[v,$]})}f==="optional"&&!m&&(v=fe(Fe,{children:[v,h("span",{className:"".concat(n,"-item-optional"),title:"",children:(C==null?void 0:C.optional)||((d=dr.Form)===null||d===void 0?void 0:d.optional)})]}));var L=ae((_={},w(_,"".concat(n,"-item-required"),m),w(_,"".concat(n,"-item-required-mark-optional"),f==="optional"),w(_,"".concat(n,"-item-no-colon"),!I),_));return h(Ge,{...E,className:R,children:h("label",{htmlFor:a,className:L,title:typeof t=="string"?t:"",children:v})})}},"label"):null};const nt=tt;var at=function(r){var n=r.prefixCls,t=r.status,a=r.wrapperCol,o=r.children,c=r.errors,l=r.warnings,m=r._internalItemRender,f=r.extra,x=r.help,p=r.fieldId,F=r.marginBottom,C=r.onErrorVisibleChanged,y="".concat(n,"-item"),_=s.exports.useContext(ce),T=a||_.wrapperCol||{},b=ae("".concat(y,"-control"),T.className),N=s.exports.useMemo(function(){return W({},_)},[_]);delete N.labelCol,delete N.wrapperCol;var O=h("div",{className:"".concat(y,"-control-input"),children:h("div",{className:"".concat(y,"-control-input-content"),children:o})}),S=s.exports.useMemo(function(){return{prefixCls:n,status:t}},[n,t]),d=F!==null||c.length||l.length?fe("div",{style:{display:"flex",flexWrap:"nowrap"},children:[h(Re.Provider,{value:S,children:h(Qe,{fieldId:p,errors:c,warnings:l,help:x,helpStatus:t,className:"".concat(y,"-explain-connected"),onVisibleChanged:C})}),!!F&&h("div",{style:{width:0,height:F}})]}):null,E={};p&&(E.id="".concat(p,"_extra"));var M=f?h("div",{...E,className:"".concat(y,"-extra"),children:f}):null,g=m&&m.mark==="pro_table_render"&&m.render?m.render(r,{input:O,errorList:d,extra:M}):fe(Fe,{children:[O,d,M]});return h(ce.Provider,{value:N,children:h(Ge,{...T,className:b,children:g})})};const ot=at;var lt=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},it={success:vr,warning:hr,error:gr,validating:xr};function st(e){var r,n=e.prefixCls,t=e.className,a=e.style,o=e.help,c=e.errors,l=e.warnings,m=e.validateStatus,f=e.meta,x=e.hasFeedback,p=e.hidden,F=e.children,C=e.fieldId,y=e.isRequired,_=e.onSubItemMetaChange,T=lt(e,["prefixCls","className","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","isRequired","onSubItemMetaChange"]),b="".concat(n,"-item"),N=s.exports.useContext(ce),O=N.requiredMark,S=s.exports.useRef(null),d=pe(c),E=pe(l),M=o!=null,g=!!(M||c.length||l.length),R=s.exports.useState(null),v=Q(R,2),I=v[0],j=v[1];Or(function(){if(g&&S.current){var $=getComputedStyle(S.current);j(parseInt($.marginBottom,10))}},[g]);var i=function(L){L||j(null)},u="";m!==void 0?u=m:f.validating?u="validating":d.length?u="error":E.length?u="warning":f.touched&&(u="success");var z=s.exports.useMemo(function(){var $;if(x){var L=u&&it[u];$=L?h("span",{className:ae("".concat(b,"-feedback-icon"),"".concat(b,"-feedback-icon-").concat(u)),children:h(L,{})}):null}return{status:u,hasFeedback:x,feedbackIcon:$,isFormItemInput:!0}},[u,x]),V=(r={},w(r,b,!0),w(r,"".concat(b,"-with-help"),M||d.length||E.length),w(r,"".concat(t),!!t),w(r,"".concat(b,"-has-feedback"),u&&x),w(r,"".concat(b,"-has-success"),u==="success"),w(r,"".concat(b,"-has-warning"),u==="warning"),w(r,"".concat(b,"-has-error"),u==="error"),w(r,"".concat(b,"-is-validating"),u==="validating"),w(r,"".concat(b,"-hidden"),p),r);return fe("div",{className:ae(V),style:a,ref:S,children:[fe(kr,{className:"".concat(b,"-row"),...mr(T,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","required","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"]),children:[h(nt,{htmlFor:C,required:y,requiredMark:O,...e,prefixCls:n}),h(ot,{...e,...f,errors:d,warnings:E,prefixCls:n,status:u,help:o,marginBottom:I,onErrorVisibleChanged:i,children:h(He.Provider,{value:_,children:h(ze.Provider,{value:z,children:F})})})]}),!!I&&h("div",{className:"".concat(b,"-margin-offset"),style:{marginBottom:-I}})]})}var ct="__SPLIT__";Ie("success","warning","error","validating","");var ut=s.exports.memo(function(e){var r=e.children;return r},function(e,r){return e.value===r.value&&e.update===r.update&&e.childProps.length===r.childProps.length&&e.childProps.every(function(n,t){return n===r.childProps[t]})});function ft(e){return e!=null}function We(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[]}}function dt(e){var r=e.name,n=e.noStyle,t=e.dependencies,a=e.prefixCls,o=e.shouldUpdate,c=e.rules,l=e.children,m=e.required,f=e.label,x=e.messageVariables,p=e.trigger,F=p===void 0?"onChange":p,C=e.validateTrigger,y=e.hidden,_=s.exports.useContext(de),T=_.getPrefixCls,b=s.exports.useContext(ce),N=b.name,O=typeof l=="function",S=s.exports.useContext(He),d=s.exports.useContext(pr),E=d.validateTrigger,M=C!==void 0?C:E,g=ft(r),R=T("form",a),v=s.exports.useContext(br),I=s.exports.useRef(),j=Yr({}),i=Q(j,2),u=i[0],z=i[1],V=Cr(function(){return We()}),$=Q(V,2),L=$[0],oe=$[1],Z=function(P){var G=v==null?void 0:v.getKey(P.name);if(oe(P.destroy?We():P,!0),n&&S){var B=P.name;if(P.destroy)B=I.current||B;else if(G!==void 0){var U=Q(G,2),se=U[0],le=U[1];B=[se].concat(re(le)),I.current=B}S(P,B)}},H=function(P,G){z(function(B){var U=W({},B),se=[].concat(re(P.name.slice(0,-1)),re(G)),le=se.join(ct);return P.destroy?delete U[le]:U[le]=P,U})},X=s.exports.useMemo(function(){var q=re(L.errors),P=re(L.warnings);return Object.values(u).forEach(function(G){q.push.apply(q,re(G.errors||[])),P.push.apply(P,re(G.warnings||[]))}),[q,P]},[u,L.errors,L.warnings]),J=Q(X,2),K=J[0],D=J[1],k=Br();function A(q,P,G){return n&&!y?q:h(st,{...e,prefixCls:R,fieldId:P,isRequired:G,errors:K,warnings:D,meta:L,onSubItemMetaChange:H,children:q},"row")}if(!g&&!O&&!t)return A(l);var Y={};return typeof f=="string"?Y.label=f:r&&(Y.label=String(r)),x&&(Y=W(W({},Y),x)),h(yr,{...e,messageVariables:Y,trigger:F,validateTrigger:M,onMetaChange:Z,children:function(q,P,G){var B=ve(r).length&&P?P.name:[],U=Ue(B,N),se=m!==void 0?m:!!(c&&c.some(function(te){if(te&&ne(te)==="object"&&te.required&&!te.warningOnly)return!0;if(typeof te=="function"){var ue=te(G);return ue&&ue.required&&!ue.warningOnly}return!1})),le=W({},q),me=null;if(Array.isArray(l)&&g)me=l;else if(!(O&&(!(o||t)||g))){if(!(t&&!O&&!g))if(wr(l)){var ee=W(W({},l.props),le);if(ee.id||(ee.id=U),e.help||K.length>0||D.length>0||e.extra){var be=[];(e.help||K.length>0)&&be.push("".concat(U,"_help")),e.extra&&be.push("".concat(U,"_extra")),ee["aria-describedby"]=be.join(" ")}K.length>0&&(ee["aria-invalid"]="true"),se&&(ee["aria-required"]="true"),_r(l)&&(ee.ref=k(B,l));var Ze=new Set([].concat(re(ve(F)),re(ve(M))));Ze.forEach(function(te){ee[te]=function(){for(var ue,Ne,Ce,Oe,ye,Ee=arguments.length,we=new Array(Ee),he=0;he<Ee;he++)we[he]=arguments[he];(Ce=le[te])===null||Ce===void 0||(ue=Ce).call.apply(ue,[le].concat(we)),(ye=(Oe=l.props)[te])===null||ye===void 0||(Ne=ye).call.apply(Ne,[Oe].concat(we))}});var Je=[ee["aria-required"],ee["aria-invalid"],ee["aria-describedby"]];me=h(ut,{value:le[e.valuePropName||"value"],update:l,childProps:Je,children:Sr(l,ee)})}else O&&(o||t)&&!g?me=l(G):me=l}return A(me,U,se)}})}var Xe=dt;Xe.useStatus=Ur;const mt=Xe;var vt=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n},ht=function(r){var n=r.prefixCls,t=r.children,a=vt(r,["prefixCls","children"]),o=s.exports.useContext(de),c=o.getPrefixCls,l=c("form",n),m=s.exports.useMemo(function(){return{prefixCls:l,status:"error"}},[l]);return h(Fr,{...a,children:function(f,x,p){return h(Re.Provider,{value:m,children:t(f.map(function(F){return W(W({},F),{fieldKey:F.key})}),x,{errors:p.errors,warnings:p.warnings})})}})};const gt=ht;function xt(){var e=s.exports.useContext(ce),r=e.form;return r}var ie=Qr;ie.Item=mt;ie.List=gt;ie.ErrorList=Qe;ie.useForm=Ye;ie.useFormInstance=xt;ie.useWatch=Rr;ie.Provider=er;ie.create=function(){};const wt=ie;export{wt as F};