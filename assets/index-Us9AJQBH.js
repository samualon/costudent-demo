(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Fe={},Os=[],Lt=()=>{},lT=()=>!1,To=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ju=t=>t.startsWith("onUpdate:"),ze=Object.assign,qu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},uT=Object.prototype.hasOwnProperty,ke=(t,e)=>uT.call(t,e),re=Array.isArray,Ds=t=>oi(t)==="[object Map]",ds=t=>oi(t)==="[object Set]",lf=t=>oi(t)==="[object Date]",hT=t=>oi(t)==="[object RegExp]",pe=t=>typeof t=="function",Qe=t=>typeof t=="string",Gn=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Hu=t=>(Be(t)||pe(t))&&pe(t.then)&&pe(t.catch),xg=Object.prototype.toString,oi=t=>xg.call(t),dT=t=>oi(t).slice(8,-1),Fg=t=>oi(t)==="[object Object]",Ku=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ns=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fT=/-(\w)/g,Dt=gc(t=>t.replace(fT,(e,n)=>n?n.toUpperCase():"")),pT=/\B([A-Z])/g,Kt=gc(t=>t.replace(pT,"-$1").toLowerCase()),wo=gc(t=>t.charAt(0).toUpperCase()+t.slice(1)),$i=gc(t=>t?`on${wo(t)}`:""),fn=(t,e)=>!Object.is(t,e),Vs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ug=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},La=t=>{const e=parseFloat(t);return isNaN(e)?t:e},xa=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let uf;const Bg=()=>uf||(uf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),gT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",mT=pc(gT);function Io(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Qe(r)?ET(r):Io(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Qe(t)||Be(t))return t}const _T=/;(?![^(]*\))/g,yT=/:([^]+)/,vT=/\/\*[^]*?\*\//g;function ET(t){const e={};return t.replace(vT,"").split(_T).forEach(n=>{if(n){const r=n.split(yT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function It(t){let e="";if(Qe(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=It(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function TT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Qe(e)&&(t.class=It(e)),n&&(t.style=Io(n)),t}const wT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",IT=pc(wT);function $g(t){return!!t||t===""}function AT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Cr(t[r],e[r]);return n}function Cr(t,e){if(t===e)return!0;let n=lf(t),r=lf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gn(t),r=Gn(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?AT(t,e):!1;if(n=Be(t),r=Be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Cr(t[o],e[o]))return!1}}return String(t)===String(e)}function mc(t,e){return t.findIndex(n=>Cr(n,e))}const Xe=t=>Qe(t)?t:t==null?"":re(t)||Be(t)&&(t.toString===xg||!pe(t.toString))?JSON.stringify(t,jg,2):String(t),jg=(t,e)=>e&&e.__v_isRef?jg(t,e.value):Ds(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[yl(r,i)+" =>"]=s,n),{})}:ds(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yl(n))}:Gn(e)?yl(e):Be(e)&&!re(e)&&!Fg(e)?String(e):e,yl=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qt;class Gu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=qt;try{return qt=this,e()}finally{qt=n}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bT(t){return new Gu(t)}function qg(t,e=qt){e&&e.active&&e.effects.push(t)}function Hg(){return qt}function RT(t){qt&&qt.cleanups.push(t)}let Yr;class Gs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,qg(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Mr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(ST(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Lr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ar,n=Yr;try{return Ar=!0,Yr=this,this._runnings++,hf(this),this.fn()}finally{df(this),this._runnings--,Yr=n,Ar=e}}stop(){this.active&&(hf(this),df(this),this.onStop&&this.onStop(),this.active=!1)}}function ST(t){return t.value}function hf(t){t._trackId++,t._depsLength=0}function df(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Kg(t.deps[e],t);t.deps.length=t._depsLength}}function Kg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function CT(t,e){t.effect instanceof Gs&&(t=t.effect.fn);const n=new Gs(t,Lt,()=>{n.dirty&&n.run()});e&&(ze(n,e),e.scope&&qg(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function PT(t){t.effect.stop()}let Ar=!0,Kl=0;const Gg=[];function Mr(){Gg.push(Ar),Ar=!1}function Lr(){const t=Gg.pop();Ar=t===void 0?!0:t}function Wu(){Kl++}function zu(){for(Kl--;!Kl&&Gl.length;)Gl.shift()()}function Wg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Kg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gl=[];function zg(t,e,n){Wu();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Gl.push(r.scheduler)))}zu()}const Qg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Fa=new WeakMap,Jr=Symbol(""),Wl=Symbol("");function Bt(t,e,n){if(Ar&&Yr){let r=Fa.get(t);r||Fa.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Qg(()=>r.delete(n))),Wg(Yr,s)}}function jn(t,e,n,r,s,i){const o=Fa.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&re(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Gn(h)&&h>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":re(t)?Ku(n)&&c.push(o.get("length")):(c.push(o.get(Jr)),Ds(t)&&c.push(o.get(Wl)));break;case"delete":re(t)||(c.push(o.get(Jr)),Ds(t)&&c.push(o.get(Wl)));break;case"set":Ds(t)&&c.push(o.get(Jr));break}Wu();for(const l of c)l&&zg(l,5);zu()}function kT(t,e){const n=Fa.get(t);return n&&n.get(e)}const OT=pc("__proto__,__v_isRef,__isVue"),Yg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn)),ff=DT();function DT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)Bt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mr(),Wu();const r=Se(this)[e].apply(this,n);return zu(),Lr(),r}}),t}function NT(t){Gn(t)||(t=String(t));const e=Se(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class Jg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?rm:nm:i?tm:em).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=re(e);if(!s){if(o&&ke(ff,n))return Reflect.get(ff,n,r);if(n==="hasOwnProperty")return NT}const c=Reflect.get(e,n,r);return(Gn(n)?Yg.has(n):OT(n))||(s||Bt(e,"get",n),i)?c:Ze(c)?o&&Ku(n)?c:c.value:Be(c)?s?Ju(c):Ao(c):c}}class Xg extends Jg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ws(i);if(!to(r)&&!Ws(r)&&(i=Se(i),r=Se(r)),!re(e)&&Ze(i)&&!Ze(r))return l?!1:(i.value=r,!0)}const o=re(e)&&Ku(n)?Number(n)<e.length:ke(e,n),c=Reflect.set(e,n,r,s);return e===Se(s)&&(o?fn(r,i)&&jn(e,"set",n,r):jn(e,"add",n,r)),c}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&jn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gn(n)||!Yg.has(n))&&Bt(e,"has",n),r}ownKeys(e){return Bt(e,"iterate",re(e)?"length":Jr),Reflect.ownKeys(e)}}class Zg extends Jg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const VT=new Xg,MT=new Zg,LT=new Xg(!0),xT=new Zg(!0),Qu=t=>t,_c=t=>Reflect.getPrototypeOf(t);function oa(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(fn(e,i)&&Bt(s,"get",e),Bt(s,"get",i));const{has:o}=_c(s),c=r?Qu:n?Zu:no;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function aa(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(fn(t,s)&&Bt(r,"has",t),Bt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ca(t,e=!1){return t=t.__v_raw,!e&&Bt(Se(t),"iterate",Jr),Reflect.get(t,"size",t)}function pf(t){t=Se(t);const e=Se(this);return _c(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function gf(t,e){e=Se(e);const n=Se(this),{has:r,get:s}=_c(n);let i=r.call(n,t);i||(t=Se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?fn(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function mf(t){const e=Se(this),{has:n,get:r}=_c(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&jn(e,"delete",t,void 0),i}function _f(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function la(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Se(o),l=e?Qu:t?Zu:no;return!t&&Bt(c,"iterate",Jr),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function ua(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Ds(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Qu:e?Zu:no;return!e&&Bt(i,"iterate",l?Wl:Jr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[h(p[0]),h(p[1])]:h(p),done:g}},[Symbol.iterator](){return this}}}}function lr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function FT(){const t={get(i){return oa(this,i)},get size(){return ca(this)},has:aa,add:pf,set:gf,delete:mf,clear:_f,forEach:la(!1,!1)},e={get(i){return oa(this,i,!1,!0)},get size(){return ca(this)},has:aa,add:pf,set:gf,delete:mf,clear:_f,forEach:la(!1,!0)},n={get(i){return oa(this,i,!0)},get size(){return ca(this,!0)},has(i){return aa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:la(!0,!1)},r={get(i){return oa(this,i,!0,!0)},get size(){return ca(this,!0)},has(i){return aa.call(this,i,!0)},add:lr("add"),set:lr("set"),delete:lr("delete"),clear:lr("clear"),forEach:la(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ua(i,!1,!1),n[i]=ua(i,!0,!1),e[i]=ua(i,!1,!0),r[i]=ua(i,!0,!0)}),[t,n,e,r]}const[UT,BT,$T,jT]=FT();function yc(t,e){const n=e?t?jT:$T:t?BT:UT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const qT={get:yc(!1,!1)},HT={get:yc(!1,!0)},KT={get:yc(!0,!1)},GT={get:yc(!0,!0)},em=new WeakMap,tm=new WeakMap,nm=new WeakMap,rm=new WeakMap;function WT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zT(t){return t.__v_skip||!Object.isExtensible(t)?0:WT(dT(t))}function Ao(t){return Ws(t)?t:vc(t,!1,VT,qT,em)}function Yu(t){return vc(t,!1,LT,HT,tm)}function Ju(t){return vc(t,!0,MT,KT,nm)}function QT(t){return vc(t,!0,xT,GT,rm)}function vc(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=zT(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Ms(t){return Ws(t)?Ms(t.__v_raw):!!(t&&t.__v_isReactive)}function Ws(t){return!!(t&&t.__v_isReadonly)}function to(t){return!!(t&&t.__v_isShallow)}function Xu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function sm(t){return Object.isExtensible(t)&&Ug(t,"__v_skip",!0),t}const no=t=>Be(t)?Ao(t):t,Zu=t=>Be(t)?Ju(t):t;class im{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Gs(()=>e(this._value),()=>Ls(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return(!e._cacheable||e.effect.dirty)&&fn(e._value,e._value=e.effect.run())&&Ls(e,5),eh(e),e.effect._dirtyLevel>=2&&Ls(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function YT(t,e,n=!1){let r,s;const i=pe(t);return i?(r=t,s=Lt):(r=t.get,s=t.set),new im(r,s,i||!s,n)}function eh(t){var e;Ar&&Yr&&(t=Se(t),Wg(Yr,(e=t.dep)!=null?e:t.dep=Qg(()=>t.dep=void 0,t instanceof im?t:void 0)))}function Ls(t,e=5,n,r){t=Se(t);const s=t.dep;s&&zg(s,e)}function Ze(t){return!!(t&&t.__v_isRef===!0)}function qe(t){return am(t,!1)}function om(t){return am(t,!0)}function am(t,e){return Ze(t)?t:new JT(t,e)}class JT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:no(e)}get value(){return eh(this),this._value}set value(e){const n=this.__v_isShallow||to(e)||Ws(e);e=n?e:Se(e),fn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:no(e),Ls(this,5))}}function XT(t){Ls(t,5)}function st(t){return Ze(t)?t.value:t}function ZT(t){return pe(t)?t():st(t)}const ew={get:(t,e,n)=>st(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ze(s)&&!Ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function th(t){return Ms(t)?t:new Proxy(t,ew)}class tw{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>eh(this),()=>Ls(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function cm(t){return new tw(t)}function nw(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=lm(t,n);return e}class rw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return kT(Se(this._object),this._key)}}class sw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function iw(t,e,n){return Ze(t)?t:pe(t)?new sw(t):Be(t)&&arguments.length>1?lm(t,e,n):qe(t)}function lm(t,e,n){const r=t[e];return Ze(r)?r:new rw(t,e,n)}const ow={GET:"get",HAS:"has",ITERATE:"iterate"},aw={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cw(t,e){}const lw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},uw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function qn(t,e,n,r){try{return r?t(...r):t()}catch(s){fs(s,e,n)}}function Wt(t,e,n,r){if(pe(t)){const s=qn(t,e,n,r);return s&&Hu(s)&&s.catch(i=>{fs(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Wt(t[i],e,n,r));return s}}function fs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Mr(),qn(l,null,10,[t,o,c]),Lr();return}}hw(t,n,s,r)}function hw(t,e,n,r=!0){console.error(t)}let ro=!1,zl=!1;const Rt=[];let En=0;const xs=[];let pr=null,Gr=0;const um=Promise.resolve();let nh=null;function bo(t){const e=nh||um;return t?e.then(this?t.bind(this):t):e}function dw(t){let e=En+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=so(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ec(t){(!Rt.length||!Rt.includes(t,ro&&t.allowRecurse?En+1:En))&&(t.id==null?Rt.push(t):Rt.splice(dw(t.id),0,t),hm())}function hm(){!ro&&!zl&&(zl=!0,nh=um.then(dm))}function fw(t){const e=Rt.indexOf(t);e>En&&Rt.splice(e,1)}function Ua(t){re(t)?xs.push(...t):(!pr||!pr.includes(t,t.allowRecurse?Gr+1:Gr))&&xs.push(t),hm()}function yf(t,e,n=ro?En+1:0){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r()}}}function Ba(t){if(xs.length){const e=[...new Set(xs)].sort((n,r)=>so(n)-so(r));if(xs.length=0,pr){pr.push(...e);return}for(pr=e,Gr=0;Gr<pr.length;Gr++){const n=pr[Gr];n.active!==!1&&n()}pr=null,Gr=0}}const so=t=>t.id==null?1/0:t.id,pw=(t,e)=>{const n=so(t)-so(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function dm(t){zl=!1,ro=!0,Rt.sort(pw);try{for(En=0;En<Rt.length;En++){const e=Rt[En];e&&e.active!==!1&&qn(e,null,14)}}finally{En=0,Rt.length=0,Ba(),ro=!1,nh=null,(Rt.length||xs.length)&&dm()}}let Rs,ha=[];function fm(t,e){var n,r;Rs=t,Rs?(Rs.enabled=!0,ha.forEach(({event:s,args:i})=>Rs.emit(s,...i)),ha=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{fm(i,e)}),setTimeout(()=>{Rs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ha=[])},3e3)):ha=[]}function gw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Fe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[h]||Fe;g&&(s=n.map(w=>Qe(w)?w.trim():w)),p&&(s=n.map(La))}let c,l=r[c=$i(e)]||r[c=$i(Dt(e))];!l&&i&&(l=r[c=$i(Kt(e))]),l&&Wt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Wt(u,t,6,s)}}function pm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const h=pm(u,e,!0);h&&(c=!0,ze(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Be(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>o[l]=null):ze(o,i),Be(t)&&r.set(t,o),o)}function Tc(t,e){return!t||!To(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Kt(e))||ke(t,e))}let lt=null,wc=null;function io(t){const e=lt;return lt=t,wc=t&&t.type.__scopeId||null,e}function Jn(t){wc=t}function Xn(){wc=null}const mw=t=>Zt;function Zt(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ru(-1);const i=io(e);let o;try{o=t(...s)}finally{io(i),r._d&&ru(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Aa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:p,data:g,setupState:w,ctx:C,inheritAttrs:V}=t,D=io(t);let U,O;try{if(n.shapeFlag&4){const k=s||r,x=k;U=Ht(u.call(x,k,h,p,w,g,C)),O=c}else{const k=e;U=Ht(k.length>1?k(p,{attrs:c,slots:o,emit:l}):k(p,null)),O=e.props?c:yw(c)}}catch(k){Hi.length=0,fs(k,t,1),U=De(pt)}let S=U;if(O&&V!==!1){const k=Object.keys(O),{shapeFlag:x}=S;k.length&&x&7&&(i&&k.some(ju)&&(O=vw(O,i)),S=Rn(S,O,!1,!0))}return n.dirs&&(S=Rn(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),U=S,io(D),U}function _w(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(kr(s)){if(s.type!==pt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const yw=t=>{let e;for(const n in t)(n==="class"||n==="style"||To(n))&&((e||(e={}))[n]=t[n]);return e},vw=(t,e)=>{const n={};for(const r in t)(!ju(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ew(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?vf(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const g=h[p];if(o[g]!==r[g]&&!Tc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?vf(r,o,u):!0:!!o;return!1}function vf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Tc(n,i))return!0}return!1}function rh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const sh="components",Tw="directives";function gm(t,e){return ih(sh,t,!0,e)||t}const mm=Symbol.for("v-ndc");function _m(t){return Qe(t)?ih(sh,t,!1)||t:t||mm}function ww(t){return ih(Tw,t)}function ih(t,e,n=!0,r=!1){const s=lt||ct;if(s){const i=s.type;if(t===sh){const c=cu(i,!1);if(c&&(c===e||c===Dt(e)||c===wo(Dt(e))))return i}const o=Ef(s[t]||i[t],e)||Ef(s.appContext[t],e);return!o&&r?i:o}}function Ef(t,e){return t&&(t[e]||t[Dt(e)]||t[wo(Dt(e))])}const Ql=t=>t.__isSuspense;let Yl=0;const Iw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)bw(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Rw(t,e,n,r,s,o,c,l,u)}},hydrate:Sw,create:oh,normalize:Cw},Aw=Iw;function oo(t,e){const n=t.props&&t.props[e];pe(n)&&n()}function bw(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:h}}=l,p=h("div"),g=t.suspense=oh(t,s,r,e,p,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,p,null,r,g,i,o),g.deps>0?(oo(t,"onPending"),oo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Fs(g,t.ssFallback)):g.resolve(!1,!0)}function Rw(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:h}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,w=e.ssFallback,{activeBranch:C,pendingBranch:V,isInFallback:D,isHydrating:U}=p;if(V)p.pendingBranch=g,an(g,V)?(l(V,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():D&&(U||(l(C,w,n,r,s,null,i,o,c),Fs(p,w)))):(p.pendingId=Yl++,U?(p.isHydrating=!1,p.activeBranch=V):u(V,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=h("div"),D?(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(C,w,n,r,s,null,i,o,c),Fs(p,w))):C&&an(g,C)?(l(C,g,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(C&&an(g,C))l(C,g,n,r,s,p,i,o,c),Fs(p,g);else if(oo(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=Yl++,l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:O,pendingId:S}=p;O>0?setTimeout(()=>{p.pendingId===S&&p.fallback(w)},O):O===0&&p.fallback(w)}}function oh(t,e,n,r,s,i,o,c,l,u,h=!1){const{p,m:g,um:w,n:C,o:{parentNode:V,remove:D}}=u;let U;const O=Pw(t);O&&e&&e.pendingBranch&&(U=e.pendingId,e.deps++);const S=t.props?xa(t.props.timeout):void 0,k=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Yl++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(P=!1,E=!1){const{vnode:_,activeBranch:m,pendingBranch:y,pendingId:I,effects:A,parentComponent:T,container:ge}=x;let we=!1;x.isHydrating?x.isHydrating=!1:P||(we=m&&y.transition&&y.transition.mode==="out-in",we&&(m.transition.afterLeave=()=>{I===x.pendingId&&(g(y,ge,i===k?C(m):i,0),Ua(A))}),m&&(V(m.el)!==x.hiddenContainer&&(i=C(m)),w(m,T,x,!0)),we||g(y,ge,i,0)),Fs(x,y),x.pendingBranch=null,x.isInFallback=!1;let te=x.parent,le=!1;for(;te;){if(te.pendingBranch){te.effects.push(...A),le=!0;break}te=te.parent}!le&&!we&&Ua(A),x.effects=[],O&&e&&e.pendingBranch&&U===e.pendingId&&(e.deps--,e.deps===0&&!E&&e.resolve()),oo(_,"onResolve")},fallback(P){if(!x.pendingBranch)return;const{vnode:E,activeBranch:_,parentComponent:m,container:y,namespace:I}=x;oo(E,"onFallback");const A=C(_),T=()=>{x.isInFallback&&(p(null,P,y,A,m,null,I,c,l),Fs(x,P))},ge=P.transition&&P.transition.mode==="out-in";ge&&(_.transition.afterLeave=T),x.isInFallback=!0,w(_,m,null,!0),ge||T()},move(P,E,_){x.activeBranch&&g(x.activeBranch,P,E,_),x.container=P},next(){return x.activeBranch&&C(x.activeBranch)},registerDep(P,E,_){const m=!!x.pendingBranch;m&&x.deps++;const y=P.vnode.el;P.asyncDep.catch(I=>{fs(I,P,0)}).then(I=>{if(P.isUnmounted||x.isUnmounted||x.pendingId!==P.suspenseId)return;P.asyncResolved=!0;const{vnode:A}=P;ou(P,I,!1),y&&(A.el=y);const T=!y&&P.subTree.el;E(P,A,V(y||P.subTree.el),y?null:C(P.subTree),x,o,_),T&&D(T),rh(P,A.el),m&&--x.deps===0&&x.resolve()})},unmount(P,E){x.isUnmounted=!0,x.activeBranch&&w(x.activeBranch,n,P,E),x.pendingBranch&&w(x.pendingBranch,n,P,E)}};return x}function Sw(t,e,n,r,s,i,o,c,l){const u=e.suspense=oh(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function Cw(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Tf(r?n.default:n),t.ssFallback=r?Tf(n.fallback):De(pt)}function Tf(t){let e;if(pe(t)){const n=ns&&t._c;n&&(t._d=!1,Te()),t=t(),n&&(t._d=!0,e=xt,e_())}return re(t)&&(t=_w(t)),t=Ht(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ym(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):Ua(t)}function Fs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,rh(r,s))}function Pw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function Ic(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Mr();const c=rs(n),l=Wt(e,n,t,o);return c(),Lr(),l});return r?s.unshift(i):s.push(i),i}}const Zn=t=>(e,n=ct)=>{(!Po||t==="sp")&&Ic(t,(...r)=>e(...r),n)},vm=Zn("bm"),ps=Zn("m"),Em=Zn("bu"),Ac=Zn("u"),bc=Zn("bum"),Rc=Zn("um"),Tm=Zn("sp"),wm=Zn("rtg"),Im=Zn("rtc");function Am(t,e=ct){Ic("ec",t,e)}function wn(t,e){if(lt===null)return t;const n=ko(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Fe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&yr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function vn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Mr(),Wt(l,n,8,[t.el,c,t,e]),Lr())}}function Vn(t,e,n,r){let s;const i=n&&n[r];if(re(t)||Qe(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function kw(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(re(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}/*! #__NO_SIDE_EFFECTS__ */function Ro(t,e){return pe(t)?ze({name:t.name},e,{setup:t}):t}const Xr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Ow(t){pe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,h=0;const p=()=>(h++,l=null,g()),g=()=>{let w;return l||(w=l=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((V,D)=>{c(C,()=>V(p()),()=>D(C),h+1)});throw C}).then(C=>w!==l&&l?l:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),u=C,C)))};return Ro({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const w=ct;if(u)return()=>vl(u,w);const C=O=>{l=null,fs(O,w,13,!r)};if(o&&w.suspense||Po)return g().then(O=>()=>vl(O,w)).catch(O=>(C(O),()=>r?De(r,{error:O}):null));const V=qe(!1),D=qe(),U=qe(!!s);return s&&setTimeout(()=>{U.value=!1},s),i!=null&&setTimeout(()=>{if(!V.value&&!D.value){const O=new Error(`Async component timed out after ${i}ms.`);C(O),D.value=O}},i),g().then(()=>{V.value=!0,w.parent&&Co(w.parent.vnode)&&(w.parent.effect.dirty=!0,Ec(w.parent.update))}).catch(O=>{C(O),D.value=O}),()=>{if(V.value&&u)return vl(u,w);if(D.value&&r)return De(r,{error:D.value});if(n&&!U.value)return De(n)}}})}function vl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=De(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}function Dw(t,e,n={},r,s){if(lt.isCE||lt.parent&&Xr(lt.parent)&&lt.parent.isCE)return e!=="default"&&(n.name=e),De("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Te();const o=i&&bm(i(n)),c=wr(He,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function bm(t){return t.some(e=>kr(e)?!(e.type===pt||e.type===He&&!bm(e.children)):!0)?t:null}function Nw(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:$i(r)]=t[r];return n}const Jl=t=>t?a_(t)?ko(t):Jl(t.parent):null,ji=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jl(t.parent),$root:t=>Jl(t.root),$emit:t=>t.emit,$options:t=>ah(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ec(t.update)}),$nextTick:t=>t.n||(t.n=bo.bind(t.proxy)),$watch:t=>dI.bind(t)}),El=(t,e)=>t!==Fe&&!t.__isScriptSetup&&ke(t,e),Xl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(El(r,e))return o[e]=1,r[e];if(s!==Fe&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Fe&&ke(n,e))return o[e]=4,n[e];Zl&&(o[e]=0)}}const h=ji[e];let p,g;if(h)return e==="$attrs"&&Bt(t.attrs,"get",""),h(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Fe&&ke(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,ke(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return El(s,e)?(s[e]=n,!0):r!==Fe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Fe&&ke(t,o)||El(e,o)||(c=i[0])&&ke(c,o)||ke(r,o)||ke(ji,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Vw=ze({},Xl,{get(t,e){if(e!==Symbol.unscopables)return Xl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!mT(e)}});function Mw(){return null}function Lw(){return null}function xw(t){}function Fw(t){}function Uw(){return null}function Bw(){}function $w(t,e){return null}function jw(){return Rm().slots}function qw(){return Rm().attrs}function Rm(){const t=er();return t.setupContext||(t.setupContext=u_(t))}function ao(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Hw(t,e){const n=ao(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?re(s)||pe(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Kw(t,e){return!t||!e?t||e:re(t)&&re(e)?t.concat(e):ze({},ao(t),ao(e))}function Gw(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Ww(t){const e=er();let n=t();return iu(),Hu(n)&&(n=n.catch(r=>{throw rs(e),r})),[n,()=>rs(e)]}let Zl=!0;function zw(t){const e=ah(t),n=t.proxy,r=t.ctx;Zl=!1,e.beforeCreate&&wf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:p,mounted:g,beforeUpdate:w,updated:C,activated:V,deactivated:D,beforeDestroy:U,beforeUnmount:O,destroyed:S,unmounted:k,render:x,renderTracked:P,renderTriggered:E,errorCaptured:_,serverPrefetch:m,expose:y,inheritAttrs:I,components:A,directives:T,filters:ge}=e;if(u&&Qw(u,r,null),o)for(const le in o){const Z=o[le];pe(Z)&&(r[le]=Z.bind(n))}if(s){const le=s.call(n,n);Be(le)&&(t.data=Ao(le))}if(Zl=!0,i)for(const le in i){const Z=i[le],ve=pe(Z)?Z.bind(n,n):pe(Z.get)?Z.get.bind(n,n):Lt,ue=!pe(Z)&&pe(Z.set)?Z.set.bind(n):Lt,fe=tn({get:ve,set:ue});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>fe.value,set:Ne=>fe.value=Ne})}if(c)for(const le in c)Sm(c[le],r,n,le);if(l){const le=pe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(Z=>{Bs(Z,le[Z])})}h&&wf(h,t,"c");function te(le,Z){re(Z)?Z.forEach(ve=>le(ve.bind(n))):Z&&le(Z.bind(n))}if(te(vm,p),te(ps,g),te(Em,w),te(Ac,C),te(Wm,V),te(zm,D),te(Am,_),te(Im,P),te(wm,E),te(bc,O),te(Rc,k),te(Tm,m),re(y))if(y.length){const le=t.exposed||(t.exposed={});y.forEach(Z=>{Object.defineProperty(le,Z,{get:()=>n[Z],set:ve=>n[Z]=ve})})}else t.exposed||(t.exposed={});x&&t.render===Lt&&(t.render=x),I!=null&&(t.inheritAttrs=I),A&&(t.components=A),T&&(t.directives=T)}function Qw(t,e,n=Lt){re(t)&&(t=eu(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),Ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function wf(t,e,n){Wt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sm(t,e,n,r){const s=r.includes(".")?Gm(n,r):()=>n[r];if(Qe(t)){const i=e[t];pe(i)&&$s(s,i)}else if(pe(t))$s(s,t.bind(n));else if(Be(t))if(re(t))t.forEach(i=>Sm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&$s(s,i,t)}}function ah(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>$a(l,u,o,!0)),$a(l,e,o)),Be(e)&&i.set(e,l),l}function $a(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&$a(t,i,n,!0),s&&s.forEach(o=>$a(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Yw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Yw={data:If,props:Af,emits:Af,methods:Ni,computed:Ni,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:Ni,directives:Ni,watch:Xw,provide:If,inject:Jw};function If(t,e){return e?t?function(){return ze(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function Jw(t,e){return Ni(eu(t),eu(e))}function eu(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ni(t,e){return t?ze(Object.create(null),t,e):e}function Af(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:ze(Object.create(null),ao(t),ao(e??{})):e}function Xw(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Cm(){return{app:null,config:{isNativeTag:lT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zw=0;function eI(t,e){return function(r,s=null){pe(r)||(r=ze({},r)),s!=null&&!Be(s)&&(s=null);const i=Cm(),o=new WeakSet;let c=!1;const l=i.app={_uid:Zw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:d_,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&pe(u.install)?(o.add(u),u.install(l,...h)):pe(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,p){if(!c){const g=De(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,ko(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=Us;Us=l;try{return u()}finally{Us=h}}};return l}}let Us=null;function Bs(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=ct||lt;if(r||Us){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Us._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}function tI(){return!!(ct||lt||Us)}const Pm={},km=()=>Object.create(Pm),Om=t=>Object.getPrototypeOf(t)===Pm;function nI(t,e,n,r=!1){const s={},i=km();t.propsDefaults=Object.create(null),Dm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function rI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let g=h[p];if(Tc(t.emitsOptions,g))continue;const w=e[g];if(l)if(ke(i,g))w!==i[g]&&(i[g]=w,u=!0);else{const C=Dt(g);s[C]=tu(l,c,C,w,t,!1)}else w!==i[g]&&(i[g]=w,u=!0)}}}else{Dm(t,e,s,i)&&(u=!0);let h;for(const p in c)(!e||!ke(e,p)&&((h=Kt(p))===p||!ke(e,h)))&&(l?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=tu(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&jn(t.attrs,"set","")}function Dm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ns(l))continue;const u=e[l];let h;s&&ke(s,h=Dt(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Tc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=c||Fe;for(let h=0;h<i.length;h++){const p=i[h];n[p]=tu(s,l,p,u[p],t,!ke(u,p))}}return o}function tu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=ke(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=rs(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Kt(n))&&(r=!0))}return r}function Nm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const h=p=>{l=!0;const[g,w]=Nm(p,e,!0);ze(o,g),w&&c.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Be(t)&&r.set(t,Os),Os;if(re(i))for(let h=0;h<i.length;h++){const p=Dt(i[h]);bf(p)&&(o[p]=Fe)}else if(i)for(const h in i){const p=Dt(h);if(bf(p)){const g=i[h],w=o[p]=re(g)||pe(g)?{type:g}:ze({},g);if(w){const C=Cf(Boolean,w.type),V=Cf(String,w.type);w[0]=C>-1,w[1]=V<0||C<V,(C>-1||ke(w,"default"))&&c.push(p)}}}const u=[o,c];return Be(t)&&r.set(t,u),u}function bf(t){return t[0]!=="$"&&!Ns(t)}function Rf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Sf(t,e){return Rf(t)===Rf(e)}function Cf(t,e){return re(e)?e.findIndex(n=>Sf(n,t)):pe(e)&&Sf(e,t)?0:-1}const Vm=t=>t[0]==="_"||t==="$stable",ch=t=>re(t)?t.map(Ht):[Ht(t)],sI=(t,e,n)=>{if(e._n)return e;const r=Zt((...s)=>ch(e(...s)),n);return r._c=!1,r},Mm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vm(s))continue;const i=t[s];if(pe(i))e[s]=sI(s,i,r);else if(i!=null){const o=ch(i);e[s]=()=>o}}},Lm=(t,e)=>{const n=ch(e);t.slots.default=()=>n},iI=(t,e)=>{const n=t.slots=km();if(t.vnode.shapeFlag&32){const r=e._;r?(ze(n,e),Ug(n,"_",r,!0)):Mm(e,n)}else e&&Lm(t,e)},oI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Fe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ze(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Mm(e,s)),o=e}else e&&(Lm(t,e),o={default:1});if(i)for(const c in s)!Vm(c)&&o[c]==null&&delete s[c]};function ja(t,e,n,r,s=!1){if(re(t)){t.forEach((g,w)=>ja(g,e&&(re(e)?e[w]:e),n,r,s));return}if(Xr(r)&&!s)return;const i=r.shapeFlag&4?ko(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Fe?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Qe(u)?(h[u]=null,ke(p,u)&&(p[u]=null)):Ze(u)&&(u.value=null)),pe(l))qn(l,c,12,[o,h]);else{const g=Qe(l),w=Ze(l);if(g||w){const C=()=>{if(t.f){const V=g?ke(p,l)?p[l]:h[l]:l.value;s?re(V)&&qu(V,i):re(V)?V.includes(i)||V.push(i):g?(h[l]=[i],ke(p,l)&&(p[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else g?(h[l]=o,ke(p,l)&&(p[l]=o)):w&&(l.value=o,t.k&&(h[t.k]=o))};o?(C.id=-1,dt(C,n)):C()}}}let Pf=!1;const bs=()=>{Pf||(console.error("Hydration completed but contains mismatches."),Pf=!0)},aI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",cI=t=>t.namespaceURI.includes("MathML"),da=t=>{if(aI(t))return"svg";if(cI(t))return"mathml"},fa=t=>t.nodeType===8;function lI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,h=(S,k)=>{if(!k.hasChildNodes()){n(null,S,k),Ba(),k._vnode=S;return}p(k.firstChild,S,null,null,null),Ba(),k._vnode=S},p=(S,k,x,P,E,_=!1)=>{_=_||!!k.dynamicChildren;const m=fa(S)&&S.data==="[",y=()=>V(S,k,x,P,E,m),{type:I,ref:A,shapeFlag:T,patchFlag:ge}=k;let we=S.nodeType;k.el=S,ge===-2&&(_=!1,k.dynamicChildren=null);let te=null;switch(I){case ts:we!==3?k.children===""?(l(k.el=s(""),o(S),S),te=S):te=y():(S.data!==k.children&&(bs(),S.data=k.children),te=i(S));break;case pt:O(S)?(te=i(S),U(k.el=S.content.firstChild,S,x)):we!==8||m?te=y():te=i(S);break;case Zr:if(m&&(S=i(S),we=S.nodeType),we===1||we===3){te=S;const le=!k.children.length;for(let Z=0;Z<k.staticCount;Z++)le&&(k.children+=te.nodeType===1?te.outerHTML:te.data),Z===k.staticCount-1&&(k.anchor=te),te=i(te);return m?i(te):te}else y();break;case He:m?te=C(S,k,x,P,E,_):te=y();break;default:if(T&1)(we!==1||k.type.toLowerCase()!==S.tagName.toLowerCase())&&!O(S)?te=y():te=g(S,k,x,P,E,_);else if(T&6){k.slotScopeIds=E;const le=o(S);if(m?te=D(S):fa(S)&&S.data==="teleport start"?te=D(S,S.data,"teleport end"):te=i(S),e(k,le,null,x,P,da(le),_),Xr(k)){let Z;m?(Z=De(He),Z.anchor=te?te.previousSibling:le.lastChild):Z=S.nodeType===3?Tn(""):De("div"),Z.el=S,k.component.subTree=Z}}else T&64?we!==8?te=y():te=k.type.hydrate(S,k,x,P,E,_,t,w):T&128&&(te=k.type.hydrate(S,k,x,P,da(o(S)),E,_,t,p))}return A!=null&&ja(A,null,P,k),te},g=(S,k,x,P,E,_)=>{_=_||!!k.dynamicChildren;const{type:m,props:y,patchFlag:I,shapeFlag:A,dirs:T,transition:ge}=k,we=m==="input"||m==="option";if(we||I!==-1){T&&vn(k,null,x,"created");let te=!1;if(O(S)){te=Bm(P,ge)&&x&&x.vnode.props&&x.vnode.props.appear;const Z=S.content.firstChild;te&&ge.beforeEnter(Z),U(Z,S,x),k.el=S=Z}if(A&16&&!(y&&(y.innerHTML||y.textContent))){let Z=w(S.firstChild,k,S,x,P,E,_);for(;Z;){bs();const ve=Z;Z=Z.nextSibling,c(ve)}}else A&8&&S.textContent!==k.children&&(bs(),S.textContent=k.children);if(y)if(we||!_||I&48)for(const Z in y)(we&&(Z.endsWith("value")||Z==="indeterminate")||To(Z)&&!Ns(Z)||Z[0]===".")&&r(S,Z,null,y[Z],void 0,void 0,x);else y.onClick&&r(S,"onClick",null,y.onClick,void 0,void 0,x);let le;(le=y&&y.onVnodeBeforeMount)&&Nt(le,x,k),T&&vn(k,null,x,"beforeMount"),((le=y&&y.onVnodeMounted)||T||te)&&ym(()=>{le&&Nt(le,x,k),te&&ge.enter(S),T&&vn(k,null,x,"mounted")},P)}return S.nextSibling},w=(S,k,x,P,E,_,m)=>{m=m||!!k.dynamicChildren;const y=k.children,I=y.length;for(let A=0;A<I;A++){const T=m?y[A]:y[A]=Ht(y[A]);S?S=p(S,T,P,E,_,m):T.type===ts&&!T.children?l(T.el=s(""),x):(bs(),n(null,T,x,null,P,E,da(x),_))}return S},C=(S,k,x,P,E,_)=>{const{slotScopeIds:m}=k;m&&(E=E?E.concat(m):m);const y=o(S),I=w(i(S),k,y,x,P,E,_);return I&&fa(I)&&I.data==="]"?i(k.anchor=I):(bs(),l(k.anchor=u("]"),y,I),I)},V=(S,k,x,P,E,_)=>{if(bs(),k.el=null,_){const I=D(S);for(;;){const A=i(S);if(A&&A!==I)c(A);else break}}const m=i(S),y=o(S);return c(S),n(null,k,y,m,x,P,da(y),E),m},D=(S,k="[",x="]")=>{let P=0;for(;S;)if(S=i(S),S&&fa(S)&&(S.data===k&&P++,S.data===x)){if(P===0)return i(S);P--}return S},U=(S,k,x)=>{const P=k.parentNode;P&&P.replaceChild(S,k);let E=x;for(;E;)E.vnode.el===k&&(E.vnode.el=E.subTree.el=S),E=E.parent},O=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[h,p]}const dt=ym;function xm(t){return Um(t)}function Fm(t){return Um(t,lI)}function Um(t,e){const n=Bg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:p,nextSibling:g,setScopeId:w=Lt,insertStaticContent:C}=t,V=(b,R,L,j=null,B=null,W=null,Y=void 0,G=null,z=!!R.dynamicChildren)=>{if(b===R)return;b&&!an(b,R)&&(j=$(b),Ne(b,B,W,!0),b=null),R.patchFlag===-2&&(z=!1,R.dynamicChildren=null);const{type:H,ref:X,shapeFlag:ce}=R;switch(H){case ts:D(b,R,L,j);break;case pt:U(b,R,L,j);break;case Zr:b==null&&O(R,L,j,Y);break;case He:A(b,R,L,j,B,W,Y,G,z);break;default:ce&1?x(b,R,L,j,B,W,Y,G,z):ce&6?T(b,R,L,j,B,W,Y,G,z):(ce&64||ce&128)&&H.process(b,R,L,j,B,W,Y,G,z,se)}X!=null&&B&&ja(X,b&&b.ref,W,R||b,!R)},D=(b,R,L,j)=>{if(b==null)r(R.el=c(R.children),L,j);else{const B=R.el=b.el;R.children!==b.children&&u(B,R.children)}},U=(b,R,L,j)=>{b==null?r(R.el=l(R.children||""),L,j):R.el=b.el},O=(b,R,L,j)=>{[b.el,b.anchor]=C(b.children,R,L,j,b.el,b.anchor)},S=({el:b,anchor:R},L,j)=>{let B;for(;b&&b!==R;)B=g(b),r(b,L,j),b=B;r(R,L,j)},k=({el:b,anchor:R})=>{let L;for(;b&&b!==R;)L=g(b),s(b),b=L;s(R)},x=(b,R,L,j,B,W,Y,G,z)=>{R.type==="svg"?Y="svg":R.type==="math"&&(Y="mathml"),b==null?P(R,L,j,B,W,Y,G,z):m(b,R,B,W,Y,G,z)},P=(b,R,L,j,B,W,Y,G)=>{let z,H;const{props:X,shapeFlag:ce,transition:ae,dirs:oe}=b;if(z=b.el=o(b.type,W,X&&X.is,X),ce&8?h(z,b.children):ce&16&&_(b.children,z,null,j,B,Tl(b,W),Y,G),oe&&vn(b,null,j,"created"),E(z,b,b.scopeId,Y,j),X){for(const Le in X)Le!=="value"&&!Ns(Le)&&i(z,Le,null,X[Le],W,b.children,j,B,ht);"value"in X&&i(z,"value",null,X.value,W),(H=X.onVnodeBeforeMount)&&Nt(H,j,b)}oe&&vn(b,null,j,"beforeMount");const de=Bm(B,ae);de&&ae.beforeEnter(z),r(z,R,L),((H=X&&X.onVnodeMounted)||de||oe)&&dt(()=>{H&&Nt(H,j,b),de&&ae.enter(z),oe&&vn(b,null,j,"mounted")},B)},E=(b,R,L,j,B)=>{if(L&&w(b,L),j)for(let W=0;W<j.length;W++)w(b,j[W]);if(B){let W=B.subTree;if(R===W){const Y=B.vnode;E(b,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},_=(b,R,L,j,B,W,Y,G,z=0)=>{for(let H=z;H<b.length;H++){const X=b[H]=G?mr(b[H]):Ht(b[H]);V(null,X,R,L,j,B,W,Y,G)}},m=(b,R,L,j,B,W,Y)=>{const G=R.el=b.el;let{patchFlag:z,dynamicChildren:H,dirs:X}=R;z|=b.patchFlag&16;const ce=b.props||Fe,ae=R.props||Fe;let oe;if(L&&qr(L,!1),(oe=ae.onVnodeBeforeUpdate)&&Nt(oe,L,R,b),X&&vn(R,b,L,"beforeUpdate"),L&&qr(L,!0),H?y(b.dynamicChildren,H,G,L,j,Tl(R,B),W):Y||Z(b,R,G,null,L,j,Tl(R,B),W,!1),z>0){if(z&16)I(G,R,ce,ae,L,j,B);else if(z&2&&ce.class!==ae.class&&i(G,"class",null,ae.class,B),z&4&&i(G,"style",ce.style,ae.style,B),z&8){const de=R.dynamicProps;for(let Le=0;Le<de.length;Le++){const Ce=de[Le],et=ce[Ce],$t=ae[Ce];($t!==et||Ce==="value")&&i(G,Ce,et,$t,B,b.children,L,j,ht)}}z&1&&b.children!==R.children&&h(G,R.children)}else!Y&&H==null&&I(G,R,ce,ae,L,j,B);((oe=ae.onVnodeUpdated)||X)&&dt(()=>{oe&&Nt(oe,L,R,b),X&&vn(R,b,L,"updated")},j)},y=(b,R,L,j,B,W,Y)=>{for(let G=0;G<R.length;G++){const z=b[G],H=R[G],X=z.el&&(z.type===He||!an(z,H)||z.shapeFlag&70)?p(z.el):L;V(z,H,X,null,j,B,W,Y,!0)}},I=(b,R,L,j,B,W,Y)=>{if(L!==j){if(L!==Fe)for(const G in L)!Ns(G)&&!(G in j)&&i(b,G,L[G],null,Y,R.children,B,W,ht);for(const G in j){if(Ns(G))continue;const z=j[G],H=L[G];z!==H&&G!=="value"&&i(b,G,H,z,Y,R.children,B,W,ht)}"value"in j&&i(b,"value",L.value,j.value,Y)}},A=(b,R,L,j,B,W,Y,G,z)=>{const H=R.el=b?b.el:c(""),X=R.anchor=b?b.anchor:c("");let{patchFlag:ce,dynamicChildren:ae,slotScopeIds:oe}=R;oe&&(G=G?G.concat(oe):oe),b==null?(r(H,L,j),r(X,L,j),_(R.children||[],L,X,B,W,Y,G,z)):ce>0&&ce&64&&ae&&b.dynamicChildren?(y(b.dynamicChildren,ae,L,B,W,Y,G),(R.key!=null||B&&R===B.subTree)&&lh(b,R,!0)):Z(b,R,L,X,B,W,Y,G,z)},T=(b,R,L,j,B,W,Y,G,z)=>{R.slotScopeIds=G,b==null?R.shapeFlag&512?B.ctx.activate(R,L,j,Y,z):ge(R,L,j,B,W,Y,z):we(b,R,z)},ge=(b,R,L,j,B,W,Y)=>{const G=b.component=o_(b,j,B);if(Co(b)&&(G.ctx.renderer=se),c_(G),G.asyncDep){if(B&&B.registerDep(G,te,Y),!b.el){const z=G.subTree=De(pt);U(null,z,R,L)}}else te(G,b,R,L,B,W,Y)},we=(b,R,L)=>{const j=R.component=b.component;if(Ew(b,R,L))if(j.asyncDep&&!j.asyncResolved){le(j,R,L);return}else j.next=R,fw(j.update),j.effect.dirty=!0,j.update();else R.el=b.el,j.vnode=R},te=(b,R,L,j,B,W,Y)=>{const G=()=>{if(b.isMounted){let{next:X,bu:ce,u:ae,parent:oe,vnode:de}=b;{const Yt=$m(b);if(Yt){X&&(X.el=de.el,le(b,X,Y)),Yt.asyncDep.then(()=>{b.isUnmounted||G()});return}}let Le=X,Ce;qr(b,!1),X?(X.el=de.el,le(b,X,Y)):X=de,ce&&Vs(ce),(Ce=X.props&&X.props.onVnodeBeforeUpdate)&&Nt(Ce,oe,X,de),qr(b,!0);const et=Aa(b),$t=b.subTree;b.subTree=et,V($t,et,p($t.el),$($t),b,B,W),X.el=et.el,Le===null&&rh(b,et.el),ae&&dt(ae,B),(Ce=X.props&&X.props.onVnodeUpdated)&&dt(()=>Nt(Ce,oe,X,de),B)}else{let X;const{el:ce,props:ae}=R,{bm:oe,m:de,parent:Le}=b,Ce=Xr(R);if(qr(b,!1),oe&&Vs(oe),!Ce&&(X=ae&&ae.onVnodeBeforeMount)&&Nt(X,Le,R),qr(b,!0),ce&&Ue){const et=()=>{b.subTree=Aa(b),Ue(ce,b.subTree,b,B,null)};Ce?R.type.__asyncLoader().then(()=>!b.isUnmounted&&et()):et()}else{const et=b.subTree=Aa(b);V(null,et,L,j,b,B,W),R.el=et.el}if(de&&dt(de,B),!Ce&&(X=ae&&ae.onVnodeMounted)){const et=R;dt(()=>Nt(X,Le,et),B)}(R.shapeFlag&256||Le&&Xr(Le.vnode)&&Le.vnode.shapeFlag&256)&&b.a&&dt(b.a,B),b.isMounted=!0,R=L=j=null}},z=b.effect=new Gs(G,Lt,()=>Ec(H),b.scope),H=b.update=()=>{z.dirty&&z.run()};H.id=b.uid,qr(b,!0),H()},le=(b,R,L)=>{R.component=b;const j=b.vnode.props;b.vnode=R,b.next=null,rI(b,R.props,j,L),oI(b,R.children,L),Mr(),yf(b),Lr()},Z=(b,R,L,j,B,W,Y,G,z=!1)=>{const H=b&&b.children,X=b?b.shapeFlag:0,ce=R.children,{patchFlag:ae,shapeFlag:oe}=R;if(ae>0){if(ae&128){ue(H,ce,L,j,B,W,Y,G,z);return}else if(ae&256){ve(H,ce,L,j,B,W,Y,G,z);return}}oe&8?(X&16&&ht(H,B,W),ce!==H&&h(L,ce)):X&16?oe&16?ue(H,ce,L,j,B,W,Y,G,z):ht(H,B,W,!0):(X&8&&h(L,""),oe&16&&_(ce,L,j,B,W,Y,G,z))},ve=(b,R,L,j,B,W,Y,G,z)=>{b=b||Os,R=R||Os;const H=b.length,X=R.length,ce=Math.min(H,X);let ae;for(ae=0;ae<ce;ae++){const oe=R[ae]=z?mr(R[ae]):Ht(R[ae]);V(b[ae],oe,L,null,B,W,Y,G,z)}H>X?ht(b,B,W,!0,!1,ce):_(R,L,j,B,W,Y,G,z,ce)},ue=(b,R,L,j,B,W,Y,G,z)=>{let H=0;const X=R.length;let ce=b.length-1,ae=X-1;for(;H<=ce&&H<=ae;){const oe=b[H],de=R[H]=z?mr(R[H]):Ht(R[H]);if(an(oe,de))V(oe,de,L,null,B,W,Y,G,z);else break;H++}for(;H<=ce&&H<=ae;){const oe=b[ce],de=R[ae]=z?mr(R[ae]):Ht(R[ae]);if(an(oe,de))V(oe,de,L,null,B,W,Y,G,z);else break;ce--,ae--}if(H>ce){if(H<=ae){const oe=ae+1,de=oe<X?R[oe].el:j;for(;H<=ae;)V(null,R[H]=z?mr(R[H]):Ht(R[H]),L,de,B,W,Y,G,z),H++}}else if(H>ae)for(;H<=ce;)Ne(b[H],B,W,!0),H++;else{const oe=H,de=H,Le=new Map;for(H=de;H<=ae;H++){const Ct=R[H]=z?mr(R[H]):Ht(R[H]);Ct.key!=null&&Le.set(Ct.key,H)}let Ce,et=0;const $t=ae-de+1;let Yt=!1,gi=0;const ir=new Array($t);for(H=0;H<$t;H++)ir[H]=0;for(H=oe;H<=ce;H++){const Ct=b[H];if(et>=$t){Ne(Ct,B,W,!0);continue}let Jt;if(Ct.key!=null)Jt=Le.get(Ct.key);else for(Ce=de;Ce<=ae;Ce++)if(ir[Ce-de]===0&&an(Ct,R[Ce])){Jt=Ce;break}Jt===void 0?Ne(Ct,B,W,!0):(ir[Jt-de]=H+1,Jt>=gi?gi=Jt:Yt=!0,V(Ct,R[Jt],L,null,B,W,Y,G,z),et++)}const vs=Yt?uI(ir):Os;for(Ce=vs.length-1,H=$t-1;H>=0;H--){const Ct=de+H,Jt=R[Ct],Es=Ct+1<X?R[Ct+1].el:j;ir[H]===0?V(null,Jt,L,Es,B,W,Y,G,z):Yt&&(Ce<0||H!==vs[Ce]?fe(Jt,L,Es,2):Ce--)}}},fe=(b,R,L,j,B=null)=>{const{el:W,type:Y,transition:G,children:z,shapeFlag:H}=b;if(H&6){fe(b.component.subTree,R,L,j);return}if(H&128){b.suspense.move(R,L,j);return}if(H&64){Y.move(b,R,L,se);return}if(Y===He){r(W,R,L);for(let ce=0;ce<z.length;ce++)fe(z[ce],R,L,j);r(b.anchor,R,L);return}if(Y===Zr){S(b,R,L);return}if(j!==2&&H&1&&G)if(j===0)G.beforeEnter(W),r(W,R,L),dt(()=>G.enter(W),B);else{const{leave:ce,delayLeave:ae,afterLeave:oe}=G,de=()=>r(W,R,L),Le=()=>{ce(W,()=>{de(),oe&&oe()})};ae?ae(W,de,Le):Le()}else r(W,R,L)},Ne=(b,R,L,j=!1,B=!1)=>{const{type:W,props:Y,ref:G,children:z,dynamicChildren:H,shapeFlag:X,patchFlag:ce,dirs:ae,memoIndex:oe}=b;if(G!=null&&ja(G,null,L,b,!0),oe!=null&&(R.renderCache[oe]=void 0),X&256){R.ctx.deactivate(b);return}const de=X&1&&ae,Le=!Xr(b);let Ce;if(Le&&(Ce=Y&&Y.onVnodeBeforeUnmount)&&Nt(Ce,R,b),X&6)yn(b.component,L,j);else{if(X&128){b.suspense.unmount(L,j);return}de&&vn(b,null,R,"beforeUnmount"),X&64?b.type.remove(b,R,L,B,se,j):H&&(W!==He||ce>0&&ce&64)?ht(H,R,L,!1,!0):(W===He&&ce&384||!B&&X&16)&&ht(z,R,L),j&&Ve(b)}(Le&&(Ce=Y&&Y.onVnodeUnmounted)||de)&&dt(()=>{Ce&&Nt(Ce,R,b),de&&vn(b,null,R,"unmounted")},L)},Ve=b=>{const{type:R,el:L,anchor:j,transition:B}=b;if(R===He){sr(L,j);return}if(R===Zr){k(b);return}const W=()=>{s(L),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(b.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:G}=B,z=()=>Y(L,W);G?G(b.el,W,z):z()}else W()},sr=(b,R)=>{let L;for(;b!==R;)L=g(b),s(b),b=L;s(R)},yn=(b,R,L)=>{const{bum:j,scope:B,update:W,subTree:Y,um:G,m:z,a:H}=b;qa(z),qa(H),j&&Vs(j),B.stop(),W&&(W.active=!1,Ne(Y,b,R,L)),G&&dt(G,R),dt(()=>{b.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ht=(b,R,L,j=!1,B=!1,W=0)=>{for(let Y=W;Y<b.length;Y++)Ne(b[Y],R,L,j,B)},$=b=>b.shapeFlag&6?$(b.component.subTree):b.shapeFlag&128?b.suspense.next():g(b.anchor||b.el);let ee=!1;const J=(b,R,L)=>{b==null?R._vnode&&Ne(R._vnode,null,null,!0):V(R._vnode||null,b,R,null,null,null,L),ee||(ee=!0,yf(),Ba(),ee=!1),R._vnode=b},se={p:V,um:Ne,m:fe,r:Ve,mt:ge,mc:_,pc:Z,pbc:y,n:$,o:t};let Ae,Ue;return e&&([Ae,Ue]=e(se)),{render:J,hydrate:Ae,createApp:eI(J,Ae)}}function Tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function lh(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=mr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&lh(o,c)),c.type===ts&&(c.el=o.el)}}function uI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $m(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$m(e)}function qa(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const jm=Symbol.for("v-scx"),qm=()=>zt(jm);function hI(t,e){return So(t,null,e)}function Hm(t,e){return So(t,null,{flush:"post"})}function Km(t,e){return So(t,null,{flush:"sync"})}const pa={};function $s(t,e,n){return So(t,e,n)}function So(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Fe){if(e&&i){const P=e;e=(...E)=>{P(...E),x()}}const l=ct,u=P=>r===!0?P:yr(P,r===!1?1:void 0);let h,p=!1,g=!1;if(Ze(t)?(h=()=>t.value,p=to(t)):Ms(t)?(h=()=>u(t),p=!0):re(t)?(g=!0,p=t.some(P=>Ms(P)||to(P)),h=()=>t.map(P=>{if(Ze(P))return P.value;if(Ms(P))return u(P);if(pe(P))return qn(P,l,2)})):pe(t)?e?h=()=>qn(t,l,2):h=()=>(w&&w(),Wt(t,l,3,[C])):h=Lt,e&&r){const P=h;h=()=>yr(P())}let w,C=P=>{w=S.onStop=()=>{qn(P,l,4),w=S.onStop=void 0}},V;if(Po)if(C=Lt,e?n&&Wt(e,l,3,[h(),g?[]:void 0,C]):h(),s==="sync"){const P=qm();V=P.__watcherHandles||(P.__watcherHandles=[])}else return Lt;let D=g?new Array(t.length).fill(pa):pa;const U=()=>{if(!(!S.active||!S.dirty))if(e){const P=S.run();(r||p||(g?P.some((E,_)=>fn(E,D[_])):fn(P,D)))&&(w&&w(),Wt(e,l,3,[P,D===pa?void 0:g&&D[0]===pa?[]:D,C]),D=P)}else S.run()};U.allowRecurse=!!e;let O;s==="sync"?O=U:s==="post"?O=()=>dt(U,l&&l.suspense):(U.pre=!0,l&&(U.id=l.uid),O=()=>Ec(U));const S=new Gs(h,Lt,O),k=Hg(),x=()=>{S.stop(),k&&qu(k.effects,S)};return e?n?U():D=S.run():s==="post"?dt(S.run.bind(S),l&&l.suspense):S.run(),V&&V.push(x),x}function dI(t,e,n){const r=this.proxy,s=Qe(t)?t.includes(".")?Gm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=rs(this),c=So(s,i.bind(r),n);return o(),c}function Gm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yr(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ze(t))yr(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)yr(t[r],e,n);else if(ds(t)||Ds(t))t.forEach(r=>{yr(r,e,n)});else if(Fg(t)){for(const r in t)yr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&yr(t[r],e,n)}return t}const Co=t=>t.type.__isKeepAlive,fI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=er(),r=n.ctx;if(!r.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:p}}}=r,g=p("div");r.activate=(O,S,k,x,P)=>{const E=O.component;u(O,S,k,0,c),l(E.vnode,O,S,k,E,c,x,O.slotScopeIds,P),dt(()=>{E.isDeactivated=!1,E.a&&Vs(E.a);const _=O.props&&O.props.onVnodeMounted;_&&Nt(_,E.parent,O)},c)},r.deactivate=O=>{const S=O.component;qa(S.m),qa(S.a),u(O,g,null,1,c),dt(()=>{S.da&&Vs(S.da);const k=O.props&&O.props.onVnodeUnmounted;k&&Nt(k,S.parent,O),S.isDeactivated=!0},c)};function w(O){wl(O),h(O,n,c,!0)}function C(O){s.forEach((S,k)=>{const x=cu(S.type);x&&(!O||!O(x))&&V(k)})}function V(O){const S=s.get(O);!o||!an(S,o)?w(S):o&&wl(o),s.delete(O),i.delete(O)}$s(()=>[t.include,t.exclude],([O,S])=>{O&&C(k=>Vi(O,k)),S&&C(k=>!Vi(S,k))},{flush:"post",deep:!0});let D=null;const U=()=>{D!=null&&(Ql(n.subTree.type)?dt(()=>{s.set(D,ga(n.subTree))},n.subTree.suspense):s.set(D,ga(n.subTree)))};return ps(U),Ac(U),bc(()=>{s.forEach(O=>{const{subTree:S,suspense:k}=n,x=ga(S);if(O.type===x.type&&O.key===x.key){wl(x);const P=x.component.da;P&&dt(P,k);return}w(O)})}),()=>{if(D=null,!e.default)return null;const O=e.default(),S=O[0];if(O.length>1)return o=null,O;if(!kr(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let k=ga(S);const x=k.type,P=cu(Xr(k)?k.type.__asyncResolved||{}:x),{include:E,exclude:_,max:m}=t;if(E&&(!P||!Vi(E,P))||_&&P&&Vi(_,P))return o=k,S;const y=k.key==null?x:k.key,I=s.get(y);return k.el&&(k=Rn(k),S.shapeFlag&128&&(S.ssContent=k)),D=y,I?(k.el=I.el,k.component=I.component,k.transition&&Pr(k,k.transition),k.shapeFlag|=512,i.delete(y),i.add(y)):(i.add(y),m&&i.size>parseInt(m,10)&&V(i.values().next().value)),k.shapeFlag|=256,o=k,Ql(S.type)?S:k}}},pI=fI;function Vi(t,e){return re(t)?t.some(n=>Vi(n,e)):Qe(t)?t.split(",").includes(e):hT(t)?t.test(e):!1}function Wm(t,e){Qm(t,"a",e)}function zm(t,e){Qm(t,"da",e)}function Qm(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ic(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Co(s.parent.vnode)&&gI(r,e,n,s),s=s.parent}}function gI(t,e,n,r){const s=Ic(e,t,r,!0);Rc(()=>{qu(r[e],s)},n)}function wl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ga(t){return t.shapeFlag&128?t.ssContent:t}const gr=Symbol("_leaveCb"),ma=Symbol("_enterCb");function uh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ps(()=>{t.isMounted=!0}),bc(()=>{t.isUnmounting=!0}),t}const Xt=[Function,Array],hh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},Ym=t=>{const e=t.subTree;return e.component?Ym(e.component):e},mI={name:"BaseTransition",props:hh,setup(t,{slots:e}){const n=er(),r=uh();return()=>{const s=e.default&&Sc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==pt){i=g;break}}const o=Se(t),{mode:c}=o;if(r.isLeaving)return Il(i);const l=kf(i);if(!l)return Il(i);let u=zs(l,o,r,n,g=>u=g);Pr(l,u);const h=n.subTree,p=h&&kf(h);if(p&&p.type!==pt&&!an(l,p)&&Ym(n).type!==pt){const g=zs(p,o,r,n);if(Pr(p,g),c==="out-in"&&l.type!==pt)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Il(i);c==="in-out"&&l.type!==pt&&(g.delayLeave=(w,C,V)=>{const D=Xm(r,p);D[String(p.key)]=p,w[gr]=()=>{C(),w[gr]=void 0,delete u.delayedLeave},u.delayedLeave=V})}return i}}},Jm=mI;function Xm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function zs(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:g,onLeave:w,onAfterLeave:C,onLeaveCancelled:V,onBeforeAppear:D,onAppear:U,onAfterAppear:O,onAppearCancelled:S}=e,k=String(t.key),x=Xm(n,t),P=(m,y)=>{m&&Wt(m,r,9,y)},E=(m,y)=>{const I=y[1];P(m,y),re(m)?m.every(A=>A.length<=1)&&I():m.length<=1&&I()},_={mode:o,persisted:c,beforeEnter(m){let y=l;if(!n.isMounted)if(i)y=D||l;else return;m[gr]&&m[gr](!0);const I=x[k];I&&an(t,I)&&I.el[gr]&&I.el[gr](),P(y,[m])},enter(m){let y=u,I=h,A=p;if(!n.isMounted)if(i)y=U||u,I=O||h,A=S||p;else return;let T=!1;const ge=m[ma]=we=>{T||(T=!0,we?P(A,[m]):P(I,[m]),_.delayedLeave&&_.delayedLeave(),m[ma]=void 0)};y?E(y,[m,ge]):ge()},leave(m,y){const I=String(t.key);if(m[ma]&&m[ma](!0),n.isUnmounting)return y();P(g,[m]);let A=!1;const T=m[gr]=ge=>{A||(A=!0,y(),ge?P(V,[m]):P(C,[m]),m[gr]=void 0,x[I]===t&&delete x[I])};x[I]=t,w?E(w,[m,T]):T()},clone(m){const y=zs(m,e,n,r,s);return s&&s(y),y}};return _}function Il(t){if(Co(t))return t=Rn(t),t.children=null,t}function kf(t){if(!Co(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function Pr(t,e){t.shapeFlag&6&&t.component?Pr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(Sc(o.children,e,c))):(e||o.type!==pt)&&r.push(c!=null?Rn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const _I=t=>t.__isTeleport,qi=t=>t&&(t.disabled||t.disabled===""),Of=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Df=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,nu=(t,e)=>{const n=t&&t.to;return Qe(n)?e?e(n):null:n},yI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:h,pc:p,pbc:g,o:{insert:w,querySelector:C,createText:V,createComment:D}}=u,U=qi(e.props);let{shapeFlag:O,children:S,dynamicChildren:k}=e;if(t==null){const x=e.el=V(""),P=e.anchor=V("");w(x,n,r),w(P,n,r);const E=e.target=nu(e.props,C),_=e.targetAnchor=V("");E&&(w(_,E),o==="svg"||Of(E)?o="svg":(o==="mathml"||Df(E))&&(o="mathml"));const m=(y,I)=>{O&16&&h(S,y,I,s,i,o,c,l)};U?m(n,P):E&&m(E,_)}else{e.el=t.el;const x=e.anchor=t.anchor,P=e.target=t.target,E=e.targetAnchor=t.targetAnchor,_=qi(t.props),m=_?n:P,y=_?x:E;if(o==="svg"||Of(P)?o="svg":(o==="mathml"||Df(P))&&(o="mathml"),k?(g(t.dynamicChildren,k,m,s,i,o,c),lh(t,e,!0)):l||p(t,e,m,y,s,i,o,c,!1),U)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):_a(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const I=e.target=nu(e.props,C);I&&_a(e,I,null,u,0)}else _&&_a(e,P,E,u,1)}Zm(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:h,target:p,props:g}=t;if(p&&i(h),o&&i(u),c&16){const w=o||!qi(g);for(let C=0;C<l.length;C++){const V=l[C];s(V,e,n,w,!!V.dynamicChildren)}}},move:_a,hydrate:vI};function _a(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:h}=t,p=i===2;if(p&&r(o,e,n),(!p||qi(h))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function vI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const h=e.target=nu(e.props,l);if(h){const p=h._lpa||h.firstChild;if(e.shapeFlag&16)if(qi(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let g=p;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,h,n,r,s,i)}Zm(e)}return e.anchor&&o(e.anchor)}const EI=yI;function Zm(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const He=Symbol.for("v-fgt"),ts=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),Hi=[];let xt=null;function Te(t=!1){Hi.push(xt=t?null:[])}function e_(){Hi.pop(),xt=Hi[Hi.length-1]||null}let ns=1;function ru(t){ns+=t}function t_(t){return t.dynamicChildren=ns>0?xt||Os:null,e_(),ns>0&&xt&&xt.push(t),t}function Pe(t,e,n,r,s,i){return t_(M(t,e,n,r,s,i,!0))}function wr(t,e,n,r,s){return t_(De(t,e,n,r,s,!0))}function kr(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}function TI(t){}const n_=({key:t})=>t??null,ba=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||Ze(t)||pe(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&n_(e),ref:e&&ba(e),scopeId:wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(dh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),ns>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const De=wI;function wI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mm)&&(t=pt),kr(t)){const c=Rn(t,e,!0);return n&&dh(c,n),ns>0&&!i&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag=-2,c}if(PI(t)&&(t=t.__vccOpts),e){e=r_(e);let{class:c,style:l}=e;c&&!Qe(c)&&(e.class=It(c)),Be(l)&&(Xu(l)&&!re(l)&&(l=ze({},l)),e.style=Io(l))}const o=Qe(t)?1:Ql(t)?128:_I(t)?64:Be(t)?4:pe(t)?2:0;return M(t,e,n,r,s,o,i,!0)}function r_(t){return t?Xu(t)||Om(t)?ze({},t):t:null}function Rn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?i_(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&n_(u),ref:e&&e.ref?n&&i?re(i)?i.concat(ba(e)):[i,ba(e)]:ba(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rn(t.ssContent),ssFallback:t.ssFallback&&Rn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Pr(h,l.clone(h)),h}function Tn(t=" ",e=0){return De(ts,null,t,e)}function s_(t,e){const n=De(Zr,null,t);return n.staticCount=e,n}function en(t="",e=!1){return e?(Te(),wr(pt,null,t)):De(pt,null,t)}function Ht(t){return t==null||typeof t=="boolean"?De(pt):re(t)?De(He,null,t.slice()):typeof t=="object"?mr(t):De(ts,null,String(t))}function mr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rn(t)}function dh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),dh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Om(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[Tn(e)]):n=8);t.children=e,t.shapeFlag|=n}function i_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=It([e.class,r.class]));else if(s==="style")e.style=Io([e.style,r.style]);else if(To(s)){const i=e[s],o=r[s];o&&i!==o&&!(re(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Nt(t,e,n,r=null){Wt(t,e,7,[n,r])}const II=Cm();let AI=0;function o_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||II,i={uid:AI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nm(r,s),emitsOptions:pm(r,s),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:r.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=gw.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const er=()=>ct||lt;let Ha,su;{const t=Bg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ha=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),su=e("__VUE_SSR_SETTERS__",n=>Po=n)}const rs=t=>{const e=ct;return Ha(t),t.scope.on(),()=>{t.scope.off(),Ha(e)}},iu=()=>{ct&&ct.scope.off(),Ha(null)};function a_(t){return t.vnode.shapeFlag&4}let Po=!1;function c_(t,e=!1){e&&su(e);const{props:n,children:r}=t.vnode,s=a_(t);nI(t,n,s,e),iI(t,r);const i=s?bI(t,e):void 0;return e&&su(!1),i}function bI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?u_(t):null,i=rs(t);Mr();const o=qn(r,t,0,[t.props,s]);if(Lr(),i(),Hu(o)){if(o.then(iu,iu),e)return o.then(c=>{ou(t,c,e)}).catch(c=>{fs(c,t,0)});t.asyncDep=o}else ou(t,o,e)}else l_(t,e)}function ou(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=th(e)),l_(t,n)}let Ka,au;function RI(t){Ka=t,au=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Vw))}}const SI=()=>!Ka;function l_(t,e,n){const r=t.type;if(!t.render){if(!e&&Ka&&!r.render){const s=r.template||ah(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=ze(ze({isCustomElement:i,delimiters:c},o),l);r.render=Ka(s,u)}}t.render=r.render||Lt,au&&au(t)}{const s=rs(t);Mr();try{zw(t)}finally{Lr(),s()}}}const CI={get(t,e){return Bt(t,"get",""),t[e]}};function u_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,CI),slots:t.slots,emit:t.emit,expose:e}}function ko(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(th(sm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ji)return ji[n](t)},has(e,n){return n in e||n in ji}})):t.proxy}function cu(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function PI(t){return pe(t)&&"__vccOpts"in t}const tn=(t,e)=>YT(t,e,Po);function kI(t,e,n=Fe){const r=er(),s=Dt(e),i=Kt(e),o=cm((l,u)=>{let h;return Km(()=>{const p=t[e];fn(h,p)&&(h=p,u())}),{get(){return l(),n.get?n.get(h):h},set(p){const g=r.vnode.props;!(g&&(e in g||s in g||i in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g))&&fn(p,h)&&(h=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function Cc(t,e,n){const r=arguments.length;return r===2?Be(e)&&!re(e)?kr(e)?De(t,null,[e]):De(t,e):De(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kr(n)&&(n=[n]),De(t,e,n))}function OI(){}function DI(t,e,n,r){const s=n[r];if(s&&h_(s,t))return s;const i=e();return i.memo=t.slice(),i.memoIndex=r,n[r]=i}function h_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(fn(n[r],e[r]))return!1;return ns>0&&xt&&xt.push(t),!0}const d_="3.4.29",NI=Lt,VI=uw,MI=Rs,LI=fm,xI={createComponentInstance:o_,setupComponent:c_,renderComponentRoot:Aa,setCurrentRenderingInstance:io,isVNode:kr,normalizeVNode:Ht,getComponentPublicInstance:ko},FI=xI,UI=null,BI=null,$I=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const jI="http://www.w3.org/2000/svg",qI="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,Nf=Nn&&Nn.createElement("template"),HI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Nn.createElementNS(jI,t):e==="mathml"?Nn.createElementNS(qI,t):n?Nn.createElement(t,{is:n}):Nn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Nf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Nf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ur="transition",Pi="animation",Qs=Symbol("_vtc"),Pc=(t,{slots:e})=>Cc(Jm,p_(t),e);Pc.displayName="Transition";const f_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},KI=Pc.props=ze({},hh,f_),Hr=(t,e=[])=>{re(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vf=t=>t?re(t)?t.some(e=>e.length>1):t.length>1:!1;function p_(t){const e={};for(const A in t)A in f_||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=t,C=GI(s),V=C&&C[0],D=C&&C[1],{onBeforeEnter:U,onEnter:O,onEnterCancelled:S,onLeave:k,onLeaveCancelled:x,onBeforeAppear:P=U,onAppear:E=O,onAppearCancelled:_=S}=e,m=(A,T,ge)=>{fr(A,T?h:c),fr(A,T?u:o),ge&&ge()},y=(A,T)=>{A._isLeaving=!1,fr(A,p),fr(A,w),fr(A,g),T&&T()},I=A=>(T,ge)=>{const we=A?E:O,te=()=>m(T,A,ge);Hr(we,[T,te]),Mf(()=>{fr(T,A?l:i),Dn(T,A?h:c),Vf(we)||Lf(T,r,V,te)})};return ze(e,{onBeforeEnter(A){Hr(U,[A]),Dn(A,i),Dn(A,o)},onBeforeAppear(A){Hr(P,[A]),Dn(A,l),Dn(A,u)},onEnter:I(!1),onAppear:I(!0),onLeave(A,T){A._isLeaving=!0;const ge=()=>y(A,T);Dn(A,p),Dn(A,g),m_(),Mf(()=>{A._isLeaving&&(fr(A,p),Dn(A,w),Vf(k)||Lf(A,r,D,ge))}),Hr(k,[A,ge])},onEnterCancelled(A){m(A,!1),Hr(S,[A])},onAppearCancelled(A){m(A,!0),Hr(_,[A])},onLeaveCancelled(A){y(A),Hr(x,[A])}})}function GI(t){if(t==null)return null;if(Be(t))return[Al(t.enter),Al(t.leave)];{const e=Al(t);return[e,e]}}function Al(t){return xa(t)}function Dn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Qs]||(t[Qs]=new Set)).add(e)}function fr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Qs];n&&(n.delete(e),n.size||(t[Qs]=void 0))}function Mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let WI=0;function Lf(t,e,n,r){const s=t._endId=++WI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=g_(t,e);if(!o)return r();const u=o+"end";let h=0;const p=()=>{t.removeEventListener(u,g),i()},g=w=>{w.target===t&&++h>=l&&p()};setTimeout(()=>{h<l&&p()},c+1),t.addEventListener(u,g)}function g_(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${ur}Delay`),i=r(`${ur}Duration`),o=xf(s,i),c=r(`${Pi}Delay`),l=r(`${Pi}Duration`),u=xf(c,l);let h=null,p=0,g=0;e===ur?o>0&&(h=ur,p=o,g=i.length):e===Pi?u>0&&(h=Pi,p=u,g=l.length):(p=Math.max(o,u),h=p>0?o>u?ur:Pi:null,g=h?h===ur?i.length:l.length:0);const w=h===ur&&/\b(transform|all)(,|$)/.test(r(`${ur}Property`).toString());return{type:h,timeout:p,propCount:g,hasTransform:w}}function xf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ff(n)+Ff(t[r])))}function Ff(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function m_(){return document.body.offsetHeight}function zI(t,e,n){const r=t[Qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ga=Symbol("_vod"),__=Symbol("_vsh"),y_={beforeMount(t,{value:e},{transition:n}){t[Ga]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ki(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ki(t,!0),r.enter(t)):r.leave(t,()=>{ki(t,!1)}):ki(t,e))},beforeUnmount(t,{value:e}){ki(t,e)}};function ki(t,e){t.style.display=e?t[Ga]:"none",t[__]=!e}function QI(){y_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const v_=Symbol("");function YI(t){const e=er();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>uu(i,s))},r=()=>{const s=t(e.proxy);lu(e.subTree,s),n(s)};ps(()=>{Hm(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Rc(()=>s.disconnect())})}function lu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{lu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)uu(t.el,e);else if(t.type===He)t.children.forEach(n=>lu(n,e));else if(t.type===Zr){let{el:n,anchor:r}=t;for(;n&&(uu(n,e),n!==r);)n=n.nextSibling}}function uu(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[v_]=r}}const JI=/(^|;)\s*display\s*:/;function XI(t,e,n){const r=t.style,s=Qe(n);let i=!1;if(n&&!s){if(e)if(Qe(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ra(r,c,"")}else for(const o in e)n[o]==null&&Ra(r,o,"");for(const o in n)o==="display"&&(i=!0),Ra(r,o,n[o])}else if(s){if(e!==n){const o=r[v_];o&&(n+=";"+o),r.cssText=n,i=JI.test(n)}}else e&&t.removeAttribute("style");Ga in t&&(t[Ga]=i?r.display:"",t[__]&&(r.display="none"))}const Uf=/\s*!important$/;function Ra(t,e,n){if(re(n))n.forEach(r=>Ra(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ZI(t,e);Uf.test(n)?t.setProperty(Kt(r),n.replace(Uf,""),"important"):t[r]=n}}const Bf=["Webkit","Moz","ms"],bl={};function ZI(t,e){const n=bl[e];if(n)return n;let r=Dt(e);if(r!=="filter"&&r in t)return bl[e]=r;r=wo(r);for(let s=0;s<Bf.length;s++){const i=Bf[s]+r;if(i in t)return bl[e]=i}return e}const $f="http://www.w3.org/1999/xlink";function jf(t,e,n,r,s,i=IT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($f,e.slice(6,e.length)):t.setAttributeNS($f,e,n):n==null||i&&!$g(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function eA(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?"":String(n);(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=$g(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mn(t,e,n,r){t.addEventListener(e,n,r)}function tA(t,e,n,r){t.removeEventListener(e,n,r)}const qf=Symbol("_vei");function nA(t,e,n,r,s=null){const i=t[qf]||(t[qf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=rA(e);if(r){const u=i[e]=oA(r,s);Mn(t,c,u,l)}else o&&(tA(t,c,o,l),i[e]=void 0)}}const Hf=/(?:Once|Passive|Capture)$/;function rA(t){let e;if(Hf.test(t)){e={};let r;for(;r=t.match(Hf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Kt(t.slice(2)),e]}let Rl=0;const sA=Promise.resolve(),iA=()=>Rl||(sA.then(()=>Rl=0),Rl=Date.now());function oA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Wt(aA(r,n.value),e,5,[r])};return n.value=t,n.attached=iA(),n}function aA(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cA=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?zI(t,r,u):e==="style"?XI(t,n,r):To(e)?ju(e)||nA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lA(t,e,r,u))?(eA(t,e,r,i,o,c,l),(e==="value"||e==="checked"||e==="selected")&&jf(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),jf(t,e,r,u))};function lA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Kf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Kf(e)&&Qe(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function E_(t,e,n){const r=Ro(t,e);class s extends kc{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const uA=(t,e)=>E_(t,e,k_),hA=typeof HTMLElement<"u"?HTMLElement:class{};class kc extends hA{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,bo(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),hu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!re(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=xa(this._props[l])),(c||(c=Object.create(null)))[Dt(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=re(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Dt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=Dt(e);this._numberProps&&this._numberProps[r]&&(n=xa(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Kt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Kt(e),n+""):n||this.removeAttribute(Kt(e))))}_update(){hu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=De(this._def,ze({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Kt(i)!==i&&r(Kt(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof kc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function dA(t="$style"){{const e=er();if(!e)return Fe;const n=e.type.__cssModules;if(!n)return Fe;const r=n[t];return r||Fe}}const T_=new WeakMap,w_=new WeakMap,Wa=Symbol("_moveCb"),Gf=Symbol("_enterCb"),I_={name:"TransitionGroup",props:ze({},KI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=er(),r=uh();let s,i;return Ac(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!yA(s[0].el,n.vnode.el,o))return;s.forEach(gA),s.forEach(mA);const c=s.filter(_A);m_(),c.forEach(l=>{const u=l.el,h=u.style;Dn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const p=u[Wa]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Wa]=null,fr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Se(t),c=p_(o);let l=o.tag||He;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),Pr(h,zs(h,c,r,n)),T_.set(h,h.el.getBoundingClientRect()))}i=e.default?Sc(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Pr(h,zs(h,c,r,n))}return De(l,null,i)}}},fA=t=>delete t.mode;I_.props;const pA=I_;function gA(t){const e=t.el;e[Wa]&&e[Wa](),e[Gf]&&e[Gf]()}function mA(t){w_.set(t,t.el.getBoundingClientRect())}function _A(t){const e=T_.get(t),n=w_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function yA(t,e,n){const r=t.cloneNode(),s=t[Qs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=g_(r);return i.removeChild(r),o}const Or=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>Vs(e,n):e};function vA(t){t.target.composing=!0}function Wf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nn=Symbol("_assign"),un={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[nn]=Or(s);const i=r||s.props&&s.props.type==="number";Mn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=La(c)),t[nn](c)}),n&&Mn(t,"change",()=>{t.value=t.value.trim()}),e||(Mn(t,"compositionstart",vA),Mn(t,"compositionend",Wf),Mn(t,"change",Wf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[nn]=Or(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?La(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},fh={deep:!0,created(t,e,n){t[nn]=Or(n),Mn(t,"change",()=>{const r=t._modelValue,s=Ys(t),i=t.checked,o=t[nn];if(re(r)){const c=mc(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(ds(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(A_(t,i))})},mounted:zf,beforeUpdate(t,e,n){t[nn]=Or(n),zf(t,e,n)}};function zf(t,{value:e,oldValue:n},r){t._modelValue=e,re(e)?t.checked=mc(e,r.props.value)>-1:ds(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Cr(e,A_(t,!0)))}const ph={created(t,{value:e},n){t.checked=Cr(e,n.props.value),t[nn]=Or(n),Mn(t,"change",()=>{t[nn](Ys(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[nn]=Or(r),e!==n&&(t.checked=Cr(e,r.props.value))}},za={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ds(e);Mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?La(Ys(o)):Ys(o));t[nn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,bo(()=>{t._assigning=!1})}),t[nn]=Or(r)},mounted(t,{value:e,modifiers:{number:n}}){Qf(t,e)},beforeUpdate(t,e,n){t[nn]=Or(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Qf(t,e)}};function Qf(t,e,n){const r=t.multiple,s=re(e);if(!(r&&!s&&!ds(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Ys(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(h=>String(h)===String(l)):c.selected=mc(e,l)>-1}else c.selected=e.has(l);else if(Cr(Ys(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ys(t){return"_value"in t?t._value:t.value}function A_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const b_={created(t,e,n){ya(t,e,n,null,"created")},mounted(t,e,n){ya(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ya(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ya(t,e,n,r,"updated")}};function R_(t,e){switch(t){case"SELECT":return za;case"TEXTAREA":return un;default:switch(e){case"checkbox":return fh;case"radio":return ph;default:return un}}}function ya(t,e,n,r,s){const o=R_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function EA(){un.getSSRProps=({value:t})=>({value:t}),ph.getSSRProps=({value:t},e)=>{if(e.props&&Cr(e.props.value,t))return{checked:!0}},fh.getSSRProps=({value:t},e)=>{if(re(t)){if(e.props&&mc(t,e.props.value)>-1)return{checked:!0}}else if(ds(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},b_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=R_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const TA=["ctrl","shift","alt","meta"],wA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>TA.some(n=>t[`${n}Key`]&&!e.includes(n))},IA=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=wA[e[o]];if(c&&c(s,e))return}return t(s,...i)})},AA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Kt(s.key);if(e.some(o=>o===i||AA[o]===i))return t(s)})},S_=ze({patchProp:cA},HI);let Ki,Yf=!1;function C_(){return Ki||(Ki=xm(S_))}function P_(){return Ki=Yf?Ki:Fm(S_),Yf=!0,Ki}const hu=(...t)=>{C_().render(...t)},k_=(...t)=>{P_().hydrate(...t)},O_=(...t)=>{const e=C_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=N_(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,D_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},bA=(...t)=>{const e=P_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=N_(r);if(s)return n(s,!0,D_(s))},e};function D_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function N_(t){return Qe(t)?document.querySelector(t):t}let Jf=!1;const RA=()=>{Jf||(Jf=!0,EA(),QI())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const SA=()=>{},CA=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Jm,BaseTransitionPropsValidators:hh,Comment:pt,DeprecationTypes:$I,EffectScope:Gu,ErrorCodes:lw,ErrorTypeStrings:VI,Fragment:He,KeepAlive:pI,ReactiveEffect:Gs,Static:Zr,Suspense:Aw,Teleport:EI,Text:ts,TrackOpTypes:ow,Transition:Pc,TransitionGroup:pA,TriggerOpTypes:aw,VueElement:kc,assertNumber:cw,callWithAsyncErrorHandling:Wt,callWithErrorHandling:qn,camelize:Dt,capitalize:wo,cloneVNode:Rn,compatUtils:BI,compile:SA,computed:tn,createApp:O_,createBlock:wr,createCommentVNode:en,createElementBlock:Pe,createElementVNode:M,createHydrationRenderer:Fm,createPropsRestProxy:Gw,createRenderer:xm,createSSRApp:bA,createSlots:kw,createStaticVNode:s_,createTextVNode:Tn,createVNode:De,customRef:cm,defineAsyncComponent:Ow,defineComponent:Ro,defineCustomElement:E_,defineEmits:Lw,defineExpose:xw,defineModel:Bw,defineOptions:Fw,defineProps:Mw,defineSSRCustomElement:uA,defineSlots:Uw,devtools:MI,effect:CT,effectScope:bT,getCurrentInstance:er,getCurrentScope:Hg,getTransitionRawChildren:Sc,guardReactiveProps:r_,h:Cc,handleError:fs,hasInjectionContext:tI,hydrate:k_,initCustomFormatter:OI,initDirectivesForSSR:RA,inject:zt,isMemoSame:h_,isProxy:Xu,isReactive:Ms,isReadonly:Ws,isRef:Ze,isRuntimeOnly:SI,isShallow:to,isVNode:kr,markRaw:sm,mergeDefaults:Hw,mergeModels:Kw,mergeProps:i_,nextTick:bo,normalizeClass:It,normalizeProps:TT,normalizeStyle:Io,onActivated:Wm,onBeforeMount:vm,onBeforeUnmount:bc,onBeforeUpdate:Em,onDeactivated:zm,onErrorCaptured:Am,onMounted:ps,onRenderTracked:Im,onRenderTriggered:wm,onScopeDispose:RT,onServerPrefetch:Tm,onUnmounted:Rc,onUpdated:Ac,openBlock:Te,popScopeId:Xn,provide:Bs,proxyRefs:th,pushScopeId:Jn,queuePostFlushCb:Ua,reactive:Ao,readonly:Ju,ref:qe,registerRuntimeCompiler:RI,render:hu,renderList:Vn,renderSlot:Dw,resolveComponent:gm,resolveDirective:ww,resolveDynamicComponent:_m,resolveFilter:UI,resolveTransitionHooks:zs,setBlockTracking:ru,setDevtoolsHook:LI,setTransitionHooks:Pr,shallowReactive:Yu,shallowReadonly:QT,shallowRef:om,ssrContextKey:jm,ssrUtils:FI,stop:PT,toDisplayString:Xe,toHandlerKey:$i,toHandlers:Nw,toRaw:Se,toRef:iw,toRefs:nw,toValue:ZT,transformVNodeArgs:TI,triggerRef:XT,unref:st,useAttrs:qw,useCssModule:dA,useCssVars:YI,useModel:kI,useSSRContext:qm,useSlots:jw,useTransitionState:uh,vModelCheckbox:fh,vModelDynamic:b_,vModelRadio:ph,vModelSelect:za,vModelText:un,vShow:y_,version:d_,warn:NI,watch:$s,watchEffect:hI,watchPostEffect:Hm,watchSyncEffect:Km,withAsyncContext:Ww,withCtx:Zt,withDefaults:$w,withDirectives:wn,withKeys:Oc,withMemo:DI,withModifiers:IA,withScopeId:mw},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof document<"u";function PA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const xe=Object.assign;function Sl(t,e){const n={};for(const r in e){const s=e[r];n[r]=pn(s)?s.map(t):t(s)}return n}const Gi=()=>{},pn=Array.isArray,V_=/#/g,kA=/&/g,OA=/\//g,DA=/=/g,NA=/\?/g,M_=/\+/g,VA=/%5B/g,MA=/%5D/g,L_=/%5E/g,LA=/%60/g,x_=/%7B/g,xA=/%7C/g,F_=/%7D/g,FA=/%20/g;function gh(t){return encodeURI(""+t).replace(xA,"|").replace(VA,"[").replace(MA,"]")}function UA(t){return gh(t).replace(x_,"{").replace(F_,"}").replace(L_,"^")}function du(t){return gh(t).replace(M_,"%2B").replace(FA,"+").replace(V_,"%23").replace(kA,"%26").replace(LA,"`").replace(x_,"{").replace(F_,"}").replace(L_,"^")}function BA(t){return du(t).replace(DA,"%3D")}function $A(t){return gh(t).replace(V_,"%23").replace(NA,"%3F")}function jA(t){return t==null?"":$A(t).replace(OA,"%2F")}function co(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const qA=/\/$/,HA=t=>t.replace(qA,"");function Cl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:co(o)}}function KA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function GA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Js(e.matched[r],n.matched[s])&&U_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function U_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WA(t[n],e[n]))return!1;return!0}function WA(t,e){return pn(t)?Zf(t,e):pn(e)?Zf(e,t):t===e}function Zf(t,e){return pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var lo;(function(t){t.pop="pop",t.push="push"})(lo||(lo={}));var Wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wi||(Wi={}));function QA(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HA(t)}const YA=/^[^#]+#/;function JA(t,e){return t.replace(YA,"#")+e}function XA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Dc=()=>({left:window.scrollX,top:window.scrollY});function ZA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=XA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ep(t,e){return(history.state?history.state.position-e:-1)+t}const fu=new Map;function eb(t,e){fu.set(t,e)}function tb(t){const e=fu.get(t);return fu.delete(t),e}let nb=()=>location.protocol+"//"+location.host;function B_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Xf(l,"")}return Xf(n,t)+r+s}function rb(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const w=B_(t,location),C=n.value,V=e.value;let D=0;if(g){if(n.value=w,e.value=g,o&&o===C){o=null;return}D=V?g.position-V.position:0}else r(w);s.forEach(U=>{U(n.value,C,{delta:D,type:lo.pop,direction:D?D>0?Wi.forward:Wi.back:Wi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const w=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(w),w}function h(){const{history:g}=window;g.state&&g.replaceState(xe({},g.state,{scroll:Dc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function tp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Dc():null}}function sb(t){const{history:e,location:n}=window,r={value:B_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:nb()+t+l;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(w){console.error(w),n[h?"replace":"assign"](g)}}function o(l,u){const h=xe({},e.state,tp(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=xe({},s.value,e.state,{forward:l,scroll:Dc()});i(h.current,h,!0);const p=xe({},tp(r.value,l,null),{position:h.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function ib(t){t=QA(t);const e=sb(t),n=rb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=xe({location:"",base:t,go:r,createHref:JA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ob(t){return typeof t=="string"||t&&typeof t=="object"}function $_(t){return typeof t=="string"||typeof t=="symbol"}const hr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},j_=Symbol("");var np;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(np||(np={}));function Xs(t,e){return xe(new Error,{type:t,[j_]:!0},e)}function On(t,e){return t instanceof Error&&j_ in t&&(e==null||!!(t.type&e))}const rp="[^/]+?",ab={sensitive:!1,strict:!1,start:!0,end:!0},cb=/[.+*?^${}()[\]/\\]/g;function lb(t,e){const n=xe({},ab,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let w=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(cb,"\\$&"),w+=40;else if(g.type===1){const{value:C,repeatable:V,optional:D,regexp:U}=g;i.push({name:C,repeatable:V,optional:D});const O=U||rp;if(O!==rp){w+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${C}" (${O}): `+k.message)}}let S=V?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(S=D&&u.length<2?`(?:/${S})`:"/"+S),D&&(S+="?"),s+=S,w+=20,D&&(w+=-8),V&&(w+=-20),O===".*"&&(w+=-50)}h.push(w)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),p={};if(!h)return null;for(let g=1;g<h.length;g++){const w=h[g]||"",C=i[g-1];p[C.name]=w&&C.repeatable?w.split("/"):w}return p}function l(u){let h="",p=!1;for(const g of t){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const w of g)if(w.type===0)h+=w.value;else if(w.type===1){const{value:C,repeatable:V,optional:D}=w,U=C in u?u[C]:"";if(pn(U)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const O=pn(U)?U.join("/"):U;if(!O)if(D)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);h+=O}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ub(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function q_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ub(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(sp(r))return 1;if(sp(s))return-1}return s.length-r.length}function sp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const hb={type:0,value:""},db=/[a-zA-Z0-9_]/;function fb(t){if(!t)return[[]];if(t==="/")return[[hb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${u}": ${w}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:db.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function pb(t,e,n){const r=lb(fb(t.path),n),s=xe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gb(t,e){const n=[],r=new Map;e=ap({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,g){const w=!g,C=mb(h);C.aliasOf=g&&g.record;const V=ap(e,h),D=[C];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const k of S)D.push(xe({},C,{components:g?g.record.components:C.components,path:k,aliasOf:g?g.record:C}))}let U,O;for(const S of D){const{path:k}=S;if(p&&k[0]!=="/"){const x=p.record.path,P=x[x.length-1]==="/"?"":"/";S.path=p.record.path+(k&&P+k)}if(U=pb(S,p,V),g?g.alias.push(U):(O=O||U,O!==U&&O.alias.push(U),w&&h.name&&!op(U)&&o(h.name)),H_(U)&&l(U),C.children){const x=C.children;for(let P=0;P<x.length;P++)i(x[P],U,g&&g.children[P])}g=g||U}return O?()=>{o(O)}:Gi}function o(h){if($_(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function l(h){const p=vb(h,n);n.splice(p,0,h),h.record.name&&!op(h)&&r.set(h.record.name,h)}function u(h,p){let g,w={},C,V;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw Xs(1,{location:h});V=g.record.name,w=xe(ip(p.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),h.params&&ip(h.params,g.keys.map(O=>O.name))),C=g.stringify(w)}else if(h.path!=null)C=h.path,g=n.find(O=>O.re.test(C)),g&&(w=g.parse(C),V=g.record.name);else{if(g=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!g)throw Xs(1,{location:h,currentLocation:p});V=g.record.name,w=xe({},p.params,h.params),C=g.stringify(w)}const D=[];let U=g;for(;U;)D.unshift(U.record),U=U.parent;return{name:V,path:C,params:w,matched:D,meta:yb(D)}}return t.forEach(h=>i(h)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function ip(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:_b(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function _b(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function op(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yb(t){return t.reduce((e,n)=>xe(e,n.meta),{})}function ap(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;q_(t,e[i])<0?r=i:n=i+1}const s=Eb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Eb(t){let e=t;for(;e=e.parent;)if(H_(e)&&q_(t,e)===0)return e}function H_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Tb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(M_," "),o=i.indexOf("="),c=co(o<0?i:i.slice(0,o)),l=o<0?null:co(i.slice(o+1));if(c in e){let u=e[c];pn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function cp(t){let e="";for(let n in t){const r=t[n];if(n=BA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(r)?r.map(i=>i&&du(i)):[r&&du(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function wb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ib=Symbol(""),lp=Symbol(""),Nc=Symbol(""),mh=Symbol(""),pu=Symbol("");function Oi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _r(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Xs(4,{from:n,to:e})):g instanceof Error?l(g):ob(g)?l(Xs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(h);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Pl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Ab(l)){const h=(l.__vccOpts||l)[e];h&&i.push(_r(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=PA(h)?h.default:h;o.components[c]=p;const w=(p.__vccOpts||p)[e];return w&&_r(w,n,r,o,c,s)()}))}}return i}function Ab(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function up(t){const e=zt(Nc),n=zt(mh),r=tn(()=>{const l=st(t.to);return e.resolve(l)}),s=tn(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],p=n.matched;if(!h||!p.length)return-1;const g=p.findIndex(Js.bind(null,h));if(g>-1)return g;const w=hp(l[u-2]);return u>1&&hp(h)===w&&p[p.length-1].path!==w?p.findIndex(Js.bind(null,l[u-2])):g}),i=tn(()=>s.value>-1&&Sb(n.params,r.value.params)),o=tn(()=>s.value>-1&&s.value===n.matched.length-1&&U_(n.params,r.value.params));function c(l={}){return Rb(l)?e[st(t.replace)?"replace":"push"](st(t.to)).catch(Gi):Promise.resolve()}return{route:r,href:tn(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const bb=Ro({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:up,setup(t,{slots:e}){const n=Ao(up(t)),{options:r}=zt(Nc),s=tn(()=>({[dp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[dp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),gu=bb;function Rb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Sb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!pn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function hp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const dp=(t,e,n)=>t??e??n,Cb=Ro({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(pu),s=tn(()=>t.route||r.value),i=zt(lp,0),o=tn(()=>{let u=st(i);const{matched:h}=s.value;let p;for(;(p=h[u])&&!p.components;)u++;return u}),c=tn(()=>s.value.matched[o.value]);Bs(lp,tn(()=>o.value+1)),Bs(Ib,c),Bs(pu,s);const l=qe();return $s(()=>[l.value,c.value,t.name],([u,h,p],[g,w,C])=>{h&&(h.instances[p]=u,w&&w!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=w.leaveGuards),h.updateGuards.size||(h.updateGuards=w.updateGuards))),u&&h&&(!w||!Js(h,w)||!g)&&(h.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,p=c.value,g=p&&p.components[h];if(!g)return fp(n.default,{Component:g,route:u});const w=p.props[h],C=w?w===!0?u.params:typeof w=="function"?w(u):w:null,D=Cc(g,xe({},C,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[h]=null)},ref:l}));return fp(n.default,{Component:D,route:u})||D}}});function fp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const K_=Cb;function Pb(t){const e=gb(t.routes,t),n=t.parseQuery||Tb,r=t.stringifyQuery||cp,s=t.history,i=Oi(),o=Oi(),c=Oi(),l=om(hr);let u=hr;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Sl.bind(null,$=>""+$),p=Sl.bind(null,jA),g=Sl.bind(null,co);function w($,ee){let J,se;return $_($)?(J=e.getRecordMatcher($),se=ee):se=$,e.addRoute(se,J)}function C($){const ee=e.getRecordMatcher($);ee&&e.removeRoute(ee)}function V(){return e.getRoutes().map($=>$.record)}function D($){return!!e.getRecordMatcher($)}function U($,ee){if(ee=xe({},ee||l.value),typeof $=="string"){const R=Cl(n,$,ee.path),L=e.resolve({path:R.path},ee),j=s.createHref(R.fullPath);return xe(R,L,{params:g(L.params),hash:co(R.hash),redirectedFrom:void 0,href:j})}let J;if($.path!=null)J=xe({},$,{path:Cl(n,$.path,ee.path).path});else{const R=xe({},$.params);for(const L in R)R[L]==null&&delete R[L];J=xe({},$,{params:p(R)}),ee.params=p(ee.params)}const se=e.resolve(J,ee),Ae=$.hash||"";se.params=h(g(se.params));const Ue=KA(r,xe({},$,{hash:UA(Ae),path:se.path})),b=s.createHref(Ue);return xe({fullPath:Ue,hash:Ae,query:r===cp?wb($.query):$.query||{}},se,{redirectedFrom:void 0,href:b})}function O($){return typeof $=="string"?Cl(n,$,l.value.path):xe({},$)}function S($,ee){if(u!==$)return Xs(8,{from:ee,to:$})}function k($){return E($)}function x($){return k(xe(O($),{replace:!0}))}function P($){const ee=$.matched[$.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let se=typeof J=="function"?J($):J;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=O(se):{path:se},se.params={}),xe({query:$.query,hash:$.hash,params:se.path!=null?{}:$.params},se)}}function E($,ee){const J=u=U($),se=l.value,Ae=$.state,Ue=$.force,b=$.replace===!0,R=P(J);if(R)return E(xe(O(R),{state:typeof R=="object"?xe({},Ae,R.state):Ae,force:Ue,replace:b}),ee||J);const L=J;L.redirectedFrom=ee;let j;return!Ue&&GA(r,se,J)&&(j=Xs(16,{to:L,from:se}),fe(se,se,!0,!1)),(j?Promise.resolve(j):y(L,se)).catch(B=>On(B)?On(B,2)?B:ue(B):Z(B,L,se)).then(B=>{if(B){if(On(B,2))return E(xe({replace:b},O(B.to),{state:typeof B.to=="object"?xe({},Ae,B.to.state):Ae,force:Ue}),ee||L)}else B=A(L,se,!0,b,Ae);return I(L,se,B),B})}function _($,ee){const J=S($,ee);return J?Promise.reject(J):Promise.resolve()}function m($){const ee=sr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext($):$()}function y($,ee){let J;const[se,Ae,Ue]=kb($,ee);J=Pl(se.reverse(),"beforeRouteLeave",$,ee);for(const R of se)R.leaveGuards.forEach(L=>{J.push(_r(L,$,ee))});const b=_.bind(null,$,ee);return J.push(b),ht(J).then(()=>{J=[];for(const R of i.list())J.push(_r(R,$,ee));return J.push(b),ht(J)}).then(()=>{J=Pl(Ae,"beforeRouteUpdate",$,ee);for(const R of Ae)R.updateGuards.forEach(L=>{J.push(_r(L,$,ee))});return J.push(b),ht(J)}).then(()=>{J=[];for(const R of Ue)if(R.beforeEnter)if(pn(R.beforeEnter))for(const L of R.beforeEnter)J.push(_r(L,$,ee));else J.push(_r(R.beforeEnter,$,ee));return J.push(b),ht(J)}).then(()=>($.matched.forEach(R=>R.enterCallbacks={}),J=Pl(Ue,"beforeRouteEnter",$,ee,m),J.push(b),ht(J))).then(()=>{J=[];for(const R of o.list())J.push(_r(R,$,ee));return J.push(b),ht(J)}).catch(R=>On(R,8)?R:Promise.reject(R))}function I($,ee,J){c.list().forEach(se=>m(()=>se($,ee,J)))}function A($,ee,J,se,Ae){const Ue=S($,ee);if(Ue)return Ue;const b=ee===hr,R=Ss?history.state:{};J&&(se||b?s.replace($.fullPath,xe({scroll:b&&R&&R.scroll},Ae)):s.push($.fullPath,Ae)),l.value=$,fe($,ee,J,b),ue()}let T;function ge(){T||(T=s.listen(($,ee,J)=>{if(!yn.listening)return;const se=U($),Ae=P(se);if(Ae){E(xe(Ae,{replace:!0}),se).catch(Gi);return}u=se;const Ue=l.value;Ss&&eb(ep(Ue.fullPath,J.delta),Dc()),y(se,Ue).catch(b=>On(b,12)?b:On(b,2)?(E(b.to,se).then(R=>{On(R,20)&&!J.delta&&J.type===lo.pop&&s.go(-1,!1)}).catch(Gi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Z(b,se,Ue))).then(b=>{b=b||A(se,Ue,!1),b&&(J.delta&&!On(b,8)?s.go(-J.delta,!1):J.type===lo.pop&&On(b,20)&&s.go(-1,!1)),I(se,Ue,b)}).catch(Gi)}))}let we=Oi(),te=Oi(),le;function Z($,ee,J){ue($);const se=te.list();return se.length?se.forEach(Ae=>Ae($,ee,J)):console.error($),Promise.reject($)}function ve(){return le&&l.value!==hr?Promise.resolve():new Promise(($,ee)=>{we.add([$,ee])})}function ue($){return le||(le=!$,ge(),we.list().forEach(([ee,J])=>$?J($):ee()),we.reset()),$}function fe($,ee,J,se){const{scrollBehavior:Ae}=t;if(!Ss||!Ae)return Promise.resolve();const Ue=!J&&tb(ep($.fullPath,0))||(se||!J)&&history.state&&history.state.scroll||null;return bo().then(()=>Ae($,ee,Ue)).then(b=>b&&ZA(b)).catch(b=>Z(b,$,ee))}const Ne=$=>s.go($);let Ve;const sr=new Set,yn={currentRoute:l,listening:!0,addRoute:w,removeRoute:C,hasRoute:D,getRoutes:V,resolve:U,options:t,push:k,replace:x,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:te.add,isReady:ve,install($){const ee=this;$.component("RouterLink",gu),$.component("RouterView",K_),$.config.globalProperties.$router=ee,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>st(l)}),Ss&&!Ve&&l.value===hr&&(Ve=!0,k(s.location).catch(Ae=>{}));const J={};for(const Ae in hr)Object.defineProperty(J,Ae,{get:()=>l.value[Ae],enumerable:!0});$.provide(Nc,ee),$.provide(mh,Yu(J)),$.provide(pu,l);const se=$.unmount;sr.add($),$.unmount=function(){sr.delete($),sr.size<1&&(u=hr,T&&T(),T=null,l.value=hr,Ve=!1,le=!1),se()}}};function ht($){return $.reduce((ee,J)=>ee.then(()=>m(J)),Promise.resolve())}return yn}function kb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Js(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Js(u,l))||s.push(l))}return[n,r,s]}function Oo(){return zt(Nc)}function _h(){return zt(mh)}var pp={};/**
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
 */const G_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ob=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},W_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(g=64)),r.push(n[h],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ob(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Db;const g=i<<2|c>>4;if(r.push(g),u!==64){const w=c<<4&240|u>>2;if(r.push(w),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Db extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nb=function(t){const e=G_(t);return W_.encodeByteArray(e,!0)},Qa=function(t){return Nb(t).replace(/\./g,"")},z_=function(t){try{return W_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Mb=()=>Vb().__FIREBASE_DEFAULTS__,Lb=()=>{if(typeof process>"u"||typeof pp>"u")return;const t=pp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z_(t[1]);return e&&JSON.parse(e)},Vc=()=>{try{return Mb()||Lb()||xb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q_=t=>{var e,n;return(n=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fb=t=>{const e=Q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Y_=()=>{var t;return(t=Vc())===null||t===void 0?void 0:t.config},J_=t=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function Bb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qa(JSON.stringify(n)),Qa(JSON.stringify(o)),""].join(".")}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $b(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function jb(){var t;const e=(t=Vc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function X_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hb(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kb(){return!jb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function ey(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Gb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Wb="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wb,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zb(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new _n(s,c,r)}}function zb(t,e){return t.replace(Qb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Qb=/\{\$([^}]+)}/g;function Yb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function uo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gp(i)&&gp(o)){if(!uo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gp(t){return t!==null&&typeof t=="object"}/**
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
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jb(t,e){const n=new Xb(t,e);return n.subscribe.bind(n)}class Xb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kl),s.error===void 0&&(s.error=kl),s.complete===void 0&&(s.complete=kl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kl(){}/**
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
 */const e0=1e3,t0=2,n0=4*60*60*1e3,r0=.5;function mp(t,e=e0,n=t0){const r=e*Math.pow(n,t),s=Math.round(r0*r*(Math.random()-.5)*2);return Math.min(n0,r+s)}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var be;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(be||(be={}));const c0={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},l0=be.INFO,u0={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},h0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=u0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mc{constructor(e){this.name=e,this._logLevel=l0,this._logHandler=h0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const d0=(t,e)=>e.some(n=>t instanceof n);let _p,yp;function f0(){return _p||(_p=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p0(){return yp||(yp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,mu=new WeakMap,ny=new WeakMap,Ol=new WeakMap,yh=new WeakMap;function g0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ty.set(n,t)}).catch(()=>{}),yh.set(e,t),e}function m0(t){if(mu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});mu.set(t,e)}let _u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _0(t){_u=t(_u)}function y0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dl(this),e,...n);return ny.set(r,e.sort?e.sort():[e]),br(r)}:p0().includes(t)?function(...e){return t.apply(Dl(this),e),br(ty.get(this))}:function(...e){return br(t.apply(Dl(this),e))}}function v0(t){return typeof t=="function"?y0(t):(t instanceof IDBTransaction&&m0(t),d0(t,f0())?new Proxy(t,_u):t)}function br(t){if(t instanceof IDBRequest)return g0(t);if(Ol.has(t))return Ol.get(t);const e=v0(t);return e!==t&&(Ol.set(t,e),yh.set(e,t)),e}const Dl=t=>yh.get(t);function ry(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=br(o);return r&&o.addEventListener("upgradeneeded",l=>{r(br(o.result),l.oldVersion,l.newVersion,br(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const E0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],Nl=new Map;function vp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nl.get(e))return Nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=T0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||E0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Nl.set(e,i),i}_0(t=>({...t,get:(e,n,r)=>vp(e,n)||t.get(e,n,r),has:(e,n)=>!!vp(e,n)||t.has(e,n)}));/**
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
 */class w0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function I0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yu="@firebase/app",Ep="0.10.5";/**
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
 */const Ya=new Map,J0=new Map,Eu=new Map;function Tp(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Sn(t){const e=t.name;if(Eu.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;Eu.set(e,t);for(const n of Ya.values())Tp(n,t);for(const n of J0.values())Tp(n,t);return!0}function ms(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
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
 */const X0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rr=new gs("app","Firebase",X0);/**
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
 */class Z0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
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
 */const ai=Q0;function sy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Rr.create("bad-app-name",{appName:String(s)});if(n||(n=Y_()),!n)throw Rr.create("no-options");const i=Ya.get(s);if(i){if(uo(n,i.options)&&uo(r,i.config))return i;throw Rr.create("duplicate-app",{appName:s})}const o=new a0(s);for(const l of Eu.values())o.addComponent(l);const c=new Z0(n,r,o);return Ya.set(s,c),c}function vh(t=vu){const e=Ya.get(t);if(!e&&t===vu&&Y_())return sy();if(!e)throw Rr.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=Y0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(c.join(" "));return}Sn(new gn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eR="firebase-heartbeat-database",tR=1,ho="firebase-heartbeat-store";let Vl=null;function iy(){return Vl||(Vl=ry(eR,tR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),Vl}async function nR(t){try{const n=(await iy()).transaction(ho),r=await n.objectStore(ho).get(oy(t));return await n.done,r}catch(e){if(e instanceof _n)ss.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function wp(t,e){try{const r=(await iy()).transaction(ho,"readwrite");await r.objectStore(ho).put(e,oy(t)),await r.done}catch(n){if(n instanceof _n)ss.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function oy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rR=1024,sR=30*24*60*60*1e3;class iR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ip();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=sR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ip(),{heartbeatsToSend:r,unsentEntries:s}=oR(this._heartbeatsCache.heartbeats),i=Qa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ip(){return new Date().toISOString().substring(0,10)}function oR(t,e=rR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ap(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ap(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?ey().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ap(t){return Qa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cR(t){Sn(new gn("platform-logger",e=>new w0(e),"PRIVATE")),Sn(new gn("heartbeat",e=>new iR(e),"PRIVATE")),rn(yu,Ep,t),rn(yu,Ep,"esm2017"),rn("fire-js","")}cR("");function Eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lR=ay,cy=new gs("auth","Firebase",ay());/**
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
 */const Ja=new Mc("@firebase/auth");function uR(t,...e){Ja.logLevel<=be.WARN&&Ja.warn(`Auth (${ai}): ${t}`,...e)}function Sa(t,...e){Ja.logLevel<=be.ERROR&&Ja.error(`Auth (${ai}): ${t}`,...e)}/**
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
 */function sn(t,...e){throw wh(t,...e)}function hn(t,...e){return wh(t,...e)}function Th(t,e,n){const r=Object.assign(Object.assign({},lR()),{[e]:n});return new gs("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Th(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),Th(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cy.create(t,...e)}function me(t,e,...n){if(!t)throw wh(e,...n)}function Ln(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sa(e),new Error(e)}function Wn(t,e){t||Ln(e)}/**
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
 */function Tu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dR(){return bp()==="http:"||bp()==="https:"}function bp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dR()||X_()||"connection"in navigator)?navigator.onLine:!0}function pR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=$b()||qb()}get(){return fR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ih(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mR=new No(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return uy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Do(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ly.fetch()(hy(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function uy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gR),e);try{const s=new yR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw va(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Th(t,h,u);sn(t,h)}}catch(s){if(s instanceof _n)throw s;sn(t,"network-request-failed",{message:String(s)})}}async function Vo(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ih(t.config,s):`${t.config.apiScheme}://${s}`}function _R(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),mR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=hn(t,e,r);return s.customData._tokenResponse=n,s}function Rp(t){return t!==void 0&&t.enterprise!==void 0}class vR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _R(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ER(t,e){return nr(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
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
 */async function TR(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function dy(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wR(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Ah(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zi(Ml(s.auth_time)),issuedAtTime:zi(Ml(s.iat)),expirationTime:zi(Ml(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ml(t){return Number(t)*1e3}function Ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sa("JWT malformed, contained fewer than 3 sections"),null;try{const s=z_(n);return s?JSON.parse(s):(Sa("Failed to decode base64 JWT payload"),null)}catch(s){return Sa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sp(t){const e=Ah(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&IR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await fo(t,dy(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fy(i.providerUserInfo):[],c=RR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function bR(t){const e=it(t);await Xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fy(t){return t.map(e=>{var{providerId:n}=e,r=Eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function SR(t,e){const n=await uy(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ly.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CR(t,e){return nr(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
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
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new js;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
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
 */function dr(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fo(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wR(this,e)}reload(){return bR(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await fo(this,TR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:k,isAnonymous:x,providerData:P,stsTokenManager:E}=n;me(S&&E,e,"internal-error");const _=js.fromJSON(this.name,E);me(typeof S=="string",e,"internal-error"),dr(p,e.name),dr(g,e.name),me(typeof k=="boolean",e,"internal-error"),me(typeof x=="boolean",e,"internal-error"),dr(w,e.name),dr(C,e.name),dr(V,e.name),dr(D,e.name),dr(U,e.name),dr(O,e.name);const m=new xn({uid:S,auth:e,email:g,emailVerified:k,displayName:p,isAnonymous:x,photoURL:C,phoneNumber:w,tenantId:V,stsTokenManager:_,createdAt:U,lastLoginAt:O});return P&&Array.isArray(P)&&(m.providerData=P.map(y=>Object.assign({},y))),D&&(m._redirectEventId=D),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new js;s.updateFromServerResponse(n);const i=new xn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Xa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new js;c.updateFromIdToken(r);const l=new xn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Cp=new Map;function Fn(t){Wn(t instanceof Function,"Expected a class definition");let e=Cp.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cp.set(t,e),e)}/**
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
 */class py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}py.type="NONE";const Pp=py;/**
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
 */function Ca(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ca("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(Fn(Pp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Fn(Pp);const o=Ca(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){const p=xn._fromJSON(e,h);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new qs(i,e,r))}}/**
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
 */function kp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vy(e))return"Blackberry";if(Ey(e))return"Webos";if(bh(e))return"Safari";if((e.includes("chrome/")||my(e))&&!e.includes("edge/"))return"Chrome";if(yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gy(t=vt()){return/firefox\//i.test(t)}function bh(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function my(t=vt()){return/crios\//i.test(t)}function _y(t=vt()){return/iemobile/i.test(t)}function yy(t=vt()){return/android/i.test(t)}function vy(t=vt()){return/blackberry/i.test(t)}function Ey(t=vt()){return/webos/i.test(t)}function Lc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PR(t=vt()){var e;return Lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kR(){return Hb()&&document.documentMode===10}function Ty(t=vt()){return Lc(t)||yy(t)||Ey(t)||vy(t)||/windows phone/i.test(t)||_y(t)}function OR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wy(t,e=[]){let n;switch(t){case"Browser":n=kp(vt());break;case"Worker":n=`${kp(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${r}`}/**
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
 */async function NR(t,e={}){return nr(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
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
 */class LR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Op(this),this.idTokenSubscription=new Op(this),this.beforeStateQueue=new DR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dy(this,{idToken:e}),r=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Hn(this));const n=e?it(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NR(this),n=new MR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return it(t)}class Op{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jb(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xR(t){xc=t}function Iy(t){return xc.loadJS(t)}function FR(){return xc.recaptchaEnterpriseScript}function UR(){return xc.gapiScript}function BR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const $R="recaptcha-enterprise",jR="NO_RECAPTCHA";class qR{constructor(e){this.type=$R,this.auth=rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{ER(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new vR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Rp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(jR)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Rp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FR();l.length!==0&&(l+=c),Iy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Dp(t,e,n,r=!1){const s=new qR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Za(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Dp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function HR(t,e){const n=ms(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(uo(i,e??{}))return s;sn(s,"already-initialized")}return n.initialize({options:e})}function KR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function GR(t,e,n){const r=rr(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ay(e),{host:o,port:c}=WR(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zR()}function Ay(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WR(t){const e=Ay(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Np(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Np(o)}}}function Np(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ln("not implemented")}_getIdTokenResponse(e){return Ln("not implemented")}_linkToIdToken(e,n){return Ln("not implemented")}_getReauthenticationResolver(e){return Ln("not implemented")}}async function QR(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function YR(t,e){return Vo(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}async function JR(t,e){return nr(t,"POST","/v1/accounts:sendOobCode",tr(t,e))}async function XR(t,e){return JR(t,e)}/**
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
 */async function ZR(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function eS(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
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
 */class po extends Rh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(e,n,"signInWithPassword",YR);case"emailLink":return ZR(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Za(e,r,"signUpPassword",QR);case"emailLink":return eS(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hs(t,e){return Vo(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
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
 */const tS="http://localhost";class is extends Rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Eh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:tS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
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
 */function nS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rS(t){const e=Mi(Li(t)).link,n=e?Mi(Li(e)).deep_link_id:null,r=Mi(Li(t)).deep_link_id;return(r?Mi(Li(r)).link:null)||r||n||e||t}class Sh{constructor(e){var n,r,s,i,o,c;const l=Mi(Li(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=nS((s=l.mode)!==null&&s!==void 0?s:null);me(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=rS(e);try{return new Sh(n)}catch{return null}}}/**
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
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sh.parseLink(n);return me(r,"argument-error"),po._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ch{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mo extends Ch{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vr extends Mo{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class Er extends Mo{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.GITHUB_SIGN_IN_METHOD="github.com";Er.PROVIDER_ID="github.com";/**
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
 */class Tr extends Mo{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tr.credential(n,r)}catch{return null}}}Tr.TWITTER_SIGN_IN_METHOD="twitter.com";Tr.PROVIDER_ID="twitter.com";/**
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
 */async function sS(t,e){return Vo(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xn._fromIdTokenResponse(e,r,s),o=Vp(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Vp(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Vp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ec extends _n{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ec.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ec(e,n,r,s)}}function by(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ec._fromErrorAndOperation(t,i,e,r):i})}async function iS(t,e,n=!1){const r=await fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
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
 */async function oS(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await fo(t,by(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=Ah(i.idToken);me(o,r,"internal-error");const{sub:c}=o;return me(t.uid===c,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
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
 */async function Ry(t,e,n=!1){if(ln(t.app))return Promise.reject(Hn(t));const r="signIn",s=await by(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function aS(t,e){return Ry(rr(t),e)}/**
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
 */async function Sy(t){const e=rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cS(t,e,n){const r=rr(t);await Za(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",XR)}async function lS(t,e,n){if(ln(t.app))return Promise.reject(Hn(t));const r=rr(t),o=await Za(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Sy(t),l}),c=await os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function uS(t,e,n){return ln(t.app)?Promise.reject(Hn(t)):aS(it(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sy(t),r})}function hS(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function dS(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function Cy(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function fS(t){return it(t).signOut()}const tc="__sak";/**
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
 */class Py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tc,"1"),this.storage.removeItem(tc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function pS(){const t=vt();return bh(t)||Lc(t)}const gS=1e3,mS=10;class ky extends Py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pS()&&OR(),this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ky.type="LOCAL";const _S=ky;/**
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
 */class Oy extends Py{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Oy.type="SESSION";const Dy=Oy;/**
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
 */function Ph(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class vS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Ph("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function In(){return window}function ES(t){In().location.href=t}/**
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
 */function Ny(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function TS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IS(){return Ny()?self:null}/**
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
 */const Vy="firebaseLocalStorageDb",AS=1,nc="firebaseLocalStorage",My="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([nc],e?"readwrite":"readonly").objectStore(nc)}function bS(){const t=indexedDB.deleteDatabase(Vy);return new Lo(t).toPromise()}function Iu(){const t=indexedDB.open(Vy,AS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nc,{keyPath:My})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nc)?e(r):(r.close(),await bS(),e(await Iu()))})})}async function Mp(t,e,n){const r=Uc(t,!0).put({[My]:e,value:n});return new Lo(r).toPromise()}async function RS(t,e){const n=Uc(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function Lp(t,e){const n=Uc(t,!0).delete(e);return new Lo(n).toPromise()}const SS=800,CS=3;class Ly{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Iu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(IS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TS(),!this.activeServiceWorker)return;this.sender=new vS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Iu();return await Mp(e,tc,"1"),await Lp(e,tc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Uc(s,!1).getAll();return new Lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ly.type="LOCAL";const PS=Ly;new No(3e4,6e4);/**
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
 */function xy(t,e){return e?Fn(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kh extends Rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return Ry(t.auth,new kh(t),t.bypassAuthState)}function OS(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),oS(n,new kh(t),t.bypassAuthState)}async function DS(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),iS(n,new kh(t),t.bypassAuthState)}/**
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
 */class Fy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return DS;case"reauthViaPopup":case"reauthViaRedirect":return OS;default:sn(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const NS=new No(2e3,1e4);async function Uy(t,e,n){if(ln(t.app))return Promise.reject(hn(t,"operation-not-supported-in-this-environment"));const r=rr(t);hR(t,e,Ch);const s=xy(r,n);return new Wr(r,"signInViaPopup",e,s).executeNotNull()}class Wr extends Fy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NS.get())};e()}}Wr.currentPopupAction=null;/**
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
 */const VS="pendingRedirect",Pa=new Map;class MS extends Fy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Pa.get(this.auth._key());if(!e){try{const r=await LS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Pa.set(this.auth._key(),e)}return this.bypassAuthState||Pa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LS(t,e){const n=US(e),r=FS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xS(t,e){Pa.set(t._key(),e)}function FS(t){return Fn(t._redirectPersistence)}function US(t){return Ca(VS,t.config.apiKey,t.name)}async function BS(t,e,n=!1){if(ln(t.app))return Promise.reject(Hn(t));const r=rr(t),s=xy(r,e),o=await new MS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $S=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!By(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$S&&this.cachedEventUids.clear(),this.cachedEventUids.has(xp(e))}saveEventToCache(e){this.cachedEventUids.add(xp(e)),this.lastProcessedEventTime=Date.now()}}function xp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function By({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(t);default:return!1}}/**
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
 */async function HS(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
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
 */const KS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GS=/^https?/;async function WS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HS(t);for(const n of e)try{if(zS(n))return}catch{}sn(t,"unauthorized-domain")}function zS(t){const e=Tu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GS.test(n))return!1;if(KS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const QS=new No(3e4,6e4);function Fp(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YS(t){return new Promise((e,n)=>{var r,s,i;function o(){Fp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fp(),n(hn(t,"network-request-failed"))},timeout:QS.get()})}if(!((s=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=In().gapi)===null||i===void 0)&&i.load)o();else{const c=BR("iframefcb");return In()[c]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},Iy(`${UR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ka=null,e})}let ka=null;function JS(t){return ka=ka||YS(t),ka}/**
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
 */const XS=new No(5e3,15e3),ZS="__/auth/iframe",eC="emulator/auth/iframe",tC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rC(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ih(e,eC):`https://${t.config.authDomain}/${ZS}`,r={apiKey:e.apiKey,appName:t.name,v:ai},s=nC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Do(r).slice(1)}`}async function sC(t){const e=await JS(t),n=In().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:rC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),c=In().setTimeout(()=>{i(o)},XS.get());function l(){In().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const iC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oC=500,aC=600,cC="_blank",lC="http://localhost";class Up{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uC(t,e,n,r=oC,s=aC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},iC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=vt().toLowerCase();n&&(c=my(u)?cC:n),gy(u)&&(e=e||lC,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[w,C])=>`${g}${w}=${C},`,"");if(PR(u)&&c!=="_self")return hC(e||"",c),new Up(null);const p=window.open(e||"",c,h);me(p,t,"popup-blocked");try{p.focus()}catch{}return new Up(p)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dC="__/auth/handler",fC="emulator/auth/handler",pC=encodeURIComponent("fac");async function Bp(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ai,eventId:s};if(e instanceof Ch){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Yb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof Mo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${pC}=${encodeURIComponent(l)}`:"";return`${gC(t)}?${Do(c).slice(1)}${u}`}function gC({config:t}){return t.emulator?Ih(t,fC):`https://${t.authDomain}/${dC}`}/**
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
 */const Ll="webStorageSupport";class mC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dy,this._completeRedirectFn=BS,this._overrideRedirectResult=xS}async _openPopup(e,n,r,s){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bp(e,n,r,Tu(),s);return uC(e,o,Ph())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bp(e,n,r,Tu(),s);return ES(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sC(e),r=new jS(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ll,{type:Ll},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ll];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||bh()||Lc()}}const _C=mC;var $p="@firebase/auth",jp="1.7.4";/**
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
 */class yC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(t){Sn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wy(t)},u=new LR(r,s,i,l);return KR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new gn("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(r=>new yC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn($p,jp,vC(t)),rn($p,jp,"esm2017")}/**
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
 */const TC=5*60,wC=J_("authIdTokenMaxAge")||TC;let qp=null;const IC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wC)return;const s=n==null?void 0:n.token;qp!==s&&(qp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function li(t=vh()){const e=ms(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HR(t,{popupRedirectResolver:_C,persistence:[PS,_S,Dy]}),r=J_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IC(i.toString());dS(n,o,()=>o(n.currentUser)),hS(n,c=>o(c))}}const s=Q_("auth");return s&&GR(n,`http://${s}`),n}function AC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",AC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");var bC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function RC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function SC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var $y={exports:{}};const CC=SC(CA);(function(t,e){(function(r,s){t.exports=s(CC)})(bC,n=>(()=>{var r={772:(c,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(u,h)=>{const p=u.__vccOpts||u;for(const[g,w]of h)p[g]=w;return p}},976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),i.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>x,ToastPlugin:()=>E,ToastPositions:()=>C,default:()=>_,useToast:()=>P});var c=i(976);const l=(0,c.createElementVNode)("div",{class:"v-toast__icon"},null,-1),u=["innerHTML"];function h(m,y,I,A,T,ge){return(0,c.openBlock)(),(0,c.createBlock)(c.Transition,{"enter-active-class":m.transition.enter,"leave-active-class":m.transition.leave},{default:(0,c.withCtx)(()=>[(0,c.withDirectives)((0,c.createElementVNode)("div",{ref:"root",role:"alert",class:(0,c.normalizeClass)(["v-toast__item",[`v-toast__item--${m.type}`,`v-toast__item--${m.position}`]]),onMouseover:y[0]||(y[0]=we=>m.toggleTimer(!0)),onMouseleave:y[1]||(y[1]=we=>m.toggleTimer(!1)),onClick:y[2]||(y[2]=function(){return m.whenClicked&&m.whenClicked(...arguments)})},[l,(0,c.createElementVNode)("p",{class:"v-toast__text",innerHTML:m.message},null,8,u)],34),[[c.vShow,m.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function p(m){var y;typeof m.remove<"u"?m.remove():(y=m.parentNode)==null||y.removeChild(m)}function g(m,y,I){let A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const T=(0,c.h)(m,y,A),ge=document.createElement("div");return ge.classList.add("v-toast--pending"),I.appendChild(ge),(0,c.render)(T,ge),T.component}class w{constructor(y,I){this.startedAt=Date.now(),this.callback=y,this.delay=I,this.timer=setTimeout(y,I)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const C=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function V(m){return{all:m=m||new Map,on:function(y,I){var A=m.get(y);A?A.push(I):m.set(y,[I])},off:function(y,I){var A=m.get(y);A&&(I?A.splice(A.indexOf(I)>>>0,1):m.set(y,[]))},emit:function(y,I){var A=m.get(y);A&&A.slice().map(function(T){T(I)}),(A=m.get("*"))&&A.slice().map(function(T){T(y,I)})}}}const U=V(),O=(0,c.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:C.BOTTOM_RIGHT,validator(m){return Object.values(C).includes(m)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),U.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const m=document.body;m.appendChild(this.parentTop),m.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const m=this.$refs.root;(0,c.render)(null,m),p(m)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const m=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),p(m),this.isActive=!0,this.duration&&(this.timer=new w(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(m){!this.pauseOnHover||!this.timer||(m?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return this.parentTop;case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){U.off("toast-clear",this.dismiss)}});var S=i(772);const x=(0,S.default)(O,[["render",h]]),P=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(y){let I=null;typeof y=="string"&&(I=y);const T=Object.assign({},{message:I},m,y);return{dismiss:g(x,T,document.body).ctx.dismiss}},clear(){U.emit("toast-clear")},success(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"success"},I))},error(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"error"},I))},info(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"info"},I))},warning(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"warning"},I))},default(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"default"},I))}}},E={install:function(m){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=P(y);m.config.globalProperties.$toast=I,m.provide("$toast",I)}},_=E})(),o})())})($y);var jy=$y.exports;const PC=RC(jy);function je(t,e){const n=jy.useToast();switch(t){case"success":n.success(e);break;case"info":n.info(e);break;case"warning":n.warning(e);break;case"error":n.error(e);break;case"default":n.default(e);break;default:n.default(e);break}}const xr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qy=t=>(Jn("data-v-ebd4dc25"),t=t(),Xn(),t),kC={class:"navBar"},OC={class:"container"},DC=qy(()=>M("div",{class:"co"},"CO",-1)),NC=qy(()=>M("div",{class:"student"},"STUDENT",-1)),VC={class:"buttons"},MC={__name:"Nav",props:{isLoggedIn:Boolean},setup(t){const e=li(),n=Oo();function r(){fS(e).then(()=>{n.push("/"),je("success","Successfully singed out!")}).catch(s=>{je("error",s.message)})}return(s,i)=>{const o=gm("RouterLink");return Te(),Pe("div",kC,[M("div",OC,[De(o,{class:"logo",to:"/"},{default:Zt(()=>[DC,NC]),_:1}),M("div",VC,[t.isLoggedIn?en("",!0):(Te(),wr(o,{key:0,class:"button",to:"/Login"},{default:Zt(()=>[Tn("Login")]),_:1})),t.isLoggedIn?en("",!0):(Te(),wr(o,{key:1,class:"button",to:"/Register"},{default:Zt(()=>[Tn("Register")]),_:1})),t.isLoggedIn?(Te(),wr(o,{key:2,class:"button",to:"/dashboard"},{default:Zt(()=>[Tn("Dashboard")]),_:1})):en("",!0),t.isLoggedIn?(Te(),wr(o,{key:3,class:"button",to:"/findcostudent"},{default:Zt(()=>[Tn("Find students")]),_:1})):en("",!0),t.isLoggedIn?(Te(),Pe("div",{key:4,class:"button",onClick:i[0]||(i[0]=c=>r())},"Sign out")):en("",!0)])])])}}},LC=xr(MC,[["__scopeId","data-v-ebd4dc25"]]),xC={},Hy=t=>(Jn("data-v-7aaa4f9a"),t=t(),Xn(),t),FC={class:"footerBox"},UC=Hy(()=>M("p",null,"Copyright ©2024",-1)),BC=Hy(()=>M("p",null,"Designed by Samuel Coryn",-1)),$C=[UC,BC];function jC(t,e){return Te(),Pe("div",FC,$C)}const qC=xr(xC,[["render",jC],["__scopeId","data-v-7aaa4f9a"]]),HC={class:"navBox"},KC={__name:"App",setup(t){const e=qe(!1);let n;return ps(()=>{n=li(),Cy(n,r=>{r?e.value=!0:e.value=!1})}),Bs("isLoggedInKey",e),(r,s)=>(Te(),Pe(He,null,[M("div",HC,[De(LC,{isLoggedIn:e.value},null,8,["isLoggedIn"])]),De(st(K_),null,{default:Zt(({Component:i})=>[De(Pc,{name:"route",mode:"out-in"},{default:Zt(()=>[(Te(),wr(_m(i)))]),_:2},1024)]),_:1}),De(qC)],64))}},GC="/costudent-demo/assets/students_stock_photo-DFrZLZTI.jpg",Oh=t=>(Jn("data-v-d7acdb75"),t=t(),Xn(),t),WC={class:"root"},zC={class:"grid"},QC={class:"landingColumn"},YC=Oh(()=>M("div",{class:"title"},[M("h1",null,"Study better,"),M("h1",null,"Together")],-1)),JC=Oh(()=>M("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),XC={class:"buttonArray"},ZC=Oh(()=>M("div",{class:"photo"},[M("img",{src:GC,alt:"People studying together."})],-1)),eP=s_('<div id="learnMore" data-v-d7acdb75><div class="article" data-v-d7acdb75><h1 data-v-d7acdb75>ABOUT</h1><p data-v-d7acdb75>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-d7acdb75>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-d7acdb75>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-d7acdb75>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-d7acdb75>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-d7acdb75><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-d7acdb75><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-d7acdb75></path></svg><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-d7acdb75><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-d7acdb75></path></svg><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Learn togehter!</p></div></div></div>',1),tP={__name:"Home",setup(t){function e(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=zt("isLoggedInKey"),s=Oo();return(i,o)=>(Te(),Pe("div",WC,[M("div",zC,[M("div",QC,[YC,JC,M("div",XC,[M("div",{class:"button",onClick:o[0]||(o[0]=c=>n())},"Start studying"),M("div",{class:"button",onClick:o[1]||(o[1]=c=>e())},"Learn more")])]),ZC]),eP]))}},nP=xr(tP,[["__scopeId","data-v-d7acdb75"]]);var rP="firebase",sP="10.12.2";/**
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
 */rn(rP,sP,"app");const Ky="@firebase/installations",Dh="0.6.7";/**
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
 */const Gy=1e4,Wy=`w:${Dh}`,zy="FIS_v2",iP="https://firebaseinstallations.googleapis.com/v1",oP=60*60*1e3,aP="installations",cP="Installations";/**
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
 */const lP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},as=new gs(aP,cP,lP);function Qy(t){return t instanceof _n&&t.code.includes("request-failed")}/**
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
 */function Yy({projectId:t}){return`${iP}/projects/${t}/installations`}function Jy(t){return{token:t.token,requestStatus:2,expiresIn:hP(t.expiresIn),creationTime:Date.now()}}async function Xy(t,e){const r=(await e.json()).error;return as.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function uP(t,{refreshToken:e}){const n=Zy(t);return n.append("Authorization",dP(e)),n}async function ev(t){const e=await t();return e.status>=500&&e.status<600?t():e}function hP(t){return Number(t.replace("s","000"))}function dP(t){return`${zy} ${t}`}/**
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
 */async function fP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Yy(t),s=Zy(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:zy,appId:t.appId,sdkVersion:Wy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await ev(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Jy(u.authToken)}}else throw await Xy("Create Installation",l)}/**
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
 */function tv(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const gP=/^[cdef][\w-]{21}$/,Au="";function mP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=_P(t);return gP.test(n)?n:Au}catch{return Au}}function _P(t){return pP(t).substr(0,22)}/**
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
 */const nv=new Map;function rv(t,e){const n=Bc(t);sv(n,e),yP(n,e)}function sv(t,e){const n=nv.get(t);if(n)for(const r of n)r(e)}function yP(t,e){const n=vP();n&&n.postMessage({key:t,fid:e}),EP()}let zr=null;function vP(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=t=>{sv(t.data.key,t.data.fid)}),zr}function EP(){nv.size===0&&zr&&(zr.close(),zr=null)}/**
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
 */const TP="firebase-installations-database",wP=1,cs="firebase-installations-store";let xl=null;function Nh(){return xl||(xl=ry(TP,wP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cs)}}})),xl}async function rc(t,e){const n=Bc(t),s=(await Nh()).transaction(cs,"readwrite"),i=s.objectStore(cs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&rv(t,e.fid),e}async function iv(t){const e=Bc(t),r=(await Nh()).transaction(cs,"readwrite");await r.objectStore(cs).delete(e),await r.done}async function $c(t,e){const n=Bc(t),s=(await Nh()).transaction(cs,"readwrite"),i=s.objectStore(cs),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&rv(t,c.fid),c}/**
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
 */async function Vh(t){let e;const n=await $c(t.appConfig,r=>{const s=IP(r),i=AP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Au?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function IP(t){const e=t||{fid:mP(),registrationStatus:0};return ov(e)}function AP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(as.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:RP(t)}:{installationEntry:e}}async function bP(t,e){try{const n=await fP(t,e);return rc(t.appConfig,n)}catch(n){throw Qy(n)&&n.customData.serverCode===409?await iv(t.appConfig):await rc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function RP(t){let e=await Hp(t.appConfig);for(;e.registrationStatus===1;)await tv(100),e=await Hp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vh(t);return r||n}return e}function Hp(t){return $c(t,e=>{if(!e)throw as.create("installation-not-found");return ov(e)})}function ov(t){return SP(t)?{fid:t.fid,registrationStatus:0}:t}function SP(t){return t.registrationStatus===1&&t.registrationTime+Gy<Date.now()}/**
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
 */async function CP({appConfig:t,heartbeatServiceProvider:e},n){const r=PP(t,n),s=uP(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Wy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await ev(()=>fetch(r,c));if(l.ok){const u=await l.json();return Jy(u)}else throw await Xy("Generate Auth Token",l)}function PP(t,{fid:e}){return`${Yy(t)}/${e}/authTokens:generate`}/**
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
 */async function Mh(t,e=!1){let n;const r=await $c(t.appConfig,i=>{if(!av(i))throw as.create("not-registered");const o=i.authToken;if(!e&&DP(o))return i;if(o.requestStatus===1)return n=kP(t,e),i;{if(!navigator.onLine)throw as.create("app-offline");const c=VP(i);return n=OP(t,c),c}});return n?await n:r.authToken}async function kP(t,e){let n=await Kp(t.appConfig);for(;n.authToken.requestStatus===1;)await tv(100),n=await Kp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Mh(t,e):r}function Kp(t){return $c(t,e=>{if(!av(e))throw as.create("not-registered");const n=e.authToken;return MP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function OP(t,e){try{const n=await CP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await rc(t.appConfig,r),n}catch(n){if(Qy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rc(t.appConfig,r)}throw n}}function av(t){return t!==void 0&&t.registrationStatus===2}function DP(t){return t.requestStatus===2&&!NP(t)}function NP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+oP}function VP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function MP(t){return t.requestStatus===1&&t.requestTime+Gy<Date.now()}/**
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
 */async function LP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vh(e);return r?r.catch(console.error):Mh(e).catch(console.error),n.fid}/**
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
 */async function xP(t,e=!1){const n=t;return await FP(n),(await Mh(n,e)).token}async function FP(t){const{registrationPromise:e}=await Vh(t);e&&await e}/**
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
 */const cv="installations",BP="installations-internal",$P=t=>{const e=t.getProvider("app").getImmediate(),n=UP(e),r=ms(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},jP=t=>{const e=t.getProvider("app").getImmediate(),n=ms(e,cv).getImmediate();return{getId:()=>LP(n),getToken:s=>xP(n,s)}};function qP(){Sn(new gn(cv,$P,"PUBLIC")),Sn(new gn(BP,jP,"PRIVATE"))}qP();rn(Ky,Dh);rn(Ky,Dh,"esm2017");/**
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
 */const sc="analytics",HP="firebase_id",KP="origin",GP=60*1e3,WP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lh="https://www.googletagmanager.com/gtag/js";/**
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
 */const zP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qt=new gs("analytics","Analytics",zP);/**
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
 */function QP(t){if(!t.startsWith(Lh)){const e=Qt.create("invalid-gtag-resource",{gtagURL:t});return Ft.warn(e.message),""}return t}function lv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function YP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function JP(t,e){const n=YP("firebase-js-sdk-policy",{createScriptURL:QP}),r=document.createElement("script"),s=`${Lh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function XP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ZP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await lv(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Ft.error(c)}t("config",s,i)}async function e1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await lv(n);for(const l of o){const u=c.find(p=>p.measurementId===l),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ft.error(i)}}function t1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await e1(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await ZP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Ft.error(c)}}return s}function n1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=t1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function r1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lh)&&n.src.includes(t))return n;return null}/**
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
 */const s1=30,i1=1e3;class o1{constructor(e={},n=i1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uv=new o1;function a1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function c1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:a1(r)},i=WP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Qt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function l1(t,e=uv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Qt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Qt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new d1;return setTimeout(async()=>{c.abort()},GP),hv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function hv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=uv){var i;const{appId:o,measurementId:c}=t;try{await u1(r,e)}catch(l){if(c)return Ft.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await c1(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!h1(u)){if(s.deleteThrottleMetadata(o),c)return Ft.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const h=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?mp(n,s.intervalMillis,s1):mp(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,p),Ft.debug(`Calling attemptFetch again in ${h} millis`),hv(t,p,r,s)}}function u1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function h1(t){if(!(t instanceof _n)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class d1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function f1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function p1(){if(Z_())try{await ey()}catch(t){return Ft.warn(Qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ft.warn(Qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function g1(t,e,n,r,s,i,o){var c;const l=l1(t);l.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Ft.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Ft.error(w)),e.push(l);const u=p1().then(w=>{if(w)return r.getId()}),[h,p]=await Promise.all([l,u]);r1(i)||JP(i,h.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[KP]="firebase",g.update=!0,p!=null&&(g[HP]=p),s("config",h.measurementId,g),h.measurementId}/**
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
 */class m1{constructor(e){this.app=e}_delete(){return delete Qi[this.app.options.appId],Promise.resolve()}}let Qi={},Gp=[];const Wp={};let Ul="dataLayer",_1="gtag",zp,dv,Qp=!1;function y1(){const t=[];if(X_()&&t.push("This is a browser extension environment."),Gb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Qt.create("invalid-analytics-context",{errorInfo:e});Ft.warn(n.message)}}function v1(t,e,n){y1();const r=t.options.appId;if(!r)throw Qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ft.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qt.create("no-api-key");if(Qi[r]!=null)throw Qt.create("already-exists",{id:r});if(!Qp){XP(Ul);const{wrappedGtag:i,gtagCore:o}=n1(Qi,Gp,Wp,Ul,_1);dv=i,zp=o,Qp=!0}return Qi[r]=g1(t,Gp,Wp,e,zp,Ul,n),new m1(t)}function E1(t=vh()){t=it(t);const e=ms(t,sc);return e.isInitialized()?e.getImmediate():T1(t)}function T1(t,e={}){const n=ms(t,sc);if(n.isInitialized()){const s=n.getImmediate();if(uo(e,n.getOptions()))return s;throw Qt.create("already-initialized")}return n.initialize({options:e})}function w1(t,e,n,r){t=it(t),f1(dv,Qi[t.app.options.appId],e,n,r).catch(s=>Ft.error(s))}const Yp="@firebase/analytics",Jp="0.10.4";function I1(){Sn(new gn(sc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return v1(r,s,n)},"PUBLIC")),Sn(new gn("analytics-internal",t,"PRIVATE")),rn(Yp,Jp),rn(Yp,Jp,"esm2017");function t(e){try{const n=e.getProvider(sc).getImmediate();return{logEvent:(r,s,i)=>w1(n,r,s,i)}}catch(n){throw Qt.create("interop-component-reg-failed",{reason:n})}}}I1();var Xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,fv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function m(){}m.prototype=_.prototype,E.D=_.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(y,I,A){for(var T=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)T[ge-2]=arguments[ge];return _.prototype[I].apply(y,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,m){m||(m=0);var y=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)y[I]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(I=0;16>I;++I)y[I]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=E.g[0],m=E.g[1],I=E.g[2];var A=E.g[3],T=_+(A^m&(I^A))+y[0]+3614090360&4294967295;_=m+(T<<7&4294967295|T>>>25),T=A+(I^_&(m^I))+y[1]+3905402710&4294967295,A=_+(T<<12&4294967295|T>>>20),T=I+(m^A&(_^m))+y[2]+606105819&4294967295,I=A+(T<<17&4294967295|T>>>15),T=m+(_^I&(A^_))+y[3]+3250441966&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(A^m&(I^A))+y[4]+4118548399&4294967295,_=m+(T<<7&4294967295|T>>>25),T=A+(I^_&(m^I))+y[5]+1200080426&4294967295,A=_+(T<<12&4294967295|T>>>20),T=I+(m^A&(_^m))+y[6]+2821735955&4294967295,I=A+(T<<17&4294967295|T>>>15),T=m+(_^I&(A^_))+y[7]+4249261313&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(A^m&(I^A))+y[8]+1770035416&4294967295,_=m+(T<<7&4294967295|T>>>25),T=A+(I^_&(m^I))+y[9]+2336552879&4294967295,A=_+(T<<12&4294967295|T>>>20),T=I+(m^A&(_^m))+y[10]+4294925233&4294967295,I=A+(T<<17&4294967295|T>>>15),T=m+(_^I&(A^_))+y[11]+2304563134&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(A^m&(I^A))+y[12]+1804603682&4294967295,_=m+(T<<7&4294967295|T>>>25),T=A+(I^_&(m^I))+y[13]+4254626195&4294967295,A=_+(T<<12&4294967295|T>>>20),T=I+(m^A&(_^m))+y[14]+2792965006&4294967295,I=A+(T<<17&4294967295|T>>>15),T=m+(_^I&(A^_))+y[15]+1236535329&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(I^A&(m^I))+y[1]+4129170786&4294967295,_=m+(T<<5&4294967295|T>>>27),T=A+(m^I&(_^m))+y[6]+3225465664&4294967295,A=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(A^_))+y[11]+643717713&4294967295,I=A+(T<<14&4294967295|T>>>18),T=m+(A^_&(I^A))+y[0]+3921069994&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^A&(m^I))+y[5]+3593408605&4294967295,_=m+(T<<5&4294967295|T>>>27),T=A+(m^I&(_^m))+y[10]+38016083&4294967295,A=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(A^_))+y[15]+3634488961&4294967295,I=A+(T<<14&4294967295|T>>>18),T=m+(A^_&(I^A))+y[4]+3889429448&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^A&(m^I))+y[9]+568446438&4294967295,_=m+(T<<5&4294967295|T>>>27),T=A+(m^I&(_^m))+y[14]+3275163606&4294967295,A=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(A^_))+y[3]+4107603335&4294967295,I=A+(T<<14&4294967295|T>>>18),T=m+(A^_&(I^A))+y[8]+1163531501&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^A&(m^I))+y[13]+2850285829&4294967295,_=m+(T<<5&4294967295|T>>>27),T=A+(m^I&(_^m))+y[2]+4243563512&4294967295,A=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(A^_))+y[7]+1735328473&4294967295,I=A+(T<<14&4294967295|T>>>18),T=m+(A^_&(I^A))+y[12]+2368359562&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(m^I^A)+y[5]+4294588738&4294967295,_=m+(T<<4&4294967295|T>>>28),T=A+(_^m^I)+y[8]+2272392833&4294967295,A=_+(T<<11&4294967295|T>>>21),T=I+(A^_^m)+y[11]+1839030562&4294967295,I=A+(T<<16&4294967295|T>>>16),T=m+(I^A^_)+y[14]+4259657740&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^A)+y[1]+2763975236&4294967295,_=m+(T<<4&4294967295|T>>>28),T=A+(_^m^I)+y[4]+1272893353&4294967295,A=_+(T<<11&4294967295|T>>>21),T=I+(A^_^m)+y[7]+4139469664&4294967295,I=A+(T<<16&4294967295|T>>>16),T=m+(I^A^_)+y[10]+3200236656&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^A)+y[13]+681279174&4294967295,_=m+(T<<4&4294967295|T>>>28),T=A+(_^m^I)+y[0]+3936430074&4294967295,A=_+(T<<11&4294967295|T>>>21),T=I+(A^_^m)+y[3]+3572445317&4294967295,I=A+(T<<16&4294967295|T>>>16),T=m+(I^A^_)+y[6]+76029189&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^A)+y[9]+3654602809&4294967295,_=m+(T<<4&4294967295|T>>>28),T=A+(_^m^I)+y[12]+3873151461&4294967295,A=_+(T<<11&4294967295|T>>>21),T=I+(A^_^m)+y[15]+530742520&4294967295,I=A+(T<<16&4294967295|T>>>16),T=m+(I^A^_)+y[2]+3299628645&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(I^(m|~A))+y[0]+4096336452&4294967295,_=m+(T<<6&4294967295|T>>>26),T=A+(m^(_|~I))+y[7]+1126891415&4294967295,A=_+(T<<10&4294967295|T>>>22),T=I+(_^(A|~m))+y[14]+2878612391&4294967295,I=A+(T<<15&4294967295|T>>>17),T=m+(A^(I|~_))+y[5]+4237533241&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~A))+y[12]+1700485571&4294967295,_=m+(T<<6&4294967295|T>>>26),T=A+(m^(_|~I))+y[3]+2399980690&4294967295,A=_+(T<<10&4294967295|T>>>22),T=I+(_^(A|~m))+y[10]+4293915773&4294967295,I=A+(T<<15&4294967295|T>>>17),T=m+(A^(I|~_))+y[1]+2240044497&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~A))+y[8]+1873313359&4294967295,_=m+(T<<6&4294967295|T>>>26),T=A+(m^(_|~I))+y[15]+4264355552&4294967295,A=_+(T<<10&4294967295|T>>>22),T=I+(_^(A|~m))+y[6]+2734768916&4294967295,I=A+(T<<15&4294967295|T>>>17),T=m+(A^(I|~_))+y[13]+1309151649&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~A))+y[4]+4149444226&4294967295,_=m+(T<<6&4294967295|T>>>26),T=A+(m^(_|~I))+y[11]+3174756917&4294967295,A=_+(T<<10&4294967295|T>>>22),T=I+(_^(A|~m))+y[2]+718787259&4294967295,I=A+(T<<15&4294967295|T>>>17),T=m+(A^(I|~_))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var m=_-this.blockSize,y=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=m;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<_;)if(y[I++]=E.charCodeAt(A++),I==this.blockSize){s(this,y),I=0;break}}else for(;A<_;)if(y[I++]=E[A++],I==this.blockSize){s(this,y),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var m=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=m&255,m/=256;for(this.u(E),E=Array(16),_=m=0;4>_;++_)for(var y=0;32>y;y+=8)E[m++]=this.g[_]>>>y&255;return E};function i(E,_){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=_(E)}function o(E,_){this.h=_;for(var m=[],y=!0,I=E.length-1;0<=I;I--){var A=E[I]|0;y&&A==_||(m[I]=A,y=!1)}this.g=m}var c={};function l(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return D(u(-E));for(var _=[],m=1,y=0;E>=m;y++)_[y]=E/m|0,m*=4294967296;return new o(_,0)}function h(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return D(h(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=u(Math.pow(_,8)),y=p,I=0;I<E.length;I+=8){var A=Math.min(8,E.length-I),T=parseInt(E.substring(I,I+A),_);8>A?(A=u(Math.pow(_,A)),y=y.j(A).add(u(T))):(y=y.j(m),y=y.add(u(T)))}return y}var p=l(0),g=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();for(var E=0,_=1,m=0;m<this.g.length;m++){var y=this.i(m);E+=(0<=y?y:4294967296+y)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(V(this))return"-"+D(this).toString(E);for(var _=u(Math.pow(E,6)),m=this,y="";;){var I=k(m,_).g;m=U(m,I.j(_));var A=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=I,C(m))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function V(E){return E.h==-1}t.l=function(E){return E=U(this,E),V(E)?-1:C(E)?0:1};function D(E){for(var _=E.g.length,m=[],y=0;y<_;y++)m[y]=~E.g[y];return new o(m,~E.h).add(g)}t.abs=function(){return V(this)?D(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0,I=0;I<=_;I++){var A=y+(this.i(I)&65535)+(E.i(I)&65535),T=(A>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);y=T>>>16,A&=65535,T&=65535,m[I]=T<<16|A}return new o(m,m[m.length-1]&-2147483648?-1:0)};function U(E,_){return E.add(D(_))}t.j=function(E){if(C(this)||C(E))return p;if(V(this))return V(E)?D(this).j(D(E)):D(D(this).j(E));if(V(E))return D(this.j(D(E)));if(0>this.l(w)&&0>E.l(w))return u(this.m()*E.m());for(var _=this.g.length+E.g.length,m=[],y=0;y<2*_;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<E.g.length;I++){var A=this.i(y)>>>16,T=this.i(y)&65535,ge=E.i(I)>>>16,we=E.i(I)&65535;m[2*y+2*I]+=T*we,O(m,2*y+2*I),m[2*y+2*I+1]+=A*we,O(m,2*y+2*I+1),m[2*y+2*I+1]+=T*ge,O(m,2*y+2*I+1),m[2*y+2*I+2]+=A*ge,O(m,2*y+2*I+2)}for(y=0;y<_;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=_;y<2*_;y++)m[y]=0;return new o(m,0)};function O(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function S(E,_){this.g=E,this.h=_}function k(E,_){if(C(_))throw Error("division by zero");if(C(E))return new S(p,p);if(V(E))return _=k(D(E),_),new S(D(_.g),D(_.h));if(V(_))return _=k(E,D(_)),new S(D(_.g),_.h);if(30<E.g.length){if(V(E)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var m=g,y=_;0>=y.l(E);)m=x(m),y=x(y);var I=P(m,1),A=P(y,1);for(y=P(y,2),m=P(m,2);!C(y);){var T=A.add(y);0>=T.l(E)&&(I=I.add(m),A=T),y=P(y,1),m=P(m,1)}return _=U(E,I.j(_)),new S(I,_)}for(I=p;0<=E.l(_);){for(m=Math.max(1,Math.floor(E.m()/_.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=u(m),T=A.j(_);V(T)||0<T.l(E);)m-=y,A=u(m),T=A.j(_);C(A)&&(A=g),I=I.add(A),E=U(E,T)}return new S(I,E)}t.A=function(E){return k(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)&E.i(y);return new o(m,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)|E.i(y);return new o(m,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)^E.i(y);return new o(m,this.h^E.h)};function x(E){for(var _=E.g.length+1,m=[],y=0;y<_;y++)m[y]=E.i(y)<<1|E.i(y-1)>>>31;return new o(m,E.h)}function P(E,_){var m=_>>5;_%=32;for(var y=E.g.length-m,I=[],A=0;A<y;A++)I[A]=0<_?E.i(A+m)>>>_|E.i(A+m+1)<<32-_:E.i(A+m);return new o(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,es=o}).apply(typeof Xp<"u"?Xp:typeof self<"u"?self:typeof window<"u"?window:{});var Ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pv,gv,xi,mv,Oa,bu,_v,yv,vv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ea=="object"&&Ea];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var N=a[v];if(!(N in f))break e;f=f[N]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,v=!1,N={next:function(){if(!v&&f<a.length){var F=f++;return{value:d(F,a[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function w(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,N,F){for(var Q=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)Q[$e-2]=arguments[$e];return d.prototype[N].apply(v,Q)}}function V(a){const d=a.length;if(0<d){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function D(a,d){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(l(v)){const N=a.length||0,F=v.length||0;a.length=N+F;for(let Q=0;Q<F;Q++)a[N+Q]=v[Q]}else a.push(v)}}class U{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var x=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function P(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function _(a){const d={};for(const f in a)d[f]=a[f];return d}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(a,d){let f,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(f in v)a[f]=v[f];for(let F=0;F<m.length;F++)f=m[F],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function I(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function T(){var a=ve;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,f){const v=we.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var we=new U(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let le,Z=!1,ve=new ge,ue=()=>{const a=c.Promise.resolve(void 0);le=()=>{a.then(fe)}};var fe=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){A(f)}var d=we;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Z=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var sr=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function yn(a,d){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(x){e:{try{k(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ht[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}C(yn,Ve);var ht={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(a,d,f,v,N){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=N,this.key=++ee,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ae(a){this.src=a,this.g={},this.h=0}Ae.prototype.add=function(a,d,f,v,N){var F=a.toString();a=this.g[F],a||(a=this.g[F]=[],this.h++);var Q=b(a,d,v,N);return-1<Q?(d=a[Q],f||(d.fa=!1)):(d=new J(d,this.src,F,!!v,N),d.fa=f,a.push(d)),d};function Ue(a,d){var f=d.type;if(f in a.g){var v=a.g[f],N=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=N)&&Array.prototype.splice.call(v,N,1),F&&(se(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,d,f,v){for(var N=0;N<a.length;++N){var F=a[N];if(!F.da&&F.listener==d&&F.capture==!!f&&F.ha==v)return N}return-1}var R="closure_lm_"+(1e6*Math.random()|0),L={};function j(a,d,f,v,N){if(Array.isArray(d)){for(var F=0;F<d.length;F++)j(a,d[F],f,v,N);return null}return f=ae(f),a&&a[$]?a.K(d,f,u(v)?!!v.capture:!!v,N):B(a,d,f,!1,v,N)}function B(a,d,f,v,N,F){if(!d)throw Error("Invalid event type");var Q=u(N)?!!N.capture:!!N,$e=X(a);if($e||(a[R]=$e=new Ae(a)),f=$e.add(d,f,v,Q,F),f.proxy)return f;if(v=W(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)sr||(N=Q),N===void 0&&(N=!1),a.addEventListener(d.toString(),v,N);else if(a.attachEvent)a.attachEvent(z(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function a(f){return d.call(a.src,a.listener,f)}const d=H;return a}function Y(a,d,f,v,N){if(Array.isArray(d))for(var F=0;F<d.length;F++)Y(a,d[F],f,v,N);else v=u(v)?!!v.capture:!!v,f=ae(f),a&&a[$]?(a=a.i,d=String(d).toString(),d in a.g&&(F=a.g[d],f=b(F,f,v,N),-1<f&&(se(F[f]),Array.prototype.splice.call(F,f,1),F.length==0&&(delete a.g[d],a.h--)))):a&&(a=X(a))&&(d=a.g[d.toString()],a=-1,d&&(a=b(d,f,v,N)),(f=-1<a?d[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$])Ue(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(z(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=X(d))?(Ue(f,a),f.h==0&&(f.src=null,d[R]=null)):se(a)}}}function z(a){return a in L?L[a]:L[a]="on"+a}function H(a,d){if(a.da)a=!0;else{d=new yn(d,this);var f=a.listener,v=a.ha||a.src;a.fa&&G(a),a=f.call(v,d)}return a}function X(a){return a=a[R],a instanceof Ae?a:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ce]||(a[ce]=function(d){return a.handleEvent(d)}),a[ce])}function oe(){Ne.call(this),this.i=new Ae(this),this.M=this,this.F=null}C(oe,Ne),oe.prototype[$]=!0,oe.prototype.removeEventListener=function(a,d,f,v){Y(this,a,d,f,v)};function de(a,d){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new Ve(d,a);else if(d instanceof Ve)d.target=d.target||a;else{var N=d;d=new Ve(v,a),y(d,N)}if(N=!0,f)for(var F=f.length-1;0<=F;F--){var Q=d.g=f[F];N=Le(Q,v,!0,d)&&N}if(Q=d.g=a,N=Le(Q,v,!0,d)&&N,N=Le(Q,v,!1,d)&&N,f)for(F=0;F<f.length;F++)Q=d.g=f[F],N=Le(Q,v,!1,d)&&N}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],v=0;v<f.length;v++)se(f[v]);delete a.g[d],a.h--}}this.F=null},oe.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},oe.prototype.L=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function Le(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,F=0;F<d.length;++F){var Q=d[F];if(Q&&!Q.da&&Q.capture==f){var $e=Q.listener,gt=Q.ha||Q.src;Q.fa&&Ue(a.i,Q),N=$e.call(gt,v)!==!1&&N}}return N&&!v.defaultPrevented}function Ce(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function et(a){a.g=Ce(()=>{a.g=null,a.i&&(a.i=!1,et(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class $t extends Ne{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(a){Ne.call(this),this.h=a,this.g={}}C(Yt,Ne);var gi=[];function ir(a){P(a.g,function(d,f){this.g.hasOwnProperty(f)&&G(d)},a),a.g={}}Yt.prototype.N=function(){Yt.aa.N.call(this),ir(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vs=c.JSON.stringify,Ct=c.JSON.parse,Jt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Es(){}Es.prototype.h=null;function _d(a){return a.h||(a.h=a.i())}function yd(){}var mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function sl(){Ve.call(this,"d")}C(sl,Ve);function il(){Ve.call(this,"c")}C(il,Ve);var Ur={},vd=null;function Go(){return vd=vd||new oe}Ur.La="serverreachability";function Ed(a){Ve.call(this,Ur.La,a)}C(Ed,Ve);function _i(a){const d=Go();de(d,new Ed(d))}Ur.STAT_EVENT="statevent";function Td(a,d){Ve.call(this,Ur.STAT_EVENT,a),this.stat=d}C(Td,Ve);function Pt(a){const d=Go();de(d,new Td(d,a))}Ur.Ma="timingevent";function wd(a,d){Ve.call(this,Ur.Ma,a),this.size=d}C(wd,Ve);function yi(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function BE(a,d,f,v,N,F){a.info(function(){if(a.g)if(F)for(var Q="",$e=F.split("&"),gt=0;gt<$e.length;gt++){var Oe=$e[gt].split("=");if(1<Oe.length){var Et=Oe[0];Oe=Oe[1];var Tt=Et.split("_");Q=2<=Tt.length&&Tt[1]=="type"?Q+(Et+"="+Oe+"&"):Q+(Et+"=redacted&")}}else Q=null;else Q=F;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+d+`
`+f+`
`+Q})}function $E(a,d,f,v,N,F,Q){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+d+`
`+f+`
`+F+" "+Q})}function Ts(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+qE(a,f)+(v?" "+v:"")})}function jE(a,d){a.info(function(){return"TIMEOUT: "+d})}vi.prototype.info=function(){};function qE(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var F=N[0];if(F!="noop"&&F!="stop"&&F!="close")for(var Q=1;Q<N.length;Q++)N[Q]=""}}}}return vs(f)}catch{return d}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Id={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ol;function zo(){}C(zo,Es),zo.prototype.g=function(){return new XMLHttpRequest},zo.prototype.i=function(){return{}},ol=new zo;function or(a,d,f,v){this.j=a,this.i=d,this.l=f,this.R=v||1,this.U=new Yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ad}function Ad(){this.i=null,this.g="",this.h=!1}var bd={},al={};function cl(a,d,f){a.L=1,a.v=Xo(Pn(d)),a.m=f,a.P=!0,Rd(a,null)}function Rd(a,d){a.F=Date.now(),Qo(a),a.A=Pn(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Bd(f.i,"t",v),a.C=0,f=a.j.J,a.h=new Ad,a.g=sf(a.j,f?d:null,!a.m),0<a.O&&(a.M=new $t(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,v=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(gi[0]=N.toString()),N=gi);for(var F=0;F<N.length;F++){var Q=j(f,N[F],v||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),_i(),BE(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const d=this.M;d&&kn(a)==3?d.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const Tt=kn(this.g);var d=this.g.Ba();const As=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||Wd(this.g)))){this.J||Tt!=4||d==7||(d==8||0>=As?_i(3):_i(2)),ll(this);var f=this.g.Z();this.X=f;t:if(Sd(this)){var v=Wd(this.g);a="";var N=v.length,F=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Br(this),Ei(this);var Q="";break t}this.h.i=new c.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(F&&d==N-1)});v.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,$E(this.i,this.u,this.A,this.l,this.R,Tt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,gt=this.g;if(($e=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O($e)){var Oe=$e;break t}}Oe=null}if(f=Oe)Ts(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ul(this,f);else{this.o=!1,this.s=3,Pt(12),Br(this),Ei(this);break e}}if(this.P){f=!0;let on;for(;!this.J&&this.C<Q.length;)if(on=HE(this,Q),on==al){Tt==4&&(this.s=4,Pt(14),f=!1),Ts(this.i,this.l,null,"[Incomplete Response]");break}else if(on==bd){this.s=4,Pt(15),Ts(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else Ts(this.i,this.l,on,null),ul(this,on);if(Sd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||Q.length!=0||this.h.h||(this.s=1,Pt(16),f=!1),this.o=this.o&&f,!f)Ts(this.i,this.l,Q,"[Invalid Chunked Response]"),Br(this),Ei(this);else if(0<Q.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),ml(Et),Et.M=!0,Pt(11))}}else Ts(this.i,this.l,Q,null),ul(this,Q);Tt==4&&Br(this),this.o&&!this.J&&(Tt==4?ef(this.j,this):(this.o=!1,Qo(this)))}else aT(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Br(this),Ei(this)}}}catch{}finally{}};function Sd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function HE(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?al:(f=Number(d.substring(f,v)),isNaN(f)?bd:(v+=1,v+f>d.length?al:(d=d.slice(v,v+f),a.C=v+f,d)))}or.prototype.cancel=function(){this.J=!0,Br(this)};function Qo(a){a.S=Date.now()+a.I,Cd(a,a.I)}function Cd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(g(a.ba,a),d)}function ll(a){a.B&&(c.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jE(this.i,this.A),this.L!=2&&(_i(),Pt(17)),Br(this),this.s=2,Ei(this)):Cd(this,this.S-a)};function Ei(a){a.j.G==0||a.J||ef(a.j,a)}function Br(a){ll(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,ir(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function ul(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||hl(f.h,a))){if(!a.K&&hl(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ra(f),ta(f);else break e;gl(f),Pt(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=yi(g(f.Za,f),6e3));if(1>=Od(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else jr(f,11)}else if((a.K||f.g==a)&&ra(f),!O(d))for(N=f.Da.g.parse(d),d=0;d<N.length;d++){let Oe=N[d];if(f.T=Oe[0],Oe=Oe[1],f.G==2)if(Oe[0]=="c"){f.K=Oe[1],f.ia=Oe[2];const Et=Oe[3];Et!=null&&(f.la=Et,f.j.info("VER="+f.la));const Tt=Oe[4];Tt!=null&&(f.Aa=Tt,f.j.info("SVER="+f.Aa));const As=Oe[5];As!=null&&typeof As=="number"&&0<As&&(v=1.5*As,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const on=a.g;if(on){const ia=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var F=v.h;F.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(dl(F,F.h),F.h=null))}if(v.D){const _l=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(v.ya=_l,Ge(v.I,v.D,_l))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var Q=a;if(v.qa=rf(v,v.J?v.ia:null,v.W),Q.K){Dd(v.h,Q);var $e=Q,gt=v.L;gt&&($e.I=gt),$e.B&&(ll($e),Qo($e)),v.g=Q}else Xd(v);0<f.i.length&&na(f)}else Oe[0]!="stop"&&Oe[0]!="close"||jr(f,7);else f.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?jr(f,7):pl(f):Oe[0]!="noop"&&f.l&&f.l.ta(Oe),f.v=0)}}_i(4)}catch{}}var KE=class{constructor(a,d){this.g=a,this.map=d}};function Pd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Od(a){return a.h?1:a.g?a.g.size:0}function hl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function dl(a,d){a.g?a.g.add(d):a.h=d}function Dd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Pd.prototype.cancel=function(){if(this.i=Nd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return V(a.i)}function GE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,v=0;v<f;v++)d.push(a[v]);return d}d=[],f=0;for(v in a)d[f++]=a[v];return d}function WE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const v in a)d[f++]=v;return d}}}function Vd(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=WE(a),v=GE(a),N=v.length,F=0;F<N;F++)d.call(void 0,v[F],f&&f[F],a)}var Md=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zE(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),N=null;if(0<=v){var F=a[f].substring(0,v);N=a[f].substring(v+1)}else F=a[f];d(F,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,Yo(this,a.j),this.o=a.o,this.g=a.g,Jo(this,a.s),this.l=a.l;var d=a.i,f=new Ii;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),Ld(this,f),this.m=a.m}else a&&(d=String(a).match(Md))?(this.h=!1,Yo(this,d[1]||"",!0),this.o=Ti(d[2]||""),this.g=Ti(d[3]||"",!0),Jo(this,d[4]),this.l=Ti(d[5]||"",!0),Ld(this,d[6]||"",!0),this.m=Ti(d[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}$r.prototype.toString=function(){var a=[],d=this.j;d&&a.push(wi(d,xd,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(wi(d,xd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(wi(f,f.charAt(0)=="/"?JE:YE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",wi(f,ZE)),a.join("")};function Pn(a){return new $r(a)}function Yo(a,d,f){a.j=f?Ti(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Jo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function Ld(a,d,f){d instanceof Ii?(a.i=d,eT(a.i,a.h)):(f||(d=wi(d,XE)),a.i=new Ii(d,a.h))}function Ge(a,d,f){a.i.set(d,f)}function Xo(a){return Ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ti(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wi(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,QE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function QE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xd=/[#\/\?@]/g,YE=/[#\?:]/g,JE=/[#\?]/g,XE=/[#\?@]/g,ZE=/#/g;function Ii(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&zE(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Ii.prototype,t.add=function(a,d){ar(this),this.i=null,a=ws(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Fd(a,d){ar(a),d=ws(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Ud(a,d){return ar(a),d=ws(a,d),a.g.has(d)}t.forEach=function(a,d){ar(this),this.g.forEach(function(f,v){f.forEach(function(N){a.call(d,N,v,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let v=0;v<d.length;v++){const N=a[v];for(let F=0;F<N.length;F++)f.push(d[v])}return f},t.V=function(a){ar(this);let d=[];if(typeof a=="string")Ud(this,a)&&(d=d.concat(this.g.get(ws(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return ar(this),this.i=null,a=ws(this,a),Ud(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Bd(a,d,f){Fd(a,d),0<f.length&&(a.i=null,a.g.set(ws(a,d),V(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var v=d[f];const F=encodeURIComponent(String(v)),Q=this.V(v);for(v=0;v<Q.length;v++){var N=F;Q[v]!==""&&(N+="="+encodeURIComponent(String(Q[v]))),a.push(N)}}return this.i=a.join("&")};function ws(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function eT(a,d){d&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(f,v){var N=v.toLowerCase();v!=N&&(Fd(this,v),Bd(this,N,f))},a)),a.j=d}function tT(a,d){const f=new vi;if(c.Image){const v=new Image;v.onload=w(cr,f,"TestLoadImage: loaded",!0,d,v),v.onerror=w(cr,f,"TestLoadImage: error",!1,d,v),v.onabort=w(cr,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=w(cr,f,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function nT(a,d){const f=new vi,v=new AbortController,N=setTimeout(()=>{v.abort(),cr(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(F=>{clearTimeout(N),F.ok?cr(f,"TestPingServer: ok",!0,d):cr(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),cr(f,"TestPingServer: error",!1,d)})}function cr(a,d,f,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(f)}catch{}}function rT(){this.g=new Jt}function sT(a,d,f){const v=f||"";try{Vd(a,function(N,F){let Q=N;u(N)&&(Q=vs(N)),d.push(v+F+"="+encodeURIComponent(Q))})}catch(N){throw d.push(v+"type="+encodeURIComponent("_badmap")),N}}function Ai(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Ai,Es),Ai.prototype.g=function(){return new Zo(this.l,this.j)},Ai.prototype.i=function(a){return function(){return a}}({});function Zo(a,d){oe.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Zo,oe),t=Zo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,bi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$d(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $d(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?bi(this):Ri(this),this.readyState==3&&$d(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,bi(this))},t.Qa=function(a){this.g&&(this.response=a,bi(this))},t.ga=function(){this.g&&bi(this)};function bi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ri(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jd(a){let d="";return P(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function fl(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=jd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ge(a,d,f))}function Je(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Je,oe);var iT=/^https?$/i,oT=["POST","PUT"];t=Je.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ol.g(),this.v=this.o?_d(this.o):_d(ol),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(F){qd(this,F);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)f.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())f.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(F=>F.toLowerCase()=="content-type"),N=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(oT,d,void 0))||v||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,Q]of f)this.g.setRequestHeader(F,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gd(this),this.u=!0,this.g.send(a),this.u=!1}catch(F){qd(this,F)}};function qd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Hd(a),ea(a)}function Hd(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),ea(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ea(this,!0)),Je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kd(this):this.bb())},t.bb=function(){Kd(this)};function Kd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||kn(a)!=4||a.Z()!=2)){if(a.u&&kn(a)==4)Ce(a.Ea,0,a);else if(de(a,"readystatechange"),kn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=Q===0){var N=String(a.D).match(Md)[1]||null;!N&&c.self&&c.self.location&&(N=c.self.location.protocol.slice(0,-1)),v=!iT.test(N?N.toLowerCase():"")}f=v}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var F=2<kn(a)?a.g.statusText:""}catch{F=""}a.l=F+" ["+a.Z()+"]",Hd(a)}}finally{ea(a)}}}}function ea(a,d){if(a.g){Gd(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||de(a,"ready");try{f.onreadystatechange=v}catch{}}}function Gd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function kn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Ct(d)}};function Wd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function aT(a){const d={};a=(a.g&&2<=kn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(O(a[v]))continue;var f=I(a[v]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const F=d[N]||[];d[N]=F,F.push(f)}E(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Si(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function zd(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Si("baseRetryDelayMs",5e3,a),this.cb=Si("retryDelaySeedMs",1e4,a),this.Wa=Si("forwardChannelMaxRetries",2,a),this.wa=Si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Pd(a&&a.concurrentRequestLimit),this.Da=new rT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zd.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,v){Pt(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=rf(this,null,this.W),na(this)};function pl(a){if(Qd(a),a.G==3){var d=a.U++,f=Pn(a.I);if(Ge(f,"SID",a.K),Ge(f,"RID",d),Ge(f,"TYPE","terminate"),Ci(a,f),d=new or(a,a.j,d),d.L=2,d.v=Xo(Pn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=sf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Qo(d)}nf(a)}function ta(a){a.g&&(ml(a),a.g.cancel(),a.g=null)}function Qd(a){ta(a),a.u&&(c.clearTimeout(a.u),a.u=null),ra(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function na(a){if(!kd(a.h)&&!a.s){a.s=!0;var d=a.Ga;le||ue(),Z||(le(),Z=!0),ve.add(d,a),a.B=0}}function cT(a,d){return Od(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(g(a.Ga,a,d),tf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new or(this,this.j,a);let F=this.o;if(this.S&&(F?(F=_(F),y(F,this.S)):F=this.S),this.m!==null||this.O||(N.H=F,F=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Jd(this,N,d),f=Pn(this.I),Ge(f,"RID",a),Ge(f,"CVER",22),this.D&&Ge(f,"X-HTTP-Session-Id",this.D),Ci(this,f),F&&(this.O?d="headers="+encodeURIComponent(String(jd(F)))+"&"+d:this.m&&fl(f,this.m,F)),dl(this.h,N),this.Ua&&Ge(f,"TYPE","init"),this.P?(Ge(f,"$req",d),Ge(f,"SID","null"),N.T=!0,cl(N,f,null)):cl(N,f,d),this.G=2}}else this.G==3&&(a?Yd(this,a):this.i.length==0||kd(this.h)||Yd(this))};function Yd(a,d){var f;d?f=d.l:f=a.U++;const v=Pn(a.I);Ge(v,"SID",a.K),Ge(v,"RID",f),Ge(v,"AID",a.T),Ci(a,v),a.m&&a.o&&fl(v,a.m,a.o),f=new or(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Jd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),dl(a.h,f),cl(f,v,d)}function Ci(a,d){a.H&&P(a.H,function(f,v){Ge(d,v,f)}),a.l&&Vd({},function(f,v){Ge(d,v,f)})}function Jd(a,d,f){f=Math.min(a.i.length,f);var v=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let F=-1;for(;;){const Q=["count="+f];F==-1?0<f?(F=N[0].g,Q.push("ofs="+F)):F=0:Q.push("ofs="+F);let $e=!0;for(let gt=0;gt<f;gt++){let Oe=N[gt].g;const Et=N[gt].map;if(Oe-=F,0>Oe)F=Math.max(0,N[gt].g-100),$e=!1;else try{sT(Et,Q,"req"+Oe+"_")}catch{v&&v(Et)}}if($e){v=Q.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,v}function Xd(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;le||ue(),Z||(le(),Z=!0),ve.add(d,a),a.v=0}}function gl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(g(a.Fa,a),tf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Zd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),ta(this),Zd(this))};function ml(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Zd(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Pn(a.qa);Ge(d,"RID","rpc"),Ge(d,"SID",a.K),Ge(d,"AID",a.T),Ge(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ge(d,"TO",a.ja),Ge(d,"TYPE","xmlhttp"),Ci(a,d),a.m&&a.o&&fl(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Xo(Pn(d)),f.m=null,f.P=!0,Rd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ta(this),gl(this),Pt(19))};function ra(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function ef(a,d){var f=null;if(a.g==d){ra(a),ml(a),a.g=null;var v=2}else if(hl(a.h,d))f=d.D,Dd(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;v=Go(),de(v,new wd(v,f)),na(a)}else Xd(a);else if(N=d.s,N==3||N==0&&0<d.X||!(v==1&&cT(a,d)||v==2&&gl(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),N){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function tf(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function jr(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),v=a.Xa;const N=!v;v=new $r(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Yo(v,"https"),Xo(v),N?tT(v.toString(),f):nT(v.toString(),f)}else Pt(2);a.G=0,a.l&&a.l.sa(d),nf(a),Qd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function nf(a){if(a.G=0,a.ka=[],a.l){const d=Nd(a.h);(d.length!=0||a.i.length!=0)&&(D(a.ka,d),D(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function rf(a,d,f){var v=f instanceof $r?Pn(f):new $r(f);if(v.g!="")d&&(v.g=d+"."+v.g),Jo(v,v.s);else{var N=c.location;v=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var F=new $r(null);v&&Yo(F,v),d&&(F.g=d),N&&Jo(F,N),f&&(F.l=f),v=F}return f=a.D,d=a.ya,f&&d&&Ge(v,f,d),Ge(v,"VER",a.la),Ci(a,v),v}function sf(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Je(new Ai({eb:f})):new Je(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function of(){}t=of.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function sa(){}sa.prototype.g=function(a,d){return new jt(a,d)};function jt(a,d){oe.call(this),this.g=new zd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!O(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Is(this)}C(jt,oe),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){pl(this.g)},jt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=vs(a),a=f);d.i.push(new KE(d.Ya++,a)),d.G==3&&na(d)},jt.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,jt.aa.N.call(this)};function af(a){sl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(af,sl);function cf(){il.call(this),this.status=1}C(cf,il);function Is(a){this.g=a}C(Is,of),Is.prototype.ua=function(){de(this.g,"a")},Is.prototype.ta=function(a){de(this.g,new af(a))},Is.prototype.sa=function(a){de(this.g,new cf)},Is.prototype.ra=function(){de(this.g,"b")},sa.prototype.createWebChannel=sa.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,vv=function(){return new sa},yv=function(){return Go()},_v=Ur,bu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,Oa=Wo,Id.COMPLETE="complete",mv=Id,yd.EventType=mi,mi.OPEN="a",mi.CLOSE="b",mi.ERROR="c",mi.MESSAGE="d",oe.prototype.listen=oe.prototype.K,xi=yd,gv=Ai,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,pv=Je}).apply(typeof Ea<"u"?Ea:typeof self<"u"?self:typeof window<"u"?window:{});const Zp="@firebase/firestore";/**
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
 */let ui="10.12.1";/**
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
 */const ls=new Mc("@firebase/firestore");function Di(){return ls.logLevel}function ie(t,...e){if(ls.logLevel<=be.DEBUG){const n=e.map(xh);ls.debug(`Firestore (${ui}): ${t}`,...n)}}function zn(t,...e){if(ls.logLevel<=be.ERROR){const n=e.map(xh);ls.error(`Firestore (${ui}): ${t}`,...n)}}function Zs(t,...e){if(ls.logLevel<=be.WARN){const n=e.map(xh);ls.warn(`Firestore (${ui}): ${t}`,...n)}}function xh(t){if(typeof t=="string")return t;try{/**
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
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${ui}) INTERNAL ASSERTION FAILED: `+t;throw zn(e),new Error(e)}function Ke(t,e){t||_e()}function Ee(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ev{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class b1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class R1{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ke(typeof r.accessToken=="string"),new Ev(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new At(e)}}class S1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=At.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class C1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new S1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ie("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ke(typeof n.token=="string"),this.R=n.token,new P1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Tv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=O1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Me(t,e){return t<e?-1:t>e?1:0}function ei(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ut(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new ut(0,0))}static max(){return new ye(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class go{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class We extends go{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const D1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends go{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return D1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ne(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ne(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(We.fromString(e))}static fromName(e){return new he(We.fromString(e).popFirst(5))}static empty(){return new he(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new We(e.slice()))}}function N1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new Dr(s,he.empty(),e)}function V1(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(ye.min(),he.empty(),-1)}static max(){return new Dr(ye.max(),he.empty(),-1)}}function M1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Me(t.largestBatchId,e.largestBatchId))}/**
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
 */async function xo(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==L1)throw t;ie("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function F1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fh.oe=-1;function jc(t){return t==null}function ic(t){return t===0&&1/t==-1/0}function U1(t){return typeof t=="number"&&Number.isInteger(t)&&!ic(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _s(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ta(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ta(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ta(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ta(this.root,e,this.comparator,!0)}}class Ta{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??mt.RED,this.left=s??mt.EMPTY,this.right=i??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new mt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,r,s,i){return this}insert(e,n,r){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class yt{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tg(this.data.getIterator())}getIteratorFrom(e){return new tg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class tg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Gt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new yt(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ei(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Iv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iv("Invalid base64 string: "+i):i}}(e);return new St(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const B1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(Ke(!!t),typeof t=="string"){let e=0;const n=B1.exec(t);if(Ke(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
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
 */function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bh(t){const e=t.mapValue.fields.__previous_value__;return Uh(e)?Bh(e):e}function mo(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class $1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class _o{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new _o("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof _o&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:j1(t)?9007199254740991:10:_e()}function Cn(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mo(t).isEqual(mo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nr(s.timestampValue),c=Nr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return us(s.bytesValue).isEqual(us(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return nt(s.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(s.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return nt(s.integerValue)===nt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=nt(s.doubleValue),c=nt(i.doubleValue);return o===c?ic(o)===ic(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ei(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(eg(o)!==eg(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Cn(o[l],c[l])))return!1;return!0}(t,e);default:return _e()}}function yo(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return Me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=nt(i.integerValue||i.doubleValue),l=nt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ng(t.timestampValue,e.timestampValue);case 4:return ng(mo(t),mo(e));case 5:return Me(t.stringValue,e.stringValue);case 6:return function(i,o){const c=us(i),l=us(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=Me(c[u],l[u]);if(h!==0)return h}return Me(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Me(nt(i.latitude),nt(o.latitude));return c!==0?c:Me(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const h=ti(c[u],l[u]);if(h)return h}return Me(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===wa.mapValue&&o===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(o===wa.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=Me(l[p],h[p]);if(g!==0)return g;const w=ti(c[l[p]],u[h[p]]);if(w!==0)return w}return Me(l.length,h.length)}(t.mapValue,e.mapValue);default:throw _e()}}function ng(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=Nr(t),r=Nr(e),s=Me(n.seconds,r.seconds);return s!==0?s:Me(n.nanos,r.nanos)}function ni(t){return Ru(t)}function Ru(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ru(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ru(n.fields[o])}`;return s+"}"}(t.mapValue):_e()}function rg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Su(t){return!!t&&"integerValue"in t}function $h(t){return!!t&&"arrayValue"in t}function sg(t){return!!t&&"nullValue"in t}function ig(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Da(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _s(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function j1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Yi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){_s(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Mt(Yi(this.value))}}function Av(t){const e=[];return _s(t.fields,(n,r)=>{const s=new _t([n]);if(Da(r)){const i=Av(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Gt(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new bt(e,0,ye.min(),ye.min(),ye.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,ye.min(),ye.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,ye.min(),ye.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oc{constructor(e,n){this.position=e,this.inclusive=n}}function og(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ag(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ac{constructor(e,n="asc"){this.field=e,this.dir=n}}function q1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bv{}class rt extends bv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new K1(e,n,r):n==="array-contains"?new z1(e,r):n==="in"?new Q1(e,r):n==="not-in"?new Y1(e,r):n==="array-contains-any"?new J1(e,r):new rt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new G1(e,r):new W1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends bv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new mn(e,n)}matches(e){return Rv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rv(t){return t.op==="and"}function Sv(t){return H1(t)&&Rv(t)}function H1(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Cu(t){if(t instanceof rt)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(Sv(t))return t.filters.map(e=>Cu(e)).join(",");{const e=t.filters.map(n=>Cu(n)).join(",");return`${t.op}(${e})`}}function Cv(t,e){return t instanceof rt?function(r,s){return s instanceof rt&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)}(t,e):t instanceof mn?function(r,s){return s instanceof mn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Cv(o,s.filters[c]),!0):!1}(t,e):void _e()}function Pv(t){return t instanceof rt?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(Pv).join(" ,")+"}"}(t):"Filter"}class K1 extends rt{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class G1 extends rt{constructor(e,n){super(e,"in",n),this.keys=kv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W1 extends rt{constructor(e,n){super(e,"not-in",n),this.keys=kv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class z1 extends rt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $h(n)&&yo(n.arrayValue,this.value)}}class Q1 extends rt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yo(this.value.arrayValue,n)}}class Y1 extends rt{constructor(e,n){super(e,"not-in",n)}matches(e){if(yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!yo(this.value.arrayValue,n)}}class J1 extends rt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$h(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yo(this.value.arrayValue,r))}}/**
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
 */class X1{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function cg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new X1(t,e,n,r,s,i,o)}function jh(t){const e=Ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ue=n}return e.ue}function qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!q1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ag(t.startAt,e.startAt)&&ag(t.endAt,e.endAt)}function Pu(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Uo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Z1(t,e,n,r,s,i,o,c){return new Uo(t,e,n,r,s,i,o,c)}function Hh(t){return new Uo(t)}function lg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ov(t){return t.collectionGroup!==null}function Ji(t){const e=Ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new yt(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ac(i,r))}),n.has(_t.keyField().canonicalString())||e.ce.push(new ac(_t.keyField(),r))}return e.ce}function An(t){const e=Ee(t);return e.le||(e.le=ek(e,Ji(t))),e.le}function ek(t,e){if(t.limitType==="F")return cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ac(s.field,i)});const n=t.endAt?new oc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oc(t.startAt.position,t.startAt.inclusive):null;return cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ku(t,e){const n=t.filters.concat([e]);return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ou(t,e,n){return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qc(t,e){return qh(An(t),An(e))&&t.limitType===e.limitType}function Dv(t){return`${jh(An(t))}|lt:${t.limitType}`}function Cs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pv(s)).join(", ")}]`),jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(An(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=og(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ji(r),s)||r.endAt&&!function(o,c,l){const u=og(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ji(r),s))}(t,e)}function tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nv(t){return(e,n)=>{let r=!1;for(const s of Ji(t)){const i=nk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nk(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ti(l,u):_e()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return _e()}}/**
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
 */class hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_s(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wv(this.inner)}size(){return this.innerSize}}/**
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
 */const rk=new Ye(he.comparator);function Qn(){return rk}const Vv=new Ye(he.comparator);function Fi(...t){let e=Vv;for(const n of t)e=e.insert(n.key,n);return e}function Mv(t){let e=Vv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return Xi()}function Lv(){return Xi()}function Xi(){return new hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const sk=new Ye(he.comparator),ik=new yt(he.comparator);function Ie(...t){let e=ik;for(const n of t)e=e.add(n);return e}const ok=new yt(Me);function ak(){return ok}/**
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
 */function xv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ic(e)?"-0":e}}function Fv(t){return{integerValue:""+t}}function ck(t,e){return U1(e)?Fv(e):xv(t,e)}/**
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
 */class Kc{constructor(){this._=void 0}}function lk(t,e,n){return t instanceof cc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uh(i)&&(i=Bh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof vo?Bv(t,e):t instanceof Eo?$v(t,e):function(s,i){const o=Uv(s,i),c=ug(o)+ug(s.Pe);return Su(o)&&Su(s.Pe)?Fv(c):xv(s.serializer,c)}(t,e)}function uk(t,e,n){return t instanceof vo?Bv(t,e):t instanceof Eo?$v(t,e):n}function Uv(t,e){return t instanceof lc?function(r){return Su(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class cc extends Kc{}class vo extends Kc{constructor(e){super(),this.elements=e}}function Bv(t,e){const n=jv(e);for(const r of t.elements)n.some(s=>Cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Eo extends Kc{constructor(e){super(),this.elements=e}}function $v(t,e){let n=jv(e);for(const r of t.elements)n=n.filter(s=>!Cn(s,r));return{arrayValue:{values:n}}}class lc extends Kc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ug(t){return nt(t.integerValue||t.doubleValue)}function jv(t){return $h(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof vo&&s instanceof vo||r instanceof Eo&&s instanceof Eo?ei(r.elements,s.elements,Cn):r instanceof lc&&s instanceof lc?Cn(r.Pe,s.Pe):r instanceof cc&&s instanceof cc}(t.transform,e.transform)}class dk{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gc{}function qv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Kh(t.key,dn.none()):new Bo(t.key,t.data,dn.none());{const n=t.data,r=Mt.empty();let s=new yt(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fr(t.key,r,new Gt(s.toArray()),dn.none())}}function fk(t,e,n){t instanceof Bo?function(s,i,o){const c=s.value.clone(),l=dg(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(s,i,o){if(!Na(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=dg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Hv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,r){return t instanceof Bo?function(i,o,c,l){if(!Na(i.precondition,o))return c;const u=i.value.clone(),h=fg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,o,c,l){if(!Na(i.precondition,o))return c;const u=fg(i.fieldTransforms,l,o),h=o.data;return h.setAll(Hv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Na(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function pk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Uv(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function hg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ei(r,s,(i,o)=>hk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends Gc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends Gc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dg(t,e,n){const r=new Map;Ke(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,uk(o,c,n[s]))}return r}function fg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,lk(i,o,e))}return r}class Kh extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gk extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class mk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=qv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&ei(this.mutations,e.mutations,(n,r)=>hg(n,r))&&ei(this.baseMutations,e.baseMutations,(n,r)=>hg(n,r))}}class Gh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ke(e.mutations.length===r.length);let s=function(){return sk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gh(e,n,r,s)}}/**
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
 */var tt,Re;function vk(t){switch(t){default:return _e();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Kv(t){if(t===void 0)return zn("GRPC error has no .code"),q.UNKNOWN;switch(t){case tt.OK:return q.OK;case tt.CANCELLED:return q.CANCELLED;case tt.UNKNOWN:return q.UNKNOWN;case tt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case tt.INTERNAL:return q.INTERNAL;case tt.UNAVAILABLE:return q.UNAVAILABLE;case tt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case tt.NOT_FOUND:return q.NOT_FOUND;case tt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case tt.ABORTED:return q.ABORTED;case tt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case tt.DATA_LOSS:return q.DATA_LOSS;default:return _e()}}(Re=tt||(tt={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Tk=new es([4294967295,4294967295],0);function pg(t){const e=Ek().encode(t),n=new fv;return n.update(e),new Uint8Array(n.digest())}function gg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class Wh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ui(`Invalid padding: ${n}`);if(r<0)throw new Ui(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ui(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ui(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(Tk)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pg(e),[r,s]=gg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Wh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=pg(e),[r,s]=gg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wc(ye.min(),s,new Ye(Me),Qn(),Ie())}}class $o{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $o(r,n,Ie(),Ie(),Ie())}}/**
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
 */class Va{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Gv{constructor(e,n){this.targetId=e,this.me=n}}class Wv{constructor(e,n,r=St.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mg{constructor(){this.fe=0,this.ge=yg(),this.pe=St.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:_e()}}),new $o(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=yg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ke(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=_g(),this.Qe=new Ye(Me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Pu(i))if(r===0){const o=new he(i.path);this.Ue(n,o,bt.newNoDocument(o,ye.min()))}else Ke(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=us(r).toUint8Array()}catch(l){if(l instanceof Iv)return Zs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wh(o,s,i)}catch(l){return Zs(l instanceof Ui?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Pu(c.target)){const l=new he(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,bt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Ie();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Wc(e,n,this.Qe,this.ke,r);return this.ke=Qn(),this.qe=_g(),this.Qe=new Ye(Me),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new mg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new yt(Me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ie("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _g(){return new Ye(he.comparator)}function yg(){return new Ye(he.comparator)}const Ik={asc:"ASCENDING",desc:"DESCENDING"},Ak={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bk={and:"AND",or:"OR"};class Rk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Du(t,e){return t.useProto3Json||jc(e)?e:{value:e}}function uc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sk(t,e){return uc(t,e.toTimestamp())}function bn(t){return Ke(!!t),ye.fromTimestamp(function(n){const r=Nr(n);return new ut(r.seconds,r.nanos)}(t))}function zh(t,e){return Nu(t,e).canonicalString()}function Nu(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qv(t){const e=We.fromString(t);return Ke(eE(e)),e}function Vu(t,e){return zh(t.databaseId,e.path)}function Bl(t,e){const n=Qv(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Jv(n))}function Yv(t,e){return zh(t.databaseId,e)}function Ck(t){const e=Qv(t);return e.length===4?We.emptyPath():Jv(e)}function Mu(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jv(t){return Ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vg(t,e,n){return{name:Vu(t,e),fields:n.value.mapValue.fields}}function Pk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Ke(h===void 0||typeof h=="string"),St.fromBase64String(h||"")):(Ke(h===void 0||h instanceof Buffer||h instanceof Uint8Array),St.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?q.UNKNOWN:Kv(u.code);return new ne(h,u.message||"")}(o);n=new Wv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bl(t,r.document.name),i=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ye.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Va(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bl(t,r.document),i=r.readTime?bn(r.readTime):ye.min(),o=bt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Va([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bl(t,r.document),i=r.removedTargetIds||[];n=new Va([],i,s,null)}else{if(!("filter"in e))return _e();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new yk(s,i),c=r.targetId;n=new Gv(c,o)}}return n}function kk(t,e){let n;if(e instanceof Bo)n={update:vg(t,e.key,e.value)};else if(e instanceof Kh)n={delete:Vu(t,e.key)};else if(e instanceof Fr)n={update:vg(t,e.key,e.data),updateMask:Uk(e.fieldMask)};else{if(!(e instanceof gk))return _e();n={verify:Vu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof cc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof lc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e()}(t,e.precondition)),n}function Ok(t,e){return t&&t.length>0?(Ke(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?bn(s.updateTime):bn(i);return o.isEqual(ye.min())&&(o=bn(i)),new dk(o,s.transformResults||[])}(n,e))):[]}function Dk(t,e){return{documents:[Yv(t,e.path)]}}function Nk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yv(t,s);const i=function(u){if(u.length!==0)return Zv(mn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Ps(g.field),direction:Lk(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Du(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function Vk(t){let e=Ck(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ke(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const g=Xv(p);return g instanceof mn&&Sv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new ac(ks(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,jc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,w=p.values||[];return new oc(w,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,w=p.values||[];return new oc(w,g)}(n.endAt)),Z1(e,s,o,i,c,"F",l,u)}function Mk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ks(n.unaryFilter.field);return rt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ks(n.unaryFilter.field);return rt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ks(n.unaryFilter.field);return rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ks(n.unaryFilter.field);return rt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(t):t.fieldFilter!==void 0?function(n){return rt.create(ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>Xv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return _e()}}(n.compositeFilter.op))}(t):_e()}function Lk(t){return Ik[t]}function xk(t){return Ak[t]}function Fk(t){return bk[t]}function Ps(t){return{fieldPath:t.canonicalString()}}function ks(t){return _t.fromServerFormat(t.fieldPath)}function Zv(t){return t instanceof rt?function(n){if(n.op==="=="){if(ig(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NAN"}};if(sg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ig(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NAN"}};if(sg(n.value))return{unaryFilter:{field:Ps(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ps(n.field),op:xk(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(s=>Zv(s));return r.length===1?r[0]:{compositeFilter:{op:Fk(n.op),filters:r}}}(t):_e()}function Uk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ir{constructor(e,n,r,s,i=ye.min(),o=ye.min(),c=St.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jk{constructor(){this._n=new qk}addToCollectionParentIndex(e,n){return this._n.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Dr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class qk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new yt(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new yt(We.comparator)).toArray()}}/**
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
 */class ri{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ri(0)}static Ln(){return new ri(-1)}}/**
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
 */class Hk{constructor(){this.changes=new hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Gk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zi(r.mutation,s,Gt.empty(),ut.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Fi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Qn();const o=Xi(),c=function(){return Xi()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Fr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Zi(h.mutation,u,h.mutation.getFieldMask(),ut.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var p;return c.set(u,new Kk(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Xi();let s=new Ye((o,c)=>o-c),i=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Gt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||Ie()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=Lv();h.forEach(g=>{if(!i.has(g)){const w=qv(n.get(g),r.get(g));w!==null&&p.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ov(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(Qr());let c=-1,l=i;return o.next(u=>K.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ie())).next(h=>({batchId:c,changes:Mv(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=Fi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Fi();return this.indexManager.getCollectionParents(e,i).next(c=>K.forEach(c,l=>{const u=function(p,g){return new Uo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let c=Fi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Zi(h.mutation,u,Gt.empty(),ut.now()),Hc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class Wk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return K.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:bn(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:$k(s.bundledQuery),readTime:bn(s.readTime)}}(n)),K.resolve()}}/**
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
 */class zk{constructor(){this.overlays=new Ye(he.comparator),this.hr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new he(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ye((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Qr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Qr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return K.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _k(n,r));let i=this.hr.get(n);i===void 0&&(i=Ie(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Qh{constructor(){this.Pr=new yt(ft.Ir),this.Tr=new yt(ft.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ft(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ft(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new he(new We([])),r=new ft(n,e),s=new ft(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new he(new We([])),r=new ft(n,e),s=new ft(n,e+1);let i=Ie();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ft(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return he.comparator(e.key,n.key)||Me(e.pr,n.pr)}static Er(e,n){return Me(e.pr,n.pr)||he.comparator(e.key,n.key)}}/**
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
 */class Qk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new yt(ft.Ir)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new ft(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new yt(Me);return n.forEach(s=>{const i=new ft(s,0),o=new ft(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),K.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new ft(new he(i),0);let c=new yt(Me);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),K.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ke(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return K.forEach(n.mutations,s=>{const i=new ft(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ft(n,0),s=this.wr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Yk{constructor(e){this.vr=e,this.docs=function(){return new Ye(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const o=n.path,c=new he(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||M1(V1(h),r)<=0||(s.has(h.key)||Hc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){_e()}Fr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Jk(this)}getSize(e){return K.resolve(this.size)}}class Jk extends Hk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Xk{constructor(e){this.persistence=e,this.Mr=new hi(n=>jh(n),qh),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Qh,this.targetCount=0,this.Lr=ri.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),K.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.qn(n),K.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Nr.containsKey(n))}}/**
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
 */class Zk{constructor(e,n){this.Br={},this.overlays={},this.kr=new Fh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Xk(this),this.indexManager=new jk,this.remoteDocumentCache=function(s){return new Yk(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Bk(n),this.$r=new Wk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Qk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){ie("MemoryPersistence","Starting transaction:",e);const s=new eO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class eO extends x1{constructor(e){super(),this.currentSequenceNumber=e}}class Yh{constructor(e){this.persistence=e,this.zr=new Qh,this.jr=null}static Hr(e){return new Yh(e)}get Jr(){if(this.jr)return this.jr;throw _e()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),K.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Jr,r=>{const s=he.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return K.or([()=>K.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Jh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ie(),s=Ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Jh(e,n.fromCache,r,s)}}/**
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
 */class nO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Kb()?8:F1(vt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new tO;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Di()<=be.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",Cs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),K.resolve()):(Di()<=be.DEBUG&&ie("QueryEngine","Query:",Cs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Di()<=be.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",Cs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):K.resolve())}ji(e,n){if(lg(n))return K.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ou(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ie(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Ou(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return lg(n)||s.isEqual(ye.min())?K.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?K.resolve(null):(Di()<=be.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cs(n)),this.es(e,o,n,N1(s,-1)).next(c=>c))})}Zi(e,n){let r=new yt(Nv(e));return n.forEach((s,i)=>{Hc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Di()<=be.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",Cs(n)),this.zi.getDocumentsMatchingQuery(e,n,Dr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class rO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Ye(Me),this.rs=new hi(i=>jh(i),qh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function sO(t,e,n,r){return new rO(t,e,n,r)}async function tE(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ie();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function iO(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,g=p.keys();let w=K.resolve();return g.forEach(C=>{w=w.next(()=>h.getEntry(l,C)).next(V=>{const D=u.docVersions.get(C);Ke(D!==null),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),h.addEntry(V)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nE(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function oO(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((h,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,p)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(St.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),s=s.insert(p,w),function(V,D,U){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(g,w,h)&&c.push(n.Qr.updateTargetData(i,w))});let l=Qn(),u=Ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(aO(i,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!r.isEqual(ye.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return K.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function aO(t,e,n){let r=Ie(),s=Ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Qn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ye.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):ie("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function cO(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lO(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Lu(t,e,n){const r=Ee(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fo(o))throw o;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Eg(t,e,n){const r=Ee(t);let s=ye.min(),i=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=Ee(l),g=p.rs.get(h);return g!==void 0?K.resolve(p.ns.get(g)):p.Qr.getTargetData(u,h)}(r,o,An(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:Ie())).next(c=>(uO(r,tk(e),c),{documents:c,hs:i})))}function uO(t,e,n){let r=t.ss.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Tg{constructor(){this.activeTargetIds=ak()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hO{constructor(){this.no=new Tg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Tg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ia=null;function $l(){return Ia===null?Ia=function(){return 268435456+Math.round(2147483648*Math.random())}():Ia++,"0x"+Ia.toString(16)}/**
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
 */const wt="WebChannelConnection";class gO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=$l(),l=this.vo(n,r.toUriEncodedString());ie("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(h=>(ie("RestConnection",`Received RPC '${n}' ${c}: `,h),h),h=>{throw Zs("RestConnection",`RPC '${n}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ui}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=fO[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=$l();return new Promise((o,c)=>{const l=new pv;l.setWithCredentials(!0),l.listenOnce(mv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Oa.NO_ERROR:const h=l.getResponseJson();ie(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Oa.TIMEOUT:ie(wt,`RPC '${e}' ${i} timed out`),c(new ne(q.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const p=l.getStatus();if(ie(wt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const C=function(D){const U=D.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(U)>=0?U:q.UNKNOWN}(w.status);c(new ne(C,w.message))}else c(new ne(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ne(q.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ie(wt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ie(wt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=$l(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vv(),c=yv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new gv({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");ie(wt,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,w=!1;const C=new pO({lo:D=>{w?ie(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(ie(wt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),ie(wt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},ho:()=>p.close()}),V=(D,U,O)=>{D.listen(U,S=>{try{O(S)}catch(k){setTimeout(()=>{throw k},0)}})};return V(p,xi.EventType.OPEN,()=>{w||(ie(wt,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),V(p,xi.EventType.CLOSE,()=>{w||(w=!0,ie(wt,`RPC '${e}' stream ${s} transport closed`),C.po())}),V(p,xi.EventType.ERROR,D=>{w||(w=!0,Zs(wt,`RPC '${e}' stream ${s} transport errored:`,D),C.po(new ne(q.UNAVAILABLE,"The operation could not be completed")))}),V(p,xi.EventType.MESSAGE,D=>{var U;if(!w){const O=D.data[0];Ke(!!O);const S=O,k=S.error||((U=S[0])===null||U===void 0?void 0:U.error);if(k){ie(wt,`RPC '${e}' stream ${s} received error:`,k);const x=k.status;let P=function(m){const y=tt[m];if(y!==void 0)return Kv(y)}(x),E=k.message;P===void 0&&(P=q.INTERNAL,E="Unknown error status: "+x+" with message "+k.message),w=!0,C.po(new ne(P,E)),p.close()}else ie(wt,`RPC '${e}' stream ${s} received:`,O),C.yo(O)}}),V(c,_v.STAT_EVENT,D=>{D.stat===bu.PROXY?ie(wt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===bu.NOPROXY&&ie(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function jl(){return typeof document<"u"?document:null}/**
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
 */class rE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&ie("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class sE{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new rE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(zn(n.toString()),zn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new ne(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mO extends sE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Pk(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?bn(o.readTime):ye.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Mu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Pu(l)?{documents:Dk(i,l)}:{query:Nk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zv(i,o.resumeToken);const u=Du(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){c.readTime=uc(i,o.snapshotVersion.toTimestamp());const u=Du(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Mk(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Mu(this.serializer),n.removeTarget=e,this.i_(n)}}class _O extends sE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Ok(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.A_(r,n)}return Ke(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Mu(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kk(this.serializer,r))};this.i_(n)}}/**
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
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(zn(n),this.y_=!1):ie("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class EO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{ys(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Ee(l);u.M_.add(4),await jo(u),u.N_.set("Unknown"),u.M_.delete(4),await Qc(u)}(this))})}),this.N_=new vO(r,s)}}async function Qc(t){if(ys(t))for(const e of t.x_)await e(!0)}async function jo(t){for(const e of t.x_)await e(!1)}function iE(t,e){const n=Ee(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),td(n)?ed(n):di(n).Xo()&&Zh(n,e))}function Xh(t,e){const n=Ee(t),r=di(n);n.F_.delete(e),r.Xo()&&oE(n,e),n.F_.size===0&&(r.Xo()?r.n_():ys(n)&&n.N_.set("Unknown"))}function Zh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}di(t).P_(e)}function oE(t,e){t.L_.xe(e),di(t).I_(e)}function ed(t){t.L_=new wk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),di(t).start(),t.N_.w_()}function td(t){return ys(t)&&!di(t).Zo()&&t.F_.size>0}function ys(t){return Ee(t).M_.size===0}function aE(t){t.L_=void 0}async function TO(t){t.N_.set("Online")}async function wO(t){t.F_.forEach((e,n)=>{Zh(t,e)})}async function IO(t,e){aE(t),td(t)?(t.N_.D_(e),ed(t)):t.N_.set("Unknown")}async function AO(t,e,n){if(t.N_.set("Online"),e instanceof Wv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hc(t,r)}else if(e instanceof Va?t.L_.Ke(e):e instanceof Gv?t.L_.He(e):t.L_.We(e),!n.isEqual(ye.min()))try{const r=await nE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.F_.get(u);h&&i.F_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.F_.get(l);if(!h)return;i.F_.set(l,h.withResumeToken(St.EMPTY_BYTE_STRING,h.snapshotVersion)),oE(i,l);const p=new Ir(h.target,l,u,h.sequenceNumber);Zh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){ie("RemoteStore","Failed to raise snapshot:",r),await hc(t,r)}}async function hc(t,e,n){if(!Fo(e))throw e;t.M_.add(1),await jo(t),t.N_.set("Offline"),n||(n=()=>nE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Qc(t)})}function cE(t,e){return e().catch(n=>hc(t,n,e))}async function Yc(t){const e=Ee(t),n=Vr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;bO(e);)try{const s=await cO(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,RO(e,s)}catch(s){await hc(e,s)}lE(e)&&uE(e)}function bO(t){return ys(t)&&t.v_.length<10}function RO(t,e){t.v_.push(e);const n=Vr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function lE(t){return ys(t)&&!Vr(t).Zo()&&t.v_.length>0}function uE(t){Vr(t).start()}async function SO(t){Vr(t).V_()}async function CO(t){const e=Vr(t);for(const n of t.v_)e.d_(n.mutations)}async function PO(t,e,n){const r=t.v_.shift(),s=Gh.from(r,e,n);await cE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Yc(t)}async function kO(t,e){e&&Vr(t).E_&&await async function(r,s){if(function(o){return vk(o)&&o!==q.ABORTED}(s.code)){const i=r.v_.shift();Vr(r).t_(),await cE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Yc(r)}}(t,e),lE(t)&&uE(t)}async function Ig(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const r=ys(n);n.M_.add(3),await jo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Qc(n)}async function OO(t,e){const n=Ee(t);e?(n.M_.delete(2),await Qc(n)):e||(n.M_.add(2),await jo(n),n.N_.set("Unknown"))}function di(t){return t.B_||(t.B_=function(n,r,s){const i=Ee(n);return i.f_(),new mO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:TO.bind(null,t),To:wO.bind(null,t),Ao:IO.bind(null,t),h_:AO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),td(t)?ed(t):t.N_.set("Unknown")):(await t.B_.stop(),aE(t))})),t.B_}function Vr(t){return t.k_||(t.k_=function(n,r,s){const i=Ee(n);return i.f_(),new _O(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:SO.bind(null,t),Ao:kO.bind(null,t),R_:CO.bind(null,t),A_:PO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Yc(t)):(await t.k_.stop(),t.v_.length>0&&(ie("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class nd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new nd(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rd(t,e){if(zn("AsyncQueue",`${e}: ${t}`),Fo(t))return new ne(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ks{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Fi(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new Ks(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ks)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ks;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ag{constructor(){this.q_=new Ye(he.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):_e():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new si(e,n,Ks.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class DO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class NO{constructor(){this.queries=new hi(e=>Dv(e),qc),this.onlineState="Unknown",this.z_=new Set}}async function hE(t,e){const n=Ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new DO,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=rd(o,`Initialization of query '${Cs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&sd(n)}async function dE(t,e){const n=Ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VO(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&sd(n)}function MO(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function sd(t){t.z_.forEach(e=>{e.next()})}var xu,bg;(bg=xu||(xu={})).J_="default",bg.Cache="cache";class fE{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==xu.Cache}}/**
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
 */class pE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class LO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ie(),this.mutatedKeys=Ie(),this.Ia=Nv(e),this.Ta=new Ks(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Ag,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const g=s.get(h),w=Hc(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),V=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let D=!1;g&&w?g.data.isEqual(w.data)?C!==V&&(r.track({type:3,doc:w}),D=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),D=!0,(l&&this.Ia(w,l)>0||u&&this.Ia(w,u)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),D=!0):g&&!w&&(r.track({type:1,doc:g}),D=!0,(l||u)&&(c=!0)),D&&(w?(o=o.add(w),i=V?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,p)=>function(w,C){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return V(w)-V(C)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new si(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ag,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ie(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new gE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new pE(r))}),n}pa(e){this.la=e.hs,this.Pa=Ie();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return si.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class xO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FO{constructor(e){this.key=e,this.wa=!1}}class UO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new hi(c=>Dv(c),qc),this.Da=new Map,this.Ca=new Set,this.va=new Ye(he.comparator),this.Fa=new Map,this.Ma=new Qh,this.xa={},this.Oa=new Map,this.Na=ri.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function BO(t,e,n=!0){const r=TE(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await mE(r,e,n,!0),s}async function $O(t,e){const n=TE(t);await mE(n,e,!0,!1)}async function mE(t,e,n,r){const s=await lO(t.localStore,An(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await jO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&iE(t.remoteStore,s),c}async function jO(t,e,n,r,s){t.Ba=(p,g,w)=>async function(V,D,U,O){let S=D.view.da(U);S.Xi&&(S=await Eg(V.localStore,D.query,!1).then(({documents:E})=>D.view.da(E,S)));const k=O&&O.targetChanges.get(D.targetId),x=O&&O.targetMismatches.get(D.targetId)!=null,P=D.view.applyChanges(S,V.isPrimaryClient,k,x);return Sg(V,D.targetId,P.fa),P.snapshot}(t,p,g,w);const i=await Eg(t.localStore,e,!0),o=new LO(e,i.hs),c=o.da(i.documents),l=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Sg(t,n,u.fa);const h=new xO(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function qO(t,e,n){const r=Ee(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!qc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Lu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xh(r.remoteStore,s.targetId),Fu(r,s.targetId)}).catch(xo)):(Fu(r,s.targetId),await Lu(r.localStore,s.targetId,!0))}async function HO(t,e){const n=Ee(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xh(n.remoteStore,r.targetId))}async function KO(t,e,n){const r=XO(t);try{const s=await function(o,c){const l=Ee(o),u=ut.now(),h=c.reduce((w,C)=>w.add(C.key),Ie());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=Qn(),V=Ie();return l.os.getEntries(w,h).next(D=>{C=D,C.forEach((U,O)=>{O.isValidDocument()||(V=V.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,C)).next(D=>{p=D;const U=[];for(const O of c){const S=pk(O,p.get(O.key).overlayedDocument);S!=null&&U.push(new Fr(O.key,S,Av(S.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,U,c)}).next(D=>{g=D;const U=D.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(w,D.batchId,U)})}).then(()=>({batchId:g.batchId,changes:Mv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Ye(Me)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await qo(r,s.changes),await Yc(r.remoteStore)}catch(s){const i=rd(s,"Failed to persist write");n.reject(i)}}async function _E(t,e){const n=Ee(t);try{const r=await oO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Ke(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Ke(o.wa):s.removedDocuments.size>0&&(Ke(o.wa),o.wa=!1))}),await qo(n,r,e)}catch(r){await xo(r)}}function Rg(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Ee(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const g of p.U_)g.j_(c)&&(u=!0)}),u&&sd(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GO(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Ye(he.comparator);o=o.insert(i,bt.newNoDocument(i,ye.min()));const c=Ie().add(i),l=new Wc(ye.min(),new Map,new Ye(Me),o,c);await _E(r,l),r.va=r.va.remove(i),r.Fa.delete(e),id(r)}else await Lu(r.localStore,e,!1).then(()=>Fu(r,e,n)).catch(xo)}async function WO(t,e){const n=Ee(t),r=e.batch.batchId;try{const s=await iO(n.localStore,e);vE(n,r,null),yE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qo(n,s)}catch(s){await xo(s)}}async function zO(t,e,n){const r=Ee(t);try{const s=await function(o,c){const l=Ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Ke(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);vE(r,e,n),yE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qo(r,s)}catch(s){await xo(s)}}function yE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function vE(t,e,n){const r=Ee(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Fu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||EE(t,r)})}function EE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Xh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),id(t))}function Sg(t,e,n){for(const r of n)r instanceof pE?(t.Ma.addReference(r.key,e),QO(t,r)):r instanceof gE?(ie("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||EE(t,r.key)):_e()}function QO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(ie("SyncEngine","New document in limbo: "+n),t.Ca.add(r),id(t))}function id(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new he(We.fromString(e)),r=t.Na.next();t.Fa.set(r,new FO(n)),t.va=t.va.insert(n,r),iE(t.remoteStore,new Ir(An(Hh(n.path)),r,"TargetPurposeLimboResolution",Fh.oe))}}async function qo(t,e,n){const r=Ee(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const h=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){s.push(u);const h=Jh.Ki(l.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const h=Ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(u,g=>K.forEach(g.qi,w=>h.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>K.forEach(g.Qi,w=>h.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!Fo(p))throw p;ie("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const w=h.ns.get(g),C=w.snapshotVersion,V=w.withLastLimboFreeSnapshotVersion(C);h.ns=h.ns.insert(g,V)}}}(r.localStore,i))}async function YO(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const r=await tE(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new ne(q.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qo(n,r.us)}}function JO(t,e){const n=Ee(t),r=n.Fa.get(e);if(r&&r.wa)return Ie().add(r.key);{let s=Ie();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function TE(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GO.bind(null,e),e.Sa.h_=VO.bind(null,e.eventManager),e.Sa.ka=MO.bind(null,e.eventManager),e}function XO(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zO.bind(null,e),e}class Cg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return sO(this.persistence,new nO,e.initialUser,this.serializer)}createPersistence(e){return new Zk(Yh.Hr,this.serializer)}createSharedClientState(e){return new hO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YO.bind(null,this.syncEngine),await OO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NO}()}createDatastore(e){const n=zc(e.databaseInfo.databaseId),r=function(i){return new gO(i)}(e.databaseInfo);return function(i,o,c,l){return new yO(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new EO(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Rg(this.syncEngine,n,0),function(){return wg.D()?new wg:new dO}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const p=new UO(s,i,o,c,l,u);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=Ee(r);ie("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await jo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class wE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):zn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class eD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=At.UNAUTHENTICATED,this.clientId=Tv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{ie("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(ie("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ql(t,e){t.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nD(t);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ig(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ig(e.remoteStore,s)),t._onlineComponents=e}function tD(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await ql(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tD(n))throw n;Zs("Error using user provided cache. Falling back to memory cache: "+n),await ql(t,new Cg)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await ql(t,new Cg);return t._offlineComponents}async function IE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await Pg(t,t._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await Pg(t,new ZO))),t._onlineComponents}function rD(t){return IE(t).then(e=>e.syncEngine)}async function AE(t){const e=await IE(t),n=e.eventManager;return n.onListen=BO.bind(null,e.syncEngine),n.onUnlisten=qO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$O.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HO.bind(null,e.syncEngine),n}function sD(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new wE({next:g=>{o.enqueueAndForget(()=>dE(i,p));const w=g.docs.has(c);!w&&g.fromCache?u.reject(new ne(q.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?u.reject(new ne(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new fE(Hh(c.path),h,{includeMetadataChanges:!0,ra:!0});return hE(i,p)}(await AE(t),t.asyncQueue,e,n,r)),r.promise}function iD(t,e,n={}){const r=new Kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new wE({next:g=>{o.enqueueAndForget(()=>dE(i,p)),g.fromCache&&l.source==="server"?u.reject(new ne(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new fE(c,h,{includeMetadataChanges:!0,ra:!0});return hE(i,p)}(await AE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const kg=new Map;/**
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
 */function RE(t,e,n){if(!n)throw new ne(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oD(t,e,n,r){if(e===!0&&r===!0)throw new ne(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Og(t){if(!he.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dg(t){if(he.isDocumentKey(t))throw new ne(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function Yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jc(t);throw new ne(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Ng{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ng({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ng(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new A1;switch(r.type){case"firstParty":return new C1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=kg.get(n);r&&(ie("ComponentProvider","Removing Datastore"),kg.delete(n),r.terminate())}(this),Promise.resolve()}}function aD(t,e,n,r={}){var s;const i=(t=Yn(t,Xc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Zs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=At.MOCK_USER;else{c=Bb(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ne(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new At(u)}t._authCredentials=new b1(new Ev(c,l))}}/**
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
 */class fi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class Sr extends fi{constructor(e,n,r){super(e,n,Hh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new he(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function cn(t,e,...n){if(t=it(t),RE("collection","path",e),t instanceof Xc){const r=We.fromString(e,...n);return Dg(r),new Sr(t,null,r)}{if(!(t instanceof Ut||t instanceof Sr))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Dg(r),new Sr(t.firestore,null,r)}}function Un(t,e,...n){if(t=it(t),arguments.length===1&&(e=Tv.newId()),RE("doc","path",e),t instanceof Xc){const r=We.fromString(e,...n);return Og(r),new Ut(t,null,new he(r))}{if(!(t instanceof Ut||t instanceof Sr))throw new ne(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return Og(r),new Ut(t.firestore,t instanceof Sr?t.converter:null,new he(r))}}/**
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
 */class cD{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new rE(this,"async_queue_retry"),this.hu=()=>{const n=jl();n&&ie("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=jl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Kn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Fo(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw zn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=nd.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&_e()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class pi extends Xc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new cD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||SE(this),this._firestoreClient.terminate()}}function lD(t,e){const n=typeof t=="object"?t:vh(),r=typeof t=="string"?t:"(default)",s=ms(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Fb("firestore");i&&aD(s,...i)}return s}function od(t){return t._firestoreClient||SE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function SE(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new $1(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,bE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new eD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(St.fromBase64String(e))}catch(n){throw new ne(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ad{constructor(e){this._methodName=e}}/**
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
 */class cd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */const uD=/^__.*__$/;class hD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class CE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return dc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(PE(this.fu)&&uD.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class dD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||zc(e)}Fu(e,n,r,s=!1){return new ld({fu:e,methodName:n,vu:r,path:_t.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ud(t){const e=t._freezeSettings(),n=zc(t._databaseId);return new dD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fD(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);hd("Data must be an object, but it was:",o,r);const c=kE(r,o);let l,u;if(i.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const g=Uu(e,p,n);if(!o.contains(g))throw new ne(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);DE(h,g)||h.push(g)}l=new Gt(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new hD(new Mt(c),l,u)}class el extends ad{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof el}}function pD(t,e,n,r){const s=t.Fu(1,e,n);hd("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();_s(r,(l,u)=>{const h=dd(e,l,n);u=it(u);const p=s.Su(h);if(u instanceof el)i.push(h);else{const g=Ho(u,p);g!=null&&(i.push(h),o.set(h,g))}});const c=new Gt(i);return new CE(o,c,s.fieldTransforms)}function gD(t,e,n,r,s,i){const o=t.Fu(1,e,n),c=[Uu(e,r,n)],l=[s];if(i.length%2!=0)throw new ne(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Uu(e,i[g])),l.push(i[g+1]);const u=[],h=Mt.empty();for(let g=c.length-1;g>=0;--g)if(!DE(u,c[g])){const w=c[g];let C=l[g];C=it(C);const V=o.Su(w);if(C instanceof el)u.push(w);else{const D=Ho(C,V);D!=null&&(u.push(w),h.set(w,D))}}const p=new Gt(u);return new CE(h,p,o.fieldTransforms)}function mD(t,e,n,r=!1){return Ho(n,t.Fu(r?4:3,e))}function Ho(t,e){if(OE(t=it(t)))return hd("Unsupported field value:",e,t),kE(t,e);if(t instanceof ad)return function(r,s){if(!PE(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ho(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ck(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ut.fromDate(r);return{timestampValue:uc(s.serializer,i)}}if(r instanceof ut){const i=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uc(s.serializer,i)}}if(r instanceof cd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ii)return{bytesValue:zv(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Jc(r)}`)}(t,e)}function kE(t,e){const n={};return wv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_s(t,(r,s)=>{const i=Ho(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function OE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof cd||t instanceof ii||t instanceof Ut||t instanceof ad)}function hd(t,e,n){if(!OE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Jc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Uu(t,e,n){if((e=it(e))instanceof Zc)return e._internalPath;if(typeof e=="string")return dd(t,e);throw dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const _D=new RegExp("[~\\*/\\[\\]]");function dd(t,e,n){if(e.search(_D)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zc(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function dc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ne(q.INVALID_ARGUMENT,c+t+l)}function DE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class NE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yD extends NE{data(){return super.data()}}function fd(t,e){return typeof e=="string"?dd(t,e):e instanceof Zc?e._internalPath:e._delegate._internalPath}/**
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
 */function vD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pd{}class ED extends pd{}function Bn(t,e,...n){let r=[];e instanceof pd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof gd).length,c=i.filter(l=>l instanceof tl).length;if(o>1||o>0&&c>0)throw new ne(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class tl extends ED{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new tl(e,n,r)}_apply(e){const n=this._parse(e);return VE(e._query,n),new fi(e.firestore,e.converter,ku(e._query,n))}_parse(e){const n=ud(e.firestore);return function(i,o,c,l,u,h,p){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new ne(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Mg(p,h);const w=[];for(const C of p)w.push(Vg(l,i,C));g={arrayValue:{values:w}}}else g=Vg(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Mg(p,h),g=mD(c,o,p,h==="in"||h==="not-in");return rt.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ot(t,e,n){const r=e,s=fd("where",t);return tl._create(s,r,n)}class gd extends pd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)VE(o,l),o=ku(o,l)}(e._query,n),new fi(e.firestore,e.converter,ku(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Vg(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new ne(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ov(e)&&n.indexOf("/")!==-1)throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(We.fromString(n));if(!he.isDocumentKey(r))throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return rg(t,new he(r))}if(n instanceof Ut)return rg(t,n._key);throw new ne(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jc(n)}.`)}function Mg(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VE(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TD{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _s(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new cd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(mo(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=We.fromString(e);Ke(eE(r));const s=new _o(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Bi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ME extends NE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ma extends ME{data(e={}){return super.data(e)}}class ID{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Bi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ma(this._firestore,this._userDataWriter,r.key,r,new Bi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ma(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ma(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Bi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:AD(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
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
 */function fc(t){t=Yn(t,Ut);const e=Yn(t.firestore,pi);return sD(od(e),t._key).then(n=>bD(e,t,n))}class LE extends TD{constructor(e){super(),this.firestore=e}convertBytes(e){return new ii(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function $n(t){t=Yn(t,fi);const e=Yn(t.firestore,pi),n=od(e),r=new LE(e);return vD(t._query),iD(n,t._query).then(s=>new ID(e,r,t,s))}function Bu(t,e,n,...r){t=Yn(t,Ut);const s=Yn(t.firestore,pi),i=ud(s);let o;return o=typeof(e=it(e))=="string"||e instanceof Zc?gD(i,"updateDoc",t._key,e,n,r):pD(i,"updateDoc",t._key,e),md(s,[o.toMutation(t._key,dn.exists(!0))])}function xE(t){return md(Yn(t.firestore,pi),[new Kh(t._key,dn.none())])}function $u(t,e){const n=Yn(t.firestore,pi),r=Un(t),s=wD(t.converter,e);return md(n,[fD(ud(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,dn.exists(!1))]).then(()=>r)}function md(t,e){return function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget(async()=>KO(await rD(r),s,i)),i.promise}(od(t),e)}function bD(t,e,n){const r=n.docs.get(e._key),s=new LE(t);return new ME(t,s,e._key,r,new Bi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ui=s})(ai),Sn(new gn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new pi(new R1(r.getProvider("auth-internal")),new k1(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _o(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),rn(Zp,"4.6.3",e),rn(Zp,"4.6.3","esm2017")})();const RD={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},nl=sy(RD);E1(nl);const eo=li(nl),at=lD(nl),SD=t=>(Jn("data-v-94b9d04c"),t=t(),Xn(),t),CD={class:"container"},PD={class:"loginWindow"},kD=SD(()=>M("h1",null,"WELCOME",-1)),OD={class:"buttonBox"},DD={__name:"Login",setup(t){function e(){uS(eo,o,c).then(l=>{i.push({name:"dashboard"}),je("success","Successfully logged in!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/invalid-credential).":je("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":je("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":je("error","Our servers are currently overloaded :(");break;default:je("error",l.message);break}})}function n(){cS(eo,o).then(()=>{je("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(l=>{l.message=="Firebase: Error (auth/missing-email)."&&je("error","Enter your email adress in the 'Email' field first!")})}function r(){Uy(eo,s).then(l=>{je("success","Successfully logged in!"),Vt.credentialFromResult(l).accessToken,l.user,i.push("/dashboard")}).catch(l=>{je("error",l.message),l.code,l.message,l.customData.email,Vt.credentialFromError(l)})}const s=new Vt,i=Oo();_h();let o,c="";return(l,u)=>(Te(),Pe("div",CD,[M("div",PD,[kD,wn(M("input",{type:"email",autocomplete:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=h=>Ze(o)?o.value=h:o=h)},null,512),[[un,st(o)]]),wn(M("input",{type:"password",autocomplete:"current-password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=h=>Ze(c)?c.value=h:c=h),onKeydown:u[2]||(u[2]=Oc(h=>e(),["enter"]))},null,544),[[un,st(c)]]),M("div",OD,[M("button",{class:"button_white",onClick:u[3]||(u[3]=h=>e())},"Login"),M("div",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=h=>r())},"Log in with Google")]),M("a",{onClick:u[5]||(u[5]=h=>n())},"Forgot password?")])]))}},ND=xr(DD,[["__scopeId","data-v-94b9d04c"]]),VD=t=>(Jn("data-v-01e98b37"),t=t(),Xn(),t),MD={class:"container"},LD={class:"loginWindow"},xD=VD(()=>M("h1",null,"CREATE ACCOUNT",-1)),FD={__name:"Register",setup(t){function e(){lS(eo,o,c).then(u=>{u.user,i.push("/FindCostudent"),je("success","Successfully registered!")}).catch(u=>{switch(u.message){case"Firebase: Error (auth/email-already-in-use).":je("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":je("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":je("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":je("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":je("error","Our servers are currently overloaded :(");break;default:je("error",u.message);break}})}function n(){i.push("/login")}function r(){Uy(eo,s).then(u=>{je("success","Successfully logged in!"),Vt.credentialFromResult(u).accessToken,u.user,i.push("/")}).catch(u=>{je("error",u.message),u.code,u.message,u.customData.email,Vt.credentialFromError(u)})}const s=new Vt,i=Oo();_h();let o,c,l="";return(u,h)=>(Te(),Pe("div",MD,[M("div",LD,[xD,wn(M("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":h[0]||(h[0]=p=>Ze(o)?o.value=p:o=p)},null,512),[[un,st(o)]]),wn(M("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":h[1]||(h[1]=p=>Ze(c)?c.value=p:c=p)},null,512),[[un,st(c)]]),wn(M("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":h[2]||(h[2]=p=>Ze(l)?l.value=p:l=p),onKeydown:h[3]||(h[3]=Oc(p=>e(),["enter"]))},null,544),[[un,st(l)]]),M("button",{class:"button_white",onClick:e},"Create account"),M("button",{id:"googleLogin",class:"button_white",onClick:h[4]||(h[4]=p=>r())},"Login with Google"),M("p",null,[Tn("Already have an account? "),M("a",{onClick:n},"Login here!")])])]))}},UD=xr(FD,[["__scopeId","data-v-01e98b37"]]),ot=t=>(Jn("data-v-5debb613"),t=t(),Xn(),t),BD={class:"container"},$D={class:"formBox"},jD={class:"progressBar"},qD={class:"phase"},HD={class:"phase"},KD={class:"phase"},GD={key:0,class:"entry"},WD={class:"itemBox"},zD=ot(()=>M("p",null,"Subject",-1)),QD=ot(()=>M("option",{value:"",disabled:""},"Select a subject",-1)),YD=["value"],JD={class:"itemBox"},XD=ot(()=>M("p",null,"Location",-1)),ZD=ot(()=>M("option",{value:"",disabled:""},"Select a location",-1)),eN=["value"],tN={class:"itemBox",id:"date"},nN=ot(()=>M("p",null,"Date",-1)),rN=["min","max"],sN={class:"itemBox",id:"time"},iN={key:1,class:"searching"},oN=ot(()=>M("p",null,"SEARCHING",-1)),aN=ot(()=>M("div",{class:"loader"},null,-1)),cN=[oN,aN],lN={key:2,class:"noneFound"},uN={class:"message"},hN=ot(()=>M("p",null,"No costudents were found yet to study ",-1)),dN={class:"button"},fN=ot(()=>M("p",null," in ",-1)),pN={class:"button"},gN=ot(()=>M("p",null," in the ",-1)),mN={class:"button"},_N=ot(()=>M("p",null," of the ",-1)),yN={class:"button"},vN=ot(()=>M("p",null,".",-1)),EN=ot(()=>M("div",{class:"finalMessage"},[M("p",null,"We'll keep on searching for other costudents."),M("p",null,"You can check in on the progress on your dashboard.")],-1)),TN={class:"buttonBox"},wN={key:3,class:"found"},IN=ot(()=>M("div",{class:"finalMessage"},[M("p",null,"We found costudents!")],-1)),AN={class:"message"},bN=ot(()=>M("p",null,"You can study ",-1)),RN={class:"button"},SN=ot(()=>M("p",null," in ",-1)),CN={class:"button"},PN=ot(()=>M("p",null," in the ",-1)),kN={class:"button"},ON=ot(()=>M("p",null," of the ",-1)),DN={class:"button"},NN=ot(()=>M("p",null," . ",-1)),VN={class:"groupDisplay"},MN=ot(()=>M("p",null,"Your group:",-1)),LN={class:"costudentNames"},xN={class:"buttonBox"},FN={id:"subjects"},UN=["value"],BN={id:"locations"},$N=["value"],jN={__name:"FindCostudent",setup(t){const e=ve=>new Promise(ue=>setTimeout(ue,ve));function n(){const ve=new Date;new Date().setDate(ve.getDate()+21);const fe=ve.getFullYear(),Ne=String(ve.getMonth()+1).padStart(2,"0"),Ve=String(ve.getDate()).padStart(2,"0");return`${fe}-${Ne}-${Ve}`}function r(){const ve=new Date,ue=new Date;ue.setDate(ve.getDate()+21);const fe=ue.getFullYear(),Ne=String(ue.getMonth()+1).padStart(2,"0"),Ve=String(ue.getDate()).padStart(2,"0");return`${fe}-${Ne}-${Ve}`}function s(ve){switch(m.value=!1,y.value=!1,I.value=!1,x.value=ve,ve){case"morning":m.value=!0,k.value=0;break;case"afternoon":y.value=!0,k.value=1;break;case"evening":I.value=!0,k.value=2;break}}async function i(){const ve=Bn(we,Ot("UID","==",A));return!(await $n(ve)).empty}async function o(){await i()?Z.value.includes(U.value)?le.value.includes(O.value)?S.value!=""?k.value!=-1?l():(je("error","Select a time of day!"),c()):(je("error","Select a date!"),c()):(je("error","Select a location from the list!"),c()):(je("error","Select a subject from the list!"),c()):je("error","Set your display name in the dashboard first!")}function c(){U.value="",O.value="",S.value=""}async function l(){D.value=1,await e(2500);const ve=Bn(T,Ot("SUBJ","==",U.value),Ot("LOCATION","==",O.value),Ot("DATE","==",S.value),Ot("TOD","==",k.value)),ue=await $n(ve);if(ue.empty)u();else{const fe=[];for(let Ve=0;Ve<ue.docs[0].data().MEMBERS.length;Ve++)fe.push(ue.docs[0].data().MEMBERS[Ve]);fe.push(A);const Ne=Un(at,"groups",ue.docs[0].id);await Bu(Ne,{MEMBERS:fe}),g(fe),D.value=3}}async function u(){const ve=Bn(ge,Ot("SUBJ","==",U.value),Ot("LOCATION","==",O.value),Ot("DATE","==",S.value),Ot("TOD","==",k.value)),ue=await $n(ve);ue.empty?(h(),D.value=2):p(ue.docs[0].data().UID,ue.docs[0].id)}async function h(){await $u(cn(at,"posts"),{SUBJ:U.value,LOCATION:O.value,DATE:S.value,UID:A,TOD:k.value,POSTDATE:E.value})}async function p(ve,ue){await xE(Un(at,"posts",ue));const fe=[A,ve];await $u(cn(at,"groups"),{DATE:S.value,LOCATION:O.value,MEMBERS:fe,SUBJ:U.value,TOD:k.value}),g(fe),D.value=3}async function g(ve){for(let ue=0;ue<ve.length;ue++){const fe=Bn(we,Ot("UID","==",ve[ue])),Ne=await $n(fe);te.value.push(Ne.docs[0].data().NAME)}}async function w(){const ve=Un(at,"dataLists","locationData"),ue=await fc(ve);le.value=ue.data().locations}async function C(){const ve=Un(at,"dataLists","subjectData"),ue=await fc(ve);Z.value=ue.data().subjects}const V=li(),D=qe(0),U=qe(""),O=qe(""),S=qe(""),k=qe(-1),x=qe("");let P=n(),E=qe(P),_=qe(r());const m=qe(!1),y=qe(!1),I=qe(!1),A=V.currentUser.uid,T=cn(at,"groups"),ge=cn(at,"posts"),we=cn(at,"users"),te=qe([]),le=qe([]),Z=qe([]);return w(),C(),(ve,ue)=>(Te(),Pe("div",BD,[M("div",$D,[M("div",jD,[M("div",qD,[M("p",{class:It({active:D.value===0})},"1",2),M("h3",{class:It({active:D.value===0})},"Enter data",2)]),M("div",{class:It(["line",{completed:D.value>=1}])},null,2),M("div",HD,[M("p",{class:It({active:D.value===1})},"2",2),M("h3",{class:It({active:D.value===1})},"Searching",2)]),M("div",{class:It(["line",{completed:D.value>=2}])},null,2),M("div",KD,[M("p",{class:It({active:D.value===2||D.value===3})},"3",2),M("h3",{class:It({active:D.value===2})},"Results",2)])]),D.value==0?(Te(),Pe("div",GD,[M("div",WD,[zD,wn(M("select",{"onUpdate:modelValue":ue[0]||(ue[0]=fe=>U.value=fe)},[QD,(Te(!0),Pe(He,null,Vn(Z.value,fe=>(Te(),Pe("option",{key:fe,value:fe},Xe(fe),9,YD))),128))],512),[[za,U.value]])]),M("div",JD,[XD,wn(M("select",{"onUpdate:modelValue":ue[1]||(ue[1]=fe=>O.value=fe)},[ZD,(Te(!0),Pe(He,null,Vn(le.value,fe=>(Te(),Pe("option",{key:fe,value:fe},Xe(fe),9,eN))),128))],512),[[za,O.value]])]),M("div",tN,[nN,wn(M("input",{type:"date",id:"date",min:st(E),max:st(_),"onUpdate:modelValue":ue[2]||(ue[2]=fe=>S.value=fe)},null,8,rN),[[un,S.value]])]),M("div",sN,[M("div",{class:It(["button",{selected:m.value}]),onClick:ue[3]||(ue[3]=fe=>s("morning"))}," Morning ",2),M("div",{class:It(["button",{selected:y.value}]),onClick:ue[4]||(ue[4]=fe=>s("afternoon"))}," Afternoon ",2),M("div",{class:It(["button",{selected:I.value}]),onClick:ue[5]||(ue[5]=fe=>s("evening"))}," Evening ",2)]),M("div",{id:"searchButton",class:"button",onClick:ue[6]||(ue[6]=fe=>o())}," Search ")])):en("",!0),D.value==1?(Te(),Pe("div",iN,cN)):en("",!0),D.value==2?(Te(),Pe("div",lN,[M("div",uN,[hN,M("div",dN,Xe(U.value),1),fN,M("div",pN,Xe(O.value),1),gN,M("div",mN,Xe(x.value),1),_N,M("div",yN,Xe(S.value),1),vN]),EN,M("div",TN,[De(st(gu),{to:"/dashboard",class:"button"},{default:Zt(()=>[Tn("Dashboard")]),_:1})])])):en("",!0),D.value==3?(Te(),Pe("div",wN,[IN,M("div",AN,[bN,M("div",RN,Xe(U.value),1),SN,M("div",CN,Xe(O.value),1),PN,M("div",kN,Xe(x.value),1),ON,M("div",DN,Xe(S.value),1),NN]),M("div",VN,[MN,M("div",LN,[(Te(!0),Pe(He,null,Vn(te.value,fe=>(Te(),Pe("div",{class:"button",key:te.value},[M("p",null,Xe(fe),1)]))),128))]),M("div",xN,[De(st(gu),{to:"/dashboard",class:"button"},{default:Zt(()=>[Tn("Dashboard")]),_:1})])])])):en("",!0)]),M("datalist",FN,[(Te(!0),Pe(He,null,Vn(Z.value,fe=>(Te(),Pe("option",{key:fe,value:fe},null,8,UN))),128))]),M("datalist",BN,[(Te(!0),Pe(He,null,Vn(le.value,fe=>(Te(),Pe("option",{key:fe,value:fe},null,8,$N))),128))])]))}},qN=xr(jN,[["__scopeId","data-v-5debb613"]]),Ko=t=>(Jn("data-v-dbfcd760"),t=t(),Xn(),t),HN={class:"container"},KN={class:"titleContainer"},GN=Ko(()=>M("div",{class:"title"},[M("h1",null,"DASHBOARD"),M("p",null,"Here you can find all your requested study sessions and groups that you're a part of.")],-1)),WN={class:"nameContainer"},zN={class:"fieldBox"},QN=Ko(()=>M("p",null,"Display name:",-1)),YN={class:"itemBox"},JN=Ko(()=>M("h1",null,"YOUR GROUPS",-1)),XN={class:"grid"},ZN={class:"groupBox"},eV={class:"groupTitle"},tV={class:"labels"},nV={class:"label"},rV={class:"label"},sV={class:"label"},iV={class:"label"},oV={class:"commandButtons"},aV=["onClick"],cV=["onClick"],lV={key:0,class:"noItems"},uV=Ko(()=>M("div",{class:"whiteSpace"},null,-1)),hV={class:"itemBox"},dV=Ko(()=>M("h1",null,"YOUR STUDY REQUESTS",-1)),fV={class:"grid"},pV={class:"postBox"},gV={class:"groupTitle"},mV={class:"labels"},_V={class:"label"},yV={class:"label"},vV={class:"label"},EV={class:"commandButtons"},TV=["onClick"],wV={key:0,class:"noItems"},IV={__name:"Dashboard",setup(t){async function e(){const P=Bn(D,Ot("MEMBERS","array-contains",w)),E=await $n(P);if(E.empty)console.log("No groups");else for(let _=0;_<E.docs.length;_++)n(E.docs[_].data(),E.docs[_].id)}function n(P,E){const _={ID:E,SUBJ:P.SUBJ,LOCATION:P.LOCATION,TOD:P.TOD,DATE:P.DATE,MEMBERS:P.MEMBERS};S.value.push(_)}async function r(P){S.value=S.value.filter(E=>E.ID!=P),s(P)}async function s(P){const E=Un(at,"groups",P);let m=(await fc(E)).data().MEMBERS;m=m.filter(y=>y!==w),await Bu(E,{MEMBERS:m})}function i(P){switch(P){case 0:return"Morning";case 1:return"Afternoon";case 2:return"Evening"}}async function o(){const P=Bn(U,Ot("UID","==",w)),E=await $n(P);if(E.empty)console.log("No posts");else for(let _=0;_<E.docs.length;_++)c(E.docs[_].data(),E.docs[_].id)}function c(P,E){const _={ID:E,SUBJ:P.SUBJ,LOCATION:P.LOCATION,TOD:P.TOD,DATE:P.DATE};k.value.push(_)}async function l(P){k.value=k.value.filter(E=>E.ID!=P),await xE(Un(at,"posts",P))}async function u(){const P=Bn(O,Ot("UID","==",w)),E=await $n(P);E.empty?V=0:(C.value=E.docs[0].data().NAME,V=1)}async function h(){if(V==0)await $u(cn(at,"users"),{UID:w,NAME:C.value}),je("success","Successfully set your username!");else{const P=Bn(O,Ot("UID","==",w)),E=await $n(P),_=Un(at,"users",E.docs[0].id);await Bu(_,{NAME:C.value}),u(),je("success","Successfully updated your username!")}}function p(P,E){const _=E.replace(/\s+/g,"-")+"-"+P.substring(0,6),m=C.value;x.push({name:"group-chat",params:{channel:_},query:{chatName:m,ID:P}})}const w=li().currentUser.uid,C=qe("");let V=0;const D=cn(at,"groups"),U=cn(at,"posts"),O=cn(at,"users"),S=qe([]),k=qe([]),x=Oo();return e(),o(),u(),(P,E)=>(Te(),Pe("div",HN,[M("div",KN,[GN,M("div",WN,[M("div",zN,[QN,wn(M("input",{type:"text","onUpdate:modelValue":E[0]||(E[0]=_=>C.value=_),onKeydown:E[1]||(E[1]=Oc(_=>h(),["enter"]))},null,544),[[un,C.value]])]),M("div",{class:"button",onClick:E[2]||(E[2]=_=>h())}," Change ")])]),M("div",YN,[JN,M("div",XN,[(Te(!0),Pe(He,null,Vn(S.value,_=>(Te(),Pe("div",{class:"itemsContainer",key:_.ID},[M("div",ZN,[M("div",eV,Xe(_.SUBJ),1),M("div",tV,[M("div",nV,Xe(_.DATE),1),M("div",rV,Xe(_.LOCATION),1),M("div",sV,Xe(i(_.TOD)),1),M("div",iV,Xe(_.MEMBERS.length)+" students ",1)]),M("div",oV,[M("div",{class:"button_white",onClick:m=>p(_.ID,_.SUBJ)}," Chat ",8,aV),M("div",{class:"button_white",onClick:m=>r(_.ID)}," Quit ",8,cV)])])]))),128))]),S.value.length==0?(Te(),Pe("div",lV," You're currently not part of any groups. ")):en("",!0)]),uV,M("div",hV,[dV,M("div",fV,[(Te(!0),Pe(He,null,Vn(k.value,_=>(Te(),Pe("div",{class:"itemsContainer",key:_.ID},[M("div",pV,[M("div",gV,Xe(_.SUBJ),1),M("div",mV,[M("div",_V,Xe(_.DATE),1),M("div",yV,Xe(_.LOCATION),1),M("div",vV,Xe(i(_.TOD)),1)]),M("div",EV,[M("div",{class:"button_white",onClick:m=>l(_.ID)}," Remove ",8,TV)])])]))),128))]),k.value.length==0?(Te(),Pe("div",wV," You currently have no study requests. ")):en("",!0)])]))}},AV=xr(IV,[["__scopeId","data-v-dbfcd760"]]),FE=t=>(Jn("data-v-b0dcf7cd"),t=t(),Xn(),t),bV={class:"frame"},RV=["data-channel","data-nickname"],SV={class:"infoBox"},CV=FE(()=>M("div",{class:"textBox"},[M("h2",null,"Rules:"),M("ol",null,[M("li",null,"Be respectful."),M("li",null,"Don't share personal information."),M("li",null,"Meet in a public place."),M("li",null,"Stay on topic"),M("li",null,"No Harassment or Discrimination")])],-1)),PV={class:"groupDisplay"},kV=FE(()=>M("p",null,"In this group:",-1)),OV={class:"costudentNames"},DV={__name:"GroupChat",setup(t){const e=_h(),n=e.params.channel,r=e.query.chatName,s=e.query.ID,i=qe([]),o=qe([]);cn(at,"groups");const c=cn(at,"users");ps(()=>{const h=document.getElementById("tlkio"),p=h.getAttribute("data-env")||"production",g=h.getAttribute("data-theme"),w=h.getAttribute("data-custom-css"),C=h.getAttribute("data-nickname"),V=document.createElement("iframe");let D=`https://embed.tlk.io/${n}`;const U=[];p==="dev"&&(D=`https://embed.lvh.me:3000/${n}`),w&&w.length&&U.push(`custom_css_path=${w}`),C&&C.length&&U.push(`nickname=${C}`),g&&g.length&&U.push(`theme=${g}`),U.length&&(D+=`?${U.join("&")}`),V.setAttribute("src",D),V.setAttribute("width","100%"),V.setAttribute("height","100%"),V.setAttribute("frameborder","0"),V.setAttribute("style","margin-bottom: -8px;");const O=h.getAttribute("style");h.setAttribute("style",`overflow: auto; -webkit-overflow-scrolling: touch; ${O}`),h.textContent="",h.appendChild(V);const S=document.createElement("style");S.textContent=`
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
    `;const k=document.createElement("img");k.src="https://www.tlk.io/images/logo.png",k.className="tlkio-pulse",window.getComputedStyle(h).position==="static"&&(h.style.position="relative"),h.appendChild(S),h.appendChild(k),setTimeout(()=>{h.removeChild(k),h.removeChild(S)},3e3)});async function l(h){const p=Un(at,"groups",h),g=await fc(p);i.value=g.data().MEMBERS,u(i.value)}async function u(h){for(let p=0;p<h.length;p++){const g=Bn(c,Ot("UID","==",h[p])),w=await $n(g);o.value.push(w.docs[0].data().NAME)}}return l(s),(h,p)=>(Te(),Pe("div",bV,[M("div",{id:"tlkio","data-channel":st(n),"data-theme":"theme--minimal","data-nickname":st(r)},null,8,RV),M("div",SV,[CV,M("div",PV,[kV,M("div",OV,[(Te(!0),Pe(He,null,Vn(o.value,g=>(Te(),Pe("div",{class:"name",key:o.value},[M("p",null,Xe(g),1)]))),128))])])])]))}},NV=xr(DV,[["__scopeId","data-v-b0dcf7cd"]]),UE=Pb({history:ib("/costudent-demo/"),routes:[{path:"/",name:"home",component:nP},{path:"/findcostudent",name:"findcostudent",component:qN,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:ND},{path:"/register",name:"register",component:UD},{path:"/dashboard",name:"dashboard",component:AV,meta:{requiresAuth:!0}},{path:"/group-chat/:channel",name:"group-chat",component:NV,meta:{requiresAuth:!0}}]});let Lg=!1,Hl=!1;UE.beforeEach((t,e,n)=>{const r=li(),s=t.matched.some(i=>i.meta.requiresAuth);Lg?s&&!Hl?(alert("No access! You need to be logged in."),n("/login")):n():Cy(r,i=>{Hl=!!i,Lg=!0,s&&!Hl?(alert("No access! You need to be logged in."),n("/login")):n()})});const rl=O_(KC);rl.config.globalProperties.$firebase=nl;rl.use(UE);rl.use(PC,{position:"bottom-right",duration:5e3,pauseOnHover:!0});rl.mount("#app");
