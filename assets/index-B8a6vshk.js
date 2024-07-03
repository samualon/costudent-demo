(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Oe={},As=[],Pt=()=>{},tT=()=>!1,go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ou=t=>t.startsWith("onUpdate:"),Ue=Object.assign,Nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nT=Object.prototype.hasOwnProperty,be=(t,e)=>nT.call(t,e),se=Array.isArray,bs=t=>Zs(t)==="[object Map]",rs=t=>Zs(t)==="[object Set]",Gd=t=>Zs(t)==="[object Date]",rT=t=>Zs(t)==="[object RegExp]",fe=t=>typeof t=="function",Be=t=>typeof t=="string",Un=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Du=t=>(De(t)||fe(t))&&fe(t.then)&&fe(t.catch),bg=Object.prototype.toString,Zs=t=>bg.call(t),sT=t=>Zs(t).slice(8,-1),Rg=t=>Zs(t)==="[object Object]",Vu=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rs=lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},iT=/-(\w)/g,Rt=uc(t=>t.replace(iT,(e,n)=>n?n.toUpperCase():"")),oT=/\B([A-Z])/g,Ft=uc(t=>t.replace(oT,"-$1").toLowerCase()),mo=uc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mi=uc(t=>t?`on${mo(t)}`:""),on=(t,e)=>!Object.is(t,e),Ss=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Da=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Va=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Qd;const Cg=()=>Qd||(Qd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),aT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",cT=lc(aT);function _o(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?dT(r):_o(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||De(t))return t}const lT=/;(?![^(]*\))/g,uT=/:([^]+)/,hT=/\/\*[^]*?\*\//g;function dT(t){const e={};return t.replace(hT,"").split(lT).forEach(n=>{if(n){const r=n.split(uT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lt(t){let e="";if(Be(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=Lt(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function fT(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Be(e)&&(t.class=Lt(e)),n&&(t.style=_o(n)),t}const pT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gT=lc(pT);function Pg(t){return!!t||t===""}function mT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=vr(t[r],e[r]);return n}function vr(t,e){if(t===e)return!0;let n=Gd(t),r=Gd(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Un(t),r=Un(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?mT(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!vr(t[o],e[o]))return!1}}return String(t)===String(e)}function hc(t,e){return t.findIndex(n=>vr(n,e))}const fn=t=>Be(t)?t:t==null?"":se(t)||De(t)&&(t.toString===bg||!fe(t.toString))?JSON.stringify(t,kg,2):String(t),kg=(t,e)=>e&&e.__v_isRef?kg(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hl(r,i)+" =>"]=s,n),{})}:rs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hl(n))}:Un(e)?hl(e):De(e)&&!se(e)&&!Rg(e)?String(e):e,hl=(t,e="")=>{var n;return Un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mt;class Mu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function _T(t){return new Mu(t)}function Og(t,e=Mt){e&&e.active&&e.effects.push(t)}function Ng(){return Mt}function yT(t){Mt&&Mt.cleanups.push(t)}let Ur;class Us{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Og(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Rr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(vT(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Sr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=pr,n=Ur;try{return pr=!0,Ur=this,this._runnings++,Yd(this),this.fn()}finally{Jd(this),this._runnings--,Ur=n,pr=e}}stop(){this.active&&(Yd(this),Jd(this),this.onStop&&this.onStop(),this.active=!1)}}function vT(t){return t.value}function Yd(t){t._trackId++,t._depsLength=0}function Jd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Dg(t.deps[e],t);t.deps.length=t._depsLength}}function Dg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function ET(t,e){t.effect instanceof Us&&(t=t.effect.fn);const n=new Us(t,Pt,()=>{n.dirty&&n.run()});e&&(Ue(n,e),e.scope&&Og(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function TT(t){t.effect.stop()}let pr=!0,Fl=0;const Vg=[];function Rr(){Vg.push(pr),pr=!1}function Sr(){const t=Vg.pop();pr=t===void 0?!0:t}function Lu(){Fl++}function xu(){for(Fl--;!Fl&&Ul.length;)Ul.shift()()}function Mg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Dg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ul=[];function Lg(t,e,n){Lu();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Ul.push(r.scheduler)))}xu()}const xg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ma=new WeakMap,Br=Symbol(""),Bl=Symbol("");function Nt(t,e,n){if(pr&&Ur){let r=Ma.get(t);r||Ma.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=xg(()=>r.delete(n))),Mg(Ur,s)}}function Vn(t,e,n,r,s,i){const o=Ma.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&se(t)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||!Un(d)&&d>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":se(t)?Vu(n)&&c.push(o.get("length")):(c.push(o.get(Br)),bs(t)&&c.push(o.get(Bl)));break;case"delete":se(t)||(c.push(o.get(Br)),bs(t)&&c.push(o.get(Bl)));break;case"set":bs(t)&&c.push(o.get(Br));break}Lu();for(const l of c)l&&Lg(l,5);xu()}function wT(t,e){const n=Ma.get(t);return n&&n.get(e)}const IT=lc("__proto__,__v_isRef,__isVue"),Fg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Un)),Xd=AT();function AT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)Nt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rr(),Lu();const r=Ie(this)[e].apply(this,n);return xu(),Sr(),r}}),t}function bT(t){Un(t)||(t=String(t));const e=Ie(this);return Nt(e,"has",t),e.hasOwnProperty(t)}class Ug{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Kg:Hg:i?qg:jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){if(o&&be(Xd,n))return Reflect.get(Xd,n,r);if(n==="hasOwnProperty")return bT}const c=Reflect.get(e,n,r);return(Un(n)?Fg.has(n):IT(n))||(s||Nt(e,"get",n),i)?c:ze(c)?o&&Vu(n)?c:c.value:De(c)?s?Bu(c):yo(c):c}}class Bg extends Ug{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Bs(i);if(!Qi(r)&&!Bs(r)&&(i=Ie(i),r=Ie(r)),!se(e)&&ze(i)&&!ze(r))return l?!1:(i.value=r,!0)}const o=se(e)&&Vu(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?on(r,i)&&Vn(e,"set",n,r):Vn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Vn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Un(n)||!Fg.has(n))&&Nt(e,"has",n),r}ownKeys(e){return Nt(e,"iterate",se(e)?"length":Br),Reflect.ownKeys(e)}}class $g extends Ug{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const RT=new Bg,ST=new $g,CT=new Bg(!0),PT=new $g(!0),Fu=t=>t,dc=t=>Reflect.getPrototypeOf(t);function Zo(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(on(e,i)&&Nt(s,"get",e),Nt(s,"get",i));const{has:o}=dc(s),c=r?Fu:n?ju:Yi;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function ea(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(on(t,s)&&Nt(r,"has",t),Nt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ta(t,e=!1){return t=t.__v_raw,!e&&Nt(Ie(t),"iterate",Br),Reflect.get(t,"size",t)}function Zd(t){t=Ie(t);const e=Ie(this);return dc(e).has.call(e,t)||(e.add(t),Vn(e,"add",t,t)),this}function ef(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=dc(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?on(e,o)&&Vn(n,"set",t,e):Vn(n,"add",t,e),this}function tf(t){const e=Ie(this),{has:n,get:r}=dc(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Vn(e,"delete",t,void 0),i}function nf(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Vn(t,"clear",void 0,void 0),n}function na(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ie(o),l=e?Fu:t?ju:Yi;return!t&&Nt(c,"iterate",Br),o.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function ra(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=bs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Fu:e?ju:Yi;return!e&&Nt(i,"iterate",l?Bl:Br),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function kT(){const t={get(i){return Zo(this,i)},get size(){return ta(this)},has:ea,add:Zd,set:ef,delete:tf,clear:nf,forEach:na(!1,!1)},e={get(i){return Zo(this,i,!1,!0)},get size(){return ta(this)},has:ea,add:Zd,set:ef,delete:tf,clear:nf,forEach:na(!1,!0)},n={get(i){return Zo(this,i,!0)},get size(){return ta(this,!0)},has(i){return ea.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:na(!0,!1)},r={get(i){return Zo(this,i,!0,!0)},get size(){return ta(this,!0)},has(i){return ea.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:na(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ra(i,!1,!1),n[i]=ra(i,!0,!1),e[i]=ra(i,!1,!0),r[i]=ra(i,!0,!0)}),[t,n,e,r]}const[OT,NT,DT,VT]=kT();function fc(t,e){const n=e?t?VT:DT:t?NT:OT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const MT={get:fc(!1,!1)},LT={get:fc(!1,!0)},xT={get:fc(!0,!1)},FT={get:fc(!0,!0)},jg=new WeakMap,qg=new WeakMap,Hg=new WeakMap,Kg=new WeakMap;function UT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function BT(t){return t.__v_skip||!Object.isExtensible(t)?0:UT(sT(t))}function yo(t){return Bs(t)?t:pc(t,!1,RT,MT,jg)}function Uu(t){return pc(t,!1,CT,LT,qg)}function Bu(t){return pc(t,!0,ST,xT,Hg)}function $T(t){return pc(t,!0,PT,FT,Kg)}function pc(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=BT(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Cs(t){return Bs(t)?Cs(t.__v_raw):!!(t&&t.__v_isReactive)}function Bs(t){return!!(t&&t.__v_isReadonly)}function Qi(t){return!!(t&&t.__v_isShallow)}function $u(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function Wg(t){return Object.isExtensible(t)&&Sg(t,"__v_skip",!0),t}const Yi=t=>De(t)?yo(t):t,ju=t=>De(t)?Bu(t):t;class zg{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Us(()=>e(this._value),()=>Ps(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&on(e._value,e._value=e.effect.run())&&Ps(e,5),qu(e),e.effect._dirtyLevel>=2&&Ps(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function jT(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=Pt):(r=t.get,s=t.set),new zg(r,s,i||!s,n)}function qu(t){var e;pr&&Ur&&(t=Ie(t),Mg(Ur,(e=t.dep)!=null?e:t.dep=xg(()=>t.dep=void 0,t instanceof zg?t:void 0)))}function Ps(t,e=5,n,r){t=Ie(t);const s=t.dep;s&&Lg(s,e)}function ze(t){return!!(t&&t.__v_isRef===!0)}function Je(t){return Qg(t,!1)}function Gg(t){return Qg(t,!0)}function Qg(t,e){return ze(t)?t:new qT(t,e)}class qT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:Yi(e)}get value(){return qu(this),this._value}set value(e){const n=this.__v_isShallow||Qi(e)||Bs(e);e=n?e:Ie(e),on(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Yi(e),Ps(this,5))}}function HT(t){Ps(t,5)}function Tt(t){return ze(t)?t.value:t}function KT(t){return fe(t)?t():Tt(t)}const WT={get:(t,e,n)=>Tt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Hu(t){return Cs(t)?t:new Proxy(t,WT)}class zT{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>qu(this),()=>Ps(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function Yg(t){return new zT(t)}function GT(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=Jg(t,n);return e}class QT{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return wT(Ie(this._object),this._key)}}class YT{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function JT(t,e,n){return ze(t)?t:fe(t)?new YT(t):De(t)&&arguments.length>1?Jg(t,e,n):Je(t)}function Jg(t,e,n){const r=t[e];return ze(r)?r:new QT(t,e,n)}const XT={GET:"get",HAS:"has",ITERATE:"iterate"},ZT={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ew(t,e){}const tw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},nw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Mn(t,e,n,r){try{return r?t(...r):t()}catch(s){ss(s,e,n)}}function Ut(t,e,n,r){if(fe(t)){const s=Mn(t,e,n,r);return s&&Du(s)&&s.catch(i=>{ss(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ut(t[i],e,n,r));return s}}function ss(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Rr(),Mn(l,null,10,[t,o,c]),Sr();return}}rw(t,n,s,r)}function rw(t,e,n,r=!0){console.error(t)}let Ji=!1,$l=!1;const Et=[];let gn=0;const ks=[];let ir=null,Mr=0;const Xg=Promise.resolve();let Ku=null;function vo(t){const e=Ku||Xg;return t?e.then(this?t.bind(this):t):e}function sw(t){let e=gn+1,n=Et.length;for(;e<n;){const r=e+n>>>1,s=Et[r],i=Xi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function gc(t){(!Et.length||!Et.includes(t,Ji&&t.allowRecurse?gn+1:gn))&&(t.id==null?Et.push(t):Et.splice(sw(t.id),0,t),Zg())}function Zg(){!Ji&&!$l&&($l=!0,Ku=Xg.then(em))}function iw(t){const e=Et.indexOf(t);e>gn&&Et.splice(e,1)}function La(t){se(t)?ks.push(...t):(!ir||!ir.includes(t,t.allowRecurse?Mr+1:Mr))&&ks.push(t),Zg()}function rf(t,e,n=Ji?gn+1:0){for(;n<Et.length;n++){const r=Et[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Et.splice(n,1),n--,r()}}}function xa(t){if(ks.length){const e=[...new Set(ks)].sort((n,r)=>Xi(n)-Xi(r));if(ks.length=0,ir){ir.push(...e);return}for(ir=e,Mr=0;Mr<ir.length;Mr++){const n=ir[Mr];n.active!==!1&&n()}ir=null,Mr=0}}const Xi=t=>t.id==null?1/0:t.id,ow=(t,e)=>{const n=Xi(t)-Xi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function em(t){$l=!1,Ji=!0,Et.sort(ow);try{for(gn=0;gn<Et.length;gn++){const e=Et[gn];e&&e.active!==!1&&Mn(e,null,14)}}finally{gn=0,Et.length=0,xa(),Ji=!1,Ku=null,(Et.length||ks.length)&&em()}}let vs,sa=[];function tm(t,e){var n,r;vs=t,vs?(vs.enabled=!0,sa.forEach(({event:s,args:i})=>vs.emit(s,...i)),sa=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{tm(i,e)}),setTimeout(()=>{vs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,sa=[])},3e3)):sa=[]}function aw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[d]||Oe;g&&(s=n.map(w=>Be(w)?w.trim():w)),p&&(s=n.map(Da))}let c,l=r[c=Mi(e)]||r[c=Mi(Rt(e))];!l&&i&&(l=r[c=Mi(Ft(e))]),l&&Ut(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ut(u,t,6,s)}}function nm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const d=nm(u,e,!0);d&&(c=!0,Ue(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):Ue(o,i),De(t)&&r.set(t,o),o)}function mc(t,e){return!t||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Ft(e))||be(t,e))}let nt=null,_c=null;function Zi(t){const e=nt;return nt=t,_c=t&&t.type.__scopeId||null,e}function is(t){_c=t}function os(){_c=null}const cw=t=>mn;function mn(t,e=nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yl(-1);const i=Zi(e);let o;try{o=t(...s)}finally{Zi(i),r._d&&Yl(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function va(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:g,setupState:w,ctx:S,inheritAttrs:V}=t,D=Zi(t);let F,P;try{if(n.shapeFlag&4){const O=s||r,x=O;F=xt(u.call(x,O,d,p,w,g,S)),P=c}else{const O=e;F=xt(O.length>1?O(p,{attrs:c,slots:o,emit:l}):O(p,null)),P=e.props?c:uw(c)}}catch(O){Fi.length=0,ss(O,t,1),F=Ce(at)}let C=F;if(P&&V!==!1){const O=Object.keys(P),{shapeFlag:x}=C;O.length&&x&7&&(i&&O.some(Ou)&&(P=hw(P,i)),C=Tn(C,P,!1,!0))}return n.dirs&&(C=Tn(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),F=C,Zi(D),F}function lw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Tr(s)){if(s.type!==at||s.children==="v-if"){if(n)return;n=s}}else return}return n}const uw=t=>{let e;for(const n in t)(n==="class"||n==="style"||go(n))&&((e||(e={}))[n]=t[n]);return e},hw=(t,e)=>{const n={};for(const r in t)(!Ou(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function dw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?sf(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!mc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?sf(r,o,u):!0:!!o;return!1}function sf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!mc(n,i))return!0}return!1}function Wu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zu="components",fw="directives";function rm(t,e){return Gu(zu,t,!0,e)||t}const sm=Symbol.for("v-ndc");function im(t){return Be(t)?Gu(zu,t,!1)||t:t||sm}function pw(t){return Gu(fw,t)}function Gu(t,e,n=!0,r=!1){const s=nt||tt;if(s){const i=s.type;if(t===zu){const c=tu(i,!1);if(c&&(c===e||c===Rt(e)||c===mo(Rt(e))))return i}const o=of(s[t]||i[t],e)||of(s.appContext[t],e);return!o&&r?i:o}}function of(t,e){return t&&(t[e]||t[Rt(e)]||t[mo(Rt(e))])}const jl=t=>t.__isSuspense;let ql=0;const gw={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)_w(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}yw(t,e,n,r,s,o,c,l,u)}},hydrate:vw,create:Qu,normalize:Ew},mw=gw;function eo(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function _w(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:d}}=l,p=d("div"),g=t.suspense=Qu(t,s,r,e,p,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,p,null,r,g,i,o),g.deps>0?(eo(t,"onPending"),eo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Os(g,t.ssFallback)):g.resolve(!1,!0)}function yw(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:d}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,w=e.ssFallback,{activeBranch:S,pendingBranch:V,isInFallback:D,isHydrating:F}=p;if(V)p.pendingBranch=g,tn(g,V)?(l(V,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():D&&(F||(l(S,w,n,r,s,null,i,o,c),Os(p,w)))):(p.pendingId=ql++,F?(p.isHydrating=!1,p.activeBranch=V):u(V,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=d("div"),D?(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(S,w,n,r,s,null,i,o,c),Os(p,w))):S&&tn(g,S)?(l(S,g,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(S&&tn(g,S))l(S,g,n,r,s,p,i,o,c),Os(p,g);else if(eo(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=ql++,l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:P,pendingId:C}=p;P>0?setTimeout(()=>{p.pendingId===C&&p.fallback(w)},P):P===0&&p.fallback(w)}}function Qu(t,e,n,r,s,i,o,c,l,u,d=!1){const{p,m:g,um:w,n:S,o:{parentNode:V,remove:D}}=u;let F;const P=Tw(t);P&&e&&e.pendingBranch&&(F=e.pendingId,e.deps++);const C=t.props?Va(t.props.timeout):void 0,O=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:ql++,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!d,isHydrating:d,isUnmounted:!1,effects:[],resolve(N=!1,b=!1){const{vnode:v,activeBranch:m,pendingBranch:y,pendingId:T,effects:I,parentComponent:E,container:de}=x;let ye=!1;x.isHydrating?x.isHydrating=!1:N||(ye=m&&y.transition&&y.transition.mode==="out-in",ye&&(m.transition.afterLeave=()=>{T===x.pendingId&&(g(y,de,i===O?S(m):i,0),La(I))}),m&&(V(m.el)!==x.hiddenContainer&&(i=S(m)),w(m,E,x,!0)),ye||g(y,de,i,0)),Os(x,y),x.pendingBranch=null,x.isInFallback=!1;let G=x.parent,Q=!1;for(;G;){if(G.pendingBranch){G.effects.push(...I),Q=!0;break}G=G.parent}!Q&&!ye&&La(I),x.effects=[],P&&e&&e.pendingBranch&&F===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),eo(v,"onResolve")},fallback(N){if(!x.pendingBranch)return;const{vnode:b,activeBranch:v,parentComponent:m,container:y,namespace:T}=x;eo(b,"onFallback");const I=S(v),E=()=>{x.isInFallback&&(p(null,N,y,I,m,null,T,c,l),Os(x,N))},de=N.transition&&N.transition.mode==="out-in";de&&(v.transition.afterLeave=E),x.isInFallback=!0,w(v,m,null,!0),de||E()},move(N,b,v){x.activeBranch&&g(x.activeBranch,N,b,v),x.container=N},next(){return x.activeBranch&&S(x.activeBranch)},registerDep(N,b,v){const m=!!x.pendingBranch;m&&x.deps++;const y=N.vnode.el;N.asyncDep.catch(T=>{ss(T,N,0)}).then(T=>{if(N.isUnmounted||x.isUnmounted||x.pendingId!==N.suspenseId)return;N.asyncResolved=!0;const{vnode:I}=N;Zl(N,T,!1),y&&(I.el=y);const E=!y&&N.subTree.el;b(N,I,V(y||N.subTree.el),y?null:S(N.subTree),x,o,v),E&&D(E),Wu(N,I.el),m&&--x.deps===0&&x.resolve()})},unmount(N,b){x.isUnmounted=!0,x.activeBranch&&w(x.activeBranch,n,N,b),x.pendingBranch&&w(x.pendingBranch,n,N,b)}};return x}function vw(t,e,n,r,s,i,o,c,l){const u=e.suspense=Qu(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),d=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),d}function Ew(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=af(r?n.default:n),t.ssFallback=r?af(n.fallback):Ce(at)}function af(t){let e;if(fe(t)){const n=Wr&&t._c;n&&(t._d=!1,Me()),t=t(),n&&(t._d=!0,e=kt,jm())}return se(t)&&(t=lw(t)),t=xt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function om(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):La(t)}function Os(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Wu(r,s))}function Tw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function yc(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Rr();const c=zr(n),l=Ut(e,n,t,o);return c(),Sr(),l});return r?s.unshift(i):s.push(i),i}}const qn=t=>(e,n=tt)=>{(!Io||t==="sp")&&yc(t,(...r)=>e(...r),n)},am=qn("bm"),ei=qn("m"),cm=qn("bu"),vc=qn("u"),Ec=qn("bum"),Tc=qn("um"),lm=qn("sp"),um=qn("rtg"),hm=qn("rtc");function dm(t,e=tt){yc("ec",t,e)}function Ln(t,e){if(nt===null)return t;const n=Ao(nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&lr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function pn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Rr(),Ut(l,n,8,[t.el,c,t,e]),Sr())}}function Ea(t,e,n,r){let s;const i=n&&n[r];if(se(t)||Be(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function ww(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(se(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}/*! #__NO_SIDE_EFFECTS__ */function Eo(t,e){return fe(t)?Ue({name:t.name},e,{setup:t}):t}const $r=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Iw(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,d=0;const p=()=>(d++,l=null,g()),g=()=>{let w;return l||(w=l=e().catch(S=>{if(S=S instanceof Error?S:new Error(String(S)),c)return new Promise((V,D)=>{c(S,()=>V(p()),()=>D(S),d+1)});throw S}).then(S=>w!==l&&l?l:(S&&(S.__esModule||S[Symbol.toStringTag]==="Module")&&(S=S.default),u=S,S)))};return Eo({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const w=tt;if(u)return()=>dl(u,w);const S=P=>{l=null,ss(P,w,13,!r)};if(o&&w.suspense||Io)return g().then(P=>()=>dl(P,w)).catch(P=>(S(P),()=>r?Ce(r,{error:P}):null));const V=Je(!1),D=Je(),F=Je(!!s);return s&&setTimeout(()=>{F.value=!1},s),i!=null&&setTimeout(()=>{if(!V.value&&!D.value){const P=new Error(`Async component timed out after ${i}ms.`);S(P),D.value=P}},i),g().then(()=>{V.value=!0,w.parent&&wo(w.parent.vnode)&&(w.parent.effect.dirty=!0,gc(w.parent.update))}).catch(P=>{S(P),D.value=P}),()=>{if(V.value&&u)return dl(u,w);if(D.value&&r)return Ce(r,{error:D.value});if(n&&!F.value)return Ce(n)}}})}function dl(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ce(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}function Aw(t,e,n={},r,s){if(nt.isCE||nt.parent&&$r(nt.parent)&&nt.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Me();const o=i&&fm(i(n)),c=qr(Qe,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function fm(t){return t.some(e=>Tr(e)?!(e.type===at||e.type===Qe&&!fm(e.children)):!0)?t:null}function bw(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Mi(r)]=t[r];return n}const Hl=t=>t?Qm(t)?Ao(t):Hl(t.parent):null,Li=Ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hl(t.parent),$root:t=>Hl(t.root),$emit:t=>t.emit,$options:t=>Yu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,gc(t.update)}),$nextTick:t=>t.n||(t.n=vo.bind(t.proxy)),$watch:t=>sI.bind(t)}),fl=(t,e)=>t!==Oe&&!t.__isScriptSetup&&be(t,e),Kl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fl(r,e))return o[e]=1,r[e];if(s!==Oe&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==Oe&&be(n,e))return o[e]=4,n[e];Wl&&(o[e]=0)}}const d=Li[e];let p,g;if(d)return e==="$attrs"&&Nt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fl(s,e)?(s[e]=n,!0):r!==Oe&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Oe&&be(t,o)||fl(e,o)||(c=i[0])&&be(c,o)||be(r,o)||be(Li,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Rw=Ue({},Kl,{get(t,e){if(e!==Symbol.unscopables)return Kl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!cT(e)}});function Sw(){return null}function Cw(){return null}function Pw(t){}function kw(t){}function Ow(){return null}function Nw(){}function Dw(t,e){return null}function Vw(){return pm().slots}function Mw(){return pm().attrs}function pm(){const t=Hn();return t.setupContext||(t.setupContext=Xm(t))}function to(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Lw(t,e){const n=to(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?se(s)||fe(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function xw(t,e){return!t||!e?t||e:se(t)&&se(e)?t.concat(e):Ue({},to(t),to(e))}function Fw(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Uw(t){const e=Hn();let n=t();return Xl(),Du(n)&&(n=n.catch(r=>{throw zr(e),r})),[n,()=>zr(e)]}let Wl=!0;function Bw(t){const e=Yu(t),n=t.proxy,r=t.ctx;Wl=!1,e.beforeCreate&&cf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:w,updated:S,activated:V,deactivated:D,beforeDestroy:F,beforeUnmount:P,destroyed:C,unmounted:O,render:x,renderTracked:N,renderTriggered:b,errorCaptured:v,serverPrefetch:m,expose:y,inheritAttrs:T,components:I,directives:E,filters:de}=e;if(u&&$w(u,r,null),o)for(const Q in o){const W=o[Q];fe(W)&&(r[Q]=W.bind(n))}if(s){const Q=s.call(n,n);De(Q)&&(t.data=yo(Q))}if(Wl=!0,i)for(const Q in i){const W=i[Q],$e=fe(W)?W.bind(n,n):fe(W.get)?W.get.bind(n,n):Pt,Zt=!fe(W)&&fe(W.set)?W.set.bind(n):Pt,qt=zt({get:$e,set:Zt});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>qt.value,set:je=>qt.value=je})}if(c)for(const Q in c)gm(c[Q],r,n,Q);if(l){const Q=fe(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(W=>{Ds(W,Q[W])})}d&&cf(d,t,"c");function G(Q,W){se(W)?W.forEach($e=>Q($e.bind(n))):W&&Q(W.bind(n))}if(G(am,p),G(ei,g),G(cm,w),G(vc,S),G(Mm,V),G(Lm,D),G(dm,v),G(hm,N),G(um,b),G(Ec,P),G(Tc,O),G(lm,m),se(y))if(y.length){const Q=t.exposed||(t.exposed={});y.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:$e=>n[W]=$e})})}else t.exposed||(t.exposed={});x&&t.render===Pt&&(t.render=x),T!=null&&(t.inheritAttrs=T),I&&(t.components=I),E&&(t.directives=E)}function $w(t,e,n=Pt){se(t)&&(t=zl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Bt(s.from||r,s.default,!0):i=Bt(s.from||r):i=Bt(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function cf(t,e,n){Ut(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function gm(t,e,n,r){const s=r.includes(".")?Vm(n,r):()=>n[r];if(Be(t)){const i=e[t];fe(i)&&Vs(s,i)}else if(fe(t))Vs(s,t.bind(n));else if(De(t))if(se(t))t.forEach(i=>gm(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Vs(s,i,t)}}function Yu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Fa(l,u,o,!0)),Fa(l,e,o)),De(e)&&i.set(e,l),l}function Fa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fa(t,i,n,!0),s&&s.forEach(o=>Fa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=jw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const jw={data:lf,props:uf,emits:uf,methods:Si,computed:Si,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:Si,directives:Si,watch:Hw,provide:lf,inject:qw};function lf(t,e){return e?t?function(){return Ue(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function qw(t,e){return Si(zl(t),zl(e))}function zl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Si(t,e){return t?Ue(Object.create(null),t,e):e}function uf(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Ue(Object.create(null),to(t),to(e??{})):e}function Hw(t,e){if(!t)return e;if(!e)return t;const n=Ue(Object.create(null),t);for(const r in e)n[r]=bt(t[r],e[r]);return n}function mm(){return{app:null,config:{isNativeTag:tT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kw=0;function Ww(t,e){return function(r,s=null){fe(r)||(r=Ue({},r)),s!=null&&!De(s)&&(s=null);const i=mm(),o=new WeakSet;let c=!1;const l=i.app={_uid:Kw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:e_,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&fe(u.install)?(o.add(u),u.install(l,...d)):fe(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const g=Ce(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Ao(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Ns;Ns=l;try{return u()}finally{Ns=d}}};return l}}let Ns=null;function Ds(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function Bt(t,e,n=!1){const r=tt||nt;if(r||Ns){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ns._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function zw(){return!!(tt||nt||Ns)}const _m={},ym=()=>Object.create(_m),vm=t=>Object.getPrototypeOf(t)===_m;function Gw(t,e,n,r=!1){const s={},i=ym();t.propsDefaults=Object.create(null),Em(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Uu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Qw(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(mc(t.emitsOptions,g))continue;const w=e[g];if(l)if(be(i,g))w!==i[g]&&(i[g]=w,u=!0);else{const S=Rt(g);s[S]=Gl(l,c,S,w,t,!1)}else w!==i[g]&&(i[g]=w,u=!0)}}}else{Em(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!be(e,p)&&((d=Ft(p))===p||!be(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Gl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&Vn(t.attrs,"set","")}function Em(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Rs(l))continue;const u=e[l];let d;s&&be(s,d=Rt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:mc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Gl(s,l,p,u[p],t,!be(u,p))}}return o}function Gl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=zr(s);r=u[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}function Tm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const d=p=>{l=!0;const[g,w]=Tm(p,e,!0);Ue(o,g),w&&c.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return De(t)&&r.set(t,As),As;if(se(i))for(let d=0;d<i.length;d++){const p=Rt(i[d]);hf(p)&&(o[p]=Oe)}else if(i)for(const d in i){const p=Rt(d);if(hf(p)){const g=i[d],w=o[p]=se(g)||fe(g)?{type:g}:Ue({},g);if(w){const S=pf(Boolean,w.type),V=pf(String,w.type);w[0]=S>-1,w[1]=V<0||S<V,(S>-1||be(w,"default"))&&c.push(p)}}}const u=[o,c];return De(t)&&r.set(t,u),u}function hf(t){return t[0]!=="$"&&!Rs(t)}function df(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function ff(t,e){return df(t)===df(e)}function pf(t,e){return se(e)?e.findIndex(n=>ff(n,t)):fe(e)&&ff(e,t)?0:-1}const wm=t=>t[0]==="_"||t==="$stable",Ju=t=>se(t)?t.map(xt):[xt(t)],Yw=(t,e,n)=>{if(e._n)return e;const r=mn((...s)=>Ju(e(...s)),n);return r._c=!1,r},Im=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wm(s))continue;const i=t[s];if(fe(i))e[s]=Yw(s,i,r);else if(i!=null){const o=Ju(i);e[s]=()=>o}}},Am=(t,e)=>{const n=Ju(e);t.slots.default=()=>n},Jw=(t,e)=>{const n=t.slots=ym();if(t.vnode.shapeFlag&32){const r=e._;r?(Ue(n,e),Sg(n,"_",r,!0)):Im(e,n)}else e&&Am(t,e)},Xw=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Ue(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Im(e,s)),o=e}else e&&(Am(t,e),o={default:1});if(i)for(const c in s)!wm(c)&&o[c]==null&&delete s[c]};function Ua(t,e,n,r,s=!1){if(se(t)){t.forEach((g,w)=>Ua(g,e&&(se(e)?e[w]:e),n,r,s));return}if($r(r)&&!s)return;const i=r.shapeFlag&4?Ao(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Oe?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Be(u)?(d[u]=null,be(p,u)&&(p[u]=null)):ze(u)&&(u.value=null)),fe(l))Mn(l,c,12,[o,d]);else{const g=Be(l),w=ze(l);if(g||w){const S=()=>{if(t.f){const V=g?be(p,l)?p[l]:d[l]:l.value;s?se(V)&&Nu(V,i):se(V)?V.includes(i)||V.push(i):g?(d[l]=[i],be(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,be(p,l)&&(p[l]=o)):w&&(l.value=o,t.k&&(d[t.k]=o))};o?(S.id=-1,it(S,n)):S()}}}let gf=!1;const ys=()=>{gf||(console.error("Hydration completed but contains mismatches."),gf=!0)},Zw=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",eI=t=>t.namespaceURI.includes("MathML"),ia=t=>{if(Zw(t))return"svg";if(eI(t))return"mathml"},oa=t=>t.nodeType===8;function tI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,d=(C,O)=>{if(!O.hasChildNodes()){n(null,C,O),xa(),O._vnode=C;return}p(O.firstChild,C,null,null,null),xa(),O._vnode=C},p=(C,O,x,N,b,v=!1)=>{v=v||!!O.dynamicChildren;const m=oa(C)&&C.data==="[",y=()=>V(C,O,x,N,b,m),{type:T,ref:I,shapeFlag:E,patchFlag:de}=O;let ye=C.nodeType;O.el=C,de===-2&&(v=!1,O.dynamicChildren=null);let G=null;switch(T){case Kr:ye!==3?O.children===""?(l(O.el=s(""),o(C),C),G=C):G=y():(C.data!==O.children&&(ys(),C.data=O.children),G=i(C));break;case at:P(C)?(G=i(C),F(O.el=C.content.firstChild,C,x)):ye!==8||m?G=y():G=i(C);break;case jr:if(m&&(C=i(C),ye=C.nodeType),ye===1||ye===3){G=C;const Q=!O.children.length;for(let W=0;W<O.staticCount;W++)Q&&(O.children+=G.nodeType===1?G.outerHTML:G.data),W===O.staticCount-1&&(O.anchor=G),G=i(G);return m?i(G):G}else y();break;case Qe:m?G=S(C,O,x,N,b,v):G=y();break;default:if(E&1)(ye!==1||O.type.toLowerCase()!==C.tagName.toLowerCase())&&!P(C)?G=y():G=g(C,O,x,N,b,v);else if(E&6){O.slotScopeIds=b;const Q=o(C);if(m?G=D(C):oa(C)&&C.data==="teleport start"?G=D(C,C.data,"teleport end"):G=i(C),e(O,Q,null,x,N,ia(Q),v),$r(O)){let W;m?(W=Ce(Qe),W.anchor=G?G.previousSibling:Q.lastChild):W=C.nodeType===3?gr(""):Ce("div"),W.el=C,O.component.subTree=W}}else E&64?ye!==8?G=y():G=O.type.hydrate(C,O,x,N,b,v,t,w):E&128&&(G=O.type.hydrate(C,O,x,N,ia(o(C)),b,v,t,p))}return I!=null&&Ua(I,null,N,O),G},g=(C,O,x,N,b,v)=>{v=v||!!O.dynamicChildren;const{type:m,props:y,patchFlag:T,shapeFlag:I,dirs:E,transition:de}=O,ye=m==="input"||m==="option";if(ye||T!==-1){E&&pn(O,null,x,"created");let G=!1;if(P(C)){G=Cm(N,de)&&x&&x.vnode.props&&x.vnode.props.appear;const W=C.content.firstChild;G&&de.beforeEnter(W),F(W,C,x),O.el=C=W}if(I&16&&!(y&&(y.innerHTML||y.textContent))){let W=w(C.firstChild,O,C,x,N,b,v);for(;W;){ys();const $e=W;W=W.nextSibling,c($e)}}else I&8&&C.textContent!==O.children&&(ys(),C.textContent=O.children);if(y)if(ye||!v||T&48)for(const W in y)(ye&&(W.endsWith("value")||W==="indeterminate")||go(W)&&!Rs(W)||W[0]===".")&&r(C,W,null,y[W],void 0,void 0,x);else y.onClick&&r(C,"onClick",null,y.onClick,void 0,void 0,x);let Q;(Q=y&&y.onVnodeBeforeMount)&&St(Q,x,O),E&&pn(O,null,x,"beforeMount"),((Q=y&&y.onVnodeMounted)||E||G)&&om(()=>{Q&&St(Q,x,O),G&&de.enter(C),E&&pn(O,null,x,"mounted")},N)}return C.nextSibling},w=(C,O,x,N,b,v,m)=>{m=m||!!O.dynamicChildren;const y=O.children,T=y.length;for(let I=0;I<T;I++){const E=m?y[I]:y[I]=xt(y[I]);C?C=p(C,E,N,b,v,m):E.type===Kr&&!E.children?l(E.el=s(""),x):(ys(),n(null,E,x,null,N,b,ia(x),v))}return C},S=(C,O,x,N,b,v)=>{const{slotScopeIds:m}=O;m&&(b=b?b.concat(m):m);const y=o(C),T=w(i(C),O,y,x,N,b,v);return T&&oa(T)&&T.data==="]"?i(O.anchor=T):(ys(),l(O.anchor=u("]"),y,T),T)},V=(C,O,x,N,b,v)=>{if(ys(),O.el=null,v){const T=D(C);for(;;){const I=i(C);if(I&&I!==T)c(I);else break}}const m=i(C),y=o(C);return c(C),n(null,O,y,m,x,N,ia(y),b),m},D=(C,O="[",x="]")=>{let N=0;for(;C;)if(C=i(C),C&&oa(C)&&(C.data===O&&N++,C.data===x)){if(N===0)return i(C);N--}return C},F=(C,O,x)=>{const N=O.parentNode;N&&N.replaceChild(C,O);let b=x;for(;b;)b.vnode.el===O&&(b.vnode.el=b.subTree.el=C),b=b.parent},P=C=>C.nodeType===1&&C.tagName.toLowerCase()==="template";return[d,p]}const it=om;function bm(t){return Sm(t)}function Rm(t){return Sm(t,tI)}function Sm(t,e){const n=Cg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:w=Pt,insertStaticContent:S}=t,V=(A,R,M,$=null,U=null,Y=null,Z=void 0,z=null,J=!!R.dynamicChildren)=>{if(A===R)return;A&&!tn(A,R)&&($=B(A),je(A,U,Y,!0),A=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:q,ref:te,shapeFlag:le}=R;switch(q){case Kr:D(A,R,M,$);break;case at:F(A,R,M,$);break;case jr:A==null&&P(R,M,$,Z);break;case Qe:I(A,R,M,$,U,Y,Z,z,J);break;default:le&1?x(A,R,M,$,U,Y,Z,z,J):le&6?E(A,R,M,$,U,Y,Z,z,J):(le&64||le&128)&&q.process(A,R,M,$,U,Y,Z,z,J,ie)}te!=null&&U&&Ua(te,A&&A.ref,Y,R||A,!R)},D=(A,R,M,$)=>{if(A==null)r(R.el=c(R.children),M,$);else{const U=R.el=A.el;R.children!==A.children&&u(U,R.children)}},F=(A,R,M,$)=>{A==null?r(R.el=l(R.children||""),M,$):R.el=A.el},P=(A,R,M,$)=>{[A.el,A.anchor]=S(A.children,R,M,$,A.el,A.anchor)},C=({el:A,anchor:R},M,$)=>{let U;for(;A&&A!==R;)U=g(A),r(A,M,$),A=U;r(R,M,$)},O=({el:A,anchor:R})=>{let M;for(;A&&A!==R;)M=g(A),s(A),A=M;s(R)},x=(A,R,M,$,U,Y,Z,z,J)=>{R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),A==null?N(R,M,$,U,Y,Z,z,J):m(A,R,U,Y,Z,z,J)},N=(A,R,M,$,U,Y,Z,z)=>{let J,q;const{props:te,shapeFlag:le,transition:ce,dirs:ae}=A;if(J=A.el=o(A.type,Y,te&&te.is,te),le&8?d(J,A.children):le&16&&v(A.children,J,null,$,U,pl(A,Y),Z,z),ae&&pn(A,null,$,"created"),b(J,A,A.scopeId,Z,$),te){for(const Pe in te)Pe!=="value"&&!Rs(Pe)&&i(J,Pe,null,te[Pe],Y,A.children,$,U,st);"value"in te&&i(J,"value",null,te.value,Y),(q=te.onVnodeBeforeMount)&&St(q,$,A)}ae&&pn(A,null,$,"beforeMount");const he=Cm(U,ce);he&&ce.beforeEnter(J),r(J,R,M),((q=te&&te.onVnodeMounted)||he||ae)&&it(()=>{q&&St(q,$,A),he&&ce.enter(J),ae&&pn(A,null,$,"mounted")},U)},b=(A,R,M,$,U)=>{if(M&&w(A,M),$)for(let Y=0;Y<$.length;Y++)w(A,$[Y]);if(U){let Y=U.subTree;if(R===Y){const Z=U.vnode;b(A,Z,Z.scopeId,Z.slotScopeIds,U.parent)}}},v=(A,R,M,$,U,Y,Z,z,J=0)=>{for(let q=J;q<A.length;q++){const te=A[q]=z?ar(A[q]):xt(A[q]);V(null,te,R,M,$,U,Y,Z,z)}},m=(A,R,M,$,U,Y,Z)=>{const z=R.el=A.el;let{patchFlag:J,dynamicChildren:q,dirs:te}=R;J|=A.patchFlag&16;const le=A.props||Oe,ce=R.props||Oe;let ae;if(M&&Nr(M,!1),(ae=ce.onVnodeBeforeUpdate)&&St(ae,M,R,A),te&&pn(R,A,M,"beforeUpdate"),M&&Nr(M,!0),q?y(A.dynamicChildren,q,z,M,$,pl(R,U),Y):Z||W(A,R,z,null,M,$,pl(R,U),Y,!1),J>0){if(J&16)T(z,R,le,ce,M,$,U);else if(J&2&&le.class!==ce.class&&i(z,"class",null,ce.class,U),J&4&&i(z,"style",le.style,ce.style,U),J&8){const he=R.dynamicProps;for(let Pe=0;Pe<he.length;Pe++){const Ae=he[Pe],Ge=le[Ae],Dt=ce[Ae];(Dt!==Ge||Ae==="value")&&i(z,Ae,Ge,Dt,U,A.children,M,$,st)}}J&1&&A.children!==R.children&&d(z,R.children)}else!Z&&q==null&&T(z,R,le,ce,M,$,U);((ae=ce.onVnodeUpdated)||te)&&it(()=>{ae&&St(ae,M,R,A),te&&pn(R,A,M,"updated")},$)},y=(A,R,M,$,U,Y,Z)=>{for(let z=0;z<R.length;z++){const J=A[z],q=R[z],te=J.el&&(J.type===Qe||!tn(J,q)||J.shapeFlag&70)?p(J.el):M;V(J,q,te,null,$,U,Y,Z,!0)}},T=(A,R,M,$,U,Y,Z)=>{if(M!==$){if(M!==Oe)for(const z in M)!Rs(z)&&!(z in $)&&i(A,z,M[z],null,Z,R.children,U,Y,st);for(const z in $){if(Rs(z))continue;const J=$[z],q=M[z];J!==q&&z!=="value"&&i(A,z,q,J,Z,R.children,U,Y,st)}"value"in $&&i(A,"value",M.value,$.value,Z)}},I=(A,R,M,$,U,Y,Z,z,J)=>{const q=R.el=A?A.el:c(""),te=R.anchor=A?A.anchor:c("");let{patchFlag:le,dynamicChildren:ce,slotScopeIds:ae}=R;ae&&(z=z?z.concat(ae):ae),A==null?(r(q,M,$),r(te,M,$),v(R.children||[],M,te,U,Y,Z,z,J)):le>0&&le&64&&ce&&A.dynamicChildren?(y(A.dynamicChildren,ce,M,U,Y,Z,z),(R.key!=null||U&&R===U.subTree)&&Xu(A,R,!0)):W(A,R,M,te,U,Y,Z,z,J)},E=(A,R,M,$,U,Y,Z,z,J)=>{R.slotScopeIds=z,A==null?R.shapeFlag&512?U.ctx.activate(R,M,$,Z,J):de(R,M,$,U,Y,Z,J):ye(A,R,J)},de=(A,R,M,$,U,Y,Z)=>{const z=A.component=Gm(A,$,U);if(wo(A)&&(z.ctx.renderer=ie),Ym(z),z.asyncDep){if(U&&U.registerDep(z,G,Z),!A.el){const J=z.subTree=Ce(at);F(null,J,R,M)}}else G(z,A,R,M,U,Y,Z)},ye=(A,R,M)=>{const $=R.component=A.component;if(dw(A,R,M))if($.asyncDep&&!$.asyncResolved){Q($,R,M);return}else $.next=R,iw($.update),$.effect.dirty=!0,$.update();else R.el=A.el,$.vnode=R},G=(A,R,M,$,U,Y,Z)=>{const z=()=>{if(A.isMounted){let{next:te,bu:le,u:ce,parent:ae,vnode:he}=A;{const Ht=Pm(A);if(Ht){te&&(te.el=he.el,Q(A,te,Z)),Ht.asyncDep.then(()=>{A.isUnmounted||z()});return}}let Pe=te,Ae;Nr(A,!1),te?(te.el=he.el,Q(A,te,Z)):te=he,le&&Ss(le),(Ae=te.props&&te.props.onVnodeBeforeUpdate)&&St(Ae,ae,te,he),Nr(A,!0);const Ge=va(A),Dt=A.subTree;A.subTree=Ge,V(Dt,Ge,p(Dt.el),B(Dt),A,U,Y),te.el=Ge.el,Pe===null&&Wu(A,Ge.el),ce&&it(ce,U),(Ae=te.props&&te.props.onVnodeUpdated)&&it(()=>St(Ae,ae,te,he),U)}else{let te;const{el:le,props:ce}=R,{bm:ae,m:he,parent:Pe}=A,Ae=$r(R);if(Nr(A,!1),ae&&Ss(ae),!Ae&&(te=ce&&ce.onVnodeBeforeMount)&&St(te,Pe,R),Nr(A,!0),le&&Ne){const Ge=()=>{A.subTree=va(A),Ne(le,A.subTree,A,U,null)};Ae?R.type.__asyncLoader().then(()=>!A.isUnmounted&&Ge()):Ge()}else{const Ge=A.subTree=va(A);V(null,Ge,M,$,A,U,Y),R.el=Ge.el}if(he&&it(he,U),!Ae&&(te=ce&&ce.onVnodeMounted)){const Ge=R;it(()=>St(te,Pe,Ge),U)}(R.shapeFlag&256||Pe&&$r(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&A.a&&it(A.a,U),A.isMounted=!0,R=M=$=null}},J=A.effect=new Us(z,Pt,()=>gc(q),A.scope),q=A.update=()=>{J.dirty&&J.run()};q.id=A.uid,Nr(A,!0),q()},Q=(A,R,M)=>{R.component=A;const $=A.vnode.props;A.vnode=R,A.next=null,Qw(A,R.props,$,M),Xw(A,R.children,M),Rr(),rf(A),Sr()},W=(A,R,M,$,U,Y,Z,z,J=!1)=>{const q=A&&A.children,te=A?A.shapeFlag:0,le=R.children,{patchFlag:ce,shapeFlag:ae}=R;if(ce>0){if(ce&128){Zt(q,le,M,$,U,Y,Z,z,J);return}else if(ce&256){$e(q,le,M,$,U,Y,Z,z,J);return}}ae&8?(te&16&&st(q,U,Y),le!==q&&d(M,le)):te&16?ae&16?Zt(q,le,M,$,U,Y,Z,z,J):st(q,U,Y,!0):(te&8&&d(M,""),ae&16&&v(le,M,$,U,Y,Z,z,J))},$e=(A,R,M,$,U,Y,Z,z,J)=>{A=A||As,R=R||As;const q=A.length,te=R.length,le=Math.min(q,te);let ce;for(ce=0;ce<le;ce++){const ae=R[ce]=J?ar(R[ce]):xt(R[ce]);V(A[ce],ae,M,null,U,Y,Z,z,J)}q>te?st(A,U,Y,!0,!1,le):v(R,M,$,U,Y,Z,z,J,le)},Zt=(A,R,M,$,U,Y,Z,z,J)=>{let q=0;const te=R.length;let le=A.length-1,ce=te-1;for(;q<=le&&q<=ce;){const ae=A[q],he=R[q]=J?ar(R[q]):xt(R[q]);if(tn(ae,he))V(ae,he,M,null,U,Y,Z,z,J);else break;q++}for(;q<=le&&q<=ce;){const ae=A[le],he=R[ce]=J?ar(R[ce]):xt(R[ce]);if(tn(ae,he))V(ae,he,M,null,U,Y,Z,z,J);else break;le--,ce--}if(q>le){if(q<=ce){const ae=ce+1,he=ae<te?R[ae].el:$;for(;q<=ce;)V(null,R[q]=J?ar(R[q]):xt(R[q]),M,he,U,Y,Z,z,J),q++}}else if(q>ce)for(;q<=le;)je(A[q],U,Y,!0),q++;else{const ae=q,he=q,Pe=new Map;for(q=he;q<=ce;q++){const It=R[q]=J?ar(R[q]):xt(R[q]);It.key!=null&&Pe.set(It.key,q)}let Ae,Ge=0;const Dt=ce-he+1;let Ht=!1,ci=0;const Qn=new Array(Dt);for(q=0;q<Dt;q++)Qn[q]=0;for(q=ae;q<=le;q++){const It=A[q];if(Ge>=Dt){je(It,U,Y,!0);continue}let Kt;if(It.key!=null)Kt=Pe.get(It.key);else for(Ae=he;Ae<=ce;Ae++)if(Qn[Ae-he]===0&&tn(It,R[Ae])){Kt=Ae;break}Kt===void 0?je(It,U,Y,!0):(Qn[Kt-he]=q+1,Kt>=ci?ci=Kt:Ht=!0,V(It,R[Kt],M,null,U,Y,Z,z,J),Ge++)}const ds=Ht?nI(Qn):As;for(Ae=ds.length-1,q=Dt-1;q>=0;q--){const It=he+q,Kt=R[It],fs=It+1<te?R[It+1].el:$;Qn[q]===0?V(null,Kt,M,fs,U,Y,Z,z,J):Ht&&(Ae<0||q!==ds[Ae]?qt(Kt,M,fs,2):Ae--)}}},qt=(A,R,M,$,U=null)=>{const{el:Y,type:Z,transition:z,children:J,shapeFlag:q}=A;if(q&6){qt(A.component.subTree,R,M,$);return}if(q&128){A.suspense.move(R,M,$);return}if(q&64){Z.move(A,R,M,ie);return}if(Z===Qe){r(Y,R,M);for(let le=0;le<J.length;le++)qt(J[le],R,M,$);r(A.anchor,R,M);return}if(Z===jr){C(A,R,M);return}if($!==2&&q&1&&z)if($===0)z.beforeEnter(Y),r(Y,R,M),it(()=>z.enter(Y),U);else{const{leave:le,delayLeave:ce,afterLeave:ae}=z,he=()=>r(Y,R,M),Pe=()=>{le(Y,()=>{he(),ae&&ae()})};ce?ce(Y,he,Pe):Pe()}else r(Y,R,M)},je=(A,R,M,$=!1,U=!1)=>{const{type:Y,props:Z,ref:z,children:J,dynamicChildren:q,shapeFlag:te,patchFlag:le,dirs:ce,memoIndex:ae}=A;if(z!=null&&Ua(z,null,M,A,!0),ae!=null&&(R.renderCache[ae]=void 0),te&256){R.ctx.deactivate(A);return}const he=te&1&&ce,Pe=!$r(A);let Ae;if(Pe&&(Ae=Z&&Z.onVnodeBeforeUnmount)&&St(Ae,R,A),te&6)hn(A.component,M,$);else{if(te&128){A.suspense.unmount(M,$);return}he&&pn(A,null,R,"beforeUnmount"),te&64?A.type.remove(A,R,M,U,ie,$):q&&(Y!==Qe||le>0&&le&64)?st(q,R,M,!1,!0):(Y===Qe&&le&384||!U&&te&16)&&st(J,R,M),$&&qe(A)}(Pe&&(Ae=Z&&Z.onVnodeUnmounted)||he)&&it(()=>{Ae&&St(Ae,R,A),he&&pn(A,null,R,"unmounted")},M)},qe=A=>{const{type:R,el:M,anchor:$,transition:U}=A;if(R===Qe){Gn(M,$);return}if(R===jr){O(A);return}const Y=()=>{s(M),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(A.shapeFlag&1&&U&&!U.persisted){const{leave:Z,delayLeave:z}=U,J=()=>Z(M,Y);z?z(A.el,Y,J):J()}else Y()},Gn=(A,R)=>{let M;for(;A!==R;)M=g(A),s(A),A=M;s(R)},hn=(A,R,M)=>{const{bum:$,scope:U,update:Y,subTree:Z,um:z,m:J,a:q}=A;Ba(J),Ba(q),$&&Ss($),U.stop(),Y&&(Y.active=!1,je(Z,A,R,M)),z&&it(z,R),it(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},st=(A,R,M,$=!1,U=!1,Y=0)=>{for(let Z=Y;Z<A.length;Z++)je(A[Z],R,M,$,U)},B=A=>A.shapeFlag&6?B(A.component.subTree):A.shapeFlag&128?A.suspense.next():g(A.anchor||A.el);let ne=!1;const ee=(A,R,M)=>{A==null?R._vnode&&je(R._vnode,null,null,!0):V(R._vnode||null,A,R,null,null,null,M),ne||(ne=!0,rf(),xa(),ne=!1),R._vnode=A},ie={p:V,um:je,m:qt,r:qe,mt:de,mc:v,pc:W,pbc:y,n:B,o:t};let Ee,Ne;return e&&([Ee,Ne]=e(ie)),{render:ee,hydrate:Ee,createApp:Ww(ee,Ee)}}function pl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xu(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ar(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Xu(o,c)),c.type===Kr&&(c.el=o.el)}}function nI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Pm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Pm(e)}function Ba(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const km=Symbol.for("v-scx"),Om=()=>Bt(km);function rI(t,e){return To(t,null,e)}function Nm(t,e){return To(t,null,{flush:"post"})}function Dm(t,e){return To(t,null,{flush:"sync"})}const aa={};function Vs(t,e,n){return To(t,e,n)}function To(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Oe){if(e&&i){const N=e;e=(...b)=>{N(...b),x()}}const l=tt,u=N=>r===!0?N:lr(N,r===!1?1:void 0);let d,p=!1,g=!1;if(ze(t)?(d=()=>t.value,p=Qi(t)):Cs(t)?(d=()=>u(t),p=!0):se(t)?(g=!0,p=t.some(N=>Cs(N)||Qi(N)),d=()=>t.map(N=>{if(ze(N))return N.value;if(Cs(N))return u(N);if(fe(N))return Mn(N,l,2)})):fe(t)?e?d=()=>Mn(t,l,2):d=()=>(w&&w(),Ut(t,l,3,[S])):d=Pt,e&&r){const N=d;d=()=>lr(N())}let w,S=N=>{w=C.onStop=()=>{Mn(N,l,4),w=C.onStop=void 0}},V;if(Io)if(S=Pt,e?n&&Ut(e,l,3,[d(),g?[]:void 0,S]):d(),s==="sync"){const N=Om();V=N.__watcherHandles||(N.__watcherHandles=[])}else return Pt;let D=g?new Array(t.length).fill(aa):aa;const F=()=>{if(!(!C.active||!C.dirty))if(e){const N=C.run();(r||p||(g?N.some((b,v)=>on(b,D[v])):on(N,D)))&&(w&&w(),Ut(e,l,3,[N,D===aa?void 0:g&&D[0]===aa?[]:D,S]),D=N)}else C.run()};F.allowRecurse=!!e;let P;s==="sync"?P=F:s==="post"?P=()=>it(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),P=()=>gc(F));const C=new Us(d,Pt,P),O=Ng(),x=()=>{C.stop(),O&&Nu(O.effects,C)};return e?n?F():D=C.run():s==="post"?it(C.run.bind(C),l&&l.suspense):C.run(),V&&V.push(x),x}function sI(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Vm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=zr(this),c=To(s,i.bind(r),n);return o(),c}function Vm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function lr(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ze(t))lr(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)lr(t[r],e,n);else if(rs(t)||bs(t))t.forEach(r=>{lr(r,e,n)});else if(Rg(t)){for(const r in t)lr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&lr(t[r],e,n)}return t}const wo=t=>t.type.__isKeepAlive,iI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Hn(),r=n.ctx;if(!r.renderer)return()=>{const P=e.default&&e.default();return P&&P.length===1?P[0]:P};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:d,o:{createElement:p}}}=r,g=p("div");r.activate=(P,C,O,x,N)=>{const b=P.component;u(P,C,O,0,c),l(b.vnode,P,C,O,b,c,x,P.slotScopeIds,N),it(()=>{b.isDeactivated=!1,b.a&&Ss(b.a);const v=P.props&&P.props.onVnodeMounted;v&&St(v,b.parent,P)},c)},r.deactivate=P=>{const C=P.component;Ba(C.m),Ba(C.a),u(P,g,null,1,c),it(()=>{C.da&&Ss(C.da);const O=P.props&&P.props.onVnodeUnmounted;O&&St(O,C.parent,P),C.isDeactivated=!0},c)};function w(P){gl(P),d(P,n,c,!0)}function S(P){s.forEach((C,O)=>{const x=tu(C.type);x&&(!P||!P(x))&&V(O)})}function V(P){const C=s.get(P);!o||!tn(C,o)?w(C):o&&gl(o),s.delete(P),i.delete(P)}Vs(()=>[t.include,t.exclude],([P,C])=>{P&&S(O=>Ci(P,O)),C&&S(O=>!Ci(C,O))},{flush:"post",deep:!0});let D=null;const F=()=>{D!=null&&(jl(n.subTree.type)?it(()=>{s.set(D,ca(n.subTree))},n.subTree.suspense):s.set(D,ca(n.subTree)))};return ei(F),vc(F),Ec(()=>{s.forEach(P=>{const{subTree:C,suspense:O}=n,x=ca(C);if(P.type===x.type&&P.key===x.key){gl(x);const N=x.component.da;N&&it(N,O);return}w(P)})}),()=>{if(D=null,!e.default)return null;const P=e.default(),C=P[0];if(P.length>1)return o=null,P;if(!Tr(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return o=null,C;let O=ca(C);const x=O.type,N=tu($r(O)?O.type.__asyncResolved||{}:x),{include:b,exclude:v,max:m}=t;if(b&&(!N||!Ci(b,N))||v&&N&&Ci(v,N))return o=O,C;const y=O.key==null?x:O.key,T=s.get(y);return O.el&&(O=Tn(O),C.shapeFlag&128&&(C.ssContent=O)),D=y,T?(O.el=T.el,O.component=T.component,O.transition&&Er(O,O.transition),O.shapeFlag|=512,i.delete(y),i.add(y)):(i.add(y),m&&i.size>parseInt(m,10)&&V(i.values().next().value)),O.shapeFlag|=256,o=O,jl(C.type)?C:O}}},oI=iI;function Ci(t,e){return se(t)?t.some(n=>Ci(n,e)):Be(t)?t.split(",").includes(e):rT(t)?t.test(e):!1}function Mm(t,e){xm(t,"a",e)}function Lm(t,e){xm(t,"da",e)}function xm(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(yc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wo(s.parent.vnode)&&aI(r,e,n,s),s=s.parent}}function aI(t,e,n,r){const s=yc(e,t,r,!0);Tc(()=>{Nu(r[e],s)},n)}function gl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ca(t){return t.shapeFlag&128?t.ssContent:t}const or=Symbol("_leaveCb"),la=Symbol("_enterCb");function Zu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ei(()=>{t.isMounted=!0}),Ec(()=>{t.isUnmounting=!0}),t}const Wt=[Function,Array],eh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Wt,onEnter:Wt,onAfterEnter:Wt,onEnterCancelled:Wt,onBeforeLeave:Wt,onLeave:Wt,onAfterLeave:Wt,onLeaveCancelled:Wt,onBeforeAppear:Wt,onAppear:Wt,onAfterAppear:Wt,onAppearCancelled:Wt},Fm=t=>{const e=t.subTree;return e.component?Fm(e.component):e},cI={name:"BaseTransition",props:eh,setup(t,{slots:e}){const n=Hn(),r=Zu();return()=>{const s=e.default&&wc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==at){i=g;break}}const o=Ie(t),{mode:c}=o;if(r.isLeaving)return ml(i);const l=mf(i);if(!l)return ml(i);let u=$s(l,o,r,n,g=>u=g);Er(l,u);const d=n.subTree,p=d&&mf(d);if(p&&p.type!==at&&!tn(l,p)&&Fm(n).type!==at){const g=$s(p,o,r,n);if(Er(p,g),c==="out-in"&&l.type!==at)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},ml(i);c==="in-out"&&l.type!==at&&(g.delayLeave=(w,S,V)=>{const D=Bm(r,p);D[String(p.key)]=p,w[or]=()=>{S(),w[or]=void 0,delete u.delayedLeave},u.delayedLeave=V})}return i}}},Um=cI;function Bm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function $s(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:w,onAfterLeave:S,onLeaveCancelled:V,onBeforeAppear:D,onAppear:F,onAfterAppear:P,onAppearCancelled:C}=e,O=String(t.key),x=Bm(n,t),N=(m,y)=>{m&&Ut(m,r,9,y)},b=(m,y)=>{const T=y[1];N(m,y),se(m)?m.every(I=>I.length<=1)&&T():m.length<=1&&T()},v={mode:o,persisted:c,beforeEnter(m){let y=l;if(!n.isMounted)if(i)y=D||l;else return;m[or]&&m[or](!0);const T=x[O];T&&tn(t,T)&&T.el[or]&&T.el[or](),N(y,[m])},enter(m){let y=u,T=d,I=p;if(!n.isMounted)if(i)y=F||u,T=P||d,I=C||p;else return;let E=!1;const de=m[la]=ye=>{E||(E=!0,ye?N(I,[m]):N(T,[m]),v.delayedLeave&&v.delayedLeave(),m[la]=void 0)};y?b(y,[m,de]):de()},leave(m,y){const T=String(t.key);if(m[la]&&m[la](!0),n.isUnmounting)return y();N(g,[m]);let I=!1;const E=m[or]=de=>{I||(I=!0,y(),de?N(V,[m]):N(S,[m]),m[or]=void 0,x[T]===t&&delete x[T])};x[T]=t,w?b(w,[m,E]):E()},clone(m){const y=$s(m,e,n,r,s);return s&&s(y),y}};return v}function ml(t){if(wo(t))return t=Tn(t),t.children=null,t}function mf(t){if(!wo(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function Er(t,e){t.shapeFlag&6&&t.component?Er(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Qe?(o.patchFlag&128&&s++,r=r.concat(wc(o.children,e,c))):(e||o.type!==at)&&r.push(c!=null?Tn(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const lI=t=>t.__isTeleport,xi=t=>t&&(t.disabled||t.disabled===""),_f=t=>typeof SVGElement<"u"&&t instanceof SVGElement,yf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ql=(t,e)=>{const n=t&&t.to;return Be(n)?e?e(n):null:n},uI={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:d,pc:p,pbc:g,o:{insert:w,querySelector:S,createText:V,createComment:D}}=u,F=xi(e.props);let{shapeFlag:P,children:C,dynamicChildren:O}=e;if(t==null){const x=e.el=V(""),N=e.anchor=V("");w(x,n,r),w(N,n,r);const b=e.target=Ql(e.props,S),v=e.targetAnchor=V("");b&&(w(v,b),o==="svg"||_f(b)?o="svg":(o==="mathml"||yf(b))&&(o="mathml"));const m=(y,T)=>{P&16&&d(C,y,T,s,i,o,c,l)};F?m(n,N):b&&m(b,v)}else{e.el=t.el;const x=e.anchor=t.anchor,N=e.target=t.target,b=e.targetAnchor=t.targetAnchor,v=xi(t.props),m=v?n:N,y=v?x:b;if(o==="svg"||_f(N)?o="svg":(o==="mathml"||yf(N))&&(o="mathml"),O?(g(t.dynamicChildren,O,m,s,i,o,c),Xu(t,e,!0)):l||p(t,e,m,y,s,i,o,c,!1),F)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ua(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const T=e.target=Ql(e.props,S);T&&ua(e,T,null,u,0)}else v&&ua(e,N,b,u,1)}$m(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:d,target:p,props:g}=t;if(p&&i(d),o&&i(u),c&16){const w=o||!xi(g);for(let S=0;S<l.length;S++){const V=l[S];s(V,e,n,w,!!V.dynamicChildren)}}},move:ua,hydrate:hI};function ua(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||xi(d))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function hI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const d=e.target=Ql(e.props,l);if(d){const p=d._lpa||d.firstChild;if(e.shapeFlag&16)if(xi(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let g=p;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,d,n,r,s,i)}$m(e)}return e.anchor&&o(e.anchor)}const dI=uI;function $m(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Qe=Symbol.for("v-fgt"),Kr=Symbol.for("v-txt"),at=Symbol.for("v-cmt"),jr=Symbol.for("v-stc"),Fi=[];let kt=null;function Me(t=!1){Fi.push(kt=t?null:[])}function jm(){Fi.pop(),kt=Fi[Fi.length-1]||null}let Wr=1;function Yl(t){Wr+=t}function qm(t){return t.dynamicChildren=Wr>0?kt||As:null,jm(),Wr>0&&kt&&kt.push(t),t}function Xe(t,e,n,r,s,i){return qm(K(t,e,n,r,s,i,!0))}function qr(t,e,n,r,s){return qm(Ce(t,e,n,r,s,!0))}function Tr(t){return t?t.__v_isVNode===!0:!1}function tn(t,e){return t.type===e.type&&t.key===e.key}function fI(t){}const Hm=({key:t})=>t??null,Ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||ze(t)||fe(t)?{i:nt,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hm(e),ref:e&&Ta(e),scopeId:_c,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nt};return c?(th(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Wr>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const Ce=pI;function pI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===sm)&&(t=at),Tr(t)){const c=Tn(t,e,!0);return n&&th(c,n),Wr>0&&!i&&kt&&(c.shapeFlag&6?kt[kt.indexOf(t)]=c:kt.push(c)),c.patchFlag=-2,c}if(TI(t)&&(t=t.__vccOpts),e){e=Km(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=Lt(c)),De(l)&&($u(l)&&!se(l)&&(l=Ue({},l)),e.style=_o(l))}const o=Be(t)?1:jl(t)?128:lI(t)?64:De(t)?4:fe(t)?2:0;return K(t,e,n,r,s,o,i,!0)}function Km(t){return t?$u(t)||vm(t)?Ue({},t):t:null}function Tn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?zm(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Hm(u),ref:e&&e.ref?n&&i?se(i)?i.concat(Ta(e)):[i,Ta(e)]:Ta(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Er(d,l.clone(d)),d}function gr(t=" ",e=0){return Ce(Kr,null,t,e)}function Wm(t,e){const n=Ce(jr,null,t);return n.staticCount=e,n}function kn(t="",e=!1){return e?(Me(),qr(at,null,t)):Ce(at,null,t)}function xt(t){return t==null||typeof t=="boolean"?Ce(at):se(t)?Ce(Qe,null,t.slice()):typeof t=="object"?ar(t):Ce(Kr,null,String(t))}function ar(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tn(t)}function th(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),th(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!vm(e)?e._ctx=nt:s===3&&nt&&(nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:nt},n=32):(e=String(e),r&64?(n=16,e=[gr(e)]):n=8);t.children=e,t.shapeFlag|=n}function zm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Lt([e.class,r.class]));else if(s==="style")e.style=_o([e.style,r.style]);else if(go(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function St(t,e,n,r=null){Ut(t,e,7,[n,r])}const gI=mm();let mI=0;function Gm(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gI,i={uid:mI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Tm(r,s),emitsOptions:nm(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=aw.bind(null,i),t.ce&&t.ce(i),i}let tt=null;const Hn=()=>tt||nt;let $a,Jl;{const t=Cg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$a=e("__VUE_INSTANCE_SETTERS__",n=>tt=n),Jl=e("__VUE_SSR_SETTERS__",n=>Io=n)}const zr=t=>{const e=tt;return $a(t),t.scope.on(),()=>{t.scope.off(),$a(e)}},Xl=()=>{tt&&tt.scope.off(),$a(null)};function Qm(t){return t.vnode.shapeFlag&4}let Io=!1;function Ym(t,e=!1){e&&Jl(e);const{props:n,children:r}=t.vnode,s=Qm(t);Gw(t,n,s,e),Jw(t,r);const i=s?_I(t,e):void 0;return e&&Jl(!1),i}function _I(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Kl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Xm(t):null,i=zr(t);Rr();const o=Mn(r,t,0,[t.props,s]);if(Sr(),i(),Du(o)){if(o.then(Xl,Xl),e)return o.then(c=>{Zl(t,c,e)}).catch(c=>{ss(c,t,0)});t.asyncDep=o}else Zl(t,o,e)}else Jm(t,e)}function Zl(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Hu(e)),Jm(t,n)}let ja,eu;function yI(t){ja=t,eu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Rw))}}const vI=()=>!ja;function Jm(t,e,n){const r=t.type;if(!t.render){if(!e&&ja&&!r.render){const s=r.template||Yu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Ue(Ue({isCustomElement:i,delimiters:c},o),l);r.render=ja(s,u)}}t.render=r.render||Pt,eu&&eu(t)}{const s=zr(t);Rr();try{Bw(t)}finally{Sr(),s()}}}const EI={get(t,e){return Nt(t,"get",""),t[e]}};function Xm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,EI),slots:t.slots,emit:t.emit,expose:e}}function Ao(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hu(Wg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Li)return Li[n](t)},has(e,n){return n in e||n in Li}})):t.proxy}function tu(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function TI(t){return fe(t)&&"__vccOpts"in t}const zt=(t,e)=>jT(t,e,Io);function wI(t,e,n=Oe){const r=Hn(),s=Rt(e),i=Ft(e),o=Yg((l,u)=>{let d;return Dm(()=>{const p=t[e];on(d,p)&&(d=p,u())}),{get(){return l(),n.get?n.get(d):d},set(p){const g=r.vnode.props;!(g&&(e in g||s in g||i in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g))&&on(p,d)&&(d=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function Ic(t,e,n){const r=arguments.length;return r===2?De(e)&&!se(e)?Tr(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Tr(n)&&(n=[n]),Ce(t,e,n))}function II(){}function AI(t,e,n,r){const s=n[r];if(s&&Zm(s,t))return s;const i=e();return i.memo=t.slice(),i.memoIndex=r,n[r]=i}function Zm(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(on(n[r],e[r]))return!1;return Wr>0&&kt&&kt.push(t),!0}const e_="3.4.29",bI=Pt,RI=nw,SI=vs,CI=tm,PI={createComponentInstance:Gm,setupComponent:Ym,renderComponentRoot:va,setCurrentRenderingInstance:Zi,isVNode:Tr,normalizeVNode:xt,getComponentPublicInstance:Ao},kI=PI,OI=null,NI=null,DI=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const VI="http://www.w3.org/2000/svg",MI="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,vf=Cn&&Cn.createElement("template"),LI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Cn.createElementNS(VI,t):e==="mathml"?Cn.createElementNS(MI,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{vf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=vf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},er="transition",wi="animation",js=Symbol("_vtc"),Ac=(t,{slots:e})=>Ic(Um,n_(t),e);Ac.displayName="Transition";const t_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xI=Ac.props=Ue({},eh,t_),Dr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ef=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function n_(t){const e={};for(const I in t)I in t_||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=t,S=FI(s),V=S&&S[0],D=S&&S[1],{onBeforeEnter:F,onEnter:P,onEnterCancelled:C,onLeave:O,onLeaveCancelled:x,onBeforeAppear:N=F,onAppear:b=P,onAppearCancelled:v=C}=e,m=(I,E,de)=>{sr(I,E?d:c),sr(I,E?u:o),de&&de()},y=(I,E)=>{I._isLeaving=!1,sr(I,p),sr(I,w),sr(I,g),E&&E()},T=I=>(E,de)=>{const ye=I?b:P,G=()=>m(E,I,de);Dr(ye,[E,G]),Tf(()=>{sr(E,I?l:i),Sn(E,I?d:c),Ef(ye)||wf(E,r,V,G)})};return Ue(e,{onBeforeEnter(I){Dr(F,[I]),Sn(I,i),Sn(I,o)},onBeforeAppear(I){Dr(N,[I]),Sn(I,l),Sn(I,u)},onEnter:T(!1),onAppear:T(!0),onLeave(I,E){I._isLeaving=!0;const de=()=>y(I,E);Sn(I,p),Sn(I,g),s_(),Tf(()=>{I._isLeaving&&(sr(I,p),Sn(I,w),Ef(O)||wf(I,r,D,de))}),Dr(O,[I,de])},onEnterCancelled(I){m(I,!1),Dr(C,[I])},onAppearCancelled(I){m(I,!0),Dr(v,[I])},onLeaveCancelled(I){y(I),Dr(x,[I])}})}function FI(t){if(t==null)return null;if(De(t))return[_l(t.enter),_l(t.leave)];{const e=_l(t);return[e,e]}}function _l(t){return Va(t)}function Sn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[js]||(t[js]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[js];n&&(n.delete(e),n.size||(t[js]=void 0))}function Tf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let UI=0;function wf(t,e,n,r){const s=t._endId=++UI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=r_(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=w=>{w.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(u,g)}function r_(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${er}Delay`),i=r(`${er}Duration`),o=If(s,i),c=r(`${wi}Delay`),l=r(`${wi}Duration`),u=If(c,l);let d=null,p=0,g=0;e===er?o>0&&(d=er,p=o,g=i.length):e===wi?u>0&&(d=wi,p=u,g=l.length):(p=Math.max(o,u),d=p>0?o>u?er:wi:null,g=d?d===er?i.length:l.length:0);const w=d===er&&/\b(transform|all)(,|$)/.test(r(`${er}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:w}}function If(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Af(n)+Af(t[r])))}function Af(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function s_(){return document.body.offsetHeight}function BI(t,e,n){const r=t[js];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qa=Symbol("_vod"),i_=Symbol("_vsh"),o_={beforeMount(t,{value:e},{transition:n}){t[qa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ii(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ii(t,!0),r.enter(t)):r.leave(t,()=>{Ii(t,!1)}):Ii(t,e))},beforeUnmount(t,{value:e}){Ii(t,e)}};function Ii(t,e){t.style.display=e?t[qa]:"none",t[i_]=!e}function $I(){o_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const a_=Symbol("");function jI(t){const e=Hn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>ru(i,s))},r=()=>{const s=t(e.proxy);nu(e.subTree,s),n(s)};ei(()=>{Nm(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Tc(()=>s.disconnect())})}function nu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{nu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)ru(t.el,e);else if(t.type===Qe)t.children.forEach(n=>nu(n,e));else if(t.type===jr){let{el:n,anchor:r}=t;for(;n&&(ru(n,e),n!==r);)n=n.nextSibling}}function ru(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[a_]=r}}const qI=/(^|;)\s*display\s*:/;function HI(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&wa(r,c,"")}else for(const o in e)n[o]==null&&wa(r,o,"");for(const o in n)o==="display"&&(i=!0),wa(r,o,n[o])}else if(s){if(e!==n){const o=r[a_];o&&(n+=";"+o),r.cssText=n,i=qI.test(n)}}else e&&t.removeAttribute("style");qa in t&&(t[qa]=i?r.display:"",t[i_]&&(r.display="none"))}const bf=/\s*!important$/;function wa(t,e,n){if(se(n))n.forEach(r=>wa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=KI(t,e);bf.test(n)?t.setProperty(Ft(r),n.replace(bf,""),"important"):t[r]=n}}const Rf=["Webkit","Moz","ms"],yl={};function KI(t,e){const n=yl[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return yl[e]=r;r=mo(r);for(let s=0;s<Rf.length;s++){const i=Rf[s]+r;if(i in t)return yl[e]=i}return e}const Sf="http://www.w3.org/1999/xlink";function Cf(t,e,n,r,s,i=gT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Sf,e.slice(6,e.length)):t.setAttributeNS(Sf,e,n):n==null||i&&!Pg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function WI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Pg(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Pn(t,e,n,r){t.addEventListener(e,n,r)}function zI(t,e,n,r){t.removeEventListener(e,n,r)}const Pf=Symbol("_vei");function GI(t,e,n,r,s=null){const i=t[Pf]||(t[Pf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=QI(e);if(r){const u=i[e]=XI(r,s);Pn(t,c,u,l)}else o&&(zI(t,c,o,l),i[e]=void 0)}}const kf=/(?:Once|Passive|Capture)$/;function QI(t){let e;if(kf.test(t)){e={};let r;for(;r=t.match(kf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ft(t.slice(2)),e]}let vl=0;const YI=Promise.resolve(),JI=()=>vl||(YI.then(()=>vl=0),vl=Date.now());function XI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ut(ZI(r,n.value),e,5,[r])};return n.value=t,n.attached=JI(),n}function ZI(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Of=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,eA=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?BI(t,r,u):e==="style"?HI(t,n,r):go(e)?Ou(e)||GI(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tA(t,e,r,u))?(WI(t,e,r,i,o,c,l),(e==="value"||e==="checked"||e==="selected")&&Cf(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cf(t,e,r,u))};function tA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Of(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Of(e)&&Be(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function c_(t,e,n){const r=Eo(t,e);class s extends bc{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const nA=(t,e)=>c_(t,e,v_),rA=typeof HTMLElement<"u"?HTMLElement:class{};class bc extends rA{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,vo(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),su(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!se(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=Va(this._props[l])),(c||(c=Object.create(null)))[Rt(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=se(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Rt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=Rt(e);this._numberProps&&this._numberProps[r]&&(n=Va(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Ft(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Ft(e),n+""):n||this.removeAttribute(Ft(e))))}_update(){su(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ce(this._def,Ue({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Ft(i)!==i&&r(Ft(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof bc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function sA(t="$style"){{const e=Hn();if(!e)return Oe;const n=e.type.__cssModules;if(!n)return Oe;const r=n[t];return r||Oe}}const l_=new WeakMap,u_=new WeakMap,Ha=Symbol("_moveCb"),Nf=Symbol("_enterCb"),h_={name:"TransitionGroup",props:Ue({},xI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Hn(),r=Zu();let s,i;return vc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!uA(s[0].el,n.vnode.el,o))return;s.forEach(aA),s.forEach(cA);const c=s.filter(lA);s_(),c.forEach(l=>{const u=l.el,d=u.style;Sn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Ha]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Ha]=null,sr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Ie(t),c=n_(o);let l=o.tag||Qe;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),Er(d,$s(d,c,r,n)),l_.set(d,d.el.getBoundingClientRect()))}i=e.default?wc(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&Er(d,$s(d,c,r,n))}return Ce(l,null,i)}}},iA=t=>delete t.mode;h_.props;const oA=h_;function aA(t){const e=t.el;e[Ha]&&e[Ha](),e[Nf]&&e[Nf]()}function cA(t){u_.set(t,t.el.getBoundingClientRect())}function lA(t){const e=l_.get(t),n=u_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function uA(t,e,n){const r=t.cloneNode(),s=t[js];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=r_(r);return i.removeChild(r),o}const wr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Ss(e,n):e};function hA(t){t.target.composing=!0}function Df(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qt=Symbol("_assign"),Yt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Qt]=wr(s);const i=r||s.props&&s.props.type==="number";Pn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Da(c)),t[Qt](c)}),n&&Pn(t,"change",()=>{t.value=t.value.trim()}),e||(Pn(t,"compositionstart",hA),Pn(t,"compositionend",Df),Pn(t,"change",Df))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Qt]=wr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Da(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},nh={deep:!0,created(t,e,n){t[Qt]=wr(n),Pn(t,"change",()=>{const r=t._modelValue,s=qs(t),i=t.checked,o=t[Qt];if(se(r)){const c=hc(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(rs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(f_(t,i))})},mounted:Vf,beforeUpdate(t,e,n){t[Qt]=wr(n),Vf(t,e,n)}};function Vf(t,{value:e,oldValue:n},r){t._modelValue=e,se(e)?t.checked=hc(e,r.props.value)>-1:rs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=vr(e,f_(t,!0)))}const rh={created(t,{value:e},n){t.checked=vr(e,n.props.value),t[Qt]=wr(n),Pn(t,"change",()=>{t[Qt](qs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Qt]=wr(r),e!==n&&(t.checked=vr(e,r.props.value))}},d_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=rs(e);Pn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Da(qs(o)):qs(o));t[Qt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,vo(()=>{t._assigning=!1})}),t[Qt]=wr(r)},mounted(t,{value:e,modifiers:{number:n}}){Mf(t,e)},beforeUpdate(t,e,n){t[Qt]=wr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Mf(t,e)}};function Mf(t,e,n){const r=t.multiple,s=se(e);if(!(r&&!s&&!rs(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=qs(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=hc(e,l)>-1}else c.selected=e.has(l);else if(vr(qs(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qs(t){return"_value"in t?t._value:t.value}function f_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const p_={created(t,e,n){ha(t,e,n,null,"created")},mounted(t,e,n){ha(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ha(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ha(t,e,n,r,"updated")}};function g_(t,e){switch(t){case"SELECT":return d_;case"TEXTAREA":return Yt;default:switch(e){case"checkbox":return nh;case"radio":return rh;default:return Yt}}}function ha(t,e,n,r,s){const o=g_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function dA(){Yt.getSSRProps=({value:t})=>({value:t}),rh.getSSRProps=({value:t},e)=>{if(e.props&&vr(e.props.value,t))return{checked:!0}},nh.getSSRProps=({value:t},e)=>{if(se(t)){if(e.props&&hc(t,e.props.value)>-1)return{checked:!0}}else if(rs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},p_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=g_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const fA=["ctrl","shift","alt","meta"],pA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>fA.some(n=>t[`${n}Key`]&&!e.includes(n))},gA=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=pA[e[o]];if(c&&c(s,e))return}return t(s,...i)})},mA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},sh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Ft(s.key);if(e.some(o=>o===i||mA[o]===i))return t(s)})},m_=Ue({patchProp:eA},LI);let Ui,Lf=!1;function __(){return Ui||(Ui=bm(m_))}function y_(){return Ui=Lf?Ui:Rm(m_),Lf=!0,Ui}const su=(...t)=>{__().render(...t)},v_=(...t)=>{y_().hydrate(...t)},E_=(...t)=>{const e=__().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=w_(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,T_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},_A=(...t)=>{const e=y_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=w_(r);if(s)return n(s,!0,T_(s))},e};function T_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function w_(t){return Be(t)?document.querySelector(t):t}let xf=!1;const yA=()=>{xf||(xf=!0,dA(),$I())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const vA=()=>{},EA=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Um,BaseTransitionPropsValidators:eh,Comment:at,DeprecationTypes:DI,EffectScope:Mu,ErrorCodes:tw,ErrorTypeStrings:RI,Fragment:Qe,KeepAlive:oI,ReactiveEffect:Us,Static:jr,Suspense:mw,Teleport:dI,Text:Kr,TrackOpTypes:XT,Transition:Ac,TransitionGroup:oA,TriggerOpTypes:ZT,VueElement:bc,assertNumber:ew,callWithAsyncErrorHandling:Ut,callWithErrorHandling:Mn,camelize:Rt,capitalize:mo,cloneVNode:Tn,compatUtils:NI,compile:vA,computed:zt,createApp:E_,createBlock:qr,createCommentVNode:kn,createElementBlock:Xe,createElementVNode:K,createHydrationRenderer:Rm,createPropsRestProxy:Fw,createRenderer:bm,createSSRApp:_A,createSlots:ww,createStaticVNode:Wm,createTextVNode:gr,createVNode:Ce,customRef:Yg,defineAsyncComponent:Iw,defineComponent:Eo,defineCustomElement:c_,defineEmits:Cw,defineExpose:Pw,defineModel:Nw,defineOptions:kw,defineProps:Sw,defineSSRCustomElement:nA,defineSlots:Ow,devtools:SI,effect:ET,effectScope:_T,getCurrentInstance:Hn,getCurrentScope:Ng,getTransitionRawChildren:wc,guardReactiveProps:Km,h:Ic,handleError:ss,hasInjectionContext:zw,hydrate:v_,initCustomFormatter:II,initDirectivesForSSR:yA,inject:Bt,isMemoSame:Zm,isProxy:$u,isReactive:Cs,isReadonly:Bs,isRef:ze,isRuntimeOnly:vI,isShallow:Qi,isVNode:Tr,markRaw:Wg,mergeDefaults:Lw,mergeModels:xw,mergeProps:zm,nextTick:vo,normalizeClass:Lt,normalizeProps:fT,normalizeStyle:_o,onActivated:Mm,onBeforeMount:am,onBeforeUnmount:Ec,onBeforeUpdate:cm,onDeactivated:Lm,onErrorCaptured:dm,onMounted:ei,onRenderTracked:hm,onRenderTriggered:um,onScopeDispose:yT,onServerPrefetch:lm,onUnmounted:Tc,onUpdated:vc,openBlock:Me,popScopeId:os,provide:Ds,proxyRefs:Hu,pushScopeId:is,queuePostFlushCb:La,reactive:yo,readonly:Bu,ref:Je,registerRuntimeCompiler:yI,render:su,renderList:Ea,renderSlot:Aw,resolveComponent:rm,resolveDirective:pw,resolveDynamicComponent:im,resolveFilter:OI,resolveTransitionHooks:$s,setBlockTracking:Yl,setDevtoolsHook:CI,setTransitionHooks:Er,shallowReactive:Uu,shallowReadonly:$T,shallowRef:Gg,ssrContextKey:km,ssrUtils:kI,stop:TT,toDisplayString:fn,toHandlerKey:Mi,toHandlers:bw,toRaw:Ie,toRef:JT,toRefs:GT,toValue:KT,transformVNodeArgs:fI,triggerRef:HT,unref:Tt,useAttrs:Mw,useCssModule:sA,useCssVars:jI,useModel:wI,useSSRContext:Om,useSlots:Vw,useTransitionState:Zu,vModelCheckbox:nh,vModelDynamic:p_,vModelRadio:rh,vModelSelect:d_,vModelText:Yt,vShow:o_,version:e_,warn:bI,watch:Vs,watchEffect:rI,watchPostEffect:Nm,watchSyncEffect:Dm,withAsyncContext:Uw,withCtx:mn,withDefaults:Dw,withDirectives:Ln,withKeys:sh,withMemo:AI,withModifiers:gA,withScopeId:cw},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof document<"u";function TA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function El(t,e){const n={};for(const r in e){const s=e[r];n[r]=an(s)?s.map(t):t(s)}return n}const Bi=()=>{},an=Array.isArray,I_=/#/g,wA=/&/g,IA=/\//g,AA=/=/g,bA=/\?/g,A_=/\+/g,RA=/%5B/g,SA=/%5D/g,b_=/%5E/g,CA=/%60/g,R_=/%7B/g,PA=/%7C/g,S_=/%7D/g,kA=/%20/g;function ih(t){return encodeURI(""+t).replace(PA,"|").replace(RA,"[").replace(SA,"]")}function OA(t){return ih(t).replace(R_,"{").replace(S_,"}").replace(b_,"^")}function iu(t){return ih(t).replace(A_,"%2B").replace(kA,"+").replace(I_,"%23").replace(wA,"%26").replace(CA,"`").replace(R_,"{").replace(S_,"}").replace(b_,"^")}function NA(t){return iu(t).replace(AA,"%3D")}function DA(t){return ih(t).replace(I_,"%23").replace(bA,"%3F")}function VA(t){return t==null?"":DA(t).replace(IA,"%2F")}function no(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const MA=/\/$/,LA=t=>t.replace(MA,"");function Tl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=BA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:no(o)}}function xA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ff(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function FA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Hs(e.matched[r],n.matched[s])&&C_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function C_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!UA(t[n],e[n]))return!1;return!0}function UA(t,e){return an(t)?Uf(t,e):an(e)?Uf(e,t):t===e}function Uf(t,e){return an(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function BA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ro;(function(t){t.pop="pop",t.push="push"})(ro||(ro={}));var $i;(function(t){t.back="back",t.forward="forward",t.unknown=""})($i||($i={}));function $A(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LA(t)}const jA=/^[^#]+#/;function qA(t,e){return t.replace(jA,"#")+e}function HA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Rc=()=>({left:window.scrollX,top:window.scrollY});function KA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=HA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Bf(t,e){return(history.state?history.state.position-e:-1)+t}const ou=new Map;function WA(t,e){ou.set(t,e)}function zA(t){const e=ou.get(t);return ou.delete(t),e}let GA=()=>location.protocol+"//"+location.host;function P_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Ff(l,"")}return Ff(n,t)+r+s}function QA(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const w=P_(t,location),S=n.value,V=e.value;let D=0;if(g){if(n.value=w,e.value=g,o&&o===S){o=null;return}D=V?g.position-V.position:0}else r(w);s.forEach(F=>{F(n.value,S,{delta:D,type:ro.pop,direction:D?D>0?$i.forward:$i.back:$i.unknown})})};function l(){o=n.value}function u(g){s.push(g);const w=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(w),w}function d(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Rc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function $f(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Rc():null}}function YA(t){const{history:e,location:n}=window,r={value:P_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:GA()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(w){console.error(w),n[d?"replace":"assign"](g)}}function o(l,u){const d=ke({},e.state,$f(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=ke({},s.value,e.state,{forward:l,scroll:Rc()});i(d.current,d,!0);const p=ke({},$f(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function JA(t){t=$A(t);const e=YA(t),n=QA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:qA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function XA(t){return typeof t=="string"||t&&typeof t=="object"}function k_(t){return typeof t=="string"||typeof t=="symbol"}const tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},O_=Symbol("");var jf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(jf||(jf={}));function Ks(t,e){return ke(new Error,{type:t,[O_]:!0},e)}function Rn(t,e){return t instanceof Error&&O_ in t&&(e==null||!!(t.type&e))}const qf="[^/]+?",ZA={sensitive:!1,strict:!1,start:!0,end:!0},e0=/[.+*?^${}()[\]/\\]/g;function t0(t,e){const n=ke({},ZA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let w=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(e0,"\\$&"),w+=40;else if(g.type===1){const{value:S,repeatable:V,optional:D,regexp:F}=g;i.push({name:S,repeatable:V,optional:D});const P=F||qf;if(P!==qf){w+=10;try{new RegExp(`(${P})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${S}" (${P}): `+O.message)}}let C=V?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;p||(C=D&&u.length<2?`(?:/${C})`:"/"+C),D&&(C+="?"),s+=C,w+=20,D&&(w+=-8),V&&(w+=-20),P===".*"&&(w+=-50)}d.push(w)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const w=d[g]||"",S=i[g-1];p[S.name]=w&&S.repeatable?w.split("/"):w}return p}function l(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const w of g)if(w.type===0)d+=w.value;else if(w.type===1){const{value:S,repeatable:V,optional:D}=w,F=S in u?u[S]:"";if(an(F)&&!V)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const P=an(F)?F.join("/"):F;if(!P)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=P}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function n0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function N_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=n0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Hf(r))return 1;if(Hf(s))return-1}return s.length-r.length}function Hf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const r0={type:0,value:""},s0=/[a-zA-Z0-9_]/;function i0(t){if(!t)return[[]];if(t==="/")return[[r0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${u}": ${w}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:s0.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function o0(t,e,n){const r=t0(i0(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function a0(t,e){const n=[],r=new Map;e=zf({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const w=!g,S=c0(d);S.aliasOf=g&&g.record;const V=zf(e,d),D=[S];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of C)D.push(ke({},S,{components:g?g.record.components:S.components,path:O,aliasOf:g?g.record:S}))}let F,P;for(const C of D){const{path:O}=C;if(p&&O[0]!=="/"){const x=p.record.path,N=x[x.length-1]==="/"?"":"/";C.path=p.record.path+(O&&N+O)}if(F=o0(C,p,V),g?g.alias.push(F):(P=P||F,P!==F&&P.alias.push(F),w&&d.name&&!Wf(F)&&o(d.name)),D_(F)&&l(F),S.children){const x=S.children;for(let N=0;N<x.length;N++)i(x[N],F,g&&g.children[N])}g=g||F}return P?()=>{o(P)}:Bi}function o(d){if(k_(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const p=h0(d,n);n.splice(p,0,d),d.record.name&&!Wf(d)&&r.set(d.record.name,d)}function u(d,p){let g,w={},S,V;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Ks(1,{location:d});V=g.record.name,w=ke(Kf(p.params,g.keys.filter(P=>!P.optional).concat(g.parent?g.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),d.params&&Kf(d.params,g.keys.map(P=>P.name))),S=g.stringify(w)}else if(d.path!=null)S=d.path,g=n.find(P=>P.re.test(S)),g&&(w=g.parse(S),V=g.record.name);else{if(g=p.name?r.get(p.name):n.find(P=>P.re.test(p.path)),!g)throw Ks(1,{location:d,currentLocation:p});V=g.record.name,w=ke({},p.params,d.params),S=g.stringify(w)}const D=[];let F=g;for(;F;)D.unshift(F.record),F=F.parent;return{name:V,path:S,params:w,matched:D,meta:u0(D)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Kf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function c0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:l0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function l0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Wf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function u0(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function zf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function h0(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;N_(t,e[i])<0?r=i:n=i+1}const s=d0(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function d0(t){let e=t;for(;e=e.parent;)if(D_(e)&&N_(t,e)===0)return e}function D_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function f0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(A_," "),o=i.indexOf("="),c=no(o<0?i:i.slice(0,o)),l=o<0?null:no(i.slice(o+1));if(c in e){let u=e[c];an(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function Gf(t){let e="";for(let n in t){const r=t[n];if(n=NA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(an(r)?r.map(i=>i&&iu(i)):[r&&iu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function p0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=an(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const g0=Symbol(""),Qf=Symbol(""),Sc=Symbol(""),oh=Symbol(""),au=Symbol("");function Ai(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Ks(4,{from:n,to:e})):g instanceof Error?l(g):XA(g)?l(Ks(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function wl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(m0(l)){const d=(l.__vccOpts||l)[e];d&&i.push(cr(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=TA(d)?d.default:d;o.components[c]=p;const w=(p.__vccOpts||p)[e];return w&&cr(w,n,r,o,c,s)()}))}}return i}function m0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yf(t){const e=Bt(Sc),n=Bt(oh),r=zt(()=>{const l=Tt(t.to);return e.resolve(l)}),s=zt(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Hs.bind(null,d));if(g>-1)return g;const w=Jf(l[u-2]);return u>1&&Jf(d)===w&&p[p.length-1].path!==w?p.findIndex(Hs.bind(null,l[u-2])):g}),i=zt(()=>s.value>-1&&v0(n.params,r.value.params)),o=zt(()=>s.value>-1&&s.value===n.matched.length-1&&C_(n.params,r.value.params));function c(l={}){return y0(l)?e[Tt(t.replace)?"replace":"push"](Tt(t.to)).catch(Bi):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const _0=Eo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yf,setup(t,{slots:e}){const n=yo(Yf(t)),{options:r}=Bt(Sc),s=zt(()=>({[Xf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ic("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),V_=_0;function y0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function v0(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!an(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Xf=(t,e,n)=>t??e??n,E0=Eo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Bt(au),s=zt(()=>t.route||r.value),i=Bt(Qf,0),o=zt(()=>{let u=Tt(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=zt(()=>s.value.matched[o.value]);Ds(Qf,zt(()=>o.value+1)),Ds(g0,c),Ds(au,s);const l=Je();return Vs(()=>[l.value,c.value,t.name],([u,d,p],[g,w,S])=>{d&&(d.instances[p]=u,w&&w!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=w.leaveGuards),d.updateGuards.size||(d.updateGuards=w.updateGuards))),u&&d&&(!w||!Hs(d,w)||!g)&&(d.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return Zf(n.default,{Component:g,route:u});const w=p.props[d],S=w?w===!0?u.params:typeof w=="function"?w(u):w:null,D=Ic(g,ke({},S,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Zf(n.default,{Component:D,route:u})||D}}});function Zf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M_=E0;function T0(t){const e=a0(t.routes,t),n=t.parseQuery||f0,r=t.stringifyQuery||Gf,s=t.history,i=Ai(),o=Ai(),c=Ai(),l=Gg(tr);let u=tr;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=El.bind(null,B=>""+B),p=El.bind(null,VA),g=El.bind(null,no);function w(B,ne){let ee,ie;return k_(B)?(ee=e.getRecordMatcher(B),ie=ne):ie=B,e.addRoute(ie,ee)}function S(B){const ne=e.getRecordMatcher(B);ne&&e.removeRoute(ne)}function V(){return e.getRoutes().map(B=>B.record)}function D(B){return!!e.getRecordMatcher(B)}function F(B,ne){if(ne=ke({},ne||l.value),typeof B=="string"){const R=Tl(n,B,ne.path),M=e.resolve({path:R.path},ne),$=s.createHref(R.fullPath);return ke(R,M,{params:g(M.params),hash:no(R.hash),redirectedFrom:void 0,href:$})}let ee;if(B.path!=null)ee=ke({},B,{path:Tl(n,B.path,ne.path).path});else{const R=ke({},B.params);for(const M in R)R[M]==null&&delete R[M];ee=ke({},B,{params:p(R)}),ne.params=p(ne.params)}const ie=e.resolve(ee,ne),Ee=B.hash||"";ie.params=d(g(ie.params));const Ne=xA(r,ke({},B,{hash:OA(Ee),path:ie.path})),A=s.createHref(Ne);return ke({fullPath:Ne,hash:Ee,query:r===Gf?p0(B.query):B.query||{}},ie,{redirectedFrom:void 0,href:A})}function P(B){return typeof B=="string"?Tl(n,B,l.value.path):ke({},B)}function C(B,ne){if(u!==B)return Ks(8,{from:ne,to:B})}function O(B){return b(B)}function x(B){return O(ke(P(B),{replace:!0}))}function N(B){const ne=B.matched[B.matched.length-1];if(ne&&ne.redirect){const{redirect:ee}=ne;let ie=typeof ee=="function"?ee(B):ee;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=P(ie):{path:ie},ie.params={}),ke({query:B.query,hash:B.hash,params:ie.path!=null?{}:B.params},ie)}}function b(B,ne){const ee=u=F(B),ie=l.value,Ee=B.state,Ne=B.force,A=B.replace===!0,R=N(ee);if(R)return b(ke(P(R),{state:typeof R=="object"?ke({},Ee,R.state):Ee,force:Ne,replace:A}),ne||ee);const M=ee;M.redirectedFrom=ne;let $;return!Ne&&FA(r,ie,ee)&&($=Ks(16,{to:M,from:ie}),qt(ie,ie,!0,!1)),($?Promise.resolve($):y(M,ie)).catch(U=>Rn(U)?Rn(U,2)?U:Zt(U):W(U,M,ie)).then(U=>{if(U){if(Rn(U,2))return b(ke({replace:A},P(U.to),{state:typeof U.to=="object"?ke({},Ee,U.to.state):Ee,force:Ne}),ne||M)}else U=I(M,ie,!0,A,Ee);return T(M,ie,U),U})}function v(B,ne){const ee=C(B,ne);return ee?Promise.reject(ee):Promise.resolve()}function m(B){const ne=Gn.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(B):B()}function y(B,ne){let ee;const[ie,Ee,Ne]=w0(B,ne);ee=wl(ie.reverse(),"beforeRouteLeave",B,ne);for(const R of ie)R.leaveGuards.forEach(M=>{ee.push(cr(M,B,ne))});const A=v.bind(null,B,ne);return ee.push(A),st(ee).then(()=>{ee=[];for(const R of i.list())ee.push(cr(R,B,ne));return ee.push(A),st(ee)}).then(()=>{ee=wl(Ee,"beforeRouteUpdate",B,ne);for(const R of Ee)R.updateGuards.forEach(M=>{ee.push(cr(M,B,ne))});return ee.push(A),st(ee)}).then(()=>{ee=[];for(const R of Ne)if(R.beforeEnter)if(an(R.beforeEnter))for(const M of R.beforeEnter)ee.push(cr(M,B,ne));else ee.push(cr(R.beforeEnter,B,ne));return ee.push(A),st(ee)}).then(()=>(B.matched.forEach(R=>R.enterCallbacks={}),ee=wl(Ne,"beforeRouteEnter",B,ne,m),ee.push(A),st(ee))).then(()=>{ee=[];for(const R of o.list())ee.push(cr(R,B,ne));return ee.push(A),st(ee)}).catch(R=>Rn(R,8)?R:Promise.reject(R))}function T(B,ne,ee){c.list().forEach(ie=>m(()=>ie(B,ne,ee)))}function I(B,ne,ee,ie,Ee){const Ne=C(B,ne);if(Ne)return Ne;const A=ne===tr,R=Es?history.state:{};ee&&(ie||A?s.replace(B.fullPath,ke({scroll:A&&R&&R.scroll},Ee)):s.push(B.fullPath,Ee)),l.value=B,qt(B,ne,ee,A),Zt()}let E;function de(){E||(E=s.listen((B,ne,ee)=>{if(!hn.listening)return;const ie=F(B),Ee=N(ie);if(Ee){b(ke(Ee,{replace:!0}),ie).catch(Bi);return}u=ie;const Ne=l.value;Es&&WA(Bf(Ne.fullPath,ee.delta),Rc()),y(ie,Ne).catch(A=>Rn(A,12)?A:Rn(A,2)?(b(A.to,ie).then(R=>{Rn(R,20)&&!ee.delta&&ee.type===ro.pop&&s.go(-1,!1)}).catch(Bi),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),W(A,ie,Ne))).then(A=>{A=A||I(ie,Ne,!1),A&&(ee.delta&&!Rn(A,8)?s.go(-ee.delta,!1):ee.type===ro.pop&&Rn(A,20)&&s.go(-1,!1)),T(ie,Ne,A)}).catch(Bi)}))}let ye=Ai(),G=Ai(),Q;function W(B,ne,ee){Zt(B);const ie=G.list();return ie.length?ie.forEach(Ee=>Ee(B,ne,ee)):console.error(B),Promise.reject(B)}function $e(){return Q&&l.value!==tr?Promise.resolve():new Promise((B,ne)=>{ye.add([B,ne])})}function Zt(B){return Q||(Q=!B,de(),ye.list().forEach(([ne,ee])=>B?ee(B):ne()),ye.reset()),B}function qt(B,ne,ee,ie){const{scrollBehavior:Ee}=t;if(!Es||!Ee)return Promise.resolve();const Ne=!ee&&zA(Bf(B.fullPath,0))||(ie||!ee)&&history.state&&history.state.scroll||null;return vo().then(()=>Ee(B,ne,Ne)).then(A=>A&&KA(A)).catch(A=>W(A,B,ne))}const je=B=>s.go(B);let qe;const Gn=new Set,hn={currentRoute:l,listening:!0,addRoute:w,removeRoute:S,hasRoute:D,getRoutes:V,resolve:F,options:t,push:O,replace:x,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:G.add,isReady:$e,install(B){const ne=this;B.component("RouterLink",V_),B.component("RouterView",M_),B.config.globalProperties.$router=ne,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Tt(l)}),Es&&!qe&&l.value===tr&&(qe=!0,O(s.location).catch(Ee=>{}));const ee={};for(const Ee in tr)Object.defineProperty(ee,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(Sc,ne),B.provide(oh,Uu(ee)),B.provide(au,l);const ie=B.unmount;Gn.add(B),B.unmount=function(){Gn.delete(B),Gn.size<1&&(u=tr,E&&E(),E=null,l.value=tr,qe=!1,Q=!1),ie()}}};function st(B){return B.reduce((ne,ee)=>ne.then(()=>m(ee)),Promise.resolve())}return hn}function w0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Hs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Hs(u,l))||s.push(l))}return[n,r,s]}function Cc(){return Bt(Sc)}function L_(){return Bt(oh)}var ep={};/**
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
 */const x_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},I0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},F_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(g=64)),r.push(n[d],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):I0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new A0;const g=i<<2|c>>4;if(r.push(g),u!==64){const w=c<<4&240|u>>2;if(r.push(w),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class A0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b0=function(t){const e=x_(t);return F_.encodeByteArray(e,!0)},Ka=function(t){return b0(t).replace(/\./g,"")},U_=function(t){try{return F_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function R0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const S0=()=>R0().__FIREBASE_DEFAULTS__,C0=()=>{if(typeof process>"u"||typeof ep>"u")return;const t=ep.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},P0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&U_(t[1]);return e&&JSON.parse(e)},Pc=()=>{try{return S0()||C0()||P0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},B_=t=>{var e,n;return(n=(e=Pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k0=t=>{const e=B_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$_=()=>{var t;return(t=Pc())===null||t===void 0?void 0:t.config},j_=t=>{var e;return(e=Pc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class O0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function N0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ka(JSON.stringify(n)),Ka(JSON.stringify(o)),""].join(".")}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function D0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function V0(){var t;const e=(t=Pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function q_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L0(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x0(){return!V0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function H_(){try{return typeof indexedDB=="object"}catch{return!1}}function K_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function F0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const U0="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=U0,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?B0(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new un(s,c,r)}}function B0(t,e){return t.replace($0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $0=/\{\$([^}]+)}/g;function j0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function so(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(tp(i)&&tp(o)){if(!so(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function tp(t){return t!==null&&typeof t=="object"}/**
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
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function q0(t,e){const n=new H0(t,e);return n.subscribe.bind(n)}class H0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");K0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Il),s.error===void 0&&(s.error=Il),s.complete===void 0&&(s.complete=Il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Il(){}/**
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
 */const W0=1e3,z0=2,G0=4*60*60*1e3,Q0=.5;function np(t,e=W0,n=z0){const r=e*Math.pow(n,t),s=Math.round(Q0*r*(Math.random()-.5)*2);return Math.min(G0,r+s)}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class Y0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new O0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X0(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J0(t){return t===Vr?void 0:t}function X0(t){return t.instantiationMode==="EAGER"}/**
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
 */class Z0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const eb={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},tb=Te.INFO,nb={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},rb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=tb,this._logHandler=rb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const sb=(t,e)=>e.some(n=>t instanceof n);let rp,sp;function ib(){return rp||(rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ob(){return sp||(sp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const W_=new WeakMap,cu=new WeakMap,z_=new WeakMap,Al=new WeakMap,ah=new WeakMap;function ab(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&W_.set(n,t)}).catch(()=>{}),ah.set(e,t),e}function cb(t){if(cu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let lu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||z_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lb(t){lu=t(lu)}function ub(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(bl(this),e,...n);return z_.set(r,e.sort?e.sort():[e]),mr(r)}:ob().includes(t)?function(...e){return t.apply(bl(this),e),mr(W_.get(this))}:function(...e){return mr(t.apply(bl(this),e))}}function hb(t){return typeof t=="function"?ub(t):(t instanceof IDBTransaction&&cb(t),sb(t,ib())?new Proxy(t,lu):t)}function mr(t){if(t instanceof IDBRequest)return ab(t);if(Al.has(t))return Al.get(t);const e=hb(t);return e!==t&&(Al.set(t,e),ah.set(e,t)),e}const bl=t=>ah.get(t);function G_(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mr(o.result),l.oldVersion,l.newVersion,mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const db=["get","getKey","getAll","getAllKeys","count"],fb=["put","add","delete","clear"],Rl=new Map;function ip(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rl.get(e))return Rl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||db.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Rl.set(e,i),i}lb(t=>({...t,get:(e,n,r)=>ip(e,n)||t.get(e,n,r),has:(e,n)=>!!ip(e,n)||t.has(e,n)}));/**
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
 */class pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uu="@firebase/app",op="0.10.5";/**
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
 */const Gr=new kc("@firebase/app"),mb="@firebase/app-compat",_b="@firebase/analytics-compat",yb="@firebase/analytics",vb="@firebase/app-check-compat",Eb="@firebase/app-check",Tb="@firebase/auth",wb="@firebase/auth-compat",Ib="@firebase/database",Ab="@firebase/database-compat",bb="@firebase/functions",Rb="@firebase/functions-compat",Sb="@firebase/installations",Cb="@firebase/installations-compat",Pb="@firebase/messaging",kb="@firebase/messaging-compat",Ob="@firebase/performance",Nb="@firebase/performance-compat",Db="@firebase/remote-config",Vb="@firebase/remote-config-compat",Mb="@firebase/storage",Lb="@firebase/storage-compat",xb="@firebase/firestore",Fb="@firebase/vertexai-preview",Ub="@firebase/firestore-compat",Bb="firebase",$b="10.12.2";/**
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
 */const hu="[DEFAULT]",jb={[uu]:"fire-core",[mb]:"fire-core-compat",[yb]:"fire-analytics",[_b]:"fire-analytics-compat",[Eb]:"fire-app-check",[vb]:"fire-app-check-compat",[Tb]:"fire-auth",[wb]:"fire-auth-compat",[Ib]:"fire-rtdb",[Ab]:"fire-rtdb-compat",[bb]:"fire-fn",[Rb]:"fire-fn-compat",[Sb]:"fire-iid",[Cb]:"fire-iid-compat",[Pb]:"fire-fcm",[kb]:"fire-fcm-compat",[Ob]:"fire-perf",[Nb]:"fire-perf-compat",[Db]:"fire-rc",[Vb]:"fire-rc-compat",[Mb]:"fire-gcs",[Lb]:"fire-gcs-compat",[xb]:"fire-fst",[Ub]:"fire-fst-compat",[Fb]:"fire-vertex","fire-js":"fire-js",[Bb]:"fire-js-all"};/**
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
 */const Wa=new Map,qb=new Map,du=new Map;function ap(t,e){try{t.container.addComponent(e)}catch(n){Gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(du.has(e))return Gr.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,t);for(const n of Wa.values())ap(n,t);for(const n of qb.values())ap(n,t);return!0}function cs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
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
 */const Hb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new as("app","Firebase",Hb);/**
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
 */class Kb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const ti=$b;function Q_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _r.create("bad-app-name",{appName:String(s)});if(n||(n=$_()),!n)throw _r.create("no-options");const i=Wa.get(s);if(i){if(so(n,i.options)&&so(r,i.config))return i;throw _r.create("duplicate-app",{appName:s})}const o=new Z0(s);for(const l of du.values())o.addComponent(l);const c=new Kb(n,r,o);return Wa.set(s,c),c}function ch(t=hu){const e=Wa.get(t);if(!e&&t===hu&&$_())return Q_();if(!e)throw _r.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=jb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gr.warn(c.join(" "));return}wn(new cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Wb="firebase-heartbeat-database",zb=1,io="firebase-heartbeat-store";let Sl=null;function Y_(){return Sl||(Sl=G_(Wb,zb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(io)}catch(n){console.warn(n)}}}}).catch(t=>{throw _r.create("idb-open",{originalErrorMessage:t.message})})),Sl}async function Gb(t){try{const n=(await Y_()).transaction(io),r=await n.objectStore(io).get(J_(t));return await n.done,r}catch(e){if(e instanceof un)Gr.warn(e.message);else{const n=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gr.warn(n.message)}}}async function cp(t,e){try{const r=(await Y_()).transaction(io,"readwrite");await r.objectStore(io).put(e,J_(t)),await r.done}catch(n){if(n instanceof un)Gr.warn(n.message);else{const r=_r.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gr.warn(r.message)}}}function J_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Qb=1024,Yb=30*24*60*60*1e3;class Jb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Yb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lp(),{heartbeatsToSend:r,unsentEntries:s}=Xb(this._heartbeatsCache.heartbeats),i=Ka(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function lp(){return new Date().toISOString().substring(0,10)}function Xb(t,e=Qb){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),up(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H_()?K_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function up(t){return Ka(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function eR(t){wn(new cn("platform-logger",e=>new pb(e),"PRIVATE")),wn(new cn("heartbeat",e=>new Jb(e),"PRIVATE")),Jt(uu,op,t),Jt(uu,op,"esm2017"),Jt("fire-js","")}eR("");function lh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function X_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tR=X_,Z_=new as("auth","Firebase",X_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new kc("@firebase/auth");function nR(t,...e){za.logLevel<=Te.WARN&&za.warn(`Auth (${ti}): ${t}`,...e)}function Ia(t,...e){za.logLevel<=Te.ERROR&&za.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,...e){throw hh(t,...e)}function sn(t,...e){return hh(t,...e)}function uh(t,e,n){const r=Object.assign(Object.assign({},tR()),{[e]:n});return new as("auth","Firebase",r).create(e,{appName:t.name})}function xn(t){return uh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Xt(t,"argument-error"),uh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Z_.create(t,...e)}function pe(t,e,...n){if(!t)throw hh(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function Bn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sR(){return hp()==="http:"||hp()==="https:"}function hp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sR()||q_()||"connection"in navigator)?navigator.onLine:!0}function oR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=D0()||M0()}get(){return iR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Ro(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wn(t,e,n,r,s={}){return ty(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=bo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ey.fetch()(ny(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function ty(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aR),e);try{const s=new uR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw da(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw da(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw da(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw uh(t,d,u);Xt(t,d)}}catch(s){if(s instanceof un)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function So(t,e,n,r,s={}){const i=await Wn(t,e,n,r,s);return"mfaPendingCredential"in i&&Xt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ny(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?dh(t.config,s):`${t.config.apiScheme}://${s}`}function lR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),cR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function dp(t){return t!==void 0&&t.enterprise!==void 0}class hR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function dR(t,e){return Wn(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function ry(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pR(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=fh(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ji(Cl(s.auth_time)),issuedAtTime:ji(Cl(s.iat)),expirationTime:ji(Cl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cl(t){return Number(t)*1e3}function fh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const s=U_(n);return s?JSON.parse(s):(Ia("Failed to decode base64 JWT payload"),null)}catch(s){return Ia("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fp(t){const e=fh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&gR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ga(t){var e;const n=t.auth,r=await t.getIdToken(),s=await oo(t,ry(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sy(i.providerUserInfo):[],c=yR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new pu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function _R(t){const e=pt(t);await Ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sy(t){return t.map(e=>{var{providerId:n}=e,r=lh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e){const n=await ty(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ny(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ey.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ER(t,e){return Wn(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await vR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=lh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await oo(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pR(this,e)}reload(){return _R(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(xn(this.auth));const e=await this.getIdToken();return await oo(this,fR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:O,isAnonymous:x,providerData:N,stsTokenManager:b}=n;pe(C&&b,e,"internal-error");const v=Ms.fromJSON(this.name,b);pe(typeof C=="string",e,"internal-error"),nr(p,e.name),nr(g,e.name),pe(typeof O=="boolean",e,"internal-error"),pe(typeof x=="boolean",e,"internal-error"),nr(w,e.name),nr(S,e.name),nr(V,e.name),nr(D,e.name),nr(F,e.name),nr(P,e.name);const m=new Nn({uid:C,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:x,photoURL:S,phoneNumber:w,tenantId:V,stsTokenManager:v,createdAt:F,lastLoginAt:P});return N&&Array.isArray(N)&&(m.providerData=N.map(y=>Object.assign({},y))),D&&(m._redirectEventId=D),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new Nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ga(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ms;c.updateFromIdToken(r);const l=new Nn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function Dn(t){Bn(t instanceof Function,"Expected a class definition");let e=pp.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pp.set(t,e),e)}/**
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
 */class iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iy.type="NONE";const gp=iy;/**
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
 */function Aa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Aa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Aa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Dn(gp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Dn(gp);const o=Aa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Nn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ls(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ls(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uy(e))return"Blackberry";if(hy(e))return"Webos";if(ph(e))return"Safari";if((e.includes("chrome/")||ay(e))&&!e.includes("edge/"))return"Chrome";if(ly(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oy(t=ft()){return/firefox\//i.test(t)}function ph(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ay(t=ft()){return/crios\//i.test(t)}function cy(t=ft()){return/iemobile/i.test(t)}function ly(t=ft()){return/android/i.test(t)}function uy(t=ft()){return/blackberry/i.test(t)}function hy(t=ft()){return/webos/i.test(t)}function Oc(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function TR(t=ft()){var e;return Oc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wR(){return L0()&&document.documentMode===10}function dy(t=ft()){return Oc(t)||ly(t)||hy(t)||uy(t)||/windows phone/i.test(t)||cy(t)}function IR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t,e=[]){let n;switch(t){case"Browser":n=mp(ft());break;case"Worker":n=`${mp(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
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
 */class AR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function bR(t,e={}){return Wn(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
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
 */const RR=6;class SR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ry(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ga(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(xn(this));const n=e?pt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bR(this),n=new SR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ER(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zn(t){return pt(t)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=q0(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PR(t){Nc=t}function py(t){return Nc.loadJS(t)}function kR(){return Nc.recaptchaEnterpriseScript}function OR(){return Nc.gapiScript}function NR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const DR="recaptcha-enterprise",VR="NO_RECAPTCHA";class MR{constructor(e){this.type=DR,this.auth=zn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{dR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new hR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;dp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(VR)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&dp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kR();l.length!==0&&(l+=c),py(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function yp(t,e,n,r=!1){const s=new MR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qa(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await yp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t,e){const n=cs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(so(i,e??{}))return s;Xt(s,"already-initialized")}return n.initialize({options:e})}function xR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FR(t,e,n){const r=zn(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gy(e),{host:o,port:c}=UR(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),BR()}function gy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UR(t){const e=gy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vp(o)}}}function vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function $R(t,e){return Wn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e){return So(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}async function qR(t,e){return Wn(t,"POST","/v1/accounts:sendOobCode",Kn(t,e))}async function HR(t,e){return qR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KR(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function WR(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends gh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qa(e,n,"signInWithPassword",jR);case"emailLink":return KR(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qa(e,r,"signUpPassword",$R);case"emailLink":return WR(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e){return So(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="http://localhost";class Qr extends gh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=lh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:zR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QR(t){const e=Pi(ki(t)).link,n=e?Pi(ki(e)).deep_link_id:null,r=Pi(ki(t)).deep_link_id;return(r?Pi(ki(r)).link:null)||r||n||e||t}class mh{constructor(e){var n,r,s,i,o,c;const l=Pi(ki(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=GR((s=l.mode)!==null&&s!==void 0?s:null);pe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=QR(e);try{return new mh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(e,n){return ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=mh.parseLink(n);return pe(r,"argument-error"),ao._fromEmailAndCode(e,r.code,r.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Co extends _h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Co{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Co{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Co{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e){return So(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Nn._fromIdTokenResponse(e,r,s),o=Ep(r);return new Yr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ep(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ya.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ya(e,n,r,s)}}function my(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ya._fromErrorAndOperation(t,i,e,r):i})}async function JR(t,e,n=!1){const r=await oo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
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
 */async function XR(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(xn(r));const s="reauthenticate";try{const i=await oo(t,my(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=fh(i.idToken);pe(o,r,"internal-error");const{sub:c}=o;return pe(t.uid===c,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _y(t,e,n=!1){if(nn(t.app))return Promise.reject(xn(t));const r="signIn",s=await my(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ZR(t,e){return _y(zn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yy(t){const e=zn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eS(t,e,n){const r=zn(t);await Qa(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",HR)}async function tS(t,e,n){if(nn(t.app))return Promise.reject(xn(t));const r=zn(t),o=await Qa(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YR).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&yy(t),l}),c=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function nS(t,e,n){return nn(t.app)?Promise.reject(xn(t)):ZR(pt(t),ni.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yy(t),r})}function rS(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function sS(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function vy(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}function iS(t){return pt(t).signOut()}const Ja="__sak";/**
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
 */class Ey{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ja,"1"),this.storage.removeItem(Ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(){const t=ft();return ph(t)||Oc(t)}const aS=1e3,cS=10;class Ty extends Ey{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=oS()&&IR(),this.fallbackToPolling=dy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ty.type="LOCAL";const lS=Ty;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends Ey{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wy.type="SESSION";const Iy=wy;/**
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
 */function uS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await uS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=yh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function dS(t){_n().location.href=t}/**
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
 */function Ay(){return typeof _n().WorkerGlobalScope<"u"&&typeof _n().importScripts=="function"}async function fS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gS(){return Ay()?self:null}/**
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
 */const by="firebaseLocalStorageDb",mS=1,Xa="firebaseLocalStorage",Ry="fbase_key";class Po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vc(t,e){return t.transaction([Xa],e?"readwrite":"readonly").objectStore(Xa)}function _S(){const t=indexedDB.deleteDatabase(by);return new Po(t).toPromise()}function gu(){const t=indexedDB.open(by,mS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xa,{keyPath:Ry})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xa)?e(r):(r.close(),await _S(),e(await gu()))})})}async function Tp(t,e,n){const r=Vc(t,!0).put({[Ry]:e,value:n});return new Po(r).toPromise()}async function yS(t,e){const n=Vc(t,!1).get(e),r=await new Po(n).toPromise();return r===void 0?null:r.value}function wp(t,e){const n=Vc(t,!0).delete(e);return new Po(n).toPromise()}const vS=800,ES=3;class Sy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ES)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(gS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fS(),!this.activeServiceWorker)return;this.sender=new hS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gu();return await Tp(e,Ja,"1"),await wp(e,Ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>wp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vc(s,!1).getAll();return new Po(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sy.type="LOCAL";const TS=Sy;new Ro(3e4,6e4);/**
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
 */function Cy(t,e){return e?Dn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vh extends gh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wS(t){return _y(t.auth,new vh(t),t.bypassAuthState)}function IS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),XR(n,new vh(t),t.bypassAuthState)}async function AS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),JR(n,new vh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wS;case"linkViaPopup":case"linkViaRedirect":return AS;case"reauthViaPopup":case"reauthViaRedirect":return IS;default:Xt(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=new Ro(2e3,1e4);async function ky(t,e,n){if(nn(t.app))return Promise.reject(sn(t,"operation-not-supported-in-this-environment"));const r=zn(t);rR(t,e,_h);const s=Cy(r,n);return new Lr(r,"signInViaPopup",e,s).executeNotNull()}class Lr extends Py{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=yh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bS.get())};e()}}Lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS="pendingRedirect",ba=new Map;class SS extends Py{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ba.get(this.auth._key());if(!e){try{const r=await CS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ba.set(this.auth._key(),e)}return this.bypassAuthState||ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function CS(t,e){const n=OS(e),r=kS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function PS(t,e){ba.set(t._key(),e)}function kS(t){return Dn(t._redirectPersistence)}function OS(t){return Aa(RS,t.config.apiKey,t.name)}async function NS(t,e,n=!1){if(nn(t.app))return Promise.reject(xn(t));const r=zn(t),s=Cy(r,e),o=await new SS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=10*60*1e3;class VS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Oy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ip(e))}saveEventToCache(e){this.cachedEventUids.add(Ip(e)),this.lastProcessedEventTime=Date.now()}}function Ip(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Oy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FS=/^https?/;async function US(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LS(t);for(const n of e)try{if(BS(n))return}catch{}Xt(t,"unauthorized-domain")}function BS(t){const e=fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FS.test(n))return!1;if(xS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $S=new Ro(3e4,6e4);function Ap(){const t=_n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function jS(t){return new Promise((e,n)=>{var r,s,i;function o(){Ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ap(),n(sn(t,"network-request-failed"))},timeout:$S.get()})}if(!((s=(r=_n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=_n().gapi)===null||i===void 0)&&i.load)o();else{const c=NR("iframefcb");return _n()[c]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},py(`${OR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ra=null,e})}let Ra=null;function qS(t){return Ra=Ra||jS(t),Ra}/**
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
 */const HS=new Ro(5e3,15e3),KS="__/auth/iframe",WS="emulator/auth/iframe",zS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QS(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dh(e,WS):`https://${t.config.authDomain}/${KS}`,r={apiKey:e.apiKey,appName:t.name,v:ti},s=GS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${bo(r).slice(1)}`}async function YS(t){const e=await qS(t),n=_n().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:QS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),c=_n().setTimeout(()=>{i(o)},HS.get());function l(){_n().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const JS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XS=500,ZS=600,eC="_blank",tC="http://localhost";class bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nC(t,e,n,r=XS,s=ZS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},JS),{width:r.toString(),height:s.toString(),top:i,left:o}),u=ft().toLowerCase();n&&(c=ay(u)?eC:n),oy(u)&&(e=e||tC,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[w,S])=>`${g}${w}=${S},`,"");if(TR(u)&&c!=="_self")return rC(e||"",c),new bp(null);const p=window.open(e||"",c,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new bp(p)}function rC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sC="__/auth/handler",iC="emulator/auth/handler",oC=encodeURIComponent("fac");async function Rp(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:s};if(e instanceof _h){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",j0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Co){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${oC}=${encodeURIComponent(l)}`:"";return`${aC(t)}?${bo(c).slice(1)}${u}`}function aC({config:t}){return t.emulator?dh(t,iC):`https://${t.authDomain}/${sC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class cC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iy,this._completeRedirectFn=NS,this._overrideRedirectResult=PS}async _openPopup(e,n,r,s){var i;Bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Rp(e,n,r,fu(),s);return nC(e,o,yh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Rp(e,n,r,fu(),s);return dS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YS(e),r=new VS(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pl,{type:Pl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pl];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=US(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dy()||ph()||Oc()}}const lC=cC;var Sp="@firebase/auth",Cp="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dC(t){wn(new cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fy(t)},u=new CR(r,s,i,l);return xR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),wn(new cn("auth-internal",e=>{const n=zn(e.getProvider("auth").getImmediate());return(r=>new uC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Sp,Cp,hC(t)),Jt(Sp,Cp,"esm2017")}/**
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
 */const fC=5*60,pC=j_("authIdTokenMaxAge")||fC;let Pp=null;const gC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pC)return;const s=n==null?void 0:n.token;Pp!==s&&(Pp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ko(t=ch()){const e=cs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LR(t,{popupRedirectResolver:lC,persistence:[TS,lS,Iy]}),r=j_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gC(i.toString());sS(n,o,()=>o(n.currentUser)),rS(n,c=>o(c))}}const s=B_("auth");return s&&FR(n,`http://${s}`),n}function mC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dC("Browser");var _C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function vC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var Ny={exports:{}};const EC=vC(EA);(function(t,e){(function(r,s){t.exports=s(EC)})(_C,n=>(()=>{var r={772:(c,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(u,d)=>{const p=u.__vccOpts||u;for(const[g,w]of d)p[g]=w;return p}},976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),i.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>x,ToastPlugin:()=>b,ToastPositions:()=>S,default:()=>v,useToast:()=>N});var c=i(976);const l=(0,c.createElementVNode)("div",{class:"v-toast__icon"},null,-1),u=["innerHTML"];function d(m,y,T,I,E,de){return(0,c.openBlock)(),(0,c.createBlock)(c.Transition,{"enter-active-class":m.transition.enter,"leave-active-class":m.transition.leave},{default:(0,c.withCtx)(()=>[(0,c.withDirectives)((0,c.createElementVNode)("div",{ref:"root",role:"alert",class:(0,c.normalizeClass)(["v-toast__item",[`v-toast__item--${m.type}`,`v-toast__item--${m.position}`]]),onMouseover:y[0]||(y[0]=ye=>m.toggleTimer(!0)),onMouseleave:y[1]||(y[1]=ye=>m.toggleTimer(!1)),onClick:y[2]||(y[2]=function(){return m.whenClicked&&m.whenClicked(...arguments)})},[l,(0,c.createElementVNode)("p",{class:"v-toast__text",innerHTML:m.message},null,8,u)],34),[[c.vShow,m.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function p(m){var y;typeof m.remove<"u"?m.remove():(y=m.parentNode)==null||y.removeChild(m)}function g(m,y,T){let I=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const E=(0,c.h)(m,y,I),de=document.createElement("div");return de.classList.add("v-toast--pending"),T.appendChild(de),(0,c.render)(E,de),E.component}class w{constructor(y,T){this.startedAt=Date.now(),this.callback=y,this.delay=T,this.timer=setTimeout(y,T)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const S=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function V(m){return{all:m=m||new Map,on:function(y,T){var I=m.get(y);I?I.push(T):m.set(y,[T])},off:function(y,T){var I=m.get(y);I&&(T?I.splice(I.indexOf(T)>>>0,1):m.set(y,[]))},emit:function(y,T){var I=m.get(y);I&&I.slice().map(function(E){E(T)}),(I=m.get("*"))&&I.slice().map(function(E){E(y,T)})}}}const F=V(),P=(0,c.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:S.BOTTOM_RIGHT,validator(m){return Object.values(S).includes(m)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),F.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const m=document.body;m.appendChild(this.parentTop),m.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const m=this.$refs.root;(0,c.render)(null,m),p(m)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const m=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),p(m),this.isActive=!0,this.duration&&(this.timer=new w(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(m){!this.pauseOnHover||!this.timer||(m?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case S.TOP:case S.TOP_RIGHT:case S.TOP_LEFT:return this.parentTop;case S.BOTTOM:case S.BOTTOM_RIGHT:case S.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case S.TOP:case S.TOP_RIGHT:case S.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case S.BOTTOM:case S.BOTTOM_RIGHT:case S.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){F.off("toast-clear",this.dismiss)}});var C=i(772);const x=(0,C.default)(P,[["render",d]]),N=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(y){let T=null;typeof y=="string"&&(T=y);const E=Object.assign({},{message:T},m,y);return{dismiss:g(x,E,document.body).ctx.dismiss}},clear(){F.emit("toast-clear")},success(y){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"success"},T))},error(y){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"error"},T))},info(y){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"info"},T))},warning(y){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"warning"},T))},default(y){let T=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"default"},T))}}},b={install:function(m){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},T=N(y);m.config.globalProperties.$toast=T,m.provide("$toast",T)}},v=b})(),o})())})(Ny);var Dy=Ny.exports;const TC=yC(Dy);function He(t,e){const n=Dy.useToast();switch(t){case"success":n.success(e);break;case"info":n.info(e);break;case"warning":n.warning(e);break;case"error":n.error(e);break;case"default":n.default(e);break;default:n.default(e);break}}const ls=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Vy=t=>(is("data-v-bfeb2da2"),t=t(),os(),t),wC={class:"navBar"},IC={class:"container"},AC=Vy(()=>K("div",{class:"co"},"CO",-1)),bC=Vy(()=>K("div",{class:"student"},"STUDENT",-1)),RC={class:"buttons"},SC={__name:"Nav",props:{isLoggedIn:Boolean},setup(t){const e=ko(),n=Cc();function r(){iS(e).then(()=>{n.push("/"),He("success","Successfully singed out!")}).catch(s=>{He("error",s.message)})}return(s,i)=>{const o=rm("RouterLink");return Me(),Xe("div",wC,[K("div",IC,[Ce(o,{class:"logo",to:"/"},{default:mn(()=>[AC,bC]),_:1}),K("div",RC,[t.isLoggedIn?kn("",!0):(Me(),qr(o,{key:0,class:"button",to:"/Login"},{default:mn(()=>[gr("Login")]),_:1})),t.isLoggedIn?kn("",!0):(Me(),qr(o,{key:1,class:"button",to:"/Register"},{default:mn(()=>[gr("Register")]),_:1})),t.isLoggedIn?(Me(),qr(o,{key:2,class:"button",to:"/findcostudent"},{default:mn(()=>[gr("Find students")]),_:1})):kn("",!0),t.isLoggedIn?(Me(),Xe("div",{key:3,class:"button",onClick:i[0]||(i[0]=c=>r())},"Sign out")):kn("",!0)])])])}}},CC=ls(SC,[["__scopeId","data-v-bfeb2da2"]]),PC={},My=t=>(is("data-v-c0e10d71"),t=t(),os(),t),kC={class:"footerBox"},OC=My(()=>K("p",null,"Copyright ©2024",-1)),NC=My(()=>K("p",null,"Designed by Samuel Coryn",-1)),DC=[OC,NC];function VC(t,e){return Me(),Xe("div",kC,DC)}const MC=ls(PC,[["render",VC],["__scopeId","data-v-c0e10d71"]]),LC={class:"navBox"},xC={__name:"App",setup(t){const e=Je(!1);let n;return ei(()=>{n=ko(),vy(n,r=>{r?e.value=!0:e.value=!1})}),Ds("isLoggedInKey",e),(r,s)=>(Me(),Xe(Qe,null,[K("div",LC,[Ce(CC,{isLoggedIn:e.value},null,8,["isLoggedIn"])]),Ce(Tt(M_),null,{default:mn(({Component:i})=>[Ce(Ac,{name:"route",mode:"out-in"},{default:mn(()=>[(Me(),qr(im(i)))]),_:2},1024)]),_:1}),Ce(MC)],64))}},FC="/costudent-demo/assets/students_stock_photo-BvfkMiXM.jpg",Eh=t=>(is("data-v-33ed4297"),t=t(),os(),t),UC={class:"root"},BC={class:"grid"},$C={class:"landingColumn"},jC=Eh(()=>K("div",{class:"title"},[K("h1",null,"Study better,"),K("h1",null,"Together")],-1)),qC=Eh(()=>K("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),HC={class:"buttonArray"},KC=Eh(()=>K("div",{class:"photo"},[K("img",{src:FC,alt:"People studying together."})],-1)),WC=Wm('<div id="learnMore" data-v-33ed4297><div class="article" data-v-33ed4297><h1 data-v-33ed4297>ABOUT</h1><p data-v-33ed4297>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-33ed4297>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-33ed4297>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-33ed4297>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-33ed4297>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-33ed4297><div class="node" data-v-33ed4297><p data-v-33ed4297>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-33ed4297><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-33ed4297></path></svg><div class="node" data-v-33ed4297><p data-v-33ed4297>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-33ed4297><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-33ed4297></path></svg><div class="node" data-v-33ed4297><p data-v-33ed4297>Learn togehter!</p></div></div></div>',1),zC={__name:"Home",setup(t){function e(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=Bt("isLoggedInKey"),s=Cc();return(i,o)=>(Me(),Xe("div",UC,[K("div",BC,[K("div",$C,[jC,qC,K("div",HC,[K("div",{class:"button",onClick:o[0]||(o[0]=c=>n())},"Start studying"),K("div",{class:"button",onClick:o[1]||(o[1]=c=>e())},"Learn more")])]),KC]),WC]))}},GC=ls(zC,[["__scopeId","data-v-33ed4297"]]);var QC="firebase",YC="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(QC,YC,"app");const Ly="@firebase/installations",Th="0.6.7";/**
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
 */const xy=1e4,Fy=`w:${Th}`,Uy="FIS_v2",JC="https://firebaseinstallations.googleapis.com/v1",XC=60*60*1e3,ZC="installations",eP="Installations";/**
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
 */const tP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Jr=new as(ZC,eP,tP);function By(t){return t instanceof un&&t.code.includes("request-failed")}/**
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
 */function $y({projectId:t}){return`${JC}/projects/${t}/installations`}function jy(t){return{token:t.token,requestStatus:2,expiresIn:rP(t.expiresIn),creationTime:Date.now()}}async function qy(t,e){const r=(await e.json()).error;return Jr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Hy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nP(t,{refreshToken:e}){const n=Hy(t);return n.append("Authorization",sP(e)),n}async function Ky(t){const e=await t();return e.status>=500&&e.status<600?t():e}function rP(t){return Number(t.replace("s","000"))}function sP(t){return`${Uy} ${t}`}/**
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
 */async function iP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$y(t),s=Hy(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Uy,appId:t.appId,sdkVersion:Fy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Ky(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:jy(u.authToken)}}else throw await qy("Create Installation",l)}/**
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
 */function Wy(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function oP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const aP=/^[cdef][\w-]{21}$/,mu="";function cP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lP(t);return aP.test(n)?n:mu}catch{return mu}}function lP(t){return oP(t).substr(0,22)}/**
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
 */function Mc(t){return`${t.appName}!${t.appId}`}/**
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
 */const zy=new Map;function Gy(t,e){const n=Mc(t);Qy(n,e),uP(n,e)}function Qy(t,e){const n=zy.get(t);if(n)for(const r of n)r(e)}function uP(t,e){const n=hP();n&&n.postMessage({key:t,fid:e}),dP()}let xr=null;function hP(){return!xr&&"BroadcastChannel"in self&&(xr=new BroadcastChannel("[Firebase] FID Change"),xr.onmessage=t=>{Qy(t.data.key,t.data.fid)}),xr}function dP(){zy.size===0&&xr&&(xr.close(),xr=null)}/**
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
 */const fP="firebase-installations-database",pP=1,Xr="firebase-installations-store";let kl=null;function wh(){return kl||(kl=G_(fP,pP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xr)}}})),kl}async function Za(t,e){const n=Mc(t),s=(await wh()).transaction(Xr,"readwrite"),i=s.objectStore(Xr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Gy(t,e.fid),e}async function Yy(t){const e=Mc(t),r=(await wh()).transaction(Xr,"readwrite");await r.objectStore(Xr).delete(e),await r.done}async function Lc(t,e){const n=Mc(t),s=(await wh()).transaction(Xr,"readwrite"),i=s.objectStore(Xr),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&Gy(t,c.fid),c}/**
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
 */async function Ih(t){let e;const n=await Lc(t.appConfig,r=>{const s=gP(r),i=mP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===mu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function gP(t){const e=t||{fid:cP(),registrationStatus:0};return Jy(e)}function mP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Jr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_P(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yP(t)}:{installationEntry:e}}async function _P(t,e){try{const n=await iP(t,e);return Za(t.appConfig,n)}catch(n){throw By(n)&&n.customData.serverCode===409?await Yy(t.appConfig):await Za(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function yP(t){let e=await kp(t.appConfig);for(;e.registrationStatus===1;)await Wy(100),e=await kp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ih(t);return r||n}return e}function kp(t){return Lc(t,e=>{if(!e)throw Jr.create("installation-not-found");return Jy(e)})}function Jy(t){return vP(t)?{fid:t.fid,registrationStatus:0}:t}function vP(t){return t.registrationStatus===1&&t.registrationTime+xy<Date.now()}/**
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
 */async function EP({appConfig:t,heartbeatServiceProvider:e},n){const r=TP(t,n),s=nP(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Fy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Ky(()=>fetch(r,c));if(l.ok){const u=await l.json();return jy(u)}else throw await qy("Generate Auth Token",l)}function TP(t,{fid:e}){return`${$y(t)}/${e}/authTokens:generate`}/**
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
 */async function Ah(t,e=!1){let n;const r=await Lc(t.appConfig,i=>{if(!Xy(i))throw Jr.create("not-registered");const o=i.authToken;if(!e&&AP(o))return i;if(o.requestStatus===1)return n=wP(t,e),i;{if(!navigator.onLine)throw Jr.create("app-offline");const c=RP(i);return n=IP(t,c),c}});return n?await n:r.authToken}async function wP(t,e){let n=await Op(t.appConfig);for(;n.authToken.requestStatus===1;)await Wy(100),n=await Op(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ah(t,e):r}function Op(t){return Lc(t,e=>{if(!Xy(e))throw Jr.create("not-registered");const n=e.authToken;return SP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function IP(t,e){try{const n=await EP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Za(t.appConfig,r),n}catch(n){if(By(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yy(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Za(t.appConfig,r)}throw n}}function Xy(t){return t!==void 0&&t.registrationStatus===2}function AP(t){return t.requestStatus===2&&!bP(t)}function bP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+XC}function RP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function SP(t){return t.requestStatus===1&&t.requestTime+xy<Date.now()}/**
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
 */async function CP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ih(e);return r?r.catch(console.error):Ah(e).catch(console.error),n.fid}/**
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
 */async function PP(t,e=!1){const n=t;return await kP(n),(await Ah(n,e)).token}async function kP(t){const{registrationPromise:e}=await Ih(t);e&&await e}/**
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
 */function OP(t){if(!t||!t.options)throw Ol("App Configuration");if(!t.name)throw Ol("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ol(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ol(t){return Jr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="installations",NP="installations-internal",DP=t=>{const e=t.getProvider("app").getImmediate(),n=OP(e),r=cs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},VP=t=>{const e=t.getProvider("app").getImmediate(),n=cs(e,Zy).getImmediate();return{getId:()=>CP(n),getToken:s=>PP(n,s)}};function MP(){wn(new cn(Zy,DP,"PUBLIC")),wn(new cn(NP,VP,"PRIVATE"))}MP();Jt(Ly,Th);Jt(Ly,Th,"esm2017");/**
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
 */const ec="analytics",LP="firebase_id",xP="origin",FP=60*1e3,UP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ot=new kc("@firebase/analytics");/**
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
 */const BP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new as("analytics","Analytics",BP);/**
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
 */function $P(t){if(!t.startsWith(bh)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return Ot.warn(e.message),""}return t}function ev(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function jP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function qP(t,e){const n=jP("firebase-js-sdk-policy",{createScriptURL:$P}),r=document.createElement("script"),s=`${bh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function HP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function KP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await ev(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Ot.error(c)}t("config",s,i)}async function WP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await ev(n);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Ot.error(i)}}function zP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await WP(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await KP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Ot.error(c)}}return s}function GP(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=zP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function QP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=30,JP=1e3;class XP{constructor(e={},n=JP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const tv=new XP;function ZP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function e1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:ZP(r)},i=UP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function t1(t,e=tv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw $t.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new s1;return setTimeout(async()=>{c.abort()},FP),nv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function nv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=tv){var i;const{appId:o,measurementId:c}=t;try{await n1(r,e)}catch(l){if(c)return Ot.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await e1(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!r1(u)){if(s.deleteThrottleMetadata(o),c)return Ot.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?np(n,s.intervalMillis,YP):np(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),Ot.debug(`Calling attemptFetch again in ${d} millis`),nv(t,p,r,s)}}function n1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function r1(t){if(!(t instanceof un)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class s1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function i1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(){if(H_())try{await K_()}catch(t){return Ot.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Ot.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function a1(t,e,n,r,s,i,o){var c;const l=t1(t);l.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&Ot.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>Ot.error(w)),e.push(l);const u=o1().then(w=>{if(w)return r.getId()}),[d,p]=await Promise.all([l,u]);QP(i)||qP(i,d.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[xP]="firebase",g.update=!0,p!=null&&(g[LP]=p),s("config",d.measurementId,g),d.measurementId}/**
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
 */class c1{constructor(e){this.app=e}_delete(){return delete qi[this.app.options.appId],Promise.resolve()}}let qi={},Np=[];const Dp={};let Nl="dataLayer",l1="gtag",Vp,rv,Mp=!1;function u1(){const t=[];if(q_()&&t.push("This is a browser extension environment."),F0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});Ot.warn(n.message)}}function h1(t,e,n){u1();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Ot.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(qi[r]!=null)throw $t.create("already-exists",{id:r});if(!Mp){HP(Nl);const{wrappedGtag:i,gtagCore:o}=GP(qi,Np,Dp,Nl,l1);rv=i,Vp=o,Mp=!0}return qi[r]=a1(t,Np,Dp,e,Vp,Nl,n),new c1(t)}function d1(t=ch()){t=pt(t);const e=cs(t,ec);return e.isInitialized()?e.getImmediate():f1(t)}function f1(t,e={}){const n=cs(t,ec);if(n.isInitialized()){const s=n.getImmediate();if(so(e,n.getOptions()))return s;throw $t.create("already-initialized")}return n.initialize({options:e})}function p1(t,e,n,r){t=pt(t),i1(rv,qi[t.app.options.appId],e,n,r).catch(s=>Ot.error(s))}const Lp="@firebase/analytics",xp="0.10.4";function g1(){wn(new cn(ec,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return h1(r,s,n)},"PUBLIC")),wn(new cn("analytics-internal",t,"PRIVATE")),Jt(Lp,xp),Jt(Lp,xp,"esm2017");function t(e){try{const n=e.getProvider(ec).getImmediate();return{logEvent:(r,s,i)=>p1(n,r,s,i)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}g1();var Fp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,sv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function m(){}m.prototype=v.prototype,b.D=v.prototype,b.prototype=new m,b.prototype.constructor=b,b.C=function(y,T,I){for(var E=Array(arguments.length-2),de=2;de<arguments.length;de++)E[de-2]=arguments[de];return v.prototype[T].apply(y,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,m){m||(m=0);var y=Array(16);if(typeof v=="string")for(var T=0;16>T;++T)y[T]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(T=0;16>T;++T)y[T]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=b.g[0],m=b.g[1],T=b.g[2];var I=b.g[3],E=v+(I^m&(T^I))+y[0]+3614090360&4294967295;v=m+(E<<7&4294967295|E>>>25),E=I+(T^v&(m^T))+y[1]+3905402710&4294967295,I=v+(E<<12&4294967295|E>>>20),E=T+(m^I&(v^m))+y[2]+606105819&4294967295,T=I+(E<<17&4294967295|E>>>15),E=m+(v^T&(I^v))+y[3]+3250441966&4294967295,m=T+(E<<22&4294967295|E>>>10),E=v+(I^m&(T^I))+y[4]+4118548399&4294967295,v=m+(E<<7&4294967295|E>>>25),E=I+(T^v&(m^T))+y[5]+1200080426&4294967295,I=v+(E<<12&4294967295|E>>>20),E=T+(m^I&(v^m))+y[6]+2821735955&4294967295,T=I+(E<<17&4294967295|E>>>15),E=m+(v^T&(I^v))+y[7]+4249261313&4294967295,m=T+(E<<22&4294967295|E>>>10),E=v+(I^m&(T^I))+y[8]+1770035416&4294967295,v=m+(E<<7&4294967295|E>>>25),E=I+(T^v&(m^T))+y[9]+2336552879&4294967295,I=v+(E<<12&4294967295|E>>>20),E=T+(m^I&(v^m))+y[10]+4294925233&4294967295,T=I+(E<<17&4294967295|E>>>15),E=m+(v^T&(I^v))+y[11]+2304563134&4294967295,m=T+(E<<22&4294967295|E>>>10),E=v+(I^m&(T^I))+y[12]+1804603682&4294967295,v=m+(E<<7&4294967295|E>>>25),E=I+(T^v&(m^T))+y[13]+4254626195&4294967295,I=v+(E<<12&4294967295|E>>>20),E=T+(m^I&(v^m))+y[14]+2792965006&4294967295,T=I+(E<<17&4294967295|E>>>15),E=m+(v^T&(I^v))+y[15]+1236535329&4294967295,m=T+(E<<22&4294967295|E>>>10),E=v+(T^I&(m^T))+y[1]+4129170786&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^T&(v^m))+y[6]+3225465664&4294967295,I=v+(E<<9&4294967295|E>>>23),E=T+(v^m&(I^v))+y[11]+643717713&4294967295,T=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(T^I))+y[0]+3921069994&4294967295,m=T+(E<<20&4294967295|E>>>12),E=v+(T^I&(m^T))+y[5]+3593408605&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^T&(v^m))+y[10]+38016083&4294967295,I=v+(E<<9&4294967295|E>>>23),E=T+(v^m&(I^v))+y[15]+3634488961&4294967295,T=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(T^I))+y[4]+3889429448&4294967295,m=T+(E<<20&4294967295|E>>>12),E=v+(T^I&(m^T))+y[9]+568446438&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^T&(v^m))+y[14]+3275163606&4294967295,I=v+(E<<9&4294967295|E>>>23),E=T+(v^m&(I^v))+y[3]+4107603335&4294967295,T=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(T^I))+y[8]+1163531501&4294967295,m=T+(E<<20&4294967295|E>>>12),E=v+(T^I&(m^T))+y[13]+2850285829&4294967295,v=m+(E<<5&4294967295|E>>>27),E=I+(m^T&(v^m))+y[2]+4243563512&4294967295,I=v+(E<<9&4294967295|E>>>23),E=T+(v^m&(I^v))+y[7]+1735328473&4294967295,T=I+(E<<14&4294967295|E>>>18),E=m+(I^v&(T^I))+y[12]+2368359562&4294967295,m=T+(E<<20&4294967295|E>>>12),E=v+(m^T^I)+y[5]+4294588738&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^T)+y[8]+2272392833&4294967295,I=v+(E<<11&4294967295|E>>>21),E=T+(I^v^m)+y[11]+1839030562&4294967295,T=I+(E<<16&4294967295|E>>>16),E=m+(T^I^v)+y[14]+4259657740&4294967295,m=T+(E<<23&4294967295|E>>>9),E=v+(m^T^I)+y[1]+2763975236&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^T)+y[4]+1272893353&4294967295,I=v+(E<<11&4294967295|E>>>21),E=T+(I^v^m)+y[7]+4139469664&4294967295,T=I+(E<<16&4294967295|E>>>16),E=m+(T^I^v)+y[10]+3200236656&4294967295,m=T+(E<<23&4294967295|E>>>9),E=v+(m^T^I)+y[13]+681279174&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^T)+y[0]+3936430074&4294967295,I=v+(E<<11&4294967295|E>>>21),E=T+(I^v^m)+y[3]+3572445317&4294967295,T=I+(E<<16&4294967295|E>>>16),E=m+(T^I^v)+y[6]+76029189&4294967295,m=T+(E<<23&4294967295|E>>>9),E=v+(m^T^I)+y[9]+3654602809&4294967295,v=m+(E<<4&4294967295|E>>>28),E=I+(v^m^T)+y[12]+3873151461&4294967295,I=v+(E<<11&4294967295|E>>>21),E=T+(I^v^m)+y[15]+530742520&4294967295,T=I+(E<<16&4294967295|E>>>16),E=m+(T^I^v)+y[2]+3299628645&4294967295,m=T+(E<<23&4294967295|E>>>9),E=v+(T^(m|~I))+y[0]+4096336452&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~T))+y[7]+1126891415&4294967295,I=v+(E<<10&4294967295|E>>>22),E=T+(v^(I|~m))+y[14]+2878612391&4294967295,T=I+(E<<15&4294967295|E>>>17),E=m+(I^(T|~v))+y[5]+4237533241&4294967295,m=T+(E<<21&4294967295|E>>>11),E=v+(T^(m|~I))+y[12]+1700485571&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~T))+y[3]+2399980690&4294967295,I=v+(E<<10&4294967295|E>>>22),E=T+(v^(I|~m))+y[10]+4293915773&4294967295,T=I+(E<<15&4294967295|E>>>17),E=m+(I^(T|~v))+y[1]+2240044497&4294967295,m=T+(E<<21&4294967295|E>>>11),E=v+(T^(m|~I))+y[8]+1873313359&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~T))+y[15]+4264355552&4294967295,I=v+(E<<10&4294967295|E>>>22),E=T+(v^(I|~m))+y[6]+2734768916&4294967295,T=I+(E<<15&4294967295|E>>>17),E=m+(I^(T|~v))+y[13]+1309151649&4294967295,m=T+(E<<21&4294967295|E>>>11),E=v+(T^(m|~I))+y[4]+4149444226&4294967295,v=m+(E<<6&4294967295|E>>>26),E=I+(m^(v|~T))+y[11]+3174756917&4294967295,I=v+(E<<10&4294967295|E>>>22),E=T+(v^(I|~m))+y[2]+718787259&4294967295,T=I+(E<<15&4294967295|E>>>17),E=m+(I^(T|~v))+y[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+T&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var m=v-this.blockSize,y=this.B,T=this.h,I=0;I<v;){if(T==0)for(;I<=m;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<v;)if(y[T++]=b.charCodeAt(I++),T==this.blockSize){s(this,y),T=0;break}}else for(;I<v;)if(y[T++]=b[I++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=v},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var m=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=m&255,m/=256;for(this.u(b),b=Array(16),v=m=0;4>v;++v)for(var y=0;32>y;y+=8)b[m++]=this.g[v]>>>y&255;return b};function i(b,v){var m=c;return Object.prototype.hasOwnProperty.call(m,b)?m[b]:m[b]=v(b)}function o(b,v){this.h=v;for(var m=[],y=!0,T=b.length-1;0<=T;T--){var I=b[T]|0;y&&I==v||(m[T]=I,y=!1)}this.g=m}var c={};function l(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(u(-b));for(var v=[],m=1,y=0;b>=m;y++)v[y]=b/m|0,m*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return D(d(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=u(Math.pow(v,8)),y=p,T=0;T<b.length;T+=8){var I=Math.min(8,b.length-T),E=parseInt(b.substring(T,T+I),v);8>I?(I=u(Math.pow(v,I)),y=y.j(I).add(u(E))):(y=y.j(m),y=y.add(u(E)))}return y}var p=l(0),g=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-D(this).m();for(var b=0,v=1,m=0;m<this.g.length;m++){var y=this.i(m);b+=(0<=y?y:4294967296+y)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(V(this))return"-"+D(this).toString(b);for(var v=u(Math.pow(b,6)),m=this,y="";;){var T=O(m,v).g;m=F(m,T.j(v));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(b);if(m=T,S(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function V(b){return b.h==-1}t.l=function(b){return b=F(this,b),V(b)?-1:S(b)?0:1};function D(b){for(var v=b.g.length,m=[],y=0;y<v;y++)m[y]=~b.g[y];return new o(m,~b.h).add(g)}t.abs=function(){return V(this)?D(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0,T=0;T<=v;T++){var I=y+(this.i(T)&65535)+(b.i(T)&65535),E=(I>>>16)+(this.i(T)>>>16)+(b.i(T)>>>16);y=E>>>16,I&=65535,E&=65535,m[T]=E<<16|I}return new o(m,m[m.length-1]&-2147483648?-1:0)};function F(b,v){return b.add(D(v))}t.j=function(b){if(S(this)||S(b))return p;if(V(this))return V(b)?D(this).j(D(b)):D(D(this).j(b));if(V(b))return D(this.j(D(b)));if(0>this.l(w)&&0>b.l(w))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,m=[],y=0;y<2*v;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<b.g.length;T++){var I=this.i(y)>>>16,E=this.i(y)&65535,de=b.i(T)>>>16,ye=b.i(T)&65535;m[2*y+2*T]+=E*ye,P(m,2*y+2*T),m[2*y+2*T+1]+=I*ye,P(m,2*y+2*T+1),m[2*y+2*T+1]+=E*de,P(m,2*y+2*T+1),m[2*y+2*T+2]+=I*de,P(m,2*y+2*T+2)}for(y=0;y<v;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=v;y<2*v;y++)m[y]=0;return new o(m,0)};function P(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function C(b,v){this.g=b,this.h=v}function O(b,v){if(S(v))throw Error("division by zero");if(S(b))return new C(p,p);if(V(b))return v=O(D(b),v),new C(D(v.g),D(v.h));if(V(v))return v=O(b,D(v)),new C(D(v.g),v.h);if(30<b.g.length){if(V(b)||V(v))throw Error("slowDivide_ only works with positive integers.");for(var m=g,y=v;0>=y.l(b);)m=x(m),y=x(y);var T=N(m,1),I=N(y,1);for(y=N(y,2),m=N(m,2);!S(y);){var E=I.add(y);0>=E.l(b)&&(T=T.add(m),I=E),y=N(y,1),m=N(m,1)}return v=F(b,T.j(v)),new C(T,v)}for(T=p;0<=b.l(v);){for(m=Math.max(1,Math.floor(b.m()/v.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=u(m),E=I.j(v);V(E)||0<E.l(b);)m-=y,I=u(m),E=I.j(v);S(I)&&(I=g),T=T.add(I),b=F(b,E)}return new C(T,b)}t.A=function(b){return O(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)&b.i(y);return new o(m,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)|b.i(y);return new o(m,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)^b.i(y);return new o(m,this.h^b.h)};function x(b){for(var v=b.g.length+1,m=[],y=0;y<v;y++)m[y]=b.i(y)<<1|b.i(y-1)>>>31;return new o(m,b.h)}function N(b,v){var m=v>>5;v%=32;for(var y=b.g.length-m,T=[],I=0;I<y;I++)T[I]=0<v?b.i(I+m)>>>v|b.i(I+m+1)<<32-v:b.i(I+m);return new o(T,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Hr=o}).apply(typeof Fp<"u"?Fp:typeof self<"u"?self:typeof window<"u"?window:{});var fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iv,ov,Oi,av,Sa,_u,cv,lv,uv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fa=="object"&&fa];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var k=a[_];if(!(k in f))break e;f=f[k]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,k={next:function(){if(!_&&f<a.length){var L=f++;return{value:h(L,a[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,_),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function w(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,k,L){for(var X=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)X[Ve-2]=arguments[Ve];return h.prototype[k].apply(_,X)}}function V(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function D(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(l(_)){const k=a.length||0,L=_.length||0;a.length=k+L;for(let X=0;X<L;X++)a[k+X]=_[X]}else a.push(_)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function P(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var x=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function N(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function b(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(a,h){let f,_;for(let k=1;k<arguments.length;k++){_=arguments[k];for(f in _)a[f]=_[f];for(let L=0;L<m.length;L++)f=m[L],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function T(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function I(a){c.setTimeout(()=>{throw a},0)}function E(){var a=$e;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,f){const _=ye.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var ye=new F(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,W=!1,$e=new de,Zt=()=>{const a=c.Promise.resolve(void 0);Q=()=>{a.then(qt)}};var qt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){I(f)}var h=ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var Gn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function hn(a,h){if(qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(x){e:{try{O(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:st[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&hn.aa.h.call(this)}}S(hn,qe);var st={2:"touch",3:"pen",4:"mouse"};hn.prototype.h=function(){hn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ne=0;function ee(a,h,f,_,k){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=k,this.key=++ne,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,h,f,_,k){var L=a.toString();a=this.g[L],a||(a=this.g[L]=[],this.h++);var X=A(a,h,_,k);return-1<X?(h=a[X],f||(h.fa=!1)):(h=new ee(h,this.src,L,!!_,k),h.fa=f,a.push(h)),h};function Ne(a,h){var f=h.type;if(f in a.g){var _=a.g[f],k=Array.prototype.indexOf.call(_,h,void 0),L;(L=0<=k)&&Array.prototype.splice.call(_,k,1),L&&(ie(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function A(a,h,f,_){for(var k=0;k<a.length;++k){var L=a[k];if(!L.da&&L.listener==h&&L.capture==!!f&&L.ha==_)return k}return-1}var R="closure_lm_"+(1e6*Math.random()|0),M={};function $(a,h,f,_,k){if(Array.isArray(h)){for(var L=0;L<h.length;L++)$(a,h[L],f,_,k);return null}return f=ce(f),a&&a[B]?a.K(h,f,u(_)?!!_.capture:!!_,k):U(a,h,f,!1,_,k)}function U(a,h,f,_,k,L){if(!h)throw Error("Invalid event type");var X=u(k)?!!k.capture:!!k,Ve=te(a);if(Ve||(a[R]=Ve=new Ee(a)),f=Ve.add(h,f,_,X,L),f.proxy)return f;if(_=Y(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Gn||(k=X),k===void 0&&(k=!1),a.addEventListener(h.toString(),_,k);else if(a.attachEvent)a.attachEvent(J(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=q;return a}function Z(a,h,f,_,k){if(Array.isArray(h))for(var L=0;L<h.length;L++)Z(a,h[L],f,_,k);else _=u(_)?!!_.capture:!!_,f=ce(f),a&&a[B]?(a=a.i,h=String(h).toString(),h in a.g&&(L=a.g[h],f=A(L,f,_,k),-1<f&&(ie(L[f]),Array.prototype.splice.call(L,f,1),L.length==0&&(delete a.g[h],a.h--)))):a&&(a=te(a))&&(h=a.g[h.toString()],a=-1,h&&(a=A(h,f,_,k)),(f=-1<a?h[a]:null)&&z(f))}function z(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[B])Ne(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(J(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=te(h))?(Ne(f,a),f.h==0&&(f.src=null,h[R]=null)):ie(a)}}}function J(a){return a in M?M[a]:M[a]="on"+a}function q(a,h){if(a.da)a=!0;else{h=new hn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&z(a),a=f.call(_,h)}return a}function te(a){return a=a[R],a instanceof Ee?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[le]||(a[le]=function(h){return a.handleEvent(h)}),a[le])}function ae(){je.call(this),this.i=new Ee(this),this.M=this,this.F=null}S(ae,je),ae.prototype[B]=!0,ae.prototype.removeEventListener=function(a,h,f,_){Z(this,a,h,f,_)};function he(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new qe(h,a);else if(h instanceof qe)h.target=h.target||a;else{var k=h;h=new qe(_,a),y(h,k)}if(k=!0,f)for(var L=f.length-1;0<=L;L--){var X=h.g=f[L];k=Pe(X,_,!0,h)&&k}if(X=h.g=a,k=Pe(X,_,!0,h)&&k,k=Pe(X,_,!1,h)&&k,f)for(L=0;L<f.length;L++)X=h.g=f[L],k=Pe(X,_,!1,h)&&k}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ie(f[_]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ae.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function Pe(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,L=0;L<h.length;++L){var X=h[L];if(X&&!X.da&&X.capture==f){var Ve=X.listener,lt=X.ha||X.src;X.fa&&Ne(a.i,X),k=Ve.call(lt,_)!==!1&&k}}return k&&!_.defaultPrevented}function Ae(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Ge(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,Ge(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Dt extends je{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(a){je.call(this),this.h=a,this.g={}}S(Ht,je);var ci=[];function Qn(a){N(a.g,function(h,f){this.g.hasOwnProperty(f)&&z(h)},a),a.g={}}Ht.prototype.N=function(){Ht.aa.N.call(this),Qn(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=c.JSON.stringify,It=c.JSON.parse,Kt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function fs(){}fs.prototype.h=null;function rd(a){return a.h||(a.h=a.i())}function sd(){}var li={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Jc(){qe.call(this,"d")}S(Jc,qe);function Xc(){qe.call(this,"c")}S(Xc,qe);var Cr={},id=null;function Uo(){return id=id||new ae}Cr.La="serverreachability";function od(a){qe.call(this,Cr.La,a)}S(od,qe);function ui(a){const h=Uo();he(h,new od(h))}Cr.STAT_EVENT="statevent";function ad(a,h){qe.call(this,Cr.STAT_EVENT,a),this.stat=h}S(ad,qe);function At(a){const h=Uo();he(h,new ad(h,a))}Cr.Ma="timingevent";function cd(a,h){qe.call(this,Cr.Ma,a),this.size=h}S(cd,qe);function hi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function di(){this.g=!0}di.prototype.xa=function(){this.g=!1};function NE(a,h,f,_,k,L){a.info(function(){if(a.g)if(L)for(var X="",Ve=L.split("&"),lt=0;lt<Ve.length;lt++){var Re=Ve[lt].split("=");if(1<Re.length){var gt=Re[0];Re=Re[1];var mt=gt.split("_");X=2<=mt.length&&mt[1]=="type"?X+(gt+"="+Re+"&"):X+(gt+"=redacted&")}}else X=null;else X=L;return"XMLHTTP REQ ("+_+") [attempt "+k+"]: "+h+`
`+f+`
`+X})}function DE(a,h,f,_,k,L,X){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+k+"]: "+h+`
`+f+`
`+L+" "+X})}function ps(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+ME(a,f)+(_?" "+_:"")})}function VE(a,h){a.info(function(){return"TIMEOUT: "+h})}di.prototype.info=function(){};function ME(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var k=_[1];if(Array.isArray(k)&&!(1>k.length)){var L=k[0];if(L!="noop"&&L!="stop"&&L!="close")for(var X=1;X<k.length;X++)k[X]=""}}}}return ds(f)}catch{return h}}var Bo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ld={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zc;function $o(){}S($o,fs),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},Zc=new $o;function Yn(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new Ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ud}function ud(){this.i=null,this.g="",this.h=!1}var hd={},el={};function tl(a,h,f){a.L=1,a.v=Ko(An(h)),a.m=f,a.P=!0,dd(a,null)}function dd(a,h){a.F=Date.now(),jo(a),a.A=An(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Rd(f.i,"t",_),a.C=0,f=a.j.J,a.h=new ud,a.g=Hd(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Dt(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(ci[0]=k.toString()),k=ci);for(var L=0;L<k.length;L++){var X=$(f,k[L],_||h.handleEvent,!1,h.h||h);if(!X)break;h.g[X.key]=X}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ui(),NE(a.i,a.u,a.A,a.l,a.R,a.m)}Yn.prototype.ca=function(a){a=a.target;const h=this.M;h&&bn(a)==3?h.j():this.Y(a)},Yn.prototype.Y=function(a){try{if(a==this.g)e:{const mt=bn(this.g);var h=this.g.Ba();const _s=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Dd(this.g)))){this.J||mt!=4||h==7||(h==8||0>=_s?ui(3):ui(2)),nl(this);var f=this.g.Z();this.X=f;t:if(fd(this)){var _=Dd(this.g);a="";var k=_.length,L=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),fi(this);var X="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(L&&h==k-1)});_.length=0,this.h.g+=a,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=f==200,DE(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,lt=this.g;if((Ve=lt.g?lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(Ve)){var Re=Ve;break t}}Re=null}if(f=Re)ps(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rl(this,f);else{this.o=!1,this.s=3,At(12),Pr(this),fi(this);break e}}if(this.P){f=!0;let en;for(;!this.J&&this.C<X.length;)if(en=LE(this,X),en==el){mt==4&&(this.s=4,At(14),f=!1),ps(this.i,this.l,null,"[Incomplete Response]");break}else if(en==hd){this.s=4,At(15),ps(this.i,this.l,X,"[Invalid Chunk]"),f=!1;break}else ps(this.i,this.l,en,null),rl(this,en);if(fd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||X.length!=0||this.h.h||(this.s=1,At(16),f=!1),this.o=this.o&&f,!f)ps(this.i,this.l,X,"[Invalid Chunked Response]"),Pr(this),fi(this);else if(0<X.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),ll(gt),gt.M=!0,At(11))}}else ps(this.i,this.l,X,null),rl(this,X);mt==4&&Pr(this),this.o&&!this.J&&(mt==4?Bd(this.j,this):(this.o=!1,jo(this)))}else ZE(this.g),f==400&&0<X.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),Pr(this),fi(this)}}}catch{}finally{}};function fd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function LE(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?el:(f=Number(h.substring(f,_)),isNaN(f)?hd:(_+=1,_+f>h.length?el:(h=h.slice(_,_+f),a.C=_+f,h)))}Yn.prototype.cancel=function(){this.J=!0,Pr(this)};function jo(a){a.S=Date.now()+a.I,pd(a,a.I)}function pd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=hi(g(a.ba,a),h)}function nl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Yn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(VE(this.i,this.A),this.L!=2&&(ui(),At(17)),Pr(this),this.s=2,fi(this)):pd(this,this.S-a)};function fi(a){a.j.G==0||a.J||Bd(a.j,a)}function Pr(a){nl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Qn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function rl(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||sl(f.h,a))){if(!a.K&&sl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var k=_;if(k[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Yo(f),Go(f);else break e;cl(f),At(18)}}else f.za=k[1],0<f.za-f.T&&37500>k[2]&&f.F&&f.v==0&&!f.C&&(f.C=hi(g(f.Za,f),6e3));if(1>=_d(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Or(f,11)}else if((a.K||f.g==a)&&Yo(f),!P(h))for(k=f.Da.g.parse(h),h=0;h<k.length;h++){let Re=k[h];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const gt=Re[3];gt!=null&&(f.la=gt,f.j.info("VER="+f.la));const mt=Re[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const _s=Re[5];_s!=null&&typeof _s=="number"&&0<_s&&(_=1.5*_s,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const en=a.g;if(en){const Xo=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var L=_.h;L.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(il(L,L.h),L.h=null))}if(_.D){const ul=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;ul&&(_.ya=ul,xe(_.I,_.D,ul))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var X=a;if(_.qa=qd(_,_.J?_.ia:null,_.W),X.K){yd(_.h,X);var Ve=X,lt=_.L;lt&&(Ve.I=lt),Ve.B&&(nl(Ve),jo(Ve)),_.g=X}else Fd(_);0<f.i.length&&Qo(f)}else Re[0]!="stop"&&Re[0]!="close"||Or(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Or(f,7):al(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}ui(4)}catch{}}var xE=class{constructor(a,h){this.g=a,this.map=h}};function gd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function md(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function _d(a){return a.h?1:a.g?a.g.size:0}function sl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function il(a,h){a.g?a.g.add(h):a.h=h}function yd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}gd.prototype.cancel=function(){if(this.i=vd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return V(a.i)}function FE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function UE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function Ed(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=UE(a),_=FE(a),k=_.length,L=0;L<k;L++)h.call(void 0,_[L],f&&f[L],a)}var Td=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BE(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),k=null;if(0<=_){var L=a[f].substring(0,_);k=a[f].substring(_+1)}else L=a[f];h(L,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,qo(this,a.j),this.o=a.o,this.g=a.g,Ho(this,a.s),this.l=a.l;var h=a.i,f=new mi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),wd(this,f),this.m=a.m}else a&&(h=String(a).match(Td))?(this.h=!1,qo(this,h[1]||"",!0),this.o=pi(h[2]||""),this.g=pi(h[3]||"",!0),Ho(this,h[4]),this.l=pi(h[5]||"",!0),wd(this,h[6]||"",!0),this.m=pi(h[7]||"")):(this.h=!1,this.i=new mi(null,this.h))}kr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(gi(h,Id,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(gi(h,Id,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(gi(f,f.charAt(0)=="/"?qE:jE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",gi(f,KE)),a.join("")};function An(a){return new kr(a)}function qo(a,h,f){a.j=f?pi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ho(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function wd(a,h,f){h instanceof mi?(a.i=h,WE(a.i,a.h)):(f||(h=gi(h,HE)),a.i=new mi(h,a.h))}function xe(a,h,f){a.i.set(h,f)}function Ko(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function pi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function gi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,$E),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $E(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Id=/[#\/\?@]/g,jE=/[#\?:]/g,qE=/[#\?]/g,HE=/[#\?@]/g,KE=/#/g;function mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Jn(a){a.g||(a.g=new Map,a.h=0,a.i&&BE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=mi.prototype,t.add=function(a,h){Jn(this),this.i=null,a=gs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Ad(a,h){Jn(a),h=gs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function bd(a,h){return Jn(a),h=gs(a,h),a.g.has(h)}t.forEach=function(a,h){Jn(this),this.g.forEach(function(f,_){f.forEach(function(k){a.call(h,k,_,this)},this)},this)},t.na=function(){Jn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const k=a[_];for(let L=0;L<k.length;L++)f.push(h[_])}return f},t.V=function(a){Jn(this);let h=[];if(typeof a=="string")bd(this,a)&&(h=h.concat(this.g.get(gs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return Jn(this),this.i=null,a=gs(this,a),bd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Rd(a,h,f){Ad(a,h),0<f.length&&(a.i=null,a.g.set(gs(a,h),V(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const L=encodeURIComponent(String(_)),X=this.V(_);for(_=0;_<X.length;_++){var k=L;X[_]!==""&&(k+="="+encodeURIComponent(String(X[_]))),a.push(k)}}return this.i=a.join("&")};function gs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function WE(a,h){h&&!a.j&&(Jn(a),a.i=null,a.g.forEach(function(f,_){var k=_.toLowerCase();_!=k&&(Ad(this,_),Rd(this,k,f))},a)),a.j=h}function zE(a,h){const f=new di;if(c.Image){const _=new Image;_.onload=w(Xn,f,"TestLoadImage: loaded",!0,h,_),_.onerror=w(Xn,f,"TestLoadImage: error",!1,h,_),_.onabort=w(Xn,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=w(Xn,f,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function GE(a,h){const f=new di,_=new AbortController,k=setTimeout(()=>{_.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(L=>{clearTimeout(k),L.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),Xn(f,"TestPingServer: error",!1,h)})}function Xn(a,h,f,_,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),_(f)}catch{}}function QE(){this.g=new Kt}function YE(a,h,f){const _=f||"";try{Ed(a,function(k,L){let X=k;u(k)&&(X=ds(k)),h.push(_+L+"="+encodeURIComponent(X))})}catch(k){throw h.push(_+"type="+encodeURIComponent("_badmap")),k}}function _i(a){this.l=a.Ub||null,this.j=a.eb||!1}S(_i,fs),_i.prototype.g=function(){return new Wo(this.l,this.j)},_i.prototype.i=function(a){return function(){return a}}({});function Wo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Wo,ae),t=Wo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,vi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?yi(this):vi(this),this.readyState==3&&Sd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,yi(this))},t.Qa=function(a){this.g&&(this.response=a,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,vi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function vi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Cd(a){let h="";return N(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function ol(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Cd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):xe(a,h,f))}function We(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(We,ae);var JE=/^https?$/i,XE=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zc.g(),this.v=this.o?rd(this.o):rd(Zc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(L){Pd(this,L);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var k in _)f.set(k,_[k]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())f.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(L=>L.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(XE,h,void 0))||_||k||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,X]of f)this.g.setRequestHeader(L,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nd(this),this.u=!0,this.g.send(a),this.u=!1}catch(L){Pd(this,L)}};function Pd(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,kd(a),zo(a)}function kd(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zo(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Od(this):this.bb())},t.bb=function(){Od(this)};function Od(a){if(a.h&&typeof o<"u"&&(!a.v[1]||bn(a)!=4||a.Z()!=2)){if(a.u&&bn(a)==4)Ae(a.Ea,0,a);else if(he(a,"readystatechange"),bn(a)==4){a.h=!1;try{const X=a.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=X===0){var k=String(a.D).match(Td)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),_=!JE.test(k?k.toLowerCase():"")}f=_}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var L=2<bn(a)?a.g.statusText:""}catch{L=""}a.l=L+" ["+a.Z()+"]",kd(a)}}finally{zo(a)}}}}function zo(a,h){if(a.g){Nd(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||he(a,"ready");try{f.onreadystatechange=_}catch{}}}function Nd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function bn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),It(h)}};function Dd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ZE(a){const h={};a=(a.g&&2<=bn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(P(a[_]))continue;var f=T(a[_]);const k=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const L=h[k]||[];h[k]=L,L.push(f)}b(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Vd(a){this.Aa=0,this.i=[],this.j=new di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,a),this.cb=Ei("retryDelaySeedMs",1e4,a),this.Wa=Ei("forwardChannelMaxRetries",2,a),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new gd(a&&a.concurrentRequestLimit),this.Da=new QE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Vd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){At(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=qd(this,null,this.W),Qo(this)};function al(a){if(Md(a),a.G==3){var h=a.U++,f=An(a.I);if(xe(f,"SID",a.K),xe(f,"RID",h),xe(f,"TYPE","terminate"),Ti(a,f),h=new Yn(a,a.j,h),h.L=2,h.v=Ko(An(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Hd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),jo(h)}jd(a)}function Go(a){a.g&&(ll(a),a.g.cancel(),a.g=null)}function Md(a){Go(a),a.u&&(c.clearTimeout(a.u),a.u=null),Yo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Qo(a){if(!md(a.h)&&!a.s){a.s=!0;var h=a.Ga;Q||Zt(),W||(Q(),W=!0),$e.add(h,a),a.B=0}}function eT(a,h){return _d(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=hi(g(a.Ga,a,h),$d(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new Yn(this,this.j,a);let L=this.o;if(this.S&&(L?(L=v(L),y(L,this.S)):L=this.S),this.m!==null||this.O||(k.H=L,L=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=xd(this,k,h),f=An(this.I),xe(f,"RID",a),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),Ti(this,f),L&&(this.O?h="headers="+encodeURIComponent(String(Cd(L)))+"&"+h:this.m&&ol(f,this.m,L)),il(this.h,k),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",h),xe(f,"SID","null"),k.T=!0,tl(k,f,null)):tl(k,f,h),this.G=2}}else this.G==3&&(a?Ld(this,a):this.i.length==0||md(this.h)||Ld(this))};function Ld(a,h){var f;h?f=h.l:f=a.U++;const _=An(a.I);xe(_,"SID",a.K),xe(_,"RID",f),xe(_,"AID",a.T),Ti(a,_),a.m&&a.o&&ol(_,a.m,a.o),f=new Yn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=xd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),il(a.h,f),tl(f,_,h)}function Ti(a,h){a.H&&N(a.H,function(f,_){xe(h,_,f)}),a.l&&Ed({},function(f,_){xe(h,_,f)})}function xd(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let L=-1;for(;;){const X=["count="+f];L==-1?0<f?(L=k[0].g,X.push("ofs="+L)):L=0:X.push("ofs="+L);let Ve=!0;for(let lt=0;lt<f;lt++){let Re=k[lt].g;const gt=k[lt].map;if(Re-=L,0>Re)L=Math.max(0,k[lt].g-100),Ve=!1;else try{YE(gt,X,"req"+Re+"_")}catch{_&&_(gt)}}if(Ve){_=X.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function Fd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Q||Zt(),W||(Q(),W=!0),$e.add(h,a),a.v=0}}function cl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=hi(g(a.Fa,a),$d(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ud(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=hi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Go(this),Ud(this))};function ll(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ud(a){a.g=new Yn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=An(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),Ti(a,h),a.m&&a.o&&ol(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Ko(An(h)),f.m=null,f.P=!0,dd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Go(this),cl(this),At(19))};function Yo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Bd(a,h){var f=null;if(a.g==h){Yo(a),ll(a),a.g=null;var _=2}else if(sl(a.h,h))f=h.D,yd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;_=Uo(),he(_,new cd(_,f)),Qo(a)}else Fd(a);else if(k=h.s,k==3||k==0&&0<h.X||!(_==1&&eT(a,h)||_==2&&cl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),k){case 1:Or(a,5);break;case 4:Or(a,10);break;case 3:Or(a,6);break;default:Or(a,2)}}}function $d(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Or(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const k=!_;_=new kr(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||qo(_,"https"),Ko(_),k?zE(_.toString(),f):GE(_.toString(),f)}else At(2);a.G=0,a.l&&a.l.sa(h),jd(a),Md(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function jd(a){if(a.G=0,a.ka=[],a.l){const h=vd(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ka,h),D(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function qd(a,h,f){var _=f instanceof kr?An(f):new kr(f);if(_.g!="")h&&(_.g=h+"."+_.g),Ho(_,_.s);else{var k=c.location;_=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var L=new kr(null);_&&qo(L,_),h&&(L.g=h),k&&Ho(L,k),f&&(L.l=f),_=L}return f=a.D,h=a.ya,f&&h&&xe(_,f,h),xe(_,"VER",a.la),Ti(a,_),_}function Hd(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new _i({eb:f})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Kd(){}t=Kd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Jo(){}Jo.prototype.g=function(a,h){return new Vt(a,h)};function Vt(a,h){ae.call(this),this.g=new Vd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!P(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!P(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new ms(this)}S(Vt,ae),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){al(this.g)},Vt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=ds(a),a=f);h.i.push(new xE(h.Ya++,a)),h.G==3&&Qo(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,al(this.g),delete this.g,Vt.aa.N.call(this)};function Wd(a){Jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(Wd,Jc);function zd(){Xc.call(this),this.status=1}S(zd,Xc);function ms(a){this.g=a}S(ms,Kd),ms.prototype.ua=function(){he(this.g,"a")},ms.prototype.ta=function(a){he(this.g,new Wd(a))},ms.prototype.sa=function(a){he(this.g,new zd)},ms.prototype.ra=function(){he(this.g,"b")},Jo.prototype.createWebChannel=Jo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,uv=function(){return new Jo},lv=function(){return Uo()},cv=Cr,_u={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bo.NO_ERROR=0,Bo.TIMEOUT=8,Bo.HTTP_ERROR=6,Sa=Bo,ld.COMPLETE="complete",av=ld,sd.EventType=li,li.OPEN="a",li.CLOSE="b",li.ERROR="c",li.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Oi=sd,ov=_i,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,iv=We}).apply(typeof fa<"u"?fa:typeof self<"u"?self:typeof window<"u"?window:{});const Up="@firebase/firestore";/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let ri="10.12.1";/**
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
 */const Zr=new kc("@firebase/firestore");function bi(){return Zr.logLevel}function oe(t,...e){if(Zr.logLevel<=Te.DEBUG){const n=e.map(Rh);Zr.debug(`Firestore (${ri}): ${t}`,...n)}}function $n(t,...e){if(Zr.logLevel<=Te.ERROR){const n=e.map(Rh);Zr.error(`Firestore (${ri}): ${t}`,...n)}}function Ws(t,...e){if(Zr.logLevel<=Te.WARN){const n=e.map(Rh);Zr.warn(`Firestore (${ri}): ${t}`,...n)}}function Rh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: `+t;throw $n(e),new Error(e)}function Le(t,e){t||ge()}function _e(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class _1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class y1{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new hv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new yt(e)}}class v1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class E1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new v1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class T1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class w1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,oe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new T1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=I1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class rt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new rt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new rt(0,0))}static max(){return new me(new rt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class co{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Fe extends co{construct(e,n,r){return new Fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Fe(n)}static emptyPath(){return new Fe([])}}const A1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends co{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return A1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new re(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new re(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new re(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Fe.fromString(e))}static fromName(e){return new ue(Fe.fromString(e).popFirst(5))}static empty(){return new ue(Fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Fe(e.slice()))}}function b1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new Ir(s,ue.empty(),e)}function R1(t){return new Ir(t.readTime,t.key,-1)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(me.min(),ue.empty(),-1)}static max(){return new Ir(me.max(),ue.empty(),-1)}}function S1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class P1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==C1)throw t;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,r)=>{n(e)})}static reject(e){return new H((n,r)=>{r(e)})}static waitFor(e){return new H((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=H.resolve(!1);for(const r of e)n=n.next(s=>s?H.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new H((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new H((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function k1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function No(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Sh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Sh.oe=-1;function xc(t){return t==null}function tc(t){return t===0&&1/t==-1/0}function O1(t){return typeof t=="number"&&Number.isInteger(t)&&!tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ke{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new Ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new Ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $p(this.data.getIterator())}getIteratorFrom(e){return new $p(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class $p{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new rn([])}unionWith(e){let n=new dt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pv("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const N1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(Le(!!t),typeof t=="string"){let e=0;const n=N1.exec(t);if(Le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ph(t){const e=t.mapValue.fields.__previous_value__;return Ch(e)?Ph(e):e}function lo(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class D1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ch(t)?4:V1(t)?9007199254740991:10:ge()}function In(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ar(s.timestampValue),c=Ar(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return es(s.bytesValue).isEqual(es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),c=Ze(i.doubleValue);return o===c?tc(o)===tc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return zs(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Bp(o)!==Bp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!In(o[l],c[l])))return!1;return!0}(t,e);default:return ge()}}function ho(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Gs(t,e){if(t===e)return 0;const n=ts(t),r=ts(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ze(i.integerValue||i.doubleValue),l=Ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return jp(t.timestampValue,e.timestampValue);case 4:return jp(lo(t),lo(e));case 5:return Se(t.stringValue,e.stringValue);case 6:return function(i,o){const c=es(i),l=es(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Se(c[u],l[u]);if(d!==0)return d}return Se(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Se(Ze(i.latitude),Ze(o.latitude));return c!==0?c:Se(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const d=Gs(c[u],l[u]);if(d)return d}return Se(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===ga.mapValue&&o===ga.mapValue)return 0;if(i===ga.mapValue)return 1;if(o===ga.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Se(l[p],d[p]);if(g!==0)return g;const w=Gs(c[l[p]],u[d[p]]);if(w!==0)return w}return Se(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=Ar(t),r=Ar(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function Qs(t){return yu(t)}function yu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=yu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${yu(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function qp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vu(t){return!!t&&"integerValue"in t}function kh(t){return!!t&&"arrayValue"in t}function Hp(t){return!!t&&"nullValue"in t}function Kp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function Hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function V1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hi(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Hi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ca(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){si(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Gt(Hi(this.value))}}function gv(t){const e=[];return si(t.fields,(n,r)=>{const s=new ht([n]);if(Ca(r)){const i=gv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new rn(e)}/**
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
 */class vt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new vt(e,0,me.min(),me.min(),me.min(),Gt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,me.min(),me.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,me.min(),me.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nc{constructor(e,n){this.position=e,this.inclusive=n}}function Wp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function M1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mv{}class et extends mv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new x1(e,n,r):n==="array-contains"?new B1(e,r):n==="in"?new $1(e,r):n==="not-in"?new j1(e,r):n==="array-contains-any"?new q1(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new F1(e,r):new U1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Gs(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(Gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ln extends mv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ln(e,n)}matches(e){return _v(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _v(t){return t.op==="and"}function yv(t){return L1(t)&&_v(t)}function L1(t){for(const e of t.filters)if(e instanceof ln)return!1;return!0}function Eu(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(yv(t))return t.filters.map(e=>Eu(e)).join(",");{const e=t.filters.map(n=>Eu(n)).join(",");return`${t.op}(${e})`}}function vv(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof ln?function(r,s){return s instanceof ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&vv(o,s.filters[c]),!0):!1}(t,e):void ge()}function Ev(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${Qs(n.value)}`}(t):t instanceof ln?function(n){return n.op.toString()+" {"+n.getFilters().map(Ev).join(" ,")+"}"}(t):"Filter"}class x1 extends et{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class F1 extends et{constructor(e,n){super(e,"in",n),this.keys=Tv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class U1 extends et{constructor(e,n){super(e,"not-in",n),this.keys=Tv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class B1 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kh(n)&&ho(n.arrayValue,this.value)}}class $1 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ho(this.value.arrayValue,n)}}class j1 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(ho(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ho(this.value.arrayValue,n)}}class q1 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ho(this.value.arrayValue,r))}}/**
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
 */class H1{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Gp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new H1(t,e,n,r,s,i,o)}function Oh(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Qs(r)).join(",")),e.ue=n}return e.ue}function Nh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zp(t.startAt,e.startAt)&&zp(t.endAt,e.endAt)}function Tu(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Do{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function K1(t,e,n,r,s,i,o,c){return new Do(t,e,n,r,s,i,o,c)}function Dh(t){return new Do(t)}function Qp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wv(t){return t.collectionGroup!==null}function Ki(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new dt(ht.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new rc(i,r))}),n.has(ht.keyField().canonicalString())||e.ce.push(new rc(ht.keyField(),r))}return e.ce}function yn(t){const e=_e(t);return e.le||(e.le=W1(e,Ki(t))),e.le}function W1(t,e){if(t.limitType==="F")return Gp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new rc(s.field,i)});const n=t.endAt?new nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nc(t.startAt.position,t.startAt.inclusive):null;return Gp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wu(t,e){const n=t.filters.concat([e]);return new Do(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Iu(t,e,n){return new Do(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fc(t,e){return Nh(yn(t),yn(e))&&t.limitType===e.limitType}function Iv(t){return`${Oh(yn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ev(s)).join(", ")}]`),xc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Qs(s)).join(",")),`Target(${r})`}(yn(t))}; limitType=${t.limitType})`}function Uc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ki(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=Wp(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Ki(r),s)||r.endAt&&!function(o,c,l){const u=Wp(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Ki(r),s))}(t,e)}function z1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Av(t){return(e,n)=>{let r=!1;for(const s of Ki(t)){const i=G1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function G1(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Gs(l,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fv(this.inner)}size(){return this.innerSize}}/**
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
 */const Q1=new Ke(ue.comparator);function jn(){return Q1}const bv=new Ke(ue.comparator);function Ni(...t){let e=bv;for(const n of t)e=e.insert(n.key,n);return e}function Rv(t){let e=bv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return Wi()}function Sv(){return Wi()}function Wi(){return new ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const Y1=new Ke(ue.comparator),J1=new dt(ue.comparator);function ve(...t){let e=J1;for(const n of t)e=e.add(n);return e}const X1=new dt(Se);function Z1(){return X1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tc(e)?"-0":e}}function Pv(t){return{integerValue:""+t}}function ek(t,e){return O1(e)?Pv(e):Cv(t,e)}/**
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
 */class Bc{constructor(){this._=void 0}}function tk(t,e,n){return t instanceof sc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ch(i)&&(i=Ph(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof fo?Ov(t,e):t instanceof po?Nv(t,e):function(s,i){const o=kv(s,i),c=Yp(o)+Yp(s.Pe);return vu(o)&&vu(s.Pe)?Pv(c):Cv(s.serializer,c)}(t,e)}function nk(t,e,n){return t instanceof fo?Ov(t,e):t instanceof po?Nv(t,e):n}function kv(t,e){return t instanceof ic?function(r){return vu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class sc extends Bc{}class fo extends Bc{constructor(e){super(),this.elements=e}}function Ov(t,e){const n=Dv(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class po extends Bc{constructor(e){super(),this.elements=e}}function Nv(t,e){let n=Dv(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class ic extends Bc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Yp(t){return Ze(t.integerValue||t.doubleValue)}function Dv(t){return kh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof fo&&s instanceof fo||r instanceof po&&s instanceof po?zs(r.elements,s.elements,In):r instanceof ic&&s instanceof ic?In(r.Pe,s.Pe):r instanceof sc&&s instanceof sc}(t.transform,e.transform)}class sk{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $c{}function Vv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vh(t.key,vn.none()):new Vo(t.key,t.data,vn.none());{const n=t.data,r=Gt.empty();let s=new dt(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new us(t.key,r,new rn(s.toArray()),vn.none())}}function ik(t,e,n){t instanceof Vo?function(s,i,o){const c=s.value.clone(),l=Xp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof us?function(s,i,o){if(!Pa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Xp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Mv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof Vo?function(i,o,c,l){if(!Pa(i.precondition,o))return c;const u=i.value.clone(),d=Zp(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof us?function(i,o,c,l){if(!Pa(i.precondition,o))return c;const u=Zp(i.fieldTransforms,l,o),d=o.data;return d.setAll(Mv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Pa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function ok(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=kv(r.transform,s||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(r.field,i))}return n||null}function Jp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zs(r,s,(i,o)=>rk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends $c{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class us extends $c{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xp(t,e,n){const r=new Map;Le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,nk(o,c,n[s]))}return r}function Zp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tk(i,o,e))}return r}class Vh extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ak extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ck{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ik(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Vv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&zs(this.mutations,e.mutations,(n,r)=>Jp(n,r))&&zs(this.baseMutations,e.baseMutations,(n,r)=>Jp(n,r))}}class Mh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Le(e.mutations.length===r.length);let s=function(){return Y1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Mh(e,n,r,s)}}/**
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
 */class lk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class uk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,we;function hk(t){switch(t){default:return ge();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function Lv(t){if(t===void 0)return $n("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ye.OK:return j.OK;case Ye.CANCELLED:return j.CANCELLED;case Ye.UNKNOWN:return j.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return j.INTERNAL;case Ye.UNAVAILABLE:return j.UNAVAILABLE;case Ye.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ye.NOT_FOUND:return j.NOT_FOUND;case Ye.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ye.ABORTED:return j.ABORTED;case Ye.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ye.DATA_LOSS:return j.DATA_LOSS;default:return ge()}}(we=Ye||(Ye={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function dk(){return new TextEncoder}/**
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
 */const fk=new Hr([4294967295,4294967295],0);function eg(t){const e=dk().encode(t),n=new sv;return n.update(e),new Uint8Array(n.digest())}function tg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Lh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Di(`Invalid padding: ${n}`);if(r<0)throw new Di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Di(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(fk)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=eg(e),[r,s]=tg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Lh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=eg(e),[r,s]=tg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class jc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Mo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jc(me.min(),s,new Ke(Se),jn(),ve())}}class Mo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mo(r,n,ve(),ve(),ve())}}/**
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
 */class ka{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class xv{constructor(e,n){this.targetId=e,this.me=n}}class Fv{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ng{constructor(){this.fe=0,this.ge=sg(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new Mo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=sg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pk{constructor(e){this.Le=e,this.Be=new Map,this.ke=jn(),this.qe=rg(),this.Qe=new Ke(Se)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Tu(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,vt.newNoDocument(o,me.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=es(r).toUint8Array()}catch(l){if(l instanceof pv)return Ws("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Lh(o,s,i)}catch(l){return Ws(l instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Tu(c.target)){const l=new ue(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,vt.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ve();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new jc(e,n,this.Qe,this.ke,r);return this.ke=jn(),this.qe=rg(),this.Qe=new Ke(Se),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ng,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new dt(Se),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ng),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function rg(){return new Ke(ue.comparator)}function sg(){return new Ke(ue.comparator)}const gk={asc:"ASCENDING",desc:"DESCENDING"},mk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_k={and:"AND",or:"OR"};class yk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Au(t,e){return t.useProto3Json||xc(e)?e:{value:e}}function oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Uv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vk(t,e){return oc(t,e.toTimestamp())}function En(t){return Le(!!t),me.fromTimestamp(function(n){const r=Ar(n);return new rt(r.seconds,r.nanos)}(t))}function xh(t,e){return bu(t,e).canonicalString()}function bu(t,e){const n=function(s){return new Fe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bv(t){const e=Fe.fromString(t);return Le(Kv(e)),e}function Ru(t,e){return xh(t.databaseId,e.path)}function Dl(t,e){const n=Bv(e);if(n.get(1)!==t.databaseId.projectId)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(jv(n))}function $v(t,e){return xh(t.databaseId,e)}function Ek(t){const e=Bv(t);return e.length===4?Fe.emptyPath():jv(e)}function Su(t){return new Fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jv(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ig(t,e,n){return{name:Ru(t,e),fields:n.value.mapValue.fields}}function Tk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Le(d===void 0||typeof d=="string"),wt.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),wt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?j.UNKNOWN:Lv(u.code);return new re(d,u.message||"")}(o);n=new Fv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dl(t,r.document.name),i=En(r.document.updateTime),o=r.document.createTime?En(r.document.createTime):me.min(),c=new Gt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ka(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Dl(t,r.document),i=r.readTime?En(r.readTime):me.min(),o=vt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ka([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Dl(t,r.document),i=r.removedTargetIds||[];n=new ka([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uk(s,i),c=r.targetId;n=new xv(c,o)}}return n}function wk(t,e){let n;if(e instanceof Vo)n={update:ig(t,e.key,e.value)};else if(e instanceof Vh)n={delete:Ru(t,e.key)};else if(e instanceof us)n={update:ig(t,e.key,e.data),updateMask:Ok(e.fieldMask)};else{if(!(e instanceof ak))return ge();n={verify:Ru(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof sc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ic)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function Ik(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?En(s.updateTime):En(i);return o.isEqual(me.min())&&(o=En(i)),new sk(o,s.transformResults||[])}(n,e))):[]}function Ak(t,e){return{documents:[$v(t,e.path)]}}function bk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=$v(t,s);const i=function(u){if(u.length!==0)return Hv(ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:ws(g.field),direction:Ck(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Au(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function Rk(t){let e=Ek(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Le(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=qv(p);return g instanceof ln&&yv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new rc(Is(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,xc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,w=p.values||[];return new nc(w,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,w=p.values||[];return new nc(w,g)}(n.endAt)),K1(e,s,o,i,c,"F",l,u)}function Sk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Is(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Is(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Is(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Is(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Is(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ln.create(n.compositeFilter.filters.map(r=>qv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function Ck(t){return gk[t]}function Pk(t){return mk[t]}function kk(t){return _k[t]}function ws(t){return{fieldPath:t.canonicalString()}}function Is(t){return ht.fromServerFormat(t.fieldPath)}function Hv(t){return t instanceof et?function(n){if(n.op==="=="){if(Kp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NAN"}};if(Hp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NAN"}};if(Hp(n.value))return{unaryFilter:{field:ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ws(n.field),op:Pk(n.op),value:n.value}}}(t):t instanceof ln?function(n){const r=n.getFilters().map(s=>Hv(s));return r.length===1?r[0]:{compositeFilter:{op:kk(n.op),filters:r}}}(t):ge()}function Ok(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Kv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class fr{constructor(e,n,r,s,i=me.min(),o=me.min(),c=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Nk{constructor(e){this.ct=e}}function Dk(t){const e=Rk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Iu(e,e.limit,"L"):e}/**
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
 */class Vk{constructor(){this._n=new Mk}addToCollectionParentIndex(e,n){return this._n.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Ir.min())}updateCollectionGroup(e,n,r){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class Mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Fe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Fe.comparator)).toArray()}}/**
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
 */class Ys{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Ys(0)}static Ln(){return new Ys(-1)}}/**
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
 */class Lk{constructor(){this.changes=new ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?H.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class xk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Fk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zi(r.mutation,s,rn.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ni();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=jn();const o=Wi(),c=function(){return Wi()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof us)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),zi(d.mutation,u,d.mutation.getFieldMask(),rt.now())):o.set(u.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new xk(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Wi();let s=new Ke((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||rn.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Sv();d.forEach(g=>{if(!i.has(g)){const w=Vv(n.get(g),r.get(g));w!==null&&p.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return H.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):H.resolve(Fr());let c=-1,l=i;return o.next(u=>H.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?H.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(d=>({batchId:c,changes:Rv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=Ni();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ni();return this.indexManager.getCollectionParents(e,i).next(c=>H.forEach(c,l=>{const u=function(p,g){return new Do(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,vt.newInvalidDocument(d)))});let c=Ni();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&zi(d.mutation,u,rn.empty(),rt.now()),Uc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return H.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:En(s.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Dk(s.bundledQuery),readTime:En(s.readTime)}}(n)),H.resolve()}}/**
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
 */class Bk{constructor(){this.overlays=new Ke(ue.comparator),this.hr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return H.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),H.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new ue(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return H.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Fr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Fr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return H.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lk(n,r));let i=this.hr.get(n);i===void 0&&(i=ve(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Fh{constructor(){this.Pr=new dt(ot.Ir),this.Tr=new dt(ot.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ot(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ot(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ue(new Fe([])),r=new ot(n,e),s=new ot(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ue(new Fe([])),r=new ot(n,e),s=new ot(n,e+1);let i=ve();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ot(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ot{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ue.comparator(e.key,n.key)||Se(e.pr,n.pr)}static Er(e,n){return Se(e.pr,n.pr)||ue.comparator(e.key,n.key)}}/**
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
 */class $k{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new dt(ot.Ir)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ck(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new ot(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ot(n,0),s=new ot(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Se);return n.forEach(s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),H.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ot(new ue(i),0);let c=new dt(Se);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),H.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return H.forEach(n.mutations,s=>{const i=new ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ot(n,0),s=this.wr.firstAfterOrEqual(r);return H.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jk{constructor(e){this.vr=e,this.docs=function(){return new Ke(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return H.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=jn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),H.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=jn();const o=n.path,c=new ue(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||S1(R1(d),r)<=0||(s.has(d.key)||Uc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Fr(e,n){return H.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qk(this)}getSize(e){return H.resolve(this.size)}}class qk extends Lk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),H.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Hk{constructor(e){this.persistence=e,this.Mr=new ii(n=>Oh(n),Nh),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Fh,this.targetCount=0,this.Lr=Ys.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),H.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Ys(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.qn(n),H.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),H.waitFor(i).next(()=>s)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return H.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),H.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return H.resolve(r)}containsKey(e,n){return H.resolve(this.Nr.containsKey(n))}}/**
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
 */class Kk{constructor(e,n){this.Br={},this.overlays={},this.kr=new Sh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Hk(this),this.indexManager=new Vk,this.remoteDocumentCache=function(s){return new jk(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Nk(n),this.$r=new Uk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Bk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new $k(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){oe("MemoryPersistence","Starting transaction:",e);const s=new Wk(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return H.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Wk extends P1{constructor(e){super(),this.currentSequenceNumber=e}}class Uh{constructor(e){this.persistence=e,this.zr=new Fh,this.jr=null}static Hr(e){return new Uh(e)}get Jr(){if(this.jr)return this.jr;throw ge()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),H.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),H.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.Jr,r=>{const s=ue.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return H.or([()=>H.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Bh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bh(e,n.fromCache,r,s)}}/**
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
 */class zk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Gk{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return x0()?8:k1(ft())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zk;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(bi()<=Te.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),H.resolve()):(bi()<=Te.DEBUG&&oe("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(bi()<=Te.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(n))):H.resolve())}ji(e,n){if(Qp(n))return H.resolve(null);let r=yn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Iu(n,null,"F"),r=yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Iu(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return Qp(n)||s.isEqual(me.min())?H.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?H.resolve(null):(bi()<=Te.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ts(n)),this.es(e,o,n,b1(s,-1)).next(c=>c))})}Zi(e,n){let r=new dt(Av(e));return n.forEach((s,i)=>{Uc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return bi()<=Te.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.zi.getDocumentsMatchingQuery(e,n,Ir.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Ke(Se),this.rs=new ii(i=>Oh(i),Nh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function Yk(t,e,n,r){return new Qk(t,e,n,r)}async function Wv(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function Jk(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,g=p.keys();let w=H.resolve();return g.forEach(S=>{w=w.next(()=>d.getEntry(l,S)).next(V=>{const D=u.docVersions.get(S);Le(D!==null),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),d.addEntry(V)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function zv(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function Xk(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(wt.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(p,w),function(V,D,F){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,w,d)&&c.push(n.Qr.updateTargetData(i,w))});let l=jn(),u=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Zk(i,o,e.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!r.isEqual(me.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return H.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function Zk(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=jn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(me.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):oe("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function eO(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function tO(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,H.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Cu(t,e,n){const r=_e(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!No(o))throw o;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function og(t,e,n){const r=_e(t);let s=me.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=_e(l),g=p.rs.get(d);return g!==void 0?H.resolve(p.ns.get(g)):p.Qr.getTargetData(u,d)}(r,o,yn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:ve())).next(c=>(nO(r,z1(e),c),{documents:c,hs:i})))}function nO(t,e,n){let r=t.ss.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class ag{constructor(){this.activeTargetIds=Z1()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rO{constructor(){this.no=new ag,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sO{io(e){}shutdown(){}}/**
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
 */class cg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ma=null;function Vl(){return ma===null?ma=function(){return 268435456+Math.round(2147483648*Math.random())}():ma++,"0x"+ma.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class oO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const _t="WebChannelConnection";class aO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=Vl(),l=this.vo(n,r.toUriEncodedString());oe("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(d=>(oe("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Ws("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ri}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=iO[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Vl();return new Promise((o,c)=>{const l=new iv;l.setWithCredentials(!0),l.listenOnce(av.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Sa.NO_ERROR:const d=l.getResponseJson();oe(_t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Sa.TIMEOUT:oe(_t,`RPC '${e}' ${i} timed out`),c(new re(j.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const p=l.getStatus();if(oe(_t,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const S=function(D){const F=D.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(F)>=0?F:j.UNKNOWN}(w.status);c(new re(S,w.message))}else c(new re(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new re(j.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{oe(_t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);oe(_t,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=Vl(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uv(),c=lv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new ov({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");oe(_t,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,w=!1;const S=new oO({lo:D=>{w?oe(_t,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(oe(_t,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),oe(_t,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},ho:()=>p.close()}),V=(D,F,P)=>{D.listen(F,C=>{try{P(C)}catch(O){setTimeout(()=>{throw O},0)}})};return V(p,Oi.EventType.OPEN,()=>{w||(oe(_t,`RPC '${e}' stream ${s} transport opened.`),S.mo())}),V(p,Oi.EventType.CLOSE,()=>{w||(w=!0,oe(_t,`RPC '${e}' stream ${s} transport closed`),S.po())}),V(p,Oi.EventType.ERROR,D=>{w||(w=!0,Ws(_t,`RPC '${e}' stream ${s} transport errored:`,D),S.po(new re(j.UNAVAILABLE,"The operation could not be completed")))}),V(p,Oi.EventType.MESSAGE,D=>{var F;if(!w){const P=D.data[0];Le(!!P);const C=P,O=C.error||((F=C[0])===null||F===void 0?void 0:F.error);if(O){oe(_t,`RPC '${e}' stream ${s} received error:`,O);const x=O.status;let N=function(m){const y=Ye[m];if(y!==void 0)return Lv(y)}(x),b=O.message;N===void 0&&(N=j.INTERNAL,b="Unknown error status: "+x+" with message "+O.message),w=!0,S.po(new re(N,b)),p.close()}else oe(_t,`RPC '${e}' stream ${s} received:`,P),S.yo(P)}}),V(c,cv.STAT_EVENT,D=>{D.stat===_u.PROXY?oe(_t,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===_u.NOPROXY&&oe(_t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Ml(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t){return new yk(t,!0)}/**
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
 */class Gv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&oe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Qv{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Gv(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===j.RESOURCE_EXHAUSTED?($n(n.toString()),$n("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new re(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cO extends Qv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Tk(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?En(o.readTime):me.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Su(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Tu(l)?{documents:Ak(i,l)}:{query:bk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Uv(i,o.resumeToken);const u=Au(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){c.readTime=oc(i,o.snapshotVersion.toTimestamp());const u=Au(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Sk(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Su(this.serializer),n.removeTarget=e,this.i_(n)}}class lO extends Qv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Ik(e.writeResults,e.commitTime),r=En(e.commitTime);return this.listener.A_(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Su(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wk(this.serializer,r))};this.i_(n)}}/**
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
 */class uO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,bu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(j.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,bu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(j.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class hO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($n(n),this.y_=!1):oe("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class dO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{hs(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.M_.add(4),await Lo(u),u.N_.set("Unknown"),u.M_.delete(4),await Hc(u)}(this))})}),this.N_=new hO(r,s)}}async function Hc(t){if(hs(t))for(const e of t.x_)await e(!0)}async function Lo(t){for(const e of t.x_)await e(!1)}function Yv(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Hh(n)?qh(n):oi(n).Xo()&&jh(n,e))}function $h(t,e){const n=_e(t),r=oi(n);n.F_.delete(e),r.Xo()&&Jv(n,e),n.F_.size===0&&(r.Xo()?r.n_():hs(n)&&n.N_.set("Unknown"))}function jh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}oi(t).P_(e)}function Jv(t,e){t.L_.xe(e),oi(t).I_(e)}function qh(t){t.L_=new pk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),oi(t).start(),t.N_.w_()}function Hh(t){return hs(t)&&!oi(t).Zo()&&t.F_.size>0}function hs(t){return _e(t).M_.size===0}function Xv(t){t.L_=void 0}async function fO(t){t.N_.set("Online")}async function pO(t){t.F_.forEach((e,n)=>{jh(t,e)})}async function gO(t,e){Xv(t),Hh(t)?(t.N_.D_(e),qh(t)):t.N_.set("Unknown")}async function mO(t,e,n){if(t.N_.set("Online"),e instanceof Fv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ac(t,r)}else if(e instanceof ka?t.L_.Ke(e):e instanceof xv?t.L_.He(e):t.L_.We(e),!n.isEqual(me.min()))try{const r=await zv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(u);d&&i.F_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(wt.EMPTY_BYTE_STRING,d.snapshotVersion)),Jv(i,l);const p=new fr(d.target,l,u,d.sequenceNumber);jh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){oe("RemoteStore","Failed to raise snapshot:",r),await ac(t,r)}}async function ac(t,e,n){if(!No(e))throw e;t.M_.add(1),await Lo(t),t.N_.set("Offline"),n||(n=()=>zv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Hc(t)})}function Zv(t,e){return e().catch(n=>ac(t,n,e))}async function Kc(t){const e=_e(t),n=br(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;_O(e);)try{const s=await eO(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,yO(e,s)}catch(s){await ac(e,s)}eE(e)&&tE(e)}function _O(t){return hs(t)&&t.v_.length<10}function yO(t,e){t.v_.push(e);const n=br(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function eE(t){return hs(t)&&!br(t).Zo()&&t.v_.length>0}function tE(t){br(t).start()}async function vO(t){br(t).V_()}async function EO(t){const e=br(t);for(const n of t.v_)e.d_(n.mutations)}async function TO(t,e,n){const r=t.v_.shift(),s=Mh.from(r,e,n);await Zv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Kc(t)}async function wO(t,e){e&&br(t).E_&&await async function(r,s){if(function(o){return hk(o)&&o!==j.ABORTED}(s.code)){const i=r.v_.shift();br(r).t_(),await Zv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Kc(r)}}(t,e),eE(t)&&tE(t)}async function lg(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const r=hs(n);n.M_.add(3),await Lo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Hc(n)}async function IO(t,e){const n=_e(t);e?(n.M_.delete(2),await Hc(n)):e||(n.M_.add(2),await Lo(n),n.N_.set("Unknown"))}function oi(t){return t.B_||(t.B_=function(n,r,s){const i=_e(n);return i.f_(),new cO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:fO.bind(null,t),To:pO.bind(null,t),Ao:gO.bind(null,t),h_:mO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Hh(t)?qh(t):t.N_.set("Unknown")):(await t.B_.stop(),Xv(t))})),t.B_}function br(t){return t.k_||(t.k_=function(n,r,s){const i=_e(n);return i.f_(),new lO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:vO.bind(null,t),Ao:wO.bind(null,t),R_:EO.bind(null,t),A_:TO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Kc(t)):(await t.k_.stop(),t.v_.length>0&&(oe("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Kh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Kh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wh(t,e){if($n("AsyncQueue",`${e}: ${t}`),No(t))return new re(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=Ni(),this.sortedSet=new Ke(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ug{constructor(){this.q_=new Ke(ue.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ge():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Js{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Js(e,n,Fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class AO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class bO{constructor(){this.queries=new ii(e=>Iv(e),Fc),this.onlineState="Unknown",this.z_=new Set}}async function nE(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new AO,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Wh(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&zh(n)}async function rE(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RO(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&zh(n)}function SO(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function zh(t){t.z_.forEach(e=>{e.next()})}var Pu,hg;(hg=Pu||(Pu={})).J_="default",hg.Cache="cache";class sE{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Js(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Pu.Cache}}/**
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
 */class iE{constructor(e){this.key=e}}class oE{constructor(e){this.key=e}}class CO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ve(),this.mutatedKeys=ve(),this.Ia=Av(e),this.Ta=new Fs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new ug,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),w=Uc(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),V=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let D=!1;g&&w?g.data.isEqual(w.data)?S!==V&&(r.track({type:3,doc:w}),D=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),D=!0,(l&&this.Ia(w,l)>0||u&&this.Ia(w,u)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),D=!0):g&&!w&&(r.track({type:1,doc:g}),D=!0,(l||u)&&(c=!0)),D&&(w?(o=o.add(w),i=V?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(w,S){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return V(w)-V(S)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Js(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ug,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ve(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new oE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new iE(r))}),n}pa(e){this.la=e.hs,this.Pa=ve();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Js.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class PO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kO{constructor(e){this.key=e,this.wa=!1}}class OO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ii(c=>Iv(c),Fc),this.Da=new Map,this.Ca=new Set,this.va=new Ke(ue.comparator),this.Fa=new Map,this.Ma=new Fh,this.xa={},this.Oa=new Map,this.Na=Ys.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function NO(t,e,n=!0){const r=dE(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await aE(r,e,n,!0),s}async function DO(t,e){const n=dE(t);await aE(n,e,!0,!1)}async function aE(t,e,n,r){const s=await tO(t.localStore,yn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await VO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Yv(t.remoteStore,s),c}async function VO(t,e,n,r,s){t.Ba=(p,g,w)=>async function(V,D,F,P){let C=D.view.da(F);C.Xi&&(C=await og(V.localStore,D.query,!1).then(({documents:b})=>D.view.da(b,C)));const O=P&&P.targetChanges.get(D.targetId),x=P&&P.targetMismatches.get(D.targetId)!=null,N=D.view.applyChanges(C,V.isPrimaryClient,O,x);return fg(V,D.targetId,N.fa),N.snapshot}(t,p,g,w);const i=await og(t.localStore,e,!0),o=new CO(e,i.hs),c=o.da(i.documents),l=Mo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);fg(t,n,u.fa);const d=new PO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function MO(t,e,n){const r=_e(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Fc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&$h(r.remoteStore,s.targetId),ku(r,s.targetId)}).catch(Oo)):(ku(r,s.targetId),await Cu(r.localStore,s.targetId,!0))}async function LO(t,e){const n=_e(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$h(n.remoteStore,r.targetId))}async function xO(t,e,n){const r=HO(t);try{const s=await function(o,c){const l=_e(o),u=rt.now(),d=c.reduce((w,S)=>w.add(S.key),ve());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=jn(),V=ve();return l.os.getEntries(w,d).next(D=>{S=D,S.forEach((F,P)=>{P.isValidDocument()||(V=V.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,S)).next(D=>{p=D;const F=[];for(const P of c){const C=ok(P,p.get(P.key).overlayedDocument);C!=null&&F.push(new us(P.key,C,gv(C.value.mapValue),vn.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,F,c)}).next(D=>{g=D;const F=D.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(w,D.batchId,F)})}).then(()=>({batchId:g.batchId,changes:Rv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Ke(Se)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await xo(r,s.changes),await Kc(r.remoteStore)}catch(s){const i=Wh(s,"Failed to persist write");n.reject(i)}}async function cE(t,e){const n=_e(t);try{const r=await Xk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Le(o.wa):s.removedDocuments.size>0&&(Le(o.wa),o.wa=!1))}),await xo(n,r,e)}catch(r){await Oo(r)}}function dg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(c)&&(u=!0)}),u&&zh(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FO(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Ke(ue.comparator);o=o.insert(i,vt.newNoDocument(i,me.min()));const c=ve().add(i),l=new jc(me.min(),new Map,new Ke(Se),o,c);await cE(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Gh(r)}else await Cu(r.localStore,e,!1).then(()=>ku(r,e,n)).catch(Oo)}async function UO(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await Jk(n.localStore,e);uE(n,r,null),lE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xo(n,s)}catch(s){await Oo(s)}}async function BO(t,e,n){const r=_e(t);try{const s=await function(o,c){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Le(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);uE(r,e,n),lE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xo(r,s)}catch(s){await Oo(s)}}function lE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function uE(t,e,n){const r=_e(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function ku(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||hE(t,r)})}function hE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&($h(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Gh(t))}function fg(t,e,n){for(const r of n)r instanceof iE?(t.Ma.addReference(r.key,e),$O(t,r)):r instanceof oE?(oe("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||hE(t,r.key)):ge()}function $O(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(oe("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Gh(t))}function Gh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ue(Fe.fromString(e)),r=t.Na.next();t.Fa.set(r,new kO(n)),t.va=t.va.insert(n,r),Yv(t.remoteStore,new fr(yn(Dh(n.path)),r,"TargetPurposeLimboResolution",Sh.oe))}}async function xo(t,e,n){const r=_e(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const d=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Bh.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const d=_e(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>H.forEach(u,g=>H.forEach(g.qi,w=>d.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>H.forEach(g.Qi,w=>d.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!No(p))throw p;oe("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const w=d.ns.get(g),S=w.snapshotVersion,V=w.withLastLimboFreeSnapshotVersion(S);d.ns=d.ns.insert(g,V)}}}(r.localStore,i))}async function jO(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const r=await Wv(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new re(j.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xo(n,r.us)}}function qO(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return ve().add(r.key);{let s=ve();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function dE(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FO.bind(null,e),e.Sa.h_=RO.bind(null,e.eventManager),e.Sa.ka=SO.bind(null,e.eventManager),e}function HO(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BO.bind(null,e),e}class pg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Yk(this.persistence,new Gk,e.initialUser,this.serializer)}createPersistence(e){return new Kk(Uh.Hr,this.serializer)}createSharedClientState(e){return new rO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jO.bind(null,this.syncEngine),await IO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bO}()}createDatastore(e){const n=qc(e.databaseInfo.databaseId),r=function(i){return new aO(i)}(e.databaseInfo);return function(i,o,c,l){return new uO(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new dO(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>dg(this.syncEngine,n,0),function(){return cg.D()?new cg:new sO}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new OO(s,i,o,c,l,u);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=_e(r);oe("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Lo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):$n("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class WO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=dv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{oe("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(oe("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(j.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ll(t,e){t.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GO(t);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>lg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>lg(e.remoteStore,s)),t._onlineComponents=e}function zO(t){return t.name==="FirebaseError"?t.code===j.FAILED_PRECONDITION||t.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function GO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!zO(n))throw n;Ws("Error using user provided cache. Falling back to memory cache: "+n),await Ll(t,new pg)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Ll(t,new pg);return t._offlineComponents}async function pE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await gg(t,t._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await gg(t,new KO))),t._onlineComponents}function QO(t){return pE(t).then(e=>e.syncEngine)}async function gE(t){const e=await pE(t),n=e.eventManager;return n.onListen=NO.bind(null,e.syncEngine),n.onUnlisten=MO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=DO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LO.bind(null,e.syncEngine),n}function YO(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new fE({next:g=>{o.enqueueAndForget(()=>rE(i,p));const w=g.docs.has(c);!w&&g.fromCache?u.reject(new re(j.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?u.reject(new re(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new sE(Dh(c.path),d,{includeMetadataChanges:!0,ra:!0});return nE(i,p)}(await gE(t),t.asyncQueue,e,n,r)),r.promise}function JO(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new fE({next:g=>{o.enqueueAndForget(()=>rE(i,p)),g.fromCache&&l.source==="server"?u.reject(new re(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new sE(c,d,{includeMetadataChanges:!0,ra:!0});return nE(i,p)}(await gE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function mE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=new Map;/**
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
 */function _E(t,e,n){if(!n)throw new re(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XO(t,e,n,r){if(e===!0&&r===!0)throw new re(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _g(t){if(!ue.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yg(t){if(ue.isDocumentKey(t))throw new re(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function ns(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new re(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new m1;switch(r.type){case"firstParty":return new E1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mg.get(n);r&&(oe("ComponentProvider","Removing Datastore"),mg.delete(n),r.terminate())}(this),Promise.resolve()}}function ZO(t,e,n,r={}){var s;const i=(t=ns(t,zc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=yt.MOCK_USER;else{c=N0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new yt(u)}t._authCredentials=new _1(new hv(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ai(this.firestore,e,this._query)}}class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}}class yr extends ai{constructor(e,n,r){super(e,n,Dh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new ue(e))}withConverter(e){return new yr(this.firestore,e,this._path)}}function Ri(t,e,...n){if(t=pt(t),_E("collection","path",e),t instanceof zc){const r=Fe.fromString(e,...n);return yg(r),new yr(t,null,r)}{if(!(t instanceof jt||t instanceof yr))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return yg(r),new yr(t.firestore,null,r)}}function Oa(t,e,...n){if(t=pt(t),arguments.length===1&&(e=dv.newId()),_E("doc","path",e),t instanceof zc){const r=Fe.fromString(e,...n);return _g(r),new jt(t,null,new ue(r))}{if(!(t instanceof jt||t instanceof yr))throw new re(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Fe.fromString(e,...n));return _g(r),new jt(t.firestore,t instanceof yr?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Gv(this,"async_queue_retry"),this.hu=()=>{const n=Ml();n&&oe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ml();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ml();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Fn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!No(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw $n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Kh.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ge()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Fo extends zc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new eN}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yE(this),this._firestoreClient.terminate()}}function tN(t,e){const n=typeof t=="object"?t:ch(),r=typeof t=="string"?t:"(default)",s=cs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=k0("firestore");i&&ZO(s,...i)}return s}function Qh(t){return t._firestoreClient||yE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yE(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new D1(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,mE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new WO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xs(wt.fromBase64String(e))}catch(n){throw new re(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xs(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this._methodName=e}}/**
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
 */class Jh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */const nN=/^__.*__$/;class rN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new us(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}function EE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class Xh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Xh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return cc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(EE(this.fu)&&nN.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class sN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qc(e)}Fu(e,n,r,s=!1){return new Xh({fu:e,methodName:n,vu:r,path:ht.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TE(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new sN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iN(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);AE("Data must be an object, but it was:",o,r);const c=wE(r,o);let l,u;if(i.merge)l=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=aN(e,p,n);if(!o.contains(g))throw new re(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);lN(d,g)||d.push(g)}l=new rn(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new rN(new Gt(c),l,u)}function oN(t,e,n,r=!1){return Zh(n,t.Fu(r?4:3,e))}function Zh(t,e){if(IE(t=pt(t)))return AE("Unsupported field value:",e,t),wE(t,e);if(t instanceof vE)return function(r,s){if(!EE(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Zh(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ek(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:oc(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oc(s.serializer,i)}}if(r instanceof Jh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xs)return{bytesValue:Uv(s.serializer,r._byteString)};if(r instanceof jt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Wc(r)}`)}(t,e)}function wE(t,e){const n={};return fv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,s)=>{const i=Zh(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function IE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Jh||t instanceof Xs||t instanceof jt||t instanceof vE)}function AE(t,e,n){if(!IE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Wc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function aN(t,e,n){if((e=pt(e))instanceof Yh)return e._internalPath;if(typeof e=="string")return bE(t,e);throw cc("Field path arguments must be of type string or ",t,!1,void 0,n)}const cN=new RegExp("[~\\*/\\[\\]]");function bE(t,e,n){if(e.search(cN)>=0)throw cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yh(...e.split("."))._internalPath}catch{throw cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new re(j.INVALID_ARGUMENT,c+t+l)}function lN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ed("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uN extends RE{data(){return super.data()}}function ed(t,e){return typeof e=="string"?bE(t,e):e instanceof Yh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class td{}class dN extends td{}function _a(t,e,...n){let r=[];e instanceof td&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof nd).length,c=i.filter(l=>l instanceof Gc).length;if(o>1||o>0&&c>0)throw new re(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Gc extends dN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gc(e,n,r)}_apply(e){const n=this._parse(e);return SE(e._query,n),new ai(e.firestore,e.converter,wu(e._query,n))}_parse(e){const n=TE(e.firestore);return function(i,o,c,l,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Tg(p,d);const w=[];for(const S of p)w.push(Eg(l,i,S));g={arrayValue:{values:w}}}else g=Eg(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Tg(p,d),g=oN(c,o,p,d==="in"||d==="not-in");return et.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function dn(t,e,n){const r=e,s=ed("where",t);return Gc._create(s,r,n)}class nd extends td{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new nd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)SE(o,l),o=wu(o,l)}(e._query,n),new ai(e.firestore,e.converter,wu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Eg(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new re(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wv(e)&&n.indexOf("/")!==-1)throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Fe.fromString(n));if(!ue.isDocumentKey(r))throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qp(t,new ue(r))}if(n instanceof jt)return qp(t,n._key);throw new re(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(n)}.`)}function Tg(t,e){if(!Array.isArray(t)||t.length===0)throw new re(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SE(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class fN{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Jh(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ph(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Fe.fromString(e);Le(Kv(r));const s=new uo(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||$n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CE extends RE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ed("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Na extends CE{data(e={}){return super.data(e)}}class gN{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Na(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Na(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Na(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Vi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:mN(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){t=ns(t,jt);const e=ns(t.firestore,Fo);return YO(Qh(e),t._key).then(n=>yN(e,t,n))}class PE extends fN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function ya(t){t=ns(t,ai);const e=ns(t.firestore,Fo),n=Qh(e),r=new PE(e);return hN(t._query),JO(n,t._query).then(s=>new gN(e,r,t,s))}function _N(t){return kE(ns(t.firestore,Fo),[new Vh(t._key,vn.none())])}function Ig(t,e){const n=ns(t.firestore,Fo),r=Oa(t),s=pN(t.converter,e);return kE(n,[iN(TE(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function kE(t,e){return function(r,s){const i=new Fn;return r.asyncQueue.enqueueAndForget(async()=>xO(await QO(r),s,i)),i.promise}(Qh(t),e)}function yN(t,e,n){const r=n.docs.get(e._key),s=new PE(t);return new CE(t,s,e._key,r,new Vi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ri=s})(ti),wn(new cn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Fo(new y1(r.getProvider("auth-internal")),new w1(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Jt(Up,"4.6.3",e),Jt(Up,"4.6.3","esm2017")})();const vN={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},Qc=Q_(vN);d1(Qc);const Gi=ko(Qc),rr=tN(Qc),EN=t=>(is("data-v-ccbacbf8"),t=t(),os(),t),TN={class:"container"},wN={class:"loginWindow"},IN=EN(()=>K("h1",null,"WELCOME",-1)),AN={class:"buttonBox"},bN={__name:"Login",setup(t){function e(){nS(Gi,o,c).then(l=>{i.push({name:"findcostudent"}),He("success","Successfully logged in!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/invalid-credential).":He("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":He("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":He("error","Our servers are currently overloaded :(");break;default:He("error",l.message);break}})}function n(){eS(Gi,o).then(()=>{He("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(l=>{l.message=="Firebase: Error (auth/missing-email)."&&He("error","Enter your email adress in the 'Email' field first!")})}function r(){ky(Gi,s).then(l=>{He("success","Successfully logged in!"),Ct.credentialFromResult(l).accessToken,l.user,i.push("/")}).catch(l=>{He("error",l.message),l.code,l.message,l.customData.email,Ct.credentialFromError(l)})}const s=new Ct,i=Cc();L_();let o,c="";return(l,u)=>(Me(),Xe("div",TN,[K("div",wN,[IN,Ln(K("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=d=>ze(o)?o.value=d:o=d)},null,512),[[Yt,Tt(o)]]),Ln(K("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=d=>ze(c)?c.value=d:c=d),onKeydown:u[2]||(u[2]=sh(d=>e(),["enter"]))},null,544),[[Yt,Tt(c)]]),K("div",AN,[K("button",{class:"button_white",onClick:u[3]||(u[3]=d=>e())},"Login"),K("div",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=d=>r())},"Log in with Google")]),K("a",{onClick:u[5]||(u[5]=d=>n())},"Forgot password?")])]))}},RN=ls(bN,[["__scopeId","data-v-ccbacbf8"]]),SN=t=>(is("data-v-091ef394"),t=t(),os(),t),CN={class:"container"},PN={class:"loginWindow"},kN=SN(()=>K("h1",null,"CREATE ACCOUNT",-1)),ON={__name:"Register",setup(t){function e(){tS(Gi,o,c).then(u=>{u.user,i.push("/FindCostudent"),He("success","Successfully registered!")}).catch(u=>{switch(u.message){case"Firebase: Error (auth/email-already-in-use).":He("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":He("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":He("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":He("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":He("error","Our servers are currently overloaded :(");break;default:He("error",u.message);break}})}function n(){i.push("/login")}function r(){ky(Gi,s).then(u=>{He("success","Successfully logged in!"),Ct.credentialFromResult(u).accessToken,u.user,i.push("/")}).catch(u=>{He("error",u.message),u.code,u.message,u.customData.email,Ct.credentialFromError(u)})}const s=new Ct,i=Cc();L_();let o,c,l="";return(u,d)=>(Me(),Xe("div",CN,[K("div",PN,[kN,Ln(K("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":d[0]||(d[0]=p=>ze(o)?o.value=p:o=p)},null,512),[[Yt,Tt(o)]]),Ln(K("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":d[1]||(d[1]=p=>ze(c)?c.value=p:c=p)},null,512),[[Yt,Tt(c)]]),Ln(K("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":d[2]||(d[2]=p=>ze(l)?l.value=p:l=p),onKeydown:d[3]||(d[3]=sh(p=>e(),["enter"]))},null,544),[[Yt,Tt(l)]]),K("button",{class:"button_white",onClick:e},"Create account"),K("button",{id:"googleLogin",class:"button_white",onClick:d[4]||(d[4]=p=>r())},"Login with Google"),K("p",null,[gr("Already have an account? "),K("a",{onClick:n},"Login here!")])])]))}},NN=ls(ON,[["__scopeId","data-v-091ef394"]]),ct=t=>(is("data-v-824437d0"),t=t(),os(),t),DN={class:"container"},VN={class:"formBox"},MN={class:"progressBar"},LN={key:0,class:"entry"},xN={class:"itemBox"},FN=ct(()=>K("p",null,"Subject",-1)),UN={class:"itemBox"},BN=ct(()=>K("p",null,"Location",-1)),$N={class:"itemBox",id:"date"},jN=ct(()=>K("p",null,"Date",-1)),qN=["min"],HN={class:"itemBox",id:"time"},KN={key:1,class:"searching"},WN=ct(()=>K("p",null,"SEARCHING",-1)),zN=ct(()=>K("div",{class:"loader"},null,-1)),GN=[WN,zN],QN={key:2,class:"noneFound"},YN={class:"message"},JN=ct(()=>K("p",null,"No costudents were found yet to study ",-1)),XN={class:"button"},ZN=ct(()=>K("p",null," in ",-1)),eD={class:"button"},tD=ct(()=>K("p",null," in the ",-1)),nD={class:"button"},rD=ct(()=>K("p",null," of the ",-1)),sD={class:"button"},iD=ct(()=>K("p",null,".",-1)),oD=ct(()=>K("div",{class:"finalMessage"},[K("p",null,"We'll keep on searching for other costudents."),K("p",null,"You can check in on the progress on your dashboard.")],-1)),aD={class:"buttonBox"},cD={key:3,class:"found"},lD=ct(()=>K("div",{class:"finalMessage"},[K("p",null,"We found costudents!")],-1)),uD={class:"message"},hD=ct(()=>K("p",null,"You can study ",-1)),dD={class:"button"},fD=ct(()=>K("p",null," in ",-1)),pD={class:"button"},gD=ct(()=>K("p",null," in the ",-1)),mD={class:"button"},_D=ct(()=>K("p",null," of the ",-1)),yD={class:"button"},vD=ct(()=>K("p",null," . ",-1)),ED={class:"groupDisplay"},TD=ct(()=>K("p",null,"Your group:",-1)),wD={class:"costudentNames"},ID={id:"subjects"},AD=["value"],bD={id:"locations"},RD=["value"],SD={__name:"FindCostudent",setup(t){function e(){const G=new Date,Q=G.getFullYear(),W=String(G.getMonth()+1).padStart(2,"0"),$e=String(G.getDate()).padStart(2,"0");return`${Q}-${W}-${$e}`}function n(G){switch(N.value=!1,b.value=!1,v.value=!1,C.value=G,G){case"morning":N.value=!0,P.value=0;break;case"afternoon":b.value=!0,P.value=1;break;case"evening":v.value=!0,P.value=2;break}}async function r(){const G=_a(I,dn("UID","==",m));return!(await ya(G)).empty}async function s(){await r()?ye.value.includes(V.value)?de.value.includes(D.value)?o():(He("error","Select a location from the list!"),i()):(He("error","Select a subject from the list!"),i()):He("error","Set your username in the dashboard first!")}function i(){V.value="",D.value="",F.value=""}async function o(){S.value=1;const G=_a(y,dn("SUBJ","==",V.value),dn("LOCATION","==",D.value),dn("DATE","==",F.value),dn("TOD","==",P.value)),Q=await ya(G);if(Q.empty)c();else{const W=[];Q.docs[0].data().MEMBERS;for(let $e=0;$e<=Q.docs.length;$e++)W.push(Q.docs[0].data().MEMBERS[$e]);d(W),S.value=3}}async function c(){const G=_a(T,dn("SUBJ","==",V.value),dn("LOCATION","==",D.value),dn("DATE","==",F.value),dn("TOD","==",P.value)),Q=await ya(G);Q.empty?(l(),S.value=2):u(Q.docs[0].data().UID,Q.docs[0].id)}async function l(){await Ig(Ri(rr,"posts"),{SUBJ:V.value,LOCATION:D.value,DATE:F.value,UID:m,TOD:P.value,POSTDATE:x.value})}async function u(G,Q){await _N(Oa(rr,"posts",Q));const W=[m,G];await Ig(Ri(rr,"groups"),{DATE:F.value,LOCATION:D.value,MEMBERS:W,SUBJ:V.value,TOD:P.value}),d(W),S.value=3}async function d(G){for(let Q=0;Q<G.length;Q++){const W=_a(I,dn("UID","==",G[Q])),$e=await ya(W);E.value.push($e.docs[0].data().NAME)}}async function p(){const G=Oa(rr,"dataLists","locationData"),Q=await wg(G);de.value=Q.data().locations}async function g(){const G=Oa(rr,"dataLists","subjectData"),Q=await wg(G);ye.value=Q.data().subjects}const w=ko(),S=Je(0),V=Je(""),D=Je(""),F=Je(""),P=Je(0),C=Je("");let O=e(),x=Je(O);const N=Je(!1),b=Je(!1),v=Je(!1),m=w.currentUser.uid,y=Ri(rr,"groups"),T=Ri(rr,"posts"),I=Ri(rr,"users"),E=Je([]),de=Je([]),ye=Je([]);return p(),g(),(G,Q)=>(Me(),Xe("div",DN,[K("div",VN,[K("div",MN,[K("p",{class:Lt({active:S.value===0})},"1",2),K("div",{class:Lt(["line",{completed:S.value>=1}])},null,2),K("p",{class:Lt({active:S.value===1})},"2",2),K("div",{class:Lt(["line",{completed:S.value>=2}])},null,2),K("p",{class:Lt({active:S.value===2})},"3",2)]),S.value==0?(Me(),Xe("div",LN,[K("div",xN,[FN,Ln(K("input",{list:"subjects","onUpdate:modelValue":Q[0]||(Q[0]=W=>V.value=W)},null,512),[[Yt,V.value]])]),K("div",UN,[BN,Ln(K("input",{list:"locations","onUpdate:modelValue":Q[1]||(Q[1]=W=>D.value=W)},null,512),[[Yt,D.value]])]),K("div",$N,[jN,Ln(K("input",{type:"date",id:"date",min:Tt(x),"onUpdate:modelValue":Q[2]||(Q[2]=W=>F.value=W)},null,8,qN),[[Yt,F.value]])]),K("div",HN,[K("div",{class:Lt(["button",{selected:N.value}]),onClick:Q[3]||(Q[3]=W=>n("morning"))}," Morning ",2),K("div",{class:Lt(["button",{selected:b.value}]),onClick:Q[4]||(Q[4]=W=>n("afternoon"))}," Afternoon ",2),K("div",{class:Lt(["button",{selected:v.value}]),onClick:Q[5]||(Q[5]=W=>n("evening"))}," Evening ",2)]),K("div",{class:"button",onClick:Q[6]||(Q[6]=W=>s())}," Submit ")])):kn("",!0),S.value==1?(Me(),Xe("div",KN,GN)):kn("",!0),S.value==2?(Me(),Xe("div",QN,[K("div",YN,[JN,K("div",XN,fn(V.value),1),ZN,K("div",eD,fn(D.value),1),tD,K("div",nD,fn(C.value),1),rD,K("div",sD,fn(F.value),1),iD]),oD,K("div",aD,[Ce(Tt(V_),{to:"/dashboard",class:"button"},{default:mn(()=>[gr("Dashboard")]),_:1})])])):kn("",!0),S.value==3?(Me(),Xe("div",cD,[lD,K("div",uD,[hD,K("div",dD,fn(V.value),1),fD,K("div",pD,fn(D.value),1),gD,K("div",mD,fn(C.value),1),_D,K("div",yD,fn(F.value),1),vD,K("div",ED,[TD,K("div",wD,[(Me(!0),Xe(Qe,null,Ea(E.value,W=>(Me(),Xe("div",{class:"button",key:E.value},[K("p",null,fn(W),1)]))),128))])])])])):kn("",!0)]),K("datalist",ID,[(Me(!0),Xe(Qe,null,Ea(ye.value,W=>(Me(),Xe("option",{key:W,value:W},null,8,AD))),128))]),K("datalist",bD,[(Me(!0),Xe(Qe,null,Ea(de.value,W=>(Me(),Xe("option",{key:W,value:W},null,8,RD))),128))])]))}},CD=ls(SD,[["__scopeId","data-v-824437d0"]]),PD={},kD={class:"container"};function OD(t,e){return Me(),Xe("div",kD," test ")}const ND=ls(PD,[["render",OD]]),OE=T0({history:JA("/costudent-demo/"),routes:[{path:"/",name:"home",component:GC},{path:"/findcostudent",name:"findcostudent",component:CD,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:RN},{path:"/register",name:"register",component:NN},{path:"/dashboard",name:"dashboard",component:ND}]});let Ag=!1,xl=!1;OE.beforeEach((t,e,n)=>{const r=ko(),s=t.matched.some(i=>i.meta.requiresAuth);Ag?s&&!xl?(alert("No access! You need to be logged in."),n("/login")):n():vy(r,i=>{xl=!!i,Ag=!0,s&&!xl?(alert("No access! You need to be logged in."),n("/login")):n()})});const Yc=E_(xC);Yc.config.globalProperties.$firebase=Qc;Yc.use(OE);Yc.use(TC,{position:"bottom-right",duration:5e3,pauseOnHover:!0});Yc.mount("#app");
