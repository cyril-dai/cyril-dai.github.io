import{R as Mt,r as S,j as gt,g as mr}from"./index-CsAXTL6Y.js";function ur(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function pr(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var yr=function(){function t(e){var a=this;this._insertTag=function(n){var s;a.tags.length===0?a.insertionPoint?s=a.insertionPoint.nextSibling:a.prepend?s=a.container.firstChild:s=a.before:s=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,s),a.tags.push(n)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(pr(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var s=ur(n);try{s.insertRule(a,s.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){return a.parentNode&&a.parentNode.removeChild(a)}),this.tags=[],this.ctr=0},t}(),A="-ms-",rt="-moz-",y="-webkit-",jt="comm",Ct="rule",$t="decl",hr="@import",Bt="@keyframes",gr="@layer",br=Math.abs,et=String.fromCharCode,vr=Object.assign;function xr(t,r){return I(t,0)^45?(((r<<2^I(t,0))<<2^I(t,1))<<2^I(t,2))<<2^I(t,3):0}function Dt(t){return t.trim()}function wr(t,r){return(t=r.exec(t))?t[0]:t}function h(t,r,e){return t.replace(r,e)}function bt(t,r){return t.indexOf(r)}function I(t,r){return t.charCodeAt(r)|0}function D(t,r,e){return t.slice(r,e)}function _(t){return t.length}function Et(t){return t.length}function H(t,r){return r.push(t),t}function Sr(t,r){return t.map(r).join("")}var at=1,L=1,Wt=0,N=0,E=0,j="";function nt(t,r,e,a,n,s,i){return{value:t,root:r,parent:e,type:a,props:n,children:s,line:at,column:L,length:i,return:""}}function B(t,r){return vr(nt("",null,null,"",null,null,0),t,{length:-t.length},r)}function Cr(){return E}function $r(){return E=N>0?I(j,--N):0,L--,E===10&&(L=1,at--),E}function T(){return E=N<Wt?I(j,N++):0,L++,E===10&&(L=1,at++),E}function F(){return I(j,N)}function J(){return N}function q(t,r){return D(j,t,r)}function W(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ut(t){return at=L=1,Wt=_(j=t),N=0,[]}function Gt(t){return j="",t}function Q(t){return Dt(q(N-1,vt(t===91?t+2:t===40?t+1:t)))}function Er(t){for(;(E=F())&&E<33;)T();return W(t)>2||W(E)>3?"":" "}function Or(t,r){for(;--r&&T()&&!(E<48||E>102||E>57&&E<65||E>70&&E<97););return q(t,J()+(r<6&&F()==32&&T()==32))}function vt(t){for(;T();)switch(E){case t:return N;case 34:case 39:t!==34&&t!==39&&vt(E);break;case 40:t===41&&vt(t);break;case 92:T();break}return N}function Rr(t,r){for(;T()&&t+E!==57;)if(t+E===84&&F()===47)break;return"/*"+q(r,N-1)+"*"+et(t===47?t:T())}function kr(t){for(;!W(F());)T();return q(t,N)}function Ir(t){return Gt(tt("",null,null,null,[""],t=Ut(t),0,[0],t))}function tt(t,r,e,a,n,s,i,c,f){for(var l=0,m=0,u=i,x=0,O=0,b=0,d=1,$=1,v=1,p=0,C="",z=n,P=s,Y=a,w=C;$;)switch(b=p,p=T()){case 40:if(b!=108&&I(w,u-1)==58){bt(w+=h(Q(p),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:w+=Q(p);break;case 9:case 10:case 13:case 32:w+=Er(b);break;case 92:w+=Or(J()-1,7);continue;case 47:switch(F()){case 42:case 47:H(Ar(Rr(T(),J()),r,e),f);break;default:w+="/"}break;case 123*d:c[l++]=_(w)*v;case 125*d:case 59:case 0:switch(p){case 0:case 125:$=0;case 59+m:v==-1&&(w=h(w,/\f/g,"")),O>0&&_(w)-u&&H(O>32?Pt(w+";",a,e,u-1):Pt(h(w," ","")+";",a,e,u-2),f);break;case 59:w+=";";default:if(H(Y=zt(w,r,e,l,m,n,c,C,z=[],P=[],u),s),p===123)if(m===0)tt(w,r,Y,Y,z,s,u,c,P);else switch(x===99&&I(w,3)===110?100:x){case 100:case 108:case 109:case 115:tt(t,Y,Y,a&&H(zt(t,Y,Y,0,0,n,c,C,n,z=[],u),P),n,P,u,c,a?z:P);break;default:tt(w,Y,Y,Y,[""],P,0,c,P)}}l=m=O=0,d=v=1,C=w="",u=i;break;case 58:u=1+_(w),O=b;default:if(d<1){if(p==123)--d;else if(p==125&&d++==0&&$r()==125)continue}switch(w+=et(p),p*d){case 38:v=m>0?1:(w+="\f",-1);break;case 44:c[l++]=(_(w)-1)*v,v=1;break;case 64:F()===45&&(w+=Q(T())),x=F(),m=u=_(C=w+=kr(J())),p++;break;case 45:b===45&&_(w)==2&&(d=0)}}return s}function zt(t,r,e,a,n,s,i,c,f,l,m){for(var u=n-1,x=n===0?s:[""],O=Et(x),b=0,d=0,$=0;b<a;++b)for(var v=0,p=D(t,u+1,u=br(d=i[b])),C=t;v<O;++v)(C=Dt(d>0?x[v]+" "+p:h(p,/&\f/g,x[v])))&&(f[$++]=C);return nt(t,r,e,n===0?Ct:c,f,l,m)}function Ar(t,r,e){return nt(t,r,e,jt,et(Cr()),D(t,2,-2),0)}function Pt(t,r,e,a){return nt(t,r,e,$t,D(t,0,a),D(t,a+1,-1),a)}function V(t,r){for(var e="",a=Et(t),n=0;n<a;n++)e+=r(t[n],n,t,r)||"";return e}function Nr(t,r,e,a){switch(t.type){case gr:if(t.children.length)break;case hr:case $t:return t.return=t.return||t.value;case jt:return"";case Bt:return t.return=t.value+"{"+V(t.children,a)+"}";case Ct:t.value=t.props.join(",")}return _(e=V(t.children,a))?t.return=t.value+"{"+e+"}":""}function Tr(t){var r=Et(t);return function(e,a,n,s){for(var i="",c=0;c<r;c++)i+=t[c](e,a,n,s)||"";return i}}function Mr(t){return function(r){r.root||(r=r.return)&&t(r)}}function zr(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var Pr=function(r,e,a){for(var n=0,s=0;n=s,s=F(),n===38&&s===12&&(e[a]=1),!W(s);)T();return q(r,N)},Yr=function(r,e){var a=-1,n=44;do switch(W(n)){case 0:n===38&&F()===12&&(e[a]=1),r[a]+=Pr(N-1,e,a);break;case 2:r[a]+=Q(n);break;case 4:if(n===44){r[++a]=F()===58?"&\f":"",e[a]=r[a].length;break}default:r[a]+=et(n)}while(n=T());return r},_r=function(r,e){return Gt(Yr(Ut(r),e))},Yt=new WeakMap,Xr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,a=r.parent,n=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!Yt.get(a))&&!n){Yt.set(r,!0);for(var s=[],i=_r(e,s),c=a.props,f=0,l=0;f<i.length;f++)for(var m=0;m<c.length;m++,l++)r.props[l]=s[f]?i[f].replace(/&\f/g,c[m]):c[m]+" "+i[f]}}},Fr=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function qt(t,r){switch(xr(t,r)){case 5103:return y+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return y+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return y+t+rt+t+A+t+t;case 6828:case 4268:return y+t+A+t+t;case 6165:return y+t+A+"flex-"+t+t;case 5187:return y+t+h(t,/(\w+).+(:[^]+)/,y+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return y+t+A+"flex-item-"+h(t,/flex-|-self/,"")+t;case 4675:return y+t+A+"flex-line-pack"+h(t,/align-content|flex-|-self/,"")+t;case 5548:return y+t+A+h(t,"shrink","negative")+t;case 5292:return y+t+A+h(t,"basis","preferred-size")+t;case 6060:return y+"box-"+h(t,"-grow","")+y+t+A+h(t,"grow","positive")+t;case 4554:return y+h(t,/([^-])(transform)/g,"$1"+y+"$2")+t;case 6187:return h(h(h(t,/(zoom-|grab)/,y+"$1"),/(image-set)/,y+"$1"),t,"")+t;case 5495:case 3959:return h(t,/(image-set\([^]*)/,y+"$1$`$1");case 4968:return h(h(t,/(.+:)(flex-)?(.*)/,y+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+y+t+t;case 4095:case 3583:case 4068:case 2532:return h(t,/(.+)-inline(.+)/,y+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(t)-1-r>6)switch(I(t,r+1)){case 109:if(I(t,r+4)!==45)break;case 102:return h(t,/(.+:)(.+)-([^]+)/,"$1"+y+"$2-$3$1"+rt+(I(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~bt(t,"stretch")?qt(h(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(I(t,r+1)!==115)break;case 6444:switch(I(t,_(t)-3-(~bt(t,"!important")&&10))){case 107:return h(t,":",":"+y)+t;case 101:return h(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+y+(I(t,14)===45?"inline-":"")+"box$3$1"+y+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(I(t,r+11)){case 114:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return y+t+A+h(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return y+t+A+t+t}return t}var Vr=function(r,e,a,n){if(r.length>-1&&!r.return)switch(r.type){case $t:r.return=qt(r.value,r.length);break;case Bt:return V([B(r,{value:h(r.value,"@","@"+y)})],n);case Ct:if(r.length)return Sr(r.props,function(s){switch(wr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([B(r,{props:[h(s,/:(read-\w+)/,":"+rt+"$1")]})],n);case"::placeholder":return V([B(r,{props:[h(s,/:(plac\w+)/,":"+y+"input-$1")]}),B(r,{props:[h(s,/:(plac\w+)/,":"+rt+"$1")]}),B(r,{props:[h(s,/:(plac\w+)/,A+"input-$1")]})],n)}return""})}},Lr=[Vr],jr=function(r){var e=r.key;if(e==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(d){var $=d.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var n=r.stylisPlugins||Lr,s={},i,c=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(d){for(var $=d.getAttribute("data-emotion").split(" "),v=1;v<$.length;v++)s[$[v]]=!0;c.push(d)});var f,l=[Xr,Fr];{var m,u=[Nr,Mr(function(d){m.insert(d)})],x=Tr(l.concat(n,u)),O=function($){return V(Ir($),x)};f=function($,v,p,C){m=p,O($?$+"{"+v.styles+"}":v.styles),C&&(b.inserted[v.name]=!0)}}var b={key:e,sheet:new yr({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:f};return b.sheet.hydrate(c),b},Ht={exports:{}},g={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=typeof Symbol=="function"&&Symbol.for,Ot=k?Symbol.for("react.element"):60103,Rt=k?Symbol.for("react.portal"):60106,st=k?Symbol.for("react.fragment"):60107,ot=k?Symbol.for("react.strict_mode"):60108,it=k?Symbol.for("react.profiler"):60114,ct=k?Symbol.for("react.provider"):60109,ft=k?Symbol.for("react.context"):60110,kt=k?Symbol.for("react.async_mode"):60111,dt=k?Symbol.for("react.concurrent_mode"):60111,lt=k?Symbol.for("react.forward_ref"):60112,mt=k?Symbol.for("react.suspense"):60113,Br=k?Symbol.for("react.suspense_list"):60120,ut=k?Symbol.for("react.memo"):60115,pt=k?Symbol.for("react.lazy"):60116,Dr=k?Symbol.for("react.block"):60121,Wr=k?Symbol.for("react.fundamental"):60117,Ur=k?Symbol.for("react.responder"):60118,Gr=k?Symbol.for("react.scope"):60119;function M(t){if(typeof t=="object"&&t!==null){var r=t.$$typeof;switch(r){case Ot:switch(t=t.type,t){case kt:case dt:case st:case it:case ot:case mt:return t;default:switch(t=t&&t.$$typeof,t){case ft:case lt:case pt:case ut:case ct:return t;default:return r}}case Rt:return r}}}function Kt(t){return M(t)===dt}g.AsyncMode=kt;g.ConcurrentMode=dt;g.ContextConsumer=ft;g.ContextProvider=ct;g.Element=Ot;g.ForwardRef=lt;g.Fragment=st;g.Lazy=pt;g.Memo=ut;g.Portal=Rt;g.Profiler=it;g.StrictMode=ot;g.Suspense=mt;g.isAsyncMode=function(t){return Kt(t)||M(t)===kt};g.isConcurrentMode=Kt;g.isContextConsumer=function(t){return M(t)===ft};g.isContextProvider=function(t){return M(t)===ct};g.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ot};g.isForwardRef=function(t){return M(t)===lt};g.isFragment=function(t){return M(t)===st};g.isLazy=function(t){return M(t)===pt};g.isMemo=function(t){return M(t)===ut};g.isPortal=function(t){return M(t)===Rt};g.isProfiler=function(t){return M(t)===it};g.isStrictMode=function(t){return M(t)===ot};g.isSuspense=function(t){return M(t)===mt};g.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===st||t===dt||t===it||t===ot||t===mt||t===Br||typeof t=="object"&&t!==null&&(t.$$typeof===pt||t.$$typeof===ut||t.$$typeof===ct||t.$$typeof===ft||t.$$typeof===lt||t.$$typeof===Wr||t.$$typeof===Ur||t.$$typeof===Gr||t.$$typeof===Dr)};g.typeOf=M;Ht.exports=g;var qr=Ht.exports,Zt=qr,Hr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Kr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jt={};Jt[Zt.ForwardRef]=Hr;Jt[Zt.Memo]=Kr;var Zr=!0;function Qt(t,r,e){var a="";return e.split(" ").forEach(function(n){t[n]!==void 0?r.push(t[n]+";"):a+=n+" "}),a}var It=function(r,e,a){var n=r.key+"-"+e.name;(a===!1||Zr===!1)&&r.registered[n]===void 0&&(r.registered[n]=e.styles)},tr=function(r,e,a){It(r,e,a);var n=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var s=e;do r.insert(e===s?"."+n:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function Jr(t){for(var r=0,e,a=0,n=t.length;n>=4;++a,n-=4)e=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(t.charCodeAt(a+2)&255)<<16;case 2:r^=(t.charCodeAt(a+1)&255)<<8;case 1:r^=t.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Qr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},te=/[A-Z]|^ms/g,re=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rr=function(r){return r.charCodeAt(1)===45},_t=function(r){return r!=null&&typeof r!="boolean"},yt=zr(function(t){return rr(t)?t:t.replace(te,"-$&").toLowerCase()}),Xt=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(re,function(a,n,s){return X={name:n,styles:s,next:X},n})}return Qr[r]!==1&&!rr(r)&&typeof e=="number"&&e!==0?e+"px":e};function U(t,r,e){if(e==null)return"";if(e.__emotion_styles!==void 0)return e;switch(typeof e){case"boolean":return"";case"object":{if(e.anim===1)return X={name:e.name,styles:e.styles,next:X},e.name;if(e.styles!==void 0){var a=e.next;if(a!==void 0)for(;a!==void 0;)X={name:a.name,styles:a.styles,next:X},a=a.next;var n=e.styles+";";return n}return ee(t,r,e)}case"function":{if(t!==void 0){var s=X,i=e(t);return X=s,U(t,r,i)}break}}if(r==null)return e;var c=r[e];return c!==void 0?c:e}function ee(t,r,e){var a="";if(Array.isArray(e))for(var n=0;n<e.length;n++)a+=U(t,r,e[n])+";";else for(var s in e){var i=e[s];if(typeof i!="object")r!=null&&r[i]!==void 0?a+=s+"{"+r[i]+"}":_t(i)&&(a+=yt(s)+":"+Xt(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var c=0;c<i.length;c++)_t(i[c])&&(a+=yt(s)+":"+Xt(s,i[c])+";");else{var f=U(t,r,i);switch(s){case"animation":case"animationName":{a+=yt(s)+":"+f+";";break}default:a+=s+"{"+f+"}"}}}return a}var Ft=/label:\s*([^\s;\n{]+)\s*(;|$)/g,X,At=function(r,e,a){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var n=!0,s="";X=void 0;var i=r[0];i==null||i.raw===void 0?(n=!1,s+=U(a,e,i)):s+=i[0];for(var c=1;c<r.length;c++)s+=U(a,e,r[c]),n&&(s+=i[c]);Ft.lastIndex=0;for(var f="",l;(l=Ft.exec(s))!==null;)f+="-"+l[1];var m=Jr(s)+f;return{name:m,styles:s,next:X}},ae=function(r){return r()},ne=Mt.useInsertionEffect?Mt.useInsertionEffect:!1,er=ne||ae,Nt={}.hasOwnProperty,ar=S.createContext(typeof HTMLElement<"u"?jr({key:"css"}):null);ar.Provider;var nr=function(r){return S.forwardRef(function(e,a){var n=S.useContext(ar);return r(e,n,a)})},sr=S.createContext({}),xt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",se=function(r,e){var a={};for(var n in e)Nt.call(e,n)&&(a[n]=e[n]);return a[xt]=r,a},oe=function(r){var e=r.cache,a=r.serialized,n=r.isStringTag;return It(e,a,n),er(function(){return tr(e,a,n)}),null},ie=nr(function(t,r,e){var a=t.css;typeof a=="string"&&r.registered[a]!==void 0&&(a=r.registered[a]);var n=t[xt],s=[a],i="";typeof t.className=="string"?i=Qt(r.registered,s,t.className):t.className!=null&&(i=t.className+" ");var c=At(s,void 0,S.useContext(sr));i+=r.key+"-"+c.name;var f={};for(var l in t)Nt.call(t,l)&&l!=="css"&&l!==xt&&(f[l]=t[l]);return f.ref=e,f.className=i,S.createElement(S.Fragment,null,S.createElement(oe,{cache:r,serialized:c,isStringTag:typeof n=="string"}),S.createElement(n,f))}),ce=ie,fe=gt.Fragment;function R(t,r,e){return Nt.call(r,"css")?gt.jsx(ce,se(t,r),e):gt.jsx(t,r,e)}function or(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return At(r)}var o=function(){var r=or.apply(void 0,arguments),e="animation-"+r.name;return{name:e,styles:"@keyframes "+e+"{"+r.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},de=function t(r){for(var e=r.length,a=0,n="";a<e;a++){var s=r[a];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var c in s)s[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=s}i&&(n&&(n+=" "),n+=i)}}return n};function le(t,r,e){var a=[],n=Qt(t,a,e);return a.length<2?e:n+r(a)}var me=function(r){var e=r.cache,a=r.serializedArr;return er(function(){for(var n=0;n<a.length;n++)tr(e,a[n],!1)}),null},ht=nr(function(t,r){var e=!1,a=[],n=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];var x=At(m,r.registered);return a.push(x),It(r,x,!1),r.key+"-"+x.name},s=function(){for(var l=arguments.length,m=new Array(l),u=0;u<l;u++)m[u]=arguments[u];return le(r.registered,n,de(m))},i={css:n,cx:s,theme:S.useContext(sr)},c=t.children(i);return e=!0,S.createElement(S.Fragment,null,S.createElement(me,{cache:r,serializedArr:a}),c)}),ue=Object.defineProperty,pe=(t,r,e)=>r in t?ue(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,K=(t,r,e)=>(pe(t,typeof r!="symbol"?r+"":r,e),e),wt=new Map,Z=new WeakMap,Vt=0,ye=void 0;function he(t){return t?(Z.has(t)||(Vt+=1,Z.set(t,Vt.toString())),Z.get(t)):"0"}function ge(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?he(t.root):t[r]}`).toString()}function be(t){const r=ge(t);let e=wt.get(r);if(!e){const a=new Map;let n;const s=new IntersectionObserver(i=>{i.forEach(c=>{var f;const l=c.isIntersecting&&n.some(m=>c.intersectionRatio>=m);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=l),(f=a.get(c.target))==null||f.forEach(m=>{m(l,c)})})},t);n=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:s,elements:a},wt.set(r,e)}return e}function ir(t,r,e={},a=ye){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const f=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:n,observer:s,elements:i}=be(e),c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(r),s.observe(t),function(){c.splice(c.indexOf(r),1),c.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),wt.delete(n))}}function ve(t){return typeof t.children!="function"}var Lt=class extends S.Component{constructor(t){super(t),K(this,"node",null),K(this,"_unobserveCb",null),K(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),K(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),ve(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=ir(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:O,entry:b}=this.state;return t({inView:O,entry:b,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:a,root:n,rootMargin:s,onChange:i,skip:c,trackVisibility:f,delay:l,initialInView:m,fallbackInView:u,...x}=this.props;return S.createElement(r||"div",{ref:this.handleNode,...x},t)}};function cr({threshold:t,delay:r,trackVisibility:e,rootMargin:a,root:n,triggerOnce:s,skip:i,initialInView:c,fallbackInView:f,onChange:l}={}){var m;const[u,x]=S.useState(null),O=S.useRef(),[b,d]=S.useState({inView:!!c,entry:void 0});O.current=l,S.useEffect(()=>{if(i||!u)return;let C;return C=ir(u,(z,P)=>{d({inView:z,entry:P}),O.current&&O.current(z,P),P.isIntersecting&&s&&C&&(C(),C=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:e,delay:r},f),()=>{C&&C()}},[Array.isArray(t)?t.toString():t,u,n,a,s,i,e,f,r]);const $=(m=b.entry)==null?void 0:m.target,v=S.useRef();!u&&$&&!s&&!i&&v.current!==$&&(v.current=$,d({inView:!!c,entry:void 0}));const p=[x,b.inView,b.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}o`
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
`;o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;o`
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
`;o`
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
`;o`
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
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;const xe=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,we=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Se=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ce=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$e=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Tt=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ee=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Oe=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Re=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ke=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ie=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ae=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ne=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Te({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:a=Tt,iterationCount:n=1}){return or`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Me(t){return t==null}function ze(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function fr(t,r){return e=>e?t():r()}function G(t){return fr(t,()=>null)}function St(t){return G(()=>({opacity:0}))(t)}const dr=t=>{const{cascade:r=!1,damping:e=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:i=Tt,triggerOnce:c=!1,className:f,style:l,childClassName:m,childStyle:u,children:x,onVisibilityChange:O}=t,b=S.useMemo(()=>Te({keyframes:i,duration:n}),[n,i]);return Me(x)?null:ze(x)?R(Ye,{...t,animationStyles:b,children:String(x)}):mr.isFragment(x)?R(lr,{...t,animationStyles:b}):R(fe,{children:S.Children.map(x,(d,$)=>{if(!S.isValidElement(d))return null;const v=a+(r?$*n*e:0);switch(d.type){case"ol":case"ul":return R(ht,{children:({cx:p})=>R(d.type,{...d.props,className:p(f,d.props.className),style:Object.assign({},l,d.props.style),children:R(dr,{...t,children:d.props.children})})});case"li":return R(Lt,{threshold:s,triggerOnce:c,onChange:O,children:({inView:p,ref:C})=>R(ht,{children:({cx:z})=>R(d.type,{...d.props,ref:C,className:z(m,d.props.className),css:G(()=>b)(p),style:Object.assign({},u,d.props.style,St(!p),{animationDelay:v+"ms"})})})});default:return R(Lt,{threshold:s,triggerOnce:c,onChange:O,children:({inView:p,ref:C})=>R("div",{ref:C,className:f,css:G(()=>b)(p),style:Object.assign({},l,St(!p),{animationDelay:v+"ms"}),children:R(ht,{children:({cx:z})=>R(d.type,{...d.props,className:z(m,d.props.className),style:Object.assign({},u,d.props.style)})})})})}})})},Pe={display:"inline-block",whiteSpace:"pre"},Ye=t=>{const{animationStyles:r,cascade:e=!1,damping:a=.5,delay:n=0,duration:s=1e3,fraction:i=0,triggerOnce:c=!1,className:f,style:l,children:m,onVisibilityChange:u}=t,{ref:x,inView:O}=cr({triggerOnce:c,threshold:i,onChange:u});return fr(()=>R("div",{ref:x,className:f,style:Object.assign({},l,Pe),children:m.split("").map((b,d)=>R("span",{css:G(()=>r)(O),style:{animationDelay:n+d*s*a+"ms"},children:b},d))}),()=>R(lr,{...t,children:m}))(e)},lr=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:a=!1,className:n,style:s,children:i,onVisibilityChange:c}=t,{ref:f,inView:l}=cr({triggerOnce:a,threshold:e,onChange:c});return R("div",{ref:f,className:n,css:G(()=>r)(l),style:Object.assign({},s,St(!l)),children:i})};o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;o`
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
`;const _e=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Xe=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Fe=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Ve=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Le=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,je=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Be=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,De=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,We=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ue=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ge=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,qe=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,He=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Ke(t,r,e){switch(e){case"bottom-left":return r?Xe:we;case"bottom-right":return r?Fe:Se;case"down":return t?r?Le:$e:r?Ve:Ce;case"left":return t?r?Be:Ee:r?je:Tt;case"right":return t?r?We:Re:r?De:Oe;case"top-left":return r?Ue:ke;case"top-right":return r?Ge:Ie;case"up":return t?r?He:Ne:r?qe:Ae;default:return r?_e:xe}}const Je=t=>{const{big:r=!1,direction:e,reverse:a=!1,...n}=t,s=S.useMemo(()=>Ke(r,a,e),[r,e,a]);return R(dr,{keyframes:s,...n})};o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
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
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;o`
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
`;export{Je as F};
