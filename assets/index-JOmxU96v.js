(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pc(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Ue={},Ns=[],Ft=()=>{},cT=()=>!1,bo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qu=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Hu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lT=Object.prototype.hasOwnProperty,De=(t,e)=>lT.call(t,e),se=Array.isArray,Vs=t=>ci(t)==="[object Map]",fs=t=>ci(t)==="[object Set]",uf=t=>ci(t)==="[object Date]",uT=t=>ci(t)==="[object RegExp]",ge=t=>typeof t=="function",Ye=t=>typeof t=="string",Qn=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Ku=t=>(Be(t)||ge(t))&&ge(t.then)&&ge(t.catch),Fg=Object.prototype.toString,ci=t=>Fg.call(t),hT=t=>ci(t).slice(8,-1),Ug=t=>ci(t)==="[object Object]",Wu=t=>Ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ms=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dT=/-(\w)/g,Mt=gc(t=>t.replace(dT,(e,n)=>n?n.toUpperCase():"")),fT=/\B([A-Z])/g,Gt=gc(t=>t.replace(fT,"-$1").toLowerCase()),Ao=gc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Hi=gc(t=>t?`on${Ao(t)}`:""),gn=(t,e)=>!Object.is(t,e),Ls=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$g=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},xa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Fa=t=>{const e=Ye(t)?Number(t):NaN;return isNaN(e)?t:e};let hf;const Bg=()=>hf||(hf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),pT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",gT=pc(pT);function ps(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ye(r)?vT(r):ps(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ye(t)||Be(t))return t}const mT=/;(?![^(]*\))/g,_T=/:([^]+)/,yT=/\/\*[^]*?\*\//g;function vT(t){const e={};return t.replace(yT,"").split(mT).forEach(n=>{if(n){const r=n.split(_T);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bt(t){let e="";if(Ye(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=bt(t[n]);r&&(e+=r+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ET(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ye(e)&&(t.class=bt(e)),n&&(t.style=ps(n)),t}const TT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wT=pc(TT);function jg(t){return!!t||t===""}function IT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Pr(t[r],e[r]);return n}function Pr(t,e){if(t===e)return!0;let n=uf(t),r=uf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Qn(t),r=Qn(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?IT(t,e):!1;if(n=Be(t),r=Be(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Pr(t[o],e[o]))return!1}}return String(t)===String(e)}function mc(t,e){return t.findIndex(n=>Pr(n,e))}const xe=t=>Ye(t)?t:t==null?"":se(t)||Be(t)&&(t.toString===Fg||!ge(t.toString))?JSON.stringify(t,qg,2):String(t),qg=(t,e)=>e&&e.__v_isRef?qg(t,e.value):Vs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[vl(r,i)+" =>"]=s,n),{})}:fs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vl(n))}:Qn(e)?vl(e):Be(e)&&!se(e)&&!Ug(e)?String(e):e,vl=(t,e="")=>{var n;return Qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Gu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bT(t){return new Gu(t)}function Hg(t,e=Kt){e&&e.active&&e.effects.push(t)}function Kg(){return Kt}function AT(t){Kt&&Kt.cleanups.push(t)}let Yr;class zs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Hg(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Lr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(RT(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),xr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ar,n=Yr;try{return Ar=!0,Yr=this,this._runnings++,df(this),this.fn()}finally{ff(this),this._runnings--,Yr=n,Ar=e}}stop(){this.active&&(df(this),ff(this),this.onStop&&this.onStop(),this.active=!1)}}function RT(t){return t.value}function df(t){t._trackId++,t._depsLength=0}function ff(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wg(t.deps[e],t);t.deps.length=t._depsLength}}function Wg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}function ST(t,e){t.effect instanceof zs&&(t=t.effect.fn);const n=new zs(t,Ft,()=>{n.dirty&&n.run()});e&&(Qe(n,e),e.scope&&Hg(n,e.scope)),(!e||!e.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function CT(t){t.effect.stop()}let Ar=!0,Wl=0;const Gg=[];function Lr(){Gg.push(Ar),Ar=!1}function xr(){const t=Gg.pop();Ar=t===void 0?!0:t}function zu(){Wl++}function Qu(){for(Wl--;!Wl&&Gl.length;)Gl.shift()()}function zg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Wg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gl=[];function Qg(t,e,n){zu();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Gl.push(r.scheduler)))}Qu()}const Yg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ua=new WeakMap,Jr=Symbol(""),zl=Symbol("");function jt(t,e,n){if(Ar&&Yr){let r=Ua.get(t);r||Ua.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Yg(()=>r.delete(n))),zg(Yr,s)}}function Kn(t,e,n,r,s,i){const o=Ua.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&se(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!Qn(h)&&h>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":se(t)?Wu(n)&&c.push(o.get("length")):(c.push(o.get(Jr)),Vs(t)&&c.push(o.get(zl)));break;case"delete":se(t)||(c.push(o.get(Jr)),Vs(t)&&c.push(o.get(zl)));break;case"set":Vs(t)&&c.push(o.get(Jr));break}zu();for(const l of c)l&&Qg(l,5);Qu()}function PT(t,e){const n=Ua.get(t);return n&&n.get(e)}const kT=pc("__proto__,__v_isRef,__isVue"),Jg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qn)),pf=OT();function OT(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ke(this);for(let i=0,o=this.length;i<o;i++)jt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lr(),zu();const r=ke(this)[e].apply(this,n);return Qu(),xr(),r}}),t}function DT(t){Qn(t)||(t=String(t));const e=ke(this);return jt(e,"has",t),e.hasOwnProperty(t)}class Xg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?sm:rm:i?nm:tm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=se(e);if(!s){if(o&&De(pf,n))return Reflect.get(pf,n,r);if(n==="hasOwnProperty")return DT}const c=Reflect.get(e,n,r);return(Qn(n)?Jg.has(n):kT(n))||(s||jt(e,"get",n),i)?c:yt(c)?o&&Wu(n)?c:c.value:Be(c)?s?Xu(c):Ro(c):c}}class Zg extends Xg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Qs(i);if(!so(r)&&!Qs(r)&&(i=ke(i),r=ke(r)),!se(e)&&yt(i)&&!yt(r))return l?!1:(i.value=r,!0)}const o=se(e)&&Wu(n)?Number(n)<e.length:De(e,n),c=Reflect.set(e,n,r,s);return e===ke(s)&&(o?gn(r,i)&&Kn(e,"set",n,r):Kn(e,"add",n,r)),c}deleteProperty(e,n){const r=De(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Kn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Qn(n)||!Jg.has(n))&&jt(e,"has",n),r}ownKeys(e){return jt(e,"iterate",se(e)?"length":Jr),Reflect.ownKeys(e)}}class em extends Xg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const NT=new Zg,VT=new em,MT=new Zg(!0),LT=new em(!0),Yu=t=>t,_c=t=>Reflect.getPrototypeOf(t);function aa(t,e,n=!1,r=!1){t=t.__v_raw;const s=ke(t),i=ke(e);n||(gn(e,i)&&jt(s,"get",e),jt(s,"get",i));const{has:o}=_c(s),c=r?Yu:n?eh:io;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function ca(t,e=!1){const n=this.__v_raw,r=ke(n),s=ke(t);return e||(gn(t,s)&&jt(r,"has",t),jt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function la(t,e=!1){return t=t.__v_raw,!e&&jt(ke(t),"iterate",Jr),Reflect.get(t,"size",t)}function gf(t){t=ke(t);const e=ke(this);return _c(e).has.call(e,t)||(e.add(t),Kn(e,"add",t,t)),this}function mf(t,e){e=ke(e);const n=ke(this),{has:r,get:s}=_c(n);let i=r.call(n,t);i||(t=ke(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?gn(e,o)&&Kn(n,"set",t,e):Kn(n,"add",t,e),this}function _f(t){const e=ke(this),{has:n,get:r}=_c(e);let s=n.call(e,t);s||(t=ke(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Kn(e,"delete",t,void 0),i}function yf(){const t=ke(this),e=t.size!==0,n=t.clear();return e&&Kn(t,"clear",void 0,void 0),n}function ua(t,e){return function(r,s){const i=this,o=i.__v_raw,c=ke(o),l=e?Yu:t?eh:io;return!t&&jt(c,"iterate",Jr),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function ha(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=Vs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Yu:e?eh:io;return!e&&jt(i,"iterate",l?zl:Jr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[h(p[0]),h(p[1])]:h(p),done:g}},[Symbol.iterator](){return this}}}}function hr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function xT(){const t={get(i){return aa(this,i)},get size(){return la(this)},has:ca,add:gf,set:mf,delete:_f,clear:yf,forEach:ua(!1,!1)},e={get(i){return aa(this,i,!1,!0)},get size(){return la(this)},has:ca,add:gf,set:mf,delete:_f,clear:yf,forEach:ua(!1,!0)},n={get(i){return aa(this,i,!0)},get size(){return la(this,!0)},has(i){return ca.call(this,i,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:ua(!0,!1)},r={get(i){return aa(this,i,!0,!0)},get size(){return la(this,!0)},has(i){return ca.call(this,i,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ha(i,!1,!1),n[i]=ha(i,!0,!1),e[i]=ha(i,!1,!0),r[i]=ha(i,!0,!0)}),[t,n,e,r]}const[FT,UT,$T,BT]=xT();function yc(t,e){const n=e?t?BT:$T:t?UT:FT;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(De(n,s)&&s in r?n:r,s,i)}const jT={get:yc(!1,!1)},qT={get:yc(!1,!0)},HT={get:yc(!0,!1)},KT={get:yc(!0,!0)},tm=new WeakMap,nm=new WeakMap,rm=new WeakMap,sm=new WeakMap;function WT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GT(t){return t.__v_skip||!Object.isExtensible(t)?0:WT(hT(t))}function Ro(t){return Qs(t)?t:vc(t,!1,NT,jT,tm)}function Ju(t){return vc(t,!1,MT,qT,nm)}function Xu(t){return vc(t,!0,VT,HT,rm)}function zT(t){return vc(t,!0,LT,KT,sm)}function vc(t,e,n,r,s){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=GT(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function xs(t){return Qs(t)?xs(t.__v_raw):!!(t&&t.__v_isReactive)}function Qs(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function Zu(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function im(t){return Object.isExtensible(t)&&$g(t,"__v_skip",!0),t}const io=t=>Be(t)?Ro(t):t,eh=t=>Be(t)?Xu(t):t;class om{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zs(()=>e(this._value),()=>Fs(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ke(this);return(!e._cacheable||e.effect.dirty)&&gn(e._value,e._value=e.effect.run())&&Fs(e,5),th(e),e.effect._dirtyLevel>=2&&Fs(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function QT(t,e,n=!1){let r,s;const i=ge(t);return i?(r=t,s=Ft):(r=t.get,s=t.set),new om(r,s,i||!s,n)}function th(t){var e;Ar&&Yr&&(t=ke(t),zg(Yr,(e=t.dep)!=null?e:t.dep=Yg(()=>t.dep=void 0,t instanceof om?t:void 0)))}function Fs(t,e=5,n,r){t=ke(t);const s=t.dep;s&&Qg(s,e)}function yt(t){return!!(t&&t.__v_isRef===!0)}function ve(t){return cm(t,!1)}function am(t){return cm(t,!0)}function cm(t,e){return yt(t)?t:new YT(t,e)}class YT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ke(e),this._value=n?e:io(e)}get value(){return th(this),this._value}set value(e){const n=this.__v_isShallow||so(e)||Qs(e);e=n?e:ke(e),gn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:io(e),Fs(this,5))}}function JT(t){Fs(t,5)}function Qt(t){return yt(t)?t.value:t}function XT(t){return ge(t)?t():Qt(t)}const ZT={get:(t,e,n)=>Qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function nh(t){return xs(t)?t:new Proxy(t,ZT)}class ew{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>th(this),()=>Fs(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function lm(t){return new ew(t)}function tw(t){const e=se(t)?new Array(t.length):{};for(const n in t)e[n]=um(t,n);return e}class nw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return PT(ke(this._object),this._key)}}class rw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function sw(t,e,n){return yt(t)?t:ge(t)?new rw(t):Be(t)&&arguments.length>1?um(t,e,n):ve(t)}function um(t,e,n){const r=t[e];return yt(r)?r:new nw(t,e,n)}const iw={GET:"get",HAS:"has",ITERATE:"iterate"},ow={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function aw(t,e){}const cw={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},lw={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function Wn(t,e,n,r){try{return r?t(...r):t()}catch(s){gs(s,e,n)}}function Yt(t,e,n,r){if(ge(t)){const s=Wn(t,e,n,r);return s&&Ku(s)&&s.catch(i=>{gs(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}}function gs(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Lr(),Wn(l,null,10,[t,o,c]),xr();return}}uw(t,n,s,r)}function uw(t,e,n,r=!0){console.error(t)}let oo=!1,Ql=!1;const Ct=[];let In=0;const Us=[];let mr=null,Wr=0;const hm=Promise.resolve();let rh=null;function So(t){const e=rh||hm;return t?e.then(this?t.bind(this):t):e}function hw(t){let e=In+1,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=ao(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ec(t){(!Ct.length||!Ct.includes(t,oo&&t.allowRecurse?In+1:In))&&(t.id==null?Ct.push(t):Ct.splice(hw(t.id),0,t),dm())}function dm(){!oo&&!Ql&&(Ql=!0,rh=hm.then(fm))}function dw(t){const e=Ct.indexOf(t);e>In&&Ct.splice(e,1)}function $a(t){se(t)?Us.push(...t):(!mr||!mr.includes(t,t.allowRecurse?Wr+1:Wr))&&Us.push(t),dm()}function vf(t,e,n=oo?In+1:0){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r()}}}function Ba(t){if(Us.length){const e=[...new Set(Us)].sort((n,r)=>ao(n)-ao(r));if(Us.length=0,mr){mr.push(...e);return}for(mr=e,Wr=0;Wr<mr.length;Wr++){const n=mr[Wr];n.active!==!1&&n()}mr=null,Wr=0}}const ao=t=>t.id==null?1/0:t.id,fw=(t,e)=>{const n=ao(t)-ao(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function fm(t){Ql=!1,oo=!0,Ct.sort(fw);try{for(In=0;In<Ct.length;In++){const e=Ct[In];e&&e.active!==!1&&Wn(e,null,14)}}finally{In=0,Ct.length=0,Ba(),oo=!1,rh=null,(Ct.length||Us.length)&&fm()}}let Cs,da=[];function pm(t,e){var n,r;Cs=t,Cs?(Cs.enabled=!0,da.forEach(({event:s,args:i})=>Cs.emit(s,...i)),da=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{pm(i,e)}),setTimeout(()=>{Cs||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,da=[])},3e3)):da=[]}function pw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ue;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[h]||Ue;g&&(s=n.map(w=>Ye(w)?w.trim():w)),p&&(s=n.map(xa))}let c,l=r[c=Hi(e)]||r[c=Hi(Mt(e))];!l&&i&&(l=r[c=Hi(Gt(e))]),l&&Yt(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Yt(u,t,6,s)}}function gm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ge(t)){const l=u=>{const h=gm(u,e,!0);h&&(c=!0,Qe(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Be(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>o[l]=null):Qe(o,i),Be(t)&&r.set(t,o),o)}function Tc(t,e){return!t||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),De(t,e[0].toLowerCase()+e.slice(1))||De(t,Gt(e))||De(t,e))}let at=null,wc=null;function co(t){const e=at;return at=t,wc=t&&t.type.__scopeId||null,e}function er(t){wc=t}function tr(){wc=null}const gw=t=>At;function At(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&su(-1);const i=co(e);let o;try{o=t(...s)}finally{co(i),r._d&&su(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Aa(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:h,props:p,data:g,setupState:w,ctx:C,inheritAttrs:V}=t,M=co(t);let F,D;try{if(n.shapeFlag&4){const O=s||r,x=O;F=Wt(u.call(x,O,h,p,w,g,C)),D=c}else{const O=e;F=Wt(O.length>1?O(p,{attrs:c,slots:o,emit:l}):O(p,null)),D=e.props?c:_w(c)}}catch(O){Gi.length=0,gs(O,t,1),F=Ce(ft)}let S=F;if(D&&V!==!1){const O=Object.keys(D),{shapeFlag:x}=S;O.length&&x&7&&(i&&O.some(qu)&&(D=yw(D,i)),S=On(S,D,!1,!0))}return n.dirs&&(S=On(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),F=S,co(M),F}function mw(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Or(s)){if(s.type!==ft||s.children==="v-if"){if(n)return;n=s}}else return}return n}const _w=t=>{let e;for(const n in t)(n==="class"||n==="style"||bo(n))&&((e||(e={}))[n]=t[n]);return e},yw=(t,e)=>{const n={};for(const r in t)(!qu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function vw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ef(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let p=0;p<h.length;p++){const g=h[p];if(o[g]!==r[g]&&!Tc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ef(r,o,u):!0:!!o;return!1}function Ef(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Tc(n,i))return!0}return!1}function sh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ih="components",Ew="directives";function mm(t,e){return oh(ih,t,!0,e)||t}const _m=Symbol.for("v-ndc");function ym(t){return Ye(t)?oh(ih,t,!1)||t:t||_m}function Tw(t){return oh(Ew,t)}function oh(t,e,n=!0,r=!1){const s=at||ot;if(s){const i=s.type;if(t===ih){const c=lu(i,!1);if(c&&(c===e||c===Mt(e)||c===Ao(Mt(e))))return i}const o=Tf(s[t]||i[t],e)||Tf(s.appContext[t],e);return!o&&r?i:o}}function Tf(t,e){return t&&(t[e]||t[Mt(e)]||t[Ao(Mt(e))])}const Yl=t=>t.__isSuspense;let Jl=0;const ww={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,c,l,u){if(t==null)bw(e,n,r,s,i,o,c,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Aw(t,e,n,r,s,o,c,l,u)}},hydrate:Rw,create:ah,normalize:Sw},Iw=ww;function lo(t,e){const n=t.props&&t.props[e];ge(n)&&n()}function bw(t,e,n,r,s,i,o,c,l){const{p:u,o:{createElement:h}}=l,p=h("div"),g=t.suspense=ah(t,s,r,e,p,n,i,o,c,l);u(null,g.pendingBranch=t.ssContent,p,null,r,g,i,o),g.deps>0?(lo(t,"onPending"),lo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),$s(g,t.ssFallback)):g.resolve(!1,!0)}function Aw(t,e,n,r,s,i,o,c,{p:l,um:u,o:{createElement:h}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,w=e.ssFallback,{activeBranch:C,pendingBranch:V,isInFallback:M,isHydrating:F}=p;if(V)p.pendingBranch=g,un(g,V)?(l(V,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():M&&(F||(l(C,w,n,r,s,null,i,o,c),$s(p,w)))):(p.pendingId=Jl++,F?(p.isHydrating=!1,p.activeBranch=V):u(V,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=h("div"),M?(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0?p.resolve():(l(C,w,n,r,s,null,i,o,c),$s(p,w))):C&&un(g,C)?(l(C,g,n,r,s,p,i,o,c),p.resolve(!0)):(l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0&&p.resolve()));else if(C&&un(g,C))l(C,g,n,r,s,p,i,o,c),$s(p,g);else if(lo(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=Jl++,l(null,g,p.hiddenContainer,null,s,p,i,o,c),p.deps<=0)p.resolve();else{const{timeout:D,pendingId:S}=p;D>0?setTimeout(()=>{p.pendingId===S&&p.fallback(w)},D):D===0&&p.fallback(w)}}function ah(t,e,n,r,s,i,o,c,l,u,h=!1){const{p,m:g,um:w,n:C,o:{parentNode:V,remove:M}}=u;let F;const D=Cw(t);D&&e&&e.pendingBranch&&(F=e.pendingId,e.deps++);const S=t.props?Fa(t.props.timeout):void 0,O=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Jl++,timeout:typeof S=="number"?S:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(k=!1,E=!1){const{vnode:_,activeBranch:m,pendingBranch:y,pendingId:I,effects:b,parentComponent:T,container:me}=x;let be=!1;x.isHydrating?x.isHydrating=!1:k||(be=m&&y.transition&&y.transition.mode==="out-in",be&&(m.transition.afterLeave=()=>{I===x.pendingId&&(g(y,me,i===O?C(m):i,0),$a(b))}),m&&(V(m.el)!==x.hiddenContainer&&(i=C(m)),w(m,T,x,!0)),be||g(y,me,i,0)),$s(x,y),x.pendingBranch=null,x.isInFallback=!1;let te=x.parent,fe=!1;for(;te;){if(te.pendingBranch){te.effects.push(...b),fe=!0;break}te=te.parent}!fe&&!be&&$a(b),x.effects=[],D&&e&&e.pendingBranch&&F===e.pendingId&&(e.deps--,e.deps===0&&!E&&e.resolve()),lo(_,"onResolve")},fallback(k){if(!x.pendingBranch)return;const{vnode:E,activeBranch:_,parentComponent:m,container:y,namespace:I}=x;lo(E,"onFallback");const b=C(_),T=()=>{x.isInFallback&&(p(null,k,y,b,m,null,I,c,l),$s(x,k))},me=k.transition&&k.transition.mode==="out-in";me&&(_.transition.afterLeave=T),x.isInFallback=!0,w(_,m,null,!0),me||T()},move(k,E,_){x.activeBranch&&g(x.activeBranch,k,E,_),x.container=k},next(){return x.activeBranch&&C(x.activeBranch)},registerDep(k,E,_){const m=!!x.pendingBranch;m&&x.deps++;const y=k.vnode.el;k.asyncDep.catch(I=>{gs(I,k,0)}).then(I=>{if(k.isUnmounted||x.isUnmounted||x.pendingId!==k.suspenseId)return;k.asyncResolved=!0;const{vnode:b}=k;au(k,I,!1),y&&(b.el=y);const T=!y&&k.subTree.el;E(k,b,V(y||k.subTree.el),y?null:C(k.subTree),x,o,_),T&&M(T),sh(k,b.el),m&&--x.deps===0&&x.resolve()})},unmount(k,E){x.isUnmounted=!0,x.activeBranch&&w(x.activeBranch,n,k,E),x.pendingBranch&&w(x.pendingBranch,n,k,E)}};return x}function Rw(t,e,n,r,s,i,o,c,l){const u=e.suspense=ah(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,c,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function Sw(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=wf(r?n.default:n),t.ssFallback=r?wf(n.fallback):Ce(ft)}function wf(t){let e;if(ge(t)){const n=ns&&t._c;n&&(t._d=!1,pe()),t=t(),n&&(t._d=!0,e=Ut,t_())}return se(t)&&(t=mw(t)),t=Wt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function vm(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):$a(t)}function $s(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,sh(r,s))}function Cw(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}function Ic(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lr();const c=rs(n),l=Yt(e,n,t,o);return c(),xr(),l});return r?s.unshift(i):s.push(i),i}}const nr=t=>(e,n=ot)=>{(!Oo||t==="sp")&&Ic(t,(...r)=>e(...r),n)},Em=nr("bm"),ms=nr("m"),Tm=nr("bu"),bc=nr("u"),Ac=nr("bum"),Rc=nr("um"),wm=nr("sp"),Im=nr("rtg"),bm=nr("rtc");function Am(t,e=ot){Ic("ec",t,e)}function Sn(t,e){if(at===null)return t;const n=Do(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ue]=e[s];i&&(ge(i)&&(i={mounted:i,updated:i}),i.deep&&Er(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function wn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Lr(),Yt(l,n,8,[t.el,c,t,e]),xr())}}function bn(t,e,n,r){let s;const i=n&&n[r];if(se(t)||Ye(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Be(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];s[c]=e(t[u],u,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}function Pw(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(se(r))for(let s=0;s<r.length;s++)t[r[s].name]=r[s].fn;else r&&(t[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return t}/*! #__NO_SIDE_EFFECTS__ */function Co(t,e){return ge(t)?Qe({name:t.name},e,{setup:t}):t}const Xr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function kw(t){ge(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:c}=t;let l=null,u,h=0;const p=()=>(h++,l=null,g()),g=()=>{let w;return l||(w=l=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),c)return new Promise((V,M)=>{c(C,()=>V(p()),()=>M(C),h+1)});throw C}).then(C=>w!==l&&l?l:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),u=C,C)))};return Co({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const w=ot;if(u)return()=>El(u,w);const C=D=>{l=null,gs(D,w,13,!r)};if(o&&w.suspense||Oo)return g().then(D=>()=>El(D,w)).catch(D=>(C(D),()=>r?Ce(r,{error:D}):null));const V=ve(!1),M=ve(),F=ve(!!s);return s&&setTimeout(()=>{F.value=!1},s),i!=null&&setTimeout(()=>{if(!V.value&&!M.value){const D=new Error(`Async component timed out after ${i}ms.`);C(D),M.value=D}},i),g().then(()=>{V.value=!0,w.parent&&ko(w.parent.vnode)&&(w.parent.effect.dirty=!0,Ec(w.parent.update))}).catch(D=>{C(D),M.value=D}),()=>{if(V.value&&u)return El(u,w);if(M.value&&r)return Ce(r,{error:M.value});if(n&&!F.value)return Ce(n)}}})}function El(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ce(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}function Ow(t,e,n={},r,s){if(at.isCE||at.parent&&Xr(at.parent)&&at.parent.isCE)return e!=="default"&&(n.name=e),Ce("slot",n,r&&r());let i=t[e];i&&i._c&&(i._d=!1),pe();const o=i&&Rm(i(n)),c=nn(He,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!s&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function Rm(t){return t.some(e=>Or(e)?!(e.type===ft||e.type===He&&!Rm(e.children)):!0)?t:null}function Dw(t,e){const n={};for(const r in t)n[e&&/[A-Z]/.test(r)?`on:${r}`:Hi(r)]=t[r];return n}const Xl=t=>t?a_(t)?Do(t):Xl(t.parent):null,Ki=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xl(t.parent),$root:t=>Xl(t.root),$emit:t=>t.emit,$options:t=>ch(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ec(t.update)}),$nextTick:t=>t.n||(t.n=So.bind(t.proxy)),$watch:t=>hI.bind(t)}),Tl=(t,e)=>t!==Ue&&!t.__isScriptSetup&&De(t,e),Zl={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tl(r,e))return o[e]=1,r[e];if(s!==Ue&&De(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&De(u,e))return o[e]=3,i[e];if(n!==Ue&&De(n,e))return o[e]=4,n[e];eu&&(o[e]=0)}}const h=Ki[e];let p,g;if(h)return e==="$attrs"&&jt(t.attrs,"get",""),h(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ue&&De(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,De(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tl(s,e)?(s[e]=n,!0):r!==Ue&&De(r,e)?(r[e]=n,!0):De(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Ue&&De(t,o)||Tl(e,o)||(c=i[0])&&De(c,o)||De(r,o)||De(Ki,o)||De(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:De(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}},Nw=Qe({},Zl,{get(t,e){if(e!==Symbol.unscopables)return Zl.get(t,e,t)},has(t,e){return e[0]!=="_"&&!gT(e)}});function Vw(){return null}function Mw(){return null}function Lw(t){}function xw(t){}function Fw(){return null}function Uw(){}function $w(t,e){return null}function Bw(){return Sm().slots}function jw(){return Sm().attrs}function Sm(){const t=rr();return t.setupContext||(t.setupContext=u_(t))}function uo(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function qw(t,e){const n=uo(t);for(const r in e){if(r.startsWith("__skip"))continue;let s=n[r];s?se(s)||ge(s)?s=n[r]={type:s,default:e[r]}:s.default=e[r]:s===null&&(s=n[r]={default:e[r]}),s&&e[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function Hw(t,e){return!t||!e?t||e:se(t)&&se(e)?t.concat(e):Qe({},uo(t),uo(e))}function Kw(t,e){const n={};for(const r in t)e.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>t[r]});return n}function Ww(t){const e=rr();let n=t();return ou(),Ku(n)&&(n=n.catch(r=>{throw rs(e),r})),[n,()=>rs(e)]}let eu=!0;function Gw(t){const e=ch(t),n=t.proxy,r=t.ctx;eu=!1,e.beforeCreate&&If(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:h,beforeMount:p,mounted:g,beforeUpdate:w,updated:C,activated:V,deactivated:M,beforeDestroy:F,beforeUnmount:D,destroyed:S,unmounted:O,render:x,renderTracked:k,renderTriggered:E,errorCaptured:_,serverPrefetch:m,expose:y,inheritAttrs:I,components:b,directives:T,filters:me}=e;if(u&&zw(u,r,null),o)for(const fe in o){const Z=o[fe];ge(Z)&&(r[fe]=Z.bind(n))}if(s){const fe=s.call(n,n);Be(fe)&&(t.data=Ro(fe))}if(eu=!0,i)for(const fe in i){const Z=i[fe],tt=ge(Z)?Z.bind(n,n):ge(Z.get)?Z.get.bind(n,n):Ft,we=!ge(Z)&&ge(Z.set)?Z.set.bind(n):Ft,ce=rn({get:tt,set:we});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>ce.value,set:ne=>ce.value=ne})}if(c)for(const fe in c)Cm(c[fe],r,n,fe);if(l){const fe=ge(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(Z=>{js(Z,fe[Z])})}h&&If(h,t,"c");function te(fe,Z){se(Z)?Z.forEach(tt=>fe(tt.bind(n))):Z&&fe(Z.bind(n))}if(te(Em,p),te(ms,g),te(Tm,w),te(bc,C),te(zm,V),te(Qm,M),te(Am,_),te(bm,k),te(Im,E),te(Ac,D),te(Rc,O),te(wm,m),se(y))if(y.length){const fe=t.exposed||(t.exposed={});y.forEach(Z=>{Object.defineProperty(fe,Z,{get:()=>n[Z],set:tt=>n[Z]=tt})})}else t.exposed||(t.exposed={});x&&t.render===Ft&&(t.render=x),I!=null&&(t.inheritAttrs=I),b&&(t.components=b),T&&(t.directives=T)}function zw(t,e,n=Ft){se(t)&&(t=tu(t));for(const r in t){const s=t[r];let i;Be(s)?"default"in s?i=Jt(s.from||r,s.default,!0):i=Jt(s.from||r):i=Jt(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function If(t,e,n){Yt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cm(t,e,n,r){const s=r.includes(".")?Gm(n,r):()=>n[r];if(Ye(t)){const i=e[t];ge(i)&&qs(s,i)}else if(ge(t))qs(s,t.bind(n));else if(Be(t))if(se(t))t.forEach(i=>Cm(i,e,n,r));else{const i=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(i)&&qs(s,i,t)}}function ch(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ja(l,u,o,!0)),ja(l,e,o)),Be(e)&&i.set(e,l),l}function ja(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ja(t,i,n,!0),s&&s.forEach(o=>ja(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Qw[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Qw={data:bf,props:Af,emits:Af,methods:Li,computed:Li,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Li,directives:Li,watch:Jw,provide:bf,inject:Yw};function bf(t,e){return e?t?function(){return Qe(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function Yw(t,e){return Li(tu(t),tu(e))}function tu(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Li(t,e){return t?Qe(Object.create(null),t,e):e}function Af(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Qe(Object.create(null),uo(t),uo(e??{})):e}function Jw(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function Pm(){return{app:null,config:{isNativeTag:cT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xw=0;function Zw(t,e){return function(r,s=null){ge(r)||(r=Qe({},r)),s!=null&&!Be(s)&&(s=null);const i=Pm(),o=new WeakSet;let c=!1;const l=i.app={_uid:Xw++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:d_,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&ge(u.install)?(o.add(u),u.install(l,...h)):ge(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,p){if(!c){const g=Ce(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),h&&e?e(g,u):t(g,u,p),c=!0,l._container=u,u.__vue_app__=l,Do(g.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=Bs;Bs=l;try{return u()}finally{Bs=h}}};return l}}let Bs=null;function js(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function Jt(t,e,n=!1){const r=ot||at;if(r||Bs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Bs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ge(e)?e.call(r&&r.proxy):e}}function eI(){return!!(ot||at||Bs)}const km={},Om=()=>Object.create(km),Dm=t=>Object.getPrototypeOf(t)===km;function tI(t,e,n,r=!1){const s={},i=Om();t.propsDefaults=Object.create(null),Nm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ju(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function nI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=ke(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let p=0;p<h.length;p++){let g=h[p];if(Tc(t.emitsOptions,g))continue;const w=e[g];if(l)if(De(i,g))w!==i[g]&&(i[g]=w,u=!0);else{const C=Mt(g);s[C]=nu(l,c,C,w,t,!1)}else w!==i[g]&&(i[g]=w,u=!0)}}}else{Nm(t,e,s,i)&&(u=!0);let h;for(const p in c)(!e||!De(e,p)&&((h=Gt(p))===p||!De(e,h)))&&(l?n&&(n[p]!==void 0||n[h]!==void 0)&&(s[p]=nu(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!De(e,p))&&(delete i[p],u=!0)}u&&Kn(t.attrs,"set","")}function Nm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ms(l))continue;const u=e[l];let h;s&&De(s,h=Mt(l))?!i||!i.includes(h)?n[h]=u:(c||(c={}))[h]=u:Tc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ke(n),u=c||Ue;for(let h=0;h<i.length;h++){const p=i[h];n[p]=nu(s,l,p,u[p],t,!De(u,p))}}return o}function nu(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=De(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ge(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=rs(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}function Vm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ge(t)){const h=p=>{l=!0;const[g,w]=Vm(p,e,!0);Qe(o,g),w&&c.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Be(t)&&r.set(t,Ns),Ns;if(se(i))for(let h=0;h<i.length;h++){const p=Mt(i[h]);Rf(p)&&(o[p]=Ue)}else if(i)for(const h in i){const p=Mt(h);if(Rf(p)){const g=i[h],w=o[p]=se(g)||ge(g)?{type:g}:Qe({},g);if(w){const C=Pf(Boolean,w.type),V=Pf(String,w.type);w[0]=C>-1,w[1]=V<0||C<V,(C>-1||De(w,"default"))&&c.push(p)}}}const u=[o,c];return Be(t)&&r.set(t,u),u}function Rf(t){return t[0]!=="$"&&!Ms(t)}function Sf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Cf(t,e){return Sf(t)===Sf(e)}function Pf(t,e){return se(e)?e.findIndex(n=>Cf(n,t)):ge(e)&&Cf(e,t)?0:-1}const Mm=t=>t[0]==="_"||t==="$stable",lh=t=>se(t)?t.map(Wt):[Wt(t)],rI=(t,e,n)=>{if(e._n)return e;const r=At((...s)=>lh(e(...s)),n);return r._c=!1,r},Lm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Mm(s))continue;const i=t[s];if(ge(i))e[s]=rI(s,i,r);else if(i!=null){const o=lh(i);e[s]=()=>o}}},xm=(t,e)=>{const n=lh(e);t.slots.default=()=>n},sI=(t,e)=>{const n=t.slots=Om();if(t.vnode.shapeFlag&32){const r=e._;r?(Qe(n,e),$g(n,"_",r,!0)):Lm(e,n)}else e&&xm(t,e)},iI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ue;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(Qe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Lm(e,s)),o=e}else e&&(xm(t,e),o={default:1});if(i)for(const c in s)!Mm(c)&&o[c]==null&&delete s[c]};function qa(t,e,n,r,s=!1){if(se(t)){t.forEach((g,w)=>qa(g,e&&(se(e)?e[w]:e),n,r,s));return}if(Xr(r)&&!s)return;const i=r.shapeFlag&4?Do(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,h=c.refs===Ue?c.refs={}:c.refs,p=c.setupState;if(u!=null&&u!==l&&(Ye(u)?(h[u]=null,De(p,u)&&(p[u]=null)):yt(u)&&(u.value=null)),ge(l))Wn(l,c,12,[o,h]);else{const g=Ye(l),w=yt(l);if(g||w){const C=()=>{if(t.f){const V=g?De(p,l)?p[l]:h[l]:l.value;s?se(V)&&Hu(V,i):se(V)?V.includes(i)||V.push(i):g?(h[l]=[i],De(p,l)&&(p[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else g?(h[l]=o,De(p,l)&&(p[l]=o)):w&&(l.value=o,t.k&&(h[t.k]=o))};o?(C.id=-1,ut(C,n)):C()}}}let kf=!1;const Ss=()=>{kf||(console.error("Hydration completed but contains mismatches."),kf=!0)},oI=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",aI=t=>t.namespaceURI.includes("MathML"),fa=t=>{if(oI(t))return"svg";if(aI(t))return"mathml"},pa=t=>t.nodeType===8;function cI(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:c,insert:l,createComment:u}}=t,h=(S,O)=>{if(!O.hasChildNodes()){n(null,S,O),Ba(),O._vnode=S;return}p(O.firstChild,S,null,null,null),Ba(),O._vnode=S},p=(S,O,x,k,E,_=!1)=>{_=_||!!O.dynamicChildren;const m=pa(S)&&S.data==="[",y=()=>V(S,O,x,k,E,m),{type:I,ref:b,shapeFlag:T,patchFlag:me}=O;let be=S.nodeType;O.el=S,me===-2&&(_=!1,O.dynamicChildren=null);let te=null;switch(I){case ts:be!==3?O.children===""?(l(O.el=s(""),o(S),S),te=S):te=y():(S.data!==O.children&&(Ss(),S.data=O.children),te=i(S));break;case ft:D(S)?(te=i(S),F(O.el=S.content.firstChild,S,x)):be!==8||m?te=y():te=i(S);break;case Zr:if(m&&(S=i(S),be=S.nodeType),be===1||be===3){te=S;const fe=!O.children.length;for(let Z=0;Z<O.staticCount;Z++)fe&&(O.children+=te.nodeType===1?te.outerHTML:te.data),Z===O.staticCount-1&&(O.anchor=te),te=i(te);return m?i(te):te}else y();break;case He:m?te=C(S,O,x,k,E,_):te=y();break;default:if(T&1)(be!==1||O.type.toLowerCase()!==S.tagName.toLowerCase())&&!D(S)?te=y():te=g(S,O,x,k,E,_);else if(T&6){O.slotScopeIds=E;const fe=o(S);if(m?te=M(S):pa(S)&&S.data==="teleport start"?te=M(S,S.data,"teleport end"):te=i(S),e(O,fe,null,x,k,fa(fe),_),Xr(O)){let Z;m?(Z=Ce(He),Z.anchor=te?te.previousSibling:fe.lastChild):Z=S.nodeType===3?Vt(""):Ce("div"),Z.el=S,O.component.subTree=Z}}else T&64?be!==8?te=y():te=O.type.hydrate(S,O,x,k,E,_,t,w):T&128&&(te=O.type.hydrate(S,O,x,k,fa(o(S)),E,_,t,p))}return b!=null&&qa(b,null,k,O),te},g=(S,O,x,k,E,_)=>{_=_||!!O.dynamicChildren;const{type:m,props:y,patchFlag:I,shapeFlag:b,dirs:T,transition:me}=O,be=m==="input"||m==="option";if(be||I!==-1){T&&wn(O,null,x,"created");let te=!1;if(D(S)){te=Bm(k,me)&&x&&x.vnode.props&&x.vnode.props.appear;const Z=S.content.firstChild;te&&me.beforeEnter(Z),F(Z,S,x),O.el=S=Z}if(b&16&&!(y&&(y.innerHTML||y.textContent))){let Z=w(S.firstChild,O,S,x,k,E,_);for(;Z;){Ss();const tt=Z;Z=Z.nextSibling,c(tt)}}else b&8&&S.textContent!==O.children&&(Ss(),S.textContent=O.children);if(y)if(be||!_||I&48)for(const Z in y)(be&&(Z.endsWith("value")||Z==="indeterminate")||bo(Z)&&!Ms(Z)||Z[0]===".")&&r(S,Z,null,y[Z],void 0,void 0,x);else y.onClick&&r(S,"onClick",null,y.onClick,void 0,void 0,x);let fe;(fe=y&&y.onVnodeBeforeMount)&&Lt(fe,x,O),T&&wn(O,null,x,"beforeMount"),((fe=y&&y.onVnodeMounted)||T||te)&&vm(()=>{fe&&Lt(fe,x,O),te&&me.enter(S),T&&wn(O,null,x,"mounted")},k)}return S.nextSibling},w=(S,O,x,k,E,_,m)=>{m=m||!!O.dynamicChildren;const y=O.children,I=y.length;for(let b=0;b<I;b++){const T=m?y[b]:y[b]=Wt(y[b]);S?S=p(S,T,k,E,_,m):T.type===ts&&!T.children?l(T.el=s(""),x):(Ss(),n(null,T,x,null,k,E,fa(x),_))}return S},C=(S,O,x,k,E,_)=>{const{slotScopeIds:m}=O;m&&(E=E?E.concat(m):m);const y=o(S),I=w(i(S),O,y,x,k,E,_);return I&&pa(I)&&I.data==="]"?i(O.anchor=I):(Ss(),l(O.anchor=u("]"),y,I),I)},V=(S,O,x,k,E,_)=>{if(Ss(),O.el=null,_){const I=M(S);for(;;){const b=i(S);if(b&&b!==I)c(b);else break}}const m=i(S),y=o(S);return c(S),n(null,O,y,m,x,k,fa(y),E),m},M=(S,O="[",x="]")=>{let k=0;for(;S;)if(S=i(S),S&&pa(S)&&(S.data===O&&k++,S.data===x)){if(k===0)return i(S);k--}return S},F=(S,O,x)=>{const k=O.parentNode;k&&k.replaceChild(S,O);let E=x;for(;E;)E.vnode.el===O&&(E.vnode.el=E.subTree.el=S),E=E.parent},D=S=>S.nodeType===1&&S.tagName.toLowerCase()==="template";return[h,p]}const ut=vm;function Fm(t){return $m(t)}function Um(t){return $m(t,cI)}function $m(t,e){const n=Bg();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:h,parentNode:p,nextSibling:g,setScopeId:w=Ft,insertStaticContent:C}=t,V=(A,R,L,j=null,$=null,G=null,Y=void 0,W=null,z=!!R.dynamicChildren)=>{if(A===R)return;A&&!un(A,R)&&(j=B(A),ne(A,$,G,!0),A=null),R.patchFlag===-2&&(z=!1,R.dynamicChildren=null);const{type:H,ref:X,shapeFlag:ue}=R;switch(H){case ts:M(A,R,L,j);break;case ft:F(A,R,L,j);break;case Zr:A==null&&D(R,L,j,Y);break;case He:b(A,R,L,j,$,G,Y,W,z);break;default:ue&1?x(A,R,L,j,$,G,Y,W,z):ue&6?T(A,R,L,j,$,G,Y,W,z):(ue&64||ue&128)&&H.process(A,R,L,j,$,G,Y,W,z,ie)}X!=null&&$&&qa(X,A&&A.ref,G,R||A,!R)},M=(A,R,L,j)=>{if(A==null)r(R.el=c(R.children),L,j);else{const $=R.el=A.el;R.children!==A.children&&u($,R.children)}},F=(A,R,L,j)=>{A==null?r(R.el=l(R.children||""),L,j):R.el=A.el},D=(A,R,L,j)=>{[A.el,A.anchor]=C(A.children,R,L,j,A.el,A.anchor)},S=({el:A,anchor:R},L,j)=>{let $;for(;A&&A!==R;)$=g(A),r(A,L,j),A=$;r(R,L,j)},O=({el:A,anchor:R})=>{let L;for(;A&&A!==R;)L=g(A),s(A),A=L;s(R)},x=(A,R,L,j,$,G,Y,W,z)=>{R.type==="svg"?Y="svg":R.type==="math"&&(Y="mathml"),A==null?k(R,L,j,$,G,Y,W,z):m(A,R,$,G,Y,W,z)},k=(A,R,L,j,$,G,Y,W)=>{let z,H;const{props:X,shapeFlag:ue,transition:le,dirs:ae}=A;if(z=A.el=o(A.type,G,X&&X.is,X),ue&8?h(z,A.children):ue&16&&_(A.children,z,null,j,$,wl(A,G),Y,W),ae&&wn(A,null,j,"created"),E(z,A,A.scopeId,Y,j),X){for(const Le in X)Le!=="value"&&!Ms(Le)&&i(z,Le,null,X[Le],G,A.children,j,$,lt);"value"in X&&i(z,"value",null,X.value,G),(H=X.onVnodeBeforeMount)&&Lt(H,j,A)}ae&&wn(A,null,j,"beforeMount");const de=Bm($,le);de&&le.beforeEnter(z),r(z,R,L),((H=X&&X.onVnodeMounted)||de||ae)&&ut(()=>{H&&Lt(H,j,A),de&&le.enter(z),ae&&wn(A,null,j,"mounted")},$)},E=(A,R,L,j,$)=>{if(L&&w(A,L),j)for(let G=0;G<j.length;G++)w(A,j[G]);if($){let G=$.subTree;if(R===G){const Y=$.vnode;E(A,Y,Y.scopeId,Y.slotScopeIds,$.parent)}}},_=(A,R,L,j,$,G,Y,W,z=0)=>{for(let H=z;H<A.length;H++){const X=A[H]=W?yr(A[H]):Wt(A[H]);V(null,X,R,L,j,$,G,Y,W)}},m=(A,R,L,j,$,G,Y)=>{const W=R.el=A.el;let{patchFlag:z,dynamicChildren:H,dirs:X}=R;z|=A.patchFlag&16;const ue=A.props||Ue,le=R.props||Ue;let ae;if(L&&qr(L,!1),(ae=le.onVnodeBeforeUpdate)&&Lt(ae,L,R,A),X&&wn(R,A,L,"beforeUpdate"),L&&qr(L,!0),H?y(A.dynamicChildren,H,W,L,j,wl(R,$),G):Y||Z(A,R,W,null,L,j,wl(R,$),G,!1),z>0){if(z&16)I(W,R,ue,le,L,j,$);else if(z&2&&ue.class!==le.class&&i(W,"class",null,le.class,$),z&4&&i(W,"style",ue.style,le.style,$),z&8){const de=R.dynamicProps;for(let Le=0;Le<de.length;Le++){const Oe=de[Le],Ze=ue[Oe],qt=le[Oe];(qt!==Ze||Oe==="value")&&i(W,Oe,Ze,qt,$,A.children,L,j,lt)}}z&1&&A.children!==R.children&&h(W,R.children)}else!Y&&H==null&&I(W,R,ue,le,L,j,$);((ae=le.onVnodeUpdated)||X)&&ut(()=>{ae&&Lt(ae,L,R,A),X&&wn(R,A,L,"updated")},j)},y=(A,R,L,j,$,G,Y)=>{for(let W=0;W<R.length;W++){const z=A[W],H=R[W],X=z.el&&(z.type===He||!un(z,H)||z.shapeFlag&70)?p(z.el):L;V(z,H,X,null,j,$,G,Y,!0)}},I=(A,R,L,j,$,G,Y)=>{if(L!==j){if(L!==Ue)for(const W in L)!Ms(W)&&!(W in j)&&i(A,W,L[W],null,Y,R.children,$,G,lt);for(const W in j){if(Ms(W))continue;const z=j[W],H=L[W];z!==H&&W!=="value"&&i(A,W,H,z,Y,R.children,$,G,lt)}"value"in j&&i(A,"value",L.value,j.value,Y)}},b=(A,R,L,j,$,G,Y,W,z)=>{const H=R.el=A?A.el:c(""),X=R.anchor=A?A.anchor:c("");let{patchFlag:ue,dynamicChildren:le,slotScopeIds:ae}=R;ae&&(W=W?W.concat(ae):ae),A==null?(r(H,L,j),r(X,L,j),_(R.children||[],L,X,$,G,Y,W,z)):ue>0&&ue&64&&le&&A.dynamicChildren?(y(A.dynamicChildren,le,L,$,G,Y,W),(R.key!=null||$&&R===$.subTree)&&uh(A,R,!0)):Z(A,R,L,X,$,G,Y,W,z)},T=(A,R,L,j,$,G,Y,W,z)=>{R.slotScopeIds=W,A==null?R.shapeFlag&512?$.ctx.activate(R,L,j,Y,z):me(R,L,j,$,G,Y,z):be(A,R,z)},me=(A,R,L,j,$,G,Y)=>{const W=A.component=o_(A,j,$);if(ko(A)&&(W.ctx.renderer=ie),c_(W),W.asyncDep){if($&&$.registerDep(W,te,Y),!A.el){const z=W.subTree=Ce(ft);F(null,z,R,L)}}else te(W,A,R,L,$,G,Y)},be=(A,R,L)=>{const j=R.component=A.component;if(vw(A,R,L))if(j.asyncDep&&!j.asyncResolved){fe(j,R,L);return}else j.next=R,dw(j.update),j.effect.dirty=!0,j.update();else R.el=A.el,j.vnode=R},te=(A,R,L,j,$,G,Y)=>{const W=()=>{if(A.isMounted){let{next:X,bu:ue,u:le,parent:ae,vnode:de}=A;{const Zt=jm(A);if(Zt){X&&(X.el=de.el,fe(A,X,Y)),Zt.asyncDep.then(()=>{A.isUnmounted||W()});return}}let Le=X,Oe;qr(A,!1),X?(X.el=de.el,fe(A,X,Y)):X=de,ue&&Ls(ue),(Oe=X.props&&X.props.onVnodeBeforeUpdate)&&Lt(Oe,ae,X,de),qr(A,!0);const Ze=Aa(A),qt=A.subTree;A.subTree=Ze,V(qt,Ze,p(qt.el),B(qt),A,$,G),X.el=Ze.el,Le===null&&sh(A,Ze.el),le&&ut(le,$),(Oe=X.props&&X.props.onVnodeUpdated)&&ut(()=>Lt(Oe,ae,X,de),$)}else{let X;const{el:ue,props:le}=R,{bm:ae,m:de,parent:Le}=A,Oe=Xr(R);if(qr(A,!1),ae&&Ls(ae),!Oe&&(X=le&&le.onVnodeBeforeMount)&&Lt(X,Le,R),qr(A,!0),ue&&$e){const Ze=()=>{A.subTree=Aa(A),$e(ue,A.subTree,A,$,null)};Oe?R.type.__asyncLoader().then(()=>!A.isUnmounted&&Ze()):Ze()}else{const Ze=A.subTree=Aa(A);V(null,Ze,L,j,A,$,G),R.el=Ze.el}if(de&&ut(de,$),!Oe&&(X=le&&le.onVnodeMounted)){const Ze=R;ut(()=>Lt(X,Le,Ze),$)}(R.shapeFlag&256||Le&&Xr(Le.vnode)&&Le.vnode.shapeFlag&256)&&A.a&&ut(A.a,$),A.isMounted=!0,R=L=j=null}},z=A.effect=new zs(W,Ft,()=>Ec(H),A.scope),H=A.update=()=>{z.dirty&&z.run()};H.id=A.uid,qr(A,!0),H()},fe=(A,R,L)=>{R.component=A;const j=A.vnode.props;A.vnode=R,A.next=null,nI(A,R.props,j,L),iI(A,R.children,L),Lr(),vf(A),xr()},Z=(A,R,L,j,$,G,Y,W,z=!1)=>{const H=A&&A.children,X=A?A.shapeFlag:0,ue=R.children,{patchFlag:le,shapeFlag:ae}=R;if(le>0){if(le&128){we(H,ue,L,j,$,G,Y,W,z);return}else if(le&256){tt(H,ue,L,j,$,G,Y,W,z);return}}ae&8?(X&16&&lt(H,$,G),ue!==H&&h(L,ue)):X&16?ae&16?we(H,ue,L,j,$,G,Y,W,z):lt(H,$,G,!0):(X&8&&h(L,""),ae&16&&_(ue,L,j,$,G,Y,W,z))},tt=(A,R,L,j,$,G,Y,W,z)=>{A=A||Ns,R=R||Ns;const H=A.length,X=R.length,ue=Math.min(H,X);let le;for(le=0;le<ue;le++){const ae=R[le]=z?yr(R[le]):Wt(R[le]);V(A[le],ae,L,null,$,G,Y,W,z)}H>X?lt(A,$,G,!0,!1,ue):_(R,L,j,$,G,Y,W,z,ue)},we=(A,R,L,j,$,G,Y,W,z)=>{let H=0;const X=R.length;let ue=A.length-1,le=X-1;for(;H<=ue&&H<=le;){const ae=A[H],de=R[H]=z?yr(R[H]):Wt(R[H]);if(un(ae,de))V(ae,de,L,null,$,G,Y,W,z);else break;H++}for(;H<=ue&&H<=le;){const ae=A[ue],de=R[le]=z?yr(R[le]):Wt(R[le]);if(un(ae,de))V(ae,de,L,null,$,G,Y,W,z);else break;ue--,le--}if(H>ue){if(H<=le){const ae=le+1,de=ae<X?R[ae].el:j;for(;H<=le;)V(null,R[H]=z?yr(R[H]):Wt(R[H]),L,de,$,G,Y,W,z),H++}}else if(H>le)for(;H<=ue;)ne(A[H],$,G,!0),H++;else{const ae=H,de=H,Le=new Map;for(H=de;H<=le;H++){const kt=R[H]=z?yr(R[H]):Wt(R[H]);kt.key!=null&&Le.set(kt.key,H)}let Oe,Ze=0;const qt=le-de+1;let Zt=!1,yi=0;const ar=new Array(qt);for(H=0;H<qt;H++)ar[H]=0;for(H=ae;H<=ue;H++){const kt=A[H];if(Ze>=qt){ne(kt,$,G,!0);continue}let en;if(kt.key!=null)en=Le.get(kt.key);else for(Oe=de;Oe<=le;Oe++)if(ar[Oe-de]===0&&un(kt,R[Oe])){en=Oe;break}en===void 0?ne(kt,$,G,!0):(ar[en-de]=H+1,en>=yi?yi=en:Zt=!0,V(kt,R[en],L,null,$,G,Y,W,z),Ze++)}const Ts=Zt?lI(ar):Ns;for(Oe=Ts.length-1,H=qt-1;H>=0;H--){const kt=de+H,en=R[kt],ws=kt+1<X?R[kt+1].el:j;ar[H]===0?V(null,en,L,ws,$,G,Y,W,z):Zt&&(Oe<0||H!==Ts[Oe]?ce(en,L,ws,2):Oe--)}}},ce=(A,R,L,j,$=null)=>{const{el:G,type:Y,transition:W,children:z,shapeFlag:H}=A;if(H&6){ce(A.component.subTree,R,L,j);return}if(H&128){A.suspense.move(R,L,j);return}if(H&64){Y.move(A,R,L,ie);return}if(Y===He){r(G,R,L);for(let ue=0;ue<z.length;ue++)ce(z[ue],R,L,j);r(A.anchor,R,L);return}if(Y===Zr){S(A,R,L);return}if(j!==2&&H&1&&W)if(j===0)W.beforeEnter(G),r(G,R,L),ut(()=>W.enter(G),$);else{const{leave:ue,delayLeave:le,afterLeave:ae}=W,de=()=>r(G,R,L),Le=()=>{ue(G,()=>{de(),ae&&ae()})};le?le(G,de,Le):Le()}else r(G,R,L)},ne=(A,R,L,j=!1,$=!1)=>{const{type:G,props:Y,ref:W,children:z,dynamicChildren:H,shapeFlag:X,patchFlag:ue,dirs:le,memoIndex:ae}=A;if(W!=null&&qa(W,null,L,A,!0),ae!=null&&(R.renderCache[ae]=void 0),X&256){R.ctx.deactivate(A);return}const de=X&1&&le,Le=!Xr(A);let Oe;if(Le&&(Oe=Y&&Y.onVnodeBeforeUnmount)&&Lt(Oe,R,A),X&6)Tn(A.component,L,j);else{if(X&128){A.suspense.unmount(L,j);return}de&&wn(A,null,R,"beforeUnmount"),X&64?A.type.remove(A,R,L,$,ie,j):H&&(G!==He||ue>0&&ue&64)?lt(H,R,L,!1,!0):(G===He&&ue&384||!$&&X&16)&&lt(z,R,L),j&&Ve(A)}(Le&&(Oe=Y&&Y.onVnodeUnmounted)||de)&&ut(()=>{Oe&&Lt(Oe,R,A),de&&wn(A,null,R,"unmounted")},L)},Ve=A=>{const{type:R,el:L,anchor:j,transition:$}=A;if(R===He){Et(L,j);return}if(R===Zr){O(A);return}const G=()=>{s(L),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(A.shapeFlag&1&&$&&!$.persisted){const{leave:Y,delayLeave:W}=$,z=()=>Y(L,G);W?W(A.el,G,z):z()}else G()},Et=(A,R)=>{let L;for(;A!==R;)L=g(A),s(A),A=L;s(R)},Tn=(A,R,L)=>{const{bum:j,scope:$,update:G,subTree:Y,um:W,m:z,a:H}=A;Ha(z),Ha(H),j&&Ls(j),$.stop(),G&&(G.active=!1,ne(Y,A,R,L)),W&&ut(W,R),ut(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},lt=(A,R,L,j=!1,$=!1,G=0)=>{for(let Y=G;Y<A.length;Y++)ne(A[Y],R,L,j,$)},B=A=>A.shapeFlag&6?B(A.component.subTree):A.shapeFlag&128?A.suspense.next():g(A.anchor||A.el);let ee=!1;const J=(A,R,L)=>{A==null?R._vnode&&ne(R._vnode,null,null,!0):V(R._vnode||null,A,R,null,null,null,L),ee||(ee=!0,vf(),Ba(),ee=!1),R._vnode=A},ie={p:V,um:ne,m:ce,r:Ve,mt:me,mc:_,pc:Z,pbc:y,n:B,o:t};let Re,$e;return e&&([Re,$e]=e(ie)),{render:J,hydrate:Re,createApp:Zw(J,Re)}}function wl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function uh(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=yr(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&uh(o,c)),c.type===ts&&(c.el=o.el)}}function lI(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jm(e)}function Ha(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const qm=Symbol.for("v-scx"),Hm=()=>Jt(qm);function uI(t,e){return Po(t,null,e)}function Km(t,e){return Po(t,null,{flush:"post"})}function Wm(t,e){return Po(t,null,{flush:"sync"})}const ga={};function qs(t,e,n){return Po(t,e,n)}function Po(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Ue){if(e&&i){const k=e;e=(...E)=>{k(...E),x()}}const l=ot,u=k=>r===!0?k:Er(k,r===!1?1:void 0);let h,p=!1,g=!1;if(yt(t)?(h=()=>t.value,p=so(t)):xs(t)?(h=()=>u(t),p=!0):se(t)?(g=!0,p=t.some(k=>xs(k)||so(k)),h=()=>t.map(k=>{if(yt(k))return k.value;if(xs(k))return u(k);if(ge(k))return Wn(k,l,2)})):ge(t)?e?h=()=>Wn(t,l,2):h=()=>(w&&w(),Yt(t,l,3,[C])):h=Ft,e&&r){const k=h;h=()=>Er(k())}let w,C=k=>{w=S.onStop=()=>{Wn(k,l,4),w=S.onStop=void 0}},V;if(Oo)if(C=Ft,e?n&&Yt(e,l,3,[h(),g?[]:void 0,C]):h(),s==="sync"){const k=Hm();V=k.__watcherHandles||(k.__watcherHandles=[])}else return Ft;let M=g?new Array(t.length).fill(ga):ga;const F=()=>{if(!(!S.active||!S.dirty))if(e){const k=S.run();(r||p||(g?k.some((E,_)=>gn(E,M[_])):gn(k,M)))&&(w&&w(),Yt(e,l,3,[k,M===ga?void 0:g&&M[0]===ga?[]:M,C]),M=k)}else S.run()};F.allowRecurse=!!e;let D;s==="sync"?D=F:s==="post"?D=()=>ut(F,l&&l.suspense):(F.pre=!0,l&&(F.id=l.uid),D=()=>Ec(F));const S=new zs(h,Ft,D),O=Kg(),x=()=>{S.stop(),O&&Hu(O.effects,S)};return e?n?F():M=S.run():s==="post"?ut(S.run.bind(S),l&&l.suspense):S.run(),V&&V.push(x),x}function hI(t,e,n){const r=this.proxy,s=Ye(t)?t.includes(".")?Gm(r,t):()=>r[t]:t.bind(r,r);let i;ge(e)?i=e:(i=e.handler,n=e);const o=rs(this),c=Po(s,i.bind(r),n);return o(),c}function Gm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Er(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))Er(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)Er(t[r],e,n);else if(fs(t)||Vs(t))t.forEach(r=>{Er(r,e,n)});else if(Ug(t)){for(const r in t)Er(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Er(t[r],e,n)}return t}const ko=t=>t.type.__isKeepAlive,dI={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=rr(),r=n.ctx;if(!r.renderer)return()=>{const D=e.default&&e.default();return D&&D.length===1?D[0]:D};const s=new Map,i=new Set;let o=null;const c=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:p}}}=r,g=p("div");r.activate=(D,S,O,x,k)=>{const E=D.component;u(D,S,O,0,c),l(E.vnode,D,S,O,E,c,x,D.slotScopeIds,k),ut(()=>{E.isDeactivated=!1,E.a&&Ls(E.a);const _=D.props&&D.props.onVnodeMounted;_&&Lt(_,E.parent,D)},c)},r.deactivate=D=>{const S=D.component;Ha(S.m),Ha(S.a),u(D,g,null,1,c),ut(()=>{S.da&&Ls(S.da);const O=D.props&&D.props.onVnodeUnmounted;O&&Lt(O,S.parent,D),S.isDeactivated=!0},c)};function w(D){Il(D),h(D,n,c,!0)}function C(D){s.forEach((S,O)=>{const x=lu(S.type);x&&(!D||!D(x))&&V(O)})}function V(D){const S=s.get(D);!o||!un(S,o)?w(S):o&&Il(o),s.delete(D),i.delete(D)}qs(()=>[t.include,t.exclude],([D,S])=>{D&&C(O=>xi(D,O)),S&&C(O=>!xi(S,O))},{flush:"post",deep:!0});let M=null;const F=()=>{M!=null&&(Yl(n.subTree.type)?ut(()=>{s.set(M,ma(n.subTree))},n.subTree.suspense):s.set(M,ma(n.subTree)))};return ms(F),bc(F),Ac(()=>{s.forEach(D=>{const{subTree:S,suspense:O}=n,x=ma(S);if(D.type===x.type&&D.key===x.key){Il(x);const k=x.component.da;k&&ut(k,O);return}w(D)})}),()=>{if(M=null,!e.default)return null;const D=e.default(),S=D[0];if(D.length>1)return o=null,D;if(!Or(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return o=null,S;let O=ma(S);const x=O.type,k=lu(Xr(O)?O.type.__asyncResolved||{}:x),{include:E,exclude:_,max:m}=t;if(E&&(!k||!xi(E,k))||_&&k&&xi(_,k))return o=O,S;const y=O.key==null?x:O.key,I=s.get(y);return O.el&&(O=On(O),S.shapeFlag&128&&(S.ssContent=O)),M=y,I?(O.el=I.el,O.component=I.component,O.transition&&kr(O,O.transition),O.shapeFlag|=512,i.delete(y),i.add(y)):(i.add(y),m&&i.size>parseInt(m,10)&&V(i.values().next().value)),O.shapeFlag|=256,o=O,Yl(S.type)?S:O}}},fI=dI;function xi(t,e){return se(t)?t.some(n=>xi(n,e)):Ye(t)?t.split(",").includes(e):uT(t)?t.test(e):!1}function zm(t,e){Ym(t,"a",e)}function Qm(t,e){Ym(t,"da",e)}function Ym(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ic(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ko(s.parent.vnode)&&pI(r,e,n,s),s=s.parent}}function pI(t,e,n,r){const s=Ic(e,t,r,!0);Rc(()=>{Hu(r[e],s)},n)}function Il(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ma(t){return t.shapeFlag&128?t.ssContent:t}const _r=Symbol("_leaveCb"),_a=Symbol("_enterCb");function hh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ms(()=>{t.isMounted=!0}),Ac(()=>{t.isUnmounting=!0}),t}const tn=[Function,Array],dh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},Jm=t=>{const e=t.subTree;return e.component?Jm(e.component):e},gI={name:"BaseTransition",props:dh,setup(t,{slots:e}){const n=rr(),r=hh();return()=>{const s=e.default&&Sc(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==ft){i=g;break}}const o=ke(t),{mode:c}=o;if(r.isLeaving)return bl(i);const l=Of(i);if(!l)return bl(i);let u=Ys(l,o,r,n,g=>u=g);kr(l,u);const h=n.subTree,p=h&&Of(h);if(p&&p.type!==ft&&!un(l,p)&&Jm(n).type!==ft){const g=Ys(p,o,r,n);if(kr(p,g),c==="out-in"&&l.type!==ft)return r.isLeaving=!0,g.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},bl(i);c==="in-out"&&l.type!==ft&&(g.delayLeave=(w,C,V)=>{const M=Zm(r,p);M[String(p.key)]=p,w[_r]=()=>{C(),w[_r]=void 0,delete u.delayedLeave},u.delayedLeave=V})}return i}}},Xm=gI;function Zm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ys(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:p,onBeforeLeave:g,onLeave:w,onAfterLeave:C,onLeaveCancelled:V,onBeforeAppear:M,onAppear:F,onAfterAppear:D,onAppearCancelled:S}=e,O=String(t.key),x=Zm(n,t),k=(m,y)=>{m&&Yt(m,r,9,y)},E=(m,y)=>{const I=y[1];k(m,y),se(m)?m.every(b=>b.length<=1)&&I():m.length<=1&&I()},_={mode:o,persisted:c,beforeEnter(m){let y=l;if(!n.isMounted)if(i)y=M||l;else return;m[_r]&&m[_r](!0);const I=x[O];I&&un(t,I)&&I.el[_r]&&I.el[_r](),k(y,[m])},enter(m){let y=u,I=h,b=p;if(!n.isMounted)if(i)y=F||u,I=D||h,b=S||p;else return;let T=!1;const me=m[_a]=be=>{T||(T=!0,be?k(b,[m]):k(I,[m]),_.delayedLeave&&_.delayedLeave(),m[_a]=void 0)};y?E(y,[m,me]):me()},leave(m,y){const I=String(t.key);if(m[_a]&&m[_a](!0),n.isUnmounting)return y();k(g,[m]);let b=!1;const T=m[_r]=me=>{b||(b=!0,y(),me?k(V,[m]):k(C,[m]),m[_r]=void 0,x[I]===t&&delete x[I])};x[I]=t,w?E(w,[m,T]):T()},clone(m){const y=Ys(m,e,n,r,s);return s&&s(y),y}};return _}function bl(t){if(ko(t))return t=On(t),t.children=null,t}function Of(t){if(!ko(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ge(n.default))return n.default()}}function kr(t,e){t.shapeFlag&6&&t.component?kr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sc(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===He?(o.patchFlag&128&&s++,r=r.concat(Sc(o.children,e,c))):(e||o.type!==ft)&&r.push(c!=null?On(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const mI=t=>t.__isTeleport,Wi=t=>t&&(t.disabled||t.disabled===""),Df=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,ru=(t,e)=>{const n=t&&t.to;return Ye(n)?e?e(n):null:n},_I={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:h,pc:p,pbc:g,o:{insert:w,querySelector:C,createText:V,createComment:M}}=u,F=Wi(e.props);let{shapeFlag:D,children:S,dynamicChildren:O}=e;if(t==null){const x=e.el=V(""),k=e.anchor=V("");w(x,n,r),w(k,n,r);const E=e.target=ru(e.props,C),_=e.targetAnchor=V("");E&&(w(_,E),o==="svg"||Df(E)?o="svg":(o==="mathml"||Nf(E))&&(o="mathml"));const m=(y,I)=>{D&16&&h(S,y,I,s,i,o,c,l)};F?m(n,k):E&&m(E,_)}else{e.el=t.el;const x=e.anchor=t.anchor,k=e.target=t.target,E=e.targetAnchor=t.targetAnchor,_=Wi(t.props),m=_?n:k,y=_?x:E;if(o==="svg"||Df(k)?o="svg":(o==="mathml"||Nf(k))&&(o="mathml"),O?(g(t.dynamicChildren,O,m,s,i,o,c),uh(t,e,!0)):l||p(t,e,m,y,s,i,o,c,!1),F)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ya(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const I=e.target=ru(e.props,C);I&&ya(e,I,null,u,0)}else _&&ya(e,k,E,u,1)}e_(e)},remove(t,e,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:c,children:l,anchor:u,targetAnchor:h,target:p,props:g}=t;if(p&&i(h),o&&i(u),c&16){const w=o||!Wi(g);for(let C=0;C<l.length;C++){const V=l[C];s(V,e,n,w,!!V.dynamicChildren)}}},move:ya,hydrate:yI};function ya(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:h}=t,p=i===2;if(p&&r(o,e,n),(!p||Wi(h))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);p&&r(c,e,n)}function yI(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l}},u){const h=e.target=ru(e.props,l);if(h){const p=h._lpa||h.firstChild;if(e.shapeFlag&16)if(Wi(e.props))e.anchor=u(o(t),e,c(t),n,r,s,i),e.targetAnchor=p;else{e.anchor=o(t);let g=p;for(;g;)if(g=o(g),g&&g.nodeType===8&&g.data==="teleport anchor"){e.targetAnchor=g,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}u(p,e,h,n,r,s,i)}e_(e)}return e.anchor&&o(e.anchor)}const vI=_I;function e_(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const He=Symbol.for("v-fgt"),ts=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),Gi=[];let Ut=null;function pe(t=!1){Gi.push(Ut=t?null:[])}function t_(){Gi.pop(),Ut=Gi[Gi.length-1]||null}let ns=1;function su(t){ns+=t}function n_(t){return t.dynamicChildren=ns>0?Ut||Ns:null,t_(),ns>0&&Ut&&Ut.push(t),t}function Ie(t,e,n,r,s,i){return n_(P(t,e,n,r,s,i,!0))}function nn(t,e,n,r,s){return n_(Ce(t,e,n,r,s,!0))}function Or(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}function EI(t){}const r_=({key:t})=>t??null,Ra=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ye(t)||yt(t)||ge(t)?{i:at,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===He?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&r_(e),ref:e&&Ra(e),scopeId:wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return c?(ph(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ye(n)?8:16),ns>0&&!o&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const Ce=TI;function TI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===_m)&&(t=ft),Or(t)){const c=On(t,e,!0);return n&&ph(c,n),ns>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(CI(t)&&(t=t.__vccOpts),e){e=s_(e);let{class:c,style:l}=e;c&&!Ye(c)&&(e.class=bt(c)),Be(l)&&(Zu(l)&&!se(l)&&(l=Qe({},l)),e.style=ps(l))}const o=Ye(t)?1:Yl(t)?128:mI(t)?64:Be(t)?4:ge(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function s_(t){return t?Zu(t)||Dm(t)?Qe({},t):t:null}function On(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?i_(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&r_(u),ref:e&&e.ref?n&&i?se(i)?i.concat(Ra(e)):[i,Ra(e)]:Ra(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==He?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&kr(h,l.clone(h)),h}function Vt(t=" ",e=0){return Ce(ts,null,t,e)}function fh(t,e){const n=Ce(Zr,null,t);return n.staticCount=e,n}function ht(t="",e=!1){return e?(pe(),nn(ft,null,t)):Ce(ft,null,t)}function Wt(t){return t==null||typeof t=="boolean"?Ce(ft):se(t)?Ce(He,null,t.slice()):typeof t=="object"?yr(t):Ce(ts,null,String(t))}function yr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function ph(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ph(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Dm(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[Vt(e)]):n=8);t.children=e,t.shapeFlag|=n}function i_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bt([e.class,r.class]));else if(s==="style")e.style=ps([e.style,r.style]);else if(bo(s)){const i=e[s],o=r[s];o&&i!==o&&!(se(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){Yt(t,e,7,[n,r])}const wI=Pm();let II=0;function o_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wI,i={uid:II++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vm(r,s),emitsOptions:gm(r,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pw.bind(null,i),t.ce&&t.ce(i),i}let ot=null;const rr=()=>ot||at;let Ka,iu;{const t=Bg(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ka=e("__VUE_INSTANCE_SETTERS__",n=>ot=n),iu=e("__VUE_SSR_SETTERS__",n=>Oo=n)}const rs=t=>{const e=ot;return Ka(t),t.scope.on(),()=>{t.scope.off(),Ka(e)}},ou=()=>{ot&&ot.scope.off(),Ka(null)};function a_(t){return t.vnode.shapeFlag&4}let Oo=!1;function c_(t,e=!1){e&&iu(e);const{props:n,children:r}=t.vnode,s=a_(t);tI(t,n,s,e),sI(t,r);const i=s?bI(t,e):void 0;return e&&iu(!1),i}function bI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zl);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?u_(t):null,i=rs(t);Lr();const o=Wn(r,t,0,[t.props,s]);if(xr(),i(),Ku(o)){if(o.then(ou,ou),e)return o.then(c=>{au(t,c,e)}).catch(c=>{gs(c,t,0)});t.asyncDep=o}else au(t,o,e)}else l_(t,e)}function au(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=nh(e)),l_(t,n)}let Wa,cu;function AI(t){Wa=t,cu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Nw))}}const RI=()=>!Wa;function l_(t,e,n){const r=t.type;if(!t.render){if(!e&&Wa&&!r.render){const s=r.template||ch(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=Qe(Qe({isCustomElement:i,delimiters:c},o),l);r.render=Wa(s,u)}}t.render=r.render||Ft,cu&&cu(t)}{const s=rs(t);Lr();try{Gw(t)}finally{xr(),s()}}}const SI={get(t,e){return jt(t,"get",""),t[e]}};function u_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,SI),slots:t.slots,emit:t.emit,expose:e}}function Do(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(nh(im(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ki)return Ki[n](t)},has(e,n){return n in e||n in Ki}})):t.proxy}function lu(t,e=!0){return ge(t)?t.displayName||t.name:t.name||e&&t.__name}function CI(t){return ge(t)&&"__vccOpts"in t}const rn=(t,e)=>QT(t,e,Oo);function PI(t,e,n=Ue){const r=rr(),s=Mt(e),i=Gt(e),o=lm((l,u)=>{let h;return Wm(()=>{const p=t[e];gn(h,p)&&(h=p,u())}),{get(){return l(),n.get?n.get(h):h},set(p){const g=r.vnode.props;!(g&&(e in g||s in g||i in g)&&(`onUpdate:${e}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g))&&gn(p,h)&&(h=p,u()),r.emit(`update:${e}`,n.set?n.set(p):p)}}}),c=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return o[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?t[c]||{}:o,done:!1}:{done:!0}}}},o}function Cc(t,e,n){const r=arguments.length;return r===2?Be(e)&&!se(e)?Or(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Or(n)&&(n=[n]),Ce(t,e,n))}function kI(){}function OI(t,e,n,r){const s=n[r];if(s&&h_(s,t))return s;const i=e();return i.memo=t.slice(),i.memoIndex=r,n[r]=i}function h_(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let r=0;r<n.length;r++)if(gn(n[r],e[r]))return!1;return ns>0&&Ut&&Ut.push(t),!0}const d_="3.4.29",DI=Ft,NI=lw,VI=Cs,MI=pm,LI={createComponentInstance:o_,setupComponent:c_,renderComponentRoot:Aa,setCurrentRenderingInstance:co,isVNode:Or,normalizeVNode:Wt,getComponentPublicInstance:Do},xI=LI,FI=null,UI=null,$I=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const BI="http://www.w3.org/2000/svg",jI="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Vf=Fn&&Fn.createElement("template"),qI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(BI,t):e==="mathml"?Fn.createElementNS(jI,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Vf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dr="transition",Di="animation",Js=Symbol("_vtc"),Pc=(t,{slots:e})=>Cc(Xm,p_(t),e);Pc.displayName="Transition";const f_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},HI=Pc.props=Qe({},dh,f_),Hr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Mf=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function p_(t){const e={};for(const b in t)b in f_||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=t,C=KI(s),V=C&&C[0],M=C&&C[1],{onBeforeEnter:F,onEnter:D,onEnterCancelled:S,onLeave:O,onLeaveCancelled:x,onBeforeAppear:k=F,onAppear:E=D,onAppearCancelled:_=S}=e,m=(b,T,me)=>{gr(b,T?h:c),gr(b,T?u:o),me&&me()},y=(b,T)=>{b._isLeaving=!1,gr(b,p),gr(b,w),gr(b,g),T&&T()},I=b=>(T,me)=>{const be=b?E:D,te=()=>m(T,b,me);Hr(be,[T,te]),Lf(()=>{gr(T,b?l:i),xn(T,b?h:c),Mf(be)||xf(T,r,V,te)})};return Qe(e,{onBeforeEnter(b){Hr(F,[b]),xn(b,i),xn(b,o)},onBeforeAppear(b){Hr(k,[b]),xn(b,l),xn(b,u)},onEnter:I(!1),onAppear:I(!0),onLeave(b,T){b._isLeaving=!0;const me=()=>y(b,T);xn(b,p),xn(b,g),m_(),Lf(()=>{b._isLeaving&&(gr(b,p),xn(b,w),Mf(O)||xf(b,r,M,me))}),Hr(O,[b,me])},onEnterCancelled(b){m(b,!1),Hr(S,[b])},onAppearCancelled(b){m(b,!0),Hr(_,[b])},onLeaveCancelled(b){y(b),Hr(x,[b])}})}function KI(t){if(t==null)return null;if(Be(t))return[Al(t.enter),Al(t.leave)];{const e=Al(t);return[e,e]}}function Al(t){return Fa(t)}function xn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Js]||(t[Js]=new Set)).add(e)}function gr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Js];n&&(n.delete(e),n.size||(t[Js]=void 0))}function Lf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let WI=0;function xf(t,e,n,r){const s=t._endId=++WI,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=g_(t,e);if(!o)return r();const u=o+"end";let h=0;const p=()=>{t.removeEventListener(u,g),i()},g=w=>{w.target===t&&++h>=l&&p()};setTimeout(()=>{h<l&&p()},c+1),t.addEventListener(u,g)}function g_(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${dr}Delay`),i=r(`${dr}Duration`),o=Ff(s,i),c=r(`${Di}Delay`),l=r(`${Di}Duration`),u=Ff(c,l);let h=null,p=0,g=0;e===dr?o>0&&(h=dr,p=o,g=i.length):e===Di?u>0&&(h=Di,p=u,g=l.length):(p=Math.max(o,u),h=p>0?o>u?dr:Di:null,g=h?h===dr?i.length:l.length:0);const w=h===dr&&/\b(transform|all)(,|$)/.test(r(`${dr}Property`).toString());return{type:h,timeout:p,propCount:g,hasTransform:w}}function Ff(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Uf(n)+Uf(t[r])))}function Uf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function m_(){return document.body.offsetHeight}function GI(t,e,n){const r=t[Js];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ga=Symbol("_vod"),__=Symbol("_vsh"),y_={beforeMount(t,{value:e},{transition:n}){t[Ga]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ni(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ni(t,!0),r.enter(t)):r.leave(t,()=>{Ni(t,!1)}):Ni(t,e))},beforeUnmount(t,{value:e}){Ni(t,e)}};function Ni(t,e){t.style.display=e?t[Ga]:"none",t[__]=!e}function zI(){y_.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const v_=Symbol("");function kc(t){const e=rr();if(!e)return;const n=e.ut=(s=t(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(i=>hu(i,s))},r=()=>{const s=t(e.proxy);uu(e.subTree,s),n(s)};ms(()=>{Km(r);const s=new MutationObserver(r);s.observe(e.subTree.el.parentNode,{childList:!0}),Rc(()=>s.disconnect())})}function uu(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{uu(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)hu(t.el,e);else if(t.type===He)t.children.forEach(n=>uu(n,e));else if(t.type===Zr){let{el:n,anchor:r}=t;for(;n&&(hu(n,e),n!==r);)n=n.nextSibling}}function hu(t,e){if(t.nodeType===1){const n=t.style;let r="";for(const s in e)n.setProperty(`--${s}`,e[s]),r+=`--${s}: ${e[s]};`;n[v_]=r}}const QI=/(^|;)\s*display\s*:/;function YI(t,e,n){const r=t.style,s=Ye(n);let i=!1;if(n&&!s){if(e)if(Ye(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Sa(r,c,"")}else for(const o in e)n[o]==null&&Sa(r,o,"");for(const o in n)o==="display"&&(i=!0),Sa(r,o,n[o])}else if(s){if(e!==n){const o=r[v_];o&&(n+=";"+o),r.cssText=n,i=QI.test(n)}}else e&&t.removeAttribute("style");Ga in t&&(t[Ga]=i?r.display:"",t[__]&&(r.display="none"))}const $f=/\s*!important$/;function Sa(t,e,n){if(se(n))n.forEach(r=>Sa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=JI(t,e);$f.test(n)?t.setProperty(Gt(r),n.replace($f,""),"important"):t[r]=n}}const Bf=["Webkit","Moz","ms"],Rl={};function JI(t,e){const n=Rl[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return Rl[e]=r;r=Ao(r);for(let s=0;s<Bf.length;s++){const i=Bf[s]+r;if(i in t)return Rl[e]=i}return e}const jf="http://www.w3.org/1999/xlink";function qf(t,e,n,r,s,i=wT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jf,e.slice(6,e.length)):t.setAttributeNS(jf,e,n):n==null||i&&!jg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":String(n))}function XI(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const u=c==="OPTION"?t.getAttribute("value")||"":t.value,h=n==null?"":String(n);(u!==h||!("_value"in t))&&(t.value=h),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=jg(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Un(t,e,n,r){t.addEventListener(e,n,r)}function ZI(t,e,n,r){t.removeEventListener(e,n,r)}const Hf=Symbol("_vei");function eb(t,e,n,r,s=null){const i=t[Hf]||(t[Hf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=tb(e);if(r){const u=i[e]=sb(r,s);Un(t,c,u,l)}else o&&(ZI(t,c,o,l),i[e]=void 0)}}const Kf=/(?:Once|Passive|Capture)$/;function tb(t){let e;if(Kf.test(t)){e={};let r;for(;r=t.match(Kf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Gt(t.slice(2)),e]}let Sl=0;const nb=Promise.resolve(),rb=()=>Sl||(nb.then(()=>Sl=0),Sl=Date.now());function sb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Yt(ib(r,n.value),e,5,[r])};return n.value=t,n.attached=rb(),n}function ib(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ob=(t,e,n,r,s,i,o,c,l)=>{const u=s==="svg";e==="class"?GI(t,r,u):e==="style"?YI(t,n,r):bo(e)?qu(e)||eb(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ab(t,e,r,u))?(XI(t,e,r,i,o,c,l),(e==="value"||e==="checked"||e==="selected")&&qf(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qf(t,e,r,u))};function ab(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wf(e)&&ge(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wf(e)&&Ye(n)?!1:e in t}/*! #__NO_SIDE_EFFECTS__ */function E_(t,e,n){const r=Co(t,e);class s extends Oc{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const cb=(t,e)=>E_(t,e,k_),lb=typeof HTMLElement<"u"?HTMLElement:class{};class Oc extends lb{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,So(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),du(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:i,styles:o}=r;let c;if(i&&!se(i))for(const l in i){const u=i[l];(u===Number||u&&u.type===Number)&&(l in this._props&&(this._props[l]=Fa(this._props[l])),(c||(c=Object.create(null)))[Mt(l)]=!0)}this._numberProps=c,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=se(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Mt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(e){let n=this.hasAttribute(e)?this.getAttribute(e):void 0;const r=Mt(e);this._numberProps&&this._numberProps[r]&&(n=Fa(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Gt(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Gt(e),n+""):n||this.removeAttribute(Gt(e))))}_update(){du(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ce(this._def,Qe({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),Gt(i)!==i&&r(Gt(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Oc){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function ub(t="$style"){{const e=rr();if(!e)return Ue;const n=e.type.__cssModules;if(!n)return Ue;const r=n[t];return r||Ue}}const T_=new WeakMap,w_=new WeakMap,za=Symbol("_moveCb"),Gf=Symbol("_enterCb"),I_={name:"TransitionGroup",props:Qe({},HI,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=rr(),r=hh();let s,i;return bc(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!mb(s[0].el,n.vnode.el,o))return;s.forEach(fb),s.forEach(pb);const c=s.filter(gb);m_(),c.forEach(l=>{const u=l.el,h=u.style;xn(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const p=u[za]=g=>{g&&g.target!==u||(!g||/transform$/.test(g.propertyName))&&(u.removeEventListener("transitionend",p),u[za]=null,gr(u,o))};u.addEventListener("transitionend",p)})}),()=>{const o=ke(t),c=p_(o);let l=o.tag||He;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),kr(h,Ys(h,c,r,n)),T_.set(h,h.el.getBoundingClientRect()))}i=e.default?Sc(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&kr(h,Ys(h,c,r,n))}return Ce(l,null,i)}}},hb=t=>delete t.mode;I_.props;const db=I_;function fb(t){const e=t.el;e[za]&&e[za](),e[Gf]&&e[Gf]()}function pb(t){w_.set(t,t.el.getBoundingClientRect())}function gb(t){const e=T_.get(t),n=w_.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function mb(t,e,n){const r=t.cloneNode(),s=t[Js];s&&s.forEach(c=>{c.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(c=>c&&r.classList.add(c)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=g_(r);return i.removeChild(r),o}const Dr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Ls(e,n):e};function _b(t){t.target.composing=!0}function zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const on=Symbol("_assign"),dn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[on]=Dr(s);const i=r||s.props&&s.props.type==="number";Un(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=xa(c)),t[on](c)}),n&&Un(t,"change",()=>{t.value=t.value.trim()}),e||(Un(t,"compositionstart",_b),Un(t,"compositionend",zf),Un(t,"change",zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[on]=Dr(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?xa(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},gh={deep:!0,created(t,e,n){t[on]=Dr(n),Un(t,"change",()=>{const r=t._modelValue,s=Xs(t),i=t.checked,o=t[on];if(se(r)){const c=mc(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(fs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(b_(t,i))})},mounted:Qf,beforeUpdate(t,e,n){t[on]=Dr(n),Qf(t,e,n)}};function Qf(t,{value:e,oldValue:n},r){t._modelValue=e,se(e)?t.checked=mc(e,r.props.value)>-1:fs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Pr(e,b_(t,!0)))}const mh={created(t,{value:e},n){t.checked=Pr(e,n.props.value),t[on]=Dr(n),Un(t,"change",()=>{t[on](Xs(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[on]=Dr(r),e!==n&&(t.checked=Pr(e,r.props.value))}},Qa={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=fs(e);Un(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xa(Xs(o)):Xs(o));t[on](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,So(()=>{t._assigning=!1})}),t[on]=Dr(r)},mounted(t,{value:e,modifiers:{number:n}}){Yf(t,e)},beforeUpdate(t,e,n){t[on]=Dr(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Yf(t,e)}};function Yf(t,e,n){const r=t.multiple,s=se(e);if(!(r&&!s&&!fs(e))){for(let i=0,o=t.options.length;i<o;i++){const c=t.options[i],l=Xs(c);if(r)if(s){const u=typeof l;u==="string"||u==="number"?c.selected=e.some(h=>String(h)===String(l)):c.selected=mc(e,l)>-1}else c.selected=e.has(l);else if(Pr(Xs(c),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Xs(t){return"_value"in t?t._value:t.value}function b_(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const A_={created(t,e,n){va(t,e,n,null,"created")},mounted(t,e,n){va(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){va(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){va(t,e,n,r,"updated")}};function R_(t,e){switch(t){case"SELECT":return Qa;case"TEXTAREA":return dn;default:switch(e){case"checkbox":return gh;case"radio":return mh;default:return dn}}}function va(t,e,n,r,s){const o=R_(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}function yb(){dn.getSSRProps=({value:t})=>({value:t}),mh.getSSRProps=({value:t},e)=>{if(e.props&&Pr(e.props.value,t))return{checked:!0}},gh.getSSRProps=({value:t},e)=>{if(se(t)){if(e.props&&mc(t,e.props.value)>-1)return{checked:!0}}else if(fs(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}},A_.getSSRProps=(t,e)=>{if(typeof e.type!="string")return;const n=R_(e.type.toUpperCase(),e.props&&e.props.type);if(n.getSSRProps)return n.getSSRProps(t,e)}}const vb=["ctrl","shift","alt","meta"],Eb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vb.some(n=>t[`${n}Key`]&&!e.includes(n))},Tb=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=Eb[e[o]];if(c&&c(s,e))return}return t(s,...i)})},wb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Dc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Gt(s.key);if(e.some(o=>o===i||wb[o]===i))return t(s)})},S_=Qe({patchProp:ob},qI);let zi,Jf=!1;function C_(){return zi||(zi=Fm(S_))}function P_(){return zi=Jf?zi:Um(S_),Jf=!0,zi}const du=(...t)=>{C_().render(...t)},k_=(...t)=>{P_().hydrate(...t)},O_=(...t)=>{const e=C_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=N_(r);if(!s)return;const i=e._component;!ge(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,D_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Ib=(...t)=>{const e=P_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=N_(r);if(s)return n(s,!0,D_(s))},e};function D_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function N_(t){return Ye(t)?document.querySelector(t):t}let Xf=!1;const bb=()=>{Xf||(Xf=!0,yb(),zI())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Ab=()=>{},Rb=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Xm,BaseTransitionPropsValidators:dh,Comment:ft,DeprecationTypes:$I,EffectScope:Gu,ErrorCodes:cw,ErrorTypeStrings:NI,Fragment:He,KeepAlive:fI,ReactiveEffect:zs,Static:Zr,Suspense:Iw,Teleport:vI,Text:ts,TrackOpTypes:iw,Transition:Pc,TransitionGroup:db,TriggerOpTypes:ow,VueElement:Oc,assertNumber:aw,callWithAsyncErrorHandling:Yt,callWithErrorHandling:Wn,camelize:Mt,capitalize:Ao,cloneVNode:On,compatUtils:UI,compile:Ab,computed:rn,createApp:O_,createBlock:nn,createCommentVNode:ht,createElementBlock:Ie,createElementVNode:P,createHydrationRenderer:Um,createPropsRestProxy:Kw,createRenderer:Fm,createSSRApp:Ib,createSlots:Pw,createStaticVNode:fh,createTextVNode:Vt,createVNode:Ce,customRef:lm,defineAsyncComponent:kw,defineComponent:Co,defineCustomElement:E_,defineEmits:Mw,defineExpose:Lw,defineModel:Uw,defineOptions:xw,defineProps:Vw,defineSSRCustomElement:cb,defineSlots:Fw,devtools:VI,effect:ST,effectScope:bT,getCurrentInstance:rr,getCurrentScope:Kg,getTransitionRawChildren:Sc,guardReactiveProps:s_,h:Cc,handleError:gs,hasInjectionContext:eI,hydrate:k_,initCustomFormatter:kI,initDirectivesForSSR:bb,inject:Jt,isMemoSame:h_,isProxy:Zu,isReactive:xs,isReadonly:Qs,isRef:yt,isRuntimeOnly:RI,isShallow:so,isVNode:Or,markRaw:im,mergeDefaults:qw,mergeModels:Hw,mergeProps:i_,nextTick:So,normalizeClass:bt,normalizeProps:ET,normalizeStyle:ps,onActivated:zm,onBeforeMount:Em,onBeforeUnmount:Ac,onBeforeUpdate:Tm,onDeactivated:Qm,onErrorCaptured:Am,onMounted:ms,onRenderTracked:bm,onRenderTriggered:Im,onScopeDispose:AT,onServerPrefetch:wm,onUnmounted:Rc,onUpdated:bc,openBlock:pe,popScopeId:tr,provide:js,proxyRefs:nh,pushScopeId:er,queuePostFlushCb:$a,reactive:Ro,readonly:Xu,ref:ve,registerRuntimeCompiler:AI,render:du,renderList:bn,renderSlot:Ow,resolveComponent:mm,resolveDirective:Tw,resolveDynamicComponent:ym,resolveFilter:FI,resolveTransitionHooks:Ys,setBlockTracking:su,setDevtoolsHook:MI,setTransitionHooks:kr,shallowReactive:Ju,shallowReadonly:zT,shallowRef:am,ssrContextKey:qm,ssrUtils:xI,stop:CT,toDisplayString:xe,toHandlerKey:Hi,toHandlers:Dw,toRaw:ke,toRef:sw,toRefs:tw,toValue:XT,transformVNodeArgs:EI,triggerRef:JT,unref:Qt,useAttrs:jw,useCssModule:ub,useCssVars:kc,useModel:PI,useSSRContext:Hm,useSlots:Bw,useTransitionState:hh,vModelCheckbox:gh,vModelDynamic:A_,vModelRadio:mh,vModelSelect:Qa,vModelText:dn,vShow:y_,version:d_,warn:DI,watch:qs,watchEffect:uI,watchPostEffect:Km,watchSyncEffect:Wm,withAsyncContext:Ww,withCtx:At,withDefaults:$w,withDirectives:Sn,withKeys:Dc,withMemo:OI,withModifiers:Tb,withScopeId:gw},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ps=typeof document<"u";function Sb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Fe=Object.assign;function Cl(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const Qi=()=>{},mn=Array.isArray,V_=/#/g,Cb=/&/g,Pb=/\//g,kb=/=/g,Ob=/\?/g,M_=/\+/g,Db=/%5B/g,Nb=/%5D/g,L_=/%5E/g,Vb=/%60/g,x_=/%7B/g,Mb=/%7C/g,F_=/%7D/g,Lb=/%20/g;function _h(t){return encodeURI(""+t).replace(Mb,"|").replace(Db,"[").replace(Nb,"]")}function xb(t){return _h(t).replace(x_,"{").replace(F_,"}").replace(L_,"^")}function fu(t){return _h(t).replace(M_,"%2B").replace(Lb,"+").replace(V_,"%23").replace(Cb,"%26").replace(Vb,"`").replace(x_,"{").replace(F_,"}").replace(L_,"^")}function Fb(t){return fu(t).replace(kb,"%3D")}function Ub(t){return _h(t).replace(V_,"%23").replace(Ob,"%3F")}function $b(t){return t==null?"":Ub(t).replace(Pb,"%2F")}function ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Bb=/\/$/,jb=t=>t.replace(Bb,"");function Pl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Wb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ho(o)}}function qb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zs(e.matched[r],n.matched[s])&&U_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function U_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Kb(t[n],e[n]))return!1;return!0}function Kb(t,e){return mn(t)?ep(t,e):mn(e)?ep(e,t):t===e}function ep(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Wb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var fo;(function(t){t.pop="pop",t.push="push"})(fo||(fo={}));var Yi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yi||(Yi={}));function Gb(t){if(!t)if(Ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jb(t)}const zb=/^[^#]+#/;function Qb(t,e){return t.replace(zb,"#")+e}function Yb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Nc=()=>({left:window.scrollX,top:window.scrollY});function Jb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Yb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tp(t,e){return(history.state?history.state.position-e:-1)+t}const pu=new Map;function Xb(t,e){pu.set(t,e)}function Zb(t){const e=pu.get(t);return pu.delete(t),e}let eA=()=>location.protocol+"//"+location.host;function $_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Zf(l,"")}return Zf(n,t)+r+s}function tA(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const w=$_(t,location),C=n.value,V=e.value;let M=0;if(g){if(n.value=w,e.value=g,o&&o===C){o=null;return}M=V?g.position-V.position:0}else r(w);s.forEach(F=>{F(n.value,C,{delta:M,type:fo.pop,direction:M?M>0?Yi.forward:Yi.back:Yi.unknown})})};function l(){o=n.value}function u(g){s.push(g);const w=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(w),w}function h(){const{history:g}=window;g.state&&g.replaceState(Fe({},g.state,{scroll:Nc()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function np(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Nc():null}}function nA(t){const{history:e,location:n}=window,r={value:$_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:eA()+t+l;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(w){console.error(w),n[h?"replace":"assign"](g)}}function o(l,u){const h=Fe({},e.state,np(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function c(l,u){const h=Fe({},s.value,e.state,{forward:l,scroll:Nc()});i(h.current,h,!0);const p=Fe({},np(r.value,l,null),{position:h.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function rA(t){t=Gb(t);const e=nA(t),n=tA(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Fe({location:"",base:t,go:r,createHref:Qb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function sA(t){return typeof t=="string"||t&&typeof t=="object"}function B_(t){return typeof t=="string"||typeof t=="symbol"}const fr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},j_=Symbol("");var rp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rp||(rp={}));function ei(t,e){return Fe(new Error,{type:t,[j_]:!0},e)}function Ln(t,e){return t instanceof Error&&j_ in t&&(e==null||!!(t.type&e))}const sp="[^/]+?",iA={sensitive:!1,strict:!1,start:!0,end:!0},oA=/[.+*?^${}()[\]/\\]/g;function aA(t,e){const n=Fe({},iA,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let w=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(oA,"\\$&"),w+=40;else if(g.type===1){const{value:C,repeatable:V,optional:M,regexp:F}=g;i.push({name:C,repeatable:V,optional:M});const D=F||sp;if(D!==sp){w+=10;try{new RegExp(`(${D})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${D}): `+O.message)}}let S=V?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;p||(S=M&&u.length<2?`(?:/${S})`:"/"+S),M&&(S+="?"),s+=S,w+=20,M&&(w+=-8),V&&(w+=-20),D===".*"&&(w+=-50)}h.push(w)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const h=u.match(o),p={};if(!h)return null;for(let g=1;g<h.length;g++){const w=h[g]||"",C=i[g-1];p[C.name]=w&&C.repeatable?w.split("/"):w}return p}function l(u){let h="",p=!1;for(const g of t){(!p||!h.endsWith("/"))&&(h+="/"),p=!1;for(const w of g)if(w.type===0)h+=w.value;else if(w.type===1){const{value:C,repeatable:V,optional:M}=w,F=C in u?u[C]:"";if(mn(F)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const D=mn(F)?F.join("/"):F;if(!D)if(M)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);h+=D}}return h||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function cA(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function q_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=cA(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ip(r))return 1;if(ip(s))return-1}return s.length-r.length}function ip(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const lA={type:0,value:""},uA=/[a-zA-Z0-9_]/;function hA(t){if(!t)return[[]];if(t==="/")return[[lA]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${u}": ${w}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",h="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:uA.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function dA(t,e,n){const r=aA(hA(t.path),n),s=Fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fA(t,e){const n=[],r=new Map;e=cp({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,p,g){const w=!g,C=pA(h);C.aliasOf=g&&g.record;const V=cp(e,h),M=[C];if("alias"in h){const S=typeof h.alias=="string"?[h.alias]:h.alias;for(const O of S)M.push(Fe({},C,{components:g?g.record.components:C.components,path:O,aliasOf:g?g.record:C}))}let F,D;for(const S of M){const{path:O}=S;if(p&&O[0]!=="/"){const x=p.record.path,k=x[x.length-1]==="/"?"":"/";S.path=p.record.path+(O&&k+O)}if(F=dA(S,p,V),g?g.alias.push(F):(D=D||F,D!==F&&D.alias.push(F),w&&h.name&&!ap(F)&&o(h.name)),H_(F)&&l(F),C.children){const x=C.children;for(let k=0;k<x.length;k++)i(x[k],F,g&&g.children[k])}g=g||F}return D?()=>{o(D)}:Qi}function o(h){if(B_(h)){const p=r.get(h);p&&(r.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function l(h){const p=_A(h,n);n.splice(p,0,h),h.record.name&&!ap(h)&&r.set(h.record.name,h)}function u(h,p){let g,w={},C,V;if("name"in h&&h.name){if(g=r.get(h.name),!g)throw ei(1,{location:h});V=g.record.name,w=Fe(op(p.params,g.keys.filter(D=>!D.optional).concat(g.parent?g.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),h.params&&op(h.params,g.keys.map(D=>D.name))),C=g.stringify(w)}else if(h.path!=null)C=h.path,g=n.find(D=>D.re.test(C)),g&&(w=g.parse(C),V=g.record.name);else{if(g=p.name?r.get(p.name):n.find(D=>D.re.test(p.path)),!g)throw ei(1,{location:h,currentLocation:p});V=g.record.name,w=Fe({},p.params,h.params),C=g.stringify(w)}const M=[];let F=g;for(;F;)M.unshift(F.record),F=F.parent;return{name:V,path:C,params:w,matched:M,meta:mA(M)}}return t.forEach(h=>i(h)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function op(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function pA(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gA(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gA(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ap(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mA(t){return t.reduce((e,n)=>Fe(e,n.meta),{})}function cp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function _A(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;q_(t,e[i])<0?r=i:n=i+1}const s=yA(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function yA(t){let e=t;for(;e=e.parent;)if(H_(e)&&q_(t,e)===0)return e}function H_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function vA(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(M_," "),o=i.indexOf("="),c=ho(o<0?i:i.slice(0,o)),l=o<0?null:ho(i.slice(o+1));if(c in e){let u=e[c];mn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function lp(t){let e="";for(let n in t){const r=t[n];if(n=Fb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&fu(i)):[r&&fu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function EA(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const TA=Symbol(""),up=Symbol(""),Vc=Symbol(""),yh=Symbol(""),gu=Symbol("");function Vi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(ei(4,{from:n,to:e})):g instanceof Error?l(g):sA(g)?l(ei(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(h);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function kl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(wA(l)){const h=(l.__vccOpts||l)[e];h&&i.push(vr(h,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const p=Sb(h)?h.default:h;o.components[c]=p;const w=(p.__vccOpts||p)[e];return w&&vr(w,n,r,o,c,s)()}))}}return i}function wA(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function hp(t){const e=Jt(Vc),n=Jt(yh),r=rn(()=>{const l=Qt(t.to);return e.resolve(l)}),s=rn(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],p=n.matched;if(!h||!p.length)return-1;const g=p.findIndex(Zs.bind(null,h));if(g>-1)return g;const w=dp(l[u-2]);return u>1&&dp(h)===w&&p[p.length-1].path!==w?p.findIndex(Zs.bind(null,l[u-2])):g}),i=rn(()=>s.value>-1&&AA(n.params,r.value.params)),o=rn(()=>s.value>-1&&s.value===n.matched.length-1&&U_(n.params,r.value.params));function c(l={}){return bA(l)?e[Qt(t.replace)?"replace":"push"](Qt(t.to)).catch(Qi):Promise.resolve()}return{route:r,href:rn(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const IA=Co({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hp,setup(t,{slots:e}){const n=Ro(hp(t)),{options:r}=Jt(Vc),s=rn(()=>({[fp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),mu=IA;function bA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AA(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fp=(t,e,n)=>t??e??n,RA=Co({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Jt(gu),s=rn(()=>t.route||r.value),i=Jt(up,0),o=rn(()=>{let u=Qt(i);const{matched:h}=s.value;let p;for(;(p=h[u])&&!p.components;)u++;return u}),c=rn(()=>s.value.matched[o.value]);js(up,rn(()=>o.value+1)),js(TA,c),js(gu,s);const l=ve();return qs(()=>[l.value,c.value,t.name],([u,h,p],[g,w,C])=>{h&&(h.instances[p]=u,w&&w!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=w.leaveGuards),h.updateGuards.size||(h.updateGuards=w.updateGuards))),u&&h&&(!w||!Zs(h,w)||!g)&&(h.enterCallbacks[p]||[]).forEach(V=>V(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,p=c.value,g=p&&p.components[h];if(!g)return pp(n.default,{Component:g,route:u});const w=p.props[h],C=w?w===!0?u.params:typeof w=="function"?w(u):w:null,M=Cc(g,Fe({},C,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(p.instances[h]=null)},ref:l}));return pp(n.default,{Component:M,route:u})||M}}});function pp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const K_=RA;function SA(t){const e=fA(t.routes,t),n=t.parseQuery||vA,r=t.stringifyQuery||lp,s=t.history,i=Vi(),o=Vi(),c=Vi(),l=am(fr);let u=fr;Ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Cl.bind(null,B=>""+B),p=Cl.bind(null,$b),g=Cl.bind(null,ho);function w(B,ee){let J,ie;return B_(B)?(J=e.getRecordMatcher(B),ie=ee):ie=B,e.addRoute(ie,J)}function C(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function V(){return e.getRoutes().map(B=>B.record)}function M(B){return!!e.getRecordMatcher(B)}function F(B,ee){if(ee=Fe({},ee||l.value),typeof B=="string"){const R=Pl(n,B,ee.path),L=e.resolve({path:R.path},ee),j=s.createHref(R.fullPath);return Fe(R,L,{params:g(L.params),hash:ho(R.hash),redirectedFrom:void 0,href:j})}let J;if(B.path!=null)J=Fe({},B,{path:Pl(n,B.path,ee.path).path});else{const R=Fe({},B.params);for(const L in R)R[L]==null&&delete R[L];J=Fe({},B,{params:p(R)}),ee.params=p(ee.params)}const ie=e.resolve(J,ee),Re=B.hash||"";ie.params=h(g(ie.params));const $e=qb(r,Fe({},B,{hash:xb(Re),path:ie.path})),A=s.createHref($e);return Fe({fullPath:$e,hash:Re,query:r===lp?EA(B.query):B.query||{}},ie,{redirectedFrom:void 0,href:A})}function D(B){return typeof B=="string"?Pl(n,B,l.value.path):Fe({},B)}function S(B,ee){if(u!==B)return ei(8,{from:ee,to:B})}function O(B){return E(B)}function x(B){return O(Fe(D(B),{replace:!0}))}function k(B){const ee=B.matched[B.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let ie=typeof J=="function"?J(B):J;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=D(ie):{path:ie},ie.params={}),Fe({query:B.query,hash:B.hash,params:ie.path!=null?{}:B.params},ie)}}function E(B,ee){const J=u=F(B),ie=l.value,Re=B.state,$e=B.force,A=B.replace===!0,R=k(J);if(R)return E(Fe(D(R),{state:typeof R=="object"?Fe({},Re,R.state):Re,force:$e,replace:A}),ee||J);const L=J;L.redirectedFrom=ee;let j;return!$e&&Hb(r,ie,J)&&(j=ei(16,{to:L,from:ie}),ce(ie,ie,!0,!1)),(j?Promise.resolve(j):y(L,ie)).catch($=>Ln($)?Ln($,2)?$:we($):Z($,L,ie)).then($=>{if($){if(Ln($,2))return E(Fe({replace:A},D($.to),{state:typeof $.to=="object"?Fe({},Re,$.to.state):Re,force:$e}),ee||L)}else $=b(L,ie,!0,A,Re);return I(L,ie,$),$})}function _(B,ee){const J=S(B,ee);return J?Promise.reject(J):Promise.resolve()}function m(B){const ee=Et.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function y(B,ee){let J;const[ie,Re,$e]=CA(B,ee);J=kl(ie.reverse(),"beforeRouteLeave",B,ee);for(const R of ie)R.leaveGuards.forEach(L=>{J.push(vr(L,B,ee))});const A=_.bind(null,B,ee);return J.push(A),lt(J).then(()=>{J=[];for(const R of i.list())J.push(vr(R,B,ee));return J.push(A),lt(J)}).then(()=>{J=kl(Re,"beforeRouteUpdate",B,ee);for(const R of Re)R.updateGuards.forEach(L=>{J.push(vr(L,B,ee))});return J.push(A),lt(J)}).then(()=>{J=[];for(const R of $e)if(R.beforeEnter)if(mn(R.beforeEnter))for(const L of R.beforeEnter)J.push(vr(L,B,ee));else J.push(vr(R.beforeEnter,B,ee));return J.push(A),lt(J)}).then(()=>(B.matched.forEach(R=>R.enterCallbacks={}),J=kl($e,"beforeRouteEnter",B,ee,m),J.push(A),lt(J))).then(()=>{J=[];for(const R of o.list())J.push(vr(R,B,ee));return J.push(A),lt(J)}).catch(R=>Ln(R,8)?R:Promise.reject(R))}function I(B,ee,J){c.list().forEach(ie=>m(()=>ie(B,ee,J)))}function b(B,ee,J,ie,Re){const $e=S(B,ee);if($e)return $e;const A=ee===fr,R=Ps?history.state:{};J&&(ie||A?s.replace(B.fullPath,Fe({scroll:A&&R&&R.scroll},Re)):s.push(B.fullPath,Re)),l.value=B,ce(B,ee,J,A),we()}let T;function me(){T||(T=s.listen((B,ee,J)=>{if(!Tn.listening)return;const ie=F(B),Re=k(ie);if(Re){E(Fe(Re,{replace:!0}),ie).catch(Qi);return}u=ie;const $e=l.value;Ps&&Xb(tp($e.fullPath,J.delta),Nc()),y(ie,$e).catch(A=>Ln(A,12)?A:Ln(A,2)?(E(A.to,ie).then(R=>{Ln(R,20)&&!J.delta&&J.type===fo.pop&&s.go(-1,!1)}).catch(Qi),Promise.reject()):(J.delta&&s.go(-J.delta,!1),Z(A,ie,$e))).then(A=>{A=A||b(ie,$e,!1),A&&(J.delta&&!Ln(A,8)?s.go(-J.delta,!1):J.type===fo.pop&&Ln(A,20)&&s.go(-1,!1)),I(ie,$e,A)}).catch(Qi)}))}let be=Vi(),te=Vi(),fe;function Z(B,ee,J){we(B);const ie=te.list();return ie.length?ie.forEach(Re=>Re(B,ee,J)):console.error(B),Promise.reject(B)}function tt(){return fe&&l.value!==fr?Promise.resolve():new Promise((B,ee)=>{be.add([B,ee])})}function we(B){return fe||(fe=!B,me(),be.list().forEach(([ee,J])=>B?J(B):ee()),be.reset()),B}function ce(B,ee,J,ie){const{scrollBehavior:Re}=t;if(!Ps||!Re)return Promise.resolve();const $e=!J&&Zb(tp(B.fullPath,0))||(ie||!J)&&history.state&&history.state.scroll||null;return So().then(()=>Re(B,ee,$e)).then(A=>A&&Jb(A)).catch(A=>Z(A,B,ee))}const ne=B=>s.go(B);let Ve;const Et=new Set,Tn={currentRoute:l,listening:!0,addRoute:w,removeRoute:C,hasRoute:M,getRoutes:V,resolve:F,options:t,push:O,replace:x,go:ne,back:()=>ne(-1),forward:()=>ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:te.add,isReady:tt,install(B){const ee=this;B.component("RouterLink",mu),B.component("RouterView",K_),B.config.globalProperties.$router=ee,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),Ps&&!Ve&&l.value===fr&&(Ve=!0,O(s.location).catch(Re=>{}));const J={};for(const Re in fr)Object.defineProperty(J,Re,{get:()=>l.value[Re],enumerable:!0});B.provide(Vc,ee),B.provide(yh,Ju(J)),B.provide(gu,l);const ie=B.unmount;Et.add(B),B.unmount=function(){Et.delete(B),Et.size<1&&(u=fr,T&&T(),T=null,l.value=fr,Ve=!1,fe=!1),ie()}}};function lt(B){return B.reduce((ee,J)=>ee.then(()=>m(J)),Promise.resolve())}return Tn}function CA(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Zs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Zs(u,l))||s.push(l))}return[n,r,s]}function No(){return Jt(Vc)}function PA(){return Jt(yh)}const kA="/costudent-demo/assets/logo_small-BjRg5O79.png";var gp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},G_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(g=64)),r.push(n[h],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(W_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new DA;const g=i<<2|c>>4;if(r.push(g),u!==64){const w=c<<4&240|u>>2;if(r.push(w),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NA=function(t){const e=W_(t);return G_.encodeByteArray(e,!0)},Ya=function(t){return NA(t).replace(/\./g,"")},z_=function(t){try{return G_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MA=()=>VA().__FIREBASE_DEFAULTS__,LA=()=>{if(typeof process>"u"||typeof gp>"u")return;const t=gp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&z_(t[1]);return e&&JSON.parse(e)},Mc=()=>{try{return MA()||LA()||xA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q_=t=>{var e,n;return(n=(e=Mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FA=t=>{const e=Q_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Y_=()=>{var t;return(t=Mc())===null||t===void 0?void 0:t.config},J_=t=>{var e;return(e=Mc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $A(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function jA(){var t;const e=(t=Mc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function X_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HA(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KA(){return!jA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Z_(){try{return typeof indexedDB=="object"}catch{return!1}}function ey(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function WA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="FirebaseError";class vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=GA,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vn(s,c,r)}}function zA(t,e){return t.replace(QA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const QA=/\{\$([^}]+)}/g;function YA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function po(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(mp(i)&&mp(o)){if(!po(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JA(t,e){const n=new XA(t,e);return n.subscribe.bind(n)}class XA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ol),s.error===void 0&&(s.error=Ol),s.complete===void 0&&(s.complete=Ol);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ol(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=1e3,t0=2,n0=4*60*60*1e3,r0=.5;function _p(t,e=e0,n=t0){const r=e*Math.pow(n,t),s=Math.round(r0*r*(Math.random()-.5)*2);return Math.min(n0,r+s)}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class s0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o0(e))try{this.getOrInitializeService({instanceIdentifier:Kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kr){return this.instances.has(e)}getOptions(e=Kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:i0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kr){return this.component?this.component.multipleInstances?e:Kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function i0(t){return t===Kr?void 0:t}function o0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const c0={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},l0=Se.INFO,u0={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},h0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=u0[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lc{constructor(e){this.name=e,this._logLevel=l0,this._logHandler=h0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?c0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const d0=(t,e)=>e.some(n=>t instanceof n);let yp,vp;function f0(){return yp||(yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p0(){return vp||(vp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ty=new WeakMap,_u=new WeakMap,ny=new WeakMap,Dl=new WeakMap,vh=new WeakMap;function g0(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ty.set(n,t)}).catch(()=>{}),vh.set(e,t),e}function m0(t){if(_u.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_u.set(t,e)}let yu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _u.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ny.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _0(t){yu=t(yu)}function y0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nl(this),e,...n);return ny.set(r,e.sort?e.sort():[e]),Rr(r)}:p0().includes(t)?function(...e){return t.apply(Nl(this),e),Rr(ty.get(this))}:function(...e){return Rr(t.apply(Nl(this),e))}}function v0(t){return typeof t=="function"?y0(t):(t instanceof IDBTransaction&&m0(t),d0(t,f0())?new Proxy(t,yu):t)}function Rr(t){if(t instanceof IDBRequest)return g0(t);if(Dl.has(t))return Dl.get(t);const e=v0(t);return e!==t&&(Dl.set(t,e),vh.set(e,t)),e}const Nl=t=>vh.get(t);function ry(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rr(o.result),l.oldVersion,l.newVersion,Rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const E0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],Vl=new Map;function Ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=T0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||E0.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Vl.set(e,i),i}_0(t=>({...t,get:(e,n,r)=>Ep(e,n)||t.get(e,n,r),has:(e,n)=>!!Ep(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(I0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function I0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vu="@firebase/app",Tp="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new Lc("@firebase/app"),b0="@firebase/app-compat",A0="@firebase/analytics-compat",R0="@firebase/analytics",S0="@firebase/app-check-compat",C0="@firebase/app-check",P0="@firebase/auth",k0="@firebase/auth-compat",O0="@firebase/database",D0="@firebase/database-compat",N0="@firebase/functions",V0="@firebase/functions-compat",M0="@firebase/installations",L0="@firebase/installations-compat",x0="@firebase/messaging",F0="@firebase/messaging-compat",U0="@firebase/performance",$0="@firebase/performance-compat",B0="@firebase/remote-config",j0="@firebase/remote-config-compat",q0="@firebase/storage",H0="@firebase/storage-compat",K0="@firebase/firestore",W0="@firebase/vertexai-preview",G0="@firebase/firestore-compat",z0="firebase",Q0="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="[DEFAULT]",Y0={[vu]:"fire-core",[b0]:"fire-core-compat",[R0]:"fire-analytics",[A0]:"fire-analytics-compat",[C0]:"fire-app-check",[S0]:"fire-app-check-compat",[P0]:"fire-auth",[k0]:"fire-auth-compat",[O0]:"fire-rtdb",[D0]:"fire-rtdb-compat",[N0]:"fire-fn",[V0]:"fire-fn-compat",[M0]:"fire-iid",[L0]:"fire-iid-compat",[x0]:"fire-fcm",[F0]:"fire-fcm-compat",[U0]:"fire-perf",[$0]:"fire-perf-compat",[B0]:"fire-rc",[j0]:"fire-rc-compat",[q0]:"fire-gcs",[H0]:"fire-gcs-compat",[K0]:"fire-fst",[G0]:"fire-fst-compat",[W0]:"fire-vertex","fire-js":"fire-js",[z0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map,J0=new Map,Tu=new Map;function wp(t,e){try{t.container.addComponent(e)}catch(n){ss.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Tu.has(e))return ss.debug(`There were multiple attempts to register component ${e}.`),!1;Tu.set(e,t);for(const n of Ja.values())wp(n,t);for(const n of J0.values())wp(n,t);return!0}function ys(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const li=Q0;function sy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Eu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Sr.create("bad-app-name",{appName:String(s)});if(n||(n=Y_()),!n)throw Sr.create("no-options");const i=Ja.get(s);if(i){if(po(n,i.options)&&po(r,i.config))return i;throw Sr.create("duplicate-app",{appName:s})}const o=new a0(s);for(const l of Tu.values())o.addComponent(l);const c=new Z0(n,r,o);return Ja.set(s,c),c}function Eh(t=Eu){const e=Ja.get(t);if(!e&&t===Eu&&Y_())return sy();if(!e)throw Sr.create("no-app",{appName:t});return e}function an(t,e,n){var r;let s=(r=Y0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ss.warn(c.join(" "));return}Dn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eR="firebase-heartbeat-database",tR=1,go="firebase-heartbeat-store";let Ml=null;function iy(){return Ml||(Ml=ry(eR,tR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sr.create("idb-open",{originalErrorMessage:t.message})})),Ml}async function nR(t){try{const n=(await iy()).transaction(go),r=await n.objectStore(go).get(oy(t));return await n.done,r}catch(e){if(e instanceof vn)ss.warn(e.message);else{const n=Sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ss.warn(n.message)}}}async function Ip(t,e){try{const r=(await iy()).transaction(go,"readwrite");await r.objectStore(go).put(e,oy(t)),await r.done}catch(n){if(n instanceof vn)ss.warn(n.message);else{const r=Sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function oy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rR=1024,sR=30*24*60*60*1e3;class iR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=sR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bp(),{heartbeatsToSend:r,unsentEntries:s}=oR(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bp(){return new Date().toISOString().substring(0,10)}function oR(t,e=rR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ap(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ap(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z_()?ey().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ip(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ap(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){Dn(new _n("platform-logger",e=>new w0(e),"PRIVATE")),Dn(new _n("heartbeat",e=>new iR(e),"PRIVATE")),an(vu,Tp,t),an(vu,Tp,"esm2017"),an("fire-js","")}cR("");function Th(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ay(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lR=ay,cy=new _s("auth","Firebase",ay());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Lc("@firebase/auth");function uR(t,...e){Xa.logLevel<=Se.WARN&&Xa.warn(`Auth (${li}): ${t}`,...e)}function Ca(t,...e){Xa.logLevel<=Se.ERROR&&Xa.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Ih(t,...e)}function fn(t,...e){return Ih(t,...e)}function wh(t,e,n){const r=Object.assign(Object.assign({},lR()),{[e]:n});return new _s("auth","Firebase",r).create(e,{appName:t.name})}function Gn(t){return wh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),wh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ih(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cy.create(t,...e)}function _e(t,e,...n){if(!t)throw Ih(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ca(e),new Error(e)}function Yn(t,e){t||$n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dR(){return Rp()==="http:"||Rp()==="https:"}function Rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=BA()||qA()}get(){return fR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mR=new Mo(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ir(t,e,n,r,s={}){return uy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Vo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ly.fetch()(hy(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function uy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gR),e);try{const s=new yR(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ea(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw wh(t,h,u);cn(t,h)}}catch(s){if(s instanceof vn)throw s;cn(t,"network-request-failed",{message:String(s)})}}async function Lo(t,e,n,r,s={}){const i=await ir(t,e,n,r,s);return"mfaPendingCredential"in i&&cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?bh(t.config,s):`${t.config.apiScheme}://${s}`}function _R(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),mR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function Sp(t){return t!==void 0&&t.enterprise!==void 0}class vR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _R(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ER(t,e){return ir(t,"GET","/v2/recaptchaConfig",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t,e){return ir(t,"POST","/v1/accounts:delete",e)}async function dy(t,e){return ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wR(t,e=!1){const n=it(t),r=await n.getIdToken(e),s=Ah(r);_e(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ji(Ll(s.auth_time)),issuedAtTime:Ji(Ll(s.iat)),expirationTime:Ji(Ll(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ll(t){return Number(t)*1e3}function Ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const s=z_(n);return s?JSON.parse(s):(Ca("Failed to decode base64 JWT payload"),null)}catch(s){return Ca("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Cp(t){const e=Ah(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vn&&IR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mo(t,dy(n,{idToken:r}));_e(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fy(i.providerUserInfo):[],c=RR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Iu(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function AR(t){const e=it(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fy(t){return t.map(e=>{var{providerId:n}=e,r=Th(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SR(t,e){const n=await uy(t,{},async()=>{const r=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hy(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ly.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CR(t,e){return ir(t,"POST","/v2/accounts:revokeToken",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Cp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Hs;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hs,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Iu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wR(this,e)}reload(){return AR(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await mo(this,TR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:O,isAnonymous:x,providerData:k,stsTokenManager:E}=n;_e(S&&E,e,"internal-error");const _=Hs.fromJSON(this.name,E);_e(typeof S=="string",e,"internal-error"),pr(p,e.name),pr(g,e.name),_e(typeof O=="boolean",e,"internal-error"),_e(typeof x=="boolean",e,"internal-error"),pr(w,e.name),pr(C,e.name),pr(V,e.name),pr(M,e.name),pr(F,e.name),pr(D,e.name);const m=new Bn({uid:S,auth:e,email:g,emailVerified:O,displayName:p,isAnonymous:x,photoURL:C,phoneNumber:w,tenantId:V,stsTokenManager:_,createdAt:F,lastLoginAt:D});return k&&Array.isArray(k)&&(m.providerData=k.map(y=>Object.assign({},y))),M&&(m._redirectEventId=M),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Hs;s.updateFromServerResponse(n);const i=new Bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Za(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Hs;c.updateFromIdToken(r);const l=new Bn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Iu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new Map;function jn(t){Yn(t instanceof Function,"Expected a class definition");let e=Pp.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}py.type="NONE";const kp=py;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Pa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Pa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ks(jn(kp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jn(kp);const o=Pa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){const p=Bn._fromJSON(e,h);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ks(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ks(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vy(e))return"Blackberry";if(Ey(e))return"Webos";if(Rh(e))return"Safari";if((e.includes("chrome/")||my(e))&&!e.includes("edge/"))return"Chrome";if(yy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gy(t=vt()){return/firefox\//i.test(t)}function Rh(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function my(t=vt()){return/crios\//i.test(t)}function _y(t=vt()){return/iemobile/i.test(t)}function yy(t=vt()){return/android/i.test(t)}function vy(t=vt()){return/blackberry/i.test(t)}function Ey(t=vt()){return/webos/i.test(t)}function xc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PR(t=vt()){var e;return xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kR(){return HA()&&document.documentMode===10}function Ty(t=vt()){return xc(t)||yy(t)||Ey(t)||vy(t)||/windows phone/i.test(t)||_y(t)}function OR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t,e=[]){let n;switch(t){case"Browser":n=Op(vt());break;case"Worker":n=`${Op(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
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
 */async function NR(t,e={}){return ir(t,"GET","/v2/passwordPolicy",sr(t,e))}/**
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
 */class LR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dp(this),this.idTokenSubscription=new Dp(this),this.beforeStateQueue=new DR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dy(this,{idToken:e}),r=await Bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Gn(this));const n=e?it(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NR(this),n=new MR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jn(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await Ks.create(this,[jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function or(t){return it(t)}class Dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=JA(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xR(t){Fc=t}function Iy(t){return Fc.loadJS(t)}function FR(){return Fc.recaptchaEnterpriseScript}function UR(){return Fc.gapiScript}function $R(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const BR="recaptcha-enterprise",jR="NO_RECAPTCHA";class qR{constructor(e){this.type=BR,this.auth=or(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{ER(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new vR(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Sp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(jR)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Sp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=FR();l.length!==0&&(l+=c),Iy(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Np(t,e,n,r=!1){const s=new qR(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ec(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Np(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Np(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t,e){const n=ys(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(po(i,e??{}))return s;cn(s,"already-initialized")}return n.initialize({options:e})}function KR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WR(t,e,n){const r=or(t);_e(r._canInitEmulator,r,"emulator-config-failed"),_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=by(e),{host:o,port:c}=GR(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),zR()}function by(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GR(t){const e=by(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function QR(t,e){return ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e){return Lo(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}async function JR(t,e){return ir(t,"POST","/v1/accounts:sendOobCode",sr(t,e))}async function XR(t,e){return JR(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e){return Lo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function eS(t,e){return Lo(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Sh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new _o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ec(e,n,"signInWithPassword",YR);case"emailLink":return ZR(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ec(e,r,"signUpPassword",QR);case"emailLink":return eS(e,{idToken:n,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ws(t,e){return Lo(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="http://localhost";class is extends Sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Th(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ws(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ws(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ws(e,n)}buildRequest(){const e={requestUri:tS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rS(t){const e=Fi(Ui(t)).link,n=e?Fi(Ui(e)).deep_link_id:null,r=Fi(Ui(t)).deep_link_id;return(r?Fi(Ui(r)).link:null)||r||n||e||t}class Ch{constructor(e){var n,r,s,i,o,c;const l=Fi(Ui(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=nS((s=l.mode)!==null&&s!==void 0?s:null);_e(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=rS(e);try{return new Ch(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.providerId=ui.PROVIDER_ID}static credential(e,n){return _o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ch.parseLink(n);return _e(r,"argument-error"),_o._fromEmailAndCode(e,r.code,r.tenantId)}}ui.PROVIDER_ID="password";ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Ph{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends xo{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tr.credential(e.oauthAccessToken)}catch{return null}}}Tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return An.credential(n,r)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends xo{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends xo{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sS(t,e){return Lo(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bn._fromIdTokenResponse(e,r,s),o=Mp(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mp(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new tc(e,n,r,s)}}function Ay(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tc._fromErrorAndOperation(t,i,e,r):i})}async function iS(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(Gn(r));const s="reauthenticate";try{const i=await mo(t,Ay(r,s,e,t),n);_e(i.idToken,r,"internal-error");const o=Ah(i.idToken);_e(o,r,"internal-error");const{sub:c}=o;return _e(t.uid===c,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e,n=!1){if(hn(t.app))return Promise.reject(Gn(t));const r="signIn",s=await Ay(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function aS(t,e){return Ry(or(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sy(t){const e=or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cS(t,e,n){const r=or(t);await ec(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",XR)}async function lS(t,e,n){if(hn(t.app))return Promise.reject(Gn(t));const r=or(t),o=await ec(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",sS).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Sy(t),l}),c=await os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function uS(t,e,n){return hn(t.app)?Promise.reject(Gn(t)):aS(it(t),ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sy(t),r})}function hS(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function dS(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function Cy(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function fS(t){return it(t).signOut()}const nc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(nc,"1"),this.storage.removeItem(nc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(){const t=vt();return Rh(t)||xc(t)}const gS=1e3,mS=10;class ky extends Py{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pS()&&OR(),this.fallbackToPolling=Ty(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ky.type="LOCAL";const _S=ky;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Uc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await yS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=kh("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function ES(t){Cn().location.href=t}/**
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
 */function Ny(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function TS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IS(){return Ny()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="firebaseLocalStorageDb",bS=1,rc="firebaseLocalStorage",My="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function AS(){const t=indexedDB.deleteDatabase(Vy);return new Fo(t).toPromise()}function bu(){const t=indexedDB.open(Vy,bS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(rc,{keyPath:My})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(rc)?e(r):(r.close(),await AS(),e(await bu()))})})}async function Lp(t,e,n){const r=$c(t,!0).put({[My]:e,value:n});return new Fo(r).toPromise()}async function RS(t,e){const n=$c(t,!1).get(e),r=await new Fo(n).toPromise();return r===void 0?null:r.value}function xp(t,e){const n=$c(t,!0).delete(e);return new Fo(n).toPromise()}const SS=800,CS=3;class Ly{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ny()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uc._getInstance(IS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TS(),!this.activeServiceWorker)return;this.sender=new vS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bu();return await Lp(e,nc,"1"),await xp(e,nc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$c(s,!1).getAll();return new Fo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),SS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ly.type="LOCAL";const PS=Ly;new Mo(3e4,6e4);/**
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
 */function xy(t,e){return e?jn(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh extends Sh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ws(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ws(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ws(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kS(t){return Ry(t.auth,new Oh(t),t.bypassAuthState)}function OS(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),oS(n,new Oh(t),t.bypassAuthState)}async function DS(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),iS(n,new Oh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kS;case"linkViaPopup":case"linkViaRedirect":return DS;case"reauthViaPopup":case"reauthViaRedirect":return OS;default:cn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new Mo(2e3,1e4);async function Uy(t,e,n){if(hn(t.app))return Promise.reject(fn(t,"operation-not-supported-in-this-environment"));const r=or(t);hR(t,e,Ph);const s=xy(r,n);return new Gr(r,"signInViaPopup",e,s).executeNotNull()}class Gr extends Fy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NS.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS="pendingRedirect",ka=new Map;class MS extends Fy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await LS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LS(t,e){const n=US(e),r=FS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xS(t,e){ka.set(t._key(),e)}function FS(t){return jn(t._redirectPersistence)}function US(t){return Pa(VS,t.config.apiKey,t.name)}async function $S(t,e,n=!1){if(hn(t.app))return Promise.reject(Gn(t));const r=or(t),s=xy(r,e),o=await new MS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=10*60*1e3;class jS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$y(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fp(e))}saveEventToCache(e){this.cachedEventUids.add(Fp(e)),this.lastProcessedEventTime=Date.now()}}function Fp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $y({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $y(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e={}){return ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WS=/^https?/;async function GS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await HS(t);for(const n of e)try{if(zS(n))return}catch{}cn(t,"unauthorized-domain")}function zS(t){const e=wu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WS.test(n))return!1;if(KS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const QS=new Mo(3e4,6e4);function Up(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function YS(t){return new Promise((e,n)=>{var r,s,i;function o(){Up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Up(),n(fn(t,"network-request-failed"))},timeout:QS.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const c=$R("iframefcb");return Cn()[c]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Iy(`${UR()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function JS(t){return Oa=Oa||YS(t),Oa}/**
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
 */const XS=new Mo(5e3,15e3),ZS="__/auth/iframe",eC="emulator/auth/iframe",tC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rC(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bh(e,eC):`https://${t.config.authDomain}/${ZS}`,r={apiKey:e.apiKey,appName:t.name,v:li},s=nC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vo(r).slice(1)}`}async function sC(t){const e=await JS(t),n=Cn().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:rC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=Cn().setTimeout(()=>{i(o)},XS.get());function l(){Cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const iC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oC=500,aC=600,cC="_blank",lC="http://localhost";class $p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uC(t,e,n,r=oC,s=aC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},iC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=vt().toLowerCase();n&&(c=my(u)?cC:n),gy(u)&&(e=e||lC,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[w,C])=>`${g}${w}=${C},`,"");if(PR(u)&&c!=="_self")return hC(e||"",c),new $p(null);const p=window.open(e||"",c,h);_e(p,t,"popup-blocked");try{p.focus()}catch{}return new $p(p)}function hC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dC="__/auth/handler",fC="emulator/auth/handler",pC=encodeURIComponent("fac");async function Bp(t,e,n,r,s,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:s};if(e instanceof Ph){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",YA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof xo){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${pC}=${encodeURIComponent(l)}`:"";return`${gC(t)}?${Vo(c).slice(1)}${u}`}function gC({config:t}){return t.emulator?bh(t,fC):`https://${t.authDomain}/${dC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="webStorageSupport";class mC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dy,this._completeRedirectFn=$S,this._overrideRedirectResult=xS}async _openPopup(e,n,r,s){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Bp(e,n,r,wu(),s);return uC(e,o,kh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Bp(e,n,r,wu(),s);return ES(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sC(e),r=new jS(e);return n.register("authEvent",s=>(_e(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xl,{type:xl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xl];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ty()||Rh()||xc()}}const _C=mC;var jp="@firebase/auth",qp="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function EC(t){Dn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wy(t)},u=new LR(r,s,i,l);return KR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new _n("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(r=>new yC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(jp,qp,vC(t)),an(jp,qp,"esm2017")}/**
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
 */const TC=5*60,wC=J_("authIdTokenMaxAge")||TC;let Hp=null;const IC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wC)return;const s=n==null?void 0:n.token;Hp!==s&&(Hp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hi(t=Eh()){const e=ys(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HR(t,{popupRedirectResolver:_C,persistence:[PS,_S,Dy]}),r=J_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=IC(i.toString());dS(n,o,()=>o(n.currentUser)),hS(n,c=>o(c))}}const s=Q_("auth");return s&&WR(n,`http://${s}`),n}function bC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}xR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",bC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});EC("Browser");var AC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function RC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function SC(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var s=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return t[r]}})}),n}var By={exports:{}};const CC=SC(Rb);(function(t,e){(function(r,s){t.exports=s(CC)})(AC,n=>(()=>{var r={772:(c,l)=>{Object.defineProperty(l,"__esModule",{value:!0}),l.default=(u,h)=>{const p=u.__vccOpts||u;for(const[g,w]of h)p[g]=w;return p}},976:c=>{c.exports=n}},s={};function i(c){var l=s[c];if(l!==void 0)return l.exports;var u=s[c]={exports:{}};return r[c](u,u.exports,i),u.exports}i.d=(c,l)=>{for(var u in l)i.o(l,u)&&!i.o(c,u)&&Object.defineProperty(c,u,{enumerable:!0,get:l[u]})},i.o=(c,l)=>Object.prototype.hasOwnProperty.call(c,l),i.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>x,ToastPlugin:()=>E,ToastPositions:()=>C,default:()=>_,useToast:()=>k});var c=i(976);const l=(0,c.createElementVNode)("div",{class:"v-toast__icon"},null,-1),u=["innerHTML"];function h(m,y,I,b,T,me){return(0,c.openBlock)(),(0,c.createBlock)(c.Transition,{"enter-active-class":m.transition.enter,"leave-active-class":m.transition.leave},{default:(0,c.withCtx)(()=>[(0,c.withDirectives)((0,c.createElementVNode)("div",{ref:"root",role:"alert",class:(0,c.normalizeClass)(["v-toast__item",[`v-toast__item--${m.type}`,`v-toast__item--${m.position}`]]),onMouseover:y[0]||(y[0]=be=>m.toggleTimer(!0)),onMouseleave:y[1]||(y[1]=be=>m.toggleTimer(!1)),onClick:y[2]||(y[2]=function(){return m.whenClicked&&m.whenClicked(...arguments)})},[l,(0,c.createElementVNode)("p",{class:"v-toast__text",innerHTML:m.message},null,8,u)],34),[[c.vShow,m.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function p(m){var y;typeof m.remove<"u"?m.remove():(y=m.parentNode)==null||y.removeChild(m)}function g(m,y,I){let b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const T=(0,c.h)(m,y,b),me=document.createElement("div");return me.classList.add("v-toast--pending"),I.appendChild(me),(0,c.render)(T,me),T.component}class w{constructor(y,I){this.startedAt=Date.now(),this.callback=y,this.delay=I,this.timer=setTimeout(y,I)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const C=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function V(m){return{all:m=m||new Map,on:function(y,I){var b=m.get(y);b?b.push(I):m.set(y,[I])},off:function(y,I){var b=m.get(y);b&&(I?b.splice(b.indexOf(I)>>>0,1):m.set(y,[]))},emit:function(y,I){var b=m.get(y);b&&b.slice().map(function(T){T(I)}),(b=m.get("*"))&&b.slice().map(function(T){T(y,I)})}}}const F=V(),D=(0,c.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:C.BOTTOM_RIGHT,validator(m){return Object.values(C).includes(m)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),F.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const m=document.body;m.appendChild(this.parentTop),m.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const m=this.$refs.root;(0,c.render)(null,m),p(m)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const m=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),p(m),this.isActive=!0,this.duration&&(this.timer=new w(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(m){!this.pauseOnHover||!this.timer||(m?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return this.parentTop;case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case C.TOP:case C.TOP_RIGHT:case C.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case C.BOTTOM:case C.BOTTOM_RIGHT:case C.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){F.off("toast-clear",this.dismiss)}});var S=i(772);const x=(0,S.default)(D,[["render",h]]),k=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(y){let I=null;typeof y=="string"&&(I=y);const T=Object.assign({},{message:I},m,y);return{dismiss:g(x,T,document.body).ctx.dismiss}},clear(){F.emit("toast-clear")},success(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"success"},I))},error(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"error"},I))},info(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"info"},I))},warning(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"warning"},I))},default(y){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:y,type:"default"},I))}}},E={install:function(m){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},I=k(y);m.config.globalProperties.$toast=I,m.provide("$toast",I)}},_=E})(),o})())})(By);var jy=By.exports;const PC=RC(jy);function qe(t,e){const n=jy.useToast();switch(t){case"success":n.success(e);break;case"info":n.info(e);break;case"warning":n.warning(e);break;case"error":n.error(e);break;case"default":n.default(e);break;default:n.default(e);break}}const En=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qy=t=>(er("data-v-2dbda9b1"),t=t(),tr(),t),kC={class:"navBar"},OC={class:"container"},DC=qy(()=>P("div",{class:"desktopLogo"},[P("div",{class:"co"},"CO"),P("div",{class:"student"},"STUDENT")],-1)),NC=qy(()=>P("div",{class:"mobileLogo"},[P("img",{src:kA})],-1)),VC={class:"buttons"},MC={class:"mobileButtons"},LC={class:"buttonDrawer"},xC={__name:"Nav",props:{isLoggedIn:Boolean},setup(t){kc(o=>({"346f0dbc":i.value}));const e=hi(),n=No();function r(){fS(e).then(()=>{n.push("/"),qe("success","Successfully singed out!")}).catch(o=>{qe("error",o.message)})}function s(){i.value==="none"?i.value="flex":i.value="none"}const i=ve("none");return(o,c)=>{const l=mm("RouterLink");return pe(),Ie("div",kC,[P("div",OC,[Ce(l,{class:"logo",to:"/"},{default:At(()=>[DC,NC]),_:1}),P("div",VC,[t.isLoggedIn?ht("",!0):(pe(),nn(l,{key:0,class:"button",to:"/Login"},{default:At(()=>[Vt("Login")]),_:1})),t.isLoggedIn?ht("",!0):(pe(),nn(l,{key:1,class:"button",to:"/Register"},{default:At(()=>[Vt("Register")]),_:1})),t.isLoggedIn?(pe(),nn(l,{key:2,class:"button",to:"/dashboard"},{default:At(()=>[Vt("Dashboard")]),_:1})):ht("",!0),t.isLoggedIn?(pe(),nn(l,{key:3,class:"button",to:"/findcostudent"},{default:At(()=>[Vt("Find students")]),_:1})):ht("",!0),t.isLoggedIn?(pe(),Ie("div",{key:4,class:"button",onClick:c[0]||(c[0]=u=>r())},"Sign out")):ht("",!0)]),P("div",MC,[P("div",{class:"button",onClick:c[1]||(c[1]=u=>s())}," Menu "),P("div",LC,[t.isLoggedIn?ht("",!0):(pe(),nn(l,{key:0,class:"button",to:"/Login",onClick:c[2]||(c[2]=u=>s())},{default:At(()=>[Vt("Login")]),_:1})),t.isLoggedIn?ht("",!0):(pe(),nn(l,{key:1,class:"button",to:"/Register",onClick:c[3]||(c[3]=u=>s())},{default:At(()=>[Vt("Register")]),_:1})),t.isLoggedIn?(pe(),nn(l,{key:2,class:"button",to:"/dashboard",onClick:c[4]||(c[4]=u=>s())},{default:At(()=>[Vt("Dashboard")]),_:1})):ht("",!0),t.isLoggedIn?(pe(),nn(l,{key:3,class:"button",to:"/findcostudent",onClick:c[5]||(c[5]=u=>s())},{default:At(()=>[Vt("Find students")]),_:1})):ht("",!0),t.isLoggedIn?(pe(),Ie("div",{key:4,class:"button",onClick:c[6]||(c[6]=u=>r())},"Sign out")):ht("",!0)])])])])}}},FC=En(xC,[["__scopeId","data-v-2dbda9b1"]]),UC={},$C=t=>(er("data-v-e5dfeed8"),t=t(),tr(),t),BC={class:"footerBox"},jC=$C(()=>P("div",{class:"footerButton"},[P("p",null,"Copyright ©2024"),P("p",null,"Designed by Samuel Coryn")],-1)),qC=[jC];function HC(t,e){return pe(),Ie("div",BC,qC)}const KC=En(UC,[["render",HC],["__scopeId","data-v-e5dfeed8"]]),WC={class:"navBox"},GC={__name:"App",setup(t){const e=ve(!1);let n;return ms(()=>{n=hi(),Cy(n,r=>{r?e.value=!0:e.value=!1})}),js("isLoggedInKey",e),(r,s)=>(pe(),Ie(He,null,[P("div",WC,[Ce(FC,{isLoggedIn:e.value},null,8,["isLoggedIn"])]),Ce(Qt(K_),null,{default:At(({Component:i})=>[Ce(Pc,{name:"route",mode:"out-in"},{default:At(()=>[(pe(),nn(ym(i)))]),_:2},1024)]),_:1}),Ce(KC)],64))}},zC="/costudent-demo/assets/students_stock_photo-DFrZLZTI.jpg",Dh=t=>(er("data-v-b5889814"),t=t(),tr(),t),QC={class:"root"},YC={class:"grid"},JC={class:"landingColumn"},XC=Dh(()=>P("div",{class:"title"},[P("h1",null,"Study better,"),P("h1",null,"Together")],-1)),ZC=Dh(()=>P("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),eP={class:"buttonArray"},tP=Dh(()=>P("div",{class:"photo"},[P("img",{src:zC,alt:"People studying together."})],-1)),nP=fh('<div id="learnMore" data-v-b5889814><div class="article" data-v-b5889814><h1 data-v-b5889814>ABOUT</h1><p data-v-b5889814>Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective.</p><p data-v-b5889814>Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests.</p><p data-v-b5889814>Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!</p><p data-v-b5889814>Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together.</p><p data-v-b5889814>Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!</p></div><div class="graph" data-v-b5889814><div class="node" data-v-b5889814><p data-v-b5889814>Plan your study session</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-b5889814><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-b5889814></path></svg><div class="node" data-v-b5889814><p data-v-b5889814>Get paired with other students</p></div><svg width="64" height="64" stroke-width="1.5" viewBox="-1 -1 26 26" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" data-v-b5889814><path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" data-v-b5889814></path></svg><div class="node" data-v-b5889814><p data-v-b5889814>Learn togehter!</p></div></div></div>',1),rP={__name:"Home",setup(t){function e(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=Jt("isLoggedInKey"),s=No();return(i,o)=>(pe(),Ie("div",QC,[P("div",YC,[P("div",JC,[XC,ZC,P("div",eP,[P("div",{class:"button",onClick:o[0]||(o[0]=c=>n())},"Start studying"),P("div",{class:"button",onClick:o[1]||(o[1]=c=>e())},"Learn more")])]),tP]),nP]))}},sP=En(rP,[["__scopeId","data-v-b5889814"]]);var iP="firebase",oP="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(iP,oP,"app");const Hy="@firebase/installations",Nh="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=1e4,Wy=`w:${Nh}`,Gy="FIS_v2",aP="https://firebaseinstallations.googleapis.com/v1",cP=60*60*1e3,lP="installations",uP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},as=new _s(lP,uP,hP);function zy(t){return t instanceof vn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy({projectId:t}){return`${aP}/projects/${t}/installations`}function Yy(t){return{token:t.token,requestStatus:2,expiresIn:fP(t.expiresIn),creationTime:Date.now()}}async function Jy(t,e){const r=(await e.json()).error;return as.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Xy({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function dP(t,{refreshToken:e}){const n=Xy(t);return n.append("Authorization",pP(e)),n}async function Zy(t){const e=await t();return e.status>=500&&e.status<600?t():e}function fP(t){return Number(t.replace("s","000"))}function pP(t){return`${Gy} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Qy(t),s=Xy(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:Gy,appId:t.appId,sdkVersion:Wy},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Zy(()=>fetch(r,c));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Yy(u.authToken)}}else throw await Jy("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=/^[cdef][\w-]{21}$/,Au="";function yP(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=vP(t);return _P.test(n)?n:Au}catch{return Au}}function vP(t){return mP(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const tv=new Map;function nv(t,e){const n=Bc(t);rv(n,e),EP(n,e)}function rv(t,e){const n=tv.get(t);if(n)for(const r of n)r(e)}function EP(t,e){const n=TP();n&&n.postMessage({key:t,fid:e}),wP()}let zr=null;function TP(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=t=>{rv(t.data.key,t.data.fid)}),zr}function wP(){tv.size===0&&zr&&(zr.close(),zr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="firebase-installations-database",bP=1,cs="firebase-installations-store";let Fl=null;function Vh(){return Fl||(Fl=ry(IP,bP,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(cs)}}})),Fl}async function sc(t,e){const n=Bc(t),s=(await Vh()).transaction(cs,"readwrite"),i=s.objectStore(cs),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&nv(t,e.fid),e}async function sv(t){const e=Bc(t),r=(await Vh()).transaction(cs,"readwrite");await r.objectStore(cs).delete(e),await r.done}async function jc(t,e){const n=Bc(t),s=(await Vh()).transaction(cs,"readwrite"),i=s.objectStore(cs),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&nv(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t){let e;const n=await jc(t.appConfig,r=>{const s=AP(r),i=RP(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Au?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function AP(t){const e=t||{fid:yP(),registrationStatus:0};return iv(e)}function RP(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(as.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=SP(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CP(t)}:{installationEntry:e}}async function SP(t,e){try{const n=await gP(t,e);return sc(t.appConfig,n)}catch(n){throw zy(n)&&n.customData.serverCode===409?await sv(t.appConfig):await sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function CP(t){let e=await Kp(t.appConfig);for(;e.registrationStatus===1;)await ev(100),e=await Kp(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Mh(t);return r||n}return e}function Kp(t){return jc(t,e=>{if(!e)throw as.create("installation-not-found");return iv(e)})}function iv(t){return PP(t)?{fid:t.fid,registrationStatus:0}:t}function PP(t){return t.registrationStatus===1&&t.registrationTime+Ky<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP({appConfig:t,heartbeatServiceProvider:e},n){const r=OP(t,n),s=dP(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:Wy,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Zy(()=>fetch(r,c));if(l.ok){const u=await l.json();return Yy(u)}else throw await Jy("Generate Auth Token",l)}function OP(t,{fid:e}){return`${Qy(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e=!1){let n;const r=await jc(t.appConfig,i=>{if(!ov(i))throw as.create("not-registered");const o=i.authToken;if(!e&&VP(o))return i;if(o.requestStatus===1)return n=DP(t,e),i;{if(!navigator.onLine)throw as.create("app-offline");const c=LP(i);return n=NP(t,c),c}});return n?await n:r.authToken}async function DP(t,e){let n=await Wp(t.appConfig);for(;n.authToken.requestStatus===1;)await ev(100),n=await Wp(t.appConfig);const r=n.authToken;return r.requestStatus===0?Lh(t,e):r}function Wp(t){return jc(t,e=>{if(!ov(e))throw as.create("not-registered");const n=e.authToken;return xP(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function NP(t,e){try{const n=await kP(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await sc(t.appConfig,r),n}catch(n){if(zy(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await sv(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await sc(t.appConfig,r)}throw n}}function ov(t){return t!==void 0&&t.registrationStatus===2}function VP(t){return t.requestStatus===2&&!MP(t)}function MP(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+cP}function LP(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xP(t){return t.requestStatus===1&&t.requestTime+Ky<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t){const e=t,{installationEntry:n,registrationPromise:r}=await Mh(e);return r?r.catch(console.error):Lh(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UP(t,e=!1){const n=t;return await $P(n),(await Lh(n,e)).token}async function $P(t){const{registrationPromise:e}=await Mh(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(t){if(!t||!t.options)throw Ul("App Configuration");if(!t.name)throw Ul("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ul(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ul(t){return as.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="installations",jP="installations-internal",qP=t=>{const e=t.getProvider("app").getImmediate(),n=BP(e),r=ys(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},HP=t=>{const e=t.getProvider("app").getImmediate(),n=ys(e,av).getImmediate();return{getId:()=>FP(n),getToken:s=>UP(n,s)}};function KP(){Dn(new _n(av,qP,"PUBLIC")),Dn(new _n(jP,HP,"PRIVATE"))}KP();an(Hy,Nh);an(Hy,Nh,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic="analytics",WP="firebase_id",GP="origin",zP=60*1e3,QP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xh="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Lc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Xt=new _s("analytics","Analytics",YP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){if(!t.startsWith(xh)){const e=Xt.create("invalid-gtag-resource",{gtagURL:t});return $t.warn(e.message),""}return t}function cv(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function XP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ZP(t,e){const n=XP("firebase-js-sdk-policy",{createScriptURL:JP}),r=document.createElement("script"),s=`${xh}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function e1(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function t1(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await cv(n)).find(u=>u.measurementId===s);l&&await e[l.appId]}}catch(c){$t.error(c)}t("config",s,i)}async function n1(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await cv(n);for(const l of o){const u=c.find(p=>p.measurementId===l),h=u&&e[u.appId];if(h)i.push(h);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){$t.error(i)}}function r1(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await n1(t,e,n,c,l)}else if(i==="config"){const[c,l]=o;await t1(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=o;t("consent",c,l)}else if(i==="get"){const[c,l,u]=o;t("get",c,l,u)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){$t.error(c)}}return s}function s1(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=r1(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function i1(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(xh)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=30,a1=1e3;class c1{constructor(e={},n=a1){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lv=new c1;function l1(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function u1(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:l1(r)},i=QP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Xt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function h1(t,e=lv,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Xt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Xt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new p1;return setTimeout(async()=>{c.abort()},zP),uv({appId:r,apiKey:s,measurementId:i},o,c,e)}async function uv(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=lv){var i;const{appId:o,measurementId:c}=t;try{await d1(r,e)}catch(l){if(c)return $t.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await u1(t);return s.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!f1(u)){if(s.deleteThrottleMetadata(o),c)return $t.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw l}const h=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?_p(n,s.intervalMillis,o1):_p(n,s.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return s.setThrottleMetadata(o,p),$t.debug(`Calling attemptFetch again in ${h} millis`),uv(t,p,r,s)}}function d1(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Xt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function f1(t){if(!(t instanceof vn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class p1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function g1(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m1(){if(Z_())try{await ey()}catch(t){return $t.warn(Xt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return $t.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _1(t,e,n,r,s,i,o){var c;const l=h1(t);l.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&$t.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>$t.error(w)),e.push(l);const u=m1().then(w=>{if(w)return r.getId()}),[h,p]=await Promise.all([l,u]);i1(i)||ZP(i,h.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[GP]="firebase",g.update=!0,p!=null&&(g[WP]=p),s("config",h.measurementId,g),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.app=e}_delete(){return delete Xi[this.app.options.appId],Promise.resolve()}}let Xi={},Gp=[];const zp={};let $l="dataLayer",v1="gtag",Qp,hv,Yp=!1;function E1(){const t=[];if(X_()&&t.push("This is a browser extension environment."),WA()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:e});$t.warn(n.message)}}function T1(t,e,n){E1();const r=t.options.appId;if(!r)throw Xt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)$t.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Xt.create("no-api-key");if(Xi[r]!=null)throw Xt.create("already-exists",{id:r});if(!Yp){e1($l);const{wrappedGtag:i,gtagCore:o}=s1(Xi,Gp,zp,$l,v1);hv=i,Qp=o,Yp=!0}return Xi[r]=_1(t,Gp,zp,e,Qp,$l,n),new y1(t)}function w1(t=Eh()){t=it(t);const e=ys(t,ic);return e.isInitialized()?e.getImmediate():I1(t)}function I1(t,e={}){const n=ys(t,ic);if(n.isInitialized()){const s=n.getImmediate();if(po(e,n.getOptions()))return s;throw Xt.create("already-initialized")}return n.initialize({options:e})}function b1(t,e,n,r){t=it(t),g1(hv,Xi[t.app.options.appId],e,n,r).catch(s=>$t.error(s))}const Jp="@firebase/analytics",Xp="0.10.4";function A1(){Dn(new _n(ic,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return T1(r,s,n)},"PUBLIC")),Dn(new _n("analytics-internal",t,"PRIVATE")),an(Jp,Xp),an(Jp,Xp,"esm2017");function t(e){try{const n=e.getProvider(ic).getImmediate();return{logEvent:(r,s,i)=>b1(n,r,s,i)}}catch(n){throw Xt.create("interop-component-reg-failed",{reason:n})}}}A1();var Zp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,dv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function m(){}m.prototype=_.prototype,E.D=_.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(y,I,b){for(var T=Array(arguments.length-2),me=2;me<arguments.length;me++)T[me-2]=arguments[me];return _.prototype[I].apply(y,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,m){m||(m=0);var y=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)y[I]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(I=0;16>I;++I)y[I]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=E.g[0],m=E.g[1],I=E.g[2];var b=E.g[3],T=_+(b^m&(I^b))+y[0]+3614090360&4294967295;_=m+(T<<7&4294967295|T>>>25),T=b+(I^_&(m^I))+y[1]+3905402710&4294967295,b=_+(T<<12&4294967295|T>>>20),T=I+(m^b&(_^m))+y[2]+606105819&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(_^I&(b^_))+y[3]+3250441966&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(b^m&(I^b))+y[4]+4118548399&4294967295,_=m+(T<<7&4294967295|T>>>25),T=b+(I^_&(m^I))+y[5]+1200080426&4294967295,b=_+(T<<12&4294967295|T>>>20),T=I+(m^b&(_^m))+y[6]+2821735955&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(_^I&(b^_))+y[7]+4249261313&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(b^m&(I^b))+y[8]+1770035416&4294967295,_=m+(T<<7&4294967295|T>>>25),T=b+(I^_&(m^I))+y[9]+2336552879&4294967295,b=_+(T<<12&4294967295|T>>>20),T=I+(m^b&(_^m))+y[10]+4294925233&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(_^I&(b^_))+y[11]+2304563134&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(b^m&(I^b))+y[12]+1804603682&4294967295,_=m+(T<<7&4294967295|T>>>25),T=b+(I^_&(m^I))+y[13]+4254626195&4294967295,b=_+(T<<12&4294967295|T>>>20),T=I+(m^b&(_^m))+y[14]+2792965006&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(_^I&(b^_))+y[15]+1236535329&4294967295,m=I+(T<<22&4294967295|T>>>10),T=_+(I^b&(m^I))+y[1]+4129170786&4294967295,_=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(_^m))+y[6]+3225465664&4294967295,b=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(b^_))+y[11]+643717713&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^_&(I^b))+y[0]+3921069994&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^b&(m^I))+y[5]+3593408605&4294967295,_=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(_^m))+y[10]+38016083&4294967295,b=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(b^_))+y[15]+3634488961&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^_&(I^b))+y[4]+3889429448&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^b&(m^I))+y[9]+568446438&4294967295,_=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(_^m))+y[14]+3275163606&4294967295,b=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(b^_))+y[3]+4107603335&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^_&(I^b))+y[8]+1163531501&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(I^b&(m^I))+y[13]+2850285829&4294967295,_=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(_^m))+y[2]+4243563512&4294967295,b=_+(T<<9&4294967295|T>>>23),T=I+(_^m&(b^_))+y[7]+1735328473&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^_&(I^b))+y[12]+2368359562&4294967295,m=I+(T<<20&4294967295|T>>>12),T=_+(m^I^b)+y[5]+4294588738&4294967295,_=m+(T<<4&4294967295|T>>>28),T=b+(_^m^I)+y[8]+2272392833&4294967295,b=_+(T<<11&4294967295|T>>>21),T=I+(b^_^m)+y[11]+1839030562&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^_)+y[14]+4259657740&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^b)+y[1]+2763975236&4294967295,_=m+(T<<4&4294967295|T>>>28),T=b+(_^m^I)+y[4]+1272893353&4294967295,b=_+(T<<11&4294967295|T>>>21),T=I+(b^_^m)+y[7]+4139469664&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^_)+y[10]+3200236656&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^b)+y[13]+681279174&4294967295,_=m+(T<<4&4294967295|T>>>28),T=b+(_^m^I)+y[0]+3936430074&4294967295,b=_+(T<<11&4294967295|T>>>21),T=I+(b^_^m)+y[3]+3572445317&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^_)+y[6]+76029189&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(m^I^b)+y[9]+3654602809&4294967295,_=m+(T<<4&4294967295|T>>>28),T=b+(_^m^I)+y[12]+3873151461&4294967295,b=_+(T<<11&4294967295|T>>>21),T=I+(b^_^m)+y[15]+530742520&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^_)+y[2]+3299628645&4294967295,m=I+(T<<23&4294967295|T>>>9),T=_+(I^(m|~b))+y[0]+4096336452&4294967295,_=m+(T<<6&4294967295|T>>>26),T=b+(m^(_|~I))+y[7]+1126891415&4294967295,b=_+(T<<10&4294967295|T>>>22),T=I+(_^(b|~m))+y[14]+2878612391&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~_))+y[5]+4237533241&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~b))+y[12]+1700485571&4294967295,_=m+(T<<6&4294967295|T>>>26),T=b+(m^(_|~I))+y[3]+2399980690&4294967295,b=_+(T<<10&4294967295|T>>>22),T=I+(_^(b|~m))+y[10]+4293915773&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~_))+y[1]+2240044497&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~b))+y[8]+1873313359&4294967295,_=m+(T<<6&4294967295|T>>>26),T=b+(m^(_|~I))+y[15]+4264355552&4294967295,b=_+(T<<10&4294967295|T>>>22),T=I+(_^(b|~m))+y[6]+2734768916&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~_))+y[13]+1309151649&4294967295,m=I+(T<<21&4294967295|T>>>11),T=_+(I^(m|~b))+y[4]+4149444226&4294967295,_=m+(T<<6&4294967295|T>>>26),T=b+(m^(_|~I))+y[11]+3174756917&4294967295,b=_+(T<<10&4294967295|T>>>22),T=I+(_^(b|~m))+y[2]+718787259&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~_))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+I&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var m=_-this.blockSize,y=this.B,I=this.h,b=0;b<_;){if(I==0)for(;b<=m;)s(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<_;)if(y[I++]=E.charCodeAt(b++),I==this.blockSize){s(this,y),I=0;break}}else for(;b<_;)if(y[I++]=E[b++],I==this.blockSize){s(this,y),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var m=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=m&255,m/=256;for(this.u(E),E=Array(16),_=m=0;4>_;++_)for(var y=0;32>y;y+=8)E[m++]=this.g[_]>>>y&255;return E};function i(E,_){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=_(E)}function o(E,_){this.h=_;for(var m=[],y=!0,I=E.length-1;0<=I;I--){var b=E[I]|0;y&&b==_||(m[I]=b,y=!1)}this.g=m}var c={};function l(E){return-128<=E&&128>E?i(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return M(u(-E));for(var _=[],m=1,y=0;E>=m;y++)_[y]=E/m|0,m*=4294967296;return new o(_,0)}function h(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return M(h(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=u(Math.pow(_,8)),y=p,I=0;I<E.length;I+=8){var b=Math.min(8,E.length-I),T=parseInt(E.substring(I,I+b),_);8>b?(b=u(Math.pow(_,b)),y=y.j(b).add(u(T))):(y=y.j(m),y=y.add(u(T)))}return y}var p=l(0),g=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(V(this))return-M(this).m();for(var E=0,_=1,m=0;m<this.g.length;m++){var y=this.i(m);E+=(0<=y?y:4294967296+y)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(V(this))return"-"+M(this).toString(E);for(var _=u(Math.pow(E,6)),m=this,y="";;){var I=O(m,_).g;m=F(m,I.j(_));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=I,C(m))return b+y;for(;6>b.length;)b="0"+b;y=b+y}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function V(E){return E.h==-1}t.l=function(E){return E=F(this,E),V(E)?-1:C(E)?0:1};function M(E){for(var _=E.g.length,m=[],y=0;y<_;y++)m[y]=~E.g[y];return new o(m,~E.h).add(g)}t.abs=function(){return V(this)?M(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0,I=0;I<=_;I++){var b=y+(this.i(I)&65535)+(E.i(I)&65535),T=(b>>>16)+(this.i(I)>>>16)+(E.i(I)>>>16);y=T>>>16,b&=65535,T&=65535,m[I]=T<<16|b}return new o(m,m[m.length-1]&-2147483648?-1:0)};function F(E,_){return E.add(M(_))}t.j=function(E){if(C(this)||C(E))return p;if(V(this))return V(E)?M(this).j(M(E)):M(M(this).j(E));if(V(E))return M(this.j(M(E)));if(0>this.l(w)&&0>E.l(w))return u(this.m()*E.m());for(var _=this.g.length+E.g.length,m=[],y=0;y<2*_;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var I=0;I<E.g.length;I++){var b=this.i(y)>>>16,T=this.i(y)&65535,me=E.i(I)>>>16,be=E.i(I)&65535;m[2*y+2*I]+=T*be,D(m,2*y+2*I),m[2*y+2*I+1]+=b*be,D(m,2*y+2*I+1),m[2*y+2*I+1]+=T*me,D(m,2*y+2*I+1),m[2*y+2*I+2]+=b*me,D(m,2*y+2*I+2)}for(y=0;y<_;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=_;y<2*_;y++)m[y]=0;return new o(m,0)};function D(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function S(E,_){this.g=E,this.h=_}function O(E,_){if(C(_))throw Error("division by zero");if(C(E))return new S(p,p);if(V(E))return _=O(M(E),_),new S(M(_.g),M(_.h));if(V(_))return _=O(E,M(_)),new S(M(_.g),_.h);if(30<E.g.length){if(V(E)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var m=g,y=_;0>=y.l(E);)m=x(m),y=x(y);var I=k(m,1),b=k(y,1);for(y=k(y,2),m=k(m,2);!C(y);){var T=b.add(y);0>=T.l(E)&&(I=I.add(m),b=T),y=k(y,1),m=k(m,1)}return _=F(E,I.j(_)),new S(I,_)}for(I=p;0<=E.l(_);){for(m=Math.max(1,Math.floor(E.m()/_.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),b=u(m),T=b.j(_);V(T)||0<T.l(E);)m-=y,b=u(m),T=b.j(_);C(b)&&(b=g),I=I.add(b),E=F(E,T)}return new S(I,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)&E.i(y);return new o(m,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)|E.i(y);return new o(m,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),m=[],y=0;y<_;y++)m[y]=this.i(y)^E.i(y);return new o(m,this.h^E.h)};function x(E){for(var _=E.g.length+1,m=[],y=0;y<_;y++)m[y]=E.i(y)<<1|E.i(y-1)>>>31;return new o(m,E.h)}function k(E,_){var m=_>>5;_%=32;for(var y=E.g.length-m,I=[],b=0;b<y;b++)I[b]=0<_?E.i(b+m)>>>_|E.i(b+m+1)<<32-_:E.i(b+m);return new o(I,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,dv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,es=o}).apply(typeof Zp<"u"?Zp:typeof self<"u"?self:typeof window<"u"?window:{});var Ta=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fv,pv,$i,gv,Da,Ru,mv,_v,yv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,d,f){return a==Array.prototype||a==Object.prototype||(a[d]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ta=="object"&&Ta];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var N=a[v];if(!(N in f))break e;f=f[N]}a=a[a.length-1],v=f[a],d=d(v),d!=v&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}function i(a,d){a instanceof String&&(a+="");var f=0,v=!1,N={next:function(){if(!v&&f<a.length){var U=f++;return{value:d(U,a[U]),done:!1}}return v=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(d,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var d=typeof a;return d=d!="object"?d:a?Array.isArray(a)?"array":d:"null",d=="array"||d=="object"&&typeof a.length=="number"}function u(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function h(a,d,f){return a.call.apply(a.bind,arguments)}function p(a,d,f){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,v),a.apply(d,N)}}return function(){return a.apply(d,arguments)}}function g(a,d,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:p,g.apply(null,arguments)}function w(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var v=f.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function C(a,d){function f(){}f.prototype=d.prototype,a.aa=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(v,N,U){for(var Q=Array(arguments.length-2),je=2;je<arguments.length;je++)Q[je-2]=arguments[je];return d.prototype[N].apply(v,Q)}}function V(a){const d=a.length;if(0<d){const f=Array(d);for(let v=0;v<d;v++)f[v]=a[v];return f}return[]}function M(a,d){for(let f=1;f<arguments.length;f++){const v=arguments[f];if(l(v)){const N=a.length||0,U=v.length||0;a.length=N+U;for(let Q=0;Q<U;Q++)a[N+Q]=v[Q]}else a.push(v)}}class F{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var x=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function k(a,d,f){for(const v in a)d.call(f,a[v],v,a)}function E(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function _(a){const d={};for(const f in a)d[f]=a[f];return d}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(a,d){let f,v;for(let N=1;N<arguments.length;N++){v=arguments[N];for(f in v)a[f]=v[f];for(let U=0;U<m.length;U++)f=m[U],Object.prototype.hasOwnProperty.call(v,f)&&(a[f]=v[f])}}function I(a){var d=1;a=a.split(":");const f=[];for(;0<d&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function b(a){c.setTimeout(()=>{throw a},0)}function T(){var a=tt;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class me{constructor(){this.h=this.g=null}add(d,f){const v=be.get();v.set(d,f),this.h?this.h.next=v:this.g=v,this.h=v}}var be=new F(()=>new te,a=>a.reset());class te{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,Z=!1,tt=new me,we=()=>{const a=c.Promise.resolve(void 0);fe=()=>{a.then(ce)}};var ce=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){b(f)}var d=be;d.j(a),100>d.h&&(d.h++,a.next=d.g,d.g=a)}Z=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ve(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}Ve.prototype.h=function(){this.defaultPrevented=!0};var Et=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,d),c.removeEventListener("test",f,d)}catch{}return a}();function Tn(a,d){if(Ve.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget){if(x){e:{try{O(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:lt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Tn.aa.h.call(this)}}C(Tn,Ve);var lt={2:"touch",3:"pen",4:"mouse"};Tn.prototype.h=function(){Tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(a,d,f,v,N){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!v,this.ha=N,this.key=++ee,this.da=this.fa=!1}function ie(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Re(a){this.src=a,this.g={},this.h=0}Re.prototype.add=function(a,d,f,v,N){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var Q=A(a,d,v,N);return-1<Q?(d=a[Q],f||(d.fa=!1)):(d=new J(d,this.src,U,!!v,N),d.fa=f,a.push(d)),d};function $e(a,d){var f=d.type;if(f in a.g){var v=a.g[f],N=Array.prototype.indexOf.call(v,d,void 0),U;(U=0<=N)&&Array.prototype.splice.call(v,N,1),U&&(ie(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function A(a,d,f,v){for(var N=0;N<a.length;++N){var U=a[N];if(!U.da&&U.listener==d&&U.capture==!!f&&U.ha==v)return N}return-1}var R="closure_lm_"+(1e6*Math.random()|0),L={};function j(a,d,f,v,N){if(Array.isArray(d)){for(var U=0;U<d.length;U++)j(a,d[U],f,v,N);return null}return f=le(f),a&&a[B]?a.K(d,f,u(v)?!!v.capture:!!v,N):$(a,d,f,!1,v,N)}function $(a,d,f,v,N,U){if(!d)throw Error("Invalid event type");var Q=u(N)?!!N.capture:!!N,je=X(a);if(je||(a[R]=je=new Re(a)),f=je.add(d,f,v,Q,U),f.proxy)return f;if(v=G(),f.proxy=v,v.src=a,v.listener=f,a.addEventListener)Et||(N=Q),N===void 0&&(N=!1),a.addEventListener(d.toString(),v,N);else if(a.attachEvent)a.attachEvent(z(d.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function a(f){return d.call(a.src,a.listener,f)}const d=H;return a}function Y(a,d,f,v,N){if(Array.isArray(d))for(var U=0;U<d.length;U++)Y(a,d[U],f,v,N);else v=u(v)?!!v.capture:!!v,f=le(f),a&&a[B]?(a=a.i,d=String(d).toString(),d in a.g&&(U=a.g[d],f=A(U,f,v,N),-1<f&&(ie(U[f]),Array.prototype.splice.call(U,f,1),U.length==0&&(delete a.g[d],a.h--)))):a&&(a=X(a))&&(d=a.g[d.toString()],a=-1,d&&(a=A(d,f,v,N)),(f=-1<a?d[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[B])$e(d.i,a);else{var f=a.type,v=a.proxy;d.removeEventListener?d.removeEventListener(f,v,a.capture):d.detachEvent?d.detachEvent(z(f),v):d.addListener&&d.removeListener&&d.removeListener(v),(f=X(d))?($e(f,a),f.h==0&&(f.src=null,d[R]=null)):ie(a)}}}function z(a){return a in L?L[a]:L[a]="on"+a}function H(a,d){if(a.da)a=!0;else{d=new Tn(d,this);var f=a.listener,v=a.ha||a.src;a.fa&&W(a),a=f.call(v,d)}return a}function X(a){return a=a[R],a instanceof Re?a:null}var ue="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[ue]||(a[ue]=function(d){return a.handleEvent(d)}),a[ue])}function ae(){ne.call(this),this.i=new Re(this),this.M=this,this.F=null}C(ae,ne),ae.prototype[B]=!0,ae.prototype.removeEventListener=function(a,d,f,v){Y(this,a,d,f,v)};function de(a,d){var f,v=a.F;if(v)for(f=[];v;v=v.F)f.push(v);if(a=a.M,v=d.type||d,typeof d=="string")d=new Ve(d,a);else if(d instanceof Ve)d.target=d.target||a;else{var N=d;d=new Ve(v,a),y(d,N)}if(N=!0,f)for(var U=f.length-1;0<=U;U--){var Q=d.g=f[U];N=Le(Q,v,!0,d)&&N}if(Q=d.g=a,N=Le(Q,v,!0,d)&&N,N=Le(Q,v,!1,d)&&N,f)for(U=0;U<f.length;U++)Q=d.g=f[U],N=Le(Q,v,!1,d)&&N}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,d;for(d in a.g){for(var f=a.g[d],v=0;v<f.length;v++)ie(f[v]);delete a.g[d],a.h--}}this.F=null},ae.prototype.K=function(a,d,f,v){return this.i.add(String(a),d,!1,f,v)},ae.prototype.L=function(a,d,f,v){return this.i.add(String(a),d,!0,f,v)};function Le(a,d,f,v){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,U=0;U<d.length;++U){var Q=d[U];if(Q&&!Q.da&&Q.capture==f){var je=Q.listener,pt=Q.ha||Q.src;Q.fa&&$e(a.i,Q),N=je.call(pt,v)!==!1&&N}}return N&&!v.defaultPrevented}function Oe(a,d,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:c.setTimeout(a,d||0)}function Ze(a){a.g=Oe(()=>{a.g=null,a.i&&(a.i=!1,Ze(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class qt extends ne{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zt(a){ne.call(this),this.h=a,this.g={}}C(Zt,ne);var yi=[];function ar(a){k(a.g,function(d,f){this.g.hasOwnProperty(f)&&W(d)},a),a.g={}}Zt.prototype.N=function(){Zt.aa.N.call(this),ar(this)},Zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ts=c.JSON.stringify,kt=c.JSON.parse,en=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ws(){}ws.prototype.h=null;function yd(a){return a.h||(a.h=a.i())}function vd(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function il(){Ve.call(this,"d")}C(il,Ve);function ol(){Ve.call(this,"c")}C(ol,Ve);var Ur={},Ed=null;function Go(){return Ed=Ed||new ae}Ur.La="serverreachability";function Td(a){Ve.call(this,Ur.La,a)}C(Td,Ve);function Ei(a){const d=Go();de(d,new Td(d))}Ur.STAT_EVENT="statevent";function wd(a,d){Ve.call(this,Ur.STAT_EVENT,a),this.stat=d}C(wd,Ve);function Ot(a){const d=Go();de(d,new wd(d,a))}Ur.Ma="timingevent";function Id(a,d){Ve.call(this,Ur.Ma,a),this.size=d}C(Id,Ve);function Ti(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},d)}function wi(){this.g=!0}wi.prototype.xa=function(){this.g=!1};function UE(a,d,f,v,N,U){a.info(function(){if(a.g)if(U)for(var Q="",je=U.split("&"),pt=0;pt<je.length;pt++){var Ne=je[pt].split("=");if(1<Ne.length){var Tt=Ne[0];Ne=Ne[1];var wt=Tt.split("_");Q=2<=wt.length&&wt[1]=="type"?Q+(Tt+"="+Ne+"&"):Q+(Tt+"=redacted&")}}else Q=null;else Q=U;return"XMLHTTP REQ ("+v+") [attempt "+N+"]: "+d+`
`+f+`
`+Q})}function $E(a,d,f,v,N,U,Q){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+N+"]: "+d+`
`+f+`
`+U+" "+Q})}function Is(a,d,f,v){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+jE(a,f)+(v?" "+v:"")})}function BE(a,d){a.info(function(){return"TIMEOUT: "+d})}wi.prototype.info=function(){};function jE(a,d){if(!a.g)return d;if(!d)return null;try{var f=JSON.parse(d);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var v=f[a];if(!(2>v.length)){var N=v[1];if(Array.isArray(N)&&!(1>N.length)){var U=N[0];if(U!="noop"&&U!="stop"&&U!="close")for(var Q=1;Q<N.length;Q++)N[Q]=""}}}}return Ts(f)}catch{return d}}var zo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},al;function Qo(){}C(Qo,ws),Qo.prototype.g=function(){return new XMLHttpRequest},Qo.prototype.i=function(){return{}},al=new Qo;function cr(a,d,f,v){this.j=a,this.i=d,this.l=f,this.R=v||1,this.U=new Zt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ad}function Ad(){this.i=null,this.g="",this.h=!1}var Rd={},cl={};function ll(a,d,f){a.L=1,a.v=Zo(Vn(d)),a.m=f,a.P=!0,Sd(a,null)}function Sd(a,d){a.F=Date.now(),Yo(a),a.A=Vn(a.v);var f=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Bd(f.i,"t",v),a.C=0,f=a.j.J,a.h=new Ad,a.g=of(a.j,f?d:null,!a.m),0<a.O&&(a.M=new qt(g(a.Y,a,a.g),a.O)),d=a.U,f=a.g,v=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(yi[0]=N.toString()),N=yi);for(var U=0;U<N.length;U++){var Q=j(f,N[U],v||d.handleEvent,!1,d.h||d);if(!Q)break;d.g[Q.key]=Q}d=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,d)):(a.u="GET",a.g.ea(a.A,a.u,null,d)),Ei(),UE(a.i,a.u,a.A,a.l,a.R,a.m)}cr.prototype.ca=function(a){a=a.target;const d=this.M;d&&Mn(a)==3?d.j():this.Y(a)},cr.prototype.Y=function(a){try{if(a==this.g)e:{const wt=Mn(this.g);var d=this.g.Ba();const Rs=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||zd(this.g)))){this.J||wt!=4||d==7||(d==8||0>=Rs?Ei(3):Ei(2)),ul(this);var f=this.g.Z();this.X=f;t:if(Cd(this)){var v=zd(this.g);a="";var N=v.length,U=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$r(this),Ii(this);var Q="";break t}this.h.i=new c.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,a+=this.h.i.decode(v[d],{stream:!(U&&d==N-1)});v.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,$E(this.i,this.u,this.A,this.l,this.R,wt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var je,pt=this.g;if((je=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(je)){var Ne=je;break t}}Ne=null}if(f=Ne)Is(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hl(this,f);else{this.o=!1,this.s=3,Ot(12),$r(this),Ii(this);break e}}if(this.P){f=!0;let ln;for(;!this.J&&this.C<Q.length;)if(ln=qE(this,Q),ln==cl){wt==4&&(this.s=4,Ot(14),f=!1),Is(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==Rd){this.s=4,Ot(15),Is(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else Is(this.i,this.l,ln,null),hl(this,ln);if(Cd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||Q.length!=0||this.h.h||(this.s=1,Ot(16),f=!1),this.o=this.o&&f,!f)Is(this.i,this.l,Q,"[Invalid Chunked Response]"),$r(this),Ii(this);else if(0<Q.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),_l(Tt),Tt.M=!0,Ot(11))}}else Is(this.i,this.l,Q,null),hl(this,Q);wt==4&&$r(this),this.o&&!this.J&&(wt==4?tf(this.j,this):(this.o=!1,Yo(this)))}else oT(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),$r(this),Ii(this)}}}catch{}finally{}};function Cd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function qE(a,d){var f=a.C,v=d.indexOf(`
`,f);return v==-1?cl:(f=Number(d.substring(f,v)),isNaN(f)?Rd:(v+=1,v+f>d.length?cl:(d=d.slice(v,v+f),a.C=v+f,d)))}cr.prototype.cancel=function(){this.J=!0,$r(this)};function Yo(a){a.S=Date.now()+a.I,Pd(a,a.I)}function Pd(a,d){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ti(g(a.ba,a),d)}function ul(a){a.B&&(c.clearTimeout(a.B),a.B=null)}cr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(BE(this.i,this.A),this.L!=2&&(Ei(),Ot(17)),$r(this),this.s=2,Ii(this)):Pd(this,this.S-a)};function Ii(a){a.j.G==0||a.J||tf(a.j,a)}function $r(a){ul(a);var d=a.M;d&&typeof d.ma=="function"&&d.ma(),a.M=null,ar(a.U),a.g&&(d=a.g,a.g=null,d.abort(),d.ma())}function hl(a,d){try{var f=a.j;if(f.G!=0&&(f.g==a||dl(f.h,a))){if(!a.K&&dl(f.h,a)&&f.G==3){try{var v=f.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var N=v;if(N[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)sa(f),na(f);else break e;ml(f),Ot(18)}}else f.za=N[1],0<f.za-f.T&&37500>N[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ti(g(f.Za,f),6e3));if(1>=Dd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else jr(f,11)}else if((a.K||f.g==a)&&sa(f),!D(d))for(N=f.Da.g.parse(d),d=0;d<N.length;d++){let Ne=N[d];if(f.T=Ne[0],Ne=Ne[1],f.G==2)if(Ne[0]=="c"){f.K=Ne[1],f.ia=Ne[2];const Tt=Ne[3];Tt!=null&&(f.la=Tt,f.j.info("VER="+f.la));const wt=Ne[4];wt!=null&&(f.Aa=wt,f.j.info("SVER="+f.Aa));const Rs=Ne[5];Rs!=null&&typeof Rs=="number"&&0<Rs&&(v=1.5*Rs,f.L=v,f.j.info("backChannelRequestTimeoutMs_="+v)),v=f;const ln=a.g;if(ln){const oa=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oa){var U=v.h;U.g||oa.indexOf("spdy")==-1&&oa.indexOf("quic")==-1&&oa.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(fl(U,U.h),U.h=null))}if(v.D){const yl=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;yl&&(v.ya=yl,Ge(v.I,v.D,yl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),v=f;var Q=a;if(v.qa=sf(v,v.J?v.ia:null,v.W),Q.K){Nd(v.h,Q);var je=Q,pt=v.L;pt&&(je.I=pt),je.B&&(ul(je),Yo(je)),v.g=Q}else Zd(v);0<f.i.length&&ra(f)}else Ne[0]!="stop"&&Ne[0]!="close"||jr(f,7);else f.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?jr(f,7):gl(f):Ne[0]!="noop"&&f.l&&f.l.ta(Ne),f.v=0)}}Ei(4)}catch{}}var HE=class{constructor(a,d){this.g=a,this.map=d}};function kd(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Od(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Dd(a){return a.h?1:a.g?a.g.size:0}function dl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function fl(a,d){a.g?a.g.add(d):a.h=d}function Nd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}kd.prototype.cancel=function(){if(this.i=Vd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.D);return d}return V(a.i)}function KE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var d=[],f=a.length,v=0;v<f;v++)d.push(a[v]);return d}d=[],f=0;for(v in a)d[f++]=a[v];return d}function WE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var d=[];a=a.length;for(var f=0;f<a;f++)d.push(f);return d}d=[],f=0;for(const v in a)d[f++]=v;return d}}}function Md(a,d){if(a.forEach&&typeof a.forEach=="function")a.forEach(d,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,d,void 0);else for(var f=WE(a),v=KE(a),N=v.length,U=0;U<N;U++)d.call(void 0,v[U],f&&f[U],a)}var Ld=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function GE(a,d){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var v=a[f].indexOf("="),N=null;if(0<=v){var U=a[f].substring(0,v);N=a[f].substring(v+1)}else U=a[f];d(U,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,Jo(this,a.j),this.o=a.o,this.g=a.g,Xo(this,a.s),this.l=a.l;var d=a.i,f=new Ri;f.i=d.i,d.g&&(f.g=new Map(d.g),f.h=d.h),xd(this,f),this.m=a.m}else a&&(d=String(a).match(Ld))?(this.h=!1,Jo(this,d[1]||"",!0),this.o=bi(d[2]||""),this.g=bi(d[3]||"",!0),Xo(this,d[4]),this.l=bi(d[5]||"",!0),xd(this,d[6]||"",!0),this.m=bi(d[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}Br.prototype.toString=function(){var a=[],d=this.j;d&&a.push(Ai(d,Fd,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ai(d,Fd,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ai(f,f.charAt(0)=="/"?YE:QE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ai(f,XE)),a.join("")};function Vn(a){return new Br(a)}function Jo(a,d,f){a.j=f?bi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Xo(a,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);a.s=d}else a.s=null}function xd(a,d,f){d instanceof Ri?(a.i=d,ZE(a.i,a.h)):(f||(d=Ai(d,JE)),a.i=new Ri(d,a.h))}function Ge(a,d,f){a.i.set(d,f)}function Zo(a){return Ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function bi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ai(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,zE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Fd=/[#\/\?@]/g,QE=/[#\?:]/g,YE=/[#\?]/g,JE=/[#\?@]/g,XE=/#/g;function Ri(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function lr(a){a.g||(a.g=new Map,a.h=0,a.i&&GE(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Ri.prototype,t.add=function(a,d){lr(this),this.i=null,a=bs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Ud(a,d){lr(a),d=bs(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function $d(a,d){return lr(a),d=bs(a,d),a.g.has(d)}t.forEach=function(a,d){lr(this),this.g.forEach(function(f,v){f.forEach(function(N){a.call(d,N,v,this)},this)},this)},t.na=function(){lr(this);const a=Array.from(this.g.values()),d=Array.from(this.g.keys()),f=[];for(let v=0;v<d.length;v++){const N=a[v];for(let U=0;U<N.length;U++)f.push(d[v])}return f},t.V=function(a){lr(this);let d=[];if(typeof a=="string")$d(this,a)&&(d=d.concat(this.g.get(bs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)d=d.concat(a[f])}return d},t.set=function(a,d){return lr(this),this.i=null,a=bs(this,a),$d(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=this.V(a),0<a.length?String(a[0]):d):d};function Bd(a,d,f){Ud(a,d),0<f.length&&(a.i=null,a.g.set(bs(a,d),V(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(var f=0;f<d.length;f++){var v=d[f];const U=encodeURIComponent(String(v)),Q=this.V(v);for(v=0;v<Q.length;v++){var N=U;Q[v]!==""&&(N+="="+encodeURIComponent(String(Q[v]))),a.push(N)}}return this.i=a.join("&")};function bs(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function ZE(a,d){d&&!a.j&&(lr(a),a.i=null,a.g.forEach(function(f,v){var N=v.toLowerCase();v!=N&&(Ud(this,v),Bd(this,N,f))},a)),a.j=d}function eT(a,d){const f=new wi;if(c.Image){const v=new Image;v.onload=w(ur,f,"TestLoadImage: loaded",!0,d,v),v.onerror=w(ur,f,"TestLoadImage: error",!1,d,v),v.onabort=w(ur,f,"TestLoadImage: abort",!1,d,v),v.ontimeout=w(ur,f,"TestLoadImage: timeout",!1,d,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else d(!1)}function tT(a,d){const f=new wi,v=new AbortController,N=setTimeout(()=>{v.abort(),ur(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:v.signal}).then(U=>{clearTimeout(N),U.ok?ur(f,"TestPingServer: ok",!0,d):ur(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),ur(f,"TestPingServer: error",!1,d)})}function ur(a,d,f,v,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),v(f)}catch{}}function nT(){this.g=new en}function rT(a,d,f){const v=f||"";try{Md(a,function(N,U){let Q=N;u(N)&&(Q=Ts(N)),d.push(v+U+"="+encodeURIComponent(Q))})}catch(N){throw d.push(v+"type="+encodeURIComponent("_badmap")),N}}function Si(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Si,ws),Si.prototype.g=function(){return new ea(this.l,this.j)},Si.prototype.i=function(a){return function(){return a}}({});function ea(a,d){ae.call(this),this.D=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ea,ae),t=ea.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=d,this.readyState=1,Pi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(d.body=a),(this.D||c).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;jd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function jd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ci(this):Pi(this),this.readyState==3&&jd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ci(this))},t.Qa=function(a){this.g&&(this.response=a,Ci(this))},t.ga=function(){this.g&&Ci(this)};function Ci(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Pi(a)}t.setRequestHeader=function(a,d){this.u.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ea.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function qd(a){let d="";return k(a,function(f,v){d+=v,d+=":",d+=f,d+=`\r
`}),d}function pl(a,d,f){e:{for(v in f){var v=!1;break e}v=!0}v||(f=qd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ge(a,d,f))}function Xe(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Xe,ae);var sT=/^https?$/i,iT=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,d,f,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():al.g(),this.v=this.o?yd(this.o):yd(al),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(U){Hd(this,U);return}if(a=f||"",f=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var N in v)f.set(N,v[N]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const U of v.keys())f.set(U,v.get(U));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(f.keys()).find(U=>U.toLowerCase()=="content-type"),N=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(iT,d,void 0))||v||N||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,Q]of f)this.g.setRequestHeader(U,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gd(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){Hd(this,U)}};function Hd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.m=5,Kd(a),ta(a)}function Kd(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),ta(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ta(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Wd(this):this.bb())},t.bb=function(){Wd(this)};function Wd(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mn(a)!=4||a.Z()!=2)){if(a.u&&Mn(a)==4)Oe(a.Ea,0,a);else if(de(a,"readystatechange"),Mn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var v;if(v=Q===0){var N=String(a.D).match(Ld)[1]||null;!N&&c.self&&c.self.location&&(N=c.self.location.protocol.slice(0,-1)),v=!sT.test(N?N.toLowerCase():"")}f=v}if(f)de(a,"complete"),de(a,"success");else{a.m=6;try{var U=2<Mn(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",Kd(a)}}finally{ta(a)}}}}function ta(a,d){if(a.g){Gd(a);const f=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,d||de(a,"ready");try{f.onreadystatechange=v}catch{}}}function Gd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Mn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),kt(d)}};function zd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function oT(a){const d={};a=(a.g&&2<=Mn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(D(a[v]))continue;var f=I(a[v]);const N=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const U=d[N]||[];d[N]=U,U.push(f)}E(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Qd(a){this.Aa=0,this.i=[],this.j=new wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,a),this.cb=ki("retryDelaySeedMs",1e4,a),this.Wa=ki("forwardChannelMaxRetries",2,a),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new kd(a&&a.concurrentRequestLimit),this.Da=new nT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qd.prototype,t.la=8,t.G=1,t.connect=function(a,d,f,v){Ot(0),this.W=a,this.H=d||{},f&&v!==void 0&&(this.H.OSID=f,this.H.OAID=v),this.F=this.X,this.I=sf(this,null,this.W),ra(this)};function gl(a){if(Yd(a),a.G==3){var d=a.U++,f=Vn(a.I);if(Ge(f,"SID",a.K),Ge(f,"RID",d),Ge(f,"TYPE","terminate"),Oi(a,f),d=new cr(a,a.j,d),d.L=2,d.v=Zo(Vn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(d.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=d.v,f=!0),f||(d.g=of(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Yo(d)}rf(a)}function na(a){a.g&&(_l(a),a.g.cancel(),a.g=null)}function Yd(a){na(a),a.u&&(c.clearTimeout(a.u),a.u=null),sa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function ra(a){if(!Od(a.h)&&!a.s){a.s=!0;var d=a.Ga;fe||we(),Z||(fe(),Z=!0),tt.add(d,a),a.B=0}}function aT(a,d){return Dd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=d.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ti(g(a.Ga,a,d),nf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new cr(this,this.j,a);let U=this.o;if(this.S&&(U?(U=_(U),y(U,this.S)):U=this.S),this.m!==null||this.O||(N.H=U,U=null),this.P)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var v=this.i[f];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Xd(this,N,d),f=Vn(this.I),Ge(f,"RID",a),Ge(f,"CVER",22),this.D&&Ge(f,"X-HTTP-Session-Id",this.D),Oi(this,f),U&&(this.O?d="headers="+encodeURIComponent(String(qd(U)))+"&"+d:this.m&&pl(f,this.m,U)),fl(this.h,N),this.Ua&&Ge(f,"TYPE","init"),this.P?(Ge(f,"$req",d),Ge(f,"SID","null"),N.T=!0,ll(N,f,null)):ll(N,f,d),this.G=2}}else this.G==3&&(a?Jd(this,a):this.i.length==0||Od(this.h)||Jd(this))};function Jd(a,d){var f;d?f=d.l:f=a.U++;const v=Vn(a.I);Ge(v,"SID",a.K),Ge(v,"RID",f),Ge(v,"AID",a.T),Oi(a,v),a.m&&a.o&&pl(v,a.m,a.o),f=new cr(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),d&&(a.i=d.D.concat(a.i)),d=Xd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fl(a.h,f),ll(f,v,d)}function Oi(a,d){a.H&&k(a.H,function(f,v){Ge(d,v,f)}),a.l&&Md({},function(f,v){Ge(d,v,f)})}function Xd(a,d,f){f=Math.min(a.i.length,f);var v=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let U=-1;for(;;){const Q=["count="+f];U==-1?0<f?(U=N[0].g,Q.push("ofs="+U)):U=0:Q.push("ofs="+U);let je=!0;for(let pt=0;pt<f;pt++){let Ne=N[pt].g;const Tt=N[pt].map;if(Ne-=U,0>Ne)U=Math.max(0,N[pt].g-100),je=!1;else try{rT(Tt,Q,"req"+Ne+"_")}catch{v&&v(Tt)}}if(je){v=Q.join("&");break e}}}return a=a.i.splice(0,f),d.D=a,v}function Zd(a){if(!a.g&&!a.u){a.Y=1;var d=a.Fa;fe||we(),Z||(fe(),Z=!0),tt.add(d,a),a.v=0}}function ml(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ti(g(a.Fa,a),nf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ef(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ti(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ot(10),na(this),ef(this))};function _l(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function ef(a){a.g=new cr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var d=Vn(a.qa);Ge(d,"RID","rpc"),Ge(d,"SID",a.K),Ge(d,"AID",a.T),Ge(d,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ge(d,"TO",a.ja),Ge(d,"TYPE","xmlhttp"),Oi(a,d),a.m&&a.o&&pl(d,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zo(Vn(d)),f.m=null,f.P=!0,Sd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,na(this),ml(this),Ot(19))};function sa(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function tf(a,d){var f=null;if(a.g==d){sa(a),_l(a),a.g=null;var v=2}else if(dl(a.h,d))f=d.D,Nd(a.h,d),v=1;else return;if(a.G!=0){if(d.o)if(v==1){f=d.m?d.m.length:0,d=Date.now()-d.F;var N=a.B;v=Go(),de(v,new Id(v,f)),ra(a)}else Zd(a);else if(N=d.s,N==3||N==0&&0<d.X||!(v==1&&aT(a,d)||v==2&&ml(a)))switch(f&&0<f.length&&(d=a.h,d.i=d.i.concat(f)),N){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function nf(a,d){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*d}function jr(a,d){if(a.j.info("Error code "+d),d==2){var f=g(a.fb,a),v=a.Xa;const N=!v;v=new Br(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Jo(v,"https"),Zo(v),N?eT(v.toString(),f):tT(v.toString(),f)}else Ot(2);a.G=0,a.l&&a.l.sa(d),rf(a),Yd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ot(2)):(this.j.info("Failed to ping google.com"),Ot(1))};function rf(a){if(a.G=0,a.ka=[],a.l){const d=Vd(a.h);(d.length!=0||a.i.length!=0)&&(M(a.ka,d),M(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function sf(a,d,f){var v=f instanceof Br?Vn(f):new Br(f);if(v.g!="")d&&(v.g=d+"."+v.g),Xo(v,v.s);else{var N=c.location;v=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var U=new Br(null);v&&Jo(U,v),d&&(U.g=d),N&&Xo(U,N),f&&(U.l=f),v=U}return f=a.D,d=a.ya,f&&d&&Ge(v,f,d),Ge(v,"VER",a.la),Oi(a,v),v}function of(a,d,f){if(d&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Ca&&!a.pa?new Xe(new Si({eb:f})):new Xe(a.pa),d.Ha(a.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function af(){}t=af.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ia(){}ia.prototype.g=function(a,d){return new Ht(a,d)};function Ht(a,d){ae.call(this),this.g=new Qd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(a?a["X-WebChannel-Client-Profile"]=d.va:a={"X-WebChannel-Client-Profile":d.va}),this.g.S=a,(a=d&&d.Sb)&&!D(a)&&(this.g.m=a),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!D(d)&&(this.g.D=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new As(this)}C(Ht,ae),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){gl(this.g)},Ht.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ts(a),a=f);d.i.push(new HE(d.Ya++,a)),d.G==3&&ra(d)},Ht.prototype.N=function(){this.g.l=null,delete this.j,gl(this.g),delete this.g,Ht.aa.N.call(this)};function cf(a){il.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}C(cf,il);function lf(){ol.call(this),this.status=1}C(lf,ol);function As(a){this.g=a}C(As,af),As.prototype.ua=function(){de(this.g,"a")},As.prototype.ta=function(a){de(this.g,new cf(a))},As.prototype.sa=function(a){de(this.g,new lf)},As.prototype.ra=function(){de(this.g,"b")},ia.prototype.createWebChannel=ia.prototype.g,Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,yv=function(){return new ia},_v=function(){return Go()},mv=Ur,Ru={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zo.NO_ERROR=0,zo.TIMEOUT=8,zo.HTTP_ERROR=6,Da=zo,bd.COMPLETE="complete",gv=bd,vd.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,$i=vd,pv=Si,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,fv=Xe}).apply(typeof Ta<"u"?Ta:typeof self<"u"?self:typeof window<"u"?window:{});const eg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ls=new Lc("@firebase/firestore");function Mi(){return ls.logLevel}function oe(t,...e){if(ls.logLevel<=Se.DEBUG){const n=e.map(Fh);ls.debug(`Firestore (${di}): ${t}`,...n)}}function Jn(t,...e){if(ls.logLevel<=Se.ERROR){const n=e.map(Fh);ls.error(`Firestore (${di}): ${t}`,...n)}}function ti(t,...e){if(ls.logLevel<=Se.WARN){const n=e.map(Fh);ls.warn(`Firestore (${di}): ${t}`,...n)}}function Fh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function We(t,e){t||ye()}function Te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class R1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class S1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C1{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new vv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Rt(e)}}class P1{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new P1(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class O1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,oe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new O1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=N1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Me(t,e){return t<e?-1:t>e?1:0}function ni(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ee(e)}static min(){return new Ee(new ct(0,0))}static max(){return new Ee(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ze extends yo{construct(e,n,r){return new ze(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ze(n)}static emptyPath(){return new ze([])}}const V1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends yo{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return V1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new re(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new re(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new re(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(ze.fromString(e))}static fromName(e){return new he(ze.fromString(e).popFirst(5))}static empty(){return new he(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ze.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new ze(e.slice()))}}function M1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ee.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Nr(s,he.empty(),e)}function L1(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(Ee.min(),he.empty(),-1)}static max(){return new Nr(Ee.max(),he.empty(),-1)}}function x1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:Me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class U1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==F1)throw t;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++c,c===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function $1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $o(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Uh.oe=-1;function qc(t){return t==null}function oc(t){return t===0&&1/t==-1/0}function B1(t){return typeof t=="number"&&Number.isInteger(t)&&!oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??gt.RED,this.left=s??gt.EMPTY,this.right=i??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new gt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(e,n,r,s,i){return this}insert(e,n,r){return new gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ng(this.data.getIterator())}getIteratorFrom(e){return new ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new zt([])}unionWith(e){let n=new _t(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class wv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wv("Invalid base64 string: "+i):i}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const j1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(We(!!t),typeof t=="string"){let e=0;const n=j1.exec(t);if(We(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bh(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?Bh(e):e}function vo(t){const e=Vr(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,r,s,i,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:H1(t)?9007199254740991:10:ye()}function Nn(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vr(s.timestampValue),c=Vr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return us(s.bytesValue).isEqual(us(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),c=rt(i.doubleValue);return o===c?oc(o)===oc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ni(t.arrayValue.values||[],e.arrayValue.values||[],Nn);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(tg(o)!==tg(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Nn(o[l],c[l])))return!1;return!0}(t,e);default:return ye()}}function To(t,e){return(t.values||[]).find(n=>Nn(n,e))!==void 0}function ri(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return Me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=rt(i.integerValue||i.doubleValue),l=rt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return rg(t.timestampValue,e.timestampValue);case 4:return rg(vo(t),vo(e));case 5:return Me(t.stringValue,e.stringValue);case 6:return function(i,o){const c=us(i),l=us(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=Me(c[u],l[u]);if(h!==0)return h}return Me(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Me(rt(i.latitude),rt(o.latitude));return c!==0?c:Me(rt(i.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const h=ri(c[u],l[u]);if(h)return h}return Me(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Ia.mapValue&&o===Ia.mapValue)return 0;if(i===Ia.mapValue)return 1;if(o===Ia.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const g=Me(l[p],h[p]);if(g!==0)return g;const w=ri(c[l[p]],u[h[p]]);if(w!==0)return w}return Me(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ye()}}function rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Me(t,e);const n=Vr(t),r=Vr(e),s=Me(n.seconds,r.seconds);return s!==0?s:Me(n.nanos,r.nanos)}function si(t){return Su(t)}function Su(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Su(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Su(n.fields[o])}`;return s+"}"}(t.mapValue):ye()}function sg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Cu(t){return!!t&&"integerValue"in t}function jh(t){return!!t&&"arrayValue"in t}function ig(t){return!!t&&"nullValue"in t}function og(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Na(t){return!!t&&"mapValue"in t}function Zi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function H1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Na(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zi(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Zi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Na(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Na(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new xt(Zi(this.value))}}function Iv(t){const e=[];return vs(t.fields,(n,r)=>{const s=new mt([n]);if(Na(r)){const i=Iv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new St(e,0,Ee.min(),Ee.min(),Ee.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,Ee.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,Ee.min(),Ee.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,Ee.min(),Ee.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ac{constructor(e,n){this.position=e,this.inclusive=n}}function ag(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=ri(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class cc{constructor(e,n="asc"){this.field=e,this.dir=n}}function K1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bv{}class st extends bv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new G1(e,n,r):n==="array-contains"?new Y1(e,r):n==="in"?new J1(e,r):n==="not-in"?new X1(e,r):n==="array-contains-any"?new Z1(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new z1(e,r):new Q1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ri(n,this.value)):n!==null&&hs(this.value)===hs(n)&&this.matchesComparison(ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends bv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new yn(e,n)}matches(e){return Av(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Av(t){return t.op==="and"}function Rv(t){return W1(t)&&Av(t)}function W1(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Pu(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+si(t.value);if(Rv(t))return t.filters.map(e=>Pu(e)).join(",");{const e=t.filters.map(n=>Pu(n)).join(",");return`${t.op}(${e})`}}function Sv(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&Nn(r.value,s.value)}(t,e):t instanceof yn?function(r,s){return s instanceof yn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&Sv(o,s.filters[c]),!0):!1}(t,e):void ye()}function Cv(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${si(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cv).join(" ,")+"}"}(t):"Filter"}class G1 extends st{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class z1 extends st{constructor(e,n){super(e,"in",n),this.keys=Pv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Q1 extends st{constructor(e,n){super(e,"not-in",n),this.keys=Pv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Pv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class Y1 extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jh(n)&&To(n.arrayValue,this.value)}}class J1 extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class X1 extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!To(this.value.arrayValue,n)}}class Z1 extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function lg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ek(t,e,n,r,s,i,o)}function qh(t){const e=Te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),qc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),e.ue=n}return e.ue}function Hh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!K1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cg(t.startAt,e.startAt)&&cg(t.endAt,e.endAt)}function ku(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tk(t,e,n,r,s,i,o,c){return new Bo(t,e,n,r,s,i,o,c)}function Kh(t){return new Bo(t)}function ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kv(t){return t.collectionGroup!==null}function eo(t){const e=Te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new _t(mt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new cc(i,r))}),n.has(mt.keyField().canonicalString())||e.ce.push(new cc(mt.keyField(),r))}return e.ce}function Pn(t){const e=Te(t);return e.le||(e.le=nk(e,eo(t))),e.le}function nk(t,e){if(t.limitType==="F")return lg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new cc(s.field,i)});const n=t.endAt?new ac(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ac(t.startAt.position,t.startAt.inclusive):null;return lg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ou(t,e){const n=t.filters.concat([e]);return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Du(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hc(t,e){return Hh(Pn(t),Pn(e))&&t.limitType===e.limitType}function Ov(t){return`${qh(Pn(t))}|lt:${t.limitType}`}function ks(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cv(s)).join(", ")}]`),qc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>si(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>si(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function Kc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of eo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=ag(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,eo(r),s)||r.endAt&&!function(o,c,l){const u=ag(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,eo(r),s))}(t,e)}function rk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dv(t){return(e,n)=>{let r=!1;for(const s of eo(t)){const i=sk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function sk(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ri(l,u):ye()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Tv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new Je(he.comparator);function Xn(){return ik}const Nv=new Je(he.comparator);function Bi(...t){let e=Nv;for(const n of t)e=e.insert(n.key,n);return e}function Vv(t){let e=Nv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Qr(){return to()}function Mv(){return to()}function to(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const ok=new Je(he.comparator),ak=new _t(he.comparator);function Ae(...t){let e=ak;for(const n of t)e=e.add(n);return e}const ck=new _t(Me);function lk(){return ck}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function xv(t){return{integerValue:""+t}}function uk(t,e){return B1(e)?xv(e):Lv(t,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function hk(t,e,n){return t instanceof lc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$h(i)&&(i=Bh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof wo?Uv(t,e):t instanceof Io?$v(t,e):function(s,i){const o=Fv(s,i),c=hg(o)+hg(s.Pe);return Cu(o)&&Cu(s.Pe)?xv(c):Lv(s.serializer,c)}(t,e)}function dk(t,e,n){return t instanceof wo?Uv(t,e):t instanceof Io?$v(t,e):n}function Fv(t,e){return t instanceof uc?function(r){return Cu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class lc extends Wc{}class wo extends Wc{constructor(e){super(),this.elements=e}}function Uv(t,e){const n=Bv(e);for(const r of t.elements)n.some(s=>Nn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends Wc{constructor(e){super(),this.elements=e}}function $v(t,e){let n=Bv(e);for(const r of t.elements)n=n.filter(s=>!Nn(s,r));return{arrayValue:{values:n}}}class uc extends Wc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function hg(t){return rt(t.integerValue||t.doubleValue)}function Bv(t){return jh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof wo&&s instanceof wo||r instanceof Io&&s instanceof Io?ni(r.elements,s.elements,Nn):r instanceof uc&&s instanceof uc?Nn(r.Pe,s.Pe):r instanceof lc&&s instanceof lc}(t.transform,e.transform)}class pk{constructor(e,n){this.version=e,this.transformResults=n}}class pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Va(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gc{}function jv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wh(t.key,pn.none()):new jo(t.key,t.data,pn.none());{const n=t.data,r=xt.empty();let s=new _t(mt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fr(t.key,r,new zt(s.toArray()),pn.none())}}function gk(t,e,n){t instanceof jo?function(s,i,o){const c=s.value.clone(),l=fg(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(s,i,o){if(!Va(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=fg(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(qv(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function no(t,e,n,r){return t instanceof jo?function(i,o,c,l){if(!Va(i.precondition,o))return c;const u=i.value.clone(),h=pg(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,o,c,l){if(!Va(i.precondition,o))return c;const u=pg(i.fieldTransforms,l,o),h=o.data;return h.setAll(qv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Va(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function mk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Fv(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function dg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ni(r,s,(i,o)=>fk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jo extends Gc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends Gc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fg(t,e,n){const r=new Map;We(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,dk(o,c,n[s]))}return r}function pg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,hk(i,o,e))}return r}class Wh extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _k extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=no(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Mv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=jv(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ae())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,(n,r)=>dg(n,r))&&ni(this.baseMutations,e.baseMutations,(n,r)=>dg(n,r))}}class Gh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){We(e.mutations.length===r.length);let s=function(){return ok}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Gh(e,n,r,s)}}/**
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
 */class vk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ek{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,Pe;function Tk(t){switch(t){default:return ye();case q.CANCELLED:case q.UNKNOWN:case q.DEADLINE_EXCEEDED:case q.RESOURCE_EXHAUSTED:case q.INTERNAL:case q.UNAVAILABLE:case q.UNAUTHENTICATED:return!1;case q.INVALID_ARGUMENT:case q.NOT_FOUND:case q.ALREADY_EXISTS:case q.PERMISSION_DENIED:case q.FAILED_PRECONDITION:case q.ABORTED:case q.OUT_OF_RANGE:case q.UNIMPLEMENTED:case q.DATA_LOSS:return!0}}function Hv(t){if(t===void 0)return Jn("GRPC error has no .code"),q.UNKNOWN;switch(t){case nt.OK:return q.OK;case nt.CANCELLED:return q.CANCELLED;case nt.UNKNOWN:return q.UNKNOWN;case nt.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case nt.INTERNAL:return q.INTERNAL;case nt.UNAVAILABLE:return q.UNAVAILABLE;case nt.UNAUTHENTICATED:return q.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case nt.NOT_FOUND:return q.NOT_FOUND;case nt.ALREADY_EXISTS:return q.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return q.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case nt.ABORTED:return q.ABORTED;case nt.OUT_OF_RANGE:return q.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return q.UNIMPLEMENTED;case nt.DATA_LOSS:return q.DATA_LOSS;default:return ye()}}(Pe=nt||(nt={}))[Pe.OK=0]="OK",Pe[Pe.CANCELLED=1]="CANCELLED",Pe[Pe.UNKNOWN=2]="UNKNOWN",Pe[Pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pe[Pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pe[Pe.NOT_FOUND=5]="NOT_FOUND",Pe[Pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pe[Pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pe[Pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pe[Pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pe[Pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pe[Pe.ABORTED=10]="ABORTED",Pe[Pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pe[Pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pe[Pe.INTERNAL=13]="INTERNAL",Pe[Pe.UNAVAILABLE=14]="UNAVAILABLE",Pe[Pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function wk(){return new TextEncoder}/**
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
 */const Ik=new es([4294967295,4294967295],0);function gg(t){const e=wk().encode(t),n=new dv;return n.update(e),new Uint8Array(n.digest())}function mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class zh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ji(`Invalid padding: ${n}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ji(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare(Ik)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=gg(e),[r,s]=mg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zh(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=gg(e),[r,s]=mg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zc(Ee.min(),s,new Je(Me),Xn(),Ae())}}class qo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qo(r,n,Ae(),Ae(),Ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Kv{constructor(e,n){this.targetId=e,this.me=n}}class Wv{constructor(e,n,r=Pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _g{constructor(){this.fe=0,this.ge=vg(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ae(),n=Ae(),r=Ae();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye()}}),new qo(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=vg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Xn(),this.qe=yg(),this.Qe=new Je(Me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ye()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(ku(i))if(r===0){const o=new he(i.path);this.Ue(n,o,St.newNoDocument(o,Ee.min()))}else We(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=us(r).toUint8Array()}catch(l){if(l instanceof wv)return ti("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new zh(o,s,i)}catch(l){return ti(l instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&ku(c.target)){const l=new he(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,St.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=Ae();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new zc(e,n,this.Qe,this.ke,r);return this.ke=Xn(),this.qe=yg(),this.Qe=new Je(Me),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new _g,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(Me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new _g),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yg(){return new Je(he.comparator)}function vg(){return new Je(he.comparator)}const Ak={asc:"ASCENDING",desc:"DESCENDING"},Rk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Sk={and:"AND",or:"OR"};class Ck{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nu(t,e){return t.useProto3Json||qc(e)?e:{value:e}}function hc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Pk(t,e){return hc(t,e.toTimestamp())}function kn(t){return We(!!t),Ee.fromTimestamp(function(n){const r=Vr(n);return new ct(r.seconds,r.nanos)}(t))}function Qh(t,e){return Vu(t,e).canonicalString()}function Vu(t,e){const n=function(s){return new ze(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function zv(t){const e=ze.fromString(t);return We(Zv(e)),e}function Mu(t,e){return Qh(t.databaseId,e.path)}function Bl(t,e){const n=zv(e);if(n.get(1)!==t.databaseId.projectId)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(Yv(n))}function Qv(t,e){return Qh(t.databaseId,e)}function kk(t){const e=zv(t);return e.length===4?ze.emptyPath():Yv(e)}function Lu(t){return new ze(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yv(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Eg(t,e,n){return{name:Mu(t,e),fields:n.value.mapValue.fields}}function Ok(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ye()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(We(h===void 0||typeof h=="string"),Pt.fromBase64String(h||"")):(We(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Pt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?q.UNKNOWN:Hv(u.code);return new re(h,u.message||"")}(o);n=new Wv(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bl(t,r.document.name),i=kn(r.document.updateTime),o=r.document.createTime?kn(r.document.createTime):Ee.min(),c=new xt({mapValue:{fields:r.document.fields}}),l=St.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Ma(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bl(t,r.document),i=r.readTime?kn(r.readTime):Ee.min(),o=St.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ma([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bl(t,r.document),i=r.removedTargetIds||[];n=new Ma([],i,s,null)}else{if(!("filter"in e))return ye();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Ek(s,i),c=r.targetId;n=new Kv(c,o)}}return n}function Dk(t,e){let n;if(e instanceof jo)n={update:Eg(t,e.key,e.value)};else if(e instanceof Wh)n={delete:Mu(t,e.key)};else if(e instanceof Fr)n={update:Eg(t,e.key,e.data),updateMask:Bk(e.fieldMask)};else{if(!(e instanceof _k))return ye();n={verify:Mu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof lc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof uc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ye()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Pk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye()}(t,e.precondition)),n}function Nk(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?kn(s.updateTime):kn(i);return o.isEqual(Ee.min())&&(o=kn(i)),new pk(o,s.transformResults||[])}(n,e))):[]}function Vk(t,e){return{documents:[Qv(t,e.path)]}}function Mk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qv(t,s);const i=function(u){if(u.length!==0)return Xv(yn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Os(g.field),direction:Fk(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Nu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function Lk(t){let e=kk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){We(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const g=Jv(p);return g instanceof yn&&Rv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new cc(Ds(C.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,qc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,w=p.values||[];return new ac(w,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,w=p.values||[];return new ac(w,g)}(n.endAt)),tk(e,s,o,i,c,"F",l,u)}function xk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Jv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ds(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ds(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ds(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ds(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ye()}}(t):t.fieldFilter!==void 0?function(n){return st.create(Ds(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ye()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>Jv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye()}}(n.compositeFilter.op))}(t):ye()}function Fk(t){return Ak[t]}function Uk(t){return Rk[t]}function $k(t){return Sk[t]}function Os(t){return{fieldPath:t.canonicalString()}}function Ds(t){return mt.fromServerFormat(t.fieldPath)}function Xv(t){return t instanceof st?function(n){if(n.op==="=="){if(og(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NAN"}};if(ig(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(og(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NAN"}};if(ig(n.value))return{unaryFilter:{field:Os(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Os(n.field),op:Uk(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(s=>Xv(s));return r.length===1?r[0]:{compositeFilter:{op:$k(n.op),filters:r}}}(t):ye()}function Bk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Zv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,n,r,s,i=Ee.min(),o=Ee.min(),c=Pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new br(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.ct=e}}function qk(t){const e=Lk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Du(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this._n=new Kk}addToCollectionParentIndex(e,n){return this._n.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(Nr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class Kk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new _t(ze.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new _t(ze.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Wk{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Gk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&no(r.mutation,s,zt.empty(),ct.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ae()){const s=Qr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Bi();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Xn();const o=to(),c=function(){return to()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Fr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),no(h.mutation,u,h.mutation.getFieldMask(),ct.now())):o.set(u.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var p;return c.set(u,new Gk(h,(p=o.get(u))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=to();let s=new Je((o,c)=>o-c),i=Ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||zt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const p=(s.get(c.batchId)||Ae()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,p=Mv();h.forEach(g=>{if(!i.has(g)){const w=jv(n.get(g),r.get(g));w!==null&&p.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):kv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(Qr());let c=-1,l=i;return o.next(u=>K.forEach(u,(h,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Ae())).next(h=>({batchId:c,changes:Vv(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=Bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,i).next(c=>K.forEach(c,l=>{const u=function(p,g){return new Bo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,St.newInvalidDocument(h)))});let c=Bi();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&no(h.mutation,u,zt.empty(),ct.now()),Kc(n,u)&&(c=c.insert(l,u))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return K.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:kn(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:qk(s.bundledQuery),readTime:kn(s.readTime)}}(n)),K.resolve()}}/**
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
 */class Yk{constructor(){this.overlays=new Je(he.comparator),this.hr=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Qr();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=Qr(),i=n.length+1,o=new he(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Je((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Qr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Qr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>c.set(u,h)),!(c.size()>=s)););return K.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vk(n,r));let i=this.hr.get(n);i===void 0&&(i=Ae(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.Pr=new _t(dt.Ir),this.Tr=new _t(dt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new dt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new he(new ze([])),r=new dt(n,e),s=new dt(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new he(new ze([])),r=new dt(n,e),s=new dt(n,e+1);let i=Ae();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return he.comparator(e.key,n.key)||Me(e.pr,n.pr)}static Er(e,n){return Me(e.pr,n.pr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new _t(dt.Ir)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yk(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new dt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(Me);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),K.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new dt(new he(i),0);let c=new _t(Me);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.pr)),!0)},o),K.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){We(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return K.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new dt(n,0),s=this.wr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e){this.vr=e,this.docs=function(){return new Je(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xn();const o=n.path,c=new he(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||x1(L1(h),r)<=0||(s.has(h.key)||Kc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye()}Fr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zk(this)}getSize(e){return K.resolve(this.size)}}class Zk extends Wk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.persistence=e,this.Mr=new fi(n=>qh(n),Hh),this.lastRemoteSnapshotVersion=Ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Yh,this.targetCount=0,this.Lr=ii.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),K.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ii(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.qn(n),K.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n){this.Br={},this.overlays={},this.kr=new Uh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new eO(this),this.indexManager=new Hk,this.remoteDocumentCache=function(s){return new Xk(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new jk(n),this.$r=new Qk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Yk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Jk(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){oe("MemoryPersistence","Starting transaction:",e);const s=new nO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class nO extends U1{constructor(e){super(),this.currentSequenceNumber=e}}class Jh{constructor(e){this.persistence=e,this.zr=new Yh,this.jr=null}static Hr(e){return new Jh(e)}get Jr(){if(this.jr)return this.jr;throw ye()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),K.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Jr,r=>{const s=he.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,Ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return K.or([()=>K.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ae(),s=Ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xh(e,n.fromCache,r,s)}}/**
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
 */class rO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return KA()?8:$1(vt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new rO;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Mi()<=Se.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",ks(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),K.resolve()):(Mi()<=Se.DEBUG&&oe("QueryEngine","Query:",ks(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Mi()<=Se.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",ks(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):K.resolve())}ji(e,n){if(ug(n))return K.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Du(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ae(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,c);return this.Xi(n,u,o,l.readTime)?this.ji(e,Du(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,s){return ug(n)||s.isEqual(Ee.min())?K.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?K.resolve(null):(Mi()<=Se.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ks(n)),this.es(e,o,n,M1(s,-1)).next(c=>c))})}Zi(e,n){let r=new _t(Dv(e));return n.forEach((s,i)=>{Kc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Mi()<=Se.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",ks(n)),this.zi.getDocumentsMatchingQuery(e,n,Nr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Je(Me),this.rs=new fi(i=>qh(i),Hh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function oO(t,e,n,r){return new iO(t,e,n,r)}async function eE(t,e){const n=Te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ae();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function aO(t,e){const n=Te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,h){const p=u.batch,g=p.keys();let w=K.resolve();return g.forEach(C=>{w=w.next(()=>h.getEntry(l,C)).next(V=>{const M=u.docVersions.get(C);We(M!==null),V.version.compareTo(M)<0&&(p.applyToRemoteDocument(V,u),V.isValidDocument()&&(V.setReadTime(u.commitVersion),h.addEntry(V)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=Ae();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function tE(t){const e=Te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function cO(t,e){const n=Te(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((h,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,h.addedDocuments,p)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(Pt.EMPTY_BYTE_STRING,Ee.min()).withLastLimboFreeSnapshotVersion(Ee.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),s=s.insert(p,w),function(V,M,F){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(g,w,h)&&c.push(n.Qr.updateTargetData(i,w))});let l=Xn(),u=Ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),c.push(lO(i,o,e.documentUpdates).next(h=>{l=h.cs,u=h.ls})),!r.isEqual(Ee.min())){const h=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(h)}return K.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.ns=s,i))}function lO(t,e,n){let r=Ae(),s=Ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Xn();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Ee.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):oe("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:s}})}function uO(t,e){const n=Te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hO(t,e){const n=Te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new br(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function xu(t,e,n){const r=Te(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$o(o))throw o;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Tg(t,e,n){const r=Te(t);let s=Ee.min(),i=Ae();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=Te(l),g=p.rs.get(h);return g!==void 0?K.resolve(p.ns.get(g)):p.Qr.getTargetData(u,h)}(r,o,Pn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:Ee.min(),n?i:Ae())).next(c=>(dO(r,rk(e),c),{documents:c,hs:i})))}function dO(t,e,n){let r=t.ss.get(e)||Ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class wg{constructor(){this.activeTargetIds=lk()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fO{constructor(){this.no=new wg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new wg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ba=null;function jl(){return ba===null?ba=function(){return 268435456+Math.round(2147483648*Math.random())}():ba++,"0x"+ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection";class _O extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=jl(),l=this.vo(n,r.toUriEncodedString());oe("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,i,o),this.Mo(n,l,u,s).then(h=>(oe("RestConnection",`Received RPC '${n}' ${c}: `,h),h),h=>{throw ti("RestConnection",`RPC '${n}' ${c} failed with error: `,h,"url: ",l,"request:",s),h})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+di}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=gO[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=jl();return new Promise((o,c)=>{const l=new fv;l.setWithCredentials(!0),l.listenOnce(gv.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Da.NO_ERROR:const h=l.getResponseJson();oe(It,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Da.TIMEOUT:oe(It,`RPC '${e}' ${i} timed out`),c(new re(q.DEADLINE_EXCEEDED,"Request time out"));break;case Da.HTTP_ERROR:const p=l.getStatus();if(oe(It,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const C=function(M){const F=M.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(F)>=0?F:q.UNKNOWN}(w.status);c(new re(C,w.message))}else c(new re(q.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new re(q.UNAVAILABLE,"Connection failed."));break;default:ye()}}finally{oe(It,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);oe(It,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Oo(e,n,r){const s=jl(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yv(),c=_v(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new pv({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");oe(It,`Creating RPC '${e}' stream ${s}: ${h}`,l);const p=o.createWebChannel(h,l);let g=!1,w=!1;const C=new mO({lo:M=>{w?oe(It,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(g||(oe(It,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),oe(It,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},ho:()=>p.close()}),V=(M,F,D)=>{M.listen(F,S=>{try{D(S)}catch(O){setTimeout(()=>{throw O},0)}})};return V(p,$i.EventType.OPEN,()=>{w||(oe(It,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),V(p,$i.EventType.CLOSE,()=>{w||(w=!0,oe(It,`RPC '${e}' stream ${s} transport closed`),C.po())}),V(p,$i.EventType.ERROR,M=>{w||(w=!0,ti(It,`RPC '${e}' stream ${s} transport errored:`,M),C.po(new re(q.UNAVAILABLE,"The operation could not be completed")))}),V(p,$i.EventType.MESSAGE,M=>{var F;if(!w){const D=M.data[0];We(!!D);const S=D,O=S.error||((F=S[0])===null||F===void 0?void 0:F.error);if(O){oe(It,`RPC '${e}' stream ${s} received error:`,O);const x=O.status;let k=function(m){const y=nt[m];if(y!==void 0)return Hv(y)}(x),E=O.message;k===void 0&&(k=q.INTERNAL,E="Unknown error status: "+x+" with message "+O.message),w=!0,C.po(new re(k,E)),p.close()}else oe(It,`RPC '${e}' stream ${s} received:`,D),C.yo(D)}}),V(c,mv.STAT_EVENT,M=>{M.stat===Ru.PROXY?oe(It,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Ru.NOPROXY&&oe(It,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function ql(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){return new Ck(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&oe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new nE(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new re(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yO extends rE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=Ok(this.serializer,e),r=function(i){if(!("targetChange"in i))return Ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Ee.min():o.readTime?kn(o.readTime):Ee.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Lu(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=ku(l)?{documents:Vk(i,l)}:{query:Mk(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Gv(i,o.resumeToken);const u=Nu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ee.min())>0){c.readTime=hc(i,o.snapshotVersion.toTimestamp());const u=Nu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=xk(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Lu(this.serializer),n.removeTarget=e,this.i_(n)}}class vO extends rE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Nk(e.writeResults,e.commitTime),r=kn(e.commitTime);return this.listener.A_(r,n)}return We(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Lu(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dk(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,Vu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new re(q.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Vu(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(q.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class TO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Jn(n),this.y_=!1):oe("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{Es(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Te(l);u.M_.add(4),await Ho(u),u.N_.set("Unknown"),u.M_.delete(4),await Yc(u)}(this))})}),this.N_=new TO(r,s)}}async function Yc(t){if(Es(t))for(const e of t.x_)await e(!0)}async function Ho(t){for(const e of t.x_)await e(!1)}function sE(t,e){const n=Te(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),nd(n)?td(n):pi(n).Xo()&&ed(n,e))}function Zh(t,e){const n=Te(t),r=pi(n);n.F_.delete(e),r.Xo()&&iE(n,e),n.F_.size===0&&(r.Xo()?r.n_():Es(n)&&n.N_.set("Unknown"))}function ed(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pi(t).P_(e)}function iE(t,e){t.L_.xe(e),pi(t).I_(e)}function td(t){t.L_=new bk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),pi(t).start(),t.N_.w_()}function nd(t){return Es(t)&&!pi(t).Zo()&&t.F_.size>0}function Es(t){return Te(t).M_.size===0}function oE(t){t.L_=void 0}async function IO(t){t.N_.set("Online")}async function bO(t){t.F_.forEach((e,n)=>{ed(t,e)})}async function AO(t,e){oE(t),nd(t)?(t.N_.D_(e),td(t)):t.N_.set("Unknown")}async function RO(t,e,n){if(t.N_.set("Online"),e instanceof Wv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await dc(t,r)}else if(e instanceof Ma?t.L_.Ke(e):e instanceof Kv?t.L_.He(e):t.L_.We(e),!n.isEqual(Ee.min()))try{const r=await tE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.F_.get(u);h&&i.F_.set(u,h.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const h=i.F_.get(l);if(!h)return;i.F_.set(l,h.withResumeToken(Pt.EMPTY_BYTE_STRING,h.snapshotVersion)),iE(i,l);const p=new br(h.target,l,u,h.sequenceNumber);ed(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){oe("RemoteStore","Failed to raise snapshot:",r),await dc(t,r)}}async function dc(t,e,n){if(!$o(e))throw e;t.M_.add(1),await Ho(t),t.N_.set("Offline"),n||(n=()=>tE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Yc(t)})}function aE(t,e){return e().catch(n=>dc(t,n,e))}async function Jc(t){const e=Te(t),n=Mr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;SO(e);)try{const s=await uO(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,CO(e,s)}catch(s){await dc(e,s)}cE(e)&&lE(e)}function SO(t){return Es(t)&&t.v_.length<10}function CO(t,e){t.v_.push(e);const n=Mr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function cE(t){return Es(t)&&!Mr(t).Zo()&&t.v_.length>0}function lE(t){Mr(t).start()}async function PO(t){Mr(t).V_()}async function kO(t){const e=Mr(t);for(const n of t.v_)e.d_(n.mutations)}async function OO(t,e,n){const r=t.v_.shift(),s=Gh.from(r,e,n);await aE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Jc(t)}async function DO(t,e){e&&Mr(t).E_&&await async function(r,s){if(function(o){return Tk(o)&&o!==q.ABORTED}(s.code)){const i=r.v_.shift();Mr(r).t_(),await aE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Jc(r)}}(t,e),cE(t)&&lE(t)}async function bg(t,e){const n=Te(t);n.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const r=Es(n);n.M_.add(3),await Ho(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Yc(n)}async function NO(t,e){const n=Te(t);e?(n.M_.delete(2),await Yc(n)):e||(n.M_.add(2),await Ho(n),n.N_.set("Unknown"))}function pi(t){return t.B_||(t.B_=function(n,r,s){const i=Te(n);return i.f_(),new yO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:IO.bind(null,t),To:bO.bind(null,t),Ao:AO.bind(null,t),h_:RO.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),nd(t)?td(t):t.N_.set("Unknown")):(await t.B_.stop(),oE(t))})),t.B_}function Mr(t){return t.k_||(t.k_=function(n,r,s){const i=Te(n);return i.f_(),new vO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:PO.bind(null,t),Ao:DO.bind(null,t),R_:kO.bind(null,t),A_:OO.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Jc(t)):(await t.k_.stop(),t.v_.length>0&&(oe("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new rd(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sd(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),$o(t))return new re(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Bi(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(){this.q_=new Je(he.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ye():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oi{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new oi(e,n,Gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class MO{constructor(){this.queries=new fi(e=>Ov(e),Hc),this.onlineState="Unknown",this.z_=new Set}}async function uE(t,e){const n=Te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new VO,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=sd(o,`Initialization of query '${ks(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&id(n)}async function hE(t,e){const n=Te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LO(t,e){const n=Te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&id(n)}function xO(t,e,n){const r=Te(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function id(t){t.z_.forEach(e=>{e.next()})}var Fu,Rg;(Rg=Fu||(Fu={})).J_="default",Rg.Cache="cache";class dE{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Fu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.key=e}}class pE{constructor(e){this.key=e}}class FO{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ae(),this.mutatedKeys=Ae(),this.Ia=Dv(e),this.Ta=new Gs(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Ag,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const g=s.get(h),w=Kc(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),V=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let M=!1;g&&w?g.data.isEqual(w.data)?C!==V&&(r.track({type:3,doc:w}),M=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),M=!0,(l&&this.Ia(w,l)>0||u&&this.Ia(w,u)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),M=!0):g&&!w&&(r.track({type:1,doc:g}),M=!0,(l||u)&&(c=!0)),M&&(w?(o=o.add(w),i=V?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,p)=>function(w,C){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye()}};return V(w)-V(C)}(h.type,p.type)||this.Ia(h.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new oi(this.query,e.Ta,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ag,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ae(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new pE(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new fE(r))}),n}pa(e){this.la=e.hs,this.Pa=Ae();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return oi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class UO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $O{constructor(e){this.key=e,this.wa=!1}}class BO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new fi(c=>Ov(c),Hc),this.Da=new Map,this.Ca=new Set,this.va=new Je(he.comparator),this.Fa=new Map,this.Ma=new Yh,this.xa={},this.Oa=new Map,this.Na=ii.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function jO(t,e,n=!0){const r=EE(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await gE(r,e,n,!0),s}async function qO(t,e){const n=EE(t);await gE(n,e,!0,!1)}async function gE(t,e,n,r){const s=await hO(t.localStore,Pn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await HO(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&sE(t.remoteStore,s),c}async function HO(t,e,n,r,s){t.Ba=(p,g,w)=>async function(V,M,F,D){let S=M.view.da(F);S.Xi&&(S=await Tg(V.localStore,M.query,!1).then(({documents:E})=>M.view.da(E,S)));const O=D&&D.targetChanges.get(M.targetId),x=D&&D.targetMismatches.get(M.targetId)!=null,k=M.view.applyChanges(S,V.isPrimaryClient,O,x);return Cg(V,M.targetId,k.fa),k.snapshot}(t,p,g,w);const i=await Tg(t.localStore,e,!0),o=new FO(e,i.hs),c=o.da(i.documents),l=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Cg(t,n,u.fa);const h=new UO(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function KO(t,e,n){const r=Te(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!Hc(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Zh(r.remoteStore,s.targetId),Uu(r,s.targetId)}).catch(Uo)):(Uu(r,s.targetId),await xu(r.localStore,s.targetId,!0))}async function WO(t,e){const n=Te(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Zh(n.remoteStore,r.targetId))}async function GO(t,e,n){const r=eD(t);try{const s=await function(o,c){const l=Te(o),u=ct.now(),h=c.reduce((w,C)=>w.add(C.key),Ae());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=Xn(),V=Ae();return l.os.getEntries(w,h).next(M=>{C=M,C.forEach((F,D)=>{D.isValidDocument()||(V=V.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,C)).next(M=>{p=M;const F=[];for(const D of c){const S=mk(D,p.get(D.key).overlayedDocument);S!=null&&F.push(new Fr(D.key,S,Iv(S.value.mapValue),pn.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,F,c)}).next(M=>{g=M;const F=M.applyToLocalDocumentSet(p,V);return l.documentOverlayCache.saveOverlays(w,M.batchId,F)})}).then(()=>({batchId:g.batchId,changes:Vv(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Je(Me)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ko(r,s.changes),await Jc(r.remoteStore)}catch(s){const i=sd(s,"Failed to persist write");n.reject(i)}}async function mE(t,e){const n=Te(t);try{const r=await cO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(We(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?We(o.wa):s.removedDocuments.size>0&&(We(o.wa),o.wa=!1))}),await Ko(n,r,e)}catch(r){await Uo(r)}}function Sg(t,e,n){const r=Te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Te(o);l.onlineState=c;let u=!1;l.queries.forEach((h,p)=>{for(const g of p.U_)g.j_(c)&&(u=!0)}),u&&id(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zO(t,e,n){const r=Te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Je(he.comparator);o=o.insert(i,St.newNoDocument(i,Ee.min()));const c=Ae().add(i),l=new zc(Ee.min(),new Map,new Je(Me),o,c);await mE(r,l),r.va=r.va.remove(i),r.Fa.delete(e),od(r)}else await xu(r.localStore,e,!1).then(()=>Uu(r,e,n)).catch(Uo)}async function QO(t,e){const n=Te(t),r=e.batch.batchId;try{const s=await aO(n.localStore,e);yE(n,r,null),_E(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ko(n,s)}catch(s){await Uo(s)}}async function YO(t,e,n){const r=Te(t);try{const s=await function(o,c){const l=Te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next(p=>(We(p!==null),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);yE(r,e,n),_E(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ko(r,s)}catch(s){await Uo(s)}}function _E(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function yE(t,e,n){const r=Te(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Uu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||vE(t,r)})}function vE(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Zh(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),od(t))}function Cg(t,e,n){for(const r of n)r instanceof fE?(t.Ma.addReference(r.key,e),JO(t,r)):r instanceof pE?(oe("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||vE(t,r.key)):ye()}function JO(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(oe("SyncEngine","New document in limbo: "+n),t.Ca.add(r),od(t))}function od(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new he(ze.fromString(e)),r=t.Na.next();t.Fa.set(r,new $O(n)),t.va=t.va.insert(n,r),sE(t.remoteStore,new br(Pn(Kh(n.path)),r,"TargetPurposeLimboResolution",Uh.oe))}}async function Ko(t,e,n){const r=Te(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const h=u&&!u.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(u){s.push(u);const h=Xh.Ki(l.targetId,u);i.push(h)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,u){const h=Te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>K.forEach(u,g=>K.forEach(g.qi,w=>h.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>K.forEach(g.Qi,w=>h.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!$o(p))throw p;oe("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const w=h.ns.get(g),C=w.snapshotVersion,V=w.withLastLimboFreeSnapshotVersion(C);h.ns=h.ns.insert(g,V)}}}(r.localStore,i))}async function XO(t,e){const n=Te(t);if(!n.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const r=await eE(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new re(q.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ko(n,r.us)}}function ZO(t,e){const n=Te(t),r=n.Fa.get(e);if(r&&r.wa)return Ae().add(r.key);{let s=Ae();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function EE(t){const e=Te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zO.bind(null,e),e.Sa.h_=LO.bind(null,e.eventManager),e.Sa.ka=xO.bind(null,e.eventManager),e}function eD(t){const e=Te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YO.bind(null,e),e}class Pg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oO(this.persistence,new sO,e.initialUser,this.serializer)}createPersistence(e){return new tO(Jh.Hr,this.serializer)}createSharedClientState(e){return new fO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XO.bind(null,this.syncEngine),await NO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MO}()}createDatastore(e){const n=Qc(e.databaseInfo.databaseId),r=function(i){return new _O(i)}(e.databaseInfo);return function(i,o,c,l){return new EO(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new wO(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Sg(this.syncEngine,n,0),function(){return Ig.D()?new Ig:new pO}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,h){const p=new BO(s,i,o,c,l,u);return h&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=Te(r);oe("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ho(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class TE{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Rt.UNAUTHENTICATED,this.clientId=Ev.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{oe("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(oe("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(q.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hl(t,e){t.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await eE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sD(t);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>bg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>bg(e.remoteStore,s)),t._onlineComponents=e}function rD(t){return t.name==="FirebaseError"?t.code===q.FAILED_PRECONDITION||t.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function sD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rD(n))throw n;ti("Error using user provided cache. Falling back to memory cache: "+n),await Hl(t,new Pg)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Hl(t,new Pg);return t._offlineComponents}async function wE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await kg(t,t._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await kg(t,new tD))),t._onlineComponents}function iD(t){return wE(t).then(e=>e.syncEngine)}async function IE(t){const e=await wE(t),n=e.eventManager;return n.onListen=jO.bind(null,e.syncEngine),n.onUnlisten=KO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WO.bind(null,e.syncEngine),n}function oD(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new TE({next:g=>{o.enqueueAndForget(()=>hE(i,p));const w=g.docs.has(c);!w&&g.fromCache?u.reject(new re(q.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new dE(Kh(c.path),h,{includeMetadataChanges:!0,ra:!0});return uE(i,p)}(await IE(t),t.asyncQueue,e,n,r)),r.promise}function aD(t,e,n={}){const r=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const h=new TE({next:g=>{o.enqueueAndForget(()=>hE(i,p)),g.fromCache&&l.source==="server"?u.reject(new re(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new dE(c,h,{includeMetadataChanges:!0,ra:!0});return uE(i,p)}(await IE(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Og=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e,n){if(!n)throw new re(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cD(t,e,n,r){if(e===!0&&r===!0)throw new re(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dg(t){if(!he.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ng(t){if(he.isDocumentKey(t))throw new re(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function Zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xc(t);throw new re(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new re(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new R1;switch(r.type){case"firstParty":return new k1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Og.get(n);r&&(oe("ComponentProvider","Removing Datastore"),Og.delete(n),r.terminate())}(this),Promise.resolve()}}function lD(t,e,n,r={}){var s;const i=(t=Zn(t,Zc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Rt.MOCK_USER;else{c=$A(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new re(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Rt(u)}t._authCredentials=new S1(new vv(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gi(this.firestore,e,this._query)}}class Bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Bt(this.firestore,e,this._key)}}class Cr extends gi{constructor(e,n,r){super(e,n,Kh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Bt(this.firestore,null,new he(e))}withConverter(e){return new Cr(this.firestore,e,this._path)}}function Rn(t,e,...n){if(t=it(t),AE("collection","path",e),t instanceof Zc){const r=ze.fromString(e,...n);return Ng(r),new Cr(t,null,r)}{if(!(t instanceof Bt||t instanceof Cr))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Ng(r),new Cr(t.firestore,null,r)}}function sn(t,e,...n){if(t=it(t),arguments.length===1&&(e=Ev.newId()),AE("doc","path",e),t instanceof Zc){const r=ze.fromString(e,...n);return Dg(r),new Bt(t,null,new he(r))}{if(!(t instanceof Bt||t instanceof Cr))throw new re(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ze.fromString(e,...n));return Dg(r),new Bt(t.firestore,t instanceof Cr?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new nE(this,"async_queue_retry"),this.hu=()=>{const n=ql();n&&oe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=ql();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=ql();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new zn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!$o(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Jn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=rd.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ye()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class mi extends Zc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new uD}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RE(this),this._firestoreClient.terminate()}}function hD(t,e){const n=typeof t=="object"?t:Eh(),r=typeof t=="string"?t:"(default)",s=ys(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=FA("firestore");i&&lD(s,...i)}return s}function ad(t){return t._firestoreClient||RE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function RE(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,u,h){return new q1(c,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,bE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new nD(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ai(Pt.fromBase64String(e))}catch(n){throw new re(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ai(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=/^__.*__$/;class fD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new jo(e,this.data,n,this.fieldTransforms)}}class SE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class ud{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ud(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return fc(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(CE(this.fu)&&dD.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class pD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qc(e)}Fu(e,n,r,s=!1){return new ud({fu:e,methodName:n,vu:r,path:mt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hd(t){const e=t._freezeSettings(),n=Qc(t._databaseId);return new pD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gD(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);dd("Data must be an object, but it was:",o,r);const c=PE(r,o);let l,u;if(i.merge)l=new zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const g=$u(e,p,n);if(!o.contains(g))throw new re(q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);OE(h,g)||h.push(g)}l=new zt(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new fD(new xt(c),l,u)}class tl extends cd{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tl}}function mD(t,e,n,r){const s=t.Fu(1,e,n);dd("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();vs(r,(l,u)=>{const h=fd(e,l,n);u=it(u);const p=s.Su(h);if(u instanceof tl)i.push(h);else{const g=Wo(u,p);g!=null&&(i.push(h),o.set(h,g))}});const c=new zt(i);return new SE(o,c,s.fieldTransforms)}function _D(t,e,n,r,s,i){const o=t.Fu(1,e,n),c=[$u(e,r,n)],l=[s];if(i.length%2!=0)throw new re(q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push($u(e,i[g])),l.push(i[g+1]);const u=[],h=xt.empty();for(let g=c.length-1;g>=0;--g)if(!OE(u,c[g])){const w=c[g];let C=l[g];C=it(C);const V=o.Su(w);if(C instanceof tl)u.push(w);else{const M=Wo(C,V);M!=null&&(u.push(w),h.set(w,M))}}const p=new zt(u);return new SE(h,p,o.fieldTransforms)}function yD(t,e,n,r=!1){return Wo(n,t.Fu(r?4:3,e))}function Wo(t,e){if(kE(t=it(t)))return dd("Unsupported field value:",e,t),PE(t,e);if(t instanceof cd)return function(r,s){if(!CE(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Wo(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ct.fromDate(r);return{timestampValue:hc(s.serializer,i)}}if(r instanceof ct){const i=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hc(s.serializer,i)}}if(r instanceof ld)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ai)return{bytesValue:Gv(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Xc(r)}`)}(t,e)}function PE(t,e){const n={};return Tv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vs(t,(r,s)=>{const i=Wo(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof ld||t instanceof ai||t instanceof Bt||t instanceof cd)}function dd(t,e,n){if(!kE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Xc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function $u(t,e,n){if((e=it(e))instanceof el)return e._internalPath;if(typeof e=="string")return fd(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const vD=new RegExp("[~\\*/\\[\\]]");function fd(t,e,n){if(e.search(vD)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new el(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new re(q.INVALID_ARGUMENT,c+t+l)}function OE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ED(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ED extends DE{data(){return super.data()}}function pd(t,e){return typeof e=="string"?fd(t,e):e instanceof el?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gd{}class wD extends gd{}function qn(t,e,...n){let r=[];e instanceof gd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof md).length,c=i.filter(l=>l instanceof nl).length;if(o>1||o>0&&c>0)throw new re(q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class nl extends wD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new nl(e,n,r)}_apply(e){const n=this._parse(e);return NE(e._query,n),new gi(e.firestore,e.converter,Ou(e._query,n))}_parse(e){const n=hd(e.firestore);return function(i,o,c,l,u,h,p){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new re(q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Lg(p,h);const w=[];for(const C of p)w.push(Mg(l,i,C));g={arrayValue:{values:w}}}else g=Mg(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Lg(p,h),g=yD(c,o,p,h==="in"||h==="not-in");return st.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Nt(t,e,n){const r=e,s=pd("where",t);return nl._create(s,r,n)}class md extends gd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new md(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)NE(o,l),o=Ou(o,l)}(e._query,n),new gi(e.firestore,e.converter,Ou(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mg(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new re(q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kv(e)&&n.indexOf("/")!==-1)throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ze.fromString(n));if(!he.isDocumentKey(r))throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sg(t,new he(r))}if(n instanceof Bt)return sg(t,n._key);throw new re(q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xc(n)}.`)}function Lg(t,e){if(!Array.isArray(t)||t.length===0)throw new re(q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function NE(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new re(q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new re(q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class ID{convertValue(e,n="none"){switch(hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ye()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ld(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=Vr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ze.fromString(e);We(Zv(r));const s=new Eo(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||Jn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VE extends DE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new La(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class La extends VE{data(e={}){return super.data(e)}}class AD{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new qi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new La(this._firestore,this._userDataWriter,r.key,r,new qi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new La(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new La(s._firestore,s._userDataWriter,c.doc.key,c.doc,new qi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:RD(c.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){t=Zn(t,Bt);const e=Zn(t.firestore,mi);return oD(ad(e),t._key).then(n=>SD(e,t,n))}class ME extends ID{constructor(e){super(),this.firestore=e}convertBytes(e){return new ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Bt(this.firestore,null,n)}}function Hn(t){t=Zn(t,gi);const e=Zn(t.firestore,mi),n=ad(e),r=new ME(e);return TD(t._query),aD(n,t._query).then(s=>new AD(e,r,t,s))}function Bu(t,e,n,...r){t=Zn(t,Bt);const s=Zn(t.firestore,mi),i=hd(s);let o;return o=typeof(e=it(e))=="string"||e instanceof el?_D(i,"updateDoc",t._key,e,n,r):mD(i,"updateDoc",t._key,e),_d(s,[o.toMutation(t._key,pn.exists(!0))])}function LE(t){return _d(Zn(t.firestore,mi),[new Wh(t._key,pn.none())])}function ju(t,e){const n=Zn(t.firestore,mi),r=sn(t),s=bD(t.converter,e);return _d(n,[gD(hd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,pn.exists(!1))]).then(()=>r)}function _d(t,e){return function(r,s){const i=new zn;return r.asyncQueue.enqueueAndForget(async()=>GO(await iD(r),s,i)),i.promise}(ad(t),e)}function SD(t,e,n){const r=n.docs.get(e._key),s=new ME(t);return new VE(t,s,e._key,r,new qi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){di=s})(li),Dn(new _n("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new mi(new C1(r.getProvider("auth-internal")),new D1(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new re(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),an(eg,"4.6.3",e),an(eg,"4.6.3","esm2017")})();const CD={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},rl=sy(CD);w1(rl);const ro=hi(rl),et=hD(rl),PD=t=>(er("data-v-f6f64c98"),t=t(),tr(),t),kD={class:"container"},OD={class:"loginWindow"},DD=PD(()=>P("h1",null,"WELCOME",-1)),ND={class:"buttonBox"},VD={__name:"Login",setup(t){function e(){uS(ro,o.value,c.value).then(l=>{i.push({name:"dashboard"}),qe("success","Successfully logged in!")}).catch(l=>{switch(l.message){case"Firebase: Error (auth/invalid-credential).":qe("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":qe("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":qe("error","Our servers are currently overloaded :(");break;default:qe("error",l.message);break}})}function n(){cS(ro,o.value).then(()=>{qe("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(l=>{l.message==="Firebase: Error (auth/missing-email)."&&qe("error","Enter your email adress in the 'Email' field first!")})}function r(){Uy(ro,s).then(l=>{qe("success","Successfully logged in!"),i.push("/dashboard")}).catch(l=>{qe("error",l.message)})}const s=new An,i=No(),o=ve(""),c=ve("");return(l,u)=>(pe(),Ie("div",kD,[P("div",OD,[DD,Sn(P("input",{type:"email",autocomplete:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":u[0]||(u[0]=h=>o.value=h)},null,512),[[dn,o.value]]),Sn(P("input",{type:"password",autocomplete:"current-password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":u[1]||(u[1]=h=>c.value=h),onKeydown:u[2]||(u[2]=Dc(h=>e(),["enter"]))},null,544),[[dn,c.value]]),P("div",ND,[P("button",{class:"button_white",onClick:u[3]||(u[3]=h=>e())},"Login"),P("div",{id:"googleLogin",class:"button_white",onClick:u[4]||(u[4]=h=>r())},"Log in with Google")]),P("a",{onClick:u[5]||(u[5]=h=>n())},"Forgot password?")])]))}},MD=En(VD,[["__scopeId","data-v-f6f64c98"]]),LD=t=>(er("data-v-98e2bfd3"),t=t(),tr(),t),xD={class:"container"},FD={class:"loginWindow"},UD=LD(()=>P("h1",null,"CREATE ACCOUNT",-1)),$D={__name:"Register",setup(t){function e(){lS(ro,o.value,c.value).then(u=>{i.push("/FindCostudent"),qe("success","Successfully registered!")}).catch(u=>{switch(u.message){case"Firebase: Error (auth/email-already-in-use).":qe("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":qe("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":qe("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":qe("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":qe("error","Our servers are currently overloaded :(");break;default:qe("error",u.message);break}})}function n(){i.push("/login")}function r(){Uy(ro,s).then(u=>{qe("success","Successfully logged in!"),i.push("/")}).catch(u=>{qe("error",u.message)})}const s=new An,i=No(),o=ve(""),c=ve(""),l=ve("");return(u,h)=>(pe(),Ie("div",xD,[P("div",FD,[UD,Sn(P("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":h[0]||(h[0]=p=>o.value=p)},null,512),[[dn,o.value]]),Sn(P("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":h[1]||(h[1]=p=>c.value=p)},null,512),[[dn,c.value]]),Sn(P("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":h[2]||(h[2]=p=>l.value=p),onKeydown:h[3]||(h[3]=Dc(p=>e(),["enter"]))},null,544),[[dn,l.value]]),P("button",{class:"button_white",onClick:e},"Create account"),P("button",{id:"googleLogin",class:"button_white",onClick:h[4]||(h[4]=p=>r())},"Login with Google"),P("p",null,[Vt("Already have an account? "),P("a",{onClick:n},"Login here!")])])]))}},BD=En($D,[["__scopeId","data-v-98e2bfd3"]]),jD={class:"daysContainer"},qD={class:"label"},HD={__name:"DotwFrequency",setup(t){async function e(){const i=sn(et,"dataLists","dotwFrequencies"),c=(await ds(i)).data();s.value.push({day:"Mon",amount:c.Monday,percentage:""}),s.value.push({day:"Tue",amount:c.Tuesday,percentage:""}),s.value.push({day:"Wed",amount:c.Wednesday,percentage:""}),s.value.push({day:"Thu",amount:c.Thursday,percentage:""}),s.value.push({day:"Fri",amount:c.Friday,percentage:""}),s.value.push({day:"Sat",amount:c.Saturday,percentage:""}),s.value.push({day:"Sun",amount:c.Sunday,percentage:""}),n()}function n(){const i=r();for(let o=0;o<s.value.length;o++)s.value[o].percentage=String(Math.round(s.value[o].amount/i*1e3)/10)+"%"}function r(){let i=0;for(let o=0;o<s.value.length;o++)s.value[o].amount>i&&(i=s.value[o].amount);return i}const s=ve([]);return e(),(i,o)=>(pe(),Ie("div",jD,[(pe(!0),Ie(He,null,bn(s.value,c=>(pe(),Ie("div",{class:"dayBox",key:c},[P("div",{class:"bar",style:ps({height:c.percentage})},null,4),P("div",qD,xe(c.day),1)]))),128))]))}},KD=En(HD,[["__scopeId","data-v-2bc14d30"]]),WD=fh('<div class="bar" data-v-44e8b5db></div><div class="labelBox" data-v-44e8b5db><div class="label" data-v-44e8b5db>12AM</div><div class="label" data-v-44e8b5db>4AM</div><div class="label" data-v-44e8b5db>8AM</div><div class="label" data-v-44e8b5db>12PM</div><div class="label" data-v-44e8b5db>4PM</div><div class="label" data-v-44e8b5db>8PM</div><div class="label" data-v-44e8b5db>12AM</div></div>',2),GD={__name:"TodFrequency",setup(t){kc(u=>({"76fa557e":o.value,"431e2af4":c.value,"3819618c":l.value}));async function e(){const u=sn(et,"dataLists","todFrequencies"),h=await ds(u);r.value=h.data().Morning,s.value=h.data().Afternoon,i.value=h.data().Evening,n()}function n(){const u=Math.max(r.value,s.value,i.value);o.value=r.value/u,c.value=s.value/u,l.value=i.value/u}const r=ve(),s=ve(),i=ve(),o=ve(.2),c=ve(.2),l=ve(.1);return e(),(u,h)=>WD}},zD=En(GD,[["__scopeId","data-v-44e8b5db"]]),QD={class:"graphBox"},YD={class:"barBox"},JD={id:"bar1",style:{width:"90%"}},XD={class:"label"},ZD={class:"label",style:{color:"black","font-weight":"600","font-size":"10pt"}},eN={class:"barBox"},tN={class:"label"},nN={class:"label",style:{color:"black","font-weight":"600","font-size":"10pt"}},rN={class:"barBox"},sN={id:"bar3"},iN={class:"label"},oN={class:"label",style:{color:"black","font-weight":"600","font-size":"10pt"}},aN={__name:"LocationsGraph",setup(t){kc(u=>({"4c9d9181":c.value,"0aa05af0":l.value}));async function e(){const u=sn(et,"dataLists","locationsFrequencies"),h=await ds(u),p=Object.entries(h.data()).sort(([,g],[,w])=>w-g).slice(0,3).map(([g])=>g);s.value={name:p[0],amount:h.data()[p[0]],percent:""},i.value={name:p[1],amount:h.data()[p[1]],percent:""},o.value={name:p[2],amount:h.data()[p[2]],percent:""},n(),r()}function n(){c.value=String((i.value.amount/s.value.amount-.1)*100)+"%",l.value=String((o.value.amount/s.value.amount-.1)*100)+"%"}function r(){const u=s.value.amount+i.value.amount+o.value.amount;s.value.percent=Math.round(s.value.amount/u*100)+"%",i.value.percent=Math.round(i.value.amount/u*100)+"%",o.value.percent=Math.round(o.value.amount/u*100)+"%"}const s=ve({}),i=ve({}),o=ve({}),c=ve(""),l=ve("");return e(),(u,h)=>(pe(),Ie("div",QD,[P("div",YD,[P("div",JD,[P("div",XD,xe(s.value.name),1)]),P("div",ZD,xe(s.value.percent),1)]),P("div",eN,[P("div",{id:"bar2",style:ps({width:c.value})},[P("div",tN,xe(i.value.name),1)],4),P("div",nN,xe(i.value.percent),1)]),P("div",rN,[P("div",sN,[P("div",iN,xe(o.value.name),1)]),P("div",oN,xe(o.value.percent),1)])]))}},cN=En(aN,[["__scopeId","data-v-9266ef12"]]),Ke=t=>(er("data-v-7344d88f"),t=t(),tr(),t),lN={class:"container"},uN={class:"formBox"},hN={class:"progressBar"},dN={class:"phase"},fN={class:"phase"},pN={class:"phase"},gN={key:0,class:"entry"},mN={class:"itemBox"},_N=Ke(()=>P("p",null,"Subject",-1)),yN=Ke(()=>P("option",{value:"",disabled:""},"Select a subject",-1)),vN=["value"],EN={class:"itemBox"},TN=Ke(()=>P("p",null,"Location",-1)),wN=Ke(()=>P("option",{value:"",disabled:""},"Select a location",-1)),IN=["value"],bN={class:"itemBox",id:"date"},AN=Ke(()=>P("p",null,"Date",-1)),RN=["min","max"],SN={class:"itemBox",id:"time"},CN={key:1,class:"searching"},PN=Ke(()=>P("p",null,"SEARCHING",-1)),kN=Ke(()=>P("div",{class:"loader"},null,-1)),ON=[PN,kN],DN={key:2,class:"noneFound"},NN={class:"message"},VN=Ke(()=>P("p",null,"No costudents were found yet to study ",-1)),MN={class:"button"},LN=Ke(()=>P("p",null," in ",-1)),xN={class:"button"},FN=Ke(()=>P("p",null," in the ",-1)),UN={class:"button"},$N=Ke(()=>P("p",null," of the ",-1)),BN={class:"button"},jN=Ke(()=>P("p",null,".",-1)),qN=Ke(()=>P("div",{class:"finalMessage"},[P("p",null,"We'll keep on searching for other costudents."),P("p",null,"You can check in on the progress on your dashboard.")],-1)),HN={class:"buttonBox"},KN={key:3,class:"found"},WN=Ke(()=>P("div",{class:"finalMessage"},[P("p",null,"We found costudents!")],-1)),GN={class:"message"},zN=Ke(()=>P("p",null,"You can study ",-1)),QN={class:"button"},YN=Ke(()=>P("p",null," in ",-1)),JN={class:"button"},XN=Ke(()=>P("p",null," in the ",-1)),ZN={class:"button"},eV=Ke(()=>P("p",null," of the ",-1)),tV={class:"button"},nV=Ke(()=>P("p",null," . ",-1)),rV={class:"groupDisplay"},sV=Ke(()=>P("p",null,"Your group:",-1)),iV={class:"costudentNames"},oV={class:"buttonBox"},aV={key:0,class:"formBox",id:"metrics"},cV={class:"metricBox"},lV=Ke(()=>P("div",{class:"metricBoxTitle"},[P("div",{class:"button",style:{cursor:"default","background-color":"var(--dominant-dark)"}}," POPULAR METRICS ")],-1)),uV={class:"metric"},hV=Ke(()=>P("div",{class:"metricTitle"}," Day of the week: ",-1)),dV=Ke(()=>P("hr",null,null,-1)),fV={class:"metric"},pV=Ke(()=>P("div",{class:"metricTitle"}," Time of the day: ",-1)),gV=Ke(()=>P("hr",null,null,-1)),mV={class:"metric"},_V=Ke(()=>P("div",{class:"metricTitle"}," Popular locations: ",-1)),yV=Ke(()=>P("hr",null,null,-1)),vV={id:"subjects"},EV=["value"],TV={id:"locations"},wV=["value"],IV={__name:"FindCostudent",setup(t){const e=we=>new Promise(ce=>setTimeout(ce,we));function n(){document.getElementById("metrics").scrollIntoView({behavior:"smooth"})}function r(){const we=new Date;new Date().setDate(we.getDate()+21);const ne=we.getFullYear(),Ve=String(we.getMonth()+1).padStart(2,"0"),Et=String(we.getDate()).padStart(2,"0");return`${ne}-${Ve}-${Et}`}function s(){const we=new Date,ce=new Date;ce.setDate(we.getDate()+21);const ne=ce.getFullYear(),Ve=String(ce.getMonth()+1).padStart(2,"0"),Et=String(ce.getDate()).padStart(2,"0");return`${ne}-${Ve}-${Et}`}function i(we){switch(y.value=!1,I.value=!1,b.value=!1,k.value=we,we){case"morning":y.value=!0,x.value=0;break;case"afternoon":I.value=!0,x.value=1;break;case"evening":b.value=!0,x.value=2;break}}async function o(){const we=qn(te,Nt("UID","==",T));return!(await Hn(we)).empty}async function c(){await o()?tt.value.includes(D.value)?Z.value.includes(S.value)?O.value!==""?x.value!==-1?u():(qe("error","Select a time of day!"),l()):(qe("error","Select a date!"),l()):(qe("error","Select a location from the list!"),l()):(qe("error","Select a subject from the list!"),l()):qe("error","Set your display name in the dashboard first!")}function l(){D.value="",S.value="",O.value=""}async function u(){F.value=1,await e(2500);const we=qn(me,Nt("SUBJ","==",D.value),Nt("LOCATION","==",S.value),Nt("DATE","==",O.value),Nt("TOD","==",x.value)),ce=await Hn(we);if(ce.empty)h();else{const ne=[];for(let Et=0;Et<ce.docs[0].data().MEMBERS.length;Et++)ne.push(ce.docs[0].data().MEMBERS[Et]);ne.push(T);const Ve=sn(et,"groups",ce.docs[0].id);await Bu(Ve,{MEMBERS:ne}),w(ne),F.value=3}}async function h(){const we=qn(be,Nt("SUBJ","==",D.value),Nt("LOCATION","==",S.value),Nt("DATE","==",O.value),Nt("TOD","==",x.value)),ce=await Hn(we);ce.empty?(p(),F.value=2):g(ce.docs[0].data().UID,ce.docs[0].id)}async function p(){await ju(Rn(et,"posts"),{SUBJ:D.value,LOCATION:S.value,DATE:O.value,UID:T,TOD:x.value,POSTDATE:_.value})}async function g(we,ce){await LE(sn(et,"posts",ce));const ne=[T,we];await ju(Rn(et,"groups"),{DATE:O.value,LOCATION:S.value,MEMBERS:ne,SUBJ:D.value,TOD:x.value}),w(ne),F.value=3}async function w(we){for(let ce=0;ce<we.length;ce++){const ne=qn(te,Nt("UID","==",we[ce])),Ve=await Hn(ne);fe.value.push(Ve.docs[0].data().NAME)}}async function C(){const we=sn(et,"dataLists","formLists"),ce=await ds(we);Z.value=ce.data().locations}async function V(){const we=sn(et,"dataLists","formLists"),ce=await ds(we);tt.value=ce.data().subjects}const M=hi(),F=ve(0),D=ve(""),S=ve(""),O=ve(""),x=ve(-1),k=ve(""),E=r(),_=ve(E),m=ve(s()),y=ve(!1),I=ve(!1),b=ve(!1),T=M.currentUser.uid,me=Rn(et,"groups"),be=Rn(et,"posts"),te=Rn(et,"users"),fe=ve([]),Z=ve([]),tt=ve([]);return C(),V(),(we,ce)=>(pe(),Ie("div",lN,[P("div",uN,[P("div",hN,[P("div",dN,[P("p",{class:bt({active:F.value===0})},"1",2),P("h3",{class:bt({active:F.value===0})},"Enter data",2)]),P("div",{class:bt(["line",{completed:F.value>=1}])},null,2),P("div",fN,[P("p",{class:bt({active:F.value===1})},"2",2),P("h3",{class:bt({active:F.value===1})},"Searching",2)]),P("div",{class:bt(["line",{completed:F.value>=2}])},null,2),P("div",pN,[P("p",{class:bt({active:F.value===2||F.value===3})},"3",2),P("h3",{class:bt({active:F.value===2})},"Results",2)])]),F.value==0?(pe(),Ie("div",gN,[P("div",mN,[_N,Sn(P("select",{"onUpdate:modelValue":ce[0]||(ce[0]=ne=>D.value=ne)},[yN,(pe(!0),Ie(He,null,bn(tt.value,ne=>(pe(),Ie("option",{key:ne,value:ne},xe(ne),9,vN))),128))],512),[[Qa,D.value]])]),P("div",EN,[TN,Sn(P("select",{"onUpdate:modelValue":ce[1]||(ce[1]=ne=>S.value=ne)},[wN,(pe(!0),Ie(He,null,bn(Z.value,ne=>(pe(),Ie("option",{key:ne,value:ne},xe(ne),9,IN))),128))],512),[[Qa,S.value]])]),P("div",bN,[AN,Sn(P("input",{type:"date",id:"date",min:_.value,max:m.value,"onUpdate:modelValue":ce[2]||(ce[2]=ne=>O.value=ne)},null,8,RN),[[dn,O.value]])]),P("div",SN,[P("div",{class:bt(["button",{selected:y.value}]),onClick:ce[3]||(ce[3]=ne=>i("morning"))}," Morning ",2),P("div",{class:bt(["button",{selected:I.value}]),onClick:ce[4]||(ce[4]=ne=>i("afternoon"))}," Afternoon ",2),P("div",{class:bt(["button",{selected:b.value}]),onClick:ce[5]||(ce[5]=ne=>i("evening"))}," Evening ",2)]),P("div",{id:"searchButton",class:"button",onClick:ce[6]||(ce[6]=ne=>c())}," Search "),P("div",{class:"seeMetrics",onClick:ce[7]||(ce[7]=ne=>n())}," See popular metrics below ")])):ht("",!0),F.value==1?(pe(),Ie("div",CN,ON)):ht("",!0),F.value==2?(pe(),Ie("div",DN,[P("div",NN,[VN,P("div",MN,xe(D.value),1),LN,P("div",xN,xe(S.value),1),FN,P("div",UN,xe(k.value),1),$N,P("div",BN,xe(O.value),1),jN]),qN,P("div",HN,[Ce(Qt(mu),{to:"/dashboard",class:"button"},{default:At(()=>[Vt("Dashboard")]),_:1})])])):ht("",!0),F.value==3?(pe(),Ie("div",KN,[WN,P("div",GN,[zN,P("div",QN,xe(D.value),1),YN,P("div",JN,xe(S.value),1),XN,P("div",ZN,xe(k.value),1),eV,P("div",tV,xe(O.value),1),nV]),P("div",rV,[sV,P("div",iV,[(pe(!0),Ie(He,null,bn(fe.value,ne=>(pe(),Ie("div",{class:"button",key:ne},[P("p",null,xe(ne),1)]))),128))]),P("div",oV,[Ce(Qt(mu),{to:"/dashboard",class:"button"},{default:At(()=>[Vt("Dashboard")]),_:1})])])])):ht("",!0)]),F.value==0?(pe(),Ie("div",aV,[P("div",cV,[lV,P("div",uV,[hV,dV,Ce(KD)]),P("div",fV,[pV,gV,Ce(zD)]),P("div",mV,[_V,yV,Ce(cN)])])])):ht("",!0),P("datalist",vV,[(pe(!0),Ie(He,null,bn(tt.value,ne=>(pe(),Ie("option",{key:ne,value:ne},null,8,EV))),128))]),P("datalist",TV,[(pe(!0),Ie(He,null,bn(Z.value,ne=>(pe(),Ie("option",{key:ne,value:ne},null,8,wV))),128))])]))}},bV=En(IV,[["__scopeId","data-v-7344d88f"]]),_i=t=>(er("data-v-8cf22436"),t=t(),tr(),t),AV={class:"container"},RV={class:"titleContainer"},SV=_i(()=>P("div",{class:"title"},[P("h1",null,"DASHBOARD"),P("p",null,"Here you can find all your requested study sessions and groups that you're a part of.")],-1)),CV={class:"nameContainer"},PV={class:"fieldBox"},kV=_i(()=>P("p",null,"Display name:",-1)),OV={class:"itemBox"},DV=_i(()=>P("div",{class:"sectionHeader"},[P("div",{class:"sectionTitle"},[P("h1",null,"YOUR GROUPS")])],-1)),NV={class:"grid"},VV={class:"groupBox"},MV={class:"groupTitle"},LV={class:"subtle"},xV={class:"labels"},FV={class:"label"},UV={class:"label"},$V={class:"label"},BV={class:"label"},jV={class:"commandButtons"},qV=["onClick"],HV=["onClick"],KV={key:0,class:"noItems"},WV=_i(()=>P("div",{class:"whiteSpace"},null,-1)),GV={class:"itemBox"},zV=_i(()=>P("div",{class:"sectionHeader"},[P("div",{class:"sectionTitle"},[P("h1",null,"YOUR POSTS")])],-1)),QV={class:"grid"},YV={class:"postBox"},JV={class:"groupTitle"},XV={class:"labels"},ZV={class:"label"},eM={class:"label"},tM={class:"label"},nM={class:"commandButtons"},rM=["onClick"],sM={key:0,class:"noItems"},iM=_i(()=>P("div",{class:"whiteSpace"},null,-1)),oM={__name:"Dashboard",setup(t){async function e(){const k=qn(M,Nt("MEMBERS","array-contains",w)),E=await Hn(k);if(E.empty)console.log("No groups");else for(let _=0;_<E.docs.length;_++)n(E.docs[_].data(),E.docs[_].id)}function n(k,E){const _={ID:E,SUBJ:k.SUBJ,LOCATION:k.LOCATION,TOD:k.TOD,DATE:k.DATE,MEMBERS:k.MEMBERS};S.value.push(_)}async function r(k){S.value=S.value.filter(E=>E.ID!==k),s(k)}async function s(k){const E=sn(et,"groups",k);let m=(await ds(E)).data().MEMBERS;m=m.filter(y=>y!==w),await Bu(E,{MEMBERS:m})}function i(k){switch(k){case 0:return"Morning";case 1:return"Afternoon";case 2:return"Evening"}}async function o(){const k=qn(F,Nt("UID","==",w)),E=await Hn(k);if(E.empty)console.log("No posts");else for(let _=0;_<E.docs.length;_++)c(E.docs[_].data(),E.docs[_].id)}function c(k,E){const _={ID:E,SUBJ:k.SUBJ,LOCATION:k.LOCATION,TOD:k.TOD,DATE:k.DATE};O.value.push(_)}async function l(k){O.value=O.value.filter(E=>E.ID!==k),await LE(sn(et,"posts",k))}async function u(){const k=qn(D,Nt("UID","==",w)),E=await Hn(k);E.empty?V=0:(C.value=E.docs[0].data().NAME,V=1)}async function h(){if(V===0)await ju(Rn(et,"users"),{UID:w,NAME:C.value}),qe("success","Successfully set your username!");else{const k=qn(D,Nt("UID","==",w)),E=await Hn(k),_=sn(et,"users",E.docs[0].id);await Bu(_,{NAME:C.value}),u(),qe("success","Successfully updated your username!")}}function p(k,E){const _=E.replace(/\s+/g,"-")+"-"+k.substring(0,6),m=C.value;x.push({name:"group-chat",params:{channel:_},query:{chatName:m,ID:k}})}const w=hi().currentUser.uid,C=ve("");let V=0;const M=Rn(et,"groups"),F=Rn(et,"posts"),D=Rn(et,"users"),S=ve([]),O=ve([]),x=No();return e(),o(),u(),(k,E)=>(pe(),Ie("div",AV,[P("div",RV,[SV,P("div",CV,[P("div",PV,[kV,Sn(P("input",{type:"text","onUpdate:modelValue":E[0]||(E[0]=_=>C.value=_),onKeydown:E[1]||(E[1]=Dc(_=>h(),["enter"]))},null,544),[[dn,C.value]])]),P("div",{class:"button",onClick:E[2]||(E[2]=_=>h())}," Change ")])]),P("div",OV,[DV,P("div",NV,[(pe(!0),Ie(He,null,bn(S.value,_=>(pe(),Ie("div",{class:"itemsContainer",key:_.ID},[P("div",VV,[P("div",MV,[Vt(xe(_.SUBJ)+" ",1),P("div",LV," #"+xe(_.ID.substring(0,6).toUpperCase()),1)]),P("div",xV,[P("div",FV,xe(_.DATE),1),P("div",UV,xe(_.LOCATION),1),P("div",$V,xe(i(_.TOD)),1),P("div",BV,xe(_.MEMBERS.length)+" students ",1)]),P("div",jV,[P("div",{class:"button_white",onClick:m=>p(_.ID,_.SUBJ)}," Chat ",8,qV),P("div",{class:"button_white",onClick:m=>r(_.ID)}," Quit ",8,HV)])])]))),128))]),S.value.length==0?(pe(),Ie("div",KV," You're currently not part of any groups. ")):ht("",!0)]),WV,P("div",GV,[zV,P("div",QV,[(pe(!0),Ie(He,null,bn(O.value,_=>(pe(),Ie("div",{class:"itemsContainer",key:_.ID},[P("div",YV,[P("div",JV,xe(_.SUBJ),1),P("div",XV,[P("div",ZV,xe(_.DATE),1),P("div",eM,xe(_.LOCATION),1),P("div",tM,xe(i(_.TOD)),1)]),P("div",nM,[P("div",{class:"button_white",onClick:m=>l(_.ID)}," Remove ",8,rM)])])]))),128))]),O.value.length==0?(pe(),Ie("div",sM," You currently have no study requests. ")):ht("",!0)]),iM]))}},aM=En(oM,[["__scopeId","data-v-8cf22436"]]),xE=t=>(er("data-v-22c17818"),t=t(),tr(),t),cM={class:"frame"},lM=["data-channel","data-nickname"],uM={class:"infoBox"},hM=xE(()=>P("div",{class:"textBox"},[P("h2",null,"Rules:"),P("ol",null,[P("li",null,"Be respectful."),P("li",null,"Don't share personal information."),P("li",null,"Meet in a public place."),P("li",null,"Stay on topic"),P("li",null,"No Harassment or Discrimination")])],-1)),dM={class:"groupDisplay"},fM=xE(()=>P("p",null,"In this group:",-1)),pM={class:"costudentNames"},gM={__name:"GroupChat",setup(t){const e=PA(),n=e.params.channel,r=e.query.chatName,s=e.query.ID,i=ve([]),o=ve([]),c=Rn(et,"users");ms(()=>{const h=document.getElementById("tlkio"),p=h.getAttribute("data-env")||"production",g=h.getAttribute("data-theme"),w=h.getAttribute("data-custom-css"),C=h.getAttribute("data-nickname"),V=document.createElement("iframe");let M=`https://embed.tlk.io/${n}`;const F=[];p==="dev"&&(M=`https://embed.lvh.me:3000/${n}`),w&&w.length&&F.push(`custom_css_path=${w}`),C&&C.length&&F.push(`nickname=${C}`),g&&g.length&&F.push(`theme=${g}`),F.length&&(M+=`?${F.join("&")}`),V.setAttribute("src",M),V.setAttribute("width","100%"),V.setAttribute("height","100%"),V.setAttribute("frameborder","0"),V.setAttribute("style","margin-bottom: -8px;");const D=h.getAttribute("style");h.setAttribute("style",`overflow: auto; -webkit-overflow-scrolling: touch; ${D}`),h.textContent="",h.appendChild(V);const S=document.createElement("style");S.textContent=`
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
  `;const O=document.createElement("img");O.src="https://www.tlk.io/images/logo.png",O.className="tlkio-pulse",window.getComputedStyle(h).position==="static"&&(h.style.position="relative"),h.appendChild(S),h.appendChild(O),setTimeout(()=>{h.removeChild(O),h.removeChild(S)},3e3)});async function l(h){const p=sn(et,"groups",h),g=await ds(p);i.value=g.data().MEMBERS,u(i.value)}async function u(h){for(let p=0;p<h.length;p++){const g=qn(c,Nt("UID","==",h[p])),w=await Hn(g);o.value.push(w.docs[0].data().NAME)}}return l(s),(h,p)=>(pe(),Ie("div",cM,[P("div",{id:"tlkio","data-channel":Qt(n),"data-theme":"theme--minimal","data-nickname":Qt(r)},null,8,lM),P("div",uM,[hM,P("div",dM,[fM,P("div",pM,[(pe(!0),Ie(He,null,bn(o.value,g=>(pe(),Ie("div",{class:"name",key:g},[P("p",null,xe(g),1)]))),128))])])])]))}},mM=En(gM,[["__scopeId","data-v-22c17818"]]),FE=SA({scrollBehavior(t,e,n){return{top:0}},history:rA("/costudent-demo/"),routes:[{path:"/",name:"home",component:sP},{path:"/findcostudent",name:"findcostudent",component:bV,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:MD},{path:"/register",name:"register",component:BD},{path:"/dashboard",name:"dashboard",component:aM,meta:{requiresAuth:!0}},{path:"/group-chat/:channel",name:"group-chat",component:mM,meta:{requiresAuth:!0}}]});let xg=!1,Kl=!1;FE.beforeEach((t,e,n)=>{const r=hi(),s=t.matched.some(i=>i.meta.requiresAuth);xg?s&&!Kl?(alert("No access! You need to be logged in."),n("/login")):n():Cy(r,i=>{Kl=!!i,xg=!0,s&&!Kl?(alert("No access! You need to be logged in."),n("/login")):n()})});const sl=O_(GC);sl.config.globalProperties.$firebase=rl;sl.use(FE);sl.use(PC,{position:"bottom-right",duration:5e3,pauseOnHover:!0});sl.mount("#app");
