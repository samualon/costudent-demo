(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Oe={},ws=[],Pt=()=>{},zE=()=>!1,fo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cu=t=>t.startsWith("onUpdate:"),Ue=Object.assign,Pu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},GE=Object.prototype.hasOwnProperty,be=(t,e)=>GE.call(t,e),ee=Array.isArray,Is=t=>Js(t)==="[object Map]",ts=t=>Js(t)==="[object Set]",qd=t=>Js(t)==="[object Date]",QE=t=>Js(t)==="[object RegExp]",de=t=>typeof t=="function",Be=t=>typeof t=="string",Ln=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",ku=t=>(De(t)||de(t))&&de(t.then)&&de(t.catch),Tg=Object.prototype.toString,Js=t=>Tg.call(t),YE=t=>Js(t).slice(8,-1),wg=t=>Js(t)==="[object Object]",Ou=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,As=sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ic=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},JE=/-(\w)/g,Rt=ic(t=>t.replace(JE,(e,n)=>n?n.toUpperCase():"")),XE=/\B([A-Z])/g,xt=ic(t=>t.replace(XE,"-$1").toLowerCase()),po=ic(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ni=ic(t=>t?`on${po(t)}`:""),sn=(t,e)=>!Object.is(t,e),bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ig=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ca=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Pa=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Hd;const Ag=()=>Hd||(Hd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ZE="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",eT=sc(ZE);function go(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?sT(r):go(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||De(t))return t}const tT=/;(?![^(]*\))/g,nT=/:([^]+)/,rT=/\/\*[^]*?\*\//g;function sT(t){const e={};return t.replace(rT,"").split(tT).forEach(n=>{if(n){const r=n.split(nT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function hr(t){let e="";if(Be(t))e=t;else if(ee(t))for(let n=0;n<t.length;n++){const r=hr(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function iT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Be(e)&&(t.class=hr(e)),n&&(t.style=go(n)),t}const oT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aT=sc(oT);function bg(t){return!!t||t===""}function cT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=yr(t[r],e[r]);return n}function yr(t,e){if(t===e)return!0;let n=qd(t),r=qd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ln(t),r=Ln(e),n||r)return t===e;if(n=ee(t),r=ee(e),n||r)return n&&r?cT(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!yr(t[o],e[o]))return!1}}return String(t)===String(e)}function oc(t,e){return t.findIndex(n=>yr(n,e))}const bn=t=>Be(t)?t:t==null?"":ee(t)||De(t)&&(t.toString===Tg||!de(t.toString))?JSON.stringify(t,Rg,2):String(t),Rg=(t,e)=>e&&e.__v_isRef?Rg(t,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[al(r,i)+" =>"]=s,n),{})}:ts(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>al(n))}:Ln(e)?al(e):De(e)&&!ee(e)&&!wg(e)?String(e):e,al=(t,e="")=>{var n;return Ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class Nu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function lT(t){return new Nu(t)}function Sg(t,e=Mt){e&&e.active&&e.effects.push(t)}function Cg(){return Mt}function uT(t){Mt&&Mt.cleanups.push(t)}let Fr;class xs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Sg(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,br();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(hT(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Rr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=dr,n=Fr;try{return dr=!0,Fr=this,this._runnings++,Kd(this),this.fn()}finally{Wd(this),this._runnings--,Fr=n,dr=e}}stop(){this.active&&(Kd(this),Wd(this),this.onStop&&this.onStop(),this.active=!1)}}function hT(t){return t.value}function Kd(t){t._trackId++,t._depsLength=0}function Wd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Pg(t.deps[e],t);t.deps.length=t._depsLength}}function Pg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function dT(t,e){t.effect instanceof xs&&(t=t.effect.fn);const n=new xs(t,Pt,()=>{n.dirty&&n.run()});e&&(Ue(n,e),e.scope&&Sg(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function fT(t){t.effect.stop()}let dr=!0,Vl=0;const kg=[];function br(){kg.push(dr),dr=!1}function Rr(){const t=kg.pop();dr=t===void 0?!0:t}function Du(){Vl++}function Vu(){for(Vl--;!Vl&&Ml.length;)Ml.shift()()}function Og(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Pg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ml=[];function Ng(t,e,n){Du();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Ml.push(r.scheduler)))}Vu()}const Dg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ka=new WeakMap,Ur=Symbol(""),Ll=Symbol("");function Nt(t,e,n){if(dr&&Fr){let r=ka.get(t);r||ka.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Dg(()=>r.delete(n))),Og(Fr,s)}}function Dn(t,e,n,r,s,i){const o=ka.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&ee(t)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||!Ln(d)&&d>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":ee(t)?Ou(n)&&c.push(o.get("length")):(c.push(o.get(Ur)),Is(t)&&c.push(o.get(Ll)));break;case"delete":ee(t)||(c.push(o.get(Ur)),Is(t)&&c.push(o.get(Ll)));break;case"set":Is(t)&&c.push(o.get(Ur));break}Du();for(const l of c)l&&Ng(l,5);Vu()}function pT(t,e){const n=ka.get(t);return n&&n.get(e)}const gT=sc("__proto__,__v_isRef,__isVue"),Vg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ln)),zd=mT();function mT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)Nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){br(),Du();const r=Ie(this)[e].apply(this,n);return Vu(),Rr(),r}}),t}function _T(t){Ln(t)||(t=String(t));const e=Ie(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class Mg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?$g:Bg:i?Ug:Fg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ee(e);if(!s){if(o&&be(zd,n))return Reflect.get(zd,n,r);if(n==="hasOwnProperty")return _T}const c=Reflect.get(e,n,r);return(Ln(n)?Vg.has(n):gT(n))||(s||Nt(e,"get",n),i)?c:Ke(c)?o&&Ou(n)?c:c.value:De(c)?s?xu(c):mo(c):c}}class Lg extends Mg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Fs(i);if(!Wi(r)&&!Fs(r)&&(i=Ie(i),r=Ie(r)),!ee(e)&&Ke(i)&&!Ke(r))return l?!1:(i.value=r,!0)}const o=ee(e)&&Ou(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?sn(r,i)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Dn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ln(n)||!Vg.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",ee(e)?"length":Ur),Reflect.ownKeys(e)}}class xg extends Mg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yT=new Lg,vT=new xg,ET=new Lg(!0),TT=new xg(!0),Mu=t=>t,ac=t=>Reflect.getPrototypeOf(t);function Yo(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(sn(e,i)&&Nt(s,"get",e),Nt(s,"get",i));const{has:o}=ac(s),c=r?Mu:n?Uu:zi;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Jo(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(sn(t,s)&&Nt(r,"has",t),Nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Xo(t,e=!1){return t=t.__v_raw,!e&&Nt(Ie(t),"iterate",Ur),Reflect.get(t,"size",t)}function Gd(t){t=Ie(t);const e=Ie(this);return ac(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function Qd(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=ac(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?sn(e,o)&&Dn(n,"set",t,e):Dn(n,"add",t,e),this}function Yd(t){const e=Ie(this),{has:n,get:r}=ac(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Dn(e,"delete",t,void 0),i}function Jd(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Dn(t,"clear",void 0,void 0),n}function Zo(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ie(o),l=e?Mu:t?Uu:zi;return!t&&Nt(c,"iterate",Ur),o.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function ea(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=Is(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Mu:e?Uu:zi;return!e&&Nt(i,"iterate",l?Ll:Ur),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Yn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wT(){const t={get(i){return Yo(this,i)},get size(){return Xo(this)},has:Jo,add:Gd,set:Qd,delete:Yd,clear:Jd,forEach:Zo(!1,!1)},e={get(i){return Yo(this,i,!1,!0)},get size(){return Xo(this)},has:Jo,add:Gd,set:Qd,delete:Yd,clear:Jd,forEach:Zo(!1,!0)},n={get(i){return Yo(this,i,!0)},get size(){return Xo(this,!0)},has(i){return Jo.call(this,i,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Zo(!0,!1)},r={get(i){return Yo(this,i,!0,!0)},get size(){return Xo(this,!0)},has(i){return Jo.call(this,i,!0)},add:Yn("add"),set:Yn("set"),delete:Yn("delete"),clear:Yn("clear"),forEach:Zo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ea(i,!1,!1),n[i]=ea(i,!0,!1),e[i]=ea(i,!1,!0),r[i]=ea(i,!0,!0)}),[t,n,e,r]}const[IT,AT,bT,RT]=wT();function cc(t,e){const n=e?t?RT:bT:t?AT:IT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const ST={get:cc(!1,!1)},CT={get:cc(!1,!0)},PT={get:cc(!0,!1)},kT={get:cc(!0,!0)},Fg=new WeakMap,Ug=new WeakMap,Bg=new WeakMap,$g=new WeakMap;function OT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function NT(t){return t.__v_skip||!Object.isExtensible(t)?0:OT(YE(t))}function mo(t){return Fs(t)?t:lc(t,!1,yT,ST,Fg)}function Lu(t){return lc(t,!1,ET,CT,Ug)}function xu(t){return lc(t,!0,vT,PT,Bg)}function DT(t){return lc(t,!0,TT,kT,$g)}function lc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=NT(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Rs(t){return Fs(t)?Rs(t.__v_raw):!!(t&&t.__v_isReactive)}function Fs(t){return!!(t&&t.__v_isReadonly)}function Wi(t){return!!(t&&t.__v_isShallow)}function Fu(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function jg(t){return Object.isExtensible(t)&&Ig(t,"__v_skip",!0),t}const zi=t=>De(t)?mo(t):t,Uu=t=>De(t)?xu(t):t;class qg{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new xs(()=>e(this._value),()=>Ss(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&sn(e._value,e._value=e.effect.run())&&Ss(e,5),Bu(e),e.effect._dirtyLevel>=2&&Ss(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function VT(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=Pt):(r=t.get,s=t.set),new qg(r,s,i||!s,n)}function Bu(t){var e;dr&&Fr&&(t=Ie(t),Og(Fr,(e=t.dep)!=null?e:t.dep=Dg(()=>t.dep=void 0,t instanceof qg?t:void 0)))}function Ss(t,e=5,n,r){t=Ie(t);const s=t.dep;s&&Ng(s,e)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function Ge(t){return Kg(t,!1)}function Hg(t){return Kg(t,!0)}function Kg(t,e){return Ke(t)?t:new MT(t,e)}class MT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:zi(e)}get value(){return Bu(this),this._value}set value(e){const n=this.__v_isShallow||Wi(e)||Fs(e);e=n?e:Ie(e),sn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:zi(e),Ss(this,5))}}function LT(t){Ss(t,5)}function Et(t){return Ke(t)?t.value:t}function xT(t){return de(t)?t():Et(t)}const FT={get:(t,e,n)=>Et(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $u(t){return Rs(t)?t:new Proxy(t,FT)}class UT{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Bu(this),()=>Ss(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function Wg(t){return new UT(t)}function BT(t){const e=ee(t)?new Array(t.length):{};for(const n in t)e[n]=zg(t,n);return e}class $T{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pT(Ie(this._object),this._key)}}class jT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function qT(t,e,n){return Ke(t)?t:de(t)?new jT(t):De(t)&&arguments.length>1?zg(t,e,n):Ge(t)}function zg(t,e,n){const r=t[e];return Ke(r)?r:new $T(t,e,n)}const HT={GET:"get",HAS:"has",ITERATE:"iterate"},KT={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function WT(t,e){}const zT={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},GT={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Vn(t,e,n,r){try{return r?t(...r):t()}catch(s){ns(s,e,n)}}function Ut(t,e,n,r){if(de(t)){const s=Vn(t,e,n,r);return s&&ku(s)&&s.catch(i=>{ns(i,e,n)}),s}if(ee(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ut(t[i],e,n,r));return s}}function ns(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){br(),Vn(l,null,10,[t,o,c]),Rr();return}}QT(t,n,s,r)}function QT(t,e,n,r=!0){console.error(t)}let Gi=!1,xl=!1;const vt=[];let dn=0;const Cs=[];let nr=null,Vr=0;const Gg=Promise.resolve();let ju=null;function _o(t){const e=ju||Gg;return t?e.then(this?t.bind(this):t):e}function YT(t){let e=dn+1,n=vt.length;for(;e<n;){const r=e+n>>>1,s=vt[r],i=Qi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function uc(t){(!vt.length||!vt.includes(t,Gi&&t.allowRecurse?dn+1:dn))&&(t.id==null?vt.push(t):vt.splice(YT(t.id),0,t),Qg())}function Qg(){!Gi&&!xl&&(xl=!0,ju=Gg.then(Yg))}function JT(t){const e=vt.indexOf(t);e>dn&&vt.splice(e,1)}function Oa(t){ee(t)?Cs.push(...t):(!nr||!nr.includes(t,t.allowRecurse?Vr+1:Vr))&&Cs.push(t),Qg()}function Xd(t,e,n=Gi?dn+1:0){for(;n<vt.length;n++){const r=vt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;vt.splice(n,1),n--,r()}}}function Na(t){if(Cs.length){const e=[...new Set(Cs)].sort((n,r)=>Qi(n)-Qi(r));if(Cs.length=0,nr){nr.push(...e);return}for(nr=e,Vr=0;Vr<nr.length;Vr++){const n=nr[Vr];n.active!==!1&&n()}nr=null,Vr=0}}const Qi=t=>t.id==null?1/0:t.id,XT=(t,e)=>{const n=Qi(t)-Qi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Yg(t){xl=!1,Gi=!0,vt.sort(XT);try{for(dn=0;dn<vt.length;dn++){const e=vt[dn];e&&e.active!==!1&&Vn(e,null,14)}}finally{dn=0,vt.length=0,Na(),Gi=!1,ju=null,(vt.length||Cs.length)&&Yg()}}let _s,ta=[];function Jg(t,e){var n,r;_s=t,_s?(_s.enabled=!0,ta.forEach(({event:s,args:i})=>_s.emit(s,...i)),ta=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{Jg(i,e)}),setTimeout(()=>{_s||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ta=[])},3e3)):ta=[]}function ZT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[d]||Oe;g&&(s=n.map(I=>Be(I)?I.trim():I)),p&&(s=n.map(Ca))}let c,l=r[c=Ni(e)]||r[c=Ni(Rt(e))];!l&&i&&(l=r[c=Ni(xt(e))]),l&&Ut(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ut(u,t,6,s)}}function Xg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!de(t)){const l=u=>{const d=Xg(u,e,!0);d&&(c=!0,Ue(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(ee(i)?i.forEach(l=>o[l]=null):Ue(o,i),De(t)&&r.set(t,o),o)}function hc(t,e){return!t||!fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,xt(e))||be(t,e))}let et=null,dc=null;function Yi(t){const e=et;return et=t,dc=t&&t.type.__scopeId||null,e}function rs(t){dc=t}function ss(){dc=null}const ew=t=>fn;function fn(t,e=et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&zl(-1);const i=Yi(e);let o;try{o=t(...s)}finally{Yi(i),r._d&&zl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ma(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:g,setupState:I,ctx:C,inheritAttrs:M}=t,V=Yi(t);let B,O;try{if(n.shapeFlag&4){const k=s||r,x=k;B=Lt(u.call(x,k,d,p,I,g,C)),O=c}else{const k=e;B=Lt(k.length>1?k(p,{attrs:c,slots:o,emit:l}):k(p,null)),O=e.props?c:nw(c)}}catch(k){Mi.length=0,ns(k,t,1),B=Ce(at)}let S=B;if(O&&M!==!1){const k=Object.keys(O),{shapeFlag:x}=S;k.length&&x&7&&(i&&k.some(Cu)&&(O=rw(O,i)),S=vn(S,O,!1,!0))}return n.dirs&&(S=vn(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),B=S,Yi(V),B}function tw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Er(s)){if(s.type!==at||s.children==="v-if"){if(n)return;n=s}}else return}return n}const nw=t=>{let e;for(const n in t)(n==="class"||n==="style"||fo(n))&&((e||(e={}))[n]=t[n]);return e},rw=(t,e)=>{const n={};for(const r in t)(!Cu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Zd(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!hc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Zd(r,o,u):!0:!!o;return!1}function Zd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!hc(n,i))return!0}return!1}function qu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hu="components",iw="directives";function Zg(t,e){return Ku(Hu,t,!0,e)||t}const em=Symbol.for("v-ndc");function tm(t){return Be(t)?Ku(Hu,t,!1)||t:t||em}function ow(t){return Ku(iw,t)}function Ku(t,e,n=!0,r=!1){const s=et||Ze;if(s){const i=s.type;if(t===Hu){const c=Xl(i,!1);if(c&&(c===e||c===Rt(e)||c===po(Rt(e))))return i}const o=ef(s[t]||i[t],e)||ef(s.appContext[t],e);return!o&&r?i:o}}function ef(t,e){return t&&(t[e]||t[Rt(e)]||t[po(Rt(e))])}const Fl=t=>t.__isSuspense;let Ul=0;const aw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)lw(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}uw(t,e,n,r,s,o,c,l,u)}},hydrate:hw,create:Wu,normalize:dw},cw=aw;function Ji(t,e){const n=t.props&&t.props[e];de(n)&&n()}function lw(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:d}}=l,p=d("div"),g=t.suspense=Wu(t,s,r,e,p,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,p,null,r,g,i,o),g.deps>0?(Ji(t,"onPending"),Ji(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Ps(g,t.ssFallback)):g.resolve(!1,!0)}function uw(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:d}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,I=e.ssFallback,{activeBranch:C,pendingBranch:M,isInFallback:V,isHydrating:B}=p;if(M)p.pendingBranch=g,en(g,M)?(l(M,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():V&&(B||(l(C,I,n,r,s,null,i,o,c),Ps(p,I)))):(p.pendingId=Ul++,B?(p.isHydrating=!1,p.activeBranch=M):u(M,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=d("div"),V?(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(C,I,n,r,s,null,i,o,c),Ps(p,I))):C&&en(g,C)?(l(C,g,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(C&&en(g,C))l(C,g,n,r,s,p,i,o,c),Ps(p,g);else if(Ji(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=Ul++,l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:O,pendingId:S}=p;O>0?setTimeout(()=>{p.pendingId===S&&p.fallback(I)},O):O===0&&p.fallback(I)}}function Wu(t,e,n,r,s,i,o,c,l,u,d=!1){const{p,m:g,um:I,n:C,o:{parentNode:M,remove:V}}=u;let B;const O=fw(t);O&&e&&e.pendingBranch&&(B=e.pendingId,e.deps++);const S=t.props?Pa(t.props.timeout):void 0,k=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Ul++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!d,isHydrating:d,isUnmounted:!1,effects:[],resolve(N=!1,b=!1){const{vnode:v,activeBranch:m,pendingBranch:_,pendingId:E,effects:T,parentComponent:w,container:pe}=x;let ye=!1;x.isHydrating?x.isHydrating=!1:N||(ye=m&&_.transition&&_.transition.mode==="out-in",ye&&(m.transition.afterLeave=()=>{E===x.pendingId&&(g(_,pe,i===k?C(m):i,0),Oa(T))}),m&&(M(m.el)!==x.hiddenContainer&&(i=C(m)),I(m,w,x,!0)),ye||g(_,pe,i,0)),Ps(x,_),x.pendingBranch=null,x.isInFallback=!1;let te=x.parent,he=!1;for(;te;){if(te.pendingBranch){te.effects.push(...T),he=!0;break}te=te.parent}!he&&!ye&&Oa(T),x.effects=[],O&&e&&e.pendingBranch&&B===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Ji(v,"onResolve")},fallback(N){if(!x.pendingBranch)return;const{vnode:b,activeBranch:v,parentComponent:m,container:_,namespace:E}=x;Ji(b,"onFallback");const T=C(v),w=()=>{x.isInFallback&&(p(null,N,_,T,m,null,E,c,l),Ps(x,N))},pe=N.transition&&N.transition.mode==="out-in";pe&&(v.transition.afterLeave=w),x.isInFallback=!0,I(v,m,null,!0),pe||w()},move(N,b,v){x.activeBranch&&g(x.activeBranch,N,b,v),x.container=N},next(){return x.activeBranch&&C(x.activeBranch)},registerDep(N,b,v){const m=!!x.pendingBranch;m&&x.deps++;const _=N.vnode.el;N.asyncDep.catch(E=>{ns(E,N,0)}).then(E=>{if(N.isUnmounted||x.isUnmounted||x.pendingId!==N.suspenseId)return;N.asyncResolved=!0;const{vnode:T}=N;Yl(N,E,!1),_&&(T.el=_);const w=!_&&N.subTree.el;b(N,T,M(_||N.subTree.el),_?null:C(N.subTree),x,o,v),w&&V(w),qu(N,T.el),m&&--x.deps===0&&x.resolve()})},unmount(N,b){x.isUnmounted=!0,x.activeBranch&&I(x.activeBranch,n,N,b),x.pendingBranch&&I(x.pendingBranch,n,N,b)}};return x}function hw(t,e,n,r,s,i,o,c,l){const u=e.suspense=Wu(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),d=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),d}function dw(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=tf(r?n.default:n),t.ssFallback=r?tf(n.fallback):Ce(at)}function tf(t){let e;if(de(t)){const n=Kr&&t._c;n&&(t._d=!1,xe()),t=t(),n&&(t._d=!0,e=kt,Fm())}return ee(t)&&(t=tw(t)),t=Lt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function nm(t,e){e&&e.pendingBranch?ee(t)?e.effects.push(...t):e.effects.push(t):Oa(t)}function Ps(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,qu(r,s))}function fw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function fc(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{br();const c=Wr(n),l=Ut(e,n,t,o);return c(),Rr(),l});return r?s.unshift(i):s.push(i),i}}const Bn=t=>(e,n=Ze)=>{(!To||t==="sp")&&fc(t,(...r)=>e(...r),n)},rm=Bn("bm"),Xs=Bn("m"),sm=Bn("bu"),pc=Bn("u"),gc=Bn("bum"),mc=Bn("um"),im=Bn("sp"),om=Bn("rtg"),am=Bn("rtc");function cm(t,e=Ze){fc("ec",t,e)}function pn(t,e){if(et===null)return t;const n=wo(et),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&or(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function hn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(br(),Ut(l,n,8,[t.el,c,t,e]),Rr())}}function Bl(t,e,n,r){let s;const i=n&&n[r];if(ee(t)||Be(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function pw(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(ee(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}/*! #__NO_SIDE_EFFECTS__ */function yo(t,e){return de(t)?Ue({name:t.name},e,{setup:t}):t}const Br=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function gw(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,d=0;const p=()=>(d++,l=null,g()),g=()=>{let I;return l||(I=l=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((M,V)=>{c(C,()=>M(p()),()=>V(C),d+1)});throw C}).then(C=>I!==l&&l?l:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),u=C,C)))};return yo({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const I=Ze;if(u)return()=>cl(u,I);const C=O=>{l=null,ns(O,I,13,!r)};if(o&&I.suspense||To)return g().then(O=>()=>cl(O,I)).catch(O=>(C(O),()=>r?Ce(r,{error:O}):null));const M=Ge(!1),V=Ge(),B=Ge(!!s);return s&&setTimeout(()=>{B.value=!1},s),i!=null&&setTimeout(()=>{if(!M.value&&!V.value){const O=new Error(`Async component timed out after ${i}ms.`);C(O),V.value=O}},i),g().then(()=>{M.value=!0,I.parent&&Eo(I.parent.vnode)&&(I.parent.effect.dirty=!0,uc(I.parent.update))}).catch(O=>{C(O),V.value=O}),()=>{if(M.value&&u)return cl(u,I);if(V.value&&r)return Ce(r,{error:V.value});if(n&&!B.value)return Ce(n)}}})}function cl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ce(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}function mw(t,e,n={},r,s){if(et.isCE||et.parent&&Br(et.parent)&&et.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),xe();const o=i&&lm(i(n)),c=jr(Je,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function lm(t){return t.some(e=>Er(e)?!(e.type===at||e.type===Je&&!lm(e.children)):!0)?t:null}function _w(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Ni(r)]=t[r];return n}const $l=t=>t?Km(t)?wo(t):$l(t.parent):null,Di=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$l(t.parent),$root:t=>$l(t.root),$emit:t=>t.emit,$options:t=>zu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,uc(t.update)}),$nextTick:t=>t.n||(t.n=_o.bind(t.proxy)),$watch:t=>Yw.bind(t)}),ll=(t,e)=>t!==Oe&&!t.__isScriptSetup&&be(t,e),jl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const I=o[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ll(r,e))return o[e]=1,r[e];if(s!==Oe&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==Oe&&be(n,e))return o[e]=4,n[e];ql&&(o[e]=0)}}const d=Di[e];let p,g;if(d)return e==="$attrs"&&Nt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ll(s,e)?(s[e]=n,!0):r!==Oe&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Oe&&be(t,o)||ll(e,o)||(c=i[0])&&be(c,o)||be(r,o)||be(Di,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},yw=Ue({},jl,{get(t,e){if(e!==Symbol.unscopables)return jl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!eT(e)}});function vw(){return null}function Ew(){return null}function Tw(t){}function ww(t){}function Iw(){return null}function Aw(){}function bw(t,e){return null}function Rw(){return um().slots}function Sw(){return um().attrs}function um(){const t=$n();return t.setupContext||(t.setupContext=Gm(t))}function Xi(t){return ee(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Cw(t,e){const n=Xi(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?ee(s)||de(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Pw(t,e){return!t||!e?t||e:ee(t)&&ee(e)?t.concat(e):Ue({},Xi(t),Xi(e))}function kw(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Ow(t){const e=$n();let n=t();return Ql(),ku(n)&&(n=n.catch(r=>{throw Wr(e),r})),[n,()=>Wr(e)]}let ql=!0;function Nw(t){const e=zu(t),n=t.proxy,r=t.ctx;ql=!1,e.beforeCreate&&nf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:I,updated:C,activated:M,deactivated:V,beforeDestroy:B,beforeUnmount:O,destroyed:S,unmounted:k,render:x,renderTracked:N,renderTriggered:b,errorCaptured:v,serverPrefetch:m,expose:_,inheritAttrs:E,components:T,directives:w,filters:pe}=e;if(u&&Dw(u,r,null),o)for(const he in o){const ne=o[he];de(ne)&&(r[he]=ne.bind(n))}if(s){const he=s.call(n,n);De(he)&&(t.data=mo(he))}if(ql=!0,i)for(const he in i){const ne=i[he],wt=de(ne)?ne.bind(n,n):de(ne.get)?ne.get.bind(n,n):Pt,Xt=!de(ne)&&de(ne.set)?ne.set.bind(n):Pt,jt=Wt({get:wt,set:Xt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>jt.value,set:$e=>jt.value=$e})}if(c)for(const he in c)hm(c[he],r,n,he);if(l){const he=de(l)?l.call(n):l;Reflect.ownKeys(he).forEach(ne=>{Os(ne,he[ne])})}d&&nf(d,t,"c");function te(he,ne){ee(ne)?ne.forEach(wt=>he(wt.bind(n))):ne&&he(ne.bind(n))}if(te(rm,p),te(Xs,g),te(sm,I),te(pc,C),te(Om,M),te(Nm,V),te(cm,v),te(am,N),te(om,b),te(gc,O),te(mc,k),te(im,m),ee(_))if(_.length){const he=t.exposed||(t.exposed={});_.forEach(ne=>{Object.defineProperty(he,ne,{get:()=>n[ne],set:wt=>n[ne]=wt})})}else t.exposed||(t.exposed={});x&&t.render===Pt&&(t.render=x),E!=null&&(t.inheritAttrs=E),T&&(t.components=T),w&&(t.directives=w)}function Dw(t,e,n=Pt){ee(t)&&(t=Hl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Bt(s.from||r,s.default,!0):i=Bt(s.from||r):i=Bt(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function nf(t,e,n){Ut(ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hm(t,e,n,r){const s=r.includes(".")?km(n,r):()=>n[r];if(Be(t)){const i=e[t];de(i)&&Ns(s,i)}else if(de(t))Ns(s,t.bind(n));else if(De(t))if(ee(t))t.forEach(i=>hm(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Ns(s,i,t)}}function zu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Da(l,u,o,!0)),Da(l,e,o)),De(e)&&i.set(e,l),l}function Da(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Da(t,i,n,!0),s&&s.forEach(o=>Da(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Vw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Vw={data:rf,props:sf,emits:sf,methods:bi,computed:bi,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:bi,directives:bi,watch:Lw,provide:rf,inject:Mw};function rf(t,e){return e?t?function(){return Ue(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function Mw(t,e){return bi(Hl(t),Hl(e))}function Hl(t){if(ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function bi(t,e){return t?Ue(Object.create(null),t,e):e}function sf(t,e){return t?ee(t)&&ee(e)?[...new Set([...t,...e])]:Ue(Object.create(null),Xi(t),Xi(e??{})):e}function Lw(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function dm(){return{app:null,config:{isNativeTag:zE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xw=0;function Fw(t,e){return function(r,s=null){de(r)||(r=Ue({},r)),s!=null&&!De(s)&&(s=null);const i=dm(),o=new WeakSet;let c=!1;const l=i.app={_uid:xw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ym,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...d)):de(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const g=Ce(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,wo(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=ks;ks=l;try{return u()}finally{ks=d}}};return l}}let ks=null;function Os(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function Bt(t,e,n=!1){const r=Ze||et;if(r||ks){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ks._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function Uw(){return!!(Ze||et||ks)}const fm={},pm=()=>Object.create(fm),gm=t=>Object.getPrototypeOf(t)===fm;function Bw(t,e,n,r=!1){const s={},i=pm();t.propsDefaults=Object.create(null),mm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Lu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $w(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(hc(t.emitsOptions,g))continue;const I=e[g];if(l)if(be(i,g))I!==i[g]&&(i[g]=I,u=!0);else{const C=Rt(g);s[C]=Kl(l,c,C,I,t,!1)}else I!==i[g]&&(i[g]=I,u=!0)}}}else{mm(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!be(e,p)&&((d=xt(p))===p||!be(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Kl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&Dn(t.attrs,"set","")}function mm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(As(l))continue;const u=e[l];let d;s&&be(s,d=Rt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:hc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Kl(s,l,p,u[p],t,!be(u,p))}}return o}function Kl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Wr(s);r=u[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}function _m(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!de(t)){const d=p=>{l=!0;const[g,I]=_m(p,e,!0);Ue(o,g),I&&c.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return De(t)&&r.set(t,ws),ws;if(ee(i))for(let d=0;d<i.length;d++){const p=Rt(i[d]);of(p)&&(o[p]=Oe)}else if(i)for(const d in i){const p=Rt(d);if(of(p)){const g=i[d],I=o[p]=ee(g)||de(g)?{type:g}:Ue({},g);if(I){const C=lf(Boolean,I.type),M=lf(String,I.type);I[0]=C>-1,I[1]=M<0||C<M,(C>-1||be(I,"default"))&&c.push(p)}}}const u=[o,c];return De(t)&&r.set(t,u),u}function of(t){return t[0]!=="$"&&!As(t)}function af(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function cf(t,e){return af(t)===af(e)}function lf(t,e){return ee(e)?e.findIndex(n=>cf(n,t)):de(e)&&cf(e,t)?0:-1}const ym=t=>t[0]==="_"||t==="$stable",Gu=t=>ee(t)?t.map(Lt):[Lt(t)],jw=(t,e,n)=>{if(e._n)return e;const r=fn((...s)=>Gu(e(...s)),n);return r._c=!1,r},vm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ym(s))continue;const i=t[s];if(de(i))e[s]=jw(s,i,r);else if(i!=null){const o=Gu(i);e[s]=()=>o}}},Em=(t,e)=>{const n=Gu(e);t.slots.default=()=>n},qw=(t,e)=>{const n=t.slots=pm();if(t.vnode.shapeFlag&32){const r=e._;r?(Ue(n,e),Ig(n,"_",r,!0)):vm(e,n)}else e&&Em(t,e)},Hw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Ue(s,e),!n&&c===1&&delete s._):(i=!e.$stable,vm(e,s)),o=e}else e&&(Em(t,e),o={default:1});if(i)for(const c in s)!ym(c)&&o[c]==null&&delete s[c]};function Va(t,e,n,r,s=!1){if(ee(t)){t.forEach((g,I)=>Va(g,e&&(ee(e)?e[I]:e),n,r,s));return}if(Br(r)&&!s)return;const i=r.shapeFlag&4?wo(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Oe?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Be(u)?(d[u]=null,be(p,u)&&(p[u]=null)):Ke(u)&&(u.value=null)),de(l))Vn(l,c,12,[o,d]);else{const g=Be(l),I=Ke(l);if(g||I){const C=()=>{if(t.f){const M=g?be(p,l)?p[l]:d[l]:l.value;s?ee(M)&&Pu(M,i):ee(M)?M.includes(i)||M.push(i):g?(d[l]=[i],be(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,be(p,l)&&(p[l]=o)):I&&(l.value=o,t.k&&(d[t.k]=o))};o?(C.id=-1,st(C,n)):C()}}}let uf=!1;const ms=()=>{uf||(console.error("Hydration completed but contains mismatches."),uf=!0)},Kw=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Ww=t=>t.namespaceURI.includes("MathML"),na=t=>{if(Kw(t))return"svg";if(Ww(t))return"mathml"},ra=t=>t.nodeType===8;function zw(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,d=(S,k)=>{if(!k.hasChildNodes()){n(null,S,k),Na(),k._vnode=S;return}p(k.firstChild,S,null,null,null),Na(),k._vnode=S},p=(S,k,x,N,b,v=!1)=>{v=v||!!k.dynamicChildren;const m=ra(S)&&S.data==="[",_=()=>M(S,k,x,N,b,m),{type:E,ref:T,shapeFlag:w,patchFlag:pe}=k;let ye=S.nodeType;k.el=S,pe===-2&&(v=!1,k.dynamicChildren=null);let te=null;switch(E){case Hr:ye!==3?k.children===""?(l(k.el=s(""),o(S),S),te=S):te=_():(S.data!==k.children&&(ms(),S.data=k.children),te=i(S));break;case at:O(S)?(te=i(S),B(k.el=S.content.firstChild,S,x)):ye!==8||m?te=_():te=i(S);break;case $r:if(m&&(S=i(S),ye=S.nodeType),ye===1||ye===3){te=S;const he=!k.children.length;for(let ne=0;ne<k.staticCount;ne++)he&&(k.children+=te.nodeType===1?te.outerHTML:te.data),ne===k.staticCount-1&&(k.anchor=te),te=i(te);return m?i(te):te}else _();break;case Je:m?te=C(S,k,x,N,b,v):te=_();break;default:if(w&1)(ye!==1||k.type.toLowerCase()!==S.tagName.toLowerCase())&&!O(S)?te=_():te=g(S,k,x,N,b,v);else if(w&6){k.slotScopeIds=b;const he=o(S);if(m?te=V(S):ra(S)&&S.data==="teleport start"?te=V(S,S.data,"teleport end"):te=i(S),e(k,he,null,x,N,na(he),v),Br(k)){let ne;m?(ne=Ce(Je),ne.anchor=te?te.previousSibling:he.lastChild):ne=S.nodeType===3?fr(""):Ce("div"),ne.el=S,k.component.subTree=ne}}else w&64?ye!==8?te=_():te=k.type.hydrate(S,k,x,N,b,v,t,I):w&128&&(te=k.type.hydrate(S,k,x,N,na(o(S)),b,v,t,p))}return T!=null&&Va(T,null,N,k),te},g=(S,k,x,N,b,v)=>{v=v||!!k.dynamicChildren;const{type:m,props:_,patchFlag:E,shapeFlag:T,dirs:w,transition:pe}=k,ye=m==="input"||m==="option";if(ye||E!==-1){w&&hn(k,null,x,"created");let te=!1;if(O(S)){te=Am(N,pe)&&x&&x.vnode.props&&x.vnode.props.appear;const ne=S.content.firstChild;te&&pe.beforeEnter(ne),B(ne,S,x),k.el=S=ne}if(T&16&&!(_&&(_.innerHTML||_.textContent))){let ne=I(S.firstChild,k,S,x,N,b,v);for(;ne;){ms();const wt=ne;ne=ne.nextSibling,c(wt)}}else T&8&&S.textContent!==k.children&&(ms(),S.textContent=k.children);if(_)if(ye||!v||E&48)for(const ne in _)(ye&&(ne.endsWith("value")||ne==="indeterminate")||fo(ne)&&!As(ne)||ne[0]===".")&&r(S,ne,null,_[ne],void 0,void 0,x);else _.onClick&&r(S,"onClick",null,_.onClick,void 0,void 0,x);let he;(he=_&&_.onVnodeBeforeMount)&&St(he,x,k),w&&hn(k,null,x,"beforeMount"),((he=_&&_.onVnodeMounted)||w||te)&&nm(()=>{he&&St(he,x,k),te&&pe.enter(S),w&&hn(k,null,x,"mounted")},N)}return S.nextSibling},I=(S,k,x,N,b,v,m)=>{m=m||!!k.dynamicChildren;const _=k.children,E=_.length;for(let T=0;T<E;T++){const w=m?_[T]:_[T]=Lt(_[T]);S?S=p(S,w,N,b,v,m):w.type===Hr&&!w.children?l(w.el=s(""),x):(ms(),n(null,w,x,null,N,b,na(x),v))}return S},C=(S,k,x,N,b,v)=>{const{slotScopeIds:m}=k;m&&(b=b?b.concat(m):m);const _=o(S),E=I(i(S),k,_,x,N,b,v);return E&&ra(E)&&E.data==="]"?i(k.anchor=E):(ms(),l(k.anchor=u("]"),_,E),E)},M=(S,k,x,N,b,v)=>{if(ms(),k.el=null,v){const E=V(S);for(;;){const T=i(S);if(T&&T!==E)c(T);else break}}const m=i(S),_=o(S);return c(S),n(null,k,_,m,x,N,na(_),b),m},V=(S,k="[",x="]")=>{let N=0;for(;S;)if(S=i(S),S&&ra(S)&&(S.data===k&&N++,S.data===x)){if(N===0)return i(S);N--}return S},B=(S,k,x)=>{const N=k.parentNode;N&&N.replaceChild(S,k);let b=x;for(;b;)b.vnode.el===k&&(b.vnode.el=b.subTree.el=S),b=b.parent},O=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[d,p]}const st=nm;function Tm(t){return Im(t)}function wm(t){return Im(t,zw)}function Im(t,e){const n=Ag();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:I=Pt,insertStaticContent:C}=t,M=(A,R,D,$=null,F=null,z=null,Y=void 0,W=null,G=!!R.dynamicChildren)=>{if(A===R)return;A&&!en(A,R)&&($=U(A),$e(A,F,z,!0),A=null),R.patchFlag===-2&&(G=!1,R.dynamicChildren=null);const{type:q,ref:X,shapeFlag:ce}=R;switch(q){case Hr:V(A,R,D,$);break;case at:B(A,R,D,$);break;case $r:A==null&&O(R,D,$,Y);break;case Je:T(A,R,D,$,F,z,Y,W,G);break;default:ce&1?x(A,R,D,$,F,z,Y,W,G):ce&6?w(A,R,D,$,F,z,Y,W,G):(ce&64||ce&128)&&q.process(A,R,D,$,F,z,Y,W,G,re)}X!=null&&F&&Va(X,A&&A.ref,z,R||A,!R)},V=(A,R,D,$)=>{if(A==null)r(R.el=c(R.children),D,$);else{const F=R.el=A.el;R.children!==A.children&&u(F,R.children)}},B=(A,R,D,$)=>{A==null?r(R.el=l(R.children||""),D,$):R.el=A.el},O=(A,R,D,$)=>{[A.el,A.anchor]=C(A.children,R,D,$,A.el,A.anchor)},S=({el:A,anchor:R},D,$)=>{let F;for(;A&&A!==R;)F=g(A),r(A,D,$),A=F;r(R,D,$)},k=({el:A,anchor:R})=>{let D;for(;A&&A!==R;)D=g(A),s(A),A=D;s(R)},x=(A,R,D,$,F,z,Y,W,G)=>{R.type==="svg"?Y="svg":R.type==="math"&&(Y="mathml"),A==null?N(R,D,$,F,z,Y,W,G):m(A,R,F,z,Y,W,G)},N=(A,R,D,$,F,z,Y,W)=>{let G,q;const{props:X,shapeFlag:ce,transition:ae,dirs:oe}=A;if(G=A.el=o(A.type,z,X&&X.is,X),ce&8?d(G,A.children):ce&16&&v(A.children,G,null,$,F,ul(A,z),Y,W),oe&&hn(A,null,$,"created"),b(G,A,A.scopeId,Y,$),X){for(const Pe in X)Pe!=="value"&&!As(Pe)&&i(G,Pe,null,X[Pe],z,A.children,$,F,rt);"value"in X&&i(G,"value",null,X.value,z),(q=X.onVnodeBeforeMount)&&St(q,$,A)}oe&&hn(A,null,$,"beforeMount");const ue=Am(F,ae);ue&&ae.beforeEnter(G),r(G,R,D),((q=X&&X.onVnodeMounted)||ue||oe)&&st(()=>{q&&St(q,$,A),ue&&ae.enter(G),oe&&hn(A,null,$,"mounted")},F)},b=(A,R,D,$,F)=>{if(D&&I(A,D),$)for(let z=0;z<$.length;z++)I(A,$[z]);if(F){let z=F.subTree;if(R===z){const Y=F.vnode;b(A,Y,Y.scopeId,Y.slotScopeIds,F.parent)}}},v=(A,R,D,$,F,z,Y,W,G=0)=>{for(let q=G;q<A.length;q++){const X=A[q]=W?sr(A[q]):Lt(A[q]);M(null,X,R,D,$,F,z,Y,W)}},m=(A,R,D,$,F,z,Y)=>{const W=R.el=A.el;let{patchFlag:G,dynamicChildren:q,dirs:X}=R;G|=A.patchFlag&16;const ce=A.props||Oe,ae=R.props||Oe;let oe;if(D&&Or(D,!1),(oe=ae.onVnodeBeforeUpdate)&&St(oe,D,R,A),X&&hn(R,A,D,"beforeUpdate"),D&&Or(D,!0),q?_(A.dynamicChildren,q,W,D,$,ul(R,F),z):Y||ne(A,R,W,null,D,$,ul(R,F),z,!1),G>0){if(G&16)E(W,R,ce,ae,D,$,F);else if(G&2&&ce.class!==ae.class&&i(W,"class",null,ae.class,F),G&4&&i(W,"style",ce.style,ae.style,F),G&8){const ue=R.dynamicProps;for(let Pe=0;Pe<ue.length;Pe++){const Ae=ue[Pe],We=ce[Ae],Dt=ae[Ae];(Dt!==We||Ae==="value")&&i(W,Ae,We,Dt,F,A.children,D,$,rt)}}G&1&&A.children!==R.children&&d(W,R.children)}else!Y&&q==null&&E(W,R,ce,ae,D,$,F);((oe=ae.onVnodeUpdated)||X)&&st(()=>{oe&&St(oe,D,R,A),X&&hn(R,A,D,"updated")},$)},_=(A,R,D,$,F,z,Y)=>{for(let W=0;W<R.length;W++){const G=A[W],q=R[W],X=G.el&&(G.type===Je||!en(G,q)||G.shapeFlag&70)?p(G.el):D;M(G,q,X,null,$,F,z,Y,!0)}},E=(A,R,D,$,F,z,Y)=>{if(D!==$){if(D!==Oe)for(const W in D)!As(W)&&!(W in $)&&i(A,W,D[W],null,Y,R.children,F,z,rt);for(const W in $){if(As(W))continue;const G=$[W],q=D[W];G!==q&&W!=="value"&&i(A,W,q,G,Y,R.children,F,z,rt)}"value"in $&&i(A,"value",D.value,$.value,Y)}},T=(A,R,D,$,F,z,Y,W,G)=>{const q=R.el=A?A.el:c(""),X=R.anchor=A?A.anchor:c("");let{patchFlag:ce,dynamicChildren:ae,slotScopeIds:oe}=R;oe&&(W=W?W.concat(oe):oe),A==null?(r(q,D,$),r(X,D,$),v(R.children||[],D,X,F,z,Y,W,G)):ce>0&&ce&64&&ae&&A.dynamicChildren?(_(A.dynamicChildren,ae,D,F,z,Y,W),(R.key!=null||F&&R===F.subTree)&&Qu(A,R,!0)):ne(A,R,D,X,F,z,Y,W,G)},w=(A,R,D,$,F,z,Y,W,G)=>{R.slotScopeIds=W,A==null?R.shapeFlag&512?F.ctx.activate(R,D,$,Y,G):pe(R,D,$,F,z,Y,G):ye(A,R,G)},pe=(A,R,D,$,F,z,Y)=>{const W=A.component=Hm(A,$,F);if(Eo(A)&&(W.ctx.renderer=re),Wm(W),W.asyncDep){if(F&&F.registerDep(W,te,Y),!A.el){const G=W.subTree=Ce(at);B(null,G,R,D)}}else te(W,A,R,D,F,z,Y)},ye=(A,R,D)=>{const $=R.component=A.component;if(sw(A,R,D))if($.asyncDep&&!$.asyncResolved){he($,R,D);return}else $.next=R,JT($.update),$.effect.dirty=!0,$.update();else R.el=A.el,$.vnode=R},te=(A,R,D,$,F,z,Y)=>{const W=()=>{if(A.isMounted){let{next:X,bu:ce,u:ae,parent:oe,vnode:ue}=A;{const qt=bm(A);if(qt){X&&(X.el=ue.el,he(A,X,Y)),qt.asyncDep.then(()=>{A.isUnmounted||W()});return}}let Pe=X,Ae;Or(A,!1),X?(X.el=ue.el,he(A,X,Y)):X=ue,ce&&bs(ce),(Ae=X.props&&X.props.onVnodeBeforeUpdate)&&St(Ae,oe,X,ue),Or(A,!0);const We=ma(A),Dt=A.subTree;A.subTree=We,M(Dt,We,p(Dt.el),U(Dt),A,F,z),X.el=We.el,Pe===null&&qu(A,We.el),ae&&st(ae,F),(Ae=X.props&&X.props.onVnodeUpdated)&&st(()=>St(Ae,oe,X,ue),F)}else{let X;const{el:ce,props:ae}=R,{bm:oe,m:ue,parent:Pe}=A,Ae=Br(R);if(Or(A,!1),oe&&bs(oe),!Ae&&(X=ae&&ae.onVnodeBeforeMount)&&St(X,Pe,R),Or(A,!0),ce&&Ne){const We=()=>{A.subTree=ma(A),Ne(ce,A.subTree,A,F,null)};Ae?R.type.__asyncLoader().then(()=>!A.isUnmounted&&We()):We()}else{const We=A.subTree=ma(A);M(null,We,D,$,A,F,z),R.el=We.el}if(ue&&st(ue,F),!Ae&&(X=ae&&ae.onVnodeMounted)){const We=R;st(()=>St(X,Pe,We),F)}(R.shapeFlag&256||Pe&&Br(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&A.a&&st(A.a,F),A.isMounted=!0,R=D=$=null}},G=A.effect=new xs(W,Pt,()=>uc(q),A.scope),q=A.update=()=>{G.dirty&&G.run()};q.id=A.uid,Or(A,!0),q()},he=(A,R,D)=>{R.component=A;const $=A.vnode.props;A.vnode=R,A.next=null,$w(A,R.props,$,D),Hw(A,R.children,D),br(),Xd(A),Rr()},ne=(A,R,D,$,F,z,Y,W,G=!1)=>{const q=A&&A.children,X=A?A.shapeFlag:0,ce=R.children,{patchFlag:ae,shapeFlag:oe}=R;if(ae>0){if(ae&128){Xt(q,ce,D,$,F,z,Y,W,G);return}else if(ae&256){wt(q,ce,D,$,F,z,Y,W,G);return}}oe&8?(X&16&&rt(q,F,z),ce!==q&&d(D,ce)):X&16?oe&16?Xt(q,ce,D,$,F,z,Y,W,G):rt(q,F,z,!0):(X&8&&d(D,""),oe&16&&v(ce,D,$,F,z,Y,W,G))},wt=(A,R,D,$,F,z,Y,W,G)=>{A=A||ws,R=R||ws;const q=A.length,X=R.length,ce=Math.min(q,X);let ae;for(ae=0;ae<ce;ae++){const oe=R[ae]=G?sr(R[ae]):Lt(R[ae]);M(A[ae],oe,D,null,F,z,Y,W,G)}q>X?rt(A,F,z,!0,!1,ce):v(R,D,$,F,z,Y,W,G,ce)},Xt=(A,R,D,$,F,z,Y,W,G)=>{let q=0;const X=R.length;let ce=A.length-1,ae=X-1;for(;q<=ce&&q<=ae;){const oe=A[q],ue=R[q]=G?sr(R[q]):Lt(R[q]);if(en(oe,ue))M(oe,ue,D,null,F,z,Y,W,G);else break;q++}for(;q<=ce&&q<=ae;){const oe=A[ce],ue=R[ae]=G?sr(R[ae]):Lt(R[ae]);if(en(oe,ue))M(oe,ue,D,null,F,z,Y,W,G);else break;ce--,ae--}if(q>ce){if(q<=ae){const oe=ae+1,ue=oe<X?R[oe].el:$;for(;q<=ae;)M(null,R[q]=G?sr(R[q]):Lt(R[q]),D,ue,F,z,Y,W,G),q++}}else if(q>ae)for(;q<=ce;)$e(A[q],F,z,!0),q++;else{const oe=q,ue=q,Pe=new Map;for(q=ue;q<=ae;q++){const It=R[q]=G?sr(R[q]):Lt(R[q]);It.key!=null&&Pe.set(It.key,q)}let Ae,We=0;const Dt=ae-ue+1;let qt=!1,oi=0;const Wn=new Array(Dt);for(q=0;q<Dt;q++)Wn[q]=0;for(q=oe;q<=ce;q++){const It=A[q];if(We>=Dt){$e(It,F,z,!0);continue}let Ht;if(It.key!=null)Ht=Pe.get(It.key);else for(Ae=ue;Ae<=ae;Ae++)if(Wn[Ae-ue]===0&&en(It,R[Ae])){Ht=Ae;break}Ht===void 0?$e(It,F,z,!0):(Wn[Ht-ue]=q+1,Ht>=oi?oi=Ht:qt=!0,M(It,R[Ht],D,null,F,z,Y,W,G),We++)}const us=qt?Gw(Wn):ws;for(Ae=us.length-1,q=Dt-1;q>=0;q--){const It=ue+q,Ht=R[It],hs=It+1<X?R[It+1].el:$;Wn[q]===0?M(null,Ht,D,hs,F,z,Y,W,G):qt&&(Ae<0||q!==us[Ae]?jt(Ht,D,hs,2):Ae--)}}},jt=(A,R,D,$,F=null)=>{const{el:z,type:Y,transition:W,children:G,shapeFlag:q}=A;if(q&6){jt(A.component.subTree,R,D,$);return}if(q&128){A.suspense.move(R,D,$);return}if(q&64){Y.move(A,R,D,re);return}if(Y===Je){r(z,R,D);for(let ce=0;ce<G.length;ce++)jt(G[ce],R,D,$);r(A.anchor,R,D);return}if(Y===$r){S(A,R,D);return}if($!==2&&q&1&&W)if($===0)W.beforeEnter(z),r(z,R,D),st(()=>W.enter(z),F);else{const{leave:ce,delayLeave:ae,afterLeave:oe}=W,ue=()=>r(z,R,D),Pe=()=>{ce(z,()=>{ue(),oe&&oe()})};ae?ae(z,ue,Pe):Pe()}else r(z,R,D)},$e=(A,R,D,$=!1,F=!1)=>{const{type:z,props:Y,ref:W,children:G,dynamicChildren:q,shapeFlag:X,patchFlag:ce,dirs:ae,memoIndex:oe}=A;if(W!=null&&Va(W,null,D,A,!0),oe!=null&&(R.renderCache[oe]=void 0),X&256){R.ctx.deactivate(A);return}const ue=X&1&&ae,Pe=!Br(A);let Ae;if(Pe&&(Ae=Y&&Y.onVnodeBeforeUnmount)&&St(Ae,R,A),X&6)un(A.component,D,$);else{if(X&128){A.suspense.unmount(D,$);return}ue&&hn(A,null,R,"beforeUnmount"),X&64?A.type.remove(A,R,D,F,re,$):q&&(z!==Je||ce>0&&ce&64)?rt(q,R,D,!1,!0):(z===Je&&ce&384||!F&&X&16)&&rt(G,R,D),$&&je(A)}(Pe&&(Ae=Y&&Y.onVnodeUnmounted)||ue)&&st(()=>{Ae&&St(Ae,R,A),ue&&hn(A,null,R,"unmounted")},D)},je=A=>{const{type:R,el:D,anchor:$,transition:F}=A;if(R===Je){Kn(D,$);return}if(R===$r){k(A);return}const z=()=>{s(D),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(A.shapeFlag&1&&F&&!F.persisted){const{leave:Y,delayLeave:W}=F,G=()=>Y(D,z);W?W(A.el,z,G):G()}else z()},Kn=(A,R)=>{let D;for(;A!==R;)D=g(A),s(A),A=D;s(R)},un=(A,R,D)=>{const{bum:$,scope:F,update:z,subTree:Y,um:W,m:G,a:q}=A;Ma(G),Ma(q),$&&bs($),F.stop(),z&&(z.active=!1,$e(Y,A,R,D)),W&&st(W,R),st(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},rt=(A,R,D,$=!1,F=!1,z=0)=>{for(let Y=z;Y<A.length;Y++)$e(A[Y],R,D,$,F)},U=A=>A.shapeFlag&6?U(A.component.subTree):A.shapeFlag&128?A.suspense.next():g(A.anchor||A.el);let Z=!1;const J=(A,R,D)=>{A==null?R._vnode&&$e(R._vnode,null,null,!0):M(R._vnode||null,A,R,null,null,null,D),Z||(Z=!0,Xd(),Na(),Z=!1),R._vnode=A},re={p:M,um:$e,m:jt,r:je,mt:pe,mc:v,pc:ne,pbc:_,n:U,o:t};let Ee,Ne;return e&&([Ee,Ne]=e(re)),{render:J,hydrate:Ee,createApp:Fw(J,Ee)}}function ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Or({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Am(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qu(t,e,n=!1){const r=t.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=sr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Qu(o,c)),c.type===Hr&&(c.el=o.el)}}function Gw(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function bm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bm(e)}function Ma(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Rm=Symbol.for("v-scx"),Sm=()=>Bt(Rm);function Qw(t,e){return vo(t,null,e)}function Cm(t,e){return vo(t,null,{flush:"post"})}function Pm(t,e){return vo(t,null,{flush:"sync"})}const sa={};function Ns(t,e,n){return vo(t,e,n)}function vo(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Oe){if(e&&i){const N=e;e=(...b)=>{N(...b),x()}}const l=Ze,u=N=>r===!0?N:or(N,r===!1?1:void 0);let d,p=!1,g=!1;if(Ke(t)?(d=()=>t.value,p=Wi(t)):Rs(t)?(d=()=>u(t),p=!0):ee(t)?(g=!0,p=t.some(N=>Rs(N)||Wi(N)),d=()=>t.map(N=>{if(Ke(N))return N.value;if(Rs(N))return u(N);if(de(N))return Vn(N,l,2)})):de(t)?e?d=()=>Vn(t,l,2):d=()=>(I&&I(),Ut(t,l,3,[C])):d=Pt,e&&r){const N=d;d=()=>or(N())}let I,C=N=>{I=S.onStop=()=>{Vn(N,l,4),I=S.onStop=void 0}},M;if(To)if(C=Pt,e?n&&Ut(e,l,3,[d(),g?[]:void 0,C]):d(),s==="sync"){const N=Sm();M=N.__watcherHandles||(N.__watcherHandles=[])}else return Pt;let V=g?new Array(t.length).fill(sa):sa;const B=()=>{if(!(!S.active||!S.dirty))if(e){const N=S.run();(r||p||(g?N.some((b,v)=>sn(b,V[v])):sn(N,V)))&&(I&&I(),Ut(e,l,3,[N,V===sa?void 0:g&&V[0]===sa?[]:V,C]),V=N)}else S.run()};B.allowRecurse=!!e;let O;s==="sync"?O=B:s==="post"?O=()=>st(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),O=()=>uc(B));const S=new xs(d,Pt,O),k=Cg(),x=()=>{S.stop(),k&&Pu(k.effects,S)};return e?n?B():V=S.run():s==="post"?st(S.run.bind(S),l&&l.suspense):S.run(),M&&M.push(x),x}function Yw(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?km(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=Wr(this),c=vo(s,i.bind(r),n);return o(),c}function km(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function or(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ke(t))or(t.value,e,n);else if(ee(t))for(let r=0;r<t.length;r++)or(t[r],e,n);else if(ts(t)||Is(t))t.forEach(r=>{or(r,e,n)});else if(wg(t)){for(const r in t)or(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&or(t[r],e,n)}return t}const Eo=t=>t.type.__isKeepAlive,Jw={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=$n(),r=n.ctx;if(!r.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:d,o:{createElement:p}}}=r,g=p("div");r.activate=(O,S,k,x,N)=>{const b=O.component;u(O,S,k,0,c),l(b.vnode,O,S,k,b,c,x,O.slotScopeIds,N),st(()=>{b.isDeactivated=!1,b.a&&bs(b.a);const v=O.props&&O.props.onVnodeMounted;v&&St(v,b.parent,O)},c)},r.deactivate=O=>{const S=O.component;Ma(S.m),Ma(S.a),u(O,g,null,1,c),st(()=>{S.da&&bs(S.da);const k=O.props&&O.props.onVnodeUnmounted;k&&St(k,S.parent,O),S.isDeactivated=!0},c)};function I(O){hl(O),d(O,n,c,!0)}function C(O){s.forEach((S,k)=>{const x=Xl(S.type);x&&(!O||!O(x))&&M(k)})}function M(O){const S=s.get(O);!o||!en(S,o)?I(S):o&&hl(o),s.delete(O),i.delete(O)}Ns(()=>[t.include,t.exclude],([O,S])=>{O&&C(k=>Ri(O,k)),S&&C(k=>!Ri(S,k))},{flush:"post",deep:!0});let V=null;const B=()=>{V!=null&&(Fl(n.subTree.type)?st(()=>{s.set(V,ia(n.subTree))},n.subTree.suspense):s.set(V,ia(n.subTree)))};return Xs(B),pc(B),gc(()=>{s.forEach(O=>{const{subTree:S,suspense:k}=n,x=ia(S);if(O.type===x.type&&O.key===x.key){hl(x);const N=x.component.da;N&&st(N,k);return}I(O)})}),()=>{if(V=null,!e.default)return null;const O=e.default(),S=O[0];if(O.length>1)return o=null,O;if(!Er(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let k=ia(S);const x=k.type,N=Xl(Br(k)?k.type.__asyncResolved||{}:x),{include:b,exclude:v,max:m}=t;if(b&&(!N||!Ri(b,N))||v&&N&&Ri(v,N))return o=k,S;const _=k.key==null?x:k.key,E=s.get(_);return k.el&&(k=vn(k),S.shapeFlag&128&&(S.ssContent=k)),V=_,E?(k.el=E.el,k.component=E.component,k.transition&&vr(k,k.transition),k.shapeFlag|=512,i.delete(_),i.add(_)):(i.add(_),m&&i.size>parseInt(m,10)&&M(i.values().next().value)),k.shapeFlag|=256,o=k,Fl(S.type)?S:k}}},Xw=Jw;function Ri(t,e){return ee(t)?t.some(n=>Ri(n,e)):Be(t)?t.split(",").includes(e):QE(t)?t.test(e):!1}function Om(t,e){Dm(t,"a",e)}function Nm(t,e){Dm(t,"da",e)}function Dm(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Eo(s.parent.vnode)&&Zw(r,e,n,s),s=s.parent}}function Zw(t,e,n,r){const s=fc(e,t,r,!0);mc(()=>{Pu(r[e],s)},n)}function hl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ia(t){return t.shapeFlag&128?t.ssContent:t}const rr=Symbol("_leaveCb"),oa=Symbol("_enterCb");function Yu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xs(()=>{t.isMounted=!0}),gc(()=>{t.isUnmounting=!0}),t}const Kt=[Function,Array],Ju={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},Vm=t=>{const e=t.subTree;return e.component?Vm(e.component):e},eI={name:"BaseTransition",props:Ju,setup(t,{slots:e}){const n=$n(),r=Yu();return()=>{const s=e.default&&_c(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==at){i=g;break}}const o=Ie(t),{mode:c}=o;if(r.isLeaving)return dl(i);const l=hf(i);if(!l)return dl(i);let u=Us(l,o,r,n,g=>u=g);vr(l,u);const d=n.subTree,p=d&&hf(d);if(p&&p.type!==at&&!en(l,p)&&Vm(n).type!==at){const g=Us(p,o,r,n);if(vr(p,g),c==="out-in"&&l.type!==at)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},dl(i);c==="in-out"&&l.type!==at&&(g.delayLeave=(I,C,M)=>{const V=Lm(r,p);V[String(p.key)]=p,I[rr]=()=>{C(),I[rr]=void 0,delete u.delayedLeave},u.delayedLeave=M})}return i}}},Mm=eI;function Lm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Us(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:I,onAfterLeave:C,onLeaveCancelled:M,onBeforeAppear:V,onAppear:B,onAfterAppear:O,onAppearCancelled:S}=e,k=String(t.key),x=Lm(n,t),N=(m,_)=>{m&&Ut(m,r,9,_)},b=(m,_)=>{const E=_[1];N(m,_),ee(m)?m.every(T=>T.length<=1)&&E():m.length<=1&&E()},v={mode:o,persisted:c,beforeEnter(m){let _=l;if(!n.isMounted)if(i)_=V||l;else return;m[rr]&&m[rr](!0);const E=x[k];E&&en(t,E)&&E.el[rr]&&E.el[rr](),N(_,[m])},enter(m){let _=u,E=d,T=p;if(!n.isMounted)if(i)_=B||u,E=O||d,T=S||p;else return;let w=!1;const pe=m[oa]=ye=>{w||(w=!0,ye?N(T,[m]):N(E,[m]),v.delayedLeave&&v.delayedLeave(),m[oa]=void 0)};_?b(_,[m,pe]):pe()},leave(m,_){const E=String(t.key);if(m[oa]&&m[oa](!0),n.isUnmounting)return _();N(g,[m]);let T=!1;const w=m[rr]=pe=>{T||(T=!0,_(),pe?N(M,[m]):N(C,[m]),m[rr]=void 0,x[E]===t&&delete x[E])};x[E]=t,I?b(I,[m,w]):w()},clone(m){const _=Us(m,e,n,r,s);return s&&s(_),_}};return v}function dl(t){if(Eo(t))return t=vn(t),t.children=null,t}function hf(t){if(!Eo(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function vr(t,e){t.shapeFlag&6&&t.component?vr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function _c(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Je?(o.patchFlag&128&&s++,r=r.concat(_c(o.children,e,c))):(e||o.type!==at)&&r.push(c!=null?vn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const tI=t=>t.__isTeleport,Vi=t=>t&&(t.disabled||t.disabled===""),df=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ff=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Wl=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},nI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:d,pc:p,pbc:g,o:{insert:I,querySelector:C,createText:M,createComment:V}}=u,B=Vi(e.props);let{shapeFlag:O,children:S,dynamicChildren:k}=e;if(t==null){const x=e.el=M(""),N=e.anchor=M("");I(x,n,r),I(N,n,r);const b=e.target=Wl(e.props,C),v=e.targetAnchor=M("");b&&(I(v,b),o==="svg"||df(b)?o="svg":(o==="mathml"||ff(b))&&(o="mathml"));const m=(_,E)=>{O&16&&d(S,_,E,s,i,o,c,l)};B?m(n,N):b&&m(b,v)}else{e.el=t.el;const x=e.anchor=t.anchor,N=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=Vi(t.props),m=v?n:N,_=v?x:b;if(o==="svg"||df(N)?o="svg":(o==="mathml"||ff(N))&&(o="mathml"),k?(g(t.dynamicChildren,k,m,s,i,o,c),Qu(t,e,!0)):l||p(t,e,m,_,s,i,o,c,!1),B)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):aa(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const E=e.target=Wl(e.props,C);E&&aa(e,E,null,u,0)}else v&&aa(e,N,b,u,1)}xm(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:d,target:p,props:g}=t;if(p&&i(d),o&&i(u),c&16){const I=o||!Vi(g);for(let C=0;C<l.length;C++){const M=l[C];s(M,e,n,I,!!M.dynamicChildren)}}},move:aa,hydrate:rI};function aa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||Vi(d))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function rI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const d=e.target=Wl(e.props,l);if(d){const p=d._lpa||d.firstChild;if(e.shapeFlag&16)if(Vi(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let g=p;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,d,n,r,s,i)}xm(e)}return e.anchor&&o(e.anchor)}const sI=nI;function xm(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Je=Symbol.for("v-fgt"),Hr=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),Mi=[];let kt=null;function xe(t=!1){Mi.push(kt=t?null:[])}function Fm(){Mi.pop(),kt=Mi[Mi.length-1]||null}let Kr=1;function zl(t){Kr+=t}function Um(t){return t.dynamicChildren=Kr>0?kt||ws:null,Fm(),Kr>0&&kt&&kt.push(t),t}function it(t,e,n,r,s,i){return Um(K(t,e,n,r,s,i,!0))}function jr(t,e,n,r,s){return Um(Ce(t,e,n,r,s,!0))}function Er(t){return t?t.__v_isVNode===!0:!1}function en(t,e){return t.type===e.type&&t.key===e.key}function iI(t){}const Bm=({key:t})=>t??null,_a=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||Ke(t)||de(t)?{i:et,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bm(e),ref:e&&_a(e),scopeId:dc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return c?(Xu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Kr>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const Ce=oI;function oI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===em)&&(t=at),Er(t)){const c=vn(t,e,!0);return n&&Xu(c,n),Kr>0&&!i&&kt&&(c.shapeFlag&6?kt[kt.indexOf(t)]=c:kt.push(c)),c.patchFlag=-2,c}if(fI(t)&&(t=t.__vccOpts),e){e=$m(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=hr(c)),De(l)&&(Fu(l)&&!ee(l)&&(l=Ue({},l)),e.style=go(l))}const o=Be(t)?1:Fl(t)?128:tI(t)?64:De(t)?4:de(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function $m(t){return t?Fu(t)||gm(t)?Ue({},t):t:null}function vn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?qm(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Bm(u),ref:e&&e.ref?n&&i?ee(i)?i.concat(_a(e)):[i,_a(e)]:_a(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&vr(d,l.clone(d)),d}function fr(t=" ",e=0){return Ce(Hr,null,t,e)}function jm(t,e){const n=Ce($r,null,t);return n.staticCount=e,n}function Pn(t="",e=!1){return e?(xe(),jr(at,null,t)):Ce(at,null,t)}function Lt(t){return t==null||typeof t=="boolean"?Ce(at):ee(t)?Ce(Je,null,t.slice()):typeof t=="object"?sr(t):Ce(Hr,null,String(t))}function sr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vn(t)}function Xu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Xu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!gm(e)?e._ctx=et:s===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:et},n=32):(e=String(e),r&64?(n=16,e=[fr(e)]):n=8);t.children=e,t.shapeFlag|=n}function qm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=hr([e.class,r.class]));else if(s==="style")e.style=go([e.style,r.style]);else if(fo(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function St(t,e,n,r=null){Ut(t,e,7,[n,r])}const aI=dm();let cI=0;function Hm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||aI,i={uid:cI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(r,s),emitsOptions:Xg(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ZT.bind(null,i),t.ce&&t.ce(i),i}let Ze=null;const $n=()=>Ze||et;let La,Gl;{const t=Ag(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};La=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),Gl=e("__VUE_SSR_SETTERS__",n=>To=n)}const Wr=t=>{const e=Ze;return La(t),t.scope.on(),()=>{t.scope.off(),La(e)}},Ql=()=>{Ze&&Ze.scope.off(),La(null)};function Km(t){return t.vnode.shapeFlag&4}let To=!1;function Wm(t,e=!1){e&&Gl(e);const{props:n,children:r}=t.vnode,s=Km(t);Bw(t,n,s,e),qw(t,r);const i=s?lI(t,e):void 0;return e&&Gl(!1),i}function lI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,jl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Gm(t):null,i=Wr(t);br();const o=Vn(r,t,0,[t.props,s]);if(Rr(),i(),ku(o)){if(o.then(Ql,Ql),e)return o.then(c=>{Yl(t,c,e)}).catch(c=>{ns(c,t,0)});t.asyncDep=o}else Yl(t,o,e)}else zm(t,e)}function Yl(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=$u(e)),zm(t,n)}let xa,Jl;function uI(t){xa=t,Jl=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,yw))}}const hI=()=>!xa;function zm(t,e,n){const r=t.type;if(!t.render){if(!e&&xa&&!r.render){const s=r.template||zu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Ue(Ue({isCustomElement:i,delimiters:c},o),l);r.render=xa(s,u)}}t.render=r.render||Pt,Jl&&Jl(t)}{const s=Wr(t);br();try{Nw(t)}finally{Rr(),s()}}}const dI={get(t,e){return Nt(t,"get",""),t[e]}};function Gm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,dI),slots:t.slots,emit:t.emit,expose:e}}function wo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy($u(jg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Di)return Di[n](t)},has(e,n){return n in e||n in Di}})):t.proxy}function Xl(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function fI(t){return de(t)&&"__vccOpts"in t}const Wt=(t,e)=>VT(t,e,To);function pI(t,e,n=Oe){const r=$n(),s=Rt(e),i=xt(e),o=Wg((l,u)=>{let d;return Pm(()=>{const p=t[e];sn(d,p)&&(d=p,u())}),{get(){return l(),n.get?n.get(d):d},set(p){const g=r.vnode.props;!(g&&(e in g||s in g||i in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g))&&sn(p,d)&&(d=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function yc(t,e,n){const r=arguments.length;return r===2?De(e)&&!ee(e)?Er(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),Ce(t,e,n))}function gI(){}function mI(t,e,n,r){const s=n[r];if(s&&Qm(s,t))return s;const i=e();return i.memo=t.slice(),i.memoIndex=r,n[r]=i}function Qm(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(sn(n[r],e[r]))return!1;return Kr>0&&kt&&kt.push(t),!0}const Ym="3.4.29",_I=Pt,yI=GT,vI=_s,EI=Jg,TI={createComponentInstance:Hm,setupComponent:Wm,renderComponentRoot:ma,setCurrentRenderingInstance:Yi,isVNode:Er,normalizeVNode:Lt,getComponentPublicInstance:wo},wI=TI,II=null,AI=null,bI=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const RI="http://www.w3.org/2000/svg",SI="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,pf=Sn&&Sn.createElement("template"),CI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Sn.createElementNS(RI,t):e==="mathml"?Sn.createElementNS(SI,t):n?Sn.createElement(t,{is:n}):Sn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{pf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=pf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Jn="transition",Ei="animation",Bs=Symbol("_vtc"),vc=(t,{slots:e})=>yc(Mm,Xm(t),e);vc.displayName="Transition";const Jm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},PI=vc.props=Ue({},Ju,Jm),Nr=(t,e=[])=>{ee(t)?t.forEach(n=>n(...e)):t&&t(...e)},gf=t=>t?ee(t)?t.some(e=>e.length>1):t.length>1:!1;function Xm(t){const e={};for(const T in t)T in Jm||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,C=kI(s),M=C&&C[0],V=C&&C[1],{onBeforeEnter:B,onEnter:O,onEnterCancelled:S,onLeave:k,onLeaveCancelled:x,onBeforeAppear:N=B,onAppear:b=O,onAppearCancelled:v=S}=e,m=(T,w,pe)=>{tr(T,w?d:c),tr(T,w?u:o),pe&&pe()},_=(T,w)=>{T._isLeaving=!1,tr(T,p),tr(T,I),tr(T,g),w&&w()},E=T=>(w,pe)=>{const ye=T?b:O,te=()=>m(w,T,pe);Nr(ye,[w,te]),mf(()=>{tr(w,T?l:i),Rn(w,T?d:c),gf(ye)||_f(w,r,M,te)})};return Ue(e,{onBeforeEnter(T){Nr(B,[T]),Rn(T,i),Rn(T,o)},onBeforeAppear(T){Nr(N,[T]),Rn(T,l),Rn(T,u)},onEnter:E(!1),onAppear:E(!0),onLeave(T,w){T._isLeaving=!0;const pe=()=>_(T,w);Rn(T,p),Rn(T,g),e_(),mf(()=>{T._isLeaving&&(tr(T,p),Rn(T,I),gf(k)||_f(T,r,V,pe))}),Nr(k,[T,pe])},onEnterCancelled(T){m(T,!1),Nr(S,[T])},onAppearCancelled(T){m(T,!0),Nr(v,[T])},onLeaveCancelled(T){_(T),Nr(x,[T])}})}function kI(t){if(t==null)return null;if(De(t))return[fl(t.enter),fl(t.leave)];{const e=fl(t);return[e,e]}}function fl(t){return Pa(t)}function Rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bs]||(t[Bs]=new Set)).add(e)}function tr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Bs];n&&(n.delete(e),n.size||(t[Bs]=void 0))}function mf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let OI=0;function _f(t,e,n,r){const s=t._endId=++OI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=Zm(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=I=>{I.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(u,g)}function Zm(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Jn}Delay`),i=r(`${Jn}Duration`),o=yf(s,i),c=r(`${Ei}Delay`),l=r(`${Ei}Duration`),u=yf(c,l);let d=null,p=0,g=0;e===Jn?o>0&&(d=Jn,p=o,g=i.length):e===Ei?u>0&&(d=Ei,p=u,g=l.length):(p=Math.max(o,u),d=p>0?o>u?Jn:Ei:null,g=d?d===Jn?i.length:l.length:0);const I=d===Jn&&/\b(transform|all)(,|$)/.test(r(`${Jn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:I}}function yf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>vf(n)+vf(t[r])))}function vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function e_(){return document.body.offsetHeight}function NI(t,e,n){const r=t[Bs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fa=Symbol("_vod"),t_=Symbol("_vsh"),n_={beforeMount(t,{value:e},{transition:n}){t[Fa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ti(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ti(t,!0),r.enter(t)):r.leave(t,()=>{Ti(t,!1)}):Ti(t,e))},beforeUnmount(t,{value:e}){Ti(t,e)}};function Ti(t,e){t.style.display=e?t[Fa]:"none",t[t_]=!e}function DI(){n_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const r_=Symbol("");function VI(t){const e=$n();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>eu(i,s))},r=()=>{const s=t(e.proxy);Zl(e.subTree,s),n(s)};Xs(()=>{Cm(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),mc(()=>s.disconnect())})}function Zl(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Zl(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)eu(t.el,e);else if(t.type===Je)t.children.forEach(n=>Zl(n,e));else if(t.type===$r){let{el:n,anchor:r}=t;for(;n&&(eu(n,e),n!==r);)n=n.nextSibling}}function eu(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[r_]=r}}const MI=/(^|;)\s*display\s*:/;function LI(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ya(r,c,"")}else for(const o in e)n[o]==null&&ya(r,o,"");for(const o in n)o==="display"&&(i=!0),ya(r,o,n[o])}else if(s){if(e!==n){const o=r[r_];o&&(n+=";"+o),r.cssText=n,i=MI.test(n)}}else e&&t.removeAttribute("style");Fa in t&&(t[Fa]=i?r.display:"",t[t_]&&(r.display="none"))}const Ef=/\s*!important$/;function ya(t,e,n){if(ee(n))n.forEach(r=>ya(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xI(t,e);Ef.test(n)?t.setProperty(xt(r),n.replace(Ef,""),"important"):t[r]=n}}const Tf=["Webkit","Moz","ms"],pl={};function xI(t,e){const n=pl[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return pl[e]=r;r=po(r);for(let s=0;s<Tf.length;s++){const i=Tf[s]+r;if(i in t)return pl[e]=i}return e}const wf="http://www.w3.org/1999/xlink";function If(t,e,n,r,s,i=aT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wf,e.slice(6,e.length)):t.setAttributeNS(wf,e,n):n==null||i&&!bg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function FI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=bg(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Cn(t,e,n,r){t.addEventListener(e,n,r)}function UI(t,e,n,r){t.removeEventListener(e,n,r)}const Af=Symbol("_vei");function BI(t,e,n,r,s=null){const i=t[Af]||(t[Af]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=$I(e);if(r){const u=i[e]=HI(r,s);Cn(t,c,u,l)}else o&&(UI(t,c,o,l),i[e]=void 0)}}const bf=/(?:Once|Passive|Capture)$/;function $I(t){let e;if(bf.test(t)){e={};let r;for(;r=t.match(bf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xt(t.slice(2)),e]}let gl=0;const jI=Promise.resolve(),qI=()=>gl||(jI.then(()=>gl=0),gl=Date.now());function HI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ut(KI(r,n.value),e,5,[r])};return n.value=t,n.attached=qI(),n}function KI(t,e){if(ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,WI=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?NI(t,r,u):e==="style"?LI(t,n,r):fo(e)?Cu(e)||BI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):zI(t,e,r,u))?(FI(t,e,r,i,o,c,l),(e==="value"||e==="checked"||e==="selected")&&If(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),If(t,e,r,u))};function zI(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rf(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rf(e)&&Be(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function s_(t,e,n){const r=yo(t,e);class s extends Ec{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const GI=(t,e)=>s_(t,e,g_),QI=typeof HTMLElement<"u"?HTMLElement:class{};class Ec extends QI{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,_o(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),tu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!ee(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=Pa(this._props[l])),(c||(c=Object.create(null)))[Rt(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=ee(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Rt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=Rt(e);this._numberProps&&this._numberProps[r]&&(n=Pa(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(xt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(xt(e),n+""):n||this.removeAttribute(xt(e))))}_update(){tu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ce(this._def,Ue({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),xt(i)!==i&&r(xt(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Ec){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function YI(t="$style"){{const e=$n();if(!e)return Oe;const n=e.type.__cssModules;if(!n)return Oe;const r=n[t];return r||Oe}}const i_=new WeakMap,o_=new WeakMap,Ua=Symbol("_moveCb"),Sf=Symbol("_enterCb"),a_={name:"TransitionGroup",props:Ue({},PI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=$n(),r=Yu();let s,i;return pc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!nA(s[0].el,n.vnode.el,o))return;s.forEach(ZI),s.forEach(eA);const c=s.filter(tA);e_(),c.forEach(l=>{const u=l.el,d=u.style;Rn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Ua]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Ua]=null,tr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Ie(t),c=Xm(o);let l=o.tag||Je;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),vr(d,Us(d,c,r,n)),i_.set(d,d.el.getBoundingClientRect()))}i=e.default?_c(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&vr(d,Us(d,c,r,n))}return Ce(l,null,i)}}},JI=t=>delete t.mode;a_.props;const XI=a_;function ZI(t){const e=t.el;e[Ua]&&e[Ua](),e[Sf]&&e[Sf]()}function eA(t){o_.set(t,t.el.getBoundingClientRect())}function tA(t){const e=i_.get(t),n=o_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function nA(t,e,n){const r=t.cloneNode(),s=t[Bs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=Zm(r);return i.removeChild(r),o}const Tr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ee(e)?n=>bs(e,n):e};function rA(t){t.target.composing=!0}function Cf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gt=Symbol("_assign"),Ft={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gt]=Tr(s);const i=r||s.props&&s.props.type==="number";Cn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ca(c)),t[Gt](c)}),n&&Cn(t,"change",()=>{t.value=t.value.trim()}),e||(Cn(t,"compositionstart",rA),Cn(t,"compositionend",Cf),Cn(t,"change",Cf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Gt]=Tr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ca(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Zu={deep:!0,created(t,e,n){t[Gt]=Tr(n),Cn(t,"change",()=>{const r=t._modelValue,s=$s(t),i=t.checked,o=t[Gt];if(ee(r)){const c=oc(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(ts(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(l_(t,i))})},mounted:Pf,beforeUpdate(t,e,n){t[Gt]=Tr(n),Pf(t,e,n)}};function Pf(t,{value:e,oldValue:n},r){t._modelValue=e,ee(e)?t.checked=oc(e,r.props.value)>-1:ts(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=yr(e,l_(t,!0)))}const eh={created(t,{value:e},n){t.checked=yr(e,n.props.value),t[Gt]=Tr(n),Cn(t,"change",()=>{t[Gt]($s(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Gt]=Tr(r),e!==n&&(t.checked=yr(e,r.props.value))}},c_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ts(e);Cn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ca($s(o)):$s(o));t[Gt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,_o(()=>{t._assigning=!1})}),t[Gt]=Tr(r)},mounted(t,{value:e,modifiers:{number:n}}){kf(t,e)},beforeUpdate(t,e,n){t[Gt]=Tr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||kf(t,e)}};function kf(t,e,n){const r=t.multiple,s=ee(e);if(!(r&&!s&&!ts(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=$s(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=oc(e,l)>-1}else c.selected=e.has(l);else if(yr($s(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function $s(t){return"_value"in t?t._value:t.value}function l_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const u_={created(t,e,n){ca(t,e,n,null,"created")},mounted(t,e,n){ca(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ca(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ca(t,e,n,r,"updated")}};function h_(t,e){switch(t){case"SELECT":return c_;case"TEXTAREA":return Ft;default:switch(e){case"checkbox":return Zu;case"radio":return eh;default:return Ft}}}function ca(t,e,n,r,s){const o=h_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function sA(){Ft.getSSRProps=({value:t})=>({value:t}),eh.getSSRProps=({value:t},e)=>{if(e.props&&yr(e.props.value,t))return{checked:!0}},Zu.getSSRProps=({value:t},e)=>{if(ee(t)){if(e.props&&oc(t,e.props.value)>-1)return{checked:!0}}else if(ts(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},u_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=h_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const iA=["ctrl","shift","alt","meta"],oA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>iA.some(n=>t[`${n}Key`]&&!e.includes(n))},aA=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=oA[e[o]];if(c&&c(s,e))return}return t(s,...i)})},cA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},th=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=xt(s.key);if(e.some(o=>o===i||cA[o]===i))return t(s)})},d_=Ue({patchProp:WI},CI);let Li,Of=!1;function f_(){return Li||(Li=Tm(d_))}function p_(){return Li=Of?Li:wm(d_),Of=!0,Li}const tu=(...t)=>{f_().render(...t)},g_=(...t)=>{p_().hydrate(...t)},m_=(...t)=>{const e=f_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=y_(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,__(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},lA=(...t)=>{const e=p_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=y_(r);if(s)return n(s,!0,__(s))},e};function __(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function y_(t){return Be(t)?document.querySelector(t):t}let Nf=!1;const uA=()=>{Nf||(Nf=!0,sA(),DI())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const hA=()=>{},dA=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Mm,BaseTransitionPropsValidators:Ju,Comment:at,DeprecationTypes:bI,EffectScope:Nu,ErrorCodes:zT,ErrorTypeStrings:yI,Fragment:Je,KeepAlive:Xw,ReactiveEffect:xs,Static:$r,Suspense:cw,Teleport:sI,Text:Hr,TrackOpTypes:HT,Transition:vc,TransitionGroup:XI,TriggerOpTypes:KT,VueElement:Ec,assertNumber:WT,callWithAsyncErrorHandling:Ut,callWithErrorHandling:Vn,camelize:Rt,capitalize:po,cloneVNode:vn,compatUtils:AI,compile:hA,computed:Wt,createApp:m_,createBlock:jr,createCommentVNode:Pn,createElementBlock:it,createElementVNode:K,createHydrationRenderer:wm,createPropsRestProxy:kw,createRenderer:Tm,createSSRApp:lA,createSlots:pw,createStaticVNode:jm,createTextVNode:fr,createVNode:Ce,customRef:Wg,defineAsyncComponent:gw,defineComponent:yo,defineCustomElement:s_,defineEmits:Ew,defineExpose:Tw,defineModel:Aw,defineOptions:ww,defineProps:vw,defineSSRCustomElement:GI,defineSlots:Iw,devtools:vI,effect:dT,effectScope:lT,getCurrentInstance:$n,getCurrentScope:Cg,getTransitionRawChildren:_c,guardReactiveProps:$m,h:yc,handleError:ns,hasInjectionContext:Uw,hydrate:g_,initCustomFormatter:gI,initDirectivesForSSR:uA,inject:Bt,isMemoSame:Qm,isProxy:Fu,isReactive:Rs,isReadonly:Fs,isRef:Ke,isRuntimeOnly:hI,isShallow:Wi,isVNode:Er,markRaw:jg,mergeDefaults:Cw,mergeModels:Pw,mergeProps:qm,nextTick:_o,normalizeClass:hr,normalizeProps:iT,normalizeStyle:go,onActivated:Om,onBeforeMount:rm,onBeforeUnmount:gc,onBeforeUpdate:sm,onDeactivated:Nm,onErrorCaptured:cm,onMounted:Xs,onRenderTracked:am,onRenderTriggered:om,onScopeDispose:uT,onServerPrefetch:im,onUnmounted:mc,onUpdated:pc,openBlock:xe,popScopeId:ss,provide:Os,proxyRefs:$u,pushScopeId:rs,queuePostFlushCb:Oa,reactive:mo,readonly:xu,ref:Ge,registerRuntimeCompiler:uI,render:tu,renderList:Bl,renderSlot:mw,resolveComponent:Zg,resolveDirective:ow,resolveDynamicComponent:tm,resolveFilter:II,resolveTransitionHooks:Us,setBlockTracking:zl,setDevtoolsHook:EI,setTransitionHooks:vr,shallowReactive:Lu,shallowReadonly:DT,shallowRef:Hg,ssrContextKey:Rm,ssrUtils:wI,stop:fT,toDisplayString:bn,toHandlerKey:Ni,toHandlers:_w,toRaw:Ie,toRef:qT,toRefs:BT,toValue:xT,transformVNodeArgs:iI,triggerRef:LT,unref:Et,useAttrs:Sw,useCssModule:YI,useCssVars:VI,useModel:pI,useSSRContext:Sm,useSlots:Rw,useTransitionState:Yu,vModelCheckbox:Zu,vModelDynamic:u_,vModelRadio:eh,vModelSelect:c_,vModelText:Ft,vShow:n_,version:Ym,warn:_I,watch:Ns,watchEffect:Qw,watchPostEffect:Cm,watchSyncEffect:Pm,withAsyncContext:Ow,withCtx:fn,withDefaults:bw,withDirectives:pn,withKeys:th,withMemo:mI,withModifiers:aA,withScopeId:ew},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ys=typeof document<"u";function fA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=on(s)?s.map(t):t(s)}return n}const xi=()=>{},on=Array.isArray,v_=/#/g,pA=/&/g,gA=/\//g,mA=/=/g,_A=/\?/g,E_=/\+/g,yA=/%5B/g,vA=/%5D/g,T_=/%5E/g,EA=/%60/g,w_=/%7B/g,TA=/%7C/g,I_=/%7D/g,wA=/%20/g;function nh(t){return encodeURI(""+t).replace(TA,"|").replace(yA,"[").replace(vA,"]")}function IA(t){return nh(t).replace(w_,"{").replace(I_,"}").replace(T_,"^")}function nu(t){return nh(t).replace(E_,"%2B").replace(wA,"+").replace(v_,"%23").replace(pA,"%26").replace(EA,"`").replace(w_,"{").replace(I_,"}").replace(T_,"^")}function AA(t){return nu(t).replace(mA,"%3D")}function bA(t){return nh(t).replace(v_,"%23").replace(_A,"%3F")}function RA(t){return t==null?"":bA(t).replace(gA,"%2F")}function Zi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const SA=/\/$/,CA=t=>t.replace(SA,"");function _l(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=NA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Zi(o)}}function PA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Df(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&js(e.matched[r],n.matched[s])&&A_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function js(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function A_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!OA(t[n],e[n]))return!1;return!0}function OA(t,e){return on(t)?Vf(t,e):on(e)?Vf(e,t):t===e}function Vf(t,e){return on(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function NA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var eo;(function(t){t.pop="pop",t.push="push"})(eo||(eo={}));var Fi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fi||(Fi={}));function DA(t){if(!t)if(ys){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CA(t)}const VA=/^[^#]+#/;function MA(t,e){return t.replace(VA,"#")+e}function LA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Tc=()=>({left:window.scrollX,top:window.scrollY});function xA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=LA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Mf(t,e){return(history.state?history.state.position-e:-1)+t}const ru=new Map;function FA(t,e){ru.set(t,e)}function UA(t){const e=ru.get(t);return ru.delete(t),e}let BA=()=>location.protocol+"//"+location.host;function b_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Df(l,"")}return Df(n,t)+r+s}function $A(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const I=b_(t,location),C=n.value,M=e.value;let V=0;if(g){if(n.value=I,e.value=g,o&&o===C){o=null;return}V=M?g.position-M.position:0}else r(I);s.forEach(B=>{B(n.value,C,{delta:V,type:eo.pop,direction:V?V>0?Fi.forward:Fi.back:Fi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const I=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(I),I}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Tc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Lf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Tc():null}}function jA(t){const{history:e,location:n}=window,r={value:b_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:BA()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(I){console.error(I),n[d?"replace":"assign"](g)}}function o(l,u){const d=ke({},e.state,Lf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=ke({},s.value,e.state,{forward:l,scroll:Tc()});i(d.current,d,!0);const p=ke({},Lf(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function qA(t){t=DA(t);const e=jA(t),n=$A(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:MA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function HA(t){return typeof t=="string"||t&&typeof t=="object"}function R_(t){return typeof t=="string"||typeof t=="symbol"}const Xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},S_=Symbol("");var xf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xf||(xf={}));function qs(t,e){return ke(new Error,{type:t,[S_]:!0},e)}function An(t,e){return t instanceof Error&&S_ in t&&(e==null||!!(t.type&e))}const Ff="[^/]+?",KA={sensitive:!1,strict:!1,start:!0,end:!0},WA=/[.+*?^${}()[\]/\\]/g;function zA(t,e){const n=ke({},KA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let I=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(WA,"\\$&"),I+=40;else if(g.type===1){const{value:C,repeatable:M,optional:V,regexp:B}=g;i.push({name:C,repeatable:M,optional:V});const O=B||Ff;if(O!==Ff){I+=10;try{new RegExp(`(${O})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${C}" (${O}): `+k.message)}}let S=M?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(S=V&&u.length<2?`(?:/${S})`:"/"+S),V&&(S+="?"),s+=S,I+=20,V&&(I+=-8),M&&(I+=-20),O===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const I=d[g]||"",C=i[g-1];p[C.name]=I&&C.repeatable?I.split("/"):I}return p}function l(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of g)if(I.type===0)d+=I.value;else if(I.type===1){const{value:C,repeatable:M,optional:V}=I,B=C in u?u[C]:"";if(on(B)&&!M)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const O=on(B)?B.join("/"):B;if(!O)if(V)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);d+=O}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function GA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function C_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=GA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Uf(r))return 1;if(Uf(s))return-1}return s.length-r.length}function Uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const QA={type:0,value:""},YA=/[a-zA-Z0-9_]/;function JA(t){if(!t)return[[]];if(t==="/")return[[QA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${u}": ${I}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:YA.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function XA(t,e,n){const r=zA(JA(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ZA(t,e){const n=[],r=new Map;e=jf({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const I=!g,C=eb(d);C.aliasOf=g&&g.record;const M=jf(e,d),V=[C];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of S)V.push(ke({},C,{components:g?g.record.components:C.components,path:k,aliasOf:g?g.record:C}))}let B,O;for(const S of V){const{path:k}=S;if(p&&k[0]!=="/"){const x=p.record.path,N=x[x.length-1]==="/"?"":"/";S.path=p.record.path+(k&&N+k)}if(B=XA(S,p,M),g?g.alias.push(B):(O=O||B,O!==B&&O.alias.push(B),I&&d.name&&!$f(B)&&o(d.name)),P_(B)&&l(B),C.children){const x=C.children;for(let N=0;N<x.length;N++)i(x[N],B,g&&g.children[N])}g=g||B}return O?()=>{o(O)}:xi}function o(d){if(R_(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const p=rb(d,n);n.splice(p,0,d),d.record.name&&!$f(d)&&r.set(d.record.name,d)}function u(d,p){let g,I={},C,M;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw qs(1,{location:d});M=g.record.name,I=ke(Bf(p.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&Bf(d.params,g.keys.map(O=>O.name))),C=g.stringify(I)}else if(d.path!=null)C=d.path,g=n.find(O=>O.re.test(C)),g&&(I=g.parse(C),M=g.record.name);else{if(g=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!g)throw qs(1,{location:d,currentLocation:p});M=g.record.name,I=ke({},p.params,d.params),C=g.stringify(I)}const V=[];let B=g;for(;B;)V.unshift(B.record),B=B.parent;return{name:M,path:C,params:I,matched:V,meta:nb(V)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Bf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function eb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:tb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function tb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function $f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nb(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function jf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function rb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;C_(t,e[i])<0?r=i:n=i+1}const s=sb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function sb(t){let e=t;for(;e=e.parent;)if(P_(e)&&C_(t,e)===0)return e}function P_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ib(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(E_," "),o=i.indexOf("="),c=Zi(o<0?i:i.slice(0,o)),l=o<0?null:Zi(i.slice(o+1));if(c in e){let u=e[c];on(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function qf(t){let e="";for(let n in t){const r=t[n];if(n=AA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(on(r)?r.map(i=>i&&nu(i)):[r&&nu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ob(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=on(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ab=Symbol(""),Hf=Symbol(""),wc=Symbol(""),rh=Symbol(""),su=Symbol("");function wi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ir(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(qs(4,{from:n,to:e})):g instanceof Error?l(g):HA(g)?l(qs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function yl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(cb(l)){const d=(l.__vccOpts||l)[e];d&&i.push(ir(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=fA(d)?d.default:d;o.components[c]=p;const I=(p.__vccOpts||p)[e];return I&&ir(I,n,r,o,c,s)()}))}}return i}function cb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kf(t){const e=Bt(wc),n=Bt(rh),r=Wt(()=>{const l=Et(t.to);return e.resolve(l)}),s=Wt(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(js.bind(null,d));if(g>-1)return g;const I=Wf(l[u-2]);return u>1&&Wf(d)===I&&p[p.length-1].path!==I?p.findIndex(js.bind(null,l[u-2])):g}),i=Wt(()=>s.value>-1&&hb(n.params,r.value.params)),o=Wt(()=>s.value>-1&&s.value===n.matched.length-1&&A_(n.params,r.value.params));function c(l={}){return ub(l)?e[Et(t.replace)?"replace":"push"](Et(t.to)).catch(xi):Promise.resolve()}return{route:r,href:Wt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const lb=yo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kf,setup(t,{slots:e}){const n=mo(Kf(t)),{options:r}=Bt(wc),s=Wt(()=>({[zf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),k_=lb;function ub(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!on(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zf=(t,e,n)=>t??e??n,db=yo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Bt(su),s=Wt(()=>t.route||r.value),i=Bt(Hf,0),o=Wt(()=>{let u=Et(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=Wt(()=>s.value.matched[o.value]);Os(Hf,Wt(()=>o.value+1)),Os(ab,c),Os(su,s);const l=Ge();return Ns(()=>[l.value,c.value,t.name],([u,d,p],[g,I,C])=>{d&&(d.instances[p]=u,I&&I!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),u&&d&&(!I||!js(d,I)||!g)&&(d.enterCallbacks[p]||[]).forEach(M=>M(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return Gf(n.default,{Component:g,route:u});const I=p.props[d],C=I?I===!0?u.params:typeof I=="function"?I(u):I:null,V=yc(g,ke({},C,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Gf(n.default,{Component:V,route:u})||V}}});function Gf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const O_=db;function fb(t){const e=ZA(t.routes,t),n=t.parseQuery||ib,r=t.stringifyQuery||qf,s=t.history,i=wi(),o=wi(),c=wi(),l=Hg(Xn);let u=Xn;ys&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ml.bind(null,U=>""+U),p=ml.bind(null,RA),g=ml.bind(null,Zi);function I(U,Z){let J,re;return R_(U)?(J=e.getRecordMatcher(U),re=Z):re=U,e.addRoute(re,J)}function C(U){const Z=e.getRecordMatcher(U);Z&&e.removeRoute(Z)}function M(){return e.getRoutes().map(U=>U.record)}function V(U){return!!e.getRecordMatcher(U)}function B(U,Z){if(Z=ke({},Z||l.value),typeof U=="string"){const R=_l(n,U,Z.path),D=e.resolve({path:R.path},Z),$=s.createHref(R.fullPath);return ke(R,D,{params:g(D.params),hash:Zi(R.hash),redirectedFrom:void 0,href:$})}let J;if(U.path!=null)J=ke({},U,{path:_l(n,U.path,Z.path).path});else{const R=ke({},U.params);for(const D in R)R[D]==null&&delete R[D];J=ke({},U,{params:p(R)}),Z.params=p(Z.params)}const re=e.resolve(J,Z),Ee=U.hash||"";re.params=d(g(re.params));const Ne=PA(r,ke({},U,{hash:IA(Ee),path:re.path})),A=s.createHref(Ne);return ke({fullPath:Ne,hash:Ee,query:r===qf?ob(U.query):U.query||{}},re,{redirectedFrom:void 0,href:A})}function O(U){return typeof U=="string"?_l(n,U,l.value.path):ke({},U)}function S(U,Z){if(u!==U)return qs(8,{from:Z,to:U})}function k(U){return b(U)}function x(U){return k(ke(O(U),{replace:!0}))}function N(U){const Z=U.matched[U.matched.length-1];if(Z&&Z.redirect){const{redirect:J}=Z;let re=typeof J=="function"?J(U):J;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=O(re):{path:re},re.params={}),ke({query:U.query,hash:U.hash,params:re.path!=null?{}:U.params},re)}}function b(U,Z){const J=u=B(U),re=l.value,Ee=U.state,Ne=U.force,A=U.replace===!0,R=N(J);if(R)return b(ke(O(R),{state:typeof R=="object"?ke({},Ee,R.state):Ee,force:Ne,replace:A}),Z||J);const D=J;D.redirectedFrom=Z;let $;return!Ne&&kA(r,re,J)&&($=qs(16,{to:D,from:re}),jt(re,re,!0,!1)),($?Promise.resolve($):_(D,re)).catch(F=>An(F)?An(F,2)?F:Xt(F):ne(F,D,re)).then(F=>{if(F){if(An(F,2))return b(ke({replace:A},O(F.to),{state:typeof F.to=="object"?ke({},Ee,F.to.state):Ee,force:Ne}),Z||D)}else F=T(D,re,!0,A,Ee);return E(D,re,F),F})}function v(U,Z){const J=S(U,Z);return J?Promise.reject(J):Promise.resolve()}function m(U){const Z=Kn.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(U):U()}function _(U,Z){let J;const[re,Ee,Ne]=pb(U,Z);J=yl(re.reverse(),"beforeRouteLeave",U,Z);for(const R of re)R.leaveGuards.forEach(D=>{J.push(ir(D,U,Z))});const A=v.bind(null,U,Z);return J.push(A),rt(J).then(()=>{J=[];for(const R of i.list())J.push(ir(R,U,Z));return J.push(A),rt(J)}).then(()=>{J=yl(Ee,"beforeRouteUpdate",U,Z);for(const R of Ee)R.updateGuards.forEach(D=>{J.push(ir(D,U,Z))});return J.push(A),rt(J)}).then(()=>{J=[];for(const R of Ne)if(R.beforeEnter)if(on(R.beforeEnter))for(const D of R.beforeEnter)J.push(ir(D,U,Z));else J.push(ir(R.beforeEnter,U,Z));return J.push(A),rt(J)}).then(()=>(U.matched.forEach(R=>R.enterCallbacks={}),J=yl(Ne,"beforeRouteEnter",U,Z,m),J.push(A),rt(J))).then(()=>{J=[];for(const R of o.list())J.push(ir(R,U,Z));return J.push(A),rt(J)}).catch(R=>An(R,8)?R:Promise.reject(R))}function E(U,Z,J){c.list().forEach(re=>m(()=>re(U,Z,J)))}function T(U,Z,J,re,Ee){const Ne=S(U,Z);if(Ne)return Ne;const A=Z===Xn,R=ys?history.state:{};J&&(re||A?s.replace(U.fullPath,ke({scroll:A&&R&&R.scroll},Ee)):s.push(U.fullPath,Ee)),l.value=U,jt(U,Z,J,A),Xt()}let w;function pe(){w||(w=s.listen((U,Z,J)=>{if(!un.listening)return;const re=B(U),Ee=N(re);if(Ee){b(ke(Ee,{replace:!0}),re).catch(xi);return}u=re;const Ne=l.value;ys&&FA(Mf(Ne.fullPath,J.delta),Tc()),_(re,Ne).catch(A=>An(A,12)?A:An(A,2)?(b(A.to,re).then(R=>{An(R,20)&&!J.delta&&J.type===eo.pop&&s.go(-1,!1)}).catch(xi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ne(A,re,Ne))).then(A=>{A=A||T(re,Ne,!1),A&&(J.delta&&!An(A,8)?s.go(-J.delta,!1):J.type===eo.pop&&An(A,20)&&s.go(-1,!1)),E(re,Ne,A)}).catch(xi)}))}let ye=wi(),te=wi(),he;function ne(U,Z,J){Xt(U);const re=te.list();return re.length?re.forEach(Ee=>Ee(U,Z,J)):console.error(U),Promise.reject(U)}function wt(){return he&&l.value!==Xn?Promise.resolve():new Promise((U,Z)=>{ye.add([U,Z])})}function Xt(U){return he||(he=!U,pe(),ye.list().forEach(([Z,J])=>U?J(U):Z()),ye.reset()),U}function jt(U,Z,J,re){const{scrollBehavior:Ee}=t;if(!ys||!Ee)return Promise.resolve();const Ne=!J&&UA(Mf(U.fullPath,0))||(re||!J)&&history.state&&history.state.scroll||null;return _o().then(()=>Ee(U,Z,Ne)).then(A=>A&&xA(A)).catch(A=>ne(A,U,Z))}const $e=U=>s.go(U);let je;const Kn=new Set,un={currentRoute:l,listening:!0,addRoute:I,removeRoute:C,hasRoute:V,getRoutes:M,resolve:B,options:t,push:k,replace:x,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:te.add,isReady:wt,install(U){const Z=this;U.component("RouterLink",k_),U.component("RouterView",O_),U.config.globalProperties.$router=Z,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Et(l)}),ys&&!je&&l.value===Xn&&(je=!0,k(s.location).catch(Ee=>{}));const J={};for(const Ee in Xn)Object.defineProperty(J,Ee,{get:()=>l.value[Ee],enumerable:!0});U.provide(wc,Z),U.provide(rh,Lu(J)),U.provide(su,l);const re=U.unmount;Kn.add(U),U.unmount=function(){Kn.delete(U),Kn.size<1&&(u=Xn,w&&w(),w=null,l.value=Xn,je=!1,he=!1),re()}}};function rt(U){return U.reduce((Z,J)=>Z.then(()=>m(J)),Promise.resolve())}return un}function pb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>js(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>js(u,l))||s.push(l))}return[n,r,s]}function Ic(){return Bt(wc)}function N_(){return Bt(rh)}var Qf={};/**
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
 */const D_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},V_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,I=u&63;l||(I=64,o||(g=64)),r.push(n[d],n[p],n[g],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(D_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new mb;const g=i<<2|c>>4;if(r.push(g),u!==64){const I=c<<4&240|u>>2;if(r.push(I),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _b=function(t){const e=D_(t);return V_.encodeByteArray(e,!0)},Ba=function(t){return _b(t).replace(/\./g,"")},M_=function(t){try{return V_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vb=()=>yb().__FIREBASE_DEFAULTS__,Eb=()=>{if(typeof process>"u"||typeof Qf>"u")return;const t=Qf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&M_(t[1]);return e&&JSON.parse(e)},Ac=()=>{try{return vb()||Eb()||Tb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},L_=t=>{var e,n;return(n=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wb=t=>{const e=L_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x_=()=>{var t;return(t=Ac())===null||t===void 0?void 0:t.config},F_=t=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ib{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ab(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ba(JSON.stringify(n)),Ba(JSON.stringify(o)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Rb(){var t;const e=(t=Ac())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cb(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Pb(){return!Rb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function B_(){try{return typeof indexedDB=="object"}catch{return!1}}function $_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function kb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ob="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ob,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Nb(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ln(s,c,r)}}function Nb(t,e){return t.replace(Db,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Db=/\{\$([^}]+)}/g;function Vb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function to(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yf(i)&&Yf(o)){if(!to(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yf(t){return t!==null&&typeof t=="object"}/**
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
 */function Io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Si(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ci(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mb(t,e){const n=new Lb(t,e);return n.subscribe.bind(n)}class Lb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vl),s.error===void 0&&(s.error=vl),s.complete===void 0&&(s.complete=vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}/**
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
 */const Fb=1e3,Ub=2,Bb=4*60*60*1e3,$b=.5;function Jf(t,e=Fb,n=Ub){const r=e*Math.pow(n,t),s=Math.round($b*r*(Math.random()-.5)*2);return Math.min(Bb,r+s)}/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class jb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ib;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hb(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qb(t){return t===Dr?void 0:t}function Hb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const Wb={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},zb=Te.INFO,Gb={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},Qb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Gb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=zb,this._logHandler=Qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const Yb=(t,e)=>e.some(n=>t instanceof n);let Xf,Zf;function Jb(){return Xf||(Xf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xb(){return Zf||(Zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j_=new WeakMap,iu=new WeakMap,q_=new WeakMap,El=new WeakMap,sh=new WeakMap;function Zb(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j_.set(n,t)}).catch(()=>{}),sh.set(e,t),e}function e0(t){if(iu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});iu.set(t,e)}let ou={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function t0(t){ou=t(ou)}function n0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tl(this),e,...n);return q_.set(r,e.sort?e.sort():[e]),pr(r)}:Xb().includes(t)?function(...e){return t.apply(Tl(this),e),pr(j_.get(this))}:function(...e){return pr(t.apply(Tl(this),e))}}function r0(t){return typeof t=="function"?n0(t):(t instanceof IDBTransaction&&e0(t),Yb(t,Jb())?new Proxy(t,ou):t)}function pr(t){if(t instanceof IDBRequest)return Zb(t);if(El.has(t))return El.get(t);const e=r0(t);return e!==t&&(El.set(t,e),sh.set(e,t)),e}const Tl=t=>sh.get(t);function H_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pr(o.result),l.oldVersion,l.newVersion,pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const s0=["get","getKey","getAll","getAllKeys","count"],i0=["put","add","delete","clear"],wl=new Map;function ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wl.get(e))return wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=i0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||s0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return wl.set(e,i),i}t0(t=>({...t,get:(e,n,r)=>ep(e,n)||t.get(e,n,r),has:(e,n)=>!!ep(e,n)||t.has(e,n)}));/**
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
 */class o0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const au="@firebase/app",tp="0.10.5";/**
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
 */const zr=new bc("@firebase/app"),c0="@firebase/app-compat",l0="@firebase/analytics-compat",u0="@firebase/analytics",h0="@firebase/app-check-compat",d0="@firebase/app-check",f0="@firebase/auth",p0="@firebase/auth-compat",g0="@firebase/database",m0="@firebase/database-compat",_0="@firebase/functions",y0="@firebase/functions-compat",v0="@firebase/installations",E0="@firebase/installations-compat",T0="@firebase/messaging",w0="@firebase/messaging-compat",I0="@firebase/performance",A0="@firebase/performance-compat",b0="@firebase/remote-config",R0="@firebase/remote-config-compat",S0="@firebase/storage",C0="@firebase/storage-compat",P0="@firebase/firestore",k0="@firebase/vertexai-preview",O0="@firebase/firestore-compat",N0="firebase",D0="10.12.2";/**
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
 */const cu="[DEFAULT]",V0={[au]:"fire-core",[c0]:"fire-core-compat",[u0]:"fire-analytics",[l0]:"fire-analytics-compat",[d0]:"fire-app-check",[h0]:"fire-app-check-compat",[f0]:"fire-auth",[p0]:"fire-auth-compat",[g0]:"fire-rtdb",[m0]:"fire-rtdb-compat",[_0]:"fire-fn",[y0]:"fire-fn-compat",[v0]:"fire-iid",[E0]:"fire-iid-compat",[T0]:"fire-fcm",[w0]:"fire-fcm-compat",[I0]:"fire-perf",[A0]:"fire-perf-compat",[b0]:"fire-rc",[R0]:"fire-rc-compat",[S0]:"fire-gcs",[C0]:"fire-gcs-compat",[P0]:"fire-fst",[O0]:"fire-fst-compat",[k0]:"fire-vertex","fire-js":"fire-js",[N0]:"fire-js-all"};/**
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
 */const $a=new Map,M0=new Map,lu=new Map;function np(t,e){try{t.container.addComponent(e)}catch(n){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(lu.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;lu.set(e,t);for(const n of $a.values())np(n,t);for(const n of M0.values())np(n,t);return!0}function os(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t.settings!==void 0}/**
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
 */const L0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new is("app","Firebase",L0);/**
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
 */class x0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=D0;function K_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gr.create("bad-app-name",{appName:String(s)});if(n||(n=x_()),!n)throw gr.create("no-options");const i=$a.get(s);if(i){if(to(n,i.options)&&to(r,i.config))return i;throw gr.create("duplicate-app",{appName:s})}const o=new Kb(s);for(const l of lu.values())o.addComponent(l);const c=new x0(n,r,o);return $a.set(s,c),c}function ih(t=cu){const e=$a.get(t);if(!e&&t===cu&&x_())return K_();if(!e)throw gr.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let s=(r=V0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(c.join(" "));return}En(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const F0="firebase-heartbeat-database",U0=1,no="firebase-heartbeat-store";let Il=null;function W_(){return Il||(Il=H_(F0,U0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Il}async function B0(t){try{const n=(await W_()).transaction(no),r=await n.objectStore(no).get(z_(t));return await n.done,r}catch(e){if(e instanceof ln)zr.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(n.message)}}}async function rp(t,e){try{const r=(await W_()).transaction(no,"readwrite");await r.objectStore(no).put(e,z_(t)),await r.done}catch(n){if(n instanceof ln)zr.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(r.message)}}}function z_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $0=1024,j0=30*24*60*60*1e3;class q0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new K0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=j0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sp(),{heartbeatsToSend:r,unsentEntries:s}=H0(this._heartbeatsCache.heartbeats),i=Ba(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sp(){return new Date().toISOString().substring(0,10)}function H0(t,e=$0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ip(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class K0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B_()?$_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await B0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ip(t){return Ba(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function W0(t){En(new an("platform-logger",e=>new o0(e),"PRIVATE")),En(new an("heartbeat",e=>new q0(e),"PRIVATE")),Qt(au,tp,t),Qt(au,tp,"esm2017"),Qt("fire-js","")}W0("");function oh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function G_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const z0=G_,Q_=new is("auth","Firebase",G_());/**
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
 */const ja=new bc("@firebase/auth");function G0(t,...e){ja.logLevel<=Te.WARN&&ja.warn(`Auth (${Zs}): ${t}`,...e)}function va(t,...e){ja.logLevel<=Te.ERROR&&ja.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw ch(t,...e)}function rn(t,...e){return ch(t,...e)}function ah(t,e,n){const r=Object.assign(Object.assign({},z0()),{[e]:n});return new is("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return ah(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Q0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),ah(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ch(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Q_.create(t,...e)}function fe(t,e,...n){if(!t)throw ch(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw va(e),new Error(e)}function xn(t,e){t||kn(e)}/**
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
 */function uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Y0(){return op()==="http:"||op()==="https:"}function op(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function J0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y0()||U_()||"connection"in navigator)?navigator.onLine:!0}function X0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ao{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=bb()||Sb()}get(){return J0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lh(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Y_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Z0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eR=new Ao(3e4,6e4);function jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,s={}){return J_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Io(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Y_.fetch()(X_(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function J_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z0),e);try{const s=new nR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw la(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ah(t,d,u);Jt(t,d)}}catch(s){if(s instanceof ln)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function bo(t,e,n,r,s={}){const i=await qn(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function X_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?lh(t.config,s):`${t.config.apiScheme}://${s}`}function tR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),eR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}function ap(t){return t!==void 0&&t.enterprise!==void 0}class rR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function sR(t,e){return qn(t,"GET","/v2/recaptchaConfig",jn(t,e))}/**
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
 */async function iR(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function Z_(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oR(t,e=!1){const n=ft(t),r=await n.getIdToken(e),s=uh(r);fe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ui(Al(s.auth_time)),issuedAtTime:Ui(Al(s.iat)),expirationTime:Ui(Al(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Al(t){return Number(t)*1e3}function uh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return va("JWT malformed, contained fewer than 3 sections"),null;try{const s=M_(n);return s?JSON.parse(s):(va("Failed to decode base64 JWT payload"),null)}catch(s){return va("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cp(t){const e=uh(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&aR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ui(this.lastLoginAt),this.creationTime=Ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ro(t,Z_(n,{idToken:r}));fe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ey(i.providerUserInfo):[],c=uR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new hu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function lR(t){const e=ft(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ey(t){return t.map(e=>{var{providerId:n}=e,r=oh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function hR(t,e){const n=await J_(t,{},async()=>{const r=Io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=X_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Y_.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dR(t,e){return qn(t,"POST","/v2/accounts:revokeToken",jn(t,e))}/**
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
 */class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=cp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await hR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ds;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(fe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(fe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function Zn(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class On{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=oh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oR(this,e)}reload(){return lR(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new On(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await ro(this,iR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,V=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:S,emailVerified:k,isAnonymous:x,providerData:N,stsTokenManager:b}=n;fe(S&&b,e,"internal-error");const v=Ds.fromJSON(this.name,b);fe(typeof S=="string",e,"internal-error"),Zn(p,e.name),Zn(g,e.name),fe(typeof k=="boolean",e,"internal-error"),fe(typeof x=="boolean",e,"internal-error"),Zn(I,e.name),Zn(C,e.name),Zn(M,e.name),Zn(V,e.name),Zn(B,e.name),Zn(O,e.name);const m=new On({uid:S,auth:e,email:g,emailVerified:k,displayName:p,isAnonymous:x,photoURL:C,phoneNumber:I,tenantId:M,stsTokenManager:v,createdAt:B,lastLoginAt:O});return N&&Array.isArray(N)&&(m.providerData=N.map(_=>Object.assign({},_))),V&&(m._redirectEventId=V),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ds;s.updateFromServerResponse(n);const i=new On({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];fe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ey(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ds;c.updateFromIdToken(r);const l=new On({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const lp=new Map;function Nn(t){xn(t instanceof Function,"Expected a class definition");let e=lp.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lp.set(t,e),e)}/**
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
 */class ty{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ty.type="NONE";const up=ty;/**
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
 */function Ea(t,e,n){return`firebase:${t}:${e}:${n}`}class Vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ea(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ea("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?On._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vs(Nn(up),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Nn(up);const o=Ea(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=On._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Vs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Vs(i,e,r))}}/**
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
 */function hp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ny(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oy(e))return"Blackberry";if(ay(e))return"Webos";if(hh(e))return"Safari";if((e.includes("chrome/")||ry(e))&&!e.includes("edge/"))return"Chrome";if(iy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ny(t=dt()){return/firefox\//i.test(t)}function hh(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ry(t=dt()){return/crios\//i.test(t)}function sy(t=dt()){return/iemobile/i.test(t)}function iy(t=dt()){return/android/i.test(t)}function oy(t=dt()){return/blackberry/i.test(t)}function ay(t=dt()){return/webos/i.test(t)}function Rc(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fR(t=dt()){var e;return Rc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pR(){return Cb()&&document.documentMode===10}function cy(t=dt()){return Rc(t)||iy(t)||ay(t)||oy(t)||/windows phone/i.test(t)||sy(t)}function gR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ly(t,e=[]){let n;switch(t){case"Browser":n=hp(dt());break;case"Worker":n=`${hp(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${r}`}/**
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
 */class mR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _R(t,e={}){return qn(t,"GET","/v2/passwordPolicy",jn(t,e))}/**
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
 */const yR=6;class vR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ER{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dp(this),this.idTokenSubscription=new dp(this),this.beforeStateQueue=new mR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Z_(this,{idToken:e}),r=await On._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(Mn(this));const n=e?ft(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _R(this),n=new vR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Vs.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ly(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&G0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hn(t){return ft(t)}class dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mb(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TR(t){Sc=t}function uy(t){return Sc.loadJS(t)}function wR(){return Sc.recaptchaEnterpriseScript}function IR(){return Sc.gapiScript}function AR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bR="recaptcha-enterprise",RR="NO_RECAPTCHA";class SR{constructor(e){this.type=bR,this.auth=Hn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{sR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new rR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;ap(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(RR)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&ap(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=wR();l.length!==0&&(l+=c),uy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function fp(t,e,n,r=!1){const s=new SR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ha(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await fp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function CR(t,e){const n=os(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(to(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function PR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kR(t,e,n){const r=Hn(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=hy(e),{host:o,port:c}=OR(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),NR()}function hy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OR(t){const e=hy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pp(o)}}}function pp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class dh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}async function DR(t,e){return qn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function VR(t,e){return bo(t,"POST","/v1/accounts:signInWithPassword",jn(t,e))}async function MR(t,e){return qn(t,"POST","/v1/accounts:sendOobCode",jn(t,e))}async function LR(t,e){return MR(t,e)}/**
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
 */async function xR(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}async function FR(t,e){return bo(t,"POST","/v1/accounts:signInWithEmailLink",jn(t,e))}/**
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
 */class so extends dh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new so(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ha(e,n,"signInWithPassword",VR);case"emailLink":return xR(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ha(e,r,"signUpPassword",DR);case"emailLink":return FR(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ms(t,e){return bo(t,"POST","/v1/accounts:signInWithIdp",jn(t,e))}/**
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
 */const UR="http://localhost";class Gr extends dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=oh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Gr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ms(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:UR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Io(n)}return e}}/**
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
 */function BR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $R(t){const e=Si(Ci(t)).link,n=e?Si(Ci(e)).deep_link_id:null,r=Si(Ci(t)).deep_link_id;return(r?Si(Ci(r)).link:null)||r||n||e||t}class fh{constructor(e){var n,r,s,i,o,c;const l=Si(Ci(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=BR((s=l.mode)!==null&&s!==void 0?s:null);fe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=$R(e);try{return new fh(n)}catch{return null}}}/**
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
 */class ei{constructor(){this.providerId=ei.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fh.parseLink(n);return fe(r,"argument-error"),so._fromEmailAndCode(e,r.code,r.tenantId)}}ei.PROVIDER_ID="password";ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ro extends ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ar extends Ro{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
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
 */class Ct extends Ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gr._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
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
 */class cr extends Ro{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class lr extends Ro{constructor(){super("twitter.com")}static credential(e,n){return Gr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function jR(t,e){return bo(t,"POST","/v1/accounts:signUp",jn(t,e))}/**
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
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await On._fromIdTokenResponse(e,r,s),o=gp(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=gp(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ka extends ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ka(e,n,r,s)}}function dy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ka._fromErrorAndOperation(t,i,e,r):i})}async function qR(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
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
 */async function HR(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(Mn(r));const s="reauthenticate";try{const i=await ro(t,dy(r,s,e,t),n);fe(i.idToken,r,"internal-error");const o=uh(i.idToken);fe(o,r,"internal-error");const{sub:c}=o;return fe(t.uid===c,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
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
 */async function fy(t,e,n=!1){if(tn(t.app))return Promise.reject(Mn(t));const r="signIn",s=await dy(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KR(t,e){return fy(Hn(t),e)}/**
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
 */async function py(t){const e=Hn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WR(t,e,n){const r=Hn(t);await Ha(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",LR)}async function zR(t,e,n){if(tn(t.app))return Promise.reject(Mn(t));const r=Hn(t),o=await Ha(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&py(t),l}),c=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function GR(t,e,n){return tn(t.app)?Promise.reject(Mn(t)):KR(ft(t),ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&py(t),r})}function QR(t,e,n,r){return ft(t).onIdTokenChanged(e,n,r)}function YR(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function gy(t,e,n,r){return ft(t).onAuthStateChanged(e,n,r)}function JR(t){return ft(t).signOut()}const Wa="__sak";/**
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
 */class my{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wa,"1"),this.storage.removeItem(Wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function XR(){const t=dt();return hh(t)||Rc(t)}const ZR=1e3,eS=10;class _y extends my{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XR()&&gR(),this.fallbackToPolling=cy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_y.type="LOCAL";const tS=_y;/**
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
 */class yy extends my{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yy.type="SESSION";const vy=yy;/**
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
 */function nS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await nS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
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
 */function gh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=gh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function gn(){return window}function sS(t){gn().location.href=t}/**
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
 */function Ey(){return typeof gn().WorkerGlobalScope<"u"&&typeof gn().importScripts=="function"}async function iS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aS(){return Ey()?self:null}/**
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
 */const Ty="firebaseLocalStorageDb",cS=1,za="firebaseLocalStorage",wy="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function lS(){const t=indexedDB.deleteDatabase(Ty);return new So(t).toPromise()}function du(){const t=indexedDB.open(Ty,cS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:wy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await lS(),e(await du()))})})}async function mp(t,e,n){const r=Pc(t,!0).put({[wy]:e,value:n});return new So(r).toPromise()}async function uS(t,e){const n=Pc(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function _p(t,e){const n=Pc(t,!0).delete(e);return new So(n).toPromise()}const hS=800,dS=3;class Iy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await du(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(aS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iS(),!this.activeServiceWorker)return;this.sender=new rS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await du();return await mp(e,Wa,"1"),await _p(e,Wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_p(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pc(s,!1).getAll();return new So(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Iy.type="LOCAL";const fS=Iy;new Ao(3e4,6e4);/**
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
 */function Ay(t,e){return e?Nn(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mh extends dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pS(t){return fy(t.auth,new mh(t),t.bypassAuthState)}function gS(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),HR(n,new mh(t),t.bypassAuthState)}async function mS(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),qR(n,new mh(t),t.bypassAuthState)}/**
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
 */class by{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pS;case"linkViaPopup":case"linkViaRedirect":return mS;case"reauthViaPopup":case"reauthViaRedirect":return gS;default:Jt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _S=new Ao(2e3,1e4);async function Ry(t,e,n){if(tn(t.app))return Promise.reject(rn(t,"operation-not-supported-in-this-environment"));const r=Hn(t);Q0(t,e,ph);const s=Ay(r,n);return new Mr(r,"signInViaPopup",e,s).executeNotNull()}class Mr extends by{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_S.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const yS="pendingRedirect",Ta=new Map;class vS extends by{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ta.get(this.auth._key());if(!e){try{const r=await ES(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ta.set(this.auth._key(),e)}return this.bypassAuthState||Ta.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ES(t,e){const n=IS(e),r=wS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function TS(t,e){Ta.set(t._key(),e)}function wS(t){return Nn(t._redirectPersistence)}function IS(t){return Ea(yS,t.config.apiKey,t.name)}async function AS(t,e,n=!1){if(tn(t.app))return Promise.reject(Mn(t));const r=Hn(t),s=Ay(r,e),o=await new vS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const bS=10*60*1e3;class RS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bS&&this.cachedEventUids.clear(),this.cachedEventUids.has(yp(e))}saveEventToCache(e){this.cachedEventUids.add(yp(e)),this.lastProcessedEventTime=Date.now()}}function yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sy(t);default:return!1}}/**
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
 */async function CS(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
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
 */const PS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kS=/^https?/;async function OS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CS(t);for(const n of e)try{if(NS(n))return}catch{}Jt(t,"unauthorized-domain")}function NS(t){const e=uu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kS.test(n))return!1;if(PS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DS=new Ao(3e4,6e4);function vp(){const t=gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VS(t){return new Promise((e,n)=>{var r,s,i;function o(){vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vp(),n(rn(t,"network-request-failed"))},timeout:DS.get()})}if(!((s=(r=gn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=gn().gapi)===null||i===void 0)&&i.load)o();else{const c=AR("iframefcb");return gn()[c]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},uy(`${IR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw wa=null,e})}let wa=null;function MS(t){return wa=wa||VS(t),wa}/**
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
 */const LS=new Ao(5e3,15e3),xS="__/auth/iframe",FS="emulator/auth/iframe",US={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $S(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lh(e,FS):`https://${t.config.authDomain}/${xS}`,r={apiKey:e.apiKey,appName:t.name,v:Zs},s=BS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Io(r).slice(1)}`}async function jS(t){const e=await MS(t),n=gn().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:$S(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:US,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),c=gn().setTimeout(()=>{i(o)},LS.get());function l(){gn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const qS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HS=500,KS=600,WS="_blank",zS="http://localhost";class Ep{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GS(t,e,n,r=HS,s=KS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},qS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=dt().toLowerCase();n&&(c=ry(u)?WS:n),ny(u)&&(e=e||zS,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[I,C])=>`${g}${I}=${C},`,"");if(fR(u)&&c!=="_self")return QS(e||"",c),new Ep(null);const p=window.open(e||"",c,d);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new Ep(p)}function QS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const YS="__/auth/handler",JS="emulator/auth/handler",XS=encodeURIComponent("fac");async function Tp(t,e,n,r,s,i){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zs,eventId:s};if(e instanceof ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ro){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${XS}=${encodeURIComponent(l)}`:"";return`${ZS(t)}?${Io(c).slice(1)}${u}`}function ZS({config:t}){return t.emulator?lh(t,JS):`https://${t.authDomain}/${YS}`}/**
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
 */const bl="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vy,this._completeRedirectFn=AS,this._overrideRedirectResult=TS}async _openPopup(e,n,r,s){var i;xn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tp(e,n,r,uu(),s);return GS(e,o,gh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tp(e,n,r,uu(),s);return sS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jS(e),r=new RS(e);return n.register("authEvent",s=>(fe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bl,{type:bl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bl];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cy()||hh()||Rc()}}const tC=eC;var wp="@firebase/auth",Ip="1.7.4";/**
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
 */class nC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sC(t){En(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ly(t)},u=new ER(r,s,i,l);return PR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),En(new an("auth-internal",e=>{const n=Hn(e.getProvider("auth").getImmediate());return(r=>new nC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(wp,Ip,rC(t)),Qt(wp,Ip,"esm2017")}/**
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
 */const iC=5*60,oC=F_("authIdTokenMaxAge")||iC;let Ap=null;const aC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oC)return;const s=n==null?void 0:n.token;Ap!==s&&(Ap=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Co(t=ih()){const e=os(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CR(t,{popupRedirectResolver:tC,persistence:[fS,tS,vy]}),r=F_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aC(i.toString());YR(n,o,()=>o(n.currentUser)),QR(n,c=>o(c))}}const s=L_("auth");return s&&kR(n,`http://${s}`),n}function cC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}TR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sC("Browser");var lC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function hC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Cy={exports:{}};const dC=hC(dA);(function(t,e){(function(r,s){t.exports=s(dC)})(lC,n=>(()=>{var r={772:(c,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(u,d)=>{const p=u.__vccOpts||u;for(const[g,I]of d)p[g]=I;return p}},976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),i.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>x,ToastPlugin:()=>b,ToastPositions:()=>C,default:()=>v,useToast:()=>N});var c=i(976);const l=(0,c.createElementVNode)("div",{class:"v-toast__icon"},null,-1),u=["innerHTML"];function d(m,_,E,T,w,pe){return(0,c.openBlock)(),(0,c.createBlock)(c.Transition,{"enter-active-class":m.transition.enter,"leave-active-class":m.transition.leave},{default:(0,c.withCtx)(()=>[(0,c.withDirectives)((0,c.createElementVNode)("div",{ref:"root",role:"alert",class:(0,c.normalizeClass)(["v-toast__item",[`v-toast__item--${m.type}`,`v-toast__item--${m.position}`]]),onMouseover:_[0]||(_[0]=ye=>m.toggleTimer(!0)),onMouseleave:_[1]||(_[1]=ye=>m.toggleTimer(!1)),onClick:_[2]||(_[2]=function(){return m.whenClicked&&m.whenClicked(...arguments)})},[l,(0,c.createElementVNode)("p",{class:"v-toast__text",innerHTML:m.message},null,8,u)],34),[[c.vShow,m.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function p(m){var _;typeof m.remove<"u"?m.remove():(_=m.parentNode)==null||_.removeChild(m)}function g(m,_,E){let T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const w=(0,c.h)(m,_,T),pe=document.createElement("div");return pe.classList.add("v-toast--pending"),E.appendChild(pe),(0,c.render)(w,pe),w.component}class I{constructor(_,E){this.startedAt=Date.now(),this.callback=_,this.delay=E,this.timer=setTimeout(_,E)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const C=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function M(m){return{all:m=m||new Map,on:function(_,E){var T=m.get(_);T?T.push(E):m.set(_,[E])},off:function(_,E){var T=m.get(_);T&&(E?T.splice(T.indexOf(E)>>>0,1):m.set(_,[]))},emit:function(_,E){var T=m.get(_);T&&T.slice().map(function(w){w(E)}),(T=m.get("*"))&&T.slice().map(function(w){w(_,E)})}}}const B=M(),O=(0,c.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:C.BOTTOM_RIGHT,validator(m){return Object.values(C).includes(m)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),B.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const m=document.body;m.appendChild(this.parentTop),m.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const m=this.$refs.root;(0,c.render)(null,m),p(m)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const m=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),p(m),this.isActive=!0,this.duration&&(this.timer=new I(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(m){!this.pauseOnHover||!this.timer||(m?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return this.parentTop;case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){B.off("toast-clear",this.dismiss)}});var S=i(772);const x=(0,S.default)(O,[["render",d]]),N=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(_){let E=null;typeof _=="string"&&(E=_);const w=Object.assign({},{message:E},m,_);return{dismiss:g(x,w,document.body).ctx.dismiss}},clear(){B.emit("toast-clear")},success(_){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:_,type:"success"},E))},error(_){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:_,type:"error"},E))},info(_){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:_,type:"info"},E))},warning(_){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:_,type:"warning"},E))},default(_){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:_,type:"default"},E))}}},b={install:function(m){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},E=N(_);m.config.globalProperties.$toast=E,m.provide("$toast",E)}},v=b})(),o})())})(Cy);var Py=Cy.exports;const fC=uC(Py);function Qe(t,e){const n=Py.useToast();switch(t){case"success":n.success(e);break;case"info":n.info(e);break;case"warning":n.warning(e);break;case"error":n.error(e);break;case"default":n.default(e);break;default:n.default(e);break}}const as=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},ky=t=>(rs("data-v-bfeb2da2"),t=t(),ss(),t),pC={class:"navBar"},gC={class:"container"},mC=ky(()=>K("div",{class:"co"},"CO",-1)),_C=ky(()=>K("div",{class:"student"},"STUDENT",-1)),yC={class:"buttons"},vC={__name:"Nav",props:{isLoggedIn:Boolean},setup(t){const e=Co(),n=Ic();function r(){JR(e).then(()=>{n.push("/"),Qe("success","Successfully singed out!")}).catch(s=>{Qe("error",s.message)})}return(s,i)=>{const o=Zg("RouterLink");return xe(),it("div",pC,[K("div",gC,[Ce(o,{class:"logo",to:"/"},{default:fn(()=>[mC,_C]),_:1}),K("div",yC,[t.isLoggedIn?Pn("",!0):(xe(),jr(o,{key:0,class:"button",to:"/Login"},{default:fn(()=>[fr("Login")]),_:1})),t.isLoggedIn?Pn("",!0):(xe(),jr(o,{key:1,class:"button",to:"/Register"},{default:fn(()=>[fr("Register")]),_:1})),t.isLoggedIn?(xe(),jr(o,{key:2,class:"button",to:"/findcostudent"},{default:fn(()=>[fr("Find students")]),_:1})):Pn("",!0),t.isLoggedIn?(xe(),it("div",{key:3,class:"button",onClick:i[0]||(i[0]=c=>r())},"Sign out")):Pn("",!0)])])])}}},EC=as(vC,[["__scopeId","data-v-bfeb2da2"]]),TC={},Oy=t=>(rs("data-v-c0e10d71"),t=t(),ss(),t),wC={class:"footerBox"},IC=Oy(()=>K("p",null,"Copyright ©2024",-1)),AC=Oy(()=>K("p",null,"Designed by Samuel Coryn",-1)),bC=[IC,AC];function RC(t,e){return xe(),it("div",wC,bC)}const SC=as(TC,[["render",RC],["__scopeId","data-v-c0e10d71"]]),CC={class:"navBox"},PC={__name:"App",setup(t){const e=Ge(!1);let n;return Xs(()=>{n=Co(),gy(n,r=>{r?e.value=!0:e.value=!1})}),Os("isLoggedInKey",e),(r,s)=>(xe(),it(Je,null,[K("div",CC,[Ce(EC,{isLoggedIn:e.value},null,8,["isLoggedIn"])]),Ce(Et(O_),null,{default:fn(({Component:i})=>[Ce(vc,{name:"route",mode:"out-in"},{default:fn(()=>[(xe(),jr(tm(i)))]),_:2},1024)]),_:1}),Ce(SC)],64))}},kC="/costudent-demo/assets/students_stock_photo-BvfkMiXM.jpg",_h=t=>(rs("data-v-8f4f7b29"),t=t(),ss(),t),OC={class:"root"},NC={class:"grid"},DC={class:"landingColumn"},VC=_h(()=>K("div",{class:"title"},[K("h1",null,"Study better,"),K("h1",null,"Together")],-1)),MC=_h(()=>K("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),LC={class:"buttonArray"},xC=_h(()=>K("div",{class:"photo"},[K("img",{src:kC,alt:"People studying together."})],-1)),FC=jm('<div id="learnMore" data-v-8f4f7b29><div class="article" data-v-8f4f7b29><h1 data-v-8f4f7b29>ABOUT</h1><p data-v-8f4f7b29>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-8f4f7b29>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-8f4f7b29>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-8f4f7b29>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-8f4f7b29>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-8f4f7b29><div class="node" data-v-8f4f7b29><p data-v-8f4f7b29>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-8f4f7b29><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-8f4f7b29></path></svg><div class="node" data-v-8f4f7b29><p data-v-8f4f7b29>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-8f4f7b29><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-8f4f7b29></path></svg><div class="node" data-v-8f4f7b29><p data-v-8f4f7b29>Learn togehter!</p></div></div></div>',1),UC={__name:"Home",setup(t){function e(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=Bt("isLoggedInKey"),s=Ic();return(i,o)=>(xe(),it("div",OC,[K("div",NC,[K("div",DC,[VC,MC,K("div",LC,[K("div",{class:"button",onClick:o[0]||(o[0]=c=>n())},"Start studying"),K("div",{class:"button",onClick:o[1]||(o[1]=c=>e())},"Learn more")])]),xC]),FC]))}},BC=as(UC,[["__scopeId","data-v-8f4f7b29"]]);var $C="firebase",jC="10.12.2";/**
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
 */Qt($C,jC,"app");const Ny="@firebase/installations",yh="0.6.7";/**
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
 */const Dy=1e4,Vy=`w:${yh}`,My="FIS_v2",qC="https://firebaseinstallations.googleapis.com/v1",HC=60*60*1e3,KC="installations",WC="Installations";/**
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
 */const zC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yr=new is(KC,WC,zC);function Ly(t){return t instanceof ln&&t.code.includes("request-failed")}/**
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
 */function xy({projectId:t}){return`${qC}/projects/${t}/installations`}function Fy(t){return{token:t.token,requestStatus:2,expiresIn:QC(t.expiresIn),creationTime:Date.now()}}async function Uy(t,e){const r=(await e.json()).error;return Yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function By({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function GC(t,{refreshToken:e}){const n=By(t);return n.append("Authorization",YC(e)),n}async function $y(t){const e=await t();return e.status>=500&&e.status<600?t():e}function QC(t){return Number(t.replace("s","000"))}function YC(t){return`${My} ${t}`}/**
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
 */async function JC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xy(t),s=By(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:My,appId:t.appId,sdkVersion:Vy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await $y(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Fy(u.authToken)}}else throw await Uy("Create Installation",l)}/**
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
 */function jy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function XC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ZC=/^[cdef][\w-]{21}$/,fu="";function eP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=tP(t);return ZC.test(n)?n:fu}catch{return fu}}function tP(t){return XC(t).substr(0,22)}/**
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
 */function kc(t){return`${t.appName}!${t.appId}`}/**
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
 */const qy=new Map;function Hy(t,e){const n=kc(t);Ky(n,e),nP(n,e)}function Ky(t,e){const n=qy.get(t);if(n)for(const r of n)r(e)}function nP(t,e){const n=rP();n&&n.postMessage({key:t,fid:e}),sP()}let Lr=null;function rP(){return!Lr&&"BroadcastChannel"in self&&(Lr=new BroadcastChannel("[Firebase] FID Change"),Lr.onmessage=t=>{Ky(t.data.key,t.data.fid)}),Lr}function sP(){qy.size===0&&Lr&&(Lr.close(),Lr=null)}/**
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
 */const iP="firebase-installations-database",oP=1,Jr="firebase-installations-store";let Rl=null;function vh(){return Rl||(Rl=H_(iP,oP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}})),Rl}async function Ga(t,e){const n=kc(t),s=(await vh()).transaction(Jr,"readwrite"),i=s.objectStore(Jr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Hy(t,e.fid),e}async function Wy(t){const e=kc(t),r=(await vh()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function Oc(t,e){const n=kc(t),s=(await vh()).transaction(Jr,"readwrite"),i=s.objectStore(Jr),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&Hy(t,c.fid),c}/**
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
 */async function Eh(t){let e;const n=await Oc(t.appConfig,r=>{const s=aP(r),i=cP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===fu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function aP(t){const e=t||{fid:eP(),registrationStatus:0};return zy(e)}function cP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Yr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=lP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uP(t)}:{installationEntry:e}}async function lP(t,e){try{const n=await JC(t,e);return Ga(t.appConfig,n)}catch(n){throw Ly(n)&&n.customData.serverCode===409?await Wy(t.appConfig):await Ga(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function uP(t){let e=await bp(t.appConfig);for(;e.registrationStatus===1;)await jy(100),e=await bp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Eh(t);return r||n}return e}function bp(t){return Oc(t,e=>{if(!e)throw Yr.create("installation-not-found");return zy(e)})}function zy(t){return hP(t)?{fid:t.fid,registrationStatus:0}:t}function hP(t){return t.registrationStatus===1&&t.registrationTime+Dy<Date.now()}/**
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
 */async function dP({appConfig:t,heartbeatServiceProvider:e},n){const r=fP(t,n),s=GC(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Vy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await $y(()=>fetch(r,c));if(l.ok){const u=await l.json();return Fy(u)}else throw await Uy("Generate Auth Token",l)}function fP(t,{fid:e}){return`${xy(t)}/${e}/authTokens:generate`}/**
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
 */async function Th(t,e=!1){let n;const r=await Oc(t.appConfig,i=>{if(!Gy(i))throw Yr.create("not-registered");const o=i.authToken;if(!e&&mP(o))return i;if(o.requestStatus===1)return n=pP(t,e),i;{if(!navigator.onLine)throw Yr.create("app-offline");const c=yP(i);return n=gP(t,c),c}});return n?await n:r.authToken}async function pP(t,e){let n=await Rp(t.appConfig);for(;n.authToken.requestStatus===1;)await jy(100),n=await Rp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Th(t,e):r}function Rp(t){return Oc(t,e=>{if(!Gy(e))throw Yr.create("not-registered");const n=e.authToken;return vP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gP(t,e){try{const n=await dP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ga(t.appConfig,r),n}catch(n){if(Ly(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ga(t.appConfig,r)}throw n}}function Gy(t){return t!==void 0&&t.registrationStatus===2}function mP(t){return t.requestStatus===2&&!_P(t)}function _P(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HC}function yP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function vP(t){return t.requestStatus===1&&t.requestTime+Dy<Date.now()}/**
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
 */async function EP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Eh(e);return r?r.catch(console.error):Th(e).catch(console.error),n.fid}/**
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
 */async function TP(t,e=!1){const n=t;return await wP(n),(await Th(n,e)).token}async function wP(t){const{registrationPromise:e}=await Eh(t);e&&await e}/**
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
 */function IP(t){if(!t||!t.options)throw Sl("App Configuration");if(!t.name)throw Sl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sl(t){return Yr.create("missing-app-config-values",{valueName:t})}/**
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
 */const Qy="installations",AP="installations-internal",bP=t=>{const e=t.getProvider("app").getImmediate(),n=IP(e),r=os(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},RP=t=>{const e=t.getProvider("app").getImmediate(),n=os(e,Qy).getImmediate();return{getId:()=>EP(n),getToken:s=>TP(n,s)}};function SP(){En(new an(Qy,bP,"PUBLIC")),En(new an(AP,RP,"PRIVATE"))}SP();Qt(Ny,yh);Qt(Ny,yh,"esm2017");/**
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
 */const Qa="analytics",CP="firebase_id",PP="origin",kP=60*1e3,OP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ot=new bc("@firebase/analytics");/**
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
 */const NP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new is("analytics","Analytics",NP);/**
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
 */function DP(t){if(!t.startsWith(wh)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return Ot.warn(e.message),""}return t}function Yy(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function VP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MP(t,e){const n=VP("firebase-js-sdk-policy",{createScriptURL:DP}),r=document.createElement("script"),s=`${wh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function LP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function xP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await Yy(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Ot.error(c)}t("config",s,i)}async function FP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await Yy(n);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ot.error(i)}}function UP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await FP(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await xP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Ot.error(c)}}return s}function BP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=UP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function $P(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wh)&&n.src.includes(t))return n;return null}/**
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
 */const jP=30,qP=1e3;class HP{constructor(e={},n=qP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jy=new HP;function KP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function WP(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:KP(r)},i=OP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function zP(t,e=Jy,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw $t.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new YP;return setTimeout(async()=>{c.abort()},kP),Xy({appId:r,apiKey:s,measurementId:i},o,c,e)}async function Xy(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Jy){var i;const{appId:o,measurementId:c}=t;try{await GP(r,e)}catch(l){if(c)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await WP(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!QP(u)){if(s.deleteThrottleMetadata(o),c)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Jf(n,s.intervalMillis,jP):Jf(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),Ot.debug(`Calling attemptFetch again in ${d} millis`),Xy(t,p,r,s)}}function GP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function QP(t){if(!(t instanceof ln)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class YP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function JP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function XP(){if(B_())try{await $_()}catch(t){return Ot.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ot.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ZP(t,e,n,r,s,i,o){var c;const l=zP(t);l.then(I=>{n[I.measurementId]=I.appId,t.options.measurementId&&I.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Ot.error(I)),e.push(l);const u=XP().then(I=>{if(I)return r.getId()}),[d,p]=await Promise.all([l,u]);$P(i)||MP(i,d.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[PP]="firebase",g.update=!0,p!=null&&(g[CP]=p),s("config",d.measurementId,g),d.measurementId}/**
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
 */class e1{constructor(e){this.app=e}_delete(){return delete Bi[this.app.options.appId],Promise.resolve()}}let Bi={},Sp=[];const Cp={};let Cl="dataLayer",t1="gtag",Pp,Zy,kp=!1;function n1(){const t=[];if(U_()&&t.push("This is a browser extension environment."),kb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function r1(t,e,n){n1();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(Bi[r]!=null)throw $t.create("already-exists",{id:r});if(!kp){LP(Cl);const{wrappedGtag:i,gtagCore:o}=BP(Bi,Sp,Cp,Cl,t1);Zy=i,Pp=o,kp=!0}return Bi[r]=ZP(t,Sp,Cp,e,Pp,Cl,n),new e1(t)}function s1(t=ih()){t=ft(t);const e=os(t,Qa);return e.isInitialized()?e.getImmediate():i1(t)}function i1(t,e={}){const n=os(t,Qa);if(n.isInitialized()){const s=n.getImmediate();if(to(e,n.getOptions()))return s;throw $t.create("already-initialized")}return n.initialize({options:e})}function o1(t,e,n,r){t=ft(t),JP(Zy,Bi[t.app.options.appId],e,n,r).catch(s=>Ot.error(s))}const Op="@firebase/analytics",Np="0.10.4";function a1(){En(new an(Qa,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return r1(r,s,n)},"PUBLIC")),En(new an("analytics-internal",t,"PRIVATE")),Qt(Op,Np),Qt(Op,Np,"esm2017");function t(e){try{const n=e.getProvider(Qa).getImmediate();return{logEvent:(r,s,i)=>o1(n,r,s,i)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}a1();var Dp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qr,ev;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function m(){}m.prototype=v.prototype,b.D=v.prototype,b.prototype=new m,b.prototype.constructor=b,b.C=function(_,E,T){for(var w=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)w[pe-2]=arguments[pe];return v.prototype[E].apply(_,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,m){m||(m=0);var _=Array(16);if(typeof v=="string")for(var E=0;16>E;++E)_[E]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(E=0;16>E;++E)_[E]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=b.g[0],m=b.g[1],E=b.g[2];var T=b.g[3],w=v+(T^m&(E^T))+_[0]+3614090360&4294967295;v=m+(w<<7&4294967295|w>>>25),w=T+(E^v&(m^E))+_[1]+3905402710&4294967295,T=v+(w<<12&4294967295|w>>>20),w=E+(m^T&(v^m))+_[2]+606105819&4294967295,E=T+(w<<17&4294967295|w>>>15),w=m+(v^E&(T^v))+_[3]+3250441966&4294967295,m=E+(w<<22&4294967295|w>>>10),w=v+(T^m&(E^T))+_[4]+4118548399&4294967295,v=m+(w<<7&4294967295|w>>>25),w=T+(E^v&(m^E))+_[5]+1200080426&4294967295,T=v+(w<<12&4294967295|w>>>20),w=E+(m^T&(v^m))+_[6]+2821735955&4294967295,E=T+(w<<17&4294967295|w>>>15),w=m+(v^E&(T^v))+_[7]+4249261313&4294967295,m=E+(w<<22&4294967295|w>>>10),w=v+(T^m&(E^T))+_[8]+1770035416&4294967295,v=m+(w<<7&4294967295|w>>>25),w=T+(E^v&(m^E))+_[9]+2336552879&4294967295,T=v+(w<<12&4294967295|w>>>20),w=E+(m^T&(v^m))+_[10]+4294925233&4294967295,E=T+(w<<17&4294967295|w>>>15),w=m+(v^E&(T^v))+_[11]+2304563134&4294967295,m=E+(w<<22&4294967295|w>>>10),w=v+(T^m&(E^T))+_[12]+1804603682&4294967295,v=m+(w<<7&4294967295|w>>>25),w=T+(E^v&(m^E))+_[13]+4254626195&4294967295,T=v+(w<<12&4294967295|w>>>20),w=E+(m^T&(v^m))+_[14]+2792965006&4294967295,E=T+(w<<17&4294967295|w>>>15),w=m+(v^E&(T^v))+_[15]+1236535329&4294967295,m=E+(w<<22&4294967295|w>>>10),w=v+(E^T&(m^E))+_[1]+4129170786&4294967295,v=m+(w<<5&4294967295|w>>>27),w=T+(m^E&(v^m))+_[6]+3225465664&4294967295,T=v+(w<<9&4294967295|w>>>23),w=E+(v^m&(T^v))+_[11]+643717713&4294967295,E=T+(w<<14&4294967295|w>>>18),w=m+(T^v&(E^T))+_[0]+3921069994&4294967295,m=E+(w<<20&4294967295|w>>>12),w=v+(E^T&(m^E))+_[5]+3593408605&4294967295,v=m+(w<<5&4294967295|w>>>27),w=T+(m^E&(v^m))+_[10]+38016083&4294967295,T=v+(w<<9&4294967295|w>>>23),w=E+(v^m&(T^v))+_[15]+3634488961&4294967295,E=T+(w<<14&4294967295|w>>>18),w=m+(T^v&(E^T))+_[4]+3889429448&4294967295,m=E+(w<<20&4294967295|w>>>12),w=v+(E^T&(m^E))+_[9]+568446438&4294967295,v=m+(w<<5&4294967295|w>>>27),w=T+(m^E&(v^m))+_[14]+3275163606&4294967295,T=v+(w<<9&4294967295|w>>>23),w=E+(v^m&(T^v))+_[3]+4107603335&4294967295,E=T+(w<<14&4294967295|w>>>18),w=m+(T^v&(E^T))+_[8]+1163531501&4294967295,m=E+(w<<20&4294967295|w>>>12),w=v+(E^T&(m^E))+_[13]+2850285829&4294967295,v=m+(w<<5&4294967295|w>>>27),w=T+(m^E&(v^m))+_[2]+4243563512&4294967295,T=v+(w<<9&4294967295|w>>>23),w=E+(v^m&(T^v))+_[7]+1735328473&4294967295,E=T+(w<<14&4294967295|w>>>18),w=m+(T^v&(E^T))+_[12]+2368359562&4294967295,m=E+(w<<20&4294967295|w>>>12),w=v+(m^E^T)+_[5]+4294588738&4294967295,v=m+(w<<4&4294967295|w>>>28),w=T+(v^m^E)+_[8]+2272392833&4294967295,T=v+(w<<11&4294967295|w>>>21),w=E+(T^v^m)+_[11]+1839030562&4294967295,E=T+(w<<16&4294967295|w>>>16),w=m+(E^T^v)+_[14]+4259657740&4294967295,m=E+(w<<23&4294967295|w>>>9),w=v+(m^E^T)+_[1]+2763975236&4294967295,v=m+(w<<4&4294967295|w>>>28),w=T+(v^m^E)+_[4]+1272893353&4294967295,T=v+(w<<11&4294967295|w>>>21),w=E+(T^v^m)+_[7]+4139469664&4294967295,E=T+(w<<16&4294967295|w>>>16),w=m+(E^T^v)+_[10]+3200236656&4294967295,m=E+(w<<23&4294967295|w>>>9),w=v+(m^E^T)+_[13]+681279174&4294967295,v=m+(w<<4&4294967295|w>>>28),w=T+(v^m^E)+_[0]+3936430074&4294967295,T=v+(w<<11&4294967295|w>>>21),w=E+(T^v^m)+_[3]+3572445317&4294967295,E=T+(w<<16&4294967295|w>>>16),w=m+(E^T^v)+_[6]+76029189&4294967295,m=E+(w<<23&4294967295|w>>>9),w=v+(m^E^T)+_[9]+3654602809&4294967295,v=m+(w<<4&4294967295|w>>>28),w=T+(v^m^E)+_[12]+3873151461&4294967295,T=v+(w<<11&4294967295|w>>>21),w=E+(T^v^m)+_[15]+530742520&4294967295,E=T+(w<<16&4294967295|w>>>16),w=m+(E^T^v)+_[2]+3299628645&4294967295,m=E+(w<<23&4294967295|w>>>9),w=v+(E^(m|~T))+_[0]+4096336452&4294967295,v=m+(w<<6&4294967295|w>>>26),w=T+(m^(v|~E))+_[7]+1126891415&4294967295,T=v+(w<<10&4294967295|w>>>22),w=E+(v^(T|~m))+_[14]+2878612391&4294967295,E=T+(w<<15&4294967295|w>>>17),w=m+(T^(E|~v))+_[5]+4237533241&4294967295,m=E+(w<<21&4294967295|w>>>11),w=v+(E^(m|~T))+_[12]+1700485571&4294967295,v=m+(w<<6&4294967295|w>>>26),w=T+(m^(v|~E))+_[3]+2399980690&4294967295,T=v+(w<<10&4294967295|w>>>22),w=E+(v^(T|~m))+_[10]+4293915773&4294967295,E=T+(w<<15&4294967295|w>>>17),w=m+(T^(E|~v))+_[1]+2240044497&4294967295,m=E+(w<<21&4294967295|w>>>11),w=v+(E^(m|~T))+_[8]+1873313359&4294967295,v=m+(w<<6&4294967295|w>>>26),w=T+(m^(v|~E))+_[15]+4264355552&4294967295,T=v+(w<<10&4294967295|w>>>22),w=E+(v^(T|~m))+_[6]+2734768916&4294967295,E=T+(w<<15&4294967295|w>>>17),w=m+(T^(E|~v))+_[13]+1309151649&4294967295,m=E+(w<<21&4294967295|w>>>11),w=v+(E^(m|~T))+_[4]+4149444226&4294967295,v=m+(w<<6&4294967295|w>>>26),w=T+(m^(v|~E))+_[11]+3174756917&4294967295,T=v+(w<<10&4294967295|w>>>22),w=E+(v^(T|~m))+_[2]+718787259&4294967295,E=T+(w<<15&4294967295|w>>>17),w=m+(T^(E|~v))+_[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(E+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var m=v-this.blockSize,_=this.B,E=this.h,T=0;T<v;){if(E==0)for(;T<=m;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<v;)if(_[E++]=b.charCodeAt(T++),E==this.blockSize){s(this,_),E=0;break}}else for(;T<v;)if(_[E++]=b[T++],E==this.blockSize){s(this,_),E=0;break}}this.h=E,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var m=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=m&255,m/=256;for(this.u(b),b=Array(16),v=m=0;4>v;++v)for(var _=0;32>_;_+=8)b[m++]=this.g[v]>>>_&255;return b};function i(b,v){var m=c;return Object.prototype.hasOwnProperty.call(m,b)?m[b]:m[b]=v(b)}function o(b,v){this.h=v;for(var m=[],_=!0,E=b.length-1;0<=E;E--){var T=b[E]|0;_&&T==v||(m[E]=T,_=!1)}this.g=m}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return V(u(-b));for(var v=[],m=1,_=0;b>=m;_++)v[_]=b/m|0,m*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return V(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=u(Math.pow(v,8)),_=p,E=0;E<b.length;E+=8){var T=Math.min(8,b.length-E),w=parseInt(b.substring(E,E+T),v);8>T?(T=u(Math.pow(v,T)),_=_.j(T).add(u(w))):(_=_.j(m),_=_.add(u(w)))}return _}var p=l(0),g=l(1),I=l(16777216);t=o.prototype,t.m=function(){if(M(this))return-V(this).m();for(var b=0,v=1,m=0;m<this.g.length;m++){var _=this.i(m);b+=(0<=_?_:4294967296+_)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(M(this))return"-"+V(this).toString(b);for(var v=u(Math.pow(b,6)),m=this,_="";;){var E=k(m,v).g;m=B(m,E.j(v));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(b);if(m=E,C(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function M(b){return b.h==-1}t.l=function(b){return b=B(this,b),M(b)?-1:C(b)?0:1};function V(b){for(var v=b.g.length,m=[],_=0;_<v;_++)m[_]=~b.g[_];return new o(m,~b.h).add(g)}t.abs=function(){return M(this)?V(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],_=0,E=0;E<=v;E++){var T=_+(this.i(E)&65535)+(b.i(E)&65535),w=(T>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);_=w>>>16,T&=65535,w&=65535,m[E]=w<<16|T}return new o(m,m[m.length-1]&-2147483648?-1:0)};function B(b,v){return b.add(V(v))}t.j=function(b){if(C(this)||C(b))return p;if(M(this))return M(b)?V(this).j(V(b)):V(V(this).j(b));if(M(b))return V(this.j(V(b)));if(0>this.l(I)&&0>b.l(I))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,m=[],_=0;_<2*v;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<b.g.length;E++){var T=this.i(_)>>>16,w=this.i(_)&65535,pe=b.i(E)>>>16,ye=b.i(E)&65535;m[2*_+2*E]+=w*ye,O(m,2*_+2*E),m[2*_+2*E+1]+=T*ye,O(m,2*_+2*E+1),m[2*_+2*E+1]+=w*pe,O(m,2*_+2*E+1),m[2*_+2*E+2]+=T*pe,O(m,2*_+2*E+2)}for(_=0;_<v;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=v;_<2*v;_++)m[_]=0;return new o(m,0)};function O(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function S(b,v){this.g=b,this.h=v}function k(b,v){if(C(v))throw Error("division by zero");if(C(b))return new S(p,p);if(M(b))return v=k(V(b),v),new S(V(v.g),V(v.h));if(M(v))return v=k(b,V(v)),new S(V(v.g),v.h);if(30<b.g.length){if(M(b)||M(v))throw Error("slowDivide_ only works with positive integers.");for(var m=g,_=v;0>=_.l(b);)m=x(m),_=x(_);var E=N(m,1),T=N(_,1);for(_=N(_,2),m=N(m,2);!C(_);){var w=T.add(_);0>=w.l(b)&&(E=E.add(m),T=w),_=N(_,1),m=N(m,1)}return v=B(b,E.j(v)),new S(E,v)}for(E=p;0<=b.l(v);){for(m=Math.max(1,Math.floor(b.m()/v.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=u(m),w=T.j(v);M(w)||0<w.l(b);)m-=_,T=u(m),w=T.j(v);C(T)&&(T=g),E=E.add(T),b=B(b,w)}return new S(E,b)}t.A=function(b){return k(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],_=0;_<v;_++)m[_]=this.i(_)&b.i(_);return new o(m,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],_=0;_<v;_++)m[_]=this.i(_)|b.i(_);return new o(m,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],_=0;_<v;_++)m[_]=this.i(_)^b.i(_);return new o(m,this.h^b.h)};function x(b){for(var v=b.g.length+1,m=[],_=0;_<v;_++)m[_]=b.i(_)<<1|b.i(_-1)>>>31;return new o(m,b.h)}function N(b,v){var m=v>>5;v%=32;for(var _=b.g.length-m,E=[],T=0;T<_;T++)E[T]=0<v?b.i(T+m)>>>v|b.i(T+m+1)<<32-v:b.i(T+m);return new o(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ev=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,qr=o}).apply(typeof Dp<"u"?Dp:typeof self<"u"?self:typeof window<"u"?window:{});var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tv,nv,Pi,rv,Ia,pu,sv,iv,ov;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ua=="object"&&ua];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in f))break e;f=f[P]}a=a[a.length-1],y=f[a],h=h(y),h!=y&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,y=!1,P={next:function(){if(!y&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function I(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function C(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,P,L){for(var Q=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)Q[Ve-2]=arguments[Ve];return h.prototype[P].apply(y,Q)}}function M(a){const h=a.length;if(0<h){const f=Array(h);for(let y=0;y<h;y++)f[y]=a[y];return f}return[]}function V(a,h){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(l(y)){const P=a.length||0,L=y.length||0;a.length=P+L;for(let Q=0;Q<L;Q++)a[P+Q]=y[Q]}else a.push(y)}}class B{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function k(a){return k[" "](a),a}k[" "]=function(){};var x=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function N(a,h,f){for(const y in a)h.call(f,a[y],y,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(a,h){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)a[f]=y[f];for(let L=0;L<m.length;L++)f=m[L],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function E(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function T(a){c.setTimeout(()=>{throw a},0)}function w(){var a=wt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class pe{constructor(){this.h=this.g=null}add(h,f){const y=ye.get();y.set(h,f),this.h?this.h.next=y:this.g=y,this.h=y}}var ye=new B(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let he,ne=!1,wt=new pe,Xt=()=>{const a=c.Promise.resolve(void 0);he=()=>{a.then(jt)}};var jt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){T(f)}var h=ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ne=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Kn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function un(a,h){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(x){e:{try{k(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}C(un,je);var rt={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),Z=0;function J(a,h,f,y,P){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!y,this.ha=P,this.key=++Z,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,h,f,y,P){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var Q=A(a,h,y,P);return-1<Q?(h=a[Q],f||(h.fa=!1)):(h=new J(h,this.src,L,!!y,P),h.fa=f,a.push(h)),h};function Ne(a,h){var f=h.type;if(f in a.g){var y=a.g[f],P=Array.prototype.indexOf.call(y,h,void 0),L;(L=0<=P)&&Array.prototype.splice.call(y,P,1),L&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function A(a,h,f,y){for(var P=0;P<a.length;++P){var L=a[P];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==y)return P}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function $(a,h,f,y,P){if(Array.isArray(h)){for(var L=0;L<h.length;L++)$(a,h[L],f,y,P);return null}return f=ae(f),a&&a[U]?a.K(h,f,u(y)?!!y.capture:!!y,P):F(a,h,f,!1,y,P)}function F(a,h,f,y,P,L){if(!h)throw Error("Invalid event type");var Q=u(P)?!!P.capture:!!P,Ve=X(a);if(Ve||(a[R]=Ve=new Ee(a)),f=Ve.add(h,f,y,Q,L),f.proxy)return f;if(y=z(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)Kn||(P=Q),P===void 0&&(P=!1),a.addEventListener(h.toString(),y,P);else if(a.attachEvent)a.attachEvent(G(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function z(){function a(f){return h.call(a.src,a.listener,f)}const h=q;return a}function Y(a,h,f,y,P){if(Array.isArray(h))for(var L=0;L<h.length;L++)Y(a,h[L],f,y,P);else y=u(y)?!!y.capture:!!y,f=ae(f),a&&a[U]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=A(L,f,y,P),-1<f&&(re(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=X(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,f,y,P)),(f=-1<a?h[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[U])Ne(h.i,a);else{var f=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(f,y,a.capture):h.detachEvent?h.detachEvent(G(f),y):h.addListener&&h.removeListener&&h.removeListener(y),(f=X(h))?(Ne(f,a),f.h==0&&(f.src=null,h[R]=null)):re(a)}}}function G(a){return a in D?D[a]:D[a]="on"+a}function q(a,h){if(a.da)a=!0;else{h=new un(h,this);var f=a.listener,y=a.ha||a.src;a.fa&&W(a),a=f.call(y,h)}return a}function X(a){return a=a[R],a instanceof Ee?a:null}var ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ce]||(a[ce]=function(h){return a.handleEvent(h)}),a[ce])}function oe(){$e.call(this),this.i=new Ee(this),this.M=this,this.F=null}C(oe,$e),oe.prototype[U]=!0,oe.prototype.removeEventListener=function(a,h,f,y){Y(this,a,h,f,y)};function ue(a,h){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new je(h,a);else if(h instanceof je)h.target=h.target||a;else{var P=h;h=new je(y,a),_(h,P)}if(P=!0,f)for(var L=f.length-1;0<=L;L--){var Q=h.g=f[L];P=Pe(Q,y,!0,h)&&P}if(Q=h.g=a,P=Pe(Q,y,!0,h)&&P,P=Pe(Q,y,!1,h)&&P,f)for(L=0;L<f.length;L++)Q=h.g=f[L],P=Pe(Q,y,!1,h)&&P}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],y=0;y<f.length;y++)re(f[y]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,f,y){return this.i.add(String(a),h,!1,f,y)},oe.prototype.L=function(a,h,f,y){return this.i.add(String(a),h,!0,f,y)};function Pe(a,h,f,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,L=0;L<h.length;++L){var Q=h[L];if(Q&&!Q.da&&Q.capture==f){var Ve=Q.listener,ct=Q.ha||Q.src;Q.fa&&Ne(a.i,Q),P=Ve.call(ct,y)!==!1&&P}}return P&&!y.defaultPrevented}function Ae(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function We(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,We(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Dt extends $e{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:We(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qt(a){$e.call(this),this.h=a,this.g={}}C(qt,$e);var oi=[];function Wn(a){N(a.g,function(h,f){this.g.hasOwnProperty(f)&&W(h)},a),a.g={}}qt.prototype.N=function(){qt.aa.N.call(this),Wn(this)},qt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var us=c.JSON.stringify,It=c.JSON.parse,Ht=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function hs(){}hs.prototype.h=null;function Xh(a){return a.h||(a.h=a.i())}function Zh(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zc(){je.call(this,"d")}C(zc,je);function Gc(){je.call(this,"c")}C(Gc,je);var Sr={},ed=null;function Lo(){return ed=ed||new oe}Sr.La="serverreachability";function td(a){je.call(this,Sr.La,a)}C(td,je);function ci(a){const h=Lo();ue(h,new td(h))}Sr.STAT_EVENT="statevent";function nd(a,h){je.call(this,Sr.STAT_EVENT,a),this.stat=h}C(nd,je);function At(a){const h=Lo();ue(h,new nd(h,a))}Sr.Ma="timingevent";function rd(a,h){je.call(this,Sr.Ma,a),this.size=h}C(rd,je);function li(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function ui(){this.g=!0}ui.prototype.xa=function(){this.g=!1};function AE(a,h,f,y,P,L){a.info(function(){if(a.g)if(L)for(var Q="",Ve=L.split("&"),ct=0;ct<Ve.length;ct++){var Re=Ve[ct].split("=");if(1<Re.length){var pt=Re[0];Re=Re[1];var gt=pt.split("_");Q=2<=gt.length&&gt[1]=="type"?Q+(pt+"="+Re+"&"):Q+(pt+"=redacted&")}}else Q=null;else Q=L;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+f+`
`+Q})}function bE(a,h,f,y,P,L,Q){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+f+`
`+L+" "+Q})}function ds(a,h,f,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+SE(a,f)+(y?" "+y:"")})}function RE(a,h){a.info(function(){return"TIMEOUT: "+h})}ui.prototype.info=function(){};function SE(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var L=P[0];if(L!="noop"&&L!="stop"&&L!="close")for(var Q=1;Q<P.length;Q++)P[Q]=""}}}}return us(f)}catch{return h}}var xo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qc;function Fo(){}C(Fo,hs),Fo.prototype.g=function(){return new XMLHttpRequest},Fo.prototype.i=function(){return{}},Qc=new Fo;function zn(a,h,f,y){this.j=a,this.i=h,this.l=f,this.R=y||1,this.U=new qt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new id}function id(){this.i=null,this.g="",this.h=!1}var od={},Yc={};function Jc(a,h,f){a.L=1,a.v=jo(wn(h)),a.m=f,a.P=!0,ad(a,null)}function ad(a,h){a.F=Date.now(),Uo(a),a.A=wn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Td(f.i,"t",y),a.C=0,f=a.j.J,a.h=new id,a.g=Ud(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Dt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(oi[0]=P.toString()),P=oi);for(var L=0;L<P.length;L++){var Q=$(f,P[L],y||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ci(),AE(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&In(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const gt=In(this.g);var h=this.g.Ba();const gs=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Cd(this.g)))){this.J||gt!=4||h==7||(h==8||0>=gs?ci(3):ci(2)),Xc(this);var f=this.g.Z();this.X=f;t:if(cd(this)){var y=Cd(this.g);a="";var P=y.length,L=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),hi(this);var Q="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(L&&h==P-1)});y.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,bE(this.i,this.u,this.A,this.l,this.R,gt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ct=this.g;if((Ve=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ve)){var Re=Ve;break t}}Re=null}if(f=Re)ds(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zc(this,f);else{this.o=!1,this.s=3,At(12),Cr(this),hi(this);break e}}if(this.P){f=!0;let Zt;for(;!this.J&&this.C<Q.length;)if(Zt=CE(this,Q),Zt==Yc){gt==4&&(this.s=4,At(14),f=!1),ds(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==od){this.s=4,At(15),ds(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else ds(this.i,this.l,Zt,null),Zc(this,Zt);if(cd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||Q.length!=0||this.h.h||(this.s=1,At(16),f=!1),this.o=this.o&&f,!f)ds(this.i,this.l,Q,"[Invalid Chunked Response]"),Cr(this),hi(this);else if(0<Q.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),il(pt),pt.M=!0,At(11))}}else ds(this.i,this.l,Q,null),Zc(this,Q);gt==4&&Cr(this),this.o&&!this.J&&(gt==4?Md(this.j,this):(this.o=!1,Uo(this)))}else KE(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Cr(this),hi(this)}}}catch{}finally{}};function cd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function CE(a,h){var f=a.C,y=h.indexOf(`
`,f);return y==-1?Yc:(f=Number(h.substring(f,y)),isNaN(f)?od:(y+=1,y+f>h.length?Yc:(h=h.slice(y,y+f),a.C=y+f,h)))}zn.prototype.cancel=function(){this.J=!0,Cr(this)};function Uo(a){a.S=Date.now()+a.I,ld(a,a.I)}function ld(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=li(g(a.ba,a),h)}function Xc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(RE(this.i,this.A),this.L!=2&&(ci(),At(17)),Cr(this),this.s=2,hi(this)):ld(this,this.S-a)};function hi(a){a.j.G==0||a.J||Md(a.j,a)}function Cr(a){Xc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Wn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Zc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||el(f.h,a))){if(!a.K&&el(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)zo(f),Ko(f);else break e;sl(f),At(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=li(g(f.Za,f),6e3));if(1>=dd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else kr(f,11)}else if((a.K||f.g==a)&&zo(f),!O(h))for(P=f.Da.g.parse(h),h=0;h<P.length;h++){let Re=P[h];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const pt=Re[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const gt=Re[4];gt!=null&&(f.Aa=gt,f.j.info("SVER="+f.Aa));const gs=Re[5];gs!=null&&typeof gs=="number"&&0<gs&&(y=1.5*gs,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Zt=a.g;if(Zt){const Qo=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qo){var L=y.h;L.g||Qo.indexOf("spdy")==-1&&Qo.indexOf("quic")==-1&&Qo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(tl(L,L.h),L.h=null))}if(y.D){const ol=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;ol&&(y.ya=ol,Le(y.I,y.D,ol))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var Q=a;if(y.qa=Fd(y,y.J?y.ia:null,y.W),Q.K){fd(y.h,Q);var Ve=Q,ct=y.L;ct&&(Ve.I=ct),Ve.B&&(Xc(Ve),Uo(Ve)),y.g=Q}else Dd(y);0<f.i.length&&Wo(f)}else Re[0]!="stop"&&Re[0]!="close"||kr(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?kr(f,7):rl(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}ci(4)}catch{}}var PE=class{constructor(a,h){this.g=a,this.map=h}};function ud(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dd(a){return a.h?1:a.g?a.g.size:0}function el(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function tl(a,h){a.g?a.g.add(h):a.h=h}function fd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ud.prototype.cancel=function(){if(this.i=pd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return M(a.i)}function kE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,y=0;y<f;y++)h.push(a[y]);return h}h=[],f=0;for(y in a)h[f++]=a[y];return h}function OE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const y in a)h[f++]=y;return h}}}function gd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=OE(a),y=kE(a),P=y.length,L=0;L<P;L++)h.call(void 0,y[L],f&&f[L],a)}var md=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function NE(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),P=null;if(0<=y){var L=a[f].substring(0,y);P=a[f].substring(y+1)}else L=a[f];h(L,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Pr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Pr){this.h=a.h,Bo(this,a.j),this.o=a.o,this.g=a.g,$o(this,a.s),this.l=a.l;var h=a.i,f=new pi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),_d(this,f),this.m=a.m}else a&&(h=String(a).match(md))?(this.h=!1,Bo(this,h[1]||"",!0),this.o=di(h[2]||""),this.g=di(h[3]||"",!0),$o(this,h[4]),this.l=di(h[5]||"",!0),_d(this,h[6]||"",!0),this.m=di(h[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}Pr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(fi(h,yd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fi(h,yd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(fi(f,f.charAt(0)=="/"?ME:VE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",fi(f,xE)),a.join("")};function wn(a){return new Pr(a)}function Bo(a,h,f){a.j=f?di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function $o(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function _d(a,h,f){h instanceof pi?(a.i=h,FE(a.i,a.h)):(f||(h=fi(h,LE)),a.i=new pi(h,a.h))}function Le(a,h,f){a.i.set(h,f)}function jo(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,DE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function DE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yd=/[#\/\?@]/g,VE=/[#\?:]/g,ME=/[#\?]/g,LE=/[#\?@]/g,xE=/#/g;function pi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&NE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=pi.prototype,t.add=function(a,h){Gn(this),this.i=null,a=fs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function vd(a,h){Gn(a),h=fs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Ed(a,h){return Gn(a),h=fs(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(f,y){f.forEach(function(P){a.call(h,P,y,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let y=0;y<h.length;y++){const P=a[y];for(let L=0;L<P.length;L++)f.push(h[y])}return f},t.V=function(a){Gn(this);let h=[];if(typeof a=="string")Ed(this,a)&&(h=h.concat(this.g.get(fs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Gn(this),this.i=null,a=fs(this,a),Ed(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Td(a,h,f){vd(a,h),0<f.length&&(a.i=null,a.g.set(fs(a,h),M(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var y=h[f];const L=encodeURIComponent(String(y)),Q=this.V(y);for(y=0;y<Q.length;y++){var P=L;Q[y]!==""&&(P+="="+encodeURIComponent(String(Q[y]))),a.push(P)}}return this.i=a.join("&")};function fs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function FE(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(f,y){var P=y.toLowerCase();y!=P&&(vd(this,y),Td(this,P,f))},a)),a.j=h}function UE(a,h){const f=new ui;if(c.Image){const y=new Image;y.onload=I(Qn,f,"TestLoadImage: loaded",!0,h,y),y.onerror=I(Qn,f,"TestLoadImage: error",!1,h,y),y.onabort=I(Qn,f,"TestLoadImage: abort",!1,h,y),y.ontimeout=I(Qn,f,"TestLoadImage: timeout",!1,h,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function BE(a,h){const f=new ui,y=new AbortController,P=setTimeout(()=>{y.abort(),Qn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(L=>{clearTimeout(P),L.ok?Qn(f,"TestPingServer: ok",!0,h):Qn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Qn(f,"TestPingServer: error",!1,h)})}function Qn(a,h,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function $E(){this.g=new Ht}function jE(a,h,f){const y=f||"";try{gd(a,function(P,L){let Q=P;u(P)&&(Q=us(P)),h.push(y+L+"="+encodeURIComponent(Q))})}catch(P){throw h.push(y+"type="+encodeURIComponent("_badmap")),P}}function gi(a){this.l=a.Ub||null,this.j=a.eb||!1}C(gi,hs),gi.prototype.g=function(){return new qo(this.l,this.j)},gi.prototype.i=function(a){return function(){return a}}({});function qo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(qo,oe),t=qo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_i(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_i(this)),this.g&&(this.readyState=3,_i(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function wd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?mi(this):_i(this),this.readyState==3&&wd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,mi(this))},t.Qa=function(a){this.g&&(this.response=a,mi(this))},t.ga=function(){this.g&&mi(this)};function mi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_i(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function _i(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Id(a){let h="";return N(a,function(f,y){h+=y,h+=":",h+=f,h+=`\r
`}),h}function nl(a,h,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Id(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,h,f))}function He(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(He,oe);var qE=/^https?$/i,HE=["POST","PUT"];t=He.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qc.g(),this.v=this.o?Xh(this.o):Xh(Qc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Ad(this,L);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())f.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(HE,h,void 0))||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,Q]of f)this.g.setRequestHeader(L,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Sd(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Ad(this,L)}};function Ad(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,bd(a),Ho(a)}function bd(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),Ho(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ho(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Rd(this):this.bb())},t.bb=function(){Rd(this)};function Rd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)Ae(a.Ea,0,a);else if(ue(a,"readystatechange"),In(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var y;if(y=Q===0){var P=String(a.D).match(md)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),y=!qE.test(P?P.toLowerCase():"")}f=y}if(f)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var L=2<In(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",bd(a)}}finally{Ho(a)}}}}function Ho(a,h){if(a.g){Sd(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ue(a,"ready");try{f.onreadystatechange=y}catch{}}}function Sd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),It(h)}};function Cd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function KE(a){const h={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(O(a[y]))continue;var f=E(a[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[P]||[];h[P]=L,L.push(f)}b(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yi(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Pd(a){this.Aa=0,this.i=[],this.j=new ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yi("baseRetryDelayMs",5e3,a),this.cb=yi("retryDelaySeedMs",1e4,a),this.Wa=yi("forwardChannelMaxRetries",2,a),this.wa=yi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ud(a&&a.concurrentRequestLimit),this.Da=new $E,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,y){At(0),this.W=a,this.H=h||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=Fd(this,null,this.W),Wo(this)};function rl(a){if(kd(a),a.G==3){var h=a.U++,f=wn(a.I);if(Le(f,"SID",a.K),Le(f,"RID",h),Le(f,"TYPE","terminate"),vi(a,f),h=new zn(a,a.j,h),h.L=2,h.v=jo(wn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ud(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Uo(h)}xd(a)}function Ko(a){a.g&&(il(a),a.g.cancel(),a.g=null)}function kd(a){Ko(a),a.u&&(c.clearTimeout(a.u),a.u=null),zo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Wo(a){if(!hd(a.h)&&!a.s){a.s=!0;var h=a.Ga;he||Xt(),ne||(he(),ne=!0),wt.add(h,a),a.B=0}}function WE(a,h){return dd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=li(g(a.Ga,a,h),Ld(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new zn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),_(L,this.S)):L=this.S),this.m!==null||this.O||(P.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Nd(this,P,h),f=wn(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),vi(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(Id(L)))+"&"+h:this.m&&nl(f,this.m,L)),tl(this.h,P),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",h),Le(f,"SID","null"),P.T=!0,Jc(P,f,null)):Jc(P,f,h),this.G=2}}else this.G==3&&(a?Od(this,a):this.i.length==0||hd(this.h)||Od(this))};function Od(a,h){var f;h?f=h.l:f=a.U++;const y=wn(a.I);Le(y,"SID",a.K),Le(y,"RID",f),Le(y,"AID",a.T),vi(a,y),a.m&&a.o&&nl(y,a.m,a.o),f=new zn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Nd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),tl(a.h,f),Jc(f,y,h)}function vi(a,h){a.H&&N(a.H,function(f,y){Le(h,y,f)}),a.l&&gd({},function(f,y){Le(h,y,f)})}function Nd(a,h,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let L=-1;for(;;){const Q=["count="+f];L==-1?0<f?(L=P[0].g,Q.push("ofs="+L)):L=0:Q.push("ofs="+L);let Ve=!0;for(let ct=0;ct<f;ct++){let Re=P[ct].g;const pt=P[ct].map;if(Re-=L,0>Re)L=Math.max(0,P[ct].g-100),Ve=!1;else try{jE(pt,Q,"req"+Re+"_")}catch{y&&y(pt)}}if(Ve){y=Q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,y}function Dd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;he||Xt(),ne||(he(),ne=!0),wt.add(h,a),a.v=0}}function sl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=li(g(a.Fa,a),Ld(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=li(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Ko(this),Vd(this))};function il(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Vd(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=wn(a.qa);Le(h,"RID","rpc"),Le(h,"SID",a.K),Le(h,"AID",a.T),Le(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(h,"TO",a.ja),Le(h,"TYPE","xmlhttp"),vi(a,h),a.m&&a.o&&nl(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=jo(wn(h)),f.m=null,f.P=!0,ad(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),sl(this),At(19))};function zo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Md(a,h){var f=null;if(a.g==h){zo(a),il(a),a.g=null;var y=2}else if(el(a.h,h))f=h.D,fd(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;y=Lo(),ue(y,new rd(y,f)),Wo(a)}else Dd(a);else if(P=h.s,P==3||P==0&&0<h.X||!(y==1&&WE(a,h)||y==2&&sl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),P){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function Ld(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function kr(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),y=a.Xa;const P=!y;y=new Pr(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Bo(y,"https"),jo(y),P?UE(y.toString(),f):BE(y.toString(),f)}else At(2);a.G=0,a.l&&a.l.sa(h),xd(a),kd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function xd(a){if(a.G=0,a.ka=[],a.l){const h=pd(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.ra()}}function Fd(a,h,f){var y=f instanceof Pr?wn(f):new Pr(f);if(y.g!="")h&&(y.g=h+"."+y.g),$o(y,y.s);else{var P=c.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var L=new Pr(null);y&&Bo(L,y),h&&(L.g=h),P&&$o(L,P),f&&(L.l=f),y=L}return f=a.D,h=a.ya,f&&h&&Le(y,f,h),Le(y,"VER",a.la),vi(a,y),y}function Ud(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new He(new gi({eb:f})):new He(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bd(){}t=Bd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Go(){}Go.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){oe.call(this),this.g=new Pd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ps(this)}C(Vt,oe),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){rl(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=us(a),a=f);h.i.push(new PE(h.Ya++,a)),h.G==3&&Wo(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,rl(this.g),delete this.g,Vt.aa.N.call(this)};function $d(a){zc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C($d,zc);function jd(){Gc.call(this),this.status=1}C(jd,Gc);function ps(a){this.g=a}C(ps,Bd),ps.prototype.ua=function(){ue(this.g,"a")},ps.prototype.ta=function(a){ue(this.g,new $d(a))},ps.prototype.sa=function(a){ue(this.g,new jd)},ps.prototype.ra=function(){ue(this.g,"b")},Go.prototype.createWebChannel=Go.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,ov=function(){return new Go},iv=function(){return Lo()},sv=Sr,pu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},xo.NO_ERROR=0,xo.TIMEOUT=8,xo.HTTP_ERROR=6,Ia=xo,sd.COMPLETE="complete",rv=sd,Zh.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Pi=Zh,nv=gi,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,tv=He}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});const Vp="@firebase/firestore";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let ti="10.12.1";/**
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
 */const Xr=new bc("@firebase/firestore");function Ii(){return Xr.logLevel}function se(t,...e){if(Xr.logLevel<=Te.DEBUG){const n=e.map(Ih);Xr.debug(`Firestore (${ti}): ${t}`,...n)}}function Fn(t,...e){if(Xr.logLevel<=Te.ERROR){const n=e.map(Ih);Xr.error(`Firestore (${ti}): ${t}`,...n)}}function Hs(t,...e){if(Xr.logLevel<=Te.WARN){const n=e.map(Ih);Xr.warn(`Firestore (${ti}): ${t}`,...n)}}function Ih(t){if(typeof t=="string")return t;try{/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${ti}) INTERNAL ASSERTION FAILED: `+t;throw Fn(e),new Error(e)}function Me(t,e){t||ge()}function _e(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class av{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class c1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class l1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u1{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new av(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new _t(e)}}class h1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class d1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new h1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class p1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new f1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function g1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class cv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=g1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function Ks(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new tt(0,0))}static max(){return new me(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class io{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return io.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof io?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends io{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const m1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends io{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return m1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ie(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ie(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ie(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Fe.fromString(e))}static fromName(e){return new le(Fe.fromString(e).popFirst(5))}static empty(){return new le(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Fe(e.slice()))}}function _1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new wr(s,le.empty(),e)}function y1(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(me.min(),le.empty(),-1)}static max(){return new wr(me.max(),le.empty(),-1)}}function v1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
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
 */const E1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Po(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==E1)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function w1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ko(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ah{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ah.oe=-1;function Nc(t){return t==null}function Ya(t){return t===0&&1/t==-1/0}function I1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ya(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Mp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ha(this.root,e,this.comparator,!0)}}class ha{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lp(this.data.getIterator())}getIteratorFrom(e){return new Lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class Lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class nn{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new nn([])}unionWith(e){let n=new ht(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ks(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class uv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uv("Invalid base64 string: "+i):i}}(e);return new Tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const A1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(Me(!!t),typeof t=="string"){let e=0;const n=A1.exec(t);if(Me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ye(t.seconds),nanos:Ye(t.nanos)}}function Ye(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?Tt.fromBase64String(t):Tt.fromUint8Array(t)}/**
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
 */function bh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rh(t){const e=t.mapValue.fields.__previous_value__;return bh(e)?Rh(e):e}function oo(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class b1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class ao{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const da={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bh(t)?4:R1(t)?9007199254740991:10:ge()}function Tn(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),c=Ir(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zr(s.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ye(s.geoPointValue.latitude)===Ye(i.geoPointValue.latitude)&&Ye(s.geoPointValue.longitude)===Ye(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ye(s.integerValue)===Ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ye(s.doubleValue),c=Ye(i.doubleValue);return o===c?Ya(o)===Ya(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Ks(t.arrayValue.values||[],e.arrayValue.values||[],Tn);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Mp(o)!==Mp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Tn(o[l],c[l])))return!1;return!0}(t,e);default:return ge()}}function co(t,e){return(t.values||[]).find(n=>Tn(n,e))!==void 0}function Ws(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ye(i.integerValue||i.doubleValue),l=Ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return xp(t.timestampValue,e.timestampValue);case 4:return xp(oo(t),oo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Zr(i),l=Zr(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Se(c[u],l[u]);if(d!==0)return d}return Se(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Se(Ye(i.latitude),Ye(o.latitude));return c!==0?c:Se(Ye(i.longitude),Ye(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const d=Ws(c[u],l[u]);if(d)return d}return Se(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===da.mapValue&&o===da.mapValue)return 0;if(i===da.mapValue)return 1;if(o===da.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Se(l[p],d[p]);if(g!==0)return g;const I=Ws(c[l[p]],u[d[p]]);if(I!==0)return I}return Se(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Ir(t),r=Ir(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function zs(t){return gu(t)}function gu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=gu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${gu(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function Fp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mu(t){return!!t&&"integerValue"in t}function Sh(t){return!!t&&"arrayValue"in t}function Up(t){return!!t&&"nullValue"in t}function Bp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Aa(t){return!!t&&"mapValue"in t}function $i(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$i(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$i(t.arrayValue.values[n]);return e}return Object.assign({},t)}function R1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Aa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$i(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=$i(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Aa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Aa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt($i(this.value))}}function hv(t){const e=[];return ni(t.fields,(n,r)=>{const s=new ut([n]);if(Aa(r)){const i=hv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new nn(e)}/**
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
 */class yt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new yt(e,0,me.min(),me.min(),me.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,me.min(),me.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,me.min(),me.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ja{constructor(e,n){this.position=e,this.inclusive=n}}function $p(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=Ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function jp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Xa{constructor(e,n="asc"){this.field=e,this.dir=n}}function S1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class dv{}class Xe extends dv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new P1(e,n,r):n==="array-contains"?new N1(e,r):n==="in"?new D1(e,r):n==="not-in"?new V1(e,r):n==="array-contains-any"?new M1(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new k1(e,r):new O1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ws(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(Ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends dv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return fv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fv(t){return t.op==="and"}function pv(t){return C1(t)&&fv(t)}function C1(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function _u(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+zs(t.value);if(pv(t))return t.filters.map(e=>_u(e)).join(",");{const e=t.filters.map(n=>_u(n)).join(",");return`${t.op}(${e})`}}function gv(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&Tn(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&gv(o,s.filters[c]),!0):!1}(t,e):void ge()}function mv(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${zs(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(mv).join(" ,")+"}"}(t):"Filter"}class P1 extends Xe{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class k1 extends Xe{constructor(e,n){super(e,"in",n),this.keys=_v("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class O1 extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=_v("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _v(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class N1 extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Sh(n)&&co(n.arrayValue,this.value)}}class D1 extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class V1 extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!co(this.value.arrayValue,n)}}class M1 extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Sh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
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
 */class L1{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function qp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new L1(t,e,n,r,s,i,o)}function Ch(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_u(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zs(r)).join(",")),e.ue=n}return e.ue}function Ph(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!S1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!gv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!jp(t.startAt,e.startAt)&&jp(t.endAt,e.endAt)}function yu(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Oo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function x1(t,e,n,r,s,i,o,c){return new Oo(t,e,n,r,s,i,o,c)}function yv(t){return new Oo(t)}function Hp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function vv(t){return t.collectionGroup!==null}function ji(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ht(ut.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Xa(i,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new Xa(ut.keyField(),r))}return e.ce}function mn(t){const e=_e(t);return e.le||(e.le=F1(e,ji(t))),e.le}function F1(t,e){if(t.limitType==="F")return qp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Xa(s.field,i)});const n=t.endAt?new Ja(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ja(t.startAt.position,t.startAt.inclusive):null;return qp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vu(t,e){const n=t.filters.concat([e]);return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Eu(t,e,n){return new Oo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return Ph(mn(t),mn(e))&&t.limitType===e.limitType}function Ev(t){return`${Ch(mn(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>mv(s)).join(", ")}]`),Nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>zs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>zs(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Vc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=$p(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,ji(r),s)||r.endAt&&!function(o,c,l){const u=$p(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,ji(r),s))}(t,e)}function U1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Tv(t){return(e,n)=>{let r=!1;for(const s of ji(t)){const i=B1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function B1(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Ws(l,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return lv(this.inner)}size(){return this.innerSize}}/**
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
 */const $1=new qe(le.comparator);function Un(){return $1}const wv=new qe(le.comparator);function ki(...t){let e=wv;for(const n of t)e=e.insert(n.key,n);return e}function Iv(t){let e=wv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return qi()}function Av(){return qi()}function qi(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const j1=new qe(le.comparator),q1=new ht(le.comparator);function ve(...t){let e=q1;for(const n of t)e=e.add(n);return e}const H1=new ht(Se);function K1(){return H1}/**
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
 */function bv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ya(e)?"-0":e}}function Rv(t){return{integerValue:""+t}}function W1(t,e){return I1(e)?Rv(e):bv(t,e)}/**
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
 */class Mc{constructor(){this._=void 0}}function z1(t,e,n){return t instanceof Za?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&bh(i)&&(i=Rh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof lo?Cv(t,e):t instanceof uo?Pv(t,e):function(s,i){const o=Sv(s,i),c=Kp(o)+Kp(s.Pe);return mu(o)&&mu(s.Pe)?Rv(c):bv(s.serializer,c)}(t,e)}function G1(t,e,n){return t instanceof lo?Cv(t,e):t instanceof uo?Pv(t,e):n}function Sv(t,e){return t instanceof ec?function(r){return mu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Za extends Mc{}class lo extends Mc{constructor(e){super(),this.elements=e}}function Cv(t,e){const n=kv(e);for(const r of t.elements)n.some(s=>Tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class uo extends Mc{constructor(e){super(),this.elements=e}}function Pv(t,e){let n=kv(e);for(const r of t.elements)n=n.filter(s=>!Tn(s,r));return{arrayValue:{values:n}}}class ec extends Mc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Kp(t){return Ye(t.integerValue||t.doubleValue)}function kv(t){return Sh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Q1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof lo&&s instanceof lo||r instanceof uo&&s instanceof uo?Ks(r.elements,s.elements,Tn):r instanceof ec&&s instanceof ec?Tn(r.Pe,s.Pe):r instanceof Za&&s instanceof Za}(t.transform,e.transform)}class Y1{constructor(e,n){this.version=e,this.transformResults=n}}class _n{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new _n}static exists(e){return new _n(void 0,e)}static updateTime(e){return new _n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lc{}function Ov(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kh(t.key,_n.none()):new No(t.key,t.data,_n.none());{const n=t.data,r=zt.empty();let s=new ht(ut.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cs(t.key,r,new nn(s.toArray()),_n.none())}}function J1(t,e,n){t instanceof No?function(s,i,o){const c=s.value.clone(),l=zp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof cs?function(s,i,o){if(!ba(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=zp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Nv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Hi(t,e,n,r){return t instanceof No?function(i,o,c,l){if(!ba(i.precondition,o))return c;const u=i.value.clone(),d=Gp(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof cs?function(i,o,c,l){if(!ba(i.precondition,o))return c;const u=Gp(i.fieldTransforms,l,o),d=o.data;return d.setAll(Nv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return ba(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function X1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Sv(r.transform,s||null);i!=null&&(n===null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function Wp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ks(r,s,(i,o)=>Q1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class No extends Lc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cs extends Lc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zp(t,e,n){const r=new Map;Me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,G1(o,c,n[s]))}return r}function Gp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,z1(i,o,e))}return r}class kh extends Lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z1 extends Lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ek{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&J1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Hi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Av();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Ov(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Ks(this.mutations,e.mutations,(n,r)=>Wp(n,r))&&Ks(this.baseMutations,e.baseMutations,(n,r)=>Wp(n,r))}}class Oh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Me(e.mutations.length===r.length);let s=function(){return j1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Oh(e,n,r,s)}}/**
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
 */class tk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,we;function rk(t){switch(t){default:return ge();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function Dv(t){if(t===void 0)return Fn("GRPC error has no .code"),j.UNKNOWN;switch(t){case ze.OK:return j.OK;case ze.CANCELLED:return j.CANCELLED;case ze.UNKNOWN:return j.UNKNOWN;case ze.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case ze.INTERNAL:return j.INTERNAL;case ze.UNAVAILABLE:return j.UNAVAILABLE;case ze.UNAUTHENTICATED:return j.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case ze.NOT_FOUND:return j.NOT_FOUND;case ze.ALREADY_EXISTS:return j.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return j.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case ze.ABORTED:return j.ABORTED;case ze.OUT_OF_RANGE:return j.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return j.UNIMPLEMENTED;case ze.DATA_LOSS:return j.DATA_LOSS;default:return ge()}}(we=ze||(ze={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sk(){return new TextEncoder}/**
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
 */const ik=new qr([4294967295,4294967295],0);function Qp(t){const e=sk().encode(t),n=new ev;return n.update(e),new Uint8Array(n.digest())}function Yp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new qr([n,r],0),new qr([s,i],0)]}class Nh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Oi(`Invalid padding: ${n}`);if(r<0)throw new Oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Oi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Oi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=qr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(qr.fromNumber(r)));return s.compare(ik)===1&&(s=new qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Qp(e),[r,s]=Yp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Qp(e),[r,s]=Yp(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xc(me.min(),s,new qe(Se),Un(),ve())}}class Do{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Do(r,n,ve(),ve(),ve())}}/**
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
 */class Ra{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Vv{constructor(e,n){this.targetId=e,this.me=n}}class Mv{constructor(e,n,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jp{constructor(){this.fe=0,this.ge=Zp(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new Do(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Zp()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ok{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=Xp(),this.Qe=new qe(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(yu(i))if(r===0){const o=new le(i.path);this.Ue(n,o,yt.newNoDocument(o,me.min()))}else Me(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Zr(r).toUint8Array()}catch(l){if(l instanceof uv)return Hs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Nh(o,s,i)}catch(l){return Hs(l instanceof Oi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&yu(c.target)){const l=new le(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,yt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ve();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new xc(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=Xp(),this.Qe=new qe(Se),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Jp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ht(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Jp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Xp(){return new qe(le.comparator)}function Zp(){return new qe(le.comparator)}const ak={asc:"ASCENDING",desc:"DESCENDING"},ck={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lk={and:"AND",or:"OR"};class uk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tu(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function tc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hk(t,e){return tc(t,e.toTimestamp())}function yn(t){return Me(!!t),me.fromTimestamp(function(n){const r=Ir(n);return new tt(r.seconds,r.nanos)}(t))}function Dh(t,e){return wu(t,e).canonicalString()}function wu(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xv(t){const e=Fe.fromString(t);return Me(jv(e)),e}function Iu(t,e){return Dh(t.databaseId,e.path)}function Pl(t,e){const n=xv(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(Uv(n))}function Fv(t,e){return Dh(t.databaseId,e)}function dk(t){const e=xv(t);return e.length===4?Fe.emptyPath():Uv(e)}function Au(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Uv(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function eg(t,e,n){return{name:Iu(t,e),fields:n.value.mapValue.fields}}function fk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Me(d===void 0||typeof d=="string"),Tt.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Tt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?j.UNKNOWN:Dv(u.code);return new ie(d,u.message||"")}(o);n=new Mv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pl(t,r.document.name),i=yn(r.document.updateTime),o=r.document.createTime?yn(r.document.createTime):me.min(),c=new zt({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ra(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pl(t,r.document),i=r.readTime?yn(r.readTime):me.min(),o=yt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ra([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pl(t,r.document),i=r.removedTargetIds||[];n=new Ra([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nk(s,i),c=r.targetId;n=new Vv(c,o)}}return n}function pk(t,e){let n;if(e instanceof No)n={update:eg(t,e.key,e.value)};else if(e instanceof kh)n={delete:Iu(t,e.key)};else if(e instanceof cs)n={update:eg(t,e.key,e.data),updateMask:Ik(e.fieldMask)};else{if(!(e instanceof Z1))return ge();n={verify:Iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Za)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof lo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ec)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function gk(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?yn(s.updateTime):yn(i);return o.isEqual(me.min())&&(o=yn(i)),new Y1(o,s.transformResults||[])}(n,e))):[]}function mk(t,e){return{documents:[Fv(t,e.path)]}}function _k(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fv(t,s);const i=function(u){if(u.length!==0)return $v(cn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Es(g.field),direction:Ek(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Tu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function yk(t){let e=dk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Me(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Bv(p);return g instanceof cn&&pv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new Xa(Ts(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Nc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,I=p.values||[];return new Ja(I,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,I=p.values||[];return new Ja(I,g)}(n.endAt)),x1(e,s,o,i,c,"F",l,u)}function vk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ts(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ts(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Ts(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>Bv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function Ek(t){return ak[t]}function Tk(t){return ck[t]}function wk(t){return lk[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Ts(t){return ut.fromServerFormat(t.fieldPath)}function $v(t){return t instanceof Xe?function(n){if(n.op==="=="){if(Bp(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(Up(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bp(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(Up(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:Tk(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>$v(s));return r.length===1?r[0]:{compositeFilter:{op:wk(n.op),filters:r}}}(t):ge()}function Ik(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ur{constructor(e,n,r,s,i=me.min(),o=me.min(),c=Tt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ur(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ur(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ak{constructor(e){this.ct=e}}function bk(t){const e=yk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eu(e,e.limit,"L"):e}/**
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
 */class Rk{constructor(){this._n=new Sk}addToCollectionParentIndex(e,n){return this._n.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(wr.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class Sk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(Fe.comparator)).toArray()}}/**
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
 */class Gs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Gs(0)}static Ln(){return new Gs(-1)}}/**
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
 */class Ck{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Pk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Hi(r.mutation,s,nn.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=xr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ki();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Un();const o=qi(),c=function(){return qi()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof cs)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Hi(d.mutation,u,d.mutation.getFieldMask(),tt.now())):o.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new Pk(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=qi();let s=new qe((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||nn.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Av();d.forEach(g=>{if(!i.has(g)){const I=Ov(n.get(g),r.get(g));I!==null&&p.set(g,I),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):vv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(xr());let c=-1,l=i;return o.next(u=>H.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?H.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(d=>({batchId:c,changes:Iv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ki();return this.indexManager.getCollectionParents(e,i).next(c=>H.forEach(c,l=>{const u=function(p,g){return new Oo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let c=ki();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Hi(d.mutation,u,nn.empty(),tt.now()),Vc(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class Ok{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return H.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:yn(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:bk(s.bundledQuery),readTime:yn(s.readTime)}}(n)),H.resolve()}}/**
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
 */class Nk{constructor(){this.overlays=new qe(le.comparator),this.hr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=xr(),i=n.length+1,o=new le(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=xr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=xr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return H.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tk(n,r));let i=this.hr.get(n);i===void 0&&(i=ve(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Vh{constructor(){this.Pr=new ht(ot.Ir),this.Tr=new ht(ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ot(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new le(new Fe([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new le(new Fe([])),r=new ot(n,e),s=new ot(n,e+1);let i=ve();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return le.comparator(e.key,n.key)||Se(e.pr,n.pr)}static Er(e,n){return Se(e.pr,n.pr)||le.comparator(e.key,n.key)}}/**
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
 */class Dk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ht(ot.Ir)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ek(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new ot(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(Se);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),H.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new ot(new le(i),0);let c=new ht(Se);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),H.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return H.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ot(n,0),s=this.wr.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Vk{constructor(e){this.vr=e,this.docs=function(){return new qe(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Un();const o=n.path,c=new le(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||v1(y1(d),r)<=0||(s.has(d.key)||Vc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Fr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Mk(this)}getSize(e){return H.resolve(this.size)}}class Mk extends Ck{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Lk{constructor(e){this.persistence=e,this.Mr=new ri(n=>Ch(n),Ph),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Vh,this.targetCount=0,this.Lr=Gs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),H.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.qn(n),H.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Nr.containsKey(n))}}/**
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
 */class xk{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ah(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Lk(this),this.indexManager=new Rk,this.remoteDocumentCache=function(s){return new Vk(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Ak(n),this.$r=new Ok(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Dk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const s=new Fk(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return H.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Fk extends T1{constructor(e){super(),this.currentSequenceNumber=e}}class Mh{constructor(e){this.persistence=e,this.zr=new Vh,this.jr=null}static Hr(e){return new Mh(e)}get Jr(){if(this.jr)return this.jr;throw ge()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),H.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Jr,r=>{const s=le.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return H.or([()=>H.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Lh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Lh(e,n.fromCache,r,s)}}/**
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
 */class Uk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Bk{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Pb()?8:w1(dt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Uk;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ii()<=Te.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),H.resolve()):(Ii()<=Te.DEBUG&&se("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ii()<=Te.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):H.resolve())}ji(e,n){if(Hp(n))return H.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Eu(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Eu(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return Hp(n)||s.isEqual(me.min())?H.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?H.resolve(null):(Ii()<=Te.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vs(n)),this.es(e,o,n,_1(s,-1)).next(c=>c))})}Zi(e,n){let r=new ht(Tv(e));return n.forEach((s,i)=>{Vc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ii()<=Te.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",vs(n)),this.zi.getDocumentsMatchingQuery(e,n,wr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class $k{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new qe(Se),this.rs=new ri(i=>Ch(i),Ph),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function jk(t,e,n,r){return new $k(t,e,n,r)}async function qv(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function qk(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,g=p.keys();let I=H.resolve();return g.forEach(C=>{I=I.next(()=>d.getEntry(l,C)).next(M=>{const V=u.docVersions.get(C);Me(V!==null),M.version.compareTo(V)<0&&(p.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),d.addEntry(M)))})}),I.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Hv(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Hk(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let I=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?I=I.withResumeToken(Tt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(p,I),function(M,V,B){return M.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(g,I,d)&&c.push(n.Qr.updateTargetData(i,I))});let l=Un(),u=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Kk(i,o,e.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!r.isEqual(me.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return H.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function Kk(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Un();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(me.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):se("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function Wk(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zk(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new ur(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function bu(t,e,n){const r=_e(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ko(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function tg(t,e,n){const r=_e(t);let s=me.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=_e(l),g=p.rs.get(d);return g!==void 0?H.resolve(p.ns.get(g)):p.Qr.getTargetData(u,d)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:ve())).next(c=>(Gk(r,U1(e),c),{documents:c,hs:i})))}function Gk(t,e,n){let r=t.ss.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class ng{constructor(){this.activeTargetIds=K1()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qk{constructor(){this.no=new ng,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ng,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Yk{io(e){}shutdown(){}}/**
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
 */class rg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fa=null;function kl(){return fa===null?fa=function(){return 268435456+Math.round(2147483648*Math.random())}():fa++,"0x"+fa.toString(16)}/**
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
 */const Jk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Xk{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const mt="WebChannelConnection";class Zk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=kl(),l=this.vo(n,r.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(d=>(se("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Hs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ti}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=Jk[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=kl();return new Promise((o,c)=>{const l=new tv;l.setWithCredentials(!0),l.listenOnce(rv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ia.NO_ERROR:const d=l.getResponseJson();se(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ia.TIMEOUT:se(mt,`RPC '${e}' ${i} timed out`),c(new ie(j.DEADLINE_EXCEEDED,"Request time out"));break;case Ia.HTTP_ERROR:const p=l.getStatus();if(se(mt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const I=g==null?void 0:g.error;if(I&&I.status&&I.message){const C=function(V){const B=V.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(B)>=0?B:j.UNKNOWN}(I.status);c(new ie(C,I.message))}else c(new ie(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new ie(j.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{se(mt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);se(mt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=kl(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ov(),c=iv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new nv({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");se(mt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,I=!1;const C=new Xk({lo:V=>{I?se(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(se(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),se(mt,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},ho:()=>p.close()}),M=(V,B,O)=>{V.listen(B,S=>{try{O(S)}catch(k){setTimeout(()=>{throw k},0)}})};return M(p,Pi.EventType.OPEN,()=>{I||(se(mt,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),M(p,Pi.EventType.CLOSE,()=>{I||(I=!0,se(mt,`RPC '${e}' stream ${s} transport closed`),C.po())}),M(p,Pi.EventType.ERROR,V=>{I||(I=!0,Hs(mt,`RPC '${e}' stream ${s} transport errored:`,V),C.po(new ie(j.UNAVAILABLE,"The operation could not be completed")))}),M(p,Pi.EventType.MESSAGE,V=>{var B;if(!I){const O=V.data[0];Me(!!O);const S=O,k=S.error||((B=S[0])===null||B===void 0?void 0:B.error);if(k){se(mt,`RPC '${e}' stream ${s} received error:`,k);const x=k.status;let N=function(m){const _=ze[m];if(_!==void 0)return Dv(_)}(x),b=k.message;N===void 0&&(N=j.INTERNAL,b="Unknown error status: "+x+" with message "+k.message),I=!0,C.po(new ie(N,b)),p.close()}else se(mt,`RPC '${e}' stream ${s} received:`,O),C.yo(O)}}),M(c,sv.STAT_EVENT,V=>{V.stat===pu.PROXY?se(mt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===pu.NOPROXY&&se(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Ol(){return typeof document<"u"?document:null}/**
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
 */function Fc(t){return new uk(t,!0)}/**
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
 */class Kv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Wv{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Kv(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new ie(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eO extends Wv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=fk(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?yn(o.readTime):me.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Au(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=yu(l)?{documents:mk(i,l)}:{query:_k(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Lv(i,o.resumeToken);const u=Tu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){c.readTime=tc(i,o.snapshotVersion.toTimestamp());const u=Tu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=vk(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Au(this.serializer),n.removeTarget=e,this.i_(n)}}class tO extends Wv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=gk(e.writeResults,e.commitTime),r=yn(e.commitTime);return this.listener.A_(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Au(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pk(this.serializer,r))};this.i_(n)}}/**
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
 */class nO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,wu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(j.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,wu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(j.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class rO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Fn(n),this.y_=!1):se("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class sO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{ls(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.M_.add(4),await Vo(u),u.N_.set("Unknown"),u.M_.delete(4),await Uc(u)}(this))})}),this.N_=new rO(r,s)}}async function Uc(t){if(ls(t))for(const e of t.x_)await e(!0)}async function Vo(t){for(const e of t.x_)await e(!1)}function zv(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Bh(n)?Uh(n):si(n).Xo()&&Fh(n,e))}function xh(t,e){const n=_e(t),r=si(n);n.F_.delete(e),r.Xo()&&Gv(n,e),n.F_.size===0&&(r.Xo()?r.n_():ls(n)&&n.N_.set("Unknown"))}function Fh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}si(t).P_(e)}function Gv(t,e){t.L_.xe(e),si(t).I_(e)}function Uh(t){t.L_=new ok({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),si(t).start(),t.N_.w_()}function Bh(t){return ls(t)&&!si(t).Zo()&&t.F_.size>0}function ls(t){return _e(t).M_.size===0}function Qv(t){t.L_=void 0}async function iO(t){t.N_.set("Online")}async function oO(t){t.F_.forEach((e,n)=>{Fh(t,e)})}async function aO(t,e){Qv(t),Bh(t)?(t.N_.D_(e),Uh(t)):t.N_.set("Unknown")}async function cO(t,e,n){if(t.N_.set("Online"),e instanceof Mv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nc(t,r)}else if(e instanceof Ra?t.L_.Ke(e):e instanceof Vv?t.L_.He(e):t.L_.We(e),!n.isEqual(me.min()))try{const r=await Hv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(u);d&&i.F_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(Tt.EMPTY_BYTE_STRING,d.snapshotVersion)),Gv(i,l);const p=new ur(d.target,l,u,d.sequenceNumber);Fh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await nc(t,r)}}async function nc(t,e,n){if(!ko(e))throw e;t.M_.add(1),await Vo(t),t.N_.set("Offline"),n||(n=()=>Hv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Uc(t)})}function Yv(t,e){return e().catch(n=>nc(t,n,e))}async function Bc(t){const e=_e(t),n=Ar(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;lO(e);)try{const s=await Wk(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,uO(e,s)}catch(s){await nc(e,s)}Jv(e)&&Xv(e)}function lO(t){return ls(t)&&t.v_.length<10}function uO(t,e){t.v_.push(e);const n=Ar(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Jv(t){return ls(t)&&!Ar(t).Zo()&&t.v_.length>0}function Xv(t){Ar(t).start()}async function hO(t){Ar(t).V_()}async function dO(t){const e=Ar(t);for(const n of t.v_)e.d_(n.mutations)}async function fO(t,e,n){const r=t.v_.shift(),s=Oh.from(r,e,n);await Yv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Bc(t)}async function pO(t,e){e&&Ar(t).E_&&await async function(r,s){if(function(o){return rk(o)&&o!==j.ABORTED}(s.code)){const i=r.v_.shift();Ar(r).t_(),await Yv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Bc(r)}}(t,e),Jv(t)&&Xv(t)}async function sg(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=ls(n);n.M_.add(3),await Vo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Uc(n)}async function gO(t,e){const n=_e(t);e?(n.M_.delete(2),await Uc(n)):e||(n.M_.add(2),await Vo(n),n.N_.set("Unknown"))}function si(t){return t.B_||(t.B_=function(n,r,s){const i=_e(n);return i.f_(),new eO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:iO.bind(null,t),To:oO.bind(null,t),Ao:aO.bind(null,t),h_:cO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Bh(t)?Uh(t):t.N_.set("Unknown")):(await t.B_.stop(),Qv(t))})),t.B_}function Ar(t){return t.k_||(t.k_=function(n,r,s){const i=_e(n);return i.f_(),new tO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:hO.bind(null,t),Ao:pO.bind(null,t),R_:dO.bind(null,t),A_:fO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Bc(t)):(await t.k_.stop(),t.v_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class $h{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new $h(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jh(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),ko(t))return new ie(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=ki(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new Ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ig{constructor(){this.q_=new qe(le.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ge():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Qs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Qs(e,n,Ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class _O{constructor(){this.queries=new ri(e=>Ev(e),Dc),this.onlineState="Unknown",this.z_=new Set}}async function yO(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new mO,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=jh(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&qh(n)}async function vO(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EO(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&qh(n)}function TO(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function qh(t){t.z_.forEach(e=>{e.next()})}var Ru,og;(og=Ru||(Ru={})).J_="default",og.Cache="cache";class wO{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Ru.Cache}}/**
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
 */class Zv{constructor(e){this.key=e}}class eE{constructor(e){this.key=e}}class IO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ve(),this.mutatedKeys=ve(),this.Ia=Tv(e),this.Ta=new Ls(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new ig,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),I=Vc(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),M=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let V=!1;g&&I?g.data.isEqual(I.data)?C!==M&&(r.track({type:3,doc:I}),V=!0):this.Ra(g,I)||(r.track({type:2,doc:I}),V=!0,(l&&this.Ia(I,l)>0||u&&this.Ia(I,u)<0)&&(c=!0)):!g&&I?(r.track({type:0,doc:I}),V=!0):g&&!I&&(r.track({type:1,doc:g}),V=!0,(l||u)&&(c=!0)),V&&(I?(o=o.add(I),i=M?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(I,C){const M=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return M(I)-M(C)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Qs(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ig,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ve(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new eE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Zv(r))}),n}pa(e){this.la=e.hs,this.Pa=ve();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Qs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class AO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class bO{constructor(e){this.key=e,this.wa=!1}}class RO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ri(c=>Ev(c),Dc),this.Da=new Map,this.Ca=new Set,this.va=new qe(le.comparator),this.Fa=new Map,this.Ma=new Vh,this.xa={},this.Oa=new Map,this.Na=Gs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function SO(t,e,n=!0){const r=oE(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await tE(r,e,n,!0),s}async function CO(t,e){const n=oE(t);await tE(n,e,!0,!1)}async function tE(t,e,n,r){const s=await zk(t.localStore,mn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await PO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&zv(t.remoteStore,s),c}async function PO(t,e,n,r,s){t.Ba=(p,g,I)=>async function(M,V,B,O){let S=V.view.da(B);S.Xi&&(S=await tg(M.localStore,V.query,!1).then(({documents:b})=>V.view.da(b,S)));const k=O&&O.targetChanges.get(V.targetId),x=O&&O.targetMismatches.get(V.targetId)!=null,N=V.view.applyChanges(S,M.isPrimaryClient,k,x);return cg(M,V.targetId,N.fa),N.snapshot}(t,p,g,I);const i=await tg(t.localStore,e,!0),o=new IO(e,i.hs),c=o.da(i.documents),l=Do.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);cg(t,n,u.fa);const d=new AO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function kO(t,e,n){const r=_e(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Dc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&xh(r.remoteStore,s.targetId),Su(r,s.targetId)}).catch(Po)):(Su(r,s.targetId),await bu(r.localStore,s.targetId,!0))}async function OO(t,e){const n=_e(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),xh(n.remoteStore,r.targetId))}async function NO(t,e,n){const r=UO(t);try{const s=await function(o,c){const l=_e(o),u=tt.now(),d=c.reduce((I,C)=>I.add(C.key),ve());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Un(),M=ve();return l.os.getEntries(I,d).next(V=>{C=V,C.forEach((B,O)=>{O.isValidDocument()||(M=M.add(B))})}).next(()=>l.localDocuments.getOverlayedDocuments(I,C)).next(V=>{p=V;const B=[];for(const O of c){const S=X1(O,p.get(O.key).overlayedDocument);S!=null&&B.push(new cs(O.key,S,hv(S.value.mapValue),_n.exists(!0)))}return l.mutationQueue.addMutationBatch(I,u,B,c)}).next(V=>{g=V;const B=V.applyToLocalDocumentSet(p,M);return l.documentOverlayCache.saveOverlays(I,V.batchId,B)})}).then(()=>({batchId:g.batchId,changes:Iv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new qe(Se)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Mo(r,s.changes),await Bc(r.remoteStore)}catch(s){const i=jh(s,"Failed to persist write");n.reject(i)}}async function nE(t,e){const n=_e(t);try{const r=await Hk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Me(o.wa):s.removedDocuments.size>0&&(Me(o.wa),o.wa=!1))}),await Mo(n,r,e)}catch(r){await Po(r)}}function ag(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(c)&&(u=!0)}),u&&qh(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function DO(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new qe(le.comparator);o=o.insert(i,yt.newNoDocument(i,me.min()));const c=ve().add(i),l=new xc(me.min(),new Map,new qe(Se),o,c);await nE(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Hh(r)}else await bu(r.localStore,e,!1).then(()=>Su(r,e,n)).catch(Po)}async function VO(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await qk(n.localStore,e);sE(n,r,null),rE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mo(n,s)}catch(s){await Po(s)}}async function MO(t,e,n){const r=_e(t);try{const s=await function(o,c){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Me(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);sE(r,e,n),rE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mo(r,s)}catch(s){await Po(s)}}function rE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function sE(t,e,n){const r=_e(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Su(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||iE(t,r)})}function iE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(xh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Hh(t))}function cg(t,e,n){for(const r of n)r instanceof Zv?(t.Ma.addReference(r.key,e),LO(t,r)):r instanceof eE?(se("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||iE(t,r.key)):ge()}function LO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(se("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Hh(t))}function Hh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new le(Fe.fromString(e)),r=t.Na.next();t.Fa.set(r,new bO(n)),t.va=t.va.insert(n,r),zv(t.remoteStore,new ur(mn(yv(n.path)),r,"TargetPurposeLimboResolution",Ah.oe))}}async function Mo(t,e,n){const r=_e(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const d=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Lh.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const d=_e(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>H.forEach(u,g=>H.forEach(g.qi,I=>d.persistence.referenceDelegate.addReference(p,g.targetId,I)).next(()=>H.forEach(g.Qi,I=>d.persistence.referenceDelegate.removeReference(p,g.targetId,I)))))}catch(p){if(!ko(p))throw p;se("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const I=d.ns.get(g),C=I.snapshotVersion,M=I.withLastLimboFreeSnapshotVersion(C);d.ns=d.ns.insert(g,M)}}}(r.localStore,i))}async function xO(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await qv(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new ie(j.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mo(n,r.us)}}function FO(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return ve().add(r.key);{let s=ve();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function oE(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DO.bind(null,e),e.Sa.h_=EO.bind(null,e.eventManager),e.Sa.ka=TO.bind(null,e.eventManager),e}function UO(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MO.bind(null,e),e}class lg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jk(this.persistence,new Bk,e.initialUser,this.serializer)}createPersistence(e){return new xk(Mh.Hr,this.serializer)}createSharedClientState(e){return new Qk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ag(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xO.bind(null,this.syncEngine),await gO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _O}()}createDatastore(e){const n=Fc(e.databaseInfo.databaseId),r=function(i){return new Zk(i)}(e.databaseInfo);return function(i,o,c,l){return new nO(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new sO(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ag(this.syncEngine,n,0),function(){return rg.D()?new rg:new Yk}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new RO(s,i,o,c,l,u);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=_e(r);se("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Vo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class $O{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=cv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{se("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(se("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nl(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await qv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ug(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HO(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>sg(e.remoteStore,s)),t._onlineComponents=e}function qO(t){return t.name==="FirebaseError"?t.code===j.FAILED_PRECONDITION||t.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function HO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!qO(n))throw n;Hs("Error using user provided cache. Falling back to memory cache: "+n),await Nl(t,new lg)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await Nl(t,new lg);return t._offlineComponents}async function aE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await ug(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await ug(t,new BO))),t._onlineComponents}function KO(t){return aE(t).then(e=>e.syncEngine)}async function WO(t){const e=await aE(t),n=e.eventManager;return n.onListen=SO.bind(null,e.syncEngine),n.onUnlisten=kO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=CO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OO.bind(null,e.syncEngine),n}function zO(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new $O({next:g=>{o.enqueueAndForget(()=>vO(i,p)),g.fromCache&&l.source==="server"?u.reject(new ie(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new wO(c,d,{includeMetadataChanges:!0,ra:!0});return yO(i,p)}(await WO(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function cE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hg=new Map;/**
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
 */function lE(t,e,n){if(!n)throw new ie(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GO(t,e,n,r){if(e===!0&&r===!0)throw new ie(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dg(t){if(!le.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function fg(t){if(le.isDocumentKey(t))throw new ie(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $c(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function ho(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$c(t);throw new ie(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class pg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}GO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new c1;switch(r.type){case"firstParty":return new d1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hg.get(n);r&&(se("ComponentProvider","Removing Datastore"),hg.delete(n),r.terminate())}(this),Promise.resolve()}}function QO(t,e,n,r={}){var s;const i=(t=ho(t,jc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=_t.MOCK_USER;else{c=Ab(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ie(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new _t(u)}t._authCredentials=new l1(new av(c,l))}}/**
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
 */class ii{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ii(this.firestore,e,this._query)}}class Yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class _r extends ii{constructor(e,n,r){super(e,n,yv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new le(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function pa(t,e,...n){if(t=ft(t),lE("collection","path",e),t instanceof jc){const r=Fe.fromString(e,...n);return fg(r),new _r(t,null,r)}{if(!(t instanceof Yt||t instanceof _r))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return fg(r),new _r(t.firestore,null,r)}}function uE(t,e,...n){if(t=ft(t),arguments.length===1&&(e=cv.newId()),lE("doc","path",e),t instanceof jc){const r=Fe.fromString(e,...n);return dg(r),new Yt(t,null,new le(r))}{if(!(t instanceof Yt||t instanceof _r))throw new ie(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return dg(r),new Yt(t.firestore,t instanceof _r?t.converter:null,new le(r))}}/**
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
 */class YO{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Kv(this,"async_queue_retry"),this.hu=()=>{const n=Ol();n&&se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ol();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ol();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new mr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!ko(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Fn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=$h.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ge()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class qc extends jc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new YO}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||dE(this),this._firestoreClient.terminate()}}function JO(t,e){const n=typeof t=="object"?t:ih(),r=typeof t=="string"?t:"(default)",s=os(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wb("firestore");i&&QO(s,...i)}return s}function hE(t){return t._firestoreClient||dE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function dE(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new b1(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,cE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new jO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ys{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ys(Tt.fromBase64String(e))}catch(n){throw new ie(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ys(Tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fE{constructor(e){this._methodName=e}}/**
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
 */class Wh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */const XO=/^__.*__$/;class ZO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new No(e,this.data,n,this.fieldTransforms)}}function pE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class zh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new zh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return rc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(pE(this.fu)&&XO.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class eN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fc(e)}Fu(e,n,r,s=!1){return new zh({fu:e,methodName:n,vu:r,path:ut.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gE(t){const e=t._freezeSettings(),n=Fc(t._databaseId);return new eN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tN(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);yE("Data must be an object, but it was:",o,r);const c=mE(r,o);let l,u;if(i.merge)l=new nn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=rN(e,p,n);if(!o.contains(g))throw new ie(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);iN(d,g)||d.push(g)}l=new nn(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new ZO(new zt(c),l,u)}function nN(t,e,n,r=!1){return Gh(n,t.Fu(r?4:3,e))}function Gh(t,e){if(_E(t=ft(t)))return yE("Unsupported field value:",e,t),mE(t,e);if(t instanceof fE)return function(r,s){if(!pE(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Gh(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return W1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:tc(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:tc(s.serializer,i)}}if(r instanceof Wh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ys)return{bytesValue:Lv(s.serializer,r._byteString)};if(r instanceof Yt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Dh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${$c(r)}`)}(t,e)}function mE(t,e){const n={};return lv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,s)=>{const i=Gh(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function _E(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Wh||t instanceof Ys||t instanceof Yt||t instanceof fE)}function yE(t,e,n){if(!_E(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=$c(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function rN(t,e,n){if((e=ft(e))instanceof Kh)return e._internalPath;if(typeof e=="string")return vE(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const sN=new RegExp("[~\\*/\\[\\]]");function vE(t,e,n){if(e.search(sN)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kh(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new ie(j.INVALID_ARGUMENT,c+t+l)}function iN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class EE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Qh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oN extends EE{data(){return super.data()}}function Qh(t,e){return typeof e=="string"?vE(t,e):e instanceof Kh?e._internalPath:e._delegate._internalPath}/**
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
 */function aN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yh{}class cN extends Yh{}function gg(t,e,...n){let r=[];e instanceof Yh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Jh).length,c=i.filter(l=>l instanceof Hc).length;if(o>1||o>0&&c>0)throw new ie(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Hc extends cN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Hc(e,n,r)}_apply(e){const n=this._parse(e);return TE(e._query,n),new ii(e.firestore,e.converter,vu(e._query,n))}_parse(e){const n=gE(e.firestore);return function(i,o,c,l,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ie(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){_g(p,d);const I=[];for(const C of p)I.push(mg(l,i,C));g={arrayValue:{values:I}}}else g=mg(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||_g(p,d),g=nN(c,o,p,d==="in"||d==="not-in");return Xe.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function er(t,e,n){const r=e,s=Qh("where",t);return Hc._create(s,r,n)}class Jh extends Yh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Jh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)TE(o,l),o=vu(o,l)}(e._query,n),new ii(e.firestore,e.converter,vu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mg(t,e,n){if(typeof(n=ft(n))=="string"){if(n==="")throw new ie(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vv(e)&&n.indexOf("/")!==-1)throw new ie(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!le.isDocumentKey(r))throw new ie(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fp(t,new le(r))}if(n instanceof Yt)return Fp(t,n._key);throw new ie(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(n)}.`)}function _g(t,e){if(!Array.isArray(t)||t.length===0)throw new ie(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TE(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ie(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class lN{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Wh(Ye(e.latitude),Ye(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Me(jv(r));const s=new ao(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||Fn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function uN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ga{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hN extends EE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Sa extends hN{data(e={}){return super.data(e)}}class dN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ga(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Sa(this._firestore,this._userDataWriter,r.key,r,new ga(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Sa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ga(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Sa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ga(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:fN(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}class pN extends lN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ys(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function yg(t){t=ho(t,ii);const e=ho(t.firestore,qc),n=hE(e),r=new pN(e);return aN(t._query),zO(n,t._query).then(s=>new dN(e,r,t,s))}function gN(t){return wE(ho(t.firestore,qc),[new kh(t._key,_n.none())])}function vg(t,e){const n=ho(t.firestore,qc),r=uE(t),s=uN(t.converter,e);return wE(n,[tN(gE(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,_n.exists(!1))]).then(()=>r)}function wE(t,e){return function(r,s){const i=new mr;return r.asyncQueue.enqueueAndForget(async()=>NO(await KO(r),s,i)),i.promise}(hE(t),e)}(function(e,n=!0){(function(s){ti=s})(Zs),En(new an("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new qc(new u1(r.getProvider("auth-internal")),new p1(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Qt(Vp,"4.6.3",e),Qt(Vp,"4.6.3","esm2017")})();const mN={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},Kc=K_(mN);s1(Kc);const Ki=Co(Kc),Ai=JO(Kc),_N=t=>(rs("data-v-ccbacbf8"),t=t(),ss(),t),yN={class:"container"},vN={class:"loginWindow"},EN=_N(()=>K("h1",null,"WELCOME",-1)),TN={class:"buttonBox"},wN={__name:"Login",setup(t){function e(){GR(Ki,o,c).then(l=>{i.push({name:"findcostudent"}),Qe("success","Successfully logged in!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/invalid-credential).":Qe("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":Qe("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":Qe("error","Our servers are currently overloaded :(");break;default:Qe("error",l.message);break}})}function n(){WR(Ki,o).then(()=>{Qe("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(l=>{l.message=="Firebase: Error (auth/missing-email)."&&Qe("error","Enter your email adress in the 'Email' field first!")})}function r(){Ry(Ki,s).then(l=>{Qe("success","Successfully logged in!"),Ct.credentialFromResult(l).accessToken,l.user,i.push("/")}).catch(l=>{Qe("error",l.message),l.code,l.message,l.customData.email,Ct.credentialFromError(l)})}const s=new Ct,i=Ic();N_();let o,c="";return(l,u)=>(xe(),it("div",yN,[K("div",vN,[EN,pn(K("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=d=>Ke(o)?o.value=d:o=d)},null,512),[[Ft,Et(o)]]),pn(K("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=d=>Ke(c)?c.value=d:c=d),onKeydown:u[2]||(u[2]=th(d=>e(),["enter"]))},null,544),[[Ft,Et(c)]]),K("div",TN,[K("button",{class:"button_white",onClick:u[3]||(u[3]=d=>e())},"Login"),K("div",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=d=>r())},"Log in with Google")]),K("a",{onClick:u[5]||(u[5]=d=>n())},"Forgot password?")])]))}},IN=as(wN,[["__scopeId","data-v-ccbacbf8"]]),AN=t=>(rs("data-v-091ef394"),t=t(),ss(),t),bN={class:"container"},RN={class:"loginWindow"},SN=AN(()=>K("h1",null,"CREATE ACCOUNT",-1)),CN={__name:"Register",setup(t){function e(){zR(Ki,o,c).then(u=>{u.user,i.push("/FindCostudent"),Qe("success","Successfully registered!")}).catch(u=>{switch(u.message){case"Firebase: Error (auth/email-already-in-use).":Qe("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":Qe("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":Qe("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":Qe("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":Qe("error","Our servers are currently overloaded :(");break;default:Qe("error",u.message);break}})}function n(){i.push("/login")}function r(){Ry(Ki,s).then(u=>{Qe("success","Successfully logged in!"),Ct.credentialFromResult(u).accessToken,u.user,i.push("/")}).catch(u=>{Qe("error",u.message),u.code,u.message,u.customData.email,Ct.credentialFromError(u)})}const s=new Ct,i=Ic();N_();let o,c,l="";return(u,d)=>(xe(),it("div",bN,[K("div",RN,[SN,pn(K("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":d[0]||(d[0]=p=>Ke(o)?o.value=p:o=p)},null,512),[[Ft,Et(o)]]),pn(K("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":d[1]||(d[1]=p=>Ke(c)?c.value=p:c=p)},null,512),[[Ft,Et(c)]]),pn(K("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":d[2]||(d[2]=p=>Ke(l)?l.value=p:l=p),onKeydown:d[3]||(d[3]=th(p=>e(),["enter"]))},null,544),[[Ft,Et(l)]]),K("button",{class:"button_white",onClick:e},"Create account"),K("button",{id:"googleLogin",class:"button_white",onClick:d[4]||(d[4]=p=>r())},"Login with Google"),K("p",null,[fr("Already have an account? "),K("a",{onClick:n},"Login here!")])])]))}},PN=as(CN,[["__scopeId","data-v-091ef394"]]),nt=t=>(rs("data-v-35f13733"),t=t(),ss(),t),kN={class:"container"},ON={class:"formBox"},NN=nt(()=>K("div",{class:"progressBar"},[K("p",null,"1"),K("div",{class:"line"}),K("p",null,"2"),K("div",{class:"line"}),K("p",null,"3")],-1)),DN={key:0,class:"entry"},VN={class:"itemBox"},MN=nt(()=>K("input",{type:"text",id:"surname",placeholder:"Surname (optional)"},null,-1)),LN={class:"itemBox"},xN=nt(()=>K("p",null,"Subject",-1)),FN={class:"itemBox"},UN=nt(()=>K("p",null,"Location",-1)),BN={class:"itemBox",id:"date"},$N=nt(()=>K("p",null,"Date",-1)),jN=["min"],qN={class:"itemBox",id:"time"},HN={key:1,class:"searching"},KN=nt(()=>K("p",null,"SEARCHING",-1)),WN=nt(()=>K("div",{class:"loader"},null,-1)),zN=[KN,WN],GN={key:2,class:"noneFound"},QN={class:"message"},YN=nt(()=>K("p",null,"No costudents were found yet to study ",-1)),JN={class:"button"},XN=nt(()=>K("p",null," in ",-1)),ZN={class:"button"},eD=nt(()=>K("p",null," in the ",-1)),tD={class:"button"},nD=nt(()=>K("p",null," of the ",-1)),rD={class:"button"},sD=nt(()=>K("p",null,".",-1)),iD=nt(()=>K("div",{class:"finalMessage"},[K("p",null,"We'll keep on searching for other costudents."),K("p",null,"You can check in on the progress on your dashboard.")],-1)),oD={class:"buttonBox"},aD={key:3,class:"found"},cD=nt(()=>K("div",{class:"finalMessage"},[K("p",null,"We found costudents!")],-1)),lD={class:"message"},uD=nt(()=>K("p",null,"You can study ",-1)),hD={class:"button"},dD=nt(()=>K("p",null," in ",-1)),fD={class:"button"},pD=nt(()=>K("p",null," in the ",-1)),gD={class:"button"},mD=nt(()=>K("p",null," of the ",-1)),_D={class:"button"},yD=nt(()=>K("p",null," with ",-1)),vD={id:"subjects"},ED=["value"],TD={id:"locations"},wD=["value"],ID={__name:"FindCostudent",setup(t){function e(){const _=new Date,E=_.getFullYear(),T=String(_.getMonth()+1).padStart(2,"0"),w=String(_.getDate()).padStart(2,"0");return`${E}-${T}-${w}`}function n(_){switch(B.value=!1,O.value=!1,S.value=!1,C.value=_,_){case"morning":B.value=!0,I.value=0;break;case"afternoon":O.value=!0,I.value=1;break;case"evening":S.value=!0,I.value=2;break}}async function r(){l.value=1;const _=gg(N,er("SUBJ","==",d.value),er("LOCATION","==",p.value),er("DATE","==",g.value),er("TOD","==",I.value)),E=await yg(_);E.empty?s():(E.forEach(T=>{console.log(T.id," => ",T.data()),console.log(T.id)}),l.value=3)}async function s(){const _=gg(b,er("SUBJ","==",d.value),er("LOCATION","==",p.value),er("DATE","==",g.value),er("TOD","==",I.value)),E=await yg(_);E.empty?(i(),l.value=2):(o(E.docs[0].data().UID,E.docs[0].id),l.value=3)}async function i(){await vg(pa(Ai,"posts"),{SUBJ:d.value,LOCATION:p.value,DATE:g.value,UID:k,NAME:u.value,TOD:I.value,EMAIL:x})}async function o(_,E){await gN(uE(Ai,"posts",E));const T=[k,_];await vg(pa(Ai,"groups"),{DATE:g.value,LOCATION:p.value,MEMBERS:T,SUBJ:d.value,TOD:I.value})}const c=Co(),l=Ge(0),u=Ge(""),d=Ge(""),p=Ge(""),g=Ge(""),I=Ge(0),C=Ge("");let M=e(),V=Ge(M);const B=Ge(!1),O=Ge(!1),S=Ge(!1),k=c.currentUser.uid,x=c.currentUser.email,N=pa(Ai,"groups"),b=pa(Ai,"posts"),v=Ge(["Religion","Philosophy","Law","Economics","Social science","Psychology","Arts","Sciences","Engineer sciences","Bio engineer sciences","Industrial engineer sciences","Architecture","Medicine","Pharmaceutical sciences","Revalidation sciences"]),m=Ge(["Campus Arenberg","Learning centre Désiré Collen","Agora learning center","Artes Erasmushuis","EBIB","Law library","Philosophy library","Psychology and educational sciences library","Social sciences library"]);return(_,E)=>(xe(),it("div",kN,[K("div",ON,[NN,l.value==0?(xe(),it("div",DN,[K("div",VN,[pn(K("input",{type:"text",id:"name",placeholder:"Name","onUpdate:modelValue":E[0]||(E[0]=T=>u.value=T)},null,512),[[Ft,u.value]]),MN]),K("div",LN,[xN,pn(K("input",{list:"subjects","onUpdate:modelValue":E[1]||(E[1]=T=>d.value=T)},null,512),[[Ft,d.value]])]),K("div",FN,[UN,pn(K("input",{list:"locations","onUpdate:modelValue":E[2]||(E[2]=T=>p.value=T)},null,512),[[Ft,p.value]])]),K("div",BN,[$N,pn(K("input",{type:"date",id:"date",min:Et(V),"onUpdate:modelValue":E[3]||(E[3]=T=>g.value=T)},null,8,jN),[[Ft,g.value]])]),K("div",qN,[K("div",{class:hr(["button",{selected:B.value}]),onClick:E[4]||(E[4]=T=>n("morning"))}," Morning ",2),K("div",{class:hr(["button",{selected:O.value}]),onClick:E[5]||(E[5]=T=>n("afternoon"))}," Afternoon ",2),K("div",{class:hr(["button",{selected:S.value}]),onClick:E[6]||(E[6]=T=>n("evening"))}," Evening ",2)]),K("div",{class:"button",onClick:E[7]||(E[7]=T=>r())}," Submit ")])):Pn("",!0),l.value==1?(xe(),it("div",HN,zN)):Pn("",!0),l.value==2?(xe(),it("div",GN,[K("div",QN,[YN,K("div",JN,bn(d.value),1),XN,K("div",ZN,bn(p.value),1),eD,K("div",tD,bn(C.value),1),nD,K("div",rD,bn(g.value),1),sD]),iD,K("div",oD,[Ce(Et(k_),{to:"/dashboard",class:"button"},{default:fn(()=>[fr("Dashboard")]),_:1})])])):Pn("",!0),l.value==3?(xe(),it("div",aD,[cD,K("div",lD,[uD,K("div",hD,bn(d.value),1),dD,K("div",fD,bn(p.value),1),pD,K("div",gD,bn(C.value),1),mD,K("div",_D,bn(g.value),1),yD])])):Pn("",!0)]),K("datalist",vD,[(xe(!0),it(Je,null,Bl(v.value,T=>(xe(),it("option",{key:T,value:T},null,8,ED))),128))]),K("datalist",TD,[(xe(!0),it(Je,null,Bl(m.value,T=>(xe(),it("option",{key:T,value:T},null,8,wD))),128))])]))}},AD=as(ID,[["__scopeId","data-v-35f13733"]]),bD={},RD={class:"container"};function SD(t,e){return xe(),it("div",RD," test ")}const CD=as(bD,[["render",SD]]),IE=fb({history:qA("/costudent-demo/"),routes:[{path:"/",name:"home",component:BC},{path:"/findcostudent",name:"findcostudent",component:AD,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:IN},{path:"/register",name:"register",component:PN},{path:"/dashboard",name:"dashboard",component:CD}]});let Eg=!1,Dl=!1;IE.beforeEach((t,e,n)=>{const r=Co(),s=t.matched.some(i=>i.meta.requiresAuth);Eg?s&&!Dl?(alert("No access! You need to be logged in."),n("/login")):n():gy(r,i=>{Dl=!!i,Eg=!0,s&&!Dl?(alert("No access! You need to be logged in."),n("/login")):n()})});const Wc=m_(PC);Wc.config.globalProperties.$firebase=Kc;Wc.use(IE);Wc.use(fC,{position:"bottom-right",duration:5e3,pauseOnHover:!0});Wc.mount("#app");
