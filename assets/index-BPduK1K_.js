(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qs(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const ue={},Mn=[],Me=()=>{},Gd=()=>!1,$r=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),So=e=>e.startsWith("onUpdate:"),pe=Object.assign,Co=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zd=Object.prototype.hasOwnProperty,se=(e,t)=>zd.call(e,t),W=Array.isArray,Dn=e=>sr(e)==="[object Map]",En=e=>sr(e)==="[object Set]",Ia=e=>sr(e)==="[object Date]",Jd=e=>sr(e)==="[object RegExp]",X=e=>typeof e=="function",me=e=>typeof e=="string",It=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",Ao=e=>(fe(e)||X(e))&&X(e.then)&&X(e.catch),hl=Object.prototype.toString,sr=e=>hl.call(e),Yd=e=>sr(e).slice(8,-1),pl=e=>sr(e)==="[object Object]",Ro=e=>me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xn=qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gs=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xd=/-(\w)/g,Oe=Gs(e=>e.replace(Xd,(t,n)=>n?n.toUpperCase():"")),Qd=/\B([A-Z])/g,He=Gs(e=>e.replace(Qd,"-$1").toLowerCase()),Br=Gs(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=Gs(e=>e?`on${Br(e)}`:""),Xe=(e,t)=>!Object.is(e,t),Fn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},gl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Ss=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cs=e=>{const t=me(e)?Number(e):NaN;return isNaN(t)?e:t};let Ta;const ml=()=>Ta||(Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Zd="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",eh=qs(Zd);function Hr(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=me(r)?sh(r):Hr(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(me(e)||fe(e))return e}const th=/;(?![^(]*\))/g,nh=/:([^]+)/,rh=/\/\*[^]*?\*\//g;function sh(e){const t={};return e.replace(rh,"").split(th).forEach(n=>{if(n){const r=n.split(nh);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Vr(e){let t="";if(me(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=Vr(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ih(e){if(!e)return null;let{class:t,style:n}=e;return t&&!me(t)&&(e.class=Vr(t)),n&&(e.style=Hr(n)),e}const oh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ah=qs(oh);function _l(e){return!!e||e===""}function ch(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Xt(e[r],t[r]);return n}function Xt(e,t){if(e===t)return!0;let n=Ia(e),r=Ia(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=It(e),r=It(t),n||r)return e===t;if(n=W(e),r=W(t),n||r)return n&&r?ch(e,t):!1;if(n=fe(e),r=fe(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!Xt(e[o],t[o]))return!1}}return String(e)===String(t)}function zs(e,t){return e.findIndex(n=>Xt(n,t))}const lh=e=>me(e)?e:e==null?"":W(e)||fe(e)&&(e.toString===hl||!X(e.toString))?JSON.stringify(e,yl,2):String(e),yl=(e,t)=>t&&t.__v_isRef?yl(e,t.value):Dn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[wi(r,i)+" =>"]=s,n),{})}:En(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>wi(n))}:It(t)?wi(t):fe(t)&&!W(t)&&!pl(t)?String(t):t,wi=(e,t="")=>{var n;return It(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $e;class Po{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!t&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=$e;try{return $e=this,t()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function uh(e){return new Po(e)}function vl(e,t=$e){t&&t.active&&t.effects.push(e)}function bl(){return $e}function fh(e){$e&&$e.cleanups.push(e)}let un;class Jn{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,vl(this,s)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,tn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(dh(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),nn()}return this._dirtyLevel>=5}set dirty(t){this._dirtyLevel=t?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=qt,n=un;try{return qt=!0,un=this,this._runnings++,Sa(this),this.fn()}finally{Ca(this),this._runnings--,un=n,qt=t}}stop(){this.active&&(Sa(this),Ca(this),this.onStop&&this.onStop(),this.active=!1)}}function dh(e){return e.value}function Sa(e){e._trackId++,e._depsLength=0}function Ca(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)wl(e.deps[t],e);e.deps.length=e._depsLength}}function wl(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}function hh(e,t){e.effect instanceof Jn&&(e=e.effect.fn);const n=new Jn(e,Me,()=>{n.dirty&&n.run()});t&&(pe(n,t),t.scope&&vl(n,t.scope)),(!t||!t.lazy)&&n.run();const r=n.run.bind(n);return r.effect=n,r}function ph(e){e.effect.stop()}let qt=!0,Wi=0;const El=[];function tn(){El.push(qt),qt=!1}function nn(){const e=El.pop();qt=e===void 0?!0:e}function Oo(){Wi++}function ko(){for(Wi--;!Wi&&Ki.length;)Ki.shift()()}function Il(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&wl(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Ki=[];function Tl(e,t,n){Oo();for(const r of e.keys()){if(!e.computed&&r.computed&&e.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&Ki.push(r.scheduler)))}ko()}const Sl=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},As=new WeakMap,fn=Symbol(""),qi=Symbol("");function Fe(e,t,n){if(qt&&un){let r=As.get(e);r||As.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=Sl(()=>r.delete(n))),Il(un,s)}}function vt(e,t,n,r,s,i){const o=As.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&W(e)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!It(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":W(e)?Ro(n)&&a.push(o.get("length")):(a.push(o.get(fn)),Dn(e)&&a.push(o.get(qi)));break;case"delete":W(e)||(a.push(o.get(fn)),Dn(e)&&a.push(o.get(qi)));break;case"set":Dn(e)&&a.push(o.get(fn));break}Oo();for(const c of a)c&&Tl(c,5);ko()}function gh(e,t){const n=As.get(e);return n&&n.get(t)}const mh=qs("__proto__,__v_isRef,__isVue"),Cl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(It)),Aa=_h();function _h(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=re(this);for(let i=0,o=this.length;i<o;i++)Fe(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(re)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){tn(),Oo();const r=re(this)[t].apply(this,n);return ko(),nn(),r}}),e}function yh(e){It(e)||(e=String(e));const t=re(this);return Fe(t,"has",e),t.hasOwnProperty(e)}class Al{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ll:Nl:i?kl:Ol).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=W(t);if(!s){if(o&&se(Aa,n))return Reflect.get(Aa,n,r);if(n==="hasOwnProperty")return yh}const a=Reflect.get(t,n,r);return(It(n)?Cl.has(n):mh(n))||(s||Fe(t,"get",n),i)?a:_e(a)?o&&Ro(n)?a:a.value:fe(a)?s?Mo(a):jr(a):a}}class Rl extends Al{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const c=Yn(i);if(!Cr(r)&&!Yn(r)&&(i=re(i),r=re(r)),!W(t)&&_e(i)&&!_e(r))return c?!1:(i.value=r,!0)}const o=W(t)&&Ro(n)?Number(n)<t.length:se(t,n),a=Reflect.set(t,n,r,s);return t===re(s)&&(o?Xe(r,i)&&vt(t,"set",n,r):vt(t,"add",n,r)),a}deleteProperty(t,n){const r=se(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&vt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!It(n)||!Cl.has(n))&&Fe(t,"has",n),r}ownKeys(t){return Fe(t,"iterate",W(t)?"length":fn),Reflect.ownKeys(t)}}class Pl extends Al{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const vh=new Rl,bh=new Pl,wh=new Rl(!0),Eh=new Pl(!0),No=e=>e,Js=e=>Reflect.getPrototypeOf(e);function rs(e,t,n=!1,r=!1){e=e.__v_raw;const s=re(e),i=re(t);n||(Xe(t,i)&&Fe(s,"get",t),Fe(s,"get",i));const{has:o}=Js(s),a=r?No:n?xo:Ar;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function ss(e,t=!1){const n=this.__v_raw,r=re(n),s=re(e);return t||(Xe(e,s)&&Fe(r,"has",e),Fe(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function is(e,t=!1){return e=e.__v_raw,!t&&Fe(re(e),"iterate",fn),Reflect.get(e,"size",e)}function Ra(e){e=re(e);const t=re(this);return Js(t).has.call(t,e)||(t.add(e),vt(t,"add",e,e)),this}function Pa(e,t){t=re(t);const n=re(this),{has:r,get:s}=Js(n);let i=r.call(n,e);i||(e=re(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?Xe(t,o)&&vt(n,"set",e,t):vt(n,"add",e,t),this}function Oa(e){const t=re(this),{has:n,get:r}=Js(t);let s=n.call(t,e);s||(e=re(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&vt(t,"delete",e,void 0),i}function ka(){const e=re(this),t=e.size!==0,n=e.clear();return t&&vt(e,"clear",void 0,void 0),n}function os(e,t){return function(r,s){const i=this,o=i.__v_raw,a=re(o),c=t?No:e?xo:Ar;return!e&&Fe(a,"iterate",fn),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function as(e,t,n){return function(...r){const s=this.__v_raw,i=re(s),o=Dn(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=s[e](...r),u=n?No:t?xo:Ar;return!t&&Fe(i,"iterate",c?qi:fn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Nt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ih(){const e={get(i){return rs(this,i)},get size(){return is(this)},has:ss,add:Ra,set:Pa,delete:Oa,clear:ka,forEach:os(!1,!1)},t={get(i){return rs(this,i,!1,!0)},get size(){return is(this)},has:ss,add:Ra,set:Pa,delete:Oa,clear:ka,forEach:os(!1,!0)},n={get(i){return rs(this,i,!0)},get size(){return is(this,!0)},has(i){return ss.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:os(!0,!1)},r={get(i){return rs(this,i,!0,!0)},get size(){return is(this,!0)},has(i){return ss.call(this,i,!0)},add:Nt("add"),set:Nt("set"),delete:Nt("delete"),clear:Nt("clear"),forEach:os(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=as(i,!1,!1),n[i]=as(i,!0,!1),t[i]=as(i,!1,!0),r[i]=as(i,!0,!0)}),[e,n,t,r]}const[Th,Sh,Ch,Ah]=Ih();function Ys(e,t){const n=t?e?Ah:Ch:e?Sh:Th;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(se(n,s)&&s in r?n:r,s,i)}const Rh={get:Ys(!1,!1)},Ph={get:Ys(!1,!0)},Oh={get:Ys(!0,!1)},kh={get:Ys(!0,!0)},Ol=new WeakMap,kl=new WeakMap,Nl=new WeakMap,Ll=new WeakMap;function Nh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lh(e){return e.__v_skip||!Object.isExtensible(e)?0:Nh(Yd(e))}function jr(e){return Yn(e)?e:Xs(e,!1,vh,Rh,Ol)}function Lo(e){return Xs(e,!1,wh,Ph,kl)}function Mo(e){return Xs(e,!0,bh,Oh,Nl)}function Mh(e){return Xs(e,!0,Eh,kh,Ll)}function Xs(e,t,n,r,s){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Lh(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Un(e){return Yn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function Yn(e){return!!(e&&e.__v_isReadonly)}function Cr(e){return!!(e&&e.__v_isShallow)}function Do(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function Ml(e){return Object.isExtensible(e)&&gl(e,"__v_skip",!0),e}const Ar=e=>fe(e)?jr(e):e,xo=e=>fe(e)?Mo(e):e;class Dl{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Jn(()=>t(this._value),()=>$n(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=re(this);return(!t._cacheable||t.effect.dirty)&&Xe(t._value,t._value=t.effect.run())&&$n(t,5),Fo(t),t.effect._dirtyLevel>=2&&$n(t,3),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Dh(e,t,n=!1){let r,s;const i=X(e);return i?(r=e,s=Me):(r=e.get,s=e.set),new Dl(r,s,i||!s,n)}function Fo(e){var t;qt&&un&&(e=re(e),Il(un,(t=e.dep)!=null?t:e.dep=Sl(()=>e.dep=void 0,e instanceof Dl?e:void 0)))}function $n(e,t=5,n,r){e=re(e);const s=e.dep;s&&Tl(s,t)}function _e(e){return!!(e&&e.__v_isRef===!0)}function Gt(e){return Fl(e,!1)}function xl(e){return Fl(e,!0)}function Fl(e,t){return _e(e)?e:new xh(e,t)}class xh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:re(t),this._value=n?t:Ar(t)}get value(){return Fo(this),this._value}set value(t){const n=this.__v_isShallow||Cr(t)||Yn(t);t=n?t:re(t),Xe(t,this._rawValue)&&(this._rawValue,this._rawValue=t,this._value=n?t:Ar(t),$n(this,5))}}function Fh(e){$n(e,5)}function ke(e){return _e(e)?e.value:e}function Uh(e){return X(e)?e():ke(e)}const $h={get:(e,t,n)=>ke(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return _e(s)&&!_e(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Uo(e){return Un(e)?e:new Proxy(e,$h)}class Bh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Fo(this),()=>$n(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function Ul(e){return new Bh(e)}function Hh(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=$l(e,n);return t}class Vh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return gh(re(this._object),this._key)}}class jh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Wh(e,t,n){return _e(e)?e:X(e)?new jh(e):fe(e)&&arguments.length>1?$l(e,t,n):Gt(e)}function $l(e,t,n){const r=e[t];return _e(r)?r:new Vh(e,t,n)}const Kh={GET:"get",HAS:"has",ITERATE:"iterate"},qh={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"};/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gh(e,t){}const zh={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},Jh={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."};function bt(e,t,n,r){try{return r?e(...r):e()}catch(s){In(s,t,n)}}function Ve(e,t,n,r){if(X(e)){const s=bt(e,t,n,r);return s&&Ao(s)&&s.catch(i=>{In(i,t,n)}),s}if(W(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ve(e[i],t,n,r));return s}}function In(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,o,a)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){tn(),bt(c,null,10,[e,o,a]),nn();return}}Yh(e,n,s,r)}function Yh(e,t,n,r=!0){console.error(e)}let Rr=!1,Gi=!1;const Ce=[];let st=0;const Bn=[];let Ft=null,cn=0;const Bl=Promise.resolve();let $o=null;function Wr(e){const t=$o||Bl;return e?t.then(this?e.bind(this):e):t}function Xh(e){let t=st+1,n=Ce.length;for(;t<n;){const r=t+n>>>1,s=Ce[r],i=Pr(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function Qs(e){(!Ce.length||!Ce.includes(e,Rr&&e.allowRecurse?st+1:st))&&(e.id==null?Ce.push(e):Ce.splice(Xh(e.id),0,e),Hl())}function Hl(){!Rr&&!Gi&&(Gi=!0,$o=Bl.then(Vl))}function Qh(e){const t=Ce.indexOf(e);t>st&&Ce.splice(t,1)}function Rs(e){W(e)?Bn.push(...e):(!Ft||!Ft.includes(e,e.allowRecurse?cn+1:cn))&&Bn.push(e),Hl()}function Na(e,t,n=Rr?st+1:0){for(;n<Ce.length;n++){const r=Ce[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ce.splice(n,1),n--,r()}}}function Ps(e){if(Bn.length){const t=[...new Set(Bn)].sort((n,r)=>Pr(n)-Pr(r));if(Bn.length=0,Ft){Ft.push(...t);return}for(Ft=t,cn=0;cn<Ft.length;cn++){const n=Ft[cn];n.active!==!1&&n()}Ft=null,cn=0}}const Pr=e=>e.id==null?1/0:e.id,Zh=(e,t)=>{const n=Pr(e)-Pr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vl(e){Gi=!1,Rr=!0,Ce.sort(Zh);try{for(st=0;st<Ce.length;st++){const t=Ce[st];t&&t.active!==!1&&bt(t,null,14)}}finally{st=0,Ce.length=0,Ps(),Rr=!1,$o=null,(Ce.length||Bn.length)&&Vl()}}let kn,cs=[];function jl(e,t){var n,r;kn=e,kn?(kn.enabled=!0,cs.forEach(({event:s,args:i})=>kn.emit(s,...i)),cs=[]):typeof window<"u"&&window.HTMLElement&&!((r=(n=window.navigator)==null?void 0:n.userAgent)!=null&&r.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(i=>{jl(i,t)}),setTimeout(()=>{kn||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,cs=[])},3e3)):cs=[]}function ep(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=r[u]||ue;d&&(s=n.map(m=>me(m)?m.trim():m)),f&&(s=n.map(Ss))}let a,c=r[a=_r(t)]||r[a=_r(Oe(t))];!c&&i&&(c=r[a=_r(He(t))]),c&&Ve(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ve(l,e,6,s)}}function Wl(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!X(e)){const c=l=>{const u=Wl(l,t,!0);u&&(a=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(fe(e)&&r.set(e,null),null):(W(i)?i.forEach(c=>o[c]=null):pe(o,i),fe(e)&&r.set(e,o),o)}function Zs(e,t){return!e||!$r(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,He(t))||se(e,t))}let ve=null,ei=null;function Or(e){const t=ve;return ve=e,ei=e&&e.type.__scopeId||null,t}function Tn(e){ei=e}function Sn(){ei=null}const tp=e=>zt;function zt(e,t=ve,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&no(-1);const i=Or(t);let o;try{o=e(...s)}finally{Or(i),r._d&&no(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _s(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:d,setupState:m,ctx:v,inheritAttrs:k}=e,U=Or(e);let D,E;try{if(n.shapeFlag&4){const y=s||r,T=y;D=Be(l.call(T,y,u,f,m,d,v)),E=a}else{const y=t;D=Be(y.length>1?y(f,{attrs:a,slots:o,emit:c}):y(f,null)),E=t.props?a:rp(a)}}catch(y){br.length=0,In(y,e,1),D=ce(Ie)}let g=D;if(E&&k!==!1){const y=Object.keys(E),{shapeFlag:T}=g;y.length&&T&7&&(i&&y.some(So)&&(E=sp(E,i)),g=lt(g,E,!1,!0))}return n.dirs&&(g=lt(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),D=g,Or(U),D}function np(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(Zt(s)){if(s.type!==Ie||s.children==="v-if"){if(n)return;n=s}}else return}return n}const rp=e=>{let t;for(const n in e)(n==="class"||n==="style"||$r(n))&&((t||(t={}))[n]=e[n]);return t},sp=(e,t)=>{const n={};for(const r in e)(!So(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ip(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?La(r,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==r[d]&&!Zs(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?La(r,o,l):!0:!!o;return!1}function La(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Zs(n,i))return!0}return!1}function Bo({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ho="components",op="directives";function Kl(e,t){return Vo(Ho,e,!0,t)||e}const ql=Symbol.for("v-ndc");function Gl(e){return me(e)?Vo(Ho,e,!1)||e:e||ql}function ap(e){return Vo(op,e)}function Vo(e,t,n=!0,r=!1){const s=ve||ye;if(s){const i=s.type;if(e===Ho){const a=ao(i,!1);if(a&&(a===t||a===Oe(t)||a===Br(Oe(t))))return i}const o=Ma(s[e]||i[e],t)||Ma(s.appContext[e],t);return!o&&r?i:o}}function Ma(e,t){return e&&(e[t]||e[Oe(t)]||e[Br(Oe(t))])}const zi=e=>e.__isSuspense;let Ji=0;const cp={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,i,o,a,c,l){if(e==null)up(t,n,r,s,i,o,a,c,l);else{if(i&&i.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}fp(e,t,n,r,s,o,a,c,l)}},hydrate:dp,create:jo,normalize:hp},lp=cp;function kr(e,t){const n=e.props&&e.props[t];X(n)&&n()}function up(e,t,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),d=e.suspense=jo(e,s,r,t,f,n,i,o,a,c);l(null,d.pendingBranch=e.ssContent,f,null,r,d,i,o),d.deps>0?(kr(e,"onPending"),kr(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,i,o),Hn(d,e.ssFallback)):d.resolve(!1,!0)}function fp(e,t,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const d=t.ssContent,m=t.ssFallback,{activeBranch:v,pendingBranch:k,isInFallback:U,isHydrating:D}=f;if(k)f.pendingBranch=d,Ye(d,k)?(c(k,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():U&&(D||(c(v,m,n,r,s,null,i,o,a),Hn(f,m)))):(f.pendingId=Ji++,D?(f.isHydrating=!1,f.activeBranch=k):l(k,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),U?(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(v,m,n,r,s,null,i,o,a),Hn(f,m))):v&&Ye(d,v)?(c(v,d,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(v&&Ye(d,v))c(v,d,n,r,s,f,i,o,a),Hn(f,d);else if(kr(t,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=Ji++,c(null,d,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:E,pendingId:g}=f;E>0?setTimeout(()=>{f.pendingId===g&&f.fallback(m)},E):E===0&&f.fallback(m)}}function jo(e,t,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:d,um:m,n:v,o:{parentNode:k,remove:U}}=l;let D;const E=pp(e);E&&t&&t.pendingBranch&&(D=t.pendingId,t.deps++);const g=e.props?Cs(e.props.timeout):void 0,y=i,T={vnode:e,parent:t,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Ji++,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(w=!1,L=!1){const{vnode:B,activeBranch:b,pendingBranch:I,pendingId:O,effects:R,parentComponent:j,container:ne}=T;let ie=!1;T.isHydrating?T.isHydrating=!1:w||(ie=b&&I.transition&&I.transition.mode==="out-in",ie&&(b.transition.afterLeave=()=>{O===T.pendingId&&(d(I,ne,i===y?v(b):i,0),Rs(R))}),b&&(k(b.el)!==T.hiddenContainer&&(i=v(b)),m(b,j,T,!0)),ie||d(I,ne,i,0)),Hn(T,I),T.pendingBranch=null,T.isInFallback=!1;let K=T.parent,Z=!1;for(;K;){if(K.pendingBranch){K.effects.push(...R),Z=!0;break}K=K.parent}!Z&&!ie&&Rs(R),T.effects=[],E&&t&&t.pendingBranch&&D===t.pendingId&&(t.deps--,t.deps===0&&!L&&t.resolve()),kr(B,"onResolve")},fallback(w){if(!T.pendingBranch)return;const{vnode:L,activeBranch:B,parentComponent:b,container:I,namespace:O}=T;kr(L,"onFallback");const R=v(B),j=()=>{T.isInFallback&&(f(null,w,I,R,b,null,O,a,c),Hn(T,w))},ne=w.transition&&w.transition.mode==="out-in";ne&&(B.transition.afterLeave=j),T.isInFallback=!0,m(B,b,null,!0),ne||j()},move(w,L,B){T.activeBranch&&d(T.activeBranch,w,L,B),T.container=w},next(){return T.activeBranch&&v(T.activeBranch)},registerDep(w,L,B){const b=!!T.pendingBranch;b&&T.deps++;const I=w.vnode.el;w.asyncDep.catch(O=>{In(O,w,0)}).then(O=>{if(w.isUnmounted||T.isUnmounted||T.pendingId!==w.suspenseId)return;w.asyncResolved=!0;const{vnode:R}=w;io(w,O,!1),I&&(R.el=I);const j=!I&&w.subTree.el;L(w,R,k(I||w.subTree.el),I?null:v(w.subTree),T,o,B),j&&U(j),Bo(w,R.el),b&&--T.deps===0&&T.resolve()})},unmount(w,L){T.isUnmounted=!0,T.activeBranch&&m(T.activeBranch,n,w,L),T.pendingBranch&&m(T.pendingBranch,n,w,L)}};return T}function dp(e,t,n,r,s,i,o,a,c){const l=t.suspense=jo(t,r,n,e.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(e,l.pendingBranch=t.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function hp(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=Da(r?n.default:n),e.ssFallback=r?Da(n.fallback):ce(Ie)}function Da(e){let t;if(X(e)){const n=gn&&e._c;n&&(e._d=!1,Pe()),e=e(),n&&(e._d=!0,t=De,Ou())}return W(e)&&(e=np(e)),e=Be(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function zl(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):Rs(e)}function Hn(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let s=t.el;for(;!s&&t.component;)t=t.component.subTree,s=t.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Bo(r,s))}function pp(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}function ti(e,t,n=ye,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{tn();const a=mn(n),c=Ve(t,n,e,o);return a(),nn(),c});return r?s.unshift(i):s.push(i),i}}const At=e=>(t,n=ye)=>{(!zr||e==="sp")&&ti(e,(...r)=>t(...r),n)},Jl=At("bm"),ir=At("m"),Yl=At("bu"),ni=At("u"),ri=At("bum"),si=At("um"),Xl=At("sp"),Ql=At("rtg"),Zl=At("rtc");function eu(e,t=ye){ti("ec",e,t)}function Vn(e,t){if(ve===null)return e;const n=Jr(ve),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,c=ue]=t[s];i&&(X(i)&&(i={mounted:i,updated:i}),i.deep&&Ht(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function rt(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(tn(),Ve(c,n,8,[e.el,a,e,t]),nn())}}function gp(e,t,n,r){let s;const i=n&&n[r];if(W(e)||me(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(fe(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=t(e[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function mp(e,t){for(let n=0;n<t.length;n++){const r=t[n];if(W(r))for(let s=0;s<r.length;s++)e[r[s].name]=r[s].fn;else r&&(e[r.name]=r.key?(...s)=>{const i=r.fn(...s);return i&&(i.key=r.key),i}:r.fn)}return e}/*! #__NO_SIDE_EFFECTS__ */function Kr(e,t){return X(e)?pe({name:e.name},t,{setup:e}):e}const dn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function _p(e){X(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=e;let c=null,l,u=0;const f=()=>(u++,c=null,d()),d=()=>{let m;return c||(m=c=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),a)return new Promise((k,U)=>{a(v,()=>k(f()),()=>U(v),u+1)});throw v}).then(v=>m!==c&&c?c:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),l=v,v)))};return Kr({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return l},setup(){const m=ye;if(l)return()=>Ei(l,m);const v=E=>{c=null,In(E,m,13,!r)};if(o&&m.suspense||zr)return d().then(E=>()=>Ei(E,m)).catch(E=>(v(E),()=>r?ce(r,{error:E}):null));const k=Gt(!1),U=Gt(),D=Gt(!!s);return s&&setTimeout(()=>{D.value=!1},s),i!=null&&setTimeout(()=>{if(!k.value&&!U.value){const E=new Error(`Async component timed out after ${i}ms.`);v(E),U.value=E}},i),d().then(()=>{k.value=!0,m.parent&&Gr(m.parent.vnode)&&(m.parent.effect.dirty=!0,Qs(m.parent.update))}).catch(E=>{v(E),U.value=E}),()=>{if(k.value&&l)return Ei(l,m);if(U.value&&r)return ce(r,{error:U.value});if(n&&!D.value)return ce(n)}}})}function Ei(e,t){const{ref:n,props:r,children:s,ce:i}=t.vnode,o=ce(e,r,s);return o.ref=n,o.ce=i,delete t.vnode.ce,o}function yp(e,t,n={},r,s){if(ve.isCE||ve.parent&&dn(ve.parent)&&ve.parent.isCE)return t!=="default"&&(n.name=t),ce("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),Pe();const o=i&&tu(i(n)),a=Qn(Ee,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function tu(e){return e.some(t=>Zt(t)?!(t.type===Ie||t.type===Ee&&!tu(t.children)):!0)?e:null}function vp(e,t){const n={};for(const r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:_r(r)]=e[r];return n}const Yi=e=>e?xu(e)?Jr(e):Yi(e.parent):null,yr=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Yi(e.parent),$root:e=>Yi(e.root),$emit:e=>e.emit,$options:e=>Wo(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Qs(e.update)}),$nextTick:e=>e.n||(e.n=Wr.bind(e.proxy)),$watch:e=>Qp.bind(e)}),Ii=(e,t)=>e!==ue&&!e.__isScriptSetup&&se(e,t),Xi={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ii(r,t))return o[t]=1,r[t];if(s!==ue&&se(s,t))return o[t]=2,s[t];if((l=e.propsOptions[0])&&se(l,t))return o[t]=3,i[t];if(n!==ue&&se(n,t))return o[t]=4,n[t];Qi&&(o[t]=0)}}const u=yr[t];let f,d;if(u)return t==="$attrs"&&Fe(e.attrs,"get",""),u(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==ue&&se(n,t))return o[t]=4,n[t];if(d=c.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ii(s,t)?(s[t]=n,!0):r!==ue&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==ue&&se(e,o)||Ii(t,o)||(a=i[0])&&se(a,o)||se(r,o)||se(yr,o)||se(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},bp=pe({},Xi,{get(e,t){if(t!==Symbol.unscopables)return Xi.get(e,t,e)},has(e,t){return t[0]!=="_"&&!eh(t)}});function wp(){return null}function Ep(){return null}function Ip(e){}function Tp(e){}function Sp(){return null}function Cp(){}function Ap(e,t){return null}function Rp(){return nu().slots}function Pp(){return nu().attrs}function nu(){const e=Rt();return e.setupContext||(e.setupContext=$u(e))}function Nr(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function Op(e,t){const n=Nr(e);for(const r in t){if(r.startsWith("__skip"))continue;let s=n[r];s?W(s)||X(s)?s=n[r]={type:s,default:t[r]}:s.default=t[r]:s===null&&(s=n[r]={default:t[r]}),s&&t[`__skip_${r}`]&&(s.skipFactory=!0)}return n}function kp(e,t){return!e||!t?e||t:W(e)&&W(t)?e.concat(t):pe({},Nr(e),Nr(t))}function Np(e,t){const n={};for(const r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n}function Lp(e){const t=Rt();let n=e();return so(),Ao(n)&&(n=n.catch(r=>{throw mn(t),r})),[n,()=>mn(t)]}let Qi=!0;function Mp(e){const t=Wo(e),n=e.proxy,r=e.ctx;Qi=!1,t.beforeCreate&&xa(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:v,activated:k,deactivated:U,beforeDestroy:D,beforeUnmount:E,destroyed:g,unmounted:y,render:T,renderTracked:w,renderTriggered:L,errorCaptured:B,serverPrefetch:b,expose:I,inheritAttrs:O,components:R,directives:j,filters:ne}=t;if(l&&Dp(l,r,null),o)for(const Z in o){const G=o[Z];X(G)&&(r[Z]=G.bind(n))}if(s){const Z=s.call(n,n);fe(Z)&&(e.data=jr(Z))}if(Qi=!0,i)for(const Z in i){const G=i[Z],ze=X(G)?G.bind(n,n):X(G.get)?G.get.bind(n,n):Me,kt=!X(G)&&X(G.set)?G.set.bind(n):Me,tt=qe({get:ze,set:kt});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ne=>tt.value=Ne})}if(a)for(const Z in a)ru(a[Z],r,n,Z);if(c){const Z=X(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(G=>{Wn(G,Z[G])})}u&&xa(u,e,"c");function K(Z,G){W(G)?G.forEach(ze=>Z(ze.bind(n))):G&&Z(G.bind(n))}if(K(Jl,f),K(ir,d),K(Yl,m),K(ni,v),K(Iu,k),K(Tu,U),K(eu,B),K(Zl,w),K(Ql,L),K(ri,E),K(si,y),K(Xl,b),W(I))if(I.length){const Z=e.exposed||(e.exposed={});I.forEach(G=>{Object.defineProperty(Z,G,{get:()=>n[G],set:ze=>n[G]=ze})})}else e.exposed||(e.exposed={});T&&e.render===Me&&(e.render=T),O!=null&&(e.inheritAttrs=O),R&&(e.components=R),j&&(e.directives=j)}function Dp(e,t,n=Me){W(e)&&(e=Zi(e));for(const r in e){const s=e[r];let i;fe(s)?"default"in s?i=je(s.from||r,s.default,!0):i=je(s.from||r):i=je(s),_e(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function xa(e,t,n){Ve(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ru(e,t,n,r){const s=r.includes(".")?Eu(n,r):()=>n[r];if(me(e)){const i=t[e];X(i)&&Kn(s,i)}else if(X(e))Kn(s,e.bind(n));else if(fe(e))if(W(e))e.forEach(i=>ru(i,t,n,r));else{const i=X(e.handler)?e.handler.bind(n):t[e.handler];X(i)&&Kn(s,i,e)}}function Wo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Os(c,l,o,!0)),Os(c,t,o)),fe(t)&&i.set(t,c),c}function Os(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Os(e,i,n,!0),s&&s.forEach(o=>Os(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=xp[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const xp={data:Fa,props:Ua,emits:Ua,methods:hr,computed:hr,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:hr,directives:hr,watch:Up,provide:Fa,inject:Fp};function Fa(e,t){return t?e?function(){return pe(X(e)?e.call(this,this):e,X(t)?t.call(this,this):t)}:t:e}function Fp(e,t){return hr(Zi(e),Zi(t))}function Zi(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Re(e,t){return e?[...new Set([].concat(e,t))]:t}function hr(e,t){return e?pe(Object.create(null),e,t):t}function Ua(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:pe(Object.create(null),Nr(e),Nr(t??{})):t}function Up(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=Re(e[r],t[r]);return n}function su(){return{app:null,config:{isNativeTag:Gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $p=0;function Bp(e,t){return function(r,s=null){X(r)||(r=pe({},r)),s!=null&&!fe(s)&&(s=null);const i=su(),o=new WeakSet;let a=!1;const c=i.app={_uid:$p++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&X(l.install)?(o.add(l),l.install(c,...u)):X(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const d=ce(r,s);return d.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),u&&t?t(d,l):e(d,l,f),a=!0,c._container=l,l.__vue_app__=c,Jr(d.component)}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=jn;jn=c;try{return l()}finally{jn=u}}};return c}}let jn=null;function Wn(e,t){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[e]=t}}function je(e,t,n=!1){const r=ye||ve;if(r||jn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:jn._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&X(t)?t.call(r&&r.proxy):t}}function Hp(){return!!(ye||ve||jn)}const iu={},ou=()=>Object.create(iu),au=e=>Object.getPrototypeOf(e)===iu;function Vp(e,t,n,r=!1){const s={},i=ou();e.propsDefaults=Object.create(null),cu(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Lo(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function jp(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=re(s),[c]=e.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Zs(e.emitsOptions,d))continue;const m=t[d];if(c)if(se(i,d))m!==i[d]&&(i[d]=m,l=!0);else{const v=Oe(d);s[v]=eo(c,a,v,m,e,!1)}else m!==i[d]&&(i[d]=m,l=!0)}}}else{cu(e,t,s,i)&&(l=!0);let u;for(const f in a)(!t||!se(t,f)&&((u=He(f))===f||!se(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=eo(c,a,f,void 0,e,!0)):delete s[f]);if(i!==a)for(const f in i)(!t||!se(t,f))&&(delete i[f],l=!0)}l&&vt(e.attrs,"set","")}function cu(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(xn(c))continue;const l=t[c];let u;s&&se(s,u=Oe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Zs(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=re(n),l=a||ue;for(let u=0;u<i.length;u++){const f=i[u];n[f]=eo(s,c,f,l[f],e,!se(l,f))}}return o}function eo(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=se(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&X(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=mn(s);r=l[n]=c.call(null,t),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===He(n))&&(r=!0))}return r}function lu(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let c=!1;if(!X(e)){const u=f=>{c=!0;const[d,m]=lu(f,t,!0);pe(o,d),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return fe(e)&&r.set(e,Mn),Mn;if(W(i))for(let u=0;u<i.length;u++){const f=Oe(i[u]);$a(f)&&(o[f]=ue)}else if(i)for(const u in i){const f=Oe(u);if($a(f)){const d=i[u],m=o[f]=W(d)||X(d)?{type:d}:pe({},d);if(m){const v=Va(Boolean,m.type),k=Va(String,m.type);m[0]=v>-1,m[1]=k<0||v<k,(v>-1||se(m,"default"))&&a.push(f)}}}const l=[o,a];return fe(e)&&r.set(e,l),l}function $a(e){return e[0]!=="$"&&!xn(e)}function Ba(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Ha(e,t){return Ba(e)===Ba(t)}function Va(e,t){return W(t)?t.findIndex(n=>Ha(n,e)):X(t)&&Ha(t,e)?0:-1}const uu=e=>e[0]==="_"||e==="$stable",Ko=e=>W(e)?e.map(Be):[Be(e)],Wp=(e,t,n)=>{if(t._n)return t;const r=zt((...s)=>Ko(t(...s)),n);return r._c=!1,r},fu=(e,t,n)=>{const r=e._ctx;for(const s in e){if(uu(s))continue;const i=e[s];if(X(i))t[s]=Wp(s,i,r);else if(i!=null){const o=Ko(i);t[s]=()=>o}}},du=(e,t)=>{const n=Ko(t);e.slots.default=()=>n},Kp=(e,t)=>{const n=e.slots=ou();if(e.vnode.shapeFlag&32){const r=t._;r?(pe(n,t),gl(n,"_",r,!0)):fu(t,n)}else t&&du(e,t)},qp=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=ue;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(pe(s,t),!n&&a===1&&delete s._):(i=!t.$stable,fu(t,s)),o=t}else t&&(du(e,t),o={default:1});if(i)for(const a in s)!uu(a)&&o[a]==null&&delete s[a]};function ks(e,t,n,r,s=!1){if(W(e)){e.forEach((d,m)=>ks(d,t&&(W(t)?t[m]:t),n,r,s));return}if(dn(r)&&!s)return;const i=r.shapeFlag&4?Jr(r.component):r.el,o=s?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===ue?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(me(l)?(u[l]=null,se(f,l)&&(f[l]=null)):_e(l)&&(l.value=null)),X(c))bt(c,a,12,[o,u]);else{const d=me(c),m=_e(c);if(d||m){const v=()=>{if(e.f){const k=d?se(f,c)?f[c]:u[c]:c.value;s?W(k)&&Co(k,i):W(k)?k.includes(i)||k.push(i):d?(u[c]=[i],se(f,c)&&(f[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else d?(u[c]=o,se(f,c)&&(f[c]=o)):m&&(c.value=o,e.k&&(u[e.k]=o))};o?(v.id=-1,we(v,n)):v()}}}let ja=!1;const On=()=>{ja||(console.error("Hydration completed but contains mismatches."),ja=!0)},Gp=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",zp=e=>e.namespaceURI.includes("MathML"),ls=e=>{if(Gp(e))return"svg";if(zp(e))return"mathml"},us=e=>e.nodeType===8;function Jp(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:l}}=e,u=(g,y)=>{if(!y.hasChildNodes()){n(null,g,y),Ps(),y._vnode=g;return}f(y.firstChild,g,null,null,null),Ps(),y._vnode=g},f=(g,y,T,w,L,B=!1)=>{B=B||!!y.dynamicChildren;const b=us(g)&&g.data==="[",I=()=>k(g,y,T,w,L,b),{type:O,ref:R,shapeFlag:j,patchFlag:ne}=y;let ie=g.nodeType;y.el=g,ne===-2&&(B=!1,y.dynamicChildren=null);let K=null;switch(O){case pn:ie!==3?y.children===""?(c(y.el=s(""),o(g),g),K=g):K=I():(g.data!==y.children&&(On(),g.data=y.children),K=i(g));break;case Ie:E(g)?(K=i(g),D(y.el=g.content.firstChild,g,T)):ie!==8||b?K=I():K=i(g);break;case hn:if(b&&(g=i(g),ie=g.nodeType),ie===1||ie===3){K=g;const Z=!y.children.length;for(let G=0;G<y.staticCount;G++)Z&&(y.children+=K.nodeType===1?K.outerHTML:K.data),G===y.staticCount-1&&(y.anchor=K),K=i(K);return b?i(K):K}else I();break;case Ee:b?K=v(g,y,T,w,L,B):K=I();break;default:if(j&1)(ie!==1||y.type.toLowerCase()!==g.tagName.toLowerCase())&&!E(g)?K=I():K=d(g,y,T,w,L,B);else if(j&6){y.slotScopeIds=L;const Z=o(g);if(b?K=U(g):us(g)&&g.data==="teleport start"?K=U(g,g.data,"teleport end"):K=i(g),t(y,Z,null,T,w,ls(Z),B),dn(y)){let G;b?(G=ce(Ee),G.anchor=K?K.previousSibling:Z.lastChild):G=g.nodeType===3?Zn(""):ce("div"),G.el=g,y.component.subTree=G}}else j&64?ie!==8?K=I():K=y.type.hydrate(g,y,T,w,L,B,e,m):j&128&&(K=y.type.hydrate(g,y,T,w,ls(o(g)),L,B,e,f))}return R!=null&&ks(R,null,w,y),K},d=(g,y,T,w,L,B)=>{B=B||!!y.dynamicChildren;const{type:b,props:I,patchFlag:O,shapeFlag:R,dirs:j,transition:ne}=y,ie=b==="input"||b==="option";if(ie||O!==-1){j&&rt(y,null,T,"created");let K=!1;if(E(g)){K=mu(w,ne)&&T&&T.vnode.props&&T.vnode.props.appear;const G=g.content.firstChild;K&&ne.beforeEnter(G),D(G,g,T),y.el=g=G}if(R&16&&!(I&&(I.innerHTML||I.textContent))){let G=m(g.firstChild,y,g,T,w,L,B);for(;G;){On();const ze=G;G=G.nextSibling,a(ze)}}else R&8&&g.textContent!==y.children&&(On(),g.textContent=y.children);if(I)if(ie||!B||O&48)for(const G in I)(ie&&(G.endsWith("value")||G==="indeterminate")||$r(G)&&!xn(G)||G[0]===".")&&r(g,G,null,I[G],void 0,void 0,T);else I.onClick&&r(g,"onClick",null,I.onClick,void 0,void 0,T);let Z;(Z=I&&I.onVnodeBeforeMount)&&Le(Z,T,y),j&&rt(y,null,T,"beforeMount"),((Z=I&&I.onVnodeMounted)||j||K)&&zl(()=>{Z&&Le(Z,T,y),K&&ne.enter(g),j&&rt(y,null,T,"mounted")},w)}return g.nextSibling},m=(g,y,T,w,L,B,b)=>{b=b||!!y.dynamicChildren;const I=y.children,O=I.length;for(let R=0;R<O;R++){const j=b?I[R]:I[R]=Be(I[R]);g?g=f(g,j,w,L,B,b):j.type===pn&&!j.children?c(j.el=s(""),T):(On(),n(null,j,T,null,w,L,ls(T),B))}return g},v=(g,y,T,w,L,B)=>{const{slotScopeIds:b}=y;b&&(L=L?L.concat(b):b);const I=o(g),O=m(i(g),y,I,T,w,L,B);return O&&us(O)&&O.data==="]"?i(y.anchor=O):(On(),c(y.anchor=l("]"),I,O),O)},k=(g,y,T,w,L,B)=>{if(On(),y.el=null,B){const O=U(g);for(;;){const R=i(g);if(R&&R!==O)a(R);else break}}const b=i(g),I=o(g);return a(g),n(null,y,I,b,T,w,ls(I),L),b},U=(g,y="[",T="]")=>{let w=0;for(;g;)if(g=i(g),g&&us(g)&&(g.data===y&&w++,g.data===T)){if(w===0)return i(g);w--}return g},D=(g,y,T)=>{const w=y.parentNode;w&&w.replaceChild(g,y);let L=T;for(;L;)L.vnode.el===y&&(L.vnode.el=L.subTree.el=g),L=L.parent},E=g=>g.nodeType===1&&g.tagName.toLowerCase()==="template";return[u,f]}const we=zl;function hu(e){return gu(e)}function pu(e){return gu(e,Jp)}function gu(e,t){const n=ml();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=Me,insertStaticContent:v}=e,k=(h,p,_,A=null,S=null,M=null,F=void 0,N=null,x=!!p.dynamicChildren)=>{if(h===p)return;h&&!Ye(h,p)&&(A=C(h),Ne(h,S,M,!0),h=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null);const{type:P,ref:V,shapeFlag:J}=p;switch(P){case pn:U(h,p,_,A);break;case Ie:D(h,p,_,A);break;case hn:h==null&&E(p,_,A,F);break;case Ee:R(h,p,_,A,S,M,F,N,x);break;default:J&1?T(h,p,_,A,S,M,F,N,x):J&6?j(h,p,_,A,S,M,F,N,x):(J&64||J&128)&&P.process(h,p,_,A,S,M,F,N,x,q)}V!=null&&S&&ks(V,h&&h.ref,M,p||h,!p)},U=(h,p,_,A)=>{if(h==null)r(p.el=a(p.children),_,A);else{const S=p.el=h.el;p.children!==h.children&&l(S,p.children)}},D=(h,p,_,A)=>{h==null?r(p.el=c(p.children||""),_,A):p.el=h.el},E=(h,p,_,A)=>{[h.el,h.anchor]=v(h.children,p,_,A,h.el,h.anchor)},g=({el:h,anchor:p},_,A)=>{let S;for(;h&&h!==p;)S=d(h),r(h,_,A),h=S;r(p,_,A)},y=({el:h,anchor:p})=>{let _;for(;h&&h!==p;)_=d(h),s(h),h=_;s(p)},T=(h,p,_,A,S,M,F,N,x)=>{p.type==="svg"?F="svg":p.type==="math"&&(F="mathml"),h==null?w(p,_,A,S,M,F,N,x):b(h,p,S,M,F,N,x)},w=(h,p,_,A,S,M,F,N)=>{let x,P;const{props:V,shapeFlag:J,transition:z,dirs:ee}=h;if(x=h.el=o(h.type,M,V&&V.is,V),J&8?u(x,h.children):J&16&&B(h.children,x,null,A,S,Ti(h,M),F,N),ee&&rt(h,null,A,"created"),L(x,h,h.scopeId,F,A),V){for(const he in V)he!=="value"&&!xn(he)&&i(x,he,null,V[he],M,h.children,A,S,Te);"value"in V&&i(x,"value",null,V.value,M),(P=V.onVnodeBeforeMount)&&Le(P,A,h)}ee&&rt(h,null,A,"beforeMount");const te=mu(S,z);te&&z.beforeEnter(x),r(x,p,_),((P=V&&V.onVnodeMounted)||te||ee)&&we(()=>{P&&Le(P,A,h),te&&z.enter(x),ee&&rt(h,null,A,"mounted")},S)},L=(h,p,_,A,S)=>{if(_&&m(h,_),A)for(let M=0;M<A.length;M++)m(h,A[M]);if(S){let M=S.subTree;if(p===M){const F=S.vnode;L(h,F,F.scopeId,F.slotScopeIds,S.parent)}}},B=(h,p,_,A,S,M,F,N,x=0)=>{for(let P=x;P<h.length;P++){const V=h[P]=N?$t(h[P]):Be(h[P]);k(null,V,p,_,A,S,M,F,N)}},b=(h,p,_,A,S,M,F)=>{const N=p.el=h.el;let{patchFlag:x,dynamicChildren:P,dirs:V}=p;x|=h.patchFlag&16;const J=h.props||ue,z=p.props||ue;let ee;if(_&&sn(_,!1),(ee=z.onVnodeBeforeUpdate)&&Le(ee,_,p,h),V&&rt(p,h,_,"beforeUpdate"),_&&sn(_,!0),P?I(h.dynamicChildren,P,N,_,A,Ti(p,S),M):F||G(h,p,N,null,_,A,Ti(p,S),M,!1),x>0){if(x&16)O(N,p,J,z,_,A,S);else if(x&2&&J.class!==z.class&&i(N,"class",null,z.class,S),x&4&&i(N,"style",J.style,z.style,S),x&8){const te=p.dynamicProps;for(let he=0;he<te.length;he++){const ae=te[he],be=J[ae],Je=z[ae];(Je!==be||ae==="value")&&i(N,ae,be,Je,S,h.children,_,A,Te)}}x&1&&h.children!==p.children&&u(N,p.children)}else!F&&P==null&&O(N,p,J,z,_,A,S);((ee=z.onVnodeUpdated)||V)&&we(()=>{ee&&Le(ee,_,p,h),V&&rt(p,h,_,"updated")},A)},I=(h,p,_,A,S,M,F)=>{for(let N=0;N<p.length;N++){const x=h[N],P=p[N],V=x.el&&(x.type===Ee||!Ye(x,P)||x.shapeFlag&70)?f(x.el):_;k(x,P,V,null,A,S,M,F,!0)}},O=(h,p,_,A,S,M,F)=>{if(_!==A){if(_!==ue)for(const N in _)!xn(N)&&!(N in A)&&i(h,N,_[N],null,F,p.children,S,M,Te);for(const N in A){if(xn(N))continue;const x=A[N],P=_[N];x!==P&&N!=="value"&&i(h,N,P,x,F,p.children,S,M,Te)}"value"in A&&i(h,"value",_.value,A.value,F)}},R=(h,p,_,A,S,M,F,N,x)=>{const P=p.el=h?h.el:a(""),V=p.anchor=h?h.anchor:a("");let{patchFlag:J,dynamicChildren:z,slotScopeIds:ee}=p;ee&&(N=N?N.concat(ee):ee),h==null?(r(P,_,A),r(V,_,A),B(p.children||[],_,V,S,M,F,N,x)):J>0&&J&64&&z&&h.dynamicChildren?(I(h.dynamicChildren,z,_,S,M,F,N),(p.key!=null||S&&p===S.subTree)&&qo(h,p,!0)):G(h,p,_,V,S,M,F,N,x)},j=(h,p,_,A,S,M,F,N,x)=>{p.slotScopeIds=N,h==null?p.shapeFlag&512?S.ctx.activate(p,_,A,F,x):ne(p,_,A,S,M,F,x):ie(h,p,x)},ne=(h,p,_,A,S,M,F)=>{const N=h.component=Du(h,A,S);if(Gr(h)&&(N.ctx.renderer=q),Fu(N),N.asyncDep){if(S&&S.registerDep(N,K,F),!h.el){const x=N.subTree=ce(Ie);D(null,x,p,_)}}else K(N,h,p,_,S,M,F)},ie=(h,p,_)=>{const A=p.component=h.component;if(ip(h,p,_))if(A.asyncDep&&!A.asyncResolved){Z(A,p,_);return}else A.next=p,Qh(A.update),A.effect.dirty=!0,A.update();else p.el=h.el,A.vnode=p},K=(h,p,_,A,S,M,F)=>{const N=()=>{if(h.isMounted){let{next:V,bu:J,u:z,parent:ee,vnode:te}=h;{const Pn=_u(h);if(Pn){V&&(V.el=te.el,Z(h,V,F)),Pn.asyncDep.then(()=>{h.isUnmounted||N()});return}}let he=V,ae;sn(h,!1),V?(V.el=te.el,Z(h,V,F)):V=te,J&&Fn(J),(ae=V.props&&V.props.onVnodeBeforeUpdate)&&Le(ae,ee,V,te),sn(h,!0);const be=_s(h),Je=h.subTree;h.subTree=be,k(Je,be,f(Je.el),C(Je),h,S,M),V.el=be.el,he===null&&Bo(h,be.el),z&&we(z,S),(ae=V.props&&V.props.onVnodeUpdated)&&we(()=>Le(ae,ee,V,te),S)}else{let V;const{el:J,props:z}=p,{bm:ee,m:te,parent:he}=h,ae=dn(p);if(sn(h,!1),ee&&Fn(ee),!ae&&(V=z&&z.onVnodeBeforeMount)&&Le(V,he,p),sn(h,!0),J&&ge){const be=()=>{h.subTree=_s(h),ge(J,h.subTree,h,S,null)};ae?p.type.__asyncLoader().then(()=>!h.isUnmounted&&be()):be()}else{const be=h.subTree=_s(h);k(null,be,_,A,h,S,M),p.el=be.el}if(te&&we(te,S),!ae&&(V=z&&z.onVnodeMounted)){const be=p;we(()=>Le(V,he,be),S)}(p.shapeFlag&256||he&&dn(he.vnode)&&he.vnode.shapeFlag&256)&&h.a&&we(h.a,S),h.isMounted=!0,p=_=A=null}},x=h.effect=new Jn(N,Me,()=>Qs(P),h.scope),P=h.update=()=>{x.dirty&&x.run()};P.id=h.uid,sn(h,!0),P()},Z=(h,p,_)=>{p.component=h;const A=h.vnode.props;h.vnode=p,h.next=null,jp(h,p.props,A,_),qp(h,p.children,_),tn(),Na(h),nn()},G=(h,p,_,A,S,M,F,N,x=!1)=>{const P=h&&h.children,V=h?h.shapeFlag:0,J=p.children,{patchFlag:z,shapeFlag:ee}=p;if(z>0){if(z&128){kt(P,J,_,A,S,M,F,N,x);return}else if(z&256){ze(P,J,_,A,S,M,F,N,x);return}}ee&8?(V&16&&Te(P,S,M),J!==P&&u(_,J)):V&16?ee&16?kt(P,J,_,A,S,M,F,N,x):Te(P,S,M,!0):(V&8&&u(_,""),ee&16&&B(J,_,A,S,M,F,N,x))},ze=(h,p,_,A,S,M,F,N,x)=>{h=h||Mn,p=p||Mn;const P=h.length,V=p.length,J=Math.min(P,V);let z;for(z=0;z<J;z++){const ee=p[z]=x?$t(p[z]):Be(p[z]);k(h[z],ee,_,null,S,M,F,N,x)}P>V?Te(h,S,M,!0,!1,J):B(p,_,A,S,M,F,N,x,J)},kt=(h,p,_,A,S,M,F,N,x)=>{let P=0;const V=p.length;let J=h.length-1,z=V-1;for(;P<=J&&P<=z;){const ee=h[P],te=p[P]=x?$t(p[P]):Be(p[P]);if(Ye(ee,te))k(ee,te,_,null,S,M,F,N,x);else break;P++}for(;P<=J&&P<=z;){const ee=h[J],te=p[z]=x?$t(p[z]):Be(p[z]);if(Ye(ee,te))k(ee,te,_,null,S,M,F,N,x);else break;J--,z--}if(P>J){if(P<=z){const ee=z+1,te=ee<V?p[ee].el:A;for(;P<=z;)k(null,p[P]=x?$t(p[P]):Be(p[P]),_,te,S,M,F,N,x),P++}}else if(P>z)for(;P<=J;)Ne(h[P],S,M,!0),P++;else{const ee=P,te=P,he=new Map;for(P=te;P<=z;P++){const Ue=p[P]=x?$t(p[P]):Be(p[P]);Ue.key!=null&&he.set(Ue.key,P)}let ae,be=0;const Je=z-te+1;let Pn=!1,ba=0;const lr=new Array(Je);for(P=0;P<Je;P++)lr[P]=0;for(P=ee;P<=J;P++){const Ue=h[P];if(be>=Je){Ne(Ue,S,M,!0);continue}let nt;if(Ue.key!=null)nt=he.get(Ue.key);else for(ae=te;ae<=z;ae++)if(lr[ae-te]===0&&Ye(Ue,p[ae])){nt=ae;break}nt===void 0?Ne(Ue,S,M,!0):(lr[nt-te]=P+1,nt>=ba?ba=nt:Pn=!0,k(Ue,p[nt],_,null,S,M,F,N,x),be++)}const wa=Pn?Yp(lr):Mn;for(ae=wa.length-1,P=Je-1;P>=0;P--){const Ue=te+P,nt=p[Ue],Ea=Ue+1<V?p[Ue+1].el:A;lr[P]===0?k(null,nt,_,Ea,S,M,F,N,x):Pn&&(ae<0||P!==wa[ae]?tt(nt,_,Ea,2):ae--)}}},tt=(h,p,_,A,S=null)=>{const{el:M,type:F,transition:N,children:x,shapeFlag:P}=h;if(P&6){tt(h.component.subTree,p,_,A);return}if(P&128){h.suspense.move(p,_,A);return}if(P&64){F.move(h,p,_,q);return}if(F===Ee){r(M,p,_);for(let J=0;J<x.length;J++)tt(x[J],p,_,A);r(h.anchor,p,_);return}if(F===hn){g(h,p,_);return}if(A!==2&&P&1&&N)if(A===0)N.beforeEnter(M),r(M,p,_),we(()=>N.enter(M),S);else{const{leave:J,delayLeave:z,afterLeave:ee}=N,te=()=>r(M,p,_),he=()=>{J(M,()=>{te(),ee&&ee()})};z?z(M,te,he):he()}else r(M,p,_)},Ne=(h,p,_,A=!1,S=!1)=>{const{type:M,props:F,ref:N,children:x,dynamicChildren:P,shapeFlag:V,patchFlag:J,dirs:z,memoIndex:ee}=h;if(N!=null&&ks(N,null,_,h,!0),ee!=null&&(p.renderCache[ee]=void 0),V&256){p.ctx.deactivate(h);return}const te=V&1&&z,he=!dn(h);let ae;if(he&&(ae=F&&F.onVnodeBeforeUnmount)&&Le(ae,p,h),V&6)ns(h.component,_,A);else{if(V&128){h.suspense.unmount(_,A);return}te&&rt(h,null,p,"beforeUnmount"),V&64?h.type.remove(h,p,_,S,q,A):P&&(M!==Ee||J>0&&J&64)?Te(P,p,_,!1,!0):(M===Ee&&J&384||!S&&V&16)&&Te(x,p,_),A&&An(h)}(he&&(ae=F&&F.onVnodeUnmounted)||te)&&we(()=>{ae&&Le(ae,p,h),te&&rt(h,null,p,"unmounted")},_)},An=h=>{const{type:p,el:_,anchor:A,transition:S}=h;if(p===Ee){Rn(_,A);return}if(p===hn){y(h);return}const M=()=>{s(_),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(h.shapeFlag&1&&S&&!S.persisted){const{leave:F,delayLeave:N}=S,x=()=>F(_,M);N?N(h.el,M,x):x()}else M()},Rn=(h,p)=>{let _;for(;h!==p;)_=d(h),s(h),h=_;s(p)},ns=(h,p,_)=>{const{bum:A,scope:S,update:M,subTree:F,um:N,m:x,a:P}=h;Ns(x),Ns(P),A&&Fn(A),S.stop(),M&&(M.active=!1,Ne(F,h,p,_)),N&&we(N,p),we(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Te=(h,p,_,A=!1,S=!1,M=0)=>{for(let F=M;F<h.length;F++)Ne(h[F],p,_,A,S)},C=h=>h.shapeFlag&6?C(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el);let H=!1;const $=(h,p,_)=>{h==null?p._vnode&&Ne(p._vnode,null,null,!0):k(p._vnode||null,h,p,null,null,null,_),H||(H=!0,Na(),Ps(),H=!1),p._vnode=h},q={p:k,um:Ne,m:tt,r:An,mt:ne,mc:B,pc:G,pbc:I,n:C,o:e};let oe,ge;return t&&([oe,ge]=t(q)),{render:$,hydrate:oe,createApp:Bp($,oe)}}function Ti({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function sn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function mu(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function qo(e,t,n=!1){const r=e.children,s=t.children;if(W(r)&&W(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=$t(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&qo(o,a)),a.type===pn&&(a.el=o.el)}}function Yp(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function _u(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:_u(t)}function Ns(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}const yu=Symbol.for("v-scx"),vu=()=>je(yu);function Xp(e,t){return qr(e,null,t)}function bu(e,t){return qr(e,null,{flush:"post"})}function wu(e,t){return qr(e,null,{flush:"sync"})}const fs={};function Kn(e,t,n){return qr(e,t,n)}function qr(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=ue){if(t&&i){const w=t;t=(...L)=>{w(...L),T()}}const c=ye,l=w=>r===!0?w:Ht(w,r===!1?1:void 0);let u,f=!1,d=!1;if(_e(e)?(u=()=>e.value,f=Cr(e)):Un(e)?(u=()=>l(e),f=!0):W(e)?(d=!0,f=e.some(w=>Un(w)||Cr(w)),u=()=>e.map(w=>{if(_e(w))return w.value;if(Un(w))return l(w);if(X(w))return bt(w,c,2)})):X(e)?t?u=()=>bt(e,c,2):u=()=>(m&&m(),Ve(e,c,3,[v])):u=Me,t&&r){const w=u;u=()=>Ht(w())}let m,v=w=>{m=g.onStop=()=>{bt(w,c,4),m=g.onStop=void 0}},k;if(zr)if(v=Me,t?n&&Ve(t,c,3,[u(),d?[]:void 0,v]):u(),s==="sync"){const w=vu();k=w.__watcherHandles||(w.__watcherHandles=[])}else return Me;let U=d?new Array(e.length).fill(fs):fs;const D=()=>{if(!(!g.active||!g.dirty))if(t){const w=g.run();(r||f||(d?w.some((L,B)=>Xe(L,U[B])):Xe(w,U)))&&(m&&m(),Ve(t,c,3,[w,U===fs?void 0:d&&U[0]===fs?[]:U,v]),U=w)}else g.run()};D.allowRecurse=!!t;let E;s==="sync"?E=D:s==="post"?E=()=>we(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),E=()=>Qs(D));const g=new Jn(u,Me,E),y=bl(),T=()=>{g.stop(),y&&Co(y.effects,g)};return t?n?D():U=g.run():s==="post"?we(g.run.bind(g),c&&c.suspense):g.run(),k&&k.push(T),T}function Qp(e,t,n){const r=this.proxy,s=me(e)?e.includes(".")?Eu(r,e):()=>r[e]:e.bind(r,r);let i;X(t)?i=t:(i=t.handler,n=t);const o=mn(this),a=qr(s,i.bind(r),n);return o(),a}function Eu(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ht(e,t=1/0,n){if(t<=0||!fe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,_e(e))Ht(e.value,t,n);else if(W(e))for(let r=0;r<e.length;r++)Ht(e[r],t,n);else if(En(e)||Dn(e))e.forEach(r=>{Ht(r,t,n)});else if(pl(e)){for(const r in e)Ht(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Ht(e[r],t,n)}return e}const Gr=e=>e.type.__isKeepAlive,Zp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Rt(),r=n.ctx;if(!r.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:f}}}=r,d=f("div");r.activate=(E,g,y,T,w)=>{const L=E.component;l(E,g,y,0,a),c(L.vnode,E,g,y,L,a,T,E.slotScopeIds,w),we(()=>{L.isDeactivated=!1,L.a&&Fn(L.a);const B=E.props&&E.props.onVnodeMounted;B&&Le(B,L.parent,E)},a)},r.deactivate=E=>{const g=E.component;Ns(g.m),Ns(g.a),l(E,d,null,1,a),we(()=>{g.da&&Fn(g.da);const y=E.props&&E.props.onVnodeUnmounted;y&&Le(y,g.parent,E),g.isDeactivated=!0},a)};function m(E){Si(E),u(E,n,a,!0)}function v(E){s.forEach((g,y)=>{const T=ao(g.type);T&&(!E||!E(T))&&k(y)})}function k(E){const g=s.get(E);!o||!Ye(g,o)?m(g):o&&Si(o),s.delete(E),i.delete(E)}Kn(()=>[e.include,e.exclude],([E,g])=>{E&&v(y=>pr(E,y)),g&&v(y=>!pr(g,y))},{flush:"post",deep:!0});let U=null;const D=()=>{U!=null&&(zi(n.subTree.type)?we(()=>{s.set(U,ds(n.subTree))},n.subTree.suspense):s.set(U,ds(n.subTree)))};return ir(D),ni(D),ri(()=>{s.forEach(E=>{const{subTree:g,suspense:y}=n,T=ds(g);if(E.type===T.type&&E.key===T.key){Si(T);const w=T.component.da;w&&we(w,y);return}m(E)})}),()=>{if(U=null,!t.default)return null;const E=t.default(),g=E[0];if(E.length>1)return o=null,E;if(!Zt(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let y=ds(g);const T=y.type,w=ao(dn(y)?y.type.__asyncResolved||{}:T),{include:L,exclude:B,max:b}=e;if(L&&(!w||!pr(L,w))||B&&w&&pr(B,w))return o=y,g;const I=y.key==null?T:y.key,O=s.get(I);return y.el&&(y=lt(y),g.shapeFlag&128&&(g.ssContent=y)),U=I,O?(y.el=O.el,y.component=O.component,y.transition&&Qt(y,y.transition),y.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),b&&i.size>parseInt(b,10)&&k(i.values().next().value)),y.shapeFlag|=256,o=y,zi(g.type)?g:y}}},eg=Zp;function pr(e,t){return W(e)?e.some(n=>pr(n,t)):me(e)?e.split(",").includes(t):Jd(e)?e.test(t):!1}function Iu(e,t){Su(e,"a",t)}function Tu(e,t){Su(e,"da",t)}function Su(e,t,n=ye){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ti(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Gr(s.parent.vnode)&&tg(r,t,n,s),s=s.parent}}function tg(e,t,n,r){const s=ti(t,e,r,!0);si(()=>{Co(r[t],s)},n)}function Si(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function ds(e){return e.shapeFlag&128?e.ssContent:e}const Ut=Symbol("_leaveCb"),hs=Symbol("_enterCb");function Go(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ir(()=>{e.isMounted=!0}),ri(()=>{e.isUnmounting=!0}),e}const Ke=[Function,Array],zo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},Cu=e=>{const t=e.subTree;return t.component?Cu(t.component):t},ng={name:"BaseTransition",props:zo,setup(e,{slots:t}){const n=Rt(),r=Go();return()=>{const s=t.default&&ii(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const d of s)if(d.type!==Ie){i=d;break}}const o=re(e),{mode:a}=o;if(r.isLeaving)return Ci(i);const c=Wa(i);if(!c)return Ci(i);let l=Xn(c,o,r,n,d=>l=d);Qt(c,l);const u=n.subTree,f=u&&Wa(u);if(f&&f.type!==Ie&&!Ye(c,f)&&Cu(n).type!==Ie){const d=Xn(f,o,r,n);if(Qt(f,d),a==="out-in"&&c.type!==Ie)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ci(i);a==="in-out"&&c.type!==Ie&&(d.delayLeave=(m,v,k)=>{const U=Ru(r,f);U[String(f.key)]=f,m[Ut]=()=>{v(),m[Ut]=void 0,delete l.delayedLeave},l.delayedLeave=k})}return i}}},Au=ng;function Ru(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Xn(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:m,onAfterLeave:v,onLeaveCancelled:k,onBeforeAppear:U,onAppear:D,onAfterAppear:E,onAppearCancelled:g}=t,y=String(e.key),T=Ru(n,e),w=(b,I)=>{b&&Ve(b,r,9,I)},L=(b,I)=>{const O=I[1];w(b,I),W(b)?b.every(R=>R.length<=1)&&O():b.length<=1&&O()},B={mode:o,persisted:a,beforeEnter(b){let I=c;if(!n.isMounted)if(i)I=U||c;else return;b[Ut]&&b[Ut](!0);const O=T[y];O&&Ye(e,O)&&O.el[Ut]&&O.el[Ut](),w(I,[b])},enter(b){let I=l,O=u,R=f;if(!n.isMounted)if(i)I=D||l,O=E||u,R=g||f;else return;let j=!1;const ne=b[hs]=ie=>{j||(j=!0,ie?w(R,[b]):w(O,[b]),B.delayedLeave&&B.delayedLeave(),b[hs]=void 0)};I?L(I,[b,ne]):ne()},leave(b,I){const O=String(e.key);if(b[hs]&&b[hs](!0),n.isUnmounting)return I();w(d,[b]);let R=!1;const j=b[Ut]=ne=>{R||(R=!0,I(),ne?w(k,[b]):w(v,[b]),b[Ut]=void 0,T[O]===e&&delete T[O])};T[O]=e,m?L(m,[b,j]):j()},clone(b){const I=Xn(b,t,n,r,s);return s&&s(I),I}};return B}function Ci(e){if(Gr(e))return e=lt(e),e.children=null,e}function Wa(e){if(!Gr(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&X(n.default))return n.default()}}function Qt(e,t){e.shapeFlag&6&&e.component?Qt(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ii(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ee?(o.patchFlag&128&&s++,r=r.concat(ii(o.children,t,a))):(t||o.type!==Ie)&&r.push(a!=null?lt(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const rg=e=>e.__isTeleport,vr=e=>e&&(e.disabled||e.disabled===""),Ka=e=>typeof SVGElement<"u"&&e instanceof SVGElement,qa=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,to=(e,t)=>{const n=e&&e.to;return me(n)?t?t(n):null:n},sg={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,a,c,l){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:v,createText:k,createComment:U}}=l,D=vr(t.props);let{shapeFlag:E,children:g,dynamicChildren:y}=t;if(e==null){const T=t.el=k(""),w=t.anchor=k("");m(T,n,r),m(w,n,r);const L=t.target=to(t.props,v),B=t.targetAnchor=k("");L&&(m(B,L),o==="svg"||Ka(L)?o="svg":(o==="mathml"||qa(L))&&(o="mathml"));const b=(I,O)=>{E&16&&u(g,I,O,s,i,o,a,c)};D?b(n,w):L&&b(L,B)}else{t.el=e.el;const T=t.anchor=e.anchor,w=t.target=e.target,L=t.targetAnchor=e.targetAnchor,B=vr(e.props),b=B?n:w,I=B?T:L;if(o==="svg"||Ka(w)?o="svg":(o==="mathml"||qa(w))&&(o="mathml"),y?(d(e.dynamicChildren,y,b,s,i,o,a),qo(e,t,!0)):c||f(e,t,b,I,s,i,o,a,!1),D)B?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ps(t,n,T,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const O=t.target=to(t.props,v);O&&ps(t,O,null,l,0)}else B&&ps(t,w,L,l,1)}Pu(t)},remove(e,t,n,r,{um:s,o:{remove:i}},o){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&i(u),o&&i(l),a&16){const m=o||!vr(d);for(let v=0;v<c.length;v++){const k=c[v];s(k,t,n,m,!!k.dynamicChildren)}}},move:ps,hydrate:ig};function ps(e,t,n,{o:{insert:r},m:s},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:c,children:l,props:u}=e,f=i===2;if(f&&r(o,t,n),(!f||vr(u))&&c&16)for(let d=0;d<l.length;d++)s(l[d],t,n,2);f&&r(a,t,n)}function ig(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:c}},l){const u=t.target=to(t.props,c);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(vr(t.props))t.anchor=l(o(e),t,a(e),n,r,s,i),t.targetAnchor=f;else{t.anchor=o(e);let d=f;for(;d;)if(d=o(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,u._lpa=t.targetAnchor&&o(t.targetAnchor);break}l(f,t,u,n,r,s,i)}Pu(t)}return t.anchor&&o(t.anchor)}const og=sg;function Pu(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ee=Symbol.for("v-fgt"),pn=Symbol.for("v-txt"),Ie=Symbol.for("v-cmt"),hn=Symbol.for("v-stc"),br=[];let De=null;function Pe(e=!1){br.push(De=e?null:[])}function Ou(){br.pop(),De=br[br.length-1]||null}let gn=1;function no(e){gn+=e}function ku(e){return e.dynamicChildren=gn>0?De||Mn:null,Ou(),gn>0&&De&&De.push(e),e}function Tt(e,t,n,r,s,i){return ku(Y(e,t,n,r,s,i,!0))}function Qn(e,t,n,r,s){return ku(ce(e,t,n,r,s,!0))}function Zt(e){return e?e.__v_isVNode===!0:!1}function Ye(e,t){return e.type===t.type&&e.key===t.key}function ag(e){}const Nu=({key:e})=>e??null,ys=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?me(e)||_e(e)||X(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function Y(e,t=null,n=null,r=0,s=null,i=e===Ee?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Nu(t),ref:t&&ys(t),scopeId:ei,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return a?(Yo(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=me(n)?8:16),gn>0&&!o&&De&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&De.push(c),c}const ce=cg;function cg(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===ql)&&(e=Ie),Zt(e)){const a=lt(e,t,!0);return n&&Yo(a,n),gn>0&&!i&&De&&(a.shapeFlag&6?De[De.indexOf(e)]=a:De.push(a)),a.patchFlag=-2,a}if(gg(e)&&(e=e.__vccOpts),t){t=Lu(t);let{class:a,style:c}=t;a&&!me(a)&&(t.class=Vr(a)),fe(c)&&(Do(c)&&!W(c)&&(c=pe({},c)),t.style=Hr(c))}const o=me(e)?1:zi(e)?128:rg(e)?64:fe(e)?4:X(e)?2:0;return Y(e,t,n,r,s,o,i,!0)}function Lu(e){return e?Do(e)||au(e)?pe({},e):e:null}function lt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Mu(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Nu(l),ref:t&&t.ref?n&&i?W(i)?i.concat(ys(t)):[i,ys(t)]:ys(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lt(e.ssContent),ssFallback:e.ssFallback&&lt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Qt(u,c.clone(u)),u}function Zn(e=" ",t=0){return ce(pn,null,e,t)}function Jo(e,t){const n=ce(hn,null,e);return n.staticCount=t,n}function vs(e="",t=!1){return t?(Pe(),Qn(Ie,null,e)):ce(Ie,null,e)}function Be(e){return e==null||typeof e=="boolean"?ce(Ie):W(e)?ce(Ee,null,e.slice()):typeof e=="object"?$t(e):ce(pn,null,String(e))}function $t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:lt(e)}function Yo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Yo(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!au(t)?t._ctx=ve:s===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else X(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),r&64?(n=16,t=[Zn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Mu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=Vr([t.class,r.class]));else if(s==="style")t.style=Hr([t.style,r.style]);else if($r(s)){const i=t[s],o=r[s];o&&i!==o&&!(W(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Le(e,t,n,r=null){Ve(e,t,7,[n,r])}const lg=su();let ug=0;function Du(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||lg,i={uid:ug++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lu(r,s),emitsOptions:Wl(r,s),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ep.bind(null,i),e.ce&&e.ce(i),i}let ye=null;const Rt=()=>ye||ve;let Ls,ro;{const e=ml(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ls=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),ro=t("__VUE_SSR_SETTERS__",n=>zr=n)}const mn=e=>{const t=ye;return Ls(e),e.scope.on(),()=>{e.scope.off(),Ls(t)}},so=()=>{ye&&ye.scope.off(),Ls(null)};function xu(e){return e.vnode.shapeFlag&4}let zr=!1;function Fu(e,t=!1){t&&ro(t);const{props:n,children:r}=e.vnode,s=xu(e);Vp(e,n,s,t),Kp(e,r);const i=s?fg(e,t):void 0;return t&&ro(!1),i}function fg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xi);const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?$u(e):null,i=mn(e);tn();const o=bt(r,e,0,[e.props,s]);if(nn(),i(),Ao(o)){if(o.then(so,so),t)return o.then(a=>{io(e,a,t)}).catch(a=>{In(a,e,0)});e.asyncDep=o}else io(e,o,t)}else Uu(e,t)}function io(e,t,n){X(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=Uo(t)),Uu(e,n)}let Ms,oo;function dg(e){Ms=e,oo=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,bp))}}const hg=()=>!Ms;function Uu(e,t,n){const r=e.type;if(!e.render){if(!t&&Ms&&!r.render){const s=r.template||Wo(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=pe(pe({isCustomElement:i,delimiters:a},o),c);r.render=Ms(s,l)}}e.render=r.render||Me,oo&&oo(e)}{const s=mn(e);tn();try{Mp(e)}finally{nn(),s()}}}const pg={get(e,t){return Fe(e,"get",""),e[t]}};function $u(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,pg),slots:e.slots,emit:e.emit,expose:t}}function Jr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Uo(Ml(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in yr)return yr[n](e)},has(t,n){return n in t||n in yr}})):e.proxy}function ao(e,t=!0){return X(e)?e.displayName||e.name:e.name||t&&e.__name}function gg(e){return X(e)&&"__vccOpts"in e}const qe=(e,t)=>Dh(e,t,zr);function mg(e,t,n=ue){const r=Rt(),s=Oe(t),i=He(t),o=Ul((c,l)=>{let u;return wu(()=>{const f=e[t];Xe(u,f)&&(u=f,l())}),{get(){return c(),n.get?n.get(u):u},set(f){const d=r.vnode.props;!(d&&(t in d||s in d||i in d)&&(`onUpdate:${t}`in d||`onUpdate:${s}`in d||`onUpdate:${i}`in d))&&Xe(f,u)&&(u=f,l()),r.emit(`update:${t}`,n.set?n.set(f):f)}}}),a=t==="modelValue"?"modelModifiers":`${t}Modifiers`;return o[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?e[a]||{}:o,done:!1}:{done:!0}}}},o}function oi(e,t,n){const r=arguments.length;return r===2?fe(t)&&!W(t)?Zt(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Zt(n)&&(n=[n]),ce(e,t,n))}function _g(){}function yg(e,t,n,r){const s=n[r];if(s&&Bu(s,e))return s;const i=t();return i.memo=e.slice(),i.memoIndex=r,n[r]=i}function Bu(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let r=0;r<n.length;r++)if(Xe(n[r],t[r]))return!1;return gn>0&&De&&De.push(e),!0}const Hu="3.4.29",vg=Me,bg=Jh,wg=kn,Eg=jl,Ig={createComponentInstance:Du,setupComponent:Fu,renderComponentRoot:_s,setCurrentRenderingInstance:Or,isVNode:Zt,normalizeVNode:Be,getComponentPublicInstance:Jr},Tg=Ig,Sg=null,Cg=null,Ag=null;/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Rg="http://www.w3.org/2000/svg",Pg="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,Ga=pt&&pt.createElement("template"),Og={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?pt.createElementNS(Rg,e):t==="mathml"?pt.createElementNS(Pg,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ga.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=Ga.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Lt="transition",ur="animation",er=Symbol("_vtc"),ai=(e,{slots:t})=>oi(Au,ju(e),t);ai.displayName="Transition";const Vu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kg=ai.props=pe({},zo,Vu),on=(e,t=[])=>{W(e)?e.forEach(n=>n(...t)):e&&e(...t)},za=e=>e?W(e)?e.some(t=>t.length>1):e.length>1:!1;function ju(e){const t={};for(const R in e)R in Vu||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,v=Ng(s),k=v&&v[0],U=v&&v[1],{onBeforeEnter:D,onEnter:E,onEnterCancelled:g,onLeave:y,onLeaveCancelled:T,onBeforeAppear:w=D,onAppear:L=E,onAppearCancelled:B=g}=t,b=(R,j,ne)=>{xt(R,j?u:a),xt(R,j?l:o),ne&&ne()},I=(R,j)=>{R._isLeaving=!1,xt(R,f),xt(R,m),xt(R,d),j&&j()},O=R=>(j,ne)=>{const ie=R?L:E,K=()=>b(j,R,ne);on(ie,[j,K]),Ja(()=>{xt(j,R?c:i),ht(j,R?u:a),za(ie)||Ya(j,r,k,K)})};return pe(t,{onBeforeEnter(R){on(D,[R]),ht(R,i),ht(R,o)},onBeforeAppear(R){on(w,[R]),ht(R,c),ht(R,l)},onEnter:O(!1),onAppear:O(!0),onLeave(R,j){R._isLeaving=!0;const ne=()=>I(R,j);ht(R,f),ht(R,d),Ku(),Ja(()=>{R._isLeaving&&(xt(R,f),ht(R,m),za(y)||Ya(R,r,U,ne))}),on(y,[R,ne])},onEnterCancelled(R){b(R,!1),on(g,[R])},onAppearCancelled(R){b(R,!0),on(B,[R])},onLeaveCancelled(R){I(R),on(T,[R])}})}function Ng(e){if(e==null)return null;if(fe(e))return[Ai(e.enter),Ai(e.leave)];{const t=Ai(e);return[t,t]}}function Ai(e){return Cs(e)}function ht(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[er]||(e[er]=new Set)).add(t)}function xt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[er];n&&(n.delete(t),n.size||(e[er]=void 0))}function Ja(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Lg=0;function Ya(e,t,n,r){const s=e._endId=++Lg,i=()=>{s===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Wu(e,t);if(!o)return r();const l=o+"end";let u=0;const f=()=>{e.removeEventListener(l,d),i()},d=m=>{m.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},a+1),e.addEventListener(l,d)}function Wu(e,t){const n=window.getComputedStyle(e),r=v=>(n[v]||"").split(", "),s=r(`${Lt}Delay`),i=r(`${Lt}Duration`),o=Xa(s,i),a=r(`${ur}Delay`),c=r(`${ur}Duration`),l=Xa(a,c);let u=null,f=0,d=0;t===Lt?o>0&&(u=Lt,f=o,d=i.length):t===ur?l>0&&(u=ur,f=l,d=c.length):(f=Math.max(o,l),u=f>0?o>l?Lt:ur:null,d=u?u===Lt?i.length:c.length:0);const m=u===Lt&&/\b(transform|all)(,|$)/.test(r(`${Lt}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function Xa(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Qa(n)+Qa(e[r])))}function Qa(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ku(){return document.body.offsetHeight}function Mg(e,t,n){const r=e[er];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ds=Symbol("_vod"),qu=Symbol("_vsh"),Gu={beforeMount(e,{value:t},{transition:n}){e[Ds]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):fr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),fr(e,!0),r.enter(e)):r.leave(e,()=>{fr(e,!1)}):fr(e,t))},beforeUnmount(e,{value:t}){fr(e,t)}};function fr(e,t){e.style.display=t?e[Ds]:"none",e[qu]=!t}function Dg(){Gu.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const zu=Symbol("");function xg(e){const t=Rt();if(!t)return;const n=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i=>lo(i,s))},r=()=>{const s=e(t.proxy);co(t.subTree,s),n(s)};ir(()=>{bu(r);const s=new MutationObserver(r);s.observe(t.subTree.el.parentNode,{childList:!0}),si(()=>s.disconnect())})}function co(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{co(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)lo(e.el,t);else if(e.type===Ee)e.children.forEach(n=>co(n,t));else if(e.type===hn){let{el:n,anchor:r}=e;for(;n&&(lo(n,t),n!==r);)n=n.nextSibling}}function lo(e,t){if(e.nodeType===1){const n=e.style;let r="";for(const s in t)n.setProperty(`--${s}`,t[s]),r+=`--${s}: ${t[s]};`;n[zu]=r}}const Fg=/(^|;)\s*display\s*:/;function Ug(e,t,n){const r=e.style,s=me(n);let i=!1;if(n&&!s){if(t)if(me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bs(r,a,"")}else for(const o in t)n[o]==null&&bs(r,o,"");for(const o in n)o==="display"&&(i=!0),bs(r,o,n[o])}else if(s){if(t!==n){const o=r[zu];o&&(n+=";"+o),r.cssText=n,i=Fg.test(n)}}else t&&e.removeAttribute("style");Ds in e&&(e[Ds]=i?r.display:"",e[qu]&&(r.display="none"))}const Za=/\s*!important$/;function bs(e,t,n){if(W(n))n.forEach(r=>bs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$g(e,t);Za.test(n)?e.setProperty(He(r),n.replace(Za,""),"important"):e[r]=n}}const ec=["Webkit","Moz","ms"],Ri={};function $g(e,t){const n=Ri[t];if(n)return n;let r=Oe(t);if(r!=="filter"&&r in e)return Ri[t]=r;r=Br(r);for(let s=0;s<ec.length;s++){const i=ec[s]+r;if(i in e)return Ri[t]=i}return t}const tc="http://www.w3.org/1999/xlink";function nc(e,t,n,r,s,i=ah(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(tc,t.slice(6,t.length)):e.setAttributeNS(tc,t,n):n==null||i&&!_l(n)?e.removeAttribute(t):e.setAttribute(t,i?"":String(n))}function Bg(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=_l(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function gt(e,t,n,r){e.addEventListener(t,n,r)}function Hg(e,t,n,r){e.removeEventListener(t,n,r)}const rc=Symbol("_vei");function Vg(e,t,n,r,s=null){const i=e[rc]||(e[rc]={}),o=i[t];if(r&&o)o.value=r;else{const[a,c]=jg(t);if(r){const l=i[t]=qg(r,s);gt(e,a,l,c)}else o&&(Hg(e,a,o,c),i[t]=void 0)}}const sc=/(?:Once|Passive|Capture)$/;function jg(e){let t;if(sc.test(e)){t={};let r;for(;r=e.match(sc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):He(e.slice(2)),t]}let Pi=0;const Wg=Promise.resolve(),Kg=()=>Pi||(Wg.then(()=>Pi=0),Pi=Date.now());function qg(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(Gg(r,n.value),t,5,[r])};return n.value=e,n.attached=Kg(),n}function Gg(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const ic=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zg=(e,t,n,r,s,i,o,a,c)=>{const l=s==="svg";t==="class"?Mg(e,r,l):t==="style"?Ug(e,n,r):$r(t)?So(t)||Vg(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jg(e,t,r,l))?(Bg(e,t,r,i,o,a,c),(t==="value"||t==="checked"||t==="selected")&&nc(e,t,r,l,o,t!=="value")):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),nc(e,t,r,l))};function Jg(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ic(t)&&X(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ic(t)&&me(n)?!1:t in e}/*! #__NO_SIDE_EFFECTS__ */function Ju(e,t,n){const r=Kr(e,t);class s extends ci{constructor(o){super(r,o,n)}}return s.def=r,s}/*! #__NO_SIDE_EFFECTS__ */const Yg=(e,t)=>Ju(e,t,af),Xg=typeof HTMLElement<"u"?HTMLElement:class{};class ci extends Xg{constructor(t,n={},r){super(),this._def=t,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Wr(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),uo(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);this._ob=new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(r,s=!1)=>{const{props:i,styles:o}=r;let a;if(i&&!W(i))for(const c in i){const l=i[c];(l===Number||l&&l.type===Number)&&(c in this._props&&(this._props[c]=Cs(this._props[c])),(a||(a=Object.create(null)))[Oe(c)]=!0)}this._numberProps=a,s&&this._resolveProps(r),this._applyStyles(o),this._update()},n=this._def.__asyncLoader;n?n().then(r=>t(r,!0)):t(this._def)}_resolveProps(t){const{props:n}=t,r=W(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(Oe))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(i){this._setProp(s,i)}})}_setAttr(t){let n=this.hasAttribute(t)?this.getAttribute(t):void 0;const r=Oe(t);this._numberProps&&this._numberProps[r]&&(n=Cs(n)),this._setProp(r,n,!1)}_getProp(t){return this._props[t]}_setProp(t,n,r=!0,s=!0){n!==this._props[t]&&(this._props[t]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(He(t),""):typeof n=="string"||typeof n=="number"?this.setAttribute(He(t),n+""):n||this.removeAttribute(He(t))))}_update(){uo(this._createVNode(),this.shadowRoot)}_createVNode(){const t=ce(this._def,pe({},this._props));return this._instance||(t.ce=n=>{this._instance=n,n.isCE=!0;const r=(i,o)=>{this.dispatchEvent(new CustomEvent(i,{detail:o}))};n.emit=(i,...o)=>{r(i,o),He(i)!==i&&r(He(i),o)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof ci){n.parent=s._instance,n.provides=s._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}function Qg(e="$style"){{const t=Rt();if(!t)return ue;const n=t.type.__cssModules;if(!n)return ue;const r=n[e];return r||ue}}const Yu=new WeakMap,Xu=new WeakMap,xs=Symbol("_moveCb"),oc=Symbol("_enterCb"),Qu={name:"TransitionGroup",props:pe({},kg,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Rt(),r=Go();let s,i;return ni(()=>{if(!s.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!sm(s[0].el,n.vnode.el,o))return;s.forEach(tm),s.forEach(nm);const a=s.filter(rm);Ku(),a.forEach(c=>{const l=c.el,u=l.style;ht(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=l[xs]=d=>{d&&d.target!==l||(!d||/transform$/.test(d.propertyName))&&(l.removeEventListener("transitionend",f),l[xs]=null,xt(l,o))};l.addEventListener("transitionend",f)})}),()=>{const o=re(e),a=ju(o);let c=o.tag||Ee;if(s=[],i)for(let l=0;l<i.length;l++){const u=i[l];u.el&&u.el instanceof Element&&(s.push(u),Qt(u,Xn(u,a,r,n)),Yu.set(u,u.el.getBoundingClientRect()))}i=t.default?ii(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&Qt(u,Xn(u,a,r,n))}return ce(c,null,i)}}},Zg=e=>delete e.mode;Qu.props;const em=Qu;function tm(e){const t=e.el;t[xs]&&t[xs](),t[oc]&&t[oc]()}function nm(e){Xu.set(e,e.el.getBoundingClientRect())}function rm(e){const t=Yu.get(e),n=Xu.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",e}}function sm(e,t,n){const r=e.cloneNode(),s=e[er];s&&s.forEach(a=>{a.split(/\s+/).forEach(c=>c&&r.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=Wu(r);return i.removeChild(r),o}const en=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>Fn(t,n):t};function im(e){e.target.composing=!0}function ac(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ge=Symbol("_assign"),wt={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Ge]=en(s);const i=r||s.props&&s.props.type==="number";gt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Ss(a)),e[Ge](a)}),n&&gt(e,"change",()=>{e.value=e.value.trim()}),t||(gt(e,"compositionstart",im),gt(e,"compositionend",ac),gt(e,"change",ac))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[Ge]=en(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Ss(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===c)||(e.value=c))}},Xo={deep:!0,created(e,t,n){e[Ge]=en(n),gt(e,"change",()=>{const r=e._modelValue,s=tr(e),i=e.checked,o=e[Ge];if(W(r)){const a=zs(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(En(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(ef(e,i))})},mounted:cc,beforeUpdate(e,t,n){e[Ge]=en(n),cc(e,t,n)}};function cc(e,{value:t,oldValue:n},r){e._modelValue=t,W(t)?e.checked=zs(t,r.props.value)>-1:En(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Xt(t,ef(e,!0)))}const Qo={created(e,{value:t},n){e.checked=Xt(t,n.props.value),e[Ge]=en(n),gt(e,"change",()=>{e[Ge](tr(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[Ge]=en(r),t!==n&&(e.checked=Xt(t,r.props.value))}},Zu={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=En(t);gt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Ss(tr(o)):tr(o));e[Ge](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,Wr(()=>{e._assigning=!1})}),e[Ge]=en(r)},mounted(e,{value:t,modifiers:{number:n}}){lc(e,t)},beforeUpdate(e,t,n){e[Ge]=en(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||lc(e,t)}};function lc(e,t,n){const r=e.multiple,s=W(t);if(!(r&&!s&&!En(t))){for(let i=0,o=e.options.length;i<o;i++){const a=e.options[i],c=tr(a);if(r)if(s){const l=typeof c;l==="string"||l==="number"?a.selected=t.some(u=>String(u)===String(c)):a.selected=zs(t,c)>-1}else a.selected=t.has(c);else if(Xt(tr(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function tr(e){return"_value"in e?e._value:e.value}function ef(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const tf={created(e,t,n){gs(e,t,n,null,"created")},mounted(e,t,n){gs(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){gs(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){gs(e,t,n,r,"updated")}};function nf(e,t){switch(e){case"SELECT":return Zu;case"TEXTAREA":return wt;default:switch(t){case"checkbox":return Xo;case"radio":return Qo;default:return wt}}}function gs(e,t,n,r,s){const o=nf(e.tagName,n.props&&n.props.type)[s];o&&o(e,t,n,r)}function om(){wt.getSSRProps=({value:e})=>({value:e}),Qo.getSSRProps=({value:e},t)=>{if(t.props&&Xt(t.props.value,e))return{checked:!0}},Xo.getSSRProps=({value:e},t)=>{if(W(e)){if(t.props&&zs(e,t.props.value)>-1)return{checked:!0}}else if(En(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},tf.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const n=nf(t.type.toUpperCase(),t.props&&t.props.type);if(n.getSSRProps)return n.getSSRProps(e,t)}}const am=["ctrl","shift","alt","meta"],cm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>am.some(n=>e[`${n}Key`]&&!t.includes(n))},lm=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<t.length;o++){const a=cm[t[o]];if(a&&a(s,t))return}return e(s,...i)})},um={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Zo=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=He(s.key);if(t.some(o=>o===i||um[o]===i))return e(s)})},rf=pe({patchProp:zg},Og);let wr,uc=!1;function sf(){return wr||(wr=hu(rf))}function of(){return wr=uc?wr:pu(rf),uc=!0,wr}const uo=(...e)=>{sf().render(...e)},af=(...e)=>{of().hydrate(...e)},cf=(...e)=>{const t=sf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=uf(r);if(!s)return;const i=t._component;!X(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,lf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t},fm=(...e)=>{const t=of().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=uf(r);if(s)return n(s,!0,lf(s))},t};function lf(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function uf(e){return me(e)?document.querySelector(e):e}let fc=!1;const dm=()=>{fc||(fc=!0,om(),Dg())};/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const hm=()=>{},pm=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:Au,BaseTransitionPropsValidators:zo,Comment:Ie,DeprecationTypes:Ag,EffectScope:Po,ErrorCodes:zh,ErrorTypeStrings:bg,Fragment:Ee,KeepAlive:eg,ReactiveEffect:Jn,Static:hn,Suspense:lp,Teleport:og,Text:pn,TrackOpTypes:Kh,Transition:ai,TransitionGroup:em,TriggerOpTypes:qh,VueElement:ci,assertNumber:Gh,callWithAsyncErrorHandling:Ve,callWithErrorHandling:bt,camelize:Oe,capitalize:Br,cloneVNode:lt,compatUtils:Cg,compile:hm,computed:qe,createApp:cf,createBlock:Qn,createCommentVNode:vs,createElementBlock:Tt,createElementVNode:Y,createHydrationRenderer:pu,createPropsRestProxy:Np,createRenderer:hu,createSSRApp:fm,createSlots:mp,createStaticVNode:Jo,createTextVNode:Zn,createVNode:ce,customRef:Ul,defineAsyncComponent:_p,defineComponent:Kr,defineCustomElement:Ju,defineEmits:Ep,defineExpose:Ip,defineModel:Cp,defineOptions:Tp,defineProps:wp,defineSSRCustomElement:Yg,defineSlots:Sp,devtools:wg,effect:hh,effectScope:uh,getCurrentInstance:Rt,getCurrentScope:bl,getTransitionRawChildren:ii,guardReactiveProps:Lu,h:oi,handleError:In,hasInjectionContext:Hp,hydrate:af,initCustomFormatter:_g,initDirectivesForSSR:dm,inject:je,isMemoSame:Bu,isProxy:Do,isReactive:Un,isReadonly:Yn,isRef:_e,isRuntimeOnly:hg,isShallow:Cr,isVNode:Zt,markRaw:Ml,mergeDefaults:Op,mergeModels:kp,mergeProps:Mu,nextTick:Wr,normalizeClass:Vr,normalizeProps:ih,normalizeStyle:Hr,onActivated:Iu,onBeforeMount:Jl,onBeforeUnmount:ri,onBeforeUpdate:Yl,onDeactivated:Tu,onErrorCaptured:eu,onMounted:ir,onRenderTracked:Zl,onRenderTriggered:Ql,onScopeDispose:fh,onServerPrefetch:Xl,onUnmounted:si,onUpdated:ni,openBlock:Pe,popScopeId:Sn,provide:Wn,proxyRefs:Uo,pushScopeId:Tn,queuePostFlushCb:Rs,reactive:jr,readonly:Mo,ref:Gt,registerRuntimeCompiler:dg,render:uo,renderList:gp,renderSlot:yp,resolveComponent:Kl,resolveDirective:ap,resolveDynamicComponent:Gl,resolveFilter:Sg,resolveTransitionHooks:Xn,setBlockTracking:no,setDevtoolsHook:Eg,setTransitionHooks:Qt,shallowReactive:Lo,shallowReadonly:Mh,shallowRef:xl,ssrContextKey:yu,ssrUtils:Tg,stop:ph,toDisplayString:lh,toHandlerKey:_r,toHandlers:vp,toRaw:re,toRef:Wh,toRefs:Hh,toValue:Uh,transformVNodeArgs:ag,triggerRef:Fh,unref:ke,useAttrs:Pp,useCssModule:Qg,useCssVars:xg,useModel:mg,useSSRContext:vu,useSlots:Rp,useTransitionState:Go,vModelCheckbox:Xo,vModelDynamic:tf,vModelRadio:Qo,vModelSelect:Zu,vModelText:wt,vShow:Gu,version:Hu,warn:vg,watch:Kn,watchEffect:Xp,watchPostEffect:bu,watchSyncEffect:wu,withAsyncContext:Lp,withCtx:zt,withDefaults:Ap,withDirectives:Vn,withKeys:Zo,withMemo:yg,withModifiers:lm,withScopeId:tp},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Nn=typeof document<"u";function gm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const le=Object.assign;function Oi(e,t){const n={};for(const r in t){const s=t[r];n[r]=Qe(s)?s.map(e):e(s)}return n}const Er=()=>{},Qe=Array.isArray,ff=/#/g,mm=/&/g,_m=/\//g,ym=/=/g,vm=/\?/g,df=/\+/g,bm=/%5B/g,wm=/%5D/g,hf=/%5E/g,Em=/%60/g,pf=/%7B/g,Im=/%7C/g,gf=/%7D/g,Tm=/%20/g;function ea(e){return encodeURI(""+e).replace(Im,"|").replace(bm,"[").replace(wm,"]")}function Sm(e){return ea(e).replace(pf,"{").replace(gf,"}").replace(hf,"^")}function fo(e){return ea(e).replace(df,"%2B").replace(Tm,"+").replace(ff,"%23").replace(mm,"%26").replace(Em,"`").replace(pf,"{").replace(gf,"}").replace(hf,"^")}function Cm(e){return fo(e).replace(ym,"%3D")}function Am(e){return ea(e).replace(ff,"%23").replace(vm,"%3F")}function Rm(e){return e==null?"":Am(e).replace(_m,"%2F")}function Lr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pm=/\/$/,Om=e=>e.replace(Pm,"");function ki(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),s=e(i)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=Mm(r??t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Lr(o)}}function km(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function dc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Nm(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nr(t.matched[r],n.matched[s])&&mf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Lm(e[n],t[n]))return!1;return!0}function Lm(e,t){return Qe(e)?hc(e,t):Qe(t)?hc(t,e):e===t}function hc(e,t){return Qe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Mm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Mr;(function(e){e.pop="pop",e.push="push"})(Mr||(Mr={}));var Ir;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ir||(Ir={}));function Dm(e){if(!e)if(Nn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Om(e)}const xm=/^[^#]+#/;function Fm(e,t){return e.replace(xm,"#")+t}function Um(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const li=()=>({left:window.scrollX,top:window.scrollY});function $m(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Um(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function pc(e,t){return(history.state?history.state.position-t:-1)+e}const ho=new Map;function Bm(e,t){ho.set(e,t)}function Hm(e){const t=ho.get(e);return ho.delete(e),t}let Vm=()=>location.protocol+"//"+location.host;function _f(e,t){const{pathname:n,search:r,hash:s}=t,i=e.indexOf("#");if(i>-1){let a=s.includes(e.slice(i))?e.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),dc(c,"")}return dc(n,e)+r+s}function jm(e,t,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const m=_f(e,location),v=n.value,k=t.value;let U=0;if(d){if(n.value=m,t.value=d,o&&o===v){o=null;return}U=k?d.position-k.position:0}else r(m);s.forEach(D=>{D(n.value,v,{delta:U,type:Mr.pop,direction:U?U>0?Ir.forward:Ir.back:Ir.unknown})})};function c(){o=n.value}function l(d){s.push(d);const m=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(le({},d.state,{scroll:li()}),"")}function f(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function gc(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?li():null}}function Wm(e){const{history:t,location:n}=window,r={value:_f(e,n)},s={value:t.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Vm()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function o(c,l){const u=le({},t.state,gc(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=le({},s.value,t.state,{forward:c,scroll:li()});i(u.current,u,!0);const f=le({},gc(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Km(e){e=Dm(e);const t=Wm(e),n=jm(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=le({location:"",base:e,go:r,createHref:Fm.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function qm(e){return typeof e=="string"||e&&typeof e=="object"}function yf(e){return typeof e=="string"||typeof e=="symbol"}const Mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},vf=Symbol("");var mc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(mc||(mc={}));function rr(e,t){return le(new Error,{type:e,[vf]:!0},t)}function dt(e,t){return e instanceof Error&&vf in e&&(t==null||!!(e.type&t))}const _c="[^/]+?",Gm={sensitive:!1,strict:!1,start:!0,end:!0},zm=/[.+*?^${}()[\]/\\]/g;function Jm(e,t){const n=le({},Gm,t),r=[];let s=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(s+="/"),s+=d.value.replace(zm,"\\$&"),m+=40;else if(d.type===1){const{value:v,repeatable:k,optional:U,regexp:D}=d;i.push({name:v,repeatable:k,optional:U});const E=D||_c;if(E!==_c){m+=10;try{new RegExp(`(${E})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+y.message)}}let g=k?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(g=U&&l.length<2?`(?:/${g})`:"/"+g),U&&(g+="?"),s+=g,m+=20,U&&(m+=-8),k&&(m+=-20),E===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",v=i[d-1];f[v.name]=m&&v.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:k,optional:U}=m,D=v in l?l[v]:"";if(Qe(D)&&!k)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=Qe(D)?D.join("/"):D;if(!E)if(U)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=E}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Ym(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function bf(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const i=Ym(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(yc(r))return 1;if(yc(s))return-1}return s.length-r.length}function yc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Xm={type:0,value:""},Qm=/[a-zA-Z0-9_]/;function Zm(e){if(!e)return[[]];if(e==="/")return[[Xm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Qm.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function e_(e,t,n){const r=Jm(Zm(e.path),n),s=le(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function t_(e,t){const n=[],r=new Map;t=wc({strict:!1,end:!0,sensitive:!1},t);function s(u){return r.get(u)}function i(u,f,d){const m=!d,v=n_(u);v.aliasOf=d&&d.record;const k=wc(t,u),U=[v];if("alias"in u){const g=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of g)U.push(le({},v,{components:d?d.record.components:v.components,path:y,aliasOf:d?d.record:v}))}let D,E;for(const g of U){const{path:y}=g;if(f&&y[0]!=="/"){const T=f.record.path,w=T[T.length-1]==="/"?"":"/";g.path=f.record.path+(y&&w+y)}if(D=e_(g,f,k),d?d.alias.push(D):(E=E||D,E!==D&&E.alias.push(D),m&&u.name&&!bc(D)&&o(u.name)),wf(D)&&c(D),v.children){const T=v.children;for(let w=0;w<T.length;w++)i(T[w],D,d&&d.children[w])}d=d||D}return E?()=>{o(E)}:Er}function o(u){if(yf(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){const f=i_(u,n);n.splice(f,0,u),u.record.name&&!bc(u)&&r.set(u.record.name,u)}function l(u,f){let d,m={},v,k;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw rr(1,{location:u});k=d.record.name,m=le(vc(f.params,d.keys.filter(E=>!E.optional).concat(d.parent?d.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),u.params&&vc(u.params,d.keys.map(E=>E.name))),v=d.stringify(m)}else if(u.path!=null)v=u.path,d=n.find(E=>E.re.test(v)),d&&(m=d.parse(v),k=d.record.name);else{if(d=f.name?r.get(f.name):n.find(E=>E.re.test(f.path)),!d)throw rr(1,{location:u,currentLocation:f});k=d.record.name,m=le({},f.params,u.params),v=d.stringify(m)}const U=[];let D=d;for(;D;)U.unshift(D.record),D=D.parent;return{name:k,path:v,params:m,matched:U,meta:s_(U)}}return e.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function vc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function n_(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:r_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function r_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function bc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function s_(e){return e.reduce((t,n)=>le(t,n.meta),{})}function wc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function i_(e,t){let n=0,r=t.length;for(;n!==r;){const i=n+r>>1;bf(e,t[i])<0?r=i:n=i+1}const s=o_(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function o_(e){let t=e;for(;t=t.parent;)if(wf(t)&&bf(e,t)===0)return t}function wf({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function a_(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(df," "),o=i.indexOf("="),a=Lr(o<0?i:i.slice(0,o)),c=o<0?null:Lr(i.slice(o+1));if(a in t){let l=t[a];Qe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Ec(e){let t="";for(let n in e){const r=e[n];if(n=Cm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Qe(r)?r.map(i=>i&&fo(i)):[r&&fo(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function c_(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const l_=Symbol(""),Ic=Symbol(""),ui=Symbol(""),ta=Symbol(""),po=Symbol("");function dr(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Bt(e,t,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(rr(4,{from:n,to:t})):d instanceof Error?c(d):qm(d)?c(rr(2,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>e.call(r&&r.instances[s],t,n,l));let f=Promise.resolve(u);e.length<3&&(f=f.then(l)),f.catch(d=>c(d))})}function Ni(e,t,n,r,s=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(u_(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Bt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=gm(u)?u.default:u;o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&Bt(m,n,r,o,a,s)()}))}}return i}function u_(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tc(e){const t=je(ui),n=je(ta),r=qe(()=>{const c=ke(e.to);return t.resolve(c)}),s=qe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(nr.bind(null,u));if(d>-1)return d;const m=Sc(c[l-2]);return l>1&&Sc(u)===m&&f[f.length-1].path!==m?f.findIndex(nr.bind(null,c[l-2])):d}),i=qe(()=>s.value>-1&&p_(n.params,r.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&mf(n.params,r.value.params));function a(c={}){return h_(c)?t[ke(e.replace)?"replace":"push"](ke(e.to)).catch(Er):Promise.resolve()}return{route:r,href:qe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const f_=Kr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tc,setup(e,{slots:t}){const n=jr(Tc(e)),{options:r}=je(ui),s=qe(()=>({[Cc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Cc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:oi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),d_=f_;function h_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function p_(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Sc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Cc=(e,t,n)=>e??t??n,g_=Kr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=je(po),s=qe(()=>e.route||r.value),i=je(Ic,0),o=qe(()=>{let l=ke(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=qe(()=>s.value.matched[o.value]);Wn(Ic,qe(()=>o.value+1)),Wn(l_,a),Wn(po,s);const c=Gt();return Kn(()=>[c.value,a.value,e.name],([l,u,f],[d,m,v])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!nr(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=s.value,u=e.name,f=a.value,d=f&&f.components[u];if(!d)return Ac(n.default,{Component:d,route:l});const m=f.props[u],v=m?m===!0?l.params:typeof m=="function"?m(l):m:null,U=oi(d,le({},v,t,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Ac(n.default,{Component:U,route:l})||U}}});function Ac(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ef=g_;function m_(e){const t=t_(e.routes,e),n=e.parseQuery||a_,r=e.stringifyQuery||Ec,s=e.history,i=dr(),o=dr(),a=dr(),c=xl(Mt);let l=Mt;Nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oi.bind(null,C=>""+C),f=Oi.bind(null,Rm),d=Oi.bind(null,Lr);function m(C,H){let $,q;return yf(C)?($=t.getRecordMatcher(C),q=H):q=C,t.addRoute(q,$)}function v(C){const H=t.getRecordMatcher(C);H&&t.removeRoute(H)}function k(){return t.getRoutes().map(C=>C.record)}function U(C){return!!t.getRecordMatcher(C)}function D(C,H){if(H=le({},H||c.value),typeof C=="string"){const p=ki(n,C,H.path),_=t.resolve({path:p.path},H),A=s.createHref(p.fullPath);return le(p,_,{params:d(_.params),hash:Lr(p.hash),redirectedFrom:void 0,href:A})}let $;if(C.path!=null)$=le({},C,{path:ki(n,C.path,H.path).path});else{const p=le({},C.params);for(const _ in p)p[_]==null&&delete p[_];$=le({},C,{params:f(p)}),H.params=f(H.params)}const q=t.resolve($,H),oe=C.hash||"";q.params=u(d(q.params));const ge=km(r,le({},C,{hash:Sm(oe),path:q.path})),h=s.createHref(ge);return le({fullPath:ge,hash:oe,query:r===Ec?c_(C.query):C.query||{}},q,{redirectedFrom:void 0,href:h})}function E(C){return typeof C=="string"?ki(n,C,c.value.path):le({},C)}function g(C,H){if(l!==C)return rr(8,{from:H,to:C})}function y(C){return L(C)}function T(C){return y(le(E(C),{replace:!0}))}function w(C){const H=C.matched[C.matched.length-1];if(H&&H.redirect){const{redirect:$}=H;let q=typeof $=="function"?$(C):$;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=E(q):{path:q},q.params={}),le({query:C.query,hash:C.hash,params:q.path!=null?{}:C.params},q)}}function L(C,H){const $=l=D(C),q=c.value,oe=C.state,ge=C.force,h=C.replace===!0,p=w($);if(p)return L(le(E(p),{state:typeof p=="object"?le({},oe,p.state):oe,force:ge,replace:h}),H||$);const _=$;_.redirectedFrom=H;let A;return!ge&&Nm(r,q,$)&&(A=rr(16,{to:_,from:q}),tt(q,q,!0,!1)),(A?Promise.resolve(A):I(_,q)).catch(S=>dt(S)?dt(S,2)?S:kt(S):G(S,_,q)).then(S=>{if(S){if(dt(S,2))return L(le({replace:h},E(S.to),{state:typeof S.to=="object"?le({},oe,S.to.state):oe,force:ge}),H||_)}else S=R(_,q,!0,h,oe);return O(_,q,S),S})}function B(C,H){const $=g(C,H);return $?Promise.reject($):Promise.resolve()}function b(C){const H=Rn.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(C):C()}function I(C,H){let $;const[q,oe,ge]=__(C,H);$=Ni(q.reverse(),"beforeRouteLeave",C,H);for(const p of q)p.leaveGuards.forEach(_=>{$.push(Bt(_,C,H))});const h=B.bind(null,C,H);return $.push(h),Te($).then(()=>{$=[];for(const p of i.list())$.push(Bt(p,C,H));return $.push(h),Te($)}).then(()=>{$=Ni(oe,"beforeRouteUpdate",C,H);for(const p of oe)p.updateGuards.forEach(_=>{$.push(Bt(_,C,H))});return $.push(h),Te($)}).then(()=>{$=[];for(const p of ge)if(p.beforeEnter)if(Qe(p.beforeEnter))for(const _ of p.beforeEnter)$.push(Bt(_,C,H));else $.push(Bt(p.beforeEnter,C,H));return $.push(h),Te($)}).then(()=>(C.matched.forEach(p=>p.enterCallbacks={}),$=Ni(ge,"beforeRouteEnter",C,H,b),$.push(h),Te($))).then(()=>{$=[];for(const p of o.list())$.push(Bt(p,C,H));return $.push(h),Te($)}).catch(p=>dt(p,8)?p:Promise.reject(p))}function O(C,H,$){a.list().forEach(q=>b(()=>q(C,H,$)))}function R(C,H,$,q,oe){const ge=g(C,H);if(ge)return ge;const h=H===Mt,p=Nn?history.state:{};$&&(q||h?s.replace(C.fullPath,le({scroll:h&&p&&p.scroll},oe)):s.push(C.fullPath,oe)),c.value=C,tt(C,H,$,h),kt()}let j;function ne(){j||(j=s.listen((C,H,$)=>{if(!ns.listening)return;const q=D(C),oe=w(q);if(oe){L(le(oe,{replace:!0}),q).catch(Er);return}l=q;const ge=c.value;Nn&&Bm(pc(ge.fullPath,$.delta),li()),I(q,ge).catch(h=>dt(h,12)?h:dt(h,2)?(L(h.to,q).then(p=>{dt(p,20)&&!$.delta&&$.type===Mr.pop&&s.go(-1,!1)}).catch(Er),Promise.reject()):($.delta&&s.go(-$.delta,!1),G(h,q,ge))).then(h=>{h=h||R(q,ge,!1),h&&($.delta&&!dt(h,8)?s.go(-$.delta,!1):$.type===Mr.pop&&dt(h,20)&&s.go(-1,!1)),O(q,ge,h)}).catch(Er)}))}let ie=dr(),K=dr(),Z;function G(C,H,$){kt(C);const q=K.list();return q.length?q.forEach(oe=>oe(C,H,$)):console.error(C),Promise.reject(C)}function ze(){return Z&&c.value!==Mt?Promise.resolve():new Promise((C,H)=>{ie.add([C,H])})}function kt(C){return Z||(Z=!C,ne(),ie.list().forEach(([H,$])=>C?$(C):H()),ie.reset()),C}function tt(C,H,$,q){const{scrollBehavior:oe}=e;if(!Nn||!oe)return Promise.resolve();const ge=!$&&Hm(pc(C.fullPath,0))||(q||!$)&&history.state&&history.state.scroll||null;return Wr().then(()=>oe(C,H,ge)).then(h=>h&&$m(h)).catch(h=>G(h,C,H))}const Ne=C=>s.go(C);let An;const Rn=new Set,ns={currentRoute:c,listening:!0,addRoute:m,removeRoute:v,hasRoute:U,getRoutes:k,resolve:D,options:e,push:y,replace:T,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:K.add,isReady:ze,install(C){const H=this;C.component("RouterLink",d_),C.component("RouterView",Ef),C.config.globalProperties.$router=H,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(c)}),Nn&&!An&&c.value===Mt&&(An=!0,y(s.location).catch(oe=>{}));const $={};for(const oe in Mt)Object.defineProperty($,oe,{get:()=>c.value[oe],enumerable:!0});C.provide(ui,H),C.provide(ta,Lo($)),C.provide(po,c);const q=C.unmount;Rn.add(C),C.unmount=function(){Rn.delete(C),Rn.size<1&&(l=Mt,j&&j(),j=null,c.value=Mt,An=!1,Z=!1),q()}}};function Te(C){return C.reduce((H,$)=>H.then(()=>b($)),Promise.resolve())}return ns}function __(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>nr(l,a))?r.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>nr(l,c))||s.push(c))}return[n,r,s]}function fi(){return je(ui)}function If(){return je(ta)}var Rc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},y_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Tf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):y_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new v_;const d=i<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const v=l<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class v_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const b_=function(e){const t=Tf(e);return Sf.encodeByteArray(t,!0)},Cf=function(e){return b_(e).replace(/\./g,"")},Af=function(e){try{return Sf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function w_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const E_=()=>w_().__FIREBASE_DEFAULTS__,I_=()=>{if(typeof process>"u"||typeof Rc>"u")return;const e=Rc.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},T_=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Af(e[1]);return t&&JSON.parse(t)},na=()=>{try{return E_()||I_()||T_()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},S_=e=>{var t,n;return(n=(t=na())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Rf=()=>{var e;return(e=na())===null||e===void 0?void 0:e.config},Pf=e=>{var t;return(t=na())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function A_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Of(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function R_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P_(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function kf(){try{return typeof indexedDB=="object"}catch{return!1}}function Nf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function O_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="FirebaseError";class ft extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=k_,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cn.prototype.create)}}class Cn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?N_(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ft(s,a,r)}}function N_(e,t){return e.replace(L_,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const L_=/\{\$([^}]+)}/g;function M_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Dr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(Pc(i)&&Pc(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Pc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function gr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(i)}}),t}function mr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function D_(e,t){const n=new x_(e,t);return n.subscribe.bind(n)}class x_{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let s;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");F_(t,["next","error","complete"])?s=t:s={next:t,error:n,complete:r},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F_(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Li(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=1e3,$_=2,B_=4*60*60*1e3,H_=.5;function Oc(e,t=U_,n=$_){const r=t*Math.pow(n,e),s=Math.round(H_*r*(Math.random()-.5)*2);return Math.min(B_,r+s)}/**
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
 */function et(e){return e&&e._delegate?e._delegate:e}class ut{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new C_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(W_(t))try{this.getOrInitializeService({instanceIdentifier:an})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=an){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=an){return this.instances.has(t)}getOptions(t=an){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:j_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=an){return this.component?this.component.multipleInstances?t:an:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function j_(e){return e===an?void 0:e}function W_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new V_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(de||(de={}));const q_={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},G_=de.INFO,z_={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},J_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=z_[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ra{constructor(t){this.name=t,this._logLevel=G_,this._logHandler=J_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in de))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?q_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...t),this._logHandler(this,de.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...t),this._logHandler(this,de.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,de.INFO,...t),this._logHandler(this,de.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,de.WARN,...t),this._logHandler(this,de.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...t),this._logHandler(this,de.ERROR,...t)}}const Y_=(e,t)=>t.some(n=>e instanceof n);let kc,Nc;function X_(){return kc||(kc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q_(){return Nc||(Nc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lf=new WeakMap,go=new WeakMap,Mf=new WeakMap,Mi=new WeakMap,sa=new WeakMap;function Z_(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Jt(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Lf.set(n,e)}).catch(()=>{}),sa.set(t,e),t}function ey(e){if(go.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});go.set(e,t)}let mo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return go.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Mf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ty(e){mo=e(mo)}function ny(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Di(this),t,...n);return Mf.set(r,t.sort?t.sort():[t]),Jt(r)}:Q_().includes(e)?function(...t){return e.apply(Di(this),t),Jt(Lf.get(this))}:function(...t){return Jt(e.apply(Di(this),t))}}function ry(e){return typeof e=="function"?ny(e):(e instanceof IDBTransaction&&ey(e),Y_(e,X_())?new Proxy(e,mo):e)}function Jt(e){if(e instanceof IDBRequest)return Z_(e);if(Mi.has(e))return Mi.get(e);const t=ry(e);return t!==e&&(Mi.set(e,t),sa.set(t,e)),t}const Di=e=>sa.get(e);function Df(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Jt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Jt(o.result),c.oldVersion,c.newVersion,Jt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const sy=["get","getKey","getAll","getAllKeys","count"],iy=["put","add","delete","clear"],xi=new Map;function Lc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(xi.get(t))return xi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=iy.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sy.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return xi.set(t,i),i}ty(e=>({...e,get:(t,n,r)=>Lc(t,n)||e.get(t,n,r),has:(t,n)=>!!Lc(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ay(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ay(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _o="@firebase/app",Mc="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new ra("@firebase/app"),cy="@firebase/app-compat",ly="@firebase/analytics-compat",uy="@firebase/analytics",fy="@firebase/app-check-compat",dy="@firebase/app-check",hy="@firebase/auth",py="@firebase/auth-compat",gy="@firebase/database",my="@firebase/database-compat",_y="@firebase/functions",yy="@firebase/functions-compat",vy="@firebase/installations",by="@firebase/installations-compat",wy="@firebase/messaging",Ey="@firebase/messaging-compat",Iy="@firebase/performance",Ty="@firebase/performance-compat",Sy="@firebase/remote-config",Cy="@firebase/remote-config-compat",Ay="@firebase/storage",Ry="@firebase/storage-compat",Py="@firebase/firestore",Oy="@firebase/vertexai-preview",ky="@firebase/firestore-compat",Ny="firebase",Ly="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo="[DEFAULT]",My={[_o]:"fire-core",[cy]:"fire-core-compat",[uy]:"fire-analytics",[ly]:"fire-analytics-compat",[dy]:"fire-app-check",[fy]:"fire-app-check-compat",[hy]:"fire-auth",[py]:"fire-auth-compat",[gy]:"fire-rtdb",[my]:"fire-rtdb-compat",[_y]:"fire-fn",[yy]:"fire-fn-compat",[vy]:"fire-iid",[by]:"fire-iid-compat",[wy]:"fire-fcm",[Ey]:"fire-fcm-compat",[Iy]:"fire-perf",[Ty]:"fire-perf-compat",[Sy]:"fire-rc",[Cy]:"fire-rc-compat",[Ay]:"fire-gcs",[Ry]:"fire-gcs-compat",[Py]:"fire-fst",[ky]:"fire-fst-compat",[Oy]:"fire-vertex","fire-js":"fire-js",[Ny]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=new Map,Dy=new Map,vo=new Map;function Dc(e,t){try{e.container.addComponent(t)}catch(n){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function St(e){const t=e.name;if(vo.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;vo.set(t,e);for(const n of Fs.values())Dc(n,e);for(const n of Dy.values())Dc(n,e);return!0}function or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function it(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yt=new Cn("app","Firebase",xy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ut("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=Ly;function xf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:yo,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Yt.create("bad-app-name",{appName:String(s)});if(n||(n=Rf()),!n)throw Yt.create("no-options");const i=Fs.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw Yt.create("duplicate-app",{appName:s})}const o=new K_(s);for(const c of vo.values())o.addComponent(c);const a=new Fy(n,r,o);return Fs.set(s,a),a}function Ff(e=yo){const t=Fs.get(e);if(!t&&e===yo&&Rf())return xf();if(!t)throw Yt.create("no-app",{appName:e});return t}function ot(e,t,n){var r;let s=(r=My[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(a.join(" "));return}St(new ut(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Uy="firebase-heartbeat-database",$y=1,xr="firebase-heartbeat-store";let Fi=null;function Uf(){return Fi||(Fi=Df(Uy,$y,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(xr)}catch(n){console.warn(n)}}}}).catch(e=>{throw Yt.create("idb-open",{originalErrorMessage:e.message})})),Fi}async function By(e){try{const n=(await Uf()).transaction(xr),r=await n.objectStore(xr).get($f(e));return await n.done,r}catch(t){if(t instanceof ft)_n.warn(t.message);else{const n=Yt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_n.warn(n.message)}}}async function xc(e,t){try{const r=(await Uf()).transaction(xr,"readwrite");await r.objectStore(xr).put(t,$f(e)),await r.done}catch(n){if(n instanceof ft)_n.warn(n.message);else{const r=Yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function $f(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Hy=1024,Vy=30*24*60*60*1e3;class jy{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ky(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fc();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Vy}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fc(),{heartbeatsToSend:r,unsentEntries:s}=Wy(this._heartbeatsCache.heartbeats),i=Cf(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Fc(){return new Date().toISOString().substring(0,10)}function Wy(e,t=Hy){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Uc(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Uc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ky{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kf()?Nf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await By(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Uc(e){return Cf(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(e){St(new ut("platform-logger",t=>new oy(t),"PRIVATE")),St(new ut("heartbeat",t=>new jy(t),"PRIVATE")),ot(_o,Mc,e),ot(_o,Mc,"esm2017"),ot("fire-js","")}qy("");function ia(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function Bf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gy=Bf,Hf=new Cn("auth","Firebase",Bf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new ra("@firebase/auth");function zy(e,...t){Us.logLevel<=de.WARN&&Us.warn(`Auth (${Xr}): ${e}`,...t)}function ws(e,...t){Us.logLevel<=de.ERROR&&Us.error(`Auth (${Xr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(e,...t){throw oa(e,...t)}function at(e,...t){return oa(e,...t)}function Vf(e,t,n){const r=Object.assign(Object.assign({},Gy()),{[t]:n});return new Cn("auth","Firebase",r).create(t,{appName:e.name})}function Et(e){return Vf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oa(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Hf.create(e,...t)}function Q(e,t,...n){if(!e)throw oa(t,...n)}function mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ws(t),new Error(t)}function Ct(e,t){e||mt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Jy(){return $c()==="http:"||$c()==="https:"}function $c(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jy()||Of()||"connection"in navigator)?navigator.onLine:!0}function Xy(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ct(n>t,"Short delay should be less than long delay!"),this.isMobile=A_()||R_()}get(){return Yy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e,t){Ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=new Qr(3e4,6e4);function Pt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ot(e,t,n,r,s={}){return Wf(e,s,async()=>{let i={},o={};r&&(t==="GET"?o=r:i={body:JSON.stringify(r)});const a=Yr(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),jf.fetch()(Kf(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Wf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qy),t);try{const s=new tv(e),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ms(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ms(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ms(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw ms(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Vf(e,u,l);Ze(e,u)}}catch(s){if(s instanceof ft)throw s;Ze(e,"network-request-failed",{message:String(s)})}}async function Zr(e,t,n,r,s={}){const i=await Ot(e,t,n,r,s);return"mfaPendingCredential"in i&&Ze(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Kf(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?aa(e.config,s):`${e.config.apiScheme}://${s}`}function ev(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Zy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ms(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(e,t,r);return s.customData._tokenResponse=n,s}function Bc(e){return e!==void 0&&e.enterprise!==void 0}class nv{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return ev(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function rv(e,t){return Ot(e,"GET","/v2/recaptchaConfig",Pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(e,t){return Ot(e,"POST","/v1/accounts:delete",t)}async function qf(e,t){return Ot(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function iv(e,t=!1){const n=et(e),r=await n.getIdToken(t),s=ca(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Tr(Ui(s.auth_time)),issuedAtTime:Tr(Ui(s.iat)),expirationTime:Tr(Ui(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ui(e){return Number(e)*1e3}function ca(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ws("JWT malformed, contained fewer than 3 sections"),null;try{const s=Af(n);return s?JSON.parse(s):(ws("Failed to decode base64 JWT payload"),null)}catch(s){return ws("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hc(e){const t=ca(e);return Q(t,"internal-error"),Q(typeof t.exp<"u","internal-error"),Q(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof ft&&ov(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ov({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Fr(e,qf(n,{idToken:r}));Q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Gf(i.providerUserInfo):[],a=lv(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wo(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function cv(e){const t=et(e);await $s(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function lv(e,t){return[...e.filter(r=>!t.some(s=>s.providerId===r.providerId)),...t]}function Gf(e){return e.map(t=>{var{providerId:n}=t,r=ia(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(e,t){const n=await Wf(e,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,o=Kf(e,s,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jf.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function fv(e,t){return Ot(e,"POST","/v2/accounts:revokeToken",Pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Q(t.idToken,"internal-error"),Q(typeof t.idToken<"u","internal-error"),Q(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Hc(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){Q(t.length!==0,"internal-error");const n=Hc(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uv(t,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qn;return r&&(Q(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:t}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e,t){Q(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class _t{constructor(t){var{uid:n,auth:r,stsTokenManager:s}=t,i=ia(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new av(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Fr(this,this.stsTokenManager.getToken(this.auth,t));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return iv(this,t)}reload(){return cv(this)}_assign(t){this!==t&&(Q(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new _t(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(Et(this.auth));const t=await this.getIdToken();return await Fr(this,sv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(l=n.createdAt)!==null&&l!==void 0?l:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:y,isAnonymous:T,providerData:w,stsTokenManager:L}=n;Q(g&&L,t,"internal-error");const B=qn.fromJSON(this.name,L);Q(typeof g=="string",t,"internal-error"),Dt(f,t.name),Dt(d,t.name),Q(typeof y=="boolean",t,"internal-error"),Q(typeof T=="boolean",t,"internal-error"),Dt(m,t.name),Dt(v,t.name),Dt(k,t.name),Dt(U,t.name),Dt(D,t.name),Dt(E,t.name);const b=new _t({uid:g,auth:t,email:d,emailVerified:y,displayName:f,isAnonymous:T,photoURL:v,phoneNumber:m,tenantId:k,stsTokenManager:B,createdAt:D,lastLoginAt:E});return w&&Array.isArray(w)&&(b.providerData=w.map(I=>Object.assign({},I))),U&&(b._redirectEventId=U),b}static async _fromIdTokenResponse(t,n,r=!1){const s=new qn;s.updateFromServerResponse(n);const i=new _t({uid:n.localId,auth:t,stsTokenManager:s,isAnonymous:r});return await $s(i),i}static async _fromGetAccountInfoResponse(t,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Gf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new qn;a.updateFromIdToken(r);const c=new _t({uid:s.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new Map;function yt(e){Ct(e instanceof Function,"Expected a class definition");let t=Vc.get(e);return t?(Ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zf.type="NONE";const jc=zf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(e,t,n){return`firebase:${e}:${t}:${n}`}class Gn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Es(this.userKey,s.apiKey,i),this.fullPersistenceKey=Es("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?_t._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Gn(yt(jc),t,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yt(jc);const o=Es(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=_t._fromJSON(t,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gn(i,t,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Gn(i,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Jf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Zf(t))return"Blackberry";if(ed(t))return"Webos";if(la(t))return"Safari";if((t.includes("chrome/")||Yf(t))&&!t.includes("edge/"))return"Chrome";if(Qf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Jf(e=Ae()){return/firefox\//i.test(e)}function la(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Yf(e=Ae()){return/crios\//i.test(e)}function Xf(e=Ae()){return/iemobile/i.test(e)}function Qf(e=Ae()){return/android/i.test(e)}function Zf(e=Ae()){return/blackberry/i.test(e)}function ed(e=Ae()){return/webos/i.test(e)}function di(e=Ae()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function dv(e=Ae()){var t;return di(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function hv(){return P_()&&document.documentMode===10}function td(e=Ae()){return di(e)||Qf(e)||ed(e)||Zf(e)||/windows phone/i.test(e)||Xf(e)}function pv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e,t=[]){let n;switch(e){case"Browser":n=Wc(Ae());break;case"Worker":n=`${Wc(Ae())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
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
 */class gv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mv(e,t={}){return Ot(e,"GET","/v2/passwordPolicy",Pt(e,t))}/**
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
 */const _v=6;class yv{constructor(t){var n,r,s,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:_v,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),s&&(n.meetsMaxPasswordLength=t.length<=s)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<t.length;s++)r=t.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(t,n,r,s){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kc(this),this.idTokenSubscription=new Kc(this),this.beforeStateQueue=new gv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await qf(this,{idToken:t}),r=await _t._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(it(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $s(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Xy()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(it(this.app))return Promise.reject(Et(this));const n=t?et(t):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Q(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(Et(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return it(this.app)?Promise.reject(Et(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await mv(this),n=new yv(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Cn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await fv(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&zy(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rn(e){return et(e)}class Kc{constructor(t){this.auth=t,this.observer=null,this.addObserver=D_(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bv(e){hi=e}function rd(e){return hi.loadJS(e)}function wv(){return hi.recaptchaEnterpriseScript}function Ev(){return hi.gapiScript}function Iv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Tv="recaptcha-enterprise",Sv="NO_RECAPTCHA";class Cv{constructor(t){this.type=Tv,this.auth=rn(t)}async verify(t="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{rv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new nv(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Bc(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(Sv)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Bc(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=wv();c.length!==0&&(c+=a),rd(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function qc(e,t,n,r=!1){const s=new Cv(e);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Bs(e,t,n,r){var s;if(!((s=e._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await qc(e,t,n,n==="getOobCode");return r(e,i)}else return r(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await qc(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(e,t){const n=or(e,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dr(i,t??{}))return s;Ze(s,"already-initialized")}return n.initialize({options:t})}function Rv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Pv(e,t,n){const r=rn(e);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=!1,i=sd(t),{host:o,port:a}=Ov(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),kv()}function sd(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ov(e){const t=sd(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gc(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gc(o)}}}function Gc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function kv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(t){return mt("not implemented")}_linkToIdToken(t,n){return mt("not implemented")}_getReauthenticationResolver(t){return mt("not implemented")}}async function Nv(e,t){return Ot(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(e,t){return Zr(e,"POST","/v1/accounts:signInWithPassword",Pt(e,t))}async function Mv(e,t){return Ot(e,"POST","/v1/accounts:sendOobCode",Pt(e,t))}async function Dv(e,t){return Mv(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(e,t){return Zr(e,"POST","/v1/accounts:signInWithEmailLink",Pt(e,t))}async function Fv(e,t){return Zr(e,"POST","/v1/accounts:signInWithEmailLink",Pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends ua{constructor(t,n,r,s=null){super("password",r),this._email=t,this._password=n,this._tenantId=s}static _fromEmailAndPassword(t,n){return new Ur(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Ur(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(t,n,"signInWithPassword",Lv);case"emailLink":return xv(t,{email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(t,r,"signUpPassword",Nv);case"emailLink":return Fv(t,{idToken:n,email:this._email,oobCode:this._password});default:Ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(e,t){return Zr(e,"POST","/v1/accounts:signInWithIdp",Pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="http://localhost";class yn extends ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new yn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:s}=n,i=ia(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new yn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return zn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,zn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,zn(t,n)}buildRequest(){const t={requestUri:Uv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bv(e){const t=gr(mr(e)).link,n=t?gr(mr(t)).deep_link_id:null,r=gr(mr(e)).deep_link_id;return(r?gr(mr(r)).link:null)||r||n||t||e}class fa{constructor(t){var n,r,s,i,o,a;const c=gr(mr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=$v((s=c.mode)!==null&&s!==void 0?s:null);Q(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Bv(t);try{return new fa(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.providerId=ar.PROVIDER_ID}static credential(t,n){return Ur._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=fa.parseLink(n);return Q(r,"argument-error"),Ur._fromEmailAndCode(t,r.code,r.tenantId)}}ar.PROVIDER_ID="password";ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends id{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends es{constructor(){super("facebook.com")}static credential(t){return yn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Vt.credential(t.oauthAccessToken)}catch{return null}}}Vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends es{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return yn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends es{constructor(){super("github.com")}static credential(t){return yn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Wt.credentialFromTaggedObject(t)}static credentialFromError(t){return Wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Wt.credential(t.oauthAccessToken)}catch{return null}}}Wt.GITHUB_SIGN_IN_METHOD="github.com";Wt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends es{constructor(){super("twitter.com")}static credential(t,n){return yn._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Kt.credentialFromTaggedObject(t)}static credentialFromError(t){return Kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.TWITTER_SIGN_IN_METHOD="twitter.com";Kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(e,t){return Zr(e,"POST","/v1/accounts:signUp",Pt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,s=!1){const i=await _t._fromIdTokenResponse(t,r,s),o=zc(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const s=zc(r);return new vn({user:t,providerId:s,_tokenResponse:r,operationType:n})}}function zc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends ft{constructor(t,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hs.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,s){return new Hs(t,n,r,s)}}function od(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hs._fromErrorAndOperation(e,i,t,r):i})}async function Vv(e,t,n=!1){const r=await Fr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(e,t,n=!1){const{auth:r}=e;if(it(r.app))return Promise.reject(Et(r));const s="reauthenticate";try{const i=await Fr(e,od(r,s,t,e),n);Q(i.idToken,r,"internal-error");const o=ca(i.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(e.uid===a,r,"user-mismatch"),vn._forOperation(e,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ad(e,t,n=!1){if(it(e.app))return Promise.reject(Et(e));const r="signIn",s=await od(e,r,t),i=await vn._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}async function Wv(e,t){return ad(rn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cd(e){const t=rn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Kv(e,t,n){const r=rn(e);await Bs(r,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Dv)}async function qv(e,t,n){if(it(e.app))return Promise.reject(Et(e));const r=rn(e),o=await Bs(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&cd(e),c}),a=await vn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Gv(e,t,n){return it(e.app)?Promise.reject(Et(e)):Wv(et(e),ar.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cd(e),r})}function zv(e,t,n,r){return et(e).onIdTokenChanged(t,n,r)}function Jv(e,t,n){return et(e).beforeAuthStateChanged(t,n)}function ld(e,t,n,r){return et(e).onAuthStateChanged(t,n,r)}function Yv(e){return et(e).signOut()}const Vs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){const e=Ae();return la(e)||di(e)}const Qv=1e3,Zv=10;class fd extends ud{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xv()&&pv(),this.fallbackToPolling=td(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&t(n,s,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hv()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,Zv):s()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Qv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}fd.type="LOCAL";const eb=fd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends ud{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}dd.type="SESSION";const hd=dd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(s=>s.isListeningto(t));if(n)return n;const r=new pi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await tb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=da("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function rb(e){ct().location.href=e}/**
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
 */function pd(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function sb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ib(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ob(){return pd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="firebaseLocalStorageDb",ab=1,js="firebaseLocalStorage",md="fbase_key";class ts{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gi(e,t){return e.transaction([js],t?"readwrite":"readonly").objectStore(js)}function cb(){const e=indexedDB.deleteDatabase(gd);return new ts(e).toPromise()}function Eo(){const e=indexedDB.open(gd,ab);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(js,{keyPath:md})}catch(s){n(s)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(js)?t(r):(r.close(),await cb(),t(await Eo()))})})}async function Jc(e,t,n){const r=gi(e,!0).put({[md]:t,value:n});return new ts(r).toPromise()}async function lb(e,t){const n=gi(e,!1).get(t),r=await new ts(n).toPromise();return r===void 0?null:r.value}function Yc(e,t){const n=gi(e,!0).delete(t);return new ts(n).toPromise()}const ub=800,fb=3;class _d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>fb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(ob()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await sb(),!this.activeServiceWorker)return;this.sender=new nb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Eo();return await Jc(t,Vs,"1"),await Yc(t,Vs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>lb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(s=>{const i=gi(s,!1).getAll();return new ts(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:s,value:i}of t)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_d.type="LOCAL";const db=_d;new Qr(3e4,6e4);/**
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
 */function hb(e,t){return t?yt(t):(Q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends ua{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return zn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return zn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return zn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function pb(e){return ad(e.auth,new ha(e),e.bypassAuthState)}function gb(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),jv(n,new ha(e),e.bypassAuthState)}async function mb(e){const{auth:t,user:n}=e;return Q(n,t,"internal-error"),Vv(n,new ha(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(t,n,r,s,i=!1){this.auth=t,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pb;case"linkViaPopup":case"linkViaRedirect":return mb;case"reauthViaPopup":case"reauthViaRedirect":return gb;default:Ze(this.auth,"internal-error")}}resolve(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=new Qr(2e3,1e4);class Ln extends yd{constructor(t,n,r,s,i){super(t,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Q(t,this.auth,"internal-error"),t}async onExecution(){Ct(this.filter.length===1,"Popup operations only handle one event");const t=da();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,_b.get())};t()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="pendingRedirect",Is=new Map;class vb extends yd{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Is.get(this.auth._key());if(!t){try{const r=await bb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Is.set(this.auth._key(),t)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bb(e,t){const n=Ib(t),r=Eb(e);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wb(e,t){Is.set(e._key(),t)}function Eb(e){return yt(e._redirectPersistence)}function Ib(e){return Es(yb,e.config.apiKey,e.name)}async function Tb(e,t,n=!1){if(it(e.app))return Promise.reject(Et(e));const r=rn(e),s=hb(r,t),o=await new vb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=10*60*1e3;class Cb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ab(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!vd(t)){const s=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xc(t))}saveEventToCache(t){this.cachedEventUids.add(Xc(t)),this.lastProcessedEventTime=Date.now()}}function Xc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function vd({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ab(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vd(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(e,t={}){return Ot(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ob=/^https?/;async function kb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Rb(e);for(const n of t)try{if(Nb(n))return}catch{}Ze(e,"unauthorized-domain")}function Nb(e){const t=bo(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ob.test(n))return!1;if(Pb.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Lb=new Qr(3e4,6e4);function Qc(){const e=ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Mb(e){return new Promise((t,n)=>{var r,s,i;function o(){Qc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Qc(),n(at(e,"network-request-failed"))},timeout:Lb.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)t(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=Iv("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(e,"network-request-failed"))},rd(`${Ev()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Ts=null,t})}let Ts=null;function Db(e){return Ts=Ts||Mb(e),Ts}/**
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
 */const xb=new Qr(5e3,15e3),Fb="__/auth/iframe",Ub="emulator/auth/iframe",$b={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hb(e){const t=e.config;Q(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?aa(t,Ub):`https://${e.config.authDomain}/${Fb}`,r={apiKey:t.apiKey,appName:e.name,v:Xr},s=Bb.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Yr(r).slice(1)}`}async function Vb(e){const t=await Db(e),n=ct().gapi;return Q(n,e,"internal-error"),t.open({where:document.body,url:Hb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$b,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(e,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},xb.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const jb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wb=500,Kb=600,qb="_blank",Gb="http://localhost";class Zc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zb(e,t,n,r=Wb,s=Kb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jb),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ae().toLowerCase();n&&(a=Yf(l)?qb:n),Jf(l)&&(t=t||Gb,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(dv(l)&&a!=="_self")return Jb(t||"",a),new Zc(null);const f=window.open(t||"",a,u);Q(f,e,"popup-blocked");try{f.focus()}catch{}return new Zc(f)}function Jb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yb="__/auth/handler",Xb="emulator/auth/handler",Qb=encodeURIComponent("fac");async function el(e,t,n,r,s,i){Q(e.config.authDomain,e,"auth-domain-config-required"),Q(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Xr,eventId:s};if(t instanceof id){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",M_(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(t instanceof es){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Qb}=${encodeURIComponent(c)}`:"";return`${Zb(e)}?${Yr(a).slice(1)}${l}`}function Zb({config:e}){return e.emulator?aa(e,Xb):`https://${e.authDomain}/${Yb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="webStorageSupport";class ew{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=Tb,this._overrideRedirectResult=wb}async _openPopup(t,n,r,s){var i;Ct((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await el(t,n,r,bo(),s);return zb(t,o,da())}async _openRedirect(t,n,r,s){await this._originValidation(t);const i=await el(t,n,r,bo(),s);return rb(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ct(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Vb(t),r=new Cb(t);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,t,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($i,{type:$i},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[$i];o!==void 0&&n(!!o),Ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return td()||la()||di()}}const tw=ew;var tl="@firebase/auth",nl="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sw(e){St(new ut("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nd(e)},l=new vv(r,s,i,c);return Rv(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),St(new ut("auth-internal",t=>{const n=rn(t.getProvider("auth").getImmediate());return(r=>new nw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(tl,nl,rw(e)),ot(tl,nl,"esm2017")}/**
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
 */const iw=5*60,ow=Pf("authIdTokenMaxAge")||iw;let rl=null;const aw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ow)return;const s=n==null?void 0:n.token;rl!==s&&(rl=s,await fetch(e,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mi(e=Ff()){const t=or(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Av(e,{popupRedirectResolver:tw,persistence:[db,eb,hd]}),r=Pf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=aw(i.toString());Jv(n,o,()=>o(n.currentUser)),zv(n,a=>o(a))}}const s=S_("auth");return s&&Pv(n,`http://${s}`),n}function cw(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}bv({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sw("Browser");var lw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function uw(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fw(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var bd={exports:{}};const dw=fw(pm);(function(e,t){(function(r,s){e.exports=s(dw)})(lw,n=>(()=>{var r={772:(a,c)=>{Object.defineProperty(c,"__esModule",{value:!0}),c.default=(l,u)=>{const f=l.__vccOpts||l;for(const[d,m]of u)f[d]=m;return f}},976:a=>{a.exports=n}},s={};function i(a){var c=s[a];if(c!==void 0)return c.exports;var l=s[a]={exports:{}};return r[a](l,l.exports,i),l.exports}i.d=(a,c)=>{for(var l in c)i.o(c,l)&&!i.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:c[l]})},i.o=(a,c)=>Object.prototype.hasOwnProperty.call(a,c),i.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var o={};return(()=>{i.r(o),i.d(o,{ToastComponent:()=>T,ToastPlugin:()=>L,ToastPositions:()=>v,default:()=>B,useToast:()=>w});var a=i(976);const c=(0,a.createElementVNode)("div",{class:"v-toast__icon"},null,-1),l=["innerHTML"];function u(b,I,O,R,j,ne){return(0,a.openBlock)(),(0,a.createBlock)(a.Transition,{"enter-active-class":b.transition.enter,"leave-active-class":b.transition.leave},{default:(0,a.withCtx)(()=>[(0,a.withDirectives)((0,a.createElementVNode)("div",{ref:"root",role:"alert",class:(0,a.normalizeClass)(["v-toast__item",[`v-toast__item--${b.type}`,`v-toast__item--${b.position}`]]),onMouseover:I[0]||(I[0]=ie=>b.toggleTimer(!0)),onMouseleave:I[1]||(I[1]=ie=>b.toggleTimer(!1)),onClick:I[2]||(I[2]=function(){return b.whenClicked&&b.whenClicked(...arguments)})},[c,(0,a.createElementVNode)("p",{class:"v-toast__text",innerHTML:b.message},null,8,l)],34),[[a.vShow,b.isActive]])]),_:1},8,["enter-active-class","leave-active-class"])}function f(b){var I;typeof b.remove<"u"?b.remove():(I=b.parentNode)==null||I.removeChild(b)}function d(b,I,O){let R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const j=(0,a.h)(b,I,R),ne=document.createElement("div");return ne.classList.add("v-toast--pending"),O.appendChild(ne),(0,a.render)(j,ne),j.component}class m{constructor(I,O){this.startedAt=Date.now(),this.callback=I,this.delay=O,this.timer=setTimeout(I,O)}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.stop(),this.startedAt=Date.now(),this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const v=Object.freeze({TOP_RIGHT:"top-right",TOP:"top",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left"});function k(b){return{all:b=b||new Map,on:function(I,O){var R=b.get(I);R?R.push(O):b.set(I,[O])},off:function(I,O){var R=b.get(I);R&&(O?R.splice(R.indexOf(O)>>>0,1):b.set(I,[]))},emit:function(I,O){var R=b.get(I);R&&R.slice().map(function(j){j(O)}),(R=b.get("*"))&&R.slice().map(function(j){j(I,O)})}}}const D=k(),E=(0,a.defineComponent)({name:"Toast",props:{message:{type:String,required:!0},type:{type:String,default:"success"},position:{type:String,default:v.BOTTOM_RIGHT,validator(b){return Object.values(v).includes(b)}},duration:{type:Number,default:3e3},dismissible:{type:Boolean,default:!0},onDismiss:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},queue:Boolean,pauseOnHover:{type:Boolean,default:!0}},data(){return{isActive:!1,parentTop:null,parentBottom:null,isHovered:!1}},beforeMount(){this.setupContainer()},mounted(){this.showNotice(),D.on("toast-clear",this.dismiss)},methods:{setupContainer(){if(this.parentTop=document.querySelector(".v-toast.v-toast--top"),this.parentBottom=document.querySelector(".v-toast.v-toast--bottom"),this.parentTop&&this.parentBottom)return;this.parentTop||(this.parentTop=document.createElement("div"),this.parentTop.className="v-toast v-toast--top"),this.parentBottom||(this.parentBottom=document.createElement("div"),this.parentBottom.className="v-toast v-toast--bottom");const b=document.body;b.appendChild(this.parentTop),b.appendChild(this.parentBottom)},shouldQueue(){return this.queue?this.parentTop.childElementCount>0||this.parentBottom.childElementCount>0:!1},dismiss(){this.timer&&this.timer.stop(),clearTimeout(this.queueTimer),this.isActive=!1,setTimeout(()=>{this.onDismiss.apply(null,arguments);const b=this.$refs.root;(0,a.render)(null,b),f(b)},150)},showNotice(){if(this.shouldQueue()){this.queueTimer=setTimeout(this.showNotice,250);return}const b=this.$refs.root.parentElement;this.correctParent.insertAdjacentElement("afterbegin",this.$refs.root),f(b),this.isActive=!0,this.duration&&(this.timer=new m(this.dismiss,this.duration))},whenClicked(){this.dismissible&&(this.onClick.apply(null,arguments),this.dismiss())},toggleTimer(b){!this.pauseOnHover||!this.timer||(b?this.timer.pause():this.timer.resume())}},computed:{correctParent(){switch(this.position){case v.TOP:case v.TOP_RIGHT:case v.TOP_LEFT:return this.parentTop;case v.BOTTOM:case v.BOTTOM_RIGHT:case v.BOTTOM_LEFT:return this.parentBottom}},transition(){switch(this.position){case v.TOP:case v.TOP_RIGHT:case v.TOP_LEFT:return{enter:"v-toast--fade-in-down",leave:"v-toast--fade-out"};case v.BOTTOM:case v.BOTTOM_RIGHT:case v.BOTTOM_LEFT:return{enter:"v-toast--fade-in-up",leave:"v-toast--fade-out"}}}},beforeUnmount(){D.off("toast-clear",this.dismiss)}});var g=i(772);const T=(0,g.default)(E,[["render",u]]),w=function(){let b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{open(I){let O=null;typeof I=="string"&&(O=I);const j=Object.assign({},{message:O},b,I);return{dismiss:d(T,j,document.body).ctx.dismiss}},clear(){D.emit("toast-clear")},success(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"success"},O))},error(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"error"},O))},info(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"info"},O))},warning(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"warning"},O))},default(I){let O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.open(Object.assign({},{message:I,type:"default"},O))}}},L={install:function(b){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O=w(I);b.config.globalProperties.$toast=O,b.provide("$toast",O)}},B=L})(),o})())})(bd);var wd=bd.exports;const hw=uw(wd);function Se(e,t){const n=wd.useToast();switch(e){case"success":n.success(t);break;case"info":n.info(t);break;case"warning":n.warning(t);break;case"error":n.error(t);break;case"default":n.default(t);break;default:n.default(t);break}}const cr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},Ed=e=>(Tn("data-v-b8e792f3"),e=e(),Sn(),e),pw={class:"navBar"},gw={class:"container"},mw=Ed(()=>Y("div",{class:"co"},"CO",-1)),_w=Ed(()=>Y("div",{class:"student"},"STUDENT",-1)),yw={class:"buttons"},vw={__name:"Nav",props:{isLoggedIn:Boolean},setup(e){const t=mi(),n=fi();function r(){Yv(t).then(()=>{n.push("/"),Se("success","Successfully singed out!")}).catch(s=>{Se("error",s.message)})}return(s,i)=>{const o=Kl("RouterLink");return Pe(),Tt("div",pw,[Y("div",gw,[ce(o,{class:"logo",to:"/"},{default:zt(()=>[mw,_w]),_:1}),Y("div",yw,[e.isLoggedIn?vs("",!0):(Pe(),Qn(o,{key:0,class:"button",to:"/Login"},{default:zt(()=>[Zn("Login")]),_:1})),e.isLoggedIn?vs("",!0):(Pe(),Qn(o,{key:1,class:"button",to:"/Register"},{default:zt(()=>[Zn("Register")]),_:1})),e.isLoggedIn?(Pe(),Tt("div",{key:2,class:"button",onClick:i[0]||(i[0]=a=>r())},"Sign out")):vs("",!0)])])])}}},bw=cr(vw,[["__scopeId","data-v-b8e792f3"]]),ww={},Id=e=>(Tn("data-v-7aaa4f9a"),e=e(),Sn(),e),Ew={class:"footerBox"},Iw=Id(()=>Y("p",null,"Copyright ©2024",-1)),Tw=Id(()=>Y("p",null,"Designed by Samuel Coryn",-1)),Sw=[Iw,Tw];function Cw(e,t){return Pe(),Tt("div",Ew,Sw)}const Aw=cr(ww,[["render",Cw],["__scopeId","data-v-7aaa4f9a"]]),Rw={class:"navBox"},Pw={__name:"App",setup(e){const t=Gt(!1);let n;return ir(()=>{n=mi(),ld(n,r=>{r?t.value=!0:t.value=!1})}),Wn("isLoggedInKey",t),(r,s)=>(Pe(),Tt(Ee,null,[Y("div",Rw,[ce(bw,{isLoggedIn:t.value},null,8,["isLoggedIn"])]),ce(ke(Ef),null,{default:zt(({Component:i})=>[ce(ai,{name:"route",mode:"out-in"},{default:zt(()=>[(Pe(),Qn(Gl(i)))]),_:2},1024)]),_:1}),ce(Aw)],64))}},Ow="/costudentdemo/assets/students_stock_photo-BvfkMiXM.jpg",kw="/costudentdemo/assets/costudent_flow-BNBdLvju.png",_i=e=>(Tn("data-v-a5b1366a"),e=e(),Sn(),e),Nw={class:"root"},Lw={class:"grid"},Mw={class:"landingColumn"},Dw=_i(()=>Y("div",{class:"title"},[Y("h1",null,"Study better,"),Y("h1",null,"Together")],-1)),xw=_i(()=>Y("p",null," Costudent connects you with peers studying the same subjects, making it easy to collaborate, ask questions, and share insights. Together, you can challenge each other, stay motivated, and dive deeper into your studies. Join a community of learners and elevate your academic journey with Costudent. ",-1)),Fw={class:"buttonArray"},Uw=_i(()=>Y("div",{class:"photo"},[Y("img",{src:Ow,alt:"People studying together."})],-1)),$w=_i(()=>Y("div",{id:"learnMore"},[Y("div",{class:"article"},[Y("h1",null,"About"),Y("p",null,"Welcome to Costudent, the ultimate study buddy app designed to connect students with peers diving into the same subjects. Whether you’re tackling tough topics or simply want a study partner to stay motivated, Costudent makes learning more engaging and effective."),Y("p",null,"Here’s how it works: Start by defining the subject you’re eager to master and the time you plan to study. Add a bit of extra info like your location and study preferences. Costudent then does the magic of pairing you with fellow students who share your schedule and academic interests."),Y("p",null,"Once matched, you can meet up, either virtually or in person, to ask each other questions, test your knowledge, and discuss subject matter in-depth. Imagine having a study group that’s always on the same page as you, ready to support and challenge you!"),Y("p",null,"Costudent is perfect for college students looking to make the most out of their study time. Our platform is all about collaboration, connection, and achieving academic success together."),Y("p",null,"Join Costudent today and transform your study sessions into a collaborative, fun, and productive experience. Learning is better when you do it together!")]),Y("div",{class:"graph"},[Y("img",{src:kw,alt:"Costudent flow"})])],-1)),Bw={__name:"Home",setup(e){function t(){document.getElementById("learnMore").scrollIntoView({behavior:"smooth"})}function n(){r.value?s.push("/findcostudent"):s.push("/login")}const r=je("isLoggedInKey"),s=fi();return(i,o)=>(Pe(),Tt("div",Nw,[Y("div",Lw,[Y("div",Mw,[Dw,xw,Y("div",Fw,[Y("div",{class:"button",onClick:o[0]||(o[0]=a=>n())},"Start studying"),Y("div",{class:"button",onClick:o[1]||(o[1]=a=>t())},"Learn more")])]),Uw]),$w]))}},Hw=cr(Bw,[["__scopeId","data-v-a5b1366a"]]);var Vw="firebase",jw="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(Vw,jw,"app");const Td="@firebase/installations",pa="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=1e4,Cd=`w:${pa}`,Ad="FIS_v2",Ww="https://firebaseinstallations.googleapis.com/v1",Kw=60*60*1e3,qw="installations",Gw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},bn=new Cn(qw,Gw,zw);function Rd(e){return e instanceof ft&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd({projectId:e}){return`${Ww}/projects/${e}/installations`}function Od(e){return{token:e.token,requestStatus:2,expiresIn:Yw(e.expiresIn),creationTime:Date.now()}}async function kd(e,t){const r=(await t.json()).error;return bn.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Jw(e,{refreshToken:t}){const n=Nd(e);return n.append("Authorization",Xw(t)),n}async function Ld(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Yw(e){return Number(e.replace("s","000"))}function Xw(e){return`${Ad} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Pd(e),s=Nd(e),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Ad,appId:e.appId,sdkVersion:Cd},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Ld(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Od(l.authToken)}}else throw await kd("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=/^[cdef][\w-]{21}$/,Io="";function tE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=nE(e);return eE.test(n)?n:Io}catch{return Io}}function nE(e){return Zw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Dd=new Map;function xd(e,t){const n=yi(e);Fd(n,t),rE(n,t)}function Fd(e,t){const n=Dd.get(e);if(n)for(const r of n)r(t)}function rE(e,t){const n=sE();n&&n.postMessage({key:e,fid:t}),iE()}let ln=null;function sE(){return!ln&&"BroadcastChannel"in self&&(ln=new BroadcastChannel("[Firebase] FID Change"),ln.onmessage=e=>{Fd(e.data.key,e.data.fid)}),ln}function iE(){Dd.size===0&&ln&&(ln.close(),ln=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="firebase-installations-database",aE=1,wn="firebase-installations-store";let Bi=null;function ga(){return Bi||(Bi=Df(oE,aE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wn)}}})),Bi}async function Ws(e,t){const n=yi(e),s=(await ga()).transaction(wn,"readwrite"),i=s.objectStore(wn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&xd(e,t.fid),t}async function Ud(e){const t=yi(e),r=(await ga()).transaction(wn,"readwrite");await r.objectStore(wn).delete(t),await r.done}async function vi(e,t){const n=yi(e),s=(await ga()).transaction(wn,"readwrite"),i=s.objectStore(wn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&xd(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(e){let t;const n=await vi(e.appConfig,r=>{const s=cE(r),i=lE(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===Io?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function cE(e){const t=e||{fid:tE(),registrationStatus:0};return $d(t)}function lE(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(bn.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=uE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fE(e)}:{installationEntry:t}}async function uE(e,t){try{const n=await Qw(e,t);return Ws(e.appConfig,n)}catch(n){throw Rd(n)&&n.customData.serverCode===409?await Ud(e.appConfig):await Ws(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function fE(e){let t=await sl(e.appConfig);for(;t.registrationStatus===1;)await Md(100),t=await sl(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ma(e);return r||n}return t}function sl(e){return vi(e,t=>{if(!t)throw bn.create("installation-not-found");return $d(t)})}function $d(e){return dE(e)?{fid:e.fid,registrationStatus:0}:e}function dE(e){return e.registrationStatus===1&&e.registrationTime+Sd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE({appConfig:e,heartbeatServiceProvider:t},n){const r=pE(e,n),s=Jw(e,n),i=t.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Cd,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Ld(()=>fetch(r,a));if(c.ok){const l=await c.json();return Od(l)}else throw await kd("Generate Auth Token",c)}function pE(e,{fid:t}){return`${Pd(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(e,t=!1){let n;const r=await vi(e.appConfig,i=>{if(!Bd(i))throw bn.create("not-registered");const o=i.authToken;if(!t&&_E(o))return i;if(o.requestStatus===1)return n=gE(e,t),i;{if(!navigator.onLine)throw bn.create("app-offline");const a=vE(i);return n=mE(e,a),a}});return n?await n:r.authToken}async function gE(e,t){let n=await il(e.appConfig);for(;n.authToken.requestStatus===1;)await Md(100),n=await il(e.appConfig);const r=n.authToken;return r.requestStatus===0?_a(e,t):r}function il(e){return vi(e,t=>{if(!Bd(t))throw bn.create("not-registered");const n=t.authToken;return bE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function mE(e,t){try{const n=await hE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ws(e.appConfig,r),n}catch(n){if(Rd(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ud(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ws(e.appConfig,r)}throw n}}function Bd(e){return e!==void 0&&e.registrationStatus===2}function _E(e){return e.requestStatus===2&&!yE(e)}function yE(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Kw}function vE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function bE(e){return e.requestStatus===1&&e.requestTime+Sd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(e){const t=e,{installationEntry:n,registrationPromise:r}=await ma(t);return r?r.catch(console.error):_a(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE(e,t=!1){const n=e;return await IE(n),(await _a(n,t)).token}async function IE(e){const{registrationPromise:t}=await ma(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(e){if(!e||!e.options)throw Hi("App Configuration");if(!e.name)throw Hi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Hi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Hi(e){return bn.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="installations",SE="installations-internal",CE=e=>{const t=e.getProvider("app").getImmediate(),n=TE(t),r=or(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},AE=e=>{const t=e.getProvider("app").getImmediate(),n=or(t,Hd).getImmediate();return{getId:()=>wE(n),getToken:s=>EE(n,s)}};function RE(){St(new ut(Hd,CE,"PUBLIC")),St(new ut(SE,AE,"PRIVATE"))}RE();ot(Td,pa);ot(Td,pa,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="analytics",PE="firebase_id",OE="origin",kE=60*1e3,NE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ya="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new ra("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},We=new Cn("analytics","Analytics",LE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(e){if(!e.startsWith(ya)){const t=We.create("invalid-gtag-resource",{gtagURL:e});return xe.warn(t.message),""}return e}function Vd(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function DE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function xE(e,t){const n=DE("firebase-js-sdk-policy",{createScriptURL:ME}),r=document.createElement("script"),s=`${ya}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function FE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function UE(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const c=(await Vd(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){xe.error(a)}e("config",s,i)}async function $E(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Vd(n);for(const c of o){const l=a.find(f=>f.measurementId===c),u=l&&t[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){xe.error(i)}}function BE(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await $E(e,t,n,a,c)}else if(i==="config"){const[a,c]=o;await UE(e,t,n,r,a,c)}else if(i==="consent"){const[a,c]=o;e("consent",a,c)}else if(i==="get"){const[a,c,l]=o;e("get",a,c,l)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){xe.error(a)}}return s}function HE(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=BE(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function VE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(ya)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=30,WE=1e3;class KE{constructor(t={},n=WE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const jd=new KE;function qE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function GE(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:qE(r)},i=NE.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw We.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function zE(e,t=jd,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw We.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw We.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new XE;return setTimeout(async()=>{a.abort()},kE),Wd({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Wd(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=jd){var i;const{appId:o,measurementId:a}=e;try{await JE(r,t)}catch(c){if(a)return xe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await GE(e);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!YE(l)){if(s.deleteThrottleMetadata(o),a)return xe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Oc(n,s.intervalMillis,jE):Oc(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,f),xe.debug(`Calling attemptFetch again in ${u} millis`),Wd(e,f,r,s)}}function JE(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(We.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function YE(e){if(!(e instanceof ft)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class XE{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function QE(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(){if(kf())try{await Nf()}catch(e){return xe.warn(We.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return xe.warn(We.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eI(e,t,n,r,s,i,o){var a;const c=zE(e);c.then(m=>{n[m.measurementId]=m.appId,e.options.measurementId&&m.measurementId!==e.options.measurementId&&xe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>xe.error(m)),t.push(c);const l=ZE().then(m=>{if(m)return r.getId()}),[u,f]=await Promise.all([c,l]);VE(i)||xE(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[OE]="firebase",d.update=!0,f!=null&&(d[PE]=f),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(t){this.app=t}_delete(){return delete Sr[this.app.options.appId],Promise.resolve()}}let Sr={},ol=[];const al={};let Vi="dataLayer",nI="gtag",cl,Kd,ll=!1;function rI(){const e=[];if(Of()&&e.push("This is a browser extension environment."),O_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=We.create("invalid-analytics-context",{errorInfo:t});xe.warn(n.message)}}function sI(e,t,n){rI();const r=e.options.appId;if(!r)throw We.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)xe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw We.create("no-api-key");if(Sr[r]!=null)throw We.create("already-exists",{id:r});if(!ll){FE(Vi);const{wrappedGtag:i,gtagCore:o}=HE(Sr,ol,al,Vi,nI);Kd=i,cl=o,ll=!0}return Sr[r]=eI(e,ol,al,t,cl,Vi,n),new tI(e)}function iI(e=Ff()){e=et(e);const t=or(e,Ks);return t.isInitialized()?t.getImmediate():oI(e)}function oI(e,t={}){const n=or(e,Ks);if(n.isInitialized()){const s=n.getImmediate();if(Dr(t,n.getOptions()))return s;throw We.create("already-initialized")}return n.initialize({options:t})}function aI(e,t,n,r){e=et(e),QE(Kd,Sr[e.app.options.appId],t,n,r).catch(s=>xe.error(s))}const ul="@firebase/analytics",fl="0.10.4";function cI(){St(new ut(Ks,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return sI(r,s,n)},"PUBLIC")),St(new ut("analytics-internal",e,"PRIVATE")),ot(ul,fl),ot(ul,fl,"esm2017");function e(t){try{const n=t.getProvider(Ks).getImmediate();return{logEvent:(r,s,i)=>aI(n,r,s,i)}}catch(n){throw We.create("interop-component-reg-failed",{reason:n})}}}cI();const lI={apiKey:"AIzaSyAwTIEXjpkeBLeoSBTn_5riMFb2BXx0O1g",authDomain:"costudent-808bd.firebaseapp.com",projectId:"costudent-808bd",storageBucket:"costudent-808bd.appspot.com",messagingSenderId:"849831118304",appId:"1:849831118304:web:c75efa2fc3ff1d16885785",measurementId:"G-18V5HBXXS4"},va=xf(lI);iI(va);const To=mi(va),uI=e=>(Tn("data-v-60a80c44"),e=e(),Sn(),e),fI={class:"container"},dI={class:"loginWindow"},hI=uI(()=>Y("h1",null,"WELCOME",-1)),pI={__name:"Login",setup(e){function t(){Gv(To,s,i).then(o=>{r.push({name:"findcostudent"}),Se("success","Successfully logged in!")}).catch(o=>{switch(o.message){case"Firebase: Error (auth/invalid-credential).":Se("error","Wrong password!");break;case"Firebase: Error (auth/invalid-email).":Se("error","Wrong email adress!");break;case"Firebase: Error (auth/too-many-requests).":Se("error","Our servers are currently overloaded :(");break;default:Se("error",o.message);break}})}function n(){Kv(To,s).then(()=>{Se("success","Password reset email sent! Be sure to check your SPAM folder.")}).catch(o=>{o.message=="Firebase: Error (auth/missing-email)."&&Se("error","Enter your email adress in the 'Email' field first!")})}const r=fi();If();let s,i="";return(o,a)=>(Pe(),Tt("div",fI,[Y("div",dI,[hI,Vn(Y("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":a[0]||(a[0]=c=>_e(s)?s.value=c:s=c)},null,512),[[wt,ke(s)]]),Vn(Y("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":a[1]||(a[1]=c=>_e(i)?i.value=c:i=c),onKeydown:a[2]||(a[2]=Zo(c=>t(),["enter"]))},null,544),[[wt,ke(i)]]),Y("button",{class:"button_white",onClick:t},"Login"),Y("a",{onClick:a[3]||(a[3]=c=>n())},"Forgot password?")])]))}},gI=cr(pI,[["__scopeId","data-v-60a80c44"]]),mI=e=>(Tn("data-v-9ed1e860"),e=e(),Sn(),e),_I={class:"container"},yI={class:"loginWindow"},vI=mI(()=>Y("h1",null,"CREATE ACCOUNT",-1)),bI={__name:"Register",setup(e){function t(){qv(To,s,i).then(a=>{a.user,r.push("/FindCostudent"),Se("success","Successfully registered!")}).catch(a=>{switch(a.message){case"Firebase: Error (auth/email-already-in-use).":Se("error","An account already exists for this email!");break;case"Firebase: Error (auth/invalid-email).":Se("error","Invalid email!");break;case"Firebase: Error (auth/invalid-password).":Se("error","Invalid password!");break;case"Firebase: Password should be at least 6 characters (auth/weak-password).":Se("error","Password is too short! It should be at least 6 characters.");break;case"Firebase: Error (auth/too-many-requests).":Se("error","Our servers are currently overloaded :(");break;default:Se("error",a.message);break}})}function n(){r.push("/login")}const r=fi();If();let s,i,o="";return(a,c)=>(Pe(),Tt("div",_I,[Y("div",yI,[vI,Vn(Y("input",{type:"email",placeholder:"Email",id:"userEmail","onUpdate:modelValue":c[0]||(c[0]=l=>_e(s)?s.value=l:s=l)},null,512),[[wt,ke(s)]]),Vn(Y("input",{type:"password",placeholder:"Password",id:"userPassword","onUpdate:modelValue":c[1]||(c[1]=l=>_e(i)?i.value=l:i=l)},null,512),[[wt,ke(i)]]),Vn(Y("input",{type:"password",placeholder:"Password",id:"userPasswordConfirm","onUpdate:modelValue":c[2]||(c[2]=l=>_e(o)?o.value=l:o=l),onKeydown:c[3]||(c[3]=Zo(l=>t(),["enter"]))},null,544),[[wt,ke(o)]]),Y("button",{class:"button_white",onClick:t},"Create account"),Y("p",null,[Zn("Already have an account? "),Y("a",{onClick:n},"Login here!")])])]))}},wI=cr(bI,[["__scopeId","data-v-9ed1e860"]]),EI=e=>(Tn("data-v-01a9920f"),e=e(),Sn(),e),II={class:"container"},TI={class:"formBox"},SI=Jo('<div class="progressBar" data-v-01a9920f><p data-v-01a9920f>1</p><div class="line" data-v-01a9920f></div><p data-v-01a9920f>2</p><div class="line" data-v-01a9920f></div><p data-v-01a9920f>3</p></div><div class="itemBox" data-v-01a9920f><input type="text" id="name" placeholder="Name" data-v-01a9920f><input type="text" id="surname" placeholder="Surname (optional)" data-v-01a9920f></div><div class="itemBox" data-v-01a9920f><p data-v-01a9920f>Subject</p><input list="subjects" data-v-01a9920f><datalist id="subjects" data-v-01a9920f><option value="Economics" data-v-01a9920f></option><option value="Law" data-v-01a9920f></option><option value="Philosophy" data-v-01a9920f></option><option value="Math" data-v-01a9920f></option></datalist></div><div class="itemBox" data-v-01a9920f><p data-v-01a9920f>Location</p><input list="locations" data-v-01a9920f><datalist id="locations" data-v-01a9920f><option value="E-bib" data-v-01a9920f></option><option value="Agora" data-v-01a9920f></option><option value="Arenberg Bib" data-v-01a9920f></option></datalist></div>',4),CI={class:"itemBox",id:"date"},AI=EI(()=>Y("p",null,"Date",-1)),RI=["min"],PI=Jo('<div class="itemBox" id="time" data-v-01a9920f><div class="button" data-v-01a9920f> Morning </div><div class="button" data-v-01a9920f> Afternoon </div><div class="button" data-v-01a9920f> Evening </div></div><div class="button" data-v-01a9920f> Submit </div>',2),OI={__name:"FindCostudent",setup(e){function t(){const s=new Date,i=s.getFullYear(),o=String(s.getMonth()+1).padStart(2,"0"),a=String(s.getDate()).padStart(2,"0");return`${i}-${o}-${a}`}let n=t(),r=Gt(n);return(s,i)=>(Pe(),Tt("div",II,[Y("div",TI,[SI,Y("div",CI,[AI,Y("input",{type:"date",id:"date",min:ke(r)},null,8,RI)]),PI])]))}},kI=cr(OI,[["__scopeId","data-v-01a9920f"]]),qd=m_({history:Km("/costudentdemo/"),routes:[{path:"/",name:"home",component:Hw},{path:"/findcostudent",name:"findcostudent",component:kI,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:gI},{path:"/register",name:"register",component:wI}]});let dl=!1,ji=!1;qd.beforeEach((e,t,n)=>{const r=mi(),s=e.matched.some(i=>i.meta.requiresAuth);dl?s&&!ji?(alert("No access! You need to be logged in."),n("/login")):n():ld(r,i=>{ji=!!i,dl=!0,s&&!ji?(alert("No access! You need to be logged in."),n("/login")):n()})});const bi=cf(Pw);bi.config.globalProperties.$firebase=va;bi.use(qd);bi.use(hw,{position:"bottom-right",duration:5e3,pauseOnHover:!0});bi.mount("#app");
