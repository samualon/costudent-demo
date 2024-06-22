(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Gs(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const ue={},Fn=[],De=()=>{},Xd=()=>!1,Vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),So=e=>e.startsWith("onUpdate:"),pe=Object.assign,Co=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Qd=Object.prototype.hasOwnProperty,se=(e,t)=>Qd.call(e,t),W=Array.isArray,Un=e=>ir(e)==="[object Map]",Cn=e=>ir(e)==="[object Set]",Ca=e=>ir(e)==="[object Date]",Zd=e=>ir(e)==="[object RegExp]",X=e=>typeof e=="function",me=e=>typeof e=="string",At=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Ao=e=>(fe(e)||X(e))&&X(e.then)&&X(e.catch),ml=Object.prototype.toString,ir=e=>ml.call(e),eh=e=>ir(e).slice(8,-1),_l=e=>ir(e)==="[object Object]",Ro=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$n=Gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},th=/-(\w)/g,Oe=zs(e=>e.replace(th,(t,n)=>n?n.toUpperCase():"")),nh=/\B([A-Z])/g,je=zs(e=>e.replace(nh,"-$1").toLowerCase()),jr=zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),vr=zs(e=>e?`on${jr(e)}`:""),rt=(e,t)=>!Object.is(e,t),Bn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},yl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},As=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let Aa;const vl=()=>Aa||(Aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),rh="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",sh=Gs(rh);function Wr(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=me(r)?ch(r):Wr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(me(e)||fe(e))return e}const ih=/;(?![^(]*\))/g,oh=/:([^]+)/,ah=/\/\*[^]*?\*\//g;function ch(e){const t={};return e.replace(ah,"").split(ih).forEach(n=>{if(n){const r=n.split(oh);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Jt(e){let t="";if(me(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Jt(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function lh(e){if(!e)return null;let{class:t,style:n}=e;return t&&!me(t)&&(e.class=Jt(t)),n&&(e.style=Wr(n)),e}const uh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fh=Gs(uh);function bl(e){return!!e||e===""}function dh(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Zt(e[r],t[r]);return n}function Zt(e,t){if(e===t)return!0;let n=Ca(e),r=Ca(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=At(e),r=At(t),n||r)return e===t;if(n=W(e),r=W(t),n||r)return n&&r?dh(e,t):!1;if(n=fe(e),r=fe(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Zt(e[o],t[o]))return!1}}return String(e)===String(t)}function Js(e,t){return e.findIndex(n=>Zt(n,t))}const hh=e=>me(e)?e:e==null?"":W(e)||fe(e)&&(e.toString===ml||!X(e.toString))?JSON.stringify(e,wl,2):String(e),wl=(e,t)=>t&&t.__v_isRef?wl(e,t.value):Un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[wi(r,i)+" =>"]=s,n),{})}:Cn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wi(n))}:At(t)?wi(t):fe(t)&&!W(t)&&!_l(t)?String(t):t,wi=(e,t="")=>{var n;return At(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class Po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Be,!t&&Be&&(this.index=(Be.scopes||(Be.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Be;try{return Be=this,t()}finally{Be=n}}}on(){Be=this}off(){Be=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ph(e){return new Po(e)}function El(e,t=Be){t&&t.active&&t.effects.push(e)}function Il(){return Be}function gh(e){Be&&Be.cleanups.push(e)}let dn;class Qn{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,El(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,rn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(mh(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),sn()}return this._dirtyLevel>=5}set dirty(t){this._dirtyLevel=t?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Yt,n=dn;try{return Yt=!0,dn=this,this._runnings++,Ra(this),this.fn()}finally{Pa(this),this._runnings--,dn=n,Yt=t}}stop(){this.active&&(Ra(this),Pa(this),this.onStop&&this.onStop(),this.active=!1)}}function mh(e){return e.value}function Ra(e){e._trackId++,e._depsLength=0}function Pa(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Tl(e.deps[t],e);e.deps.length=e._depsLength}}function Tl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}function _h(e,t){e.effect instanceof Qn&&(e=e.effect.fn);const n=new Qn(e,De,()=>{n.dirty&&n.run()});t&&(pe(n,t),t.scope&&El(n,t.scope)),(!t||!t.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function yh(e){e.effect.stop()}let Yt=!0,Wi=0;const Sl=[];function rn(){Sl.push(Yt),Yt=!1}function sn(){const e=Sl.pop();Yt=e===void 0?!0:e}function Oo(){Wi++}function ko(){for(Wi--;!Wi&&Ki.length;)Ki.shift()()}function Cl(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Tl(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ki=[];function Al(e,t,n){Oo();for(const r of e.keys()){if(!e.computed&&r.computed&&e.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Ki.push(r.scheduler)))}ko()}const Rl=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Rs=new WeakMap,hn=Symbol(""),qi=Symbol("");function Ue(e,t,n){if(Yt&&dn){let r=Rs.get(e);r||Rs.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Rl(()=>r.delete(n))),Cl(dn,s)}}function It(e,t,n,r,s,i){const o=Rs.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&W(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!At(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":W(e)?Ro(n)&&a.push(o.get("length")):(a.push(o.get(hn)),Un(e)&&a.push(o.get(qi)));break;case"delete":W(e)||(a.push(o.get(hn)),Un(e)&&a.push(o.get(qi)));break;case"set":Un(e)&&a.push(o.get(hn));break}Oo();for(const c of a)c&&Al(c,5);ko()}function vh(e,t){const n=Rs.get(e);return n&&n.get(t)}const bh=Gs("__proto__,__v_isRef,__isVue"),Pl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(At)),Oa=wh();function wh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)Ue(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){rn(),Oo();const r=re(this)[t].apply(this,n);return ko(),sn(),r}}),e}function Eh(e){At(e)||(e=String(e));const t=re(this);return Ue(t,"has",e),t.hasOwnProperty(e)}class Ol{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?xl:Dl:i?Ml:Ll).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){if(o&&se(Oa,n))return Reflect.get(Oa,n,r);if(n==="hasOwnProperty")return Eh}const a=Reflect.get(t,n,r);return(At(n)?Pl.has(n):bh(n))||(s||Ue(t,"get",n),i)?a:_e(a)?o&&Ro(n)?a:a.value:fe(a)?s?Mo(a):Kr(a):a}}class kl extends Ol{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Zn(i);if(!Pr(r)&&!Zn(r)&&(i=re(i),r=re(r)),!W(t)&&_e(i)&&!_e(r))return c?!1:(i.value=r,!0)}const o=W(t)&&Ro(n)?Number(n)<t.length:se(t,n),a=Reflect.set(t,n,r,s);return t===re(s)&&(o?rt(r,i)&&It(t,"set",n,r):It(t,"add",n,r)),a}deleteProperty(t,n){const r=se(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&It(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!At(n)||!Pl.has(n))&&Ue(t,"has",n),r}ownKeys(t){return Ue(t,"iterate",W(t)?"length":hn),Reflect.ownKeys(t)}}class Nl extends Ol{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ih=new kl,Th=new Nl,Sh=new kl(!0),Ch=new Nl(!0),No=e=>e,Ys=e=>Reflect.getPrototypeOf(e);function is(e,t,n=!1,r=!1){e=e.__v_raw;const s=re(e),i=re(t);n||(rt(t,i)&&Ue(s,"get",t),Ue(s,"get",i));const{has:o}=Ys(s),a=r?No:n?xo:Or;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function os(e,t=!1){const n=this.__v_raw,r=re(n),s=re(e);return t||(rt(e,s)&&Ue(r,"has",e),Ue(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function as(e,t=!1){return e=e.__v_raw,!t&&Ue(re(e),"iterate",hn),Reflect.get(e,"size",e)}function ka(e){e=re(e);const t=re(this);return Ys(t).has.call(t,e)||(t.add(e),It(t,"add",e,e)),this}function Na(e,t){t=re(t);const n=re(this),{has:r,get:s}=Ys(n);let i=r.call(n,e);i||(e=re(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?rt(t,o)&&It(n,"set",e,t):It(n,"add",e,t),this}function La(e){const t=re(this),{has:n,get:r}=Ys(t);let s=n.call(t,e);s||(e=re(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&It(t,"delete",e,void 0),i}function Ma(){const e=re(this),t=e.size!==0,n=e.clear();return t&&It(e,"clear",void 0,void 0),n}function cs(e,t){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=t?No:e?xo:Or;return!e&&Ue(a,"iterate",hn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ls(e,t,n){return function(...r){const s=this.__v_raw,i=re(s),o=Un(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?No:t?xo:Or;return!t&&Ue(i,"iterate",c?qi:hn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function xt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ah(){const e={get(i){return is(this,i)},get size(){return as(this)},has:os,add:ka,set:Na,delete:La,clear:Ma,forEach:cs(!1,!1)},t={get(i){return is(this,i,!1,!0)},get size(){return as(this)},has:os,add:ka,set:Na,delete:La,clear:Ma,forEach:cs(!1,!0)},n={get(i){return is(this,i,!0)},get size(){return as(this,!0)},has(i){return os.call(this,i,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:cs(!0,!1)},r={get(i){return is(this,i,!0,!0)},get size(){return as(this,!0)},has(i){return os.call(this,i,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ls(i,!1,!1),n[i]=ls(i,!0,!1),t[i]=ls(i,!1,!0),r[i]=ls(i,!0,!0)}),[e,n,t,r]}const[Rh,Ph,Oh,kh]=Ah();function Xs(e,t){const n=t?e?kh:Oh:e?Ph:Rh;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const Nh={get:Xs(!1,!1)},Lh={get:Xs(!1,!0)},Mh={get:Xs(!0,!1)},Dh={get:Xs(!0,!0)},Ll=new WeakMap,Ml=new WeakMap,Dl=new WeakMap,xl=new WeakMap;function xh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fh(e){return e.__v_skip||!Object.isExtensible(e)?0:xh(eh(e))}function Kr(e){return Zn(e)?e:Qs(e,!1,Ih,Nh,Ll)}function Lo(e){return Qs(e,!1,Sh,Lh,Ml)}function Mo(e){return Qs(e,!0,Th,Mh,Dl)}function Uh(e){return Qs(e,!0,Ch,Dh,xl)}function Qs(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Fh(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Hn(e){return Zn(e)?Hn(e.__v_raw):!!(e&&e.__v_isReactive)}function Zn(e){return!!(e&&e.__v_isReadonly)}function Pr(e){return!!(e&&e.__v_isShallow)}function Do(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Fl(e){return Object.isExtensible(e)&&yl(e,"__v_skip",!0),e}const Or=e=>fe(e)?Kr(e):e,xo=e=>fe(e)?Mo(e):e;class Ul{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qn(()=>t(this._value),()=>Vn(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=re(this);return(!t._cacheable||t.effect.dirty)&&rt(t._value,t._value=t.effect.run())&&Vn(t,5),Fo(t),t.effect._dirtyLevel>=2&&Vn(t,3),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function $h(e,t,n=!1){let r,s;const i=X(e);return i?(r=e,s=De):(r=e.get,s=e.set),new Ul(r,s,i||!s,n)}function Fo(e){var t;Yt&&dn&&(e=re(e),Cl(dn,(t=e.dep)!=null?t:e.dep=Rl(()=>e.dep=void 0,e instanceof Ul?e:void 0)))}function Vn(e,t=5,n,r){e=re(e);const s=e.dep;s&&Al(s,t)}function _e(e){return!!(e&&e.__v_isRef===!0)}function He(e){return Bl(e,!1)}function $l(e){return Bl(e,!0)}function Bl(e,t){return _e(e)?e:new Bh(e,t)}class Bh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:re(t),this._value=n?t:Or(t)}get value(){return Fo(this),this._value}set value(t){const n=this.__v_isShallow||Pr(t)||Zn(t);t=n?t:re(t),rt(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Or(t),Vn(this,5))}}function Hh(e){Vn(e,5)}function ke(e){return _e(e)?e.value:e}function Vh(e){return X(e)?e():ke(e)}const jh={get:(e,t,n)=>ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return _e(s)&&!_e(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Uo(e){return Hn(e)?e:new Proxy(e,jh)}class Wh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Fo(this),()=>Vn(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Hl(e){return new Wh(e)}function Kh(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=Vl(e,n);return t}class qh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return vh(re(this._object),this._key)}}class Gh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function zh(e,t,n){return _e(e)?e:X(e)?new Gh(e):fe(e)&&arguments.length>1?Vl(e,t,n):He(e)}function Vl(e,t,n){const r=e[t];return _e(r)?r:new qh(e,t,n)}const Jh={GET:"get",HAS:"has",ITERATE:"iterate"},Yh={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xh(e,t){}const Qh={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Zh={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Tt(e,t,n,r){try{return r?e(...r):e()}catch(s){An(s,t,n)}}function Ke(e,t,n,r){if(X(e)){const s=Tt(e,t,n,r);return s&&Ao(s)&&s.catch(i=>{An(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ke(e[i],t,n,r));return s}}function An(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){rn(),Tt(c,null,10,[e,o,a]),sn();return}}ep(e,n,s,r)}function ep(e,t,n,r=!0){console.error(e)}let kr=!1,Gi=!1;const Ae=[];let lt=0;const jn=[];let Ht=null,ln=0;const jl=Promise.resolve();let $o=null;function qr(e){const t=$o||jl;return e?t.then(this?e.bind(this):e):t}function tp(e){let t=lt+1,n=Ae.length;for(;t<n;){const r=t+n>>>1,s=Ae[r],i=Nr(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function Zs(e){(!Ae.length||!Ae.includes(e,kr&&e.allowRecurse?lt+1:lt))&&(e.id==null?Ae.push(e):Ae.splice(tp(e.id),0,e),Wl())}function Wl(){!kr&&!Gi&&(Gi=!0,$o=jl.then(Kl))}function np(e){const t=Ae.indexOf(e);t>lt&&Ae.splice(t,1)}function Ps(e){W(e)?jn.push(...e):(!Ht||!Ht.includes(e,e.allowRecurse?ln+1:ln))&&jn.push(e),Wl()}function Da(e,t,n=kr?lt+1:0){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ae.splice(n,1),n--,r()}}}function Os(e){if(jn.length){const t=[...new Set(jn)].sort((n,r)=>Nr(n)-Nr(r));if(jn.length=0,Ht){Ht.push(...t);return}for(Ht=t,ln=0;ln<Ht.length;ln++){const n=Ht[ln];n.active!==!1&&n()}Ht=null,ln=0}}const Nr=e=>e.id==null?1/0:e.id,rp=(e,t)=>{const n=Nr(e)-Nr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Kl(e){Gi=!1,kr=!0,Ae.sort(rp);try{for(lt=0;lt<Ae.length;lt++){const t=Ae[lt];t&&t.active!==!1&&Tt(t,null,14)}}finally{lt=0,Ae.length=0,Os(),kr=!1,$o=null,(Ae.length||jn.length)&&Kl()}}let Dn,us=[];function ql(e,t){var n,r;Dn=e,Dn?(Dn.enabled=!0,us.forEach(({event:s,args:i})=>Dn.emit(s,...i)),us=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{ql(i,t)}),setTimeout(()=>{Dn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,us=[])},3e3)):us=[]}function sp(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||ue;d&&(s=n.map(m=>me(m)?m.trim():m)),f&&(s=n.map(Cs))}let a,c=r[a=vr(t)]||r[a=vr(Oe(t))];!c&&i&&(c=r[a=vr(je(t))]),c&&Ke(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ke(l,e,6,s)}}function Gl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!X(e)){const c=l=>{const u=Gl(l,t,!0);u&&(a=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(fe(e)&&r.set(e,null),null):(W(i)?i.forEach(c=>o[c]=null):pe(o,i),fe(e)&&r.set(e,o),o)}function ei(e,t){return!e||!Vr(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,je(t))||se(e,t))}let Ee=null,ti=null;function Lr(e){const t=Ee;return Ee=e,ti=e&&e.type.__scopeId||null,t}function Rn(e){ti=e}function Pn(){ti=null}const ip=e=>vt;function vt(e,t=Ee,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ro(-1);const i=Lr(t);let o;try{o=e(...s)}finally{Lr(i),r._d&&ro(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function vs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:v,inheritAttrs:k}=e,U=Lr(e);let D,E;try{if(n.shapeFlag&4){const y=s||r,T=y;D=Ve(l.call(T,y,u,f,m,d,v)),E=a}else{const y=t;D=Ve(y.length>1?y(f,{attrs:a,slots:o,emit:c}):y(f,null)),E=t.props?a:ap(a)}}catch(y){Er.length=0,An(y,e,1),D=ce(Se)}let g=D;if(E&&k!==!1){const y=Object.keys(E),{shapeFlag:T}=g;y.length&&T&7&&(i&&y.some(So)&&(E=cp(E,i)),g=dt(g,E,!1,!0))}return n.dirs&&(g=dt(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),D=g,Lr(U),D}function op(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(tn(s)){if(s.type!==Se||s.children==="v-if"){if(n)return;n=s}}else return}return n}const ap=e=>{let t;for(const n in e)(n==="class"||n==="style"||Vr(n))&&((t||(t={}))[n]=e[n]);return t},cp=(e,t)=>{const n={};for(const r in e)(!So(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function lp(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xa(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!ei(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xa(r,o,l):!0:!!o;return!1}function xa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!ei(n,i))return!0}return!1}function Bo({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ho="components",up="directives";function zl(e,t){return Vo(Ho,e,!0,t)||e}const Jl=Symbol.for("v-ndc");function Yl(e){return me(e)?Vo(Ho,e,!1)||e:e||Jl}function fp(e){return Vo(up,e)}function Vo(e,t,n=!0,r=!1){const s=Ee||we;if(s){const i=s.type;if(e===Ho){const a=co(i,!1);if(a&&(a===t||a===Oe(t)||a===jr(Oe(t))))return i}const o=Fa(s[e]||i[e],t)||Fa(s.appContext[e],t);return!o&&r?i:o}}function Fa(e,t){return e&&(e[t]||e[Oe(t)]||e[jr(Oe(t))])}const zi=e=>e.__isSuspense;let Ji=0;const dp={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,a,c,l){if(e==null)pp(t,n,r,s,i,o,a,c,l);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}gp(e,t,n,r,s,o,a,c,l)}},hydrate:mp,create:jo,normalize:_p},hp=dp;function Mr(e,t){const n=e.props&&e.props[t];X(n)&&n()}function pp(e,t,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),d=e.suspense=jo(e,s,r,t,f,n,i,o,a,c);l(null,d.pendingBranch=e.ssContent,f,null,r,d,i,o),d.deps>0?(Mr(e,"onPending"),Mr(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,i,o),Wn(d,e.ssFallback)):d.resolve(!1,!0)}function gp(e,t,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const d=t.ssContent,m=t.ssFallback,{activeBranch:v,pendingBranch:k,isInFallback:U,isHydrating:D}=f;if(k)f.pendingBranch=d,et(d,k)?(c(k,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():U&&(D||(c(v,m,n,r,s,null,i,o,a),Wn(f,m)))):(f.pendingId=Ji++,D?(f.isHydrating=!1,f.activeBranch=k):l(k,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),U?(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(v,m,n,r,s,null,i,o,a),Wn(f,m))):v&&et(d,v)?(c(v,d,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(v&&et(d,v))c(v,d,n,r,s,f,i,o,a),Wn(f,d);else if(Mr(t,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Ji++,c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:E,pendingId:g}=f;E>0?setTimeout(()=>{f.pendingId===g&&f.fallback(m)},E):E===0&&f.fallback(m)}}function jo(e,t,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:d,um:m,n:v,o:{parentNode:k,remove:U}}=l;let D;const E=yp(e);E&&t&&t.pendingBranch&&(D=t.pendingId,t.deps++);const g=e.props?As(e.props.timeout):void 0,y=i,T={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Ji++,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1,L=!1){const{vnode:B,activeBranch:b,pendingBranch:I,pendingId:O,effects:R,parentComponent:j,container:ne}=T;let ie=!1;T.isHydrating?T.isHydrating=!1:w||(ie=b&&I.transition&&I.transition.mode==="out-in",ie&&(b.transition.afterLeave=()=>{O===T.pendingId&&(d(I,ne,i===y?v(b):i,0),Ps(R))}),b&&(k(b.el)!==T.hiddenContainer&&(i=v(b)),m(b,j,T,!0)),ie||d(I,ne,i,0)),Wn(T,I),T.pendingBranch=null,T.isInFallback=!1;let K=T.parent,Z=!1;for(;K;){if(K.pendingBranch){K.effects.push(...R),Z=!0;break}K=K.parent}!Z&&!ie&&Ps(R),T.effects=[],E&&t&&t.pendingBranch&&D===t.pendingId&&(t.deps--,t.deps===0&&!L&&t.resolve()),Mr(B,"onResolve")},fallback(w){if(!T.pendingBranch)return;const{vnode:L,activeBranch:B,parentComponent:b,container:I,namespace:O}=T;Mr(L,"onFallback");const R=v(B),j=()=>{T.isInFallback&&(f(null,w,I,R,b,null,O,a,c),Wn(T,w))},ne=w.transition&&w.transition.mode==="out-in";ne&&(B.transition.afterLeave=j),T.isInFallback=!0,m(B,b,null,!0),ne||j()},move(w,L,B){T.activeBranch&&d(T.activeBranch,w,L,B),T.container=w},next(){return T.activeBranch&&v(T.activeBranch)},registerDep(w,L,B){const b=!!T.pendingBranch;b&&T.deps++;const I=w.vnode.el;w.asyncDep.catch(O=>{An(O,w,0)}).then(O=>{if(w.isUnmounted||T.isUnmounted||T.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:R}=w;oo(w,O,!1),I&&(R.el=I);const j=!I&&w.subTree.el;L(w,R,k(I||w.subTree.el),I?null:v(w.subTree),T,o,B),j&&U(j),Bo(w,R.el),b&&--T.deps===0&&T.resolve()})},unmount(w,L){T.isUnmounted=!0,T.activeBranch&&m(T.activeBranch,n,w,L),T.pendingBranch&&m(T.pendingBranch,n,w,L)}};return T}function mp(e,t,n,r,s,i,o,a,c){const l=t.suspense=jo(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function _p(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Ua(r?n.default:n),e.ssFallback=r?Ua(n.fallback):ce(Se)}function Ua(e){let t;if(X(e)){const n=vn&&e._c;n&&(e._d=!1,be()),e=e(),n&&(e._d=!0,t=xe,Lu())}return W(e)&&(e=op(e)),e=Ve(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Xl(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Ps(e)}function Wn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Bo(r,s))}function yp(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}function ni(e,t,n=we,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{rn();const a=bn(n),c=Ke(t,n,e,o);return a(),sn(),c});return r?s.unshift(i):s.push(i),i}}const Ot=e=>(t,n=we)=>{(!Yr||e==="sp")&&ni(e,(...r)=>t(...r),n)},Ql=Ot("bm"),or=Ot("m"),Zl=Ot("bu"),ri=Ot("u"),si=Ot("bum"),ii=Ot("um"),eu=Ot("sp"),tu=Ot("rtg"),nu=Ot("rtc");function ru(e,t=we){ni("ec",e,t)}function Kn(e,t){if(Ee===null)return e;const n=Xr(Ee),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=ue]=t[s];i&&(X(i)&&(i={mounted:i,updated:i}),i.deep&&Kt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function ct(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(rn(),Ke(c,n,8,[e.el,a,e,t]),sn())}}function Yi(e,t,n,r){let s;const i=n&&n[r];if(W(e)||me(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function vp(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(W(r))for(let s=0;s<r.length;s++)e[r[s].name]=r[s].fn;else r&&(e[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return e}/*! #__NO_SIDE_EFFECTS__ */function Gr(e,t){return X(e)?pe({name:e.name},t,{setup:e}):e}const pn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function bp(e){X(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=e;let c=null,l,u=0;const f=()=>(u++,c=null,d()),d=()=>{let m;return c||(m=c=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),a)return new Promise((k,U)=>{a(v,()=>k(f()),()=>U(v),u+1)});throw v}).then(v=>m!==c&&c?c:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),l=v,v)))};return Gr({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return l},setup(){const m=we;if(l)return()=>Ei(l,m);const v=E=>{c=null,An(E,m,13,!r)};if(o&&m.suspense||Yr)return d().then(E=>()=>Ei(E,m)).catch(E=>(v(E),()=>r?ce(r,{error:E}):null));const k=He(!1),U=He(),D=He(!!s);return s&&setTimeout(()=>{D.value=!1},s),i!=null&&setTimeout(()=>{if(!k.value&&!U.value){const E=new Error(`Async component timed out after ${i}ms.`);v(E),U.value=E}},i),d().then(()=>{k.value=!0,m.parent&&Jr(m.parent.vnode)&&(m.parent.effect.dirty=!0,Zs(m.parent.update))}).catch(E=>{v(E),U.value=E}),()=>{if(k.value&&l)return Ei(l,m);if(U.value&&r)return ce(r,{error:U.value});if(n&&!D.value)return ce(n)}}})}function Ei(e,t){const{ref:n,props:r,children:s,ce:i}=t.vnode,o=ce(e,r,s);return o.ref=n,o.ce=i,delete t.vnode.ce,o}function wp(e,t,n={},r,s){if(Ee.isCE||Ee.parent&&pn(Ee.parent)&&Ee.parent.isCE)return t!=="default"&&(n.name=t),ce("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),be();const o=i&&su(i(n)),a=mn(ve,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function su(e){return e.some(t=>tn(t)?!(t.type===Se||t.type===ve&&!su(t.children)):!0)?e:null}function Ep(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:vr(r)]=e[r];return n}const Xi=e=>e?$u(e)?Xr(e):Xi(e.parent):null,br=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xi(e.parent),$root:e=>Xi(e.root),$emit:e=>e.emit,$options:e=>Wo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Zs(e.update)}),$nextTick:e=>e.n||(e.n=qr.bind(e.proxy)),$watch:e=>tg.bind(e)}),Ii=(e,t)=>e!==ue&&!e.__isScriptSetup&&se(e,t),Qi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ii(r,t))return o[t]=1,r[t];if(s!==ue&&se(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&se(l,t))return o[t]=3,i[t];if(n!==ue&&se(n,t))return o[t]=4,n[t];Zi&&(o[t]=0)}}const u=br[t];let f,d;if(u)return t==="$attrs"&&Ue(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ue&&se(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ii(s,t)?(s[t]=n,!0):r!==ue&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==ue&&se(e,o)||Ii(t,o)||(a=i[0])&&se(a,o)||se(r,o)||se(br,o)||se(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Ip=pe({},Qi,{get(e,t){if(t!==Symbol.unscopables)return Qi.get(e,t,e)},has(e,t){return t[0]!=="_"&&!sh(t)}});function Tp(){return null}function Sp(){return null}function Cp(e){}function Ap(e){}function Rp(){return null}function Pp(){}function Op(e,t){return null}function kp(){return iu().slots}function Np(){return iu().attrs}function iu(){const e=kt();return e.setupContext||(e.setupContext=Vu(e))}function Dr(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Lp(e,t){const n=Dr(e);for(const r in t){if(r.startsWith("__skip"))continue;let s=n[r];s?W(s)||X(s)?s=n[r]={type:s,default:t[r]}:s.default=t[r]:s===null&&(s=n[r]={default:t[r]}),s&&t[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Mp(e,t){return!e||!t?e||t:W(e)&&W(t)?e.concat(t):pe({},Dr(e),Dr(t))}function Dp(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function xp(e){const t=kt();let n=e();return io(),Ao(n)&&(n=n.catch(r=>{throw bn(t),r})),[n,()=>bn(t)]}let Zi=!0;function Fp(e){const t=Wo(e),n=e.proxy,r=e.ctx;Zi=!1,t.beforeCreate&&$a(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:k,deactivated:U,beforeDestroy:D,beforeUnmount:E,destroyed:g,unmounted:y,render:T,renderTracked:w,renderTriggered:L,errorCaptured:B,serverPrefetch:b,expose:I,inheritAttrs:O,components:R,directives:j,filters:ne}=t;if(l&&Up(l,r,null),o)for(const Z in o){const G=o[Z];X(G)&&(r[Z]=G.bind(n))}if(s){const Z=s.call(n,n);fe(Z)&&(e.data=Kr(Z))}if(Zi=!0,i)for(const Z in i){const G=i[Z],Qe=X(G)?G.bind(n,n):X(G.get)?G.get.bind(n,n):De,Dt=!X(G)&&X(G.set)?G.set.bind(n):De,ot=Je({get:Qe,set:Dt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Ne=>ot.value=Ne})}if(a)for(const Z in a)ou(a[Z],r,n,Z);if(c){const Z=X(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(G=>{Gn(G,Z[G])})}u&&$a(u,e,"c");function K(Z,G){W(G)?G.forEach(Qe=>Z(Qe.bind(n))):G&&Z(G.bind(n))}if(K(Ql,f),K(or,d),K(Zl,m),K(ri,v),K(Cu,k),K(Au,U),K(ru,B),K(nu,w),K(tu,L),K(si,E),K(ii,y),K(eu,b),W(I))if(I.length){const Z=e.exposed||(e.exposed={});I.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:Qe=>n[G]=Qe})})}else e.exposed||(e.exposed={});T&&e.render===De&&(e.render=T),O!=null&&(e.inheritAttrs=O),R&&(e.components=R),j&&(e.directives=j)}function Up(e,t,n=De){W(e)&&(e=eo(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=qe(s.from||r,s.default,!0):i=qe(s.from||r):i=qe(s),_e(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function $a(e,t,n){Ke(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ou(e,t,n,r){const s=r.includes(".")?Su(n,r):()=>n[r];if(me(e)){const i=t[e];X(i)&&zn(s,i)}else if(X(e))zn(s,e.bind(n));else if(fe(e))if(W(e))e.forEach(i=>ou(i,t,n,r));else{const i=X(e.handler)?e.handler.bind(n):t[e.handler];X(i)&&zn(s,i,e)}}function Wo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>ks(c,l,o,!0)),ks(c,t,o)),fe(t)&&i.set(t,c),c}function ks(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&ks(e,i,n,!0),s&&s.forEach(o=>ks(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=$p[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const $p={data:Ba,props:Ha,emits:Ha,methods:pr,computed:pr,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:pr,directives:pr,watch:Hp,provide:Ba,inject:Bp};function Ba(e,t){return t?e?function(){return pe(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function Bp(e,t){return pr(eo(e),eo(t))}function eo(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function pr(e,t){return e?pe(Object.create(null),e,t):t}function Ha(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:pe(Object.create(null),Dr(e),Dr(t??{})):t}function Hp(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=Pe(e[r],t[r]);return n}function au(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vp=0;function jp(e,t){return function(r,s=null){X(r)||(r=pe({},r)),s!=null&&!fe(s)&&(s=null);const i=au(),o=new WeakSet;let a=!1;const c=i.app={_uid:Vp++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Wu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const d=ce(r,s);return d.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(d,l):e(d,l,f),a=!0,c._container=l,l.__vue_app__=c,Xr(d.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=qn;qn=c;try{return l()}finally{qn=u}}};return c}}let qn=null;function Gn(e,t){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[e]=t}}function qe(e,t,n=!1){const r=we||Ee;if(r||qn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:qn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&X(t)?t.call(r&&r.proxy):t}}function Wp(){return!!(we||Ee||qn)}const cu={},lu=()=>Object.create(cu),uu=e=>Object.getPrototypeOf(e)===cu;function Kp(e,t,n,r=!1){const s={},i=lu();e.propsDefaults=Object.create(null),fu(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Lo(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function qp(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=re(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ei(e.emitsOptions,d))continue;const m=t[d];if(c)if(se(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const v=Oe(d);s[v]=to(c,a,v,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{fu(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!se(t,f)&&((u=je(f))===f||!se(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=to(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!se(t,f))&&(delete i[f],l=!0)}l&&It(e.attrs,"set","")}function fu(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if($n(c))continue;const l=t[c];let u;s&&se(s,u=Oe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ei(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||ue;for(let u=0;u<i.length;u++){const f=i[u];n[f]=to(s,c,f,l[f],e,!se(l,f))}}return o}function to(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=bn(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===je(n))&&(r=!0))}return r}function du(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!X(e)){const u=f=>{c=!0;const[d,m]=du(f,t,!0);pe(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return fe(e)&&r.set(e,Fn),Fn;if(W(i))for(let u=0;u<i.length;u++){const f=Oe(i[u]);Va(f)&&(o[f]=ue)}else if(i)for(const u in i){const f=Oe(u);if(Va(f)){const d=i[u],m=o[f]=W(d)||X(d)?{type:d}:pe({},d);if(m){const v=Ka(Boolean,m.type),k=Ka(String,m.type);m[0]=v>-1,m[1]=k<0||v<k,(v>-1||se(m,"default"))&&a.push(f)}}}const l=[o,a];return fe(e)&&r.set(e,l),l}function Va(e){return e[0]!=="$"&&!$n(e)}function ja(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Wa(e,t){return ja(e)===ja(t)}function Ka(e,t){return W(t)?t.findIndex(n=>Wa(n,e)):X(t)&&Wa(t,e)?0:-1}const hu=e=>e[0]==="_"||e==="$stable",Ko=e=>W(e)?e.map(Ve):[Ve(e)],Gp=(e,t,n)=>{if(t._n)return t;const r=vt((...s)=>Ko(t(...s)),n);return r._c=!1,r},pu=(e,t,n)=>{const r=e._ctx;for(const s in e){if(hu(s))continue;const i=e[s];if(X(i))t[s]=Gp(s,i,r);else if(i!=null){const o=Ko(i);t[s]=()=>o}}},gu=(e,t)=>{const n=Ko(t);e.slots.default=()=>n},zp=(e,t)=>{const n=e.slots=lu();if(e.vnode.shapeFlag&32){const r=t._;r?(pe(n,t),yl(n,"_",r,!0)):pu(t,n)}else t&&gu(e,t)},Jp=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ue;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(pe(s,t),!n&&a===1&&delete s._):(i=!t.$stable,pu(t,s)),o=t}else t&&(gu(e,t),o={default:1});if(i)for(const a in s)!hu(a)&&o[a]==null&&delete s[a]};function Ns(e,t,n,r,s=!1){if(W(e)){e.forEach((d,m)=>Ns(d,t&&(W(t)?t[m]:t),n,r,s));return}if(pn(r)&&!s)return;const i=r.shapeFlag&4?Xr(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ue?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(me(l)?(u[l]=null,se(f,l)&&(f[l]=null)):_e(l)&&(l.value=null)),X(c))Tt(c,a,12,[o,u]);else{const d=me(c),m=_e(c);if(d||m){const v=()=>{if(e.f){const k=d?se(f,c)?f[c]:u[c]:c.value;s?W(k)&&Co(k,i):W(k)?k.includes(i)||k.push(i):d?(u[c]=[i],se(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,se(f,c)&&(f[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,Te(v,n)):v()}}}let qa=!1;const Mn=()=>{qa||(console.error("Hydration completed but contains mismatches."),qa=!0)},Yp=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",Xp=e=>e.namespaceURI.includes("MathML"),fs=e=>{if(Yp(e))return"svg";if(Xp(e))return"mathml"},ds=e=>e.nodeType===8;function Qp(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=e,u=(g,y)=>{if(!y.hasChildNodes()){n(null,g,y),Os(),y._vnode=g;return}f(y.firstChild,g,null,null,null),Os(),y._vnode=g},f=(g,y,T,w,L,B=!1)=>{B=B||!!y.dynamicChildren;const b=ds(g)&&g.data==="[",I=()=>k(g,y,T,w,L,b),{type:O,ref:R,shapeFlag:j,patchFlag:ne}=y;let ie=g.nodeType;y.el=g,ne===-2&&(B=!1,y.dynamicChildren=null);let K=null;switch(O){case yn:ie!==3?y.children===""?(c(y.el=s(""),o(g),g),K=g):K=I():(g.data!==y.children&&(Mn(),g.data=y.children),K=i(g));break;case Se:E(g)?(K=i(g),D(y.el=g.content.firstChild,g,T)):ie!==8||b?K=I():K=i(g);break;case gn:if(b&&(g=i(g),ie=g.nodeType),ie===1||ie===3){K=g;const Z=!y.children.length;for(let G=0;G<y.staticCount;G++)Z&&(y.children+=K.nodeType===1?K.outerHTML:K.data),G===y.staticCount-1&&(y.anchor=K),K=i(K);return b?i(K):K}else I();break;case ve:b?K=v(g,y,T,w,L,B):K=I();break;default:if(j&1)(ie!==1||y.type.toLowerCase()!==g.tagName.toLowerCase())&&!E(g)?K=I():K=d(g,y,T,w,L,B);else if(j&6){y.slotScopeIds=L;const Z=o(g);if(b?K=U(g):ds(g)&&g.data==="teleport start"?K=U(g,g.data,"teleport end"):K=i(g),t(y,Z,null,T,w,fs(Z),B),pn(y)){let G;b?(G=ce(ve),G.anchor=K?K.previousSibling:Z.lastChild):G=g.nodeType===3?_n(""):ce("div"),G.el=g,y.component.subTree=G}}else j&64?ie!==8?K=I():K=y.type.hydrate(g,y,T,w,L,B,e,m):j&128&&(K=y.type.hydrate(g,y,T,w,fs(o(g)),L,B,e,f))}return R!=null&&Ns(R,null,w,y),K},d=(g,y,T,w,L,B)=>{B=B||!!y.dynamicChildren;const{type:b,props:I,patchFlag:O,shapeFlag:R,dirs:j,transition:ne}=y,ie=b==="input"||b==="option";if(ie||O!==-1){j&&ct(y,null,T,"created");let K=!1;if(E(g)){K=vu(w,ne)&&T&&T.vnode.props&&T.vnode.props.appear;const G=g.content.firstChild;K&&ne.beforeEnter(G),D(G,g,T),y.el=g=G}if(R&16&&!(I&&(I.innerHTML||I.textContent))){let G=m(g.firstChild,y,g,T,w,L,B);for(;G;){Mn();const Qe=G;G=G.nextSibling,a(Qe)}}else R&8&&g.textContent!==y.children&&(Mn(),g.textContent=y.children);if(I)if(ie||!B||O&48)for(const G in I)(ie&&(G.endsWith("value")||G==="indeterminate")||Vr(G)&&!$n(G)||G[0]===".")&&r(g,G,null,I[G],void 0,void 0,T);else I.onClick&&r(g,"onClick",null,I.onClick,void 0,void 0,T);let Z;(Z=I&&I.onVnodeBeforeMount)&&Le(Z,T,y),j&&ct(y,null,T,"beforeMount"),((Z=I&&I.onVnodeMounted)||j||K)&&Xl(()=>{Z&&Le(Z,T,y),K&&ne.enter(g),j&&ct(y,null,T,"mounted")},w)}return g.nextSibling},m=(g,y,T,w,L,B,b)=>{b=b||!!y.dynamicChildren;const I=y.children,O=I.length;for(let R=0;R<O;R++){const j=b?I[R]:I[R]=Ve(I[R]);g?g=f(g,j,w,L,B,b):j.type===yn&&!j.children?c(j.el=s(""),T):(Mn(),n(null,j,T,null,w,L,fs(T),B))}return g},v=(g,y,T,w,L,B)=>{const{slotScopeIds:b}=y;b&&(L=L?L.concat(b):b);const I=o(g),O=m(i(g),y,I,T,w,L,B);return O&&ds(O)&&O.data==="]"?i(y.anchor=O):(Mn(),c(y.anchor=l("]"),I,O),O)},k=(g,y,T,w,L,B)=>{if(Mn(),y.el=null,B){const O=U(g);for(;;){const R=i(g);if(R&&R!==O)a(R);else break}}const b=i(g),I=o(g);return a(g),n(null,y,I,b,T,w,fs(I),L),b},U=(g,y="[",T="]")=>{let w=0;for(;g;)if(g=i(g),g&&ds(g)&&(g.data===y&&w++,g.data===T)){if(w===0)return i(g);w--}return g},D=(g,y,T)=>{const w=y.parentNode;w&&w.replaceChild(g,y);let L=T;for(;L;)L.vnode.el===y&&(L.vnode.el=L.subTree.el=g),L=L.parent},E=g=>g.nodeType===1&&g.tagName.toLowerCase()==="template";return[u,f]}const Te=Xl;function mu(e){return yu(e)}function _u(e){return yu(e,Qp)}function yu(e,t){const n=vl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=De,insertStaticContent:v}=e,k=(h,p,_,A=null,S=null,M=null,F=void 0,N=null,x=!!p.dynamicChildren)=>{if(h===p)return;h&&!et(h,p)&&(A=C(h),Ne(h,S,M,!0),h=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null);const{type:P,ref:V,shapeFlag:J}=p;switch(P){case yn:U(h,p,_,A);break;case Se:D(h,p,_,A);break;case gn:h==null&&E(p,_,A,F);break;case ve:R(h,p,_,A,S,M,F,N,x);break;default:J&1?T(h,p,_,A,S,M,F,N,x):J&6?j(h,p,_,A,S,M,F,N,x):(J&64||J&128)&&P.process(h,p,_,A,S,M,F,N,x,q)}V!=null&&S&&Ns(V,h&&h.ref,M,p||h,!p)},U=(h,p,_,A)=>{if(h==null)r(p.el=a(p.children),_,A);else{const S=p.el=h.el;p.children!==h.children&&l(S,p.children)}},D=(h,p,_,A)=>{h==null?r(p.el=c(p.children||""),_,A):p.el=h.el},E=(h,p,_,A)=>{[h.el,h.anchor]=v(h.children,p,_,A,h.el,h.anchor)},g=({el:h,anchor:p},_,A)=>{let S;for(;h&&h!==p;)S=d(h),r(h,_,A),h=S;r(p,_,A)},y=({el:h,anchor:p})=>{let _;for(;h&&h!==p;)_=d(h),s(h),h=_;s(p)},T=(h,p,_,A,S,M,F,N,x)=>{p.type==="svg"?F="svg":p.type==="math"&&(F="mathml"),h==null?w(p,_,A,S,M,F,N,x):b(h,p,S,M,F,N,x)},w=(h,p,_,A,S,M,F,N)=>{let x,P;const{props:V,shapeFlag:J,transition:z,dirs:ee}=h;if(x=h.el=o(h.type,M,V&&V.is,V),J&8?u(x,h.children):J&16&&B(h.children,x,null,A,S,Ti(h,M),F,N),ee&&ct(h,null,A,"created"),L(x,h,h.scopeId,F,A),V){for(const he in V)he!=="value"&&!$n(he)&&i(x,he,null,V[he],M,h.children,A,S,Ce);"value"in V&&i(x,"value",null,V.value,M),(P=V.onVnodeBeforeMount)&&Le(P,A,h)}ee&&ct(h,null,A,"beforeMount");const te=vu(S,z);te&&z.beforeEnter(x),r(x,p,_),((P=V&&V.onVnodeMounted)||te||ee)&&Te(()=>{P&&Le(P,A,h),te&&z.enter(x),ee&&ct(h,null,A,"mounted")},S)},L=(h,p,_,A,S)=>{if(_&&m(h,_),A)for(let M=0;M<A.length;M++)m(h,A[M]);if(S){let M=S.subTree;if(p===M){const F=S.vnode;L(h,F,F.scopeId,F.slotScopeIds,S.parent)}}},B=(h,p,_,A,S,M,F,N,x=0)=>{for(let P=x;P<h.length;P++){const V=h[P]=N?jt(h[P]):Ve(h[P]);k(null,V,p,_,A,S,M,F,N)}},b=(h,p,_,A,S,M,F)=>{const N=p.el=h.el;let{patchFlag:x,dynamicChildren:P,dirs:V}=p;x|=h.patchFlag&16;const J=h.props||ue,z=p.props||ue;let ee;if(_&&on(_,!1),(ee=z.onVnodeBeforeUpdate)&&Le(ee,_,p,h),V&&ct(p,h,_,"beforeUpdate"),_&&on(_,!0),P?I(h.dynamicChildren,P,N,_,A,Ti(p,S),M):F||G(h,p,N,null,_,A,Ti(p,S),M,!1),x>0){if(x&16)O(N,p,J,z,_,A,S);else if(x&2&&J.class!==z.class&&i(N,"class",null,z.class,S),x&4&&i(N,"style",J.style,z.style,S),x&8){const te=p.dynamicProps;for(let he=0;he<te.length;he++){const ae=te[he],Ie=J[ae],Ze=z[ae];(Ze!==Ie||ae==="value")&&i(N,ae,Ie,Ze,S,h.children,_,A,Ce)}}x&1&&h.children!==p.children&&u(N,p.children)}else!F&&P==null&&O(N,p,J,z,_,A,S);((ee=z.onVnodeUpdated)||V)&&Te(()=>{ee&&Le(ee,_,p,h),V&&ct(p,h,_,"updated")},A)},I=(h,p,_,A,S,M,F)=>{for(let N=0;N<p.length;N++){const x=h[N],P=p[N],V=x.el&&(x.type===ve||!et(x,P)||x.shapeFlag&70)?f(x.el):_;k(x,P,V,null,A,S,M,F,!0)}},O=(h,p,_,A,S,M,F)=>{if(_!==A){if(_!==ue)for(const N in _)!$n(N)&&!(N in A)&&i(h,N,_[N],null,F,p.children,S,M,Ce);for(const N in A){if($n(N))continue;const x=A[N],P=_[N];x!==P&&N!=="value"&&i(h,N,P,x,F,p.children,S,M,Ce)}"value"in A&&i(h,"value",_.value,A.value,F)}},R=(h,p,_,A,S,M,F,N,x)=>{const P=p.el=h?h.el:a(""),V=p.anchor=h?h.anchor:a("");let{patchFlag:J,dynamicChildren:z,slotScopeIds:ee}=p;ee&&(N=N?N.concat(ee):ee),h==null?(r(P,_,A),r(V,_,A),B(p.children||[],_,V,S,M,F,N,x)):J>0&&J&64&&z&&h.dynamicChildren?(I(h.dynamicChildren,z,_,S,M,F,N),(p.key!=null||S&&p===S.subTree)&&qo(h,p,!0)):G(h,p,_,V,S,M,F,N,x)},j=(h,p,_,A,S,M,F,N,x)=>{p.slotScopeIds=N,h==null?p.shapeFlag&512?S.ctx.activate(p,_,A,F,x):ne(p,_,A,S,M,F,x):ie(h,p,x)},ne=(h,p,_,A,S,M,F)=>{const N=h.component=Uu(h,A,S);if(Jr(h)&&(N.ctx.renderer=q),Bu(N),N.asyncDep){if(S&&S.registerDep(N,K,F),!h.el){const x=N.subTree=ce(Se);D(null,x,p,_)}}else K(N,h,p,_,S,M,F)},ie=(h,p,_)=>{const A=p.component=h.component;if(lp(h,p,_))if(A.asyncDep&&!A.asyncResolved){Z(A,p,_);return}else A.next=p,np(A.update),A.effect.dirty=!0,A.update();else p.el=h.el,A.vnode=p},K=(h,p,_,A,S,M,F)=>{const N=()=>{if(h.isMounted){let{next:V,bu:J,u:z,parent:ee,vnode:te}=h;{const Ln=bu(h);if(Ln){V&&(V.el=te.el,Z(h,V,F)),Ln.asyncDep.then(()=>{h.isUnmounted||N()});return}}let he=V,ae;on(h,!1),V?(V.el=te.el,Z(h,V,F)):V=te,J&&Bn(J),(ae=V.props&&V.props.onVnodeBeforeUpdate)&&Le(ae,ee,V,te),on(h,!0);const Ie=vs(h),Ze=h.subTree;h.subTree=Ie,k(Ze,Ie,f(Ze.el),C(Ze),h,S,M),V.el=Ie.el,he===null&&Bo(h,Ie.el),z&&Te(z,S),(ae=V.props&&V.props.onVnodeUpdated)&&Te(()=>Le(ae,ee,V,te),S)}else{let V;const{el:J,props:z}=p,{bm:ee,m:te,parent:he}=h,ae=pn(p);if(on(h,!1),ee&&Bn(ee),!ae&&(V=z&&z.onVnodeBeforeMount)&&Le(V,he,p),on(h,!0),J&&ge){const Ie=()=>{h.subTree=vs(h),ge(J,h.subTree,h,S,null)};ae?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Ie()):Ie()}else{const Ie=h.subTree=vs(h);k(null,Ie,_,A,h,S,M),p.el=Ie.el}if(te&&Te(te,S),!ae&&(V=z&&z.onVnodeMounted)){const Ie=p;Te(()=>Le(V,he,Ie),S)}(p.shapeFlag&256||he&&pn(he.vnode)&&he.vnode.shapeFlag&256)&&h.a&&Te(h.a,S),h.isMounted=!0,p=_=A=null}},x=h.effect=new Qn(N,De,()=>Zs(P),h.scope),P=h.update=()=>{x.dirty&&x.run()};P.id=h.uid,on(h,!0),P()},Z=(h,p,_)=>{p.component=h;const A=h.vnode.props;h.vnode=p,h.next=null,qp(h,p.props,A,_),Jp(h,p.children,_),rn(),Da(h),sn()},G=(h,p,_,A,S,M,F,N,x=!1)=>{const P=h&&h.children,V=h?h.shapeFlag:0,J=p.children,{patchFlag:z,shapeFlag:ee}=p;if(z>0){if(z&128){Dt(P,J,_,A,S,M,F,N,x);return}else if(z&256){Qe(P,J,_,A,S,M,F,N,x);return}}ee&8?(V&16&&Ce(P,S,M),J!==P&&u(_,J)):V&16?ee&16?Dt(P,J,_,A,S,M,F,N,x):Ce(P,S,M,!0):(V&8&&u(_,""),ee&16&&B(J,_,A,S,M,F,N,x))},Qe=(h,p,_,A,S,M,F,N,x)=>{h=h||Fn,p=p||Fn;const P=h.length,V=p.length,J=Math.min(P,V);let z;for(z=0;z<J;z++){const ee=p[z]=x?jt(p[z]):Ve(p[z]);k(h[z],ee,_,null,S,M,F,N,x)}P>V?Ce(h,S,M,!0,!1,J):B(p,_,A,S,M,F,N,x,J)},Dt=(h,p,_,A,S,M,F,N,x)=>{let P=0;const V=p.length;let J=h.length-1,z=V-1;for(;P<=J&&P<=z;){const ee=h[P],te=p[P]=x?jt(p[P]):Ve(p[P]);if(et(ee,te))k(ee,te,_,null,S,M,F,N,x);else break;P++}for(;P<=J&&P<=z;){const ee=h[J],te=p[z]=x?jt(p[z]):Ve(p[z]);if(et(ee,te))k(ee,te,_,null,S,M,F,N,x);else break;J--,z--}if(P>J){if(P<=z){const ee=z+1,te=ee<V?p[ee].el:A;for(;P<=z;)k(null,p[P]=x?jt(p[P]):Ve(p[P]),_,te,S,M,F,N,x),P++}}else if(P>z)for(;P<=J;)Ne(h[P],S,M,!0),P++;else{const ee=P,te=P,he=new Map;for(P=te;P<=z;P++){const $e=p[P]=x?jt(p[P]):Ve(p[P]);$e.key!=null&&he.set($e.key,P)}let ae,Ie=0;const Ze=z-te+1;let Ln=!1,Ia=0;const ur=new Array(Ze);for(P=0;P<Ze;P++)ur[P]=0;for(P=ee;P<=J;P++){const $e=h[P];if(Ie>=Ze){Ne($e,S,M,!0);continue}let at;if($e.key!=null)at=he.get($e.key);else for(ae=te;ae<=z;ae++)if(ur[ae-te]===0&&et($e,p[ae])){at=ae;break}at===void 0?Ne($e,S,M,!0):(ur[at-te]=P+1,at>=Ia?Ia=at:Ln=!0,k($e,p[at],_,null,S,M,F,N,x),Ie++)}const Ta=Ln?Zp(ur):Fn;for(ae=Ta.length-1,P=Ze-1;P>=0;P--){const $e=te+P,at=p[$e],Sa=$e+1<V?p[$e+1].el:A;ur[P]===0?k(null,at,_,Sa,S,M,F,N,x):Ln&&(ae<0||P!==Ta[ae]?ot(at,_,Sa,2):ae--)}}},ot=(h,p,_,A,S=null)=>{const{el:M,type:F,transition:N,children:x,shapeFlag:P}=h;if(P&6){ot(h.component.subTree,p,_,A);return}if(P&128){h.suspense.move(p,_,A);return}if(P&64){F.move(h,p,_,q);return}if(F===ve){r(M,p,_);for(let J=0;J<x.length;J++)ot(x[J],p,_,A);r(h.anchor,p,_);return}if(F===gn){g(h,p,_);return}if(A!==2&&P&1&&N)if(A===0)N.beforeEnter(M),r(M,p,_),Te(()=>N.enter(M),S);else{const{leave:J,delayLeave:z,afterLeave:ee}=N,te=()=>r(M,p,_),he=()=>{J(M,()=>{te(),ee&&ee()})};z?z(M,te,he):he()}else r(M,p,_)},Ne=(h,p,_,A=!1,S=!1)=>{const{type:M,props:F,ref:N,children:x,dynamicChildren:P,shapeFlag:V,patchFlag:J,dirs:z,memoIndex:ee}=h;if(N!=null&&Ns(N,null,_,h,!0),ee!=null&&(p.renderCache[ee]=void 0),V&256){p.ctx.deactivate(h);return}const te=V&1&&z,he=!pn(h);let ae;if(he&&(ae=F&&F.onVnodeBeforeUnmount)&&Le(ae,p,h),V&6)ss(h.component,_,A);else{if(V&128){h.suspense.unmount(_,A);return}te&&ct(h,null,p,"beforeUnmount"),V&64?h.type.remove(h,p,_,S,q,A):P&&(M!==ve||J>0&&J&64)?Ce(P,p,_,!1,!0):(M===ve&&J&384||!S&&V&16)&&Ce(x,p,_),A&&kn(h)}(he&&(ae=F&&F.onVnodeUnmounted)||te)&&Te(()=>{ae&&Le(ae,p,h),te&&ct(h,null,p,"unmounted")},_)},kn=h=>{const{type:p,el:_,anchor:A,transition:S}=h;if(p===ve){Nn(_,A);return}if(p===gn){y(h);return}const M=()=>{s(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(h.shapeFlag&1&&S&&!S.persisted){const{leave:F,delayLeave:N}=S,x=()=>F(_,M);N?N(h.el,M,x):x()}else M()},Nn=(h,p)=>{let _;for(;h!==p;)_=d(h),s(h),h=_;s(p)},ss=(h,p,_)=>{const{bum:A,scope:S,update:M,subTree:F,um:N,m:x,a:P}=h;Ls(x),Ls(P),A&&Bn(A),S.stop(),M&&(M.active=!1,Ne(F,h,p,_)),N&&Te(N,p),Te(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ce=(h,p,_,A=!1,S=!1,M=0)=>{for(let F=M;F<h.length;F++)Ne(h[F],p,_,A,S)},C=h=>h.shapeFlag&6?C(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el);let H=!1;const $=(h,p,_)=>{h==null?p._vnode&&Ne(p._vnode,null,null,!0):k(p._vnode||null,h,p,null,null,null,_),H||(H=!0,Da(),Os(),H=!1),p._vnode=h},q={p:k,um:Ne,m:ot,r:kn,mt:ne,mc:B,pc:G,pbc:I,n:C,o:e};let oe,ge;return t&&([oe,ge]=t(q)),{render:$,hydrate:oe,createApp:jp($,oe)}}function Ti({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function on({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function vu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qo(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=jt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&qo(o,a)),a.type===yn&&(a.el=o.el)}}function Zp(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function bu(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bu(t)}function Ls(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const wu=Symbol.for("v-scx"),Eu=()=>qe(wu);function eg(e,t){return zr(e,null,t)}function Iu(e,t){return zr(e,null,{flush:"post"})}function Tu(e,t){return zr(e,null,{flush:"sync"})}const hs={};function zn(e,t,n){return zr(e,t,n)}function zr(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ue){if(t&&i){const w=t;t=(...L)=>{w(...L),T()}}const c=we,l=w=>r===!0?w:Kt(w,r===!1?1:void 0);let u,f=!1,d=!1;if(_e(e)?(u=()=>e.value,f=Pr(e)):Hn(e)?(u=()=>l(e),f=!0):W(e)?(d=!0,f=e.some(w=>Hn(w)||Pr(w)),u=()=>e.map(w=>{if(_e(w))return w.value;if(Hn(w))return l(w);if(X(w))return Tt(w,c,2)})):X(e)?t?u=()=>Tt(e,c,2):u=()=>(m&&m(),Ke(e,c,3,[v])):u=De,t&&r){const w=u;u=()=>Kt(w())}let m,v=w=>{m=g.onStop=()=>{Tt(w,c,4),m=g.onStop=void 0}},k;if(Yr)if(v=De,t?n&&Ke(t,c,3,[u(),d?[]:void 0,v]):u(),s==="sync"){const w=Eu();k=w.__watcherHandles||(w.__watcherHandles=[])}else return De;let U=d?new Array(e.length).fill(hs):hs;const D=()=>{if(!(!g.active||!g.dirty))if(t){const w=g.run();(r||f||(d?w.some((L,B)=>rt(L,U[B])):rt(w,U)))&&(m&&m(),Ke(t,c,3,[w,U===hs?void 0:d&&U[0]===hs?[]:U,v]),U=w)}else g.run()};D.allowRecurse=!!t;let E;s==="sync"?E=D:s==="post"?E=()=>Te(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),E=()=>Zs(D));const g=new Qn(u,De,E),y=Il(),T=()=>{g.stop(),y&&Co(y.effects,g)};return t?n?D():U=g.run():s==="post"?Te(g.run.bind(g),c&&c.suspense):g.run(),k&&k.push(T),T}function tg(e,t,n){const r=this.proxy,s=me(e)?e.includes(".")?Su(r,e):()=>r[e]:e.bind(r,r);let i;X(t)?i=t:(i=t.handler,n=t);const o=bn(this),a=zr(s,i.bind(r),n);return o(),a}function Su(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Kt(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,_e(e))Kt(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)Kt(e[r],t,n);else if(Cn(e)||Un(e))e.forEach(r=>{Kt(r,t,n)});else if(_l(e)){for(const r in e)Kt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Kt(e[r],t,n)}return e}const Jr=e=>e.type.__isKeepAlive,ng={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=kt(),r=n.ctx;if(!r.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,d=f("div");r.activate=(E,g,y,T,w)=>{const L=E.component;l(E,g,y,0,a),c(L.vnode,E,g,y,L,a,T,E.slotScopeIds,w),Te(()=>{L.isDeactivated=!1,L.a&&Bn(L.a);const B=E.props&&E.props.onVnodeMounted;B&&Le(B,L.parent,E)},a)},r.deactivate=E=>{const g=E.component;Ls(g.m),Ls(g.a),l(E,d,null,1,a),Te(()=>{g.da&&Bn(g.da);const y=E.props&&E.props.onVnodeUnmounted;y&&Le(y,g.parent,E),g.isDeactivated=!0},a)};function m(E){Si(E),u(E,n,a,!0)}function v(E){s.forEach((g,y)=>{const T=co(g.type);T&&(!E||!E(T))&&k(y)})}function k(E){const g=s.get(E);!o||!et(g,o)?m(g):o&&Si(o),s.delete(E),i.delete(E)}zn(()=>[e.include,e.exclude],([E,g])=>{E&&v(y=>gr(E,y)),g&&v(y=>!gr(g,y))},{flush:"post",deep:!0});let U=null;const D=()=>{U!=null&&(zi(n.subTree.type)?Te(()=>{s.set(U,ps(n.subTree))},n.subTree.suspense):s.set(U,ps(n.subTree)))};return or(D),ri(D),si(()=>{s.forEach(E=>{const{subTree:g,suspense:y}=n,T=ps(g);if(E.type===T.type&&E.key===T.key){Si(T);const w=T.component.da;w&&Te(w,y);return}m(E)})}),()=>{if(U=null,!t.default)return null;const E=t.default(),g=E[0];if(E.length>1)return o=null,E;if(!tn(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let y=ps(g);const T=y.type,w=co(pn(y)?y.type.__asyncResolved||{}:T),{include:L,exclude:B,max:b}=e;if(L&&(!w||!gr(L,w))||B&&w&&gr(B,w))return o=y,g;const I=y.key==null?T:y.key,O=s.get(I);return y.el&&(y=dt(y),g.shapeFlag&128&&(g.ssContent=y)),U=I,O?(y.el=O.el,y.component=O.component,y.transition&&en(y,y.transition),y.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),b&&i.size>parseInt(b,10)&&k(i.values().next().value)),y.shapeFlag|=256,o=y,zi(g.type)?g:y}}},rg=ng;function gr(e,t){return W(e)?e.some(n=>gr(n,t)):me(e)?e.split(",").includes(t):Zd(e)?e.test(t):!1}function Cu(e,t){Ru(e,"a",t)}function Au(e,t){Ru(e,"da",t)}function Ru(e,t,n=we){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ni(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Jr(s.parent.vnode)&&sg(r,t,n,s),s=s.parent}}function sg(e,t,n,r){const s=ni(t,e,r,!0);ii(()=>{Co(r[t],s)},n)}function Si(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ps(e){return e.shapeFlag&128?e.ssContent:e}const Vt=Symbol("_leaveCb"),gs=Symbol("_enterCb");function Go(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return or(()=>{e.isMounted=!0}),si(()=>{e.isUnmounting=!0}),e}const ze=[Function,Array],zo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},Pu=e=>{const t=e.subTree;return t.component?Pu(t.component):t},ig={name:"BaseTransition",props:zo,setup(e,{slots:t}){const n=kt(),r=Go();return()=>{const s=t.default&&oi(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const d of s)if(d.type!==Se){i=d;break}}const o=re(e),{mode:a}=o;if(r.isLeaving)return Ci(i);const c=Ga(i);if(!c)return Ci(i);let l=er(c,o,r,n,d=>l=d);en(c,l);const u=n.subTree,f=u&&Ga(u);if(f&&f.type!==Se&&!et(c,f)&&Pu(n).type!==Se){const d=er(f,o,r,n);if(en(f,d),a==="out-in"&&c.type!==Se)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ci(i);a==="in-out"&&c.type!==Se&&(d.delayLeave=(m,v,k)=>{const U=ku(r,f);U[String(f.key)]=f,m[Vt]=()=>{v(),m[Vt]=void 0,delete l.delayedLeave},l.delayedLeave=k})}return i}}},Ou=ig;function ku(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function er(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:v,onLeaveCancelled:k,onBeforeAppear:U,onAppear:D,onAfterAppear:E,onAppearCancelled:g}=t,y=String(e.key),T=ku(n,e),w=(b,I)=>{b&&Ke(b,r,9,I)},L=(b,I)=>{const O=I[1];w(b,I),W(b)?b.every(R=>R.length<=1)&&O():b.length<=1&&O()},B={mode:o,persisted:a,beforeEnter(b){let I=c;if(!n.isMounted)if(i)I=U||c;else return;b[Vt]&&b[Vt](!0);const O=T[y];O&&et(e,O)&&O.el[Vt]&&O.el[Vt](),w(I,[b])},enter(b){let I=l,O=u,R=f;if(!n.isMounted)if(i)I=D||l,O=E||u,R=g||f;else return;let j=!1;const ne=b[gs]=ie=>{j||(j=!0,ie?w(R,[b]):w(O,[b]),B.delayedLeave&&B.delayedLeave(),b[gs]=void 0)};I?L(I,[b,ne]):ne()},leave(b,I){const O=String(e.key);if(b[gs]&&b[gs](!0),n.isUnmounting)return I();w(d,[b]);let R=!1;const j=b[Vt]=ne=>{R||(R=!0,I(),ne?w(k,[b]):w(v,[b]),b[Vt]=void 0,T[O]===e&&delete T[O])};T[O]=e,m?L(m,[b,j]):j()},clone(b){const I=er(b,t,n,r,s);return s&&s(I),I}};return B}function Ci(e){if(Jr(e))return e=dt(e),e.children=null,e}function Ga(e){if(!Jr(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&X(n.default))return n.default()}}function en(e,t){e.shapeFlag&6&&e.component?en(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function oi(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ve?(o.patchFlag&128&&s++,r=r.concat(oi(o.children,t,a))):(t||o.type!==Se)&&r.push(a!=null?dt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const og=e=>e.__isTeleport,wr=e=>e&&(e.disabled||e.disabled===""),za=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ja=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,no=(e,t)=>{const n=e&&e.to;return me(n)?t?t(n):null:n},ag={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:v,createText:k,createComment:U}}=l,D=wr(t.props);let{shapeFlag:E,children:g,dynamicChildren:y}=t;if(e==null){const T=t.el=k(""),w=t.anchor=k("");m(T,n,r),m(w,n,r);const L=t.target=no(t.props,v),B=t.targetAnchor=k("");L&&(m(B,L),o==="svg"||za(L)?o="svg":(o==="mathml"||Ja(L))&&(o="mathml"));const b=(I,O)=>{E&16&&u(g,I,O,s,i,o,a,c)};D?b(n,w):L&&b(L,B)}else{t.el=e.el;const T=t.anchor=e.anchor,w=t.target=e.target,L=t.targetAnchor=e.targetAnchor,B=wr(e.props),b=B?n:w,I=B?T:L;if(o==="svg"||za(w)?o="svg":(o==="mathml"||Ja(w))&&(o="mathml"),y?(d(e.dynamicChildren,y,b,s,i,o,a),qo(e,t,!0)):c||f(e,t,b,I,s,i,o,a,!1),D)B?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ms(t,n,T,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const O=t.target=no(t.props,v);O&&ms(t,O,null,l,0)}else B&&ms(t,w,L,l,1)}Nu(t)},remove(e,t,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&i(u),o&&i(l),a&16){const m=o||!wr(d);for(let v=0;v<c.length;v++){const k=c[v];s(k,t,n,m,!!k.dynamicChildren)}}},move:ms,hydrate:cg};function ms(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||wr(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],t,n,2);f&&r(a,t,n)}function cg(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=no(t.props,c);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(wr(t.props))t.anchor=l(o(e),t,a(e),n,r,s,i),t.targetAnchor=f;else{t.anchor=o(e);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(f,t,u,n,r,s,i)}Nu(t)}return t.anchor&&o(t.anchor)}const lg=ag;function Nu(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const ve=Symbol.for("v-fgt"),yn=Symbol.for("v-txt"),Se=Symbol.for("v-cmt"),gn=Symbol.for("v-stc"),Er=[];let xe=null;function be(e=!1){Er.push(xe=e?null:[])}function Lu(){Er.pop(),xe=Er[Er.length-1]||null}let vn=1;function ro(e){vn+=e}function Mu(e){return e.dynamicChildren=vn>0?xe||Fn:null,Lu(),vn>0&&xe&&xe.push(e),e}function We(e,t,n,r,s,i){return Mu(Y(e,t,n,r,s,i,!0))}function mn(e,t,n,r,s){return Mu(ce(e,t,n,r,s,!0))}function tn(e){return e?e.__v_isVNode===!0:!1}function et(e,t){return e.type===t.type&&e.key===t.key}function ug(e){}const Du=({key:e})=>e??null,bs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||_e(e)||X(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,s=null,i=e===ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Du(t),ref:t&&bs(t),scopeId:ti,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return a?(Yo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),vn>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const ce=fg;function fg(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Jl)&&(e=Se),tn(e)){const a=dt(e,t,!0);return n&&Yo(a,n),vn>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(yg(e)&&(e=e.__vccOpts),t){t=xu(t);let{class:a,style:c}=t;a&&!me(a)&&(t.class=Jt(a)),fe(c)&&(Do(c)&&!W(c)&&(c=pe({},c)),t.style=Wr(c))}const o=me(e)?1:zi(e)?128:og(e)?64:fe(e)?4:X(e)?2:0;return Y(e,t,n,r,s,o,i,!0)}function xu(e){return e?Do(e)||uu(e)?pe({},e):e:null}function dt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Fu(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Du(l),ref:t&&t.ref?n&&i?W(i)?i.concat(bs(t)):[i,bs(t)]:bs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ve?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&en(u,c.clone(u)),u}function _n(e=" ",t=0){return ce(yn,null,e,t)}function Jo(e,t){const n=ce(gn,null,e);return n.staticCount=t,n}function mr(e="",t=!1){return t?(be(),mn(Se,null,e)):ce(Se,null,e)}function Ve(e){return e==null||typeof e=="boolean"?ce(Se):W(e)?ce(ve,null,e.slice()):typeof e=="object"?jt(e):ce(yn,null,String(e))}function jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function Yo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Yo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!uu(t)?t._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),r&64?(n=16,t=[_n(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Jt([t.class,r.class]));else if(s==="style")t.style=Wr([t.style,r.style]);else if(Vr(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Le(e,t,n,r=null){Ke(e,t,7,[n,r])}const dg=au();let hg=0;function Uu(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||dg,i={uid:hg++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:du(r,s),emitsOptions:Gl(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=sp.bind(null,i),e.ce&&e.ce(i),i}let we=null;const kt=()=>we||Ee;let Ms,so;{const e=vl(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ms=t("__VUE_INSTANCE_SETTERS__",n=>we=n),so=t("__VUE_SSR_SETTERS__",n=>Yr=n)}const bn=e=>{const t=we;return Ms(e),e.scope.on(),()=>{e.scope.off(),Ms(t)}},io=()=>{we&&we.scope.off(),Ms(null)};function $u(e){return e.vnode.shapeFlag&4}let Yr=!1;function Bu(e,t=!1){t&&so(t);const{props:n,children:r}=e.vnode,s=$u(e);Kp(e,n,s,t),zp(e,r);const i=s?pg(e,t):void 0;return t&&so(!1),i}function pg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Qi);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Vu(e):null,i=bn(e);rn();const o=Tt(r,e,0,[e.props,s]);if(sn(),i(),Ao(o)){if(o.then(io,io),t)return o.then(a=>{oo(e,a,t)}).catch(a=>{An(a,e,0)});e.asyncDep=o}else oo(e,o,t)}else Hu(e,t)}function oo(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Uo(t)),Hu(e,n)}let Ds,ao;function gg(e){Ds=e,ao=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Ip))}}const mg=()=>!Ds;function Hu(e,t,n){const r=e.type;if(!e.render){if(!t&&Ds&&!r.render){const s=r.template||Wo(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=Ds(s,l)}}e.render=r.render||De,ao&&ao(e)}{const s=bn(e);rn();try{Fp(e)}finally{sn(),s()}}}const _g={get(e,t){return Ue(e,"get",""),e[t]}};function Vu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,_g),slots:e.slots,emit:e.emit,expose:t}}function Xr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Uo(Fl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in br)return br[n](e)},has(t,n){return n in t||n in br}})):e.proxy}function co(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function yg(e){return X(e)&&"__vccOpts"in e}const Je=(e,t)=>$h(e,t,Yr);function vg(e,t,n=ue){const r=kt(),s=Oe(t),i=je(t),o=Hl((c,l)=>{let u;return Tu(()=>{const f=e[t];rt(u,f)&&(u=f,l())}),{get(){return c(),n.get?n.get(u):u},set(f){const d=r.vnode.props;!(d&&(t in d||s in d||i in d)&&(`onUpdate:${t}`in d||`onUpdate:${s}`in d||`onUpdate:${i}`in d))&&rt(f,u)&&(u=f,l()),r.emit(`update:${t}`,n.set?n.set(f):f)}}}),a=t==="modelValue"?"modelModifiers":`${t}Modifiers`;return o[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?e[a]||{}:o,done:!1}:{done:!0}}}},o}function ai(e,t,n){const r=arguments.length;return r===2?fe(t)&&!W(t)?tn(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&tn(n)&&(n=[n]),ce(e,t,n))}function bg(){}function wg(e,t,n,r){const s=n[r];if(s&&ju(s,e))return s;const i=t();return i.memo=e.slice(),i.memoIndex=r,n[r]=i}function ju(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if(rt(n[r],t[r]))return!1;return vn>0&&xe&&xe.push(e),!0}const Wu="3.4.29",Eg=De,Ig=Zh,Tg=Dn,Sg=ql,Cg={createComponentInstance:Uu,setupComponent:Bu,renderComponentRoot:vs,setCurrentRenderingInstance:Lr,isVNode:tn,normalizeVNode:Ve,getComponentPublicInstance:Xr},Ag=Cg,Rg=null,Pg=null,Og=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const kg="http://www.w3.org/2000/svg",Ng="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,Ya=_t&&_t.createElement("template"),Lg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?_t.createElementNS(kg,e):t==="mathml"?_t.createElementNS(Ng,e):n?_t.createElement(e,{is:n}):_t.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ya.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Ya.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ft="transition",fr="animation",tr=Symbol("_vtc"),ci=(e,{slots:t})=>ai(Ou,qu(e),t);ci.displayName="Transition";const Ku={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mg=ci.props=pe({},zo,Ku),an=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},Xa=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function qu(e){const t={};for(const R in e)R in Ku||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=Dg(s),k=v&&v[0],U=v&&v[1],{onBeforeEnter:D,onEnter:E,onEnterCancelled:g,onLeave:y,onLeaveCancelled:T,onBeforeAppear:w=D,onAppear:L=E,onAppearCancelled:B=g}=t,b=(R,j,ne)=>{Bt(R,j?u:a),Bt(R,j?l:o),ne&&ne()},I=(R,j)=>{R._isLeaving=!1,Bt(R,f),Bt(R,m),Bt(R,d),j&&j()},O=R=>(j,ne)=>{const ie=R?L:E,K=()=>b(j,R,ne);an(ie,[j,K]),Qa(()=>{Bt(j,R?c:i),mt(j,R?u:a),Xa(ie)||Za(j,r,k,K)})};return pe(t,{onBeforeEnter(R){an(D,[R]),mt(R,i),mt(R,o)},onBeforeAppear(R){an(w,[R]),mt(R,c),mt(R,l)},onEnter:O(!1),onAppear:O(!0),onLeave(R,j){R._isLeaving=!0;const ne=()=>I(R,j);mt(R,f),mt(R,d),zu(),Qa(()=>{R._isLeaving&&(Bt(R,f),mt(R,m),Xa(y)||Za(R,r,U,ne))}),an(y,[R,ne])},onEnterCancelled(R){b(R,!1),an(g,[R])},onAppearCancelled(R){b(R,!0),an(B,[R])},onLeaveCancelled(R){I(R),an(T,[R])}})}function Dg(e){if(e==null)return null;if(fe(e))return[Ai(e.enter),Ai(e.leave)];{const t=Ai(e);return[t,t]}}function Ai(e){return As(e)}function mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[tr]||(e[tr]=new Set)).add(t)}function Bt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[tr];n&&(n.delete(t),n.size||(e[tr]=void 0))}function Qa(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let xg=0;function Za(e,t,n,r){const s=e._endId=++xg,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Gu(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=m=>{m.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function Gu(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),s=r(`${Ft}Delay`),i=r(`${Ft}Duration`),o=ec(s,i),a=r(`${fr}Delay`),c=r(`${fr}Duration`),l=ec(a,c);let u=null,f=0,d=0;t===Ft?o>0&&(u=Ft,f=o,d=i.length):t===fr?l>0&&(u=fr,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?Ft:fr:null,d=u?u===Ft?i.length:c.length:0);const m=u===Ft&&/\b(transform|all)(,|$)/.test(r(`${Ft}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function ec(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>tc(n)+tc(e[r])))}function tc(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function zu(){return document.body.offsetHeight}function Fg(e,t,n){const r=e[tr];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const xs=Symbol("_vod"),Ju=Symbol("_vsh"),Yu={beforeMount(e,{value:t},{transition:n}){e[xs]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):dr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),dr(e,!0),r.enter(e)):r.leave(e,()=>{dr(e,!1)}):dr(e,t))},beforeUnmount(e,{value:t}){dr(e,t)}};function dr(e,t){e.style.display=t?e[xs]:"none",e[Ju]=!t}function Ug(){Yu.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Xu=Symbol("");function $g(e){const t=kt();if(!t)return;const n=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i=>uo(i,s))},r=()=>{const s=e(t.proxy);lo(t.subTree,s),n(s)};or(()=>{Iu(r);const s=new MutationObserver(r);s.observe(t.subTree.el.parentNode,{childList:!0}),ii(()=>s.disconnect())})}function lo(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{lo(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)uo(e.el,t);else if(e.type===ve)e.children.forEach(n=>lo(n,t));else if(e.type===gn){let{el:n,anchor:r}=e;for(;n&&(uo(n,t),n!==r);)n=n.nextSibling}}function uo(e,t){if(e.nodeType===1){const n=e.style;let r="";for(const s in t)n.setProperty(`--${s}`,t[s]),r+=`--${s}: ${t[s]};`;n[Xu]=r}}const Bg=/(^|;)\s*display\s*:/;function Hg(e,t,n){const r=e.style,s=me(n);let i=!1;if(n&&!s){if(t)if(me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ws(r,a,"")}else for(const o in t)n[o]==null&&ws(r,o,"");for(const o in n)o==="display"&&(i=!0),ws(r,o,n[o])}else if(s){if(t!==n){const o=r[Xu];o&&(n+=";"+o),r.cssText=n,i=Bg.test(n)}}else t&&e.removeAttribute("style");xs in e&&(e[xs]=i?r.display:"",e[Ju]&&(r.display="none"))}const nc=/\s*!important$/;function ws(e,t,n){if(W(n))n.forEach(r=>ws(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Vg(e,t);nc.test(n)?e.setProperty(je(r),n.replace(nc,""),"important"):e[r]=n}}const rc=["Webkit","Moz","ms"],Ri={};function Vg(e,t){const n=Ri[t];if(n)return n;let r=Oe(t);if(r!=="filter"&&r in e)return Ri[t]=r;r=jr(r);for(let s=0;s<rc.length;s++){const i=rc[s]+r;if(i in e)return Ri[t]=i}return t}const sc="http://www.w3.org/1999/xlink";function ic(e,t,n,r,s,i=fh(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(sc,t.slice(6,t.length)):e.setAttributeNS(sc,t,n):n==null||i&&!bl(n)?e.removeAttribute(t):e.setAttribute(t,i?"":String(n))}function jg(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=bl(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function yt(e,t,n,r){e.addEventListener(t,n,r)}function Wg(e,t,n,r){e.removeEventListener(t,n,r)}const oc=Symbol("_vei");function Kg(e,t,n,r,s=null){const i=e[oc]||(e[oc]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=qg(t);if(r){const l=i[t]=Jg(r,s);yt(e,a,l,c)}else o&&(Wg(e,a,o,c),i[t]=void 0)}}const ac=/(?:Once|Passive|Capture)$/;function qg(e){let t;if(ac.test(e)){t={};let r;for(;r=e.match(ac);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):je(e.slice(2)),t]}let Pi=0;const Gg=Promise.resolve(),zg=()=>Pi||(Gg.then(()=>Pi=0),Pi=Date.now());function Jg(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Yg(r,n.value),t,5,[r])};return n.value=e,n.attached=zg(),n}function Yg(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const cc=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xg=(e,t,n,r,s,i,o,a,c)=>{const l=s==="svg";t==="class"?Fg(e,r,l):t==="style"?Hg(e,n,r):Vr(t)?So(t)||Kg(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qg(e,t,r,l))?(jg(e,t,r,i,o,a,c),(t==="value"||t==="checked"||t==="selected")&&ic(e,t,r,l,o,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ic(e,t,r,l))};function Qg(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&cc(t)&&X(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cc(t)&&me(n)?!1:t in e}/*! #__NO_SIDE_EFFECTS__ */function Qu(e,t,n){const r=Gr(e,t);class s extends li{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const Zg=(e,t)=>Qu(e,t,uf),em=typeof HTMLElement<"u"?HTMLElement:class{};class li extends em{constructor(t,n={},r){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,qr(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),fo(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(r,s=!1)=>{const{props:i,styles:o}=r;let a;if(i&&!W(i))for(const c in i){const l=i[c];(l===Number||l&&l.type===Number)&&(c in this._props&&(this._props[c]=As(this._props[c])),(a||(a=Object.create(null)))[Oe(c)]=!0)}this._numberProps=a,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>t(r,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,r=W(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Oe))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(t){let n=this.hasAttribute(t)?this.getAttribute(t):void 0;const r=Oe(t);this._numberProps&&this._numberProps[r]&&(n=As(n)),this._setProp(r,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,r=!0,s=!0){n!==this._props[t]&&(this._props[t]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(je(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(je(t),n+""):n||this.removeAttribute(je(t))))}_update(){fo(this._createVNode(),this.shadowRoot)}_createVNode(){const t=ce(this._def,pe({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),je(i)!==i&&r(je(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof li){n.parent=s._instance,n.provides=s._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function tm(e="$style"){{const t=kt();if(!t)return ue;const n=t.type.__cssModules;if(!n)return ue;const r=n[e];return r||ue}}const Zu=new WeakMap,ef=new WeakMap,Fs=Symbol("_moveCb"),lc=Symbol("_enterCb"),tf={name:"TransitionGroup",props:pe({},Mg,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=kt(),r=Go();let s,i;return ri(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!am(s[0].el,n.vnode.el,o))return;s.forEach(sm),s.forEach(im);const a=s.filter(om);zu(),a.forEach(c=>{const l=c.el,u=l.style;mt(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l[Fs]=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l[Fs]=null,Bt(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=re(e),a=qu(o);let c=o.tag||ve;if(s=[],i)for(let l=0;l<i.length;l++){const u=i[l];u.el&&u.el instanceof Element&&(s.push(u),en(u,er(u,a,r,n)),Zu.set(u,u.el.getBoundingClientRect()))}i=t.default?oi(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&en(u,er(u,a,r,n))}return ce(c,null,i)}}},nm=e=>delete e.mode;tf.props;const rm=tf;function sm(e){const t=e.el;t[Fs]&&t[Fs](),t[lc]&&t[lc]()}function im(e){ef.set(e,e.el.getBoundingClientRect())}function om(e){const t=Zu.get(e),n=ef.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function am(e,t,n){const r=e.cloneNode(),s=e[tr];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=Gu(r);return i.removeChild(r),o}const nn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>Bn(t,n):t};function cm(e){e.target.composing=!0}function uc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ye=Symbol("_assign"),St={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ye]=nn(s);const i=r||s.props&&s.props.type==="number";yt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Cs(a)),e[Ye](a)}),n&&yt(e,"change",()=>{e.value=e.value.trim()}),t||(yt(e,"compositionstart",cm),yt(e,"compositionend",uc),yt(e,"change",uc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[Ye]=nn(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Cs(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},Xo={deep:!0,created(e,t,n){e[Ye]=nn(n),yt(e,"change",()=>{const r=e._modelValue,s=nr(e),i=e.checked,o=e[Ye];if(W(r)){const a=Js(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Cn(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(rf(e,i))})},mounted:fc,beforeUpdate(e,t,n){e[Ye]=nn(n),fc(e,t,n)}};function fc(e,{value:t,oldValue:n},r){e._modelValue=t,W(t)?e.checked=Js(t,r.props.value)>-1:Cn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Zt(t,rf(e,!0)))}const Qo={created(e,{value:t},n){e.checked=Zt(t,n.props.value),e[Ye]=nn(n),yt(e,"change",()=>{e[Ye](nr(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[Ye]=nn(r),t!==n&&(e.checked=Zt(t,r.props.value))}},nf={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Cn(t);yt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Cs(nr(o)):nr(o));e[Ye](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,qr(()=>{e._assigning=!1})}),e[Ye]=nn(r)},mounted(e,{value:t,modifiers:{number:n}}){dc(e,t)},beforeUpdate(e,t,n){e[Ye]=nn(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||dc(e,t)}};function dc(e,t,n){const r=e.multiple,s=W(t);if(!(r&&!s&&!Cn(t))){for(let i=0,o=e.options.length;i<o;i++){const a=e.options[i],c=nr(a);if(r)if(s){const l=typeof c;l==="string"||l==="number"?a.selected=t.some(u=>String(u)===String(c)):a.selected=Js(t,c)>-1}else a.selected=t.has(c);else if(Zt(nr(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function nr(e){return"_value"in e?e._value:e.value}function rf(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const sf={created(e,t,n){_s(e,t,n,null,"created")},mounted(e,t,n){_s(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){_s(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){_s(e,t,n,r,"updated")}};function of(e,t){switch(e){case"SELECT":return nf;case"TEXTAREA":return St;default:switch(t){case"checkbox":return Xo;case"radio":return Qo;default:return St}}}function _s(e,t,n,r,s){const o=of(e.tagName,n.props&&n.props.type)[s];o&&o(e,t,n,r)}function lm(){St.getSSRProps=({value:e})=>({value:e}),Qo.getSSRProps=({value:e},t)=>{if(t.props&&Zt(t.props.value,e))return{checked:!0}},Xo.getSSRProps=({value:e},t)=>{if(W(e)){if(t.props&&Js(e,t.props.value)>-1)return{checked:!0}}else if(Cn(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},sf.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=of(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const um=["ctrl","shift","alt","meta"],fm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>um.some(n=>e[`${n}Key`]&&!t.includes(n))},dm=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=fm[t[o]];if(a&&a(s,t))return}return e(s,...i)})},hm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zo=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=je(s.key);if(t.some(o=>o===i||hm[o]===i))return e(s)})},af=pe({patchProp:Xg},Lg);let Ir,hc=!1;function cf(){return Ir||(Ir=mu(af))}function lf(){return Ir=hc?Ir:_u(af),hc=!0,Ir}const fo=(...e)=>{cf().render(...e)},uf=(...e)=>{lf().hydrate(...e)},ff=(...e)=>{const t=cf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=hf(r);if(!s)return;const i=t._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,df(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},pm=(...e)=>{const t=lf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=hf(r);if(s)return n(s,!0,df(s))},t};function df(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hf(e){return me(e)?document.querySelector(e):e}let pc=!1;const gm=()=>{pc||(pc=!0,lm(),Ug())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mm=()=>{},_m=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Ou,BaseTransitionPropsValidators:zo,Comment:Se,DeprecationTypes:Og,EffectScope:Po,ErrorCodes:Qh,ErrorTypeStrings:Ig,Fragment:ve,KeepAlive:rg,ReactiveEffect:Qn,Static:gn,Suspense:hp,Teleport:lg,Text:yn,TrackOpTypes:Jh,Transition:ci,TransitionGroup:rm,TriggerOpTypes:Yh,VueElement:li,assertNumber:Xh,callWithAsyncErrorHandling:Ke,callWithErrorHandling:Tt,camelize:Oe,capitalize:jr,cloneVNode:dt,compatUtils:Pg,compile:mm,computed:Je,createApp:ff,createBlock:mn,createCommentVNode:mr,createElementBlock:We,createElementVNode:Y,createHydrationRenderer:_u,createPropsRestProxy:Dp,createRenderer:mu,createSSRApp:pm,createSlots:vp,createStaticVNode:Jo,createTextVNode:_n,createVNode:ce,customRef:Hl,defineAsyncComponent:bp,defineComponent:Gr,defineCustomElement:Qu,defineEmits:Sp,defineExpose:Cp,defineModel:Pp,defineOptions:Ap,defineProps:Tp,defineSSRCustomElement:Zg,defineSlots:Rp,devtools:Tg,effect:_h,effectScope:ph,getCurrentInstance:kt,getCurrentScope:Il,getTransitionRawChildren:oi,guardReactiveProps:xu,h:ai,handleError:An,hasInjectionContext:Wp,hydrate:uf,initCustomFormatter:bg,initDirectivesForSSR:gm,inject:qe,isMemoSame:ju,isProxy:Do,isReactive:Hn,isReadonly:Zn,isRef:_e,isRuntimeOnly:mg,isShallow:Pr,isVNode:tn,markRaw:Fl,mergeDefaults:Lp,mergeModels:Mp,mergeProps:Fu,nextTick:qr,normalizeClass:Jt,normalizeProps:lh,normalizeStyle:Wr,onActivated:Cu,onBeforeMount:Ql,onBeforeUnmount:si,onBeforeUpdate:Zl,onDeactivated:Au,onErrorCaptured:ru,onMounted:or,onRenderTracked:nu,onRenderTriggered:tu,onScopeDispose:gh,onServerPrefetch:eu,onUnmounted:ii,onUpdated:ri,openBlock:be,popScopeId:Pn,provide:Gn,proxyRefs:Uo,pushScopeId:Rn,queuePostFlushCb:Ps,reactive:Kr,readonly:Mo,ref:He,registerRuntimeCompiler:gg,render:fo,renderList:Yi,renderSlot:wp,resolveComponent:zl,resolveDirective:fp,resolveDynamicComponent:Yl,resolveFilter:Rg,resolveTransitionHooks:er,setBlockTracking:ro,setDevtoolsHook:Sg,setTransitionHooks:en,shallowReactive:Lo,shallowReadonly:Uh,shallowRef:$l,ssrContextKey:wu,ssrUtils:Ag,stop:yh,toDisplayString:hh,toHandlerKey:vr,toHandlers:Ep,toRaw:re,toRef:zh,toRefs:Kh,toValue:Vh,transformVNodeArgs:ug,triggerRef:Hh,unref:ke,useAttrs:Np,useCssModule:tm,useCssVars:$g,useModel:vg,useSSRContext:Eu,useSlots:kp,useTransitionState:Go,vModelCheckbox:Xo,vModelDynamic:sf,vModelRadio:Qo,vModelSelect:nf,vModelText:St,vShow:Yu,version:Wu,warn:Eg,watch:zn,watchEffect:eg,watchPostEffect:Iu,watchSyncEffect:Tu,withAsyncContext:xp,withCtx:vt,withDefaults:Op,withDirectives:Kn,withKeys:Zo,withMemo:wg,withModifiers:dm,withScopeId:ip},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const xn=typeof document<"u";function ym(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const le=Object.assign;function Oi(e,t){const n={};for(const r in t){const s=t[r];n[r]=st(s)?s.map(e):e(s)}return n}const Tr=()=>{},st=Array.isArray,pf=/#/g,vm=/&/g,bm=/\//g,wm=/=/g,Em=/\?/g,gf=/\+/g,Im=/%5B/g,Tm=/%5D/g,mf=/%5E/g,Sm=/%60/g,_f=/%7B/g,Cm=/%7C/g,yf=/%7D/g,Am=/%20/g;function ea(e){return encodeURI(""+e).replace(Cm,"|").replace(Im,"[").replace(Tm,"]")}function Rm(e){return ea(e).replace(_f,"{").replace(yf,"}").replace(mf,"^")}function ho(e){return ea(e).replace(gf,"%2B").replace(Am,"+").replace(pf,"%23").replace(vm,"%26").replace(Sm,"`").replace(_f,"{").replace(yf,"}").replace(mf,"^")}function Pm(e){return ho(e).replace(wm,"%3D")}function Om(e){return ea(e).replace(pf,"%23").replace(Em,"%3F")}function km(e){return e==null?"":Om(e).replace(bm,"%2F")}function xr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Nm=/\/$/,Lm=e=>e.replace(Nm,"");function ki(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Fm(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:xr(o)}}function Mm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function gc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dm(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&rr(t.matched[r],n.matched[s])&&vf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!xm(e[n],t[n]))return!1;return!0}function xm(e,t){return st(e)?mc(e,t):st(t)?mc(t,e):e===t}function mc(e,t){return st(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Fm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Fr;(function(e){e.pop="pop",e.push="push"})(Fr||(Fr={}));var Sr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Sr||(Sr={}));function Um(e){if(!e)if(xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lm(e)}const $m=/^[^#]+#/;function Bm(e,t){return e.replace($m,"#")+t}function Hm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ui=()=>({left:window.scrollX,top:window.scrollY});function Vm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Hm(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function _c(e,t){return(history.state?history.state.position-t:-1)+e}const po=new Map;function jm(e,t){po.set(e,t)}function Wm(e){const t=po.get(e);return po.delete(e),t}let Km=()=>location.protocol+"//"+location.host;function bf(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),gc(c,"")}return gc(n,e)+r+s}function qm(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=bf(e,location),v=n.value,k=t.value;let U=0;if(d){if(n.value=m,t.value=d,o&&o===v){o=null;return}U=k?d.position-k.position:0}else r(m);s.forEach(D=>{D(n.value,v,{delta:U,type:Fr.pop,direction:U?U>0?Sr.forward:Sr.back:Sr.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(le({},d.state,{scroll:ui()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function yc(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ui():null}}function Gm(e){const{history:t,location:n}=window,r={value:bf(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Km()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=le({},t.state,yc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=le({},s.value,t.state,{forward:c,scroll:ui()});i(u.current,u,!0);const f=le({},yc(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function zm(e){e=Um(e);const t=Gm(e),n=qm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=le({location:"",base:e,go:r,createHref:Bm.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function Jm(e){return typeof e=="string"||e&&typeof e=="object"}function wf(e){return typeof e=="string"||typeof e=="symbol"}const Ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ef=Symbol("");var vc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(vc||(vc={}));function sr(e,t){return le(new Error,{type:e,[Ef]:!0},t)}function gt(e,t){return e instanceof Error&&Ef in e&&(t==null||!!(e.type&t))}const bc="[^/]+?",Ym={sensitive:!1,strict:!1,start:!0,end:!0},Xm=/[.+*?^${}()[\]/\\]/g;function Qm(e,t){const n=le({},Ym,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(Xm,"\\$&"),m+=40;else if(d.type===1){const{value:v,repeatable:k,optional:U,regexp:D}=d;i.push({name:v,repeatable:k,optional:U});const E=D||bc;if(E!==bc){m+=10;try{new RegExp(`(${E})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+y.message)}}let g=k?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(g=U&&l.length<2?`(?:/${g})`:"/"+g),U&&(g+="?"),s+=g,m+=20,U&&(m+=-8),k&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",v=i[d-1];f[v.name]=m&&v.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:k,optional:U}=m,D=v in l?l[v]:"";if(st(D)&&!k)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=st(D)?D.join("/"):D;if(!E)if(U)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=E}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Zm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function If(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Zm(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(wc(r))return 1;if(wc(s))return-1}return s.length-r.length}function wc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const e_={type:0,value:""},t_=/[a-zA-Z0-9_]/;function n_(e){if(!e)return[[]];if(e==="/")return[[e_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:t_.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function r_(e,t,n){const r=Qm(n_(e.path),n),s=le(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function s_(e,t){const n=[],r=new Map;t=Tc({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,d){const m=!d,v=i_(u);v.aliasOf=d&&d.record;const k=Tc(t,u),U=[v];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of g)U.push(le({},v,{components:d?d.record.components:v.components,path:y,aliasOf:d?d.record:v}))}let D,E;for(const g of U){const{path:y}=g;if(f&&y[0]!=="/"){const T=f.record.path,w=T[T.length-1]==="/"?"":"/";g.path=f.record.path+(y&&w+y)}if(D=r_(g,f,k),d?d.alias.push(D):(E=E||D,E!==D&&E.alias.push(D),m&&u.name&&!Ic(D)&&o(u.name)),Tf(D)&&c(D),v.children){const T=v.children;for(let w=0;w<T.length;w++)i(T[w],D,d&&d.children[w])}d=d||D}return E?()=>{o(E)}:Tr}function o(u){if(wf(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){const f=c_(u,n);n.splice(f,0,u),u.record.name&&!Ic(u)&&r.set(u.record.name,u)}function l(u,f){let d,m={},v,k;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw sr(1,{location:u});k=d.record.name,m=le(Ec(f.params,d.keys.filter(E=>!E.optional).concat(d.parent?d.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),u.params&&Ec(u.params,d.keys.map(E=>E.name))),v=d.stringify(m)}else if(u.path!=null)v=u.path,d=n.find(E=>E.re.test(v)),d&&(m=d.parse(v),k=d.record.name);else{if(d=f.name?r.get(f.name):n.find(E=>E.re.test(f.path)),!d)throw sr(1,{location:u,currentLocation:f});k=d.record.name,m=le({},f.params,u.params),v=d.stringify(m)}const U=[];let D=d;for(;D;)U.unshift(D.record),D=D.parent;return{name:k,path:v,params:m,matched:U,meta:a_(U)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ec(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function i_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:o_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function o_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ic(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function a_(e){return e.reduce((t,n)=>le(t,n.meta),{})}function Tc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function c_(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;If(e,t[i])<0?r=i:n=i+1}const s=l_(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function l_(e){let t=e;for(;t=t.parent;)if(Tf(t)&&If(e,t)===0)return t}function Tf({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function u_(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(gf," "),o=i.indexOf("="),a=xr(o<0?i:i.slice(0,o)),c=o<0?null:xr(i.slice(o+1));if(a in t){let l=t[a];st(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Sc(e){let t="";for(let n in e){const r=e[n];if(n=Pm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(r)?r.map(i=>i&&ho(i)):[r&&ho(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function f_(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=st(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const d_=Symbol(""),Cc=Symbol(""),fi=Symbol(""),ta=Symbol(""),go=Symbol("");function hr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Wt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(sr(4,{from:n,to:t})):d instanceof Error?c(d):Jm(d)?c(sr(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function Ni(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(h_(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Wt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=ym(u)?u.default:u;o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&Wt(m,n,r,o,a,s)()}))}}return i}function h_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ac(e){const t=qe(fi),n=qe(ta),r=Je(()=>{const c=ke(e.to);return t.resolve(c)}),s=Je(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(rr.bind(null,u));if(d>-1)return d;const m=Rc(c[l-2]);return l>1&&Rc(u)===m&&f[f.length-1].path!==m?f.findIndex(rr.bind(null,c[l-2])):d}),i=Je(()=>s.value>-1&&__(n.params,r.value.params)),o=Je(()=>s.value>-1&&s.value===n.matched.length-1&&vf(n.params,r.value.params));function a(c={}){return m_(c)?t[ke(e.replace)?"replace":"push"](ke(e.to)).catch(Tr):Promise.resolve()}return{route:r,href:Je(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const p_=Gr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ac,setup(e,{slots:t}){const n=Kr(Ac(e)),{options:r}=qe(fi),s=Je(()=>({[Pc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Pc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:ai("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),g_=p_;function m_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function __(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!st(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Rc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Pc=(e,t,n)=>e??t??n,y_=Gr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=qe(go),s=Je(()=>e.route||r.value),i=qe(Cc,0),o=Je(()=>{let l=ke(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Je(()=>s.value.matched[o.value]);Gn(Cc,Je(()=>o.value+1)),Gn(d_,a),Gn(go,s);const c=He();return zn(()=>[c.value,a.value,e.name],([l,u,f],[d,m,v])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!rr(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return Oc(n.default,{Component:d,route:l});const m=f.props[u],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,U=ai(d,le({},v,t,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Oc(n.default,{Component:U,route:l})||U}}});function Oc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Sf=y_;function v_(e){const t=s_(e.routes,e),n=e.parseQuery||u_,r=e.stringifyQuery||Sc,s=e.history,i=hr(),o=hr(),a=hr(),c=$l(Ut);let l=Ut;xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oi.bind(null,C=>""+C),f=Oi.bind(null,km),d=Oi.bind(null,xr);function m(C,H){let $,q;return wf(C)?($=t.getRecordMatcher(C),q=H):q=C,t.addRoute(q,$)}function v(C){const H=t.getRecordMatcher(C);H&&t.removeRoute(H)}function k(){return t.getRoutes().map(C=>C.record)}function U(C){return!!t.getRecordMatcher(C)}function D(C,H){if(H=le({},H||c.value),typeof C=="string"){const p=ki(n,C,H.path),_=t.resolve({path:p.path},H),A=s.createHref(p.fullPath);return le(p,_,{params:d(_.params),hash:xr(p.hash),redirectedFrom:void 0,href:A})}let $;if(C.path!=null)$=le({},C,{path:ki(n,C.path,H.path).path});else{const p=le({},C.params);for(const _ in p)p[_]==null&&delete p[_];$=le({},C,{params:f(p)}),H.params=f(H.params)}const q=t.resolve($,H),oe=C.hash||"";q.params=u(d(q.params));const ge=Mm(r,le({},C,{hash:Rm(oe),path:q.path})),h=s.createHref(ge);return le({fullPath:ge,hash:oe,query:r===Sc?f_(C.query):C.query||{}},q,{redirectedFrom:void 0,href:h})}function E(C){return typeof C=="string"?ki(n,C,c.value.path):le({},C)}function g(C,H){if(l!==C)return sr(8,{from:H,to:C})}function y(C){return L(C)}function T(C){return y(le(E(C),{replace:!0}))}function w(C){const H=C.matched[C.matched.length-1];if(H&&H.redirect){const{redirect:$}=H;let q=typeof $=="function"?$(C):$;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=E(q):{path:q},q.params={}),le({query:C.query,hash:C.hash,params:q.path!=null?{}:C.params},q)}}function L(C,H){const $=l=D(C),q=c.value,oe=C.state,ge=C.force,h=C.replace===!0,p=w($);if(p)return L(le(E(p),{state:typeof p=="object"?le({},oe,p.state):oe,force:ge,replace:h}),H||$);const _=$;_.redirectedFrom=H;let A;return!ge&&Dm(r,q,$)&&(A=sr(16,{to:_,from:q}),ot(q,q,!0,!1)),(A?Promise.resolve(A):I(_,q)).catch(S=>gt(S)?gt(S,2)?S:Dt(S):G(S,_,q)).then(S=>{if(S){if(gt(S,2))return L(le({replace:h},E(S.to),{state:typeof S.to=="object"?le({},oe,S.to.state):oe,force:ge}),H||_)}else S=R(_,q,!0,h,oe);return O(_,q,S),S})}function B(C,H){const $=g(C,H);return $?Promise.reject($):Promise.resolve()}function b(C){const H=Nn.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(C):C()}function I(C,H){let $;const[q,oe,ge]=b_(C,H);$=Ni(q.reverse(),"beforeRouteLeave",C,H);for(const p of q)p.leaveGuards.forEach(_=>{$.push(Wt(_,C,H))});const h=B.bind(null,C,H);return $.push(h),Ce($).then(()=>{$=[];for(const p of i.list())$.push(Wt(p,C,H));return $.push(h),Ce($)}).then(()=>{$=Ni(oe,"beforeRouteUpdate",C,H);for(const p of oe)p.updateGuards.forEach(_=>{$.push(Wt(_,C,H))});return $.push(h),Ce($)}).then(()=>{$=[];for(const p of ge)if(p.beforeEnter)if(st(p.beforeEnter))for(const _ of p.beforeEnter)$.push(Wt(_,C,H));else $.push(Wt(p.beforeEnter,C,H));return $.push(h),Ce($)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),$=Ni(ge,"beforeRouteEnter",C,H,b),$.push(h),Ce($))).then(()=>{$=[];for(const p of o.list())$.push(Wt(p,C,H));return $.push(h),Ce($)}).catch(p=>gt(p,8)?p:Promise.reject(p))}function O(C,H,$){a.list().forEach(q=>b(()=>q(C,H,$)))}function R(C,H,$,q,oe){const ge=g(C,H);if(ge)return ge;const h=H===Ut,p=xn?history.state:{};$&&(q||h?s.replace(C.fullPath,le({scroll:h&&p&&p.scroll},oe)):s.push(C.fullPath,oe)),c.value=C,ot(C,H,$,h),Dt()}let j;function ne(){j||(j=s.listen((C,H,$)=>{if(!ss.listening)return;const q=D(C),oe=w(q);if(oe){L(le(oe,{replace:!0}),q).catch(Tr);return}l=q;const ge=c.value;xn&&jm(_c(ge.fullPath,$.delta),ui()),I(q,ge).catch(h=>gt(h,12)?h:gt(h,2)?(L(h.to,q).then(p=>{gt(p,20)&&!$.delta&&$.type===Fr.pop&&s.go(-1,!1)}).catch(Tr),Promise.reject()):($.delta&&s.go(-$.delta,!1),G(h,q,ge))).then(h=>{h=h||R(q,ge,!1),h&&($.delta&&!gt(h,8)?s.go(-$.delta,!1):$.type===Fr.pop&&gt(h,20)&&s.go(-1,!1)),O(q,ge,h)}).catch(Tr)}))}let ie=hr(),K=hr(),Z;function G(C,H,$){Dt(C);const q=K.list();return q.length?q.forEach(oe=>oe(C,H,$)):console.error(C),Promise.reject(C)}function Qe(){return Z&&c.value!==Ut?Promise.resolve():new Promise((C,H)=>{ie.add([C,H])})}function Dt(C){return Z||(Z=!C,ne(),ie.list().forEach(([H,$])=>C?$(C):H()),ie.reset()),C}function ot(C,H,$,q){const{scrollBehavior:oe}=e;if(!xn||!oe)return Promise.resolve();const ge=!$&&Wm(_c(C.fullPath,0))||(q||!$)&&history.state&&history.state.scroll||null;return qr().then(()=>oe(C,H,ge)).then(h=>h&&Vm(h)).catch(h=>G(h,C,H))}const Ne=C=>s.go(C);let kn;const Nn=new Set,ss={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,hasRoute:U,getRoutes:k,resolve:D,options:e,push:y,replace:T,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:Qe,install(C){const H=this;C.component("RouterLink",g_),C.component("RouterView",Sf),C.config.globalProperties.$router=H,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),xn&&!kn&&c.value===Ut&&(kn=!0,y(s.location).catch(oe=>{}));const $={};for(const oe in Ut)Object.defineProperty($,oe,{get:()=>c.value[oe],enumerable:!0});C.provide(fi,H),C.provide(ta,Lo($)),C.provide(go,c);const q=C.unmount;Nn.add(C),C.unmount=function(){Nn.delete(C),Nn.size<1&&(l=Ut,j&&j(),j=null,c.value=Ut,kn=!1,Z=!1),q()}}};function Ce(C){return C.reduce((H,$)=>H.then(()=>b($)),Promise.resolve())}return ss}function b_(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>rr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>rr(l,c))||s.push(c))}return[n,r,s]}function di(){return qe(fi)}function Cf(){return qe(ta)}var kc={};/**
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
 */const Af=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},w_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Af(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):w_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new E_;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class E_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I_=function(e){const t=Af(e);return Rf.encodeByteArray(t,!0)},Pf=function(e){return I_(e).replace(/\./g,"")},Of=function(e){try{return Rf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function T_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const S_=()=>T_().__FIREBASE_DEFAULTS__,C_=()=>{if(typeof process>"u"||typeof kc>"u")return;const e=kc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},A_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Of(e[1]);return t&&JSON.parse(t)},na=()=>{try{return S_()||C_()||A_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},R_=e=>{var t,n;return(n=(t=na())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},kf=()=>{var e;return(e=na())===null||e===void 0?void 0:e.config},Nf=e=>{var t;return(t=na())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class P_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function O_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Lf(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function k_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function N_(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Mf(){try{return typeof indexedDB=="object"}catch{return!1}}function Df(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function L_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const M_="FirebaseError";class pt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=M_,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,On.prototype.create)}}class On{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?D_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pt(s,a,r)}}function D_(e,t){return e.replace(x_,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const x_=/\{\$([^}]+)}/g;function F_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ur(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Nc(i)&&Nc(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nc(e){return e!==null&&typeof e=="object"}/**
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
 */function Qr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function _r(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function yr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function U_(e,t){const n=new $_(e,t);return n.subscribe.bind(n)}class $_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");B_(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Li(){}/**
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
 */const H_=1e3,V_=2,j_=4*60*60*1e3,W_=.5;function Lc(e,t=H_,n=V_){const r=t*Math.pow(n,e),s=Math.round(W_*r*(Math.random()-.5)*2);return Math.min(j_,r+s)}/**
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
 */function it(e){return e&&e._delegate?e._delegate:e}class ht{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class K_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new P_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(G_(t))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=cn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=cn){return this.instances.has(t)}getOptions(t=cn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:q_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=cn){return this.component?this.component.multipleInstances?t:cn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function q_(e){return e===cn?void 0:e}function G_(e){return e.instantiationMode==="EAGER"}/**
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
 */class z_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new K_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(de||(de={}));const J_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Y_=de.INFO,X_={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},Q_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=X_[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ra{constructor(t){this.name=t,this._logLevel=Y_,this._logHandler=Q_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in de))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?J_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...t),this._logHandler(this,de.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...t),this._logHandler(this,de.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,de.INFO,...t),this._logHandler(this,de.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,de.WARN,...t),this._logHandler(this,de.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...t),this._logHandler(this,de.ERROR,...t)}}const Z_=(e,t)=>t.some(n=>e instanceof n);let Mc,Dc;function ey(){return Mc||(Mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ty(){return Dc||(Dc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xf=new WeakMap,mo=new WeakMap,Ff=new WeakMap,Mi=new WeakMap,sa=new WeakMap;function ny(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Xt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&xf.set(n,e)}).catch(()=>{}),sa.set(t,e),t}function ry(e){if(mo.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});mo.set(e,t)}let _o={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return mo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ff.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sy(e){_o=e(_o)}function iy(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Di(this),t,...n);return Ff.set(r,t.sort?t.sort():[t]),Xt(r)}:ty().includes(e)?function(...t){return e.apply(Di(this),t),Xt(xf.get(this))}:function(...t){return Xt(e.apply(Di(this),t))}}function oy(e){return typeof e=="function"?iy(e):(e instanceof IDBTransaction&&ry(e),Z_(e,ey())?new Proxy(e,_o):e)}function Xt(e){if(e instanceof IDBRequest)return ny(e);if(Mi.has(e))return Mi.get(e);const t=oy(e);return t!==e&&(Mi.set(e,t),sa.set(t,e)),t}const Di=e=>sa.get(e);function Uf(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Xt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xt(o.result),c.oldVersion,c.newVersion,Xt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ay=["get","getKey","getAll","getAllKeys","count"],cy=["put","add","delete","clear"],xi=new Map;function xc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xi.get(t))return xi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=cy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ay.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return xi.set(t,i),i}sy(e=>({...e,get:(t,n,r)=>xc(t,n)||e.get(t,n,r),has:(t,n)=>!!xc(t,n)||e.has(t,n)}));/**
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
 */class ly{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const yo="@firebase/app",Fc="0.10.5";/**
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
 */const wn=new ra("@firebase/app"),fy="@firebase/app-compat",dy="@firebase/analytics-compat",hy="@firebase/analytics",py="@firebase/app-check-compat",gy="@firebase/app-check",my="@firebase/auth",_y="@firebase/auth-compat",yy="@firebase/database",vy="@firebase/database-compat",by="@firebase/functions",wy="@firebase/functions-compat",Ey="@firebase/installations",Iy="@firebase/installations-compat",Ty="@firebase/messaging",Sy="@firebase/messaging-compat",Cy="@firebase/performance",Ay="@firebase/performance-compat",Ry="@firebase/remote-config",Py="@firebase/remote-config-compat",Oy="@firebase/storage",ky="@firebase/storage-compat",Ny="@firebase/firestore",Ly="@firebase/vertexai-preview",My="@firebase/firestore-compat",Dy="firebase",xy="10.12.2";/**
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
 */const vo="[DEFAULT]",Fy={[yo]:"fire-core",[fy]:"fire-core-compat",[hy]:"fire-analytics",[dy]:"fire-analytics-compat",[gy]:"fire-app-check",[py]:"fire-app-check-compat",[my]:"fire-auth",[_y]:"fire-auth-compat",[yy]:"fire-rtdb",[vy]:"fire-rtdb-compat",[by]:"fire-fn",[wy]:"fire-fn-compat",[Ey]:"fire-iid",[Iy]:"fire-iid-compat",[Ty]:"fire-fcm",[Sy]:"fire-fcm-compat",[Cy]:"fire-perf",[Ay]:"fire-perf-compat",[Ry]:"fire-rc",[Py]:"fire-rc-compat",[Oy]:"fire-gcs",[ky]:"fire-gcs-compat",[Ny]:"fire-fst",[My]:"fire-fst-compat",[Ly]:"fire-vertex","fire-js":"fire-js",[Dy]:"fire-js-all"};/**
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
 */const Us=new Map,Uy=new Map,bo=new Map;function Uc(e,t){try{e.container.addComponent(t)}catch(n){wn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Rt(e){const t=e.name;if(bo.has(t))return wn.debug(`There were multiple attempts to register component ${t}.`),!1;bo.set(t,e);for(const n of Us.values())Uc(n,e);for(const n of Uy.values())Uc(n,e);return!0}function ar(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function tt(e){return e.settings!==void 0}/**
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
 */const $y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new On("app","Firebase",$y);/**
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
 */class By{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const Zr=xy;function $f(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vo,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Qt.create("bad-app-name",{appName:String(s)});if(n||(n=kf()),!n)throw Qt.create("no-options");const i=Us.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw Qt.create("duplicate-app",{appName:s})}const o=new z_(s);for(const c of bo.values())o.addComponent(c);const a=new By(n,r,o);return Us.set(s,a),a}function Bf(e=vo){const t=Us.get(e);if(!t&&e===vo&&kf())return $f();if(!t)throw Qt.create("no-app",{appName:e});return t}function ut(e,t,n){var r;let s=(r=Fy[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),wn.warn(a.join(" "));return}Rt(new ht(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Hy="firebase-heartbeat-database",Vy=1,$r="firebase-heartbeat-store";let Fi=null;function Hf(){return Fi||(Fi=Uf(Hy,Vy,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore($r)}catch(n){console.warn(n)}}}}).catch(e=>{throw Qt.create("idb-open",{originalErrorMessage:e.message})})),Fi}async function jy(e){try{const n=(await Hf()).transaction($r),r=await n.objectStore($r).get(Vf(e));return await n.done,r}catch(t){if(t instanceof pt)wn.warn(t.message);else{const n=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});wn.warn(n.message)}}}async function $c(e,t){try{const r=(await Hf()).transaction($r,"readwrite");await r.objectStore($r).put(t,Vf(e)),await r.done}catch(n){if(n instanceof pt)wn.warn(n.message);else{const r=Qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function Vf(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Wy=1024,Ky=30*24*60*60*1e3;class qy{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Bc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ky}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bc(),{heartbeatsToSend:r,unsentEntries:s}=Gy(this._heartbeatsCache.heartbeats),i=Pf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bc(){return new Date().toISOString().substring(0,10)}function Gy(e,t=Wy){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Hc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Hc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zy{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mf()?Df().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $c(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $c(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Hc(e){return Pf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Jy(e){Rt(new ht("platform-logger",t=>new ly(t),"PRIVATE")),Rt(new ht("heartbeat",t=>new qy(t),"PRIVATE")),ut(yo,Fc,e),ut(yo,Fc,"esm2017"),ut("fire-js","")}Jy("");function ia(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function jf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yy=jf,Wf=new On("auth","Firebase",jf());/**
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
 */const $s=new ra("@firebase/auth");function Xy(e,...t){$s.logLevel<=de.WARN&&$s.warn(`Auth (${Zr}): ${e}`,...t)}function Es(e,...t){$s.logLevel<=de.ERROR&&$s.error(`Auth (${Zr}): ${e}`,...t)}/**
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
 */function Xe(e,...t){throw aa(e,...t)}function nt(e,...t){return aa(e,...t)}function oa(e,t,n){const r=Object.assign(Object.assign({},Yy()),{[t]:n});return new On("auth","Firebase",r).create(t,{appName:e.name})}function Ct(e){return oa(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qy(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Xe(e,"argument-error"),oa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function aa(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Wf.create(e,...t)}function Q(e,t,...n){if(!e)throw aa(t,...n)}function bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Es(t),new Error(t)}function Pt(e,t){e||bt(t)}/**
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
 */function wo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Zy(){return Vc()==="http:"||Vc()==="https:"}function Vc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function ev(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zy()||Lf()||"connection"in navigator)?navigator.onLine:!0}function tv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class es{constructor(t,n){this.shortDelay=t,this.longDelay=n,Pt(n>t,"Short delay should be less than long delay!"),this.isMobile=O_()||k_()}get(){return ev()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ca(e,t){Pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Kf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const nv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rv=new es(3e4,6e4);function Nt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lt(e,t,n,r,s={}){return qf(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Qr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Kf.fetch()(Gf(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function qf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},nv),t);try{const s=new iv(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ys(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ys(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw ys(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw oa(e,u,l);Xe(e,u)}}catch(s){if(s instanceof pt)throw s;Xe(e,"network-request-failed",{message:String(s)})}}async function ts(e,t,n,r,s={}){const i=await Lt(e,t,n,r,s);return"mfaPendingCredential"in i&&Xe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Gf(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?ca(e.config,s):`${e.config.apiScheme}://${s}`}function sv(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),rv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ys(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nt(e,t,r);return s.customData._tokenResponse=n,s}function jc(e){return e!==void 0&&e.enterprise!==void 0}class ov{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return sv(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function av(e,t){return Lt(e,"GET","/v2/recaptchaConfig",Nt(e,t))}/**
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
 */async function cv(e,t){return Lt(e,"POST","/v1/accounts:delete",t)}async function zf(e,t){return Lt(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Cr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lv(e,t=!1){const n=it(e),r=await n.getIdToken(t),s=la(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Cr(Ui(s.auth_time)),issuedAtTime:Cr(Ui(s.iat)),expirationTime:Cr(Ui(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ui(e){return Number(e)*1e3}function la(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Es("JWT malformed, contained fewer than 3 sections"),null;try{const s=Of(n);return s?JSON.parse(s):(Es("Failed to decode base64 JWT payload"),null)}catch(s){return Es("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wc(e){const t=la(e);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Br(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof pt&&uv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function uv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class fv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eo{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bs(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Br(e,zf(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Jf(i.providerUserInfo):[],a=hv(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Eo(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function dv(e){const t=it(e);await Bs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hv(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Jf(e){return e.map(t=>{var{providerId:n}=t,r=ia(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pv(e,t){const n=await qf(e,{},async()=>{const r=Qr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Gf(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gv(e,t){return Lt(e,"POST","/v2/accounts:revokeToken",Nt(e,t))}/**
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
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Wc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const n=Wc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pv(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jn;return r&&(Q(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function $t(e,t){Q(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class wt{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=ia(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Eo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Br(this,this.stsTokenManager.getToken(this.auth,t));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return lv(this,t)}reload(){return dv(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new wt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Bs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(Ct(this.auth));const t=await this.getIdToken();return await Br(this,cv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:y,isAnonymous:T,providerData:w,stsTokenManager:L}=n;Q(g&&L,t,"internal-error");const B=Jn.fromJSON(this.name,L);Q(typeof g=="string",t,"internal-error"),$t(f,t.name),$t(d,t.name),Q(typeof y=="boolean",t,"internal-error"),Q(typeof T=="boolean",t,"internal-error"),$t(m,t.name),$t(v,t.name),$t(k,t.name),$t(U,t.name),$t(D,t.name),$t(E,t.name);const b=new wt({uid:g,auth:t,email:d,emailVerified:y,displayName:f,isAnonymous:T,photoURL:v,phoneNumber:m,tenantId:k,stsTokenManager:B,createdAt:D,lastLoginAt:E});return w&&Array.isArray(w)&&(b.providerData=w.map(I=>Object.assign({},I))),U&&(b._redirectEventId=U),b}static async _fromIdTokenResponse(t,n,r=!1){const s=new Jn;s.updateFromServerResponse(n);const i=new wt({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await Bs(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Jn;a.updateFromIdToken(r);const c=new wt({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Eo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Kc=new Map;function Et(e){Pt(e instanceof Function,"Expected a class definition");let t=Kc.get(e);return t?(Pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Kc.set(e,t),t)}/**
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
 */class Yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Yf.type="NONE";const qc=Yf;/**
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
 */function Is(e,t,n){return`firebase:${e}:${t}:${n}`}class Yn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Is(this.userKey,s.apiKey,i),this.fullPersistenceKey=Is("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?wt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Yn(Et(qc),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Et(qc);const o=Is(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=wt._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Yn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Yn(i,t,r))}}/**
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
 */function Gc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Zf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Xf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(td(t))return"Blackberry";if(nd(t))return"Webos";if(ua(t))return"Safari";if((t.includes("chrome/")||Qf(t))&&!t.includes("edge/"))return"Chrome";if(ed(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xf(e=Re()){return/firefox\//i.test(e)}function ua(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qf(e=Re()){return/crios\//i.test(e)}function Zf(e=Re()){return/iemobile/i.test(e)}function ed(e=Re()){return/android/i.test(e)}function td(e=Re()){return/blackberry/i.test(e)}function nd(e=Re()){return/webos/i.test(e)}function hi(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function mv(e=Re()){var t;return hi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function _v(){return N_()&&document.documentMode===10}function rd(e=Re()){return hi(e)||ed(e)||nd(e)||td(e)||/windows phone/i.test(e)||Zf(e)}function yv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function sd(e,t=[]){let n;switch(e){case"Browser":n=Gc(Re());break;case"Worker":n=`${Gc(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zr}/${r}`}/**
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
 */class vv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bv(e,t={}){return Lt(e,"GET","/v2/passwordPolicy",Nt(e,t))}/**
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
 */const wv=6;class Ev{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wv,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
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
 */class Iv{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zc(this),this.idTokenSubscription=new zc(this),this.beforeStateQueue=new vv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await zf(this,{idToken:t}),r=await wt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(tt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bs(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=tv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(tt(this.app))return Promise.reject(Ct(this));const n=t?it(t):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(Ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return tt(this.app)?Promise.reject(Ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bv(this),n=new Ev(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new On("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gv(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Et(t)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Yn.create(this,[Et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Xy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mt(e){return it(e)}class zc{constructor(t){this.auth=t,this.observer=null,this.addObserver=U_(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tv(e){pi=e}function id(e){return pi.loadJS(e)}function Sv(){return pi.recaptchaEnterpriseScript}function Cv(){return pi.gapiScript}function Av(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Rv="recaptcha-enterprise",Pv="NO_RECAPTCHA";class Ov{constructor(t){this.type=Rv,this.auth=Mt(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{av(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ov(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;jc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(Pv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&jc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Sv();c.length!==0&&(c+=a),id(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Jc(e,t,n,r=!1){const s=new Ov(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hs(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jc(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jc(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
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
 */function kv(e,t){const n=ar(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ur(i,t??{}))return s;Xe(s,"already-initialized")}return n.initialize({options:t})}function Nv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Et);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Lv(e,t,n){const r=Mt(e);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=od(t),{host:o,port:a}=Mv(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Dv()}function od(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Mv(e){const t=od(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Yc(o)}}}function Yc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Dv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class fa{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(t){return bt("not implemented")}_linkToIdToken(t,n){return bt("not implemented")}_getReauthenticationResolver(t){return bt("not implemented")}}async function xv(e,t){return Lt(e,"POST","/v1/accounts:signUp",t)}/**
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
 */async function Fv(e,t){return ts(e,"POST","/v1/accounts:signInWithPassword",Nt(e,t))}async function Uv(e,t){return Lt(e,"POST","/v1/accounts:sendOobCode",Nt(e,t))}async function $v(e,t){return Uv(e,t)}/**
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
 */async function Bv(e,t){return ts(e,"POST","/v1/accounts:signInWithEmailLink",Nt(e,t))}async function Hv(e,t){return ts(e,"POST","/v1/accounts:signInWithEmailLink",Nt(e,t))}/**
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
 */class Hr extends fa{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Hr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Hr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(t,n,"signInWithPassword",Fv);case"emailLink":return Bv(t,{email:this._email,oobCode:this._password});default:Xe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hs(t,r,"signUpPassword",xv);case"emailLink":return Hv(t,{idToken:n,email:this._email,oobCode:this._password});default:Xe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Xn(e,t){return ts(e,"POST","/v1/accounts:signInWithIdp",Nt(e,t))}/**
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
 */const Vv="http://localhost";class En extends fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new En(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=ia(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new En(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Xn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Xn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Xn(t,n)}buildRequest(){const t={requestUri:Vv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Qr(n)}return t}}/**
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
 */function jv(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wv(e){const t=_r(yr(e)).link,n=t?_r(yr(t)).deep_link_id:null,r=_r(yr(e)).deep_link_id;return(r?_r(yr(r)).link:null)||r||n||t||e}class da{constructor(t){var n,r,s,i,o,a;const c=_r(yr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=jv((s=c.mode)!==null&&s!==void 0?s:null);Q(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Wv(t);try{return new da(n)}catch{return null}}}/**
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
 */class cr{constructor(){this.providerId=cr.PROVIDER_ID}static credential(t,n){return Hr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=da.parseLink(n);return Q(r,"argument-error"),Hr._fromEmailAndCode(t,r.code,r.tenantId)}}cr.PROVIDER_ID="password";cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ha{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends ha{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class qt extends ns{constructor(){super("facebook.com")}static credential(t){return En._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return qt.credentialFromTaggedObject(t)}static credentialFromError(t){return qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return qt.credential(t.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
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
 */class Me extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return En._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Me.credential(n,r)}catch{return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com";Me.PROVIDER_ID="google.com";/**
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
 */class Gt extends ns{constructor(){super("github.com")}static credential(t){return En._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
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
 */class zt extends ns{constructor(){super("twitter.com")}static credential(t,n){return En._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return zt.credentialFromTaggedObject(t)}static credentialFromError(t){return zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return zt.credential(n,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
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
 */async function Kv(e,t){return ts(e,"POST","/v1/accounts:signUp",Nt(e,t))}/**
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
 */class In{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await wt._fromIdTokenResponse(t,r,s),o=Xc(r);return new In({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=Xc(r);return new In({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function Xc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Vs extends pt{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vs.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Vs(t,n,r,s)}}function ad(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vs._fromErrorAndOperation(e,i,t,r):i})}async function qv(e,t,n=!1){const r=await Br(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return In._forOperation(e,"link",r)}/**
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
 */async function Gv(e,t,n=!1){const{auth:r}=e;if(tt(r.app))return Promise.reject(Ct(r));const s="reauthenticate";try{const i=await Br(e,ad(r,s,t,e),n);Q(i.idToken,r,"internal-error");const o=la(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(e.uid===a,r,"user-mismatch"),In._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xe(r,"user-mismatch"),i}}/**
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
 */async function cd(e,t,n=!1){if(tt(e.app))return Promise.reject(Ct(e));const r="signIn",s=await ad(e,r,t),i=await In._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function zv(e,t){return cd(Mt(e),t)}/**
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
 */async function ld(e){const t=Mt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Jv(e,t,n){const r=Mt(e);await Hs(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",$v)}async function Yv(e,t,n){if(tt(e.app))return Promise.reject(Ct(e));const r=Mt(e),o=await Hs(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Kv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ld(e),c}),a=await In._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Xv(e,t,n){return tt(e.app)?Promise.reject(Ct(e)):zv(it(e),cr.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ld(e),r})}function Qv(e,t,n,r){return it(e).onIdTokenChanged(t,n,r)}function Zv(e,t,n){return it(e).beforeAuthStateChanged(t,n)}function ud(e,t,n,r){return it(e).onAuthStateChanged(t,n,r)}function eb(e){return it(e).signOut()}const js="__sak";/**
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
 */class fd{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(js,"1"),this.storage.removeItem(js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function tb(){const e=Re();return ua(e)||hi(e)}const nb=1e3,rb=10;class dd extends fd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tb()&&yv(),this.fallbackToPolling=rd(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_v()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,rb):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}dd.type="LOCAL";const sb=dd;/**
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
 */class hd extends fd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}hd.type="SESSION";const pd=hd;/**
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
 */function ib(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class gi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new gi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ib(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gi.receivers=[];/**
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
 */function pa(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ob{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=pa("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ft(){return window}function ab(e){ft().location.href=e}/**
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
 */function gd(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function cb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ub(){return gd()?self:null}/**
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
 */const md="firebaseLocalStorageDb",fb=1,Ws="firebaseLocalStorage",_d="fbase_key";class rs{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mi(e,t){return e.transaction([Ws],t?"readwrite":"readonly").objectStore(Ws)}function db(){const e=indexedDB.deleteDatabase(md);return new rs(e).toPromise()}function Io(){const e=indexedDB.open(md,fb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ws,{keyPath:_d})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ws)?t(r):(r.close(),await db(),t(await Io()))})})}async function Qc(e,t,n){const r=mi(e,!0).put({[_d]:t,value:n});return new rs(r).toPromise()}async function hb(e,t){const n=mi(e,!1).get(t),r=await new rs(n).toPromise();return r===void 0?null:r.value}function Zc(e,t){const n=mi(e,!0).delete(t);return new rs(n).toPromise()}const pb=800,gb=3;class yd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Io(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gi._getInstance(ub()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await cb(),!this.activeServiceWorker)return;this.sender=new ob(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||lb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Io();return await Qc(t,js,"1"),await Zc(t,js),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>hb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=mi(s,!1).getAll();return new rs(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yd.type="LOCAL";const mb=yd;new es(3e4,6e4);/**
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
 */function vd(e,t){return t?Et(t):(Q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class ga extends fa{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Xn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Xn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function _b(e){return cd(e.auth,new ga(e),e.bypassAuthState)}function yb(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),Gv(n,new ga(e),e.bypassAuthState)}async function vb(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),qv(n,new ga(e),e.bypassAuthState)}/**
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
 */class bd{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _b;case"linkViaPopup":case"linkViaRedirect":return vb;case"reauthViaPopup":case"reauthViaRedirect":return yb;default:Xe(this.auth,"internal-error")}}resolve(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bb=new es(2e3,1e4);async function wd(e,t,n){if(tt(e.app))return Promise.reject(nt(e,"operation-not-supported-in-this-environment"));const r=Mt(e);Qy(e,t,ha);const s=vd(r,n);return new un(r,"signInViaPopup",t,s).executeNotNull()}class un extends bd{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){Pt(this.filter.length===1,"Popup operations only handle one event");const t=pa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,bb.get())};t()}}un.currentPopupAction=null;/**
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
 */const wb="pendingRedirect",Ts=new Map;class Eb extends bd{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ts.get(this.auth._key());if(!t){try{const r=await Ib(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ts.set(this.auth._key(),t)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ib(e,t){const n=Cb(t),r=Sb(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Tb(e,t){Ts.set(e._key(),t)}function Sb(e){return Et(e._redirectPersistence)}function Cb(e){return Is(wb,e.config.apiKey,e.name)}async function Ab(e,t,n=!1){if(tt(e.app))return Promise.reject(Ct(e));const r=Mt(e),s=vd(r,t),o=await new Eb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Rb=10*60*1e3;class Pb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ob(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ed(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Rb&&this.cachedEventUids.clear(),this.cachedEventUids.has(el(t))}saveEventToCache(t){this.cachedEventUids.add(el(t)),this.lastProcessedEventTime=Date.now()}}function el(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ed({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ob(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ed(e);default:return!1}}/**
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
 */async function kb(e,t={}){return Lt(e,"GET","/v1/projects",t)}/**
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
 */const Nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lb=/^https?/;async function Mb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await kb(e);for(const n of t)try{if(Db(n))return}catch{}Xe(e,"unauthorized-domain")}function Db(e){const t=wo(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Lb.test(n))return!1;if(Nb.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const xb=new es(3e4,6e4);function tl(){const e=ft().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Fb(e){return new Promise((t,n)=>{var r,s,i;function o(){tl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{tl(),n(nt(e,"network-request-failed"))},timeout:xb.get()})}if(!((s=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=ft().gapi)===null||i===void 0)&&i.load)o();else{const a=Av("iframefcb");return ft()[a]=()=>{gapi.load?o():n(nt(e,"network-request-failed"))},id(`${Cv()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Ss=null,t})}let Ss=null;function Ub(e){return Ss=Ss||Fb(e),Ss}/**
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
 */const $b=new es(5e3,15e3),Bb="__/auth/iframe",Hb="emulator/auth/iframe",Vb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wb(e){const t=e.config;Q(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ca(t,Hb):`https://${e.config.authDomain}/${Bb}`,r={apiKey:t.apiKey,appName:e.name,v:Zr},s=jb.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Qr(r).slice(1)}`}async function Kb(e){const t=await Ub(e),n=ft().gapi;return Q(n,e,"internal-error"),t.open({where:document.body,url:Wb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nt(e,"network-request-failed"),a=ft().setTimeout(()=>{i(o)},$b.get());function c(){ft().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const qb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gb=500,zb=600,Jb="_blank",Yb="http://localhost";class nl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xb(e,t,n,r=Gb,s=zb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},qb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Qf(l)?Jb:n),Xf(l)&&(t=t||Yb,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(mv(l)&&a!=="_self")return Qb(t||"",a),new nl(null);const f=window.open(t||"",a,u);Q(f,e,"popup-blocked");try{f.focus()}catch{}return new nl(f)}function Qb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Zb="__/auth/handler",ew="emulator/auth/handler",tw=encodeURIComponent("fac");async function rl(e,t,n,r,s,i){Q(e.config.authDomain,e,"auth-domain-config-required"),Q(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Zr,eventId:s};if(t instanceof ha){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",F_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof ns){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${tw}=${encodeURIComponent(c)}`:"";return`${nw(e)}?${Qr(a).slice(1)}${l}`}function nw({config:e}){return e.emulator?ca(e,ew):`https://${e.authDomain}/${Zb}`}/**
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
 */const $i="webStorageSupport";class rw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pd,this._completeRedirectFn=Ab,this._overrideRedirectResult=Tb}async _openPopup(t,n,r,s){var i;Pt((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await rl(t,n,r,wo(),s);return Xb(t,o,pa())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await rl(t,n,r,wo(),s);return ab(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Kb(t),r=new Pb(t);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($i,{type:$i},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$i];o!==void 0&&n(!!o),Xe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Mb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return rd()||ua()||hi()}}const sw=rw;var sl="@firebase/auth",il="1.7.4";/**
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
 */class iw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ow(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aw(e){Rt(new ht("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sd(e)},l=new Iv(r,s,i,c);return Nv(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Rt(new ht("auth-internal",t=>{const n=Mt(t.getProvider("auth").getImmediate());return(r=>new iw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(sl,il,ow(e)),ut(sl,il,"esm2017")}/**
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
 */const cw=5*60,lw=Nf("authIdTokenMaxAge")||cw;let ol=null;const uw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lw)return;const s=n==null?void 0:n.token;ol!==s&&(ol=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _i(e=Bf()){const t=ar(e,"auth");if(t.isInitialized())return t.getImmediate();const n=kv(e,{popupRedirectResolver:sw,persistence:[mb,sb,pd]}),r=Nf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=uw(i.toString());Zv(n,o,()=>o(n.currentUser)),Qv(n,a=>o(a))}}const s=R_("auth");return s&&Lv(n,`http://${s}`),n}function fw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}Tv({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=nt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",fw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aw("Browser");var dw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function pw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var Id={exports:{}};const gw=pw(_m);(function(e,t){(function(r,s){e.exports=s(gw)})(dw,n=>(()=>{var r={772:(a,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.default=(l,u)=>{const f=l.__vccOpts||l;for(const[d,m]of u)f[d]=m;return f}},976:a=>{a.exports=n}},s={};function i(a){var c=s[a];if(c!==void 0)return c.exports;var l=s[a]={exports:{}};return r[a](l,l.exports,i),l.exports}i.d=(a,c)=>{for(var l in c)i.o(c,l)&&!i.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},i.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>T,ToastPlugin:()=>L,ToastPositions:()=>v,default:()=>B,useToast:()=>w});var a=i(976);const c=(0,a.createElementVNode)("div",{class:"v-toast__icon"},null,-1),l=["innerHTML"];function u(b,I,O,R,j,ne){return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{"enter-active-class":b.transition.enter,"leave-active-class":b.transition.leave},{default:(0,a.withCtx)(()=>[(0,a.withDirectives)((0,a.createElementVNode)("div",{ref:"root",role:"alert",class:(0,a.normalizeClass)(["v-toast__item",[`v-toast__item--${b.type}`,`v-toast__item--${b.position}`]]),onMouseover:I[0]||(I[0]=ie=>b.toggleTimer(!0)),onMouseleave:I[1]||(I[1]=ie=>b.toggleTimer(!1)),onClick:I[2]||(I[2]=function(){return b.whenClicked&&b.whenClicked(...arguments)})},[c,(0,a.createElementVNode)("p",{class:"v-toast__text",innerHTML:b.message},null,8,l)],34),[[a.vShow,b.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function f(b){var I;typeof b.remove<"u"?b.remove():(I=b.parentNode)==null||I.removeChild(b)}function d(b,I,O){let R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const j=(0,a.h)(b,I,R),ne=document.createElement("div");return ne.classList.add("v-toast--pending"),O.appendChild(ne),(0,a.render)(j,ne),j.component}class m{constructor(I,O){this.startedAt=Date.now(),this.callback=I,this.delay=O,this.timer=setTimeout(I,O)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const v=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function k(b){return{all:b=b||new Map,on:function(I,O){var R=b.get(I);R?R.push(O):b.set(I,[O])},off:function(I,O){var R=b.get(I);R&&(O?R.splice(R.indexOf(O)>>>0,1):b.set(I,[]))},emit:function(I,O){var R=b.get(I);R&&R.slice().map(function(j){j(O)}),(R=b.get("*"))&&R.slice().map(function(j){j(I,O)})}}}const D=k(),E=(0,a.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:v.BOTTOM_RIGHT,validator(b){return Object.values(v).includes(b)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),D.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const b=document.body;b.appendChild(this.parentTop),b.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const b=this.$refs.root;(0,a.render)(null,b),f(b)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const b=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),f(b),this.isActive=!0,this.duration&&(this.timer=new m(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(b){!this.pauseOnHover||!this.timer||(b?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case v.TOP:case v.TOP_RIGHT:case v.TOP_LEFT:return this.parentTop;case v.BOTTOM:case v.BOTTOM_RIGHT:case v.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case v.TOP:case v.TOP_RIGHT:case v.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case v.BOTTOM:case v.BOTTOM_RIGHT:case v.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){D.off("toast-clear",this.dismiss)}});var g=i(772);const T=(0,g.default)(E,[["render",u]]),w=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(I){let O=null;typeof I=="string"&&(O=I);const j=Object.assign({},{message:O},b,I);return{dismiss:d(T,j,document.body).ctx.dismiss}},clear(){D.emit("toast-clear")},success(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"success"},O))},error(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"error"},O))},info(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"info"},O))},warning(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"warning"},O))},default(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"default"},O))}}},L={install:function(b){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=w(I);b.config.globalProperties.$toast=O,b.provide("$toast",O)}},B=L})(),o})())})(Id);var Td=Id.exports;const mw=hw(Td);function ye(e,t){const n=Td.useToast();switch(e){case"success":n.success(t);break;case"info":n.info(t);break;case"warning":n.warning(t);break;case"error":n.error(t);break;case"default":n.default(t);break;default:n.default(t);break}}const lr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Sd=e=>(Rn("data-v-3f891182"),e=e(),Pn(),e),_w={class:"navBar"},yw={class:"container"},vw=Sd(()=>Y("div",{class:"co"},"CO",-1)),bw=Sd(()=>Y("div",{class:"student"},"STUDENT",-1)),ww={class:"buttons"},Ew={__name:"Nav",props:{isLoggedIn:Boolean},setup(e){const t=_i(),n=di();function r(){eb(t).then(()=>{n.push("/"),ye("success","Successfully singed out!")}).catch(s=>{ye("error",s.message)})}return(s,i)=>{const o=zl("RouterLink");return be(),We("div",_w,[Y("div",yw,[ce(o,{class:"logo",to:"/"},{default:vt(()=>[vw,bw]),_:1}),Y("div",ww,[e.isLoggedIn?mr("",!0):(be(),mn(o,{key:0,class:"button",to:"/Login"},{default:vt(()=>[_n("Login")]),_:1})),e.isLoggedIn?mr("",!0):(be(),mn(o,{key:1,class:"button",to:"/Register"},{default:vt(()=>[_n("Register")]),_:1})),e.isLoggedIn?(be(),mn(o,{key:2,class:"button",to:"/findcostudent"},{default:vt(()=>[_n("Find students")]),_:1})):mr("",!0),e.isLoggedIn?(be(),We("div",{key:3,class:"button",onClick:i[0]||(i[0]=a=>r())},"Sign out")):mr("",!0)])])])}}},Iw=lr(Ew,[["__scopeId","data-v-3f891182"]]),Tw={},Cd=e=>(Rn("data-v-7aaa4f9a"),e=e(),Pn(),e),Sw={class:"footerBox"},Cw=Cd(()=>Y("p",null,"Copyright ©2024",-1)),Aw=Cd(()=>Y("p",null,"Designed by Samuel Coryn",-1)),Rw=[Cw,Aw];function Pw(e,t){return be(),We("div",Sw,Rw)}const Ow=lr(Tw,[["render",Pw],["__scopeId","data-v-7aaa4f9a"]]),kw={class:"navBox"},Nw={__name:"App",setup(e){const t=He(!1);let n;return or(()=>{n=_i(),ud(n,r=>{r?t.value=!0:t.value=!1})}),Gn("isLoggedInKey",t),(r,s)=>(be(),We(ve,null,[Y("div",kw,[ce(Iw,{isLoggedIn:t.value},null,8,["isLoggedIn"])]),ce(ke(Sf),null,{default:vt(({Component:i})=>[ce(ci,{name:"route",mode:"out-in"},{default:vt(()=>[(be(),mn(Yl(i)))]),_:2},1024)]),_:1}),ce(Ow)],64))}},Lw="/costudent-demo/assets/students_stock_photo-BvfkMiXM.jpg",ma=e=>(Rn("data-v-14be6186"),e=e(),Pn(),e),Mw={class:"root"},Dw={class:"grid"},xw={class:"landingColumn"},Fw=ma(()=>Y("div",{class:"title"},[Y("h1",null,"Study better,"),Y("h1",null,"Together")],-1)),Uw=ma(()=>Y("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),$w={class:"buttonArray"},Bw=ma(()=>Y("div",{class:"photo"},[Y("img",{src:Lw,alt:"People studying together."})],-1)),Hw=Jo('<div id="learnMore" data-v-14be6186><div class="article" data-v-14be6186><h1 data-v-14be6186>ABOUT</h1><p data-v-14be6186>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-14be6186>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-14be6186>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-14be6186>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-14be6186>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-14be6186><div class="node" data-v-14be6186><p data-v-14be6186>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-14be6186><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-14be6186></path></svg><div class="node" data-v-14be6186><p data-v-14be6186>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-14be6186><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-14be6186></path></svg><div class="node" data-v-14be6186><p data-v-14be6186>Learn togehter!</p></div></div></div>',1),Vw={__name:"Home",setup(e){function t(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=qe("isLoggedInKey"),s=di();return(i,o)=>(be(),We("div",Mw,[Y("div",Dw,[Y("div",xw,[Fw,Uw,Y("div",$w,[Y("div",{class:"button",onClick:o[0]||(o[0]=a=>n())},"Start studying"),Y("div",{class:"button",onClick:o[1]||(o[1]=a=>t())},"Learn more")])]),Bw]),Hw]))}},jw=lr(Vw,[["__scopeId","data-v-14be6186"]]);var Ww="firebase",Kw="10.12.2";/**
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
 */ut(Ww,Kw,"app");const Ad="@firebase/installations",_a="0.6.7";/**
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
 */const Rd=1e4,Pd=`w:${_a}`,Od="FIS_v2",qw="https://firebaseinstallations.googleapis.com/v1",Gw=60*60*1e3,zw="installations",Jw="Installations";/**
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
 */const Yw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tn=new On(zw,Jw,Yw);function kd(e){return e instanceof pt&&e.code.includes("request-failed")}/**
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
 */function Nd({projectId:e}){return`${qw}/projects/${e}/installations`}function Ld(e){return{token:e.token,requestStatus:2,expiresIn:Qw(e.expiresIn),creationTime:Date.now()}}async function Md(e,t){const r=(await t.json()).error;return Tn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Dd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Xw(e,{refreshToken:t}){const n=Dd(e);return n.append("Authorization",Zw(t)),n}async function xd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Qw(e){return Number(e.replace("s","000"))}function Zw(e){return`${Od} ${e}`}/**
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
 */async function eE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Nd(e),s=Dd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Od,appId:e.appId,sdkVersion:Pd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xd(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ld(l.authToken)}}else throw await Md("Create Installation",c)}/**
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
 */function Fd(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function tE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nE=/^[cdef][\w-]{21}$/,To="";function rE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=sE(e);return nE.test(n)?n:To}catch{return To}}function sE(e){return tE(e).substr(0,22)}/**
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
 */function yi(e){return`${e.appName}!${e.appId}`}/**
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
 */const Ud=new Map;function $d(e,t){const n=yi(e);Bd(n,t),iE(n,t)}function Bd(e,t){const n=Ud.get(e);if(n)for(const r of n)r(t)}function iE(e,t){const n=oE();n&&n.postMessage({key:e,fid:t}),aE()}let fn=null;function oE(){return!fn&&"BroadcastChannel"in self&&(fn=new BroadcastChannel("[Firebase] FID Change"),fn.onmessage=e=>{Bd(e.data.key,e.data.fid)}),fn}function aE(){Ud.size===0&&fn&&(fn.close(),fn=null)}/**
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
 */const cE="firebase-installations-database",lE=1,Sn="firebase-installations-store";let Bi=null;function ya(){return Bi||(Bi=Uf(cE,lE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Sn)}}})),Bi}async function Ks(e,t){const n=yi(e),s=(await ya()).transaction(Sn,"readwrite"),i=s.objectStore(Sn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&$d(e,t.fid),t}async function Hd(e){const t=yi(e),r=(await ya()).transaction(Sn,"readwrite");await r.objectStore(Sn).delete(t),await r.done}async function vi(e,t){const n=yi(e),s=(await ya()).transaction(Sn,"readwrite"),i=s.objectStore(Sn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&$d(e,a.fid),a}/**
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
 */async function va(e){let t;const n=await vi(e.appConfig,r=>{const s=uE(r),i=fE(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===To?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function uE(e){const t=e||{fid:rE(),registrationStatus:0};return Vd(t)}function fE(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Tn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=dE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hE(e)}:{installationEntry:t}}async function dE(e,t){try{const n=await eE(e,t);return Ks(e.appConfig,n)}catch(n){throw kd(n)&&n.customData.serverCode===409?await Hd(e.appConfig):await Ks(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function hE(e){let t=await al(e.appConfig);for(;t.registrationStatus===1;)await Fd(100),t=await al(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await va(e);return r||n}return t}function al(e){return vi(e,t=>{if(!t)throw Tn.create("installation-not-found");return Vd(t)})}function Vd(e){return pE(e)?{fid:e.fid,registrationStatus:0}:e}function pE(e){return e.registrationStatus===1&&e.registrationTime+Rd<Date.now()}/**
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
 */async function gE({appConfig:e,heartbeatServiceProvider:t},n){const r=mE(e,n),s=Xw(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Pd,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xd(()=>fetch(r,a));if(c.ok){const l=await c.json();return Ld(l)}else throw await Md("Generate Auth Token",c)}function mE(e,{fid:t}){return`${Nd(e)}/${t}/authTokens:generate`}/**
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
 */async function ba(e,t=!1){let n;const r=await vi(e.appConfig,i=>{if(!jd(i))throw Tn.create("not-registered");const o=i.authToken;if(!t&&vE(o))return i;if(o.requestStatus===1)return n=_E(e,t),i;{if(!navigator.onLine)throw Tn.create("app-offline");const a=wE(i);return n=yE(e,a),a}});return n?await n:r.authToken}async function _E(e,t){let n=await cl(e.appConfig);for(;n.authToken.requestStatus===1;)await Fd(100),n=await cl(e.appConfig);const r=n.authToken;return r.requestStatus===0?ba(e,t):r}function cl(e){return vi(e,t=>{if(!jd(t))throw Tn.create("not-registered");const n=t.authToken;return EE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function yE(e,t){try{const n=await gE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ks(e.appConfig,r),n}catch(n){if(kd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ks(e.appConfig,r)}throw n}}function jd(e){return e!==void 0&&e.registrationStatus===2}function vE(e){return e.requestStatus===2&&!bE(e)}function bE(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Gw}function wE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function EE(e){return e.requestStatus===1&&e.requestTime+Rd<Date.now()}/**
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
 */async function IE(e){const t=e,{installationEntry:n,registrationPromise:r}=await va(t);return r?r.catch(console.error):ba(t).catch(console.error),n.fid}/**
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
 */async function TE(e,t=!1){const n=e;return await SE(n),(await ba(n,t)).token}async function SE(e){const{registrationPromise:t}=await va(e);t&&await t}/**
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
 */function CE(e){if(!e||!e.options)throw Hi("App Configuration");if(!e.name)throw Hi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Hi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Hi(e){return Tn.create("missing-app-config-values",{valueName:e})}/**
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
 */const Wd="installations",AE="installations-internal",RE=e=>{const t=e.getProvider("app").getImmediate(),n=CE(t),r=ar(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},PE=e=>{const t=e.getProvider("app").getImmediate(),n=ar(t,Wd).getImmediate();return{getId:()=>IE(n),getToken:s=>TE(n,s)}};function OE(){Rt(new ht(Wd,RE,"PUBLIC")),Rt(new ht(AE,PE,"PRIVATE"))}OE();ut(Ad,_a);ut(Ad,_a,"esm2017");/**
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
 */const qs="analytics",kE="firebase_id",NE="origin",LE=60*1e3,ME="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wa="https://www.googletagmanager.com/gtag/js";/**
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
 */const Fe=new ra("@firebase/analytics");/**
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
 */const DE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ge=new On("analytics","Analytics",DE);/**
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
 */function xE(e){if(!e.startsWith(wa)){const t=Ge.create("invalid-gtag-resource",{gtagURL:e});return Fe.warn(t.message),""}return e}function Kd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function FE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function UE(e,t){const n=FE("firebase-js-sdk-policy",{createScriptURL:xE}),r=document.createElement("script"),s=`${wa}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function $E(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function BE(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Kd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){Fe.error(a)}e("config",s,i)}async function HE(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Kd(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){Fe.error(i)}}function VE(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await HE(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await BE(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){Fe.error(a)}}return s}function jE(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=VE(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function WE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(wa)&&n.src.includes(e))return n;return null}/**
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
 */const KE=30,qE=1e3;class GE{constructor(t={},n=qE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const qd=new GE;function zE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function JE(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:zE(r)},i=ME.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Ge.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function YE(e,t=qd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw Ge.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ge.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ZE;return setTimeout(async()=>{a.abort()},LE),Gd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Gd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=qd){var i;const{appId:o,measurementId:a}=e;try{await XE(r,t)}catch(c){if(a)return Fe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await JE(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!QE(l)){if(s.deleteThrottleMetadata(o),a)return Fe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Lc(n,s.intervalMillis,KE):Lc(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),Fe.debug(`Calling attemptFetch again in ${u} millis`),Gd(e,f,r,s)}}function XE(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(Ge.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function QE(e){if(!(e instanceof pt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class ZE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function eI(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
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
 */async function tI(){if(Mf())try{await Df()}catch(e){return Fe.warn(Ge.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Fe.warn(Ge.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nI(e,t,n,r,s,i,o){var a;const c=YE(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&Fe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Fe.error(m)),t.push(c);const l=tI().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);WE(i)||UE(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[NE]="firebase",d.update=!0,f!=null&&(d[kE]=f),s("config",u.measurementId,d),u.measurementId}/**
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
 */class rI{constructor(t){this.app=t}_delete(){return delete Ar[this.app.options.appId],Promise.resolve()}}let Ar={},ll=[];const ul={};let Vi="dataLayer",sI="gtag",fl,zd,dl=!1;function iI(){const e=[];if(Lf()&&e.push("This is a browser extension environment."),L_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ge.create("invalid-analytics-context",{errorInfo:t});Fe.warn(n.message)}}function oI(e,t,n){iI();const r=e.options.appId;if(!r)throw Ge.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Fe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ge.create("no-api-key");if(Ar[r]!=null)throw Ge.create("already-exists",{id:r});if(!dl){$E(Vi);const{wrappedGtag:i,gtagCore:o}=jE(Ar,ll,ul,Vi,sI);zd=i,fl=o,dl=!0}return Ar[r]=nI(e,ll,ul,t,fl,Vi,n),new rI(e)}function aI(e=Bf()){e=it(e);const t=ar(e,qs);return t.isInitialized()?t.getImmediate():cI(e)}function cI(e,t={}){const n=ar(e,qs);if(n.isInitialized()){const s=n.getImmediate();if(Ur(t,n.getOptions()))return s;throw Ge.create("already-initialized")}return n.initialize({options:t})}function lI(e,t,n,r){e=it(e),eI(zd,Ar[e.app.options.appId],t,n,r).catch(s=>Fe.error(s))}const hl="@firebase/analytics",pl="0.10.4";function uI(){Rt(new ht(qs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return oI(r,s,n)},"PUBLIC")),Rt(new ht("analytics-internal",e,"PRIVATE")),ut(hl,pl),ut(hl,pl,"esm2017");function e(t){try{const n=t.getProvider(qs).getImmediate();return{logEvent:(r,s,i)=>lI(n,r,s,i)}}catch(n){throw Ge.create("interop-component-reg-failed",{reason:n})}}}uI();const fI={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},Ea=$f(fI);aI(Ea);const Rr=_i(Ea),dI=e=>(Rn("data-v-df121113"),e=e(),Pn(),e),hI={class:"container"},pI={class:"loginWindow"},gI=dI(()=>Y("h1",null,"WELCOME",-1)),mI={class:"buttonBox"},_I={__name:"Login",setup(e){function t(){Xv(Rr,o,a).then(c=>{i.push({name:"findcostudent"}),ye("success","Successfully logged in!")}).catch(c=>{switch(c.message){case"Firebase: Error (auth/invalid-credential).":ye("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":ye("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":ye("error","Our servers are currently overloaded :(");break;default:ye("error",c.message);break}})}function n(){Jv(Rr,o).then(()=>{ye("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(c=>{c.message=="Firebase: Error (auth/missing-email)."&&ye("error","Enter your email adress in the 'Email' field first!")})}function r(){wd(Rr,s).then(c=>{ye("success","Successfully logged in!"),Me.credentialFromResult(c).accessToken,c.user,i.push("/")}).catch(c=>{ye("error",c.message),c.code,c.message,c.customData.email,Me.credentialFromError(c)})}const s=new Me,i=di();Cf();let o,a="";return(c,l)=>(be(),We("div",hI,[Y("div",pI,[gI,Kn(Y("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":l[0]||(l[0]=u=>_e(o)?o.value=u:o=u)},null,512),[[St,ke(o)]]),Kn(Y("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":l[1]||(l[1]=u=>_e(a)?a.value=u:a=u),onKeydown:l[2]||(l[2]=Zo(u=>t(),["enter"]))},null,544),[[St,ke(a)]]),Y("div",mI,[Y("button",{class:"button_white",onClick:l[3]||(l[3]=u=>t())},"Login"),Y("div",{id:"googleLogin",class:"button_white",onClick:l[4]||(l[4]=u=>r())},"Log in with Google")]),Y("a",{onClick:l[5]||(l[5]=u=>n())},"Forgot password?")])]))}},yI=lr(_I,[["__scopeId","data-v-df121113"]]),vI=e=>(Rn("data-v-01e98b37"),e=e(),Pn(),e),bI={class:"container"},wI={class:"loginWindow"},EI=vI(()=>Y("h1",null,"CREATE ACCOUNT",-1)),II={__name:"Register",setup(e){function t(){Yv(Rr,o,a).then(l=>{l.user,i.push("/FindCostudent"),ye("success","Successfully registered!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/email-already-in-use).":ye("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":ye("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":ye("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":ye("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":ye("error","Our servers are currently overloaded :(");break;default:ye("error",l.message);break}})}function n(){i.push("/login")}function r(){wd(Rr,s).then(l=>{ye("success","Successfully logged in!"),Me.credentialFromResult(l).accessToken,l.user,i.push("/")}).catch(l=>{ye("error",l.message),l.code,l.message,l.customData.email,Me.credentialFromError(l)})}const s=new Me,i=di();Cf();let o,a,c="";return(l,u)=>(be(),We("div",bI,[Y("div",wI,[EI,Kn(Y("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=f=>_e(o)?o.value=f:o=f)},null,512),[[St,ke(o)]]),Kn(Y("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=f=>_e(a)?a.value=f:a=f)},null,512),[[St,ke(a)]]),Kn(Y("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":u[2]||(u[2]=f=>_e(c)?c.value=f:c=f),onKeydown:u[3]||(u[3]=Zo(f=>t(),["enter"]))},null,544),[[St,ke(c)]]),Y("button",{class:"button_white",onClick:t},"Create account"),Y("button",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=f=>r())},"Login with Google"),Y("p",null,[_n("Already have an account? "),Y("a",{onClick:n},"Login here!")])])]))}},TI=lr(II,[["__scopeId","data-v-01e98b37"]]),Jd=e=>(Rn("data-v-b6daacdd"),e=e(),Pn(),e),SI={class:"container"},CI={class:"formBox"},AI=Jo('<div class="progressBar" data-v-b6daacdd><p data-v-b6daacdd>1</p><div class="line" data-v-b6daacdd></div><p data-v-b6daacdd>2</p><div class="line" data-v-b6daacdd></div><p data-v-b6daacdd>3</p></div><div class="itemBox" data-v-b6daacdd><input type="text" id="name" placeholder="Name" data-v-b6daacdd><input type="text" id="surname" placeholder="Surname (optional)" data-v-b6daacdd></div><div class="itemBox" data-v-b6daacdd><p data-v-b6daacdd>Subject</p><input list="subjects" data-v-b6daacdd></div><div class="itemBox" data-v-b6daacdd><p data-v-b6daacdd>Location</p><input list="locations" data-v-b6daacdd></div>',4),RI={class:"itemBox",id:"date"},PI=Jd(()=>Y("p",null,"Date",-1)),OI=["min"],kI={class:"itemBox",id:"time"},NI=Jd(()=>Y("div",{class:"button"}," Submit ",-1)),LI={id:"subjects"},MI=["value"],DI={id:"locations"},xI=["value"],FI={__name:"FindCostudent",setup(e){function t(){const u=new Date,f=u.getFullYear(),d=String(u.getMonth()+1).padStart(2,"0"),m=String(u.getDate()).padStart(2,"0");return`${f}-${d}-${m}`}let n=t(),r=He(n);const s=He(!1),i=He(!1),o=He(!1);function a(u){switch(s.value=!1,i.value=!1,o.value=!1,u){case"morning":s.value=!0;break;case"afternoon":i.value=!0;break;case"evening":o.value=!0;break}}const c=He(["Religion","Philosophy","Law","Economics","Social science","Psychology","Arts","Sciences","Engineer sciences","Bio engineer sciences","Industrial engineer sciences","Architecture","Medicine","Pharmaceutical sciences","Revalidation sciences"]),l=He(["Campus Arenberg","Learning centre Désiré Collen","Agora learning center","Artes Erasmushuis","EBIB","Law library","Philosophy library","Psychology and educational sciences library","Social sciences library"]);return(u,f)=>(be(),We("div",SI,[Y("div",CI,[AI,Y("div",RI,[PI,Y("input",{type:"date",id:"date",min:ke(r)},null,8,OI)]),Y("div",kI,[Y("div",{class:Jt(["button",{selected:s.value}]),onClick:f[0]||(f[0]=d=>a("morning"))}," Morning ",2),Y("div",{class:Jt(["button",{selected:i.value}]),onClick:f[1]||(f[1]=d=>a("afternoon"))}," Afternoon ",2),Y("div",{class:Jt(["button",{selected:o.value}]),onClick:f[2]||(f[2]=d=>a("evening"))}," Evening ",2)]),NI]),Y("datalist",LI,[(be(!0),We(ve,null,Yi(c.value,d=>(be(),We("option",{key:d,value:d},null,8,MI))),128))]),Y("datalist",DI,[(be(!0),We(ve,null,Yi(l.value,d=>(be(),We("option",{key:d,value:d},null,8,xI))),128))])]))}},UI=lr(FI,[["__scopeId","data-v-b6daacdd"]]),Yd=v_({history:zm("/costudent-demo/"),routes:[{path:"/",name:"home",component:jw},{path:"/findcostudent",name:"findcostudent",component:UI,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:yI},{path:"/register",name:"register",component:TI}]});let gl=!1,ji=!1;Yd.beforeEach((e,t,n)=>{const r=_i(),s=e.matched.some(i=>i.meta.requiresAuth);gl?s&&!ji?(alert("No access! You need to be logged in."),n("/login")):n():ud(r,i=>{ji=!!i,gl=!0,s&&!ji?(alert("No access! You need to be logged in."),n("/login")):n()})});const bi=ff(Nw);bi.config.globalProperties.$firebase=Ea;bi.use(Yd);bi.use(mw,{position:"bottom-right",duration:5e3,pauseOnHover:!0});bi.mount("#app");
