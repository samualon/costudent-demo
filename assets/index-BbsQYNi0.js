(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function hc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const De={},Ps=[],Nt=()=>{},cT=()=>!1,wo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fu=t=>t.startsWith("onUpdate:"),Be=Object.assign,Uu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lT=Object.prototype.hasOwnProperty,be=(t,e)=>lT.call(t,e),se=Array.isArray,ks=t=>ii(t)==="[object Map]",us=t=>ii(t)==="[object Set]",sf=t=>ii(t)==="[object Date]",uT=t=>ii(t)==="[object RegExp]",fe=t=>typeof t=="function",je=t=>typeof t=="string",jn=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Bu=t=>(Ve(t)||fe(t))&&fe(t.then)&&fe(t.catch),Vg=Object.prototype.toString,ii=t=>Vg.call(t),hT=t=>ii(t).slice(8,-1),Mg=t=>ii(t)==="[object Object]",$u=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Os=hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dT=/-(\w)/g,Ct=dc(t=>t.replace(dT,(e,n)=>n?n.toUpperCase():"")),fT=/\B([A-Z])/g,qt=dc(t=>t.replace(fT,"-$1").toLowerCase()),Io=dc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ji=dc(t=>t?`on${Io(t)}`:""),hn=(t,e)=>!Object.is(t,e),Ds=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e},La=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let of;const xg=()=>of||(of=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),pT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",gT=hc(pT);function Ao(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?vT(r):Ao(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Ve(t))return t}const mT=/;(?![^(]*\))/g,_T=/:([^]+)/,yT=/\/\*[^]*?\*\//g;function vT(t){const e={};return t.replace(yT,"").split(mT).forEach(n=>{if(n){const r=n.split(_T);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $t(t){let e="";if(je(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=$t(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ET(t){if(!t)return null;let{class:e,style:n}=t;return e&&!je(e)&&(t.class=$t(e)),n&&(t.style=Ao(n)),t}const TT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wT=hc(TT);function Fg(t){return!!t||t===""}function IT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ar(t[r],e[r]);return n}function Ar(t,e){if(t===e)return!0;let n=sf(t),r=sf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=jn(t),r=jn(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?IT(t,e):!1;if(n=Ve(t),r=Ve(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ar(t[o],e[o]))return!1}}return String(t)===String(e)}function fc(t,e){return t.findIndex(n=>Ar(n,e))}const nt=t=>je(t)?t:t==null?"":se(t)||Ve(t)&&(t.toString===Vg||!fe(t.toString))?JSON.stringify(t,Ug,2):String(t),Ug=(t,e)=>e&&e.__v_isRef?Ug(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[gl(r,i)+" =>"]=s,n),{})}:us(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gl(n))}:jn(e)?gl(e):Ve(e)&&!se(e)&&!Mg(e)?String(e):e,gl=(t,e="")=>{var n;return jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bt;class ju{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Bt,!e&&Bt&&(this.index=(Bt.scopes||(Bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Bt;try{return Bt=this,e()}finally{Bt=n}}}on(){Bt=this}off(){Bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function AT(t){return new ju(t)}function Bg(t,e=Bt){e&&e.active&&e.effects.push(t)}function $g(){return Bt}function bT(t){Bt&&Bt.cleanups.push(t)}let Gr;class Ks{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Bg(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Or();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(RT(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Dr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Er,n=Gr;try{return Er=!0,Gr=this,this._runnings++,af(this),this.fn()}finally{cf(this),this._runnings--,Gr=n,Er=e}}stop(){this.active&&(af(this),cf(this),this.onStop&&this.onStop(),this.active=!1)}}function RT(t){return t.value}function af(t){t._trackId++,t._depsLength=0}function cf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)jg(t.deps[e],t);t.deps.length=t._depsLength}}function jg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function ST(t,e){t.effect instanceof Ks&&(t=t.effect.fn);const n=new Ks(t,Nt,()=>{n.dirty&&n.run()});e&&(Be(n,e),e.scope&&Bg(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function CT(t){t.effect.stop()}let Er=!0,jl=0;const qg=[];function Or(){qg.push(Er),Er=!1}function Dr(){const t=qg.pop();Er=t===void 0?!0:t}function qu(){jl++}function Hu(){for(jl--;!jl&&ql.length;)ql.shift()()}function Hg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&jg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const ql=[];function Kg(t,e,n){qu();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&ql.push(r.scheduler)))}Hu()}const Wg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},xa=new WeakMap,zr=Symbol(""),Hl=Symbol("");function xt(t,e,n){if(Er&&Gr){let r=xa.get(t);r||xa.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Wg(()=>r.delete(n))),Hg(Gr,s)}}function Fn(t,e,n,r,s,i){const o=xa.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&se(t)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||!jn(d)&&d>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":se(t)?$u(n)&&c.push(o.get("length")):(c.push(o.get(zr)),ks(t)&&c.push(o.get(Hl)));break;case"delete":se(t)||(c.push(o.get(zr)),ks(t)&&c.push(o.get(Hl)));break;case"set":ks(t)&&c.push(o.get(zr));break}qu();for(const l of c)l&&Kg(l,5);Hu()}function PT(t,e){const n=xa.get(t);return n&&n.get(e)}const kT=hc("__proto__,__v_isRef,__isVue"),Gg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),lf=OT();function OT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,o=this.length;i<o;i++)xt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Or(),qu();const r=Ie(this)[e].apply(this,n);return Hu(),Dr(),r}}),t}function DT(t){jn(t)||(t=String(t));const e=Ie(this);return xt(e,"has",t),e.hasOwnProperty(t)}class zg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?em:Zg:i?Xg:Jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){if(o&&be(lf,n))return Reflect.get(lf,n,r);if(n==="hasOwnProperty")return DT}const c=Reflect.get(e,n,r);return(jn(n)?Gg.has(n):kT(n))||(s||xt(e,"get",n),i)?c:Ye(c)?o&&$u(n)?c:c.value:Ve(c)?s?Gu(c):bo(c):c}}class Qg extends zg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ws(i);if(!no(r)&&!Ws(r)&&(i=Ie(i),r=Ie(r)),!se(e)&&Ye(i)&&!Ye(r))return l?!1:(i.value=r,!0)}const o=se(e)&&$u(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(o?hn(r,i)&&Fn(e,"set",n,r):Fn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Fn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jn(n)||!Gg.has(n))&&xt(e,"has",n),r}ownKeys(e){return xt(e,"iterate",se(e)?"length":zr),Reflect.ownKeys(e)}}class Yg extends zg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const NT=new Qg,VT=new Yg,MT=new Qg(!0),LT=new Yg(!0),Ku=t=>t,pc=t=>Reflect.getPrototypeOf(t);function ia(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(hn(e,i)&&xt(s,"get",e),xt(s,"get",i));const{has:o}=pc(s),c=r?Ku:n?Qu:ro;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function oa(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(hn(t,s)&&xt(r,"has",t),xt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function aa(t,e=!1){return t=t.__v_raw,!e&&xt(Ie(t),"iterate",zr),Reflect.get(t,"size",t)}function uf(t){t=Ie(t);const e=Ie(this);return pc(e).has.call(e,t)||(e.add(t),Fn(e,"add",t,t)),this}function hf(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=pc(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?hn(e,o)&&Fn(n,"set",t,e):Fn(n,"add",t,e),this}function df(t){const e=Ie(this),{has:n,get:r}=pc(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Fn(e,"delete",t,void 0),i}function ff(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Fn(t,"clear",void 0,void 0),n}function ca(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Ie(o),l=e?Ku:t?Qu:ro;return!t&&xt(c,"iterate",zr),o.forEach((u,d)=>r.call(s,l(u),l(d),i))}}function la(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),o=ks(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?Ku:e?Qu:ro;return!e&&xt(i,"iterate",l?Hl:zr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function rr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xT(){const t={get(i){return ia(this,i)},get size(){return aa(this)},has:oa,add:uf,set:hf,delete:df,clear:ff,forEach:ca(!1,!1)},e={get(i){return ia(this,i,!1,!0)},get size(){return aa(this)},has:oa,add:uf,set:hf,delete:df,clear:ff,forEach:ca(!1,!0)},n={get(i){return ia(this,i,!0)},get size(){return aa(this,!0)},has(i){return oa.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:ca(!0,!1)},r={get(i){return ia(this,i,!0,!0)},get size(){return aa(this,!0)},has(i){return oa.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:ca(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=la(i,!1,!1),n[i]=la(i,!0,!1),e[i]=la(i,!1,!0),r[i]=la(i,!0,!0)}),[t,n,e,r]}const[FT,UT,BT,$T]=xT();function gc(t,e){const n=e?t?$T:BT:t?UT:FT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const jT={get:gc(!1,!1)},qT={get:gc(!1,!0)},HT={get:gc(!0,!1)},KT={get:gc(!0,!0)},Jg=new WeakMap,Xg=new WeakMap,Zg=new WeakMap,em=new WeakMap;function WT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GT(t){return t.__v_skip||!Object.isExtensible(t)?0:WT(hT(t))}function bo(t){return Ws(t)?t:mc(t,!1,NT,jT,Jg)}function Wu(t){return mc(t,!1,MT,qT,Xg)}function Gu(t){return mc(t,!0,VT,HT,Zg)}function zT(t){return mc(t,!0,LT,KT,em)}function mc(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=GT(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Ns(t){return Ws(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function Ws(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function zu(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function tm(t){return Object.isExtensible(t)&&Lg(t,"__v_skip",!0),t}const ro=t=>Ve(t)?bo(t):t,Qu=t=>Ve(t)?Gu(t):t;class nm{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ks(()=>e(this._value),()=>Vs(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&hn(e._value,e._value=e.effect.run())&&Vs(e,5),Yu(e),e.effect._dirtyLevel>=2&&Vs(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function QT(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=Nt):(r=t.get,s=t.set),new nm(r,s,i||!s,n)}function Yu(t){var e;Er&&Gr&&(t=Ie(t),Hg(Gr,(e=t.dep)!=null?e:t.dep=Wg(()=>t.dep=void 0,t instanceof nm?t:void 0)))}function Vs(t,e=5,n,r){t=Ie(t);const s=t.dep;s&&Kg(s,e)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function We(t){return sm(t,!1)}function rm(t){return sm(t,!0)}function sm(t,e){return Ye(t)?t:new YT(t,e)}class YT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:ro(e)}get value(){return Yu(this),this._value}set value(e){const n=this.__v_isShallow||no(e)||Ws(e);e=n?e:Ie(e),hn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ro(e),Vs(this,5))}}function JT(t){Vs(t,5)}function wt(t){return Ye(t)?t.value:t}function XT(t){return fe(t)?t():wt(t)}const ZT={get:(t,e,n)=>wt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ye(s)&&!Ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ju(t){return Ns(t)?t:new Proxy(t,ZT)}class ew{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Yu(this),()=>Vs(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function im(t){return new ew(t)}function tw(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=om(t,n);return e}class nw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return PT(Ie(this._object),this._key)}}class rw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function sw(t,e,n){return Ye(t)?t:fe(t)?new rw(t):Ve(t)&&arguments.length>1?om(t,e,n):We(t)}function om(t,e,n){const r=t[e];return Ye(r)?r:new nw(t,e,n)}const iw={GET:"get",HAS:"has",ITERATE:"iterate"},ow={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aw(t,e){}const cw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},lw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Un(t,e,n,r){try{return r?t(...r):t()}catch(s){hs(s,e,n)}}function Kt(t,e,n,r){if(fe(t)){const s=Un(t,e,n,r);return s&&Bu(s)&&s.catch(i=>{hs(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function hs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Or(),Un(l,null,10,[t,o,c]),Dr();return}}uw(t,n,s,r)}function uw(t,e,n,r=!0){console.error(t)}let so=!1,Kl=!1;const Tt=[];let yn=0;const Ms=[];let cr=null,qr=0;const am=Promise.resolve();let Xu=null;function Ro(t){const e=Xu||am;return t?e.then(this?t.bind(this):t):e}function hw(t){let e=yn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=io(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function _c(t){(!Tt.length||!Tt.includes(t,so&&t.allowRecurse?yn+1:yn))&&(t.id==null?Tt.push(t):Tt.splice(hw(t.id),0,t),cm())}function cm(){!so&&!Kl&&(Kl=!0,Xu=am.then(lm))}function dw(t){const e=Tt.indexOf(t);e>yn&&Tt.splice(e,1)}function Fa(t){se(t)?Ms.push(...t):(!cr||!cr.includes(t,t.allowRecurse?qr+1:qr))&&Ms.push(t),cm()}function pf(t,e,n=so?yn+1:0){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r()}}}function Ua(t){if(Ms.length){const e=[...new Set(Ms)].sort((n,r)=>io(n)-io(r));if(Ms.length=0,cr){cr.push(...e);return}for(cr=e,qr=0;qr<cr.length;qr++){const n=cr[qr];n.active!==!1&&n()}cr=null,qr=0}}const io=t=>t.id==null?1/0:t.id,fw=(t,e)=>{const n=io(t)-io(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function lm(t){Kl=!1,so=!0,Tt.sort(fw);try{for(yn=0;yn<Tt.length;yn++){const e=Tt[yn];e&&e.active!==!1&&Un(e,null,14)}}finally{yn=0,Tt.length=0,Ua(),so=!1,Xu=null,(Tt.length||Ms.length)&&lm()}}let As,ua=[];function um(t,e){var n,r;As=t,As?(As.enabled=!0,ua.forEach(({event:s,args:i})=>As.emit(s,...i)),ua=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{um(i,e)}),setTimeout(()=>{As||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ua=[])},3e3)):ua=[]}function pw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[d]||De;g&&(s=n.map(T=>je(T)?T.trim():T)),p&&(s=n.map(Ma))}let c,l=r[c=ji(e)]||r[c=ji(Ct(e))];!l&&i&&(l=r[c=ji(qt(e))]),l&&Kt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Kt(u,t,6,s)}}function hm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=u=>{const d=hm(u,e,!0);d&&(c=!0,Be(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ve(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):Be(o,i),Ve(t)&&r.set(t,o),o)}function yc(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,qt(e))||be(t,e))}let st=null,vc=null;function oo(t){const e=st;return st=t,vc=t&&t.type.__scopeId||null,e}function Nr(t){vc=t}function Vr(){vc=null}const gw=t=>on;function on(t,e=st,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&eu(-1);const i=oo(e);let o;try{o=t(...s)}finally{oo(i),r._d&&eu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ia(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:g,setupState:T,ctx:S,inheritAttrs:M}=t,V=oo(t);let F,O;try{if(n.shapeFlag&4){const P=s||r,N=P;F=jt(u.call(N,P,d,p,T,g,S)),O=c}else{const P=e;F=jt(P.length>1?P(p,{attrs:c,slots:o,emit:l}):P(p,null)),O=e.props?c:_w(c)}}catch(P){Ki.length=0,hs(P,t,1),F=Pe(lt)}let C=F;if(O&&M!==!1){const P=Object.keys(O),{shapeFlag:N}=C;P.length&&N&7&&(i&&P.some(Fu)&&(O=yw(O,i)),C=An(C,O,!1,!0))}return n.dirs&&(C=An(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),F=C,oo(V),F}function mw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Rr(s)){if(s.type!==lt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const _w=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},yw=(t,e)=>{const n={};for(const r in t)(!Fu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gf(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!yc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?gf(r,o,u):!0:!!o;return!1}function gf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!yc(n,i))return!0}return!1}function Zu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const eh="components",Ew="directives";function dm(t,e){return th(eh,t,!0,e)||t}const fm=Symbol.for("v-ndc");function pm(t){return je(t)?th(eh,t,!1)||t:t||fm}function Tw(t){return th(Ew,t)}function th(t,e,n=!0,r=!1){const s=st||rt;if(s){const i=s.type;if(t===eh){const c=iu(i,!1);if(c&&(c===e||c===Ct(e)||c===Io(Ct(e))))return i}const o=mf(s[t]||i[t],e)||mf(s.appContext[t],e);return!o&&r?i:o}}function mf(t,e){return t&&(t[e]||t[Ct(e)]||t[Io(Ct(e))])}const Wl=t=>t.__isSuspense;let Gl=0;const ww={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)Aw(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}bw(t,e,n,r,s,o,c,l,u)}},hydrate:Rw,create:nh,normalize:Sw},Iw=ww;function ao(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function Aw(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:d}}=l,p=d("div"),g=t.suspense=nh(t,s,r,e,p,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,p,null,r,g,i,o),g.deps>0?(ao(t,"onPending"),ao(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Ls(g,t.ssFallback)):g.resolve(!1,!0)}function bw(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:d}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,T=e.ssFallback,{activeBranch:S,pendingBranch:M,isInFallback:V,isHydrating:F}=p;if(M)p.pendingBranch=g,an(g,M)?(l(M,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():V&&(F||(l(S,T,n,r,s,null,i,o,c),Ls(p,T)))):(p.pendingId=Gl++,F?(p.isHydrating=!1,p.activeBranch=M):u(M,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=d("div"),V?(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(S,T,n,r,s,null,i,o,c),Ls(p,T))):S&&an(g,S)?(l(S,g,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(S&&an(g,S))l(S,g,n,r,s,p,i,o,c),Ls(p,g);else if(ao(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=Gl++,l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:O,pendingId:C}=p;O>0?setTimeout(()=>{p.pendingId===C&&p.fallback(T)},O):O===0&&p.fallback(T)}}function nh(t,e,n,r,s,i,o,c,l,u,d=!1){const{p,m:g,um:T,n:S,o:{parentNode:M,remove:V}}=u;let F;const O=Cw(t);O&&e&&e.pendingBranch&&(F=e.pendingId,e.deps++);const C=t.props?La(t.props.timeout):void 0,P=i,N={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Gl++,timeout:typeof C=="number"?C:-1,activeBranch:null,pendingBranch:null,isInFallback:!d,isHydrating:d,isUnmounted:!1,effects:[],resolve(k=!1,I=!1){const{vnode:v,activeBranch:m,pendingBranch:y,pendingId:w,effects:A,parentComponent:E,container:de}=N;let ye=!1;N.isHydrating?N.isHydrating=!1:k||(ye=m&&y.transition&&y.transition.mode==="out-in",ye&&(m.transition.afterLeave=()=>{w===N.pendingId&&(g(y,de,i===P?S(m):i,0),Fa(A))}),m&&(M(m.el)!==N.hiddenContainer&&(i=S(m)),T(m,E,N,!0)),ye||g(y,de,i,0)),Ls(N,y),N.pendingBranch=null,N.isInFallback=!1;let z=N.parent,Q=!1;for(;z;){if(z.pendingBranch){z.effects.push(...A),Q=!0;break}z=z.parent}!Q&&!ye&&Fa(A),N.effects=[],O&&e&&e.pendingBranch&&F===e.pendingId&&(e.deps--,e.deps===0&&!I&&e.resolve()),ao(v,"onResolve")},fallback(k){if(!N.pendingBranch)return;const{vnode:I,activeBranch:v,parentComponent:m,container:y,namespace:w}=N;ao(I,"onFallback");const A=S(v),E=()=>{N.isInFallback&&(p(null,k,y,A,m,null,w,c,l),Ls(N,k))},de=k.transition&&k.transition.mode==="out-in";de&&(v.transition.afterLeave=E),N.isInFallback=!0,T(v,m,null,!0),de||E()},move(k,I,v){N.activeBranch&&g(N.activeBranch,k,I,v),N.container=k},next(){return N.activeBranch&&S(N.activeBranch)},registerDep(k,I,v){const m=!!N.pendingBranch;m&&N.deps++;const y=k.vnode.el;k.asyncDep.catch(w=>{hs(w,k,0)}).then(w=>{if(k.isUnmounted||N.isUnmounted||N.pendingId!==k.suspenseId)return;k.asyncResolved=!0;const{vnode:A}=k;ru(k,w,!1),y&&(A.el=y);const E=!y&&k.subTree.el;I(k,A,M(y||k.subTree.el),y?null:S(k.subTree),N,o,v),E&&V(E),Zu(k,A.el),m&&--N.deps===0&&N.resolve()})},unmount(k,I){N.isUnmounted=!0,N.activeBranch&&T(N.activeBranch,n,k,I),N.pendingBranch&&T(N.pendingBranch,n,k,I)}};return N}function Rw(t,e,n,r,s,i,o,c,l){const u=e.suspense=nh(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),d=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),d}function Sw(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=_f(r?n.default:n),t.ssFallback=r?_f(n.fallback):Pe(lt)}function _f(t){let e;if(fe(t)){const n=es&&t._c;n&&(t._d=!1,Se()),t=t(),n&&(t._d=!0,e=Vt,Jm())}return se(t)&&(t=mw(t)),t=jt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function gm(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):Fa(t)}function Ls(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Zu(r,s))}function Cw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function Ec(t,e,n=rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Or();const c=ts(n),l=Kt(e,n,t,o);return c(),Dr(),l});return r?s.unshift(i):s.push(i),i}}const Gn=t=>(e,n=rt)=>{(!ko||t==="sp")&&Ec(t,(...r)=>e(...r),n)},mm=Gn("bm"),oi=Gn("m"),_m=Gn("bu"),Tc=Gn("u"),wc=Gn("bum"),Ic=Gn("um"),ym=Gn("sp"),vm=Gn("rtg"),Em=Gn("rtc");function Tm(t,e=rt){Ec("ec",t,e)}function En(t,e){if(st===null)return t;const n=Oo(st),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=De]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&dr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function _n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Or(),Kt(l,n,8,[t.el,c,t,e]),Dr())}}function xs(t,e,n,r){let s;const i=n&&n[r];if(se(t)||je(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function Pw(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(se(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}/*! #__NO_SIDE_EFFECTS__ */function So(t,e){return fe(t)?Be({name:t.name},e,{setup:t}):t}const Qr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function kw(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,d=0;const p=()=>(d++,l=null,g()),g=()=>{let T;return l||(T=l=e().catch(S=>{if(S=S instanceof Error?S:new Error(String(S)),c)return new Promise((M,V)=>{c(S,()=>M(p()),()=>V(S),d+1)});throw S}).then(S=>T!==l&&l?l:(S&&(S.__esModule||S[Symbol.toStringTag]==="Module")&&(S=S.default),u=S,S)))};return So({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const T=rt;if(u)return()=>ml(u,T);const S=O=>{l=null,hs(O,T,13,!r)};if(o&&T.suspense||ko)return g().then(O=>()=>ml(O,T)).catch(O=>(S(O),()=>r?Pe(r,{error:O}):null));const M=We(!1),V=We(),F=We(!!s);return s&&setTimeout(()=>{F.value=!1},s),i!=null&&setTimeout(()=>{if(!M.value&&!V.value){const O=new Error(`Async component timed out after ${i}ms.`);S(O),V.value=O}},i),g().then(()=>{M.value=!0,T.parent&&Po(T.parent.vnode)&&(T.parent.effect.dirty=!0,_c(T.parent.update))}).catch(O=>{S(O),V.value=O}),()=>{if(M.value&&u)return ml(u,T);if(V.value&&r)return Pe(r,{error:V.value});if(n&&!F.value)return Pe(n)}}})}function ml(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Pe(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}function Ow(t,e,n={},r,s){if(st.isCE||st.parent&&Qr(st.parent)&&st.parent.isCE)return e!=="default"&&(n.name=e),Pe("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),Se();const o=i&&wm(i(n)),c=mr(Ge,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function wm(t){return t.some(e=>Rr(e)?!(e.type===lt||e.type===Ge&&!wm(e.children)):!0)?t:null}function Dw(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:ji(r)]=t[r];return n}const zl=t=>t?s_(t)?Oo(t):zl(t.parent):null,qi=Be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zl(t.parent),$root:t=>zl(t.root),$emit:t=>t.emit,$options:t=>rh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,_c(t.update)}),$nextTick:t=>t.n||(t.n=Ro.bind(t.proxy)),$watch:t=>hI.bind(t)}),_l=(t,e)=>t!==De&&!t.__isScriptSetup&&be(t,e),Ql={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_l(r,e))return o[e]=1,r[e];if(s!==De&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==De&&be(n,e))return o[e]=4,n[e];Yl&&(o[e]=0)}}const d=qi[e];let p,g;if(d)return e==="$attrs"&&xt(t.attrs,"get",""),d(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==De&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _l(s,e)?(s[e]=n,!0):r!==De&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==De&&be(t,o)||_l(e,o)||(c=i[0])&&be(c,o)||be(r,o)||be(qi,o)||be(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Nw=Be({},Ql,{get(t,e){if(e!==Symbol.unscopables)return Ql.get(t,e,t)},has(t,e){return e[0]!=="_"&&!gT(e)}});function Vw(){return null}function Mw(){return null}function Lw(t){}function xw(t){}function Fw(){return null}function Uw(){}function Bw(t,e){return null}function $w(){return Im().slots}function jw(){return Im().attrs}function Im(){const t=zn();return t.setupContext||(t.setupContext=a_(t))}function co(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function qw(t,e){const n=co(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?se(s)||fe(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Hw(t,e){return!t||!e?t||e:se(t)&&se(e)?t.concat(e):Be({},co(t),co(e))}function Kw(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Ww(t){const e=zn();let n=t();return nu(),Bu(n)&&(n=n.catch(r=>{throw ts(e),r})),[n,()=>ts(e)]}let Yl=!0;function Gw(t){const e=rh(t),n=t.proxy,r=t.ctx;Yl=!1,e.beforeCreate&&yf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:g,beforeUpdate:T,updated:S,activated:M,deactivated:V,beforeDestroy:F,beforeUnmount:O,destroyed:C,unmounted:P,render:N,renderTracked:k,renderTriggered:I,errorCaptured:v,serverPrefetch:m,expose:y,inheritAttrs:w,components:A,directives:E,filters:de}=e;if(u&&zw(u,r,null),o)for(const Q in o){const W=o[Q];fe(W)&&(r[Q]=W.bind(n))}if(s){const Q=s.call(n,n);Ve(Q)&&(t.data=bo(Q))}if(Yl=!0,i)for(const Q in i){const W=i[Q],qe=fe(W)?W.bind(n,n):fe(W.get)?W.get.bind(n,n):Nt,rn=!fe(W)&&fe(W.set)?W.set.bind(n):Nt,Qt=Zt({get:qe,set:rn});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:He=>Qt.value=He})}if(c)for(const Q in c)Am(c[Q],r,n,Q);if(l){const Q=fe(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(W=>{Us(W,Q[W])})}d&&yf(d,t,"c");function z(Q,W){se(W)?W.forEach(qe=>Q(qe.bind(n))):W&&Q(W.bind(n))}if(z(mm,p),z(oi,g),z(_m,T),z(Tc,S),z(Hm,M),z(Km,V),z(Tm,v),z(Em,k),z(vm,I),z(wc,O),z(Ic,P),z(ym,m),se(y))if(y.length){const Q=t.exposed||(t.exposed={});y.forEach(W=>{Object.defineProperty(Q,W,{get:()=>n[W],set:qe=>n[W]=qe})})}else t.exposed||(t.exposed={});N&&t.render===Nt&&(t.render=N),w!=null&&(t.inheritAttrs=w),A&&(t.components=A),E&&(t.directives=E)}function zw(t,e,n=Nt){se(t)&&(t=Jl(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Wt(s.from||r,s.default,!0):i=Wt(s.from||r):i=Wt(s),Ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function yf(t,e,n){Kt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Am(t,e,n,r){const s=r.includes(".")?qm(n,r):()=>n[r];if(je(t)){const i=e[t];fe(i)&&Bs(s,i)}else if(fe(t))Bs(s,t.bind(n));else if(Ve(t))if(se(t))t.forEach(i=>Am(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Bs(s,i,t)}}function rh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Ba(l,u,o,!0)),Ba(l,e,o)),Ve(e)&&i.set(e,l),l}function Ba(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ba(t,i,n,!0),s&&s.forEach(o=>Ba(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Qw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Qw={data:vf,props:Ef,emits:Ef,methods:Vi,computed:Vi,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Vi,directives:Vi,watch:Jw,provide:vf,inject:Yw};function vf(t,e){return e?t?function(){return Be(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function Yw(t,e){return Vi(Jl(t),Jl(e))}function Jl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Vi(t,e){return t?Be(Object.create(null),t,e):e}function Ef(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Be(Object.create(null),co(t),co(e??{})):e}function Jw(t,e){if(!t)return e;if(!e)return t;const n=Be(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function bm(){return{app:null,config:{isNativeTag:cT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xw=0;function Zw(t,e){return function(r,s=null){fe(r)||(r=Be({},r)),s!=null&&!Ve(s)&&(s=null);const i=bm(),o=new WeakSet;let c=!1;const l=i.app={_uid:Xw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:l_,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&fe(u.install)?(o.add(u),u.install(l,...d)):fe(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const g=Pe(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Oo(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=Fs;Fs=l;try{return u()}finally{Fs=d}}};return l}}let Fs=null;function Us(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function Wt(t,e,n=!1){const r=rt||st;if(r||Fs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function eI(){return!!(rt||st||Fs)}const Rm={},Sm=()=>Object.create(Rm),Cm=t=>Object.getPrototypeOf(t)===Rm;function tI(t,e,n,r=!1){const s={},i=Sm();t.propsDefaults=Object.create(null),Pm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Wu(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ie(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(yc(t.emitsOptions,g))continue;const T=e[g];if(l)if(be(i,g))T!==i[g]&&(i[g]=T,u=!0);else{const S=Ct(g);s[S]=Xl(l,c,S,T,t,!1)}else T!==i[g]&&(i[g]=T,u=!0)}}}else{Pm(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!be(e,p)&&((d=qt(p))===p||!be(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Xl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p))&&(delete i[p],u=!0)}u&&Fn(t.attrs,"set","")}function Pm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Os(l))continue;const u=e[l];let d;s&&be(s,d=Ct(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:yc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ie(n),u=c||De;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Xl(s,l,p,u[p],t,!be(u,p))}}return o}function Xl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=ts(s);r=u[n]=l.call(null,e),d()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===qt(n))&&(r=!0))}return r}function km(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const d=p=>{l=!0;const[g,T]=km(p,e,!0);Be(o,g),T&&c.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Ve(t)&&r.set(t,Ps),Ps;if(se(i))for(let d=0;d<i.length;d++){const p=Ct(i[d]);Tf(p)&&(o[p]=De)}else if(i)for(const d in i){const p=Ct(d);if(Tf(p)){const g=i[d],T=o[p]=se(g)||fe(g)?{type:g}:Be({},g);if(T){const S=Af(Boolean,T.type),M=Af(String,T.type);T[0]=S>-1,T[1]=M<0||S<M,(S>-1||be(T,"default"))&&c.push(p)}}}const u=[o,c];return Ve(t)&&r.set(t,u),u}function Tf(t){return t[0]!=="$"&&!Os(t)}function wf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function If(t,e){return wf(t)===wf(e)}function Af(t,e){return se(e)?e.findIndex(n=>If(n,t)):fe(e)&&If(e,t)?0:-1}const Om=t=>t[0]==="_"||t==="$stable",sh=t=>se(t)?t.map(jt):[jt(t)],rI=(t,e,n)=>{if(e._n)return e;const r=on((...s)=>sh(e(...s)),n);return r._c=!1,r},Dm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Om(s))continue;const i=t[s];if(fe(i))e[s]=rI(s,i,r);else if(i!=null){const o=sh(i);e[s]=()=>o}}},Nm=(t,e)=>{const n=sh(e);t.slots.default=()=>n},sI=(t,e)=>{const n=t.slots=Sm();if(t.vnode.shapeFlag&32){const r=e._;r?(Be(n,e),Lg(n,"_",r,!0)):Dm(e,n)}else e&&Nm(t,e)},iI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Be(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Dm(e,s)),o=e}else e&&(Nm(t,e),o={default:1});if(i)for(const c in s)!Om(c)&&o[c]==null&&delete s[c]};function $a(t,e,n,r,s=!1){if(se(t)){t.forEach((g,T)=>$a(g,e&&(se(e)?e[T]:e),n,r,s));return}if(Qr(r)&&!s)return;const i=r.shapeFlag&4?Oo(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===De?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(je(u)?(d[u]=null,be(p,u)&&(p[u]=null)):Ye(u)&&(u.value=null)),fe(l))Un(l,c,12,[o,d]);else{const g=je(l),T=Ye(l);if(g||T){const S=()=>{if(t.f){const M=g?be(p,l)?p[l]:d[l]:l.value;s?se(M)&&Uu(M,i):se(M)?M.includes(i)||M.push(i):g?(d[l]=[i],be(p,l)&&(p[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else g?(d[l]=o,be(p,l)&&(p[l]=o)):T&&(l.value=o,t.k&&(d[t.k]=o))};o?(S.id=-1,at(S,n)):S()}}}let bf=!1;const Is=()=>{bf||(console.error("Hydration completed but contains mismatches."),bf=!0)},oI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",aI=t=>t.namespaceURI.includes("MathML"),ha=t=>{if(oI(t))return"svg";if(aI(t))return"mathml"},da=t=>t.nodeType===8;function cI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,d=(C,P)=>{if(!P.hasChildNodes()){n(null,C,P),Ua(),P._vnode=C;return}p(P.firstChild,C,null,null,null),Ua(),P._vnode=C},p=(C,P,N,k,I,v=!1)=>{v=v||!!P.dynamicChildren;const m=da(C)&&C.data==="[",y=()=>M(C,P,N,k,I,m),{type:w,ref:A,shapeFlag:E,patchFlag:de}=P;let ye=C.nodeType;P.el=C,de===-2&&(v=!1,P.dynamicChildren=null);let z=null;switch(w){case Zr:ye!==3?P.children===""?(l(P.el=s(""),o(C),C),z=C):z=y():(C.data!==P.children&&(Is(),C.data=P.children),z=i(C));break;case lt:O(C)?(z=i(C),F(P.el=C.content.firstChild,C,N)):ye!==8||m?z=y():z=i(C);break;case Yr:if(m&&(C=i(C),ye=C.nodeType),ye===1||ye===3){z=C;const Q=!P.children.length;for(let W=0;W<P.staticCount;W++)Q&&(P.children+=z.nodeType===1?z.outerHTML:z.data),W===P.staticCount-1&&(P.anchor=z),z=i(z);return m?i(z):z}else y();break;case Ge:m?z=S(C,P,N,k,I,v):z=y();break;default:if(E&1)(ye!==1||P.type.toLowerCase()!==C.tagName.toLowerCase())&&!O(C)?z=y():z=g(C,P,N,k,I,v);else if(E&6){P.slotScopeIds=I;const Q=o(C);if(m?z=V(C):da(C)&&C.data==="teleport start"?z=V(C,C.data,"teleport end"):z=i(C),e(P,Q,null,N,k,ha(Q),v),Qr(P)){let W;m?(W=Pe(Ge),W.anchor=z?z.previousSibling:Q.lastChild):W=C.nodeType===3?Vn(""):Pe("div"),W.el=C,P.component.subTree=W}}else E&64?ye!==8?z=y():z=P.type.hydrate(C,P,N,k,I,v,t,T):E&128&&(z=P.type.hydrate(C,P,N,k,ha(o(C)),I,v,t,p))}return A!=null&&$a(A,null,k,P),z},g=(C,P,N,k,I,v)=>{v=v||!!P.dynamicChildren;const{type:m,props:y,patchFlag:w,shapeFlag:A,dirs:E,transition:de}=P,ye=m==="input"||m==="option";if(ye||w!==-1){E&&_n(P,null,N,"created");let z=!1;if(O(C)){z=xm(k,de)&&N&&N.vnode.props&&N.vnode.props.appear;const W=C.content.firstChild;z&&de.beforeEnter(W),F(W,C,N),P.el=C=W}if(A&16&&!(y&&(y.innerHTML||y.textContent))){let W=T(C.firstChild,P,C,N,k,I,v);for(;W;){Is();const qe=W;W=W.nextSibling,c(qe)}}else A&8&&C.textContent!==P.children&&(Is(),C.textContent=P.children);if(y)if(ye||!v||w&48)for(const W in y)(ye&&(W.endsWith("value")||W==="indeterminate")||wo(W)&&!Os(W)||W[0]===".")&&r(C,W,null,y[W],void 0,void 0,N);else y.onClick&&r(C,"onClick",null,y.onClick,void 0,void 0,N);let Q;(Q=y&&y.onVnodeBeforeMount)&&Pt(Q,N,P),E&&_n(P,null,N,"beforeMount"),((Q=y&&y.onVnodeMounted)||E||z)&&gm(()=>{Q&&Pt(Q,N,P),z&&de.enter(C),E&&_n(P,null,N,"mounted")},k)}return C.nextSibling},T=(C,P,N,k,I,v,m)=>{m=m||!!P.dynamicChildren;const y=P.children,w=y.length;for(let A=0;A<w;A++){const E=m?y[A]:y[A]=jt(y[A]);C?C=p(C,E,k,I,v,m):E.type===Zr&&!E.children?l(E.el=s(""),N):(Is(),n(null,E,N,null,k,I,ha(N),v))}return C},S=(C,P,N,k,I,v)=>{const{slotScopeIds:m}=P;m&&(I=I?I.concat(m):m);const y=o(C),w=T(i(C),P,y,N,k,I,v);return w&&da(w)&&w.data==="]"?i(P.anchor=w):(Is(),l(P.anchor=u("]"),y,w),w)},M=(C,P,N,k,I,v)=>{if(Is(),P.el=null,v){const w=V(C);for(;;){const A=i(C);if(A&&A!==w)c(A);else break}}const m=i(C),y=o(C);return c(C),n(null,P,y,m,N,k,ha(y),I),m},V=(C,P="[",N="]")=>{let k=0;for(;C;)if(C=i(C),C&&da(C)&&(C.data===P&&k++,C.data===N)){if(k===0)return i(C);k--}return C},F=(C,P,N)=>{const k=P.parentNode;k&&k.replaceChild(C,P);let I=N;for(;I;)I.vnode.el===P&&(I.vnode.el=I.subTree.el=C),I=I.parent},O=C=>C.nodeType===1&&C.tagName.toLowerCase()==="template";return[d,p]}const at=gm;function Vm(t){return Lm(t)}function Mm(t){return Lm(t,cI)}function Lm(t,e){const n=xg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:g,setScopeId:T=Nt,insertStaticContent:S}=t,M=(b,R,L,j=null,B=null,Y=null,Z=void 0,G=null,J=!!R.dynamicChildren)=>{if(b===R)return;b&&!an(b,R)&&(j=$(b),He(b,B,Y,!0),b=null),R.patchFlag===-2&&(J=!1,R.dynamicChildren=null);const{type:H,ref:te,shapeFlag:le}=R;switch(H){case Zr:V(b,R,L,j);break;case lt:F(b,R,L,j);break;case Yr:b==null&&O(R,L,j,Z);break;case Ge:A(b,R,L,j,B,Y,Z,G,J);break;default:le&1?N(b,R,L,j,B,Y,Z,G,J):le&6?E(b,R,L,j,B,Y,Z,G,J):(le&64||le&128)&&H.process(b,R,L,j,B,Y,Z,G,J,ie)}te!=null&&B&&$a(te,b&&b.ref,Y,R||b,!R)},V=(b,R,L,j)=>{if(b==null)r(R.el=c(R.children),L,j);else{const B=R.el=b.el;R.children!==b.children&&u(B,R.children)}},F=(b,R,L,j)=>{b==null?r(R.el=l(R.children||""),L,j):R.el=b.el},O=(b,R,L,j)=>{[b.el,b.anchor]=S(b.children,R,L,j,b.el,b.anchor)},C=({el:b,anchor:R},L,j)=>{let B;for(;b&&b!==R;)B=g(b),r(b,L,j),b=B;r(R,L,j)},P=({el:b,anchor:R})=>{let L;for(;b&&b!==R;)L=g(b),s(b),b=L;s(R)},N=(b,R,L,j,B,Y,Z,G,J)=>{R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),b==null?k(R,L,j,B,Y,Z,G,J):m(b,R,B,Y,Z,G,J)},k=(b,R,L,j,B,Y,Z,G)=>{let J,H;const{props:te,shapeFlag:le,transition:ce,dirs:ae}=b;if(J=b.el=o(b.type,Y,te&&te.is,te),le&8?d(J,b.children):le&16&&v(b.children,J,null,j,B,yl(b,Y),Z,G),ae&&_n(b,null,j,"created"),I(J,b,b.scopeId,Z,j),te){for(const ke in te)ke!=="value"&&!Os(ke)&&i(J,ke,null,te[ke],Y,b.children,j,B,ot);"value"in te&&i(J,"value",null,te.value,Y),(H=te.onVnodeBeforeMount)&&Pt(H,j,b)}ae&&_n(b,null,j,"beforeMount");const he=xm(B,ce);he&&ce.beforeEnter(J),r(J,R,L),((H=te&&te.onVnodeMounted)||he||ae)&&at(()=>{H&&Pt(H,j,b),he&&ce.enter(J),ae&&_n(b,null,j,"mounted")},B)},I=(b,R,L,j,B)=>{if(L&&T(b,L),j)for(let Y=0;Y<j.length;Y++)T(b,j[Y]);if(B){let Y=B.subTree;if(R===Y){const Z=B.vnode;I(b,Z,Z.scopeId,Z.slotScopeIds,B.parent)}}},v=(b,R,L,j,B,Y,Z,G,J=0)=>{for(let H=J;H<b.length;H++){const te=b[H]=G?ur(b[H]):jt(b[H]);M(null,te,R,L,j,B,Y,Z,G)}},m=(b,R,L,j,B,Y,Z)=>{const G=R.el=b.el;let{patchFlag:J,dynamicChildren:H,dirs:te}=R;J|=b.patchFlag&16;const le=b.props||De,ce=R.props||De;let ae;if(L&&Br(L,!1),(ae=ce.onVnodeBeforeUpdate)&&Pt(ae,L,R,b),te&&_n(R,b,L,"beforeUpdate"),L&&Br(L,!0),H?y(b.dynamicChildren,H,G,L,j,yl(R,B),Y):Z||W(b,R,G,null,L,j,yl(R,B),Y,!1),J>0){if(J&16)w(G,R,le,ce,L,j,B);else if(J&2&&le.class!==ce.class&&i(G,"class",null,ce.class,B),J&4&&i(G,"style",le.style,ce.style,B),J&8){const he=R.dynamicProps;for(let ke=0;ke<he.length;ke++){const Ae=he[ke],Je=le[Ae],Ft=ce[Ae];(Ft!==Je||Ae==="value")&&i(G,Ae,Je,Ft,B,b.children,L,j,ot)}}J&1&&b.children!==R.children&&d(G,R.children)}else!Z&&H==null&&w(G,R,le,ce,L,j,B);((ae=ce.onVnodeUpdated)||te)&&at(()=>{ae&&Pt(ae,L,R,b),te&&_n(R,b,L,"updated")},j)},y=(b,R,L,j,B,Y,Z)=>{for(let G=0;G<R.length;G++){const J=b[G],H=R[G],te=J.el&&(J.type===Ge||!an(J,H)||J.shapeFlag&70)?p(J.el):L;M(J,H,te,null,j,B,Y,Z,!0)}},w=(b,R,L,j,B,Y,Z)=>{if(L!==j){if(L!==De)for(const G in L)!Os(G)&&!(G in j)&&i(b,G,L[G],null,Z,R.children,B,Y,ot);for(const G in j){if(Os(G))continue;const J=j[G],H=L[G];J!==H&&G!=="value"&&i(b,G,H,J,Z,R.children,B,Y,ot)}"value"in j&&i(b,"value",L.value,j.value,Z)}},A=(b,R,L,j,B,Y,Z,G,J)=>{const H=R.el=b?b.el:c(""),te=R.anchor=b?b.anchor:c("");let{patchFlag:le,dynamicChildren:ce,slotScopeIds:ae}=R;ae&&(G=G?G.concat(ae):ae),b==null?(r(H,L,j),r(te,L,j),v(R.children||[],L,te,B,Y,Z,G,J)):le>0&&le&64&&ce&&b.dynamicChildren?(y(b.dynamicChildren,ce,L,B,Y,Z,G),(R.key!=null||B&&R===B.subTree)&&ih(b,R,!0)):W(b,R,L,te,B,Y,Z,G,J)},E=(b,R,L,j,B,Y,Z,G,J)=>{R.slotScopeIds=G,b==null?R.shapeFlag&512?B.ctx.activate(R,L,j,Z,J):de(R,L,j,B,Y,Z,J):ye(b,R,J)},de=(b,R,L,j,B,Y,Z)=>{const G=b.component=r_(b,j,B);if(Po(b)&&(G.ctx.renderer=ie),i_(G),G.asyncDep){if(B&&B.registerDep(G,z,Z),!b.el){const J=G.subTree=Pe(lt);F(null,J,R,L)}}else z(G,b,R,L,B,Y,Z)},ye=(b,R,L)=>{const j=R.component=b.component;if(vw(b,R,L))if(j.asyncDep&&!j.asyncResolved){Q(j,R,L);return}else j.next=R,dw(j.update),j.effect.dirty=!0,j.update();else R.el=b.el,j.vnode=R},z=(b,R,L,j,B,Y,Z)=>{const G=()=>{if(b.isMounted){let{next:te,bu:le,u:ce,parent:ae,vnode:he}=b;{const Yt=Fm(b);if(Yt){te&&(te.el=he.el,Q(b,te,Z)),Yt.asyncDep.then(()=>{b.isUnmounted||G()});return}}let ke=te,Ae;Br(b,!1),te?(te.el=he.el,Q(b,te,Z)):te=he,le&&Ds(le),(Ae=te.props&&te.props.onVnodeBeforeUpdate)&&Pt(Ae,ae,te,he),Br(b,!0);const Je=Ia(b),Ft=b.subTree;b.subTree=Je,M(Ft,Je,p(Ft.el),$(Ft),b,B,Y),te.el=Je.el,ke===null&&Zu(b,Je.el),ce&&at(ce,B),(Ae=te.props&&te.props.onVnodeUpdated)&&at(()=>Pt(Ae,ae,te,he),B)}else{let te;const{el:le,props:ce}=R,{bm:ae,m:he,parent:ke}=b,Ae=Qr(R);if(Br(b,!1),ae&&Ds(ae),!Ae&&(te=ce&&ce.onVnodeBeforeMount)&&Pt(te,ke,R),Br(b,!0),le&&Ne){const Je=()=>{b.subTree=Ia(b),Ne(le,b.subTree,b,B,null)};Ae?R.type.__asyncLoader().then(()=>!b.isUnmounted&&Je()):Je()}else{const Je=b.subTree=Ia(b);M(null,Je,L,j,b,B,Y),R.el=Je.el}if(he&&at(he,B),!Ae&&(te=ce&&ce.onVnodeMounted)){const Je=R;at(()=>Pt(te,ke,Je),B)}(R.shapeFlag&256||ke&&Qr(ke.vnode)&&ke.vnode.shapeFlag&256)&&b.a&&at(b.a,B),b.isMounted=!0,R=L=j=null}},J=b.effect=new Ks(G,Nt,()=>_c(H),b.scope),H=b.update=()=>{J.dirty&&J.run()};H.id=b.uid,Br(b,!0),H()},Q=(b,R,L)=>{R.component=b;const j=b.vnode.props;b.vnode=R,b.next=null,nI(b,R.props,j,L),iI(b,R.children,L),Or(),pf(b),Dr()},W=(b,R,L,j,B,Y,Z,G,J=!1)=>{const H=b&&b.children,te=b?b.shapeFlag:0,le=R.children,{patchFlag:ce,shapeFlag:ae}=R;if(ce>0){if(ce&128){rn(H,le,L,j,B,Y,Z,G,J);return}else if(ce&256){qe(H,le,L,j,B,Y,Z,G,J);return}}ae&8?(te&16&&ot(H,B,Y),le!==H&&d(L,le)):te&16?ae&16?rn(H,le,L,j,B,Y,Z,G,J):ot(H,B,Y,!0):(te&8&&d(L,""),ae&16&&v(le,L,j,B,Y,Z,G,J))},qe=(b,R,L,j,B,Y,Z,G,J)=>{b=b||Ps,R=R||Ps;const H=b.length,te=R.length,le=Math.min(H,te);let ce;for(ce=0;ce<le;ce++){const ae=R[ce]=J?ur(R[ce]):jt(R[ce]);M(b[ce],ae,L,null,B,Y,Z,G,J)}H>te?ot(b,B,Y,!0,!1,le):v(R,L,j,B,Y,Z,G,J,le)},rn=(b,R,L,j,B,Y,Z,G,J)=>{let H=0;const te=R.length;let le=b.length-1,ce=te-1;for(;H<=le&&H<=ce;){const ae=b[H],he=R[H]=J?ur(R[H]):jt(R[H]);if(an(ae,he))M(ae,he,L,null,B,Y,Z,G,J);else break;H++}for(;H<=le&&H<=ce;){const ae=b[le],he=R[ce]=J?ur(R[ce]):jt(R[ce]);if(an(ae,he))M(ae,he,L,null,B,Y,Z,G,J);else break;le--,ce--}if(H>le){if(H<=ce){const ae=ce+1,he=ae<te?R[ae].el:j;for(;H<=ce;)M(null,R[H]=J?ur(R[H]):jt(R[H]),L,he,B,Y,Z,G,J),H++}}else if(H>ce)for(;H<=le;)He(b[H],B,Y,!0),H++;else{const ae=H,he=H,ke=new Map;for(H=he;H<=ce;H++){const At=R[H]=J?ur(R[H]):jt(R[H]);At.key!=null&&ke.set(At.key,H)}let Ae,Je=0;const Ft=ce-he+1;let Yt=!1,mi=0;const Zn=new Array(Ft);for(H=0;H<Ft;H++)Zn[H]=0;for(H=ae;H<=le;H++){const At=b[H];if(Je>=Ft){He(At,B,Y,!0);continue}let Jt;if(At.key!=null)Jt=ke.get(At.key);else for(Ae=he;Ae<=ce;Ae++)if(Zn[Ae-he]===0&&an(At,R[Ae])){Jt=Ae;break}Jt===void 0?He(At,B,Y,!0):(Zn[Jt-he]=H+1,Jt>=mi?mi=Jt:Yt=!0,M(At,R[Jt],L,null,B,Y,Z,G,J),Je++)}const _s=Yt?lI(Zn):Ps;for(Ae=_s.length-1,H=Ft-1;H>=0;H--){const At=he+H,Jt=R[At],ys=At+1<te?R[At+1].el:j;Zn[H]===0?M(null,Jt,L,ys,B,Y,Z,G,J):Yt&&(Ae<0||H!==_s[Ae]?Qt(Jt,L,ys,2):Ae--)}}},Qt=(b,R,L,j,B=null)=>{const{el:Y,type:Z,transition:G,children:J,shapeFlag:H}=b;if(H&6){Qt(b.component.subTree,R,L,j);return}if(H&128){b.suspense.move(R,L,j);return}if(H&64){Z.move(b,R,L,ie);return}if(Z===Ge){r(Y,R,L);for(let le=0;le<J.length;le++)Qt(J[le],R,L,j);r(b.anchor,R,L);return}if(Z===Yr){C(b,R,L);return}if(j!==2&&H&1&&G)if(j===0)G.beforeEnter(Y),r(Y,R,L),at(()=>G.enter(Y),B);else{const{leave:le,delayLeave:ce,afterLeave:ae}=G,he=()=>r(Y,R,L),ke=()=>{le(Y,()=>{he(),ae&&ae()})};ce?ce(Y,he,ke):ke()}else r(Y,R,L)},He=(b,R,L,j=!1,B=!1)=>{const{type:Y,props:Z,ref:G,children:J,dynamicChildren:H,shapeFlag:te,patchFlag:le,dirs:ce,memoIndex:ae}=b;if(G!=null&&$a(G,null,L,b,!0),ae!=null&&(R.renderCache[ae]=void 0),te&256){R.ctx.deactivate(b);return}const he=te&1&&ce,ke=!Qr(b);let Ae;if(ke&&(Ae=Z&&Z.onVnodeBeforeUnmount)&&Pt(Ae,R,b),te&6)mn(b.component,L,j);else{if(te&128){b.suspense.unmount(L,j);return}he&&_n(b,null,R,"beforeUnmount"),te&64?b.type.remove(b,R,L,B,ie,j):H&&(Y!==Ge||le>0&&le&64)?ot(H,R,L,!1,!0):(Y===Ge&&le&384||!B&&te&16)&&ot(J,R,L),j&&Ke(b)}(ke&&(Ae=Z&&Z.onVnodeUnmounted)||he)&&at(()=>{Ae&&Pt(Ae,R,b),he&&_n(b,null,R,"unmounted")},L)},Ke=b=>{const{type:R,el:L,anchor:j,transition:B}=b;if(R===Ge){Xn(L,j);return}if(R===Yr){P(b);return}const Y=()=>{s(L),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(b.shapeFlag&1&&B&&!B.persisted){const{leave:Z,delayLeave:G}=B,J=()=>Z(L,Y);G?G(b.el,Y,J):J()}else Y()},Xn=(b,R)=>{let L;for(;b!==R;)L=g(b),s(b),b=L;s(R)},mn=(b,R,L)=>{const{bum:j,scope:B,update:Y,subTree:Z,um:G,m:J,a:H}=b;ja(J),ja(H),j&&Ds(j),B.stop(),Y&&(Y.active=!1,He(Z,b,R,L)),G&&at(G,R),at(()=>{b.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},ot=(b,R,L,j=!1,B=!1,Y=0)=>{for(let Z=Y;Z<b.length;Z++)He(b[Z],R,L,j,B)},$=b=>b.shapeFlag&6?$(b.component.subTree):b.shapeFlag&128?b.suspense.next():g(b.anchor||b.el);let ne=!1;const ee=(b,R,L)=>{b==null?R._vnode&&He(R._vnode,null,null,!0):M(R._vnode||null,b,R,null,null,null,L),ne||(ne=!0,pf(),Ua(),ne=!1),R._vnode=b},ie={p:M,um:He,m:Qt,r:Ke,mt:de,mc:v,pc:W,pbc:y,n:$,o:t};let Ee,Ne;return e&&([Ee,Ne]=e(ie)),{render:ee,hydrate:Ee,createApp:Zw(ee,Ee)}}function yl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Br({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ih(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ur(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&ih(o,c)),c.type===Zr&&(c.el=o.el)}}function lI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Fm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fm(e)}function ja(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const Um=Symbol.for("v-scx"),Bm=()=>Wt(Um);function uI(t,e){return Co(t,null,e)}function $m(t,e){return Co(t,null,{flush:"post"})}function jm(t,e){return Co(t,null,{flush:"sync"})}const fa={};function Bs(t,e,n){return Co(t,e,n)}function Co(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=De){if(e&&i){const k=e;e=(...I)=>{k(...I),N()}}const l=rt,u=k=>r===!0?k:dr(k,r===!1?1:void 0);let d,p=!1,g=!1;if(Ye(t)?(d=()=>t.value,p=no(t)):Ns(t)?(d=()=>u(t),p=!0):se(t)?(g=!0,p=t.some(k=>Ns(k)||no(k)),d=()=>t.map(k=>{if(Ye(k))return k.value;if(Ns(k))return u(k);if(fe(k))return Un(k,l,2)})):fe(t)?e?d=()=>Un(t,l,2):d=()=>(T&&T(),Kt(t,l,3,[S])):d=Nt,e&&r){const k=d;d=()=>dr(k())}let T,S=k=>{T=C.onStop=()=>{Un(k,l,4),T=C.onStop=void 0}},M;if(ko)if(S=Nt,e?n&&Kt(e,l,3,[d(),g?[]:void 0,S]):d(),s==="sync"){const k=Bm();M=k.__watcherHandles||(k.__watcherHandles=[])}else return Nt;let V=g?new Array(t.length).fill(fa):fa;const F=()=>{if(!(!C.active||!C.dirty))if(e){const k=C.run();(r||p||(g?k.some((I,v)=>hn(I,V[v])):hn(k,V)))&&(T&&T(),Kt(e,l,3,[k,V===fa?void 0:g&&V[0]===fa?[]:V,S]),V=k)}else C.run()};F.allowRecurse=!!e;let O;s==="sync"?O=F:s==="post"?O=()=>at(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),O=()=>_c(F));const C=new Ks(d,Nt,O),P=$g(),N=()=>{C.stop(),P&&Uu(P.effects,C)};return e?n?F():V=C.run():s==="post"?at(C.run.bind(C),l&&l.suspense):C.run(),M&&M.push(N),N}function hI(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?qm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=ts(this),c=Co(s,i.bind(r),n);return o(),c}function qm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function dr(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ye(t))dr(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)dr(t[r],e,n);else if(us(t)||ks(t))t.forEach(r=>{dr(r,e,n)});else if(Mg(t)){for(const r in t)dr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&dr(t[r],e,n)}return t}const Po=t=>t.type.__isKeepAlive,dI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=zn(),r=n.ctx;if(!r.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:d,o:{createElement:p}}}=r,g=p("div");r.activate=(O,C,P,N,k)=>{const I=O.component;u(O,C,P,0,c),l(I.vnode,O,C,P,I,c,N,O.slotScopeIds,k),at(()=>{I.isDeactivated=!1,I.a&&Ds(I.a);const v=O.props&&O.props.onVnodeMounted;v&&Pt(v,I.parent,O)},c)},r.deactivate=O=>{const C=O.component;ja(C.m),ja(C.a),u(O,g,null,1,c),at(()=>{C.da&&Ds(C.da);const P=O.props&&O.props.onVnodeUnmounted;P&&Pt(P,C.parent,O),C.isDeactivated=!0},c)};function T(O){vl(O),d(O,n,c,!0)}function S(O){s.forEach((C,P)=>{const N=iu(C.type);N&&(!O||!O(N))&&M(P)})}function M(O){const C=s.get(O);!o||!an(C,o)?T(C):o&&vl(o),s.delete(O),i.delete(O)}Bs(()=>[t.include,t.exclude],([O,C])=>{O&&S(P=>Mi(O,P)),C&&S(P=>!Mi(C,P))},{flush:"post",deep:!0});let V=null;const F=()=>{V!=null&&(Wl(n.subTree.type)?at(()=>{s.set(V,pa(n.subTree))},n.subTree.suspense):s.set(V,pa(n.subTree)))};return oi(F),Tc(F),wc(()=>{s.forEach(O=>{const{subTree:C,suspense:P}=n,N=pa(C);if(O.type===N.type&&O.key===N.key){vl(N);const k=N.component.da;k&&at(k,P);return}T(O)})}),()=>{if(V=null,!e.default)return null;const O=e.default(),C=O[0];if(O.length>1)return o=null,O;if(!Rr(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return o=null,C;let P=pa(C);const N=P.type,k=iu(Qr(P)?P.type.__asyncResolved||{}:N),{include:I,exclude:v,max:m}=t;if(I&&(!k||!Mi(I,k))||v&&k&&Mi(v,k))return o=P,C;const y=P.key==null?N:P.key,w=s.get(y);return P.el&&(P=An(P),C.shapeFlag&128&&(C.ssContent=P)),V=y,w?(P.el=w.el,P.component=w.component,P.transition&&br(P,P.transition),P.shapeFlag|=512,i.delete(y),i.add(y)):(i.add(y),m&&i.size>parseInt(m,10)&&M(i.values().next().value)),P.shapeFlag|=256,o=P,Wl(C.type)?C:P}}},fI=dI;function Mi(t,e){return se(t)?t.some(n=>Mi(n,e)):je(t)?t.split(",").includes(e):uT(t)?t.test(e):!1}function Hm(t,e){Wm(t,"a",e)}function Km(t,e){Wm(t,"da",e)}function Wm(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ec(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Po(s.parent.vnode)&&pI(r,e,n,s),s=s.parent}}function pI(t,e,n,r){const s=Ec(e,t,r,!0);Ic(()=>{Uu(r[e],s)},n)}function vl(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function pa(t){return t.shapeFlag&128?t.ssContent:t}const lr=Symbol("_leaveCb"),ga=Symbol("_enterCb");function oh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oi(()=>{t.isMounted=!0}),wc(()=>{t.isUnmounting=!0}),t}const Xt=[Function,Array],ah={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xt,onEnter:Xt,onAfterEnter:Xt,onEnterCancelled:Xt,onBeforeLeave:Xt,onLeave:Xt,onAfterLeave:Xt,onLeaveCancelled:Xt,onBeforeAppear:Xt,onAppear:Xt,onAfterAppear:Xt,onAppearCancelled:Xt},Gm=t=>{const e=t.subTree;return e.component?Gm(e.component):e},gI={name:"BaseTransition",props:ah,setup(t,{slots:e}){const n=zn(),r=oh();return()=>{const s=e.default&&Ac(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==lt){i=g;break}}const o=Ie(t),{mode:c}=o;if(r.isLeaving)return El(i);const l=Rf(i);if(!l)return El(i);let u=Gs(l,o,r,n,g=>u=g);br(l,u);const d=n.subTree,p=d&&Rf(d);if(p&&p.type!==lt&&!an(l,p)&&Gm(n).type!==lt){const g=Gs(p,o,r,n);if(br(p,g),c==="out-in"&&l.type!==lt)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},El(i);c==="in-out"&&l.type!==lt&&(g.delayLeave=(T,S,M)=>{const V=Qm(r,p);V[String(p.key)]=p,T[lr]=()=>{S(),T[lr]=void 0,delete u.delayedLeave},u.delayedLeave=M})}return i}}},zm=gI;function Qm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Gs(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:T,onAfterLeave:S,onLeaveCancelled:M,onBeforeAppear:V,onAppear:F,onAfterAppear:O,onAppearCancelled:C}=e,P=String(t.key),N=Qm(n,t),k=(m,y)=>{m&&Kt(m,r,9,y)},I=(m,y)=>{const w=y[1];k(m,y),se(m)?m.every(A=>A.length<=1)&&w():m.length<=1&&w()},v={mode:o,persisted:c,beforeEnter(m){let y=l;if(!n.isMounted)if(i)y=V||l;else return;m[lr]&&m[lr](!0);const w=N[P];w&&an(t,w)&&w.el[lr]&&w.el[lr](),k(y,[m])},enter(m){let y=u,w=d,A=p;if(!n.isMounted)if(i)y=F||u,w=O||d,A=C||p;else return;let E=!1;const de=m[ga]=ye=>{E||(E=!0,ye?k(A,[m]):k(w,[m]),v.delayedLeave&&v.delayedLeave(),m[ga]=void 0)};y?I(y,[m,de]):de()},leave(m,y){const w=String(t.key);if(m[ga]&&m[ga](!0),n.isUnmounting)return y();k(g,[m]);let A=!1;const E=m[lr]=de=>{A||(A=!0,y(),de?k(M,[m]):k(S,[m]),m[lr]=void 0,N[w]===t&&delete N[w])};N[w]=t,T?I(T,[m,E]):E()},clone(m){const y=Gs(m,e,n,r,s);return s&&s(y),y}};return v}function El(t){if(Po(t))return t=An(t),t.children=null,t}function Rf(t){if(!Po(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function br(t,e){t.shapeFlag&6&&t.component?br(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ac(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ge?(o.patchFlag&128&&s++,r=r.concat(Ac(o.children,e,c))):(e||o.type!==lt)&&r.push(c!=null?An(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const mI=t=>t.__isTeleport,Hi=t=>t&&(t.disabled||t.disabled===""),Sf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Cf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Zl=(t,e)=>{const n=t&&t.to;return je(n)?e?e(n):null:n},_I={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:d,pc:p,pbc:g,o:{insert:T,querySelector:S,createText:M,createComment:V}}=u,F=Hi(e.props);let{shapeFlag:O,children:C,dynamicChildren:P}=e;if(t==null){const N=e.el=M(""),k=e.anchor=M("");T(N,n,r),T(k,n,r);const I=e.target=Zl(e.props,S),v=e.targetAnchor=M("");I&&(T(v,I),o==="svg"||Sf(I)?o="svg":(o==="mathml"||Cf(I))&&(o="mathml"));const m=(y,w)=>{O&16&&d(C,y,w,s,i,o,c,l)};F?m(n,k):I&&m(I,v)}else{e.el=t.el;const N=e.anchor=t.anchor,k=e.target=t.target,I=e.targetAnchor=t.targetAnchor,v=Hi(t.props),m=v?n:k,y=v?N:I;if(o==="svg"||Sf(k)?o="svg":(o==="mathml"||Cf(k))&&(o="mathml"),P?(g(t.dynamicChildren,P,m,s,i,o,c),ih(t,e,!0)):l||p(t,e,m,y,s,i,o,c,!1),F)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ma(e,n,N,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const w=e.target=Zl(e.props,S);w&&ma(e,w,null,u,0)}else v&&ma(e,k,I,u,1)}Ym(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:d,target:p,props:g}=t;if(p&&i(d),o&&i(u),c&16){const T=o||!Hi(g);for(let S=0;S<l.length;S++){const M=l[S];s(M,e,n,T,!!M.dynamicChildren)}}},move:ma,hydrate:yI};function ma(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:d}=t,p=i===2;if(p&&r(o,e,n),(!p||Hi(d))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function yI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const d=e.target=Zl(e.props,l);if(d){const p=d._lpa||d.firstChild;if(e.shapeFlag&16)if(Hi(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let g=p;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,d,n,r,s,i)}Ym(e)}return e.anchor&&o(e.anchor)}const vI=_I;function Ym(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ge=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),lt=Symbol.for("v-cmt"),Yr=Symbol.for("v-stc"),Ki=[];let Vt=null;function Se(t=!1){Ki.push(Vt=t?null:[])}function Jm(){Ki.pop(),Vt=Ki[Ki.length-1]||null}let es=1;function eu(t){es+=t}function Xm(t){return t.dynamicChildren=es>0?Vt||Ps:null,Jm(),es>0&&Vt&&Vt.push(t),t}function $e(t,e,n,r,s,i){return Xm(U(t,e,n,r,s,i,!0))}function mr(t,e,n,r,s){return Xm(Pe(t,e,n,r,s,!0))}function Rr(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}function EI(t){}const Zm=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Ye(t)||fe(t)?{i:st,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,r=0,s=null,i=t===Ge?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zm(e),ref:e&&Aa(e),scopeId:vc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:st};return c?(ch(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),es>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Pe=TI;function TI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fm)&&(t=lt),Rr(t)){const c=An(t,e,!0);return n&&ch(c,n),es>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(CI(t)&&(t=t.__vccOpts),e){e=e_(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=$t(c)),Ve(l)&&(zu(l)&&!se(l)&&(l=Be({},l)),e.style=Ao(l))}const o=je(t)?1:Wl(t)?128:mI(t)?64:Ve(t)?4:fe(t)?2:0;return U(t,e,n,r,s,o,i,!0)}function e_(t){return t?zu(t)||Cm(t)?Be({},t):t:null}function An(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?n_(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Zm(u),ref:e&&e.ref?n&&i?se(i)?i.concat(Aa(e)):[i,Aa(e)]:Aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&An(t.ssContent),ssFallback:t.ssFallback&&An(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&br(d,l.clone(d)),d}function Vn(t=" ",e=0){return Pe(Zr,null,t,e)}function t_(t,e){const n=Pe(Yr,null,t);return n.staticCount=e,n}function vn(t="",e=!1){return e?(Se(),mr(lt,null,t)):Pe(lt,null,t)}function jt(t){return t==null||typeof t=="boolean"?Pe(lt):se(t)?Pe(Ge,null,t.slice()):typeof t=="object"?ur(t):Pe(Zr,null,String(t))}function ur(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:An(t)}function ch(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ch(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Cm(e)?e._ctx=st:s===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:st},n=32):(e=String(e),r&64?(n=16,e=[Vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function n_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$t([e.class,r.class]));else if(s==="style")e.style=Ao([e.style,r.style]);else if(wo(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pt(t,e,n,r=null){Kt(t,e,7,[n,r])}const wI=bm();let II=0;function r_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wI,i={uid:II++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ju(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:km(r,s),emitsOptions:hm(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pw.bind(null,i),t.ce&&t.ce(i),i}let rt=null;const zn=()=>rt||st;let qa,tu;{const t=xg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};qa=e("__VUE_INSTANCE_SETTERS__",n=>rt=n),tu=e("__VUE_SSR_SETTERS__",n=>ko=n)}const ts=t=>{const e=rt;return qa(t),t.scope.on(),()=>{t.scope.off(),qa(e)}},nu=()=>{rt&&rt.scope.off(),qa(null)};function s_(t){return t.vnode.shapeFlag&4}let ko=!1;function i_(t,e=!1){e&&tu(e);const{props:n,children:r}=t.vnode,s=s_(t);tI(t,n,s,e),sI(t,r);const i=s?AI(t,e):void 0;return e&&tu(!1),i}function AI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ql);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?a_(t):null,i=ts(t);Or();const o=Un(r,t,0,[t.props,s]);if(Dr(),i(),Bu(o)){if(o.then(nu,nu),e)return o.then(c=>{ru(t,c,e)}).catch(c=>{hs(c,t,0)});t.asyncDep=o}else ru(t,o,e)}else o_(t,e)}function ru(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Ju(e)),o_(t,n)}let Ha,su;function bI(t){Ha=t,su=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Nw))}}const RI=()=>!Ha;function o_(t,e,n){const r=t.type;if(!t.render){if(!e&&Ha&&!r.render){const s=r.template||rh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Be(Be({isCustomElement:i,delimiters:c},o),l);r.render=Ha(s,u)}}t.render=r.render||Nt,su&&su(t)}{const s=ts(t);Or();try{Gw(t)}finally{Dr(),s()}}}const SI={get(t,e){return xt(t,"get",""),t[e]}};function a_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,SI),slots:t.slots,emit:t.emit,expose:e}}function Oo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ju(tm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qi)return qi[n](t)},has(e,n){return n in e||n in qi}})):t.proxy}function iu(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function CI(t){return fe(t)&&"__vccOpts"in t}const Zt=(t,e)=>QT(t,e,ko);function PI(t,e,n=De){const r=zn(),s=Ct(e),i=qt(e),o=im((l,u)=>{let d;return jm(()=>{const p=t[e];hn(d,p)&&(d=p,u())}),{get(){return l(),n.get?n.get(d):d},set(p){const g=r.vnode.props;!(g&&(e in g||s in g||i in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g))&&hn(p,d)&&(d=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function bc(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!se(e)?Rr(e)?Pe(t,null,[e]):Pe(t,e):Pe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),Pe(t,e,n))}function kI(){}function OI(t,e,n,r){const s=n[r];if(s&&c_(s,t))return s;const i=e();return i.memo=t.slice(),i.memoIndex=r,n[r]=i}function c_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(hn(n[r],e[r]))return!1;return es>0&&Vt&&Vt.push(t),!0}const l_="3.4.29",DI=Nt,NI=lw,VI=As,MI=um,LI={createComponentInstance:r_,setupComponent:i_,renderComponentRoot:Ia,setCurrentRenderingInstance:oo,isVNode:Rr,normalizeVNode:jt,getComponentPublicInstance:Oo},xI=LI,FI=null,UI=null,BI=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $I="http://www.w3.org/2000/svg",jI="http://www.w3.org/1998/Math/MathML",On=typeof document<"u"?document:null,Pf=On&&On.createElement("template"),qI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?On.createElementNS($I,t):e==="mathml"?On.createElementNS(jI,t):n?On.createElement(t,{is:n}):On.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>On.createTextNode(t),createComment:t=>On.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>On.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Pf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Pf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sr="transition",ki="animation",zs=Symbol("_vtc"),Rc=(t,{slots:e})=>bc(zm,h_(t),e);Rc.displayName="Transition";const u_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},HI=Rc.props=Be({},ah,u_),$r=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},kf=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function h_(t){const e={};for(const A in t)A in u_||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:T=`${n}-leave-to`}=t,S=KI(s),M=S&&S[0],V=S&&S[1],{onBeforeEnter:F,onEnter:O,onEnterCancelled:C,onLeave:P,onLeaveCancelled:N,onBeforeAppear:k=F,onAppear:I=O,onAppearCancelled:v=C}=e,m=(A,E,de)=>{ar(A,E?d:c),ar(A,E?u:o),de&&de()},y=(A,E)=>{A._isLeaving=!1,ar(A,p),ar(A,T),ar(A,g),E&&E()},w=A=>(E,de)=>{const ye=A?I:O,z=()=>m(E,A,de);$r(ye,[E,z]),Of(()=>{ar(E,A?l:i),kn(E,A?d:c),kf(ye)||Df(E,r,M,z)})};return Be(e,{onBeforeEnter(A){$r(F,[A]),kn(A,i),kn(A,o)},onBeforeAppear(A){$r(k,[A]),kn(A,l),kn(A,u)},onEnter:w(!1),onAppear:w(!0),onLeave(A,E){A._isLeaving=!0;const de=()=>y(A,E);kn(A,p),kn(A,g),f_(),Of(()=>{A._isLeaving&&(ar(A,p),kn(A,T),kf(P)||Df(A,r,V,de))}),$r(P,[A,de])},onEnterCancelled(A){m(A,!1),$r(C,[A])},onAppearCancelled(A){m(A,!0),$r(v,[A])},onLeaveCancelled(A){y(A),$r(N,[A])}})}function KI(t){if(t==null)return null;if(Ve(t))return[Tl(t.enter),Tl(t.leave)];{const e=Tl(t);return[e,e]}}function Tl(t){return La(t)}function kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[zs]||(t[zs]=new Set)).add(e)}function ar(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[zs];n&&(n.delete(e),n.size||(t[zs]=void 0))}function Of(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let WI=0;function Df(t,e,n,r){const s=t._endId=++WI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=d_(t,e);if(!o)return r();const u=o+"end";let d=0;const p=()=>{t.removeEventListener(u,g),i()},g=T=>{T.target===t&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},c+1),t.addEventListener(u,g)}function d_(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${sr}Delay`),i=r(`${sr}Duration`),o=Nf(s,i),c=r(`${ki}Delay`),l=r(`${ki}Duration`),u=Nf(c,l);let d=null,p=0,g=0;e===sr?o>0&&(d=sr,p=o,g=i.length):e===ki?u>0&&(d=ki,p=u,g=l.length):(p=Math.max(o,u),d=p>0?o>u?sr:ki:null,g=d?d===sr?i.length:l.length:0);const T=d===sr&&/\b(transform|all)(,|$)/.test(r(`${sr}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:T}}function Nf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vf(n)+Vf(t[r])))}function Vf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function f_(){return document.body.offsetHeight}function GI(t,e,n){const r=t[zs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ka=Symbol("_vod"),p_=Symbol("_vsh"),g_={beforeMount(t,{value:e},{transition:n}){t[Ka]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Oi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Oi(t,!0),r.enter(t)):r.leave(t,()=>{Oi(t,!1)}):Oi(t,e))},beforeUnmount(t,{value:e}){Oi(t,e)}};function Oi(t,e){t.style.display=e?t[Ka]:"none",t[p_]=!e}function zI(){g_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const m_=Symbol("");function QI(t){const e=zn();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>au(i,s))},r=()=>{const s=t(e.proxy);ou(e.subTree,s),n(s)};oi(()=>{$m(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Ic(()=>s.disconnect())})}function ou(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{ou(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)au(t.el,e);else if(t.type===Ge)t.children.forEach(n=>ou(n,e));else if(t.type===Yr){let{el:n,anchor:r}=t;for(;n&&(au(n,e),n!==r);)n=n.nextSibling}}function au(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[m_]=r}}const YI=/(^|;)\s*display\s*:/;function JI(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ba(r,c,"")}else for(const o in e)n[o]==null&&ba(r,o,"");for(const o in n)o==="display"&&(i=!0),ba(r,o,n[o])}else if(s){if(e!==n){const o=r[m_];o&&(n+=";"+o),r.cssText=n,i=YI.test(n)}}else e&&t.removeAttribute("style");Ka in t&&(t[Ka]=i?r.display:"",t[p_]&&(r.display="none"))}const Mf=/\s*!important$/;function ba(t,e,n){if(se(n))n.forEach(r=>ba(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=XI(t,e);Mf.test(n)?t.setProperty(qt(r),n.replace(Mf,""),"important"):t[r]=n}}const Lf=["Webkit","Moz","ms"],wl={};function XI(t,e){const n=wl[e];if(n)return n;let r=Ct(e);if(r!=="filter"&&r in t)return wl[e]=r;r=Io(r);for(let s=0;s<Lf.length;s++){const i=Lf[s]+r;if(i in t)return wl[e]=i}return e}const xf="http://www.w3.org/1999/xlink";function Ff(t,e,n,r,s,i=wT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xf,e.slice(6,e.length)):t.setAttributeNS(xf,e,n):n==null||i&&!Fg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function ZI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(u!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Fg(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function eA(t,e,n,r){t.removeEventListener(e,n,r)}const Uf=Symbol("_vei");function tA(t,e,n,r,s=null){const i=t[Uf]||(t[Uf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=nA(e);if(r){const u=i[e]=iA(r,s);Dn(t,c,u,l)}else o&&(eA(t,c,o,l),i[e]=void 0)}}const Bf=/(?:Once|Passive|Capture)$/;function nA(t){let e;if(Bf.test(t)){e={};let r;for(;r=t.match(Bf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):qt(t.slice(2)),e]}let Il=0;const rA=Promise.resolve(),sA=()=>Il||(rA.then(()=>Il=0),Il=Date.now());function iA(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(oA(r,n.value),e,5,[r])};return n.value=t,n.attached=sA(),n}function oA(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const $f=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aA=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?GI(t,r,u):e==="style"?JI(t,n,r):wo(e)?Fu(e)||tA(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cA(t,e,r,u))?(ZI(t,e,r,i,o,c,l),(e==="value"||e==="checked"||e==="selected")&&Ff(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ff(t,e,r,u))};function cA(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&$f(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return $f(e)&&je(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function __(t,e,n){const r=So(t,e);class s extends Sc{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const lA=(t,e)=>__(t,e,C_),uA=typeof HTMLElement<"u"?HTMLElement:class{};class Sc extends uA{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Ro(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),cu(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!se(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=La(this._props[l])),(c||(c=Object.create(null)))[Ct(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=se(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Ct))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=Ct(e);this._numberProps&&this._numberProps[r]&&(n=La(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(qt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(qt(e),n+""):n||this.removeAttribute(qt(e))))}_update(){cu(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Pe(this._def,Be({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),qt(i)!==i&&r(qt(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Sc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function hA(t="$style"){{const e=zn();if(!e)return De;const n=e.type.__cssModules;if(!n)return De;const r=n[t];return r||De}}const y_=new WeakMap,v_=new WeakMap,Wa=Symbol("_moveCb"),jf=Symbol("_enterCb"),E_={name:"TransitionGroup",props:Be({},HI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=zn(),r=oh();let s,i;return Tc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!_A(s[0].el,n.vnode.el,o))return;s.forEach(pA),s.forEach(gA);const c=s.filter(mA);f_(),c.forEach(l=>{const u=l.el,d=u.style;kn(u,o),d.transform=d.webkitTransform=d.transitionDuration="";const p=u[Wa]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[Wa]=null,ar(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=Ie(t),c=h_(o);let l=o.tag||Ge;if(s=[],i)for(let u=0;u<i.length;u++){const d=i[u];d.el&&d.el instanceof Element&&(s.push(d),br(d,Gs(d,c,r,n)),y_.set(d,d.el.getBoundingClientRect()))}i=e.default?Ac(e.default()):[];for(let u=0;u<i.length;u++){const d=i[u];d.key!=null&&br(d,Gs(d,c,r,n))}return Pe(l,null,i)}}},dA=t=>delete t.mode;E_.props;const fA=E_;function pA(t){const e=t.el;e[Wa]&&e[Wa](),e[jf]&&e[jf]()}function gA(t){v_.set(t,t.el.getBoundingClientRect())}function mA(t){const e=y_.get(t),n=v_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function _A(t,e,n){const r=t.cloneNode(),s=t[zs];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=d_(r);return i.removeChild(r),o}const Sr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Ds(e,n):e};function yA(t){t.target.composing=!0}function qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const en=Symbol("_assign"),Gt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[en]=Sr(s);const i=r||s.props&&s.props.type==="number";Dn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Ma(c)),t[en](c)}),n&&Dn(t,"change",()=>{t.value=t.value.trim()}),e||(Dn(t,"compositionstart",yA),Dn(t,"compositionend",qf),Dn(t,"change",qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[en]=Sr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ma(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},lh={deep:!0,created(t,e,n){t[en]=Sr(n),Dn(t,"change",()=>{const r=t._modelValue,s=Qs(t),i=t.checked,o=t[en];if(se(r)){const c=fc(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(us(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(w_(t,i))})},mounted:Hf,beforeUpdate(t,e,n){t[en]=Sr(n),Hf(t,e,n)}};function Hf(t,{value:e,oldValue:n},r){t._modelValue=e,se(e)?t.checked=fc(e,r.props.value)>-1:us(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Ar(e,w_(t,!0)))}const uh={created(t,{value:e},n){t.checked=Ar(e,n.props.value),t[en]=Sr(n),Dn(t,"change",()=>{t[en](Qs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[en]=Sr(r),e!==n&&(t.checked=Ar(e,r.props.value))}},T_={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=us(e);Dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ma(Qs(o)):Qs(o));t[en](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Ro(()=>{t._assigning=!1})}),t[en]=Sr(r)},mounted(t,{value:e,modifiers:{number:n}}){Kf(t,e)},beforeUpdate(t,e,n){t[en]=Sr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Kf(t,e)}};function Kf(t,e,n){const r=t.multiple,s=se(e);if(!(r&&!s&&!us(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Qs(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(d=>String(d)===String(l)):c.selected=fc(e,l)>-1}else c.selected=e.has(l);else if(Ar(Qs(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Qs(t){return"_value"in t?t._value:t.value}function w_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const I_={created(t,e,n){_a(t,e,n,null,"created")},mounted(t,e,n){_a(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){_a(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){_a(t,e,n,r,"updated")}};function A_(t,e){switch(t){case"SELECT":return T_;case"TEXTAREA":return Gt;default:switch(e){case"checkbox":return lh;case"radio":return uh;default:return Gt}}}function _a(t,e,n,r,s){const o=A_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function vA(){Gt.getSSRProps=({value:t})=>({value:t}),uh.getSSRProps=({value:t},e)=>{if(e.props&&Ar(e.props.value,t))return{checked:!0}},lh.getSSRProps=({value:t},e)=>{if(se(t)){if(e.props&&fc(t,e.props.value)>-1)return{checked:!0}}else if(us(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},I_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=A_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const EA=["ctrl","shift","alt","meta"],TA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>EA.some(n=>t[`${n}Key`]&&!e.includes(n))},wA=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=TA[e[o]];if(c&&c(s,e))return}return t(s,...i)})},IA={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hh=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=qt(s.key);if(e.some(o=>o===i||IA[o]===i))return t(s)})},b_=Be({patchProp:aA},qI);let Wi,Wf=!1;function R_(){return Wi||(Wi=Vm(b_))}function S_(){return Wi=Wf?Wi:Mm(b_),Wf=!0,Wi}const cu=(...t)=>{R_().render(...t)},C_=(...t)=>{S_().hydrate(...t)},P_=(...t)=>{const e=R_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=O_(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,k_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},AA=(...t)=>{const e=S_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=O_(r);if(s)return n(s,!0,k_(s))},e};function k_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function O_(t){return je(t)?document.querySelector(t):t}let Gf=!1;const bA=()=>{Gf||(Gf=!0,vA(),zI())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const RA=()=>{},SA=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:zm,BaseTransitionPropsValidators:ah,Comment:lt,DeprecationTypes:BI,EffectScope:ju,ErrorCodes:cw,ErrorTypeStrings:NI,Fragment:Ge,KeepAlive:fI,ReactiveEffect:Ks,Static:Yr,Suspense:Iw,Teleport:vI,Text:Zr,TrackOpTypes:iw,Transition:Rc,TransitionGroup:fA,TriggerOpTypes:ow,VueElement:Sc,assertNumber:aw,callWithAsyncErrorHandling:Kt,callWithErrorHandling:Un,camelize:Ct,capitalize:Io,cloneVNode:An,compatUtils:UI,compile:RA,computed:Zt,createApp:P_,createBlock:mr,createCommentVNode:vn,createElementBlock:$e,createElementVNode:U,createHydrationRenderer:Mm,createPropsRestProxy:Kw,createRenderer:Vm,createSSRApp:AA,createSlots:Pw,createStaticVNode:t_,createTextVNode:Vn,createVNode:Pe,customRef:im,defineAsyncComponent:kw,defineComponent:So,defineCustomElement:__,defineEmits:Mw,defineExpose:Lw,defineModel:Uw,defineOptions:xw,defineProps:Vw,defineSSRCustomElement:lA,defineSlots:Fw,devtools:VI,effect:ST,effectScope:AT,getCurrentInstance:zn,getCurrentScope:$g,getTransitionRawChildren:Ac,guardReactiveProps:e_,h:bc,handleError:hs,hasInjectionContext:eI,hydrate:C_,initCustomFormatter:kI,initDirectivesForSSR:bA,inject:Wt,isMemoSame:c_,isProxy:zu,isReactive:Ns,isReadonly:Ws,isRef:Ye,isRuntimeOnly:RI,isShallow:no,isVNode:Rr,markRaw:tm,mergeDefaults:qw,mergeModels:Hw,mergeProps:n_,nextTick:Ro,normalizeClass:$t,normalizeProps:ET,normalizeStyle:Ao,onActivated:Hm,onBeforeMount:mm,onBeforeUnmount:wc,onBeforeUpdate:_m,onDeactivated:Km,onErrorCaptured:Tm,onMounted:oi,onRenderTracked:Em,onRenderTriggered:vm,onScopeDispose:bT,onServerPrefetch:ym,onUnmounted:Ic,onUpdated:Tc,openBlock:Se,popScopeId:Vr,provide:Us,proxyRefs:Ju,pushScopeId:Nr,queuePostFlushCb:Fa,reactive:bo,readonly:Gu,ref:We,registerRuntimeCompiler:bI,render:cu,renderList:xs,renderSlot:Ow,resolveComponent:dm,resolveDirective:Tw,resolveDynamicComponent:pm,resolveFilter:FI,resolveTransitionHooks:Gs,setBlockTracking:eu,setDevtoolsHook:MI,setTransitionHooks:br,shallowReactive:Wu,shallowReadonly:zT,shallowRef:rm,ssrContextKey:Um,ssrUtils:xI,stop:CT,toDisplayString:nt,toHandlerKey:ji,toHandlers:Dw,toRaw:Ie,toRef:sw,toRefs:tw,toValue:XT,transformVNodeArgs:EI,triggerRef:JT,unref:wt,useAttrs:jw,useCssModule:hA,useCssVars:QI,useModel:PI,useSSRContext:Bm,useSlots:$w,useTransitionState:oh,vModelCheckbox:lh,vModelDynamic:I_,vModelRadio:uh,vModelSelect:T_,vModelText:Gt,vShow:g_,version:l_,warn:DI,watch:Bs,watchEffect:uI,watchPostEffect:$m,watchSyncEffect:jm,withAsyncContext:Ww,withCtx:on,withDefaults:Bw,withDirectives:En,withKeys:hh,withMemo:OI,withModifiers:wA,withScopeId:gw},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const bs=typeof document<"u";function CA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Al(t,e){const n={};for(const r in e){const s=e[r];n[r]=dn(s)?s.map(t):t(s)}return n}const Gi=()=>{},dn=Array.isArray,D_=/#/g,PA=/&/g,kA=/\//g,OA=/=/g,DA=/\?/g,N_=/\+/g,NA=/%5B/g,VA=/%5D/g,V_=/%5E/g,MA=/%60/g,M_=/%7B/g,LA=/%7C/g,L_=/%7D/g,xA=/%20/g;function dh(t){return encodeURI(""+t).replace(LA,"|").replace(NA,"[").replace(VA,"]")}function FA(t){return dh(t).replace(M_,"{").replace(L_,"}").replace(V_,"^")}function lu(t){return dh(t).replace(N_,"%2B").replace(xA,"+").replace(D_,"%23").replace(PA,"%26").replace(MA,"`").replace(M_,"{").replace(L_,"}").replace(V_,"^")}function UA(t){return lu(t).replace(OA,"%3D")}function BA(t){return dh(t).replace(D_,"%23").replace(DA,"%3F")}function $A(t){return t==null?"":BA(t).replace(kA,"%2F")}function lo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jA=/\/$/,qA=t=>t.replace(jA,"");function bl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=GA(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:lo(o)}}function HA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function KA(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ys(e.matched[r],n.matched[s])&&x_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function x_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!WA(t[n],e[n]))return!1;return!0}function WA(t,e){return dn(t)?Qf(t,e):dn(e)?Qf(e,t):t===e}function Qf(t,e){return dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function GA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var uo;(function(t){t.pop="pop",t.push="push"})(uo||(uo={}));var zi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zi||(zi={}));function zA(t){if(!t)if(bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qA(t)}const QA=/^[^#]+#/;function YA(t,e){return t.replace(QA,"#")+e}function JA(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Cc=()=>({left:window.scrollX,top:window.scrollY});function XA(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=JA(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yf(t,e){return(history.state?history.state.position-e:-1)+t}const uu=new Map;function ZA(t,e){uu.set(t,e)}function eb(t){const e=uu.get(t);return uu.delete(t),e}let tb=()=>location.protocol+"//"+location.host;function F_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),zf(l,"")}return zf(n,t)+r+s}function nb(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const T=F_(t,location),S=n.value,M=e.value;let V=0;if(g){if(n.value=T,e.value=g,o&&o===S){o=null;return}V=M?g.position-M.position:0}else r(T);s.forEach(F=>{F(n.value,S,{delta:V,type:uo.pop,direction:V?V>0?zi.forward:zi.back:zi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const T=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(T),T}function d(){const{history:g}=window;g.state&&g.replaceState(Oe({},g.state,{scroll:Cc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function Jf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Cc():null}}function rb(t){const{history:e,location:n}=window,r={value:F_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:tb()+t+l;try{e[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(T){console.error(T),n[d?"replace":"assign"](g)}}function o(l,u){const d=Oe({},e.state,Jf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,d,!0),r.value=l}function c(l,u){const d=Oe({},s.value,e.state,{forward:l,scroll:Cc()});i(d.current,d,!0);const p=Oe({},Jf(r.value,l,null),{position:d.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function sb(t){t=zA(t);const e=rb(t),n=nb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Oe({location:"",base:t,go:r,createHref:YA.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ib(t){return typeof t=="string"||t&&typeof t=="object"}function U_(t){return typeof t=="string"||typeof t=="symbol"}const ir={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B_=Symbol("");var Xf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xf||(Xf={}));function Js(t,e){return Oe(new Error,{type:t,[B_]:!0},e)}function Pn(t,e){return t instanceof Error&&B_ in t&&(e==null||!!(t.type&e))}const Zf="[^/]+?",ob={sensitive:!1,strict:!1,start:!0,end:!0},ab=/[.+*?^${}()[\]/\\]/g;function cb(t,e){const n=Oe({},ob,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let T=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(ab,"\\$&"),T+=40;else if(g.type===1){const{value:S,repeatable:M,optional:V,regexp:F}=g;i.push({name:S,repeatable:M,optional:V});const O=F||Zf;if(O!==Zf){T+=10;try{new RegExp(`(${O})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${S}" (${O}): `+P.message)}}let C=M?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;p||(C=V&&u.length<2?`(?:/${C})`:"/"+C),V&&(C+="?"),s+=C,T+=20,V&&(T+=-8),M&&(T+=-20),O===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const T=d[g]||"",S=i[g-1];p[S.name]=T&&S.repeatable?T.split("/"):T}return p}function l(u){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of g)if(T.type===0)d+=T.value;else if(T.type===1){const{value:S,repeatable:M,optional:V}=T,F=S in u?u[S]:"";if(dn(F)&&!M)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const O=dn(F)?F.join("/"):F;if(!O)if(V)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);d+=O}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function lb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=lb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ep(r))return 1;if(ep(s))return-1}return s.length-r.length}function ep(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ub={type:0,value:""},hb=/[a-zA-Z0-9_]/;function db(t){if(!t)return[[]];if(t==="/")return[[ub]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${u}": ${T}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:hb.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function fb(t,e,n){const r=cb(db(t.path),n),s=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function pb(t,e){const n=[],r=new Map;e=rp({strict:!1,end:!0,sensitive:!1},e);function s(d){return r.get(d)}function i(d,p,g){const T=!g,S=gb(d);S.aliasOf=g&&g.record;const M=rp(e,d),V=[S];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const P of C)V.push(Oe({},S,{components:g?g.record.components:S.components,path:P,aliasOf:g?g.record:S}))}let F,O;for(const C of V){const{path:P}=C;if(p&&P[0]!=="/"){const N=p.record.path,k=N[N.length-1]==="/"?"":"/";C.path=p.record.path+(P&&k+P)}if(F=fb(C,p,M),g?g.alias.push(F):(O=O||F,O!==F&&O.alias.push(F),T&&d.name&&!np(F)&&o(d.name)),j_(F)&&l(F),S.children){const N=S.children;for(let k=0;k<N.length;k++)i(N[k],F,g&&g.children[k])}g=g||F}return O?()=>{o(O)}:Gi}function o(d){if(U_(d)){const p=r.get(d);p&&(r.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const p=yb(d,n);n.splice(p,0,d),d.record.name&&!np(d)&&r.set(d.record.name,d)}function u(d,p){let g,T={},S,M;if("name"in d&&d.name){if(g=r.get(d.name),!g)throw Js(1,{location:d});M=g.record.name,T=Oe(tp(p.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),d.params&&tp(d.params,g.keys.map(O=>O.name))),S=g.stringify(T)}else if(d.path!=null)S=d.path,g=n.find(O=>O.re.test(S)),g&&(T=g.parse(S),M=g.record.name);else{if(g=p.name?r.get(p.name):n.find(O=>O.re.test(p.path)),!g)throw Js(1,{location:d,currentLocation:p});M=g.record.name,T=Oe({},p.params,d.params),S=g.stringify(T)}const V=[];let F=g;for(;F;)V.unshift(F.record),F=F.parent;return{name:M,path:S,params:T,matched:V,meta:_b(V)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function tp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:mb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function mb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function np(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _b(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function rp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function yb(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$_(t,e[i])<0?r=i:n=i+1}const s=vb(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function vb(t){let e=t;for(;e=e.parent;)if(j_(e)&&$_(t,e)===0)return e}function j_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Eb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(N_," "),o=i.indexOf("="),c=lo(o<0?i:i.slice(0,o)),l=o<0?null:lo(i.slice(o+1));if(c in e){let u=e[c];dn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function sp(t){let e="";for(let n in t){const r=t[n];if(n=UA(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(r)?r.map(i=>i&&lu(i)):[r&&lu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Tb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const wb=Symbol(""),ip=Symbol(""),Pc=Symbol(""),fh=Symbol(""),hu=Symbol("");function Di(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function hr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Js(4,{from:n,to:e})):g instanceof Error?l(g):ib(g)?l(Js(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function Rl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Ib(l)){const d=(l.__vccOpts||l)[e];d&&i.push(hr(d,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=CA(d)?d.default:d;o.components[c]=p;const T=(p.__vccOpts||p)[e];return T&&hr(T,n,r,o,c,s)()}))}}return i}function Ib(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function op(t){const e=Wt(Pc),n=Wt(fh),r=Zt(()=>{const l=wt(t.to);return e.resolve(l)}),s=Zt(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Ys.bind(null,d));if(g>-1)return g;const T=ap(l[u-2]);return u>1&&ap(d)===T&&p[p.length-1].path!==T?p.findIndex(Ys.bind(null,l[u-2])):g}),i=Zt(()=>s.value>-1&&Rb(n.params,r.value.params)),o=Zt(()=>s.value>-1&&s.value===n.matched.length-1&&x_(n.params,r.value.params));function c(l={}){return bb(l)?e[wt(t.replace)?"replace":"push"](wt(t.to)).catch(Gi):Promise.resolve()}return{route:r,href:Zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Ab=So({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:op,setup(t,{slots:e}){const n=bo(op(t)),{options:r}=Wt(Pc),s=Zt(()=>({[cp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),q_=Ab;function bb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Rb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ap(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cp=(t,e,n)=>t??e??n,Sb=So({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Wt(hu),s=Zt(()=>t.route||r.value),i=Wt(ip,0),o=Zt(()=>{let u=wt(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=Zt(()=>s.value.matched[o.value]);Us(ip,Zt(()=>o.value+1)),Us(wb,c),Us(hu,s);const l=We();return Bs(()=>[l.value,c.value,t.name],([u,d,p],[g,T,S])=>{d&&(d.instances[p]=u,T&&T!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),u&&d&&(!T||!Ys(d,T)||!g)&&(d.enterCallbacks[p]||[]).forEach(M=>M(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,g=p&&p.components[d];if(!g)return lp(n.default,{Component:g,route:u});const T=p.props[d],S=T?T===!0?u.params:typeof T=="function"?T(u):T:null,V=bc(g,Oe({},S,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return lp(n.default,{Component:V,route:u})||V}}});function lp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const H_=Sb;function Cb(t){const e=pb(t.routes,t),n=t.parseQuery||Eb,r=t.stringifyQuery||sp,s=t.history,i=Di(),o=Di(),c=Di(),l=rm(ir);let u=ir;bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Al.bind(null,$=>""+$),p=Al.bind(null,$A),g=Al.bind(null,lo);function T($,ne){let ee,ie;return U_($)?(ee=e.getRecordMatcher($),ie=ne):ie=$,e.addRoute(ie,ee)}function S($){const ne=e.getRecordMatcher($);ne&&e.removeRoute(ne)}function M(){return e.getRoutes().map($=>$.record)}function V($){return!!e.getRecordMatcher($)}function F($,ne){if(ne=Oe({},ne||l.value),typeof $=="string"){const R=bl(n,$,ne.path),L=e.resolve({path:R.path},ne),j=s.createHref(R.fullPath);return Oe(R,L,{params:g(L.params),hash:lo(R.hash),redirectedFrom:void 0,href:j})}let ee;if($.path!=null)ee=Oe({},$,{path:bl(n,$.path,ne.path).path});else{const R=Oe({},$.params);for(const L in R)R[L]==null&&delete R[L];ee=Oe({},$,{params:p(R)}),ne.params=p(ne.params)}const ie=e.resolve(ee,ne),Ee=$.hash||"";ie.params=d(g(ie.params));const Ne=HA(r,Oe({},$,{hash:FA(Ee),path:ie.path})),b=s.createHref(Ne);return Oe({fullPath:Ne,hash:Ee,query:r===sp?Tb($.query):$.query||{}},ie,{redirectedFrom:void 0,href:b})}function O($){return typeof $=="string"?bl(n,$,l.value.path):Oe({},$)}function C($,ne){if(u!==$)return Js(8,{from:ne,to:$})}function P($){return I($)}function N($){return P(Oe(O($),{replace:!0}))}function k($){const ne=$.matched[$.matched.length-1];if(ne&&ne.redirect){const{redirect:ee}=ne;let ie=typeof ee=="function"?ee($):ee;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=O(ie):{path:ie},ie.params={}),Oe({query:$.query,hash:$.hash,params:ie.path!=null?{}:$.params},ie)}}function I($,ne){const ee=u=F($),ie=l.value,Ee=$.state,Ne=$.force,b=$.replace===!0,R=k(ee);if(R)return I(Oe(O(R),{state:typeof R=="object"?Oe({},Ee,R.state):Ee,force:Ne,replace:b}),ne||ee);const L=ee;L.redirectedFrom=ne;let j;return!Ne&&KA(r,ie,ee)&&(j=Js(16,{to:L,from:ie}),Qt(ie,ie,!0,!1)),(j?Promise.resolve(j):y(L,ie)).catch(B=>Pn(B)?Pn(B,2)?B:rn(B):W(B,L,ie)).then(B=>{if(B){if(Pn(B,2))return I(Oe({replace:b},O(B.to),{state:typeof B.to=="object"?Oe({},Ee,B.to.state):Ee,force:Ne}),ne||L)}else B=A(L,ie,!0,b,Ee);return w(L,ie,B),B})}function v($,ne){const ee=C($,ne);return ee?Promise.reject(ee):Promise.resolve()}function m($){const ne=Xn.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext($):$()}function y($,ne){let ee;const[ie,Ee,Ne]=Pb($,ne);ee=Rl(ie.reverse(),"beforeRouteLeave",$,ne);for(const R of ie)R.leaveGuards.forEach(L=>{ee.push(hr(L,$,ne))});const b=v.bind(null,$,ne);return ee.push(b),ot(ee).then(()=>{ee=[];for(const R of i.list())ee.push(hr(R,$,ne));return ee.push(b),ot(ee)}).then(()=>{ee=Rl(Ee,"beforeRouteUpdate",$,ne);for(const R of Ee)R.updateGuards.forEach(L=>{ee.push(hr(L,$,ne))});return ee.push(b),ot(ee)}).then(()=>{ee=[];for(const R of Ne)if(R.beforeEnter)if(dn(R.beforeEnter))for(const L of R.beforeEnter)ee.push(hr(L,$,ne));else ee.push(hr(R.beforeEnter,$,ne));return ee.push(b),ot(ee)}).then(()=>($.matched.forEach(R=>R.enterCallbacks={}),ee=Rl(Ne,"beforeRouteEnter",$,ne,m),ee.push(b),ot(ee))).then(()=>{ee=[];for(const R of o.list())ee.push(hr(R,$,ne));return ee.push(b),ot(ee)}).catch(R=>Pn(R,8)?R:Promise.reject(R))}function w($,ne,ee){c.list().forEach(ie=>m(()=>ie($,ne,ee)))}function A($,ne,ee,ie,Ee){const Ne=C($,ne);if(Ne)return Ne;const b=ne===ir,R=bs?history.state:{};ee&&(ie||b?s.replace($.fullPath,Oe({scroll:b&&R&&R.scroll},Ee)):s.push($.fullPath,Ee)),l.value=$,Qt($,ne,ee,b),rn()}let E;function de(){E||(E=s.listen(($,ne,ee)=>{if(!mn.listening)return;const ie=F($),Ee=k(ie);if(Ee){I(Oe(Ee,{replace:!0}),ie).catch(Gi);return}u=ie;const Ne=l.value;bs&&ZA(Yf(Ne.fullPath,ee.delta),Cc()),y(ie,Ne).catch(b=>Pn(b,12)?b:Pn(b,2)?(I(b.to,ie).then(R=>{Pn(R,20)&&!ee.delta&&ee.type===uo.pop&&s.go(-1,!1)}).catch(Gi),Promise.reject()):(ee.delta&&s.go(-ee.delta,!1),W(b,ie,Ne))).then(b=>{b=b||A(ie,Ne,!1),b&&(ee.delta&&!Pn(b,8)?s.go(-ee.delta,!1):ee.type===uo.pop&&Pn(b,20)&&s.go(-1,!1)),w(ie,Ne,b)}).catch(Gi)}))}let ye=Di(),z=Di(),Q;function W($,ne,ee){rn($);const ie=z.list();return ie.length?ie.forEach(Ee=>Ee($,ne,ee)):console.error($),Promise.reject($)}function qe(){return Q&&l.value!==ir?Promise.resolve():new Promise(($,ne)=>{ye.add([$,ne])})}function rn($){return Q||(Q=!$,de(),ye.list().forEach(([ne,ee])=>$?ee($):ne()),ye.reset()),$}function Qt($,ne,ee,ie){const{scrollBehavior:Ee}=t;if(!bs||!Ee)return Promise.resolve();const Ne=!ee&&eb(Yf($.fullPath,0))||(ie||!ee)&&history.state&&history.state.scroll||null;return Ro().then(()=>Ee($,ne,Ne)).then(b=>b&&XA(b)).catch(b=>W(b,$,ne))}const He=$=>s.go($);let Ke;const Xn=new Set,mn={currentRoute:l,listening:!0,addRoute:T,removeRoute:S,hasRoute:V,getRoutes:M,resolve:F,options:t,push:P,replace:N,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:z.add,isReady:qe,install($){const ne=this;$.component("RouterLink",q_),$.component("RouterView",H_),$.config.globalProperties.$router=ne,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>wt(l)}),bs&&!Ke&&l.value===ir&&(Ke=!0,P(s.location).catch(Ee=>{}));const ee={};for(const Ee in ir)Object.defineProperty(ee,Ee,{get:()=>l.value[Ee],enumerable:!0});$.provide(Pc,ne),$.provide(fh,Wu(ee)),$.provide(hu,l);const ie=$.unmount;Xn.add($),$.unmount=function(){Xn.delete($),Xn.size<1&&(u=ir,E&&E(),E=null,l.value=ir,Ke=!1,Q=!1),ie()}}};function ot($){return $.reduce((ne,ee)=>ne.then(()=>m(ee)),Promise.resolve())}return mn}function Pb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ys(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ys(u,l))||s.push(l))}return[n,r,s]}function kc(){return Wt(Pc)}function K_(){return Wt(fh)}var up={};/**
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
 */const W_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,T=u&63;l||(T=64,o||(g=64)),r.push(n[d],n[p],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Ob;const g=i<<2|c>>4;if(r.push(g),u!==64){const T=c<<4&240|u>>2;if(r.push(T),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ob extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Db=function(t){const e=W_(t);return G_.encodeByteArray(e,!0)},Ga=function(t){return Db(t).replace(/\./g,"")},z_=function(t){try{return G_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vb=()=>Nb().__FIREBASE_DEFAULTS__,Mb=()=>{if(typeof process>"u"||typeof up>"u")return;const t=up.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z_(t[1]);return e&&JSON.parse(e)},Oc=()=>{try{return Vb()||Mb()||Lb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q_=t=>{var e,n;return(n=(e=Oc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xb=t=>{const e=Q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Y_=()=>{var t;return(t=Oc())===null||t===void 0?void 0:t.config},J_=t=>{var e;return(e=Oc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Fb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ub(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),""].join(".")}/**
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function $b(){var t;const e=(t=Oc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function X_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qb(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Hb(){return!$b()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function ey(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Kb(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Wb="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Wb,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ds.prototype.create)}}class ds{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Gb(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new gn(s,c,r)}}function Gb(t,e){return t.replace(zb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zb=/\{\$([^}]+)}/g;function Qb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hp(i)&&hp(o)){if(!ho(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hp(t){return t!==null&&typeof t=="object"}/**
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
 */function Do(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Yb(t,e){const n=new Jb(t,e);return n.subscribe.bind(n)}class Jb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sl),s.error===void 0&&(s.error=Sl),s.complete===void 0&&(s.complete=Sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sl(){}/**
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
 */const Zb=1e3,e0=2,t0=4*60*60*1e3,n0=.5;function dp(t,e=Zb,n=e0){const r=e*Math.pow(n,t),s=Math.round(n0*r*(Math.random()-.5)*2);return Math.min(t0,r+s)}/**
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
 */function tt(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class r0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Fb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i0(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s0(t){return t===jr?void 0:t}function i0(t){return t.instantiationMode==="EAGER"}/**
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
 */class o0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new r0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const a0={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},c0=Te.INFO,l0={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},u0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=l0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=c0,this._logHandler=u0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const h0=(t,e)=>e.some(n=>t instanceof n);let fp,pp;function d0(){return fp||(fp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f0(){return pp||(pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,du=new WeakMap,ny=new WeakMap,Cl=new WeakMap,ph=new WeakMap;function p0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ty.set(n,t)}).catch(()=>{}),ph.set(e,t),e}function g0(t){if(du.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});du.set(t,e)}let fu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return du.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m0(t){fu=t(fu)}function _0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pl(this),e,...n);return ny.set(r,e.sort?e.sort():[e]),Tr(r)}:f0().includes(t)?function(...e){return t.apply(Pl(this),e),Tr(ty.get(this))}:function(...e){return Tr(t.apply(Pl(this),e))}}function y0(t){return typeof t=="function"?_0(t):(t instanceof IDBTransaction&&g0(t),h0(t,d0())?new Proxy(t,fu):t)}function Tr(t){if(t instanceof IDBRequest)return p0(t);if(Cl.has(t))return Cl.get(t);const e=y0(t);return e!==t&&(Cl.set(t,e),ph.set(e,t)),e}const Pl=t=>ph.get(t);function ry(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tr(o.result),l.oldVersion,l.newVersion,Tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const v0=["get","getKey","getAll","getAllKeys","count"],E0=["put","add","delete","clear"],kl=new Map;function gp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kl.get(e))return kl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=E0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||v0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return kl.set(e,i),i}m0(t=>({...t,get:(e,n,r)=>gp(e,n)||t.get(e,n,r),has:(e,n)=>!!gp(e,n)||t.has(e,n)}));/**
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
 */class T0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function w0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pu="@firebase/app",mp="0.10.5";/**
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
 */const ns=new Dc("@firebase/app"),I0="@firebase/app-compat",A0="@firebase/analytics-compat",b0="@firebase/analytics",R0="@firebase/app-check-compat",S0="@firebase/app-check",C0="@firebase/auth",P0="@firebase/auth-compat",k0="@firebase/database",O0="@firebase/database-compat",D0="@firebase/functions",N0="@firebase/functions-compat",V0="@firebase/installations",M0="@firebase/installations-compat",L0="@firebase/messaging",x0="@firebase/messaging-compat",F0="@firebase/performance",U0="@firebase/performance-compat",B0="@firebase/remote-config",$0="@firebase/remote-config-compat",j0="@firebase/storage",q0="@firebase/storage-compat",H0="@firebase/firestore",K0="@firebase/vertexai-preview",W0="@firebase/firestore-compat",G0="firebase",z0="10.12.2";/**
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
 */const gu="[DEFAULT]",Q0={[pu]:"fire-core",[I0]:"fire-core-compat",[b0]:"fire-analytics",[A0]:"fire-analytics-compat",[S0]:"fire-app-check",[R0]:"fire-app-check-compat",[C0]:"fire-auth",[P0]:"fire-auth-compat",[k0]:"fire-rtdb",[O0]:"fire-rtdb-compat",[D0]:"fire-fn",[N0]:"fire-fn-compat",[V0]:"fire-iid",[M0]:"fire-iid-compat",[L0]:"fire-fcm",[x0]:"fire-fcm-compat",[F0]:"fire-perf",[U0]:"fire-perf-compat",[B0]:"fire-rc",[$0]:"fire-rc-compat",[j0]:"fire-gcs",[q0]:"fire-gcs-compat",[H0]:"fire-fst",[W0]:"fire-fst-compat",[K0]:"fire-vertex","fire-js":"fire-js",[G0]:"fire-js-all"};/**
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
 */const za=new Map,Y0=new Map,mu=new Map;function _p(t,e){try{t.container.addComponent(e)}catch(n){ns.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(mu.has(e))return ns.debug(`There were multiple attempts to register component ${e}.`),!1;mu.set(e,t);for(const n of za.values())_p(n,t);for(const n of Y0.values())_p(n,t);return!0}function fs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function cn(t){return t.settings!==void 0}/**
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
 */const J0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new ds("app","Firebase",J0);/**
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
 */class X0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const ai=z0;function sy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wr.create("bad-app-name",{appName:String(s)});if(n||(n=Y_()),!n)throw wr.create("no-options");const i=za.get(s);if(i){if(ho(n,i.options)&&ho(r,i.config))return i;throw wr.create("duplicate-app",{appName:s})}const o=new o0(s);for(const l of mu.values())o.addComponent(l);const c=new X0(n,r,o);return za.set(s,c),c}function gh(t=gu){const e=za.get(t);if(!e&&t===gu&&Y_())return sy();if(!e)throw wr.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=Q0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ns.warn(c.join(" "));return}bn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Z0="firebase-heartbeat-database",eR=1,fo="firebase-heartbeat-store";let Ol=null;function iy(){return Ol||(Ol=ry(Z0,eR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Ol}async function tR(t){try{const n=(await iy()).transaction(fo),r=await n.objectStore(fo).get(oy(t));return await n.done,r}catch(e){if(e instanceof gn)ns.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ns.warn(n.message)}}}async function yp(t,e){try{const r=(await iy()).transaction(fo,"readwrite");await r.objectStore(fo).put(e,oy(t)),await r.done}catch(n){if(n instanceof gn)ns.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ns.warn(r.message)}}}function oy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const nR=1024,rR=30*24*60*60*1e3;class sR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new oR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=rR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vp(),{heartbeatsToSend:r,unsentEntries:s}=iR(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vp(){return new Date().toISOString().substring(0,10)}function iR(t,e=nR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ep(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ep(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class oR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?ey().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ep(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function aR(t){bn(new fn("platform-logger",e=>new T0(e),"PRIVATE")),bn(new fn("heartbeat",e=>new sR(e),"PRIVATE")),tn(pu,mp,t),tn(pu,mp,"esm2017"),tn("fire-js","")}aR("");function mh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cR=ay,cy=new ds("auth","Firebase",ay());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=new Dc("@firebase/auth");function lR(t,...e){Qa.logLevel<=Te.WARN&&Qa.warn(`Auth (${ai}): ${t}`,...e)}function Ra(t,...e){Qa.logLevel<=Te.ERROR&&Qa.error(`Auth (${ai}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,...e){throw yh(t,...e)}function ln(t,...e){return yh(t,...e)}function _h(t,e,n){const r=Object.assign(Object.assign({},cR()),{[e]:n});return new ds("auth","Firebase",r).create(e,{appName:t.name})}function Bn(t){return _h(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nn(t,"argument-error"),_h(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cy.create(t,...e)}function pe(t,e,...n){if(!t)throw yh(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ra(e),new Error(e)}function qn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hR(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hR()||X_()||"connection"in navigator)?navigator.onLine:!0}function fR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,n){this.shortDelay=e,this.longDelay=n,qn(n>e,"Short delay should be less than long delay!"),this.isMobile=Bb()||jb()}get(){return dR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(t,e){qn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=new No(3e4,6e4);function Qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yn(t,e,n,r,s={}){return uy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Do(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ly.fetch()(hy(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function uy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pR),e);try{const s=new _R(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ya(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw _h(t,d,u);nn(t,d)}}catch(s){if(s instanceof gn)throw s;nn(t,"network-request-failed",{message:String(s)})}}async function Vo(t,e,n,r,s={}){const i=await Yn(t,e,n,r,s);return"mfaPendingCredential"in i&&nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vh(t.config,s):`${t.config.apiScheme}://${s}`}function mR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _R{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ln(this.auth,"network-request-failed")),gR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ln(t,e,r);return s.customData._tokenResponse=n,s}function wp(t){return t!==void 0&&t.enterprise!==void 0}class yR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function vR(t,e){return Yn(t,"GET","/v2/recaptchaConfig",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){return Yn(t,"POST","/v1/accounts:delete",e)}async function dy(t,e){return Yn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TR(t,e=!1){const n=tt(t),r=await n.getIdToken(e),s=Eh(r);pe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qi(Dl(s.auth_time)),issuedAtTime:Qi(Dl(s.iat)),expirationTime:Qi(Dl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Dl(t){return Number(t)*1e3}function Eh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=z_(n);return s?JSON.parse(s):(Ra("Failed to decode base64 JWT payload"),null)}catch(s){return Ra("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ip(t){const e=Eh(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&wR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ya(t){var e;const n=t.auth,r=await t.getIdToken(),s=await po(t,dy(n,{idToken:r}));pe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fy(i.providerUserInfo):[],c=bR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new yu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function AR(t){const e=tt(t);await Ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fy(t){return t.map(e=>{var{providerId:n}=e,r=mh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e){const n=await uy(t,{},async()=>{const r=Do({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ly.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SR(t,e){return Yn(t,"POST","/v2/accounts:revokeToken",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ip(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=Ip(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(pe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=mh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new IR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await po(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TR(this,e)}reload(){return AR(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(cn(this.auth.app))return Promise.reject(Bn(this.auth));const e=await this.getIdToken();return await po(this,ER(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(c=n.tenantId)!==null&&c!==void 0?c:void 0,V=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:P,isAnonymous:N,providerData:k,stsTokenManager:I}=n;pe(C&&I,e,"internal-error");const v=$s.fromJSON(this.name,I);pe(typeof C=="string",e,"internal-error"),or(p,e.name),or(g,e.name),pe(typeof P=="boolean",e,"internal-error"),pe(typeof N=="boolean",e,"internal-error"),or(T,e.name),or(S,e.name),or(M,e.name),or(V,e.name),or(F,e.name),or(O,e.name);const m=new Ln({uid:C,auth:e,email:g,emailVerified:P,displayName:p,isAnonymous:N,photoURL:S,phoneNumber:T,tenantId:M,stsTokenManager:v,createdAt:F,lastLoginAt:O});return k&&Array.isArray(k)&&(m.providerData=k.map(y=>Object.assign({},y))),V&&(m._redirectEventId=V),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new Ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ya(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];pe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new $s;c.updateFromIdToken(r);const l=new Ln({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new Map;function xn(t){qn(t instanceof Function,"Expected a class definition");let e=Ap.get(t);return e?(qn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ap.set(t,e),e)}/**
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
 */class py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}py.type="NONE";const bp=py;/**
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
 */function Sa(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Sa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Sa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(xn(bp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xn(bp);const o=Sa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){const p=Ln._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new js(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new js(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vy(e))return"Blackberry";if(Ey(e))return"Webos";if(Th(e))return"Safari";if((e.includes("chrome/")||my(e))&&!e.includes("edge/"))return"Chrome";if(yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gy(t=gt()){return/firefox\//i.test(t)}function Th(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function my(t=gt()){return/crios\//i.test(t)}function _y(t=gt()){return/iemobile/i.test(t)}function yy(t=gt()){return/android/i.test(t)}function vy(t=gt()){return/blackberry/i.test(t)}function Ey(t=gt()){return/webos/i.test(t)}function Nc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CR(t=gt()){var e;return Nc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PR(){return qb()&&document.documentMode===10}function Ty(t=gt()){return Nc(t)||yy(t)||Ey(t)||vy(t)||/windows phone/i.test(t)||_y(t)}function kR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e=[]){let n;switch(t){case"Browser":n=Rp(gt());break;case"Worker":n=`${Rp(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ai}/${r}`}/**
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
 */class OR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DR(t,e={}){return Yn(t,"GET","/v2/passwordPolicy",Qn(t,e))}/**
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
 */const NR=6;class VR{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sp(this),this.idTokenSubscription=new Sp(this),this.beforeStateQueue=new OR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dy(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(cn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(cn(this.app))return Promise.reject(Bn(this));const n=e?tt(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return cn(this.app)?Promise.reject(Bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return cn(this.app)?Promise.reject(Bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DR(this),n=new VR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ds("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[xn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return tt(t)}class Sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yb(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LR(t){Vc=t}function Iy(t){return Vc.loadJS(t)}function xR(){return Vc.recaptchaEnterpriseScript}function FR(){return Vc.gapiScript}function UR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BR="recaptcha-enterprise",$R="NO_RECAPTCHA";class jR{constructor(e){this.type=BR,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{vR(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new yR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;wp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o($R)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&wp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xR();l.length!==0&&(l+=c),Iy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Cp(t,e,n,r=!1){const s=new jR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ja(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Cp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Cp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t,e){const n=fs(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ho(i,e??{}))return s;nn(s,"already-initialized")}return n.initialize({options:e})}function HR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KR(t,e,n){const r=Jn(t);pe(r._canInitEmulator,r,"emulator-config-failed"),pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ay(e),{host:o,port:c}=WR(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),GR()}function Ay(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function WR(t){const e=Ay(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pp(o)}}}function Pp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function GR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function zR(t,e){return Yn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){return Vo(t,"POST","/v1/accounts:signInWithPassword",Qn(t,e))}async function YR(t,e){return Yn(t,"POST","/v1/accounts:sendOobCode",Qn(t,e))}async function JR(t,e){return YR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}async function ZR(t,e){return Vo(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends wh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,n,"signInWithPassword",QR);case"emailLink":return XR(e,{email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ja(e,r,"signUpPassword",zR);case"emailLink":return ZR(e,{idToken:n,email:this._email,oobCode:this._password});default:nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t,e){return Vo(t,"POST","/v1/accounts:signInWithIdp",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="http://localhost";class rs extends wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=mh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new rs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qs(e,n)}buildRequest(){const e={requestUri:eS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Do(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nS(t){const e=Li(xi(t)).link,n=e?Li(xi(e)).deep_link_id:null,r=Li(xi(t)).deep_link_id;return(r?Li(xi(r)).link:null)||r||n||e||t}class Ih{constructor(e){var n,r,s,i,o,c;const l=Li(xi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=tS((s=l.mode)!==null&&s!==void 0?s:null);pe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=nS(e);try{return new Ih(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ih.parseLink(n);return pe(r,"argument-error"),go._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mo extends Ah{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Mo{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fr.credential(e.oauthAccessToken)}catch{return null}}}fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";fr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends Mo{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Mo{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){return Vo(t,"POST","/v1/accounts:signUp",Qn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ln._fromIdTokenResponse(e,r,s),o=kp(r);return new ss({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=kp(r);return new ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function kp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xa(e,n,r,s)}}function by(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xa._fromErrorAndOperation(t,i,e,r):i})}async function sS(t,e,n=!1){const r=await po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
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
 */async function iS(t,e,n=!1){const{auth:r}=t;if(cn(r.app))return Promise.reject(Bn(r));const s="reauthenticate";try{const i=await po(t,by(r,s,e,t),n);pe(i.idToken,r,"internal-error");const o=Eh(i.idToken);pe(o,r,"internal-error");const{sub:c}=o;return pe(t.uid===c,r,"user-mismatch"),ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e,n=!1){if(cn(t.app))return Promise.reject(Bn(t));const r="signIn",s=await by(t,r,e),i=await ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function oS(t,e){return Ry(Jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function aS(t,e,n){const r=Jn(t);await Ja(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",JR)}async function cS(t,e,n){if(cn(t.app))return Promise.reject(Bn(t));const r=Jn(t),o=await Ja(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Sy(t),l}),c=await ss._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function lS(t,e,n){return cn(t.app)?Promise.reject(Bn(t)):oS(tt(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sy(t),r})}function uS(t,e,n,r){return tt(t).onIdTokenChanged(e,n,r)}function hS(t,e,n){return tt(t).beforeAuthStateChanged(e,n)}function Cy(t,e,n,r){return tt(t).onAuthStateChanged(e,n,r)}function dS(t){return tt(t).signOut()}const Za="__sak";/**
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
 */class Py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Za,"1"),this.storage.removeItem(Za),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){const t=gt();return Th(t)||Nc(t)}const pS=1e3,gS=10;class ky extends Py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fS()&&kR(),this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);PR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},pS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ky.type="LOCAL";const mS=ky;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function _S(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Mc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Mc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await _S(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class yS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=bh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function vS(t){Tn().location.href=t}/**
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
 */function Ny(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function ES(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function wS(){return Ny()?self:null}/**
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
 */const Vy="firebaseLocalStorageDb",IS=1,ec="firebaseLocalStorage",My="fbase_key";class Lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Lc(t,e){return t.transaction([ec],e?"readwrite":"readonly").objectStore(ec)}function AS(){const t=indexedDB.deleteDatabase(Vy);return new Lo(t).toPromise()}function vu(){const t=indexedDB.open(Vy,IS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ec,{keyPath:My})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ec)?e(r):(r.close(),await AS(),e(await vu()))})})}async function Op(t,e,n){const r=Lc(t,!0).put({[My]:e,value:n});return new Lo(r).toPromise()}async function bS(t,e){const n=Lc(t,!1).get(e),r=await new Lo(n).toPromise();return r===void 0?null:r.value}function Dp(t,e){const n=Lc(t,!0).delete(e);return new Lo(n).toPromise()}const RS=800,SS=3;class Ly{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>SS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(wS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ES(),!this.activeServiceWorker)return;this.sender=new yS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vu();return await Op(e,Za,"1"),await Dp(e,Za),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Op(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Lc(s,!1).getAll();return new Lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ly.type="LOCAL";const CS=Ly;new No(3e4,6e4);/**
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
 */function xy(t,e){return e?xn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Rh extends wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PS(t){return Ry(t.auth,new Rh(t),t.bypassAuthState)}function kS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),iS(n,new Rh(t),t.bypassAuthState)}async function OS(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),sS(n,new Rh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PS;case"linkViaPopup":case"linkViaRedirect":return OS;case"reauthViaPopup":case"reauthViaRedirect":return kS;default:nn(this.auth,"internal-error")}}resolve(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=new No(2e3,1e4);async function Uy(t,e,n){if(cn(t.app))return Promise.reject(ln(t,"operation-not-supported-in-this-environment"));const r=Jn(t);uR(t,e,Ah);const s=xy(r,n);return new Hr(r,"signInViaPopup",e,s).executeNotNull()}class Hr extends Fy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){qn(this.filter.length===1,"Popup operations only handle one event");const e=bh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DS.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="pendingRedirect",Ca=new Map;class VS extends Fy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ca.get(this.auth._key());if(!e){try{const r=await MS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ca.set(this.auth._key(),e)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MS(t,e){const n=FS(e),r=xS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function LS(t,e){Ca.set(t._key(),e)}function xS(t){return xn(t._redirectPersistence)}function FS(t){return Sa(NS,t.config.apiKey,t.name)}async function US(t,e,n=!1){if(cn(t.app))return Promise.reject(Bn(t));const r=Jn(t),s=xy(r,e),o=await new VS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=10*60*1e3;class $S{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!By(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Np(e))}saveEventToCache(e){this.cachedEventUids.add(Np(e)),this.lastProcessedEventTime=Date.now()}}function Np(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function By({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return By(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e={}){return Yn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,KS=/^https?/;async function WS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qS(t);for(const n of e)try{if(GS(n))return}catch{}nn(t,"unauthorized-domain")}function GS(t){const e=_u(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!KS.test(n))return!1;if(HS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zS=new No(3e4,6e4);function Vp(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QS(t){return new Promise((e,n)=>{var r,s,i;function o(){Vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vp(),n(ln(t,"network-request-failed"))},timeout:zS.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const c=UR("iframefcb");return Tn()[c]=()=>{gapi.load?o():n(ln(t,"network-request-failed"))},Iy(`${FR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Pa=null,e})}let Pa=null;function YS(t){return Pa=Pa||QS(t),Pa}/**
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
 */const JS=new No(5e3,15e3),XS="__/auth/iframe",ZS="emulator/auth/iframe",eC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nC(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vh(e,ZS):`https://${t.config.authDomain}/${XS}`,r={apiKey:e.apiKey,appName:t.name,v:ai},s=tC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Do(r).slice(1)}`}async function rC(t){const e=await YS(t),n=Tn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:nC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ln(t,"network-request-failed"),c=Tn().setTimeout(()=>{i(o)},JS.get());function l(){Tn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const sC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iC=500,oC=600,aC="_blank",cC="http://localhost";class Mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lC(t,e,n,r=iC,s=oC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},sC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=gt().toLowerCase();n&&(c=my(u)?aC:n),gy(u)&&(e=e||cC,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[T,S])=>`${g}${T}=${S},`,"");if(CR(u)&&c!=="_self")return uC(e||"",c),new Mp(null);const p=window.open(e||"",c,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new Mp(p)}function uC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hC="__/auth/handler",dC="emulator/auth/handler",fC=encodeURIComponent("fac");async function Lp(t,e,n,r,s,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ai,eventId:s};if(e instanceof Ah){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Mo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${fC}=${encodeURIComponent(l)}`:"";return`${pC(t)}?${Do(c).slice(1)}${u}`}function pC({config:t}){return t.emulator?vh(t,dC):`https://${t.authDomain}/${hC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="webStorageSupport";class gC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dy,this._completeRedirectFn=US,this._overrideRedirectResult=LS}async _openPopup(e,n,r,s){var i;qn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lp(e,n,r,_u(),s);return lC(e,o,bh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Lp(e,n,r,_u(),s);return vS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(qn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rC(e),r=new $S(e);return n.register("authEvent",s=>(pe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nl,{type:Nl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nl];o!==void 0&&n(!!o),nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=WS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||Th()||Nc()}}const mC=gC;var xp="@firebase/auth",Fp="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vC(t){bn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wy(t)},u=new MR(r,s,i,l);return HR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bn(new fn("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new _C(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(xp,Fp,yC(t)),tn(xp,Fp,"esm2017")}/**
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
 */const EC=5*60,TC=J_("authIdTokenMaxAge")||EC;let Up=null;const wC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TC)return;const s=n==null?void 0:n.token;Up!==s&&(Up=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function li(t=gh()){const e=fs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qR(t,{popupRedirectResolver:mC,persistence:[CS,mS,Dy]}),r=J_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=wC(i.toString());hS(n,o,()=>o(n.currentUser)),uS(n,c=>o(c))}}const s=Q_("auth");return s&&KR(n,`http://${s}`),n}function IC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",IC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vC("Browser");var AC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function RC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var $y={exports:{}};const SC=RC(SA);(function(t,e){(function(r,s){t.exports=s(SC)})(AC,n=>(()=>{var r={772:(c,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(u,d)=>{const p=u.__vccOpts||u;for(const[g,T]of d)p[g]=T;return p}},976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),i.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>N,ToastPlugin:()=>I,ToastPositions:()=>S,default:()=>v,useToast:()=>k});var c=i(976);const l=(0,c.createElementVNode)("div",{class:"v-toast__icon"},null,-1),u=["innerHTML"];function d(m,y,w,A,E,de){return(0,c.openBlock)(),(0,c.createBlock)(c.Transition,{"enter-active-class":m.transition.enter,"leave-active-class":m.transition.leave},{default:(0,c.withCtx)(()=>[(0,c.withDirectives)((0,c.createElementVNode)("div",{ref:"root",role:"alert",class:(0,c.normalizeClass)(["v-toast__item",[`v-toast__item--${m.type}`,`v-toast__item--${m.position}`]]),onMouseover:y[0]||(y[0]=ye=>m.toggleTimer(!0)),onMouseleave:y[1]||(y[1]=ye=>m.toggleTimer(!1)),onClick:y[2]||(y[2]=function(){return m.whenClicked&&m.whenClicked(...arguments)})},[l,(0,c.createElementVNode)("p",{class:"v-toast__text",innerHTML:m.message},null,8,u)],34),[[c.vShow,m.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function p(m){var y;typeof m.remove<"u"?m.remove():(y=m.parentNode)==null||y.removeChild(m)}function g(m,y,w){let A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const E=(0,c.h)(m,y,A),de=document.createElement("div");return de.classList.add("v-toast--pending"),w.appendChild(de),(0,c.render)(E,de),E.component}class T{constructor(y,w){this.startedAt=Date.now(),this.callback=y,this.delay=w,this.timer=setTimeout(y,w)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const S=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function M(m){return{all:m=m||new Map,on:function(y,w){var A=m.get(y);A?A.push(w):m.set(y,[w])},off:function(y,w){var A=m.get(y);A&&(w?A.splice(A.indexOf(w)>>>0,1):m.set(y,[]))},emit:function(y,w){var A=m.get(y);A&&A.slice().map(function(E){E(w)}),(A=m.get("*"))&&A.slice().map(function(E){E(y,w)})}}}const F=M(),O=(0,c.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:S.BOTTOM_RIGHT,validator(m){return Object.values(S).includes(m)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),F.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const m=document.body;m.appendChild(this.parentTop),m.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const m=this.$refs.root;(0,c.render)(null,m),p(m)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const m=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),p(m),this.isActive=!0,this.duration&&(this.timer=new T(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(m){!this.pauseOnHover||!this.timer||(m?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case S.TOP:case S.TOP_RIGHT:case S.TOP_LEFT:return this.parentTop;case S.BOTTOM:case S.BOTTOM_RIGHT:case S.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case S.TOP:case S.TOP_RIGHT:case S.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case S.BOTTOM:case S.BOTTOM_RIGHT:case S.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){F.off("toast-clear",this.dismiss)}});var C=i(772);const N=(0,C.default)(O,[["render",d]]),k=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(y){let w=null;typeof y=="string"&&(w=y);const E=Object.assign({},{message:w},m,y);return{dismiss:g(N,E,document.body).ctx.dismiss}},clear(){F.emit("toast-clear")},success(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"success"},w))},error(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"error"},w))},info(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"info"},w))},warning(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"warning"},w))},default(y){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"default"},w))}}},I={install:function(m){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=k(y);m.config.globalProperties.$toast=w,m.provide("$toast",w)}},v=I})(),o})())})($y);var jy=$y.exports;const CC=bC(jy);function Fe(t,e){const n=jy.useToast();switch(t){case"success":n.success(e);break;case"info":n.info(e);break;case"warning":n.warning(e);break;case"error":n.error(e);break;case"default":n.default(e);break;default:n.default(e);break}}const ps=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qy=t=>(Nr("data-v-ebd4dc25"),t=t(),Vr(),t),PC={class:"navBar"},kC={class:"container"},OC=qy(()=>U("div",{class:"co"},"CO",-1)),DC=qy(()=>U("div",{class:"student"},"STUDENT",-1)),NC={class:"buttons"},VC={__name:"Nav",props:{isLoggedIn:Boolean},setup(t){const e=li(),n=kc();function r(){dS(e).then(()=>{n.push("/"),Fe("success","Successfully singed out!")}).catch(s=>{Fe("error",s.message)})}return(s,i)=>{const o=dm("RouterLink");return Se(),$e("div",PC,[U("div",kC,[Pe(o,{class:"logo",to:"/"},{default:on(()=>[OC,DC]),_:1}),U("div",NC,[t.isLoggedIn?vn("",!0):(Se(),mr(o,{key:0,class:"button",to:"/Login"},{default:on(()=>[Vn("Login")]),_:1})),t.isLoggedIn?vn("",!0):(Se(),mr(o,{key:1,class:"button",to:"/Register"},{default:on(()=>[Vn("Register")]),_:1})),t.isLoggedIn?(Se(),mr(o,{key:2,class:"button",to:"/dashboard"},{default:on(()=>[Vn("Dashboard")]),_:1})):vn("",!0),t.isLoggedIn?(Se(),mr(o,{key:3,class:"button",to:"/findcostudent"},{default:on(()=>[Vn("Find students")]),_:1})):vn("",!0),t.isLoggedIn?(Se(),$e("div",{key:4,class:"button",onClick:i[0]||(i[0]=c=>r())},"Sign out")):vn("",!0)])])])}}},MC=ps(VC,[["__scopeId","data-v-ebd4dc25"]]),LC={},Hy=t=>(Nr("data-v-7aaa4f9a"),t=t(),Vr(),t),xC={class:"footerBox"},FC=Hy(()=>U("p",null,"Copyright ©2024",-1)),UC=Hy(()=>U("p",null,"Designed by Samuel Coryn",-1)),BC=[FC,UC];function $C(t,e){return Se(),$e("div",xC,BC)}const jC=ps(LC,[["render",$C],["__scopeId","data-v-7aaa4f9a"]]),qC={class:"navBox"},HC={__name:"App",setup(t){const e=We(!1);let n;return oi(()=>{n=li(),Cy(n,r=>{r?e.value=!0:e.value=!1})}),Us("isLoggedInKey",e),(r,s)=>(Se(),$e(Ge,null,[U("div",qC,[Pe(MC,{isLoggedIn:e.value},null,8,["isLoggedIn"])]),Pe(wt(H_),null,{default:on(({Component:i})=>[Pe(Rc,{name:"route",mode:"out-in"},{default:on(()=>[(Se(),mr(pm(i)))]),_:2},1024)]),_:1}),Pe(jC)],64))}},KC="/costudent-demo/assets/students_stock_photo-BvfkMiXM.jpg",Sh=t=>(Nr("data-v-d7acdb75"),t=t(),Vr(),t),WC={class:"root"},GC={class:"grid"},zC={class:"landingColumn"},QC=Sh(()=>U("div",{class:"title"},[U("h1",null,"Study better,"),U("h1",null,"Together")],-1)),YC=Sh(()=>U("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),JC={class:"buttonArray"},XC=Sh(()=>U("div",{class:"photo"},[U("img",{src:KC,alt:"People studying together."})],-1)),ZC=t_('<div id="learnMore" data-v-d7acdb75><div class="article" data-v-d7acdb75><h1 data-v-d7acdb75>ABOUT</h1><p data-v-d7acdb75>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-d7acdb75>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-d7acdb75>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-d7acdb75>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-d7acdb75>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-d7acdb75><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-d7acdb75><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-d7acdb75></path></svg><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-d7acdb75><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-d7acdb75></path></svg><div class="node" data-v-d7acdb75><p data-v-d7acdb75>Learn togehter!</p></div></div></div>',1),eP={__name:"Home",setup(t){function e(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=Wt("isLoggedInKey"),s=kc();return(i,o)=>(Se(),$e("div",WC,[U("div",GC,[U("div",zC,[QC,YC,U("div",JC,[U("div",{class:"button",onClick:o[0]||(o[0]=c=>n())},"Start studying"),U("div",{class:"button",onClick:o[1]||(o[1]=c=>e())},"Learn more")])]),XC]),ZC]))}},tP=ps(eP,[["__scopeId","data-v-d7acdb75"]]);var nP="firebase",rP="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn(nP,rP,"app");const Ky="@firebase/installations",Ch="0.6.7";/**
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
 */const Wy=1e4,Gy=`w:${Ch}`,zy="FIS_v2",sP="https://firebaseinstallations.googleapis.com/v1",iP=60*60*1e3,oP="installations",aP="Installations";/**
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
 */const cP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},is=new ds(oP,aP,cP);function Qy(t){return t instanceof gn&&t.code.includes("request-failed")}/**
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
 */function Yy({projectId:t}){return`${sP}/projects/${t}/installations`}function Jy(t){return{token:t.token,requestStatus:2,expiresIn:uP(t.expiresIn),creationTime:Date.now()}}async function Xy(t,e){const r=(await e.json()).error;return is.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function lP(t,{refreshToken:e}){const n=Zy(t);return n.append("Authorization",hP(e)),n}async function ev(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uP(t){return Number(t.replace("s","000"))}function hP(t){return`${zy} ${t}`}/**
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
 */async function dP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Yy(t),s=Zy(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:zy,appId:t.appId,sdkVersion:Gy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await ev(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Jy(u.authToken)}}else throw await Xy("Create Installation",l)}/**
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
 */function fP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const pP=/^[cdef][\w-]{21}$/,Eu="";function gP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mP(t);return pP.test(n)?n:Eu}catch{return Eu}}function mP(t){return fP(t).substr(0,22)}/**
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
 */function xc(t){return`${t.appName}!${t.appId}`}/**
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
 */const nv=new Map;function rv(t,e){const n=xc(t);sv(n,e),_P(n,e)}function sv(t,e){const n=nv.get(t);if(n)for(const r of n)r(e)}function _P(t,e){const n=yP();n&&n.postMessage({key:t,fid:e}),vP()}let Kr=null;function yP(){return!Kr&&"BroadcastChannel"in self&&(Kr=new BroadcastChannel("[Firebase] FID Change"),Kr.onmessage=t=>{sv(t.data.key,t.data.fid)}),Kr}function vP(){nv.size===0&&Kr&&(Kr.close(),Kr=null)}/**
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
 */const EP="firebase-installations-database",TP=1,os="firebase-installations-store";let Vl=null;function Ph(){return Vl||(Vl=ry(EP,TP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}})),Vl}async function tc(t,e){const n=xc(t),s=(await Ph()).transaction(os,"readwrite"),i=s.objectStore(os),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&rv(t,e.fid),e}async function iv(t){const e=xc(t),r=(await Ph()).transaction(os,"readwrite");await r.objectStore(os).delete(e),await r.done}async function Fc(t,e){const n=xc(t),s=(await Ph()).transaction(os,"readwrite"),i=s.objectStore(os),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&rv(t,c.fid),c}/**
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
 */async function kh(t){let e;const n=await Fc(t.appConfig,r=>{const s=wP(r),i=IP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Eu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wP(t){const e=t||{fid:gP(),registrationStatus:0};return ov(e)}function IP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(is.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=AP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bP(t)}:{installationEntry:e}}async function AP(t,e){try{const n=await dP(t,e);return tc(t.appConfig,n)}catch(n){throw Qy(n)&&n.customData.serverCode===409?await iv(t.appConfig):await tc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bP(t){let e=await Bp(t.appConfig);for(;e.registrationStatus===1;)await tv(100),e=await Bp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kh(t);return r||n}return e}function Bp(t){return Fc(t,e=>{if(!e)throw is.create("installation-not-found");return ov(e)})}function ov(t){return RP(t)?{fid:t.fid,registrationStatus:0}:t}function RP(t){return t.registrationStatus===1&&t.registrationTime+Wy<Date.now()}/**
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
 */async function SP({appConfig:t,heartbeatServiceProvider:e},n){const r=CP(t,n),s=lP(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Gy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await ev(()=>fetch(r,c));if(l.ok){const u=await l.json();return Jy(u)}else throw await Xy("Generate Auth Token",l)}function CP(t,{fid:e}){return`${Yy(t)}/${e}/authTokens:generate`}/**
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
 */async function Oh(t,e=!1){let n;const r=await Fc(t.appConfig,i=>{if(!av(i))throw is.create("not-registered");const o=i.authToken;if(!e&&OP(o))return i;if(o.requestStatus===1)return n=PP(t,e),i;{if(!navigator.onLine)throw is.create("app-offline");const c=NP(i);return n=kP(t,c),c}});return n?await n:r.authToken}async function PP(t,e){let n=await $p(t.appConfig);for(;n.authToken.requestStatus===1;)await tv(100),n=await $p(t.appConfig);const r=n.authToken;return r.requestStatus===0?Oh(t,e):r}function $p(t){return Fc(t,e=>{if(!av(e))throw is.create("not-registered");const n=e.authToken;return VP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function kP(t,e){try{const n=await SP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await tc(t.appConfig,r),n}catch(n){if(Qy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await tc(t.appConfig,r)}throw n}}function av(t){return t!==void 0&&t.registrationStatus===2}function OP(t){return t.requestStatus===2&&!DP(t)}function DP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iP}function NP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function VP(t){return t.requestStatus===1&&t.requestTime+Wy<Date.now()}/**
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
 */async function MP(t){const e=t,{installationEntry:n,registrationPromise:r}=await kh(e);return r?r.catch(console.error):Oh(e).catch(console.error),n.fid}/**
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
 */async function LP(t,e=!1){const n=t;return await xP(n),(await Oh(n,e)).token}async function xP(t){const{registrationPromise:e}=await kh(t);e&&await e}/**
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
 */function FP(t){if(!t||!t.options)throw Ml("App Configuration");if(!t.name)throw Ml("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ml(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ml(t){return is.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="installations",UP="installations-internal",BP=t=>{const e=t.getProvider("app").getImmediate(),n=FP(e),r=fs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$P=t=>{const e=t.getProvider("app").getImmediate(),n=fs(e,cv).getImmediate();return{getId:()=>MP(n),getToken:s=>LP(n,s)}};function jP(){bn(new fn(cv,BP,"PUBLIC")),bn(new fn(UP,$P,"PRIVATE"))}jP();tn(Ky,Ch);tn(Ky,Ch,"esm2017");/**
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
 */const nc="analytics",qP="firebase_id",HP="origin",KP=60*1e3,WP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Dh="https://www.googletagmanager.com/gtag/js";/**
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
 */const Mt=new Dc("@firebase/analytics");/**
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
 */const GP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},zt=new ds("analytics","Analytics",GP);/**
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
 */function zP(t){if(!t.startsWith(Dh)){const e=zt.create("invalid-gtag-resource",{gtagURL:t});return Mt.warn(e.message),""}return t}function lv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function QP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function YP(t,e){const n=QP("firebase-js-sdk-policy",{createScriptURL:zP}),r=document.createElement("script"),s=`${Dh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function JP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function XP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await lv(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){Mt.error(c)}t("config",s,i)}async function ZP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await lv(n);for(const l of o){const u=c.find(p=>p.measurementId===l),d=u&&e[u.appId];if(d)i.push(d);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){Mt.error(i)}}function e1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await ZP(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await XP(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){Mt.error(c)}}return s}function t1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=e1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function n1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Dh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=30,s1=1e3;class i1{constructor(e={},n=s1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const uv=new i1;function o1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function a1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:o1(r)},i=WP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw zt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function c1(t,e=uv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw zt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw zt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new h1;return setTimeout(async()=>{c.abort()},KP),hv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function hv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=uv){var i;const{appId:o,measurementId:c}=t;try{await l1(r,e)}catch(l){if(c)return Mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await a1(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!u1(u)){if(s.deleteThrottleMetadata(o),c)return Mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const d=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?dp(n,s.intervalMillis,r1):dp(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(o,p),Mt.debug(`Calling attemptFetch again in ${d} millis`),hv(t,p,r,s)}}function l1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(zt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function u1(t){if(!(t instanceof gn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class h1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function d1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(){if(Z_())try{await ey()}catch(t){return Mt.warn(zt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Mt.warn(zt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p1(t,e,n,r,s,i,o){var c;const l=c1(t);l.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&Mt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>Mt.error(T)),e.push(l);const u=f1().then(T=>{if(T)return r.getId()}),[d,p]=await Promise.all([l,u]);n1(i)||YP(i,d.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[HP]="firebase",g.update=!0,p!=null&&(g[qP]=p),s("config",d.measurementId,g),d.measurementId}/**
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
 */class g1{constructor(e){this.app=e}_delete(){return delete Yi[this.app.options.appId],Promise.resolve()}}let Yi={},jp=[];const qp={};let Ll="dataLayer",m1="gtag",Hp,dv,Kp=!1;function _1(){const t=[];if(X_()&&t.push("This is a browser extension environment."),Kb()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=zt.create("invalid-analytics-context",{errorInfo:e});Mt.warn(n.message)}}function y1(t,e,n){_1();const r=t.options.appId;if(!r)throw zt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw zt.create("no-api-key");if(Yi[r]!=null)throw zt.create("already-exists",{id:r});if(!Kp){JP(Ll);const{wrappedGtag:i,gtagCore:o}=t1(Yi,jp,qp,Ll,m1);dv=i,Hp=o,Kp=!0}return Yi[r]=p1(t,jp,qp,e,Hp,Ll,n),new g1(t)}function v1(t=gh()){t=tt(t);const e=fs(t,nc);return e.isInitialized()?e.getImmediate():E1(t)}function E1(t,e={}){const n=fs(t,nc);if(n.isInitialized()){const s=n.getImmediate();if(ho(e,n.getOptions()))return s;throw zt.create("already-initialized")}return n.initialize({options:e})}function T1(t,e,n,r){t=tt(t),d1(dv,Yi[t.app.options.appId],e,n,r).catch(s=>Mt.error(s))}const Wp="@firebase/analytics",Gp="0.10.4";function w1(){bn(new fn(nc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return y1(r,s,n)},"PUBLIC")),bn(new fn("analytics-internal",t,"PRIVATE")),tn(Wp,Gp),tn(Wp,Gp,"esm2017");function t(e){try{const n=e.getProvider(nc).getImmediate();return{logEvent:(r,s,i)=>T1(n,r,s,i)}}catch(n){throw zt.create("interop-component-reg-failed",{reason:n})}}}w1();var zp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,fv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function m(){}m.prototype=v.prototype,I.D=v.prototype,I.prototype=new m,I.prototype.constructor=I,I.C=function(y,w,A){for(var E=Array(arguments.length-2),de=2;de<arguments.length;de++)E[de-2]=arguments[de];return v.prototype[w].apply(y,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,m){m||(m=0);var y=Array(16);if(typeof v=="string")for(var w=0;16>w;++w)y[w]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(w=0;16>w;++w)y[w]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=I.g[0],m=I.g[1],w=I.g[2];var A=I.g[3],E=v+(A^m&(w^A))+y[0]+3614090360&4294967295;v=m+(E<<7&4294967295|E>>>25),E=A+(w^v&(m^w))+y[1]+3905402710&4294967295,A=v+(E<<12&4294967295|E>>>20),E=w+(m^A&(v^m))+y[2]+606105819&4294967295,w=A+(E<<17&4294967295|E>>>15),E=m+(v^w&(A^v))+y[3]+3250441966&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(A^m&(w^A))+y[4]+4118548399&4294967295,v=m+(E<<7&4294967295|E>>>25),E=A+(w^v&(m^w))+y[5]+1200080426&4294967295,A=v+(E<<12&4294967295|E>>>20),E=w+(m^A&(v^m))+y[6]+2821735955&4294967295,w=A+(E<<17&4294967295|E>>>15),E=m+(v^w&(A^v))+y[7]+4249261313&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(A^m&(w^A))+y[8]+1770035416&4294967295,v=m+(E<<7&4294967295|E>>>25),E=A+(w^v&(m^w))+y[9]+2336552879&4294967295,A=v+(E<<12&4294967295|E>>>20),E=w+(m^A&(v^m))+y[10]+4294925233&4294967295,w=A+(E<<17&4294967295|E>>>15),E=m+(v^w&(A^v))+y[11]+2304563134&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(A^m&(w^A))+y[12]+1804603682&4294967295,v=m+(E<<7&4294967295|E>>>25),E=A+(w^v&(m^w))+y[13]+4254626195&4294967295,A=v+(E<<12&4294967295|E>>>20),E=w+(m^A&(v^m))+y[14]+2792965006&4294967295,w=A+(E<<17&4294967295|E>>>15),E=m+(v^w&(A^v))+y[15]+1236535329&4294967295,m=w+(E<<22&4294967295|E>>>10),E=v+(w^A&(m^w))+y[1]+4129170786&4294967295,v=m+(E<<5&4294967295|E>>>27),E=A+(m^w&(v^m))+y[6]+3225465664&4294967295,A=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(A^v))+y[11]+643717713&4294967295,w=A+(E<<14&4294967295|E>>>18),E=m+(A^v&(w^A))+y[0]+3921069994&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(w^A&(m^w))+y[5]+3593408605&4294967295,v=m+(E<<5&4294967295|E>>>27),E=A+(m^w&(v^m))+y[10]+38016083&4294967295,A=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(A^v))+y[15]+3634488961&4294967295,w=A+(E<<14&4294967295|E>>>18),E=m+(A^v&(w^A))+y[4]+3889429448&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(w^A&(m^w))+y[9]+568446438&4294967295,v=m+(E<<5&4294967295|E>>>27),E=A+(m^w&(v^m))+y[14]+3275163606&4294967295,A=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(A^v))+y[3]+4107603335&4294967295,w=A+(E<<14&4294967295|E>>>18),E=m+(A^v&(w^A))+y[8]+1163531501&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(w^A&(m^w))+y[13]+2850285829&4294967295,v=m+(E<<5&4294967295|E>>>27),E=A+(m^w&(v^m))+y[2]+4243563512&4294967295,A=v+(E<<9&4294967295|E>>>23),E=w+(v^m&(A^v))+y[7]+1735328473&4294967295,w=A+(E<<14&4294967295|E>>>18),E=m+(A^v&(w^A))+y[12]+2368359562&4294967295,m=w+(E<<20&4294967295|E>>>12),E=v+(m^w^A)+y[5]+4294588738&4294967295,v=m+(E<<4&4294967295|E>>>28),E=A+(v^m^w)+y[8]+2272392833&4294967295,A=v+(E<<11&4294967295|E>>>21),E=w+(A^v^m)+y[11]+1839030562&4294967295,w=A+(E<<16&4294967295|E>>>16),E=m+(w^A^v)+y[14]+4259657740&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(m^w^A)+y[1]+2763975236&4294967295,v=m+(E<<4&4294967295|E>>>28),E=A+(v^m^w)+y[4]+1272893353&4294967295,A=v+(E<<11&4294967295|E>>>21),E=w+(A^v^m)+y[7]+4139469664&4294967295,w=A+(E<<16&4294967295|E>>>16),E=m+(w^A^v)+y[10]+3200236656&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(m^w^A)+y[13]+681279174&4294967295,v=m+(E<<4&4294967295|E>>>28),E=A+(v^m^w)+y[0]+3936430074&4294967295,A=v+(E<<11&4294967295|E>>>21),E=w+(A^v^m)+y[3]+3572445317&4294967295,w=A+(E<<16&4294967295|E>>>16),E=m+(w^A^v)+y[6]+76029189&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(m^w^A)+y[9]+3654602809&4294967295,v=m+(E<<4&4294967295|E>>>28),E=A+(v^m^w)+y[12]+3873151461&4294967295,A=v+(E<<11&4294967295|E>>>21),E=w+(A^v^m)+y[15]+530742520&4294967295,w=A+(E<<16&4294967295|E>>>16),E=m+(w^A^v)+y[2]+3299628645&4294967295,m=w+(E<<23&4294967295|E>>>9),E=v+(w^(m|~A))+y[0]+4096336452&4294967295,v=m+(E<<6&4294967295|E>>>26),E=A+(m^(v|~w))+y[7]+1126891415&4294967295,A=v+(E<<10&4294967295|E>>>22),E=w+(v^(A|~m))+y[14]+2878612391&4294967295,w=A+(E<<15&4294967295|E>>>17),E=m+(A^(w|~v))+y[5]+4237533241&4294967295,m=w+(E<<21&4294967295|E>>>11),E=v+(w^(m|~A))+y[12]+1700485571&4294967295,v=m+(E<<6&4294967295|E>>>26),E=A+(m^(v|~w))+y[3]+2399980690&4294967295,A=v+(E<<10&4294967295|E>>>22),E=w+(v^(A|~m))+y[10]+4293915773&4294967295,w=A+(E<<15&4294967295|E>>>17),E=m+(A^(w|~v))+y[1]+2240044497&4294967295,m=w+(E<<21&4294967295|E>>>11),E=v+(w^(m|~A))+y[8]+1873313359&4294967295,v=m+(E<<6&4294967295|E>>>26),E=A+(m^(v|~w))+y[15]+4264355552&4294967295,A=v+(E<<10&4294967295|E>>>22),E=w+(v^(A|~m))+y[6]+2734768916&4294967295,w=A+(E<<15&4294967295|E>>>17),E=m+(A^(w|~v))+y[13]+1309151649&4294967295,m=w+(E<<21&4294967295|E>>>11),E=v+(w^(m|~A))+y[4]+4149444226&4294967295,v=m+(E<<6&4294967295|E>>>26),E=A+(m^(v|~w))+y[11]+3174756917&4294967295,A=v+(E<<10&4294967295|E>>>22),E=w+(v^(A|~m))+y[2]+718787259&4294967295,w=A+(E<<15&4294967295|E>>>17),E=m+(A^(w|~v))+y[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(w+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var m=v-this.blockSize,y=this.B,w=this.h,A=0;A<v;){if(w==0)for(;A<=m;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<v;)if(y[w++]=I.charCodeAt(A++),w==this.blockSize){s(this,y),w=0;break}}else for(;A<v;)if(y[w++]=I[A++],w==this.blockSize){s(this,y),w=0;break}}this.h=w,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var m=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=m&255,m/=256;for(this.u(I),I=Array(16),v=m=0;4>v;++v)for(var y=0;32>y;y+=8)I[m++]=this.g[v]>>>y&255;return I};function i(I,v){var m=c;return Object.prototype.hasOwnProperty.call(m,I)?m[I]:m[I]=v(I)}function o(I,v){this.h=v;for(var m=[],y=!0,w=I.length-1;0<=w;w--){var A=I[w]|0;y&&A==v||(m[w]=A,y=!1)}this.g=m}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return V(u(-I));for(var v=[],m=1,y=0;I>=m;y++)v[y]=I/m|0,m*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return V(d(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=u(Math.pow(v,8)),y=p,w=0;w<I.length;w+=8){var A=Math.min(8,I.length-w),E=parseInt(I.substring(w,w+A),v);8>A?(A=u(Math.pow(v,A)),y=y.j(A).add(u(E))):(y=y.j(m),y=y.add(u(E)))}return y}var p=l(0),g=l(1),T=l(16777216);t=o.prototype,t.m=function(){if(M(this))return-V(this).m();for(var I=0,v=1,m=0;m<this.g.length;m++){var y=this.i(m);I+=(0<=y?y:4294967296+y)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(M(this))return"-"+V(this).toString(I);for(var v=u(Math.pow(I,6)),m=this,y="";;){var w=P(m,v).g;m=F(m,w.j(v));var A=((0<m.g.length?m.g[0]:m.h)>>>0).toString(I);if(m=w,S(m))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function M(I){return I.h==-1}t.l=function(I){return I=F(this,I),M(I)?-1:S(I)?0:1};function V(I){for(var v=I.g.length,m=[],y=0;y<v;y++)m[y]=~I.g[y];return new o(m,~I.h).add(g)}t.abs=function(){return M(this)?V(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),m=[],y=0,w=0;w<=v;w++){var A=y+(this.i(w)&65535)+(I.i(w)&65535),E=(A>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);y=E>>>16,A&=65535,E&=65535,m[w]=E<<16|A}return new o(m,m[m.length-1]&-2147483648?-1:0)};function F(I,v){return I.add(V(v))}t.j=function(I){if(S(this)||S(I))return p;if(M(this))return M(I)?V(this).j(V(I)):V(V(this).j(I));if(M(I))return V(this.j(V(I)));if(0>this.l(T)&&0>I.l(T))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,m=[],y=0;y<2*v;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var w=0;w<I.g.length;w++){var A=this.i(y)>>>16,E=this.i(y)&65535,de=I.i(w)>>>16,ye=I.i(w)&65535;m[2*y+2*w]+=E*ye,O(m,2*y+2*w),m[2*y+2*w+1]+=A*ye,O(m,2*y+2*w+1),m[2*y+2*w+1]+=E*de,O(m,2*y+2*w+1),m[2*y+2*w+2]+=A*de,O(m,2*y+2*w+2)}for(y=0;y<v;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=v;y<2*v;y++)m[y]=0;return new o(m,0)};function O(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function C(I,v){this.g=I,this.h=v}function P(I,v){if(S(v))throw Error("division by zero");if(S(I))return new C(p,p);if(M(I))return v=P(V(I),v),new C(V(v.g),V(v.h));if(M(v))return v=P(I,V(v)),new C(V(v.g),v.h);if(30<I.g.length){if(M(I)||M(v))throw Error("slowDivide_ only works with positive integers.");for(var m=g,y=v;0>=y.l(I);)m=N(m),y=N(y);var w=k(m,1),A=k(y,1);for(y=k(y,2),m=k(m,2);!S(y);){var E=A.add(y);0>=E.l(I)&&(w=w.add(m),A=E),y=k(y,1),m=k(m,1)}return v=F(I,w.j(v)),new C(w,v)}for(w=p;0<=I.l(v);){for(m=Math.max(1,Math.floor(I.m()/v.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=u(m),E=A.j(v);M(E)||0<E.l(I);)m-=y,A=u(m),E=A.j(v);S(A)&&(A=g),w=w.add(A),I=F(I,E)}return new C(w,I)}t.A=function(I){return P(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)&I.i(y);return new o(m,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)|I.i(y);return new o(m,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)^I.i(y);return new o(m,this.h^I.h)};function N(I){for(var v=I.g.length+1,m=[],y=0;y<v;y++)m[y]=I.i(y)<<1|I.i(y-1)>>>31;return new o(m,I.h)}function k(I,v){var m=v>>5;v%=32;for(var y=I.g.length-m,w=[],A=0;A<y;A++)w[A]=0<v?I.i(A+m)>>>v|I.i(A+m+1)<<32-v:I.i(A+m);return new o(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Jr=o}).apply(typeof zp<"u"?zp:typeof self<"u"?self:typeof window<"u"?window:{});var va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pv,gv,Fi,mv,ka,Tu,_v,yv,vv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof va=="object"&&va];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var D=a[_];if(!(D in f))break e;f=f[D]}a=a[a.length-1],_=f[a],h=h(_),h!=_&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,_=!1,D={next:function(){if(!_&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),a.apply(h,D)}}return function(){return a.apply(h,arguments)}}function g(a,h,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function T(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var _=f.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function S(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(_,D,x){for(var X=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)X[Me-2]=arguments[Me];return h.prototype[D].apply(_,X)}}function M(a){const h=a.length;if(0<h){const f=Array(h);for(let _=0;_<h;_++)f[_]=a[_];return f}return[]}function V(a,h){for(let f=1;f<arguments.length;f++){const _=arguments[f];if(l(_)){const D=a.length||0,x=_.length||0;a.length=D+x;for(let X=0;X<x;X++)a[D+X]=_[X]}else a.push(_)}}class F{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function P(a){return P[" "](a),a}P[" "]=function(){};var N=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function k(a,h,f){for(const _ in a)h.call(f,a[_],_,a)}function I(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function v(a){const h={};for(const f in a)h[f]=a[f];return h}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(a,h){let f,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(f in _)a[f]=_[f];for(let x=0;x<m.length;x++)f=m[x],Object.prototype.hasOwnProperty.call(_,f)&&(a[f]=_[f])}}function w(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function E(){var a=qe;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,f){const _=ye.get();_.set(h,f),this.h?this.h.next=_:this.g=_,this.h=_}}var ye=new F(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Q,W=!1,qe=new de,rn=()=>{const a=c.Promise.resolve(void 0);Q=()=>{a.then(Qt)}};var Qt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){A(f)}var h=ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}W=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ke(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Xn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function mn(a,h){if(Ke.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(N){e:{try{P(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ot[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&mn.aa.h.call(this)}}S(mn,Ke);var ot={2:"touch",3:"pen",4:"mouse"};mn.prototype.h=function(){mn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),ne=0;function ee(a,h,f,_,D){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!_,this.ha=D,this.key=++ne,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ee(a){this.src=a,this.g={},this.h=0}Ee.prototype.add=function(a,h,f,_,D){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var X=b(a,h,_,D);return-1<X?(h=a[X],f||(h.fa=!1)):(h=new ee(h,this.src,x,!!_,D),h.fa=f,a.push(h)),h};function Ne(a,h){var f=h.type;if(f in a.g){var _=a.g[f],D=Array.prototype.indexOf.call(_,h,void 0),x;(x=0<=D)&&Array.prototype.splice.call(_,D,1),x&&(ie(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function b(a,h,f,_){for(var D=0;D<a.length;++D){var x=a[D];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==_)return D}return-1}var R="closure_lm_"+(1e6*Math.random()|0),L={};function j(a,h,f,_,D){if(Array.isArray(h)){for(var x=0;x<h.length;x++)j(a,h[x],f,_,D);return null}return f=ce(f),a&&a[$]?a.K(h,f,u(_)?!!_.capture:!!_,D):B(a,h,f,!1,_,D)}function B(a,h,f,_,D,x){if(!h)throw Error("Invalid event type");var X=u(D)?!!D.capture:!!D,Me=te(a);if(Me||(a[R]=Me=new Ee(a)),f=Me.add(h,f,_,X,x),f.proxy)return f;if(_=Y(),f.proxy=_,_.src=a,_.listener=f,a.addEventListener)Xn||(D=X),D===void 0&&(D=!1),a.addEventListener(h.toString(),_,D);else if(a.attachEvent)a.attachEvent(J(h.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Y(){function a(f){return h.call(a.src,a.listener,f)}const h=H;return a}function Z(a,h,f,_,D){if(Array.isArray(h))for(var x=0;x<h.length;x++)Z(a,h[x],f,_,D);else _=u(_)?!!_.capture:!!_,f=ce(f),a&&a[$]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=b(x,f,_,D),-1<f&&(ie(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=te(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,f,_,D)),(f=-1<a?h[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[$])Ne(h.i,a);else{var f=a.type,_=a.proxy;h.removeEventListener?h.removeEventListener(f,_,a.capture):h.detachEvent?h.detachEvent(J(f),_):h.addListener&&h.removeListener&&h.removeListener(_),(f=te(h))?(Ne(f,a),f.h==0&&(f.src=null,h[R]=null)):ie(a)}}}function J(a){return a in L?L[a]:L[a]="on"+a}function H(a,h){if(a.da)a=!0;else{h=new mn(h,this);var f=a.listener,_=a.ha||a.src;a.fa&&G(a),a=f.call(_,h)}return a}function te(a){return a=a[R],a instanceof Ee?a:null}var le="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[le]||(a[le]=function(h){return a.handleEvent(h)}),a[le])}function ae(){He.call(this),this.i=new Ee(this),this.M=this,this.F=null}S(ae,He),ae.prototype[$]=!0,ae.prototype.removeEventListener=function(a,h,f,_){Z(this,a,h,f,_)};function he(a,h){var f,_=a.F;if(_)for(f=[];_;_=_.F)f.push(_);if(a=a.M,_=h.type||h,typeof h=="string")h=new Ke(h,a);else if(h instanceof Ke)h.target=h.target||a;else{var D=h;h=new Ke(_,a),y(h,D)}if(D=!0,f)for(var x=f.length-1;0<=x;x--){var X=h.g=f[x];D=ke(X,_,!0,h)&&D}if(X=h.g=a,D=ke(X,_,!0,h)&&D,D=ke(X,_,!1,h)&&D,f)for(x=0;x<f.length;x++)X=h.g=f[x],D=ke(X,_,!1,h)&&D}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],_=0;_<f.length;_++)ie(f[_]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,_){return this.i.add(String(a),h,!1,f,_)},ae.prototype.L=function(a,h,f,_){return this.i.add(String(a),h,!0,f,_)};function ke(a,h,f,_){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,x=0;x<h.length;++x){var X=h[x];if(X&&!X.da&&X.capture==f){var Me=X.listener,ht=X.ha||X.src;X.fa&&Ne(a.i,X),D=Me.call(ht,_)!==!1&&D}}return D&&!_.defaultPrevented}function Ae(a,h,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Je(a){a.g=Ae(()=>{a.g=null,a.i&&(a.i=!1,Je(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ft extends He{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(a){He.call(this),this.h=a,this.g={}}S(Yt,He);var mi=[];function Zn(a){k(a.g,function(h,f){this.g.hasOwnProperty(f)&&G(h)},a),a.g={}}Yt.prototype.N=function(){Yt.aa.N.call(this),Zn(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _s=c.JSON.stringify,At=c.JSON.parse,Jt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ys(){}ys.prototype.h=null;function fd(a){return a.h||(a.h=a.i())}function pd(){}var _i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tl(){Ke.call(this,"d")}S(tl,Ke);function nl(){Ke.call(this,"c")}S(nl,Ke);var Lr={},gd=null;function Ko(){return gd=gd||new ae}Lr.La="serverreachability";function md(a){Ke.call(this,Lr.La,a)}S(md,Ke);function yi(a){const h=Ko();he(h,new md(h))}Lr.STAT_EVENT="statevent";function _d(a,h){Ke.call(this,Lr.STAT_EVENT,a),this.stat=h}S(_d,Ke);function bt(a){const h=Ko();he(h,new _d(h,a))}Lr.Ma="timingevent";function yd(a,h){Ke.call(this,Lr.Ma,a),this.size=h}S(yd,Ke);function vi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ei(){this.g=!0}Ei.prototype.xa=function(){this.g=!1};function UE(a,h,f,_,D,x){a.info(function(){if(a.g)if(x)for(var X="",Me=x.split("&"),ht=0;ht<Me.length;ht++){var Re=Me[ht].split("=");if(1<Re.length){var mt=Re[0];Re=Re[1];var _t=mt.split("_");X=2<=_t.length&&_t[1]=="type"?X+(mt+"="+Re+"&"):X+(mt+"=redacted&")}}else X=null;else X=x;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+h+`
`+f+`
`+X})}function BE(a,h,f,_,D,x,X){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+h+`
`+f+`
`+x+" "+X})}function vs(a,h,f,_){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+jE(a,f)+(_?" "+_:"")})}function $E(a,h){a.info(function(){return"TIMEOUT: "+h})}Ei.prototype.info=function(){};function jE(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var _=f[a];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var x=D[0];if(x!="noop"&&x!="stop"&&x!="close")for(var X=1;X<D.length;X++)D[X]=""}}}}return _s(f)}catch{return h}}var Wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},rl;function Go(){}S(Go,ys),Go.prototype.g=function(){return new XMLHttpRequest},Go.prototype.i=function(){return{}},rl=new Go;function er(a,h,f,_){this.j=a,this.i=h,this.l=f,this.R=_||1,this.U=new Yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ed}function Ed(){this.i=null,this.g="",this.h=!1}var Td={},sl={};function il(a,h,f){a.L=1,a.v=Jo(Sn(h)),a.m=f,a.P=!0,wd(a,null)}function wd(a,h){a.F=Date.now(),zo(a),a.A=Sn(a.v);var f=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),Ld(f.i,"t",_),a.C=0,f=a.j.J,a.h=new Ed,a.g=ef(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Ft(g(a.Y,a,a.g),a.O)),h=a.U,f=a.g,_=a.ca;var D="readystatechange";Array.isArray(D)||(D&&(mi[0]=D.toString()),D=mi);for(var x=0;x<D.length;x++){var X=j(f,D[x],_||h.handleEvent,!1,h.h||h);if(!X)break;h.g[X.key]=X}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),yi(),UE(a.i,a.u,a.A,a.l,a.R,a.m)}er.prototype.ca=function(a){a=a.target;const h=this.M;h&&Cn(a)==3?h.j():this.Y(a)},er.prototype.Y=function(a){try{if(a==this.g)e:{const _t=Cn(this.g);var h=this.g.Ba();const ws=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||qd(this.g)))){this.J||_t!=4||h==7||(h==8||0>=ws?yi(3):yi(2)),ol(this);var f=this.g.Z();this.X=f;t:if(Id(this)){var _=qd(this.g);a="";var D=_.length,x=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xr(this),Ti(this);var X="";break t}this.h.i=new c.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,a+=this.h.i.decode(_[h],{stream:!(x&&h==D-1)});_.length=0,this.h.g+=a,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=f==200,BE(this.i,this.u,this.A,this.l,this.R,_t,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ht=this.g;if((Me=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Me)){var Re=Me;break t}}Re=null}if(f=Re)vs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,al(this,f);else{this.o=!1,this.s=3,bt(12),xr(this),Ti(this);break e}}if(this.P){f=!0;let sn;for(;!this.J&&this.C<X.length;)if(sn=qE(this,X),sn==sl){_t==4&&(this.s=4,bt(14),f=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Td){this.s=4,bt(15),vs(this.i,this.l,X,"[Invalid Chunk]"),f=!1;break}else vs(this.i,this.l,sn,null),al(this,sn);if(Id(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||X.length!=0||this.h.h||(this.s=1,bt(16),f=!1),this.o=this.o&&f,!f)vs(this.i,this.l,X,"[Invalid Chunked Response]"),xr(this),Ti(this);else if(0<X.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),fl(mt),mt.M=!0,bt(11))}}else vs(this.i,this.l,X,null),al(this,X);_t==4&&xr(this),this.o&&!this.J&&(_t==4?Yd(this.j,this):(this.o=!1,zo(this)))}else oT(this.g),f==400&&0<X.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),xr(this),Ti(this)}}}catch{}finally{}};function Id(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function qE(a,h){var f=a.C,_=h.indexOf(`
`,f);return _==-1?sl:(f=Number(h.substring(f,_)),isNaN(f)?Td:(_+=1,_+f>h.length?sl:(h=h.slice(_,_+f),a.C=_+f,h)))}er.prototype.cancel=function(){this.J=!0,xr(this)};function zo(a){a.S=Date.now()+a.I,Ad(a,a.I)}function Ad(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vi(g(a.ba,a),h)}function ol(a){a.B&&(c.clearTimeout(a.B),a.B=null)}er.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?($E(this.i,this.A),this.L!=2&&(yi(),bt(17)),xr(this),this.s=2,Ti(this)):Ad(this,this.S-a)};function Ti(a){a.j.G==0||a.J||Yd(a.j,a)}function xr(a){ol(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Zn(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function al(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||cl(f.h,a))){if(!a.K&&cl(f.h,a)&&f.G==3){try{var _=f.Da.g.parse(h)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)na(f),ea(f);else break e;dl(f),bt(18)}}else f.za=D[1],0<f.za-f.T&&37500>D[2]&&f.F&&f.v==0&&!f.C&&(f.C=vi(g(f.Za,f),6e3));if(1>=Sd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Ur(f,11)}else if((a.K||f.g==a)&&na(f),!O(h))for(D=f.Da.g.parse(h),h=0;h<D.length;h++){let Re=D[h];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const mt=Re[3];mt!=null&&(f.la=mt,f.j.info("VER="+f.la));const _t=Re[4];_t!=null&&(f.Aa=_t,f.j.info("SVER="+f.Aa));const ws=Re[5];ws!=null&&typeof ws=="number"&&0<ws&&(_=1.5*ws,f.L=_,f.j.info("backChannelRequestTimeoutMs_="+_)),_=f;const sn=a.g;if(sn){const sa=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var x=_.h;x.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ll(x,x.h),x.h=null))}if(_.D){const pl=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;pl&&(_.ya=pl,xe(_.I,_.D,pl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),_=f;var X=a;if(_.qa=Zd(_,_.J?_.ia:null,_.W),X.K){Cd(_.h,X);var Me=X,ht=_.L;ht&&(Me.I=ht),Me.B&&(ol(Me),zo(Me)),_.g=X}else zd(_);0<f.i.length&&ta(f)}else Re[0]!="stop"&&Re[0]!="close"||Ur(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Ur(f,7):hl(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}yi(4)}catch{}}var HE=class{constructor(a,h){this.g=a,this.map=h}};function bd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Sd(a){return a.h?1:a.g?a.g.size:0}function cl(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function ll(a,h){a.g?a.g.add(h):a.h=h}function Cd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}bd.prototype.cancel=function(){if(this.i=Pd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return M(a.i)}function KE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,_=0;_<f;_++)h.push(a[_]);return h}h=[],f=0;for(_ in a)h[f++]=a[_];return h}function WE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const _ in a)h[f++]=_;return h}}}function kd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=WE(a),_=KE(a),D=_.length,x=0;x<D;x++)h.call(void 0,_[x],f&&f[x],a)}var Od=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GE(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var _=a[f].indexOf("="),D=null;if(0<=_){var x=a[f].substring(0,_);D=a[f].substring(_+1)}else x=a[f];h(x,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fr){this.h=a.h,Qo(this,a.j),this.o=a.o,this.g=a.g,Yo(this,a.s),this.l=a.l;var h=a.i,f=new Ai;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Dd(this,f),this.m=a.m}else a&&(h=String(a).match(Od))?(this.h=!1,Qo(this,h[1]||"",!0),this.o=wi(h[2]||""),this.g=wi(h[3]||"",!0),Yo(this,h[4]),this.l=wi(h[5]||"",!0),Dd(this,h[6]||"",!0),this.m=wi(h[7]||"")):(this.h=!1,this.i=new Ai(null,this.h))}Fr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ii(h,Nd,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ii(h,Nd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ii(f,f.charAt(0)=="/"?YE:QE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ii(f,XE)),a.join("")};function Sn(a){return new Fr(a)}function Qo(a,h,f){a.j=f?wi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Yo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Dd(a,h,f){h instanceof Ai?(a.i=h,ZE(a.i,a.h)):(f||(h=Ii(h,JE)),a.i=new Ai(h,a.h))}function xe(a,h,f){a.i.set(h,f)}function Jo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function wi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ii(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,zE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nd=/[#\/\?@]/g,QE=/[#\?:]/g,YE=/[#\?]/g,JE=/[#\?@]/g,XE=/#/g;function Ai(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&GE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Ai.prototype,t.add=function(a,h){tr(this),this.i=null,a=Es(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Vd(a,h){tr(a),h=Es(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Md(a,h){return tr(a),h=Es(a,h),a.g.has(h)}t.forEach=function(a,h){tr(this),this.g.forEach(function(f,_){f.forEach(function(D){a.call(h,D,_,this)},this)},this)},t.na=function(){tr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let _=0;_<h.length;_++){const D=a[_];for(let x=0;x<D.length;x++)f.push(h[_])}return f},t.V=function(a){tr(this);let h=[];if(typeof a=="string")Md(this,a)&&(h=h.concat(this.g.get(Es(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return tr(this),this.i=null,a=Es(this,a),Md(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Ld(a,h,f){Vd(a,h),0<f.length&&(a.i=null,a.g.set(Es(a,h),M(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var _=h[f];const x=encodeURIComponent(String(_)),X=this.V(_);for(_=0;_<X.length;_++){var D=x;X[_]!==""&&(D+="="+encodeURIComponent(String(X[_]))),a.push(D)}}return this.i=a.join("&")};function Es(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ZE(a,h){h&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(f,_){var D=_.toLowerCase();_!=D&&(Vd(this,_),Ld(this,D,f))},a)),a.j=h}function eT(a,h){const f=new Ei;if(c.Image){const _=new Image;_.onload=T(nr,f,"TestLoadImage: loaded",!0,h,_),_.onerror=T(nr,f,"TestLoadImage: error",!1,h,_),_.onabort=T(nr,f,"TestLoadImage: abort",!1,h,_),_.ontimeout=T(nr,f,"TestLoadImage: timeout",!1,h,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else h(!1)}function tT(a,h){const f=new Ei,_=new AbortController,D=setTimeout(()=>{_.abort(),nr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:_.signal}).then(x=>{clearTimeout(D),x.ok?nr(f,"TestPingServer: ok",!0,h):nr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),nr(f,"TestPingServer: error",!1,h)})}function nr(a,h,f,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(f)}catch{}}function nT(){this.g=new Jt}function rT(a,h,f){const _=f||"";try{kd(a,function(D,x){let X=D;u(D)&&(X=_s(D)),h.push(_+x+"="+encodeURIComponent(X))})}catch(D){throw h.push(_+"type="+encodeURIComponent("_badmap")),D}}function bi(a){this.l=a.Ub||null,this.j=a.eb||!1}S(bi,ys),bi.prototype.g=function(){return new Xo(this.l,this.j)},bi.prototype.i=function(a){return function(){return a}}({});function Xo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Xo,ae),t=Xo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ri(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;xd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function xd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ri(this):Si(this),this.readyState==3&&xd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ri(this))},t.Qa=function(a){this.g&&(this.response=a,Ri(this))},t.ga=function(){this.g&&Ri(this)};function Ri(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Si(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Fd(a){let h="";return k(a,function(f,_){h+=_,h+=":",h+=f,h+=`\r
`}),h}function ul(a,h,f){e:{for(_ in f){var _=!1;break e}_=!0}_||(f=Fd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):xe(a,h,f))}function Qe(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Qe,ae);var sT=/^https?$/i,iT=["POST","PUT"];t=Qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():rl.g(),this.v=this.o?fd(this.o):fd(rl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){Ud(this,x);return}if(a=f||"",f=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)f.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const x of _.keys())f.set(x,_.get(x));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),D=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(iT,h,void 0))||_||D||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,X]of f)this.g.setRequestHeader(x,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jd(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){Ud(this,x)}};function Ud(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Bd(a),Zo(a)}function Bd(a){a.A||(a.A=!0,he(a,"complete"),he(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,he(this,"complete"),he(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$d(this):this.bb())},t.bb=function(){$d(this)};function $d(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Cn(a)!=4||a.Z()!=2)){if(a.u&&Cn(a)==4)Ae(a.Ea,0,a);else if(he(a,"readystatechange"),Cn(a)==4){a.h=!1;try{const X=a.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var _;if(_=X===0){var D=String(a.D).match(Od)[1]||null;!D&&c.self&&c.self.location&&(D=c.self.location.protocol.slice(0,-1)),_=!sT.test(D?D.toLowerCase():"")}f=_}if(f)he(a,"complete"),he(a,"success");else{a.m=6;try{var x=2<Cn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",Bd(a)}}finally{Zo(a)}}}}function Zo(a,h){if(a.g){jd(a);const f=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||he(a,"ready");try{f.onreadystatechange=_}catch{}}}function jd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),At(h)}};function qd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function oT(a){const h={};a=(a.g&&2<=Cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(O(a[_]))continue;var f=w(a[_]);const D=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[D]||[];h[D]=x,x.push(f)}I(h,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ci(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Hd(a){this.Aa=0,this.i=[],this.j=new Ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ci("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ci("baseRetryDelayMs",5e3,a),this.cb=Ci("retryDelaySeedMs",1e4,a),this.Wa=Ci("forwardChannelMaxRetries",2,a),this.wa=Ci("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new bd(a&&a.concurrentRequestLimit),this.Da=new nT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Hd.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,_){bt(0),this.W=a,this.H=h||{},f&&_!==void 0&&(this.H.OSID=f,this.H.OAID=_),this.F=this.X,this.I=Zd(this,null,this.W),ta(this)};function hl(a){if(Kd(a),a.G==3){var h=a.U++,f=Sn(a.I);if(xe(f,"SID",a.K),xe(f,"RID",h),xe(f,"TYPE","terminate"),Pi(a,f),h=new er(a,a.j,h),h.L=2,h.v=Jo(Sn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=ef(h.j,null),h.g.ea(h.v)),h.F=Date.now(),zo(h)}Xd(a)}function ea(a){a.g&&(fl(a),a.g.cancel(),a.g=null)}function Kd(a){ea(a),a.u&&(c.clearTimeout(a.u),a.u=null),na(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ta(a){if(!Rd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Q||rn(),W||(Q(),W=!0),qe.add(h,a),a.B=0}}function aT(a,h){return Sd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vi(g(a.Ga,a,h),Jd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const D=new er(this,this.j,a);let x=this.o;if(this.S&&(x?(x=v(x),y(x,this.S)):x=this.S),this.m!==null||this.O||(D.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var _=this.i[f];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(h+=_,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Gd(this,D,h),f=Sn(this.I),xe(f,"RID",a),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),Pi(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(Fd(x)))+"&"+h:this.m&&ul(f,this.m,x)),ll(this.h,D),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",h),xe(f,"SID","null"),D.T=!0,il(D,f,null)):il(D,f,h),this.G=2}}else this.G==3&&(a?Wd(this,a):this.i.length==0||Rd(this.h)||Wd(this))};function Wd(a,h){var f;h?f=h.l:f=a.U++;const _=Sn(a.I);xe(_,"SID",a.K),xe(_,"RID",f),xe(_,"AID",a.T),Pi(a,_),a.m&&a.o&&ul(_,a.m,a.o),f=new er(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Gd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ll(a.h,f),il(f,_,h)}function Pi(a,h){a.H&&k(a.H,function(f,_){xe(h,_,f)}),a.l&&kd({},function(f,_){xe(h,_,f)})}function Gd(a,h,f){f=Math.min(a.i.length,f);var _=a.l?g(a.l.Na,a.l,a):null;e:{var D=a.i;let x=-1;for(;;){const X=["count="+f];x==-1?0<f?(x=D[0].g,X.push("ofs="+x)):x=0:X.push("ofs="+x);let Me=!0;for(let ht=0;ht<f;ht++){let Re=D[ht].g;const mt=D[ht].map;if(Re-=x,0>Re)x=Math.max(0,D[ht].g-100),Me=!1;else try{rT(mt,X,"req"+Re+"_")}catch{_&&_(mt)}}if(Me){_=X.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,_}function zd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Q||rn(),W||(Q(),W=!0),qe.add(h,a),a.v=0}}function dl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vi(g(a.Fa,a),Jd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Qd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),ea(this),Qd(this))};function fl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Qd(a){a.g=new er(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Sn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),Pi(a,h),a.m&&a.o&&ul(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Jo(Sn(h)),f.m=null,f.P=!0,wd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ea(this),dl(this),bt(19))};function na(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Yd(a,h){var f=null;if(a.g==h){na(a),fl(a),a.g=null;var _=2}else if(cl(a.h,h))f=h.D,Cd(a.h,h),_=1;else return;if(a.G!=0){if(h.o)if(_==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var D=a.B;_=Ko(),he(_,new yd(_,f)),ta(a)}else zd(a);else if(D=h.s,D==3||D==0&&0<h.X||!(_==1&&aT(a,h)||_==2&&dl(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),D){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function Jd(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Ur(a,h){if(a.j.info("Error code "+h),h==2){var f=g(a.fb,a),_=a.Xa;const D=!_;_=new Fr(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Qo(_,"https"),Jo(_),D?eT(_.toString(),f):tT(_.toString(),f)}else bt(2);a.G=0,a.l&&a.l.sa(h),Xd(a),Kd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function Xd(a){if(a.G=0,a.ka=[],a.l){const h=Pd(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.ra()}}function Zd(a,h,f){var _=f instanceof Fr?Sn(f):new Fr(f);if(_.g!="")h&&(_.g=h+"."+_.g),Yo(_,_.s);else{var D=c.location;_=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var x=new Fr(null);_&&Qo(x,_),h&&(x.g=h),D&&Yo(x,D),f&&(x.l=f),_=x}return f=a.D,h=a.ya,f&&h&&xe(_,f,h),xe(_,"VER",a.la),Pi(a,_),_}function ef(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Qe(new bi({eb:f})):new Qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tf(){}t=tf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ra(){}ra.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){ae.call(this),this.g=new Hd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!O(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!O(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ts(this)}S(Ut,ae),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){hl(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=_s(a),a=f);h.i.push(new HE(h.Ya++,a)),h.G==3&&ta(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,hl(this.g),delete this.g,Ut.aa.N.call(this)};function nf(a){tl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(nf,tl);function rf(){nl.call(this),this.status=1}S(rf,nl);function Ts(a){this.g=a}S(Ts,tf),Ts.prototype.ua=function(){he(this.g,"a")},Ts.prototype.ta=function(a){he(this.g,new nf(a))},Ts.prototype.sa=function(a){he(this.g,new rf)},Ts.prototype.ra=function(){he(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,vv=function(){return new ra},yv=function(){return Ko()},_v=Lr,Tu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wo.NO_ERROR=0,Wo.TIMEOUT=8,Wo.HTTP_ERROR=6,ka=Wo,vd.COMPLETE="complete",mv=vd,pd.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Fi=pd,gv=bi,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,pv=Qe}).apply(typeof va<"u"?va:typeof self<"u"?self:typeof window<"u"?window:{});const Qp="@firebase/firestore";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */const as=new Dc("@firebase/firestore");function Ni(){return as.logLevel}function oe(t,...e){if(as.logLevel<=Te.DEBUG){const n=e.map(Nh);as.debug(`Firestore (${ui}): ${t}`,...n)}}function Hn(t,...e){if(as.logLevel<=Te.ERROR){const n=e.map(Nh);as.error(`Firestore (${ui}): ${t}`,...n)}}function Xs(t,...e){if(as.logLevel<=Te.WARN){const n=e.map(Nh);as.warn(`Firestore (${ui}): ${t}`,...n)}}function Nh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${ui}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function Le(t,e){t||ge()}function _e(t,e){return t}/**
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
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ev{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class A1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class b1{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new Ev(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new vt(e)}}class R1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class S1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new R1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class C1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,oe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new C1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Tv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=k1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class it{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new it(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class me{constructor(e){this.timestamp=e}static fromTimestamp(e){return new me(e)}static min(){return new me(new it(0,0))}static max(){return new me(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class mo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends mo{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const O1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends mo{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return O1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new re(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new re(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new re(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ue.fromString(e))}static fromName(e){return new ue(Ue.fromString(e).popFirst(5))}static empty(){return new ue(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ue(e.slice()))}}function D1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=me.fromTimestamp(r===1e9?new it(n+1,0):new it(n,r));return new Cr(s,ue.empty(),e)}function N1(t){return new Cr(t.readTime,t.key,-1)}class Cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Cr(me.min(),ue.empty(),-1)}static max(){return new Cr(me.max(),ue.empty(),-1)}}function V1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class L1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function xo(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==M1)throw t;oe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function x1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Fo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Vh.oe=-1;function Uc(t){return t==null}function rc(t){return t===0&&1/t==-1/0}function F1(t){return typeof t=="number"&&Number.isInteger(t)&&!rc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Yp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ze{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}}class Ea{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pt{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Jp(this.data.getIterator())}getIteratorFrom(e){return new Jp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class Jp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new pt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iv("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const U1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(Le(!!t),typeof t=="string"){let e=0;const n=U1.exec(t);if(Le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Lh(t){const e=t.mapValue.fields.__previous_value__;return Mh(e)?Lh(e):e}function _o(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class B1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Mh(t)?4:$1(t)?9007199254740991:10:ge()}function Rn(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _o(t).isEqual(_o(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Pr(s.timestampValue),c=Pr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return cs(s.bytesValue).isEqual(cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ze(s.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(s.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ze(s.integerValue)===Ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ze(s.doubleValue),c=Ze(i.doubleValue);return o===c?rc(o)===rc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Yp(o)!==Yp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Rn(o[l],c[l])))return!1;return!0}(t,e);default:return ge()}}function vo(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function ei(t,e){if(t===e)return 0;const n=ls(t),r=ls(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ze(i.integerValue||i.doubleValue),l=Ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return Xp(t.timestampValue,e.timestampValue);case 4:return Xp(_o(t),_o(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,o){const c=cs(i),l=cs(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Ce(c[u],l[u]);if(d!==0)return d}return Ce(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Ce(Ze(i.latitude),Ze(o.latitude));return c!==0?c:Ce(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const d=ei(c[u],l[u]);if(d)return d}return Ce(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ta.mapValue&&o===Ta.mapValue)return 0;if(i===Ta.mapValue)return 1;if(o===Ta.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Ce(l[p],d[p]);if(g!==0)return g;const T=ei(c[l[p]],u[d[p]]);if(T!==0)return T}return Ce(l.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function Xp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=Pr(t),r=Pr(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function ti(t){return wu(t)}function wu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${wu(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function Zp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Iu(t){return!!t&&"integerValue"in t}function xh(t){return!!t&&"arrayValue"in t}function eg(t){return!!t&&"nullValue"in t}function tg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Oa(t){return!!t&&"mapValue"in t}function Ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ji(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ji(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Ji(this.value))}}function Av(t){const e=[];return gs(t.fields,(n,r)=>{const s=new ft([n]);if(Oa(r)){const i=Av(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
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
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,me.min(),me.min(),me.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,me.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,me.min(),me.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,me.min(),me.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class sc{constructor(e,n){this.position=e,this.inclusive=n}}function ng(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=ei(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ic{constructor(e,n="asc"){this.field=e,this.dir=n}}function j1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bv{}class et extends bv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H1(e,n,r):n==="array-contains"?new G1(e,r):n==="in"?new z1(e,r):n==="not-in"?new Q1(e,r):n==="array-contains-any"?new Y1(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new K1(e,r):new W1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ei(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends bv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pn(e,n)}matches(e){return Rv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rv(t){return t.op==="and"}function Sv(t){return q1(t)&&Rv(t)}function q1(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function Au(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+ti(t.value);if(Sv(t))return t.filters.map(e=>Au(e)).join(",");{const e=t.filters.map(n=>Au(n)).join(",");return`${t.op}(${e})`}}function Cv(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Cv(o,s.filters[c]),!0):!1}(t,e):void ge()}function Pv(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${ti(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(Pv).join(" ,")+"}"}(t):"Filter"}class H1 extends et{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class K1 extends et{constructor(e,n){super(e,"in",n),this.keys=kv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class W1 extends et{constructor(e,n){super(e,"not-in",n),this.keys=kv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class G1 extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xh(n)&&vo(n.arrayValue,this.value)}}class z1 extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vo(this.value.arrayValue,n)}}class Q1 extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(vo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vo(this.value.arrayValue,n)}}class Y1 extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vo(this.value.arrayValue,r))}}/**
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
 */class J1{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function sg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new J1(t,e,n,r,s,i,o)}function Fh(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Au(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ti(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ti(r)).join(",")),e.ue=n}return e.ue}function Uh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!j1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Cv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!rg(t.startAt,e.startAt)&&rg(t.endAt,e.endAt)}function bu(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Uo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function X1(t,e,n,r,s,i,o,c){return new Uo(t,e,n,r,s,i,o,c)}function Bh(t){return new Uo(t)}function ig(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ov(t){return t.collectionGroup!==null}function Xi(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new pt(ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ic(i,r))}),n.has(ft.keyField().canonicalString())||e.ce.push(new ic(ft.keyField(),r))}return e.ce}function wn(t){const e=_e(t);return e.le||(e.le=Z1(e,Xi(t))),e.le}function Z1(t,e){if(t.limitType==="F")return sg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ic(s.field,i)});const n=t.endAt?new sc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new sc(t.startAt.position,t.startAt.inclusive):null;return sg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ru(t,e){const n=t.filters.concat([e]);return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Su(t,e,n){return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return Uh(wn(t),wn(e))&&t.limitType===e.limitType}function Dv(t){return`${Fh(wn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Pv(s)).join(", ")}]`),Uc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ti(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ti(s)).join(",")),`Target(${r})`}(wn(t))}; limitType=${t.limitType})`}function $c(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=ng(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Xi(r),s)||r.endAt&&!function(o,c,l){const u=ng(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Xi(r),s))}(t,e)}function ek(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Nv(t){return(e,n)=>{let r=!1;for(const s of Xi(t)){const i=tk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function tk(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ei(l,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wv(this.inner)}size(){return this.innerSize}}/**
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
 */const nk=new ze(ue.comparator);function Kn(){return nk}const Vv=new ze(ue.comparator);function Ui(...t){let e=Vv;for(const n of t)e=e.insert(n.key,n);return e}function Mv(t){let e=Vv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return Zi()}function Lv(){return Zi()}function Zi(){return new hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const rk=new ze(ue.comparator),sk=new pt(ue.comparator);function ve(...t){let e=sk;for(const n of t)e=e.add(n);return e}const ik=new pt(Ce);function ok(){return ik}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rc(e)?"-0":e}}function Fv(t){return{integerValue:""+t}}function ak(t,e){return F1(e)?Fv(e):xv(t,e)}/**
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
 */class jc{constructor(){this._=void 0}}function ck(t,e,n){return t instanceof oc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Mh(i)&&(i=Lh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Eo?Bv(t,e):t instanceof To?$v(t,e):function(s,i){const o=Uv(s,i),c=og(o)+og(s.Pe);return Iu(o)&&Iu(s.Pe)?Fv(c):xv(s.serializer,c)}(t,e)}function lk(t,e,n){return t instanceof Eo?Bv(t,e):t instanceof To?$v(t,e):n}function Uv(t,e){return t instanceof ac?function(r){return Iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class oc extends jc{}class Eo extends jc{constructor(e){super(),this.elements=e}}function Bv(t,e){const n=jv(e);for(const r of t.elements)n.some(s=>Rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class To extends jc{constructor(e){super(),this.elements=e}}function $v(t,e){let n=jv(e);for(const r of t.elements)n=n.filter(s=>!Rn(s,r));return{arrayValue:{values:n}}}class ac extends jc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function og(t){return Ze(t.integerValue||t.doubleValue)}function jv(t){return xh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Eo&&s instanceof Eo||r instanceof To&&s instanceof To?Zs(r.elements,s.elements,Rn):r instanceof ac&&s instanceof ac?Rn(r.Pe,s.Pe):r instanceof oc&&s instanceof oc}(t.transform,e.transform)}class hk{constructor(e,n){this.version=e,this.transformResults=n}}class un{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new un}static exists(e){return new un(void 0,e)}static updateTime(e){return new un(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function qv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $h(t.key,un.none()):new Bo(t.key,t.data,un.none());{const n=t.data,r=Dt.empty();let s=new pt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Mr(t.key,r,new Ht(s.toArray()),un.none())}}function dk(t,e,n){t instanceof Bo?function(s,i,o){const c=s.value.clone(),l=cg(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,o){if(!Da(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=cg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Hv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function eo(t,e,n,r){return t instanceof Bo?function(i,o,c,l){if(!Da(i.precondition,o))return c;const u=i.value.clone(),d=lg(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,o,c,l){if(!Da(i.precondition,o))return c;const u=lg(i.fieldTransforms,l,o),d=o.data;return d.setAll(Hv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Da(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function fk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Uv(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function ag(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zs(r,s,(i,o)=>uk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends qc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends qc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cg(t,e,n){const r=new Map;Le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,lk(o,c,n[s]))}return r}function lg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ck(i,o,e))}return r}class $h extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pk extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Lv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=qv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>ag(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>ag(n,r))}}class jh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Le(e.mutations.length===r.length);let s=function(){return rk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jh(e,n,r,s)}}/**
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
 */class mk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _k{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,we;function yk(t){switch(t){default:return ge();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Kv(t){if(t===void 0)return Hn("GRPC error has no .code"),q.UNKNOWN;switch(t){case Xe.OK:return q.OK;case Xe.CANCELLED:return q.CANCELLED;case Xe.UNKNOWN:return q.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return q.INTERNAL;case Xe.UNAVAILABLE:return q.UNAVAILABLE;case Xe.UNAUTHENTICATED:return q.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case Xe.NOT_FOUND:return q.NOT_FOUND;case Xe.ALREADY_EXISTS:return q.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return q.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case Xe.ABORTED:return q.ABORTED;case Xe.OUT_OF_RANGE:return q.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return q.UNIMPLEMENTED;case Xe.DATA_LOSS:return q.DATA_LOSS;default:return ge()}}(we=Xe||(Xe={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vk(){return new TextEncoder}/**
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
 */const Ek=new Jr([4294967295,4294967295],0);function ug(t){const e=vk().encode(t),n=new fv;return n.update(e),new Uint8Array(n.digest())}function hg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class qh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Bi(`Invalid padding: ${n}`);if(r<0)throw new Bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Jr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(Ek)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ug(e),[r,s]=hg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=ug(e),[r,s]=hg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$o.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hc(me.min(),s,new ze(Ce),Kn(),ve())}}class $o{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $o(r,n,ve(),ve(),ve())}}/**
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
 */class Na{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Wv{constructor(e,n){this.targetId=e,this.me=n}}class Gv{constructor(e,n,r=It.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class dg{constructor(){this.fe=0,this.ge=pg(),this.pe=It.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ve(),n=ve(),r=ve();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new $o(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=pg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Tk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Kn(),this.qe=fg(),this.Qe=new ze(Ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(bu(i))if(r===0){const o=new ue(i.path);this.Ue(n,o,Et.newNoDocument(o,me.min()))}else Le(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=cs(r).toUint8Array()}catch(l){if(l instanceof Iv)return Xs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new qh(o,s,i)}catch(l){return Xs(l instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&bu(c.target)){const l=new ue(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Et.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ve();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Hc(e,n,this.Qe,this.ke,r);return this.ke=Kn(),this.qe=fg(),this.Qe=new ze(Ce),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new dg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new pt(Ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new dg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function fg(){return new ze(ue.comparator)}function pg(){return new ze(ue.comparator)}const wk={asc:"ASCENDING",desc:"DESCENDING"},Ik={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ak={and:"AND",or:"OR"};class bk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cu(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rk(t,e){return cc(t,e.toTimestamp())}function In(t){return Le(!!t),me.fromTimestamp(function(n){const r=Pr(n);return new it(r.seconds,r.nanos)}(t))}function Hh(t,e){return Pu(t,e).canonicalString()}function Pu(t,e){const n=function(s){return new Ue(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Qv(t){const e=Ue.fromString(t);return Le(eE(e)),e}function ku(t,e){return Hh(t.databaseId,e.path)}function xl(t,e){const n=Qv(e);if(n.get(1)!==t.databaseId.projectId)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(Jv(n))}function Yv(t,e){return Hh(t.databaseId,e)}function Sk(t){const e=Qv(t);return e.length===4?Ue.emptyPath():Jv(e)}function Ou(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Jv(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gg(t,e,n){return{name:ku(t,e),fields:n.value.mapValue.fields}}function Ck(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Le(d===void 0||typeof d=="string"),It.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),It.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?q.UNKNOWN:Kv(u.code);return new re(d,u.message||"")}(o);n=new Gv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=xl(t,r.document.name),i=In(r.document.updateTime),o=r.document.createTime?In(r.document.createTime):me.min(),c=new Dt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Na(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=xl(t,r.document),i=r.readTime?In(r.readTime):me.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Na([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=xl(t,r.document),i=r.removedTargetIds||[];n=new Na([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new _k(s,i),c=r.targetId;n=new Wv(c,o)}}return n}function Pk(t,e){let n;if(e instanceof Bo)n={update:gg(t,e.key,e.value)};else if(e instanceof $h)n={delete:ku(t,e.key)};else if(e instanceof Mr)n={update:gg(t,e.key,e.data),updateMask:Fk(e.fieldMask)};else{if(!(e instanceof pk))return ge();n={verify:ku(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof oc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof To)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ac)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Rk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function kk(t,e){return t&&t.length>0?(Le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?In(s.updateTime):In(i);return o.isEqual(me.min())&&(o=In(i)),new hk(o,s.transformResults||[])}(n,e))):[]}function Ok(t,e){return{documents:[Yv(t,e.path)]}}function Dk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Yv(t,s);const i=function(u){if(u.length!==0)return Zv(pn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(g){return{field:Ss(g.field),direction:Mk(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Cu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function Nk(t){let e=Sk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Le(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Xv(p);return g instanceof pn&&Sv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new ic(Cs(S.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Uc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,T=p.values||[];return new sc(T,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,T=p.values||[];return new sc(T,g)}(n.endAt)),X1(e,s,o,i,c,"F",l,u)}function Vk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Xv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return et.create(Cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>Xv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function Mk(t){return wk[t]}function Lk(t){return Ik[t]}function xk(t){return Ak[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Cs(t){return ft.fromServerFormat(t.fieldPath)}function Zv(t){return t instanceof et?function(n){if(n.op==="=="){if(tg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(eg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(eg(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:Lk(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>Zv(s));return r.length===1?r[0]:{compositeFilter:{op:xk(n.op),filters:r}}}(t):ge()}function Fk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function eE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,s,i=me.min(),o=me.min(),c=It.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Uk{constructor(e){this.ct=e}}function Bk(t){const e=Nk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Su(e,e.limit,"L"):e}/**
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
 */class $k{constructor(){this._n=new jk}addToCollectionParentIndex(e,n){return this._n.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Cr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Cr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class jk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new pt(Ue.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pt(Ue.comparator)).toArray()}}/**
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
 */class ni{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ni(0)}static Ln(){return new ni(-1)}}/**
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
 */class qk{constructor(){this.changes=new hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Hk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Kk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&eo(r.mutation,s,Ht.empty(),it.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ui();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Kn();const o=Zi(),c=function(){return Zi()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Mr)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),eo(d.mutation,u,d.mutation.getFieldMask(),it.now())):o.set(u.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return c.set(u,new Hk(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Zi();let s=new ze((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Ht.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=Lv();d.forEach(g=>{if(!i.has(g)){const T=qv(n.get(g),r.get(g));T!==null&&p.set(g,T),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ov(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(Wr());let c=-1,l=i;return o.next(u=>K.forEach(u,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?K.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(d=>({batchId:c,changes:Mv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=Ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ui();return this.indexManager.getCollectionParents(e,i).next(c=>K.forEach(c,l=>{const u=function(p,g){return new Uo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Et.newInvalidDocument(d)))});let c=Ui();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&eo(d.mutation,u,Ht.empty(),it.now()),$c(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return K.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:In(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Bk(s.bundledQuery),readTime:In(s.readTime)}}(n)),K.resolve()}}/**
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
 */class Gk{constructor(){this.overlays=new ze(ue.comparator),this.hr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new ue(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Wr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Wr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=s)););return K.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mk(n,r));let i=this.hr.get(n);i===void 0&&(i=ve(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Kh{constructor(){this.Pr=new pt(ct.Ir),this.Tr=new pt(ct.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ct(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ue(new Ue([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ue(new Ue([])),r=new ct(n,e),s=new ct(n,e+1);let i=ve();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ue.comparator(e.key,n.key)||Ce(e.pr,n.pr)}static Er(e,n){return Ce(e.pr,n.pr)||ue.comparator(e.key,n.key)}}/**
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
 */class zk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new pt(ct.Ir)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new ct(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Ce);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),K.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ue(i),0);let c=new pt(Ce);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),K.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Le(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return K.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ct(n,0),s=this.wr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Qk{constructor(e){this.vr=e,this.docs=function(){return new ze(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Kn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Kn();const o=n.path,c=new ue(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||V1(N1(d),r)<=0||(s.has(d.key)||$c(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Fr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Yk(this)}getSize(e){return K.resolve(this.size)}}class Yk extends qk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Jk{constructor(e){this.persistence=e,this.Mr=new hi(n=>Fh(n),Uh),this.lastRemoteSnapshotVersion=me.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Kh,this.targetCount=0,this.Lr=ni.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),K.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ni(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.qn(n),K.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Nr.containsKey(n))}}/**
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
 */class Xk{constructor(e,n){this.Br={},this.overlays={},this.kr=new Vh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Jk(this),this.indexManager=new $k,this.remoteDocumentCache=function(s){return new Qk(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Uk(n),this.$r=new Wk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Gk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new zk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){oe("MemoryPersistence","Starting transaction:",e);const s=new Zk(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Zk extends L1{constructor(e){super(),this.currentSequenceNumber=e}}class Wh{constructor(e){this.persistence=e,this.zr=new Kh,this.jr=null}static Hr(e){return new Wh(e)}get Jr(){if(this.jr)return this.jr;throw ge()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),K.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Jr,r=>{const s=ue.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,me.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return K.or([()=>K.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Gh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Gh(e,n.fromCache,r,s)}}/**
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
 */class eO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Hb()?8:x1(gt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new eO;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ni()<=Te.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),K.resolve()):(Ni()<=Te.DEBUG&&oe("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ni()<=Te.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,wn(n))):K.resolve())}ji(e,n){if(ig(n))return K.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Su(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Su(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return ig(n)||s.isEqual(me.min())?K.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?K.resolve(null):(Ni()<=Te.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.es(e,o,n,D1(s,-1)).next(c=>c))})}Zi(e,n){let r=new pt(Nv(e));return n.forEach((s,i)=>{$c(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ni()<=Te.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.zi.getDocumentsMatchingQuery(e,n,Cr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ze(Ce),this.rs=new hi(i=>Fh(i),Uh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function rO(t,e,n,r){return new nO(t,e,n,r)}async function tE(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function sO(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const p=u.batch,g=p.keys();let T=K.resolve();return g.forEach(S=>{T=T.next(()=>d.getEntry(l,S)).next(M=>{const V=u.docVersions.get(S);Le(V!==null),M.version.compareTo(V)<0&&(p.applyToRemoteDocument(M,u),M.isValidDocument()&&(M.setReadTime(u.commitVersion),d.addEntry(M)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ve();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nE(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function iO(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,d.addedDocuments,p)));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(It.EMPTY_BYTE_STRING,me.min()).withLastLimboFreeSnapshotVersion(me.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(p,T),function(M,V,F){return M.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,T,d)&&c.push(n.Qr.updateTargetData(i,T))});let l=Kn(),u=ve();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(oO(i,o,e.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!r.isEqual(me.min())){const d=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return K.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function oO(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Kn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(me.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):oe("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function aO(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function cO(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Du(t,e,n){const r=_e(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fo(o))throw o;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function mg(t,e,n){const r=_e(t);let s=me.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const p=_e(l),g=p.rs.get(d);return g!==void 0?K.resolve(p.ns.get(g)):p.Qr.getTargetData(u,d)}(r,o,wn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:me.min(),n?i:ve())).next(c=>(lO(r,ek(e),c),{documents:c,hs:i})))}function lO(t,e,n){let r=t.ss.get(e)||me.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class _g{constructor(){this.activeTargetIds=ok()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uO{constructor(){this.no=new _g,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new _g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class hO{io(e){}shutdown(){}}/**
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
 */class yg{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wa=null;function Fl(){return wa===null?wa=function(){return 268435456+Math.round(2147483648*Math.random())}():wa++,"0x"+wa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const yt="WebChannelConnection";class pO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=Fl(),l=this.vo(n,r.toUriEncodedString());oe("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(d=>(oe("RestConnection",`Received RPC '${n}' ${c}: `,d),d),d=>{throw Xs("RestConnection",`RPC '${n}' ${c} failed with error: `,d,"url: ",l,"request:",s),d})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ui}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=dO[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=Fl();return new Promise((o,c)=>{const l=new pv;l.setWithCredentials(!0),l.listenOnce(mv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ka.NO_ERROR:const d=l.getResponseJson();oe(yt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case ka.TIMEOUT:oe(yt,`RPC '${e}' ${i} timed out`),c(new re(q.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const p=l.getStatus();if(oe(yt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const S=function(V){const F=V.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(F)>=0?F:q.UNKNOWN}(T.status);c(new re(S,T.message))}else c(new re(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new re(q.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{oe(yt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);oe(yt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=Fl(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vv(),c=yv(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new gv({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");oe(yt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);let g=!1,T=!1;const S=new fO({lo:V=>{T?oe(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(g||(oe(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),oe(yt,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},ho:()=>p.close()}),M=(V,F,O)=>{V.listen(F,C=>{try{O(C)}catch(P){setTimeout(()=>{throw P},0)}})};return M(p,Fi.EventType.OPEN,()=>{T||(oe(yt,`RPC '${e}' stream ${s} transport opened.`),S.mo())}),M(p,Fi.EventType.CLOSE,()=>{T||(T=!0,oe(yt,`RPC '${e}' stream ${s} transport closed`),S.po())}),M(p,Fi.EventType.ERROR,V=>{T||(T=!0,Xs(yt,`RPC '${e}' stream ${s} transport errored:`,V),S.po(new re(q.UNAVAILABLE,"The operation could not be completed")))}),M(p,Fi.EventType.MESSAGE,V=>{var F;if(!T){const O=V.data[0];Le(!!O);const C=O,P=C.error||((F=C[0])===null||F===void 0?void 0:F.error);if(P){oe(yt,`RPC '${e}' stream ${s} received error:`,P);const N=P.status;let k=function(m){const y=Xe[m];if(y!==void 0)return Kv(y)}(N),I=P.message;k===void 0&&(k=q.INTERNAL,I="Unknown error status: "+N+" with message "+P.message),T=!0,S.po(new re(k,I)),p.close()}else oe(yt,`RPC '${e}' stream ${s} received:`,O),S.yo(O)}}),M(c,_v.STAT_EVENT,V=>{V.stat===Tu.PROXY?oe(yt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Tu.NOPROXY&&oe(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function Ul(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(t){return new bk(t,!0)}/**
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
 */class rE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&oe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class sE{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new rE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new re(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gO extends sE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Ck(this.serializer,e),r=function(i){if(!("targetChange"in i))return me.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?me.min():o.readTime?In(o.readTime):me.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Ou(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=bu(l)?{documents:Ok(i,l)}:{query:Dk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=zv(i,o.resumeToken);const u=Cu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(me.min())>0){c.readTime=cc(i,o.snapshotVersion.toTimestamp());const u=Cu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=Vk(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Ou(this.serializer),n.removeTarget=e,this.i_(n)}}class mO extends sE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=kk(e.writeResults,e.commitTime),r=In(e.commitTime);return this.listener.A_(r,n)}return Le(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Ou(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Pk(this.serializer,r))};this.i_(n)}}/**
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
 */class _O extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,Pu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(q.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Pu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(q.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class yO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Hn(n),this.y_=!1):oe("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class vO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{ms(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.M_.add(4),await jo(u),u.N_.set("Unknown"),u.M_.delete(4),await Wc(u)}(this))})}),this.N_=new yO(r,s)}}async function Wc(t){if(ms(t))for(const e of t.x_)await e(!0)}async function jo(t){for(const e of t.x_)await e(!1)}function iE(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Jh(n)?Yh(n):di(n).Xo()&&Qh(n,e))}function zh(t,e){const n=_e(t),r=di(n);n.F_.delete(e),r.Xo()&&oE(n,e),n.F_.size===0&&(r.Xo()?r.n_():ms(n)&&n.N_.set("Unknown"))}function Qh(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(me.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}di(t).P_(e)}function oE(t,e){t.L_.xe(e),di(t).I_(e)}function Yh(t){t.L_=new Tk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),di(t).start(),t.N_.w_()}function Jh(t){return ms(t)&&!di(t).Zo()&&t.F_.size>0}function ms(t){return _e(t).M_.size===0}function aE(t){t.L_=void 0}async function EO(t){t.N_.set("Online")}async function TO(t){t.F_.forEach((e,n)=>{Qh(t,e)})}async function wO(t,e){aE(t),Jh(t)?(t.N_.D_(e),Yh(t)):t.N_.set("Unknown")}async function IO(t,e,n){if(t.N_.set("Online"),e instanceof Gv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await lc(t,r)}else if(e instanceof Na?t.L_.Ke(e):e instanceof Wv?t.L_.He(e):t.L_.We(e),!n.isEqual(me.min()))try{const r=await nE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.F_.get(u);d&&i.F_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=i.F_.get(l);if(!d)return;i.F_.set(l,d.withResumeToken(It.EMPTY_BYTE_STRING,d.snapshotVersion)),oE(i,l);const p=new _r(d.target,l,u,d.sequenceNumber);Qh(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){oe("RemoteStore","Failed to raise snapshot:",r),await lc(t,r)}}async function lc(t,e,n){if(!Fo(e))throw e;t.M_.add(1),await jo(t),t.N_.set("Offline"),n||(n=()=>nE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Wc(t)})}function cE(t,e){return e().catch(n=>lc(t,n,e))}async function Gc(t){const e=_e(t),n=kr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;AO(e);)try{const s=await aO(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,bO(e,s)}catch(s){await lc(e,s)}lE(e)&&uE(e)}function AO(t){return ms(t)&&t.v_.length<10}function bO(t,e){t.v_.push(e);const n=kr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function lE(t){return ms(t)&&!kr(t).Zo()&&t.v_.length>0}function uE(t){kr(t).start()}async function RO(t){kr(t).V_()}async function SO(t){const e=kr(t);for(const n of t.v_)e.d_(n.mutations)}async function CO(t,e,n){const r=t.v_.shift(),s=jh.from(r,e,n);await cE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Gc(t)}async function PO(t,e){e&&kr(t).E_&&await async function(r,s){if(function(o){return yk(o)&&o!==q.ABORTED}(s.code)){const i=r.v_.shift();kr(r).t_(),await cE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Gc(r)}}(t,e),lE(t)&&uE(t)}async function vg(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const r=ms(n);n.M_.add(3),await jo(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Wc(n)}async function kO(t,e){const n=_e(t);e?(n.M_.delete(2),await Wc(n)):e||(n.M_.add(2),await jo(n),n.N_.set("Unknown"))}function di(t){return t.B_||(t.B_=function(n,r,s){const i=_e(n);return i.f_(),new gO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:EO.bind(null,t),To:TO.bind(null,t),Ao:wO.bind(null,t),h_:IO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Jh(t)?Yh(t):t.N_.set("Unknown")):(await t.B_.stop(),aE(t))})),t.B_}function kr(t){return t.k_||(t.k_=function(n,r,s){const i=_e(n);return i.f_(),new mO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:RO.bind(null,t),Ao:PO.bind(null,t),R_:SO.bind(null,t),A_:CO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Gc(t)):(await t.k_.stop(),t.v_.length>0&&(oe("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Xh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Xh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),Fo(t))return new re(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=Ui(),this.sortedSet=new ze(this.comparator)}static emptySet(e){return new Hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Eg{constructor(){this.q_=new ze(ue.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ge():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ri{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ri(e,n,Hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class OO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class DO{constructor(){this.queries=new hi(e=>Dv(e),Bc),this.onlineState="Unknown",this.z_=new Set}}async function hE(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new OO,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Zh(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&ed(n)}async function dE(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NO(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&ed(n)}function VO(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function ed(t){t.z_.forEach(e=>{e.next()})}var Nu,Tg;(Tg=Nu||(Nu={})).J_="default",Tg.Cache="cache";class fE{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ri(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ri.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Nu.Cache}}/**
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
 */class pE{constructor(e){this.key=e}}class gE{constructor(e){this.key=e}}class MO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ve(),this.mutatedKeys=ve(),this.Ia=Nv(e),this.Ta=new Hs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Eg,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),T=$c(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),M=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let V=!1;g&&T?g.data.isEqual(T.data)?S!==M&&(r.track({type:3,doc:T}),V=!0):this.Ra(g,T)||(r.track({type:2,doc:T}),V=!0,(l&&this.Ia(T,l)>0||u&&this.Ia(T,u)<0)&&(c=!0)):!g&&T?(r.track({type:0,doc:T}),V=!0):g&&!T&&(r.track({type:1,doc:g}),V=!0,(l||u)&&(c=!0)),V&&(T?(o=o.add(T),i=M?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,p)=>function(T,S){const M=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return M(T)-M(S)}(d.type,p.type)||this.Ia(d.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new ri(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Eg,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ve(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new gE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new pE(r))}),n}pa(e){this.la=e.hs,this.Pa=ve();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ri.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class LO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xO{constructor(e){this.key=e,this.wa=!1}}class FO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new hi(c=>Dv(c),Bc),this.Da=new Map,this.Ca=new Set,this.va=new ze(ue.comparator),this.Fa=new Map,this.Ma=new Kh,this.xa={},this.Oa=new Map,this.Na=ni.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function UO(t,e,n=!0){const r=TE(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await mE(r,e,n,!0),s}async function BO(t,e){const n=TE(t);await mE(n,e,!0,!1)}async function mE(t,e,n,r){const s=await cO(t.localStore,wn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await $O(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&iE(t.remoteStore,s),c}async function $O(t,e,n,r,s){t.Ba=(p,g,T)=>async function(M,V,F,O){let C=V.view.da(F);C.Xi&&(C=await mg(M.localStore,V.query,!1).then(({documents:I})=>V.view.da(I,C)));const P=O&&O.targetChanges.get(V.targetId),N=O&&O.targetMismatches.get(V.targetId)!=null,k=V.view.applyChanges(C,M.isPrimaryClient,P,N);return Ig(M,V.targetId,k.fa),k.snapshot}(t,p,g,T);const i=await mg(t.localStore,e,!0),o=new MO(e,i.hs),c=o.da(i.documents),l=$o.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Ig(t,n,u.fa);const d=new LO(e,n,o);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function jO(t,e,n){const r=_e(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Bc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Du(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&zh(r.remoteStore,s.targetId),Vu(r,s.targetId)}).catch(xo)):(Vu(r,s.targetId),await Du(r.localStore,s.targetId,!0))}async function qO(t,e){const n=_e(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),zh(n.remoteStore,r.targetId))}async function HO(t,e,n){const r=JO(t);try{const s=await function(o,c){const l=_e(o),u=it.now(),d=c.reduce((T,S)=>T.add(S.key),ve());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=Kn(),M=ve();return l.os.getEntries(T,d).next(V=>{S=V,S.forEach((F,O)=>{O.isValidDocument()||(M=M.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(T,S)).next(V=>{p=V;const F=[];for(const O of c){const C=fk(O,p.get(O.key).overlayedDocument);C!=null&&F.push(new Mr(O.key,C,Av(C.value.mapValue),un.exists(!0)))}return l.mutationQueue.addMutationBatch(T,u,F,c)}).next(V=>{g=V;const F=V.applyToLocalDocumentSet(p,M);return l.documentOverlayCache.saveOverlays(T,V.batchId,F)})}).then(()=>({batchId:g.batchId,changes:Mv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new ze(Ce)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await qo(r,s.changes),await Gc(r.remoteStore)}catch(s){const i=Zh(s,"Failed to persist write");n.reject(i)}}async function _E(t,e){const n=_e(t);try{const r=await iO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(Le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?Le(o.wa):s.removedDocuments.size>0&&(Le(o.wa),o.wa=!1))}),await qo(n,r,e)}catch(r){await xo(r)}}function wg(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((d,p)=>{for(const g of p.U_)g.j_(c)&&(u=!0)}),u&&ed(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KO(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new ze(ue.comparator);o=o.insert(i,Et.newNoDocument(i,me.min()));const c=ve().add(i),l=new Hc(me.min(),new Map,new ze(Ce),o,c);await _E(r,l),r.va=r.va.remove(i),r.Fa.delete(e),td(r)}else await Du(r.localStore,e,!1).then(()=>Vu(r,e,n)).catch(xo)}async function WO(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await sO(n.localStore,e);vE(n,r,null),yE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qo(n,s)}catch(s){await xo(s)}}async function GO(t,e,n){const r=_e(t);try{const s=await function(o,c){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(Le(p!==null),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);vE(r,e,n),yE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qo(r,s)}catch(s){await xo(s)}}function yE(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function vE(t,e,n){const r=_e(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Vu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||EE(t,r)})}function EE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(zh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),td(t))}function Ig(t,e,n){for(const r of n)r instanceof pE?(t.Ma.addReference(r.key,e),zO(t,r)):r instanceof gE?(oe("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||EE(t,r.key)):ge()}function zO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(oe("SyncEngine","New document in limbo: "+n),t.Ca.add(r),td(t))}function td(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ue(Ue.fromString(e)),r=t.Na.next();t.Fa.set(r,new xO(n)),t.va=t.va.insert(n,r),iE(t.remoteStore,new _r(wn(Bh(n.path)),r,"TargetPurposeLimboResolution",Vh.oe))}}async function qo(t,e,n){const r=_e(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const d=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Gh.Ki(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const d=_e(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(u,g=>K.forEach(g.qi,T=>d.persistence.referenceDelegate.addReference(p,g.targetId,T)).next(()=>K.forEach(g.Qi,T=>d.persistence.referenceDelegate.removeReference(p,g.targetId,T)))))}catch(p){if(!Fo(p))throw p;oe("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const T=d.ns.get(g),S=T.snapshotVersion,M=T.withLastLimboFreeSnapshotVersion(S);d.ns=d.ns.insert(g,M)}}}(r.localStore,i))}async function QO(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const r=await tE(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new re(q.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qo(n,r.us)}}function YO(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return ve().add(r.key);{let s=ve();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function TE(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_E.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KO.bind(null,e),e.Sa.h_=NO.bind(null,e.eventManager),e.Sa.ka=VO.bind(null,e.eventManager),e}function JO(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GO.bind(null,e),e}class Ag{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return rO(this.persistence,new tO,e.initialUser,this.serializer)}createPersistence(e){return new Xk(Wh.Hr,this.serializer)}createSharedClientState(e){return new uO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class XO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QO.bind(null,this.syncEngine),await kO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DO}()}createDatastore(e){const n=Kc(e.databaseInfo.databaseId),r=function(i){return new pO(i)}(e.databaseInfo);return function(i,o,c,l){return new _O(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new vO(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>wg(this.syncEngine,n,0),function(){return yg.D()?new yg:new hO}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,d){const p=new FO(s,i,o,c,l,u);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=_e(r);oe("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await jo(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class ZO{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=Tv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{oe("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(oe("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bl(t,e){t.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tD(t);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>vg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>vg(e.remoteStore,s)),t._onlineComponents=e}function eD(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function tD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!eD(n))throw n;Xs("Error using user provided cache. Falling back to memory cache: "+n),await Bl(t,new Ag)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Bl(t,new Ag);return t._offlineComponents}async function IE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await bg(t,t._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await bg(t,new XO))),t._onlineComponents}function nD(t){return IE(t).then(e=>e.syncEngine)}async function AE(t){const e=await IE(t),n=e.eventManager;return n.onListen=UO.bind(null,e.syncEngine),n.onUnlisten=jO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qO.bind(null,e.syncEngine),n}function rD(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new wE({next:g=>{o.enqueueAndForget(()=>dE(i,p));const T=g.docs.has(c);!T&&g.fromCache?u.reject(new re(q.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&g.fromCache&&l&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new fE(Bh(c.path),d,{includeMetadataChanges:!0,ra:!0});return hE(i,p)}(await AE(t),t.asyncQueue,e,n,r)),r.promise}function sD(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const d=new wE({next:g=>{o.enqueueAndForget(()=>dE(i,p)),g.fromCache&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new fE(c,d,{includeMetadataChanges:!0,ra:!0});return hE(i,p)}(await AE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Rg=new Map;/**
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
 */function RE(t,e,n){if(!n)throw new re(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iD(t,e,n,r){if(e===!0&&r===!0)throw new re(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sg(t){if(!ue.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cg(t){if(ue.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function Wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zc(t);throw new re(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new I1;switch(r.type){case"firstParty":return new S1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Rg.get(n);r&&(oe("ComponentProvider","Removing Datastore"),Rg.delete(n),r.terminate())}(this),Promise.resolve()}}function oD(t,e,n,r={}){var s;const i=(t=Wn(t,Qc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Xs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=vt.MOCK_USER;else{c=Ub(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new vt(u)}t._authCredentials=new A1(new Ev(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class Lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class Ir extends fi{constructor(e,n,r){super(e,n,Bh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new ue(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function Nn(t,e,...n){if(t=tt(t),RE("collection","path",e),t instanceof Qc){const r=Ue.fromString(e,...n);return Cg(r),new Ir(t,null,r)}{if(!(t instanceof Lt||t instanceof Ir))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Cg(r),new Ir(t.firestore,null,r)}}function Xr(t,e,...n){if(t=tt(t),arguments.length===1&&(e=Tv.newId()),RE("doc","path",e),t instanceof Qc){const r=Ue.fromString(e,...n);return Sg(r),new Lt(t,null,new ue(r))}{if(!(t instanceof Lt||t instanceof Ir))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return Sg(r),new Lt(t.firestore,t instanceof Ir?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new rE(this,"async_queue_retry"),this.hu=()=>{const n=Ul();n&&oe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Ul();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Ul();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new $n;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Fo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Xh.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ge()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class pi extends Qc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new aD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||SE(this),this._firestoreClient.terminate()}}function cD(t,e){const n=typeof t=="object"?t:gh(),r=typeof t=="string"?t:"(default)",s=fs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xb("firestore");i&&oD(s,...i)}return s}function nd(t){return t._firestoreClient||SE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function SE(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,d){return new B1(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,bE(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new ZO(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this._byteString=e}static fromBase64String(e){try{return new si(It.fromBase64String(e))}catch(n){throw new re(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new si(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this._methodName=e}}/**
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
 */class sd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
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
 */const lD=/^__.*__$/;class uD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class CE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function PE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class id{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new id(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return uc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(PE(this.fu)&&lD.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class hD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kc(e)}Fu(e,n,r,s=!1){return new id({fu:e,methodName:n,vu:r,path:ft.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function od(t){const e=t._freezeSettings(),n=Kc(t._databaseId);return new hD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dD(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);ad("Data must be an object, but it was:",o,r);const c=kE(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=Mu(e,p,n);if(!o.contains(g))throw new re(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);DE(d,g)||d.push(g)}l=new Ht(d),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new uD(new Dt(c),l,u)}class Jc extends rd{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jc}}function fD(t,e,n,r){const s=t.Fu(1,e,n);ad("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();gs(r,(l,u)=>{const d=cd(e,l,n);u=tt(u);const p=s.Su(d);if(u instanceof Jc)i.push(d);else{const g=Ho(u,p);g!=null&&(i.push(d),o.set(d,g))}});const c=new Ht(i);return new CE(o,c,s.fieldTransforms)}function pD(t,e,n,r,s,i){const o=t.Fu(1,e,n),c=[Mu(e,r,n)],l=[s];if(i.length%2!=0)throw new re(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Mu(e,i[g])),l.push(i[g+1]);const u=[],d=Dt.empty();for(let g=c.length-1;g>=0;--g)if(!DE(u,c[g])){const T=c[g];let S=l[g];S=tt(S);const M=o.Su(T);if(S instanceof Jc)u.push(T);else{const V=Ho(S,M);V!=null&&(u.push(T),d.set(T,V))}}const p=new Ht(u);return new CE(d,p,o.fieldTransforms)}function gD(t,e,n,r=!1){return Ho(n,t.Fu(r?4:3,e))}function Ho(t,e){if(OE(t=tt(t)))return ad("Unsupported field value:",e,t),kE(t,e);if(t instanceof rd)return function(r,s){if(!PE(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Ho(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ak(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=it.fromDate(r);return{timestampValue:cc(s.serializer,i)}}if(r instanceof it){const i=new it(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cc(s.serializer,i)}}if(r instanceof sd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof si)return{bytesValue:zv(s.serializer,r._byteString)};if(r instanceof Lt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${zc(r)}`)}(t,e)}function kE(t,e){const n={};return wv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,(r,s)=>{const i=Ho(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function OE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof it||t instanceof sd||t instanceof si||t instanceof Lt||t instanceof rd)}function ad(t,e,n){if(!OE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=zc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Mu(t,e,n){if((e=tt(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return cd(t,e);throw uc("Field path arguments must be of type string or ",t,!1,void 0,n)}const mD=new RegExp("[~\\*/\\[\\]]");function cd(t,e,n){if(e.search(mD)>=0)throw uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yc(...e.split("."))._internalPath}catch{throw uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new re(q.INVALID_ARGUMENT,c+t+l)}function DE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _D(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ld("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _D extends NE{data(){return super.data()}}function ld(t,e){return typeof e=="string"?cd(t,e):e instanceof Yc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ud{}class vD extends ud{}function yr(t,e,...n){let r=[];e instanceof ud&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof hd).length,c=i.filter(l=>l instanceof Xc).length;if(o>1||o>0&&c>0)throw new re(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Xc extends vD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Xc(e,n,r)}_apply(e){const n=this._parse(e);return VE(e._query,n),new fi(e.firestore,e.converter,Ru(e._query,n))}_parse(e){const n=od(e.firestore);return function(i,o,c,l,u,d,p){let g;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new re(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Og(p,d);const T=[];for(const S of p)T.push(kg(l,i,S));g={arrayValue:{values:T}}}else g=kg(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Og(p,d),g=gD(c,o,p,d==="in"||d==="not-in");return et.create(u,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function kt(t,e,n){const r=e,s=ld("where",t);return Xc._create(s,r,n)}class hd extends ud{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)VE(o,l),o=Ru(o,l)}(e._query,n),new fi(e.firestore,e.converter,Ru(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function kg(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new re(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ov(e)&&n.indexOf("/")!==-1)throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ue.fromString(n));if(!ue.isDocumentKey(r))throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zp(t,new ue(r))}if(n instanceof Lt)return Zp(t,n._key);throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zc(n)}.`)}function Og(t,e){if(!Array.isArray(t)||t.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function VE(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ED{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new sd(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Lh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Le(eE(r));const s=new yo(r.get(1),r.get(3)),i=new ue(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ME extends NE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ld("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends ME{data(e={}){return super.data(e)}}class wD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $i(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Va(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $i(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Va(s._firestore,s._userDataWriter,c.doc.key,c.doc,new $i(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:ID(c.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ID(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t){t=Wn(t,Lt);const e=Wn(t.firestore,pi);return rD(nd(e),t._key).then(n=>AD(e,t,n))}class LE extends ED{constructor(e){super(),this.firestore=e}convertBytes(e){return new si(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,n)}}function vr(t){t=Wn(t,fi);const e=Wn(t.firestore,pi),n=nd(e),r=new LE(e);return yD(t._query),sD(n,t._query).then(s=>new wD(e,r,t,s))}function Dg(t,e,n,...r){t=Wn(t,Lt);const s=Wn(t.firestore,pi),i=od(s);let o;return o=typeof(e=tt(e))=="string"||e instanceof Yc?pD(i,"updateDoc",t._key,e,n,r):fD(i,"updateDoc",t._key,e),dd(s,[o.toMutation(t._key,un.exists(!0))])}function xE(t){return dd(Wn(t.firestore,pi),[new $h(t._key,un.none())])}function xu(t,e){const n=Wn(t.firestore,pi),r=Xr(t),s=TD(t.converter,e);return dd(n,[dD(od(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,un.exists(!1))]).then(()=>r)}function dd(t,e){return function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget(async()=>HO(await nD(r),s,i)),i.promise}(nd(t),e)}function AD(t,e,n){const r=n.docs.get(e._key),s=new LE(t);return new ME(t,s,e._key,r,new $i(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ui=s})(ai),bn(new fn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new pi(new b1(r.getProvider("auth-internal")),new P1(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),tn(Qp,"4.6.3",e),tn(Qp,"4.6.3","esm2017")})();const bD={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},Zc=sy(bD);v1(Zc);const to=li(Zc),St=cD(Zc),RD=t=>(Nr("data-v-feec2774"),t=t(),Vr(),t),SD={class:"container"},CD={class:"loginWindow"},PD=RD(()=>U("h1",null,"WELCOME",-1)),kD={class:"buttonBox"},OD={__name:"Login",setup(t){function e(){lS(to,o,c).then(l=>{i.push({name:"dashboard"}),Fe("success","Successfully logged in!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/invalid-credential).":Fe("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":Fe("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":Fe("error","Our servers are currently overloaded :(");break;default:Fe("error",l.message);break}})}function n(){aS(to,o).then(()=>{Fe("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(l=>{l.message=="Firebase: Error (auth/missing-email)."&&Fe("error","Enter your email adress in the 'Email' field first!")})}function r(){Uy(to,s).then(l=>{Fe("success","Successfully logged in!"),Ot.credentialFromResult(l).accessToken,l.user,i.push("/")}).catch(l=>{Fe("error",l.message),l.code,l.message,l.customData.email,Ot.credentialFromError(l)})}const s=new Ot,i=kc();K_();let o,c="";return(l,u)=>(Se(),$e("div",SD,[U("div",CD,[PD,En(U("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=d=>Ye(o)?o.value=d:o=d)},null,512),[[Gt,wt(o)]]),En(U("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=d=>Ye(c)?c.value=d:c=d),onKeydown:u[2]||(u[2]=hh(d=>e(),["enter"]))},null,544),[[Gt,wt(c)]]),U("div",kD,[U("button",{class:"button_white",onClick:u[3]||(u[3]=d=>e())},"Login"),U("div",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=d=>r())},"Log in with Google")]),U("a",{onClick:u[5]||(u[5]=d=>n())},"Forgot password?")])]))}},DD=ps(OD,[["__scopeId","data-v-feec2774"]]),ND=t=>(Nr("data-v-01e98b37"),t=t(),Vr(),t),VD={class:"container"},MD={class:"loginWindow"},LD=ND(()=>U("h1",null,"CREATE ACCOUNT",-1)),xD={__name:"Register",setup(t){function e(){cS(to,o,c).then(u=>{u.user,i.push("/FindCostudent"),Fe("success","Successfully registered!")}).catch(u=>{switch(u.message){case"Firebase: Error (auth/email-already-in-use).":Fe("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":Fe("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":Fe("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":Fe("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":Fe("error","Our servers are currently overloaded :(");break;default:Fe("error",u.message);break}})}function n(){i.push("/login")}function r(){Uy(to,s).then(u=>{Fe("success","Successfully logged in!"),Ot.credentialFromResult(u).accessToken,u.user,i.push("/")}).catch(u=>{Fe("error",u.message),u.code,u.message,u.customData.email,Ot.credentialFromError(u)})}const s=new Ot,i=kc();K_();let o,c,l="";return(u,d)=>(Se(),$e("div",VD,[U("div",MD,[LD,En(U("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":d[0]||(d[0]=p=>Ye(o)?o.value=p:o=p)},null,512),[[Gt,wt(o)]]),En(U("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":d[1]||(d[1]=p=>Ye(c)?c.value=p:c=p)},null,512),[[Gt,wt(c)]]),En(U("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":d[2]||(d[2]=p=>Ye(l)?l.value=p:l=p),onKeydown:d[3]||(d[3]=hh(p=>e(),["enter"]))},null,544),[[Gt,wt(l)]]),U("button",{class:"button_white",onClick:e},"Create account"),U("button",{id:"googleLogin",class:"button_white",onClick:d[4]||(d[4]=p=>r())},"Login with Google"),U("p",null,[Vn("Already have an account? "),U("a",{onClick:n},"Login here!")])])]))}},FD=ps(xD,[["__scopeId","data-v-01e98b37"]]),ut=t=>(Nr("data-v-7fb61a18"),t=t(),Vr(),t),UD={class:"container"},BD={class:"formBox"},$D={class:"progressBar"},jD={key:0,class:"entry"},qD={class:"itemBox"},HD=ut(()=>U("p",null,"Subject",-1)),KD={class:"itemBox"},WD=ut(()=>U("p",null,"Location",-1)),GD={class:"itemBox",id:"date"},zD=ut(()=>U("p",null,"Date",-1)),QD=["min"],YD={class:"itemBox",id:"time"},JD={key:1,class:"searching"},XD=ut(()=>U("p",null,"SEARCHING",-1)),ZD=ut(()=>U("div",{class:"loader"},null,-1)),eN=[XD,ZD],tN={key:2,class:"noneFound"},nN={class:"message"},rN=ut(()=>U("p",null,"No costudents were found yet to study ",-1)),sN={class:"button"},iN=ut(()=>U("p",null," in ",-1)),oN={class:"button"},aN=ut(()=>U("p",null," in the ",-1)),cN={class:"button"},lN=ut(()=>U("p",null," of the ",-1)),uN={class:"button"},hN=ut(()=>U("p",null,".",-1)),dN=ut(()=>U("div",{class:"finalMessage"},[U("p",null,"We'll keep on searching for other costudents."),U("p",null,"You can check in on the progress on your dashboard.")],-1)),fN={class:"buttonBox"},pN={key:3,class:"found"},gN=ut(()=>U("div",{class:"finalMessage"},[U("p",null,"We found costudents!")],-1)),mN={class:"message"},_N=ut(()=>U("p",null,"You can study ",-1)),yN={class:"button"},vN=ut(()=>U("p",null," in ",-1)),EN={class:"button"},TN=ut(()=>U("p",null," in the ",-1)),wN={class:"button"},IN=ut(()=>U("p",null," of the ",-1)),AN={class:"button"},bN=ut(()=>U("p",null," . ",-1)),RN={class:"groupDisplay"},SN=ut(()=>U("p",null,"Your group:",-1)),CN={class:"costudentNames"},PN={id:"subjects"},kN=["value"],ON={id:"locations"},DN=["value"],NN={__name:"FindCostudent",setup(t){function e(){const z=new Date,Q=z.getFullYear(),W=String(z.getMonth()+1).padStart(2,"0"),qe=String(z.getDate()).padStart(2,"0");return`${Q}-${W}-${qe}`}function n(z){switch(k.value=!1,I.value=!1,v.value=!1,C.value=z,z){case"morning":k.value=!0,O.value=0;break;case"afternoon":I.value=!0,O.value=1;break;case"evening":v.value=!0,O.value=2;break}}async function r(){const z=yr(A,kt("UID","==",m));return!(await vr(z)).empty}async function s(){await r()?ye.value.includes(M.value)?de.value.includes(V.value)?o():(Fe("error","Select a location from the list!"),i()):(Fe("error","Select a subject from the list!"),i()):Fe("error","Set your username in the dashboard first!")}function i(){M.value="",V.value="",F.value=""}async function o(){S.value=1;const z=yr(y,kt("SUBJ","==",M.value),kt("LOCATION","==",V.value),kt("DATE","==",F.value),kt("TOD","==",O.value)),Q=await vr(z);if(Q.empty)c();else{const W=[];Q.docs[0].data().MEMBERS;for(let qe=0;qe<=Q.docs.length;qe++)W.push(Q.docs[0].data().MEMBERS[qe]);d(W),S.value=3}}async function c(){const z=yr(w,kt("SUBJ","==",M.value),kt("LOCATION","==",V.value),kt("DATE","==",F.value),kt("TOD","==",O.value)),Q=await vr(z);Q.empty?(l(),S.value=2):u(Q.docs[0].data().UID,Q.docs[0].id)}async function l(){await xu(Nn(St,"posts"),{SUBJ:M.value,LOCATION:V.value,DATE:F.value,UID:m,TOD:O.value,POSTDATE:N.value})}async function u(z,Q){await xE(Xr(St,"posts",Q));const W=[m,z];await xu(Nn(St,"groups"),{DATE:F.value,LOCATION:V.value,MEMBERS:W,SUBJ:M.value,TOD:O.value}),d(W),S.value=3}async function d(z){for(let Q=0;Q<z.length;Q++){const W=yr(A,kt("UID","==",z[Q])),qe=await vr(W);E.value.push(qe.docs[0].data().NAME)}}async function p(){const z=Xr(St,"dataLists","locationData"),Q=await Lu(z);de.value=Q.data().locations}async function g(){const z=Xr(St,"dataLists","subjectData"),Q=await Lu(z);ye.value=Q.data().subjects}const T=li(),S=We(0),M=We(""),V=We(""),F=We(""),O=We(0),C=We("");let P=e(),N=We(P);const k=We(!1),I=We(!1),v=We(!1),m=T.currentUser.uid,y=Nn(St,"groups"),w=Nn(St,"posts"),A=Nn(St,"users"),E=We([]),de=We([]),ye=We([]);return p(),g(),(z,Q)=>(Se(),$e("div",UD,[U("div",BD,[U("div",$D,[U("p",{class:$t({active:S.value===0})},"1",2),U("div",{class:$t(["line",{completed:S.value>=1}])},null,2),U("p",{class:$t({active:S.value===1})},"2",2),U("div",{class:$t(["line",{completed:S.value>=2}])},null,2),U("p",{class:$t({active:S.value===2})},"3",2)]),S.value==0?(Se(),$e("div",jD,[U("div",qD,[HD,En(U("input",{list:"subjects","onUpdate:modelValue":Q[0]||(Q[0]=W=>M.value=W)},null,512),[[Gt,M.value]])]),U("div",KD,[WD,En(U("input",{list:"locations","onUpdate:modelValue":Q[1]||(Q[1]=W=>V.value=W)},null,512),[[Gt,V.value]])]),U("div",GD,[zD,En(U("input",{type:"date",id:"date",min:wt(N),"onUpdate:modelValue":Q[2]||(Q[2]=W=>F.value=W)},null,8,QD),[[Gt,F.value]])]),U("div",YD,[U("div",{class:$t(["button",{selected:k.value}]),onClick:Q[3]||(Q[3]=W=>n("morning"))}," Morning ",2),U("div",{class:$t(["button",{selected:I.value}]),onClick:Q[4]||(Q[4]=W=>n("afternoon"))}," Afternoon ",2),U("div",{class:$t(["button",{selected:v.value}]),onClick:Q[5]||(Q[5]=W=>n("evening"))}," Evening ",2)]),U("div",{class:"button",onClick:Q[6]||(Q[6]=W=>s())}," Submit ")])):vn("",!0),S.value==1?(Se(),$e("div",JD,eN)):vn("",!0),S.value==2?(Se(),$e("div",tN,[U("div",nN,[rN,U("div",sN,nt(M.value),1),iN,U("div",oN,nt(V.value),1),aN,U("div",cN,nt(C.value),1),lN,U("div",uN,nt(F.value),1),hN]),dN,U("div",fN,[Pe(wt(q_),{to:"/dashboard",class:"button"},{default:on(()=>[Vn("Dashboard")]),_:1})])])):vn("",!0),S.value==3?(Se(),$e("div",pN,[gN,U("div",mN,[_N,U("div",yN,nt(M.value),1),vN,U("div",EN,nt(V.value),1),TN,U("div",wN,nt(C.value),1),IN,U("div",AN,nt(F.value),1),bN,U("div",RN,[SN,U("div",CN,[(Se(!0),$e(Ge,null,xs(E.value,W=>(Se(),$e("div",{class:"button",key:E.value},[U("p",null,nt(W),1)]))),128))])])])])):vn("",!0)]),U("datalist",PN,[(Se(!0),$e(Ge,null,xs(ye.value,W=>(Se(),$e("option",{key:W,value:W},null,8,kN))),128))]),U("datalist",ON,[(Se(!0),$e(Ge,null,xs(de.value,W=>(Se(),$e("option",{key:W,value:W},null,8,DN))),128))])]))}},VN=ps(NN,[["__scopeId","data-v-7fb61a18"]]),gi=t=>(Nr("data-v-9a68485f"),t=t(),Vr(),t),MN={class:"container"},LN={class:"titleContainer"},xN=gi(()=>U("div",{class:"title"},[U("h1",null,"DASHBOARD"),U("p",null,"Here you can find all your requested study sessions and groups that you're a part of.")],-1)),FN={class:"nameContainer"},UN={class:"fieldBox"},BN=gi(()=>U("p",null,"Display name:",-1)),$N={class:"itemBox"},jN=gi(()=>U("h1",null,"YOUR GROUPS",-1)),qN={class:"groupBox"},HN={class:"button_white"},KN={class:"button_white"},WN={class:"button_white"},GN={class:"button_white"},zN={class:"button_white"},QN={class:"commandButtons"},YN=gi(()=>U("div",{class:"button_white"}," Chat ",-1)),JN=["onClick"],XN=gi(()=>U("div",{class:"whiteSpace"},null,-1)),ZN={class:"itemBox"},eV=gi(()=>U("h1",null,"YOUR STUDY REQUESTS",-1)),tV={class:"groupBox"},nV={class:"button_white"},rV={class:"button_white"},sV={class:"button_white"},iV={class:"button_white"},oV={class:"commandButtons"},aV=["onClick"],cV={__name:"Dashboard",setup(t){async function e(){const P=yr(M,kt("MEMBERS","array-contains",g)),N=await vr(P);if(N.empty)console.log("No groups");else for(let k=0;k<N.docs.length;k++)n(N.docs[k].data(),N.docs[k].id)}function n(P,N){const k={ID:N,SUBJ:P.SUBJ,LOCATION:P.LOCATION,TOD:P.TOD,DATE:P.DATE,MEMBERS:P.MEMBERS};O.value.push(k)}async function r(P){O.value=O.value.filter(N=>N.ID!=P),s(P)}async function s(P){const N=Xr(St,"groups",P);let I=(await Lu(N)).data().MEMBERS;I=I.filter(v=>v!==g),await Dg(N,{MEMBERS:I})}function i(P){switch(P){case 0:return"Morning";case 1:return"Afternoon";case 2:return"Evening"}}async function o(){const P=yr(V,kt("UID","==",g)),N=await vr(P);if(N.empty)console.log("No posts");else for(let k=0;k<N.docs.length;k++)c(N.docs[k].data(),N.docs[k].id)}function c(P,N){const k={ID:N,SUBJ:P.SUBJ,LOCATION:P.LOCATION,TOD:P.TOD,DATE:P.DATE};C.value.push(k)}async function l(P){C.value=C.value.filter(N=>N.ID!=P),await xE(Xr(St,"posts",P))}async function u(){const P=yr(F,kt("UID","==",g)),N=await vr(P);N.empty?(console.log("No username for UID!"),S=0):(T.value=N.docs[0].data().NAME,S=1)}async function d(){if(S==0)await xu(Nn(St,"users"),{UID:g,NAME:T.value}),Fe("success","Successfully set your username!");else{const P=yr(F,kt("UID","==",g)),N=await vr(P),k=Xr(St,"users",N.docs[0].id);await Dg(k,{NAME:T.value}),u(),Fe("success","Successfully updated your username!")}}const g=li().currentUser.uid,T=We("");let S=0;const M=Nn(St,"groups"),V=Nn(St,"posts"),F=Nn(St,"users"),O=We([]),C=We([]);return e(),o(),u(),(P,N)=>(Se(),$e("div",MN,[U("div",LN,[xN,U("div",FN,[U("div",UN,[BN,En(U("input",{type:"text","onUpdate:modelValue":N[0]||(N[0]=k=>T.value=k)},null,512),[[Gt,T.value]])]),U("div",{class:"button",onClick:N[1]||(N[1]=k=>d())}," Change ")])]),U("div",$N,[jN,(Se(!0),$e(Ge,null,xs(O.value,k=>(Se(),$e("div",{class:"itemsContainer",key:k.ID},[U("div",qN,[U("div",HN,nt(k.DATE),1),U("div",KN,nt(k.SUBJ),1),U("div",WN,nt(k.LOCATION),1),U("div",GN,nt(i(k.TOD)),1),U("div",zN,nt(k.MEMBERS.length)+" students ",1),U("div",QN,[YN,U("div",{class:"button_white",onClick:I=>r(k.ID)}," Remove ",8,JN)])])]))),128))]),XN,U("div",ZN,[eV,(Se(!0),$e(Ge,null,xs(C.value,k=>(Se(),$e("div",{class:"itemsContainer",key:k.ID},[U("div",tV,[U("div",nV,nt(k.DATE),1),U("div",rV,nt(k.SUBJ),1),U("div",sV,nt(k.LOCATION),1),U("div",iV,nt(i(k.TOD)),1),U("div",oV,[U("div",{class:"button_white",onClick:I=>l(k.ID)}," Remove ",8,aV)])])]))),128))])]))}},lV=ps(cV,[["__scopeId","data-v-9a68485f"]]),FE=Cb({history:sb("/costudent-demo/"),routes:[{path:"/",name:"home",component:tP},{path:"/findcostudent",name:"findcostudent",component:VN,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:DD},{path:"/register",name:"register",component:FD},{path:"/dashboard",name:"dashboard",component:lV,meta:{requiresAuth:!0}}]});let Ng=!1,$l=!1;FE.beforeEach((t,e,n)=>{const r=li(),s=t.matched.some(i=>i.meta.requiresAuth);Ng?s&&!$l?(alert("No access! You need to be logged in."),n("/login")):n():Cy(r,i=>{$l=!!i,Ng=!0,s&&!$l?(alert("No access! You need to be logged in."),n("/login")):n()})});const el=P_(HC);el.config.globalProperties.$firebase=Zc;el.use(FE);el.use(CC,{position:"bottom-right",duration:5e3,pauseOnHover:!0});el.mount("#app");
