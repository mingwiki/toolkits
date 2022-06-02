var ar=Object.defineProperty;var rt=Object.getOwnPropertySymbols;var nr=Object.prototype.hasOwnProperty,or=Object.prototype.propertyIsEnumerable;var at=(t,e,a)=>e in t?ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,nt=(t,e)=>{for(var a in e||(e={}))nr.call(e,a)&&at(t,a,e[a]);if(rt)for(var a of rt(e))or.call(e,a)&&at(t,a,e[a]);return t};import{r as n,O as de,B as G,v as W,k as Le,C as re,x as ue,b as Q,_ as B,H as He,d as k,T as _e,ac as ir,J as Ae,l as he,ad as me,z as lr,ae as sr,s as cr,af as ur,t as dr,ag as fr,ah as vr,ai as pr,D as mr,y as gr,Z as yr,p as xr,aj as br,ak as $e,P as hr,o as mt,A as Cr,al as Er,am as Or,j as ot}from"./index.8d2d6abe.js";import{R as it,r as wr,B as ze,S as Sr,T as Rr}from"./styled-components.browser.esm.6d5d8c5a.js";var Pr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"},Nr=Pr,gt=function(e,a){return n.exports.createElement(de,G(G({},e),{},{ref:a,icon:Nr}))};gt.displayName="DownOutlined";var Tr=n.exports.forwardRef(gt),kr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},$r=kr,yt=function(e,a){return n.exports.createElement(de,G(G({},e),{},{ref:a,icon:$r}))};yt.displayName="CheckOutlined";var _r=n.exports.forwardRef(yt);function Lr(){var t=n.exports.useReducer(function(r){return r+1},0),e=W(t,2),a=e[1];return a}function Ar(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,e=n.exports.useRef({}),a=Lr();return n.exports.useEffect(function(){var r=it.subscribe(function(o){e.current=o,t&&a()});return function(){return it.unsubscribe(r)}},[]),e.current}var je=n.exports.createContext("default"),lt=function(e){var a=e.children,r=e.size;return n.exports.createElement(je.Consumer,null,function(o){return n.exports.createElement(je.Provider,{value:r||o},a)})},Dr=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},Ir=function(e,a){var r,o,i=n.exports.useContext(je),u=n.exports.useState(1),l=W(u,2),c=l[0],v=l[1],s=n.exports.useState(!1),d=W(s,2),p=d[0],y=d[1],x=n.exports.useState(!0),T=W(x,2),S=T[0],m=T[1],C=n.exports.useRef(),P=n.exports.useRef(),O=Le(a,C),b=n.exports.useContext(re),D=b.getPrefixCls,_=function(){if(!(!P.current||!C.current)){var U=P.current.offsetWidth,te=C.current.offsetWidth;if(U!==0&&te!==0){var ye=e.gap,xe=ye===void 0?4:ye;xe*2<te&&v(te-xe*2<U?(te-xe*2)/U:1)}}};n.exports.useEffect(function(){y(!0)},[]),n.exports.useEffect(function(){m(!0),v(1)},[e.src]),n.exports.useEffect(function(){_()},[e.gap]);var R=function(){var U=e.onError,te=U?U():void 0;te!==!1&&m(!1)},g=e.prefixCls,h=e.shape,L=e.size,H=e.src,X=e.srcSet,V=e.icon,Y=e.className,K=e.alt,A=e.draggable,I=e.children,j=e.crossOrigin,Z=Dr(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children","crossOrigin"]),z=L==="default"?i:L,F=Object.keys(ue(z)==="object"?z||{}:{}).some(function(ne){return["xs","sm","md","lg","xl","xxl"].includes(ne)}),M=Ar(F),E=n.exports.useMemo(function(){if(ue(z)!=="object")return{};var ne=wr.find(function(te){return M[te]}),U=z[ne];return U?{width:U,height:U,lineHeight:"".concat(U,"px"),fontSize:V?U/2:18}:{}},[M,z]),N=D("avatar",g),J=Q((r={},B(r,"".concat(N,"-lg"),z==="large"),B(r,"".concat(N,"-sm"),z==="small"),r)),ae=n.exports.isValidElement(H),Ee=Q(N,J,(o={},B(o,"".concat(N,"-").concat(h),!!h),B(o,"".concat(N,"-image"),ae||H&&S),B(o,"".concat(N,"-icon"),!!V),o),Y),Oe=typeof z=="number"?{width:z,height:z,lineHeight:"".concat(z,"px"),fontSize:V?z/2:18}:{},le;if(typeof H=="string"&&S)le=n.exports.createElement("img",{src:H,draggable:A,srcSet:X,onError:R,alt:K,crossOrigin:j});else if(ae)le=H;else if(V)le=V;else if(p||c!==1){var ge="scale(".concat(c,") translateX(-50%)"),we={msTransform:ge,WebkitTransform:ge,transform:ge},Se=typeof z=="number"?{lineHeight:"".concat(z,"px")}:{};le=n.exports.createElement(He,{onResize:_},n.exports.createElement("span",{className:"".concat(N,"-string"),ref:function(U){P.current=U},style:k(k({},Se),we)},I))}else le=n.exports.createElement("span",{className:"".concat(N,"-string"),style:{opacity:0},ref:function(U){P.current=U}},I);return delete Z.onError,delete Z.gap,n.exports.createElement("span",k({},Z,{style:k(k(k({},Oe),E),Z.style),className:Ee,ref:O}),le)},Ve=n.exports.forwardRef(Ir);Ve.displayName="Avatar";Ve.defaultProps={shape:"circle",size:"default"};var xt=Ve,st=function(e){if(!e)return null;var a=typeof e=="function";return a?e():e},Mr=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},Ke=n.exports.forwardRef(function(t,e){var a=t.prefixCls,r=t.title,o=t.content,i=Mr(t,["prefixCls","title","content"]),u=n.exports.useContext(re),l=u.getPrefixCls,c=function(p){if(!(!r&&!o))return n.exports.createElement(n.exports.Fragment,null,r&&n.exports.createElement("div",{className:"".concat(p,"-title")},st(r)),n.exports.createElement("div",{className:"".concat(p,"-inner-content")},st(o)))},v=l("popover",a),s=l();return n.exports.createElement(_e,k({},i,{prefixCls:v,ref:e,overlay:c(v),transitionName:ir(s,"zoom-big",i.transitionName)}))});Ke.displayName="Popover";Ke.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var zr=Ke,jr=function(e){var a=n.exports.useContext(re),r=a.getPrefixCls,o=a.direction,i=e.prefixCls,u=e.className,l=u===void 0?"":u,c=e.maxCount,v=e.maxStyle,s=e.size,d=r("avatar-group",i),p=Q(d,B({},"".concat(d,"-rtl"),o==="rtl"),l),y=e.children,x=e.maxPopoverPlacement,T=x===void 0?"top":x,S=e.maxPopoverTrigger,m=S===void 0?"hover":S,C=Ae(y).map(function(D,_){return he(D,{key:"avatar-key-".concat(_)})}),P=C.length;if(c&&c<P){var O=C.slice(0,c),b=C.slice(c,P);return O.push(n.exports.createElement(zr,{key:"avatar-popover-key",content:b,trigger:m,placement:T,overlayClassName:"".concat(d,"-popover")},n.exports.createElement(xt,{style:v},"+".concat(P-c)))),n.exports.createElement(lt,{size:s},n.exports.createElement("div",{className:p,style:e.style},O))}return n.exports.createElement(lt,{size:s},n.exports.createElement("div",{className:p,style:e.style},C))},Br=jr,bt=xt;bt.Group=Br;var Hr=bt,ve={adjustX:1,adjustY:1},pe=[0,0],Vr={topLeft:{points:["bl","tl"],overflow:ve,offset:[0,-4],targetOffset:pe},topCenter:{points:["bc","tc"],overflow:ve,offset:[0,-4],targetOffset:pe},topRight:{points:["br","tr"],overflow:ve,offset:[0,-4],targetOffset:pe},bottomLeft:{points:["tl","bl"],overflow:ve,offset:[0,4],targetOffset:pe},bottomCenter:{points:["tc","bc"],overflow:ve,offset:[0,4],targetOffset:pe},bottomRight:{points:["tr","br"],overflow:ve,offset:[0,4],targetOffset:pe}},Kr=me.ESC,Wr=me.TAB;function Ur(t){var e=t.visible,a=t.setTriggerVisible,r=t.triggerRef,o=t.menuRef,i=t.onVisibleChange,u=n.exports.useRef(!1),l=function(){if(e&&r.current){var s,d,p,y;(s=r.current)===null||s===void 0||(d=s.triggerRef)===null||d===void 0||(p=d.current)===null||p===void 0||(y=p.focus)===null||y===void 0||y.call(p),a(!1),typeof i=="function"&&i(!1)}},c=function(s){var d;switch(s.keyCode){case Kr:l();break;case Wr:!u.current&&((d=o.current)===null||d===void 0?void 0:d.focus)?(s.preventDefault(),o.current.focus(),u.current=!0):l();break}};n.exports.useEffect(function(){return e?(window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c),u.current=!1}):function(){return null}},[e])}var Fr=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function Gr(t,e){var a=t.arrow,r=a===void 0?!1:a,o=t.prefixCls,i=o===void 0?"rc-dropdown":o,u=t.transitionName,l=t.animation,c=t.align,v=t.placement,s=v===void 0?"bottomLeft":v,d=t.placements,p=d===void 0?Vr:d,y=t.getPopupContainer,x=t.showAction,T=t.hideAction,S=t.overlayClassName,m=t.overlayStyle,C=t.visible,P=t.trigger,O=P===void 0?["hover"]:P,b=lr(t,Fr),D=n.exports.useState(),_=W(D,2),R=_[0],g=_[1],h="visible"in t?C:R,L=n.exports.useRef(null);n.exports.useImperativeHandle(e,function(){return L.current});var H=n.exports.useRef(null),X="".concat(i,"-menu");Ur({visible:h,setTriggerVisible:g,triggerRef:L,menuRef:H,onVisibleChange:t.onVisibleChange});var V=function(){var E=t.overlay,N;return typeof E=="function"?N=E():N=E,N},Y=function(E){var N=t.onOverlayClick,J=V().props;g(!1),N&&N(E),J.onClick&&J.onClick(E)},K=function(E){var N=t.onVisibleChange;g(E),typeof N=="function"&&N(E)},A=function(){var E,N=V(),J=Le(H,N.ref),ae=(E={prefixCls:X},B(E,"data-dropdown-inject",!0),B(E,"onClick",Y),B(E,"ref",cr(N)?J:void 0),E);return typeof N.type=="string"&&(delete ae.prefixCls,delete ae["data-dropdown-inject"]),n.exports.createElement(n.exports.Fragment,null,r&&n.exports.createElement("div",{className:"".concat(i,"-arrow")}),n.exports.cloneElement(N,ae))},I=function(){var E=t.overlay;return typeof E=="function"?A:A()},j=function(){var E=t.minOverlayWidthMatchTrigger,N=t.alignPoint;return"minOverlayWidthMatchTrigger"in t?E:!N},Z=function(){var E=t.openClassName;return E!==void 0?E:"".concat(i,"-open")},z=function(){var E=t.children,N=E.props?E.props:{},J=Q(N.className,Z());return h&&E?n.exports.cloneElement(E,{className:J}):E},F=T;return!F&&O.indexOf("contextMenu")!==-1&&(F=["click"]),n.exports.createElement(sr,G(G({builtinPlacements:p},b),{},{prefixCls:i,ref:L,popupClassName:Q(S,B({},"".concat(i,"-show-arrow"),r)),popupStyle:m,action:O,showAction:x,hideAction:F||[],popupPlacement:s,popupAlign:c,popupTransitionName:u,popupAnimation:l,popupVisible:h,stretch:j()?"minWidth":"",popup:I(),onPopupVisibleChange:K,getPopupContainer:y}),z())}var Jr=n.exports.forwardRef(Gr),Xr=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},Yr=ze.Group,ht=function(e){var a=n.exports.useContext(re),r=a.getPopupContainer,o=a.getPrefixCls,i=a.direction,u=e.prefixCls,l=e.type,c=l===void 0?"default":l,v=e.disabled,s=e.loading,d=e.onClick,p=e.htmlType,y=e.children,x=e.className,T=e.overlay,S=e.trigger,m=e.align,C=e.visible,P=e.onVisibleChange,O=e.placement,b=e.getPopupContainer,D=e.href,_=e.icon,R=_===void 0?n.exports.createElement(ur,null):_,g=e.title,h=e.buttonsRender,L=h===void 0?function(J){return J}:h,H=e.mouseEnterDelay,X=e.mouseLeaveDelay,V=e.overlayClassName,Y=e.overlayStyle,K=e.destroyPopupOnHide,A=Xr(e,["prefixCls","type","disabled","loading","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),I=o("dropdown-button",u),j={align:m,overlay:T,disabled:v,trigger:v?[]:S,onVisibleChange:P,getPopupContainer:b||r,mouseEnterDelay:H,mouseLeaveDelay:X,overlayClassName:V,overlayStyle:Y,destroyPopupOnHide:K};"visible"in e&&(j.visible=C),"placement"in e?j.placement=O:j.placement=i==="rtl"?"bottomLeft":"bottomRight";var Z=n.exports.createElement(ze,{type:c,disabled:v,loading:s,onClick:d,htmlType:p,href:D,title:g},y),z=n.exports.createElement(ze,{type:c,icon:R}),F=L([Z,z]),M=W(F,2),E=M[0],N=M[1];return n.exports.createElement(Yr,k({},A,{className:Q(I,x)}),E,n.exports.createElement(Ct,j,N))};ht.__ANT_BUTTON=!0;var Zr=ht;dr("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom");var We=function(e){var a=n.exports.useContext(re),r=a.getPopupContainer,o=a.getPrefixCls,i=a.direction,u=function(){var R=o(),g=e.placement,h=g===void 0?"":g,L=e.transitionName;return L!==void 0?L:h.indexOf("top")>=0?"".concat(R,"-slide-down"):"".concat(R,"-slide-up")},l=function(R){var g=e.overlay,h;typeof g=="function"?h=g():h=g,h=n.exports.Children.only(typeof h=="string"?n.exports.createElement("span",null,h):h);var L=h.props,H=L.selectable,X=H===void 0?!1:H,V=L.expandIcon,Y=typeof V!="undefined"&&n.exports.isValidElement(V)?V:n.exports.createElement("span",{className:"".concat(R,"-menu-submenu-arrow")},n.exports.createElement(vr,{className:"".concat(R,"-menu-submenu-arrow-icon")})),K=typeof h.type=="string"?h:he(h,{mode:"vertical",selectable:X,expandIcon:Y});return K},c=function(){var R=e.placement;if(!R)return i==="rtl"?"bottomRight":"bottomLeft";if(R.includes("Center")){var g=R.slice(0,R.indexOf("Center"));return g}return R},v=e.arrow,s=e.prefixCls,d=e.children,p=e.trigger,y=e.disabled,x=e.getPopupContainer,T=e.overlayClassName,S=o("dropdown",s),m=n.exports.Children.only(d),C=he(m,{className:Q("".concat(S,"-trigger"),B({},"".concat(S,"-rtl"),i==="rtl"),m.props.className),disabled:y}),P=Q(T,B({},"".concat(S,"-rtl"),i==="rtl")),O=y?[]:p,b;O&&O.indexOf("contextMenu")!==-1&&(b=!0);var D=fr({arrowPointAtCenter:ue(v)==="object"&&v.pointAtCenter,autoAdjustOverflow:!0});return n.exports.createElement(Jr,k({alignPoint:b},e,{builtinPlacements:D,arrow:!!v,overlayClassName:P,prefixCls:S,getPopupContainer:x||r,transitionName:u(),trigger:O,overlay:function(){return l(S)},placement:c()}),C)};We.Button=Zr;We.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var Ct=We,qr=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},Et=function(e){var a=e.prefixCls,r=e.separator,o=r===void 0?"/":r,i=e.children,u=e.overlay,l=e.dropdownProps,c=qr(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=n.exports.useContext(re),s=v.getPrefixCls,d=s("breadcrumb",a),p=function(T){return u?n.exports.createElement(Ct,k({overlay:u,placement:"bottom"},l),n.exports.createElement("span",{className:"".concat(d,"-overlay-link")},T,n.exports.createElement(Tr,null))):T},y;return"href"in c?y=n.exports.createElement("a",k({className:"".concat(d,"-link")},c),i):y=n.exports.createElement("span",k({className:"".concat(d,"-link")},c),i),y=p(y),i?n.exports.createElement("li",null,y,o&&n.exports.createElement("span",{className:"".concat(d,"-separator")},o)):null};Et.__ANT_BREADCRUMB_ITEM=!0;var Ot=Et,wt=function(e){var a=e.children,r=n.exports.useContext(re),o=r.getPrefixCls,i=o("breadcrumb");return n.exports.createElement("span",{className:"".concat(i,"-separator")},a||"/")};wt.__ANT_BREADCRUMB_SEPARATOR=!0;var Qr=wt,ea=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function ta(t,e){if(!t.breadcrumbName)return null;var a=Object.keys(e).join("|"),r=t.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(o,i){return e[i]||o});return r}function ra(t,e,a,r){var o=a.indexOf(t)===a.length-1,i=ta(t,e);return o?n.exports.createElement("span",null,i):n.exports.createElement("a",{href:"#/".concat(r.join("/"))},i)}var St=function(e,a){return e=(e||"").replace(/^\//,""),Object.keys(a).forEach(function(r){e=e.replace(":".concat(r),a[r])}),e},aa=function(e,a,r){var o=mr(e),i=St(a||"",r);return i&&o.push(i),o},Ue=function(e){var a=e.prefixCls,r=e.separator,o=r===void 0?"/":r,i=e.style,u=e.className,l=e.routes,c=e.children,v=e.itemRender,s=v===void 0?ra:v,d=e.params,p=d===void 0?{}:d,y=ea(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),x=n.exports.useContext(re),T=x.getPrefixCls,S=x.direction,m,C=T("breadcrumb",a);if(l&&l.length>0){var P=[];m=l.map(function(b){var D=St(b.path,p);D&&P.push(D);var _;return b.children&&b.children.length&&(_=n.exports.createElement(pr,{items:b.children.map(function(R){return{key:R.path||R.breadcrumbName,label:s(R,p,l,aa(P,R.path,p))}})})),n.exports.createElement(Ot,{overlay:_,separator:o,key:D||b.breadcrumbName},s(b,p,l,P))})}else c&&(m=Ae(c).map(function(b,D){return b&&he(b,{separator:o,key:D})}));var O=Q(C,B({},"".concat(C,"-rtl"),S==="rtl"),u);return n.exports.createElement("nav",k({className:O,style:i},y),n.exports.createElement("ol",null,m))};Ue.Item=Ot;Ue.Separator=Qr;var na=Ue,Rt=function(e){if(gr()&&window.document.documentElement){var a=Array.isArray(e)?e:[e],r=window.document.documentElement;return a.some(function(o){return o in r.style})}return!1},oa=function(e,a){if(!Rt(e))return!1;var r=document.createElement("div"),o=r.style[e];return r.style[e]=a,r.style[e]!==o};function ct(t,e){return!Array.isArray(t)&&e!==void 0?oa(t,e):Rt(t)}var ia={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},la=ia,Pt=function(e,a){return n.exports.createElement(de,G(G({},e),{},{ref:a,icon:la}))};Pt.displayName="ArrowLeftOutlined";var sa=n.exports.forwardRef(Pt),ca={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},ua=ca,Nt=function(e,a){return n.exports.createElement(de,G(G({},e),{},{ref:a,icon:ua}))};Nt.displayName="ArrowRightOutlined";var da=n.exports.forwardRef(Nt),fa=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},va={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},pa=n.exports.forwardRef(function(t,e){var a=function(s){var d=s.keyCode;d===me.ENTER&&s.preventDefault()},r=function(s){var d=s.keyCode,p=t.onClick;d===me.ENTER&&p&&p()},o=t.style,i=t.noStyle,u=t.disabled,l=fa(t,["style","noStyle","disabled"]),c={};return i||(c=k({},va)),u&&(c.pointerEvents="none"),c=k(k({},c),o),n.exports.createElement("div",k({role:"button",tabIndex:0,ref:e},l,{onKeyDown:a,onKeyUp:r,style:c}))}),Be=pa,ma=function(e,a,r){return!a||!r?null:n.exports.createElement(br,{componentName:"PageHeader"},function(o){var i=o.back;return n.exports.createElement("div",{className:"".concat(e,"-back")},n.exports.createElement(Be,{onClick:function(l){r==null||r(l)},className:"".concat(e,"-back-button"),"aria-label":i},a))})},ga=function(e){return n.exports.createElement(na,e)},ya=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:a==="rtl"?n.exports.createElement(da,null):n.exports.createElement(sa,null)},xa=function(e,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",o=a.title,i=a.avatar,u=a.subTitle,l=a.tags,c=a.extra,v=a.onBack,s="".concat(e,"-heading"),d=o||u||l||c;if(!d)return null;var p=ya(a,r),y=ma(e,p,v),x=y||i||d;return n.exports.createElement("div",{className:s},x&&n.exports.createElement("div",{className:"".concat(s,"-left")},y,i&&n.exports.createElement(Hr,i),o&&n.exports.createElement("span",{className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),u&&n.exports.createElement("span",{className:"".concat(s,"-sub-title"),title:typeof u=="string"?u:void 0},u),l&&n.exports.createElement("span",{className:"".concat(s,"-tags")},l)),c&&n.exports.createElement("span",{className:"".concat(s,"-extra")},n.exports.createElement(Sr,null,c)))},ba=function(e,a){return a?n.exports.createElement("div",{className:"".concat(e,"-footer")},a):null},ha=function(e,a){return n.exports.createElement("div",{className:"".concat(e,"-content")},a)},Ca=function(e){var a=yr(!1),r=W(a,2),o=r[0],i=r[1],u=function(c){var v=c.width;i(v<768,!0)};return n.exports.createElement(xr,null,function(l){var c,v=l.getPrefixCls,s=l.pageHeader,d=l.direction,p,y=e.prefixCls,x=e.style,T=e.footer,S=e.children,m=e.breadcrumb,C=e.breadcrumbRender,P=e.className,O=!0;"ghost"in e?O=e.ghost:s&&"ghost"in s&&(O=s.ghost);var b=v("page-header",y),D=function(){return m!=null&&m.routes?ga(m):null},_=D(),R=m&&"props"in m,g=(p=C==null?void 0:C(e,_))!==null&&p!==void 0?p:_,h=R?m:g,L=Q(b,P,(c={"has-breadcrumb":!!h,"has-footer":!!T},B(c,"".concat(b,"-ghost"),O),B(c,"".concat(b,"-rtl"),d==="rtl"),B(c,"".concat(b,"-compact"),o),c));return n.exports.createElement(He,{onResize:u},n.exports.createElement("div",{className:L,style:x},h,xa(b,e,d),S&&ha(b,S),ba(b,T)))})},Ea=Ca,Oa=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},wa=function(e,a){var r=e.prefixCls,o=e.component,i=o===void 0?"article":o,u=e.className,l=e["aria-label"],c=e.setContentRef,v=e.children,s=Oa(e,["prefixCls","component","className","aria-label","setContentRef","children"]),d=n.exports.useContext(re),p=d.getPrefixCls,y=d.direction,x=a;c&&(x=Le(a,c));var T=i,S=p("typography",r),m=Q(S,B({},"".concat(S,"-rtl"),y==="rtl"),u);return n.exports.createElement(T,k({className:m,"aria-label":l,ref:x},s),v)},Tt=n.exports.forwardRef(wa);Tt.displayName="Typography";var Sa=Tt,kt=Sa,Ra=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,a=[],r=0;r<t.rangeCount;r++)a.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||a.forEach(function(o){t.addRange(o)}),e&&e.focus()}},Pa=Ra,ut={"text/plain":"Text","text/html":"Url",default:"Text"},Na="Copy to clipboard: #{key}, Enter";function Ta(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function ka(t,e){var a,r,o,i,u,l,c=!1;e||(e={}),a=e.debug||!1;try{o=Pa(),i=document.createRange(),u=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(s){if(s.stopPropagation(),e.format)if(s.preventDefault(),typeof s.clipboardData=="undefined"){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=ut[e.format]||ut.default;window.clipboardData.setData(d,t)}else s.clipboardData.clearData(),s.clipboardData.setData(e.format,t);e.onCopy&&(s.preventDefault(),e.onCopy(s.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),u.addRange(i);var v=document.execCommand("copy");if(!v)throw new Error("copy command was unsuccessful");c=!0}catch(s){a&&console.error("unable to copy using execCommand: ",s),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),c=!0}catch(d){a&&console.error("unable to copy using clipboardData: ",d),a&&console.error("falling back to prompt"),r=Ta("message"in e?e.message:Na),window.prompt(r,t)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(i):u.removeAllRanges()),l&&document.body.removeChild(l),o()}return c}var $a=ka,_a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},La=_a,$t=function(e,a){return n.exports.createElement(de,G(G({},e),{},{ref:a,icon:La}))};$t.displayName="EditOutlined";var Aa=n.exports.forwardRef($t),Da={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},Ia=Da,_t=function(e,a){return n.exports.createElement(de,G(G({},e),{},{ref:a,icon:Ia}))};_t.displayName="CopyOutlined";var Ma=n.exports.forwardRef(_t),za={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},ja=za,Lt=function(e,a){return n.exports.createElement(de,G(G({},e),{},{ref:a,icon:ja}))};Lt.displayName="EnterOutlined";var Ba=n.exports.forwardRef(Lt),Ha=function(e){var a=e.prefixCls,r=e["aria-label"],o=e.className,i=e.style,u=e.direction,l=e.maxLength,c=e.autoSize,v=c===void 0?!0:c,s=e.value,d=e.onSave,p=e.onCancel,y=e.onEnd,x=e.component,T=e.enterIcon,S=T===void 0?n.exports.createElement(Ba,null):T,m=n.exports.useRef(),C=n.exports.useRef(!1),P=n.exports.useRef(),O=n.exports.useState(s),b=W(O,2),D=b[0],_=b[1];n.exports.useEffect(function(){_(s)},[s]),n.exports.useEffect(function(){if(m.current&&m.current.resizableTextArea){var A=m.current.resizableTextArea.textArea;A.focus();var I=A.value.length;A.setSelectionRange(I,I)}},[]);var R=function(I){var j=I.target;_(j.value.replace(/[\n\r]/g,""))},g=function(){C.current=!0},h=function(){C.current=!1},L=function(I){var j=I.keyCode;C.current||(P.current=j)},H=function(){d(D.trim())},X=function(I){var j=I.keyCode,Z=I.ctrlKey,z=I.altKey,F=I.metaKey,M=I.shiftKey;P.current===j&&!C.current&&!Z&&!z&&!F&&!M&&(j===me.ENTER?(H(),y==null||y()):j===me.ESC&&p())},V=function(){H()},Y=x?"".concat(a,"-").concat(x):"",K=Q(a,"".concat(a,"-edit-content"),B({},"".concat(a,"-rtl"),u==="rtl"),o,Y);return n.exports.createElement("div",{className:K,style:i},n.exports.createElement(Rr,{ref:m,maxLength:l,value:D,onChange:R,onKeyDown:L,onKeyUp:X,onCompositionStart:g,onCompositionEnd:h,onBlur:V,"aria-label":r,rows:1,autoSize:v}),S!==null?he(S,{className:"".concat(a,"-edit-content-confirm")}):null)},Va=Ha;function Ie(t,e){return n.exports.useMemo(function(){var a=!!t;return[a,k(k({},e),a&&ue(t)==="object"?t:null)]},[t])}var Ka=function(t,e){var a=n.exports.useRef(!1);n.exports.useEffect(function(){a.current?t():a.current=!0},e)};function At(t){var e=ue(t);return e==="string"||e==="number"}function Wa(t){var e=0;return t.forEach(function(a){At(a)?e+=String(a).length:e+=1}),e}function dt(t,e){for(var a=0,r=[],o=0;o<t.length;o+=1){if(a===e)return r;var i=t[o],u=At(i),l=u?String(i).length:1,c=a+l;if(c>e){var v=e-a;return r.push(String(i).slice(0,v)),r}r.push(i),a=c}return t}var Ua=0,Te=1,ft=2,Me=3,vt=4,Fa=function(e){var a=e.enabledMeasure,r=e.children,o=e.text,i=e.width,u=e.rows,l=e.onEllipsis,c=n.exports.useState([0,0,0]),v=W(c,2),s=v[0],d=v[1],p=n.exports.useState(Ua),y=W(p,2),x=y[0],T=y[1],S=W(s,3),m=S[0],C=S[1],P=S[2],O=n.exports.useState(0),b=W(O,2),D=b[0],_=b[1],R=n.exports.useRef(null),g=n.exports.useRef(null),h=n.exports.useMemo(function(){return Ae(o)},[o]),L=n.exports.useMemo(function(){return Wa(h)},[h]),H=n.exports.useMemo(function(){return!a||x!==Me?r(h,!1):r(dt(h,C),C<L)},[a,x,r,h,C,L]);$e(function(){a&&i&&L&&(T(Te),d([0,Math.ceil(L/2),L]))},[a,i,o,L,u]),$e(function(){var K;x===Te&&_(((K=R.current)===null||K===void 0?void 0:K.offsetHeight)||0)},[x]),$e(function(){var K,A;if(D){if(x===Te){var I=((K=g.current)===null||K===void 0?void 0:K.offsetHeight)||0,j=u*D;I<=j?(T(vt),l(!1)):T(ft)}else if(x===ft)if(m!==P){var Z=((A=g.current)===null||A===void 0?void 0:A.offsetHeight)||0,z=u*D,F=m,M=P;m===P-1?M=m:Z<=z?F=C:M=C;var E=Math.ceil((F+M)/2);d([F,E,M])}else T(Me),l(!0)}},[x,m,P,u,D]);var X={width:i,whiteSpace:"normal",margin:0,padding:0},V=function(A,I,j){return n.exports.createElement("span",{"aria-hidden":!0,ref:I,style:k({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},j)},A)},Y=function(A,I){var j=dt(h,A);return V(r(j,!0),I,X)};return n.exports.createElement(n.exports.Fragment,null,H,a&&x!==Me&&x!==vt&&n.exports.createElement(n.exports.Fragment,null,V("lg",R,{wordBreak:"keep-all",whiteSpace:"nowrap"}),x===Te?V(r(h,!1),g,X):Y(C,g)))},Ga=Fa,Ja=function(e){var a=e.title,r=e.enabledEllipsis,o=e.isEllipsis,i=e.children;return!a||!r?i:n.exports.createElement(_e,{title:a,visible:o?void 0:!1},i)},Xa=Ja,Ya=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a};function Za(t,e){var a=t.mark,r=t.code,o=t.underline,i=t.delete,u=t.strong,l=t.keyboard,c=t.italic,v=e;function s(d,p){!d||(v=n.exports.createElement(p,{},v))}return s(u,"strong"),s(o,"u"),s(i,"del"),s(r,"code"),s(a,"mark"),s(l,"kbd"),s(c,"i"),v}function ke(t,e,a){return t===!0||t===void 0?e:t||a&&e}function pt(t){return Array.isArray(t)?t:[t]}var qa="...",Qa=n.exports.forwardRef(function(t,e){var a=t.prefixCls,r=t.className,o=t.style,i=t.type,u=t.disabled,l=t.children,c=t.ellipsis,v=t.editable,s=t.copyable,d=t.component,p=t.title,y=Ya(t,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),x=n.exports.useContext(re),T=x.getPrefixCls,S=x.direction,m=hr("Text")[0],C=n.exports.useRef(null),P=n.exports.useRef(null),O=T("typography",a),b=mt(y,["mark","code","delete","underline","strong","keyboard","italic"]),D=Ie(v),_=W(D,2),R=_[0],g=_[1],h=Cr(!1,{value:g.editing}),L=W(h,2),H=L[0],X=L[1],V=g.triggerType,Y=V===void 0?["icon"]:V,K=function(f){var w;f&&((w=g.onStart)===null||w===void 0||w.call(g)),X(f)};Ka(function(){var $;H||($=P.current)===null||$===void 0||$.focus()},[H]);var A=function(f){f==null||f.preventDefault(),K(!0)},I=function(f){var w;(w=g.onChange)===null||w===void 0||w.call(g,f),K(!1)},j=function(){var f;(f=g.onCancel)===null||f===void 0||f.call(g),K(!1)},Z=Ie(s),z=W(Z,2),F=z[0],M=z[1],E=n.exports.useState(!1),N=W(E,2),J=N[0],ae=N[1],Ee=n.exports.useRef(),Oe=function(){clearTimeout(Ee.current)},le=function(f){var w;f==null||f.preventDefault(),f==null||f.stopPropagation(),$a(M.text||String(l)||""),ae(!0),Oe(),Ee.current=setTimeout(function(){ae(!1)},3e3),(w=M.onCopy)===null||w===void 0||w.call(M,f)};n.exports.useEffect(function(){return Oe},[]);var ge=n.exports.useState(!1),we=W(ge,2),Se=we[0],ne=we[1],U=n.exports.useState(!1),te=W(U,2),ye=te[0],xe=te[1],Dt=n.exports.useState(!1),Fe=W(Dt,2),It=Fe[0],Mt=Fe[1],zt=n.exports.useState(!1),Ge=W(zt,2),Je=Ge[0],jt=Ge[1],Bt=n.exports.useState(!1),Xe=W(Bt,2),Ye=Xe[0],Ht=Xe[1],Vt=Ie(c,{expandable:!1}),Ze=W(Vt,2),se=Ze[0],q=Ze[1],oe=se&&!It,qe=q.rows,fe=qe===void 0?1:qe,Re=n.exports.useMemo(function(){return!oe||q.suffix!==void 0||q.onEllipsis||q.expandable||R||F},[oe,q,R,F]);$e(function(){se&&!Re&&(ne(ct("webkitLineClamp")),xe(ct("textOverflow")))},[Re,se]);var ie=n.exports.useMemo(function(){return Re?!1:fe===1?ye:Se},[Re,ye,Se]),Qe=oe&&(ie?Ye:Je),Kt=oe&&fe===1&&ie,Pe=oe&&fe>1&&ie,Wt=function(f){var w;Mt(!0),(w=q.onExpand)===null||w===void 0||w.call(q,f)},Ut=n.exports.useState(0),et=W(Ut,2),Ft=et[0],Gt=et[1],Jt=function(f){var w=f.offsetWidth;Gt(w)},Xt=function(f){var w;jt(f),Je!==f&&((w=q.onEllipsis)===null||w===void 0||w.call(q,f))};n.exports.useEffect(function(){var $=C.current;if(se&&ie&&$){var f=Pe?$.offsetHeight<$.scrollHeight:$.offsetWidth<$.scrollWidth;Ye!==f&&Ht(f)}},[se,ie,l,Pe]);var Ne=q.tooltip===!0?l:q.tooltip,tt=n.exports.useMemo(function(){var $=function(w){return["string","number"].includes(ue(w))};if(!(!se||ie)){if($(l))return l;if($(p))return p;if($(Ne))return Ne}},[se,ie,p,Ne,Qe]);if(H)return n.exports.createElement(Va,{value:typeof l=="string"?l:"",onSave:I,onCancel:j,onEnd:g.onEnd,prefixCls:O,className:r,style:o,direction:S,component:d,maxLength:g.maxLength,autoSize:g.autoSize,enterIcon:g.enterIcon});var Yt=function(){var f=q.expandable,w=q.symbol;if(!f)return null;var ee;return w?ee=w:ee=m.expand,n.exports.createElement("a",{key:"expand",className:"".concat(O,"-expand"),onClick:Wt,"aria-label":m.expand},ee)},Zt=function(){if(!!R){var f=g.icon,w=g.tooltip,ee=Ae(w)[0]||m.edit,ce=typeof ee=="string"?ee:"";return Y.includes("icon")?n.exports.createElement(_e,{key:"edit",title:w===!1?"":ee},n.exports.createElement(Be,{ref:P,className:"".concat(O,"-edit"),onClick:A,"aria-label":ce},f||n.exports.createElement(Aa,{role:"button"}))):null}},qt=function(){if(!!F){var f=M.tooltips,w=M.icon,ee=pt(f),ce=pt(w),be=J?ke(ee[1],m.copied):ke(ee[0],m.copy),tr=J?m.copied:m.copy,rr=typeof be=="string"?be:tr;return n.exports.createElement(_e,{key:"copy",title:be},n.exports.createElement(Be,{className:Q("".concat(O,"-copy"),J&&"".concat(O,"-copy-success")),onClick:le,"aria-label":rr},J?ke(ce[1],n.exports.createElement(_r,null),!0):ke(ce[0],n.exports.createElement(Ma,null),!0)))}},Qt=function(f){return[f&&Yt(),Zt(),qt()]},er=function(f){return[f&&n.exports.createElement("span",{"aria-hidden":!0,key:"ellipsis"},qa),q.suffix,Qt(f)]};return n.exports.createElement(He,{onResize:Jt,disabled:!oe||ie},function($){var f;return n.exports.createElement(Xa,{title:Ne,enabledEllipsis:oe,isEllipsis:Qe},n.exports.createElement(kt,k({className:Q((f={},B(f,"".concat(O,"-").concat(i),i),B(f,"".concat(O,"-disabled"),u),B(f,"".concat(O,"-ellipsis"),se),B(f,"".concat(O,"-single-line"),oe&&fe===1),B(f,"".concat(O,"-ellipsis-single-line"),Kt),B(f,"".concat(O,"-ellipsis-multiple-line"),Pe),f),r),style:k(k({},o),{WebkitLineClamp:Pe?fe:void 0}),component:d,ref:Le($,C,e),direction:S,onClick:Y.includes("text")?A:null,"aria-label":tt,title:p},b),n.exports.createElement(Ga,{enabledMeasure:oe&&!ie,text:l,rows:fe,width:Ft,onEllipsis:Xt},function(w,ee){var ce=w;w.length&&ee&&tt&&(ce=n.exports.createElement("span",{key:"show-content","aria-hidden":!0},ce));var be=Za(t,n.exports.createElement(n.exports.Fragment,null,ce,er(ee)));return be})))})}),De=Qa,en=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},tn=function(e,a){var r=e.ellipsis,o=en(e,["ellipsis"]),i=n.exports.useMemo(function(){return r&&ue(r)==="object"?mt(r,["expandable","rows"]):r},[r]);return n.exports.createElement(De,k({ref:a},o,{ellipsis:i,component:"span"}))},rn=n.exports.forwardRef(tn),an=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},nn=function(e,a){var r=e.ellipsis,o=e.rel,i=an(e,["ellipsis","rel"]),u=n.exports.useRef(null);n.exports.useImperativeHandle(a,function(){return u.current});var l=k(k({},i),{rel:o===void 0&&i.target==="_blank"?"noopener noreferrer":o});return delete l.navigate,n.exports.createElement(De,k({},l,{ref:u,ellipsis:!!r,component:"a"}))},on=n.exports.forwardRef(nn),ln=globalThis&&globalThis.__rest||function(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a},sn=Er(1,2,3,4,5),cn=function(e,a){var r=e.level,o=r===void 0?1:r,i=ln(e,["level"]),u;return sn.indexOf(o)!==-1?u="h".concat(o):u="h1",n.exports.createElement(De,k({ref:a},i,{component:u}))},un=n.exports.forwardRef(cn),dn=function(e,a){return n.exports.createElement(De,k({ref:a},e,{component:"div"}))},fn=n.exports.forwardRef(dn),Ce=kt;Ce.Text=rn;Ce.Link=on;Ce.Title=un;Ce.Paragraph=fn;var gn=Ce,yn=t=>{const e=n.exports.useRef(null);return n.exports.useEffect(()=>{Or.timeline().set(e.current,{y:"-100%",opacity:0,ease:"ease-in-out",duration:1}).to(e.current,{y:"0",opacity:1,ease:"ease-in-out",duration:1})},[]),ot("div",{ref:e,children:ot(Ea,nt({},t))})};export{_r as C,Tr as D,Aa as E,yn as P,gn as T,zr as a,Ct as b,Lr as c,Jr as d,ct as i,Ar as u};