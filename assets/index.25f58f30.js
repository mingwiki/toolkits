import{r,p as Ne,v as te,_ as he,e as N,d as Oe,x as de,f as ge,q as dn,n as vn,C as fn,Z as pn,$ as hn,au as mn,a0 as gn,Y as Cn}from"./index.78356c01.js";import{c as xn,u as He,a as Sn,b as $e,B as bn,d as yn,g as kn}from"./DoubleRightOutlined.c402e8dd.js";import{b as Be,e as ze,h as wn}from"./index.9c2bd02f.js";import{K as ue}from"./KeyCode.bb3c3291.js";import{b as Pn,g as _n,d as On}from"./TextArea.1e4b375c.js";var Ee=r.exports.createContext(null),Ke="__RC_CASCADER_SPLIT__",Ye="SHOW_PARENT",Ge="SHOW_CHILD";function pe(e){return e.join(Ke)}function be(e){return e.map(pe)}function In(e){return e.split(Ke)}function En(e){var t=e||{},n=t.label,a=t.value,o=t.children,i=a||"value";return{label:n||"label",value:i,key:i,children:o||"children"}}function Pe(e,t){var n,a;return(n=e.isLeaf)!==null&&n!==void 0?n:!(!((a=e[t.children])===null||a===void 0)&&a.length)}function Vn(e){var t=e.parentElement;if(!!t){var n=e.offsetTop-t.offsetTop;n-t.scrollTop<0?t.scrollTo({top:n}):n+e.offsetHeight-t.scrollTop>t.offsetHeight&&t.scrollTo({top:n+e.offsetHeight-t.offsetHeight})}}function Ue(e,t,n){var a=new Set(e),o=t();return e.filter(function(i){var l=o[i],c=l?l.parent:null,d=l?l.children:null;return n===Ge?!(d&&d.some(function(u){return u.key&&a.has(u.key)})):!(c&&!c.node.disabled&&a.has(c.key))})}function Ie(e,t,n){for(var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,o=t,i=[],l=function(u){var h,f,k,w=e[u],C=(h=o)===null||h===void 0?void 0:h.findIndex(function(m){var y=m[n.value];return a?String(y)===String(w):y===w}),v=C!==-1?(f=o)===null||f===void 0?void 0:f[C]:null;i.push({value:(k=v==null?void 0:v[n.value])!==null&&k!==void 0?k:w,index:C,option:v}),o=v==null?void 0:v[n.children]},c=0;c<e.length;c+=1)l(c);return i}var Ln=function(e,t,n,a,o){return r.exports.useMemo(function(){var i=o||function(l){var c=a?l.slice(-1):l,d=" / ";return c.every(function(u){return["string","number"].includes(Ne(u))})?c.join(d):c.reduce(function(u,h,f){var k=r.exports.isValidElement(h)?r.exports.cloneElement(h,{key:f}):h;return f===0?[k]:[].concat(te(u),[d,k])},[])};return e.map(function(l){var c=Ie(l,t,n),d=i(c.map(function(h){var f,k=h.option,w=h.value;return(f=k==null?void 0:k[n.label])!==null&&f!==void 0?f:w}),c.map(function(h){var f=h.option;return f})),u=pe(l);return{label:d,value:u,key:u,valueCells:l}})},[e,t,n,o,a])},Mn=function(e,t){var n=r.exports.useRef({options:null,info:null}),a=r.exports.useCallback(function(){return n.current.options!==e&&(n.current.options=e,n.current.info=xn(e,{fieldNames:t,initWrapper:function(i){return he(he({},i),{},{pathKeyEntities:{}})},processEntity:function(i,l){var c=i.nodes.map(function(d){return d[t.value]}).join(Ke);l.pathKeyEntities[c]=i,i.key=c}})),n.current.info.pathKeyEntities},[t,e]);return a},Nn=function(e,t){return r.exports.useCallback(function(n){var a=[],o=[];return n.forEach(function(i){var l=Ie(i,e,t);l.every(function(c){return c.option})?o.push(i):a.push(i)}),[o,a]},[e,t])};function qe(e){var t=r.exports.useRef();t.current=e;var n=r.exports.useCallback(function(){return t.current.apply(t,arguments)},[]);return n}function An(e){return r.exports.useMemo(function(){if(!e)return[!1,{}];var t={matchInputWidth:!0,limit:50};return e&&Ne(e)==="object"&&(t=he(he({},t),e)),t.limit<=0&&delete t.limit,[!0,t]},[e])}var _e="__rc_cascader_search_mark__",Dn=function(t,n,a){var o=a.label;return n.some(function(i){return String(i[o]).toLowerCase().includes(t.toLowerCase())})},Rn=function(t,n,a,o){return n.map(function(i){return i[o.label]}).join(" / ")},Tn=function(e,t,n,a,o,i){var l=o.filter,c=l===void 0?Dn:l,d=o.render,u=d===void 0?Rn:d,h=o.limit,f=h===void 0?50:h,k=o.sort;return r.exports.useMemo(function(){var w=[];if(!e)return[];function C(v,m){v.forEach(function(y){if(!(!k&&f>0&&w.length>=f)){var T=[].concat(te(m),[y]),x=y[n.children];if((!x||x.length===0||i)&&c(e,T,{label:n.label})){var D;w.push(he(he({},y),{},(D={},N(D,n.label,u(e,T,a,n)),N(D,_e,T),D)))}x&&C(y[n.children],T)}})}return C(t,[]),k&&w.sort(function(v,m){return k(v[_e],m[_e],e,n)}),f>0?w.slice(0,f):w},[e,t,n,a,u,i,c,k,f])};function $n(e){var t,n=e.prefixCls,a=e.checked,o=e.halfChecked,i=e.disabled,l=e.onClick,c=r.exports.useContext(Ee),d=c.checkable,u=typeof d!="boolean"?d:null;return r.exports.createElement("span",{className:Oe("".concat(n),(t={},N(t,"".concat(n,"-checked"),a),N(t,"".concat(n,"-indeterminate"),!a&&o),N(t,"".concat(n,"-disabled"),i),t)),onClick:l},u)}var Je="__cascader_fix_label__";function Hn(e){var t=e.prefixCls,n=e.multiple,a=e.options,o=e.activeValue,i=e.prevValuePath,l=e.onToggleOpen,c=e.onSelect,d=e.onActive,u=e.checkedSet,h=e.halfCheckedSet,f=e.loadingKeys,k=e.isSelectable,w="".concat(t,"-menu"),C="".concat(t,"-menu-item"),v=r.exports.useContext(Ee),m=v.fieldNames,y=v.changeOnSelect,T=v.expandTrigger,x=v.expandIcon,D=v.loadingIcon,A=v.dropdownMenuColumnStyle,S=T==="hover",I=r.exports.useMemo(function(){return a.map(function(s){var b,g=s.disabled,P=s[_e],z=(b=s[Je])!==null&&b!==void 0?b:s[m.label],O=s[m.value],$=Pe(s,m),J=P?P.map(function(M){return M[m.value]}):[].concat(te(i),[O]),R=pe(J),U=f.includes(R),K=u.has(R),Y=h.has(R);return{disabled:g,label:z,value:O,isLeaf:$,isLoading:U,checked:K,halfChecked:Y,option:s,fullPath:J,fullPathKey:R}})},[a,u,m,h,f,i]);return r.exports.createElement("ul",{className:w,role:"menu"},I.map(function(s){var b,g=s.disabled,P=s.label,z=s.value,O=s.isLeaf,$=s.isLoading,J=s.checked,R=s.halfChecked,U=s.option,K=s.fullPath,Y=s.fullPathKey,M=function(){!g&&(!S||!O)&&d(K)},ve=function(){k(U)&&c(K,O)},W;return typeof U.title=="string"?W=U.title:typeof P=="string"&&(W=P),r.exports.createElement("li",{key:Y,className:Oe(C,(b={},N(b,"".concat(C,"-expand"),!O),N(b,"".concat(C,"-active"),o===z),N(b,"".concat(C,"-disabled"),g),N(b,"".concat(C,"-loading"),$),b)),style:A,role:"menuitemcheckbox",title:W,"aria-checked":J,"data-path-key":Y,onClick:function(){M(),(!n||O)&&ve()},onDoubleClick:function(){y&&l(!1)},onMouseEnter:function(){S&&M()},onMouseDown:function(ee){ee.preventDefault()}},n&&r.exports.createElement($n,{prefixCls:"".concat(t,"-checkbox"),checked:J,halfChecked:R,disabled:g,onClick:function(ee){ee.stopPropagation(),ve()}}),r.exports.createElement("div",{className:"".concat(C,"-content")},P),!$&&x&&!O&&r.exports.createElement("div",{className:"".concat(C,"-expand-icon")},x),$&&D&&r.exports.createElement("div",{className:"".concat(C,"-loading-icon")},D))}))}var Kn=function(){var e=He(),t=e.multiple,n=e.open,a=r.exports.useContext(Ee),o=a.values,i=r.exports.useState([]),l=de(i,2),c=l[0],d=l[1];return r.exports.useEffect(function(){if(n&&!t){var u=o[0];d(u||[])}},[n]),[c,d]},Wn=function(e,t,n,a,o,i){var l=He(),c=l.direction,d=l.searchValue,u=l.toggleOpen,h=l.open,f=c==="rtl",k=r.exports.useMemo(function(){for(var A=-1,S=t,I=[],s=[],b=a.length,g=function(R){var U=S.findIndex(function(K){return K[n.value]===a[R]});if(U===-1)return"break";A=U,I.push(A),s.push(a[R]),S=S[A][n.children]},P=0;P<b&&S;P+=1){var z=g(P);if(z==="break")break}for(var O=t,$=0;$<I.length-1;$+=1)O=O[I[$]][n.children];return[s,A,O]},[a,n,t]),w=de(k,3),C=w[0],v=w[1],m=w[2],y=function(S){o(S)},T=function(S){var I=m.length,s=v;s===-1&&S<0&&(s=I);for(var b=0;b<I;b+=1){s=(s+S+I)%I;var g=m[s];if(g&&!g.disabled){var P=g[n.value],z=C.slice(0,-1).concat(P);y(z);return}}},x=function(){if(C.length>1){var S=C.slice(0,-1);y(S)}else u(!1)},D=function(){var S,I=((S=m[v])===null||S===void 0?void 0:S[n.children])||[],s=I.find(function(g){return!g.disabled});if(s){var b=[].concat(te(C),[s[n.value]]);y(b)}};r.exports.useImperativeHandle(e,function(){return{onKeyDown:function(S){var I=S.which;switch(I){case ue.UP:case ue.DOWN:{var s=0;I===ue.UP?s=-1:I===ue.DOWN&&(s=1),s!==0&&T(s);break}case ue.LEFT:{f?D():x();break}case ue.RIGHT:{f?x():D();break}case ue.BACKSPACE:{d||x();break}case ue.ENTER:{if(C.length){var b=m[v],g=(b==null?void 0:b[_e])||[];g.length?i(g.map(function(P){return P[n.value]}),g[g.length-1]):i(C,m[v])}break}case ue.ESC:u(!1),h&&S.stopPropagation()}},onKeyUp:function(){}}})},Fn=r.exports.forwardRef(function(e,t){var n,a,o,i,l=He(),c=l.prefixCls,d=l.multiple,u=l.searchValue,h=l.toggleOpen,f=l.notFoundContent,k=l.direction,w=r.exports.useRef(),C=k==="rtl",v=r.exports.useContext(Ee),m=v.options,y=v.values,T=v.halfValues,x=v.fieldNames,D=v.changeOnSelect,A=v.onSelect,S=v.searchOptions,I=v.dropdownPrefixCls,s=v.loadData,b=v.expandTrigger,g=I||c,P=r.exports.useState([]),z=de(P,2),O=z[0],$=z[1],J=function(p){if(!(!s||u)){var L=Ie(p,m,x),V=L.map(function(re){var le=re.option;return le}),F=V[V.length-1];if(F&&!Pe(F,x)){var Q=pe(p);$(function(re){return[].concat(te(re),[Q])}),s(V)}}};r.exports.useEffect(function(){O.length&&O.forEach(function(E){var p=In(E),L=Ie(p,m,x,!0).map(function(F){var Q=F.option;return Q}),V=L[L.length-1];(!V||V[x.children]||Pe(V,x))&&$(function(F){return F.filter(function(Q){return Q!==E})})})},[m,O,x]);var R=r.exports.useMemo(function(){return new Set(be(y))},[y]),U=r.exports.useMemo(function(){return new Set(be(T))},[T]),K=Kn(),Y=de(K,2),M=Y[0],ve=Y[1],W=function(p){ve(p),J(p)},G=function(p){var L=p.disabled,V=Pe(p,x);return!L&&(V||D||d)},ee=function(p,L){var V=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;A(p),!d&&(L||D&&(b==="hover"||V))&&h(!1)},ne=r.exports.useMemo(function(){return u?S:m},[u,S,m]),q=r.exports.useMemo(function(){for(var E=[{options:ne}],p=ne,L=function(re){var le=M[re],fe=p.find(function(oe){return oe[x.value]===le}),ce=fe==null?void 0:fe[x.children];if(!(ce!=null&&ce.length))return"break";p=ce,E.push({options:ce})},V=0;V<M.length;V+=1){var F=L(V);if(F==="break")break}return E},[ne,M,x]),H=function(p,L){G(L)&&ee(p,Pe(L,x),!0)};Wn(t,ne,x,M,W,H),r.exports.useEffect(function(){for(var E=0;E<M.length;E+=1){var p,L=M.slice(0,E+1),V=pe(L),F=(p=w.current)===null||p===void 0?void 0:p.querySelector('li[data-path-key="'.concat(V.replace(/\\{0,2}"/g,'\\"'),'"]'));F&&Vn(F)}},[M]);var X=!(!((n=q[0])===null||n===void 0||(a=n.options)===null||a===void 0)&&a.length),Z=[(o={},N(o,x.value,"__EMPTY__"),N(o,Je,f),N(o,"disabled",!0),o)],ae=he(he({},e),{},{multiple:!X&&d,onSelect:ee,onActive:W,onToggleOpen:h,checkedSet:R,halfCheckedSet:U,loadingKeys:O,isSelectable:G}),Ce=X?[{options:Z}]:q,xe=Ce.map(function(E,p){var L=M.slice(0,p),V=M[p];return r.exports.createElement(Hn,ge({key:p},ae,{prefixCls:g,options:E.options,prevValuePath:L,activeValue:V}))});return r.exports.createElement("div",{className:Oe("".concat(g,"-menus"),(i={},N(i,"".concat(g,"-menu-empty"),X),N(i,"".concat(g,"-rtl"),C),i)),ref:w},xe)}),jn=["id","prefixCls","fieldNames","defaultValue","value","changeOnSelect","onChange","displayRender","checkable","searchValue","onSearch","showSearch","expandTrigger","options","dropdownPrefixCls","loadData","popupVisible","open","popupClassName","dropdownClassName","dropdownMenuColumnStyle","popupPlacement","placement","onDropdownVisibleChange","onPopupVisibleChange","expandIcon","loadingIcon","children","dropdownMatchSelectWidth","showCheckedStrategy"];function Bn(e){return Array.isArray(e)&&Array.isArray(e[0])}function Xe(e){return e?Bn(e)?e:(e.length===0?[]:[e]).map(function(t){return Array.isArray(t)?t:[t]}):[]}var Ve=r.exports.forwardRef(function(e,t){var n=e.id,a=e.prefixCls,o=a===void 0?"rc-cascader":a,i=e.fieldNames,l=e.defaultValue,c=e.value,d=e.changeOnSelect,u=e.onChange,h=e.displayRender,f=e.checkable,k=e.searchValue,w=e.onSearch,C=e.showSearch,v=e.expandTrigger,m=e.options,y=e.dropdownPrefixCls,T=e.loadData,x=e.popupVisible,D=e.open,A=e.popupClassName,S=e.dropdownClassName,I=e.dropdownMenuColumnStyle,s=e.popupPlacement,b=e.placement,g=e.onDropdownVisibleChange,P=e.onPopupVisibleChange,z=e.expandIcon,O=z===void 0?">":z,$=e.loadingIcon,J=e.children,R=e.dropdownMatchSelectWidth,U=R===void 0?!1:R,K=e.showCheckedStrategy,Y=K===void 0?Ye:K,M=dn(e,jn),ve=Sn(n),W=!!f,G=Be(l,{value:c,postState:Xe}),ee=de(G,2),ne=ee[0],q=ee[1],H=r.exports.useMemo(function(){return En(i)},[JSON.stringify(i)]),X=r.exports.useMemo(function(){return m||[]},[m]),Z=Mn(X,H),ae=r.exports.useCallback(function(j){var _=Z();return j.map(function(B){var ie=_[B].nodes;return ie.map(function(se){return se[H.value]})})},[Z,H]),Ce=Be("",{value:k,postState:function(_){return _||""}}),xe=de(Ce,2),E=xe[0],p=xe[1],L=function(_,B){p(_),B.source!=="blur"&&w&&w(_)},V=An(C),F=de(V,2),Q=F[0],re=F[1],le=Tn(E,X,H,y||o,re,d),fe=Nn(X,H),ce=r.exports.useMemo(function(){var j=fe(ne),_=de(j,2),B=_[0],ie=_[1];if(!W||!ne.length)return[B,[],ie];var se=be(B),ke=Z(),me=$e(se,!0,ke),Le=me.checkedKeys,Me=me.halfCheckedKeys;return[ae(Le),ae(Me),ie]},[W,ne,Z,ae,fe]),oe=de(ce,3),Se=oe[0],Ae=oe[1],ye=oe[2],Ze=r.exports.useMemo(function(){var j=be(Se),_=Ue(j,Z,Y);return[].concat(te(ye),te(ae(_)))},[Se,Z,ae,ye,Y]),Qe=Ln(Ze,X,H,W,h),De=qe(function(j){if(q(j),u){var _=Xe(j),B=_.map(function(ke){return Ie(ke,X,H).map(function(me){return me.option})}),ie=W?_:_[0],se=W?B:B[0];u(ie,se)}}),Re=qe(function(j){if(p(""),!W)De(j);else{var _=pe(j),B=be(Se),ie=be(Ae),se=B.includes(_),ke=ye.some(function(we){return pe(we)===_}),me=Se,Le=ye;if(ke&&!se)Le=ye.filter(function(we){return pe(we)!==_});else{var Me=se?B.filter(function(we){return we!==_}):[].concat(te(B),[_]),je=Z(),Te;if(se){var cn=$e(Me,{checked:!1,halfCheckedKeys:ie},je);Te=cn.checkedKeys}else{var sn=$e(Me,!0,je);Te=sn.checkedKeys}var un=Ue(Te,Z,Y);me=ae(un)}De([].concat(te(Le),te(me)))}}),en=function(_,B){if(B.type==="clear"){De([]);return}var ie=B.values[0].valueCells;Re(ie)},nn=D!==void 0?D:x,tn=S||A,an=b||s,rn=function(_){g==null||g(_),P==null||P(_)},on=r.exports.useMemo(function(){return{options:X,fieldNames:H,values:Se,halfValues:Ae,changeOnSelect:d,onSelect:Re,checkable:f,searchOptions:le,dropdownPrefixCls:y,loadData:T,expandTrigger:v,expandIcon:O,loadingIcon:$,dropdownMenuColumnStyle:I}},[X,H,Se,Ae,d,Re,f,le,y,T,v,O,$,I]),Fe=!(E?le:X).length,ln=E&&re.matchInputWidth||Fe?{}:{minWidth:"auto"};return r.exports.createElement(Ee.Provider,{value:on},r.exports.createElement(bn,ge({},M,{ref:t,id:ve,prefixCls:o,dropdownMatchSelectWidth:U,dropdownStyle:ln,displayValues:Qe,onDisplayValuesChange:en,mode:W?"multiple":void 0,searchValue:E,onSearch:L,showSearch:Q,OptionList:Fn,emptyOptions:Fe,open:nn,dropdownClassName:tn,placement:an,onDropdownVisibleChange:rn,getRawInputElement:function(){return J}})))});Ve.SHOW_PARENT=Ye;Ve.SHOW_CHILD=Ge;var zn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]]);return n},Un=Ve.SHOW_CHILD,qn=Ve.SHOW_PARENT;function Xn(e,t,n){var a=e.toLowerCase().split(t).reduce(function(l,c,d){return d===0?[c]:[].concat(te(l),[t,c])},[]),o=[],i=0;return a.forEach(function(l,c){var d=i+l.length,u=e.slice(i,d);i=d,c%2===1&&(u=r.exports.createElement("span",{className:"".concat(n,"-menu-item-keyword"),key:"seperator-".concat(c)},u)),o.push(u)}),o}var Yn=function(t,n,a,o){var i=[],l=t.toLowerCase();return n.forEach(function(c,d){d!==0&&i.push(" / ");var u=c[o.label],h=Ne(u);(h==="string"||h==="number")&&(u=Xn(String(u),l,a)),i.push(u)}),i},We=r.exports.forwardRef(function(e,t){var n,a=e.prefixCls,o=e.size,i=e.disabled,l=e.className,c=e.multiple,d=e.bordered,u=d===void 0?!0:d,h=e.transitionName,f=e.choiceTransitionName,k=f===void 0?"":f,w=e.popupClassName,C=e.dropdownClassName,v=e.expandIcon,m=e.placement,y=e.showSearch,T=e.allowClear,x=T===void 0?!0:T,D=e.notFoundContent,A=e.direction,S=e.getPopupContainer,I=e.status,s=e.showArrow,b=zn(e,["prefixCls","size","disabled","className","multiple","bordered","transitionName","choiceTransitionName","popupClassName","dropdownClassName","expandIcon","placement","showSearch","allowClear","notFoundContent","direction","getPopupContainer","status","showArrow"]),g=vn(b,["suffixIcon"]),P=r.exports.useContext(fn),z=P.getPopupContainer,O=P.getPrefixCls,$=P.renderEmpty,J=P.direction,R=A||J,U=R==="rtl",K=r.exports.useContext(Pn),Y=K.status,M=K.hasFeedback,ve=K.isFormItemInput,W=K.feedbackIcon,G=_n(Y,I),ee=D||($||yn)("Cascader"),ne=O(),q=O("select",a),H=O("cascader",a),X=Oe(C||w,"".concat(H,"-dropdown"),N({},"".concat(H,"-dropdown-rtl"),R==="rtl")),Z=r.exports.useMemo(function(){if(!y)return y;var oe={render:Yn};return Ne(y)==="object"&&(oe=ge(ge({},oe),y)),oe},[y]),ae=r.exports.useContext(pn),Ce=o||ae,xe=r.exports.useContext(hn),E=i||xe,p=v;v||(p=U?r.exports.createElement(mn,null):r.exports.createElement(gn,null));var L=r.exports.createElement("span",{className:"".concat(q,"-menu-item-loading-icon")},r.exports.createElement(Cn,{spin:!0})),V=r.exports.useMemo(function(){return c?r.exports.createElement("span",{className:"".concat(H,"-checkbox-inner")}):!1},[c]),F=s!==void 0?s:e.loading||!c,Q=kn(ge(ge({},e),{hasFeedback:M,feedbackIcon:W,showArrow:F,multiple:c,prefixCls:q})),re=Q.suffixIcon,le=Q.removeIcon,fe=Q.clearIcon,ce=function(){return m!==void 0?m:A==="rtl"?"bottomRight":"bottomLeft"};return r.exports.createElement(Ve,ge({prefixCls:q,className:Oe(!a&&H,(n={},N(n,"".concat(q,"-lg"),Ce==="large"),N(n,"".concat(q,"-sm"),Ce==="small"),N(n,"".concat(q,"-rtl"),U),N(n,"".concat(q,"-borderless"),!u),N(n,"".concat(q,"-in-form-item"),ve),n),On(q,G,M),l),disabled:E},g,{direction:R,placement:ce(),notFoundContent:ee,allowClear:x,showSearch:Z,expandIcon:p,inputIcon:re,removeIcon:le,clearIcon:fe,loadingIcon:L,checkable:V,dropdownClassName:X,dropdownPrefixCls:a||H,choiceTransitionName:ze(ne,"",k),transitionName:ze(ne,wn(m),h),getPopupContainer:S||z,ref:t,showArrow:M||s}))});We.SHOW_PARENT=qn;We.SHOW_CHILD=Un;var nt=We;export{nt as C};
