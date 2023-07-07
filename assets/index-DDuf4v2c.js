import{s as er,R as nr,g as ar,K as or,h as V,i as k,k as h,W as m,D as sr,l as ir,m as cr,n as fr,o as T,M as C,p as Ct,q as Et,v as X,w as lr,x as dr,y as mr,z as zt,A as kt,B as pr,C as lt,E as ur,F as yr,G as Pt,H as Ot,r as g,j as dt}from"./index-BkvQJg_1.js";function hr(t){var r=er(t);return function(e,n,a,o){for(var i="",c=0;c<r;c++)i+=t[c](e,n,a,o)||"";return i}}function gr(t){return function(r){r.root||(r=r.return)&&t(r)}}function br(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function xr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var vr=function(){function t(e){var n=this;this._insertTag=function(a){var o;n.tags.length===0?n.insertionPoint?o=n.insertionPoint.nextSibling:n.prepend?o=n.container.firstChild:o=n.before:o=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,o),n.tags.push(a)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(xr(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=br(a);try{o.insertRule(n,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}();function wr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var Sr=function(r,e,n){for(var a=0,o=0;a=o,o=lt(),a===38&&o===12&&(e[n]=1),!kt(o);)zt();return yr(r,Pt)},$r=function(r,e){var n=-1,a=44;do switch(kt(a)){case 0:a===38&&lt()===12&&(e[n]=1),r[n]+=Sr(Pt-1,e,n);break;case 2:r[n]+=ur(a);break;case 4:if(a===44){r[++n]=lt()===58?"&\f":"",e[n]=r[n].length;break}default:r[n]+=pr(a)}while(a=zt());return r},Cr=function(r,e){return dr($r(mr(r),e))},It=new WeakMap,Er=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!It.get(n))&&!a){It.set(r,!0);for(var o=[],i=Cr(e,o),c=n.props,f=0,l=0;f<i.length;f++)for(var p=0;p<c.length;p++,l++)r.props[l]=o[f]?i[f].replace(/&\f/g,c[p]):c[p]+" "+i[f]}}},Or=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function _t(t,r){switch(fr(t,r)){case 5103:return m+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return m+t+X+t+C+t+t;case 6828:case 4268:return m+t+C+t+t;case 6165:return m+t+C+"flex-"+t+t;case 5187:return m+t+h(t,/(\w+).+(:[^]+)/,m+"box-$1$2"+C+"flex-$1$2")+t;case 5443:return m+t+C+"flex-item-"+h(t,/flex-|-self/,"")+t;case 4675:return m+t+C+"flex-line-pack"+h(t,/align-content|flex-|-self/,"")+t;case 5548:return m+t+C+h(t,"shrink","negative")+t;case 5292:return m+t+C+h(t,"basis","preferred-size")+t;case 6060:return m+"box-"+h(t,"-grow","")+m+t+C+h(t,"grow","positive")+t;case 4554:return m+h(t,/([^-])(transform)/g,"$1"+m+"$2")+t;case 6187:return h(h(h(t,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),t,"")+t;case 5495:case 3959:return h(t,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return h(h(t,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+t+t;case 4095:case 3583:case 4068:case 2532:return h(t,/(.+)-inline(.+)/,m+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ct(t)-1-r>6)switch(T(t,r+1)){case 109:if(T(t,r+4)!==45)break;case 102:return h(t,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+X+(T(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~Et(t,"stretch")?_t(h(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(T(t,r+1)!==115)break;case 6444:switch(T(t,Ct(t)-3-(~Et(t,"!important")&&10))){case 107:return h(t,":",":"+m)+t;case 101:return h(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+m+(T(t,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+C+"$2box$3")+t}break;case 5936:switch(T(t,r+11)){case 114:return m+t+C+h(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return m+t+C+h(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return m+t+C+h(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return m+t+C+t+t}return t}var Ir=function(r,e,n,a){if(r.length>-1&&!r.return)switch(r.type){case sr:r.return=_t(r.value,r.length);break;case or:return V([k(r,{value:h(r.value,"@","@"+m)})],a);case nr:if(r.length)return ar(r.props,function(o){switch(lr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([k(r,{props:[h(o,/:(read-\w+)/,":"+X+"$1")]})],a);case"::placeholder":return V([k(r,{props:[h(o,/:(plac\w+)/,":"+m+"input-$1")]}),k(r,{props:[h(o,/:(plac\w+)/,":"+X+"$1")]}),k(r,{props:[h(o,/:(plac\w+)/,C+"input-$1")]})],a)}return""})}},Rr=[Ir],Ar=function(r){var e=r.key;if(e==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(d){var E=d.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var a=r.stylisPlugins||Rr,o={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(d){for(var E=d.getAttribute("data-emotion").split(" "),O=1;O<E.length;O++)o[E[O]]=!0;c.push(d)});var f,l=[Er,Or];{var p,b=[ir,gr(function(d){p.insert(d)})],w=hr(l.concat(a,b)),R=function(E){return V(cr(E),w)};f=function(E,O,S,A){p=S,R(E?E+"{"+O.styles+"}":O.styles),A&&($.inserted[O.name]=!0)}}var $={key:e,sheet:new vr({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:o,registered:{},insert:f};return $.sheet.hydrate(c),$},Yt={exports:{}},u={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=typeof Symbol=="function"&&Symbol.for,yt=v?Symbol.for("react.element"):60103,ht=v?Symbol.for("react.portal"):60106,L=v?Symbol.for("react.fragment"):60107,j=v?Symbol.for("react.strict_mode"):60108,B=v?Symbol.for("react.profiler"):60114,D=v?Symbol.for("react.provider"):60109,W=v?Symbol.for("react.context"):60110,gt=v?Symbol.for("react.async_mode"):60111,G=v?Symbol.for("react.concurrent_mode"):60111,U=v?Symbol.for("react.forward_ref"):60112,q=v?Symbol.for("react.suspense"):60113,Nr=v?Symbol.for("react.suspense_list"):60120,H=v?Symbol.for("react.memo"):60115,K=v?Symbol.for("react.lazy"):60116,Mr=v?Symbol.for("react.block"):60121,Tr=v?Symbol.for("react.fundamental"):60117,zr=v?Symbol.for("react.responder"):60118,kr=v?Symbol.for("react.scope"):60119;function I(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case yt:switch(t=t.type,t){case gt:case G:case L:case B:case j:case q:return t;default:switch(t=t&&t.$$typeof,t){case W:case U:case K:case H:case D:return t;default:return r}}case ht:return r}}}function Ft(t){return I(t)===G}u.AsyncMode=gt;u.ConcurrentMode=G;u.ContextConsumer=W;u.ContextProvider=D;u.Element=yt;u.ForwardRef=U;u.Fragment=L;u.Lazy=K;u.Memo=H;u.Portal=ht;u.Profiler=B;u.StrictMode=j;u.Suspense=q;u.isAsyncMode=function(t){return Ft(t)||I(t)===gt};u.isConcurrentMode=Ft;u.isContextConsumer=function(t){return I(t)===W};u.isContextProvider=function(t){return I(t)===D};u.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===yt};u.isForwardRef=function(t){return I(t)===U};u.isFragment=function(t){return I(t)===L};u.isLazy=function(t){return I(t)===K};u.isMemo=function(t){return I(t)===H};u.isPortal=function(t){return I(t)===ht};u.isProfiler=function(t){return I(t)===B};u.isStrictMode=function(t){return I(t)===j};u.isSuspense=function(t){return I(t)===q};u.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===L||t===G||t===B||t===j||t===q||t===Nr||typeof t=="object"&&t!==null&&(t.$$typeof===K||t.$$typeof===H||t.$$typeof===D||t.$$typeof===W||t.$$typeof===U||t.$$typeof===Tr||t.$$typeof===zr||t.$$typeof===kr||t.$$typeof===Mr)};u.typeOf=I;Yt.exports=u;var Pr=Yt.exports,Vt=Pr,_r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xt={};Xt[Vt.ForwardRef]=_r;Xt[Vt.Memo]=Yr;var Fr=!0;function Lt(t,r,e){var n="";return e.split(" ").forEach(function(a){t[a]!==void 0?r.push(t[a]+";"):n+=a+" "}),n}var bt=function(r,e,n){var a=r.key+"-"+e.name;(n===!1||Fr===!1)&&r.registered[a]===void 0&&(r.registered[a]=e.styles)},jt=function(r,e,n){bt(r,e,n);var a=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var o=e;do r.insert(e===o?"."+a:"",o,r.sheet,!0),o=o.next;while(o!==void 0)}};function Vr(t){for(var r=0,e,n=0,a=t.length;a>=4;++n,a-=4)e=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(t.charCodeAt(n+2)&255)<<16;case 2:r^=(t.charCodeAt(n+1)&255)<<8;case 1:r^=t.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Xr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lr=/[A-Z]|^ms/g,jr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Bt=function(r){return r.charCodeAt(1)===45},Rt=function(r){return r!=null&&typeof r!="boolean"},ct=wr(function(t){return Bt(t)?t:t.replace(Lr,"-$&").toLowerCase()}),At=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(jr,function(n,a,o){return M={name:a,styles:o,next:M},a})}return Xr[r]!==1&&!Bt(r)&&typeof e=="number"&&e!==0?e+"px":e};function P(t,r,e){if(e==null)return"";if(e.__emotion_styles!==void 0)return e;switch(typeof e){case"boolean":return"";case"object":{if(e.anim===1)return M={name:e.name,styles:e.styles,next:M},e.name;if(e.styles!==void 0){var n=e.next;if(n!==void 0)for(;n!==void 0;)M={name:n.name,styles:n.styles,next:M},n=n.next;var a=e.styles+";";return a}return Br(t,r,e)}case"function":{if(t!==void 0){var o=M,i=e(t);return M=o,P(t,r,i)}break}}if(r==null)return e;var c=r[e];return c!==void 0?c:e}function Br(t,r,e){var n="";if(Array.isArray(e))for(var a=0;a<e.length;a++)n+=P(t,r,e[a])+";";else for(var o in e){var i=e[o];if(typeof i!="object")r!=null&&r[i]!==void 0?n+=o+"{"+r[i]+"}":Rt(i)&&(n+=ct(o)+":"+At(o,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)Rt(i[c])&&(n+=ct(o)+":"+At(o,i[c])+";");else{var f=P(t,r,i);switch(o){case"animation":case"animationName":{n+=ct(o)+":"+f+";";break}default:n+=o+"{"+f+"}"}}}return n}var Nt=/label:\s*([^\s;\n{]+)\s*(;|$)/g,M,xt=function(r,e,n){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var a=!0,o="";M=void 0;var i=r[0];i==null||i.raw===void 0?(a=!1,o+=P(n,e,i)):o+=i[0];for(var c=1;c<r.length;c++)o+=P(n,e,r[c]),a&&(o+=i[c]);Nt.lastIndex=0;for(var f="",l;(l=Nt.exec(o))!==null;)f+="-"+l[1];var p=Vr(o)+f;return{name:p,styles:o,next:M}},Dr=function(r){return r()},Wr=Ot.useInsertionEffect?Ot.useInsertionEffect:!1,Dt=Wr||Dr,vt={}.hasOwnProperty,Wt=g.createContext(typeof HTMLElement<"u"?Ar({key:"css"}):null);Wt.Provider;var Gt=function(r){return g.forwardRef(function(e,n){var a=g.useContext(Wt);return r(e,a,n)})},Ut=g.createContext({}),mt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Gr=function(r,e){var n={};for(var a in e)vt.call(e,a)&&(n[a]=e[a]);return n[mt]=r,n},Ur=function(r){var e=r.cache,n=r.serialized,a=r.isStringTag;return bt(e,n,a),Dt(function(){return jt(e,n,a)}),null},qr=Gt(function(t,r,e){var n=t.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=t[mt],o=[n],i="";typeof t.className=="string"?i=Lt(r.registered,o,t.className):t.className!=null&&(i=t.className+" ");var c=xt(o,void 0,g.useContext(Ut));i+=r.key+"-"+c.name;var f={};for(var l in t)vt.call(t,l)&&l!=="css"&&l!==mt&&(f[l]=t[l]);return f.ref=e,f.className=i,g.createElement(g.Fragment,null,g.createElement(Ur,{cache:r,serialized:c,isStringTag:typeof a=="string"}),g.createElement(a,f))}),Hr=qr,Kr=dt.Fragment;function x(t,r,e){return vt.call(r,"css")?dt.jsx(Hr,Gr(t,r),e):dt.jsx(t,r,e)}function qt(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return xt(r)}var s=function(){var r=qt.apply(void 0,arguments),e="animation-"+r.name;return{name:e,styles:"@keyframes "+e+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Zr=function t(r){for(var e=r.length,n=0,a="";n<e;n++){var o=r[n];if(o!=null){var i=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))i=t(o);else{i="";for(var c in o)o[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=o}i&&(a&&(a+=" "),a+=i)}}return a};function Jr(t,r,e){var n=[],a=Lt(t,n,e);return n.length<2?e:a+r(n)}var Qr=function(r){var e=r.cache,n=r.serializedArr;return Dt(function(){for(var a=0;a<n.length;a++)jt(e,n[a],!1)}),null},ft=Gt(function(t,r){var e=!1,n=[],a=function(){for(var l=arguments.length,p=new Array(l),b=0;b<l;b++)p[b]=arguments[b];var w=xt(p,r.registered);return n.push(w),bt(r,w,!1),r.key+"-"+w.name},o=function(){for(var l=arguments.length,p=new Array(l),b=0;b<l;b++)p[b]=arguments[b];return Jr(r.registered,a,Zr(p))},i={css:a,cx:o,theme:g.useContext(Ut)},c=t.children(i);return e=!0,g.createElement(g.Fragment,null,g.createElement(Qr,{cache:r,serializedArr:n}),c)}),te=Object.defineProperty,re=(t,r,e)=>r in t?te(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,Y=(t,r,e)=>(re(t,typeof r!="symbol"?r+"":r,e),e),pt=new Map,F=new WeakMap,Mt=0,ee=void 0;function ne(t){return t?(F.has(t)||(Mt+=1,F.set(t,Mt.toString())),F.get(t)):"0"}function ae(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?ne(t.root):t[r]}`).toString()}function oe(t){const r=ae(t);let e=pt.get(r);if(!e){const n=new Map;let a;const o=new IntersectionObserver(i=>{i.forEach(c=>{var f;const l=c.isIntersecting&&a.some(p=>c.intersectionRatio>=p);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=l),(f=n.get(c.target))==null||f.forEach(p=>{p(l,c)})})},t);a=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:o,elements:n},pt.set(r,e)}return e}function Ht(t,r,e={},n=ee){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const f=t.getBoundingClientRect();return r(n,{isIntersecting:n,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:a,observer:o,elements:i}=oe(e),c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(r),o.observe(t),function(){c.splice(c.indexOf(r),1),c.length===0&&(i.delete(t),o.unobserve(t)),i.size===0&&(o.disconnect(),pt.delete(a))}}function se(t){return typeof t.children!="function"}var Tt=class extends g.Component{constructor(t){super(t),Y(this,"node",null),Y(this,"_unobserveCb",null),Y(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),Y(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),se(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a,fallbackInView:o}=this.props;this._unobserveCb=Ht(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:n,delay:a},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:R,entry:$}=this.state;return t({inView:R,entry:$,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:n,root:a,rootMargin:o,onChange:i,skip:c,trackVisibility:f,delay:l,initialInView:p,fallbackInView:b,...w}=this.props;return g.createElement(r||"div",{ref:this.handleNode,...w},t)}};function Kt({threshold:t,delay:r,trackVisibility:e,rootMargin:n,root:a,triggerOnce:o,skip:i,initialInView:c,fallbackInView:f,onChange:l}={}){var p;const[b,w]=g.useState(null),R=g.useRef(),[$,d]=g.useState({inView:!!c,entry:void 0});R.current=l,g.useEffect(()=>{if(i||!b)return;let A;return A=Ht(b,(z,it)=>{d({inView:z,entry:it}),R.current&&R.current(z,it),it.isIntersecting&&o&&A&&(A(),A=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:e,delay:r},f),()=>{A&&A()}},[Array.isArray(t)?t.toString():t,b,a,n,o,i,e,f,r]);const E=(p=$.entry)==null?void 0:p.target,O=g.useRef();!b&&E&&!o&&!i&&O.current!==E&&(O.current=E,d({inView:!!c,entry:void 0}));const S=[w,$.inView,$.entry];return S.ref=S[0],S.inView=S[1],S.entry=S[2],S}var Zt={exports:{}},y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wt=Symbol.for("react.element"),St=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),tt=Symbol.for("react.provider"),rt=Symbol.for("react.context"),ie=Symbol.for("react.server_context"),et=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),ot=Symbol.for("react.memo"),st=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),Jt;Jt=Symbol.for("react.module.reference");function N(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case wt:switch(t=t.type,t){case Z:case Q:case J:case nt:case at:return t;default:switch(t=t&&t.$$typeof,t){case ie:case rt:case et:case st:case ot:case tt:return t;default:return r}}case St:return r}}}y.ContextConsumer=rt;y.ContextProvider=tt;y.Element=wt;y.ForwardRef=et;y.Fragment=Z;y.Lazy=st;y.Memo=ot;y.Portal=St;y.Profiler=Q;y.StrictMode=J;y.Suspense=nt;y.SuspenseList=at;y.isAsyncMode=function(){return!1};y.isConcurrentMode=function(){return!1};y.isContextConsumer=function(t){return N(t)===rt};y.isContextProvider=function(t){return N(t)===tt};y.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===wt};y.isForwardRef=function(t){return N(t)===et};y.isFragment=function(t){return N(t)===Z};y.isLazy=function(t){return N(t)===st};y.isMemo=function(t){return N(t)===ot};y.isPortal=function(t){return N(t)===St};y.isProfiler=function(t){return N(t)===Q};y.isStrictMode=function(t){return N(t)===J};y.isSuspense=function(t){return N(t)===nt};y.isSuspenseList=function(t){return N(t)===at};y.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Z||t===Q||t===J||t===nt||t===at||t===ce||typeof t=="object"&&t!==null&&(t.$$typeof===st||t.$$typeof===ot||t.$$typeof===tt||t.$$typeof===rt||t.$$typeof===et||t.$$typeof===Jt||t.getModuleId!==void 0)};y.typeOf=N;Zt.exports=y;var fe=Zt.exports;s`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;s`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;s`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;s`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;s`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;s`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;s`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;s`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const le=s`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,de=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=s`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,pe=s`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=s`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$t=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ye=s`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,he=s`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ge=s`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,be=s`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xe=s`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ve=s`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,we=s`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Se({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:n=$t,iterationCount:a=1}){return qt`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function $e(t){return t==null}function Ce(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Qt(t,r){return e=>e?t():r()}function _(t){return Qt(t,()=>null)}function ut(t){return _(()=>({opacity:0}))(t)}const tr=t=>{const{cascade:r=!1,damping:e=.5,delay:n=0,duration:a=1e3,fraction:o=0,keyframes:i=$t,triggerOnce:c=!1,className:f,style:l,childClassName:p,childStyle:b,children:w,onVisibilityChange:R}=t,$=g.useMemo(()=>Se({keyframes:i,duration:a}),[a,i]);return $e(w)?null:Ce(w)?x(Oe,{...t,animationStyles:$,children:String(w)}):fe.isFragment(w)?x(rr,{...t,animationStyles:$}):x(Kr,{children:g.Children.map(w,(d,E)=>{if(!g.isValidElement(d))return null;const O=n+(r?E*a*e:0);switch(d.type){case"ol":case"ul":return x(ft,{children:({cx:S})=>x(d.type,{...d.props,className:S(f,d.props.className),style:Object.assign({},l,d.props.style),children:x(tr,{...t,children:d.props.children})})});case"li":return x(Tt,{threshold:o,triggerOnce:c,onChange:R,children:({inView:S,ref:A})=>x(ft,{children:({cx:z})=>x(d.type,{...d.props,ref:A,className:z(p,d.props.className),css:_(()=>$)(S),style:Object.assign({},b,d.props.style,ut(!S),{animationDelay:O+"ms"})})})});default:return x(Tt,{threshold:o,triggerOnce:c,onChange:R,children:({inView:S,ref:A})=>x("div",{ref:A,className:f,css:_(()=>$)(S),style:Object.assign({},l,ut(!S),{animationDelay:O+"ms"}),children:x(ft,{children:({cx:z})=>x(d.type,{...d.props,className:z(p,d.props.className),style:Object.assign({},b,d.props.style)})})})})}})})},Ee={display:"inline-block",whiteSpace:"pre"},Oe=t=>{const{animationStyles:r,cascade:e=!1,damping:n=.5,delay:a=0,duration:o=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:l,children:p,onVisibilityChange:b}=t,{ref:w,inView:R}=Kt({triggerOnce:c,threshold:i,onChange:b});return Qt(()=>x("div",{ref:w,className:f,style:Object.assign({},l,Ee),children:p.split("").map(($,d)=>x("span",{css:_(()=>r)(R),style:{animationDelay:a+d*o*n+"ms"},children:$},d))}),()=>x(rr,{...t,children:p}))(e)},rr=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:n=!1,className:a,style:o,children:i,onVisibilityChange:c}=t,{ref:f,inView:l}=Kt({triggerOnce:n,threshold:e,onChange:c});return x("div",{ref:f,className:a,css:_(()=>r)(l),style:Object.assign({},o,ut(!l)),children:i})};s`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;s`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;s`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;s`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;s`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Ie=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Re=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Ae=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ne=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Me=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Te=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,ze=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ke=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Pe=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,_e=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ye=s`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Fe=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ve=s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Xe(t,r,e){switch(e){case"bottom-left":return r?Re:de;case"bottom-right":return r?Ae:me;case"down":return t?r?Me:ue:r?Ne:pe;case"left":return t?r?ze:ye:r?Te:$t;case"right":return t?r?Pe:ge:r?ke:he;case"top-left":return r?_e:be;case"top-right":return r?Ye:xe;case"up":return t?r?Ve:we:r?Fe:ve;default:return r?Ie:le}}const je=t=>{const{big:r=!1,direction:e,reverse:n=!1,...a}=t,o=g.useMemo(()=>Xe(r,n,e),[r,e,n]);return x(tr,{keyframes:o,...a})};s`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;s`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;s`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;s`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;s`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;s`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;s`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;s`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;s`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;s`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;s`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;s`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{je as F};
