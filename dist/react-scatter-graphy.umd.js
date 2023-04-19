(function(P,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("react"),require("@emotion/react"),require("@emotion/styled")):typeof define=="function"&&define.amd?define(["exports","react","@emotion/react","@emotion/styled"],_):(P=typeof globalThis<"u"?globalThis:P||self,_(P.ReactScatterGraphy={},P.React,P.emotion,P.styled))})(this,function(P,_,q,ie){"use strict";var Z={},Ae={get exports(){return Z},set exports(s){Z=s}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ie(){if(se)return $;se=1;var s=_,g=Symbol.for("react.element"),j=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function b(p,c,O){var v,h={},R=null,E=null;O!==void 0&&(R=""+O),c.key!==void 0&&(R=""+c.key),c.ref!==void 0&&(E=c.ref);for(v in c)S.call(c,v)&&!T.hasOwnProperty(v)&&(h[v]=c[v]);if(p&&p.defaultProps)for(v in c=p.defaultProps,c)h[v]===void 0&&(h[v]=c[v]);return{$$typeof:g,type:p,key:R,ref:E,props:h,_owner:d.current}}return $.Fragment=j,$.jsx=b,$.jsxs=b,$}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Me(){return ue||(ue=1,process.env.NODE_ENV!=="production"&&function(){var s=_,g=Symbol.for("react.element"),j=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),p=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),E=Symbol.for("react.offscreen"),w=Symbol.iterator,A="@@iterator";function M(e){if(e===null||typeof e!="object")return null;var r=w&&e[w]||e[A];return typeof r=="function"?r:null}var F=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function m(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];C("error",e,t)}}function C(e,r,t){{var n=F.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var N=!1,U=!1,Ue=!1,Ve=!1,Be=!1,fe;fe=Symbol.for("react.module.reference");function Ge(e){return!!(typeof e=="string"||typeof e=="function"||e===S||e===T||Be||e===d||e===O||e===v||Ve||e===E||N||U||Ue||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===h||e.$$typeof===b||e.$$typeof===p||e.$$typeof===c||e.$$typeof===fe||e.getModuleId!==void 0))}function He(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function le(e){return e.displayName||"Context"}function k(e){if(e==null)return null;if(typeof e.tag=="number"&&m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case S:return"Fragment";case j:return"Portal";case T:return"Profiler";case d:return"StrictMode";case O:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p:var r=e;return le(r)+".Consumer";case b:var t=e;return le(t._context)+".Provider";case c:return He(e,e.render,"ForwardRef");case h:var n=e.displayName||null;return n!==null?n:k(e.type)||"Memo";case R:{var i=e,u=i._payload,o=i._init;try{return k(o(u))}catch{return null}}}return null}var I=Object.assign,V=0,de,ve,pe,he,me,ge,ye;function be(){}be.__reactDisabledLog=!0;function Je(){{if(V===0){de=console.log,ve=console.info,pe=console.warn,he=console.error,me=console.group,ge=console.groupCollapsed,ye=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function Xe(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:de}),info:I({},e,{value:ve}),warn:I({},e,{value:pe}),error:I({},e,{value:he}),group:I({},e,{value:me}),groupCollapsed:I({},e,{value:ge}),groupEnd:I({},e,{value:ye})})}V<0&&m("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var z=F.ReactCurrentDispatcher,Q;function G(e,r,t){{if(Q===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Q=n&&n[1]||""}return`
`+Q+e}}var ee=!1,H;{var Ke=typeof WeakMap=="function"?WeakMap:Map;H=new Ke}function Ee(e,r){if(!e||ee)return"";{var t=H.get(e);if(t!==void 0)return t}var n;ee=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=z.current,z.current=null,Je();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(D){n=D}Reflect.construct(e,[],o)}else{try{o.call()}catch(D){n=D}e.call(o.prototype)}}else{try{throw Error()}catch(D){n=D}e()}}catch(D){if(D&&n&&typeof D.stack=="string"){for(var a=D.stack.split(`
`),y=n.stack.split(`
`),f=a.length-1,l=y.length-1;f>=1&&l>=0&&a[f]!==y[l];)l--;for(;f>=1&&l>=0;f--,l--)if(a[f]!==y[l]){if(f!==1||l!==1)do if(f--,l--,l<0||a[f]!==y[l]){var x=`
`+a[f].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,x),x}while(f>=1&&l>=0);break}}}finally{ee=!1,z.current=u,Xe(),Error.prepareStackTrace=i}var Y=e?e.displayName||e.name:"",Fe=Y?G(Y):"";return typeof e=="function"&&H.set(e,Fe),Fe}function qe(e,r,t){return Ee(e,!1)}function Ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function J(e,r,t){if(e==null)return"";if(typeof e=="function")return Ee(e,Ze(e));if(typeof e=="string")return G(e);switch(e){case O:return G("Suspense");case v:return G("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return qe(e.render);case h:return J(e.type,r,t);case R:{var n=e,i=n._payload,u=n._init;try{return J(u(i),r,t)}catch{}}}return""}var X=Object.prototype.hasOwnProperty,Re={},_e=F.ReactDebugCurrentFrame;function K(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}function ze(e,r,t,n,i){{var u=Function.call.bind(X);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var y=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(f){a=f}a&&!(a instanceof Error)&&(K(i),m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),K(null)),a instanceof Error&&!(a.message in Re)&&(Re[a.message]=!0,K(i),m("Failed %s type: %s",t,a.message),K(null))}}}var Qe=Array.isArray;function re(e){return Qe(e)}function er(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function rr(e){try{return Te(e),!1}catch{return!0}}function Te(e){return""+e}function xe(e){if(rr(e))return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",er(e)),Te(e)}var B=F.ReactCurrentOwner,tr={key:!0,ref:!0,__self:!0,__source:!0},Se,we,te;te={};function nr(e){if(X.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ar(e){if(X.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function or(e,r){if(typeof e.ref=="string"&&B.current&&r&&B.current.stateNode!==r){var t=k(B.current.type);te[t]||(m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',k(B.current.type),e.ref),te[t]=!0)}}function ir(e,r){{var t=function(){Se||(Se=!0,m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function sr(e,r){{var t=function(){we||(we=!0,m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ur=function(e,r,t,n,i,u,o){var a={$$typeof:g,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function cr(e,r,t,n,i){{var u,o={},a=null,y=null;t!==void 0&&(xe(t),a=""+t),ar(r)&&(xe(r.key),a=""+r.key),nr(r)&&(y=r.ref,or(r,i));for(u in r)X.call(r,u)&&!tr.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var f=e.defaultProps;for(u in f)o[u]===void 0&&(o[u]=f[u])}if(a||y){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&ir(o,l),y&&sr(o,l)}return ur(e,a,y,i,n,B.current,o)}}var ne=F.ReactCurrentOwner,Oe=F.ReactDebugCurrentFrame;function W(e){if(e){var r=e._owner,t=J(e.type,e._source,r?r.type:null);Oe.setExtraStackFrame(t)}else Oe.setExtraStackFrame(null)}var ae;ae=!1;function oe(e){return typeof e=="object"&&e!==null&&e.$$typeof===g}function Ce(){{if(ne.current){var e=k(ne.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Pe={};function lr(e){{var r=Ce();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function je(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=lr(r);if(Pe[t])return;Pe[t]=!0;var n="";e&&e._owner&&e._owner!==ne.current&&(n=" It was passed a child from "+k(e._owner.type)+"."),W(e),m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),W(null)}}function ke(e,r){{if(typeof e!="object")return;if(re(e))for(var t=0;t<e.length;t++){var n=e[t];oe(n)&&je(n,r)}else if(oe(e))e._store&&(e._store.validated=!0);else if(e){var i=M(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)oe(o.value)&&je(o.value,r)}}}function dr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===h))t=r.propTypes;else return;if(t){var n=k(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ae){ae=!0;var i=k(r);m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function vr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){W(e),m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),W(null);break}}e.ref!==null&&(W(e),m("Invalid attribute `ref` supplied to `React.Fragment`."),W(null))}}function De(e,r,t,n,i,u){{var o=Ge(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=fr(i);y?a+=y:a+=Ce();var f;e===null?f="null":re(e)?f="array":e!==void 0&&e.$$typeof===g?(f="<"+(k(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):f=typeof e,m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",f,a)}var l=cr(e,r,t,i,u);if(l==null)return l;if(o){var x=r.children;if(x!==void 0)if(n)if(re(x)){for(var Y=0;Y<x.length;Y++)ke(x[Y],e);Object.freeze&&Object.freeze(x)}else m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ke(x,e)}return e===S?vr(l):dr(l),l}}function pr(e,r,t){return De(e,r,t,!0)}function hr(e,r,t){return De(e,r,t,!1)}var mr=hr,gr=pr;L.Fragment=S,L.jsx=mr,L.jsxs=gr}()),L}(function(s){process.env.NODE_ENV==="production"?s.exports=Ie():s.exports=Me()})(Ae);const ce=Z.jsx;function We({maxWidth:s,maxHeight:g}){return[Math.floor(Math.random()*s),Math.floor(Math.random()*g)]}function Ye({maxWidth:s,size:g,src:j,callback:S}){const d=new Image;d.crossOrigin="Anonymous",d.style.imageRendering="crisp-edges",d.onload=()=>{const T=document.createElement("canvas"),b=T.getContext("2d");if(!b)return;const p=s,c=d.height*s/d.width;T.width=p,T.height=c,b.scale(.5/g,.5/g),b.imageSmoothingEnabled=!1,b.drawImage(d,0,0,p*2,c*2);const O=b.getImageData(0,0,p,c),v=new Uint8Array(O.data);let h=p,R=0,E=c,w=0;const A=[];for(let C=0;C<v.length;C+=4)if(v[C+3]!==0){const N=C/4%p,U=Math.floor(C/4/p);h=Math.min(N,h),R=Math.max(N,R),E=Math.min(U,E),w=Math.max(U,w),A.push([N,U])}const M=R-h,F=w-E,m=A.map(C=>[(C[0]-h)*p/M,(C[1]-E)*c/F]);S({error:null,coords:m,height:c})},d.onerror=T=>{S({error:T})},d.src=j}const $e=ie.div`
  position: relative;
  display: block;
  width: 100%;
`,Le=ie.span`
  position: absolute;

  ${({randomCoord:s})=>s&&q.css`
      top: ${s[1]}px;
      left: ${s[0]}px;
    `}

  display: inline-block;
  background-color: ${({color:s})=>s};
  transition: ${({duration:s})=>`ease ${s}ms ${s}ms`};

  ${({size:s})=>s&&q.css`
      width: ${s}px;
      height: ${s}px;
    `}

  ${({isHovered:s,coord:g})=>s&&q.css`
      top: ${g[1]}px;
      left: ${g[0]}px;
    `}
`;function Ne({src:s,duration:g=500,size:j=4,color:S="black"}){const d=_.useRef(null),[T,b]=_.useState(!1),[p,c]=_.useState([]),[O,v]=_.useState(0),[h,R]=_.useState(0);return _.useLayoutEffect(()=>{if(!d.current||!d.current.parentElement)return;const E=d.current.parentElement.clientWidth;v(E),Ye({maxWidth:E,size:j,src:s,callback:({error:w,coords:A,height:M})=>{if(w||!A||!M){console.error(w);return}c(A),R(M)}})},[j]),ce($e,{onMouseOver:()=>b(!0),onMouseLeave:()=>b(!1),style:{height:`${h}px`},ref:d,children:p.map((E,w)=>ce(Le,{isHovered:T,size:j,duration:g,color:S,coord:E,randomCoord:We({maxWidth:O,maxHeight:h})},w))})}P.ScatterGraphy=Ne,Object.defineProperty(P,Symbol.toStringTag,{value:"Module"})});
