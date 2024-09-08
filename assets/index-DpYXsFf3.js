(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Be={},Ns=[],Lt=()=>{},uT=()=>!1,Ao=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ju=t=>t.startsWith("onUpdate:"),Ye=Object.assign,qu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hT=Object.prototype.hasOwnProperty,De=(t,e)=>hT.call(t,e),re=Array.isArray,Vs=t=>ci(t)==="[object Map]",fs=t=>ci(t)==="[object Set]",hf=t=>ci(t)==="[object Date]",dT=t=>ci(t)==="[object RegExp]",pe=t=>typeof t=="function",Je=t=>typeof t=="string",Wn=t=>typeof t=="symbol",je=t=>t!==null&&typeof t=="object",Hu=t=>(je(t)||pe(t))&&pe(t.then)&&pe(t.catch),Um=Object.prototype.toString,ci=t=>Um.call(t),fT=t=>ci(t).slice(8,-1),Bm=t=>ci(t)==="[object Object]",Ku=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ms=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pT=/-(\w)/g,Dt=mc(t=>t.replace(pT,(e,n)=>n?n.toUpperCase():"")),mT=/\B([A-Z])/g,Kt=mc(t=>t.replace(mT,"-$1").toLowerCase()),bo=mc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hi=mc(t=>t?`on${bo(t)}`:""),mn=(t,e)=>!Object.is(t,e),Ls=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$m=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},xa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Fa=t=>{const e=Je(t)?Number(t):NaN;return isNaN(e)?t:e};let df;const jm=()=>df||(df=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",_T=pc(gT);function ps(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Je(r)?TT(r):ps(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Je(t)||je(t))return t}const yT=/;(?![^(]*\))/g,vT=/:([^]+)/,ET=/\/\*[^]*?\*\//g;function TT(t){const e={};return t.replace(ET,"").split(yT).forEach(n=>{if(n){const r=n.split(vT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function It(t){let e="";if(Je(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=It(t[n]);r&&(e+=r+" ")}else if(je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function wT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Je(e)&&(t.class=It(e)),n&&(t.style=ps(n)),t}const IT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AT=pc(IT);function qm(t){return!!t||t===""}function bT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Pr(t[r],e[r]);return n}function Pr(t,e){if(t===e)return!0;let n=hf(t),r=hf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Wn(t),r=Wn(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?bT(t,e):!1;if(n=je(t),r=je(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Pr(t[o],e[o]))return!1}}return String(t)===String(e)}function gc(t,e){return t.findIndex(n=>Pr(n,e))}const Fe=t=>Je(t)?t:t==null?"":re(t)||je(t)&&(t.toString===Um||!pe(t.toString))?JSON.stringify(t,Hm,2):String(t),Hm=(t,e)=>e&&e.__v_isRef?Hm(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yl(r,i)+" =>"]=s,n),{})}:fs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yl(n))}:Wn(e)?yl(e):je(e)&&!re(e)&&!Bm(e)?String(e):e,yl=(t,e="")=>{var n;return Wn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Gu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function RT(t){return new Gu(t)}function Km(t,e=qt){e&&e.active&&e.effects.push(t)}function Gm(){return qt}function ST(t){qt&&qt.cleanups.push(t)}let Yr;class zs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Km(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Lr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(CT(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),xr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=br,n=Yr;try{return br=!0,Yr=this,this._runnings++,ff(this),this.fn()}finally{pf(this),this._runnings--,Yr=n,br=e}}stop(){this.active&&(ff(this),pf(this),this.onStop&&this.onStop(),this.active=!1)}}function CT(t){return t.value}function ff(t){t._trackId++,t._depsLength=0}function pf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wm(t.deps[e],t);t.deps.length=t._depsLength}}function Wm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function PT(t,e){t.effect instanceof zs&&(t=t.effect.fn);const n=new zs(t,Lt,()=>{n.dirty&&n.run()});e&&(Ye(n,e),e.scope&&Km(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function kT(t){t.effect.stop()}let br=!0,Kl=0;const zm=[];function Lr(){zm.push(br),br=!1}function xr(){const t=zm.pop();br=t===void 0?!0:t}function Wu(){Kl++}function zu(){for(Kl--;!Kl&&Gl.length;)Gl.shift()()}function Qm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Wm(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gl=[];function Ym(t,e,n){Wu();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Gl.push(r.scheduler)))}zu()}const Jm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ua=new WeakMap,Jr=Symbol(""),Wl=Symbol("");function Bt(t,e,n){if(br&&Yr){let r=Ua.get(t);r||Ua.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Jm(()=>r.delete(n))),Qm(Yr,s)}}function qn(t,e,n,r,s,i){const o=Ua.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&re(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Wn(h)&&h>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":re(t)?Ku(n)&&c.push(o.get("length")):(c.push(o.get(Jr)),Vs(t)&&c.push(o.get(Wl)));break;case"delete":re(t)||(c.push(o.get(Jr)),Vs(t)&&c.push(o.get(Wl)));break;case"set":Vs(t)&&c.push(o.get(Jr));break}Wu();for(const l of c)l&&Ym(l,5);zu()}function OT(t,e){const n=Ua.get(t);return n&&n.get(e)}const DT=pc("__proto__,__v_isRef,__isVue"),Xm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wn)),mf=NT();function NT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ke(this);for(let i=0,o=this.length;i<o;i++)Bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lr(),Wu();const r=ke(this)[e].apply(this,n);return zu(),xr(),r}}),t}function VT(t){Wn(t)||(t=String(t));const e=ke(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class Zm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ig:sg:i?rg:ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){if(o&&De(mf,n))return Reflect.get(mf,n,r);if(n==="hasOwnProperty")return VT}const c=Reflect.get(e,n,r);return(Wn(n)?Xm.has(n):DT(n))||(s||Bt(e,"get",n),i)?c:tt(c)?o&&Ku(n)?c:c.value:je(c)?s?Ju(c):Ro(c):c}}class eg extends Zm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Qs(i);if(!so(r)&&!Qs(r)&&(i=ke(i),r=ke(r)),!re(e)&&tt(i)&&!tt(r))return l?!1:(i.value=r,!0)}const o=re(e)&&Ku(n)?Number(n)<e.length:De(e,n),c=Reflect.set(e,n,r,s);return e===ke(s)&&(o?mn(r,i)&&qn(e,"set",n,r):qn(e,"add",n,r)),c}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Wn(n)||!Xm.has(n))&&Bt(e,"has",n),r}ownKeys(e){return Bt(e,"iterate",re(e)?"length":Jr),Reflect.ownKeys(e)}}class tg extends Zm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const MT=new eg,LT=new tg,xT=new eg(!0),FT=new tg(!0),Qu=t=>t,_c=t=>Reflect.getPrototypeOf(t);function aa(t,e,n=!1,r=!1){t=t.__v_raw;const s=ke(t),i=ke(e);n||(mn(e,i)&&Bt(s,"get",e),Bt(s,"get",i));const{has:o}=_c(s),c=r?Qu:n?Zu:io;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function ca(t,e=!1){const n=this.__v_raw,r=ke(n),s=ke(t);return e||(mn(t,s)&&Bt(r,"has",t),Bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function la(t,e=!1){return t=t.__v_raw,!e&&Bt(ke(t),"iterate",Jr),Reflect.get(t,"size",t)}function gf(t){t=ke(t);const e=ke(this);return _c(e).has.call(e,t)||(e.add(t),qn(e,"add",t,t)),this}function _f(t,e){e=ke(e);const n=ke(this),{has:r,get:s}=_c(n);let i=r.call(n,t);i||(t=ke(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?mn(e,o)&&qn(n,"set",t,e):qn(n,"add",t,e),this}function yf(t){const e=ke(this),{has:n,get:r}=_c(e);let s=n.call(e,t);s||(t=ke(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qn(e,"delete",t,void 0),i}function vf(){const t=ke(this),e=t.size!==0,n=t.clear();return e&&qn(t,"clear",void 0,void 0),n}function ua(t,e){return function(r,s){const i=this,o=i.__v_raw,c=ke(o),l=e?Qu:t?Zu:io;return!t&&Bt(c,"iterate",Jr),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function ha(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=Vs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Qu:e?Zu:io;return!e&&Bt(i,"iterate",l?Wl:Jr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[h(p[0]),h(p[1])]:h(p),done:m}},[Symbol.iterator](){return this}}}}function ur(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function UT(){const t={get(i){return aa(this,i)},get size(){return la(this)},has:ca,add:gf,set:_f,delete:yf,clear:vf,forEach:ua(!1,!1)},e={get(i){return aa(this,i,!1,!0)},get size(){return la(this)},has:ca,add:gf,set:_f,delete:yf,clear:vf,forEach:ua(!1,!0)},n={get(i){return aa(this,i,!0)},get size(){return la(this,!0)},has(i){return ca.call(this,i,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:ua(!0,!1)},r={get(i){return aa(this,i,!0,!0)},get size(){return la(this,!0)},has(i){return ca.call(this,i,!0)},add:ur("add"),set:ur("set"),delete:ur("delete"),clear:ur("clear"),forEach:ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ha(i,!1,!1),n[i]=ha(i,!0,!1),e[i]=ha(i,!1,!0),r[i]=ha(i,!0,!0)}),[t,n,e,r]}const[BT,$T,jT,qT]=UT();function yc(t,e){const n=e?t?qT:jT:t?$T:BT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const HT={get:yc(!1,!1)},KT={get:yc(!1,!0)},GT={get:yc(!0,!1)},WT={get:yc(!0,!0)},ng=new WeakMap,rg=new WeakMap,sg=new WeakMap,ig=new WeakMap;function zT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function QT(t){return t.__v_skip||!Object.isExtensible(t)?0:zT(fT(t))}function Ro(t){return Qs(t)?t:vc(t,!1,MT,HT,ng)}function Yu(t){return vc(t,!1,xT,KT,rg)}function Ju(t){return vc(t,!0,LT,GT,sg)}function YT(t){return vc(t,!0,FT,WT,ig)}function vc(t,e,n,r,s){if(!je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=QT(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function xs(t){return Qs(t)?xs(t.__v_raw):!!(t&&t.__v_isReactive)}function Qs(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function Xu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function og(t){return Object.isExtensible(t)&&$m(t,"__v_skip",!0),t}const io=t=>je(t)?Ro(t):t,Zu=t=>je(t)?Ju(t):t;class ag{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zs(()=>e(this._value),()=>Fs(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ke(this);return(!e._cacheable||e.effect.dirty)&&mn(e._value,e._value=e.effect.run())&&Fs(e,5),eh(e),e.effect._dirtyLevel>=2&&Fs(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function JT(t,e,n=!1){let r,s;const i=pe(t);return i?(r=t,s=Lt):(r=t.get,s=t.set),new ag(r,s,i||!s,n)}function eh(t){var e;br&&Yr&&(t=ke(t),Qm(Yr,(e=t.dep)!=null?e:t.dep=Jm(()=>t.dep=void 0,t instanceof ag?t:void 0)))}function Fs(t,e=5,n,r){t=ke(t);const s=t.dep;s&&Ym(s,e)}function tt(t){return!!(t&&t.__v_isRef===!0)}function Ie(t){return lg(t,!1)}function cg(t){return lg(t,!0)}function lg(t,e){return tt(t)?t:new XT(t,e)}class XT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ke(e),this._value=n?e:io(e)}get value(){return eh(this),this._value}set value(e){const n=this.__v_isShallow||so(e)||Qs(e);e=n?e:ke(e),mn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:io(e),Fs(this,5))}}function ZT(t){Fs(t,5)}function ot(t){return tt(t)?t.value:t}function ew(t){return pe(t)?t():ot(t)}const tw={get:(t,e,n)=>ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return tt(s)&&!tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function th(t){return xs(t)?t:new Proxy(t,tw)}class nw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>eh(this),()=>Fs(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function ug(t){return new nw(t)}function rw(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=hg(t,n);return e}class sw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return OT(ke(this._object),this._key)}}class iw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function ow(t,e,n){return tt(t)?t:pe(t)?new iw(t):je(t)&&arguments.length>1?hg(t,e,n):Ie(t)}function hg(t,e,n){const r=t[e];return tt(r)?r:new sw(t,e,n)}const aw={GET:"get",HAS:"has",ITERATE:"iterate"},cw={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lw(t,e){}const uw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},hw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Hn(t,e,n,r){try{return r?t(...r):t()}catch(s){ms(s,e,n)}}function Wt(t,e,n,r){if(pe(t)){const s=Hn(t,e,n,r);return s&&Hu(s)&&s.catch(i=>{ms(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}}function ms(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Lr(),Hn(l,null,10,[t,o,c]),xr();return}}dw(t,n,s,r)}function dw(t,e,n,r=!0){console.error(t)}let oo=!1,zl=!1;const Rt=[];let In=0;const Us=[];let mr=null,Gr=0;const dg=Promise.resolve();let nh=null;function So(t){const e=nh||dg;return t?e.then(this?t.bind(this):t):e}function fw(t){let e=In+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=ao(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ec(t){(!Rt.length||!Rt.includes(t,oo&&t.allowRecurse?In+1:In))&&(t.id==null?Rt.push(t):Rt.splice(fw(t.id),0,t),fg())}function fg(){!oo&&!zl&&(zl=!0,nh=dg.then(pg))}function pw(t){const e=Rt.indexOf(t);e>In&&Rt.splice(e,1)}function Ba(t){re(t)?Us.push(...t):(!mr||!mr.includes(t,t.allowRecurse?Gr+1:Gr))&&Us.push(t),fg()}function Ef(t,e,n=oo?In+1:0){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r()}}}function $a(t){if(Us.length){const e=[...new Set(Us)].sort((n,r)=>ao(n)-ao(r));if(Us.length=0,mr){mr.push(...e);return}for(mr=e,Gr=0;Gr<mr.length;Gr++){const n=mr[Gr];n.active!==!1&&n()}mr=null,Gr=0}}const ao=t=>t.id==null?1/0:t.id,mw=(t,e)=>{const n=ao(t)-ao(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pg(t){zl=!1,oo=!0,Rt.sort(mw);try{for(In=0;In<Rt.length;In++){const e=Rt[In];e&&e.active!==!1&&Hn(e,null,14)}}finally{In=0,Rt.length=0,$a(),oo=!1,nh=null,(Rt.length||Us.length)&&pg()}}let Cs,da=[];function mg(t,e){var n,r;Cs=t,Cs?(Cs.enabled=!0,da.forEach(({event:s,args:i})=>Cs.emit(s,...i)),da=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{mg(i,e)}),setTimeout(()=>{Cs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,da=[])},3e3)):da=[]}function gw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[h]||Be;m&&(s=n.map(T=>Je(T)?T.trim():T)),p&&(s=n.map(xa))}let c,l=r[c=Hi(e)]||r[c=Hi(Dt(e))];!l&&i&&(l=r[c=Hi(Kt(e))]),l&&Wt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Wt(u,t,6,s)}}function gg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const h=gg(u,e,!0);h&&(c=!0,Ye(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(je(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):Ye(o,i),je(t)&&r.set(t,o),o)}function Tc(t,e){return!t||!Ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Kt(e))||De(t,e))}let lt=null,wc=null;function co(t){const e=lt;return lt=t,wc=t&&t.type.__scopeId||null,e}function Xn(t){wc=t}function Zn(){wc=null}const _w=t=>Zt;function Zt(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ru(-1);const i=co(e);let o;try{o=t(...s)}finally{co(i),r._d&&ru(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ba(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:p,data:m,setupState:T,ctx:C,inheritAttrs:M}=t,N=co(t);let U,D;try{if(n.shapeFlag&4){const O=s||r,x=O;U=Ht(u.call(x,O,h,p,T,m,C)),D=c}else{const O=e;U=Ht(O.length>1?O(p,{attrs:c,slots:o,emit:l}):O(p,null)),D=e.props?c:vw(c)}}catch(O){Wi.length=0,ms(O,t,1),U=Ce(pt)}let S=U;if(D&&M!==!1){const O=Object.keys(D),{shapeFlag:x}=S;O.length&&x&7&&(i&&O.some(ju)&&(D=Ew(D,i)),S=Pn(S,D,!1,!0))}return n.dirs&&(S=Pn(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),U=S,co(N),U}function yw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Or(s)){if(s.type!==pt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const vw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ao(n))&&((e||(e={}))[n]=t[n]);return e},Ew=(t,e)=>{const n={};for(const r in t)(!ju(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Tw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Tf(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const m=h[p];if(o[m]!==r[m]&&!Tc(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Tf(r,o,u):!0:!!o;return!1}function Tf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Tc(n,i))return!0}return!1}function rh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const sh="components",ww="directives";function _g(t,e){return ih(sh,t,!0,e)||t}const yg=Symbol.for("v-ndc");function vg(t){return Je(t)?ih(sh,t,!1)||t:t||yg}function Iw(t){return ih(ww,t)}function ih(t,e,n=!0,r=!1){const s=lt||ct;if(s){const i=s.type;if(t===sh){const c=cu(i,!1);if(c&&(c===e||c===Dt(e)||c===bo(Dt(e))))return i}const o=wf(s[t]||i[t],e)||wf(s.appContext[t],e);return!o&&r?i:o}}function wf(t,e){return t&&(t[e]||t[Dt(e)]||t[bo(Dt(e))])}const Ql=t=>t.__isSuspense;let Yl=0;const Aw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)Rw(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Sw(t,e,n,r,s,o,c,l,u)}},hydrate:Cw,create:oh,normalize:Pw},bw=Aw;function lo(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function Rw(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:h}}=l,p=h("div"),m=t.suspense=oh(t,s,r,e,p,n,i,o,c,l);u(null,m.pendingBranch=t.ssContent,p,null,r,m,i,o),m.deps>0?(lo(t,"onPending"),lo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Bs(m,t.ssFallback)):m.resolve(!1,!0)}function Sw(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:h}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const m=e.ssContent,T=e.ssFallback,{activeBranch:C,pendingBranch:M,isInFallback:N,isHydrating:U}=p;if(M)p.pendingBranch=m,cn(m,M)?(l(M,m,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():N&&(U||(l(C,T,n,r,s,null,i,o,c),Bs(p,T)))):(p.pendingId=Yl++,U?(p.isHydrating=!1,p.activeBranch=M):u(M,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=h("div"),N?(l(null,m,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(C,T,n,r,s,null,i,o,c),Bs(p,T))):C&&cn(m,C)?(l(C,m,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,m,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(C&&cn(m,C))l(C,m,n,r,s,p,i,o,c),Bs(p,m);else if(lo(e,"onPending"),p.pendingBranch=m,m.shapeFlag&512?p.pendingId=m.component.suspenseId:p.pendingId=Yl++,l(null,m,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:D,pendingId:S}=p;D>0?setTimeout(()=>{p.pendingId===S&&p.fallback(T)},D):D===0&&p.fallback(T)}}function oh(t,e,n,r,s,i,o,c,l,u,h=!1){const{p,m,um:T,n:C,o:{parentNode:M,remove:N}}=u;let U;const D=kw(t);D&&e&&e.pendingBranch&&(U=e.pendingId,e.deps++);const S=t.props?Fa(t.props.timeout):void 0,O=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Yl++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(k=!1,E=!1){const{vnode:_,activeBranch:g,pendingBranch:y,pendingId:I,effects:A,parentComponent:w,container:me}=x;let we=!1;x.isHydrating?x.isHydrating=!1:k||(we=g&&y.transition&&y.transition.mode==="out-in",we&&(g.transition.afterLeave=()=>{I===x.pendingId&&(m(y,me,i===O?C(g):i,0),Ba(A))}),g&&(M(g.el)!==x.hiddenContainer&&(i=C(g)),T(g,w,x,!0)),we||m(y,me,i,0)),Bs(x,y),x.pendingBranch=null,x.isInFallback=!1;let te=x.parent,le=!1;for(;te;){if(te.pendingBranch){te.effects.push(...A),le=!0;break}te=te.parent}!le&&!we&&Ba(A),x.effects=[],D&&e&&e.pendingBranch&&U===e.pendingId&&(e.deps--,e.deps===0&&!E&&e.resolve()),lo(_,"onResolve")},fallback(k){if(!x.pendingBranch)return;const{vnode:E,activeBranch:_,parentComponent:g,container:y,namespace:I}=x;lo(E,"onFallback");const A=C(_),w=()=>{x.isInFallback&&(p(null,k,y,A,g,null,I,c,l),Bs(x,k))},me=k.transition&&k.transition.mode==="out-in";me&&(_.transition.afterLeave=w),x.isInFallback=!0,T(_,g,null,!0),me||w()},move(k,E,_){x.activeBranch&&m(x.activeBranch,k,E,_),x.container=k},next(){return x.activeBranch&&C(x.activeBranch)},registerDep(k,E,_){const g=!!x.pendingBranch;g&&x.deps++;const y=k.vnode.el;k.asyncDep.catch(I=>{ms(I,k,0)}).then(I=>{if(k.isUnmounted||x.isUnmounted||x.pendingId!==k.suspenseId)return;k.asyncResolved=!0;const{vnode:A}=k;ou(k,I,!1),y&&(A.el=y);const w=!y&&k.subTree.el;E(k,A,M(y||k.subTree.el),y?null:C(k.subTree),x,o,_),w&&N(w),rh(k,A.el),g&&--x.deps===0&&x.resolve()})},unmount(k,E){x.isUnmounted=!0,x.activeBranch&&T(x.activeBranch,n,k,E),x.pendingBranch&&T(x.pendingBranch,n,k,E)}};return x}function Cw(t,e,n,r,s,i,o,c,l){const u=e.suspense=oh(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function Pw(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=If(r?n.default:n),t.ssFallback=r?If(n.fallback):Ce(pt)}function If(t){let e;if(pe(t)){const n=ns&&t._c;n&&(t._d=!1,ye()),t=t(),n&&(t._d=!0,e=xt,n_())}return re(t)&&(t=yw(t)),t=Ht(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Eg(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):Ba(t)}function Bs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,rh(r,s))}function kw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function Ic(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lr();const c=rs(n),l=Wt(e,n,t,o);return c(),xr(),l});return r?s.unshift(i):s.push(i),i}}const er=t=>(e,n=ct)=>{(!Oo||t==="sp")&&Ic(t,(...r)=>e(...r),n)},Tg=er("bm"),gs=er("m"),wg=er("bu"),Ac=er("u"),bc=er("bum"),Rc=er("um"),Ig=er("sp"),Ag=er("rtg"),bg=er("rtc");function Rg(t,e=ct){Ic("ec",t,e)}function bn(t,e){if(lt===null)return t;const n=Do(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Be]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&vr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Lr(),Wt(l,n,8,[t.el,c,t,e]),xr())}}function An(t,e,n,r){let s;const i=n&&n[r];if(re(t)||Je(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(je(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function Ow(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(re(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}/*! #__NO_SIDE_EFFECTS__ */function Co(t,e){return pe(t)?Ye({name:t.name},e,{setup:t}):t}const Xr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Dw(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,h=0;const p=()=>(h++,l=null,m()),m=()=>{let T;return l||(T=l=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((M,N)=>{c(C,()=>M(p()),()=>N(C),h+1)});throw C}).then(C=>T!==l&&l?l:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),u=C,C)))};return Co({name:"AsyncComponentWrapper",__asyncLoader:m,get __asyncResolved(){return u},setup(){const T=ct;if(u)return()=>vl(u,T);const C=D=>{l=null,ms(D,T,13,!r)};if(o&&T.suspense||Oo)return m().then(D=>()=>vl(D,T)).catch(D=>(C(D),()=>r?Ce(r,{error:D}):null));const M=Ie(!1),N=Ie(),U=Ie(!!s);return s&&setTimeout(()=>{U.value=!1},s),i!=null&&setTimeout(()=>{if(!M.value&&!N.value){const D=new Error(`Async component timed out after ${i}ms.`);C(D),N.value=D}},i),m().then(()=>{M.value=!0,T.parent&&ko(T.parent.vnode)&&(T.parent.effect.dirty=!0,Ec(T.parent.update))}).catch(D=>{C(D),N.value=D}),()=>{if(M.value&&u)return vl(u,T);if(N.value&&r)return Ce(r,{error:N.value});if(n&&!U.value)return Ce(n)}}})}function vl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ce(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}function Nw(t,e,n={},r,s){if(lt.isCE||lt.parent&&Xr(lt.parent)&&lt.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),ye();const o=i&&Sg(i(n)),c=Ir(Ke,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Sg(t){return t.some(e=>Or(e)?!(e.type===pt||e.type===Ke&&!Sg(e.children)):!0)?t:null}function Vw(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Hi(r)]=t[r];return n}const Jl=t=>t?c_(t)?Do(t):Jl(t.parent):null,Ki=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jl(t.parent),$root:t=>Jl(t.root),$emit:t=>t.emit,$options:t=>ah(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ec(t.update)}),$nextTick:t=>t.n||(t.n=So.bind(t.proxy)),$watch:t=>fI.bind(t)}),El=(t,e)=>t!==Be&&!t.__isScriptSetup&&De(t,e),Xl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(El(r,e))return o[e]=1,r[e];if(s!==Be&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Be&&De(n,e))return o[e]=4,n[e];Zl&&(o[e]=0)}}const h=Ki[e];let p,m;if(h)return e==="$attrs"&&Bt(t.attrs,"get",""),h(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Be&&De(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,De(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return El(s,e)?(s[e]=n,!0):r!==Be&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Be&&De(t,o)||El(e,o)||(c=i[0])&&De(c,o)||De(r,o)||De(Ki,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Mw=Ye({},Xl,{get(t,e){if(e!==Symbol.unscopables)return Xl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!_T(e)}});function Lw(){return null}function xw(){return null}function Fw(t){}function Uw(t){}function Bw(){return null}function $w(){}function jw(t,e){return null}function qw(){return Cg().slots}function Hw(){return Cg().attrs}function Cg(){const t=tr();return t.setupContext||(t.setupContext=h_(t))}function uo(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Kw(t,e){const n=uo(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?re(s)||pe(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Gw(t,e){return!t||!e?t||e:re(t)&&re(e)?t.concat(e):Ye({},uo(t),uo(e))}function Ww(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function zw(t){const e=tr();let n=t();return iu(),Hu(n)&&(n=n.catch(r=>{throw rs(e),r})),[n,()=>rs(e)]}let Zl=!0;function Qw(t){const e=ah(t),n=t.proxy,r=t.ctx;Zl=!1,e.beforeCreate&&Af(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:p,mounted:m,beforeUpdate:T,updated:C,activated:M,deactivated:N,beforeDestroy:U,beforeUnmount:D,destroyed:S,unmounted:O,render:x,renderTracked:k,renderTriggered:E,errorCaptured:_,serverPrefetch:g,expose:y,inheritAttrs:I,components:A,directives:w,filters:me}=e;if(u&&Yw(u,r,null),o)for(const le in o){const Z=o[le];pe(Z)&&(r[le]=Z.bind(n))}if(s){const le=s.call(n,n);je(le)&&(t.data=Ro(le))}if(Zl=!0,i)for(const le in i){const Z=i[le],Ee=pe(Z)?Z.bind(n,n):pe(Z.get)?Z.get.bind(n,n):Lt,ue=!pe(Z)&&pe(Z.set)?Z.set.bind(n):Lt,fe=tn({get:Ee,set:ue});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>fe.value,set:Ve=>fe.value=Ve})}if(c)for(const le in c)Pg(c[le],r,n,le);if(l){const le=pe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(Z=>{js(Z,le[Z])})}h&&Af(h,t,"c");function te(le,Z){re(Z)?Z.forEach(Ee=>le(Ee.bind(n))):Z&&le(Z.bind(n))}if(te(Tg,p),te(gs,m),te(wg,T),te(Ac,C),te(Qg,M),te(Yg,N),te(Rg,_),te(bg,k),te(Ag,E),te(bc,D),te(Rc,O),te(Ig,g),re(y))if(y.length){const le=t.exposed||(t.exposed={});y.forEach(Z=>{Object.defineProperty(le,Z,{get:()=>n[Z],set:Ee=>n[Z]=Ee})})}else t.exposed||(t.exposed={});x&&t.render===Lt&&(t.render=x),I!=null&&(t.inheritAttrs=I),A&&(t.components=A),w&&(t.directives=w)}function Yw(t,e,n=Lt){re(t)&&(t=eu(t));for(const r in t){const s=t[r];let i;je(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Af(t,e,n){Wt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pg(t,e,n,r){const s=r.includes(".")?zg(n,r):()=>n[r];if(Je(t)){const i=e[t];pe(i)&&qs(s,i)}else if(pe(t))qs(s,t.bind(n));else if(je(t))if(re(t))t.forEach(i=>Pg(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&qs(s,i,t)}}function ah(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ja(l,u,o,!0)),ja(l,e,o)),je(e)&&i.set(e,l),l}function ja(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ja(t,i,n,!0),s&&s.forEach(o=>ja(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Jw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Jw={data:bf,props:Rf,emits:Rf,methods:Li,computed:Li,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Li,directives:Li,watch:Zw,provide:bf,inject:Xw};function bf(t,e){return e?t?function(){return Ye(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Xw(t,e){return Li(eu(t),eu(e))}function eu(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Li(t,e){return t?Ye(Object.create(null),t,e):e}function Rf(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:Ye(Object.create(null),uo(t),uo(e??{})):e}function Zw(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function kg(){return{app:null,config:{isNativeTag:uT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eI=0;function tI(t,e){return function(r,s=null){pe(r)||(r=Ye({},r)),s!=null&&!je(s)&&(s=null);const i=kg(),o=new WeakSet;let c=!1;const l=i.app={_uid:eI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:f_,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&pe(u.install)?(o.add(u),u.install(l,...h)):pe(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,p){if(!c){const m=Ce(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(m,u):t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,Do(m.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=$s;$s=l;try{return u()}finally{$s=h}}};return l}}let $s=null;function js(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=ct||lt;if(r||$s){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:$s._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function nI(){return!!(ct||lt||$s)}const Og={},Dg=()=>Object.create(Og),Ng=t=>Object.getPrototypeOf(t)===Og;function rI(t,e,n,r=!1){const s={},i=Dg();t.propsDefaults=Object.create(null),Vg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function sI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=ke(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let m=h[p];if(Tc(t.emitsOptions,m))continue;const T=e[m];if(l)if(De(i,m))T!==i[m]&&(i[m]=T,u=!0);else{const C=Dt(m);s[C]=tu(l,c,C,T,t,!1)}else T!==i[m]&&(i[m]=T,u=!0)}}}else{Vg(t,e,s,i)&&(u=!0);let h;for(const p in c)(!e||!De(e,p)&&((h=Kt(p))===p||!De(e,h)))&&(l?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=tu(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!De(e,p))&&(delete i[p],u=!0)}u&&qn(t.attrs,"set","")}function Vg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ms(l))continue;const u=e[l];let h;s&&De(s,h=Dt(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Tc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ke(n),u=c||Be;for(let h=0;h<i.length;h++){const p=i[h];n[p]=tu(s,l,p,u[p],t,!De(u,p))}}return o}function tu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=De(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=rs(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Mg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const h=p=>{l=!0;const[m,T]=Mg(p,e,!0);Ye(o,m),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return je(t)&&r.set(t,Ns),Ns;if(re(i))for(let h=0;h<i.length;h++){const p=Dt(i[h]);Sf(p)&&(o[p]=Be)}else if(i)for(const h in i){const p=Dt(h);if(Sf(p)){const m=i[h],T=o[p]=re(m)||pe(m)?{type:m}:Ye({},m);if(T){const C=kf(Boolean,T.type),M=kf(String,T.type);T[0]=C>-1,T[1]=M<0||C<M,(C>-1||De(T,"default"))&&c.push(p)}}}const u=[o,c];return je(t)&&r.set(t,u),u}function Sf(t){return t[0]!=="$"&&!Ms(t)}function Cf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Pf(t,e){return Cf(t)===Cf(e)}function kf(t,e){return re(e)?e.findIndex(n=>Pf(n,t)):pe(e)&&Pf(e,t)?0:-1}const Lg=t=>t[0]==="_"||t==="$stable",ch=t=>re(t)?t.map(Ht):[Ht(t)],iI=(t,e,n)=>{if(e._n)return e;const r=Zt((...s)=>ch(e(...s)),n);return r._c=!1,r},xg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Lg(s))continue;const i=t[s];if(pe(i))e[s]=iI(s,i,r);else if(i!=null){const o=ch(i);e[s]=()=>o}}},Fg=(t,e)=>{const n=ch(e);t.slots.default=()=>n},oI=(t,e)=>{const n=t.slots=Dg();if(t.vnode.shapeFlag&32){const r=e._;r?(Ye(n,e),$m(n,"_",r,!0)):xg(e,n)}else e&&Fg(t,e)},aI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Be;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Ye(s,e),!n&&c===1&&delete s._):(i=!e.$stable,xg(e,s)),o=e}else e&&(Fg(t,e),o={default:1});if(i)for(const c in s)!Lg(c)&&o[c]==null&&delete s[c]};function qa(t,e,n,r,s=!1){if(re(t)){t.forEach((m,T)=>qa(m,e&&(re(e)?e[T]:e),n,r,s));return}if(Xr(r)&&!s)return;const i=r.shapeFlag&4?Do(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Be?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Je(u)?(h[u]=null,De(p,u)&&(p[u]=null)):tt(u)&&(u.value=null)),pe(l))Hn(l,c,12,[o,h]);else{const m=Je(l),T=tt(l);if(m||T){const C=()=>{if(t.f){const M=m?De(p,l)?p[l]:h[l]:l.value;s?re(M)&&qu(M,i):re(M)?M.includes(i)||M.push(i):m?(h[l]=[i],De(p,l)&&(p[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else m?(h[l]=o,De(p,l)&&(p[l]=o)):T&&(l.value=o,t.k&&(h[t.k]=o))};o?(C.id=-1,dt(C,n)):C()}}}let Of=!1;const Ss=()=>{Of||(console.error("Hydration completed but contains mismatches."),Of=!0)},cI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",lI=t=>t.namespaceURI.includes("MathML"),fa=t=>{if(cI(t))return"svg";if(lI(t))return"mathml"},pa=t=>t.nodeType===8;function uI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,h=(S,O)=>{if(!O.hasChildNodes()){n(null,S,O),$a(),O._vnode=S;return}p(O.firstChild,S,null,null,null),$a(),O._vnode=S},p=(S,O,x,k,E,_=!1)=>{_=_||!!O.dynamicChildren;const g=pa(S)&&S.data==="[",y=()=>M(S,O,x,k,E,g),{type:I,ref:A,shapeFlag:w,patchFlag:me}=O;let we=S.nodeType;O.el=S,me===-2&&(_=!1,O.dynamicChildren=null);let te=null;switch(I){case ts:we!==3?O.children===""?(l(O.el=s(""),o(S),S),te=S):te=y():(S.data!==O.children&&(Ss(),S.data=O.children),te=i(S));break;case pt:D(S)?(te=i(S),U(O.el=S.content.firstChild,S,x)):we!==8||g?te=y():te=i(S);break;case Zr:if(g&&(S=i(S),we=S.nodeType),we===1||we===3){te=S;const le=!O.children.length;for(let Z=0;Z<O.staticCount;Z++)le&&(O.children+=te.nodeType===1?te.outerHTML:te.data),Z===O.staticCount-1&&(O.anchor=te),te=i(te);return g?i(te):te}else y();break;case Ke:g?te=C(S,O,x,k,E,_):te=y();break;default:if(w&1)(we!==1||O.type.toLowerCase()!==S.tagName.toLowerCase())&&!D(S)?te=y():te=m(S,O,x,k,E,_);else if(w&6){O.slotScopeIds=E;const le=o(S);if(g?te=N(S):pa(S)&&S.data==="teleport start"?te=N(S,S.data,"teleport end"):te=i(S),e(O,le,null,x,k,fa(le),_),Xr(O)){let Z;g?(Z=Ce(Ke),Z.anchor=te?te.previousSibling:le.lastChild):Z=S.nodeType===3?un(""):Ce("div"),Z.el=S,O.component.subTree=Z}}else w&64?we!==8?te=y():te=O.type.hydrate(S,O,x,k,E,_,t,T):w&128&&(te=O.type.hydrate(S,O,x,k,fa(o(S)),E,_,t,p))}return A!=null&&qa(A,null,k,O),te},m=(S,O,x,k,E,_)=>{_=_||!!O.dynamicChildren;const{type:g,props:y,patchFlag:I,shapeFlag:A,dirs:w,transition:me}=O,we=g==="input"||g==="option";if(we||I!==-1){w&&wn(O,null,x,"created");let te=!1;if(D(S)){te=jg(k,me)&&x&&x.vnode.props&&x.vnode.props.appear;const Z=S.content.firstChild;te&&me.beforeEnter(Z),U(Z,S,x),O.el=S=Z}if(A&16&&!(y&&(y.innerHTML||y.textContent))){let Z=T(S.firstChild,O,S,x,k,E,_);for(;Z;){Ss();const Ee=Z;Z=Z.nextSibling,c(Ee)}}else A&8&&S.textContent!==O.children&&(Ss(),S.textContent=O.children);if(y)if(we||!_||I&48)for(const Z in y)(we&&(Z.endsWith("value")||Z==="indeterminate")||Ao(Z)&&!Ms(Z)||Z[0]===".")&&r(S,Z,null,y[Z],void 0,void 0,x);else y.onClick&&r(S,"onClick",null,y.onClick,void 0,void 0,x);let le;(le=y&&y.onVnodeBeforeMount)&&Nt(le,x,O),w&&wn(O,null,x,"beforeMount"),((le=y&&y.onVnodeMounted)||w||te)&&Eg(()=>{le&&Nt(le,x,O),te&&me.enter(S),w&&wn(O,null,x,"mounted")},k)}return S.nextSibling},T=(S,O,x,k,E,_,g)=>{g=g||!!O.dynamicChildren;const y=O.children,I=y.length;for(let A=0;A<I;A++){const w=g?y[A]:y[A]=Ht(y[A]);S?S=p(S,w,k,E,_,g):w.type===ts&&!w.children?l(w.el=s(""),x):(Ss(),n(null,w,x,null,k,E,fa(x),_))}return S},C=(S,O,x,k,E,_)=>{const{slotScopeIds:g}=O;g&&(E=E?E.concat(g):g);const y=o(S),I=T(i(S),O,y,x,k,E,_);return I&&pa(I)&&I.data==="]"?i(O.anchor=I):(Ss(),l(O.anchor=u("]"),y,I),I)},M=(S,O,x,k,E,_)=>{if(Ss(),O.el=null,_){const I=N(S);for(;;){const A=i(S);if(A&&A!==I)c(A);else break}}const g=i(S),y=o(S);return c(S),n(null,O,y,g,x,k,fa(y),E),g},N=(S,O="[",x="]")=>{let k=0;for(;S;)if(S=i(S),S&&pa(S)&&(S.data===O&&k++,S.data===x)){if(k===0)return i(S);k--}return S},U=(S,O,x)=>{const k=O.parentNode;k&&k.replaceChild(S,O);let E=x;for(;E;)E.vnode.el===O&&(E.vnode.el=E.subTree.el=S),E=E.parent},D=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[h,p]}const dt=Eg;function Ug(t){return $g(t)}function Bg(t){return $g(t,uI)}function $g(t,e){const n=jm();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:p,nextSibling:m,setScopeId:T=Lt,insertStaticContent:C}=t,M=(b,R,L,j=null,B=null,W=null,Y=void 0,G=null,z=!!R.dynamicChildren)=>{if(b===R)return;b&&!cn(b,R)&&(j=$(b),Ve(b,B,W,!0),b=null),R.patchFlag===-2&&(z=!1,R.dynamicChildren=null);const{type:H,ref:X,shapeFlag:ce}=R;switch(H){case ts:N(b,R,L,j);break;case pt:U(b,R,L,j);break;case Zr:b==null&&D(R,L,j,Y);break;case Ke:A(b,R,L,j,B,W,Y,G,z);break;default:ce&1?x(b,R,L,j,B,W,Y,G,z):ce&6?w(b,R,L,j,B,W,Y,G,z):(ce&64||ce&128)&&H.process(b,R,L,j,B,W,Y,G,z,se)}X!=null&&B&&qa(X,b&&b.ref,W,R||b,!R)},N=(b,R,L,j)=>{if(b==null)r(R.el=c(R.children),L,j);else{const B=R.el=b.el;R.children!==b.children&&u(B,R.children)}},U=(b,R,L,j)=>{b==null?r(R.el=l(R.children||""),L,j):R.el=b.el},D=(b,R,L,j)=>{[b.el,b.anchor]=C(b.children,R,L,j,b.el,b.anchor)},S=({el:b,anchor:R},L,j)=>{let B;for(;b&&b!==R;)B=m(b),r(b,L,j),b=B;r(R,L,j)},O=({el:b,anchor:R})=>{let L;for(;b&&b!==R;)L=m(b),s(b),b=L;s(R)},x=(b,R,L,j,B,W,Y,G,z)=>{R.type==="svg"?Y="svg":R.type==="math"&&(Y="mathml"),b==null?k(R,L,j,B,W,Y,G,z):g(b,R,B,W,Y,G,z)},k=(b,R,L,j,B,W,Y,G)=>{let z,H;const{props:X,shapeFlag:ce,transition:ae,dirs:oe}=b;if(z=b.el=o(b.type,W,X&&X.is,X),ce&8?h(z,b.children):ce&16&&_(b.children,z,null,j,B,Tl(b,W),Y,G),oe&&wn(b,null,j,"created"),E(z,b,b.scopeId,Y,j),X){for(const xe in X)xe!=="value"&&!Ms(xe)&&i(z,xe,null,X[xe],W,b.children,j,B,ht);"value"in X&&i(z,"value",null,X.value,W),(H=X.onVnodeBeforeMount)&&Nt(H,j,b)}oe&&wn(b,null,j,"beforeMount");const de=jg(B,ae);de&&ae.beforeEnter(z),r(z,R,L),((H=X&&X.onVnodeMounted)||de||oe)&&dt(()=>{H&&Nt(H,j,b),de&&ae.enter(z),oe&&wn(b,null,j,"mounted")},B)},E=(b,R,L,j,B)=>{if(L&&T(b,L),j)for(let W=0;W<j.length;W++)T(b,j[W]);if(B){let W=B.subTree;if(R===W){const Y=B.vnode;E(b,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},_=(b,R,L,j,B,W,Y,G,z=0)=>{for(let H=z;H<b.length;H++){const X=b[H]=G?_r(b[H]):Ht(b[H]);M(null,X,R,L,j,B,W,Y,G)}},g=(b,R,L,j,B,W,Y)=>{const G=R.el=b.el;let{patchFlag:z,dynamicChildren:H,dirs:X}=R;z|=b.patchFlag&16;const ce=b.props||Be,ae=R.props||Be;let oe;if(L&&qr(L,!1),(oe=ae.onVnodeBeforeUpdate)&&Nt(oe,L,R,b),X&&wn(R,b,L,"beforeUpdate"),L&&qr(L,!0),H?y(b.dynamicChildren,H,G,L,j,Tl(R,B),W):Y||Z(b,R,G,null,L,j,Tl(R,B),W,!1),z>0){if(z&16)I(G,R,ce,ae,L,j,B);else if(z&2&&ce.class!==ae.class&&i(G,"class",null,ae.class,B),z&4&&i(G,"style",ce.style,ae.style,B),z&8){const de=R.dynamicProps;for(let xe=0;xe<de.length;xe++){const Oe=de[xe],nt=ce[Oe],$t=ae[Oe];($t!==nt||Oe==="value")&&i(G,Oe,nt,$t,B,b.children,L,j,ht)}}z&1&&b.children!==R.children&&h(G,R.children)}else!Y&&H==null&&I(G,R,ce,ae,L,j,B);((oe=ae.onVnodeUpdated)||X)&&dt(()=>{oe&&Nt(oe,L,R,b),X&&wn(R,b,L,"updated")},j)},y=(b,R,L,j,B,W,Y)=>{for(let G=0;G<R.length;G++){const z=b[G],H=R[G],X=z.el&&(z.type===Ke||!cn(z,H)||z.shapeFlag&70)?p(z.el):L;M(z,H,X,null,j,B,W,Y,!0)}},I=(b,R,L,j,B,W,Y)=>{if(L!==j){if(L!==Be)for(const G in L)!Ms(G)&&!(G in j)&&i(b,G,L[G],null,Y,R.children,B,W,ht);for(const G in j){if(Ms(G))continue;const z=j[G],H=L[G];z!==H&&G!=="value"&&i(b,G,H,z,Y,R.children,B,W,ht)}"value"in j&&i(b,"value",L.value,j.value,Y)}},A=(b,R,L,j,B,W,Y,G,z)=>{const H=R.el=b?b.el:c(""),X=R.anchor=b?b.anchor:c("");let{patchFlag:ce,dynamicChildren:ae,slotScopeIds:oe}=R;oe&&(G=G?G.concat(oe):oe),b==null?(r(H,L,j),r(X,L,j),_(R.children||[],L,X,B,W,Y,G,z)):ce>0&&ce&64&&ae&&b.dynamicChildren?(y(b.dynamicChildren,ae,L,B,W,Y,G),(R.key!=null||B&&R===B.subTree)&&lh(b,R,!0)):Z(b,R,L,X,B,W,Y,G,z)},w=(b,R,L,j,B,W,Y,G,z)=>{R.slotScopeIds=G,b==null?R.shapeFlag&512?B.ctx.activate(R,L,j,Y,z):me(R,L,j,B,W,Y,z):we(b,R,z)},me=(b,R,L,j,B,W,Y)=>{const G=b.component=a_(b,j,B);if(ko(b)&&(G.ctx.renderer=se),l_(G),G.asyncDep){if(B&&B.registerDep(G,te,Y),!b.el){const z=G.subTree=Ce(pt);U(null,z,R,L)}}else te(G,b,R,L,B,W,Y)},we=(b,R,L)=>{const j=R.component=b.component;if(Tw(b,R,L))if(j.asyncDep&&!j.asyncResolved){le(j,R,L);return}else j.next=R,pw(j.update),j.effect.dirty=!0,j.update();else R.el=b.el,j.vnode=R},te=(b,R,L,j,B,W,Y)=>{const G=()=>{if(b.isMounted){let{next:X,bu:ce,u:ae,parent:oe,vnode:de}=b;{const Yt=qg(b);if(Yt){X&&(X.el=de.el,le(b,X,Y)),Yt.asyncDep.then(()=>{b.isUnmounted||G()});return}}let xe=X,Oe;qr(b,!1),X?(X.el=de.el,le(b,X,Y)):X=de,ce&&Ls(ce),(Oe=X.props&&X.props.onVnodeBeforeUpdate)&&Nt(Oe,oe,X,de),qr(b,!0);const nt=ba(b),$t=b.subTree;b.subTree=nt,M($t,nt,p($t.el),$($t),b,B,W),X.el=nt.el,xe===null&&rh(b,nt.el),ae&&dt(ae,B),(Oe=X.props&&X.props.onVnodeUpdated)&&dt(()=>Nt(Oe,oe,X,de),B)}else{let X;const{el:ce,props:ae}=R,{bm:oe,m:de,parent:xe}=b,Oe=Xr(R);if(qr(b,!1),oe&&Ls(oe),!Oe&&(X=ae&&ae.onVnodeBeforeMount)&&Nt(X,xe,R),qr(b,!0),ce&&$e){const nt=()=>{b.subTree=ba(b),$e(ce,b.subTree,b,B,null)};Oe?R.type.__asyncLoader().then(()=>!b.isUnmounted&&nt()):nt()}else{const nt=b.subTree=ba(b);M(null,nt,L,j,b,B,W),R.el=nt.el}if(de&&dt(de,B),!Oe&&(X=ae&&ae.onVnodeMounted)){const nt=R;dt(()=>Nt(X,xe,nt),B)}(R.shapeFlag&256||xe&&Xr(xe.vnode)&&xe.vnode.shapeFlag&256)&&b.a&&dt(b.a,B),b.isMounted=!0,R=L=j=null}},z=b.effect=new zs(G,Lt,()=>Ec(H),b.scope),H=b.update=()=>{z.dirty&&z.run()};H.id=b.uid,qr(b,!0),H()},le=(b,R,L)=>{R.component=b;const j=b.vnode.props;b.vnode=R,b.next=null,sI(b,R.props,j,L),aI(b,R.children,L),Lr(),Ef(b),xr()},Z=(b,R,L,j,B,W,Y,G,z=!1)=>{const H=b&&b.children,X=b?b.shapeFlag:0,ce=R.children,{patchFlag:ae,shapeFlag:oe}=R;if(ae>0){if(ae&128){ue(H,ce,L,j,B,W,Y,G,z);return}else if(ae&256){Ee(H,ce,L,j,B,W,Y,G,z);return}}oe&8?(X&16&&ht(H,B,W),ce!==H&&h(L,ce)):X&16?oe&16?ue(H,ce,L,j,B,W,Y,G,z):ht(H,B,W,!0):(X&8&&h(L,""),oe&16&&_(ce,L,j,B,W,Y,G,z))},Ee=(b,R,L,j,B,W,Y,G,z)=>{b=b||Ns,R=R||Ns;const H=b.length,X=R.length,ce=Math.min(H,X);let ae;for(ae=0;ae<ce;ae++){const oe=R[ae]=z?_r(R[ae]):Ht(R[ae]);M(b[ae],oe,L,null,B,W,Y,G,z)}H>X?ht(b,B,W,!0,!1,ce):_(R,L,j,B,W,Y,G,z,ce)},ue=(b,R,L,j,B,W,Y,G,z)=>{let H=0;const X=R.length;let ce=b.length-1,ae=X-1;for(;H<=ce&&H<=ae;){const oe=b[H],de=R[H]=z?_r(R[H]):Ht(R[H]);if(cn(oe,de))M(oe,de,L,null,B,W,Y,G,z);else break;H++}for(;H<=ce&&H<=ae;){const oe=b[ce],de=R[ae]=z?_r(R[ae]):Ht(R[ae]);if(cn(oe,de))M(oe,de,L,null,B,W,Y,G,z);else break;ce--,ae--}if(H>ce){if(H<=ae){const oe=ae+1,de=oe<X?R[oe].el:j;for(;H<=ae;)M(null,R[H]=z?_r(R[H]):Ht(R[H]),L,de,B,W,Y,G,z),H++}}else if(H>ae)for(;H<=ce;)Ve(b[H],B,W,!0),H++;else{const oe=H,de=H,xe=new Map;for(H=de;H<=ae;H++){const Ct=R[H]=z?_r(R[H]):Ht(R[H]);Ct.key!=null&&xe.set(Ct.key,H)}let Oe,nt=0;const $t=ae-de+1;let Yt=!1,yi=0;const or=new Array($t);for(H=0;H<$t;H++)or[H]=0;for(H=oe;H<=ce;H++){const Ct=b[H];if(nt>=$t){Ve(Ct,B,W,!0);continue}let Jt;if(Ct.key!=null)Jt=xe.get(Ct.key);else for(Oe=de;Oe<=ae;Oe++)if(or[Oe-de]===0&&cn(Ct,R[Oe])){Jt=Oe;break}Jt===void 0?Ve(Ct,B,W,!0):(or[Jt-de]=H+1,Jt>=yi?yi=Jt:Yt=!0,M(Ct,R[Jt],L,null,B,W,Y,G,z),nt++)}const Ts=Yt?hI(or):Ns;for(Oe=Ts.length-1,H=$t-1;H>=0;H--){const Ct=de+H,Jt=R[Ct],ws=Ct+1<X?R[Ct+1].el:j;or[H]===0?M(null,Jt,L,ws,B,W,Y,G,z):Yt&&(Oe<0||H!==Ts[Oe]?fe(Jt,L,ws,2):Oe--)}}},fe=(b,R,L,j,B=null)=>{const{el:W,type:Y,transition:G,children:z,shapeFlag:H}=b;if(H&6){fe(b.component.subTree,R,L,j);return}if(H&128){b.suspense.move(R,L,j);return}if(H&64){Y.move(b,R,L,se);return}if(Y===Ke){r(W,R,L);for(let ce=0;ce<z.length;ce++)fe(z[ce],R,L,j);r(b.anchor,R,L);return}if(Y===Zr){S(b,R,L);return}if(j!==2&&H&1&&G)if(j===0)G.beforeEnter(W),r(W,R,L),dt(()=>G.enter(W),B);else{const{leave:ce,delayLeave:ae,afterLeave:oe}=G,de=()=>r(W,R,L),xe=()=>{ce(W,()=>{de(),oe&&oe()})};ae?ae(W,de,xe):xe()}else r(W,R,L)},Ve=(b,R,L,j=!1,B=!1)=>{const{type:W,props:Y,ref:G,children:z,dynamicChildren:H,shapeFlag:X,patchFlag:ce,dirs:ae,memoIndex:oe}=b;if(G!=null&&qa(G,null,L,b,!0),oe!=null&&(R.renderCache[oe]=void 0),X&256){R.ctx.deactivate(b);return}const de=X&1&&ae,xe=!Xr(b);let Oe;if(xe&&(Oe=Y&&Y.onVnodeBeforeUnmount)&&Nt(Oe,R,b),X&6)Tn(b.component,L,j);else{if(X&128){b.suspense.unmount(L,j);return}de&&wn(b,null,R,"beforeUnmount"),X&64?b.type.remove(b,R,L,B,se,j):H&&(W!==Ke||ce>0&&ce&64)?ht(H,R,L,!1,!0):(W===Ke&&ce&384||!B&&X&16)&&ht(z,R,L),j&&Me(b)}(xe&&(Oe=Y&&Y.onVnodeUnmounted)||de)&&dt(()=>{Oe&&Nt(Oe,R,b),de&&wn(b,null,R,"unmounted")},L)},Me=b=>{const{type:R,el:L,anchor:j,transition:B}=b;if(R===Ke){ir(L,j);return}if(R===Zr){O(b);return}const W=()=>{s(L),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(b.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:G}=B,z=()=>Y(L,W);G?G(b.el,W,z):z()}else W()},ir=(b,R)=>{let L;for(;b!==R;)L=m(b),s(b),b=L;s(R)},Tn=(b,R,L)=>{const{bum:j,scope:B,update:W,subTree:Y,um:G,m:z,a:H}=b;Ha(z),Ha(H),j&&Ls(j),B.stop(),W&&(W.active=!1,Ve(Y,b,R,L)),G&&dt(G,R),dt(()=>{b.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ht=(b,R,L,j=!1,B=!1,W=0)=>{for(let Y=W;Y<b.length;Y++)Ve(b[Y],R,L,j,B)},$=b=>b.shapeFlag&6?$(b.component.subTree):b.shapeFlag&128?b.suspense.next():m(b.anchor||b.el);let ee=!1;const J=(b,R,L)=>{b==null?R._vnode&&Ve(R._vnode,null,null,!0):M(R._vnode||null,b,R,null,null,null,L),ee||(ee=!0,Ef(),$a(),ee=!1),R._vnode=b},se={p:M,um:Ve,m:fe,r:Me,mt:me,mc:_,pc:Z,pbc:y,n:$,o:t};let Re,$e;return e&&([Re,$e]=e(se)),{render:J,hydrate:Re,createApp:tI(J,Re)}}function Tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lh(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=_r(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&lh(o,c)),c.type===ts&&(c.el=o.el)}}function hI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function qg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qg(e)}function Ha(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Hg=Symbol.for("v-scx"),Kg=()=>zt(Hg);function dI(t,e){return Po(t,null,e)}function Gg(t,e){return Po(t,null,{flush:"post"})}function Wg(t,e){return Po(t,null,{flush:"sync"})}const ma={};function qs(t,e,n){return Po(t,e,n)}function Po(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Be){if(e&&i){const k=e;e=(...E)=>{k(...E),x()}}const l=ct,u=k=>r===!0?k:vr(k,r===!1?1:void 0);let h,p=!1,m=!1;if(tt(t)?(h=()=>t.value,p=so(t)):xs(t)?(h=()=>u(t),p=!0):re(t)?(m=!0,p=t.some(k=>xs(k)||so(k)),h=()=>t.map(k=>{if(tt(k))return k.value;if(xs(k))return u(k);if(pe(k))return Hn(k,l,2)})):pe(t)?e?h=()=>Hn(t,l,2):h=()=>(T&&T(),Wt(t,l,3,[C])):h=Lt,e&&r){const k=h;h=()=>vr(k())}let T,C=k=>{T=S.onStop=()=>{Hn(k,l,4),T=S.onStop=void 0}},M;if(Oo)if(C=Lt,e?n&&Wt(e,l,3,[h(),m?[]:void 0,C]):h(),s==="sync"){const k=Kg();M=k.__watcherHandles||(k.__watcherHandles=[])}else return Lt;let N=m?new Array(t.length).fill(ma):ma;const U=()=>{if(!(!S.active||!S.dirty))if(e){const k=S.run();(r||p||(m?k.some((E,_)=>mn(E,N[_])):mn(k,N)))&&(T&&T(),Wt(e,l,3,[k,N===ma?void 0:m&&N[0]===ma?[]:N,C]),N=k)}else S.run()};U.allowRecurse=!!e;let D;s==="sync"?D=U:s==="post"?D=()=>dt(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),D=()=>Ec(U));const S=new zs(h,Lt,D),O=Gm(),x=()=>{S.stop(),O&&qu(O.effects,S)};return e?n?U():N=S.run():s==="post"?dt(S.run.bind(S),l&&l.suspense):S.run(),M&&M.push(x),x}function fI(t,e,n){const r=this.proxy,s=Je(t)?t.includes(".")?zg(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=rs(this),c=Po(s,i.bind(r),n);return o(),c}function zg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function vr(t,e=1/0,n){if(e<=0||!je(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,tt(t))vr(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)vr(t[r],e,n);else if(fs(t)||Vs(t))t.forEach(r=>{vr(r,e,n)});else if(Bm(t)){for(const r in t)vr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&vr(t[r],e,n)}return t}const ko=t=>t.type.__isKeepAlive,pI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=tr(),r=n.ctx;if(!r.renderer)return()=>{const D=e.default&&e.default();return D&&D.length===1?D[0]:D};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:p}}}=r,m=p("div");r.activate=(D,S,O,x,k)=>{const E=D.component;u(D,S,O,0,c),l(E.vnode,D,S,O,E,c,x,D.slotScopeIds,k),dt(()=>{E.isDeactivated=!1,E.a&&Ls(E.a);const _=D.props&&D.props.onVnodeMounted;_&&Nt(_,E.parent,D)},c)},r.deactivate=D=>{const S=D.component;Ha(S.m),Ha(S.a),u(D,m,null,1,c),dt(()=>{S.da&&Ls(S.da);const O=D.props&&D.props.onVnodeUnmounted;O&&Nt(O,S.parent,D),S.isDeactivated=!0},c)};function T(D){wl(D),h(D,n,c,!0)}function C(D){s.forEach((S,O)=>{const x=cu(S.type);x&&(!D||!D(x))&&M(O)})}function M(D){const S=s.get(D);!o||!cn(S,o)?T(S):o&&wl(o),s.delete(D),i.delete(D)}qs(()=>[t.include,t.exclude],([D,S])=>{D&&C(O=>xi(D,O)),S&&C(O=>!xi(S,O))},{flush:"post",deep:!0});let N=null;const U=()=>{N!=null&&(Ql(n.subTree.type)?dt(()=>{s.set(N,ga(n.subTree))},n.subTree.suspense):s.set(N,ga(n.subTree)))};return gs(U),Ac(U),bc(()=>{s.forEach(D=>{const{subTree:S,suspense:O}=n,x=ga(S);if(D.type===x.type&&D.key===x.key){wl(x);const k=x.component.da;k&&dt(k,O);return}T(D)})}),()=>{if(N=null,!e.default)return null;const D=e.default(),S=D[0];if(D.length>1)return o=null,D;if(!Or(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let O=ga(S);const x=O.type,k=cu(Xr(O)?O.type.__asyncResolved||{}:x),{include:E,exclude:_,max:g}=t;if(E&&(!k||!xi(E,k))||_&&k&&xi(_,k))return o=O,S;const y=O.key==null?x:O.key,I=s.get(y);return O.el&&(O=Pn(O),S.shapeFlag&128&&(S.ssContent=O)),N=y,I?(O.el=I.el,O.component=I.component,O.transition&&kr(O,O.transition),O.shapeFlag|=512,i.delete(y),i.add(y)):(i.add(y),g&&i.size>parseInt(g,10)&&M(i.values().next().value)),O.shapeFlag|=256,o=O,Ql(S.type)?S:O}}},mI=pI;function xi(t,e){return re(t)?t.some(n=>xi(n,e)):Je(t)?t.split(",").includes(e):dT(t)?t.test(e):!1}function Qg(t,e){Jg(t,"a",e)}function Yg(t,e){Jg(t,"da",e)}function Jg(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ic(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ko(s.parent.vnode)&&gI(r,e,n,s),s=s.parent}}function gI(t,e,n,r){const s=Ic(e,t,r,!0);Rc(()=>{qu(r[e],s)},n)}function wl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ga(t){return t.shapeFlag&128?t.ssContent:t}const gr=Symbol("_leaveCb"),_a=Symbol("_enterCb");function uh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return gs(()=>{t.isMounted=!0}),bc(()=>{t.isUnmounting=!0}),t}const Xt=[Function,Array],hh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},Xg=t=>{const e=t.subTree;return e.component?Xg(e.component):e},_I={name:"BaseTransition",props:hh,setup(t,{slots:e}){const n=tr(),r=uh();return()=>{const s=e.default&&Sc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==pt){i=m;break}}const o=ke(t),{mode:c}=o;if(r.isLeaving)return Il(i);const l=Df(i);if(!l)return Il(i);let u=Ys(l,o,r,n,m=>u=m);kr(l,u);const h=n.subTree,p=h&&Df(h);if(p&&p.type!==pt&&!cn(l,p)&&Xg(n).type!==pt){const m=Ys(p,o,r,n);if(kr(p,m),c==="out-in"&&l.type!==pt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Il(i);c==="in-out"&&l.type!==pt&&(m.delayLeave=(T,C,M)=>{const N=e_(r,p);N[String(p.key)]=p,T[gr]=()=>{C(),T[gr]=void 0,delete u.delayedLeave},u.delayedLeave=M})}return i}}},Zg=_I;function e_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ys(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:m,onLeave:T,onAfterLeave:C,onLeaveCancelled:M,onBeforeAppear:N,onAppear:U,onAfterAppear:D,onAppearCancelled:S}=e,O=String(t.key),x=e_(n,t),k=(g,y)=>{g&&Wt(g,r,9,y)},E=(g,y)=>{const I=y[1];k(g,y),re(g)?g.every(A=>A.length<=1)&&I():g.length<=1&&I()},_={mode:o,persisted:c,beforeEnter(g){let y=l;if(!n.isMounted)if(i)y=N||l;else return;g[gr]&&g[gr](!0);const I=x[O];I&&cn(t,I)&&I.el[gr]&&I.el[gr](),k(y,[g])},enter(g){let y=u,I=h,A=p;if(!n.isMounted)if(i)y=U||u,I=D||h,A=S||p;else return;let w=!1;const me=g[_a]=we=>{w||(w=!0,we?k(A,[g]):k(I,[g]),_.delayedLeave&&_.delayedLeave(),g[_a]=void 0)};y?E(y,[g,me]):me()},leave(g,y){const I=String(t.key);if(g[_a]&&g[_a](!0),n.isUnmounting)return y();k(m,[g]);let A=!1;const w=g[gr]=me=>{A||(A=!0,y(),me?k(M,[g]):k(C,[g]),g[gr]=void 0,x[I]===t&&delete x[I])};x[I]=t,T?E(T,[g,w]):w()},clone(g){const y=Ys(g,e,n,r,s);return s&&s(y),y}};return _}function Il(t){if(ko(t))return t=Pn(t),t.children=null,t}function Df(t){if(!ko(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function kr(t,e){t.shapeFlag&6&&t.component?kr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ke?(o.patchFlag&128&&s++,r=r.concat(Sc(o.children,e,c))):(e||o.type!==pt)&&r.push(c!=null?Pn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const yI=t=>t.__isTeleport,Gi=t=>t&&(t.disabled||t.disabled===""),Nf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Vf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,nu=(t,e)=>{const n=t&&t.to;return Je(n)?e?e(n):null:n},vI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:h,pc:p,pbc:m,o:{insert:T,querySelector:C,createText:M,createComment:N}}=u,U=Gi(e.props);let{shapeFlag:D,children:S,dynamicChildren:O}=e;if(t==null){const x=e.el=M(""),k=e.anchor=M("");T(x,n,r),T(k,n,r);const E=e.target=nu(e.props,C),_=e.targetAnchor=M("");E&&(T(_,E),o==="svg"||Nf(E)?o="svg":(o==="mathml"||Vf(E))&&(o="mathml"));const g=(y,I)=>{D&16&&h(S,y,I,s,i,o,c,l)};U?g(n,k):E&&g(E,_)}else{e.el=t.el;const x=e.anchor=t.anchor,k=e.target=t.target,E=e.targetAnchor=t.targetAnchor,_=Gi(t.props),g=_?n:k,y=_?x:E;if(o==="svg"||Nf(k)?o="svg":(o==="mathml"||Vf(k))&&(o="mathml"),O?(m(t.dynamicChildren,O,g,s,i,o,c),lh(t,e,!0)):l||p(t,e,g,y,s,i,o,c,!1),U)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ya(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const I=e.target=nu(e.props,C);I&&ya(e,I,null,u,0)}else _&&ya(e,k,E,u,1)}t_(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:h,target:p,props:m}=t;if(p&&i(h),o&&i(u),c&16){const T=o||!Gi(m);for(let C=0;C<l.length;C++){const M=l[C];s(M,e,n,T,!!M.dynamicChildren)}}},move:ya,hydrate:EI};function ya(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:h}=t,p=i===2;if(p&&r(o,e,n),(!p||Gi(h))&&l&16)for(let m=0;m<u.length;m++)s(u[m],e,n,2);p&&r(c,e,n)}function EI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const h=e.target=nu(e.props,l);if(h){const p=h._lpa||h.firstChild;if(e.shapeFlag&16)if(Gi(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let m=p;for(;m;)if(m=o(m),m&&m.nodeType===8&&m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,h,n,r,s,i)}t_(e)}return e.anchor&&o(e.anchor)}const TI=vI;function t_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ke=Symbol.for("v-fgt"),ts=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),Wi=[];let xt=null;function ye(t=!1){Wi.push(xt=t?null:[])}function n_(){Wi.pop(),xt=Wi[Wi.length-1]||null}let ns=1;function ru(t){ns+=t}function r_(t){return t.dynamicChildren=ns>0?xt||Ns:null,n_(),ns>0&&xt&&xt.push(t),t}function Ae(t,e,n,r,s,i){return r_(P(t,e,n,r,s,i,!0))}function Ir(t,e,n,r,s){return r_(Ce(t,e,n,r,s,!0))}function Or(t){return t?t.__v_isVNode===!0:!1}function cn(t,e){return t.type===e.type&&t.key===e.key}function wI(t){}const s_=({key:t})=>t??null,Ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Je(t)||tt(t)||pe(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Ke?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&s_(e),ref:e&&Ra(e),scopeId:wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(fh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),ns>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const Ce=II;function II(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yg)&&(t=pt),Or(t)){const c=Pn(t,e,!0);return n&&fh(c,n),ns>0&&!i&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag=-2,c}if(kI(t)&&(t=t.__vccOpts),e){e=i_(e);let{class:c,style:l}=e;c&&!Je(c)&&(e.class=It(c)),je(l)&&(Xu(l)&&!re(l)&&(l=Ye({},l)),e.style=ps(l))}const o=Je(t)?1:Ql(t)?128:yI(t)?64:je(t)?4:pe(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function i_(t){return t?Xu(t)||Ng(t)?Ye({},t):t:null}function Pn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?o_(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&s_(u),ref:e&&e.ref?n&&i?re(i)?i.concat(Ra(e)):[i,Ra(e)]:Ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&kr(h,l.clone(h)),h}function un(t=" ",e=0){return Ce(ts,null,t,e)}function dh(t,e){const n=Ce(Zr,null,t);return n.staticCount=e,n}function en(t="",e=!1){return e?(ye(),Ir(pt,null,t)):Ce(pt,null,t)}function Ht(t){return t==null||typeof t=="boolean"?Ce(pt):re(t)?Ce(Ke,null,t.slice()):typeof t=="object"?_r(t):Ce(ts,null,String(t))}function _r(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function fh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ng(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function o_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=It([e.class,r.class]));else if(s==="style")e.style=ps([e.style,r.style]);else if(Ao(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Nt(t,e,n,r=null){Wt(t,e,7,[n,r])}const AI=kg();let bI=0;function a_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||AI,i={uid:bI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mg(r,s),emitsOptions:gg(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gw.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const tr=()=>ct||lt;let Ka,su;{const t=jm(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ka=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),su=e("__VUE_SSR_SETTERS__",n=>Oo=n)}const rs=t=>{const e=ct;return Ka(t),t.scope.on(),()=>{t.scope.off(),Ka(e)}},iu=()=>{ct&&ct.scope.off(),Ka(null)};function c_(t){return t.vnode.shapeFlag&4}let Oo=!1;function l_(t,e=!1){e&&su(e);const{props:n,children:r}=t.vnode,s=c_(t);rI(t,n,s,e),oI(t,r);const i=s?RI(t,e):void 0;return e&&su(!1),i}function RI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?h_(t):null,i=rs(t);Lr();const o=Hn(r,t,0,[t.props,s]);if(xr(),i(),Hu(o)){if(o.then(iu,iu),e)return o.then(c=>{ou(t,c,e)}).catch(c=>{ms(c,t,0)});t.asyncDep=o}else ou(t,o,e)}else u_(t,e)}function ou(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:je(e)&&(t.setupState=th(e)),u_(t,n)}let Ga,au;function SI(t){Ga=t,au=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Mw))}}const CI=()=>!Ga;function u_(t,e,n){const r=t.type;if(!t.render){if(!e&&Ga&&!r.render){const s=r.template||ah(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Ye(Ye({isCustomElement:i,delimiters:c},o),l);r.render=Ga(s,u)}}t.render=r.render||Lt,au&&au(t)}{const s=rs(t);Lr();try{Qw(t)}finally{xr(),s()}}}const PI={get(t,e){return Bt(t,"get",""),t[e]}};function h_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,PI),slots:t.slots,emit:t.emit,expose:e}}function Do(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(th(og(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ki)return Ki[n](t)},has(e,n){return n in e||n in Ki}})):t.proxy}function cu(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function kI(t){return pe(t)&&"__vccOpts"in t}const tn=(t,e)=>JT(t,e,Oo);function OI(t,e,n=Be){const r=tr(),s=Dt(e),i=Kt(e),o=ug((l,u)=>{let h;return Wg(()=>{const p=t[e];mn(h,p)&&(h=p,u())}),{get(){return l(),n.get?n.get(h):h},set(p){const m=r.vnode.props;!(m&&(e in m||s in m||i in m)&&(`onUpdate:${e}`in m||`onUpdate:${s}`in m||`onUpdate:${i}`in m))&&mn(p,h)&&(h=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function Cc(t,e,n){const r=arguments.length;return r===2?je(e)&&!re(e)?Or(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Or(n)&&(n=[n]),Ce(t,e,n))}function DI(){}function NI(t,e,n,r){const s=n[r];if(s&&d_(s,t))return s;const i=e();return i.memo=t.slice(),i.memoIndex=r,n[r]=i}function d_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(mn(n[r],e[r]))return!1;return ns>0&&xt&&xt.push(t),!0}const f_="3.4.29",VI=Lt,MI=hw,LI=Cs,xI=mg,FI={createComponentInstance:a_,setupComponent:l_,renderComponentRoot:ba,setCurrentRenderingInstance:co,isVNode:Or,normalizeVNode:Ht,getComponentPublicInstance:Do},UI=FI,BI=null,$I=null,jI=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const qI="http://www.w3.org/2000/svg",HI="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,Mf=Ln&&Ln.createElement("template"),KI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Ln.createElementNS(qI,t):e==="mathml"?Ln.createElementNS(HI,t):n?Ln.createElement(t,{is:n}):Ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Ln.createTextNode(t),createComment:t=>Ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Mf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hr="transition",Di="animation",Js=Symbol("_vtc"),Pc=(t,{slots:e})=>Cc(Zg,m_(t),e);Pc.displayName="Transition";const p_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},GI=Pc.props=Ye({},hh,p_),Hr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Lf=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function m_(t){const e={};for(const A in t)A in p_||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,C=WI(s),M=C&&C[0],N=C&&C[1],{onBeforeEnter:U,onEnter:D,onEnterCancelled:S,onLeave:O,onLeaveCancelled:x,onBeforeAppear:k=U,onAppear:E=D,onAppearCancelled:_=S}=e,g=(A,w,me)=>{pr(A,w?h:c),pr(A,w?u:o),me&&me()},y=(A,w)=>{A._isLeaving=!1,pr(A,p),pr(A,T),pr(A,m),w&&w()},I=A=>(w,me)=>{const we=A?E:D,te=()=>g(w,A,me);Hr(we,[w,te]),xf(()=>{pr(w,A?l:i),Mn(w,A?h:c),Lf(we)||Ff(w,r,M,te)})};return Ye(e,{onBeforeEnter(A){Hr(U,[A]),Mn(A,i),Mn(A,o)},onBeforeAppear(A){Hr(k,[A]),Mn(A,l),Mn(A,u)},onEnter:I(!1),onAppear:I(!0),onLeave(A,w){A._isLeaving=!0;const me=()=>y(A,w);Mn(A,p),Mn(A,m),__(),xf(()=>{A._isLeaving&&(pr(A,p),Mn(A,T),Lf(O)||Ff(A,r,N,me))}),Hr(O,[A,me])},onEnterCancelled(A){g(A,!1),Hr(S,[A])},onAppearCancelled(A){g(A,!0),Hr(_,[A])},onLeaveCancelled(A){y(A),Hr(x,[A])}})}function WI(t){if(t==null)return null;if(je(t))return[Al(t.enter),Al(t.leave)];{const e=Al(t);return[e,e]}}function Al(t){return Fa(t)}function Mn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Js]||(t[Js]=new Set)).add(e)}function pr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Js];n&&(n.delete(e),n.size||(t[Js]=void 0))}function xf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zI=0;function Ff(t,e,n,r){const s=t._endId=++zI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=g_(t,e);if(!o)return r();const u=o+"end";let h=0;const p=()=>{t.removeEventListener(u,m),i()},m=T=>{T.target===t&&++h>=l&&p()};setTimeout(()=>{h<l&&p()},c+1),t.addEventListener(u,m)}function g_(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${hr}Delay`),i=r(`${hr}Duration`),o=Uf(s,i),c=r(`${Di}Delay`),l=r(`${Di}Duration`),u=Uf(c,l);let h=null,p=0,m=0;e===hr?o>0&&(h=hr,p=o,m=i.length):e===Di?u>0&&(h=Di,p=u,m=l.length):(p=Math.max(o,u),h=p>0?o>u?hr:Di:null,m=h?h===hr?i.length:l.length:0);const T=h===hr&&/\b(transform|all)(,|$)/.test(r(`${hr}Property`).toString());return{type:h,timeout:p,propCount:m,hasTransform:T}}function Uf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Bf(n)+Bf(t[r])))}function Bf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function __(){return document.body.offsetHeight}function QI(t,e,n){const r=t[Js];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Wa=Symbol("_vod"),y_=Symbol("_vsh"),v_={beforeMount(t,{value:e},{transition:n}){t[Wa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ni(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ni(t,!0),r.enter(t)):r.leave(t,()=>{Ni(t,!1)}):Ni(t,e))},beforeUnmount(t,{value:e}){Ni(t,e)}};function Ni(t,e){t.style.display=e?t[Wa]:"none",t[y_]=!e}function YI(){v_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const E_=Symbol("");function ph(t){const e=tr();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>uu(i,s))},r=()=>{const s=t(e.proxy);lu(e.subTree,s),n(s)};gs(()=>{Gg(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Rc(()=>s.disconnect())})}function lu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{lu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)uu(t.el,e);else if(t.type===Ke)t.children.forEach(n=>lu(n,e));else if(t.type===Zr){let{el:n,anchor:r}=t;for(;n&&(uu(n,e),n!==r);)n=n.nextSibling}}function uu(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[E_]=r}}const JI=/(^|;)\s*display\s*:/;function XI(t,e,n){const r=t.style,s=Je(n);let i=!1;if(n&&!s){if(e)if(Je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Sa(r,c,"")}else for(const o in e)n[o]==null&&Sa(r,o,"");for(const o in n)o==="display"&&(i=!0),Sa(r,o,n[o])}else if(s){if(e!==n){const o=r[E_];o&&(n+=";"+o),r.cssText=n,i=JI.test(n)}}else e&&t.removeAttribute("style");Wa in t&&(t[Wa]=i?r.display:"",t[y_]&&(r.display="none"))}const $f=/\s*!important$/;function Sa(t,e,n){if(re(n))n.forEach(r=>Sa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ZI(t,e);$f.test(n)?t.setProperty(Kt(r),n.replace($f,""),"important"):t[r]=n}}const jf=["Webkit","Moz","ms"],bl={};function ZI(t,e){const n=bl[e];if(n)return n;let r=Dt(e);if(r!=="filter"&&r in t)return bl[e]=r;r=bo(r);for(let s=0;s<jf.length;s++){const i=jf[s]+r;if(i in t)return bl[e]=i}return e}const qf="http://www.w3.org/1999/xlink";function Hf(t,e,n,r,s,i=AT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qf,e.slice(6,e.length)):t.setAttributeNS(qf,e,n):n==null||i&&!qm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function eA(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?"":String(n);(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=qm(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function xn(t,e,n,r){t.addEventListener(e,n,r)}function tA(t,e,n,r){t.removeEventListener(e,n,r)}const Kf=Symbol("_vei");function nA(t,e,n,r,s=null){const i=t[Kf]||(t[Kf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=rA(e);if(r){const u=i[e]=oA(r,s);xn(t,c,u,l)}else o&&(tA(t,c,o,l),i[e]=void 0)}}const Gf=/(?:Once|Passive|Capture)$/;function rA(t){let e;if(Gf.test(t)){e={};let r;for(;r=t.match(Gf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kt(t.slice(2)),e]}let Rl=0;const sA=Promise.resolve(),iA=()=>Rl||(sA.then(()=>Rl=0),Rl=Date.now());function oA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wt(aA(r,n.value),e,5,[r])};return n.value=t,n.attached=iA(),n}function aA(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cA=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?QI(t,r,u):e==="style"?XI(t,n,r):Ao(e)?ju(e)||nA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lA(t,e,r,u))?(eA(t,e,r,i,o,c,l),(e==="value"||e==="checked"||e==="selected")&&Hf(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hf(t,e,r,u))};function lA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wf(e)&&Je(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function T_(t,e,n){const r=Co(t,e);class s extends kc{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const uA=(t,e)=>T_(t,e,O_),hA=typeof HTMLElement<"u"?HTMLElement:class{};class kc extends hA{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,So(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),hu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!re(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=Fa(this._props[l])),(c||(c=Object.create(null)))[Dt(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=re(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Dt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=Dt(e);this._numberProps&&this._numberProps[r]&&(n=Fa(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Kt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Kt(e),n+""):n||this.removeAttribute(Kt(e))))}_update(){hu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ce(this._def,Ye({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Kt(i)!==i&&r(Kt(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof kc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function dA(t="$style"){{const e=tr();if(!e)return Be;const n=e.type.__cssModules;if(!n)return Be;const r=n[t];return r||Be}}const w_=new WeakMap,I_=new WeakMap,za=Symbol("_moveCb"),zf=Symbol("_enterCb"),A_={name:"TransitionGroup",props:Ye({},GI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=tr(),r=uh();let s,i;return Ac(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!yA(s[0].el,n.vnode.el,o))return;s.forEach(mA),s.forEach(gA);const c=s.filter(_A);__(),c.forEach(l=>{const u=l.el,h=u.style;Mn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const p=u[za]=m=>{m&&m.target!==u||(!m||/transform$/.test(m.propertyName))&&(u.removeEventListener("transitionend",p),u[za]=null,pr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=ke(t),c=m_(o);let l=o.tag||Ke;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),kr(h,Ys(h,c,r,n)),w_.set(h,h.el.getBoundingClientRect()))}i=e.default?Sc(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&kr(h,Ys(h,c,r,n))}return Ce(l,null,i)}}},fA=t=>delete t.mode;A_.props;const pA=A_;function mA(t){const e=t.el;e[za]&&e[za](),e[zf]&&e[zf]()}function gA(t){I_.set(t,t.el.getBoundingClientRect())}function _A(t){const e=w_.get(t),n=I_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function yA(t,e,n){const r=t.cloneNode(),s=t[Js];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=g_(r);return i.removeChild(r),o}const Dr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Ls(e,n):e};function vA(t){t.target.composing=!0}function Qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rn=Symbol("_assign"),dn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rn]=Dr(s);const i=r||s.props&&s.props.type==="number";xn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=xa(c)),t[rn](c)}),n&&xn(t,"change",()=>{t.value=t.value.trim()}),e||(xn(t,"compositionstart",vA),xn(t,"compositionend",Qf),xn(t,"change",Qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rn]=Dr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?xa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},mh={deep:!0,created(t,e,n){t[rn]=Dr(n),xn(t,"change",()=>{const r=t._modelValue,s=Xs(t),i=t.checked,o=t[rn];if(re(r)){const c=gc(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(fs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(b_(t,i))})},mounted:Yf,beforeUpdate(t,e,n){t[rn]=Dr(n),Yf(t,e,n)}};function Yf(t,{value:e,oldValue:n},r){t._modelValue=e,re(e)?t.checked=gc(e,r.props.value)>-1:fs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Pr(e,b_(t,!0)))}const gh={created(t,{value:e},n){t.checked=Pr(e,n.props.value),t[rn]=Dr(n),xn(t,"change",()=>{t[rn](Xs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[rn]=Dr(r),e!==n&&(t.checked=Pr(e,r.props.value))}},Qa={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=fs(e);xn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xa(Xs(o)):Xs(o));t[rn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,So(()=>{t._assigning=!1})}),t[rn]=Dr(r)},mounted(t,{value:e,modifiers:{number:n}}){Jf(t,e)},beforeUpdate(t,e,n){t[rn]=Dr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Jf(t,e)}};function Jf(t,e,n){const r=t.multiple,s=re(e);if(!(r&&!s&&!fs(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Xs(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(h=>String(h)===String(l)):c.selected=gc(e,l)>-1}else c.selected=e.has(l);else if(Pr(Xs(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xs(t){return"_value"in t?t._value:t.value}function b_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const R_={created(t,e,n){va(t,e,n,null,"created")},mounted(t,e,n){va(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){va(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){va(t,e,n,r,"updated")}};function S_(t,e){switch(t){case"SELECT":return Qa;case"TEXTAREA":return dn;default:switch(e){case"checkbox":return mh;case"radio":return gh;default:return dn}}}function va(t,e,n,r,s){const o=S_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function EA(){dn.getSSRProps=({value:t})=>({value:t}),gh.getSSRProps=({value:t},e)=>{if(e.props&&Pr(e.props.value,t))return{checked:!0}},mh.getSSRProps=({value:t},e)=>{if(re(t)){if(e.props&&gc(t,e.props.value)>-1)return{checked:!0}}else if(fs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},R_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=S_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const TA=["ctrl","shift","alt","meta"],wA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>TA.some(n=>t[`${n}Key`]&&!e.includes(n))},IA=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=wA[e[o]];if(c&&c(s,e))return}return t(s,...i)})},AA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Kt(s.key);if(e.some(o=>o===i||AA[o]===i))return t(s)})},C_=Ye({patchProp:cA},KI);let zi,Xf=!1;function P_(){return zi||(zi=Ug(C_))}function k_(){return zi=Xf?zi:Bg(C_),Xf=!0,zi}const hu=(...t)=>{P_().render(...t)},O_=(...t)=>{k_().hydrate(...t)},D_=(...t)=>{const e=P_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=V_(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,N_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},bA=(...t)=>{const e=k_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=V_(r);if(s)return n(s,!0,N_(s))},e};function N_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function V_(t){return Je(t)?document.querySelector(t):t}let Zf=!1;const RA=()=>{Zf||(Zf=!0,EA(),YI())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const SA=()=>{},CA=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Zg,BaseTransitionPropsValidators:hh,Comment:pt,DeprecationTypes:jI,EffectScope:Gu,ErrorCodes:uw,ErrorTypeStrings:MI,Fragment:Ke,KeepAlive:mI,ReactiveEffect:zs,Static:Zr,Suspense:bw,Teleport:TI,Text:ts,TrackOpTypes:aw,Transition:Pc,TransitionGroup:pA,TriggerOpTypes:cw,VueElement:kc,assertNumber:lw,callWithAsyncErrorHandling:Wt,callWithErrorHandling:Hn,camelize:Dt,capitalize:bo,cloneVNode:Pn,compatUtils:$I,compile:SA,computed:tn,createApp:D_,createBlock:Ir,createCommentVNode:en,createElementBlock:Ae,createElementVNode:P,createHydrationRenderer:Bg,createPropsRestProxy:Ww,createRenderer:Ug,createSSRApp:bA,createSlots:Ow,createStaticVNode:dh,createTextVNode:un,createVNode:Ce,customRef:ug,defineAsyncComponent:Dw,defineComponent:Co,defineCustomElement:T_,defineEmits:xw,defineExpose:Fw,defineModel:$w,defineOptions:Uw,defineProps:Lw,defineSSRCustomElement:uA,defineSlots:Bw,devtools:LI,effect:PT,effectScope:RT,getCurrentInstance:tr,getCurrentScope:Gm,getTransitionRawChildren:Sc,guardReactiveProps:i_,h:Cc,handleError:ms,hasInjectionContext:nI,hydrate:O_,initCustomFormatter:DI,initDirectivesForSSR:RA,inject:zt,isMemoSame:d_,isProxy:Xu,isReactive:xs,isReadonly:Qs,isRef:tt,isRuntimeOnly:CI,isShallow:so,isVNode:Or,markRaw:og,mergeDefaults:Kw,mergeModels:Gw,mergeProps:o_,nextTick:So,normalizeClass:It,normalizeProps:wT,normalizeStyle:ps,onActivated:Qg,onBeforeMount:Tg,onBeforeUnmount:bc,onBeforeUpdate:wg,onDeactivated:Yg,onErrorCaptured:Rg,onMounted:gs,onRenderTracked:bg,onRenderTriggered:Ag,onScopeDispose:ST,onServerPrefetch:Ig,onUnmounted:Rc,onUpdated:Ac,openBlock:ye,popScopeId:Zn,provide:js,proxyRefs:th,pushScopeId:Xn,queuePostFlushCb:Ba,reactive:Ro,readonly:Ju,ref:Ie,registerRuntimeCompiler:SI,render:hu,renderList:An,renderSlot:Nw,resolveComponent:_g,resolveDirective:Iw,resolveDynamicComponent:vg,resolveFilter:BI,resolveTransitionHooks:Ys,setBlockTracking:ru,setDevtoolsHook:xI,setTransitionHooks:kr,shallowReactive:Yu,shallowReadonly:YT,shallowRef:cg,ssrContextKey:Hg,ssrUtils:UI,stop:kT,toDisplayString:Fe,toHandlerKey:Hi,toHandlers:Vw,toRaw:ke,toRef:ow,toRefs:rw,toValue:ew,transformVNodeArgs:wI,triggerRef:ZT,unref:ot,useAttrs:Hw,useCssModule:dA,useCssVars:ph,useModel:OI,useSSRContext:Kg,useSlots:qw,useTransitionState:uh,vModelCheckbox:mh,vModelDynamic:R_,vModelRadio:gh,vModelSelect:Qa,vModelText:dn,vShow:v_,version:f_,warn:VI,watch:qs,watchEffect:dI,watchPostEffect:Gg,watchSyncEffect:Wg,withAsyncContext:zw,withCtx:Zt,withDefaults:jw,withDirectives:bn,withKeys:Oc,withMemo:NI,withModifiers:IA,withScopeId:_w},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof document<"u";function PA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ue=Object.assign;function Sl(t,e){const n={};for(const r in e){const s=e[r];n[r]=gn(s)?s.map(t):t(s)}return n}const Qi=()=>{},gn=Array.isArray,M_=/#/g,kA=/&/g,OA=/\//g,DA=/=/g,NA=/\?/g,L_=/\+/g,VA=/%5B/g,MA=/%5D/g,x_=/%5E/g,LA=/%60/g,F_=/%7B/g,xA=/%7C/g,U_=/%7D/g,FA=/%20/g;function _h(t){return encodeURI(""+t).replace(xA,"|").replace(VA,"[").replace(MA,"]")}function UA(t){return _h(t).replace(F_,"{").replace(U_,"}").replace(x_,"^")}function du(t){return _h(t).replace(L_,"%2B").replace(FA,"+").replace(M_,"%23").replace(kA,"%26").replace(LA,"`").replace(F_,"{").replace(U_,"}").replace(x_,"^")}function BA(t){return du(t).replace(DA,"%3D")}function $A(t){return _h(t).replace(M_,"%23").replace(NA,"%3F")}function jA(t){return t==null?"":$A(t).replace(OA,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const qA=/\/$/,HA=t=>t.replace(qA,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ho(o)}}function KA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ep(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zs(e.matched[r],n.matched[s])&&B_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function B_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WA(t[n],e[n]))return!1;return!0}function WA(t,e){return gn(t)?tp(t,e):gn(e)?tp(e,t):t===e}function tp(t,e){return gn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var fo;(function(t){t.pop="pop",t.push="push"})(fo||(fo={}));var Yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yi||(Yi={}));function QA(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HA(t)}const YA=/^[^#]+#/;function JA(t,e){return t.replace(YA,"#")+e}function XA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dc=()=>({left:window.scrollX,top:window.scrollY});function ZA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function np(t,e){return(history.state?history.state.position-e:-1)+t}const fu=new Map;function eb(t,e){fu.set(t,e)}function tb(t){const e=fu.get(t);return fu.delete(t),e}let nb=()=>location.protocol+"//"+location.host;function $_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),ep(l,"")}return ep(n,t)+r+s}function rb(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const T=$_(t,location),C=n.value,M=e.value;let N=0;if(m){if(n.value=T,e.value=m,o&&o===C){o=null;return}N=M?m.position-M.position:0}else r(T);s.forEach(U=>{U(n.value,C,{delta:N,type:fo.pop,direction:N?N>0?Yi.forward:Yi.back:Yi.unknown})})};function l(){o=n.value}function u(m){s.push(m);const T=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(T),T}function h(){const{history:m}=window;m.state&&m.replaceState(Ue({},m.state,{scroll:Dc()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function rp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dc():null}}function sb(t){const{history:e,location:n}=window,r={value:$_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:nb()+t+l;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(T){console.error(T),n[h?"replace":"assign"](m)}}function o(l,u){const h=Ue({},e.state,rp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=Ue({},s.value,e.state,{forward:l,scroll:Dc()});i(h.current,h,!0);const p=Ue({},rp(r.value,l,null),{position:h.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function ib(t){t=QA(t);const e=sb(t),n=rb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ue({location:"",base:t,go:r,createHref:JA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ob(t){return typeof t=="string"||t&&typeof t=="object"}function j_(t){return typeof t=="string"||typeof t=="symbol"}const dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q_=Symbol("");var sp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sp||(sp={}));function ei(t,e){return Ue(new Error,{type:t,[q_]:!0},e)}function Vn(t,e){return t instanceof Error&&q_ in t&&(e==null||!!(t.type&e))}const ip="[^/]+?",ab={sensitive:!1,strict:!1,start:!0,end:!0},cb=/[.+*?^${}()[\]/\\]/g;function lb(t,e){const n=Ue({},ab,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let T=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(cb,"\\$&"),T+=40;else if(m.type===1){const{value:C,repeatable:M,optional:N,regexp:U}=m;i.push({name:C,repeatable:M,optional:N});const D=U||ip;if(D!==ip){T+=10;try{new RegExp(`(${D})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${D}): `+O.message)}}let S=M?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(S=N&&u.length<2?`(?:/${S})`:"/"+S),N&&(S+="?"),s+=S,T+=20,N&&(T+=-8),M&&(T+=-20),D===".*"&&(T+=-50)}h.push(T)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),p={};if(!h)return null;for(let m=1;m<h.length;m++){const T=h[m]||"",C=i[m-1];p[C.name]=T&&C.repeatable?T.split("/"):T}return p}function l(u){let h="",p=!1;for(const m of t){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const T of m)if(T.type===0)h+=T.value;else if(T.type===1){const{value:C,repeatable:M,optional:N}=T,U=C in u?u[C]:"";if(gn(U)&&!M)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const D=gn(U)?U.join("/"):U;if(!D)if(N)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);h+=D}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ub(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function H_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ub(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(op(r))return 1;if(op(s))return-1}return s.length-r.length}function op(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hb={type:0,value:""},db=/[a-zA-Z0-9_]/;function fb(t){if(!t)return[[]];if(t==="/")return[[hb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${u}": ${T}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:db.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function pb(t,e,n){const r=lb(fb(t.path),n),s=Ue(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mb(t,e){const n=[],r=new Map;e=lp({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,m){const T=!m,C=gb(h);C.aliasOf=m&&m.record;const M=lp(e,h),N=[C];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const O of S)N.push(Ue({},C,{components:m?m.record.components:C.components,path:O,aliasOf:m?m.record:C}))}let U,D;for(const S of N){const{path:O}=S;if(p&&O[0]!=="/"){const x=p.record.path,k=x[x.length-1]==="/"?"":"/";S.path=p.record.path+(O&&k+O)}if(U=pb(S,p,M),m?m.alias.push(U):(D=D||U,D!==U&&D.alias.push(U),T&&h.name&&!cp(U)&&o(h.name)),K_(U)&&l(U),C.children){const x=C.children;for(let k=0;k<x.length;k++)i(x[k],U,m&&m.children[k])}m=m||U}return D?()=>{o(D)}:Qi}function o(h){if(j_(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function l(h){const p=vb(h,n);n.splice(p,0,h),h.record.name&&!cp(h)&&r.set(h.record.name,h)}function u(h,p){let m,T={},C,M;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw ei(1,{location:h});M=m.record.name,T=Ue(ap(p.params,m.keys.filter(D=>!D.optional).concat(m.parent?m.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),h.params&&ap(h.params,m.keys.map(D=>D.name))),C=m.stringify(T)}else if(h.path!=null)C=h.path,m=n.find(D=>D.re.test(C)),m&&(T=m.parse(C),M=m.record.name);else{if(m=p.name?r.get(p.name):n.find(D=>D.re.test(p.path)),!m)throw ei(1,{location:h,currentLocation:p});M=m.record.name,T=Ue({},p.params,h.params),C=m.stringify(T)}const N=[];let U=m;for(;U;)N.unshift(U.record),U=U.parent;return{name:M,path:C,params:T,matched:N,meta:yb(N)}}return t.forEach(h=>i(h)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function ap(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_b(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _b(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yb(t){return t.reduce((e,n)=>Ue(e,n.meta),{})}function lp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;H_(t,e[i])<0?r=i:n=i+1}const s=Eb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Eb(t){let e=t;for(;e=e.parent;)if(K_(e)&&H_(t,e)===0)return e}function K_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Tb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(L_," "),o=i.indexOf("="),c=ho(o<0?i:i.slice(0,o)),l=o<0?null:ho(i.slice(o+1));if(c in e){let u=e[c];gn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function up(t){let e="";for(let n in t){const r=t[n];if(n=BA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(gn(r)?r.map(i=>i&&du(i)):[r&&du(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=gn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ib=Symbol(""),hp=Symbol(""),Nc=Symbol(""),yh=Symbol(""),pu=Symbol("");function Vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function yr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(ei(4,{from:n,to:e})):m instanceof Error?l(m):ob(m)?l(ei(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(h);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Pl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Ab(l)){const h=(l.__vccOpts||l)[e];h&&i.push(yr(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=PA(h)?h.default:h;o.components[c]=p;const T=(p.__vccOpts||p)[e];return T&&yr(T,n,r,o,c,s)()}))}}return i}function Ab(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function dp(t){const e=zt(Nc),n=zt(yh),r=tn(()=>{const l=ot(t.to);return e.resolve(l)}),s=tn(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],p=n.matched;if(!h||!p.length)return-1;const m=p.findIndex(Zs.bind(null,h));if(m>-1)return m;const T=fp(l[u-2]);return u>1&&fp(h)===T&&p[p.length-1].path!==T?p.findIndex(Zs.bind(null,l[u-2])):m}),i=tn(()=>s.value>-1&&Sb(n.params,r.value.params)),o=tn(()=>s.value>-1&&s.value===n.matched.length-1&&B_(n.params,r.value.params));function c(l={}){return Rb(l)?e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(Qi):Promise.resolve()}return{route:r,href:tn(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const bb=Co({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dp,setup(t,{slots:e}){const n=Ro(dp(t)),{options:r}=zt(Nc),s=tn(()=>({[pp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),mu=bb;function Rb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Sb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!gn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pp=(t,e,n)=>t??e??n,Cb=Co({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(pu),s=tn(()=>t.route||r.value),i=zt(hp,0),o=tn(()=>{let u=ot(i);const{matched:h}=s.value;let p;for(;(p=h[u])&&!p.components;)u++;return u}),c=tn(()=>s.value.matched[o.value]);js(hp,tn(()=>o.value+1)),js(Ib,c),js(pu,s);const l=Ie();return qs(()=>[l.value,c.value,t.name],([u,h,p],[m,T,C])=>{h&&(h.instances[p]=u,T&&T!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=T.leaveGuards),h.updateGuards.size||(h.updateGuards=T.updateGuards))),u&&h&&(!T||!Zs(h,T)||!m)&&(h.enterCallbacks[p]||[]).forEach(M=>M(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,p=c.value,m=p&&p.components[h];if(!m)return mp(n.default,{Component:m,route:u});const T=p.props[h],C=T?T===!0?u.params:typeof T=="function"?T(u):T:null,N=Cc(m,Ue({},C,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[h]=null)},ref:l}));return mp(n.default,{Component:N,route:u})||N}}});function mp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const G_=Cb;function Pb(t){const e=mb(t.routes,t),n=t.parseQuery||Tb,r=t.stringifyQuery||up,s=t.history,i=Vi(),o=Vi(),c=Vi(),l=cg(dr);let u=dr;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Sl.bind(null,$=>""+$),p=Sl.bind(null,jA),m=Sl.bind(null,ho);function T($,ee){let J,se;return j_($)?(J=e.getRecordMatcher($),se=ee):se=$,e.addRoute(se,J)}function C($){const ee=e.getRecordMatcher($);ee&&e.removeRoute(ee)}function M(){return e.getRoutes().map($=>$.record)}function N($){return!!e.getRecordMatcher($)}function U($,ee){if(ee=Ue({},ee||l.value),typeof $=="string"){const R=Cl(n,$,ee.path),L=e.resolve({path:R.path},ee),j=s.createHref(R.fullPath);return Ue(R,L,{params:m(L.params),hash:ho(R.hash),redirectedFrom:void 0,href:j})}let J;if($.path!=null)J=Ue({},$,{path:Cl(n,$.path,ee.path).path});else{const R=Ue({},$.params);for(const L in R)R[L]==null&&delete R[L];J=Ue({},$,{params:p(R)}),ee.params=p(ee.params)}const se=e.resolve(J,ee),Re=$.hash||"";se.params=h(m(se.params));const $e=KA(r,Ue({},$,{hash:UA(Re),path:se.path})),b=s.createHref($e);return Ue({fullPath:$e,hash:Re,query:r===up?wb($.query):$.query||{}},se,{redirectedFrom:void 0,href:b})}function D($){return typeof $=="string"?Cl(n,$,l.value.path):Ue({},$)}function S($,ee){if(u!==$)return ei(8,{from:ee,to:$})}function O($){return E($)}function x($){return O(Ue(D($),{replace:!0}))}function k($){const ee=$.matched[$.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let se=typeof J=="function"?J($):J;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=D(se):{path:se},se.params={}),Ue({query:$.query,hash:$.hash,params:se.path!=null?{}:$.params},se)}}function E($,ee){const J=u=U($),se=l.value,Re=$.state,$e=$.force,b=$.replace===!0,R=k(J);if(R)return E(Ue(D(R),{state:typeof R=="object"?Ue({},Re,R.state):Re,force:$e,replace:b}),ee||J);const L=J;L.redirectedFrom=ee;let j;return!$e&&GA(r,se,J)&&(j=ei(16,{to:L,from:se}),fe(se,se,!0,!1)),(j?Promise.resolve(j):y(L,se)).catch(B=>Vn(B)?Vn(B,2)?B:ue(B):Z(B,L,se)).then(B=>{if(B){if(Vn(B,2))return E(Ue({replace:b},D(B.to),{state:typeof B.to=="object"?Ue({},Re,B.to.state):Re,force:$e}),ee||L)}else B=A(L,se,!0,b,Re);return I(L,se,B),B})}function _($,ee){const J=S($,ee);return J?Promise.reject(J):Promise.resolve()}function g($){const ee=ir.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext($):$()}function y($,ee){let J;const[se,Re,$e]=kb($,ee);J=Pl(se.reverse(),"beforeRouteLeave",$,ee);for(const R of se)R.leaveGuards.forEach(L=>{J.push(yr(L,$,ee))});const b=_.bind(null,$,ee);return J.push(b),ht(J).then(()=>{J=[];for(const R of i.list())J.push(yr(R,$,ee));return J.push(b),ht(J)}).then(()=>{J=Pl(Re,"beforeRouteUpdate",$,ee);for(const R of Re)R.updateGuards.forEach(L=>{J.push(yr(L,$,ee))});return J.push(b),ht(J)}).then(()=>{J=[];for(const R of $e)if(R.beforeEnter)if(gn(R.beforeEnter))for(const L of R.beforeEnter)J.push(yr(L,$,ee));else J.push(yr(R.beforeEnter,$,ee));return J.push(b),ht(J)}).then(()=>($.matched.forEach(R=>R.enterCallbacks={}),J=Pl($e,"beforeRouteEnter",$,ee,g),J.push(b),ht(J))).then(()=>{J=[];for(const R of o.list())J.push(yr(R,$,ee));return J.push(b),ht(J)}).catch(R=>Vn(R,8)?R:Promise.reject(R))}function I($,ee,J){c.list().forEach(se=>g(()=>se($,ee,J)))}function A($,ee,J,se,Re){const $e=S($,ee);if($e)return $e;const b=ee===dr,R=Ps?history.state:{};J&&(se||b?s.replace($.fullPath,Ue({scroll:b&&R&&R.scroll},Re)):s.push($.fullPath,Re)),l.value=$,fe($,ee,J,b),ue()}let w;function me(){w||(w=s.listen(($,ee,J)=>{if(!Tn.listening)return;const se=U($),Re=k(se);if(Re){E(Ue(Re,{replace:!0}),se).catch(Qi);return}u=se;const $e=l.value;Ps&&eb(np($e.fullPath,J.delta),Dc()),y(se,$e).catch(b=>Vn(b,12)?b:Vn(b,2)?(E(b.to,se).then(R=>{Vn(R,20)&&!J.delta&&J.type===fo.pop&&s.go(-1,!1)}).catch(Qi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Z(b,se,$e))).then(b=>{b=b||A(se,$e,!1),b&&(J.delta&&!Vn(b,8)?s.go(-J.delta,!1):J.type===fo.pop&&Vn(b,20)&&s.go(-1,!1)),I(se,$e,b)}).catch(Qi)}))}let we=Vi(),te=Vi(),le;function Z($,ee,J){ue($);const se=te.list();return se.length?se.forEach(Re=>Re($,ee,J)):console.error($),Promise.reject($)}function Ee(){return le&&l.value!==dr?Promise.resolve():new Promise(($,ee)=>{we.add([$,ee])})}function ue($){return le||(le=!$,me(),we.list().forEach(([ee,J])=>$?J($):ee()),we.reset()),$}function fe($,ee,J,se){const{scrollBehavior:Re}=t;if(!Ps||!Re)return Promise.resolve();const $e=!J&&tb(np($.fullPath,0))||(se||!J)&&history.state&&history.state.scroll||null;return So().then(()=>Re($,ee,$e)).then(b=>b&&ZA(b)).catch(b=>Z(b,$,ee))}const Ve=$=>s.go($);let Me;const ir=new Set,Tn={currentRoute:l,listening:!0,addRoute:T,removeRoute:C,hasRoute:N,getRoutes:M,resolve:U,options:t,push:O,replace:x,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:te.add,isReady:Ee,install($){const ee=this;$.component("RouterLink",mu),$.component("RouterView",G_),$.config.globalProperties.$router=ee,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(l)}),Ps&&!Me&&l.value===dr&&(Me=!0,O(s.location).catch(Re=>{}));const J={};for(const Re in dr)Object.defineProperty(J,Re,{get:()=>l.value[Re],enumerable:!0});$.provide(Nc,ee),$.provide(yh,Yu(J)),$.provide(pu,l);const se=$.unmount;ir.add($),$.unmount=function(){ir.delete($),ir.size<1&&(u=dr,w&&w(),w=null,l.value=dr,Me=!1,le=!1),se()}}};function ht($){return $.reduce((ee,J)=>ee.then(()=>g(J)),Promise.resolve())}return Tn}function kb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Zs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Zs(u,l))||s.push(l))}return[n,r,s]}function No(){return zt(Nc)}function vh(){return zt(yh)}var gp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ob=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},z_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,T=u&63;l||(T=64,o||(m=64)),r.push(n[h],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ob(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Db;const m=i<<2|c>>4;if(r.push(m),u!==64){const T=c<<4&240|u>>2;if(r.push(T),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nb=function(t){const e=W_(t);return z_.encodeByteArray(e,!0)},Ya=function(t){return Nb(t).replace(/\./g,"")},Q_=function(t){try{return z_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=()=>Vb().__FIREBASE_DEFAULTS__,Lb=()=>{if(typeof process>"u"||typeof gp>"u")return;const t=gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Q_(t[1]);return e&&JSON.parse(e)},Vc=()=>{try{return Mb()||Lb()||xb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y_=t=>{var e,n;return(n=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fb=t=>{const e=Y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},J_=()=>{var t;return(t=Vc())===null||t===void 0?void 0:t.config},X_=t=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $b(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function jb(){var t;const e=(t=Vc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Z_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hb(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kb(){return!jb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ey(){try{return typeof indexedDB=="object"}catch{return!1}}function ty(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Gb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wb,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zb(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vn(s,c,r)}}function zb(t,e){return t.replace(Qb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qb=/\{\$([^}]+)}/g;function Yb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(_p(i)&&_p(o)){if(!po(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function _p(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jb(t,e){const n=new Xb(t,e);return n.subscribe.bind(n)}class Xb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kl),s.error===void 0&&(s.error=kl),s.complete===void 0&&(s.complete=kl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=1e3,t0=2,n0=4*60*60*1e3,r0=.5;function yp(t,e=e0,n=t0){const r=e*Math.pow(n,t),s=Math.round(r0*r*(Math.random()-.5)*2);return Math.min(n0,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ub;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o0(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:i0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i0(t){return t===Kr?void 0:t}function o0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new s0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const c0={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},l0=Se.INFO,u0={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},h0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=u0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=l0,this._logHandler=h0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const d0=(t,e)=>e.some(n=>t instanceof n);let vp,Ep;function f0(){return vp||(vp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p0(){return Ep||(Ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ny=new WeakMap,gu=new WeakMap,ry=new WeakMap,Ol=new WeakMap,Eh=new WeakMap;function m0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ny.set(n,t)}).catch(()=>{}),Eh.set(e,t),e}function g0(t){if(gu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gu.set(t,e)}let _u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ry.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _0(t){_u=t(_u)}function y0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dl(this),e,...n);return ry.set(r,e.sort?e.sort():[e]),Rr(r)}:p0().includes(t)?function(...e){return t.apply(Dl(this),e),Rr(ny.get(this))}:function(...e){return Rr(t.apply(Dl(this),e))}}function v0(t){return typeof t=="function"?y0(t):(t instanceof IDBTransaction&&g0(t),d0(t,f0())?new Proxy(t,_u):t)}function Rr(t){if(t instanceof IDBRequest)return m0(t);if(Ol.has(t))return Ol.get(t);const e=v0(t);return e!==t&&(Ol.set(t,e),Eh.set(e,t)),e}const Dl=t=>Eh.get(t);function sy(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const E0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],Nl=new Map;function Tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nl.get(e))return Nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=T0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||E0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Nl.set(e,i),i}_0(t=>({...t,get:(e,n,r)=>Tp(e,n)||t.get(e,n,r),has:(e,n)=>!!Tp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function I0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",wp="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Mc("@firebase/app"),A0="@firebase/app-compat",b0="@firebase/analytics-compat",R0="@firebase/analytics",S0="@firebase/app-check-compat",C0="@firebase/app-check",P0="@firebase/auth",k0="@firebase/auth-compat",O0="@firebase/database",D0="@firebase/database-compat",N0="@firebase/functions",V0="@firebase/functions-compat",M0="@firebase/installations",L0="@firebase/installations-compat",x0="@firebase/messaging",F0="@firebase/messaging-compat",U0="@firebase/performance",B0="@firebase/performance-compat",$0="@firebase/remote-config",j0="@firebase/remote-config-compat",q0="@firebase/storage",H0="@firebase/storage-compat",K0="@firebase/firestore",G0="@firebase/vertexai-preview",W0="@firebase/firestore-compat",z0="firebase",Q0="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="[DEFAULT]",Y0={[yu]:"fire-core",[A0]:"fire-core-compat",[R0]:"fire-analytics",[b0]:"fire-analytics-compat",[C0]:"fire-app-check",[S0]:"fire-app-check-compat",[P0]:"fire-auth",[k0]:"fire-auth-compat",[O0]:"fire-rtdb",[D0]:"fire-rtdb-compat",[N0]:"fire-fn",[V0]:"fire-fn-compat",[M0]:"fire-iid",[L0]:"fire-iid-compat",[x0]:"fire-fcm",[F0]:"fire-fcm-compat",[U0]:"fire-perf",[B0]:"fire-perf-compat",[$0]:"fire-rc",[j0]:"fire-rc-compat",[q0]:"fire-gcs",[H0]:"fire-gcs-compat",[K0]:"fire-fst",[W0]:"fire-fst-compat",[G0]:"fire-vertex","fire-js":"fire-js",[z0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map,J0=new Map,Eu=new Map;function Ip(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kn(t){const e=t.name;if(Eu.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;Eu.set(e,t);for(const n of Ja.values())Ip(n,t);for(const n of J0.values())Ip(n,t);return!0}function ys(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sr=new _s("app","Firebase",X0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=Q0;function iy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Sr.create("bad-app-name",{appName:String(s)});if(n||(n=J_()),!n)throw Sr.create("no-options");const i=Ja.get(s);if(i){if(po(n,i.options)&&po(r,i.config))return i;throw Sr.create("duplicate-app",{appName:s})}const o=new a0(s);for(const l of Eu.values())o.addComponent(l);const c=new Z0(n,r,o);return Ja.set(s,c),c}function Th(t=vu){const e=Ja.get(t);if(!e&&t===vu&&J_())return iy();if(!e)throw Sr.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let s=(r=Y0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(c.join(" "));return}kn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="firebase-heartbeat-database",tR=1,mo="firebase-heartbeat-store";let Vl=null;function oy(){return Vl||(Vl=sy(eR,tR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(mo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Vl}async function nR(t){try{const n=(await oy()).transaction(mo),r=await n.objectStore(mo).get(ay(t));return await n.done,r}catch(e){if(e instanceof vn)ss.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function Ap(t,e){try{const r=(await oy()).transaction(mo,"readwrite");await r.objectStore(mo).put(e,ay(t)),await r.done}catch(n){if(n instanceof vn)ss.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function ay(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=1024,sR=30*24*60*60*1e3;class iR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=sR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bp(),{heartbeatsToSend:r,unsentEntries:s}=oR(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bp(){return new Date().toISOString().substring(0,10)}function oR(t,e=rR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rp(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ey()?ty().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ap(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rp(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){kn(new _n("platform-logger",e=>new w0(e),"PRIVATE")),kn(new _n("heartbeat",e=>new iR(e),"PRIVATE")),sn(yu,wp,t),sn(yu,wp,"esm2017"),sn("fire-js","")}cR("");function wh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function cy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lR=cy,ly=new _s("auth","Firebase",cy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Mc("@firebase/auth");function uR(t,...e){Xa.logLevel<=Se.WARN&&Xa.warn(`Auth (${li}): ${t}`,...e)}function Ca(t,...e){Xa.logLevel<=Se.ERROR&&Xa.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,...e){throw Ah(t,...e)}function fn(t,...e){return Ah(t,...e)}function Ih(t,e,n){const r=Object.assign(Object.assign({},lR()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function Kn(t){return Ih(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),Ih(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ah(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ly.create(t,...e)}function ge(t,e,...n){if(!t)throw Ah(e,...n)}function Fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ca(e),new Error(e)}function zn(t,e){t||Fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dR(){return Sp()==="http:"||Sp()==="https:"}function Sp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dR()||Z_()||"connection"in navigator)?navigator.onLine:!0}function pR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=$b()||qb()}get(){return fR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new Mo(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rr(t,e,n,r,s={}){return hy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),uy.fetch()(dy(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mR),e);try{const s=new yR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ih(t,h,u);on(t,h)}}catch(s){if(s instanceof vn)throw s;on(t,"network-request-failed",{message:String(s)})}}async function Lo(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bh(t.config,s):`${t.config.apiScheme}://${s}`}function _R(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),gR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function Cp(t){return t!==void 0&&t.enterprise!==void 0}class vR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _R(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ER(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function fy(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wR(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=Rh(r);ge(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ji(Ml(s.auth_time)),issuedAtTime:Ji(Ml(s.iat)),expirationTime:Ji(Ml(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ml(t){return Number(t)*1e3}function Rh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=Q_(n);return s?JSON.parse(s):(Ca("Failed to decode base64 JWT payload"),null)}catch(s){return Ca("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pp(t){const e=Rh(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&IR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t){var e;const n=t.auth,r=await t.getIdToken(),s=await go(t,fy(n,{idToken:r}));ge(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?py(i.providerUserInfo):[],c=RR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function bR(t){const e=at(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function py(t){return t.map(e=>{var{providerId:n}=e,r=wh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e){const n=await hy(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",uy.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CR(t,e){return rr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=Pp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hs;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return Fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await go(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wR(this,e)}reload(){return bR(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await go(this,TR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:O,isAnonymous:x,providerData:k,stsTokenManager:E}=n;ge(S&&E,e,"internal-error");const _=Hs.fromJSON(this.name,E);ge(typeof S=="string",e,"internal-error"),fr(p,e.name),fr(m,e.name),ge(typeof O=="boolean",e,"internal-error"),ge(typeof x=="boolean",e,"internal-error"),fr(T,e.name),fr(C,e.name),fr(M,e.name),fr(N,e.name),fr(U,e.name),fr(D,e.name);const g=new Un({uid:S,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:x,photoURL:C,phoneNumber:T,tenantId:M,stsTokenManager:_,createdAt:U,lastLoginAt:D});return k&&Array.isArray(k)&&(g.providerData=k.map(y=>Object.assign({},y))),N&&(g._redirectEventId=N),g}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hs;s.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Za(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?py(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Hs;c.updateFromIdToken(r);const l=new Un({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp=new Map;function Bn(t){zn(t instanceof Function,"Expected a class definition");let e=kp.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}my.type="NONE";const Op=my;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(Bn(Op),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Bn(Op);const o=Pa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){const p=Un._fromJSON(e,h);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ks(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ks(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ey(e))return"Blackberry";if(Ty(e))return"Webos";if(Sh(e))return"Safari";if((e.includes("chrome/")||_y(e))&&!e.includes("edge/"))return"Chrome";if(vy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gy(t=vt()){return/firefox\//i.test(t)}function Sh(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _y(t=vt()){return/crios\//i.test(t)}function yy(t=vt()){return/iemobile/i.test(t)}function vy(t=vt()){return/android/i.test(t)}function Ey(t=vt()){return/blackberry/i.test(t)}function Ty(t=vt()){return/webos/i.test(t)}function Lc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PR(t=vt()){var e;return Lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kR(){return Hb()&&document.documentMode===10}function wy(t=vt()){return Lc(t)||vy(t)||Ty(t)||Ey(t)||/windows phone/i.test(t)||yy(t)}function OR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t,e=[]){let n;switch(t){case"Browser":n=Dp(vt());break;case"Worker":n=`${Dp(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e={}){return rr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=6;class MR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:VR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Np(this),this.idTokenSubscription=new Np(this),this.beforeStateQueue=new DR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ly,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fy(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Kn(this));const n=e?at(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NR(this),n=new MR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bn(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[Bn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function sr(t){return at(t)}class Np{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jb(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xR(t){xc=t}function Ay(t){return xc.loadJS(t)}function FR(){return xc.recaptchaEnterpriseScript}function UR(){return xc.gapiScript}function BR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $R="recaptcha-enterprise",jR="NO_RECAPTCHA";class qR{constructor(e){this.type=$R,this.auth=sr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{ER(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new vR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Cp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(jR)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Cp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FR();l.length!==0&&(l+=c),Ay(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Vp(t,e,n,r=!1){const s=new qR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ec(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Vp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Vp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t,e){const n=ys(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(po(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function KR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GR(t,e,n){const r=sr(t);ge(r._canInitEmulator,r,"emulator-config-failed"),ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=by(e),{host:o,port:c}=WR(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zR()}function by(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WR(t){const e=by(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mp(o)}}}function Mp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Fn("not implemented")}_getIdTokenResponse(e){return Fn("not implemented")}_linkToIdToken(e,n){return Fn("not implemented")}_getReauthenticationResolver(e){return Fn("not implemented")}}async function QR(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e){return Lo(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function JR(t,e){return rr(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function XR(t,e){return JR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e){return Lo(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function eS(t,e){return Lo(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Ch{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ec(e,n,"signInWithPassword",YR);case"emailLink":return ZR(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ec(e,r,"signUpPassword",QR);case"emailLink":return eS(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(t,e){return Lo(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="http://localhost";class is extends Ch{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gs(e,n)}buildRequest(){const e={requestUri:tS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rS(t){const e=Fi(Ui(t)).link,n=e?Fi(Ui(e)).deep_link_id:null,r=Fi(Ui(t)).deep_link_id;return(r?Fi(Ui(r)).link:null)||r||n||e||t}class Ph{constructor(e){var n,r,s,i,o,c;const l=Fi(Ui(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=nS((s=l.mode)!==null&&s!==void 0?s:null);ge(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=rS(e);try{return new Ph(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ph.parseLink(n);return ge(r,"argument-error"),_o._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends kh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends xo{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends xo{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.GITHUB_SIGN_IN_METHOD="github.com";Tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends xo{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(t,e){return Lo(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Un._fromIdTokenResponse(e,r,s),o=Lp(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Lp(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Lp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new tc(e,n,r,s)}}function Ry(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(t,i,e,r):i})}async function iS(t,e,n=!1){const r=await go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(Kn(r));const s="reauthenticate";try{const i=await go(t,Ry(r,s,e,t),n);ge(i.idToken,r,"internal-error");const o=Rh(i.idToken);ge(o,r,"internal-error");const{sub:c}=o;return ge(t.uid===c,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(t,e,n=!1){if(hn(t.app))return Promise.reject(Kn(t));const r="signIn",s=await Ry(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function aS(t,e){return Sy(sr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cy(t){const e=sr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cS(t,e,n){const r=sr(t);await ec(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",XR)}async function lS(t,e,n){if(hn(t.app))return Promise.reject(Kn(t));const r=sr(t),o=await ec(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Cy(t),l}),c=await os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function uS(t,e,n){return hn(t.app)?Promise.reject(Kn(t)):aS(at(t),ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Cy(t),r})}function hS(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function dS(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function Py(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function fS(t){return at(t).signOut()}const nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){const t=vt();return Sh(t)||Lc(t)}const mS=1e3,gS=10;class Oy extends ky{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pS()&&OR(),this.fallbackToPolling=wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oy.type="LOCAL";const _S=Oy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy extends ky{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dy.type="SESSION";const Ny=Dy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await yS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Oh("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function ES(t){Rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function TS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IS(){return Vy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="firebaseLocalStorageDb",AS=1,rc="firebaseLocalStorage",Ly="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function bS(){const t=indexedDB.deleteDatabase(My);return new Fo(t).toPromise()}function Iu(){const t=indexedDB.open(My,AS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rc,{keyPath:Ly})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rc)?e(r):(r.close(),await bS(),e(await Iu()))})})}async function xp(t,e,n){const r=Uc(t,!0).put({[Ly]:e,value:n});return new Fo(r).toPromise()}async function RS(t,e){const n=Uc(t,!1).get(e),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function Fp(t,e){const n=Uc(t,!0).delete(e);return new Fo(n).toPromise()}const SS=800,CS=3;class xy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(IS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TS(),!this.activeServiceWorker)return;this.sender=new vS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await xp(e,nc,"1"),await Fp(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Uc(s,!1).getAll();return new Fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xy.type="LOCAL";const PS=xy;new Mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e){return e?Bn(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends Ch{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return Sy(t.auth,new Dh(t),t.bypassAuthState)}function OS(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),oS(n,new Dh(t),t.bypassAuthState)}async function DS(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),iS(n,new Dh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return DS;case"reauthViaPopup":case"reauthViaRedirect":return OS;default:on(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new Mo(2e3,1e4);async function By(t,e,n){if(hn(t.app))return Promise.reject(fn(t,"operation-not-supported-in-this-environment"));const r=sr(t);hR(t,e,kh);const s=Fy(r,n);return new Wr(r,"signInViaPopup",e,s).executeNotNull()}class Wr extends Uy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NS.get())};e()}}Wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="pendingRedirect",ka=new Map;class MS extends Uy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await LS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LS(t,e){const n=US(e),r=FS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xS(t,e){ka.set(t._key(),e)}function FS(t){return Bn(t._redirectPersistence)}function US(t){return Pa(VS,t.config.apiKey,t.name)}async function BS(t,e,n=!1){if(hn(t.app))return Promise.reject(Kn(t));const r=sr(t),s=Fy(r,e),o=await new MS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$y(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$S&&this.cachedEventUids.clear(),this.cachedEventUids.has(Up(e))}saveEventToCache(e){this.cachedEventUids.add(Up(e)),this.lastProcessedEventTime=Date.now()}}function Up(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $y({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $y(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GS=/^https?/;async function WS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HS(t);for(const n of e)try{if(zS(n))return}catch{}on(t,"unauthorized-domain")}function zS(t){const e=Tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GS.test(n))return!1;if(KS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=new Mo(3e4,6e4);function Bp(){const t=Rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YS(t){return new Promise((e,n)=>{var r,s,i;function o(){Bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bp(),n(fn(t,"network-request-failed"))},timeout:QS.get()})}if(!((s=(r=Rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Rn().gapi)===null||i===void 0)&&i.load)o();else{const c=BR("iframefcb");return Rn()[c]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Ay(`${UR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function JS(t){return Oa=Oa||YS(t),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=new Mo(5e3,15e3),ZS="__/auth/iframe",eC="emulator/auth/iframe",tC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rC(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bh(e,eC):`https://${t.config.authDomain}/${ZS}`,r={apiKey:e.apiKey,appName:t.name,v:li},s=nC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vo(r).slice(1)}`}async function sC(t){const e=await JS(t),n=Rn().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:rC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=Rn().setTimeout(()=>{i(o)},XS.get());function l(){Rn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oC=500,aC=600,cC="_blank",lC="http://localhost";class $p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uC(t,e,n,r=oC,s=aC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},iC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=vt().toLowerCase();n&&(c=_y(u)?cC:n),gy(u)&&(e=e||lC,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[T,C])=>`${m}${T}=${C},`,"");if(PR(u)&&c!=="_self")return hC(e||"",c),new $p(null);const p=window.open(e||"",c,h);ge(p,t,"popup-blocked");try{p.focus()}catch{}return new $p(p)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="__/auth/handler",fC="emulator/auth/handler",pC=encodeURIComponent("fac");async function jp(t,e,n,r,s,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:s};if(e instanceof kh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof xo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${pC}=${encodeURIComponent(l)}`:"";return`${mC(t)}?${Vo(c).slice(1)}${u}`}function mC({config:t}){return t.emulator?bh(t,fC):`https://${t.authDomain}/${dC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="webStorageSupport";class gC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ny,this._completeRedirectFn=BS,this._overrideRedirectResult=xS}async _openPopup(e,n,r,s){var i;zn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jp(e,n,r,Tu(),s);return uC(e,o,Oh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jp(e,n,r,Tu(),s);return ES(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(zn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sC(e),r=new jS(e);return n.register("authEvent",s=>(ge(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ll,{type:Ll},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ll];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wy()||Sh()||Lc()}}const _C=gC;var qp="@firebase/auth",Hp="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(t){kn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iy(t)},u=new LR(r,s,i,l);return KR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),kn(new _n("auth-internal",e=>{const n=sr(e.getProvider("auth").getImmediate());return(r=>new yC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(qp,Hp,vC(t)),sn(qp,Hp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=5*60,wC=X_("authIdTokenMaxAge")||TC;let Kp=null;const IC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wC)return;const s=n==null?void 0:n.token;Kp!==s&&(Kp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hi(t=Th()){const e=ys(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HR(t,{popupRedirectResolver:_C,persistence:[PS,_S,Ny]}),r=X_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IC(i.toString());dS(n,o,()=>o(n.currentUser)),hS(n,c=>o(c))}}const s=Y_("auth");return s&&GR(n,`http://${s}`),n}function AC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");var bC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function RC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function SC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var jy={exports:{}};const CC=SC(CA);(function(t,e){(function(r,s){t.exports=s(CC)})(bC,n=>(()=>{var r={772:(c,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(u,h)=>{const p=u.__vccOpts||u;for(const[m,T]of h)p[m]=T;return p}},976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),i.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>x,ToastPlugin:()=>E,ToastPositions:()=>C,default:()=>_,useToast:()=>k});var c=i(976);const l=(0,c.createElementVNode)("div",{class:"v-toast__icon"},null,-1),u=["innerHTML"];function h(g,y,I,A,w,me){return(0,c.openBlock)(),(0,c.createBlock)(c.Transition,{"enter-active-class":g.transition.enter,"leave-active-class":g.transition.leave},{default:(0,c.withCtx)(()=>[(0,c.withDirectives)((0,c.createElementVNode)("div",{ref:"root",role:"alert",class:(0,c.normalizeClass)(["v-toast__item",[`v-toast__item--${g.type}`,`v-toast__item--${g.position}`]]),onMouseover:y[0]||(y[0]=we=>g.toggleTimer(!0)),onMouseleave:y[1]||(y[1]=we=>g.toggleTimer(!1)),onClick:y[2]||(y[2]=function(){return g.whenClicked&&g.whenClicked(...arguments)})},[l,(0,c.createElementVNode)("p",{class:"v-toast__text",innerHTML:g.message},null,8,u)],34),[[c.vShow,g.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function p(g){var y;typeof g.remove<"u"?g.remove():(y=g.parentNode)==null||y.removeChild(g)}function m(g,y,I){let A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const w=(0,c.h)(g,y,A),me=document.createElement("div");return me.classList.add("v-toast--pending"),I.appendChild(me),(0,c.render)(w,me),w.component}class T{constructor(y,I){this.startedAt=Date.now(),this.callback=y,this.delay=I,this.timer=setTimeout(y,I)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const C=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function M(g){return{all:g=g||new Map,on:function(y,I){var A=g.get(y);A?A.push(I):g.set(y,[I])},off:function(y,I){var A=g.get(y);A&&(I?A.splice(A.indexOf(I)>>>0,1):g.set(y,[]))},emit:function(y,I){var A=g.get(y);A&&A.slice().map(function(w){w(I)}),(A=g.get("*"))&&A.slice().map(function(w){w(y,I)})}}}const U=M(),D=(0,c.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:C.BOTTOM_RIGHT,validator(g){return Object.values(C).includes(g)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),U.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const g=document.body;g.appendChild(this.parentTop),g.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const g=this.$refs.root;(0,c.render)(null,g),p(g)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const g=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),p(g),this.isActive=!0,this.duration&&(this.timer=new T(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(g){!this.pauseOnHover||!this.timer||(g?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return this.parentTop;case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){U.off("toast-clear",this.dismiss)}});var S=i(772);const x=(0,S.default)(D,[["render",h]]),k=function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(y){let I=null;typeof y=="string"&&(I=y);const w=Object.assign({},{message:I},g,y);return{dismiss:m(x,w,document.body).ctx.dismiss}},clear(){U.emit("toast-clear")},success(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"success"},I))},error(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"error"},I))},info(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"info"},I))},warning(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"warning"},I))},default(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"default"},I))}}},E={install:function(g){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=k(y);g.config.globalProperties.$toast=I,g.provide("$toast",I)}},_=E})(),o})())})(jy);var qy=jy.exports;const PC=RC(qy);function He(t,e){const n=qy.useToast();switch(t){case"success":n.success(e);break;case"info":n.info(e);break;case"warning":n.warning(e);break;case"error":n.error(e);break;case"default":n.default(e);break;default:n.default(e);break}}const En=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Hy=t=>(Xn("data-v-ebd4dc25"),t=t(),Zn(),t),kC={class:"navBar"},OC={class:"container"},DC=Hy(()=>P("div",{class:"co"},"CO",-1)),NC=Hy(()=>P("div",{class:"student"},"STUDENT",-1)),VC={class:"buttons"},MC={__name:"Nav",props:{isLoggedIn:Boolean},setup(t){const e=hi(),n=No();function r(){fS(e).then(()=>{n.push("/"),He("success","Successfully singed out!")}).catch(s=>{He("error",s.message)})}return(s,i)=>{const o=_g("RouterLink");return ye(),Ae("div",kC,[P("div",OC,[Ce(o,{class:"logo",to:"/"},{default:Zt(()=>[DC,NC]),_:1}),P("div",VC,[t.isLoggedIn?en("",!0):(ye(),Ir(o,{key:0,class:"button",to:"/Login"},{default:Zt(()=>[un("Login")]),_:1})),t.isLoggedIn?en("",!0):(ye(),Ir(o,{key:1,class:"button",to:"/Register"},{default:Zt(()=>[un("Register")]),_:1})),t.isLoggedIn?(ye(),Ir(o,{key:2,class:"button",to:"/dashboard"},{default:Zt(()=>[un("Dashboard")]),_:1})):en("",!0),t.isLoggedIn?(ye(),Ir(o,{key:3,class:"button",to:"/findcostudent"},{default:Zt(()=>[un("Find students")]),_:1})):en("",!0),t.isLoggedIn?(ye(),Ae("div",{key:4,class:"button",onClick:i[0]||(i[0]=c=>r())},"Sign out")):en("",!0)])])])}}},LC=En(MC,[["__scopeId","data-v-ebd4dc25"]]),xC={},Ky=t=>(Xn("data-v-7aaa4f9a"),t=t(),Zn(),t),FC={class:"footerBox"},UC=Ky(()=>P("p",null,"Copyright ©2024",-1)),BC=Ky(()=>P("p",null,"Designed by Samuel Coryn",-1)),$C=[UC,BC];function jC(t,e){return ye(),Ae("div",FC,$C)}const qC=En(xC,[["render",jC],["__scopeId","data-v-7aaa4f9a"]]),HC={class:"navBox"},KC={__name:"App",setup(t){const e=Ie(!1);let n;return gs(()=>{n=hi(),Py(n,r=>{r?e.value=!0:e.value=!1})}),js("isLoggedInKey",e),(r,s)=>(ye(),Ae(Ke,null,[P("div",HC,[Ce(LC,{isLoggedIn:e.value},null,8,["isLoggedIn"])]),Ce(ot(G_),null,{default:Zt(({Component:i})=>[Ce(Pc,{name:"route",mode:"out-in"},{default:Zt(()=>[(ye(),Ir(vg(i)))]),_:2},1024)]),_:1}),Ce(qC)],64))}},GC="/costudent-demo/assets/students_stock_photo-DFrZLZTI.jpg",Nh=t=>(Xn("data-v-d7acdb75"),t=t(),Zn(),t),WC={class:"root"},zC={class:"grid"},QC={class:"landingColumn"},YC=Nh(()=>P("div",{class:"title"},[P("h1",null,"Study better,"),P("h1",null,"Together")],-1)),JC=Nh(()=>P("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),XC={class:"buttonArray"},ZC=Nh(()=>P("div",{class:"photo"},[P("img",{src:GC,alt:"People studying together."})],-1)),eP=dh('<div id="learnMore" data-v-d7acdb75><div class="article" data-v-d7acdb75><h1 data-v-d7acdb75>ABOUT</h1><p data-v-d7acdb75>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-d7acdb75>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-d7acdb75>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-d7acdb75>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-d7acdb75>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-d7acdb75><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-d7acdb75><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-d7acdb75></path></svg><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-d7acdb75><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-d7acdb75></path></svg><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Learn togehter!</p></div></div></div>',1),tP={__name:"Home",setup(t){function e(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=zt("isLoggedInKey"),s=No();return(i,o)=>(ye(),Ae("div",WC,[P("div",zC,[P("div",QC,[YC,JC,P("div",XC,[P("div",{class:"button",onClick:o[0]||(o[0]=c=>n())},"Start studying"),P("div",{class:"button",onClick:o[1]||(o[1]=c=>e())},"Learn more")])]),ZC]),eP]))}},nP=En(tP,[["__scopeId","data-v-d7acdb75"]]);var rP="firebase",sP="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(rP,sP,"app");const Gy="@firebase/installations",Vh="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=1e4,zy=`w:${Vh}`,Qy="FIS_v2",iP="https://firebaseinstallations.googleapis.com/v1",oP=60*60*1e3,aP="installations",cP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},as=new _s(aP,cP,lP);function Yy(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy({projectId:t}){return`${iP}/projects/${t}/installations`}function Xy(t){return{token:t.token,requestStatus:2,expiresIn:hP(t.expiresIn),creationTime:Date.now()}}async function Zy(t,e){const r=(await e.json()).error;return as.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ev({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function uP(t,{refreshToken:e}){const n=ev(t);return n.append("Authorization",dP(e)),n}async function tv(t){const e=await t();return e.status>=500&&e.status<600?t():e}function hP(t){return Number(t.replace("s","000"))}function dP(t){return`${Qy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Jy(t),s=ev(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Qy,appId:t.appId,sdkVersion:zy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await tv(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Xy(u.authToken)}}else throw await Zy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=/^[cdef][\w-]{21}$/,Au="";function gP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_P(t);return mP.test(n)?n:Au}catch{return Au}}function _P(t){return pP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Map;function sv(t,e){const n=Bc(t);iv(n,e),yP(n,e)}function iv(t,e){const n=rv.get(t);if(n)for(const r of n)r(e)}function yP(t,e){const n=vP();n&&n.postMessage({key:t,fid:e}),EP()}let zr=null;function vP(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=t=>{iv(t.data.key,t.data.fid)}),zr}function EP(){rv.size===0&&zr&&(zr.close(),zr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="firebase-installations-database",wP=1,cs="firebase-installations-store";let xl=null;function Mh(){return xl||(xl=sy(TP,wP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cs)}}})),xl}async function sc(t,e){const n=Bc(t),s=(await Mh()).transaction(cs,"readwrite"),i=s.objectStore(cs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&sv(t,e.fid),e}async function ov(t){const e=Bc(t),r=(await Mh()).transaction(cs,"readwrite");await r.objectStore(cs).delete(e),await r.done}async function $c(t,e){const n=Bc(t),s=(await Mh()).transaction(cs,"readwrite"),i=s.objectStore(cs),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&sv(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t){let e;const n=await $c(t.appConfig,r=>{const s=IP(r),i=AP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Au?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function IP(t){const e=t||{fid:gP(),registrationStatus:0};return av(e)}function AP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(as.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RP(t)}:{installationEntry:e}}async function bP(t,e){try{const n=await fP(t,e);return sc(t.appConfig,n)}catch(n){throw Yy(n)&&n.customData.serverCode===409?await ov(t.appConfig):await sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RP(t){let e=await Gp(t.appConfig);for(;e.registrationStatus===1;)await nv(100),e=await Gp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lh(t);return r||n}return e}function Gp(t){return $c(t,e=>{if(!e)throw as.create("installation-not-found");return av(e)})}function av(t){return SP(t)?{fid:t.fid,registrationStatus:0}:t}function SP(t){return t.registrationStatus===1&&t.registrationTime+Wy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP({appConfig:t,heartbeatServiceProvider:e},n){const r=PP(t,n),s=uP(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:zy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await tv(()=>fetch(r,c));if(l.ok){const u=await l.json();return Xy(u)}else throw await Zy("Generate Auth Token",l)}function PP(t,{fid:e}){return`${Jy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(t,e=!1){let n;const r=await $c(t.appConfig,i=>{if(!cv(i))throw as.create("not-registered");const o=i.authToken;if(!e&&DP(o))return i;if(o.requestStatus===1)return n=kP(t,e),i;{if(!navigator.onLine)throw as.create("app-offline");const c=VP(i);return n=OP(t,c),c}});return n?await n:r.authToken}async function kP(t,e){let n=await Wp(t.appConfig);for(;n.authToken.requestStatus===1;)await nv(100),n=await Wp(t.appConfig);const r=n.authToken;return r.requestStatus===0?xh(t,e):r}function Wp(t){return $c(t,e=>{if(!cv(e))throw as.create("not-registered");const n=e.authToken;return MP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OP(t,e){try{const n=await CP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await sc(t.appConfig,r),n}catch(n){if(Yy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ov(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sc(t.appConfig,r)}throw n}}function cv(t){return t!==void 0&&t.registrationStatus===2}function DP(t){return t.requestStatus===2&&!NP(t)}function NP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+oP}function VP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MP(t){return t.requestStatus===1&&t.requestTime+Wy<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lh(e);return r?r.catch(console.error):xh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e=!1){const n=t;return await FP(n),(await xh(n,e)).token}async function FP(t){const{registrationPromise:e}=await Lh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(t){if(!t||!t.options)throw Fl("App Configuration");if(!t.name)throw Fl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fl(t){return as.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="installations",BP="installations-internal",$P=t=>{const e=t.getProvider("app").getImmediate(),n=UP(e),r=ys(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jP=t=>{const e=t.getProvider("app").getImmediate(),n=ys(e,lv).getImmediate();return{getId:()=>LP(n),getToken:s=>xP(n,s)}};function qP(){kn(new _n(lv,$P,"PUBLIC")),kn(new _n(BP,jP,"PRIVATE"))}qP();sn(Gy,Vh);sn(Gy,Vh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="analytics",HP="firebase_id",KP="origin",GP=60*1e3,WP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new Mc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new _s("analytics","Analytics",zP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){if(!t.startsWith(Fh)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return Ft.warn(e.message),""}return t}function uv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function YP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function JP(t,e){const n=YP("firebase-js-sdk-policy",{createScriptURL:QP}),r=document.createElement("script"),s=`${Fh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function XP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ZP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await uv(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Ft.error(c)}t("config",s,i)}async function e1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await uv(n);for(const l of o){const u=c.find(p=>p.measurementId===l),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ft.error(i)}}function t1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await e1(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await ZP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Ft.error(c)}}return s}function n1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=t1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function r1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Fh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=30,i1=1e3;class o1{constructor(e={},n=i1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hv=new o1;function a1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function c1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:a1(r)},i=WP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function l1(t,e=hv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Qt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new d1;return setTimeout(async()=>{c.abort()},GP),dv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function dv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=hv){var i;const{appId:o,measurementId:c}=t;try{await u1(r,e)}catch(l){if(c)return Ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await c1(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!h1(u)){if(s.deleteThrottleMetadata(o),c)return Ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const h=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?yp(n,s.intervalMillis,s1):yp(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,p),Ft.debug(`Calling attemptFetch again in ${h} millis`),dv(t,p,r,s)}}function u1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function h1(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class d1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function f1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(){if(ey())try{await ty()}catch(t){return Ft.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ft.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function m1(t,e,n,r,s,i,o){var c;const l=l1(t);l.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&Ft.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Ft.error(T)),e.push(l);const u=p1().then(T=>{if(T)return r.getId()}),[h,p]=await Promise.all([l,u]);r1(i)||JP(i,h.measurementId),s("js",new Date);const m=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return m[KP]="firebase",m.update=!0,p!=null&&(m[HP]=p),s("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.app=e}_delete(){return delete Xi[this.app.options.appId],Promise.resolve()}}let Xi={},zp=[];const Qp={};let Ul="dataLayer",_1="gtag",Yp,fv,Jp=!1;function y1(){const t=[];if(Z_()&&t.push("This is a browser extension environment."),Gb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});Ft.warn(n.message)}}function v1(t,e,n){y1();const r=t.options.appId;if(!r)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Xi[r]!=null)throw Qt.create("already-exists",{id:r});if(!Jp){XP(Ul);const{wrappedGtag:i,gtagCore:o}=n1(Xi,zp,Qp,Ul,_1);fv=i,Yp=o,Jp=!0}return Xi[r]=m1(t,zp,Qp,e,Yp,Ul,n),new g1(t)}function E1(t=Th()){t=at(t);const e=ys(t,ic);return e.isInitialized()?e.getImmediate():T1(t)}function T1(t,e={}){const n=ys(t,ic);if(n.isInitialized()){const s=n.getImmediate();if(po(e,n.getOptions()))return s;throw Qt.create("already-initialized")}return n.initialize({options:e})}function w1(t,e,n,r){t=at(t),f1(fv,Xi[t.app.options.appId],e,n,r).catch(s=>Ft.error(s))}const Xp="@firebase/analytics",Zp="0.10.4";function I1(){kn(new _n(ic,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return v1(r,s,n)},"PUBLIC")),kn(new _n("analytics-internal",t,"PRIVATE")),sn(Xp,Zp),sn(Xp,Zp,"esm2017");function t(e){try{const n=e.getProvider(ic).getImmediate();return{logEvent:(r,s,i)=>w1(n,r,s,i)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}I1();var em=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,pv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function g(){}g.prototype=_.prototype,E.D=_.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(y,I,A){for(var w=Array(arguments.length-2),me=2;me<arguments.length;me++)w[me-2]=arguments[me];return _.prototype[I].apply(y,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,g){g||(g=0);var y=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)y[I]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(I=0;16>I;++I)y[I]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=E.g[0],g=E.g[1],I=E.g[2];var A=E.g[3],w=_+(A^g&(I^A))+y[0]+3614090360&4294967295;_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+y[1]+3905402710&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+y[2]+606105819&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+y[3]+3250441966&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(A^g&(I^A))+y[4]+4118548399&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+y[5]+1200080426&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+y[6]+2821735955&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+y[7]+4249261313&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(A^g&(I^A))+y[8]+1770035416&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+y[9]+2336552879&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+y[10]+4294925233&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+y[11]+2304563134&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(A^g&(I^A))+y[12]+1804603682&4294967295,_=g+(w<<7&4294967295|w>>>25),w=A+(I^_&(g^I))+y[13]+4254626195&4294967295,A=_+(w<<12&4294967295|w>>>20),w=I+(g^A&(_^g))+y[14]+2792965006&4294967295,I=A+(w<<17&4294967295|w>>>15),w=g+(_^I&(A^_))+y[15]+1236535329&4294967295,g=I+(w<<22&4294967295|w>>>10),w=_+(I^A&(g^I))+y[1]+4129170786&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+y[6]+3225465664&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+y[11]+643717713&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+y[0]+3921069994&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(I^A&(g^I))+y[5]+3593408605&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+y[10]+38016083&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+y[15]+3634488961&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+y[4]+3889429448&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(I^A&(g^I))+y[9]+568446438&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+y[14]+3275163606&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+y[3]+4107603335&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+y[8]+1163531501&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(I^A&(g^I))+y[13]+2850285829&4294967295,_=g+(w<<5&4294967295|w>>>27),w=A+(g^I&(_^g))+y[2]+4243563512&4294967295,A=_+(w<<9&4294967295|w>>>23),w=I+(_^g&(A^_))+y[7]+1735328473&4294967295,I=A+(w<<14&4294967295|w>>>18),w=g+(A^_&(I^A))+y[12]+2368359562&4294967295,g=I+(w<<20&4294967295|w>>>12),w=_+(g^I^A)+y[5]+4294588738&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+y[8]+2272392833&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+y[11]+1839030562&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+y[14]+4259657740&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(g^I^A)+y[1]+2763975236&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+y[4]+1272893353&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+y[7]+4139469664&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+y[10]+3200236656&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(g^I^A)+y[13]+681279174&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+y[0]+3936430074&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+y[3]+3572445317&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+y[6]+76029189&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(g^I^A)+y[9]+3654602809&4294967295,_=g+(w<<4&4294967295|w>>>28),w=A+(_^g^I)+y[12]+3873151461&4294967295,A=_+(w<<11&4294967295|w>>>21),w=I+(A^_^g)+y[15]+530742520&4294967295,I=A+(w<<16&4294967295|w>>>16),w=g+(I^A^_)+y[2]+3299628645&4294967295,g=I+(w<<23&4294967295|w>>>9),w=_+(I^(g|~A))+y[0]+4096336452&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+y[7]+1126891415&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+y[14]+2878612391&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+y[5]+4237533241&4294967295,g=I+(w<<21&4294967295|w>>>11),w=_+(I^(g|~A))+y[12]+1700485571&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+y[3]+2399980690&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+y[10]+4293915773&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+y[1]+2240044497&4294967295,g=I+(w<<21&4294967295|w>>>11),w=_+(I^(g|~A))+y[8]+1873313359&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+y[15]+4264355552&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+y[6]+2734768916&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+y[13]+1309151649&4294967295,g=I+(w<<21&4294967295|w>>>11),w=_+(I^(g|~A))+y[4]+4149444226&4294967295,_=g+(w<<6&4294967295|w>>>26),w=A+(g^(_|~I))+y[11]+3174756917&4294967295,A=_+(w<<10&4294967295|w>>>22),w=I+(_^(A|~g))+y[2]+718787259&4294967295,I=A+(w<<15&4294967295|w>>>17),w=g+(A^(I|~_))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(I+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var g=_-this.blockSize,y=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=g;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<_;)if(y[I++]=E.charCodeAt(A++),I==this.blockSize){s(this,y),I=0;break}}else for(;A<_;)if(y[I++]=E[A++],I==this.blockSize){s(this,y),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var g=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=g&255,g/=256;for(this.u(E),E=Array(16),_=g=0;4>_;++_)for(var y=0;32>y;y+=8)E[g++]=this.g[_]>>>y&255;return E};function i(E,_){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=_(E)}function o(E,_){this.h=_;for(var g=[],y=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;y&&A==_||(g[I]=A,y=!1)}this.g=g}var c={};function l(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return N(u(-E));for(var _=[],g=1,y=0;E>=g;y++)_[y]=E/g|0,g*=4294967296;return new o(_,0)}function h(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return N(h(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=u(Math.pow(_,8)),y=p,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),w=parseInt(E.substring(I,I+A),_);8>A?(A=u(Math.pow(_,A)),y=y.j(A).add(u(w))):(y=y.j(g),y=y.add(u(w)))}return y}var p=l(0),m=l(1),T=l(16777216);t=o.prototype,t.m=function(){if(M(this))return-N(this).m();for(var E=0,_=1,g=0;g<this.g.length;g++){var y=this.i(g);E+=(0<=y?y:4294967296+y)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(M(this))return"-"+N(this).toString(E);for(var _=u(Math.pow(E,6)),g=this,y="";;){var I=O(g,_).g;g=U(g,I.j(_));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=I,C(g))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function M(E){return E.h==-1}t.l=function(E){return E=U(this,E),M(E)?-1:C(E)?0:1};function N(E){for(var _=E.g.length,g=[],y=0;y<_;y++)g[y]=~E.g[y];return new o(g,~E.h).add(m)}t.abs=function(){return M(this)?N(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),g=[],y=0,I=0;I<=_;I++){var A=y+(this.i(I)&65535)+(E.i(I)&65535),w=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);y=w>>>16,A&=65535,w&=65535,g[I]=w<<16|A}return new o(g,g[g.length-1]&-2147483648?-1:0)};function U(E,_){return E.add(N(_))}t.j=function(E){if(C(this)||C(E))return p;if(M(this))return M(E)?N(this).j(N(E)):N(N(this).j(E));if(M(E))return N(this.j(N(E)));if(0>this.l(T)&&0>E.l(T))return u(this.m()*E.m());for(var _=this.g.length+E.g.length,g=[],y=0;y<2*_;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<E.g.length;I++){var A=this.i(y)>>>16,w=this.i(y)&65535,me=E.i(I)>>>16,we=E.i(I)&65535;g[2*y+2*I]+=w*we,D(g,2*y+2*I),g[2*y+2*I+1]+=A*we,D(g,2*y+2*I+1),g[2*y+2*I+1]+=w*me,D(g,2*y+2*I+1),g[2*y+2*I+2]+=A*me,D(g,2*y+2*I+2)}for(y=0;y<_;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=_;y<2*_;y++)g[y]=0;return new o(g,0)};function D(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function S(E,_){this.g=E,this.h=_}function O(E,_){if(C(_))throw Error("division by zero");if(C(E))return new S(p,p);if(M(E))return _=O(N(E),_),new S(N(_.g),N(_.h));if(M(_))return _=O(E,N(_)),new S(N(_.g),_.h);if(30<E.g.length){if(M(E)||M(_))throw Error("slowDivide_ only works with positive integers.");for(var g=m,y=_;0>=y.l(E);)g=x(g),y=x(y);var I=k(g,1),A=k(y,1);for(y=k(y,2),g=k(g,2);!C(y);){var w=A.add(y);0>=w.l(E)&&(I=I.add(g),A=w),y=k(y,1),g=k(g,1)}return _=U(E,I.j(_)),new S(I,_)}for(I=p;0<=E.l(_);){for(g=Math.max(1,Math.floor(E.m()/_.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=u(g),w=A.j(_);M(w)||0<w.l(E);)g-=y,A=u(g),w=A.j(_);C(A)&&(A=m),I=I.add(A),E=U(E,w)}return new S(I,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),g=[],y=0;y<_;y++)g[y]=this.i(y)&E.i(y);return new o(g,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),g=[],y=0;y<_;y++)g[y]=this.i(y)|E.i(y);return new o(g,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),g=[],y=0;y<_;y++)g[y]=this.i(y)^E.i(y);return new o(g,this.h^E.h)};function x(E){for(var _=E.g.length+1,g=[],y=0;y<_;y++)g[y]=E.i(y)<<1|E.i(y-1)>>>31;return new o(g,E.h)}function k(E,_){var g=_>>5;_%=32;for(var y=E.g.length-g,I=[],A=0;A<y;A++)I[A]=0<_?E.i(A+g)>>>_|E.i(A+g+1)<<32-_:E.i(A+g);return new o(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,es=o}).apply(typeof em<"u"?em:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mv,gv,Bi,_v,Da,bu,yv,vv,Ev;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var V=a[v];if(!(V in f))break e;f=f[V]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,v=!1,V={next:function(){if(!v&&f<a.length){var F=f++;return{value:d(F,a[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),a.apply(d,V)}}return function(){return a.apply(d,arguments)}}function m(a,d,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,m.apply(null,arguments)}function T(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,V,F){for(var Q=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)Q[qe-2]=arguments[qe];return d.prototype[V].apply(v,Q)}}function M(a){const d=a.length;if(0<d){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function N(a,d){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(l(v)){const V=a.length||0,F=v.length||0;a.length=V+F;for(let Q=0;Q<F;Q++)a[V+Q]=v[Q]}else a.push(v)}}class U{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var x=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function k(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function _(a){const d={};for(const f in a)d[f]=a[f];return d}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(a,d){let f,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(f in v)a[f]=v[f];for(let F=0;F<g.length;F++)f=g[F],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function I(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Ee;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,f){const v=we.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var we=new U(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,Z=!1,Ee=new me,ue=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(fe)}};var fe=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){A(f)}var d=we;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Z=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var ir=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function Tn(a,d){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(x){e:{try{O(d.nodeName);var V=!0;break e}catch{}V=!1}V||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ht[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tn.aa.h.call(this)}}C(Tn,Me);var ht={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(a,d,f,v,V){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=V,this.key=++ee,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,d,f,v,V){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var Q=b(a,d,v,V);return-1<Q?(d=a[Q],f||(d.fa=!1)):(d=new J(d,this.src,F,!!v,V),d.fa=f,a.push(d)),d};function $e(a,d){var f=d.type;if(f in a.g){var v=a.g[f],V=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=V)&&Array.prototype.splice.call(v,V,1),F&&(se(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,d,f,v){for(var V=0;V<a.length;++V){var F=a[V];if(!F.da&&F.listener==d&&F.capture==!!f&&F.ha==v)return V}return-1}var R="closure_lm_"+(1e6*Math.random()|0),L={};function j(a,d,f,v,V){if(Array.isArray(d)){for(var F=0;F<d.length;F++)j(a,d[F],f,v,V);return null}return f=ae(f),a&&a[$]?a.K(d,f,u(v)?!!v.capture:!!v,V):B(a,d,f,!1,v,V)}function B(a,d,f,v,V,F){if(!d)throw Error("Invalid event type");var Q=u(V)?!!V.capture:!!V,qe=X(a);if(qe||(a[R]=qe=new Re(a)),f=qe.add(d,f,v,Q,F),f.proxy)return f;if(v=W(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)ir||(V=Q),V===void 0&&(V=!1),a.addEventListener(d.toString(),v,V);else if(a.attachEvent)a.attachEvent(z(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function a(f){return d.call(a.src,a.listener,f)}const d=H;return a}function Y(a,d,f,v,V){if(Array.isArray(d))for(var F=0;F<d.length;F++)Y(a,d[F],f,v,V);else v=u(v)?!!v.capture:!!v,f=ae(f),a&&a[$]?(a=a.i,d=String(d).toString(),d in a.g&&(F=a.g[d],f=b(F,f,v,V),-1<f&&(se(F[f]),Array.prototype.splice.call(F,f,1),F.length==0&&(delete a.g[d],a.h--)))):a&&(a=X(a))&&(d=a.g[d.toString()],a=-1,d&&(a=b(d,f,v,V)),(f=-1<a?d[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$])$e(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(z(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=X(d))?($e(f,a),f.h==0&&(f.src=null,d[R]=null)):se(a)}}}function z(a){return a in L?L[a]:L[a]="on"+a}function H(a,d){if(a.da)a=!0;else{d=new Tn(d,this);var f=a.listener,v=a.ha||a.src;a.fa&&G(a),a=f.call(v,d)}return a}function X(a){return a=a[R],a instanceof Re?a:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ce]||(a[ce]=function(d){return a.handleEvent(d)}),a[ce])}function oe(){Ve.call(this),this.i=new Re(this),this.M=this,this.F=null}C(oe,Ve),oe.prototype[$]=!0,oe.prototype.removeEventListener=function(a,d,f,v){Y(this,a,d,f,v)};function de(a,d){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new Me(d,a);else if(d instanceof Me)d.target=d.target||a;else{var V=d;d=new Me(v,a),y(d,V)}if(V=!0,f)for(var F=f.length-1;0<=F;F--){var Q=d.g=f[F];V=xe(Q,v,!0,d)&&V}if(Q=d.g=a,V=xe(Q,v,!0,d)&&V,V=xe(Q,v,!1,d)&&V,f)for(F=0;F<f.length;F++)Q=d.g=f[F],V=xe(Q,v,!1,d)&&V}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],v=0;v<f.length;v++)se(f[v]);delete a.g[d],a.h--}}this.F=null},oe.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},oe.prototype.L=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function xe(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var V=!0,F=0;F<d.length;++F){var Q=d[F];if(Q&&!Q.da&&Q.capture==f){var qe=Q.listener,mt=Q.ha||Q.src;Q.fa&&$e(a.i,Q),V=qe.call(mt,v)!==!1&&V}}return V&&!v.defaultPrevented}function Oe(a,d,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function nt(a){a.g=Oe(()=>{a.g=null,a.i&&(a.i=!1,nt(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class $t extends Ve{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:nt(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(a){Ve.call(this),this.h=a,this.g={}}C(Yt,Ve);var yi=[];function or(a){k(a.g,function(d,f){this.g.hasOwnProperty(f)&&G(d)},a),a.g={}}Yt.prototype.N=function(){Yt.aa.N.call(this),or(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ts=c.JSON.stringify,Ct=c.JSON.parse,Jt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ws(){}ws.prototype.h=null;function vd(a){return a.h||(a.h=a.i())}function Ed(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sl(){Me.call(this,"d")}C(sl,Me);function il(){Me.call(this,"c")}C(il,Me);var Ur={},Td=null;function Wo(){return Td=Td||new oe}Ur.La="serverreachability";function wd(a){Me.call(this,Ur.La,a)}C(wd,Me);function Ei(a){const d=Wo();de(d,new wd(d))}Ur.STAT_EVENT="statevent";function Id(a,d){Me.call(this,Ur.STAT_EVENT,a),this.stat=d}C(Id,Me);function Pt(a){const d=Wo();de(d,new Id(d,a))}Ur.Ma="timingevent";function Ad(a,d){Me.call(this,Ur.Ma,a),this.size=d}C(Ad,Me);function Ti(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function $E(a,d,f,v,V,F){a.info(function(){if(a.g)if(F)for(var Q="",qe=F.split("&"),mt=0;mt<qe.length;mt++){var Ne=qe[mt].split("=");if(1<Ne.length){var Et=Ne[0];Ne=Ne[1];var Tt=Et.split("_");Q=2<=Tt.length&&Tt[1]=="type"?Q+(Et+"="+Ne+"&"):Q+(Et+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+d+`
`+f+`
`+Q})}function jE(a,d,f,v,V,F,Q){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+d+`
`+f+`
`+F+" "+Q})}function Is(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+HE(a,f)+(v?" "+v:"")})}function qE(a,d){a.info(function(){return"TIMEOUT: "+d})}wi.prototype.info=function(){};function HE(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var F=V[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<V.length;Q++)V[Q]=""}}}}return Ts(f)}catch{return d}}var zo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ol;function Qo(){}C(Qo,ws),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},ol=new Qo;function ar(a,d,f,v){this.j=a,this.i=d,this.l=f,this.R=v||1,this.U=new Yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rd}function Rd(){this.i=null,this.g="",this.h=!1}var Sd={},al={};function cl(a,d,f){a.L=1,a.v=Zo(Dn(d)),a.m=f,a.P=!0,Cd(a,null)}function Cd(a,d){a.F=Date.now(),Yo(a),a.A=Dn(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),jd(f.i,"t",v),a.C=0,f=a.j.J,a.h=new Rd,a.g=af(a.j,f?d:null,!a.m),0<a.O&&(a.M=new $t(m(a.Y,a,a.g),a.O)),d=a.U,f=a.g,v=a.ca;var V="readystatechange";Array.isArray(V)||(V&&(yi[0]=V.toString()),V=yi);for(var F=0;F<V.length;F++){var Q=j(f,V[F],v||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ei(),$E(a.i,a.u,a.A,a.l,a.R,a.m)}ar.prototype.ca=function(a){a=a.target;const d=this.M;d&&Nn(a)==3?d.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=Nn(this.g);var d=this.g.Ba();const Rs=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Qd(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=Rs?Ei(3):Ei(2)),ll(this);var f=this.g.Z();this.X=f;t:if(Pd(this)){var v=Qd(this.g);a="";var V=v.length,F=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Ii(this);var Q="";break t}this.h.i=new c.TextDecoder}for(d=0;d<V;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(F&&d==V-1)});v.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,jE(this.i,this.u,this.A,this.l,this.R,Tt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,mt=this.g;if((qe=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(qe)){var Ne=qe;break t}}Ne=null}if(f=Ne)Is(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ul(this,f);else{this.o=!1,this.s=3,Pt(12),Br(this),Ii(this);break e}}if(this.P){f=!0;let an;for(;!this.J&&this.C<Q.length;)if(an=KE(this,Q),an==al){Tt==4&&(this.s=4,Pt(14),f=!1),Is(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Sd){this.s=4,Pt(15),Is(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else Is(this.i,this.l,an,null),ul(this,an);if(Pd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||Q.length!=0||this.h.h||(this.s=1,Pt(16),f=!1),this.o=this.o&&f,!f)Is(this.i,this.l,Q,"[Invalid Chunked Response]"),Br(this),Ii(this);else if(0<Q.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),gl(Et),Et.M=!0,Pt(11))}}else Is(this.i,this.l,Q,null),ul(this,Q);Tt==4&&Br(this),this.o&&!this.J&&(Tt==4?nf(this.j,this):(this.o=!1,Yo(this)))}else cT(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Br(this),Ii(this)}}}catch{}finally{}};function Pd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function KE(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?al:(f=Number(d.substring(f,v)),isNaN(f)?Sd:(v+=1,v+f>d.length?al:(d=d.slice(v,v+f),a.C=v+f,d)))}ar.prototype.cancel=function(){this.J=!0,Br(this)};function Yo(a){a.S=Date.now()+a.I,kd(a,a.I)}function kd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ti(m(a.ba,a),d)}function ll(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ar.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qE(this.i,this.A),this.L!=2&&(Ei(),Pt(17)),Br(this),this.s=2,Ii(this)):kd(this,this.S-a)};function Ii(a){a.j.G==0||a.J||nf(a.j,a)}function Br(a){ll(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,or(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ul(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||hl(f.h,a))){if(!a.K&&hl(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)sa(f),na(f);else break e;ml(f),Pt(18)}}else f.za=V[1],0<f.za-f.T&&37500>V[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ti(m(f.Za,f),6e3));if(1>=Nd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else jr(f,11)}else if((a.K||f.g==a)&&sa(f),!D(d))for(V=f.Da.g.parse(d),d=0;d<V.length;d++){let Ne=V[d];if(f.T=Ne[0],Ne=Ne[1],f.G==2)if(Ne[0]=="c"){f.K=Ne[1],f.ia=Ne[2];const Et=Ne[3];Et!=null&&(f.la=Et,f.j.info("VER="+f.la));const Tt=Ne[4];Tt!=null&&(f.Aa=Tt,f.j.info("SVER="+f.Aa));const Rs=Ne[5];Rs!=null&&typeof Rs=="number"&&0<Rs&&(v=1.5*Rs,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const an=a.g;if(an){const oa=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oa){var F=v.h;F.g||oa.indexOf("spdy")==-1&&oa.indexOf("quic")==-1&&oa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(dl(F,F.h),F.h=null))}if(v.D){const _l=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(v.ya=_l,ze(v.I,v.D,_l))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var Q=a;if(v.qa=of(v,v.J?v.ia:null,v.W),Q.K){Vd(v.h,Q);var qe=Q,mt=v.L;mt&&(qe.I=mt),qe.B&&(ll(qe),Yo(qe)),v.g=Q}else ef(v);0<f.i.length&&ra(f)}else Ne[0]!="stop"&&Ne[0]!="close"||jr(f,7);else f.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?jr(f,7):pl(f):Ne[0]!="noop"&&f.l&&f.l.ta(Ne),f.v=0)}}Ei(4)}catch{}}var GE=class{constructor(a,d){this.g=a,this.map=d}};function Od(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Dd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nd(a){return a.h?1:a.g?a.g.size:0}function hl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function dl(a,d){a.g?a.g.add(d):a.h=d}function Vd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Od.prototype.cancel=function(){if(this.i=Md(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Md(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return M(a.i)}function WE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,v=0;v<f;v++)d.push(a[v]);return d}d=[],f=0;for(v in a)d[f++]=a[v];return d}function zE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const v in a)d[f++]=v;return d}}}function Ld(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=zE(a),v=WE(a),V=v.length,F=0;F<V;F++)d.call(void 0,v[F],f&&f[F],a)}var xd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QE(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),V=null;if(0<=v){var F=a[f].substring(0,v);V=a[f].substring(v+1)}else F=a[f];d(F,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,Jo(this,a.j),this.o=a.o,this.g=a.g,Xo(this,a.s),this.l=a.l;var d=a.i,f=new Ri;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Fd(this,f),this.m=a.m}else a&&(d=String(a).match(xd))?(this.h=!1,Jo(this,d[1]||"",!0),this.o=Ai(d[2]||""),this.g=Ai(d[3]||"",!0),Xo(this,d[4]),this.l=Ai(d[5]||"",!0),Fd(this,d[6]||"",!0),this.m=Ai(d[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}$r.prototype.toString=function(){var a=[],d=this.j;d&&a.push(bi(d,Ud,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(bi(d,Ud,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(bi(f,f.charAt(0)=="/"?XE:JE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",bi(f,eT)),a.join("")};function Dn(a){return new $r(a)}function Jo(a,d,f){a.j=f?Ai(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Xo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Fd(a,d,f){d instanceof Ri?(a.i=d,tT(a.i,a.h)):(f||(d=bi(d,ZE)),a.i=new Ri(d,a.h))}function ze(a,d,f){a.i.set(d,f)}function Zo(a){return ze(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ai(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bi(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,YE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function YE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ud=/[#\/\?@]/g,JE=/[#\?:]/g,XE=/[#\?]/g,ZE=/[#\?@]/g,eT=/#/g;function Ri(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function cr(a){a.g||(a.g=new Map,a.h=0,a.i&&QE(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Ri.prototype,t.add=function(a,d){cr(this),this.i=null,a=As(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Bd(a,d){cr(a),d=As(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function $d(a,d){return cr(a),d=As(a,d),a.g.has(d)}t.forEach=function(a,d){cr(this),this.g.forEach(function(f,v){f.forEach(function(V){a.call(d,V,v,this)},this)},this)},t.na=function(){cr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let v=0;v<d.length;v++){const V=a[v];for(let F=0;F<V.length;F++)f.push(d[v])}return f},t.V=function(a){cr(this);let d=[];if(typeof a=="string")$d(this,a)&&(d=d.concat(this.g.get(As(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return cr(this),this.i=null,a=As(this,a),$d(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function jd(a,d,f){Bd(a,d),0<f.length&&(a.i=null,a.g.set(As(a,d),M(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var v=d[f];const F=encodeURIComponent(String(v)),Q=this.V(v);for(v=0;v<Q.length;v++){var V=F;Q[v]!==""&&(V+="="+encodeURIComponent(String(Q[v]))),a.push(V)}}return this.i=a.join("&")};function As(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function tT(a,d){d&&!a.j&&(cr(a),a.i=null,a.g.forEach(function(f,v){var V=v.toLowerCase();v!=V&&(Bd(this,v),jd(this,V,f))},a)),a.j=d}function nT(a,d){const f=new wi;if(c.Image){const v=new Image;v.onload=T(lr,f,"TestLoadImage: loaded",!0,d,v),v.onerror=T(lr,f,"TestLoadImage: error",!1,d,v),v.onabort=T(lr,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=T(lr,f,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function rT(a,d){const f=new wi,v=new AbortController,V=setTimeout(()=>{v.abort(),lr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(F=>{clearTimeout(V),F.ok?lr(f,"TestPingServer: ok",!0,d):lr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(V),lr(f,"TestPingServer: error",!1,d)})}function lr(a,d,f,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(f)}catch{}}function sT(){this.g=new Jt}function iT(a,d,f){const v=f||"";try{Ld(a,function(V,F){let Q=V;u(V)&&(Q=Ts(V)),d.push(v+F+"="+encodeURIComponent(Q))})}catch(V){throw d.push(v+"type="+encodeURIComponent("_badmap")),V}}function Si(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Si,ws),Si.prototype.g=function(){return new ea(this.l,this.j)},Si.prototype.i=function(a){return function(){return a}}({});function ea(a,d){oe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ea,oe),t=ea.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Pi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function qd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ci(this):Pi(this),this.readyState==3&&qd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ci(this))},t.Qa=function(a){this.g&&(this.response=a,Ci(this))},t.ga=function(){this.g&&Ci(this)};function Ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Pi(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hd(a){let d="";return k(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function fl(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=Hd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):ze(a,d,f))}function Ze(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ze,oe);var oT=/^https?$/i,aT=["POST","PUT"];t=Ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ol.g(),this.v=this.o?vd(this.o):vd(ol),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(F){Kd(this,F);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)f.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())f.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(F=>F.toLowerCase()=="content-type"),V=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(aT,d,void 0))||v||V||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of f)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zd(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){Kd(this,F)}};function Kd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Gd(a),ta(a)}function Gd(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ta(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wd(this):this.bb())},t.bb=function(){Wd(this)};function Wd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Oe(a.Ea,0,a);else if(de(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=Q===0){var V=String(a.D).match(xd)[1]||null;!V&&c.self&&c.self.location&&(V=c.self.location.protocol.slice(0,-1)),v=!oT.test(V?V.toLowerCase():"")}f=v}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var F=2<Nn(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",Gd(a)}}finally{ta(a)}}}}function ta(a,d){if(a.g){zd(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||de(a,"ready");try{f.onreadystatechange=v}catch{}}}function zd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ct(d)}};function Qd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cT(a){const d={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(D(a[v]))continue;var f=I(a[v]);const V=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const F=d[V]||[];d[V]=F,F.push(f)}E(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Yd(a){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,a),this.cb=ki("retryDelaySeedMs",1e4,a),this.Wa=ki("forwardChannelMaxRetries",2,a),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Od(a&&a.concurrentRequestLimit),this.Da=new sT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yd.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,v){Pt(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=of(this,null,this.W),ra(this)};function pl(a){if(Jd(a),a.G==3){var d=a.U++,f=Dn(a.I);if(ze(f,"SID",a.K),ze(f,"RID",d),ze(f,"TYPE","terminate"),Oi(a,f),d=new ar(a,a.j,d),d.L=2,d.v=Zo(Dn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=af(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Yo(d)}sf(a)}function na(a){a.g&&(gl(a),a.g.cancel(),a.g=null)}function Jd(a){na(a),a.u&&(c.clearTimeout(a.u),a.u=null),sa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ra(a){if(!Dd(a.h)&&!a.s){a.s=!0;var d=a.Ga;le||ue(),Z||(le(),Z=!0),Ee.add(d,a),a.B=0}}function lT(a,d){return Nd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ti(m(a.Ga,a,d),rf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const V=new ar(this,this.j,a);let F=this.o;if(this.S&&(F?(F=_(F),y(F,this.S)):F=this.S),this.m!==null||this.O||(V.H=F,F=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Zd(this,V,d),f=Dn(this.I),ze(f,"RID",a),ze(f,"CVER",22),this.D&&ze(f,"X-HTTP-Session-Id",this.D),Oi(this,f),F&&(this.O?d="headers="+encodeURIComponent(String(Hd(F)))+"&"+d:this.m&&fl(f,this.m,F)),dl(this.h,V),this.Ua&&ze(f,"TYPE","init"),this.P?(ze(f,"$req",d),ze(f,"SID","null"),V.T=!0,cl(V,f,null)):cl(V,f,d),this.G=2}}else this.G==3&&(a?Xd(this,a):this.i.length==0||Dd(this.h)||Xd(this))};function Xd(a,d){var f;d?f=d.l:f=a.U++;const v=Dn(a.I);ze(v,"SID",a.K),ze(v,"RID",f),ze(v,"AID",a.T),Oi(a,v),a.m&&a.o&&fl(v,a.m,a.o),f=new ar(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Zd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),dl(a.h,f),cl(f,v,d)}function Oi(a,d){a.H&&k(a.H,function(f,v){ze(d,v,f)}),a.l&&Ld({},function(f,v){ze(d,v,f)})}function Zd(a,d,f){f=Math.min(a.i.length,f);var v=a.l?m(a.l.Na,a.l,a):null;e:{var V=a.i;let F=-1;for(;;){const Q=["count="+f];F==-1?0<f?(F=V[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let qe=!0;for(let mt=0;mt<f;mt++){let Ne=V[mt].g;const Et=V[mt].map;if(Ne-=F,0>Ne)F=Math.max(0,V[mt].g-100),qe=!1;else try{iT(Et,Q,"req"+Ne+"_")}catch{v&&v(Et)}}if(qe){v=Q.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,v}function ef(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;le||ue(),Z||(le(),Z=!0),Ee.add(d,a),a.v=0}}function ml(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ti(m(a.Fa,a),rf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,tf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ti(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),na(this),tf(this))};function gl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function tf(a){a.g=new ar(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Dn(a.qa);ze(d,"RID","rpc"),ze(d,"SID",a.K),ze(d,"AID",a.T),ze(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&ze(d,"TO",a.ja),ze(d,"TYPE","xmlhttp"),Oi(a,d),a.m&&a.o&&fl(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zo(Dn(d)),f.m=null,f.P=!0,Cd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,na(this),ml(this),Pt(19))};function sa(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function nf(a,d){var f=null;if(a.g==d){sa(a),gl(a),a.g=null;var v=2}else if(hl(a.h,d))f=d.D,Vd(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var V=a.B;v=Wo(),de(v,new Ad(v,f)),ra(a)}else ef(a);else if(V=d.s,V==3||V==0&&0<d.X||!(v==1&&lT(a,d)||v==2&&ml(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),V){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function rf(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function jr(a,d){if(a.j.info("Error code "+d),d==2){var f=m(a.fb,a),v=a.Xa;const V=!v;v=new $r(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Jo(v,"https"),Zo(v),V?nT(v.toString(),f):rT(v.toString(),f)}else Pt(2);a.G=0,a.l&&a.l.sa(d),sf(a),Jd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function sf(a){if(a.G=0,a.ka=[],a.l){const d=Md(a.h);(d.length!=0||a.i.length!=0)&&(N(a.ka,d),N(a.ka,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.ra()}}function of(a,d,f){var v=f instanceof $r?Dn(f):new $r(f);if(v.g!="")d&&(v.g=d+"."+v.g),Xo(v,v.s);else{var V=c.location;v=V.protocol,d=d?d+"."+V.hostname:V.hostname,V=+V.port;var F=new $r(null);v&&Jo(F,v),d&&(F.g=d),V&&Xo(F,V),f&&(F.l=f),v=F}return f=a.D,d=a.ya,f&&d&&ze(v,f,d),ze(v,"VER",a.la),Oi(a,v),v}function af(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Ze(new Si({eb:f})):new Ze(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cf(){}t=cf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ia(){}ia.prototype.g=function(a,d){return new jt(a,d)};function jt(a,d){oe.call(this),this.g=new Yd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!D(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!D(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new bs(this)}C(jt,oe),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){pl(this.g)},jt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ts(a),a=f);d.i.push(new GE(d.Ya++,a)),d.G==3&&ra(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,jt.aa.N.call(this)};function lf(a){sl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(lf,sl);function uf(){il.call(this),this.status=1}C(uf,il);function bs(a){this.g=a}C(bs,cf),bs.prototype.ua=function(){de(this.g,"a")},bs.prototype.ta=function(a){de(this.g,new lf(a))},bs.prototype.sa=function(a){de(this.g,new uf)},bs.prototype.ra=function(){de(this.g,"b")},ia.prototype.createWebChannel=ia.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Ev=function(){return new ia},vv=function(){return Wo()},yv=Ur,bu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zo.NO_ERROR=0,zo.TIMEOUT=8,zo.HTTP_ERROR=6,Da=zo,bd.COMPLETE="complete",_v=bd,Ed.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Bi=Ed,gv=Si,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,mv=Ze}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const tm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Mc("@firebase/firestore");function Mi(){return ls.logLevel}function ie(t,...e){if(ls.logLevel<=Se.DEBUG){const n=e.map(Uh);ls.debug(`Firestore (${di}): ${t}`,...n)}}function Qn(t,...e){if(ls.logLevel<=Se.ERROR){const n=e.map(Uh);ls.error(`Firestore (${di}): ${t}`,...n)}}function ti(t,...e){if(ls.logLevel<=Se.WARN){const n=e.map(Uh);ls.warn(`Firestore (${di}): ${t}`,...n)}}function Uh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function We(t,e){t||_e()}function Te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class b1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R1{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new Tv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new At(e)}}class S1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class C1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new S1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new P1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=O1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Le(t,e){return t<e?-1:t>e?1:0}function ni(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ut(0,0))}static max(){return new ve(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Qe extends yo{construct(e,n,r){return new Qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Qe(n)}static emptyPath(){return new Qe([])}}const D1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends yo{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return D1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Qe.fromString(e))}static fromName(e){return new he(Qe.fromString(e).popFirst(5))}static empty(){return new he(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Qe(e.slice()))}}function N1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ve.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Nr(s,he.empty(),e)}function V1(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(ve.min(),he.empty(),-1)}static max(){return new Nr(ve.max(),he.empty(),-1)}}function M1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class x1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==L1)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function F1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bh.oe=-1;function jc(t){return t==null}function oc(t){return t===0&&1/t==-1/0}function U1(t){return typeof t=="number"&&Number.isInteger(t)&&!oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=i??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rm(this.data.getIterator())}getIteratorFrom(e){return new rm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class rm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new yt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Av("Invalid base64 string: "+i):i}}(e);return new St(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const B1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(We(!!t),typeof t=="string"){let e=0;const n=B1.exec(t);if(We(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function jh(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?jh(e):e}function vo(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:j1(t)?9007199254740991:10:_e()}function On(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vr(s.timestampValue),c=Vr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return us(s.bytesValue).isEqual(us(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=st(s.doubleValue),c=st(i.doubleValue);return o===c?oc(o)===oc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ni(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(nm(o)!==nm(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!On(o[l],c[l])))return!1;return!0}(t,e);default:return _e()}}function To(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function ri(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return Le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=st(i.integerValue||i.doubleValue),l=st(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return sm(t.timestampValue,e.timestampValue);case 4:return sm(vo(t),vo(e));case 5:return Le(t.stringValue,e.stringValue);case 6:return function(i,o){const c=us(i),l=us(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=Le(c[u],l[u]);if(h!==0)return h}return Le(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Le(st(i.latitude),st(o.latitude));return c!==0?c:Le(st(i.longitude),st(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const h=ri(c[u],l[u]);if(h)return h}return Le(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ia.mapValue&&o===Ia.mapValue)return 0;if(i===Ia.mapValue)return 1;if(o===Ia.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const m=Le(l[p],h[p]);if(m!==0)return m;const T=ri(c[l[p]],u[h[p]]);if(T!==0)return T}return Le(l.length,h.length)}(t.mapValue,e.mapValue);default:throw _e()}}function sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Le(t,e);const n=Vr(t),r=Vr(e),s=Le(n.seconds,r.seconds);return s!==0?s:Le(n.nanos,r.nanos)}function si(t){return Ru(t)}function Ru(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ru(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ru(n.fields[o])}`;return s+"}"}(t.mapValue):_e()}function im(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Su(t){return!!t&&"integerValue"in t}function qh(t){return!!t&&"arrayValue"in t}function om(t){return!!t&&"nullValue"in t}function am(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Na(t){return!!t&&"mapValue"in t}function Zi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function j1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zi(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Zi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Na(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(Zi(this.value))}}function bv(t){const e=[];return vs(t.fields,(n,r)=>{const s=new _t([n]);if(Na(r)){const i=bv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new bt(e,0,ve.min(),ve.min(),ve.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,ve.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,ve.min(),ve.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,ve.min(),ve.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.position=e,this.inclusive=n}}function cm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=ri(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function lm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n="asc"){this.field=e,this.dir=n}}function q1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{}class it extends Rv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new K1(e,n,r):n==="array-contains"?new z1(e,r):n==="in"?new Q1(e,r):n==="not-in"?new Y1(e,r):n==="array-contains-any"?new J1(e,r):new it(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new G1(e,r):new W1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ri(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Rv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return Sv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sv(t){return t.op==="and"}function Cv(t){return H1(t)&&Sv(t)}function H1(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Cu(t){if(t instanceof it)return t.field.canonicalString()+t.op.toString()+si(t.value);if(Cv(t))return t.filters.map(e=>Cu(e)).join(",");{const e=t.filters.map(n=>Cu(n)).join(",");return`${t.op}(${e})`}}function Pv(t,e){return t instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&On(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Pv(o,s.filters[c]),!0):!1}(t,e):void _e()}function kv(t){return t instanceof it?function(n){return`${n.field.canonicalString()} ${n.op} ${si(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(kv).join(" ,")+"}"}(t):"Filter"}class K1 extends it{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class G1 extends it{constructor(e,n){super(e,"in",n),this.keys=Ov("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W1 extends it{constructor(e,n){super(e,"not-in",n),this.keys=Ov("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ov(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class z1 extends it{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qh(n)&&To(n.arrayValue,this.value)}}class Q1 extends it{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class Y1 extends it{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class J1 extends it{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function um(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X1(t,e,n,r,s,i,o)}function Hh(t){const e=Te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),e.ue=n}return e.ue}function Kh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!q1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!lm(t.startAt,e.startAt)&&lm(t.endAt,e.endAt)}function Pu(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Z1(t,e,n,r,s,i,o,c){return new $o(t,e,n,r,s,i,o,c)}function Gh(t){return new $o(t)}function hm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Dv(t){return t.collectionGroup!==null}function eo(t){const e=Te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new yt(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new cc(i,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new cc(_t.keyField(),r))}return e.ce}function Sn(t){const e=Te(t);return e.le||(e.le=ek(e,eo(t))),e.le}function ek(t,e){if(t.limitType==="F")return um(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new cc(s.field,i)});const n=t.endAt?new ac(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ac(t.startAt.position,t.startAt.inclusive):null;return um(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ku(t,e){const n=t.filters.concat([e]);return new $o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ou(t,e,n){return new $o(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qc(t,e){return Kh(Sn(t),Sn(e))&&t.limitType===e.limitType}function Nv(t){return`${Hh(Sn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>kv(s)).join(", ")}]`),jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>si(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>si(s)).join(",")),`Target(${r})`}(Sn(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of eo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=cm(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,eo(r),s)||r.endAt&&!function(o,c,l){const u=cm(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,eo(r),s))}(t,e)}function tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Vv(t){return(e,n)=>{let r=!1;for(const s of eo(t)){const i=nk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nk(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ri(l,u):_e()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return _e()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Iv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new Xe(he.comparator);function Yn(){return rk}const Mv=new Xe(he.comparator);function $i(...t){let e=Mv;for(const n of t)e=e.insert(n.key,n);return e}function Lv(t){let e=Mv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return to()}function xv(){return to()}function to(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const sk=new Xe(he.comparator),ik=new yt(he.comparator);function be(...t){let e=ik;for(const n of t)e=e.add(n);return e}const ok=new yt(Le);function ak(){return ok}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function Uv(t){return{integerValue:""+t}}function ck(t,e){return U1(e)?Uv(e):Fv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this._=void 0}}function lk(t,e,n){return t instanceof lc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$h(i)&&(i=jh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof wo?$v(t,e):t instanceof Io?jv(t,e):function(s,i){const o=Bv(s,i),c=dm(o)+dm(s.Pe);return Su(o)&&Su(s.Pe)?Uv(c):Fv(s.serializer,c)}(t,e)}function uk(t,e,n){return t instanceof wo?$v(t,e):t instanceof Io?jv(t,e):n}function Bv(t,e){return t instanceof uc?function(r){return Su(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class lc extends Kc{}class wo extends Kc{constructor(e){super(),this.elements=e}}function $v(t,e){const n=qv(e);for(const r of t.elements)n.some(s=>On(s,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends Kc{constructor(e){super(),this.elements=e}}function jv(t,e){let n=qv(e);for(const r of t.elements)n=n.filter(s=>!On(s,r));return{arrayValue:{values:n}}}class uc extends Kc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dm(t){return st(t.integerValue||t.doubleValue)}function qv(t){return qh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof wo&&s instanceof wo||r instanceof Io&&s instanceof Io?ni(r.elements,s.elements,On):r instanceof uc&&s instanceof uc?On(r.Pe,s.Pe):r instanceof lc&&s instanceof lc}(t.transform,e.transform)}class dk{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gc{}function Hv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wh(t.key,pn.none()):new jo(t.key,t.data,pn.none());{const n=t.data,r=Mt.empty();let s=new yt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fr(t.key,r,new Gt(s.toArray()),pn.none())}}function fk(t,e,n){t instanceof jo?function(s,i,o){const c=s.value.clone(),l=pm(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(s,i,o){if(!Va(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=pm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Kv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function no(t,e,n,r){return t instanceof jo?function(i,o,c,l){if(!Va(i.precondition,o))return c;const u=i.value.clone(),h=mm(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,o,c,l){if(!Va(i.precondition,o))return c;const u=mm(i.fieldTransforms,l,o),h=o.data;return h.setAll(Kv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Va(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function pk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Bv(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ni(r,s,(i,o)=>hk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jo extends Gc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends Gc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function pm(t,e,n){const r=new Map;We(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,uk(o,c,n[s]))}return r}function mm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,lk(i,o,e))}return r}class Wh extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mk extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Hv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(n,r)=>fm(n,r))&&ni(this.baseMutations,e.baseMutations,(n,r)=>fm(n,r))}}class zh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){We(e.mutations.length===r.length);let s=function(){return sk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,Pe;function vk(t){switch(t){default:return _e();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Gv(t){if(t===void 0)return Qn("GRPC error has no .code"),q.UNKNOWN;switch(t){case rt.OK:return q.OK;case rt.CANCELLED:return q.CANCELLED;case rt.UNKNOWN:return q.UNKNOWN;case rt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case rt.INTERNAL:return q.INTERNAL;case rt.UNAVAILABLE:return q.UNAVAILABLE;case rt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case rt.NOT_FOUND:return q.NOT_FOUND;case rt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case rt.ABORTED:return q.ABORTED;case rt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case rt.DATA_LOSS:return q.DATA_LOSS;default:return _e()}}(Pe=rt||(rt={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new es([4294967295,4294967295],0);function gm(t){const e=Ek().encode(t),n=new pv;return n.update(e),new Uint8Array(n.digest())}function _m(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class Qh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ji(`Invalid padding: ${n}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ji(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(Tk)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=gm(e),[r,s]=_m(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Qh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=gm(e),[r,s]=_m(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wc(ve.min(),s,new Xe(Le),Yn(),be())}}class qo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qo(r,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Wv{constructor(e,n){this.targetId=e,this.me=n}}class zv{constructor(e,n,r=St.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ym{constructor(){this.fe=0,this.ge=Em(),this.pe=St.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=be(),n=be(),r=be();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:_e()}}),new qo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Em()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Yn(),this.qe=vm(),this.Qe=new Xe(Le)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Pu(i))if(r===0){const o=new he(i.path);this.Ue(n,o,bt.newNoDocument(o,ve.min()))}else We(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=us(r).toUint8Array()}catch(l){if(l instanceof Av)return ti("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Qh(o,s,i)}catch(l){return ti(l instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Pu(c.target)){const l=new he(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,bt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=be();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Wc(e,n,this.Qe,this.ke,r);return this.ke=Yn(),this.qe=vm(),this.Qe=new Xe(Le),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ym,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new yt(Le),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ym),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vm(){return new Xe(he.comparator)}function Em(){return new Xe(he.comparator)}const Ik={asc:"ASCENDING",desc:"DESCENDING"},Ak={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bk={and:"AND",or:"OR"};class Rk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Du(t,e){return t.useProto3Json||jc(e)?e:{value:e}}function hc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Qv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sk(t,e){return hc(t,e.toTimestamp())}function Cn(t){return We(!!t),ve.fromTimestamp(function(n){const r=Vr(n);return new ut(r.seconds,r.nanos)}(t))}function Yh(t,e){return Nu(t,e).canonicalString()}function Nu(t,e){const n=function(s){return new Qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Yv(t){const e=Qe.fromString(t);return We(tE(e)),e}function Vu(t,e){return Yh(t.databaseId,e.path)}function Bl(t,e){const n=Yv(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Xv(n))}function Jv(t,e){return Yh(t.databaseId,e)}function Ck(t){const e=Yv(t);return e.length===4?Qe.emptyPath():Xv(e)}function Mu(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xv(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tm(t,e,n){return{name:Vu(t,e),fields:n.value.mapValue.fields}}function Pk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(We(h===void 0||typeof h=="string"),St.fromBase64String(h||"")):(We(h===void 0||h instanceof Buffer||h instanceof Uint8Array),St.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?q.UNKNOWN:Gv(u.code);return new ne(h,u.message||"")}(o);n=new zv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bl(t,r.document.name),i=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):ve.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ma(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bl(t,r.document),i=r.readTime?Cn(r.readTime):ve.min(),o=bt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ma([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bl(t,r.document),i=r.removedTargetIds||[];n=new Ma([],i,s,null)}else{if(!("filter"in e))return _e();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yk(s,i),c=r.targetId;n=new Wv(c,o)}}return n}function kk(t,e){let n;if(e instanceof jo)n={update:Tm(t,e.key,e.value)};else if(e instanceof Wh)n={delete:Vu(t,e.key)};else if(e instanceof Fr)n={update:Tm(t,e.key,e.data),updateMask:Uk(e.fieldMask)};else{if(!(e instanceof mk))return _e();n={verify:Vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof lc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof uc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e()}(t,e.precondition)),n}function Ok(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Cn(s.updateTime):Cn(i);return o.isEqual(ve.min())&&(o=Cn(i)),new dk(o,s.transformResults||[])}(n,e))):[]}function Dk(t,e){return{documents:[Jv(t,e.path)]}}function Nk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Jv(t,s);const i=function(u){if(u.length!==0)return eE(yn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Os(m.field),direction:Lk(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Du(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function Vk(t){let e=Ck(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){We(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const m=Zv(p);return m instanceof yn&&Cv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new cc(Ds(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,jc(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,T=p.values||[];return new ac(T,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,T=p.values||[];return new ac(T,m)}(n.endAt)),Z1(e,s,o,i,c,"F",l,u)}function Mk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(n.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(n.unaryFilter.field);return it.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return it.create(o,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(t):t.fieldFilter!==void 0?function(n){return it.create(Ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>Zv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return _e()}}(n.compositeFilter.op))}(t):_e()}function Lk(t){return Ik[t]}function xk(t){return Ak[t]}function Fk(t){return bk[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ds(t){return _t.fromServerFormat(t.fieldPath)}function eE(t){return t instanceof it?function(n){if(n.op==="=="){if(am(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(om(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(am(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(om(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:xk(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>eE(s));return r.length===1?r[0]:{compositeFilter:{op:Fk(n.op),filters:r}}}(t):_e()}function Uk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r,s,i=ve.min(),o=ve.min(),c=St.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.ct=e}}function $k(t){const e=Vk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ou(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(){this._n=new qk}addToCollectionParentIndex(e,n){return this._n.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Nr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class qk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new yt(Qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new yt(Qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ii(0)}static Ln(){return new ii(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&no(r.mutation,s,Gt.empty(),ut.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,be()).next(()=>r))}getLocalViewOfDocuments(e,n,r=be()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=$i();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,be()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Yn();const o=to(),c=function(){return to()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Fr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),no(h.mutation,u,h.mutation.getFieldMask(),ut.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var p;return c.set(u,new Kk(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=to();let s=new Xe((o,c)=>o-c),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Gt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||be()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=xv();h.forEach(m=>{if(!i.has(m)){const T=Hv(n.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Dv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(Qr());let c=-1,l=i;return o.next(u=>K.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,be())).next(h=>({batchId:c,changes:Lv(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=$i();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=$i();return this.indexManager.getCollectionParents(e,i).next(c=>K.forEach(c,l=>{const u=function(p,m){return new $o(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let c=$i();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&no(h.mutation,u,Gt.empty(),ut.now()),Hc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return K.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Cn(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:$k(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.overlays=new Xe(he.comparator),this.hr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new he(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Qr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Qr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return K.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _k(n,r));let i=this.hr.get(n);i===void 0&&(i=be(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(){this.Pr=new yt(ft.Ir),this.Tr=new yt(ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ft(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new he(new Qe([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new he(new Qe([])),r=new ft(n,e),s=new ft(n,e+1);let i=be();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return he.comparator(e.key,n.key)||Le(e.pr,n.pr)}static Er(e,n){return Le(e.pr,n.pr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new yt(ft.Ir)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new ft(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new yt(Le);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),K.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ft(new he(i),0);let c=new yt(Le);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),K.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){We(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return K.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ft(n,0),s=this.wr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.vr=e,this.docs=function(){return new Xe(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Yn();const o=n.path,c=new he(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||M1(V1(h),r)<=0||(s.has(h.key)||Hc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){_e()}Fr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jk(this)}getSize(e){return K.resolve(this.size)}}class Jk extends Hk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.persistence=e,this.Mr=new fi(n=>Hh(n),Kh),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Jh,this.targetCount=0,this.Lr=ii.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),K.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ii(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.qn(n),K.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n){this.Br={},this.overlays={},this.kr=new Bh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Xk(this),this.indexManager=new jk,this.remoteDocumentCache=function(s){return new Yk(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Bk(n),this.$r=new Wk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Qk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new eO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class eO extends x1{constructor(e){super(),this.currentSequenceNumber=e}}class Xh{constructor(e){this.persistence=e,this.zr=new Jh,this.jr=null}static Hr(e){return new Xh(e)}get Jr(){if(this.jr)return this.jr;throw _e()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),K.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Jr,r=>{const s=he.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ve.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return K.or([()=>K.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=be(),s=be();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Kb()?8:F1(vt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new tO;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Mi()<=Se.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),K.resolve()):(Mi()<=Se.DEBUG&&ie("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Mi()<=Se.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):K.resolve())}ji(e,n){if(hm(n))return K.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ou(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=be(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Ou(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return hm(n)||s.isEqual(ve.min())?K.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?K.resolve(null):(Mi()<=Se.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(n)),this.es(e,o,n,N1(s,-1)).next(c=>c))})}Zi(e,n){let r=new yt(Vv(e));return n.forEach((s,i)=>{Hc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Mi()<=Se.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ks(n)),this.zi.getDocumentsMatchingQuery(e,n,Nr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Xe(Le),this.rs=new fi(i=>Hh(i),Kh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function sO(t,e,n,r){return new rO(t,e,n,r)}async function nE(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=be();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function iO(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,m=p.keys();let T=K.resolve();return m.forEach(C=>{T=T.next(()=>h.getEntry(l,C)).next(M=>{const N=u.docVersions.get(C);We(N!==null),M.version.compareTo(N)<0&&(p.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),h.addEntry(M)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=be();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function rE(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function oO(t,e){const n=Te(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;c.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,p)));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(St.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):h.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(h.resumeToken,r)),s=s.insert(p,T),function(M,N,U){return M.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(m,T,h)&&c.push(n.Qr.updateTargetData(i,T))});let l=Yn(),u=be();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(aO(i,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!r.isEqual(ve.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return K.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function aO(t,e,n){let r=be(),s=be();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Yn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ve.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ie("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function cO(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lO(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Lu(t,e,n){const r=Te(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Bo(o))throw o;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function wm(t,e,n){const r=Te(t);let s=ve.min(),i=be();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=Te(l),m=p.rs.get(h);return m!==void 0?K.resolve(p.ns.get(m)):p.Qr.getTargetData(u,h)}(r,o,Sn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ve.min(),n?i:be())).next(c=>(uO(r,tk(e),c),{documents:c,hs:i})))}function uO(t,e,n){let r=t.ss.get(e)||ve.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Im{constructor(){this.activeTargetIds=ak()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hO{constructor(){this.no=new Im,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Im,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa=null;function $l(){return Aa===null?Aa=function(){return 268435456+Math.round(2147483648*Math.random())}():Aa++,"0x"+Aa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class mO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=$l(),l=this.vo(n,r.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(h=>(ie("RestConnection",`Received RPC '${n}' ${c}: `,h),h),h=>{throw ti("RestConnection",`RPC '${n}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+di}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=fO[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=$l();return new Promise((o,c)=>{const l=new mv;l.setWithCredentials(!0),l.listenOnce(_v.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Da.NO_ERROR:const h=l.getResponseJson();ie(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Da.TIMEOUT:ie(wt,`RPC '${e}' ${i} timed out`),c(new ne(q.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const p=l.getStatus();if(ie(wt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const C=function(N){const U=N.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(U)>=0?U:q.UNKNOWN}(T.status);c(new ne(C,T.message))}else c(new ne(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ne(q.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ie(wt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ie(wt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=$l(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Ev(),c=vv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new gv({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ie(wt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let m=!1,T=!1;const C=new pO({lo:N=>{T?ie(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(ie(wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),ie(wt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},ho:()=>p.close()}),M=(N,U,D)=>{N.listen(U,S=>{try{D(S)}catch(O){setTimeout(()=>{throw O},0)}})};return M(p,Bi.EventType.OPEN,()=>{T||(ie(wt,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),M(p,Bi.EventType.CLOSE,()=>{T||(T=!0,ie(wt,`RPC '${e}' stream ${s} transport closed`),C.po())}),M(p,Bi.EventType.ERROR,N=>{T||(T=!0,ti(wt,`RPC '${e}' stream ${s} transport errored:`,N),C.po(new ne(q.UNAVAILABLE,"The operation could not be completed")))}),M(p,Bi.EventType.MESSAGE,N=>{var U;if(!T){const D=N.data[0];We(!!D);const S=D,O=S.error||((U=S[0])===null||U===void 0?void 0:U.error);if(O){ie(wt,`RPC '${e}' stream ${s} received error:`,O);const x=O.status;let k=function(g){const y=rt[g];if(y!==void 0)return Gv(y)}(x),E=O.message;k===void 0&&(k=q.INTERNAL,E="Unknown error status: "+x+" with message "+O.message),T=!0,C.po(new ne(k,E)),p.close()}else ie(wt,`RPC '${e}' stream ${s} received:`,D),C.yo(D)}}),M(c,yv.STAT_EVENT,N=>{N.stat===bu.PROXY?ie(wt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===bu.NOPROXY&&ie(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return new Rk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new sE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new ne(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gO extends iE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Pk(this.serializer,e),r=function(i){if(!("targetChange"in i))return ve.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?Cn(o.readTime):ve.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Mu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Pu(l)?{documents:Dk(i,l)}:{query:Nk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Qv(i,o.resumeToken);const u=Du(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ve.min())>0){c.readTime=hc(i,o.snapshotVersion.toTimestamp());const u=Du(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Mk(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Mu(this.serializer),n.removeTarget=e,this.i_(n)}}class _O extends iE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Ok(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.A_(r,n)}return We(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Mu(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kk(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,Nu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(q.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Nu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(q.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class vO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Qn(n),this.y_=!1):ie("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{Es(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Te(l);u.M_.add(4),await Ho(u),u.N_.set("Unknown"),u.M_.delete(4),await Qc(u)}(this))})}),this.N_=new vO(r,s)}}async function Qc(t){if(Es(t))for(const e of t.x_)await e(!0)}async function Ho(t){for(const e of t.x_)await e(!1)}function oE(t,e){const n=Te(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),rd(n)?nd(n):pi(n).Xo()&&td(n,e))}function ed(t,e){const n=Te(t),r=pi(n);n.F_.delete(e),r.Xo()&&aE(n,e),n.F_.size===0&&(r.Xo()?r.n_():Es(n)&&n.N_.set("Unknown"))}function td(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pi(t).P_(e)}function aE(t,e){t.L_.xe(e),pi(t).I_(e)}function nd(t){t.L_=new wk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),pi(t).start(),t.N_.w_()}function rd(t){return Es(t)&&!pi(t).Zo()&&t.F_.size>0}function Es(t){return Te(t).M_.size===0}function cE(t){t.L_=void 0}async function TO(t){t.N_.set("Online")}async function wO(t){t.F_.forEach((e,n)=>{td(t,e)})}async function IO(t,e){cE(t),rd(t)?(t.N_.D_(e),nd(t)):t.N_.set("Unknown")}async function AO(t,e,n){if(t.N_.set("Online"),e instanceof zv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dc(t,r)}else if(e instanceof Ma?t.L_.Ke(e):e instanceof Wv?t.L_.He(e):t.L_.We(e),!n.isEqual(ve.min()))try{const r=await rE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.F_.get(u);h&&i.F_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.F_.get(l);if(!h)return;i.F_.set(l,h.withResumeToken(St.EMPTY_BYTE_STRING,h.snapshotVersion)),aE(i,l);const p=new Ar(h.target,l,u,h.sequenceNumber);td(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ie("RemoteStore","Failed to raise snapshot:",r),await dc(t,r)}}async function dc(t,e,n){if(!Bo(e))throw e;t.M_.add(1),await Ho(t),t.N_.set("Offline"),n||(n=()=>rE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Qc(t)})}function lE(t,e){return e().catch(n=>dc(t,n,e))}async function Yc(t){const e=Te(t),n=Mr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;bO(e);)try{const s=await cO(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,RO(e,s)}catch(s){await dc(e,s)}uE(e)&&hE(e)}function bO(t){return Es(t)&&t.v_.length<10}function RO(t,e){t.v_.push(e);const n=Mr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function uE(t){return Es(t)&&!Mr(t).Zo()&&t.v_.length>0}function hE(t){Mr(t).start()}async function SO(t){Mr(t).V_()}async function CO(t){const e=Mr(t);for(const n of t.v_)e.d_(n.mutations)}async function PO(t,e,n){const r=t.v_.shift(),s=zh.from(r,e,n);await lE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Yc(t)}async function kO(t,e){e&&Mr(t).E_&&await async function(r,s){if(function(o){return vk(o)&&o!==q.ABORTED}(s.code)){const i=r.v_.shift();Mr(r).t_(),await lE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yc(r)}}(t,e),uE(t)&&hE(t)}async function bm(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.M_.add(3),await Ho(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Qc(n)}async function OO(t,e){const n=Te(t);e?(n.M_.delete(2),await Qc(n)):e||(n.M_.add(2),await Ho(n),n.N_.set("Unknown"))}function pi(t){return t.B_||(t.B_=function(n,r,s){const i=Te(n);return i.f_(),new gO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:TO.bind(null,t),To:wO.bind(null,t),Ao:IO.bind(null,t),h_:AO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),rd(t)?nd(t):t.N_.set("Unknown")):(await t.B_.stop(),cE(t))})),t.B_}function Mr(t){return t.k_||(t.k_=function(n,r,s){const i=Te(n);return i.f_(),new _O(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:SO.bind(null,t),Ao:kO.bind(null,t),R_:CO.bind(null,t),A_:PO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Yc(t)):(await t.k_.stop(),t.v_.length>0&&(ie("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new sd(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function id(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Bo(t))return new ne(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=$i(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Ws(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ws)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ws;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.q_=new Xe(he.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):_e():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oi{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new oi(e,n,Ws.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class NO{constructor(){this.queries=new fi(e=>Nv(e),qc),this.onlineState="Unknown",this.z_=new Set}}async function dE(t,e){const n=Te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new DO,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=id(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&od(n)}async function fE(t,e){const n=Te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VO(t,e){const n=Te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&od(n)}function MO(t,e,n){const r=Te(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function od(t){t.z_.forEach(e=>{e.next()})}var xu,Sm;(Sm=xu||(xu={})).J_="default",Sm.Cache="cache";class pE{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==xu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class LO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=be(),this.mutatedKeys=be(),this.Ia=Vv(e),this.Ta=new Ws(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Rm,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),T=Hc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),M=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let N=!1;m&&T?m.data.isEqual(T.data)?C!==M&&(r.track({type:3,doc:T}),N=!0):this.Ra(m,T)||(r.track({type:2,doc:T}),N=!0,(l&&this.Ia(T,l)>0||u&&this.Ia(T,u)<0)&&(c=!0)):!m&&T?(r.track({type:0,doc:T}),N=!0):m&&!T&&(r.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(T?(o=o.add(T),i=M?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,p)=>function(T,C){const M=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return M(T)-M(C)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new oi(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Rm,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=be(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new gE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new mE(r))}),n}pa(e){this.la=e.hs,this.Pa=be();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return oi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class xO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FO{constructor(e){this.key=e,this.wa=!1}}class UO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new fi(c=>Nv(c),qc),this.Da=new Map,this.Ca=new Set,this.va=new Xe(he.comparator),this.Fa=new Map,this.Ma=new Jh,this.xa={},this.Oa=new Map,this.Na=ii.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function BO(t,e,n=!0){const r=wE(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await _E(r,e,n,!0),s}async function $O(t,e){const n=wE(t);await _E(n,e,!0,!1)}async function _E(t,e,n,r){const s=await lO(t.localStore,Sn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await jO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&oE(t.remoteStore,s),c}async function jO(t,e,n,r,s){t.Ba=(p,m,T)=>async function(M,N,U,D){let S=N.view.da(U);S.Xi&&(S=await wm(M.localStore,N.query,!1).then(({documents:E})=>N.view.da(E,S)));const O=D&&D.targetChanges.get(N.targetId),x=D&&D.targetMismatches.get(N.targetId)!=null,k=N.view.applyChanges(S,M.isPrimaryClient,O,x);return Pm(M,N.targetId,k.fa),k.snapshot}(t,p,m,T);const i=await wm(t.localStore,e,!0),o=new LO(e,i.hs),c=o.da(i.documents),l=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Pm(t,n,u.fa);const h=new xO(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function qO(t,e,n){const r=Te(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!qc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ed(r.remoteStore,s.targetId),Fu(r,s.targetId)}).catch(Uo)):(Fu(r,s.targetId),await Lu(r.localStore,s.targetId,!0))}async function HO(t,e){const n=Te(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ed(n.remoteStore,r.targetId))}async function KO(t,e,n){const r=XO(t);try{const s=await function(o,c){const l=Te(o),u=ut.now(),h=c.reduce((T,C)=>T.add(C.key),be());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let C=Yn(),M=be();return l.os.getEntries(T,h).next(N=>{C=N,C.forEach((U,D)=>{D.isValidDocument()||(M=M.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,C)).next(N=>{p=N;const U=[];for(const D of c){const S=pk(D,p.get(D.key).overlayedDocument);S!=null&&U.push(new Fr(D.key,S,bv(S.value.mapValue),pn.exists(!0)))}return l.mutationQueue.addMutationBatch(T,u,U,c)}).next(N=>{m=N;const U=N.applyToLocalDocumentSet(p,M);return l.documentOverlayCache.saveOverlays(T,N.batchId,U)})}).then(()=>({batchId:m.batchId,changes:Lv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Xe(Le)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ko(r,s.changes),await Yc(r.remoteStore)}catch(s){const i=id(s,"Failed to persist write");n.reject(i)}}async function yE(t,e){const n=Te(t);try{const r=await oO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(We(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?We(o.wa):s.removedDocuments.size>0&&(We(o.wa),o.wa=!1))}),await Ko(n,r,e)}catch(r){await Uo(r)}}function Cm(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Te(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const m of p.U_)m.j_(c)&&(u=!0)}),u&&od(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GO(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Xe(he.comparator);o=o.insert(i,bt.newNoDocument(i,ve.min()));const c=be().add(i),l=new Wc(ve.min(),new Map,new Xe(Le),o,c);await yE(r,l),r.va=r.va.remove(i),r.Fa.delete(e),ad(r)}else await Lu(r.localStore,e,!1).then(()=>Fu(r,e,n)).catch(Uo)}async function WO(t,e){const n=Te(t),r=e.batch.batchId;try{const s=await iO(n.localStore,e);EE(n,r,null),vE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ko(n,s)}catch(s){await Uo(s)}}async function zO(t,e,n){const r=Te(t);try{const s=await function(o,c){const l=Te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(We(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);EE(r,e,n),vE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ko(r,s)}catch(s){await Uo(s)}}function vE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function EE(t,e,n){const r=Te(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||TE(t,r)})}function TE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(ed(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),ad(t))}function Pm(t,e,n){for(const r of n)r instanceof mE?(t.Ma.addReference(r.key,e),QO(t,r)):r instanceof gE?(ie("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||TE(t,r.key)):_e()}function QO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ie("SyncEngine","New document in limbo: "+n),t.Ca.add(r),ad(t))}function ad(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new he(Qe.fromString(e)),r=t.Na.next();t.Fa.set(r,new FO(n)),t.va=t.va.insert(n,r),oE(t.remoteStore,new Ar(Sn(Gh(n.path)),r,"TargetPurposeLimboResolution",Bh.oe))}}async function Ko(t,e,n){const r=Te(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const h=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){s.push(u);const h=Zh.Ki(l.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const h=Te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(u,m=>K.forEach(m.qi,T=>h.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>K.forEach(m.Qi,T=>h.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!Bo(p))throw p;ie("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const T=h.ns.get(m),C=T.snapshotVersion,M=T.withLastLimboFreeSnapshotVersion(C);h.ns=h.ns.insert(m,M)}}}(r.localStore,i))}async function YO(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const r=await nE(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new ne(q.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ko(n,r.us)}}function JO(t,e){const n=Te(t),r=n.Fa.get(e);if(r&&r.wa)return be().add(r.key);{let s=be();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function wE(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GO.bind(null,e),e.Sa.h_=VO.bind(null,e.eventManager),e.Sa.ka=MO.bind(null,e.eventManager),e}function XO(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zO.bind(null,e),e}class km{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sO(this.persistence,new nO,e.initialUser,this.serializer)}createPersistence(e){return new Zk(Xh.Hr,this.serializer)}createSharedClientState(e){return new hO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YO.bind(null,this.syncEngine),await OO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NO}()}createDatastore(e){const n=zc(e.databaseInfo.databaseId),r=function(i){return new mO(i)}(e.databaseInfo);return function(i,o,c,l){return new yO(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new EO(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Cm(this.syncEngine,n,0),function(){return Am.D()?new Am:new dO}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const p=new UO(s,i,o,c,l,u);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=Te(r);ie("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ho(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=wv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ie("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ie("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=id(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ql(t,e){t.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await nE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Om(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nD(t);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>bm(e.remoteStore,s)),t._onlineComponents=e}function tD(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tD(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await ql(t,new km)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await ql(t,new km);return t._offlineComponents}async function AE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await Om(t,t._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await Om(t,new ZO))),t._onlineComponents}function rD(t){return AE(t).then(e=>e.syncEngine)}async function bE(t){const e=await AE(t),n=e.eventManager;return n.onListen=BO.bind(null,e.syncEngine),n.onUnlisten=qO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$O.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HO.bind(null,e.syncEngine),n}function sD(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new IE({next:m=>{o.enqueueAndForget(()=>fE(i,p));const T=m.docs.has(c);!T&&m.fromCache?u.reject(new ne(q.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&l&&l.source==="server"?u.reject(new ne(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new pE(Gh(c.path),h,{includeMetadataChanges:!0,ra:!0});return dE(i,p)}(await bE(t),t.asyncQueue,e,n,r)),r.promise}function iD(t,e,n={}){const r=new Gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new IE({next:m=>{o.enqueueAndForget(()=>fE(i,p)),m.fromCache&&l.source==="server"?u.reject(new ne(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new pE(c,h,{includeMetadataChanges:!0,ra:!0});return dE(i,p)}(await bE(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t,e,n){if(!n)throw new ne(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oD(t,e,n,r){if(e===!0&&r===!0)throw new ne(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nm(t){if(!he.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vm(t){if(he.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jc(t);throw new ne(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new A1;switch(r.type){case"firstParty":return new C1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Dm.get(n);r&&(ie("ComponentProvider","Removing Datastore"),Dm.delete(n),r.terminate())}(this),Promise.resolve()}}function aD(t,e,n,r={}){var s;const i=(t=Jn(t,Xc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=At.MOCK_USER;else{c=Bb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new At(u)}t._authCredentials=new b1(new Tv(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mi(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class Cr extends mi{constructor(e,n,r){super(e,n,Gh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new he(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function ln(t,e,...n){if(t=at(t),SE("collection","path",e),t instanceof Xc){const r=Qe.fromString(e,...n);return Vm(r),new Cr(t,null,r)}{if(!(t instanceof Ut||t instanceof Cr))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return Vm(r),new Cr(t.firestore,null,r)}}function nn(t,e,...n){if(t=at(t),arguments.length===1&&(e=wv.newId()),SE("doc","path",e),t instanceof Xc){const r=Qe.fromString(e,...n);return Nm(r),new Ut(t,null,new he(r))}{if(!(t instanceof Ut||t instanceof Cr))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return Nm(r),new Ut(t.firestore,t instanceof Cr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new sE(this,"async_queue_retry"),this.hu=()=>{const n=jl();n&&ie("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=jl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Gn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Bo(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=sd.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&_e()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class gi extends Xc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new cD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||CE(this),this._firestoreClient.terminate()}}function lD(t,e){const n=typeof t=="object"?t:Th(),r=typeof t=="string"?t:"(default)",s=ys(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Fb("firestore");i&&aD(s,...i)}return s}function cd(t){return t._firestoreClient||CE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function CE(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new $1(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,RE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new eD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ai(St.fromBase64String(e))}catch(n){throw new ne(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ai(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=/^__.*__$/;class hD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new jo(e,this.data,n,this.fieldTransforms)}}class PE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function kE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class hd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new hd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return fc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(kE(this.fu)&&uD.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class dD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zc(e)}Fu(e,n,r,s=!1){return new hd({fu:e,methodName:n,vu:r,path:_t.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dd(t){const e=t._freezeSettings(),n=zc(t._databaseId);return new dD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fD(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);fd("Data must be an object, but it was:",o,r);const c=OE(r,o);let l,u;if(i.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=Uu(e,p,n);if(!o.contains(m))throw new ne(q.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);NE(h,m)||h.push(m)}l=new Gt(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new hD(new Mt(c),l,u)}class el extends ld{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof el}}function pD(t,e,n,r){const s=t.Fu(1,e,n);fd("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();vs(r,(l,u)=>{const h=pd(e,l,n);u=at(u);const p=s.Su(h);if(u instanceof el)i.push(h);else{const m=Go(u,p);m!=null&&(i.push(h),o.set(h,m))}});const c=new Gt(i);return new PE(o,c,s.fieldTransforms)}function mD(t,e,n,r,s,i){const o=t.Fu(1,e,n),c=[Uu(e,r,n)],l=[s];if(i.length%2!=0)throw new ne(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Uu(e,i[m])),l.push(i[m+1]);const u=[],h=Mt.empty();for(let m=c.length-1;m>=0;--m)if(!NE(u,c[m])){const T=c[m];let C=l[m];C=at(C);const M=o.Su(T);if(C instanceof el)u.push(T);else{const N=Go(C,M);N!=null&&(u.push(T),h.set(T,N))}}const p=new Gt(u);return new PE(h,p,o.fieldTransforms)}function gD(t,e,n,r=!1){return Go(n,t.Fu(r?4:3,e))}function Go(t,e){if(DE(t=at(t)))return fd("Unsupported field value:",e,t),OE(t,e);if(t instanceof ld)return function(r,s){if(!kE(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Go(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ck(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ut.fromDate(r);return{timestampValue:hc(s.serializer,i)}}if(r instanceof ut){const i=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hc(s.serializer,i)}}if(r instanceof ud)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ai)return{bytesValue:Qv(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Jc(r)}`)}(t,e)}function OE(t,e){const n={};return Iv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,s)=>{const i=Go(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function DE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof ud||t instanceof ai||t instanceof Ut||t instanceof ld)}function fd(t,e,n){if(!DE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Jc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Uu(t,e,n){if((e=at(e))instanceof Zc)return e._internalPath;if(typeof e=="string")return pd(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _D=new RegExp("[~\\*/\\[\\]]");function pd(t,e,n){if(e.search(_D)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zc(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ne(q.INVALID_ARGUMENT,c+t+l)}function NE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(md("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yD extends VE{data(){return super.data()}}function md(t,e){return typeof e=="string"?pd(t,e):e instanceof Zc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gd{}class ED extends gd{}function $n(t,e,...n){let r=[];e instanceof gd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof _d).length,c=i.filter(l=>l instanceof tl).length;if(o>1||o>0&&c>0)throw new ne(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class tl extends ED{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tl(e,n,r)}_apply(e){const n=this._parse(e);return ME(e._query,n),new mi(e.firestore,e.converter,ku(e._query,n))}_parse(e){const n=dd(e.firestore);return function(i,o,c,l,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ne(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xm(p,h);const T=[];for(const C of p)T.push(Lm(l,i,C));m={arrayValue:{values:T}}}else m=Lm(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xm(p,h),m=gD(c,o,p,h==="in"||h==="not-in");return it.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ot(t,e,n){const r=e,s=md("where",t);return tl._create(s,r,n)}class _d extends gd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _d(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)ME(o,l),o=ku(o,l)}(e._query,n),new mi(e.firestore,e.converter,ku(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Lm(t,e,n){if(typeof(n=at(n))=="string"){if(n==="")throw new ne(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dv(e)&&n.indexOf("/")!==-1)throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Qe.fromString(n));if(!he.isDocumentKey(r))throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return im(t,new he(r))}if(n instanceof Ut)return im(t,n._key);throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jc(n)}.`)}function xm(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ME(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TD{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ud(st(e.latitude),st(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=jh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Qe.fromString(e);We(tE(r));const s=new Eo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||Qn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LE extends VE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(md("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class La extends LE{data(e={}){return super.data(e)}}class ID{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new La(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new La(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new La(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:AD(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){t=Jn(t,Ut);const e=Jn(t.firestore,gi);return sD(cd(e),t._key).then(n=>bD(e,t,n))}class xE extends TD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function jn(t){t=Jn(t,mi);const e=Jn(t.firestore,gi),n=cd(e),r=new xE(e);return vD(t._query),iD(n,t._query).then(s=>new ID(e,r,t,s))}function Bu(t,e,n,...r){t=Jn(t,Ut);const s=Jn(t.firestore,gi),i=dd(s);let o;return o=typeof(e=at(e))=="string"||e instanceof Zc?mD(i,"updateDoc",t._key,e,n,r):pD(i,"updateDoc",t._key,e),yd(s,[o.toMutation(t._key,pn.exists(!0))])}function FE(t){return yd(Jn(t.firestore,gi),[new Wh(t._key,pn.none())])}function $u(t,e){const n=Jn(t.firestore,gi),r=nn(t),s=wD(t.converter,e);return yd(n,[fD(dd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function yd(t,e){return function(r,s){const i=new Gn;return r.asyncQueue.enqueueAndForget(async()=>KO(await rD(r),s,i)),i.promise}(cd(t),e)}function bD(t,e,n){const r=n.docs.get(e._key),s=new xE(t);return new LE(t,s,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){di=s})(li),kn(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new gi(new R1(r.getProvider("auth-internal")),new k1(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),sn(tm,"4.6.3",e),sn(tm,"4.6.3","esm2017")})();const RD={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},nl=iy(RD);E1(nl);const ro=hi(nl),et=lD(nl),SD=t=>(Xn("data-v-94b9d04c"),t=t(),Zn(),t),CD={class:"container"},PD={class:"loginWindow"},kD=SD(()=>P("h1",null,"WELCOME",-1)),OD={class:"buttonBox"},DD={__name:"Login",setup(t){function e(){uS(ro,o,c).then(l=>{i.push({name:"dashboard"}),He("success","Successfully logged in!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/invalid-credential).":He("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":He("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":He("error","Our servers are currently overloaded :(");break;default:He("error",l.message);break}})}function n(){cS(ro,o).then(()=>{He("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(l=>{l.message=="Firebase: Error (auth/missing-email)."&&He("error","Enter your email adress in the 'Email' field first!")})}function r(){By(ro,s).then(l=>{He("success","Successfully logged in!"),Vt.credentialFromResult(l).accessToken,l.user,i.push("/dashboard")}).catch(l=>{He("error",l.message),l.code,l.message,l.customData.email,Vt.credentialFromError(l)})}const s=new Vt,i=No();vh();let o,c="";return(l,u)=>(ye(),Ae("div",CD,[P("div",PD,[kD,bn(P("input",{type:"email",autocomplete:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=h=>tt(o)?o.value=h:o=h)},null,512),[[dn,ot(o)]]),bn(P("input",{type:"password",autocomplete:"current-password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=h=>tt(c)?c.value=h:c=h),onKeydown:u[2]||(u[2]=Oc(h=>e(),["enter"]))},null,544),[[dn,ot(c)]]),P("div",OD,[P("button",{class:"button_white",onClick:u[3]||(u[3]=h=>e())},"Login"),P("div",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=h=>r())},"Log in with Google")]),P("a",{onClick:u[5]||(u[5]=h=>n())},"Forgot password?")])]))}},ND=En(DD,[["__scopeId","data-v-94b9d04c"]]),VD=t=>(Xn("data-v-01e98b37"),t=t(),Zn(),t),MD={class:"container"},LD={class:"loginWindow"},xD=VD(()=>P("h1",null,"CREATE ACCOUNT",-1)),FD={__name:"Register",setup(t){function e(){lS(ro,o,c).then(u=>{u.user,i.push("/FindCostudent"),He("success","Successfully registered!")}).catch(u=>{switch(u.message){case"Firebase: Error (auth/email-already-in-use).":He("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":He("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":He("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":He("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":He("error","Our servers are currently overloaded :(");break;default:He("error",u.message);break}})}function n(){i.push("/login")}function r(){By(ro,s).then(u=>{He("success","Successfully logged in!"),Vt.credentialFromResult(u).accessToken,u.user,i.push("/")}).catch(u=>{He("error",u.message),u.code,u.message,u.customData.email,Vt.credentialFromError(u)})}const s=new Vt,i=No();vh();let o,c,l="";return(u,h)=>(ye(),Ae("div",MD,[P("div",LD,[xD,bn(P("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":h[0]||(h[0]=p=>tt(o)?o.value=p:o=p)},null,512),[[dn,ot(o)]]),bn(P("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":h[1]||(h[1]=p=>tt(c)?c.value=p:c=p)},null,512),[[dn,ot(c)]]),bn(P("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":h[2]||(h[2]=p=>tt(l)?l.value=p:l=p),onKeydown:h[3]||(h[3]=Oc(p=>e(),["enter"]))},null,544),[[dn,ot(l)]]),P("button",{class:"button_white",onClick:e},"Create account"),P("button",{id:"googleLogin",class:"button_white",onClick:h[4]||(h[4]=p=>r())},"Login with Google"),P("p",null,[un("Already have an account? "),P("a",{onClick:n},"Login here!")])])]))}},UD=En(FD,[["__scopeId","data-v-01e98b37"]]),BD={class:"daysContainer"},$D={class:"dayBox"},jD={class:"label"},qD={__name:"DotwFrequency",setup(t){async function e(){const i=nn(et,"dataLists","dotwFrequencies"),c=(await ds(i)).data();s.value.push({day:"Mon",amount:c.Monday,percentage:""}),s.value.push({day:"Tue",amount:c.Tuesday,percentage:""}),s.value.push({day:"Wed",amount:c.Wednesday,percentage:""}),s.value.push({day:"Thu",amount:c.Thursday,percentage:""}),s.value.push({day:"Fri",amount:c.Friday,percentage:""}),s.value.push({day:"Sat",amount:c.Saturday,percentage:""}),s.value.push({day:"Sun",amount:c.Sunday,percentage:""}),n()}function n(){const i=r();for(var o=0;o<s.value.length;o++)s.value[o].percentage=String(Math.round(s.value[o].amount/i*1e3)/10)+"%"}function r(){for(var i=0,o=0;o<s.value.length;o++)s.value[o].amount>i&&(i=s.value[o].amount);return i}const s=Ie([]);return e(),(i,o)=>(ye(),Ae("div",BD,[(ye(!0),Ae(Ke,null,An(s.value,c=>(ye(),Ae("div",$D,[P("div",{class:"bar",style:ps({height:c.percentage})},null,4),P("div",jD,Fe(c.day),1)]))),256))]))}},HD=En(qD,[["__scopeId","data-v-766322ab"]]),KD=dh('<div class="bar" data-v-425588a9></div><div class="labelBox" data-v-425588a9><div class="label" data-v-425588a9>12AM</div><div class="label" data-v-425588a9>4AM</div><div class="label" data-v-425588a9>8AM</div><div class="label" data-v-425588a9>12PM</div><div class="label" data-v-425588a9>4PM</div><div class="label" data-v-425588a9>8PM</div><div class="label" data-v-425588a9>12AM</div></div>',2),GD={__name:"TodFrequency",setup(t){ph(u=>({"05e5433e":o.value,"5f5de6d9":c.value,"2f339c25":l.value}));async function e(){const u=nn(et,"dataLists","todFrequencies"),h=await ds(u);r.value=h.data().Morning,s.value=h.data().Afternoon,i.value=h.data().Evening,n()}function n(){var u=Math.max(r.value,s.value,i.value);o.value=r.value/u,c.value=s.value/u,l.value=i.value/u}const r=Ie(),s=Ie(),i=Ie(),o=Ie(.2),c=Ie(.2),l=Ie(.1);return e(),(u,h)=>KD}},WD=En(GD,[["__scopeId","data-v-425588a9"]]),zD={class:"graphBox"},QD={class:"barBox"},YD={id:"bar1",style:{width:"90%"}},JD={class:"label"},XD={class:"label",style:{color:"black","font-weight":"600","font-size":"10pt"}},ZD={class:"barBox"},eN={class:"label"},tN={class:"label",style:{color:"black","font-weight":"600","font-size":"10pt"}},nN={class:"barBox"},rN={id:"bar3"},sN={class:"label"},iN={class:"label",style:{color:"black","font-weight":"600","font-size":"10pt"}},oN={__name:"LocationsGraph",setup(t){ph(u=>({"3a7e05e7":c.value,"6fc02fc2":l.value}));async function e(){const u=nn(et,"dataLists","locationsFrequencies"),h=await ds(u),p=Object.entries(h.data()).sort(([,m],[,T])=>T-m).slice(0,3).map(([m])=>m);s.value={name:p[0],amount:h.data()[p[0]],percent:""},i.value={name:p[1],amount:h.data()[p[1]],percent:""},o.value={name:p[2],amount:h.data()[p[2]],percent:""},n(),r()}function n(){c.value=String((i.value.amount/s.value.amount-.1)*100)+"%",l.value=String((o.value.amount/s.value.amount-.1)*100)+"%"}function r(){const u=s.value.amount+i.value.amount+o.value.amount;s.value.percent=Math.round(s.value.amount/u*100)+"%",i.value.percent=Math.round(i.value.amount/u*100)+"%",o.value.percent=Math.round(o.value.amount/u*100)+"%"}const s=Ie({}),i=Ie({}),o=Ie({}),c=Ie(""),l=Ie("");return e(),(u,h)=>(ye(),Ae("div",zD,[P("div",QD,[P("div",YD,[P("div",JD,Fe(s.value.name),1)]),P("div",XD,Fe(s.value.percent),1)]),P("div",ZD,[P("div",{id:"bar2",style:ps({width:c.value})},[P("div",eN,Fe(i.value.name),1)],4),P("div",tN,Fe(i.value.percent),1)]),P("div",nN,[P("div",rN,[P("div",sN,Fe(o.value.name),1)]),P("div",iN,Fe(o.value.percent),1)])]))}},aN=En(oN,[["__scopeId","data-v-0e996b0e"]]),Ge=t=>(Xn("data-v-91b6bf09"),t=t(),Zn(),t),cN={class:"container"},lN={class:"formBox"},uN={class:"progressBar"},hN={class:"phase"},dN={class:"phase"},fN={class:"phase"},pN={key:0,class:"entry"},mN={class:"itemBox"},gN=Ge(()=>P("p",null,"Subject",-1)),_N=Ge(()=>P("option",{value:"",disabled:""},"Select a subject",-1)),yN=["value"],vN={class:"itemBox"},EN=Ge(()=>P("p",null,"Location",-1)),TN=Ge(()=>P("option",{value:"",disabled:""},"Select a location",-1)),wN=["value"],IN={class:"itemBox",id:"date"},AN=Ge(()=>P("p",null,"Date",-1)),bN=["min","max"],RN={class:"itemBox",id:"time"},SN={key:1,class:"searching"},CN=Ge(()=>P("p",null,"SEARCHING",-1)),PN=Ge(()=>P("div",{class:"loader"},null,-1)),kN=[CN,PN],ON={key:2,class:"noneFound"},DN={class:"message"},NN=Ge(()=>P("p",null,"No costudents were found yet to study ",-1)),VN={class:"button"},MN=Ge(()=>P("p",null," in ",-1)),LN={class:"button"},xN=Ge(()=>P("p",null," in the ",-1)),FN={class:"button"},UN=Ge(()=>P("p",null," of the ",-1)),BN={class:"button"},$N=Ge(()=>P("p",null,".",-1)),jN=Ge(()=>P("div",{class:"finalMessage"},[P("p",null,"We'll keep on searching for other costudents."),P("p",null,"You can check in on the progress on your dashboard.")],-1)),qN={class:"buttonBox"},HN={key:3,class:"found"},KN=Ge(()=>P("div",{class:"finalMessage"},[P("p",null,"We found costudents!")],-1)),GN={class:"message"},WN=Ge(()=>P("p",null,"You can study ",-1)),zN={class:"button"},QN=Ge(()=>P("p",null," in ",-1)),YN={class:"button"},JN=Ge(()=>P("p",null," in the ",-1)),XN={class:"button"},ZN=Ge(()=>P("p",null," of the ",-1)),eV={class:"button"},tV=Ge(()=>P("p",null," . ",-1)),nV={class:"groupDisplay"},rV=Ge(()=>P("p",null,"Your group:",-1)),sV={class:"costudentNames"},iV={class:"buttonBox"},oV={class:"formBox"},aV={class:"metricBox"},cV=Ge(()=>P("div",{class:"metricBoxTitle"},[P("div",{class:"button",style:{cursor:"default","background-color":"var(--dominant-dark)"}}," POPULAR METRICS ")],-1)),lV={class:"metric"},uV=Ge(()=>P("div",{class:"metricTitle"}," Day of the week: ",-1)),hV=Ge(()=>P("hr",null,null,-1)),dV={class:"metric"},fV=Ge(()=>P("div",{class:"metricTitle"}," Time of the day: ",-1)),pV=Ge(()=>P("hr",null,null,-1)),mV={class:"metric"},gV=Ge(()=>P("div",{class:"metricTitle"}," Popular locations: ",-1)),_V=Ge(()=>P("hr",null,null,-1)),yV={id:"subjects"},vV=["value"],EV={id:"locations"},TV=["value"],wV={__name:"FindCostudent",setup(t){const e=Ee=>new Promise(ue=>setTimeout(ue,Ee));function n(){const Ee=new Date;new Date().setDate(Ee.getDate()+21);const fe=Ee.getFullYear(),Ve=String(Ee.getMonth()+1).padStart(2,"0"),Me=String(Ee.getDate()).padStart(2,"0");return`${fe}-${Ve}-${Me}`}function r(){const Ee=new Date,ue=new Date;ue.setDate(Ee.getDate()+21);const fe=ue.getFullYear(),Ve=String(ue.getMonth()+1).padStart(2,"0"),Me=String(ue.getDate()).padStart(2,"0");return`${fe}-${Ve}-${Me}`}function s(Ee){switch(g.value=!1,y.value=!1,I.value=!1,x.value=Ee,Ee){case"morning":g.value=!0,O.value=0;break;case"afternoon":y.value=!0,O.value=1;break;case"evening":I.value=!0,O.value=2;break}}async function i(){const Ee=$n(we,Ot("UID","==",A));return!(await jn(Ee)).empty}async function o(){await i()?Z.value.includes(U.value)?le.value.includes(D.value)?S.value!=""?O.value!=-1?l():(He("error","Select a time of day!"),c()):(He("error","Select a date!"),c()):(He("error","Select a location from the list!"),c()):(He("error","Select a subject from the list!"),c()):He("error","Set your display name in the dashboard first!")}function c(){U.value="",D.value="",S.value=""}async function l(){N.value=1,await e(2500);const Ee=$n(w,Ot("SUBJ","==",U.value),Ot("LOCATION","==",D.value),Ot("DATE","==",S.value),Ot("TOD","==",O.value)),ue=await jn(Ee);if(ue.empty)u();else{const fe=[];for(let Me=0;Me<ue.docs[0].data().MEMBERS.length;Me++)fe.push(ue.docs[0].data().MEMBERS[Me]);fe.push(A);const Ve=nn(et,"groups",ue.docs[0].id);await Bu(Ve,{MEMBERS:fe}),m(fe),N.value=3}}async function u(){const Ee=$n(me,Ot("SUBJ","==",U.value),Ot("LOCATION","==",D.value),Ot("DATE","==",S.value),Ot("TOD","==",O.value)),ue=await jn(Ee);ue.empty?(h(),N.value=2):p(ue.docs[0].data().UID,ue.docs[0].id)}async function h(){await $u(ln(et,"posts"),{SUBJ:U.value,LOCATION:D.value,DATE:S.value,UID:A,TOD:O.value,POSTDATE:E.value})}async function p(Ee,ue){await FE(nn(et,"posts",ue));const fe=[A,Ee];await $u(ln(et,"groups"),{DATE:S.value,LOCATION:D.value,MEMBERS:fe,SUBJ:U.value,TOD:O.value}),m(fe),N.value=3}async function m(Ee){for(let ue=0;ue<Ee.length;ue++){const fe=$n(we,Ot("UID","==",Ee[ue])),Ve=await jn(fe);te.value.push(Ve.docs[0].data().NAME)}}async function T(){const Ee=nn(et,"dataLists","formLists"),ue=await ds(Ee);le.value=ue.data().locations}async function C(){const Ee=nn(et,"dataLists","formLists"),ue=await ds(Ee);Z.value=ue.data().subjects}const M=hi(),N=Ie(0),U=Ie(""),D=Ie(""),S=Ie(""),O=Ie(-1),x=Ie("");let k=n(),E=Ie(k),_=Ie(r());const g=Ie(!1),y=Ie(!1),I=Ie(!1),A=M.currentUser.uid,w=ln(et,"groups"),me=ln(et,"posts"),we=ln(et,"users"),te=Ie([]),le=Ie([]),Z=Ie([]);return T(),C(),(Ee,ue)=>(ye(),Ae("div",cN,[P("div",lN,[P("div",uN,[P("div",hN,[P("p",{class:It({active:N.value===0})},"1",2),P("h3",{class:It({active:N.value===0})},"Enter data",2)]),P("div",{class:It(["line",{completed:N.value>=1}])},null,2),P("div",dN,[P("p",{class:It({active:N.value===1})},"2",2),P("h3",{class:It({active:N.value===1})},"Searching",2)]),P("div",{class:It(["line",{completed:N.value>=2}])},null,2),P("div",fN,[P("p",{class:It({active:N.value===2||N.value===3})},"3",2),P("h3",{class:It({active:N.value===2})},"Results",2)])]),N.value==0?(ye(),Ae("div",pN,[P("div",mN,[gN,bn(P("select",{"onUpdate:modelValue":ue[0]||(ue[0]=fe=>U.value=fe)},[_N,(ye(!0),Ae(Ke,null,An(Z.value,fe=>(ye(),Ae("option",{key:fe,value:fe},Fe(fe),9,yN))),128))],512),[[Qa,U.value]])]),P("div",vN,[EN,bn(P("select",{"onUpdate:modelValue":ue[1]||(ue[1]=fe=>D.value=fe)},[TN,(ye(!0),Ae(Ke,null,An(le.value,fe=>(ye(),Ae("option",{key:fe,value:fe},Fe(fe),9,wN))),128))],512),[[Qa,D.value]])]),P("div",IN,[AN,bn(P("input",{type:"date",id:"date",min:ot(E),max:ot(_),"onUpdate:modelValue":ue[2]||(ue[2]=fe=>S.value=fe)},null,8,bN),[[dn,S.value]])]),P("div",RN,[P("div",{class:It(["button",{selected:g.value}]),onClick:ue[3]||(ue[3]=fe=>s("morning"))}," Morning ",2),P("div",{class:It(["button",{selected:y.value}]),onClick:ue[4]||(ue[4]=fe=>s("afternoon"))}," Afternoon ",2),P("div",{class:It(["button",{selected:I.value}]),onClick:ue[5]||(ue[5]=fe=>s("evening"))}," Evening ",2)]),P("div",{id:"searchButton",class:"button",onClick:ue[6]||(ue[6]=fe=>o())}," Search ")])):en("",!0),N.value==1?(ye(),Ae("div",SN,kN)):en("",!0),N.value==2?(ye(),Ae("div",ON,[P("div",DN,[NN,P("div",VN,Fe(U.value),1),MN,P("div",LN,Fe(D.value),1),xN,P("div",FN,Fe(x.value),1),UN,P("div",BN,Fe(S.value),1),$N]),jN,P("div",qN,[Ce(ot(mu),{to:"/dashboard",class:"button"},{default:Zt(()=>[un("Dashboard")]),_:1})])])):en("",!0),N.value==3?(ye(),Ae("div",HN,[KN,P("div",GN,[WN,P("div",zN,Fe(U.value),1),QN,P("div",YN,Fe(D.value),1),JN,P("div",XN,Fe(x.value),1),ZN,P("div",eV,Fe(S.value),1),tV]),P("div",nV,[rV,P("div",sV,[(ye(!0),Ae(Ke,null,An(te.value,fe=>(ye(),Ae("div",{class:"button",key:te.value},[P("p",null,Fe(fe),1)]))),128))]),P("div",iV,[Ce(ot(mu),{to:"/dashboard",class:"button"},{default:Zt(()=>[un("Dashboard")]),_:1})])])])):en("",!0)]),P("div",oV,[P("div",aV,[cV,P("div",lV,[uV,hV,Ce(HD)]),P("div",dV,[fV,pV,Ce(WD)]),P("div",mV,[gV,_V,Ce(aN)])])]),P("datalist",yV,[(ye(!0),Ae(Ke,null,An(Z.value,fe=>(ye(),Ae("option",{key:fe,value:fe},null,8,vV))),128))]),P("datalist",EV,[(ye(!0),Ae(Ke,null,An(le.value,fe=>(ye(),Ae("option",{key:fe,value:fe},null,8,TV))),128))])]))}},IV=En(wV,[["__scopeId","data-v-91b6bf09"]]),_i=t=>(Xn("data-v-5dce0742"),t=t(),Zn(),t),AV={class:"container"},bV={class:"titleContainer"},RV=_i(()=>P("div",{class:"title"},[P("h1",null,"DASHBOARD"),P("p",null,"Here you can find all your requested study sessions and groups that you're a part of.")],-1)),SV={class:"nameContainer"},CV={class:"fieldBox"},PV=_i(()=>P("p",null,"Display name:",-1)),kV={class:"itemBox"},OV=_i(()=>P("div",{class:"sectionHeader"},[P("div",{class:"sectionTitle"},[P("h1",null,"YOUR GROUPS")])],-1)),DV={class:"grid"},NV={class:"groupBox"},VV={class:"groupTitle"},MV={class:"subtle"},LV={class:"labels"},xV={class:"label"},FV={class:"label"},UV={class:"label"},BV={class:"label"},$V={class:"commandButtons"},jV=["onClick"],qV=["onClick"],HV={key:0,class:"noItems"},KV=_i(()=>P("div",{class:"whiteSpace"},null,-1)),GV={class:"itemBox"},WV=_i(()=>P("div",{class:"sectionHeader"},[P("div",{class:"sectionTitle"},[P("h1",null,"YOUR POSTS")])],-1)),zV={class:"grid"},QV={class:"postBox"},YV={class:"groupTitle"},JV={class:"labels"},XV={class:"label"},ZV={class:"label"},eM={class:"label"},tM={class:"commandButtons"},nM=["onClick"],rM={key:0,class:"noItems"},sM=_i(()=>P("div",{class:"whiteSpace"},null,-1)),iM={__name:"Dashboard",setup(t){async function e(){const k=$n(N,Ot("MEMBERS","array-contains",T)),E=await jn(k);if(E.empty)console.log("No groups");else for(let _=0;_<E.docs.length;_++)n(E.docs[_].data(),E.docs[_].id)}function n(k,E){const _={ID:E,SUBJ:k.SUBJ,LOCATION:k.LOCATION,TOD:k.TOD,DATE:k.DATE,MEMBERS:k.MEMBERS};S.value.push(_)}async function r(k){S.value=S.value.filter(E=>E.ID!=k),s(k)}async function s(k){const E=nn(et,"groups",k);let g=(await ds(E)).data().MEMBERS;g=g.filter(y=>y!==T),await Bu(E,{MEMBERS:g})}function i(k){switch(k){case 0:return"Morning";case 1:return"Afternoon";case 2:return"Evening"}}async function o(){const k=$n(U,Ot("UID","==",T)),E=await jn(k);if(E.empty)console.log("No posts");else for(let _=0;_<E.docs.length;_++)c(E.docs[_].data(),E.docs[_].id)}function c(k,E){const _={ID:E,SUBJ:k.SUBJ,LOCATION:k.LOCATION,TOD:k.TOD,DATE:k.DATE};O.value.push(_)}async function l(k){O.value=O.value.filter(E=>E.ID!=k),await FE(nn(et,"posts",k))}async function u(){const k=$n(D,Ot("UID","==",T)),E=await jn(k);E.empty?M=0:(C.value=E.docs[0].data().NAME,M=1)}async function h(){if(M==0)await $u(ln(et,"users"),{UID:T,NAME:C.value}),He("success","Successfully set your username!");else{const k=$n(D,Ot("UID","==",T)),E=await jn(k),_=nn(et,"users",E.docs[0].id);await Bu(_,{NAME:C.value}),u(),He("success","Successfully updated your username!")}}function p(k,E){const _=E.replace(/\s+/g,"-")+"-"+k.substring(0,6),g=C.value;x.push({name:"group-chat",params:{channel:_},query:{chatName:g,ID:k}})}const T=hi().currentUser.uid,C=Ie("");let M=0;const N=ln(et,"groups"),U=ln(et,"posts"),D=ln(et,"users"),S=Ie([]),O=Ie([]),x=No();return e(),o(),u(),(k,E)=>(ye(),Ae("div",AV,[P("div",bV,[RV,P("div",SV,[P("div",CV,[PV,bn(P("input",{type:"text","onUpdate:modelValue":E[0]||(E[0]=_=>C.value=_),onKeydown:E[1]||(E[1]=Oc(_=>h(),["enter"]))},null,544),[[dn,C.value]])]),P("div",{class:"button",onClick:E[2]||(E[2]=_=>h())}," Change ")])]),P("div",kV,[OV,P("div",DV,[(ye(!0),Ae(Ke,null,An(S.value,_=>(ye(),Ae("div",{class:"itemsContainer",key:_.ID},[P("div",NV,[P("div",VV,[un(Fe(_.SUBJ)+" ",1),P("div",MV," #"+Fe(_.ID.substring(0,6).toUpperCase()),1)]),P("div",LV,[P("div",xV,Fe(_.DATE),1),P("div",FV,Fe(_.LOCATION),1),P("div",UV,Fe(i(_.TOD)),1),P("div",BV,Fe(_.MEMBERS.length)+" students ",1)]),P("div",$V,[P("div",{class:"button_white",onClick:g=>p(_.ID,_.SUBJ)}," Chat ",8,jV),P("div",{class:"button_white",onClick:g=>r(_.ID)}," Quit ",8,qV)])])]))),128))]),S.value.length==0?(ye(),Ae("div",HV," You're currently not part of any groups. ")):en("",!0)]),KV,P("div",GV,[WV,P("div",zV,[(ye(!0),Ae(Ke,null,An(O.value,_=>(ye(),Ae("div",{class:"itemsContainer",key:_.ID},[P("div",QV,[P("div",YV,Fe(_.SUBJ),1),P("div",JV,[P("div",XV,Fe(_.DATE),1),P("div",ZV,Fe(_.LOCATION),1),P("div",eM,Fe(i(_.TOD)),1)]),P("div",tM,[P("div",{class:"button_white",onClick:g=>l(_.ID)}," Remove ",8,nM)])])]))),128))]),O.value.length==0?(ye(),Ae("div",rM," You currently have no study requests. ")):en("",!0)]),sM]))}},oM=En(iM,[["__scopeId","data-v-5dce0742"]]),UE=t=>(Xn("data-v-b0dcf7cd"),t=t(),Zn(),t),aM={class:"frame"},cM=["data-channel","data-nickname"],lM={class:"infoBox"},uM=UE(()=>P("div",{class:"textBox"},[P("h2",null,"Rules:"),P("ol",null,[P("li",null,"Be respectful."),P("li",null,"Don't share personal information."),P("li",null,"Meet in a public place."),P("li",null,"Stay on topic"),P("li",null,"No Harassment or Discrimination")])],-1)),hM={class:"groupDisplay"},dM=UE(()=>P("p",null,"In this group:",-1)),fM={class:"costudentNames"},pM={__name:"GroupChat",setup(t){const e=vh(),n=e.params.channel,r=e.query.chatName,s=e.query.ID,i=Ie([]),o=Ie([]);ln(et,"groups");const c=ln(et,"users");gs(()=>{const h=document.getElementById("tlkio"),p=h.getAttribute("data-env")||"production",m=h.getAttribute("data-theme"),T=h.getAttribute("data-custom-css"),C=h.getAttribute("data-nickname"),M=document.createElement("iframe");let N=`https://embed.tlk.io/${n}`;const U=[];p==="dev"&&(N=`https://embed.lvh.me:3000/${n}`),T&&T.length&&U.push(`custom_css_path=${T}`),C&&C.length&&U.push(`nickname=${C}`),m&&m.length&&U.push(`theme=${m}`),U.length&&(N+=`?${U.join("&")}`),M.setAttribute("src",N),M.setAttribute("width","100%"),M.setAttribute("height","100%"),M.setAttribute("frameborder","0"),M.setAttribute("style","margin-bottom: -8px;");const D=h.getAttribute("style");h.setAttribute("style",`overflow: auto; -webkit-overflow-scrolling: touch; ${D}`),h.textContent="",h.appendChild(M);const S=document.createElement("style");S.textContent=`
      .tlkio-pulse {
        width: 70px;
        margin: -27px 0 0 -35px;
        position: absolute;
        top: 50%;
        left: 50%;
        animation: tlkio-pulse 1.5s ease-in 0s infinite;
      }
      @keyframes tlkio-pulse {
        0% { transform: scale(1); }
        10% { transform: scale(1.15); }
        18% { transform: scale(0.95); }
        24% { transform: scale(1); }
      }
    `;const O=document.createElement("img");O.src="https://www.tlk.io/images/logo.png",O.className="tlkio-pulse",window.getComputedStyle(h).position==="static"&&(h.style.position="relative"),h.appendChild(S),h.appendChild(O),setTimeout(()=>{h.removeChild(O),h.removeChild(S)},3e3)});async function l(h){const p=nn(et,"groups",h),m=await ds(p);i.value=m.data().MEMBERS,u(i.value)}async function u(h){for(let p=0;p<h.length;p++){const m=$n(c,Ot("UID","==",h[p])),T=await jn(m);o.value.push(T.docs[0].data().NAME)}}return l(s),(h,p)=>(ye(),Ae("div",aM,[P("div",{id:"tlkio","data-channel":ot(n),"data-theme":"theme--minimal","data-nickname":ot(r)},null,8,cM),P("div",lM,[uM,P("div",hM,[dM,P("div",fM,[(ye(!0),Ae(Ke,null,An(o.value,m=>(ye(),Ae("div",{class:"name",key:o.value},[P("p",null,Fe(m),1)]))),128))])])])]))}},mM=En(pM,[["__scopeId","data-v-b0dcf7cd"]]),BE=Pb({history:ib("/costudent-demo/"),routes:[{path:"/",name:"home",component:nP},{path:"/findcostudent",name:"findcostudent",component:IV,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ND},{path:"/register",name:"register",component:UD},{path:"/dashboard",name:"dashboard",component:oM,meta:{requiresAuth:!0}},{path:"/group-chat/:channel",name:"group-chat",component:mM,meta:{requiresAuth:!0}}]});let Fm=!1,Hl=!1;BE.beforeEach((t,e,n)=>{const r=hi(),s=t.matched.some(i=>i.meta.requiresAuth);Fm?s&&!Hl?(alert("No access! You need to be logged in."),n("/login")):n():Py(r,i=>{Hl=!!i,Fm=!0,s&&!Hl?(alert("No access! You need to be logged in."),n("/login")):n()})});const rl=D_(KC);rl.config.globalProperties.$firebase=nl;rl.use(BE);rl.use(PC,{position:"bottom-right",duration:5e3,pauseOnHover:!0});rl.mount("#app");
